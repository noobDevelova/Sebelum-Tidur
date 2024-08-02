import { StyleSheet, Image, Platform } from 'react-native';
import { MainContainer } from '@/components/Containers/MainContainer';
import { Container } from '@/components/Containers/Container';
import DynamicText from '@/components/DynamicText';
import { NbJeda } from '@/assets/icon';
import { Colors } from '@/constants/Colors';
import Tracker from '@/components/Tracker/Tracker';
import { ActiveStatus } from '@/constants/Types';
import { TextArea } from '@/components/TextArea';
import { useState } from 'react';
import { router } from 'expo-router';

/**
 * JedaScreen component provides a multi-step reflection process for the user.
 *
 * It includes:
 * - A header section with title and icon
 * - A tracker showing current step
 * - Conditional rendering of questions and input areas based on the current step
 *
 * @returns {JSX.Element} - The rendered JedaScreen component.
 */
export default function JedaScreen() {
  // State hooks for text input and current step
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');
  const [textValue3, setTextValue3] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // Handle advancing to the next step or navigating to another screen
  const handleAnswer = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3 && textValue3 !== '') {
      router.push('Tabs/penyejuk'); // Navigate to the next screen
      setCurrentStep(1); // Reset to the first step

      // Clear text values
      setTextValue1('');
      setTextValue2('');
      setTextValue3('');
    }
  };

  // Handle going back to the previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <MainContainer style={{ backgroundColor: Colors['light'].background }}>
      {/* Header Section */}
      <Container
        variant="column"
        position="center"
        gap={13}
        style={{ alignItems: 'center' }}
        marginTop={30}
        marginBottom={24}
      >
        <Container variant="row" position="center" gap={13} style={{ alignItems: 'center' }}>
          <DynamicText
            value="Jeda Sejenak"
            variant="D-sm"
            weight={'bold'}
            textStyle={{ color: Colors['light'].tint }}
          />
          <NbJeda color={Colors['light'].tint} width={24} height={24} />
        </Container>
        <DynamicText
          value="Luangkan waktu sejenak untuk merenungkan hari Anda."
          variant="Text-small"
          weight={'regular'}
          textStyle={{ color: Colors['light'].textGray, textAlign: 'center' }}
        />
      </Container>

      {/* Tracker Section */}
      <Container variant="column" marginBottom={30}>
        <Tracker
          isActivePoint1={currentStep >= 1 ? ActiveStatus.Active : ActiveStatus.InActive}
          isActivePoint2={currentStep >= 2 ? ActiveStatus.Active : ActiveStatus.InActive}
          isActivePoint3={currentStep >= 3 ? ActiveStatus.Active : ActiveStatus.InActive}
        />
      </Container>

      {/* Conditional Rendering Based on Current Step */}
      {currentStep === 1 && (
        <>
          <Container variant="column" marginBottom={30}>
            <DynamicText
              value={'“Ada kebaikan apa yang sudah \n Anda lakukan hari ini?”'}
              variant="Text-lg"
              weight={'bold'}
              textStyle={{ color: Colors['light'].textPrimary, textAlign: 'center' }}
            />
          </Container>

          <Container variant="column">
            <TextArea
              value={textValue1}
              onChange={setTextValue1}
              currentStep={currentStep}
              handleAction={handleAnswer}
              handleBack={handleBack}
            />
          </Container>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Container variant="column" marginBottom={30}>
            <DynamicText
              value={'“Apa yang membuat hari Anda \n terasa sulit atau menantang?”'}
              variant="Text-lg"
              weight={'bold'}
              textStyle={{ color: Colors['light'].textPrimary, textAlign: 'center' }}
            />
          </Container>

          <Container variant="column">
            <TextArea
              value={textValue2}
              onChange={setTextValue2}
              currentStep={currentStep}
              handleAction={handleAnswer}
              handleBack={handleBack}
            />
          </Container>
        </>
      )}

      {currentStep === 3 && (
        <>
          <Container variant="column" marginBottom={30}>
            <DynamicText
              value={'“Apa yang ingin Anda lakukan \n lebih baik atau berbeda besok?”'}
              variant="Text-lg"
              weight={'bold'}
              textStyle={{ color: Colors['light'].textPrimary, textAlign: 'center' }}
            />
          </Container>

          <Container variant="column">
            <TextArea
              value={textValue3}
              onChange={setTextValue3}
              currentStep={currentStep}
              handleAction={handleAnswer}
              handleBack={handleBack}
            />
          </Container>
        </>
      )}
    </MainContainer>
  );
}
