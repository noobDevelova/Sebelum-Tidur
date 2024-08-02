import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';

/**
 * TabLayout component configures the tab navigation for the application.
 *
 * It uses the `Tabs` component from `expo-router` to create a tab-based navigation structure.
 * It sets a custom tab bar component (`TabBar`) for handling the tab navigation UI.
 *
 * The component defines three screens:
 * - `index` with the title "Beranda"
 * - `jeda` with the title "Jeda Sejenak"
 * - `penyejuk` with the title "Penyejuk"
 *
 * All screens have their headers hidden.
 *
 * @returns {JSX.Element} - The rendered TabLayout component with tab navigation.
 */
export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="jeda"
        options={{
          title: 'Jeda Sejenak',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="penyejuk"
        options={{
          title: 'Penyejuk',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
