import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { NbHome, NbJeda, NbQuote } from '@/assets/icon';

/**
 * Props for the TabBar component.
 * Extends the BottomTabBarProps from react-navigation.
 */
type TabBarProps = BottomTabBarProps;

/**
 * Custom TabBar component for a bottom tab navigator.
 *
 * @param {TabBarProps} props - The props for the component.
 * @returns {JSX.Element} The rendered tab bar component.
 */
export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
  const colorScheme = useColorScheme();

  /**
   * Object mapping route names to their respective icon components.
   */
  const tabBarIcons: Record<string, (props: { color: string }) => JSX.Element> = {
    index: (props) => <NbHome {...props} />,
    jeda: (props) => <NbJeda {...props} />,
    penyejuk: (props) => <NbQuote {...props} />,
  };

  return (
    <View
      style={[
        styles.tabBarContainer,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: string =
          options.tabBarLabel !== undefined
            ? (options.tabBarLabel as string)
            : options.title !== undefined
            ? (options.title as string)
            : route.name;

        // Exclude specific routes from being rendered in the tab bar
        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {tabBarIcons[route.name]({
              color: isFocused
                ? Colors[colorScheme ?? 'light'].tabIconSelected
                : Colors[colorScheme ?? 'light'].tabIconDefault,
            })}
            <Text
              style={[
                styles.tabBarLabel,
                isFocused ? styles.tabBarLabelActive : styles.tabBarLabelInactive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    gap: 20,
  },
  tabBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  tabBarLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
  },
  tabBarLabelActive: {
    fontWeight: '700',
    color: Colors['light'].tint,
  },
  tabBarLabelInactive: {
    fontWeight: '400',
    color: Colors['light'].textPrimary,
  },
});
