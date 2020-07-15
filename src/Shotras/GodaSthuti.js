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

const GodaSthuti = ({ navigation }) => {
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
          title="ಗೋದಾ ಸ್ತುತಿಃ "
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
              line1={'ಶ್ರೀವಿಷ್ಣುಚಿತ್ತಕುಲನಂದನಕಲ್ಪವಲ್ಲೀಂ'}
              line2={'ಶ್ರೀರಂಗರಾಜಹರಿಚಂದನಯೋಗದೃಶ್ಯಾಮ್ |'}
              line3={'ಸಾಕ್ಷಾತ್ಕ್ಷಮಾಂ ಕರುಣಯಾ ಕಮಲಾಮಿವಾನ್ಯಾಂ'}
              line4={'ಗೋದಾಮನನ್ಯಶರಣಃ ಶರಣಂ ಪ್ರಪದ್ಯೇ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೈದೇಶಿಕಃ ಶ್ರುತಿಗಿರಾಮಪಿ ಭೂಯಸೀನಾಂ'}
              line2={'ವರ್ಣೇಷು ಮಾತಿ ಮಹಿಮಾ ನ ಹಿ ಮಾದೃಶಾಂ ತೇ |'}
              line3={'ಇತ್ಥಂ ವಿದಂತಮಪಿ ಮಾಂ ಸಹಸೈವ ಗೋದೇ'}
              line4={'ಮೌನದ್ರುಹೋ ಮುಖರಯಂತಿ ಗುಣಾಸ್ತ್ವದೀಯಾಃ || ೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ವತ್ಪ್ರೇಯಸಃ ಶ್ರವಣಯೋರಮೃತಾಯಮಾನಾಂ'}
              line2={'ತುಲ್ಯಾಂ ತ್ವದೀಯಮಣಿನೂಪುರಶಿಂಜಿತಾನಾಮ್ |'}
              line3={'ಗೋದೇ ತ್ವಮೇವ ಜನನಿ ತ್ವದಭಿಷ್ಟವಾರ್ಹಾಂ'}
              line4={'ವಾಚಂ ಪ್ರಸನ್ನಮಧುರಾಂ ಮಮ ಸಂವಿಧೇಹಿ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೃಷ್ಣಾನ್ವಯೇನ ದಧತೀಂ ಯಮುನಾನುಭಾವಂ'}
              line2={'ತೀರ್ಥೈರ್ಯಥಾವದವಗಾಹ್ಯ ಸರಸ್ವತೀಂ ತೇ |'}
              line3={'ಗೋದೇ ವಿಕಸ್ವರಧಿಯಾಂ ಭವತೀ ಕಟಾಕ್ಷಾತ್'}
              line4={'ವಾಚಃ ಸ್ಫುರಂತಿ ಮಕರಂದಮುಚಃ ಕವೀನಾಮ್ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಸ್ಮಾದೃಶಾಮಪಕೃತೌ ಚಿರದೀಕ್ಷಿತಾನಾಮ್'}
              line2={'ಅಹ್ನಾಯ ದೇವಿ ದಯತೇ ಯದಸೌ ಮುಕುಂದಃ |'}
              line3={'ತನ್ನಿಶ್ಚಿತಂ ನಿಯಮಿತಸ್ತವ ಮೌಲಿದಾಮ್ನಾ'}
              line4={'ತಂತ್ರೀನಿನಾದಮಧುರೈಶ್ಚ ಗಿರಾಂ ನಿಗುಮ್ಫೈಃ || ೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶೋಣಾಧರೇಽಪಿ ಕುಚಯೋರಪಿ ತುಂಗಭದ್ರಾ'}
              line2={'ವಾಚಾಂ ಪ್ರವಾಹನಿವಹೇಽಪಿ ಸರಸ್ವತೀ ತ್ವಮ್ |'}
              line3={'ಅಪ್ರಾಕೃತೈರಪಿ ರಸೈರ್ವಿರಜಾ ಸ್ವಭಾವಾತ್'}
              line4={'ಗೋದಾಽಪಿ ದೇವಿ ಕಮಿತುರ್ನನು ನರ್ಮದಾಽಸಿ || ೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಲ್ಮೀಕತಃ ಶ್ರವಣತೋ ವಸುಧಾತ್ಮನಸ್ತೇ'}
              line2={'ಜಾತೋ ಬಭೂವ ಸ ಮುನಿಃ ಕವಿಸಾರ್ವಭೌಮಃ |'}
              line3={'ಗೋದೇ ಕಿಮದ್ಭುತಮಿದಂ ಯದಮೀ ಸ್ವದಂತೇ'}
              line4={'ವಕ್ತ್ರಾರವಿಂದಮಕರಂದನಿಭಾಃ ಪ್ರಬಂಧಾಃ || ೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭೋಕ್ತುಂ ತವ ಪ್ರಿಯತಮಂ ಭವತೀವ ಗೋದೇ'}
              line2={'ಭಕ್ತಿಂ ನಿಜಾಂ ಪ್ರಣಯಭಾವನಯಾ ಗೃಣಂತಃ |'}
              line3={'ಉಚ್ಚಾವಚೈರ್ವಿರಹಸಂಗಮಜೈರುದಂತೈಃ'}
              line4={'ಶೃಂಗಾರಯಂತಿ ಹೃದಯಂ ಗುರವಸ್ತ್ವದೀಯಾಃ || ೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾತಃ ಸಮುತ್ಥಿತವತೀಮಧಿವಿಷ್ಣುಚಿತ್ತಂ'}
              line2={'ವಿಶ್ವೋಪಜೀವ್ಯಮಮೃತಂ ವಚಸಾ ದುಹಾನಾಮ್ |'}
              line3={'ತಾಪಚ್ಛದಂ ಹಿಮರುಚೇರಿವ ಮೂರ್ತಿಮನ್ಯಾಂ'}
              line4={'ಸಂತಃ ಪಯೋಧಿದುಹಿತುಃ ಸಹಜಾಂ ವಿದುಸ್ತ್ವಾಮ್ || ೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತಾತಸ್ತು ತೇ ಮಧುಭಿದಃ ಸ್ತುತಿಲೇಶವಶ್ಯಾತ್'}
              line2={'ಕರ್ಣಾಮೃತೈಃ ಸ್ತುತಿಶತೈರನವಾಪ್ತಪೂರ್ವಮ್ |'}
              line3={'ತ್ವನ್ಮೌಲಿಗಂಧಸುಭಗಾಮುಪಹೃತ್ಯ ಮಾಲಾಂ'}
              line4={'ಲೇಭೇ ಮಹತ್ತರಪದಾನುಗುಣಂ ಪ್ರಸಾದಮ್ || ೧೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಿಗ್ದಕ್ಷಿಣಾಽಪಿ ಪರಿಪಕ್ತ್ರಿಮಪುಣ್ಯಲಭ್ಯಾತ್'}
              line2={'ಸರ್ವೋತ್ತರಾ ಭವತಿ ದೇವಿ ತವಾವತಾರಾತ್ |'}
              line3={'ಯತ್ರೈವ ರಂಗಪತಿನಾ ಬಹುಮಾನಪೂರ್ವಂ'}
              line4={'ನಿದ್ರಾಲುನಾಪಿ ನಿಯತಂ ನಿಹಿತಾಃ ಕಟಾಕ್ಷಾಃ || ೧೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಾಯೇಣ ದೇವಿ ಭವತೀವ್ಯಪದೇಶಯೋಗಾತ್'}
              line2={'ಗೋದಾವರೀ ಜಗದಿದಂ ಪಯಸಾ ಪುನೀತೇ |'}
              line3={'ಯಸ್ಯಾಂ ಸಮೇತ್ಯ ಸಮಯೇಷು ಚಿರಂ ನಿವಾಸಾತ್'}
              line4={'ಭಾಗೀರಥೀಪ್ರಭೃತಯೋಽಪಿ ಭವಂತಿ ಪುಣ್ಯಾಃ || ೧೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಾಗೇಶಯಃ ಸುತನು ಪಕ್ಷಿರಥಃ ಕಥಂ ತೇ'}
              line2={'ಜಾತಃ ಸ್ವಯಂವರಪತಿಃ ಪುರುಷಃ ಪುರಾಣಃ |'}
              line3={'ಏವಂ ವಿಧಾಃ ಸಮುಚಿತಂ ಪ್ರಣಯಂ ಭವತ್ಯಾಃ'}
              line4={'ಸಂದರ್ಶಯಂತಿ ಪರಿಹಾಸಗಿರಃ ಸಖೀನಾಮ್ || ೧೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ವದ್ಭುಕ್ತಮಾಲ್ಯಸುರಭೀಕೃತಚಾರುಮೌಲೇಃ'}
              line2={'ಹಿತ್ವಾ ಭುಜಾಂತರಗತಾಮಪಿ ವೈಜಯಂತೀಮ್ |'}
              line3={'ಪತ್ಯುಸ್ತವೇಶ್ವರಿ ಮಿಥಃ ಪ್ರತಿಘಾತಲೋಲಾಃ'}
              line4={'ಬರ್ಹಾತಪತ್ರರುಚಿಮಾರಚಯಂತಿ ಭೃಂಗಾಃ || ೧೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆಮೋದವತ್ಯಪಿ ಸದಾ ಹೃದಯಂಗಮಾಽಪಿ'}
              line2={'ರಾಗಾನ್ವಿತಾಽಪಿ ಲಲಿತಾಽಪಿ ಗುಣೋತ್ತರಾಽಪಿ |'}
              line3={'ಮೌಳಿಸ್ರಜಾ ತವ ಮುಕುಂದಕಿರೀಟಭಾಜಾ'}
              line4={'ಗೋದೇ ಭವತ್ಯಧರಿತಾ ಖಲು ವೈಜಯಂತೀ || ೧೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ವನ್ಮೌಲಿದಾಮನಿ ವಿಭೋಃ ಶಿರಸಾ ಗೃಹೀತೇ'}
              line2={'ಸ್ವಚ್ಛಂದಕಲ್ಪಿತಸಪೀತಿರಸಪ್ರಮೋದಾಃ |'}
              line3={'ಮಂಜುಸ್ವನಾ ಮಧುಲಿಹೋ ವಿದಧುಃ ಸ್ವಯಂ ತೇ'}
              line4={'ಸ್ವಾಯಂವರಂ ಕಮಪಿ ಮಂಗಳತೂರ್ಯಘೋಷಮ್ || ೧೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಶ್ವಾಸಮಾನರಜಸಾ ಕಮಲೇನ ನಾಭೌ'}
              line2={'ವಕ್ಷಃಸ್ಥಲೇ ಚ ಕಮಲಾಸ್ತನಚಂದನೇನ |'}
              line3={'ಆಮೋದಿತೋಽಪಿ ನಿಗಮೈರ್ವಿಭುರಂಘ್ರಿಯುಗ್ಮೇ'}
              line4={'ಧತ್ತೇ ನತೇನ ಶಿರಸಾ ತವ ಮೌಲಿಮಾಲಾಮ್ || ೧೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚೂಡಾಪದೇನ ಪರಿಗೃಹ್ಯ ತವೋತ್ತರೀಯಂ'}
              line2={'ಮಾಲಾಮಪಿ ತ್ವದಲಕೈರಧಿವಾಸ್ಯ ದತ್ತಾಮ್ |'}
              line3={'ಪ್ರಾಯೇಣ ರಂಗಪತಿರೇಷ ಬಿಭರ್ತಿ ಗೋದೇ'}
              line4={'ಸೌಭಾಗ್ಯಸಂಪದಭಿಷೇಕಮಹಾಧಿಕಾರಮ್ || ೧೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತುಂಗೈರಕೃತ್ರಿಮಗಿರಃ ಸ್ವಯಮುತ್ತಮಾಂಗೈಃ'}
              line2={'ಯಂ ಸರ್ವಗಂಧ ಇತಿ ಸಾದರಮುದ್ವಹಂತಿ |'}
              line3={'ಆಮೋದಮನ್ಯಮಧಿಗಚ್ಛತಿ ಮಾಲಿಕಾಭಿಃ'}
              line4={'ಸೋಽಪಿ ತ್ವದೀಯಕುಟಿಲಾಲಕವಾಸಿತಾಭಿಃ || ೧೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಧನ್ಯೇ ಸಮಸ್ತಜಗತಾಂ ಪಿತುರುತ್ತಮಾಂಗೇ'}
              line2={'ತ್ವನ್ಮೌಲಿಮಾಲ್ಯಭರಸಂಭರಣೇನ ಭೂಯಃ |'}
              line3={'ಇಂದೀವರಸ್ರಜಮಿವಾದಧತಿ ತ್ವದೀಯಾ-'}
              line4={'ನ್ಯಾಕೇಕರಾಣಿ ಬಹುಮಾನವಿಲೋಕಿತಾನಿ || ೨೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಂಗೇಶ್ವರಸ್ಯ ತವ ಚ ಪ್ರಣಯಾನುಬಂಧಾತ್'}
              line2={'ಅನ್ಯೋನ್ಯಮಾಲ್ಯಪರಿವೃತ್ತಿಮಭಿಷ್ಟುವಂತಃ |'}
              line3={'ವಾಚಾಲಯಂತಿ ವಸುಧೇ ರಸಿಕಾಸ್ತ್ರಿಲೋಕೀಂ'}
              line4={'ನ್ಯೂನಾಧಿಕತ್ವಸಮತಾವಿಷಯೈರ್ವಿವಾದೈಃ || ೨೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದೂರ್ವಾದಲಪ್ರತಿಮಯಾ ತವ ದೇಹಕಾಂತ್ಯಾ'}
              line2={'ಗೋರೋಚನಾರುಚಿರಯಾ ಚ ತಥೇಂದಿರಾಯಾಃ |'}
              line3={'ಆಸೀದನುಜ್ಝಿತಶಿಖಾವಲಕಂಠಶೋಭಂ'}
              line4={'ಮಾಂಗಲ್ಯದಂ ಪ್ರಣಮತಾಂ ಮಧುವೈರಿಗಾತ್ರಮ್ || ೨೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅರ್ಚ್ಯಂ ಸಮರ್ಚ್ಯ ನಿಯಮೈರ್ನಿಗಮಪ್ರಸೂನೈಃ'}
              line2={'ನಾಥಂ ತ್ವಯಾ ಕಮಲಯಾ ಚ ಸಮೇಯಿವಾಂಸಮ್ |'}
              line3={'ಮಾತಶ್ಚಿರಂ ನಿರವಿಶನ್ನಿಜಮಾಧಿರಾಜ್ಯಂ'}
              line4={'ಮಾನ್ಯಾ ಮನುಪ್ರಭೃತಯೋಽಪಿ ಮಹೀಕ್ಷಿತಸ್ತೇ || ೨೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆರ್ದ್ರಾಪರಾಧಿನಿ ಜನೇಽಪ್ಯಭಿರಕ್ಷಣಾರ್ಥಂ'}
              line2={'ರಂಗೇಶ್ವರಸ್ಯ ರಮಯಾ ವಿನಿವೇದ್ಯಮಾನೇ |'}
              line3={'ಪಾರ್ಶ್ವೇ ಪರತ್ರ ಭವತೀ ಯದಿ ತತ್ರ ನಾಸೀತ್'}
              line4={'ಪ್ರಾಯೇಣ ದೇವಿ ವದನಂ ಪರಿವರ್ತಿತಂ ಸ್ಯಾತ್ || ೨೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗೋದೇ ಗುಣೈರಪನಯನ್ ಪ್ರಣತಾಪರಾಧಾನ್'}
              line2={'ಭ್ರೂಕ್ಷೇಪ ಏವ ತವ ಭೋಗರಸಾನುಕೂಲಃ |'}
              line3={'ಕರ್ಮಾನುಬಂಧಿ ಫಲದಾನರತಸ್ಯ ಭರ್ತುಃ'}
              line4={'ಸ್ವಾತಂತ್ರ್ಯದುರ್ವ್ಯಸನಮರ್ಮಭಿದಾ ನಿದಾನಮ್ || ೨೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಂಗೇ ತಟಿದ್ಗುಣವತೋ ರಮಯೈವ ಗೋದೇ'}
              line2={'ಕೃಷ್ಣಾಂಬುದಸ್ಯ ಘಟಿತಾಂ ಕೃಪಯಾ ಸುವೃಷ್ಟ್ಯಾ |'}
              line3={'ದೌರ್ಗತ್ಯದುರ್ವಿಷವಿನಾಶಸುಧಾನದೀಂ ತ್ವಾಂ'}
              line4={'ಸಂತಃ ಪ್ರಪದ್ಯ ಶಮಯಂತ್ಯಚಿರೇಣ ತಾಪಾನ್ || ೨೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜಾತಾಪರಾಧಮಪಿ ಮಾಮನುಕಂಪ್ಯ ಗೋದೇ'}
              line2={'ಗೋಪ್ತ್ರೀ ಯದಿ ತ್ವಮಸಿ ಯುಕ್ತಮಿದಂ ಭವತ್ಯಾಃ |'}
              line3={'ವಾತ್ಸಲ್ಯನಿರ್ಭರತಯಾ ಜನನೀ ಕುಮಾರಂ'}
              line4={'ಸ್ತನ್ಯೇನ ವರ್ಧಯತಿ ದಷ್ಟಪಯೋಧರಾಽಪಿ || ೨೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶತಮಖಮಣಿನೀಲಾ ಚಾರು ಕಲ್ಹಾರಹಸ್ತಾ'}
              line2={'ಸ್ತನಭರನಮಿತಾಂಗೀ ಸಾಂದ್ರವಾತ್ಸಲ್ಯಸಿಂಧುಃ |'}
              line3={'ಅಲಕವಿನಿಹಿತಾಭಿಃ ಸ್ರಗ್ಭರಾಕೃಷ್ಟನಾಥಾ'}
              line4={'ವಿಲಸತು ಹೃದಿ ಗೋದಾ ವಿಷ್ಣುಚಿತ್ತಾತ್ಮಜಾ ನಃ || ೨೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇತಿ ವಿಕಸಿತಭಕ್ತೇರುತ್ಥತಾಂ ವೇಂಕಟೇಶಾತ್'}
              line2={'ಬಹುಗುಣರಮಣೀಯಾಂ ವಕ್ತಿ ಗೋದಾಸ್ತುತಿಂ ಯಃ |'}
              line3={'ಸ ಭವತಿ ಬಹುಮಾನ್ಯಃ ಶ್ರೀಮತೋ ರಂಗಭರ್ತುಃ'}
              line4={'ಚರಣಕಮಲಸೇವಾಂ ಶಾಶ್ವತೀಮಭ್ಯುಪೈಷ್ಯನ್ || ೨೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇತಿ ಶ್ರೀವೇದಾಂತದೇಶಿಕವಿರಚಿತಾ ಗೋದಾಸ್ತುತಿಃ |'}
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


export default GodaSthuti;