/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const ShatumuraiValitirunam = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <HeaderComponent
        navigation={navigation}
        back={'ShotramScreen'}
        title={'ಶಾತ್ತುಮರೈ & ವಾಳಿತ್ತಿರುನಾಮಮ್'}
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
            line1={'ಸರ್ವದೇಶ ದಶಾಕಾಲೇಷ್ವವ್ಯಾಹತ ಪರಾಕ್ರಮಾ |'}
            line2={'ರಾಮಾನುಜಾರ್ಯ ದಿವ್ಯಾಜ್ನಾ ವರ್ಧತಾಂ ಅಭಿವರ್ಧತಾಂ ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮಾನುಜಾರ್ಯ ದಿವ್ಯಾಜ್ನಾ ಪ್ರತಿವಾಸರಮುಜ್ವಲಾ|'}
            line2={'ದಿಗಂತವ್ಯಾಪಿನೀ ಭೂಯಾತ್ಸಾಹಿ ಲೋಕಹಿತೈಷಿಣೀ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಶ್ರೀಮನ್ ಶ್ರೀರಂಗ ಶ್ರಿಯಮನುಪದ್ರವಾಮನುದಿನಂ ಸಂವರ್ಧಯಾ |'}
            line2={'ಶ್ರೀಮನ್ ಶ್ರೀರಂಗ ಶ್ರಿಯಮನುಪದ್ರವಾಮನುದಿನಂಸಂವರ್ಧಯಾ ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ನಮೋ ರಾಮಾನುಜಾರ್ಯಾಯ ವೇದಾಂತಾರ್ಥ ಪ್ರದಾಯಿನೇ|'}
            line2={'ಆತ್ರೇಯ ಪದ್ಮನಾಭಾರ್ಯ ಸುತಾಯ ಗುಣಶಾಲಿನೇ||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ರಾಮಾನುಜ ದಯಾಪಾತ್ರಂ ಜ್ನಾನವೈರಾಗ್ಯಾ ಭೂಷಣಂ|'}
            line2={'ಶ್ರೀಮದ್ವೇಂಕಟನಾಥಾರ್ಯಂ ವಂದೇ ವೇದಾಂತ ದೇಶಿಕಮ್||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={
              'ವಾಳಿಯಿ ರಾಮಾನುಜ ಪಿಳ್ಳಾನ್ ಮಾದಗವಾಲ್ ವಾಳುಂ ಅಣಿನಿಗಮಾಂತಗುರು ವಾಳಿಯವನ್ ,'
            }
            line2={'ಮಾರನ್ ಮರೈಯುಂ ಇರಾಮಾನುಜನ್ ಭಾಷ್ಯಾಮುಮ್ ತೇರುಂಪಡಿ ಉರೈಕ್ಕುಂ ಶೀರ್'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಂಜಪ್ಪರ ಶಮಯಂ ಮಾಟ್ರವಂದೋನ್ ವಾಳಿಯೇ'}
            line2={'ಮನ್ನುಪುಗಳ್ ಪ್ಪೂದುರಾನ್ ಮನುಮುಗಪ್ಪೋನ್ ವಾಳಿಯೇ'}
            line3={'ಕಂಜತ್ತಿರುಮಂಗೈ ಉಗಕ್ಕವಂದೋನ್ ವಾಳಿಯೇ '}
            line4={'ಕಲಿಯನುರೈ ಕುಡಿಕ್ಕೊಂಡ ಕರುತ್ತುಡೈಯೋನ್ ವಾಳೀಯೇ '}
            line5={'ಶೆಂಜೊಲ್ ತಮಿಳ್ಮರೈಗಳ್ ತೆಳಿಂದಿರೈಪ್ಪೋನ್ ವಾಳಿಯೇ'}
            line6={'ತಿರುಮಲೈಮಾಲ್ ತಿರುಮಣಿಯಾಯ್ ಶಿರಕ್ಕವಂದೋನ್ ವಾಳಿಯೇ'}
            line7={'ತಂಜಪರಗತಿಯೈ ತ್ತಂದರುಳ್ವೋನ್ ವಾಳಿಯೇ'}
            line8={'ಶೆಣ್ತಮಿಳ್ತ್ ತ್ತೂಪುಲ್ ತಿರುವೇಂಗಡವನ್ ವಾಳಿಯೇ'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={
              'ನಾನಿಲಮುಂ ತಾನ್ವಾಳ್,,ನಾನ್ಮರೈಗಳ್ ತಾಮ್ ನಾಳೆ ಮಾನಹರಿಯನ್ ಮಾರನ್ ಮರೈವಾಳ್ ಜ್ಞಾನಿಯರ್ಗಳ್ ಶೆನ್ನಿಯಣಿಶೇರ್ ತೂಪ್ಪುಲ್ ವೇದಾಂತ ದೇಶಿಕನೇ ಇನ್ನುಮ್ಮೊರು ನೂಟ್ರಾಂಡಿರುಮ್!'
            }
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಾಳಿಯಣಿ ತೂಪ್ಪುಲ್ ವರುಮ್‌ ನಿಗಮಾಂತಾಶಿರಿಯನ್ '}
            line2={'ವಾಳಿಯವನ್ ಪಾದಾರವಿಂದಮಲರ್ ,'}
            line3={'ವಾಳಿಯವನ್ ಕೋದಿಲಾತ್ತಾಣ್, '}
            line4={'ಮಲರೈಕೋಂಡಾಡಿಕ್ಕೊಂಡಿರಿಕ್ಕುಮ್!'}
            line5={'ತೀದಿಲಾ ನಲ್ಲೋರ್ ತಿರಳ್ ||'}
          />

          <St
            color={textColor}
            fontSize={font}
            line1={'ತಿರುವಾಡಿ_ಪ್ಪೂರಟ್ರಿಲ್ ಶೆಗ ತ್ತುದಿತ್ತಾಳ್ ವಾಳಿಯೇ'}
            line2={'ತಿರುಪ್ಪಾವೈ ಮುಪ್ಪದುಂ ಶೆಪ್ಪಿನಾಳ್ ವಾಳಿಯೇ'}
            line3={'ಪೆರಿಯಾಳ್ವಾರ್ ಪೆಟ್ರೆಡುತ್ತ ಪೆಣ್ಪಿಳ್ಳೈ ವಾಳಿಯೇ'}
            line4={'ಪೆರುಂಬೂದುರ್ ಮಾ ಮುನಿಕ್ಕು ಪಿನ್ನಾನಾಳ್ ವಾಳಿಯೇ'}
            line5={'ಒಂದು ನೂತ್ತ ನಾಲ್ಪತ್ತುಮೂನ್ರು ಉರೈತ್ತಾಳ್ ವಾಳಿಯೇ'}
            line6={'ಉಯರರಂಗರ್ಕೇ ಕಣ್ಣಿ ಉಗಂದಳಿತ್ತಾಳ್ ವಾಳಿಯೇ'}
            line8={'ಮರುವಾರುಂ ತಿರುಮಲ್ಲಿ ವಳಿನಾಡು ವಾಳಿಯೇ'}
            line9={'ವಣ್ಪುದುವೈ ನಗರ್ ಕೋದೈ! ಮಲರ್ಪದಂಗಳ್ ವಾಳಿಯೇ |'}
          />
        </View>
      </ScrollView>

      <Admob />
    </View>
  );
};

export default ShatumuraiValitirunam;
