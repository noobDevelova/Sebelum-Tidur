import { Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { MainContainer } from '@/components/Containers/MainContainer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Container } from '@/components/Containers/Container';
import { Logo, TextLogo } from '@/assets/icon';
import DynamicText from '@/components/DynamicText';
import { DynamicButton } from '@/components/DynamicButton';
import matrics from '@/constants/ScreenDimensions';

/**
 * LoaderScreen component that displays a loading screen with animated elements.
 *
 * This screen features an animated entrance for the logo and text, as well as a button
 * that navigates to the main application tabs.
 *
 * It utilizes the `useColorScheme` hook to adapt the color scheme based on the user's
 * system settings (light or dark mode) and uses React Native's `Animated` API to create
 * smooth entrance animations.
 *
 * @returns {JSX.Element} - The rendered LoaderScreen component.
 */
export default function LoaderScreen() {
  // Get the current color scheme (light or dark)
  const colorScheme = useColorScheme();

  // Create animated values for translateY and opacity
  const translateY = useRef(new Animated.Value(matrics.screenHeight / 2 - 50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Define and start the sequence of animations
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, opacity]);

  return (
    <MainContainer backgroundColor={Colors[colorScheme ?? 'light'].background}>
      <Container variant="row" position="center" marginTop={30}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <TextLogo />
        </Animated.View>
      </Container>

      <Animated.View style={{ opacity }}>
        <Container variant="row" position="center" marginTop={99}>
          <Logo />
        </Container>
        <Container variant="column" marginTop={99} gap={13}>
          <DynamicText
            value="Hii, Selamat Datang di"
            variant="Text-md"
            weight={'regular'}
            textStyle={{ color: Colors['light'].textPrimary }}
          />
          <DynamicText
            value="Sebelum Tidur"
            variant="D-md"
            weight={'bold'}
            textStyle={{ color: Colors['light'].textPrimary }}
          />
          <DynamicText
            value="Bersiaplah untuk perjalanan refleksi seru setiap hari, di mana Anda bisa merenung, beristirahat, dan menemukan kedamaian dalam diri."
            variant="Text-md"
            weight={'regular'}
            textStyle={{ color: Colors['light'].textGray }}
          />
        </Container>
        <Container variant="column" marginTop={30}>
          <DynamicButton
            screenName="Tabs"
            title="Mari Kita Mulai"
            variant="primary"
            active={true}
            size="lg"
          />
        </Container>
      </Animated.View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({});
