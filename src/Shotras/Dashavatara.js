/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Switch, Dimensions, BackHandler, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Slider from '@react-native-community/slider';
import Header from '../Components/Header';
import St from '../Components/St';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';

const Dashavatara = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(null);
  const [darkmode, setDarkMode] = useState(null);
  const [showToggle, setShowToggle] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [orientation, setOrientation] = useState('portrait');
  const backgroundColor = darkmode ? '#000' : '#fff';
  const textColor = darkmode ? '#fff' : '#000';

  const [font, setFont] = useState(24);
  const storeData = async (value) => {
    try {
      let v = value ? 'true' : 'false';
      await AsyncStorage.setItem('@darkmode', v);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@darkmode');
      if (value !== null) {
        if (value === 'true') {
          setDarkMode(true);
          setIsEnabled(true);
        }
        if (value === 'false') {
          setDarkMode(false);
          setIsEnabled(false);
        }
      }
      const dmt = await AsyncStorage.getItem('@darkmodetoggle');
      if (dmt !== null) {
        if (dmt === 'true') {
          setShowToggle(true);
        }
        if (dmt === 'false') {
          setShowToggle(false);
        }
      } else {
        setShowToggle(true);
      }
    } catch (e) {
      // error reading value
    }
  };


  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener('change', () => {
    let orr = isPortrait() ? 'portrait' : 'landscape';
    if (orr === 'portrait') {
      setFont(24);
    }
    if (orr === 'landscape') {
      setFont(38);
    }
    setOrientation(orr);
  });

  useEffect(() => {
    getData();
    let or = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(or);
    const backAction = () => {
      navigation.navigate('ShotramScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();

  }, []);
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }} >
      <React.Fragment>
        {showToggle && showToggle === true && (
          <Switch
            style={{
              marginTop: '3%',
            }}
            value={isEnabled}
            onValueChange={() => {
              setIsEnabled(!isEnabled);
              storeData(!darkmode);
              setDarkMode(!darkmode);
            }}
          />
        )}
        <Header
          title="ದಶಾವತಾರ ಸ್ತೋತ್ರಂ"
          darkmode={darkmode}
        />
        <Slider
          value={font}
          onValueChange={value => setFont(value)}
          minimumValue={15}
          maximumValue={50}
          style={{
            marginStart: 15,
            marginEnd: 15,
          }}
        />
        <ScrollView>
          <View
            style={{
              marginLeft: 7,
              marginRight: 1,
            }}
          >
            <St
              color={textColor}
              fontSize={font}
              line1={'ದೇವೋ ನಶ್ಶುಭಮಾತನೋತು ದಶಧಾ ನಿರ್ವರ್ತಯನ್ಭೂಮಿಕಾಂ'}
              line2={'ರಂಗೇ ಧಾಮನಿ ಲಬ್ಧನಿರ್ಭರರಸೈರಧ್ಯಕ್ಷಿತೋ ಭಾವುಕೈಃ |'}
              line3={'ಯದ್ಭಾವೇಷು ಪೃಥಗ್ವಿಧೇಷ್ವನುಗುಣಾನ್ಭಾವಾನ್ಸ್ವಯಂ ಬಿಭ್ರತೀ'}
              line4={'ಯದ್ಧರ್ಮೈರಿಹ ಧರ್ಮಿಣೀ ವಿಹರತೇ ನಾನಾಕೃತಿರ್ನಾಯಿಕಾ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿರ್ಮಗ್ನಶ್ರುತಿಜಾಲಮಾರ್ಗಣದಶಾದತ್ತಕ್ಷಣೈರ್ವೀಕ್ಷಣೈ-'}
              line2={'ರನ್ತಸ್ತನ್ವದಿವಾರವಿನ್ದಗಹನಾನ್ಯೌದನ್ವತೀನಾಮಪಾಂ |'}
              line3={'ನಿಷ್ಪ್ರತ್ಯೂಹತರಂಗರಿಂಖಣಮಿಥಃ ಪ್ರತ್ಯೂಢಪಾಥಶ್ಛಟಾ-'}
              line4={'ಡೋಲಾರೋಹಸದೋಹಳಂ ಭಗವತೋ ಮಾತ್ಸ್ಯಂ ವಪುಃ ಪಾತು ನಃ || ೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅವ್ಯಾಸುರ್ಭುವನತ್ರಯೀಮನಿಭೃತಂ ಕಂಡೂಯನೈರದ್ರಿಣಾ'}
              line2={'ನಿದ್ರಾಣಸ್ಯ ಪರಸ್ಯ ಕೂರ್ಮವಪುಷೋ ನಿಶ್ವಾಸವಾತೋರ್ಮಯಃ |'}
              line3={'ಯದ್ವಿಕ್ಷೇಪಣಸಂಸ್ಕೃತೋದಧಿಪಯಃ ಪ್ರೇಂಖೋಳಪರ್ಯಂಕಿಕಾ-'}
              line4={'ನಿತ್ಯಾರೋಹಣನಿರ್ವೃತೋ ವಿಹರತೇ ದೇವಸ್ಸಹೈವ ಶ್ರಿಯಾ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗೋಪಾಯೇದನಿಶಂ ಜಗನ್ತಿ ಕುಹನಾಪೋತ್ರೀ ಪವಿತ್ರೀಕೃತ-'}
              line2={'ಬ್ರಹ್ಮಾಂಡಪ್ರಳಯೋರ್ಮಿಘೋಷಗುರುಭಿರ್ಘೋಣಾರವೈರ್ಘುರ್ಘುರೈಃ |'}
              line3={'ಯದ್ದಂಷ್ಟ್ರಾಂಕುರಕೋಟಿಗಾಢಘಟನಾನಿಷ್ಕಮ್ಪನಿತ್ಯಸ್ಥಿತಿ-'}
              line4={'ರ್ಬ್ರಹ್ಮಸ್ತಮ್ಬಮಸೌದಸೌ ಭಗವತೀಮುಸ್ತೇವವಿಶ್ವಂಭರಾ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರತ್ಯಾದಿಷ್ಟಪುರಾತನಪ್ರಹರಣಗ್ರಾಮಃಕ್ಷಣಂ ಪಾಣಿಜೈ-'}
              line2={'ರವ್ಯಾತ್ತ್ರೀಣಿ ಜಗನ್ತ್ಯಕುಂಠಮಹಿಮಾ ವೈಕುಂಠಕಂಠೀರವಃ |'}
              line3={'ಯತ್ಪ್ರಾದುರ್ಭವನಾದವನ್ಧ್ಯಜಠರಾಯಾದೃಚ್ಛಿಕಾದ್ವೇಧಸಾಂ-'}
              line4={'ಯಾ ಕಾಚಿತ್ಸಹಸಾ ಮಹಾಸುರಗೃಹಸ್ಥೂಣಾಪಿತಾಮಹ್ಯಭೃತ್ || ೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವ್ರೀಡಾವಿದ್ಧವದಾನ್ಯದಾನವಯಶೋನಾಸೀರಧಾಟೀಭಟ -'}
              line2={'ಸ್ತ್ರೈಯಕ್ಷಂ ಮಕುಟಂ ಪುನನ್ನವತು ನಸ್ತ್ರೈವಿಕ್ರಮೋ ವಿಕ್ರಮಃ |'}
              line3={'ಯತ್ಪ್ರಸ್ತಾವಸಮುಚ್ಛ್ರಿತಧ್ವಜಪಟೀವೃತ್ತಾನ್ತಸಿದ್ಧಾನ್ತಿಭಿ-'}
              line4={'ಸ್ಸ್ರೋತೋಭಿಸ್ಸುರಸಿನ್ಧುರಷ್ಟಸುದಿಶಾಸೌಧೇಷು ದೋಧೂಯತೇ || ೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕ್ರೋಧಾಗ್ನಿಂ ಜಮದಗ್ನಿಪೀಡನಭವಂ ಸನ್ತರ್ಪಯಿಷ್ಯನ್ ಕ್ರಮಾ-'}
              line2={'ದಕ್ಷತ್ರಾಮಿಹ ಸನ್ತತಕ್ಷ ಯ ಇಮಾಂ ತ್ರಿಸ್ಸಪ್ತಕೃತ್ವಃ ಕ್ಷಿತಿಮ್ |'}
              line3={'ದತ್ವಾ ಕರ್ಮಣಿ ದಕ್ಷಿಣಾಂ ಕ್ವಚನ ತಾಮಾಸ್ಕನ್ದ್ಯ ಸಿನ್ಧುಂ ವಸ-'}
              line4={'ನ್ನಬ್ರಹ್ಮಣ್ಯಮಪಾಕರೋತು ಭಗವಾನಾಬ್ರಹ್ಮಕೀಟಂ ಮುನಿಃ || ೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಾರಾವಾರಪಯೋವಿಶೋಷಣಕಲಾಪಾರೀಣಕಾಲಾನಲ-'}
              line2={'ಜ್ವಾಲಾಜಾಲವಿಹಾರಹಾರಿವಿಶಿಖವ್ಯಾಪಾರಘೋರಕ್ರಮಃ |'}
              line3={'ಸರ್ವಾವಸ್ಥಸಕೃತ್ಪ್ರಪನ್ನಜನತಾಸಂರಕ್ಷಣೈಕವ್ರತೀ'}
              line4={'ಧರ್ಮೋ ವಿಗ್ರಹವಾನಧರ್ಮವಿರತಿಂ ಧನ್ವೀ ಸತನ್ವೀತು ನಃ || ೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಫಕ್ಕತ್ಕೌರವಪಟ್ಟಣಪ್ರಭೃತಯಃ ಪ್ರಾಸ್ತಪ್ರಲಂಬಾದಯ-'}
              line2={'ಸ್ತಾಲಾಂಕಾಸ್ಯತಥಾವಿಧಾ ವಿಹೃತಯಸ್ತನ್ವನ್ತು ಭದ್ರಾಣಿ ನಃ |'}
              line3={'ಕ್ಷೀರಂ ಶರ್ಕರಯೇವ ಯಾಭಿರಪೃಥಗ್ಭೂತಾಃ ಪ್ರಭೂತೈರ್ಗುಣೈ-'}
              line4={'ರಾಕೌಮಾರಕಮಸ್ವದನ್ತಜಗತೇ ಕೃಷ್ಣಸ್ಯ ತಾಃ ಕೇಳಯಃ || ೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಾಥಾಯೈವ ನಮಃ ಪದಂ ಭವತು ನಶ್ಚಿತ್ರೈಶ್ಚರಿತ್ರಕ್ರಮೈ-'}
              line2={'ರ್ಭೂಯೋಭಿರ್ಭುವನಾನ್ಯಮೂನಿಕುಹನಾಗೋಪಾಯ ಗೋಪಾಯತೇ |'}
              line3={'ಕಾಳಿನ್ದೀರಸಿಕಾಯಕಾಳಿಯಫಣಿಸ್ಫಾರಸ್ಫಟಾವಾಟಿಕಾ-'}
              line4={'ರಂಗೋತ್ಸಂಗವಿಶಂಕಚಂಕ್ರಮಧುರಾಪರ್ಯಾಯ ಚರ್ಯಾಯತೇ || ೧೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭಾವಿನ್ಯಾ ದಶಯಾಭವನ್ನಿಹ ಭವಧ್ವಂಸಾಯ ನಃ ಕಲ್ಪತಾಂ'}
              line2={'ಕಲ್ಕೀ ವಿಷ್ಣುಯಶಸ್ಸುತಃ ಕಲಿಕಥಾಕಾಲುಷ್ಯಕೂಲಂಕಷಃ |'}
              line3={'ನಿಶ್ಶೇಷಕ್ಷತಕಣ್ಟಕೇ ಕ್ಷಿತಿತಲೇ ಧಾರಾಜಲೌಘೈರ್ಧ್ರುವಂ'}
              line4={'ಧರ್ಮಂ ಕಾರ್ತಯುಗಂ ಪ್ರರೋಹಯತಿ ಯನ್ನಿಸ್ತ್ರಿಂಶಧಾರಾಧರಃ || ೧೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇಚ್ಛಾಮೀನ ವಿಹಾರಕಚ್ಛಪ ಮಹಾಪೋತ್ರಿನ್ ಯದೃಚ್ಛಾಹರೇ'}
              line2={'ರಕ್ಷಾವಾಮನ ರೋಷರಾಮ ಕರುಣಾಕಾಕುತ್ಸ್ಥ ಹೇಲಾಹಲಿನ್ |'}
              line3={'ಕ್ರೀಡಾವಲ್ಲವ ಕಲ್ಕಿವಾಹನ ದಶಾಕಲ್ಕಿನ್ನಿತಿ ಪ್ರತ್ಯಹಂ'}
              line4={'ಜಲ್ಪಂತಃ ಪುರುಷಾಃ ಪುನನ್ತು ಭುವನಂ ಪುಣ್ಯೌಘಪಣ್ಯಾಪಣಾಃ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿದ್ಯೋದನ್ವತಿ ವೇಂಕಟೇಶ್ವರಕವೌ ಜಾತಂ ಜಗನ್ಮಂಗಳಂ'}
              line2={'ದೇವೇಶಸ್ಯದಶಾವತಾರವಿಷಯಂ ಸ್ತೋತ್ರಂ ವಿವಕ್ಷೇತ ಯಃ |'}
              line3={'ವಕ್ತ್ರೇ ತಸ್ಯ ಸರಸ್ವತೀ ಬಹುಮುಖೀ ಭಕ್ತಿಃ ಪರಾ ಮಾನಸೇ'}
              line4={'ಶುದ್ಧಿಃ ಕಾಪಿ ತನೌ ದಿಶಾಸು ದಶಸು ಖ್ಯಾತಿಶ್ಶುಭಾ ಜೃಮ್ಭತೇ ||'}
            />

          </View>
        </ScrollView>
        <Admob
          type={'banner'}
          unitId={Adhelper.GenerateId()}
        />
      </React.Fragment>
    </View>

  );
};


export default Dashavatara;