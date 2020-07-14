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

const Tiruppavai = ({ navigation }) => {
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
          title="ತಿರುಪ್ಪಾವೈ"
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
              line1={'ನೀಳಾ ತುಂಗ ಸ್ತನಗಿರಿತಟೀ ಸುಪ್ತಮುದ್ಬೋಧ್ಯ ಕೃಷ್ಣಂ'}
              line2={'ಪಾರಾರ್ಧ್ಯಂ ಸ್ವಂ ಶೃತಿಶತಶಿರಸ್ಸಿದ್ಧಮಧ್ಯಾಪಯನ್ತೀ |'}
              line3={'ಸ್ವೋಚ್ಛಿಷ್ಟಾಯಾಂ ಸ್ರಜಿ ನಿಗಳಿತಂ ಯಾ ಬಲಾತ್ಕೃತ್ಯ ಭುಙ್ಕ್ತೇ'}
              line4={'ಗೋದಾ ತಸ್ಯೈ ನಮ ಇದಮಿದಂ ಭೂಯ ಏವಾಸ್ತು ಭೂಯಃ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನ್ನ ವಯಲ್ ಪುದುವೈ ಯಾಣ್ಡಾಳ್'}
              line2={'ಅರಂಗರ್ಕು ಪನ್ನು ತಿರುಪ್ಪಾವೈಪ್ ಪಲ್ ಪದಿಯಮ್,'}
              line3={'ಇನ್ನಿ ಶೈಯಾಲ್ ಪಾಡಿಕ್ಕೊಡುತ್ತಾಳ್ ನಱ್ಪಾಮಾಲೈ'}
              line4={'ಪೂಮಾಲೈ ಶೂಡಿಕ್ಕೊಡುತ್ತಾಳೈಚ್ ಚೊಲ್'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶೂಡಿಕ್ಕೊಡುತ್ತ ಶುಡರ್ಕೊಡಿಯೇ'}
              line2={'ತೊಲ್‍ಪಾವೈ ಪಾಡಿಯರುಳವಲ್ಲ ಪಲ್ವಳೈಯಾಯ್,'}
              line3={'ನಾಡಿ ನೀ ವೇಂಗಡವಱ್ಕೆನ್ನೈ ವಿದಿ ಯೆನ್‍ಱ ವಿಮ್ಮಾಱ್ಱಮ್'}
              line4={'ನಾಂ ಕಡವಾ ವಣ್ಣಮೇ ನಲ್‍ಗು.'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾರ್ಗಳಿ*ತ್ ತಿಙ್ಗಳ್ ಮದಿನಿಱೈನ್ದ ನನ್ನಾಳಾಲ್ ,'}
              line2={'ನೀರಾಡಪ್ ಪೋದುವೀರ್ ಪೋದುಮಿನೋ ನೇರಿಳೈ*ಯೀರ್ ,'}
              line3={'ಶೀರ್ ಮಲ್‍ಗುಮ್ ಆಯ್‍ಪಾಡಿಚ್ ಚೆಲ್ವಚ್ ಚಿಱುಮೀರ್ಗಾಳ್ ,'}
              line4={'ಕೂರ್ ವೇಲ್ ಕೊಡುನ್ದೊಳಿ*ಲನ್ ನನ್ದಗೋಪನ್ ಕುಮರನ್ ,'}
              line5={'ಏರಾರ‍್ನ್ದ ಕಣ್ಣಿ ಯಶೋದೈ ಯಿಳಞ್‍ಶಿಙ್ಗಮ್ ,'}
              line6={'ಕಾರ‍್ಮೇನಿಚ್ ಚೆಙ್ಗಣ್ ಕದಿರ್ ಮದಿಯಮ್ ಪೋಲ್ ಮುಗತ್ತಾನ್,'}
              line7={'ನಾರಾಯಣನೇ ನಮಕ್ಕೇ ಪಱೈ ತರುವಾನ್ ,'}
              line8={'ಪಾರೋರ್ ಪುಗಳ*ಪ್ ಪಡಿನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೈಯತ್ತು ವಾಳ್*ವೀರ‍್ಗಾಳ್ ನಾಮುಮ್ ನಮ್ ಪಾವೈಕ್ಕು,'}
              line2={'ಶೆಯ್ಯುಮ್ ಕಿರಿಶೈಗಳ್ ಕೇಳೀರೋ,'}
              line3={'ಪಾಱ್‍ಕಡಲುಳ್ ಪೈಯತ್ ತುಯಿನ್‍ಱ ಪರಮನಡಿ ಪಾಡಿ,'}
              line4={'ನೆಯ್ಯುಣ್ಣೋಮ್ ಪಾಲುಣ್ಣೋಮ್ ನಾಟ್ಕಾಲೇ ನೀರಾಡಿ,'}
              line5={'ಮೈಯಿಟ್ಟೆಳು*ದೋಮ್ ಮಲರಿಟ್ಟು ನಾಮ್ ಮುಡಿಯೋಮ್,'}
              line6={'ಶೆಯ್ಯಾದನ ಶೆಯ್ಯೋಮ್ ತೀಕ್ಕುಱಳೈ ಚೆನ್‍ಱೋದೋಮ್,'}
              line7={'ಐಯಮುಮ್ ಪಿಚ್ಚೈಯುಮ್ ಆನ್ದನೈಯುಮ್ ಕೈ ಕಾಟ್ಟಿ,'}
              line8={'ಉಯ್ಯುಮಾಱು ಎಣ್ಣಿ ಉಗನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨ ||'}
            /><St
              color={textColor}
              fontSize={font}
              line1={'ಓಙ್ಗಿ ಉಲಗಳನ್ದ ಉತ್ತಮನ್ ಪೇರ್ ಪಾಡಿ,'}
              line2={'ನಾಙ್ಗಳ್ ನಮ್ ಪಾವೈಕ್ಕುಚ್ ಚಾಱ್ಱಿ ನೀರಾಡಿನಾಲ್,'}
              line3={'ತೀಙ್ಗಿನ್‍ಱಿ ನಾಡೆಲ್ಲಾಮ್ ತಿಙ್ಗಳ್ ಮುಮ್ಮಾರಿ ಪೆಯ್‍ದು,'}
              line4={'ಓಙ್ಗು ಪೆರುಞ್ ಚೆನ್ನೆಲ್ ಊಡು ಕಯಲ್ ಉಗಳ,'}
              line5={'ಪೂಙ್ಗುವಳೈಪ್ ಪೋದಿಲ್ ಪೊಱಿ ವಣ್ಡು ಕಣ್ಪಡುಪ್ಪ,'}
              line6={'ತೇಙ್ಗಾದೇ ಪುಕ್ಕಿರುನ್ದು ಶೀರ‍್ತ್ತ ಮುಲೈ ಪಱ್ಱಿ ವಾಙ್ಗ,'}
              line7={'ಕುಡಮ್ ನಿಱೈಕ್ಕುಮ್ ವಳ್ಳಲ್ ಪೆರುಮ್ ಪಶುಕ್ಕಳ್,'}
              line8={'ನೀಙ್ಗಾದ ಶೆಲ್ವಮ್ ನಿಱೈನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆಳಿ* ಮಳೈ*ಕ್ ಕಣ್ಣಾ ಒನ್‍ಱು ನೀ ಕೈ ಕರವೇಲ್,'}
              line2={'ಆಳಿ*ಯುಳ್ ಪುಕ್ಕು ಮುಗನ್ದು ಕೊಡಾರ್ತೇಱಿ,'}
              line3={'ಊಳಿ* ಮುದಲ್ವನ್ ಉರುವಮ್ ಬೋಲ್ ಮೆಯ್ ಕಱುತ್ತು,'}
              line4={'ಪಾಳಿ*ಯನ್ ದೋಳುಡೈಪ್ ಪಱ್ಬನಾಬನ್ ಕೈಯಿಲ್,'}
              line5={'ಆಳಿ* ಪೋಲ್ ಮಿನ್ನಿ ವಲಮ್ಬುರಿ ಪೋಲ್ ನಿನ್‍ಱು ಅದಿರ‍್ನ್ದು,'}
              line6={'ತಾಳಾ*ದೇ ಶಾರ‍್ಙ್ಗಮ್ ಉದೈತ್ತ ಶರಮಳೈ* ಪೋಲ್,'}
              line7={'ವಾಳ* ಉಲಗಿನಿಲ್ ಪೆಯ್‍ದಿಡಾಯ್,'}
              line8={'ನಾಙ್ಗಳುಮ್ ಮಾರ್ಗಳಿ* ನೀರಾಡ ಮಗಿಳ್*ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾಯನೈ ಮನ್ನು ವಡಮದುರೈ ಮೈನ್ದನೈ,'}
              line2={'ತೂಯ ಪೆರುನೀರ್ ಯಮುನೈತ್ ತುಱೈವನೈ,'}
              line3={'ಆಯರ್ ಕುಲತ್ತಿನಿಲ್ ತೋನ್‍ಱುಮ್ ಅಣಿ ವಿಳಕ್ಕೈ,'}
              line4={'ತಾಯೈಕ್ ಕುಡಲ್ ವಿಳಕ್ಕಮ್ ಶೆಯ್‍ದ ದಾಮೋದರನೈ,'}
              line5={'ತೂಯೋಮಾಯ್ ವನ್ದು ನಾಮ್ ತೂಮಲರ್ ತೂವಿತ್ ತೊಳು*ತು,'}
              line6={'ವಾಯಿನಾಲ್ ಪಾಡಿ ಮನತ್ತಿನಾಲ್ ಶಿನ್ದಿಕ್ಕ,'}
              line7={'ಪೋಯ ಪಿಳೈ*ಯುಮ್ ಪುಗುದರುವಾನ್ ನಿನ್‍ಱನವುಮ್,'}
              line8={'ತೀಯಿನಿಲ್ ತೂಶಾಗುಂ ಶೆಪ್ಪು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪುಳ್ಳುಮ್ ಶಿಲಮ್ಬಿನ ಕಾಣ್ ಪುಳ್ಳರೈಯನ್ ಕೋಯಿಲಿಲ್,'}
              line2={'ವೆಳ್ಳೈ ವಿಳಿಶಙ್ಗಿನ್ ಪೇರರವಮ್ ಕೇಟ್ಟಿಲೈಯೋ,'}
              line3={'ಪಿಳ್ಳಾಯ್ ಎಳು*ನ್ದಿರಾಯ್ ಪೇಯ್‍ಮುಲೈ ನಞ್ಜುಣ್ಡು,'}
              line4={'ಕಳ್ಳಚ್ ಚಗಡಮ್ ಕಲಕ್ ಕಳಿ*ಯಕ್ ಕಾಲೋಚ್ಚಿ,'}
              line5={'ವೆಳ್ಳತ್ ತರವಿಲ್ ತುಯಿಲ್ ಅಮರ‍್ನ್ದ ವಿತ್ತಿನೈ,'}
              line6={'ಉಳ್ಳತ್ತುಕ್ ಕೊಣ್ಡು ಮುನಿವರ‍್ಗಳುಮ್ ಯೋಗಿಗಳುಮ್,'}
              line7={'ಮೆಳ್ಳ ಎಳು*ನ್ದು ಅರಿಯೆನ್‍ಱ ಪೇರರವಮ್,'}
              line8={'ಉಳ್ಳಂ ಪುಗುನ್ದು ಕುಳಿರ‍್ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೀಶು ಕೀಶೆನ್‍ಱು ಎಙ್ಗುಂ ಆನೈಚ್ ಚಾತ್ತನ್,'}
              line2={'ಕಲನ್ದು ಪೇಶಿನ ಪೇಚ್ಚರವಮ್ ಕೇಟ್ಟಿಲೈಯೋ ಪೇಯ್‍ಪ್ ಪೆಣ್ಣೇ,'}
              line3={'ಕಾಶುಮ್ ಪಿಱಪ್ಪುಮ್ ಕಲಗಲಪ್ಪಕ್ ಕೈಪೇರ‍್ತ್ತು,'}
              line4={'ವಾಶ ನಱುಙ್ಕುಳ*ಲ್ ಆಯ್‍ಚ್ಚಿಯರ್,'}
              line5={'ಮತ್ತಿನಾಲ್ ಓಶೈ ಪಡುತ್ತ ತಯಿರರವಂ ಕೇಟ್ಟಿಲೈಯೋ,'}
              line6={'ನಾಯಗಪ್ ಪೆಣ್ ಪಿಳ್ಳಾಯ್ ನಾರಾಯಣನ್ ಮೂರ‍್ತ್ತಿ,'}
              line7={'ಕೇಶವನೈಪ್ ಪಾಡವುಮ್ ನೀ ಕೇಟ್ಟೇ ಕಿಡತ್ತಿಯೋ,'}
              line8={'ತೇಶಮುಡೈಯಾಯ್ ತಿಱು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೀಳ್*ವಾನಮ್ ವೆಳ್ಳೆನ್‍ಱು ಎರುಮೈ ಶಿಱು ವೀಡು,'}
              line2={'ಮೇಯ್‍ವಾನ್ ಪರನ್ದನ ಕಾಣ್ ಮಿಕ್ಕುಳ್ಳ ಪಿಳ್ಳೈಗಳುಮ್,'}
              line3={'ಪೋವಾನ್ ಪೋಗಿನ್‍ಱಾರೈಪ್ ಪೋಗಾಮಲ್ ಕಾತ್ತು,'}
              line4={'ಉನ್ನೈಕ್ ಕೂವುವಾನ್ ವನ್ದು ನಿನ್‍ಱೋಮ್,'}
              line5={'ಕೋದುಕಲಮುಡೈಯ ಪಾವಾಯ್ ಎಳು*ನ್ದಿರಾಯ್ ಪಾಡಿಪ್ ಪಱೈ ಕೊಣ್ಡು,'}
              line6={'ಮಾವಾಯ್ ಪಿಳನ್ದಾನೈ ಮಲ್ಲರೈ ಮಾಟ್ಟಿಯ,'}
              line7={'ದೇವಾದಿ ದೇವನೈಚ್ ಚೆನ್‍ಱು ನಾಮ್ ಶೇವಿತ್ತಾಲ್,'}
              line8={'ಆವಾವೆನ್‍ಱು ಆರಾಯ್‍ನ್ದು ಅರುಳ್ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತೂಮಣಿ ಮಾಡತ್ತುಚ್ ಚುಱ್ಱುಮ್ ವಿಳಕ್ಕೆರಿಯ,'}
              line2={'ದೂಪಂ ಕಮಳ* ತುಯಿಲ್ ಅಣೈ ಮೇಲ್ ಕಣ್ ವಳರುಮ್,'}
              line3={'ಮಾಮಾನ್ ಮಗಳೇ ಮಣಿಕ್ಕದವಮ್ ತಾಳ್ ತಿಱವಾಯ್,'}
              line4={'ಮಾಮೀರ್ ಅವಳೈ ಎಳುಪ್ಪೀರೋ,'}
              line5={'ಉನ್ ಮಗಳ್ ತಾನ್ ಊಮೈಯೋ? ಅನ್‍ಱಿಚ್ ಚೆವಿಡೋ? ಅನನ್ದಲೋ,'}
              line6={'ಏಮಪ್ ಪೆರುನ್ದುಯಿಲ್ ಮನ್ದಿರಪ್ ಪಟ್ಟಾಳೋ?,'}
              line7={'ಮಾಮಾಯನ್ ಮಾದವನ್ ವೈಕುನ್ದನ್ ಎನ್‍ಱೆನ್‍ಱು,'}
              line8={'ನಾಮಮ್ ಪಲವುಮ್ ನವಿನ್‍ಱು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನೋಱ್ಱುಚ್ ಚುವರ‍್ಗ್ಗಮ್ ಪುಗುಗಿನ್‍ಱ ಅಮ್ಮನಾಯ್,'}
              line2={'ಮಾಱ್ಱಮುಮ್ ತಾರಾರೋ ವಾಶಲ್ ತಿಱವಾದಾರ್,'}
              line3={'ನಾಱ್ಱತ್ ತುಳಾ*ಯ್ಮುಡಿ ನಾರಾಯಣನ್,'}
              line4={'ನಮ್ಮಾಲ್ ಪೋಱ್ಱಪ್ ಪಱೈ ತರುಮ್ ಪುಣ್ಣಿಯನಾಲ್,'}
              line5={'ಪಣ್ಡು ಒರು ನಾಳ್ ಕೂಱ್ಱತ್ತಿನ್ ವಾಯ್ ವೀಳ್*ನ್ದ ಕುಮ್ಬಕರಣನುಮ್,'}
              line6={'ತೋಱ್ಱುಮ್ ಉನಕ್ಕೇ ಪೆರುನ್ದುಯಿಲ್ ತಾನ್ ತನ್ದಾನೋ?,'}
              line7={'ಆಱ್ಱ ಅನನ್ದಲುಡೈಯಾಯ್ ಅರುಙ್ಗಲಮೇ,'}
              line8={'ತೇಱ್ಱಮಾಯ್ ವನ್ದು ತಿಱ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಱ್ಱುಕ್ ಕಱವೈಕ್ ಕಣಙ್ಗಳ್ ಪಲ ಕಱನ್ದು,'}
              line2={'ಶೆಱ್ಱಾರ್ ತಿಱಲ್ ಅಳಿ*ಯಚ್ ಚೆನ್‍ಱು ಶೆರುಚ್ ಚೆಯ್ಯುಮ್,'}
              line3={'ಕುಱ್ಱಮ್ ಒನ್‍ಱಿಲ್ಲಾದ ಕೋವಲರ್ ತಮ್ ಪೊಱ್‍ಕೊಡಿಯೇ,,'}
              line4={'ಪುಱ್ಱರವಲ್‍ಗುಲ್ ಪುನಮಯಿಲೇ ಪೋದರಾಯ್,'}
              line5={'ಶುಱ್ಱತ್ತು ತೋಳಿ*ಮಾರ್ ಎಲ್ಲಾರುಮ್ ವನ್ದು,'}
              line6={'ನಿನ್ ಮುಱ್ಱಮ್ ಪುಗುನ್ದು ಮುಗಿಲ್ ವಣ್ಣನ್ ಪೇರ್ ಪಾಡ,'}
              line7={'ಶಿಱ್ಱಾದೇ ಪೇಶಾದೇ ಶೆಲ್ವಪ್ ಪೆಣ್ಡಾಟ್ಟಿ,'}
              line8={'ನೀ ಎಱ್ಱುಕ್ಕು ಉಱಙ್ಗುಮ್ ಪೊರುಳ್ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕನೈತ್ತಿಳಙ್ಗಱ್ಱೆರುಮೈ ಕನ್‍ಱುಕ್ ಕಿಱಙ್ಗಿ,'}
              line2={'ನಿನೈತ್ತು ಮುಲೈ ವಳಿ*ಯೇ ನಿನ್‍ಱು ಪಾಲ್ ಶೋರ,'}
              line3={'ನನೈತ್ತಿಲ್ಲಮ್ ಶೇಱಾಕ್ಕುಮ್ ನಱ್ಚೆಲ್ವನ್ ತಙ್ಗಾಯ್,'}
              line4={'ಪನಿತ್ತಲೈ ವೀಳ* ನಿನ್ ವಾಶಱ್ ಕಡೈ ಪಱ್ಱಿ,'}
              line5={'ಶಿನತ್ತಿನಾಲ್ ತೆನ್ನಿಲಙ್ಗೈಕ್ ಕೋಮಾನೈಚ್ ಚೆಱ್ಱ,'}
              line6={'ಮನತ್ತುಕ್ಕು ಇನಿಯಾನೈಪ್ ಪಾಡವುಮ್ ನೀ ವಾಯ್ ತಿಱವಾಯ್,'}
              line7={'ಇನಿತ್ತಾನ್ ಎಳು*ನ್ದಿರಾಯ್ ಈದೆನ್ನ ಪೇರುಱಕ್ಕಮ್,'}
              line8={'ಅನೈತ್ತು ಇಲ್ಲತ್ತಾರುಂ ಅಱಿನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪುಳ್ಳಿನ್ ವಾಯ್ ಕೀಣ್ಡಾನೈಪ್ ಪೊಲ್ಲಾ ಅರಕ್ಕನೈ,'}
              line2={'ಕಿಳ್ಳಿಕ್ ಕಳೈನ್ದಾನೈಕ್ ಕೀರ‍್ತ್ತಿಮೈ ಪಾಡಿಪ್ಪೋಯ್,'}
              line3={'ಪಿಳ್ಳೈಗಳ್ ಎಲ್ಲಾರುಮ್ ಪಾವೈಕ್ ಕಳಂ ಪುಕ್ಕಾರ್,'}
              line4={'ವೆಳ್ಳಿ ಎಳು*ನ್ದು ವಿಯಾಳ*ಮ್ ಉಱಙ್ಗಿಱ್ಱು,'}
              line5={'ಪುಳ್ಳುಮ್ ಶಿಲಮ್ಬಿನ ಕಾಣ್! ಪೋದು ಅರಿಕ್ಕಣ್ಣಿನಾಯ್,'}
              line6={'ಕುಳ್ಳಕ್ ಕುಳಿರಕ್ ಕುಡೈನ್ದು ನೀರಾಡಾದೇ,'}
              line7={' ಪಳ್ಳಿಕ್ ಕಿಡತ್ತಿಯೋ ಪಾವಾಯ್! ನೀ ನನ್ನಾಳಾಲ್,'}
              line8={' ಕಳ್ಳಮ್ ತವಿರ‍್ನ್ದು ಕಲನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಉಙ್ಗಳ್ ಪುಳೈ*ಕ್ಕಡೈತ್ ತೋಟ್ಟತ್ತು ವಾವಿಯುಳ್,'}
              line2={'ಶೆಙ್ಗಳು* ನೀರ್ ವಾಯ್ ನೆಗಿಳ್*ನ್ದು ಅಮ್ಬಲ್ ವಾಯ್ ಕೂಮ್ಬಿನ ಕಾಣ್,'}
              line3={'ಶೆಙ್ಗಲ್ ಪೊಡಿಕ್ ಕೂಱೈ ವೆಣ್‍ಪಲ್ ತವತ್ತವರ್,'}
              line4={'ತಙ್ಗಳ್ ತಿರುಕ್ಕೋಯಿಲ್ ಶಙ್ಗಿಡುವಾನ್ ಪೋದನ್ದಾರ್'}
              line5={'ಎಙ್ಗಳೈ ಮುನ್ನಮ್ ಎಳು*ಪ್ಪುವಾನ್ ವಾಯ್ ಪೇಶುಮ್,'}
              line6={'ನಙ್ಗಾಯ್ ಎಳು*ನ್ದಿರಾಯ್ ನಾಣಾದಾಯ್ ನಾವುಡೈಯಾಯ್,'}
              line7={'ಶಙ್ಗೊಡು ಶಕ್ಕರಂ ಏನ್ದುಮ್ ತಡಕ್ಕೈಯನ್,'}
              line8={'ಪಙ್ಕಯಕ್ ಕಣ್ಣಾನೈಪ್ ಪಾಡು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಎಲ್ಲೇ! ಇಳಙ್ಕಿಳಿಯೇ ಇನ್ನಮ್ ಉಱಙ್ಗುದಿಯೋ,'}
              line2={'ಶಿಲ್ಲೆನ್‍ಱು ಅಳೈ*ಯೇನ್ ಮಿನ್ ನಙ್ಗೈಮೀರ್ ಪೋದರುಗಿನ್‍ಱೇನ್,'}
              line3={'ವಲ್ಲೈ ಉನ್ ಕಟ್ಟುರೈಗಳ್ ಪಣ್ಡೇ ಉನ್ ವಾಯ್ ಅಱಿದುಮ್,'}
              line4={'ವಲ್ಲೀರ‍್ಗಳ್ ನೀಙ್ಗಳೇ ನಾನೇ ದಾನ್ ಆಯಿಡುಗ,'}
              line5={'ಒಲ್ಲೈ ನೀ ಪೋದಾಯ್ ಉನಕ್ಕು ಎನ್ನ ವೇಱು ಉಡೈಯೈ,'}
              line6={'ಎಲ್ಲಾರುಮ್ ಪೋನ್ದಾರೋ? ಪೋನ್ದಾರ್ ಪೋನ್ದು ಎಣ್ಣಿಕ್ ಕೊಳ್,'}
              line7={'ವಲ್ಲಾನೈ ಕೊನ್‍ಱಾನೈ ಮಾಱ್ಱಾರೈ ಮಾಱ್ಱಳಿ*ಕ್ಕ ವಲ್ಲಾನೈ,'}
              line8={'ಮಾಯಾನೈ ಪಾಡು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಾಯಕನಾಯ್ ನಿನ್ಱ ನನ್ದ ಗೋಪನ್ ಉಡೈಯ ಕೋಯಿಲ್ ಕಾಪ್ಪಾನೇ,'}
              line2={'ಕೊಡಿತ್ ತೋನ್‍ಱುಮ್ ತೋರಣ ವಾಯಿಲ್ ಕಾಪ್ಪಾನೇ,,'}
              line3={'ಶೆಙ್ಗಲ್ ಪೊಡಿಕ್ ಕೂಱೈ ವೆಣ್‍ಪಲ್ ತವತ್ತವರ್,'}
              line4={'ಆಯರ್ ಶಿಱುಮಿಯರೋಮುಕ್ಕು,'}
              line5={'ಅಱೈಪಱೈ ಮಾಯನ್ ಮಣಿ ವಣ್ಣನ್ ನೆನ್ನಲೇ ವಾಯ್ ನೇರ‍್ನ್ದಾನ್,'}
              line6={'ತೂಯೋಮಾಯ್ ವನ್ದೋಮ್ ತುಯಿಲ್ ಎಳ*ಪ್ ಪಾಡುವಾನ್,'}
              line7={'ವಾಯಾಲ್ ಮುನ್ನಮುನ್ನಮ್ ಮಾಱ್ಱಾದೇ ಅಮ್ಮಾ,'}
              line8={'ನೀ ನೇಯ ನಿಲೈಕ್ ಕದವಮ್ ನೀಕ್ಕು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಮ್ಬರಮೇ ತಣ್ಣೀರೇ ಶೋಱೇ ಅಱಞ್ ಶೆಯ್ಯುಮ್,'}
              line2={'ಎಮ್ಬೆರುಮಾನ್ ನನ್ದಗೋಪಾಲಾ ಎಳು*ನ್ದಿರಾಯ್,,'}
              line3={'ಕೊಮ್ಬನಾರ‍್ಕ್ಕು ಎಲ್ಲಾಮ್ ಕೊಳುನ್ದೇ ಕುಲ ವಿಳಕ್ಕೇ,'}
              line4={'ಎಮ್ಬೆರುಮಾಟ್ಟಿ ಯಶೋದಾಯ್ ಅಱಿವುಱಾಯ್,'}
              line5={'ಅಮ್ಬರಮ್ ಊಡು ಅಱುತ್ತು ಓಙ್ಗಿ ಉಲಗಳನ್ದ,'}
              line6={'ಉಮ್ಬರ್ ಕೋಮಾನೇ! ಉಱಙ್ಗಾದು ಎಳು*ನ್ದಿರಾಯ್,'}
              line7={'ಶೆಮ್ ಪೊಱ್ ಕಳ*ಲಡಿಚ್ ಚೆಲ್ವಾ ಬಲದೇವಾ,'}
              line8={'ಉಮ್ಬಿಯುಮ್ ನೀಯುಮ್ ಉಱಙ್ಗೇಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಉನ್ದು ಮದ ಗಳಿಱ್ಱನ್ ಓಡಾದ ತೋಳ್ ವಲಿಯನ್,,'}
              line2={'ನನ್ದಗೋಪಾಲನ್ ಮರುಮಗಳೇ! ನಪ್ಪಿನ್ನಾಯ್!,'}
              line3={'ಗನ್ದಮ್ ಕಮಳು*ಮ್ ಕುಳ*ಲೀ ಕಡೈತಿಱವಾಯ್,'}
              line4={'ವನ್ದು ಎಙ್ಗುಂ ಕೋಳಿ* ಅಳೈ*ತ್ತನ ಕಾಣ್,'}
              line5={' ಮಾದವಿ ಪನ್ದಲ್ ಮೇಲ್ ಪಲ್‍ಕಾಲ್ ಕುಯಿಲ್ ಇನಙ್ಗಳ್ ಕೂವಿನ ಕಾಣ್,'}
              line6={' ಪನ್ದಾರ್ ವಿರಲಿ ಉನ್ ಮೈತ್ತುನನ್ ಪೇರ್ ಪಾಡ,'}
              line7={' ಶೆನ್ದಾಮರೈಕ್ ಕೈಯಾಲ್ ಶೀರಾರ್ ವಳೈಯೊಲಿಪ್ಪ,'}
              line8={' ವನ್ದು ತಿಱವಾಯ್ ಮಗಿಳ್*ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕುತ್ತು ವಿಳಕ್ಕೆರಿಯಕ್ ಕೋಟ್ಟುಕ್ಕಾಲ್ ಕಟ್ಟಿಲ್ ಮೇಲ್,'}
              line2={'ಮೆತ್ತೆನ್‍ಱ ಪಞ್ಚ ಶಯನತ್ತಿನ್ ಮೇಲೇಱಿ,'}
              line3={'ಕೊತ್ತು ಅಲರ್ ಪೂಙ್ಗುಳ*ಲ್ ನಪ್ಪಿನ್ನೈ ಕೊಙ್ಗೈಮೇಲ್,'}
              line4={'ವೈತ್ತುಕ್ ಕಿಡನ್ದ ಮಲರ್ ಮಾರ‍್ಬಾ ವಾಯ್ ತಿಱವಾಯ್,'}
              line5={' ಮೈತ್ತಡಙ್ ಕಣ್ಣಿನಾಯ್ ನೀಯುನ್ ಮಣಾಳನೈ,'}
              line6={' ಎತ್ತನೈ ಪೋದುಮ್ ತುಯಿಲ್ ಎಳ* ಒಟ್ಟಾಯ್ ಕಾಣ್,'}
              line7={' ಎತ್ತನೈಯೇಲುಮ್ ಪಿರಿವಾಱ್ಱ ಗಿಲ್ಲೈಯಾಲ್,'}
              line8={' ತತ್ತುವಮ್ ಅನ್‍ಱು ತಗವು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೧೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮುಪ್ಪತ್ತು ಮೂವರ್ ಅಮರರ‍್ಕ್ಕು ಮುನ್ ಚೆನ್‍ಱು,'}
              line2={'ಕಪ್ಪಮ್ ತವಿರ‍್ಕ್ಕುಂ ಕಲಿಯೇ ತುಯಿಲೆಳಾ*ಯ್,'}
              line3={'ಶೆಪ್ಪಮುಡೈಯಾಯ್ ತಿಱಲುಡೈಯಾಯ್,'}
              line4={'ಶೆಱ್ಱಾರ‍್ಕ್ಕು ವೆಪ್ಪಮ್ ಕೊಡುಕ್ಕುಮ್ ವಿಮಲಾ ತುಯಿಲೆಳಾ*ಯ್,'}
              line5={'ಶೆಪ್ಪನ್ನ ಮೆನ್ಮುಲೈ ಚೆವ್ವಾಯಿ ಚಿಱುಮರುಙ್ಗುಲ್,'}
              line6={'ನಪ್ಪಿನ್ನೈ ನಙ್ಗಾಯ್ ತಿರುವೇ ತುಯಿಲೆಳಾ*ಯ್,'}
              line7={'ಉಕ್ಕಮುಮ್ ತಟ್ಟೊಳಿಯುಮ್ ತನ್ದುನ್ ಮಣಾಳನೈ,'}
              line8={'ಇಪ್ಪೋದೇ ಎಮ್ಮೈ ನೀರಾಟ್ಟು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಏಱ್ಱ ಕಲಙ್ಗಳ್ ಎದಿರ‍್ಪೊಙ್ಗಿ ಮೀದಳಿಪ್ಪ,'}
              line2={'ಮಾಱ್ಱಾದೇ ಪಾಲ್ ಶೊರಿಯುಮ್ ವಳ್ಳಲ್ ಪೆರುಮ್ ಪಶುಕ್ಕಳ್,'}
              line3={'ಆಱ್ಱಪ್ ಪಡೈತ್ತಾನ್ ಮಗನೇ ಅಱಿವುಱಾಯ್,'}
              line4={'ಊಱ್ಱಮುಡೈಯಾಯ್ ಪೆರಿಯಾಯ್,'}
              line5={'ಉಲಗಿನಿಲ್ ತೋಱ್ಱಮಾಯ್ ನಿನ್‍ಱ ಶುಡರೇ ತುಯಿಲೆಳಾ*ಯ್,'}
              line6={'ಮಾಱ್ಱಾರ್ ಉನಕ್ಕು ವಲಿತೊಲೈನ್ದು ಉನ್ ವಾಶಱ್ಕಣ್,'}
              line7={'ಆಱ್ಱಾದು ವನ್ದು ಉನ್ ಅಡಿ ಪಣಿಯುಮಾಪೋಲೇ,'}
              line8={'ಪೋಱ್ಱಿಯಾಮ್ ವನ್ದೋಮ್ ಪುಗಳ್*ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಙ್ಗಣ್ ಮಾ ಞಾಲತ್ತು ಅರಶರ್,,'}
              line2={'ಅಭಿಮಾನ ಭಙ್ಗಮಾಯ್ ವನ್ದು ನಿನ್ ಪಳ್ಳಿಕ್ ಕಟ್ಟಿಱ್ಕೀಳೇ*,'}
              line3={'ಶಙ್ಗಮಿರುಪ್ಪಾರ್ ಪೋಲ್ ವನ್ದು ತಲೈಪ್ಪೆಯ್‍ದೋಮ್,'}
              line4={'ಕಿಙ್ಕಿಣಿ ವಾಯ್‍ಚ್ ಚೆಯ್‍ದ ತಾಮರೈಪ್ ಪೂಪ್ಪೋಲೇ,'}
              line5={'ಶೆಙ್ಗಣ್ ಶಿಱುಚ್ ಚಿಱಿದೇ ಎಮ್ಮೇಲ್ ವಿಳಿ*ಯಾವೋ,'}
              line6={'ತಿಙ್ಗಳುಮ್ ಆದಿತ್ತಿಯನುಮ್ ಎಳು*ನ್ದಾಱ್ಪೋಲ್,'}
              line7={' ಅಙ್ಗಣ್ ಇರಣ್ಡುಙ್ಕೊಣ್ಡು ಎಙ್ಗಳ್ ಮೇಲ್ ನೋಕ್ಕುದಿಯೇಲ್,'}
              line8={' ಎಙ್ಗಳ್ ಮೇಲ್ ಶಾಪಮ್ ಇಳಿ*ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾರಿಮಲೈ ಮುಳೈ*ಞ್ಜಿಲ್ ಮನ್ನಿಕ್ ಕಿಡನ್ದು ಉಱಙ್ಗುಮ್,'}
              line2={'ಶೀರಿಯ ಶಿಙ್ಗಂ ಅಱಿವುಱ್ಱುತ್ ತೀವಿಳಿ*ತ್ತು,'}
              line3={'ವೇರಿ ಮಯಿರ‍್ಪ್ಪೊಙ್ಗ ಎಪ್ಪಾಡುಮ್ ಪೇರ‍್ನ್ದು ಉದಱಿ,'}
              line4={'ಮೂರಿ ನಿಮಿರ‍್ನ್ದು ಮುಳ*ಙ್ಗಿಪ್ ಪುಱಪ್ಪಟ್ಟು,'}
              line5={'ಪೋದರುಮಾ ಪೋಲೇ ನೀ ಪೂವೈಪ್ ಪೂವಣ್ಣಾ,'}
              line6={'ಉನ್ ಕೋಯಿಲ್ ನಿನ್‍ಱು ಇಙ್ಗನೇ ಪೋನ್ದರುಳಿ,'}
              line7={'ಕೋಪ್ಪುಡೈಯ ಶೀರಿಯ ಶಿಙ್ಗಾಶನತ್ತು ಇರುನ್ದು,'}
              line8={'ಯಾಮ್ ವನ್ದ ಕಾರಿಯಮ್ ಆರಾಯ್‍ನ್ದು ಅರುಳ್ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನ್‍ಱು ಇವ್ವುಲಗಂ ಅಳನ್ದಾಯ್ ಅಡಿಪೋಱ್ಱಿ,'}
              line2={'ಶೆನ್‍ಱಙ್ಗುತ್ ತೆನ್ನಿಲಙ್ಗೈ ಶೆಱ್ಱಾಯ್ ತಿಱಲ್ ಪೋಱ್ಱಿ,'}
              line3={'ಪೊನ್‍ಱಚ್ ಚಗಡಮ್ ಉದೈತ್ತಾಯ್ ಪುಗಳ್* ಪೋಱ್ಱಿ,'}
              line4={'ಕನ್‍ಱು ಕುಣಿಲಾ ಎಱಿನ್ದಾಯ್ ಕಳ*ಲ್ ಪೋಱ್ಱಿ,'}
              line5={'ಕುನ್‍ಱು ಕುಡೈಯಾಯ್ ಎಡುತ್ತಾಯ್ ಗುಣಮ್ ಪೋಱ್ಱಿ,'}
              line6={'ವೆನ್‍ಱು ಪಗೈ ಕೆಡುಕ್ಕುಮ್ ನಿನ್‍ಕೈಯಿಲ್ ವೇಲ್ ಪೋಱ್ಱಿ,'}
              line7={'ಎನ್‍ಱೆನ್‍ಱುನ್ ಶೇವಗಮೇ ಏತ್ತಿಪ್ ಪಱೈ ಕೊಳ್‍ವಾನ್,'}
              line8={'ಇನ್‍ಱು ಯಾಮ್ ವನ್ದೋಮ್ ಇರನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಒರುತ್ತಿ ಮಗನಾಯ್‍ಪ್ ಪಿಱನ್ದು,'}
              line2={'ಓರ್ ಇರವಿಲ್ ಒರುತ್ತಿ ಮಗನಾಯ್ ಒಳಿತ್ತು ವಳರ,,'}
              line3={'ದರಿಕ್ಕಿಲಾನ್ ಆಗಿತ್ತಾನ್ ತೀಙ್ಗು ನಿನೈನ್ದ,'}
              line4={'ಕರುತ್ತೈಪ್ ಪಿಳೈ*ಪ್ಪಿತ್ತುಕ್ ಕಞ್ಜನ್ ವಯಿಱ್ಱಿಲ್,'}
              line5={'ನೆರುಪ್ಪೆನ್ನ ನಿನ್‍ಱ ನೆಡುಮಾಲೇ,'}
              line6={'ಉನ್ನೈ ಅರುತ್ತಿತ್ತು ವನ್ದೋಮ್ ಪಱೈ ತರುದಿಯಾಗಿಲ್,'}
              line7={'ತಿರುತ್ತಕ್ಕ ಶೆಲ್ವಮುಮ್ ಶೇವಕಮುಮ್ ಯಾಮ್ಪಾಡಿ,'}
              line8={'ವರುತ್ತಮುಮ್ ತೀರ‍್ನ್ದು ಮಗಿಳ್*ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾಲೇ ! ಮಣಿವಣ್ಣಾ ! ಮಾರ್ಗಳಿ* ನೀರಾಡುವಾನ್,'}
              line2={'ಮೇಲೈಯಾರ್ ಶೆಯ್‍ವನಗಳ್ ವೇಣ್ಡುವನ ಕೇಟ್ಟಿಯೇಲ್,'}
              line3={'ಞಾಲತ್ತೈಯೆಲ್ಲಾಮ್ ನಡುಙ್ಗ ಮುರಲ್ವನ,'}
              line4={'ಪಾಲನ್ನ ವಣ್ಣತ್ತು ಉನ್ ಪಾಞ್ಚಜನ್ನಿಯಮೇ,'}
              line5={'ಪೋಲ್ವನ ಶಙ್ಗಙ್ಗಳ್ ಪೋಯ್‍ಪ್ಪಾಡು ಉಡೈಯನವೇ,'}
              line6={'ಶಾಲಪ್ಪೆರುಮ್ ಬಱೈಯೇ ಪಲ್ಲಾಣ್ಡು ಇಶೈಪ್ಪಾರೇ,'}
              line7={'ಕೋಲ ವಿಳಕ್ಕೇ ಕೊಡಿಯೇ ವಿತಾನಮೇ,'}
              line8={'ಆಲಿನ್ ಇಲೈಯಾಯ್ ಅರುಳ್ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕೂಡಾರೈ ವೆಲ್ಲುಮ್ ಶೀರ್ ಗೋವಿನ್ದಾ,'}
              line2={'ಉನ್ ತನ್ನೈ ಪಾಡಿ ಪಱೈ ಕೊಣ್ಡು ಯಾಮ್ ಪೆಱು ಶಮ್ಮಾನಮ್,'}
              line3={'ನಾಡು ಪುಗಳುಮ್ ಪರಿಶಿನಾಲ್ ನನ್‍ಱಾಗ,'}
              line4={'ಶೂಡಗಮೇ ತೋಳ್ ವಳೈಯೇ ತೋಡೇ ಶೆವಿಪ್ಪೂವೇ,'}
              line5={'ಪಾಡಗಮೇ ಎನ್‍ಱನೈಯ ಪಲ್‍ಗಲನುಮ್ ಯಾಮ್ ಅಣಿವೋಮ್,'}
              line6={'ಆಡೈ ಉಡುಪ್ಪೋಮ್ ಅದನ್ ಪಿನ್ನೇ ಪಾಱ್‍ಶೋಱು,'}
              line7={'ಮೂಡ ನೆಯ್ ಪೆಯ್‍ದು ಮುಳ*ಙ್ಗೈ ವಳಿ*ವಾರ,'}
              line8={'ಕೂಡಿಯಿರುನ್ದು ಕುಳಿರ‍್ನ್ದು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೭ ||'}
            />

            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಱವೈಗಳ್ ಪಿನ್ಶೆನ್‍ಱು ಕಾನಮ್ ಶೇರ‍್ನ್ದು ಉಣ್ಬೋಮ್,'}
              line2={'ಅಱಿವೊನ್‍ಱುಮ್ ಇಲ್ಲಾದ ಆಯ್‍ಕ್ಕುಲತ್ತು,'}
              line3={'ಉನ್ತನ್ನೈ ಪಿಱವಿ ಪೆರುನ್ದನೈಪ್ ಪುಣ್ಣಿಯಮ್ ಯಾಮ್ ಉಡೈಯೋಮ್,'}
              line4={'ಕುಱೈ ಒನ್‍ಱುಮ್ ಇಲ್ಲಾದ ಗೋವಿನ್ದಾ,'}
              line5={'ಉನ್ ತನ್ನೋಡು ಉಱವೇಲ್ ನಮಕ್ಕು ಇಙ್ಗು ಒಳಿ*ಕ್ಕ ಒಳಿ*ಯಾದು,'}
              line6={'ಅಱಿಯಾದ ಪಿಳ್ಳೈಗಳೋಮ್ ಅನ್ಬಿನಾಲ್,'}
              line7={'ಉನ್ ತನ್ನೈ ಶಿಱುಪೇರ್ ಅಳೈ*ತ್ತನವುಮ್ ಶೀಱಿ ಅರುಳಾದೇ,'}
              line8={'ಇಱೈವಾ! ನೀ ತಾರಾಯ್ ಪಱೈ ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶಿಱ್ಱಞ್ ಶಿಱು ಕಾಲೇ ವನ್ದುನ್ನೈ ಶೇವಿತ್ತು,'}
              line2={'ಉನ್ ಪೋಱ್ಱಾಮರೈ ಅಡಿಯೇ ಪೋಱ್ಱುಮ್ ಪೊರುಳ್ ಕೇಳಾಯ್,'}
              line3={'ಪೆಱ್ಱಮ್ ಮೇಯ್‍ತ್ತು ಉಣ್ಣುಂ ಕುಲತ್ತಿಲ್ ಪಿಱನ್ದು,'}
              line4={'ನೀ ಕುಱ್ಱೇವಲ್ ಎಙ್ಗಳೈ ಕೋಳ್ಳಾಮಲ್ ಪೋಗಾದು,'}
              line5={'ಇಱ್ಱೈಪ್ ಪಱೈ ಕೊಳ್ವಾನ್ ಅನ್‍ಱು ಕಾಣ್ ಗೋವಿನ್ದಾ,'}
              line6={'ಎಱ್ಱೈಕ್ಕುಮ್ ಏಳ್* ಏಳ್* ಪಿಱವಿಕ್ಕುಮ್,'}
              line7={'ಉನ್ ತನ್ನೋಡು ಉಱ್ಱೋಮೇ ಯಾವೋಂ ಉನಕ್ಕೇ ನಾಮ್ ಆಟ್ಚೆಯ್‍ವೋಮ್,'}
              line8={'ಮಱ್ಱೈ ನಮ್ ಕಾಮಙ್ಗಳ್ ಮಾಱ್ಱು ಏಲ್ ಓರ್ ಎಮ್ಬಾವಾಯ್ || ೨೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಙ್ಗಕ್ ಕಡಲ್ ಕಡೈನ್ದ ಮಾದವನೈ ಕೇಶವನೈ,'}
              line2={'ತಿಙ್ಗಳ್ ತಿರುಮುಗತ್ತುಶ್ ಶೆಯಿಳೈ*ಯಾರ್ ಶೆನ್‍ಱಿಱೈಞ್ಜಿ,'}
              line3={'ಅಙ್ಗಪ್ ಪಱೈ ಕೊಣ್ಡವಾಱ್ಱೈ,'}
              line4={'ಅಣಿಪುದುವೈ ಪೈಙ್ಗಮಲತ್ ತಣ್‍ತೆರಿಯಲ್ ಪಟ್ಟರ್ ಬಿರಾನ್ ಕೋದೈ ಶೊನ್ನ,'}
              line5={'ಶಙ್ಗತ್ ತಮಿಳ್* ಮಾಲೈ ಮುಪ್ಪದುಮ್ ತಪ್ಪಾಮೇ,'}
              line6={'ಇಙ್ಗಿಪ್ ಪರಿಶುಱೈಪ್ಪಾರ್ ಈರಿರಣ್ಡು ಮಾಲ್ ವರೈತ್ ತೋಳ್,'}
              line7={'ಶೆಙ್ಗನ್ ತಿರುಮುಗತ್ತುಚ್ ಚೆಲ್ವತ್ ತಿರುಮಾಲಾಲ್,'}
              line8={'ಎಙ್ಗುಂ ತಿರುವರುಳ್ ಪೆಱ್ಱು ಇನ್ಬುಱುವರ್ ಎಮ್ಬಾವಾಯ್ || ೩೦ ||'}
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


export default Tiruppavai;
