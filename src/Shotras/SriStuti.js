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

const SriStuti = ({ navigation }) => {
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
                    title="ಶ್ರೀಸ್ತುತಿಃ"
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
                            line1={'ಶ್ರೀಮಾನ್ವೇಂಕಟನಾಥಾರ್ಯಃ ಕವಿತಾರ್ಕಿಕಕೇಸರೀ |'}
                            line2={'ವೇದಾಂತಾಚಾರ್ಯವರ್ಯೋ ಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾ ಹೃದಿ ||'}
                        />

                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಈಶಾನಾಂ ಜಗತೋಽಸ್ಯ ವೇಂಕಟಪತೇರ್ವಿಷ್ಣೋಃ ಪರಾಂ ಪ್ರೇಯಸೀಂ'}
                            line2={'ತದ್ವಕ್ಷಃಸ್ಥಲನಿತ್ಯವಾಸರಸಿಕಾಂ ತತ್ಕ್ಷಾಂತಿಸಂವರ್ಧಿನೀಂ |'}
                            line3={'ಪದ್ಮಾಲಂಕೃತ ಪಾಣಿಪಲ್ಲವಯುಗಾಂ ಪದ್ಮಾಸನಸ್ಥಾಂ ಶ್ರಿಯಂ'}
                            line4={'ವಾತ್ಸಲ್ಯಾದಿ ಗುಣೋಜ್ಜ್ವಲಾಂ ಭಗವತೀಂ ವಂದೇ ಜಗನ್ಮಾತರಂ ||'}
                        />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಮಾನಾತೀತಪ್ರಥಿತವಿಭವಾಂ ಮಂಗಳಂ ಮಂಗಳಾನಾಂ'}
                            line2={'ವಕ್ಷಃಪೀಠೀಂ ಮಧುವಿಜಯಿನೋ ಭೂಷಯಂತೀಂ ಸ್ವಕಾಂತ್ಯಾ |'}
                            line3={'ಪ್ರತ್ಯಕ್ಷಾನುಶ್ರವಿಕಮಹಿಮಪ್ರಾರ್ಥಿನೀನಾಂ ಪ್ರಜಾನಾಂ'}
                            line4={'ಶ್ರೇಯೋಮೂರ್ತಿಂ ಶ್ರಿಯಮಶರಣಸ್ತ್ವಾಂ ಶರಣ್ಯಾಂ ಪ್ರಪದ್ಯೇ || ೧ ||'}
                        />
                        < St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಆವಿರ್ಭಾವಃ ಕಲಶಜಲಧಾವಧ್ವರೇ ವಾಽಪಿ ಯಸ್ಯಾಃ'}
                            line2={'ಸ್ಥಾನಂ ಯಸ್ಯಾಃ ಸರಸಿಜವನಂ ವಿಷ್ಣುವಕ್ಷಃಸ್ಥಲಂ ವಾ |'}
                            line3={'ಭೂಮಾ ಯಸ್ಯಾ ಭುವನಮಖಿಲಂ ದೇವಿ ದಿವ್ಯಂ ಪದಂ ವಾ'}
                            line4={'ಸ್ತೋಕಪ್ರಜ್ಞೈರನವಧಿಗುಣಾ ಸ್ತೂಯಸೇ ಸಾ ಕಥಂ ತ್ವಮ್ || ೨ ||'}
                        />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಸ್ತೋತವ್ಯತ್ವಂ ದಿಶತಿ ಭವತೀ ದೇಹಿಭಿಃ ಸ್ತೂಯಮಾನಾ'}
                            line2={'ತಾಮೇವ ತ್ವಾಮನಿತರಗತಿಃ ಸ್ತೋತುಮಾಶಂಸಮಾನಃ |'}
                            line3={'ಸಿದ್ಧಾರಂಭಃ ಸಕಲಭುವನಶ್ಲಾಘನೀಯೋ ಭವೇಯಂ'}
                            line4={'ಸೇವಾಪೇಕ್ಷಾ ತವ ಚರಣಯೋಃ ಶ್ರೇಯಸೇ ಕಸ್ಯ ನ ಸ್ಯಾತ್ || ೩ ||'}
                        />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಯತ್ಸಂಕಲ್ಪಾದ್ಭವತಿ ಕಮಲೇ ಯತ್ರ ದೇಹಿನ್ಯಮೀಷಾಂ'}
                            line2={'ಜನ್ಮಸ್ಥೇಮಪ್ರಲಯರಚನಾ ಜಂಗಮಾಜಂಗಮಾನಾಂ |'}
                            line3={'ತತ್ಕಲ್ಯಾಣಂ ಕಿಮಪಿ ಯಮಿನಾಮೇಕಲಕ್ಷ್ಯಂ ಸಮಾಧೌ'}
                            line4={'ಪೂರ್ಣಂ ತೇಜಃ ಸ್ಫುರತಿ ಭವತೀಪಾದಲಾಕ್ಷಾರಸಾಂಕಮ್ || ೪ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ನಿಷ್ಪ್ರತ್ಯೂಹಪ್ರಣಯಘಟಿತಂ ದೇವಿ ನಿತ್ಯಾನಪಾಯಂ'}
                            line2={'ವಿಷ್ಣುಸ್ತ್ವಂ ಚೇತ್ಯನವಧಿಗುಣಂ ದ್ವಂದ್ವಮನ್ಯೋನ್ಯಲಕ್ಷ್ಯಂ |'}
                            line3={'ಶೇಷಶ್ಚಿತ್ತಂ ವಿಮಲಮನಸಾಂ ಮೌಲಯಶ್ಚ ಶ್ರುತೀನಾಂ'}
                            line4={'ಸಂಪದ್ಯಂತೇ ವಿಹರಣವಿಧೌ ಯಸ್ಯ ಶಯ್ಯಾವಿಶೇಷಾಃ || ೫ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಉದ್ದೇಶ್ಯತ್ವಂ ಜನನಿ ಭಜತೋರುಜ್ಝಿತೋಪಾಧಿಗಂಧಂ'}
                            line2={'ಪ್ರತ್ಯಗ್ರೂಪೇ ಹವಿಷಿ ಯುವಯೋರೇಕಶೇಷಿತ್ವಯೋಗಾತ್ |'}
                            line3={'ಪದ್ಮೇ ಪತ್ಯುಸ್ತವ ಚ ನಿಗಮೈರ್ನಿತ್ಯಮನ್ವಿಷ್ಯಮಾಣೋ'}
                            line4={'ನಾವಚ್ಛೇದಂ ಭಜತಿ ಮಹಿಮಾ ನರ್ತಯನ್ಮಾನಸಂ ನಃ || ೬ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಪಶ್ಯಂತೀಷು ಶ್ರುತಿಷು ಪರಿತಃ ಸೂರಿವೃಂದೇನ ಸಾರ್ಥಂ'}
                            line2={'ಮಧ್ಯೇಕೃತ್ಯ ತ್ರಿಗುಣಫಲಕಂ ನಿರ್ಮಿತಸ್ಥಾನಭೇದಂ |'}
                            line3={'ವಿಶ್ವಾಧೀಶಪ್ರಣಯಿನೀ ಸದಾ ವಿಭ್ರಮದ್ಯೂತವೃತ್ತೌ'}
                            line4={'ಬ್ರಹ್ಮೇಶಾದ್ಯಾ ದಧತಿ ಯುವಯೋರಕ್ಷಶಾರಪ್ರಚಾರಮ್ || ೭ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಅಸ್ಯೇಶಾನಾ ತ್ವಮಸಿ ಜಗತಃ ಸಂಶ್ರಯಂತೀ ಮುಕುಂದಂ'}
                            line2={'ಲಕ್ಷ್ಮೀಃ ಪದ್ಮಾ ಜಲಧಿತನಯಾ ವಿಷ್ಣುಪತ್ನೀಂದಿರೇತಿ |'}
                            line3={'ಯನ್ನಾಮಾನಿ ಶ್ರುತಿಪರಿಪಣಾನ್ಯೇವಮಾವರ್ತಯಂತೋ'}
                            line4={'ನಾವರ್ತಂತೇ ದುರಿತಪವನಪ್ರೇರಿತೇ ಜನ್ಮಚಕ್ರೇ || ೮ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ತ್ವಾಮೇವಾಹುಃ ಕತಿಚಿದಪರೇ ತ್ವತ್ಪ್ರಿಯಂ ಲೋಕನಾಥಂ'}
                            line2={'ಕಿಂ ತೈರಂತಃಕಲಹಮಲಿನೈಃ ಕಿಂಚಿದುತ್ತೀರ್ಯ ಮಗ್ನೈಃ |'}
                            line3={'ತ್ವತ್ಸಂಪ್ರೀತ್ಯೈ ವಿಹರತಿ ಹರೌ ಸಮ್ಮುಖೀನಾಂ ಶ್ರುತೀನಾಂ'}
                            line4={'ಭಾವಾರೂಢೌ ಭಗವತಿ ಯುವಾಂ ದಂಪತೀ ದೈವತಂ ನಃ || ೯ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಆಪನ್ನಾರ್ತಿಪ್ರಶಮನವಿಧೌ ಬದ್ಧದೀಕ್ಷಸ್ಯ ವಿಷ್ಣೋ-'}
                            line1={'-ರಾಚಖ್ಯುಸ್ತ್ವಾಂ ಪ್ರಿಯಸಹಚರೀಮೈಕಮತ್ಯೋಪಪನ್ನಾಂ |'}
                            line3={'ಪ್ರಾದುರ್ಭಾವೈರಪಿ ಸಮತನುಃ ಪ್ರಾಧ್ವಮನ್ವೀಯಸೇ ತ್ವಂ'}
                            line4={'ದೂರೋತ್ಕ್ಷಿಪ್ತೈರಿವ ಮಧುರತಾ ದುಗ್ಧರಾಶೇಸ್ತರಂಗೈಃ || ೧೦ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಧತ್ತೇ ಶೋಭಾಂ ಹರಿಮರಕತೇ ತಾವಕೀ ಮೂರ್ತಿರಾದ್ಯಾ'}
                            line2={'ತನ್ವೀ ತುಂಗಸ್ತನಭರನತಾ ತಪ್ತಜಾಂಬೂನದಾಭಾ |'}
                            line3={'ಯಸ್ಯಾಂ ಗಚ್ಛಂತ್ಯುದಯವಿಲಯೈರ್ನಿತ್ಯಮಾನಂದಸಿಂಧಾ-'}
                            line4={'ವಿಚ್ಛಾವೇಗೋಲ್ಲಸಿತಲಹರೀವಿಭ್ರಮಂ ವ್ಯಕ್ತಯಸ್ತೇ || ೧೧ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಆಸಂಸಾರಂ ವಿತತಮಖಿಲಂ ವಾಙ್ಮಯಂ ಯದ್ವಿಭೂತಿ-'}
                            line2={'-ರ್ಯದ್ಭ್ರೂಭಂಗಾತ್ಕುಸುಮಧನುಷಃ ಕಿಂಕರೋ ಮೇರುಧನ್ವಾ |'}
                            line3={'ಯಸ್ಯಾಂ ನಿತ್ಯಂ ನಯನಶತಕೈರೇಕಲಕ್ಷ್ಯೋ ಮಹೇಂದ್ರಃ'}
                            line4={'ಪದ್ಮೇ ತಾಸಾಂ ಪರಿಣತಿರಸೌ ಭಾವಲೇಶೈಸ್ತ್ವದೀಯೈಃ || ೧೨ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಅಗ್ರೇ ಭರ್ತುಃ ಸರಸಿಜಮಯೇ ಭದ್ರಪೀಠೇ ನಿಷಣ್ಣಾ-'}
                            line2={'-ಮಂಭೋರಾಶೇರಧಿಗತಸುಧಾಸಂಪ್ಲವಾದುತ್ಥಿತಾಂ ತ್ವಾಂ |'}
                            line3={'ಪುಷ್ಪಾಸಾರಸ್ಥಗಿತಭುವನೈಃ ಪುಷ್ಕಲಾವರ್ತಕಾದ್ಯೈಃ'}
                            line4={'ಕ್ಲುಪ್ತಾರಂಭಾಃ ಕನಕಕಲಶೈರಭ್ಯಷಿಂಚನ್ಗಜೇಂದ್ರಾಃ || ೧೩ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಆಲೋಕ್ಯ ತ್ವಾಮಮೃತಸಹಜೇ ವಿಷ್ಣುವಕ್ಷಃಸ್ಥಲಸ್ಥಾಂ'}
                            line2={'ಶಾಪಾಕ್ರಾಂತಾಃ ಶರಣಮಗಮನ್ಸಾವರೋಧಾಃ ಸುರೇಂದ್ರಾಃ |'}
                            line3={'ಲಬ್ಧ್ವಾ ಭೂಯಸ್ತ್ರಿಭುವನಮಿದಂ ಲಕ್ಷಿತಂ ತ್ವತ್ಕಟಾಕ್ಷೈಃ'}
                            line4={'ಸರ್ವಾಕಾರಸ್ಥಿರಸಮುದಯಾಂ ಸಂಪದಂ ನಿರ್ವಿಶಂತಿ || ೧೪ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಆರ್ತತ್ರಾಣವ್ರತಿಭಿರಮೃತಾಸಾರನೀಲಾಂಬುವಾಹೈ-'}
                            line2={'-ರಂಭೋಜಾನಾಮುಷಸಿ ಮಿಷತಾಮಂತರಂಗೈರಪಾಂಗೈಃ |'}
                            line3={'ಯಸ್ಯಾಂ ಯಸ್ಯಾಂ ದಿಶಿ ವಿಹರತೇ ದೇವಿ ದೃಷ್ಟಿಸ್ತ್ವದೀಯಾ'}
                            line4={'ತಸ್ಯಾಂ ತಸ್ಯಾಮಹಮಹಮಿಕಾಂ ತನ್ವತೇ ಸಂಪದೋಘಾಃ || ೧೫ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಯೋಗಾರಂಭತ್ವರಿತಮನಸೋ ಯುಷ್ಮದೈಕಾಂತ್ಯಯುಕ್ತಂ ಧರ್ಮಂ'}
                            line2={'ಪ್ರಾಪ್ತುಂ ಪ್ರಥಮಮಿಹ ಯೇ ಧಾರಯಂತೇಽಧನಾ ಯಾಂ ||'}
                            line3={'ತೇಷಾಂ ಭೂಮೇರ್ಧನಪತಿಗೃಹಾದಂಬರಾದಂಬುಧೇರ್ವಾ'}
                            line4={'ಧಾರಾ ನಿರ್ಯಾಂತ್ಯಧಿಕಮಧಿಕಂ ವಾಂಛಿತಾನಾಂ ವಸೂನಾಮ್ || ೧೬ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಶ್ರೇಯಸ್ಕಾಮಾಃ ಕಮಲನಿಲಯೇ ಚಿತ್ರಮಾಮ್ನಾಯವಾಚಾಂ'}
                            line2={'ಚೂಡಾಪೀಡಂ ತವ ಪದಯುಗಂ ಚೇತಸಾ ಧಾರಯಂತಃ |'}
                            line3={'ಛತ್ರಚ್ಛಾಯಾಸುಭಗಶಿರಸಶ್ಚಾಮರಸ್ಮೇರಪಾರ್ಶ್ವಾಃ'}
                            line4={'ಶ್ಲಾಘಾಶಬ್ದಶ್ರವಣಮುದಿತಾಃ ಸ್ರಗ್ವಿಣಃ ಸಂಚರಂತಿ || ೧೭ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಊರೀಕರ್ತುಂ ಕುಶಲಮಖಿಲಂ ಜೇತುಮಾದೀನರಾತೀನ್'}
                            line2={'ದೂರೀಕರ್ತುಂ ದುರಿತನಿವಹಂ ತ್ಯಕ್ತುಮಾದ್ಯಾಮವಿದ್ಯಾಂ |'}
                            line3={'ಅಂಬ ಸ್ತಂಬಾವಧಿಕಜನನಗ್ರಾಮಸೀಮಾಂತರೇಖಾ-'}
                            line4={'-ಮಾಲಂಬಂತೇ ವಿಮಲಮನಸೋ ವಿಷ್ಣುಕಾಂತೇ ದಯಾಂ ತೇ || ೧೮ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಜಾತಾಕಾಂಕ್ಷಾ ಜನನಿ ಯುವಯೋರೇಕಸೇವಾಧಿಕಾರೇ'}
                            line2={'ಮಾಯಾಲೀಢಂ ವಿಭವಮಖಿಲಂ ಮನ್ಯಮಾನಾಸ್ತೃಣಾಯ |'}
                            line3={'ಪ್ರೀತ್ಯೈ ವಿಷ್ಣೋಸ್ತವ ಚ ಕೃತಿನಃ ಪ್ರೀತಿಮಂತೋ ಭಜಂತೇ'}
                            line4={'ವೇಲಾಭಂಗಪ್ರಶಮನಫಲಂ ವೈದಿಕಂ ಧರ್ಮಸೇತುಮ್ || ೧೯ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಸೇವೇ ದೇವಿ ತ್ರಿದಶಮಹಿಲಾಮೌಳಿಮಾಲಾರ್ಚಿತಂ ತೇ'}
                            line2={'ಸಿದ್ಧಿಕ್ಷೇತ್ರಂ ಶಮಿತವಿಪದಾಂ ಸಂಪದಾಂ ಪಾದಪದ್ಮಂ |'}
                            line3={'ಯಸ್ಮಿನ್ನೀಷನ್ನಮಿತಶಿರಸೋ ಯಾಪಯಿತ್ವಾ ಶರೀರಂ'}
                            line4={'ವರ್ತಿಷ್ಯಂತೇ ವಿತಮಸಿ ಪದೇ ವಾಸುದೇವಸ್ಯ ಧನ್ಯಾಃ || ೨೦ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಸಾನುಪ್ರಾಸಪ್ರಕಟಿತದಯೈಃ ಸಾಂದ್ರವಾತ್ಸಲ್ಯದಿಗ್ಧೈ-'}
                            line2={'-ರಂಬ ಸ್ನಿಗ್ಧೈರಮೃತಲಹರೀಲಬ್ಧಸಬ್ರಹ್ಮಚರ್ಯೈಃ |'}
                            line3={'ಘರ್ಮೇ ತಾಪತ್ರಯವಿರಚಿತೇ ಗಾಢತಪ್ತಂ ಕ್ಷಣಂ ಮಾ-'}
                            line4={'-ಮಾಕಿಂಚನ್ಯಗ್ಲಪಿತಮನಘೈರಾದ್ರಿಯೇಥಾಃ ಕಟಾಕ್ಷೈಃ || ೨೧ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಸಂಪದ್ಯಂತೇ ಭವಭಯತಮೀಭಾನವಸ್ತ್ವತ್ಪ್ರಸಾದಾ-'}
                            line2={'-ದ್ಭಾವಾಃ ಸರ್ವೇ ಭಗವತಿ ಹರೌ ಭಕ್ತಿಮುದ್ವೇಲಯಂತಃ |'}
                            line3={'ಯಾಚೇ ಕಿಂ ತ್ವಾಮಹಮತಿಭಯಶ್ಶೀತಲೋದಾರಶೀಲಾ-'}
                            line4={'-ನ್ಭೂಯೋ ಭೂಯೋ ದಿಶಸಿ ಮಹತಾಂ ಮಂಗಳಾನಾಂ ಪ್ರಬಂಧಾನ್ || ೨೨ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಮಾತಾ ದೇವಿ ತ್ವಮಸಿ ಭಗವಾನ್ವಾಸುದೇವಃ ಪಿತಾ ಮೇ'}
                            line2={'ಜಾತಃ ಸೋಽಹಂ ಜನನಿ ಯುವಯೋರೇಕಲಕ್ಷ್ಯಂ ದಯಾಯಾಃ |'}
                            line3={'ದತ್ತೋ ಯುಷ್ಮತ್ಪರಿಜನತಯಾ ದೇಶಿಕೈರಪ್ಯತಸ್ತ್ವಂ'}
                            line4={'ಕಿಂ ತೇ ಭೂಯಃ ಪ್ರಿಯಮಿತಿ ಕಿಲ ಸ್ಮೇರವಕ್ರಾ ವಿಭಾಸಿ || ೨೩ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಕಲ್ಯಾಣಾನಾಮವಿಕಲನಿಧಿಃ ಕಾಽಪಿ ಕಾರುಣ್ಯಸೀಮಾ'}
                            line2={'ನಿತ್ಯಾಮೋದಾ ನಿಗಮವಚಸಾಂ ಮೌಳಿಮಂದಾರಮಾಲಾ |'}
                            line3={'ಸಂಪದ್ದಿವ್ಯಃ ಮಧುವಿಜಯಿನಃ ಸನ್ನಿಧತ್ತಾಂ ಸದಾ ಮೇ'}
                            line4={'ಸೈಷಾ ದೇವೀ ಸಕಲಭುವನಪ್ರಾರ್ಥನಾಕಾಮಧೇನುಃ || ೨೪ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಉಪಚಿತಗುರುಭಕ್ತೇರುತ್ಥಿತಂ ವೇಂಕಟೇಶಾತ್-'}
                            line2={'-ಕಲಿಕಲುಷನಿವೃತ್ತ್ಯೈ ಕಲ್ಪ್ಯಮಾನಂ ಪ್ರಜಾನಾಂ |'}
                            line3={'ಸರಸಿಜನಿಲಯಾಯಾಃ ಸ್ತೋತ್ರಮೇತತ್ಪಠಂತಃ'}
                            line4={'ಸಕಲಕುಶಲಸೀಮಾ ಸಾರ್ವಭೌಮಾ ಭವಂತಿ || ೨೫ ||'} />
                        <St
                            color={textcolor}
                            fontsize={font}
                            line1={'ಇತಿ ಶ್ರೀಮದ್ವೇದಾಂತದೇಶಿಕವಿರಚಿತಾ ಶ್ರೀಸ್ತುತಿಃ |'}
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


export default SriStuti;