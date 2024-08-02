import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

/**
 * Custom hook to listen for keyboard visibility changes.
 *
 * This hook sets up listeners for keyboard visibility events, updating
 * the `isKeyboardVisible` state whenever the keyboard is shown or hidden.
 *
 * @returns {boolean} - Returns `true` if the keyboard is visible, `false` otherwise.
 */
export const useKeyboardListener = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listener for keyboard show event
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    // Listener for keyboard hide event
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Clean up the listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
