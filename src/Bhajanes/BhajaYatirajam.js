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

const BhajaYatirajam = ({ navigation }) => {
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
      navigation.navigate('BhajaneScreen');
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
          title="ಭಜ ಯತಿರಾಜಂ "
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
              line1={'ಭಜ ಯತಿರಾಜಂ ಭಜ ಯತಿರಾಜಂ ಭಜ ಯತಿರಾಜಂ ಭವಭೀರೋ ।'}
              line2={'ಭಜ ಯತಿರಾಜಂ ಭಜ ಯತಿರಾಜಂ ಭಜ ಯತಿರಾಜಂ ಭವಭೀರೋ ॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರೀರಙ್ಗೇಶಯಜಯಾಶ್ರಯಕೇತುಃ ಶ್ರಿತಜನಸಂರಕ್ಷಣಜೀವಾತುಃ ।'}
              line2={'ಭವಭಯಜಲಧೇರೇವ ಹಿ ಸೇತುಃ ಪದ್ಮಾನೇತುಃ ಪ್ರಣತೌ ಹೇತುಃ ॥ ೧॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆದೌ ಜಗದಾಧಾರಃ ಶೇಷಃ ತದನು ಸುಮಿತ್ರಾನನ್ದನವೇಷಃ ।'}
              line2={'ತದುಪರಿ ಧೃತಹಲಮುಸಲವಿಶೇಷಃ ತದನನ್ತರಮಭವದ್ಗುರುರೇಷಃ ॥ ೨॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭುಙ್ಕ್ತೇ ವೈಷಯಿಕಂ ಸುಖಮನ್ಯಃ ಪ್ರಚಕಾಸ್ತ್ಯೇವ ಅನಶ್ನನ್ನನ್ಯಃ ।'}
              line2={'ಇತಿ ಯಸ್ತತ್ವಂ ಪ್ರಾಹ ವದಾನ್ಯಃ ತಸ್ಮಾದಧಿಕಃ ಕೋ ನು ವದಾನ್ಯಃ ॥ ೩॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಷ್ಟೇ ನಯನೇ ಕಸ್ಯಾಲೋಕಃ ಚಿತ್ತೇ ಮತ್ತೇ ಕಸ್ಯ ವಿವೇಕಃ ।'}
              line2={'ಕ್ಷೀಣೇ ಪುಣ್ಯೇ ಕಃ ಸುರಲೋಕಃ ಕಾಮೇ ಧೂತೇ ಕಸ್ತವ ಶೋಕಃ ॥ ೪॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿಶಿ ವನಿತಾಸುಖನಿದ್ರಾಲೋಲಃ ಪ್ರಾತಃ ಪರದೂಷಣಪಟುಶೀಲಃ ।'}
              line2={'ಅನ್ತರ್ಯಾತಿ ನಿಜಾಯುಷ್ಕಾಲಃ ಕಿಂ ಜಾನಾತಿ ನರಃ ಪಶುಲೀಲಃ ॥ ೫॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೇಚಿಲ್ಲೀಲಾಲಾಲಸಗತಯಃ ಕೇಚಿದ್ಬಾಲಾಲಾಲಿತರತಯಃ ।'}
              line2={'ಕೇಚಿದ್ದೋಲಾಯಿತಹಮತಯಃ ಕೇಽಪಿ ನ ಸನ್ತ್ಯರ್ಚಿತಯತಿಪತಯಃ ॥ ೬॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಾವಾನಬಲೋ ಜರಯಾ ದೇಹಃ ತಾವಾನ್ ಪ್ರಬಲೋ ವಿಷಯೇ ಮೋಹಃ ।'}
              line2={'ವಚಸಿ ವಿರಕ್ತಿಃ ಶ್ರುತಿಪರಿವಾಹಃ ಮನಸಿ ಹಿತಸ್ತ್ವಪರೋಽಪಿ ವಿವಾಹಃ ॥ ೭॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಲುಷನಿಕಾಯಂ ಲಲನಾಕಾಯಂ ಪಶ್ಯನ್ಮುಹ್ಯಸಿ ಸಾಯಂ ಸಾಯಮ್ ।'}
              line2={'ಜಹಿ ಜಹಿ ಹೇಯಂ ತದ್ವ್ಯವಸಾಯಂ ಸ್ಮರ ನಿರಪಾಯಂ ಚರಮೋಪಾಯಮ್ ॥ ೮॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಾತ್ರಿಂದಿವಮಪಿ ಭಿಕ್ಷಾಚರ್ಯಾ ಕಲಹಾಯೈವಾಗಚ್ಛತಿ ಭಾರ್ಯಾ ।'}
              line2={'ಮಧ್ಯೇ ಬಾನ್ಧವಸೇವಾ ಕಾರ್ಯಾ ಕಥಯ ಕದಾ ತವ ದೇವಸಪರ್ಯಾ ॥ ೯॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನ್ಧಂ ನಯನಂ ಭೂಮೌ ಶಯನಂ ಮನ್ದಂ ವಚನಂ ಮಲಿನಂ ವದನಮ್ ।'}
              line2={'ತಸ್ಮಿನ್ ಕಾಲೇ ಗೋಪ್ತುಂ ಸದನಂ ವಾಞ್ಛಸಿ ದತ್ತತನೂಜಾನಯನಮ್ ॥ ೧೦॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತಾಲಚ್ಛದಕೃತಕುಬ್ಜಕುಟೀರಃ ಪ್ರತಿಗೃಹಸನ್ಧ್ಯಾಕಬಲಾಹಾರಃ ।'}
              line2={'ವಿವಿಧಪಟಚ್ಚರಭಾರಃ ಕ್ರೂರಃ ಸೋಽಪಿ ವಿಧಾತೃಸಮಾಹಙ್ಕಾರಃ ॥ ೧೧॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮನ್ತ್ರದ್ರವ್ಯವಿಶುದ್ಧೋ ಯಾಗಃ ಸರ್ವಾರಮ್ಭವಿರಾಗಸ್ತ್ಯಾಗಃ ।'}
              line2={'ಕರ್ತುಂ ಶಕ್ಯೋ ನ ಕಲೌ ಯೋಗಃ ಕಿನ್ತು ಯತೀಶಗುಣಾಮೃತಭೋಗಃ ॥ ೧೨॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಉಪರಿ ಮಹೋಪಲವರ್ಷಾಸಾರೋ ಮಾರ್ಗೇ ಕಣ್ಟಕಕರ್ದಮಪೂರಃ ।'}
              line2={'ಕಕ್ಷೇ ಭಾರಃ ಶಿರಸಿ ಕಿಶೋರಃ ಸುಖಯತಿ ಘೋರಃ ಕಂ ಸಂಸಾರಃ ॥ ೧೩॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭಜಸಿ ವೃಥಾ ವಿಷಯೇಷು ದುರಾಶಾಂ ವಿವಿಧವಿಚಿತ್ರಮನೋರಥಪಾಶಾಮ್ ।'}
              line2={'ಕಿಯದಪಿ ಲಭಸೇ ನ ಹಿ ತತ್ರೈಕಂ ಕಿನ್ತು ವ್ರಜಸಿ ಮಹಾನ್ತಂ ಶೋಕಮ್ ॥ ೧೪॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮನುಜಪತಿಂ ವಾ ದಿಗಧಿಪತಿಂ ವಾ ಜಲಜಭವಂ ವಾ ಜಗದಧಿಪಂ ವಾ ।'}
              line2={'ಮಮತಾಹಙ್ಕೃತಿಮಲಿನೋ ಲೋಕೋ ನಿನ್ದತಿ ನಿನ್ದತಿ ನಿನ್ದತ್ಯೇವ ॥ ೧೬॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಶ್ಚನ ಲೋಕೇ ಕರಪುಟಪಾತ್ರಃ ಪಾತುಂ ಸುತಮಾಶ್ರಿತಮಠಸತ್ರಃ ।'}
              line2={'ತಸ್ಮಿನ್ವೃದ್ಧೇ ತಂ ಸಕಲತ್ರಃ ಶಪತಿ ಹಿ ರಣ್ಡಾಸುತ ಇತಿ ಪುತ್ರಃ ॥ ೧೫॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಾಪಹತೋ ವಾ ಪುಣ್ಯಯುತೋ ವಾ ಸುರನರತಿರ್ಯಗ್ಜಾತಿಗತೋ ವಾ ।'}
              line2={'ರಾಮಾನುಜಪದತೀರ್ಥಾನ್ಮುಕ್ತಿಂ ವಿನ್ದತಿ ವಿನ್ದತಿ ವಿನ್ದತ್ಯೇವ ॥ ೧೭॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗುಣಗುಣಿನೋರ್ಭೇದಃ ಕಿಲ ನಿತ್ಯಃ ಚಿದಚಿದ್ದ್ವಯಪರಭೇದಃ ಸತ್ಯಃ ।'}
              line2={'ತದ್ದ್ವಯದೇಹೋ ಹರಿರಿತಿ ತತ್ತ್ವಂ ಪಶ್ಯ ವಿಶಿಷ್ಟಾದ್ವೈತಂ ತತ್ತ್ವಂ ॥ ೧೮॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯತಿಪತಿಪದಜಲಗಣಿಕಾಸೇಕಃ ಚತುರಕ್ಷರಪದಯುಗ್ಮವಿವೇಕಃ ।'}
              line2={'ಯಸ್ಯ ತು ಸಾಲನಗರ್ಯವಲೋಕಃ ತಸ್ಯ ಪದೇನ ಹತೋ ಯಮಲೋಕಃ ॥ ೧೯॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚಿನ್ತಯ ಸರ್ವಂ ಚಿದಚಿದ್ರೂಪಂ ತನುರಿತಿ ತಸ್ಯ ಹರೇರನುರೂಪಮ್ ।'}
              line2={'ತಸ್ಮಾತ್ ಕಸ್ಮಿನ್ಕಲಯಸಿ ಕೋಪಂ ಪಶ್ಚಾದ್ಭಜಸಿ ದುರಾಪಂ ತಾಪಮ್ ॥ ೨೦॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಶ್ಚತುರಕ್ಷರಮನ್ತ್ರರಹಸ್ಯಂ ವೇದ ತಮೇವ ವೃಣೀಹಿ ಸದಸ್ಯಮ್ ।'}
              line2={'ತಚ್ಚರಣದ್ವಯದಾಸ್ಯಮುಪಾಸ್ಯಂ ತದ್ವಿಪರೀತಂ ಮತಮಪಹಾಸ್ಯಮ್ ॥ ೨೧॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೈಷ್ಣವಕುಲಗುಣದೂಷಣಚಿನ್ತಾಂ ಮಾ ಕುರು ನಿಜಕುಲಶೀಲಾಹನ್ತಾಮ್ ।'}
              line2={'ಯತಿಪತಿರೇವ ಹಿ ಗುರುರೇತೇಷಾಮಿತಿ ಜಾನೀಹಿ ಮಹತ್ವಂ ತೇಷಾಮ್ ॥ ೨೨॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸುಮಸುಕುಮಾರಂ ಶೋಭಿತಮಾರಂ ರತಿಸುಖಸಾರಂ ಯುವತಿಶರೀರಮ್ ।'}
              line2={'ಗತಜೀವಿತಮತಿಘೋರವಿಕಾರಂ ದೃಷ್ಟ್ವಾ ಗಚ್ಛಸಿ ದೂರಂ ದೂರಮ್ ॥ ೨೩॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿದ್ಯಾನಿಪುಣಾ ವಯಮಿತ್ಯನ್ಯೇ ಹೃದ್ಯಾ ಧನಿನೋ ವಯಮಿತ್ಯನ್ಯೇ ।'}
              line2={'ಸತ್ಕುಲಜಾತಾ ವಯಮಿತ್ಯನ್ಯೇ ತೇಷು ಕಲಿಂ ಪರಿಪೂರ್ಣಂ ಮನ್ಯೇ ॥ ೨೪॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಮಕಿಙ್ಕರಕರಮೂಲೇ ಶೂಲೇ ಪತದಭಿಯಾತಿ ಹಿ ಫಾಲೇ ಫಾಲೇ ।'}
              line2={'ದಹತಿ ತನುಂ ಪ್ರತಿಕೂಲೇ ಕಾಲೇ ಕಂ ರಮಯಸಿ ತತ್ಕಾಲೇ ಬಾಲೇ ॥ ೨೫॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನರವಾಹನಗಜತುರಗಾರೂಡ್ಃಆಃ ನಾರೀಸುತಪೋಷಣಗುಣಮೂಢಾಃ ।'}
              line2={'ನಾನಾರಞ್ಜಕವಿದ್ಯಾಪ್ರೌಢಾಃ ನಾಗರಿಕಾಃ ಕಿಂ ಯತಯೋ ಮೂಢಾಃ ॥ ೨೬॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಸ್ಯ ಮುಖಸ್ಥಾ ಯತಿಪತಿಸೂಕ್ತಿಃ ತಸ್ಯ ಕರಸ್ಥಾ ವಿಲಸತಿ ಮುಕ್ತಿಃ ।'}
              line2={'ನರಕೇ ಪತಿತಂ ನವನವಯುಕ್ತಿಃ ನಹಿ ರಕ್ಷತಿ ಸಾಮಾನ್ಯನಿರುಕ್ತಿಃ ॥ ೨೭॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರುತಿಶಿರಸಾಮತ್ಯನ್ತವಿದೂಷ್ಯಂ ಸೂತ್ರಾನಭಿಮತಮತಿವೈದುಷ್ಯಮ್ ।'}
              line2={'ಪ್ರಥಮಮ್ ಮಙ್ಗಲಮನೃತವಿಶೇಷ್ಯಂ ಪ್ರಲಪಸಿ ಕಿಂ ಪ್ರಾಕೃತಕೃತಭಾಷ್ಯಂ ॥ ೨೮॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತಸ್ಕರಜಾರವಿದೂಷಕಧೂರ್ತಾ ಮಸ್ಕರಿಮೌನಿದಿಗಮ್ಬರವೃತ್ತಾಃ ।'}
              line2={'ಗುಪ್ತಧನೀಕೃತ ಧನಮದಮತ್ತಾಃ ಗುರವಃ ಕಿಂ ಪರವಞ್ಚಕಚಿತ್ತಾಃ ॥ ೨೯॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಾನ್ತಿಮತೀಸುಕುಮಾರಕುಮಾರಂ ಕೇಶವಯಜ್ವಕಿಶೋರಮುದಾರಮ್ । '}
              line2={'ಯಜ್ವ ಪಾಠಭೇದ ಸಿಂಹ ರಾಮಾನುಜಮಹಿರಾಡವತಾರಂ ಮೂಕಾನ್ಧಾನಪಿ ಮೋಕ್ಷಯಿತಾರಮ್ ॥ ೩೦॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಾಷಾಯಾಮ್ಬರಕವಚಿತಗಾತ್ರಂ ಕಲಿತಕಮಣ್ಡಲುದಣ್ಡಪವಿತ್ರಂ ।'}
              line2={'ವಿಧೃತಶಿಖಾಹರಿಣಾಜಿನಸೂತ್ರಂ ವ್ಯಾಖ್ಯಾತದ್ವೈಪಾಯನಸೂತ್ರಮ್ ॥ ೩೧॥ '}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಾಮುನಪೂರ್ಣಕೃಪೋಜ್ಜ್ವಲಗಾತ್ರಂ ರಾಮಾಬ್ಜಾಕ್ಷಮುನೀಕ್ಷಣಪಾತ್ರಮ್ ।'}
              line2={'ಕೋಮಲಶಠರಿಪುಪದಯುಗಮಾತ್ರಂ ಶ್ರೀಮಾಧವಸೇನಾಪತಿಮಿತ್ರಮ್ ॥ ೩೨॥ '}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾಲಗ್ರಾಮೇ ಸರ್ವಹಿತಾರ್ಥಂ ಯೇನಾಸ್ಥಾಪಿ ಗುರೋಃ ಪದತೀರ್ಥಮ್ ।'}
              line2={'ತತ್ಕುಲದೈವತಹಿತಪುರುಷಾರ್ಥಂ ಸಕಲೋಪಾಯಾಧಿಕಚರಮಾರ್ಥಮ್ ॥ ೩೩॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರವಚನಸಕ್ತಃ ಪ್ರಜ್ಞಾಯುಕ್ತಃ ಪರಹಿತಸಕ್ತಃ ಪರಮವಿರಕ್ತಃ ।'}
              line2={'ನಾನಾದೈವತಭಕ್ತ್ಯಾ ಯುಕ್ತಃ ನ ಭವತಿ ಮುಕ್ತೋ ಭವತಿ ನ ಮುಕ್ತಃ ॥ ೩೪॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸನ್ತ್ಯಜ ಸಕಲಮುಪಾಯಾಚರಣಂ ವ್ರಜ ರಾಮಾನುಜಚರನೌ ಶರಣಾಮ್ ।'}
              line2={'ಪಶ್ಯಸಿ ತಮಸಃ ಪಾರಂ ನಿತ್ಯಂ ಸತ್ಯಂ ಸತ್ಯಂ ಪುನರಪಿ ಸತ್ಯಮ್॥ ೩೫॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭಗವದ್ರಾಮಾನುಜಷಟ್ತ್ರಿಂಶಃ ಸಾಲಗ್ರಾಮಗುರೂತ್ತಮವಂಶ್ಯಃ ।'}
              line2={'ಕೌಣ್ಡಿನ್ಯಃ ಕವಿರಾಹ ಪವಿತ್ರಂ ರಙ್ಗಾರ್ಯೋ ಯತಿರಾಜಸ್ತೋತ್ರಮ್ ॥ ೩೬॥'}
              line3={'ಭಜ ಯತಿರಾಜಂ ॥।'}
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


export default BhajaYatirajam;
