import React from 'react';
import { MainContainer } from '@/components/Containers/MainContainer';
import { Colors } from '@/constants/Colors';
import { Container } from '@/components/Containers/Container';
import DynamicText from '@/components/DynamicText';
import { NbQuote } from '@/assets/icon';
import { DynamicButton } from '@/components/DynamicButton';
import LottieView from 'lottie-react-native';

/**
 * PenyejukScreen component displays a calming message with animations and a button.
 *
 * It includes:
 * - A header with title and subtitle
 * - Animated LottieView components for visual effect
 * - An inspirational quote
 * - A button to navigate back to the main tabs
 *
 * @returns {JSX.Element} - The rendered PenyejukScreen component.
 */
export default function PenyejukScreen() {
  return (
    <MainContainer backgroundColor={Colors['light'].background}>
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
            value="Penyejuk"
            variant="D-sm"
            weight={'bold'}
            textStyle={{ color: Colors['light'].tint }}
          />
          <NbQuote color={Colors['light'].tint} width={24} height={24} />
        </Container>
        <DynamicText
          value="Pesan Damai untuk Pikiran Anda"
          variant="Text-small"
          weight={'regular'}
          textStyle={{ color: Colors['light'].textGray, textAlign: 'center' }}
        />
      </Container>

      {/* Main Content Section */}
      <Container
        variant="column"
        gap={10}
        style={{
          paddingHorizontal: 35,
          paddingTop: 17,
          paddingBottom: 20,
          borderWidth: 1,
          borderColor: '#E0EAFF',
          borderRadius: 8,
        }}
      >
        {/* Lottie Animation and Inspirational Quote */}
        <LottieView
          style={{ alignSelf: 'flex-start', width: 25, height: 25 }}
          source={require('../../assets/animations/sparkles.json')}
          autoPlay
          loop
        />
        <DynamicText
          value={
            '“Ketika kamu bangun di pagi \nhari, pikirkan tentang betapa \nberharganya hak istimewa untuk \nhidup, bernapas, berpikir, \nmenikmati, dan mencintai.”'
          }
          variant="Text-md"
          weight={'medium'}
          textStyle={{ color: Colors['light'].textPrimary, textAlign: 'center' }}
        />
        <LottieView
          style={{ alignSelf: 'flex-end', width: 25, height: 25 }}
          source={require('../../assets/animations/sparkles.json')}
          autoPlay
          loop
        />
        <DynamicButton
          title="Tutup"
          size="sm"
          variant="secondary"
          screenName="Tabs"
          style={{ alignSelf: 'center' }}
        />
      </Container>
    </MainContainer>
  );
}
