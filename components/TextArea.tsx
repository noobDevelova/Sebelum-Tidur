import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { Container } from './Containers/Container';
import { DynamicButton } from './DynamicButton';
import DynamicText from './DynamicText';
import Fonts from '@/constants/Fonts';

/**
 * Props for the TextArea component.
 */
type TextAreaProps = {
  value: string;
  onChange: (text: string) => void;
  style?: ViewStyle;
  currentStep: number;
  handleAction: () => void;
  handleBack: () => void;
};

/**
 * TextArea component for multi-line text input with dynamic buttons for navigation.
 *
 * @param {TextAreaProps} props - The props for the component.
 * @returns {JSX.Element} The rendered text area component.
 */
export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  style,
  currentStep,
  handleAction,
  handleBack,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Handles the focus event for the TextInput.
   */
  const handleFocus = () => {
    setIsFocused(true);
  };

  /**
   * Handles the blur event for the TextInput.
   */
  const handleBlur = () => {
    if (value === '') setIsFocused(false);
  };

  /**
   * Handles the press event for the placeholder.
   */
  const handlePressPlaceholder = () => {
    setIsFocused(true);
  };

  /**
   * Dismisses the keyboard when called.
   */
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <View>
        <Container style={styles.inputContainer} variant="column">
          {value === '' && (
            <Pressable onPress={handlePressPlaceholder}>
              <DynamicText
                value={'Tuliskan jawaban anda disini....'}
                variant="Text-md"
                weight={'regular'}
                textStyle={{ color: '#98A2B3', position: 'absolute' }}
              />
            </Pressable>
          )}
          <TextInput
            multiline={true}
            numberOfLines={16}
            value={value}
            onChangeText={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            textAlignVertical={'top'}
            style={{ fontSize: Fonts.size.font14, fontWeight: 'regular', lineHeight: 20 }}
          />
          <Container variant="row" position={currentStep < 2 ? 'flex-end' : 'space-between'}>
            {currentStep > 1 && (
              <DynamicButton
                title="Sebelumnya"
                active={true}
                size="sm"
                variant="secondary"
                onPress={handleBack}
              />
            )}
            <DynamicButton
              title="Selanjutnya"
              active={value !== ''}
              size="sm"
              variant="primary"
              onPress={handleAction}
            />
          </Container>
        </Container>
      </View>
    </TouchableWithoutFeedback>
  );
};

/**
 * Styles for the TextArea component.
 */
const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0EAFF',
    borderRadius: 8,
  },
});
