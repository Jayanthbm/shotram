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

const RaghuveeraGadya = ({ navigation }) => {
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
          title="ಶ್ರೀ ರಘುವೀರ ಗದ್ಯಂ"
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
              line1={'ಜಯತ್ಯಾಶ್ರಿತ ಸಂತ್ರಾಸ ಧ್ವಾನ್ತ ವಿಧ್ವಂಸನೋದಯಃ ।'}
              line2={'ಪ್ರಭಾವಾನ್ ಸೀತಯಾ ದೇವ್ಯಾ ಪರಮ-ವ್ಯೋಮ ಭಾಸ್ಕರಃ ॥'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜಯ ಜಯ ಮಹಾವೀರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದೇವಾಸುರ ಸಮರ ಸಮಯ ಸಮುದಿತ ನಿಖಿಲ ನಿರ್ಜರ ನಿರ್ಧಾರಿತ'}
              line2={'ನಿರವಧಿಕಮಾಹಾತ್ಮ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಶವದನ ದಮಿತ ದೈವತ ಪರಿಷದಭ್ಯರ್ಥಿತ ದಾಶರಥಿ-ಭಾವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಿನಕರ ಕುಲ ಕಮಲ ದಿವಾಕರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಿವಿಷದಧಿಪತಿ ರಣ ಸಹಚರಣ ಚತುರ ದಶರಥ ಚರಮಋಣ ವಿಮೋಚನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೋಮಲಸುತಾ ಕುಮಾಅಭಾವ ಕಞ್ಚು ಕಿತ ಕಾರಣಾಕಾರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೌಮಾರ ಕೇಳಿ ಗೋಪಾಯಿತ ಕೌಶಿಕಾಧ್ವರ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಣಾಧ್ವರ ಧುರ್ಯ ಭವ್ಯ ದಿವ್ಯಾಸ್ತ್ರ ಬೃನ್ದ ವನ್ದಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಣತ ಜನ ವಿಮತ ವಿಮಥನ ದುರ್ಲಲಿತದೋರ್ಲಲಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತನುತರ ವಿಶಿಖ ವಿತಾಡನ ವಿಘಟಿತ ವಿಶರಾರು ಶರಾರು'}
              line2={'ತಾಟಕಾ ತಾಟಕೇಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜಡ-ಕಿರಣ ಶಕಲ-ಧರಜಟಿಲ ನಟ ಪತಿ-ಮಕುಟ ನಟನ-ಪಟು'}
              line2={'ವಿಬುಧ-ಸರಿದ್-ಅತಿ-ಬಹುಲ ಮಧು-ಗಲನ ಲಲಿತ-ಪದ'}
              line3={'ನಲಿನ-ರಜ-ಉಪ-ಮೃದಿತ ನಿಜ-ವೃಜಿನ ಜಹದುಪಲ-ತನು-ರುಚಿರ'}
              line4={'ಪರಮ-ಮುನಿ ವರ-ಯುವತಿ ನುತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕುಶಿಕ-ಸುತಕಥಿತ ವಿದಿತ ನವ ವಿವಿಧ ಕಥ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮೈಥಿಲ ನಗರ ಸುಲೋಚನಾ ಲೋಚನ ಚಕೋರ ಚನ್ದ್ರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಖಣ್ಡ-ಪರಶು ಕೋದಣ್ಡ ಪ್ರಕಾಣ್ಡ ಖಣ್ಡನ ಶೌಣ್ಡ ಭುಜ-ದಣ್ಡ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚಣ್ಡ-ಕರ ಕಿರಣ-ಮಣ್ಡಲ ಬೋಧಿತ ಪುಣ್ಡರೀಕ ವನ ರುಚಿ ಲುಣ್ಟಾಕ ಲೋಚನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮೋಚಿತ ಜನಕ ಹೃದಯ ಶಙ್ಕಾತಙ್ಕ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪರಿಹೃತ ನಿಖಿಲ ನರಪತಿ ವರಣ ಜನಕ-ದುಹಿತ ಕುಚ-ತಟ ವಿಹರಣ'}
              line2={'ಸಮುಚಿತ ಕರತಲ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶತಕೋಟಿ ಶತಗುಣ ಕಠಿನ ಪರಶು ಧರ ಮುನಿವರ ಕರ ಧೃತ'}
              line2={'ದುರವನಮ-ತಮ-ನಿಜ ಧನುರಾಕರ್ಷಣ ಪ್ರಕಾಶಿತ ಪಾರಮೇಷ್ಠ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕ್ರತು-ಹರ ಶಿಖರಿ ಕನ್ತುಕ ವಿಹೃತಿಮುಖ ಜಗದರುನ್ತುದ'}
              line2={'ಜಿತಹರಿದನ್ತ-ದನ್ತುರೋದನ್ತ ದಶ-ವದನ ದಮನ ಕುಶಲ ದಶ-ಶತ-ಭುಜ'}
              line3={'ನೃಪತಿ-ಕುಲ-ರುಧಿರಝರ ಭರಿತ ಪೃಥುತರ ತಟಾಕ ತರ್ಪಿತ'}
            />

            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಿತೃಕ ಭೃಗು-ಪತಿ ಸುಗತಿ-ವಿಹತಿ ಕರ ನತ ಪರುಡಿಷು ಪರಿಘ!'}
              line2={' ಅನೃತ ಭಯ ಮುಷಿತ ಹೃದಯ ಪಿತೃ ವಚನ ಪಾಲನ ಪ್ರತಿಜ್ಞಾವಜ್ಞಾತ'}
              line3={'ಯೌವರಾಜ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿಷಾದ ರಾಜ ಸೌಹೃದ ಸೂಚಿತ ಸೌಶೀಲ್ಯ ಸಾಗರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭರದ್ವಾಜ ಶಾಸನಪರಿಗೃಹೀತ ವಿಚಿತ್ರ ಚಿತ್ರಕೂಟ ಗಿರಿ ಕಟಕ'}
              line2={'ತಟ ರಮ್ಯಾವಸಥ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನನ್ಯ ಶಾಸನೀಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಣತ ಭರತ ಮಕುಟತಟ ಸುಘಟಿತ ಪಾದುಕಾಗ್ರ್ಯಾಭಿಷೇಕ ನಿರ್ವರ್ತಿತ'}
              line2={'ಸರ್ವಲೋಕ ಯೋಗಕ್ಷೇಮ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಿಶಿತ ರುಚಿ ವಿಹಿತ ದುರಿತ ವಲ-ಮಥನ ತನಯ ಬಲಿಭುಗನು-ಗತಿ ಸರಭಸಶಯನ'}
              line2={'ತೃಣ'}
              line3={'ಶಕಲ ಪರಿಪತನ ಭಯ ಚರಿತ ಸಕಲ ಸುರಮುನಿ-ವರ-ಬಹುಮತ ಮಹಾಸ್ತ್ರ'}
              line4={'ಸಾಮರ್ಥ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದ್ರುಹಿಣ ಹರ ವಲ-ಮಥನ ದುರಾಲಕ್ಷ್ಯ ಶರ ಲಕ್ಷ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಣ್ಡಕಾ ತಪೋವನ ಜಙ್ಗಮ ಪಾರಿಜಾತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿರಾಧ ಹರಿಣ ಶಾರ್ದೂಲ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಲುಲಿತ ಬಹುಫಲ ಮಖ ಕಲಮ ರಜನಿ-ಚರ ಮೃಗ ಮೃಗಯಾನಮ್ಭ'}
              line2={'ಸಂಭೃತಚೀರಭೃದನುರೋಧ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ರಿಶಿರಃ ಶಿರಸ್ತ್ರಿತಯ ತಿಮಿರ ನಿರಾಸ ವಾಸರ-ಕರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದೂಷಣ ಜಲನಿಧಿ ಶೋಶಾಣ ತೋಷಿತ ಋಷಿ-ಗಣ ಘೋಷಿತ ವಿಜಯ ಘೋಷಣ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಖರತರ ಖರ ತರು ಖಣ್ಡನ ಚಣ್ಡ ಪವನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದ್ವಿಸಪ್ತ ರಕ್ಷಃ-ಸಹಸ್ರ ನಲ-ವನ ವಿಲೋಲನ ಮಹಾ-ಕಲಭ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಸಹಾಯ ಶೂರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನಪಾಯ ಸಾಹಸ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಹಿತ ಮಹಾ-ಮೃಥ ದರ್ಶನ ಮುದಿತ ಮೈಥಿಲೀ ದೃಢ-ತರ ಪರಿರಮ್ಭಣ'}
              line2={'ವಿಭವವಿರೋಪಿತ ವಿಕಟ ವೀರವ್ರಣ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾರೀಚ ಮಾಯಾ ಮೃಗ ಚರ್ಮ ಪರಿಕರ್ಮಿತ ನಿರ್ಭರ ದರ್ಭಾಸ್ತರಣ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಕ್ರಮ ಯಶೋ ಲಾಭ ವಿಕ್ರೀತ ಜೀವಿತ ಗೃಘ್ರ-ರಾಜದೇಹ ದಿಧಕ್ಷಾ ಲಕ್ಷಿತ-ಭಕ್ತ-ಜನ ದಾಕ್ಷಿಣ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಲ್ಪಿತ ವಿಬುಧ-ಭಾವ ಕಬನ್ಧಾಭಿನನ್ದಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅವನ್ಧ್ಯ ಮಹಿಮ ಮುನಿಜನ ಭಜನ ಮುಷಿತ ಹೃದಯ ಕಲುಷ ಶಬರೀ'}
              line2={'ಮೋಕ್ಷಸಾಕ್ಷಿಭೂತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಭಞ್ಜನ-ತನಯ ಭಾವುಕ ಭಾಷಿತ ರಞ್ಜಿತ ಹೃದಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತರಣಿ-ಸುತ ಶರಣಾಗತಿಪರತನ್ತ್ರೀಕೃತ ಸ್ವಾತನ್ತ್ರ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದೃಢ ಘಟಿತ ಕೈಲಾಸ ಕೋಟಿ ವಿಕಟ ದುನ್ದುಭಿ ಕಙ್ಕಾಲ ಕೂಟ ದೂರ ವಿಕ್ಷೇಪ'}
              line2={'ದಕ್ಷ-ದಕ್ಷಿಣೇತರ ಪಾದಾಙ್ಗುಷ್ಠ ದರ ಚಲನ ವಿಶ್ವಸ್ತ ಸುಹೃದಾಶಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅತಿಪೃಥುಲ ಬಹು ವಿಟಪಿ ಗಿರಿ ಧರಣಿ ವಿವರ ಯುಗಪದುದಯ ವಿವೃತ ಚಿತ್ರಪುಙ್ಗ'}
              line2={'ವೈಚಿತ್ರ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಪುಲ ಭುಜ ಶೈಲ ಮೂಲ ನಿಬಿಡ ನಿಪೀಡಿತ ರಾವಣ ರಣರಣಕ ಜನಕ'}
              line2={'ಚತುರುದಧಿ'}
              line3={'ವಿಹರಣ ಚತುರ ಕಪಿ-ಕುಲ ಪತಿ ಹೃದಯ ವಿಶಾಲ ಶಿಲಾತಲ-ದಾರಣ ದಾರುಣ'}
              line4={'ಶಿಲೀಮುಖ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಪಾರ ಪಾರಾವಾರ ಪರಿಖಾ ಪರಿವೃತ ಪರಪುರ ಪರಿಸೃತ ದವ ದಹನ'}
              line2={'ಜವನ-ಪವನ-ಭವ ಕಪಿವರ ಪರಿಷ್ವಙ್ಗ ಭಾವಿತ ಸರ್ವಸ್ವ ದಾನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಹಿತ ಸಹೋದರ ರಕ್ಷಃ ಪರಿಗ್ರಹ ವಿಸಂವಾದಿವಿವಿಧ ಸಚಿವ ವಿಪ್ರಲಮ್ಭ ಸಮಯ'}
              line2={'ಸಂರಮ್ಭ ಸಮುಜ್ಜೃಮ್ಭಿತ ಸರ್ವೇಶ್ವರ ಭಾವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಕೃತ್ಪ್ರಪನ್ನ ಜನ ಸಂರಕ್ಷಣ ದೀಕ್ಷಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೀರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸತ್ಯವ್ರತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರತಿಶಯನ ಭೂಮಿಕಾ ಭೂಷಿತ ಪಯೋಧಿ ಪುಲಿನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಲಯ ಶಿಖಿ ಪರುಷ ವಿಶಿಖ ಶಿಖಾ ಶೋಷಿತಾಕೂಪಾರ ವಾರಿ ಪೂರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಬಲ ರಿಪು ಕಲಹ ಕುತುಕ ಚಟುಲ ಕಪಿ-ಕುಲ ಕರ-ತಲತುಲಿತ ಹೃತ ಗಿರಿನಿಕರ'}
              line2={'ಸಾಧಿತ'}
              line3={'ಸೇತು-ಪಧ ಸೀಮಾ ಸೀಮನ್ತಿತ ಸಮುದ್ರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದ್ರುತ ಗತಿ ತರು ಮೃಗ ವರೂಥಿನೀ ನಿರುದ್ಧ ಲಙ್ಕಾವರೋಧ ವೇಪಥು ಲಾಸ್ಯ'}
              line2={'ಲೀಲೋಪದೇಶ'}
              line3={'ದೇಶಿಕ ಧನುರ್ಜ್ಯಾಘೋಷ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗಗನ-ಚರ ಕನಕ-ಗಿರಿ ಗರಿಮ-ಧರ ನಿಗಮ-ಮಯ ನಿಜ-ಗರುಡ ಗರುದನಿಲ ಲವ'}
              line2={'ಗಲಿತ'}
              line3={'ವಿಷ-ವದನ ಶರ ಕದನ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಕೃತ ಚರ ವನಚರ ರಣ ಕರಣ ವೈಲಕ್ಷ್ಯ ಕೂಣಿತಾಕ್ಷ ಬಹುವಿಧ ರಕ್ಷೋ'}
              line2={'ಬಲಾಧ್ಯಕ್ಷ ವಕ್ಷಃ ಕವಾಟ ಪಾಟನ ಪಟಿಮ ಸಾಟೋಪ ಕೋಪಾವಲೇಪ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಟುರಟದ್ ಅಟನಿ ಟಙ್ಕೃತಿ ಚಟುಲ ಕಠೋರ ಕಾರ್ಮುಕ !'}
              line2={'ವಿಶಙ್ಕಟ ವಿಶಿಖ ವಿತಾಡನ ವಿಘಟಿತ ಮಕುಟ ವಿಹ್ವಲ ವಿಶ್ರವಸ್ತನಯವಿಶ್ರಮ'}
              line3={'ಸಮಯ ವಿಶ್ರಾಣನ ವಿಖ್ಯಾತ ವಿಕ್ರಮ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕುಮ್ಭಕರ್ಣ ಕುಲ ಗಿರಿ ವಿದಲನ ದಮ್ಭೋಲಿ ಭೂತ ನಿಃಶಙ್ಕ ಕಙ್ಕಪತ್ರ !'}
            />

            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಭಿಚರಣ ಹುತವಹ ಪರಿಚರಣ ವಿಘಟನ ಸರಭಸ ಪರಿಪತದ್'}
              line2={'ಅಪರಿಮಿತಕಪಿಬಲ'}
              line3={'ಜಲಧಿಲಹರಿ ಕಲಕಲ-ರವ ಕುಪಿತ ಮಘವ-ಜಿದಭಿಹನನ-ಕೃದನುಜ ಸಾಕ್ಷಿಕ'}
              line4={'ರಾಕ್ಷಸ ದ್ವನ್ದ್ವ-ಯುದ್ಧ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಪ್ರತಿದ್ವನ್ದ್ವ ಪೌರುಷ !'}
            /><St
              color={textColor}
              fontSize={font}
              line1={'ತ್ರ ಯಮ್ಬಕ ಸಮಧಿಕ ಘೋರಾಸ್ತ್ರಾಡಮ್ಬರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾರಥಿ ಹೃತ ರಥ ಸತ್ರಪ ಶಾತ್ರವ ಸತ್ಯಾಪಿತ ಪ್ರತಾಪ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶಿತಶರಕೃತಲವನದಶಮುಖ ಮುಖ ದಶಕ ನಿಪತನ ಪುನರುದಯ ದರಗಲಿತ'}
              line2={'ಜನಿತ'}
              line3={'ದರ ತರಲ ಹರಿ-ಹಯ ನಯನ ನಲಿನ-ವನ ರುಚಿ-ಖಚಿತ ನಿಪತಿತ ಸುರ-ತರು'}
              line4={'ಕುಸುಮ ವಿತತಿ'}
              line5={'ಸುರಭಿತ ರಥ ಪಥ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಖಿಲ ಜಗದಧಿಕ ಭುಜ ಬಲ ವರ ಬಲ ದಶ-ಲಪನ ಲಪನ ದಶಕ ಲವನ-ಜನಿತ'}
              line2={'ಕದನ'}
              line3={'ಪರವಶ ರಜನಿ-ಚರ ಯುವತಿ ವಿಲಪನ ವಚನ ಸಮವಿಷಯ ನಿಗಮ ಶಿಖರ'}
              line4={'ನಿಕರ ಮುಖರ ಮುಖ ಮುನಿ-ವರ ಪರಿಪಣಿತ!'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಭಿಗತ ಶತಮಖ ಹುತವಹ ಪಿತೃಪತಿ ನಿರೃತಿ ವರುಣ ಪವನ ಧ'}
              line2={'ನದಗಿರಿಶಪ್ರಮುಖ ಸುರಪತಿ ನುತಿ ಮುದಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಮಿತ ಮತಿ ವಿಧಿ ವಿದಿತ ಕಥಿತ ನಿಜ ವಿಭವ ಜಲಧಿ ಪೃಷತ ಲವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಗತ ಭಯ ವಿಬುಧ ವಿಬೋಧಿತ ವೀರ ಶಯನ ಶಾಯಿತ ವಾನರ ಪೃತನೌಘ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸ್ವ ಸಮಯ ವಿಘಟಿತ ಸುಘಟಿತ ಸಹೃದಯ ಸಹಧರ್ಮಚಾರಿಣೀಕ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಭೀಷಣ ವಶಂವದೀ-ಕೃತ ಲಙ್ಕೈಶ್ವರ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿಷ್ಪನ್ನ ಕೃತ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಖ ಪುಷ್ಪಿತ ರಿಪು ಪಕ್ಷ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪುಷ್ಪಕ ರಭಸ ಗತಿ ಗೋಷ್ಪದೀ-ಕೃತ ಗಗನಾರ್ಣವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರತಿಜ್ಞಾರ್ಣವ ತರಣ ಕೃತ ಕ್ಷಣ ಭರತ ಮನೋರಥ ಸಂಹಿತ ಸಿಂಹಾಸನಾಧಿರೂಢ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸ್ವಾಮಿನ್ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಾಘವ ಸಿಂಹ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಹಾಟಕ ಗಿರಿ ಕಟಕ ಲಡಹ ಪಾದ ಪೀಠ ನಿಕಟ ತಟ ಪರಿಲುಠಿತ ನಿಖಿಲನೃಪತಿ ಕಿರೀಟ'}
              line2={'ಕೋಟಿ ವಿವಿಧ ಮಣಿ ಗಣ ಕಿರಣ ನಿಕರ ನೀರಾಜಿತಚರಣ ರಾಜೀವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದಿವ್ಯ ಭೌಮಾಯೋಧ್ಯಾಧಿದೈವತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಿತೃ ವಧ ಕುಪಿತ ಪರಶು-ಧರ ಮುನಿ ವಿಹಿತ ನೃಪ ಹನನ ಕದನ ಪೂರ್ವಕಾಲಪ್ರಭವ'}
              line2={'ಶತ ಗುಣ ಪ್ರತಿಷ್ಠಾಪಿತ ಧಾರ್ಮಿಕ ರಾಜ ವಂಶ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶುಚ ಚರಿತ ರತ ಭರತ ಖರ್ವಿತ ಗರ್ವ ಗನ್ಧರ್ವ ಯೂಥ ಗೀತ ವಿಜಯ ಗಾಥಾಶತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶಾಸಿತ ಮಧು-ಸುತ ಶತ್ರುಘ್ನ ಸೇವಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕುಶ ಲವ ಪರಿಗೃಹೀತ ಕುಲ ಗಾಥಾ ವಿಶೇಷ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿಧಿ ವಶ ಪರಿಣಮದಮರ ಭಣಿತಿ ಕವಿವರ ರಚಿತ ನಿಜ ಚರಿತನಿಬನ್ಧನ ನಿಶಮನ'}
              line2={'ನಿರ್ವೃತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸರ್ವ ಜನ ಸಮ್ಮಾನಿತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪುನರುಪಸ್ಥಾಪಿತ ವಿಮಾನ ವರ ವಿಶ್ರಾಣನ ಪ್ರೀಣಿತ ವೈಶ್ರವಣ ವಿಶ್ರಾವಿತ ಯಶಃ '}
              line2={'ಪ್ರಪಞ್ಚ !'}
            />

            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಞ್ಚತಾಪನ್ನ ಮುನಿಕುಮಾರ ಸಞ್ಜೀವನಾಮೃತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ರೇತಾಯುಗ ಪ್ರವರ್ತಿತ ಕಾರ್ತಯುಗ ವೃತ್ತಾನ್ತ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅವಿಕಲ ಬಹುಸುವರ್ಣ ಹಯ-ಮಖ ಸಹಸ್ರ ನಿರ್ವಹಣ ನಿರ್ವರ್ತಿತ '}
              line2={'ನಿಜವರ್ಣಾಶ್ರಮ ಧರ್ಮ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸರ್ವ ಕರ್ಮ ಸಮಾರಾಧ್ಯ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸನಾತನ ಧರ್ಮ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾಕೇತ ಜನಪದ ಜನಿ ಧನಿಕ ಜಙ್ಗಮ ತದಿತರ ಜನ್ತು ಜಾತ ದಿವ್ಯ ಗತಿ ದಾನ ದರ್ಶಿತ'}
              line2={'ನಿತ್ಯ'}
              line3={'ನಿಸ್ಸೀಮ ವೈಭವ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭವ ತಪನ ತಾಪಿತ ಭಕ್ತಜನ ಭದ್ರಾರಾಮ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರೀ ರಾಮಭದ್ರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಮಸ್ತೇ ಪುನಸ್ತೇ ನಮಃ ॥'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಸಹಾಯ ಶೂರ !'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚತುರ್ಮುಖೇಶ್ವರಮುಖೈಃ ಪುತ್ರ ಪೌತ್ರಾದಿ ಶಾಲಿನೇ ।'}
              line2={'ನಮಃ ಸೀತಾ ಸಮೇತಾಯ ರಾಮಾಯ ಗೃಹಮೇಧಿನೇ ॥'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕವಿಕಥಕ ಸಿಂಹಕಥಿತಂ'}
              line2={'ಕಠೋತ ಸುಕುಮಾರ ಗುಮ್ಭ ಗಮ್ಭೀರಮ್ ।'}
              line3={'ಭವ ಭಯ ಭೇಷಜಮೇತತ್'}
              line4={'ಪಠತ ಮಹಾವೀರ ವೈಭವಂ ಸುಧಿಯಃ ॥'}
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


export default RaghuveeraGadya;