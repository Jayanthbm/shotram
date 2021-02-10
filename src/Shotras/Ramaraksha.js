/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const Ramaraksha = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <HeaderComponent
        navigation={navigation}
        back={'ShotramScreen'}
        title={'ಶ್ರೀ ರಾಮ ರಕ್ಷಾ ಸ್ತೋತ್ರಮ್'}
      />
      <SliderComponent />
      <ScrollView>
        <View
          style={{
            marginLeft: 7,
            marginRight: 1,
          }}>
          <St
            color={textColor}
            fontSize={font}
            line1={'ಓಂ ಅಸ್ಯ ಶ್ರೀ ರಾಮರಕ್ಷಾ ಸ್ತೋತ್ರಮಂತ್ರಸ್ಯ'}
            line2={'ಬುಧಕೌಶಿಕ ಋಷಿಃ'}
            line3={'ಶ್ರೀ ಸೀತಾರಾಮ ಚಂದ್ರೋದೇವತಾ'}
            line4={'ಅನುಷ್ಟುಪ್ ಛಂದಃ'}
            line5={'ಸೀತಾ ಶಕ್ತಿಃ'}
            line6={'ಶ್ರೀಮದ್ ಹನುಮಾನ್ ಕೀಲಕಂ'}
            line7={'ಶ್ರೀರಾಮಚಂದ್ರ ಪ್ರೀತ್ಯರ್ಥೇ ರಾಮರಕ್ಷಾ ಸ್ತೋತ್ರಜಪೇ ವಿನಿಯೋಗಃ ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಧ್ಯಾನಂ'}
            line2={'ಧ್ಯಾಯೇದಾಜಾನುಬಾಹುಂ ಧೃತಶರ ಧನುಷಂ ಬದ್ಧ ಪದ್ಮಾಸನಸ್ಥಂ'}
            line3={'ಪೀತಂ ವಾಸೋವಸಾನಂ ನವಕಮಲ ದಳಸ್ಪರ್ಥಿ ನೇತ್ರಂ ಪ್ರಸನ್ನಂ|'}
            line4={'ವಾಮಾಂಕಾರೂಢ ಸೀತಾಮುಖ ಕಮಲಮಿಲಲ್ಲೋಚನಂ ನೀರದಾಭಂ'}
            line5={'ನಾನಾಲಂಕಾರ ದೀಪ್ತಂ ದಧತಮುರು ಜಟಾಮಂಡಲಂ ರಾಮಚಂದ್ರಂ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸ್ತೋತ್ರಂ'}
            line2={'ಚರಿತಂ ರಘುನಾಥಸ್ಯ ಶತಕೋಟಿ ಪ್ರವಿಸ್ತರಂ|'}
            line3={'ಏಕೈಕಮಕ್ಷರಂ ಪುಂಸಾಂ ಮಹಾಪಾತಕ ನಾಶನಂ‖ 1 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಧ್ಯಾತ್ವಾ ನೀಲೋತ್ಪಲ ಶ್ಯಾಮಂ ರಾಮಂ ರಾಜೀವಲೋಚನಂ|'}
            line2={'ಜಾನಕೀ ಲಕ್ಷ್ಮಣೋಪೇತಂ ಜಟಾಮುಕುಟ ಮಂಡಿತಂ‖ 2 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸಾಸಿತೂಣ ಧನುರ್ಬಾಣ ಪಾಣಿಂ ನಕ್ತಂ ಚರಾಂತಕಂ|'}
            line2={'ಸ್ವಲೀಲಯಾ ಜಗತ್ತ್ರಾತು ಮಾವಿರ್ಭೂತಮಜಂ ವಿಭುಂ‖ 3 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮರಕ್ಷಾಂ ಪಠೇತ್ಪ್ರಾಜ್ಞಃ ಪಾಪಘ್ನೀಂ ಸರ್ವಕಾಮದಾಂ|'}
            line2={'ಶಿರೋ ಮೇ ರಾಘವಃ ಪಾತು ಫಾಲಂ ದಶರಥಾತ್ಮಜಃ ‖ 4 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಕೌಸಲ್ಯೇಯೋ ದೃಶೌಪಾತು ವಿಶ್ವಾಮಿತ್ರಪ್ರಿಯಃ ಶೃತೀ |'}
            line2={'ಘ್ರಾಣಂ ಪಾತು ಮಖತ್ರಾತಾ ಮುಖಂ ಸೌಮಿತ್ರಿವತ್ಸಲಃ ‖ 5 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಜಿಹ್ವಾಂ ವಿದ್ಯಾನಿಧಿಃ ಪಾತು ಕಂಠಂ ಭರತವಂದಿತಃ |'}
            line2={'ಸ್ಕಂಧೌ ದಿವ್ಯಾಯುಧಃ ಪಾತು ಭುಜೌ ಭಗ್ನೇಶಕಾರ್ಮುಕಃ ‖ 6 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಕರೌ ಸೀತಾಪತಿಃ ಪಾತು ಹೃದಯಂ ಜಾಮದಗ್ನ್ಯಜಿತ್ |'}
            line2={'ಮಧ್ಯಂ ಪಾತು ಖರಧ್ವಂಸೀ ನಾಭಿಂ ಜಾಂಬವದಾಶ್ರಯಃ ‖ 7 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸುಗ್ರೀವೇಶಃ ಕಟಿಂ ಪಾತು ಸಕ್ಥಿನೀ ಹನುಮತ್-ಪ್ರಭುಃ |'}
            line2={'ಊರೂ ರಘೂತ್ತಮಃ ಪಾತು ರಕ್ಷಃಕುಲ ವಿನಾಶಕೃತ್ ‖ 8 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಜಾನುನೀ ಸೇತುಕೃತ್-ಪಾತು ಜಂಘೇ ದಶಮುಖಾಂತಕಃ |'}
            line2={'ಪಾದೌ ವಿಭೀಷಣಶ್ರೀದಃ ಪಾತು ರಾಮೋಽಖಿಲಂ ವಪುಃ ‖ 9 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಏತಾಂ ರಾಮಬಲೋಪೇತಾಂ ರಕ್ಷಾಂ ಯಃ ಸುಕೃತೀ ಪಠೇತ್ |'}
            line2={'ಸ ಚಿರಾಯುಃ ಸುಖೀ ಪುತ್ರೀ ವಿಜಯೀ ವಿನಯೀ ಭವೇತ್ ‖ 10 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಪಾತಾಳ-ಭೂತಲ-ವ್ಯೋಮ-ಚಾರಿಣ-ಶ್ಚದ್ಮ-ಚಾರಿಣಃ |'}
            line2={'ನ ದ್ರಷ್ಟುಮಪಿ ಶಕ್ತಾಸ್ತೇ ರಕ್ಷಿತಂ ರಾಮನಾಮಭಿಃ ‖ 11 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮೇತಿ ರಾಮಭದ್ರೇತಿ ರಾಮಚಂದ್ರೇತಿ ವಾ ಸ್ಮರನ್ |'}
            line2={'ನರೋ ನ ಲಿಪ್ಯತೇ ಪಾಪೈರ್ಭುಕ್ತಿಂ ಮುಕ್ತಿಂ ಚ ವಿಂದತಿ ‖ 12 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಜಗಜ್ಜೈತ್ರೈಕ ಮಂತ್ರೇಣ ರಾಮನಾಮ್ನಾಭಿ ರಕ್ಷಿತಂ|'}
            line2={'ಯಃ ಕಂಠೇ ಧಾರಯೇತ್ತಸ್ಯ ಕರಸ್ಥಾಃ ಸರ್ವಸಿದ್ಧಯಃ ‖ 13 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಜ್ರಪಂಜರ ನಾಮೇದಂ ಯೋ ರಾಮಕವಚಂ ಸ್ಮರೇತ್ |'}
            line2={'ಅವ್ಯಾಹತಾಜ್ಞಃ ಸರ್ವತ್ರ ಲಭತೇ ಜಯಮಂಗಳಂ‖ 14 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಆದಿಷ್ಟವಾನ್-ಯಥಾ ಸ್ವಪ್ನೇ ರಾಮರಕ್ಷಾಮಿಮಾಂ ಹರಃ |'}
            line2={'ತಥಾ ಲಿಖಿತವಾನ್-ಪ್ರಾತಃ ಪ್ರಬುದ್ಧೌ ಬುಧಕೌಶಿಕಃ ‖ 15 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಆರಾಮಃ ಕಲ್ಪವೃಕ್ಷಾಣಾಂ ವಿರಾಮಃ ಸಕಲಾಪದಾಂ|'}
            line2={'ಅಭಿರಾಮ-ಸ್ತ್ರಿಲೋಕಾನಾಂ ರಾಮಃ ಶ್ರೀಮಾನ್ ಸ ನಃ ಪ್ರಭುಃ ‖ 16 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ತರುಣೌ ರೂಪಸಂಪನ್ನೌ ಸುಕುಮಾರೌ ಮಹಾಬಲೌ |'}
            line2={'ಪುಂಡರೀಕ ವಿಶಾಲಾಕ್ಷೌ ಚೀರಕೃಷ್ಣಾಜಿನಾಂಬರೌ ‖ 17 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಫಲಮೂಲಾಶಿನೌ ದಾಂತೌ ತಾಪಸೌ ಬ್ರಹ್ಮಚಾರಿಣೌ |'}
            line2={'ಪುತ್ರೌ ದಶರಥಸ್ಯೈತೌ ಭ್ರಾತರೌ ರಾಮಲಕ್ಷ್ಮಣೌ ‖ 18 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶರಣ್ಯೌ ಸರ್ವಸತ್ತ್ವಾನಾಂ ಶ್ರೇಷ್ಠೌ ಸರ್ವಧನುಷ್ಮತಾಂ|'}
            line2={'ರಕ್ಷಃಕುಲ ನಿಹಂತಾರೌ ತ್ರಾಯೇತಾಂ ನೋ ರಘೂತ್ತಮೌ ‖ 19 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಆತ್ತ ಸಜ್ಯ ಧನುಷಾ ವಿಷುಸ್ಪೃಶಾ ವಕ್ಷಯಾಶುಗ ನಿಷಂಗ ಸಂಗಿನೌ |'}
            line2={'ರಕ್ಷಣಾಯ ಮಮ ರಾಮಲಕ್ಷಣಾವಗ್ರತಃ ಪಥಿ ಸದೈವ ಗಚ್ಛತಾಂ ‖ 20 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸನ್ನದ್ಧಃ ಕವಚೀ ಖಡ್ಗೀ ಚಾಪಬಾಣಧರೋ ಯುವಾ |'}
            line2={
              'ಗಚ್ಛನ್ ಮನೋರಥಾನ್ನಶ್ಚ (ಮನೋರಥೋಽಸ್ಮಾಕಂ) ರಾಮಃ ಪಾತು ಸ ಲಕ್ಷ್ಮಣಃ ‖ 21 ‖'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮೋ ದಾಶರಥಿ ಶ್ಶೂರೋ ಲಕ್ಷ್ಮಣಾನುಚರೋ ಬಲೀ |'}
            line2={'ಕಾಕುತ್ಸಃ ಪುರುಷಃ ಪೂರ್ಣಃ ಕೌಸಲ್ಯೇಯೋ ರಘೂತ್ತಮಃ ‖ 22 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವೇದಾಂತವೇದ್ಯೋ ಯಜ್ಞೇಶಃ ಪುರಾಣ ಪುರುಷೋತ್ತಮಃ |'}
            line2={'ಜಾನಕೀವಲ್ಲಭಃ ಶ್ರೀಮಾನಪ್ರಮೇಯ ಪರಾಕ್ರಮಃ ‖ 23 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಇತ್ಯೇತಾನಿ ಜಪೇನ್ನಿತ್ಯಂ ಮದ್ಭಕ್ತಃ ಶ್ರದ್ಧಯಾನ್ವಿತಃ |'}
            line2={'ಅಶ್ವಮೇಧಾಧಿಕಂ ಪುಣ್ಯಂ ಸಂಪ್ರಾಪ್ನೋತಿ ನ ಸಂಶಯಃ ‖ 24 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮಂ ದೂರ್ವಾದಳ ಶ್ಯಾಮಂ ಪದ್ಮಾಕ್ಷಂ ಪೀತವಾಸಸಂ|'}
            line2={'ಸ್ತುವಂತಿ ನಾಭಿ-ರ್ದಿವ್ಯೈ-ರ್ನತೇ ಸಂಸಾರಿಣೋ ನರಾಃ ‖ 25 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮಂ ಲಕ್ಷ್ಮಣ ಪೂರ್ವಜಂ ರಘುವರಂ ಸೀತಾಪತಿಂ ಸುಂದರಂ'}
            line2={'ಕಾಕುತ್ಸ್ಥಂ ಕರುಣಾರ್ಣವಂ ಗುಣನಿಧಿಂ ವಿಪ್ರಪ್ರಿಯಂ ಧಾರ್ಮಿಕಂ|'}
            line3={'ರಾಜೇಂದ್ರಂ ಸತ್ಯಸಂಧಂ ದಶರಥತನಯಂ ಶ್ಯಾಮಲಂ ಶಾಂತಮೂರ್ತಿಂ'}
            line4={'ವಂದೇ ಲೋಕಾಭಿರಾಮಂ ರಘುಕುಲ ತಿಲಕಂ ರಾಘವಂ ರಾವಣಾರಿಂ‖ 26 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮಾಯ ರಾಮಭದ್ರಾಯ ರಾಮಚಂದ್ರಾಯ ವೇಧಸೇ |'}
            line2={'ರಘುನಾಥಾಯ ನಾಥಾಯ ಸೀತಾಯಾಃ ಪತಯೇ ನಮಃ ‖ 27 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀರಾಮ ರಾಮ ರಘುನಂದನ ರಾಮ ರಾಮ'}
            line2={'ಶ್ರೀರಾಮ ರಾಮ ಭರತಾಗ್ರಜ ರಾಮ ರಾಮ |'}
            line3={'ಶ್ರೀರಾಮ ರಾಮ ರಣಕರ್ಕಶ ರಾಮ ರಾಮ'}
            line4={'ಶ್ರೀರಾಮ ರಾಮ ಶರಣಂ ಭವ ರಾಮ ರಾಮ ‖ 28 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀರಾಮ ಚಂದ್ರ ಚರಣೌ ಮನಸಾ ಸ್ಮರಾಮಿ'}
            line2={'ಶ್ರೀರಾಮ ಚಂದ್ರ ಚರಣೌ ವಚಸಾ ಗೃಹ್ಣಾಮಿ |'}
            line3={'ಶ್ರೀರಾಮ ಚಂದ್ರ ಚರಣೌ ಶಿರಸಾ ನಮಾಮಿ'}
            line4={'ಶ್ರೀರಾಮ ಚಂದ್ರ ಚರಣೌ ಶರಣಂ ಪ್ರಪದ್ಯೇ ‖ 29 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಮಾತಾ ರಾಮೋ ಮತ್-ಪಿತಾ ರಾಮಚಂದ್ರಃ'}
            line2={'ಸ್ವಾಮೀ ರಾಮೋ ಮತ್-ಸಖಾ ರಾಮಚಂದ್ರಃ |'}
            line3={'ಸರ್ವಸ್ವಂ ಮೇ ರಾಮಚಂದ್ರೋ ದಯಾಳುಃ'}
            line4={'ನಾನ್ಯಂ ಜಾನೇ ನೈವ ನ ಜಾನೇ ‖ 30 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ದಕ್ಷಿಣೇ ಲಕ್ಷ್ಮಣೋ ಯಸ್ಯ ವಾಮೇ ಚ (ತು) ಜನಕಾತ್ಮಜಾ |'}
            line2={'ಪುರತೋ ಮಾರುತಿರ್ಯಸ್ಯ ತಂ ವಂದೇ ರಘುನಂದನಂ‖ 31 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಲೋಕಾಭಿರಾಮಂ ರಣರಂಗಧೀರಂ'}
            line2={'ರಾಜೀವನೇತ್ರಂ ರಘುವಂಶನಾಥಂ|'}
            line3={'ಕಾರುಣ್ಯರೂಪಂ ಕರುಣಾಕರಂ ತಂ'}
            line4={'ಶ್ರೀರಾಮಚಂದ್ರಂ ಶರಣ್ಯಂ ಪ್ರಪದ್ಯೇ ‖ 32 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಮನೋಜವಂ ಮಾರುತ ತುಲ್ಯ ವೇಗಂ'}
            line2={'ಜಿತೇಂದ್ರಿಯಂ ಬುದ್ಧಿಮತಾಂ ವರಿಷ್ಟಂ|'}
            line3={'ವಾತಾತ್ಮಜಂ ವಾನರಯೂಥ ಮುಖ್ಯಂ'}
            line4={'ಶ್ರೀರಾಮದೂತಂ ಶರಣಂ ಪ್ರಪದ್ಯೇ ‖ 33 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಕೂಜಂತಂ ರಾಮರಾಮೇತಿ ಮಧುರಂ ಮಧುರಾಕ್ಷರಂ|'}
            line2={'ಆರುಹ್ಯಕವಿತಾ ಶಾಖಾಂ ವಂದೇ ವಾಲ್ಮೀಕಿ ಕೋಕಿಲಂ‖ 34 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಆಪದಾಮಪಹರ್ತಾರಂ ದಾತಾರಂ ಸರ್ವಸಂಪದಾಂ|'}
            line2={'ಲೋಕಾಭಿರಾಮಂ ಶ್ರೀರಾಮಂ ಭೂಯೋಭೂಯೋ ನಮಾಮ್ಯಹಂ ‖ 35 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಭರ್ಜನಂ ಭವಬೀಜಾನಾಮರ್ಜನಂ ಸುಖಸಂಪದಾಂ|'}
            line2={'ತರ್ಜನಂ ಯಮದೂತಾನಾಂ ರಾಮ ರಾಮೇತಿ ಗರ್ಜನಂ‖ 36 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮೋ ರಾಜಮಣಿಃ ಸದಾ ವಿಜಯತೇ ರಾಮಂ ರಮೇಶಂ ಭಜೇ'}
            line2={'ರಾಮೇಣಾಭಿಹತಾ ನಿಶಾಚರಚಮೂ ರಾಮಾಯ ತಸ್ಮೈ ನಮಃ |'}
            line3={'ರಾಮಾನ್ನಾಸ್ತಿ ಪರಾಯಣಂ ಪರತರಂ ರಾಮಸ್ಯ ದಾಸೋಸ್ಮ್ಯಹಂ'}
            line4={'ರಾಮೇ ಚಿತ್ತಲಯಃ ಸದಾ ಭವತು ಮೇ ಭೋ ರಾಮ ಮಾಮುದ್ಧರ ‖ 37 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀರಾಮ ರಾಮ ರಾಮೇತಿ ರಮೇ ರಾಮೇ ಮನೋರಮೇ |'}
            line2={'ಸಹಸ್ರನಾಮ ತತ್ತುಲ್ಯಂ ರಾಮ ನಾಮ ವರಾನನೇ ‖ 38 ‖'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={
              'ಇತಿ ಶ್ರೀಬುಧಕೌಶಿಕಮುನಿ ವಿರಚಿತಂ ಶ್ರೀರಾಮ ರಕ್ಷಾಸ್ತೋತ್ರಂ ಸಂಪೂರ್ಣಂ |'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀರಾಮ ಜಯರಾಮ ಜಯಜಯರಾಮ |'}
          />
        </View>
      </ScrollView>

      <Admob />
    </View>
  );
};

export default Ramaraksha;
