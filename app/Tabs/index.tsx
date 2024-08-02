import { View } from 'react-native';
import { Sparkle, TextLogo } from '@/assets/icon';
import { MainContainer } from '@/components/Containers/MainContainer';
import { Container } from '@/components/Containers/Container';
import DynamicText from '@/components/DynamicText';
import { Colors } from '@/constants/Colors';
import { DynamicButton } from '@/components/DynamicButton';

/**
 * BerandaScreen component serves as the main welcome screen of the application.
 *
 * It features:
 * - A logo at the top
 * - A heading and subtitle with decorative icons
 * - A call-to-action section with a button to navigate to the next screen
 *
 * @returns {JSX.Element} - The rendered BerandaScreen component.
 */
export default function BerandaScreen() {
  return (
    <MainContainer backgroundColor={Colors['light'].background}>
      {/* Logo Section */}
      <Container variant="row" position="center" marginTop={30} marginBottom={65}>
        <TextLogo />
      </Container>

      {/* Main Content */}
      <Container
        variant="column"
        position="center"
        gap={13}
        style={{ paddingHorizontal: 6 }}
        marginBottom={40}
      >
        <Container style={{ paddingHorizontal: 15 }}>
          <View>
            {/* Decorative Sparkle Icons */}
            <Sparkle style={{ position: 'absolute', left: 5 }} />
            <DynamicText
              value={`Siap Untuk \n Refleksi Hari Ini?`}
              variant="D-sm"
              weight={'bold'}
              textStyle={{ color: Colors['light'].textPrimary, textAlign: 'center' }}
            />
            <Sparkle style={{ position: 'absolute', right: 0, bottom: 40 }} />
          </View>
        </Container>
        <DynamicText
          value="Temukan Kebaikan dalam Setiap Harimu dan Rencanakan untuk Menjadi Lebih Baik Besok!"
          variant="Text-small"
          weight={'regular'}
          textStyle={{ color: Colors['light'].textGray, textAlign: 'center' }}
        />
      </Container>

      {/* Call-to-Action Section */}
      <Container
        variant="column"
        position="center"
        gap={56}
        style={{
          paddingHorizontal: 24,
          paddingTop: 40,
          paddingBottom: 30,
          borderWidth: 1,
          borderColor: '#E0EAFF',
          borderRadius: 8,
        }}
      >
        <DynamicText
          value={`Mulai Sekarang dengan Menjawab Pertanyaan`}
          variant="Text-xl"
          weight={'bold'}
          textStyle={{ color: Colors['light'].tint, textAlign: 'center' }}
        />
        <DynamicButton
          screenName="Tabs/jeda"
          title="Mulai Sekarang"
          active={true}
          size="lg"
          variant="primary"
          style={{ marginHorizontal: 20 }}
        />
      </Container>
    </MainContainer>
  );
}
