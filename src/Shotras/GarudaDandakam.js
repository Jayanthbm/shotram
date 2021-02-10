/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const GarudaDandakam = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <HeaderComponent
        navigation={navigation}
        back={'ShotramScreen'}
        title={'ಶ್ರೀ ಗರುಡ ದಂಡಕಂ'}
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
            line1={'ಶ್ರೀಮಾನ್ ವೇಙ್ಕಟನಾಥಾರ್ಯಃ ಕವಿತಾರ್ಕಿಕಕೇಸರೀ |'}
            line2={'ವೇದಾನ್ತಚಾರ್ಯವರ್ಯೋ ಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾಹೃದಿ ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ನಮಃ ಪನ್ನಗನದ್ಧಾಯ ವೈಕುಣ್ಠವಶವರ್ತಿನೇ |'}
            line2={'ಶ್ರುತಿಸಿನ್ಧುಸುಧೋತ್ಪಾದಮನ್ದರಾಯ ಗರುತ್ಮತೇ ||'}
            line3={
              'ಗರುಡಮಖಿಲ ವೇದ ನೀಡಾಧಿರೂಢಂ ದ್ವಿಷತ್ ಪೀಡನೋತ್ ಕಣ್ಠಿತಾಕುಣ್ಠ ವೈಕುಣ್ಠ ಪೀಠೀಕೃತ'
            }
            line4={
              'ಸ್ಕನ್ಧಮೀಡೇ ಸ್ವನೀಡಾಗತಿ ಪ್ರೀತ ರುದ್ರಾ ಸುಕೀರ್ತಿ-ಸ್ತನಾಭೋಗ ಗಾಢೋಪ ಗೂಢ ಸ್ಫುರತ್ಕಣ್ಟಕವ್ರಾತ ವೇಧವ್ಯಥಾ ವೇಪಮಾನ ದ್ವಿಜಿಹ್ವಾಧಿಪಾಕಲ್ಪ ವಿಷ್ಫಾರ್ಯಮಾಣ ಸ್ಫಟಾ ವಾಟಿಕಾ ರತ್ನ ರೋಚಿಶ್ಛಟಾ ರಾಜಿನೀರಾಜಿತಂ ಕಾನ್ತಿ ಕಲ್ಲೋಲಿನೀ ರಾಜಿತಮ್ || ೧ ||'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಜಯ ಗರುಡ ಸುಪರ್ಣ ದರ್ವೀಕರಾಹಾರ ದೇವಾಧಿಪಾಹಾರ ಹಾರಿನ್'}
            line2={
              'ಪತಿ ಕ್ಷಿಪ್ತ ದಂಭೋಳಿ ಧಾರಾ ಕಿಣಾಕಲ್ಪ ಕಲ್ಪಾನ್ತ ವಾತೂಲ ಕಲ್ಪೋದಯಾನಲ್ಪ'
            }
            line3={
              'ವೀರಾಯಿತೋದ್ಯಚ್ಚಮತ್ಕಾರ ದೈತ್ಯಾರಿಜೈತ್ರ ಧ್ವಜಾರೋಹ ನಿರ್ಧಾರಿತೋತ್ಕರ್ಷ'
            }
            line4={
              'ಸಂಕರ್ಷಣಾತ್ಮನ್ ಗರುತ್ಮನ್ ಮರುತ್ಪಞ್ಚಕಾಧೀಶ ಸತ್ಯಾದಿಮೂರ್ತೇ ನ ಕಶ್ಚಿತ್'
            }
            line5={'ಸಮಸ್ತೇ ನಮಸ್ತೇ ಪುನಸ್ತೇ ನಮಃ || ೨ |'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={
              'ನಮ ಇದಮಜಹತ್ ಸಪರ್ಯಾಯ ಪರ್ಯಾಯ ನಿರ್ಯಾತ ಪಕ್ಷಾನಿಲಾಸ್ಫಾಲನೋದ್ವೇಲ ಪಾಥೋಧಿ'
            }
            line2={
              'ವೀಚೀಚಪೇಟಾಹತಾಗಾಧ ಪಾತಾಳ ಭಾಙ್ಕಾರ ಸಂಕ್ರುದ್ಧ ನಾಗೇನ್ದ್ರ ಪೀಡಾಸೃಣೀಭಾವ ಭಾಸ್ವನ್ನಖಶ್ರೇಣಯೇ ಚಣ್ಡತುಣ್ಡಾಯ ನೃತ್ಯದ್ಭುಜಙ್ಗಭ್ರುವೇ ವಜ್ರಿಣೇ ದಂಷ್ಟ್ರಯಾ ತುಭ್ಯಮಧ್ಯಾತ್ಮವಿದ್ಯಾ ವಿಧೇಯಾ ವಿಧೇಯಾ ಭವದ್ದಾಸ್ಯಮಾಪಾದಯೇಥಾ ದಯೇಥಾಶ್ಚ ಮೇ || ೩ ||'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={
              'ಮನುರನುಗತ ಪಕ್ಷಿವಕ್ತ್ರ ಸ್ಫುರತ್ತಾರಕಸ್ತಾವಕಶ್ಚಿತ್ರಭಾನು ಪ್ರಿಯಾ ಶೇಖರಸ್ತ್ರಾಯತಾಂ'
            }
            line2={
              'ನಸ್ತ್ರಿವರ್ಗಾಪವರ್ಗ ಪ್ರಸೂತಿಃ ಪರವ್ಯೋ ಮಧಾಮನ್ ವಲದ್ವೇಷಿದರ್ಪಜ್ವಲದ್ವಾಲಖಿಲ್ಯ ಪ್ರತಿಜ್ಞಾವತೀರ್ಣ ಸ್ಥಿರಾಂ ತತ್ತ್ವಬುದ್ಧಿಂ ಪರಾಂ ಭಕ್ತಿಧೇನುಂ ಜಗನ್ಮೂಲಕನ್ದೇ ಮುಕುನ್ದೇ ಮಹಾನನ್ದದೋಗ್ಧ್ರೀಂ ದಧೀಥಾ ಮುಧಾಕಾಮಹೀನಾಮಹೀನಾಮಹೀನಾನ್ತಕ || ೪ ||'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಷಟ್ತ್ರಿಂಶದ್ಗಣಚರಣೋ ನರ ಪರಿಪಾಟೀ ನವೀನ ಗುಂಭಗಣಃ |'}
            line2={'ವಿಷ್ಣುರಥ ದಣ್ಡಕೋಽಯಂ ವಿಘಟಯತು ವಿಪಕ್ಷ ವಾಹಿನೀ ವ್ಯೂಹಮ್ ||'}
            line3={'ವಿಚಿತ್ರ ಸಿದ್ಧಿದಃ ಸೋಽಯಂ ವೇಙ್ಕಟೇಶವಿಪಶ್ಚಿತಾ |'}
            line4={'ಗರುಡಧ್ವಜತೋಷಾಯ ಗೀತೋ ಗರುಡದಣ್ಡಕಃ ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಕವಿತಾರ್ಕಿಕ ಸಿಂಹಾಯ ಕಳ್ಯಾಣ ಗುಣಶಾಲಿನೇ |'}
            line2={'ಶ್ರೀಮತೇ ವೇಙ್ಕಟೇಶಾಯ ವೇದಾನ್ತ ಗುರವೇ ನಮಃ ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀಮತೇ ನಿಗಮಾನ್ತಮಹಾದೇಶಿಕಾಯ ನಮಃ ||'}
          />
        </View>
      </ScrollView>
      <Admob />
    </View>
  );
};

export default GarudaDandakam;
