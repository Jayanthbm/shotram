/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {View, BackHandler, ScrollView} from 'react-native';
import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const Hayagriva = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('ShotramScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <HeaderComponent
        backAction={() => {
          navigation.navigate('ShotramScreen');
        }}
        title={'ಶ್ರೀ ಹಯಗ್ರೀವ ಸ್ತೋತ್ರಂ'}
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
            line1={'ಜ್ಞಾನಾನನ್ದಮಯಂ ದೇವಂ ನಿರ್ಮಲಸ್ಫಟಿಕಾಕೃತಿಂ'}
            line2={'ಆಧಾರಂ ಸರ್ವವಿದ್ಯಾನಾಂ ಹಯಗ್ರೀವಮುಪಾಸ್ಮಹೇ ||೧||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸ್ವತಸ್ಸಿದ್ಧಂ ಶುದ್ಧಸ್ಫಟಿಕಮಣಿಭೂ ಭೃತ್ಪ್ರತಿಭಟಂ'}
            line2={'ಸುಧಾಸಧ್ರೀಚೀಭಿರ್ದ್ಯುತಿಭಿರವದಾತತ್ರಿಭುವನಂ'}
            line3={'ಅನಂತೈಸ್ತ್ರಯ್ಯಂತೈರನುವಿಹಿತ ಹೇಷಾಹಲಹಲಂ'}
            line4={'ಹತಾಶೇಷಾವದ್ಯಂ ಹಯವದನಮೀಡೇಮಹಿಮಹಃ ||೨||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸಮಾಹಾರಸ್ಸಾಮ್ನಾಂ ಪ್ರತಿಪದಮೃಚಾಂ ಧಾಮ ಯಜುಷಾಂ'}
            line2={'ಲಯಃ ಪ್ರತ್ಯೂಹಾನಾಂ ಲಹರಿವಿತತಿರ್ಬೋಧಜಲಧೇಃ'}
            line3={'ಕಥಾದರ್ಪಕ್ಷುಭ್ಯತ್ಕಥಕಕುಲಕೋಲಾಹಲಭವಂ'}
            line4={'ಹರತ್ವಂತರ್ಧ್ವಾನ್ತಂ ಹಯವದನಹೇಷಾಹಲಹಲಃ ||೩||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಪ್ರಾಚೀ ಸನ್ಧ್ಯಾ ಕಾಚಿದನ್ತರ್ನಿಶಾಯಾಃ'}
            line2={'ಪ್ರಜ್ಞಾದೃಷ್ಟೇ ರಞ್ಜನಶ್ರೀರಪೂರ್ವಾ'}
            line3={'ವಕ್ತ್ರೀ ವೇದಾನ್ ಭಾತು ಮೇ ವಾಜಿವಕ್ತ್ರಾ'}
            line4={'ವಾಗೀಶಾಖ್ಯಾ ವಾಸುದೇವಸ್ಯ ಮೂರ್ತಿಃ ||೪||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಿಶುದ್ಧವಿಜ್ಞಾನಘನಸ್ವರೂಪಂ'}
            line2={'ವಿಜ್ಞಾನವಿಶ್ರಾಣನಬದ್ಧದೀಕ್ಷಂ'}
            line3={'ದಯಾನಿಧಿಂ ದೇಹಭೃತಾಂ ಶರಣ್ಯಂ'}
            line4={'ದೇವಂ ಹಯಗ್ರೀವಮಹಂ ಪ್ರಪದ್ಯೇ ||೫||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಅಪೌರುಷೇಯೈರಪಿ ವಾಕ್ಪ್ರಪಂಚೈಃ'}
            line2={'ಅದ್ಯಾಪಿ ತೇ ಭೂತಿಮದೃಷ್ಟಪಾರಾಂ'}
            line3={'ಸ್ತುವನ್ನಹಂ ಮುಗ್ಧ ಇತಿ ತ್ವಯೈವ'}
            line4={'ಕಾರುಣ್ಯತೋ ನಾಥ ಕಟಾಕ್ಷಣೀಯಃ ||೬||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ದಾಕ್ಷಿಣ್ಯರಮ್ಯಾ ಗಿರಿಶಸ್ಯ ಮೂರ್ತಿಃ-'}
            line2={'ದೇವೀ ಸರೋಜಾಸನಧರ್ಮಪತ್ನೀ'}
            line3={'ವ್ಯಾಸಾದಯೋಽಪಿ ವ್ಯಪದೇಶ್ಯವಾಚಃ'}
            line4={'ಸ್ಫುರನ್ತಿ ಸರ್ವೇ ತವ ಶಕ್ತಿಲೇಶೈಃ ||೭||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಮನ್ದೋಽಭವಿಷ್ಯನ್ನಿಯತಂ ವಿರಿಂಚಃ'}
            line2={'ವಾಚಾಂ ನಿಧೇರ್ವಾಂಛಿತಭಾಗಧೇಯಃ'}
            line3={'ದೈತ್ಯಾಪನೀತಾನ್ ದಯಯೈನ ಭೂಯೋಽಪಿ'}
            line4={'ಅಧ್ಯಾಪಯಿಷ್ಯೋ ನಿಗಮಾನ್ನಚೇತ್ತ್ವಮ್ ||೮||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಿತರ್ಕಡೋಲಾಂ ವ್ಯವಧೂಯ ಸತ್ತ್ವೇ'}
            line2={'ಬೃಹಸ್ಪತಿಂ ವರ್ತಯಸೇ ಯತಸ್ತ್ವಂ'}
            line3={'ತೇನೈವ ದೇವ ತ್ರಿದೇಶೇಶ್ವರಾಣಾ'}
            line4={'ಅಸ್ಪೃಷ್ಟಡೋಲಾಯಿತಮಾಧಿರಾಜ್ಯಮ್ ||೯||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಅಗ್ನೌ ಸಮಿದ್ಧಾರ್ಚಿಷಿ ಸಪ್ತತನ್ತೋಃ'}
            line2={'ಆತಸ್ಥಿವಾನ್ಮಂತ್ರಮಯಂ ಶರೀರಂ'}
            line3={'ಅಖಂಡಸಾರೈರ್ಹವಿಷಾಂ ಪ್ರದಾನೈಃ'}
            line4={'ಆಪ್ಯಾಯನಂ ವ್ಯೋಮಸದಾಂ ವಿಧತ್ಸೇ ||೧೦||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಯನ್ಮೂಲ ಮೀದೃಕ್ಪ್ರತಿಭಾತತ್ತ್ವಂ'}
            line2={'ಯಾ ಮೂಲಮಾಮ್ನಾಯಮಹಾದ್ರುಮಾಣಾಂ'}
            line3={'ತತ್ತ್ವೇನ ಜಾನಂತಿ ವಿಶುದ್ಧಸತ್ತ್ವಾಃ'}
            line4={'ತ್ವಾಮಕ್ಷರಾಮಕ್ಷರಮಾತೃಕಾಂ ತ್ವಾಂ ||೧೧||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಅವ್ಯಾಕೃತಾದ್ವ್ಯಾಕೃತವಾನಸಿ ತ್ವಂ'}
            line2={'ನಾಮಾನಿ ರೂಪಾಣಿ ಚ ಯಾನಿ ಪೂರ್ವಂ'}
            line3={'ಶಂಸನ್ತಿ ತೇಷಾಂ ಚರಮಾಂ ಪ್ರತಿಷ್ಠಾಂ'}
            line4={'ವಾಗೀಶ್ವರ ತ್ವಾಂ ತ್ವದುಪಜ್ಞವಾಚಃ ||೧೨||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಮುಗ್ಧೇನ್ದುನಿಷ್ಯನ್ದವಿಲೋಭನೀಯಾಂ'}
            line2={'ಮೂರ್ತಿಂ ತವಾನನ್ದಸುಧಾಪ್ರಸೂತಿಂ'}
            line3={'ವಿಪಶ್ಚಿತಶ್ಚೇತಸಿ ಭಾವಯನ್ತೇ'}
            line4={'ವೇಲಾಮುದಾರಾಮಿವ ದುಗ್ಧ ಸಿನ್ಧೋಃ ||೧೩||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಮನೋಗತಂ ಪಶ್ಯತಿ ಯಸ್ಸದಾ ತ್ವಾಂ'}
            line2={'ಮನೀಷಿಣಾಂ ಮಾನಸರಾಜಹಂಸಂ'}
            line3={'ಸ್ವಯಂಪುರೋಭಾವವಿವಾದಭಾಜಃ'}
            line4={'ಕಿಂಕುರ್ವತೇ ತಸ್ಯ ಗಿರೋ ಯಥಾರ್ಹಮ್ ||೧೪||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಅಪಿ ಕ್ಷಣಾರ್ಧಂ ಕಲಯನ್ತಿ ಯೇ ತ್ವಾಂ'}
            line2={'ಆಪ್ಲಾವಯನ್ತಂ ವಿಶದೈರ್ಮಯೂಖೈಃ'}
            line3={'ವಾಚಾಂ ಪ್ರವಾಹೈರನಿವಾರಿತೈಸ್ತೇ'}
            line4={'ಮಂದಾಕಿನೀಂ ಮನ್ದಯಿತುಂ ಕ್ಷಮನ್ತೇ ||೧೫||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸ್ವಾಮಿನ್ಭವದ್ದ್ಯಾನಸುಧಾಭಿಷೇಕಾತ್'}
            line2={'ವಹನ್ತಿ ಧನ್ಯಾಃ ಪುಲಕಾನುಬನ್ದಂ'}
            line3={'ಅಲಕ್ಷಿತೇ ಕ್ವಾಪಿ ನಿರೂಢ ಮೂಲಂ'}
            line4={'ಅಂಗ್ವೇಷ್ವಿ ವಾನನ್ದಥುಮಙ್ಕುರನ್ತಮ್ ||೧೬||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸ್ವಾಮಿನ್ಪ್ರತೀಚಾ ಹೃದಯೇನ ಧನ್ಯಾಃ'}
            line2={'ತ್ವದ್ಧ್ಯಾನಚಂದ್ರೋದಯವರ್ಧಮಾನಂ'}
            line3={'ಅಮಾನ್ತಮಾನಂದಪಯೋಧಿಮನ್ತಃ'}
            line4={'ಪಯೋಭಿ ರಕ್ಷ್ಣಾಂ ಪರಿವಾಹಯನ್ತಿ ||೧೭||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸ್ವೈರಾನುಭಾವಾಸ್ ತ್ವದಧೀನಭಾವಾಃ'}
            line2={'ಸಮೃದ್ಧವೀರ್ಯಾಸ್ತ್ವದನುಗ್ರಹೇಣ'}
            line3={'ವಿಪಶ್ಚಿತೋನಾಥ ತರನ್ತಿ ಮಾಯಾಂ'}
            line4={'ವೈಹಾರಿಕೀಂ ಮೋಹನಪಿಞ್ಛಿಕಾಂ ತೇ ||೧೮||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಪ್ರಾಙ್ನಿರ್ಮಿತಾನಾಂ ತಪಸಾಂ ವಿಪಾಕಾಃ'}
            line2={'ಪ್ರತ್ಯಗ್ರನಿಶ್ಶ್ರೇಯಸಸಂಪದೋ ಮೇ'}
            line3={'ಸಮೇಧಿಷೀರಂ ಸ್ತವ ಪಾದಪದ್ಮೇ'}
            line4={'ಸಙ್ಕಲ್ಪಚಿನ್ತಾಮಣಯಃ ಪ್ರಣಾಮಾಃ ||೧೯||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಿಲುಪ್ತಮೂರ್ಧನ್ಯಲಿಪಿಕ್ರಮಾಣಾ'}
            line2={'ಸುರೇನ್ದ್ರಚೂಡಾಪದಲಾಲಿತಾನಾಂ'}
            line3={'ತ್ವದಂಘ್ರಿ ರಾಜೀವರಜಃಕಣಾನಾಂ'}
            line4={'ಭೂಯಾನ್ಪ್ರಸಾದೋ ಮಯಿ ನಾಥ ಭೂಯಾತ್ ||೨೦||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಪರಿಸ್ಫುರನ್ನೂಪುರಚಿತ್ರಭಾನು'}
            line2={'ಪ್ರಕಾಶನಿರ್ಧೂತತಮೋನುಷಂಗಾ'}
            line3={'ಪದದ್ವಯೀಂ ತೇ ಪರಿಚಿನ್ಮಹೇಽನ್ತಃ'}
            line4={'ಪ್ರಬೋಧರಾಜೀವವಿಭಾತಸನ್ಧ್ಯಾಮ್ ||೨೧||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ತ್ವತ್ಕಿಙ್ಕರಾಲಂಕರಣೋಚಿತಾನಾಂ'}
            line2={'ತ್ವಯೈವ ಕಲ್ಪಾನ್ತರಪಾಲಿತಾನಾಂ'}
            line3={'ಮಂಜುಪ್ರಣಾದಂ ಮಣಿನೂಪುರಂ ತೇ'}
            line4={'ಮಂಜೂಷಿಕಾಂ ವೇದಗಿರಾಂ ಪ್ರತೀಮಃ ||೨೨||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಸಂಚಿನ್ತಯಾಮಿ ಪ್ರತಿಭಾದಶಾಸ್ಥಾನ್'}
            line2={'ಸನ್ಧುಕ್ಷಯನ್ತಂ ಸಮಯಪ್ರದೀಪಾನ್'}
            line3={'ವಿಜ್ಞಾನಕಲ್ಪದ್ರುಮಪಲ್ಲವಾಭಂ'}
            line4={'ವ್ಯಾಖ್ಯಾನಮುದ್ರಾಮಧುರಂ ಕರಂ ತೇ ||೨೩||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಚಿತ್ತೇ ಕರೋಮಿ ಸ್ಫುರಿತಾಕ್ಷಮಾಲಂ'}
            line2={'ಸವ್ಯೇತರಂ ನಾಥ ಕರಂ ತ್ವದೀಯಂ'}
            line3={'ಜ್ಞಾನಾಮೃತೋದಂಚನಲಂಪಟಾನಾಂ'}
            line4={'ಲೀಲಾಘಟೀಯನ್ತ್ರಮಿವಾಽಽಶ್ರಿತಾನಾಮ್ ||೨೪||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಪ್ರಬೋಧಸಿನ್ಧೋರರುಣೈಃ ಪ್ರಕಾಶೈಃ'}
            line2={'ಪ್ರವಾಳಸಙ್ಘಾತಮಿವೋದ್ವಹನ್ತಂ'}
            line3={'ವಿಭಾವಯೇ ದೇವ ಸ ಪುಸ್ತಕಂ ತೇ'}
            line4={'ವಾಮಂ ಕರಂ ದಕ್ಷಿಣಮಾಶ್ರಿತಾನಾಮ್ ||೨೫||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ತಮಾಂ ಸಿಭಿತ್ತ್ವಾವಿಶದೈರ್ಮಯೂಖೈಃ'}
            line2={'ಸಮ್ಪ್ರೀಣಯನ್ತಂ ವಿದುಷಶ್ಚಕೋರಾನ್'}
            line3={'ನಿಶಾಮಯೇ ತ್ವಾಂ ನವಪುಣ್ಡರೀಕೇ'}
            line4={'ಶರದ್ಘನೇಚನ್ದ್ರಮಿವ ಸ್ಫುರನ್ತಮ್ ||೨೬||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ದಿಶನ್ತು ಮೇ ದೇವ ಸದಾ ತ್ವದೀಯಾಃ'}
            line2={'ದಯಾತರಂಗಾನುಚರಾಃ ಕಟಾಕ್ಷಾಃ'}
            line3={'ಶ್ರೋತ್ರೇಷು ಪುಂಸಾಮಮೃತಂಕ್ಷರನ್ತೀಂ'}
            line4={'ಸರಸ್ವತೀಂ ಸಂಶ್ರಿತಕಾಮಧೇನುಮ್ ||೨೭||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಿಶೇಷವಿತ್ಪಾರಿಷದೇಷು ನಾಥ'}
            line2={'ವಿದಗ್ಧಗೋಷ್ಠೀ ಸಮರಾಂಗಣೇಷು'}
            line3={'ಜಿಗೀಷತೋ ಮೇ ಕವಿತಾರ್ಕಿಕೇಂದ್ರಾನ್'}
            line4={'ಜಿಹ್ವಾಗ್ರಸಿಂಹಾಸನಮಭ್ಯುಪೇಯಾಃ ||೨೮||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ತ್ವಾಂ ಚಿನ್ತಯನ್ ತ್ವನ್ಮಯತಾಂ ಪ್ರಪನ್ನಃ'}
            line2={'ತ್ವಾಮುದ್ಗೃಣನ್ ಶಬ್ದಮಯೇನ ಧಾಮ್ನಾ'}
            line3={'ಸ್ವಾಮಿನ್ಸಮಾಜೇಷು ಸಮೇಧಿಷೀಯ'}
            line4={'ಸ್ವಚ್ಛನ್ದವಾದಾಹವಬದ್ಧಶೂರಃ ||೨೯||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ನಾನಾವಿಧಾನಾಮಗತಿಃ ಕಲಾನಾಂ'}
            line2={'ನ ಚಾಪಿ ತೀರ್ಥೇಷು ಕೃತಾವತಾರಃ'}
            line3={'ಧ್ರುವಂ ತವಾಽನಾಧ ಪರಿಗ್ರಹಾಯಾಃ'}
            line4={'ನವ ನವಂ ಪಾತ್ರಮಹಂ ದಯಾಯಾಃ ||೩೦||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ಅಕಮ್ಪನೀಯಾನ್ಯಪನೀತಿಭೇದೈಃ'}
            line2={'ಅಲಂಕೃಷೀರನ್ ಹೃದಯಂ ಮದೀಯಮ್'}
            line3={'ಶಂಕಾ ಕಳಂಕಾ ಪಗಮೋಜ್ಜ್ವಲಾನಿ'}
            line4={'ತತ್ತ್ವಾನಿ ಸಮ್ಯಂಚಿ ತವ ಪ್ರಸಾದಾತ್ ||೩೧||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವ್ಯಾಖ್ಯಾಮುದ್ರಾಂ ಕರಸರಸಿಜೈಃ ಪುಸ್ತಕಂ ಶಂಖಚಕ್ರೇ'}
            line2={'ಭಿಭ್ರದ್ಭಿನ್ನ ಸ್ಫಟಿಕರುಚಿರೇ ಪುಣ್ಡರೀಕೇ ನಿಷಣ್ಣಃ |'}
            line3={'ಅಮ್ಲಾನಶ್ರೀರಮೃತವಿಶದೈರಂಶುಭಿಃ ಪ್ಲಾವಯನ್ಮಾಂ'}
            line4={'ಆವಿರ್ಭೂಯಾದನಘಮಹಿಮಾಮಾನಸೇ ವಾಗಧೀಶಃ ||೩೨||'}
          />
          <St
            color={textColor}
            fontSize={font}
            line1={'ವಾಗರ್ಥಸಿದ್ಧಿಹೇತೋಃಪಠತ ಹಯಗ್ರೀವಸಂಸ್ತುತಿಂ ಭಕ್ತ್ಯಾ'}
            line2={'ಕವಿತಾರ್ಕಿಕಕೇಸರಿಣಾ ವೇಙ್ಕಟನಾಥೇನ ವಿರಚಿತಾಮೇತಾಮ್ ||೩೩||'}
          />
        </View>
      </ScrollView>

      <Admob />
    </View>
  );
};

export default Hayagriva;
