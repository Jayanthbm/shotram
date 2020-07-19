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

const Sname = ({ navigation }) => {
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
                    title="ಕೋದಂಡರಾಮ ಕೋದಂಡರಾಮ"
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
                            line1={'ಕೋದಂಡರಾಮ ಕೋದಂಡರಾಮ ಕೋದಂಡ ರಾಮಪಾಹಿ ಕೋದಂಡರಾಮ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರಿಕರತ್ರಾಹಿ ಭಾಸ್ಕರದೇಹಿ ಲೋಕೇಶತ್ರಾಹಿ ಸದ್ಗುಣ ಪಾಹಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನೀರೊಳುತೋರಿ ಪಾತಳಸೇರಿ ವೇಧವತೋರಿದ ಮತ್ಸ್ಯವತಾರಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನೀರೊಳುತೋರಿ ಪಾತಳಸೇರಿ ವೇಧವತೋರಿದ ಮತ್ಸ್ಯವತಾರಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಾಗೇಶ ಭ್ರಮ್ಹಾ ಪ್ರಾರ್ಥಿಪೆ ನಿಮ್ಮ ಆದಿ ನೀ ಕೂರ್ಮ ಪಾಲಿಸುನಮ್ಮ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಲಿರುಪ ತಾಳಿ ಧನುಜನ ಸೀಳಿ ಧರೆಯ ಮಹಾಳಿಪರಮ ಕೃಪಾಳಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನರಹರಿ ರೂಪ ತಾಳಿ ಪ್ರತಾಪ ತೋರಿದ ಭೂಪ ಪ್ರೌಡಕಲಾಪ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಬಲಿಯನುಮೆಟ್ಟಿ ಹೃದ ಯವ ಕುಟ್ಟಿ ಪಾತಾಳ ಕಟ್ಟಿದ ವಾಮನ ಜೆಟ್ಟಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದಶರಥ ಭಾಲ ದಶಶಿರ ಲೋಲ ದಶಮುಖಕಾಲ ದಶಾನು ಕೂಲ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದಾತ್ರಿಜ ವಂಶ ಮಾಡಿದ ದ್ವಂಸ ಮುನಿಕೂಲ ಹಂಸ ಸತ್ಯ ಪ್ರಶಂಸಾ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಗೋಕುಲ ರಕ್ಷಾ ಸುಜನ ಸಂರಕ್ಷಾ ಪೂತನಿ ಶಿಕ್ಷಾ ಕಂಜಾದಲಾಕ್ಷಾ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಬೆತ್ತಲೆ ನಿಂದು ಭೌದ್ದನೆ ಎಂದು ಭಕ್ತಿಯೊಳಿಂದು ಪ್ರಾರ್ತಿಪೇವಿಂದು'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಲ್ಕ್ಯವತಾರ ಕಲಿಮನ ದೂರ ಧುರಿತಪ್ರಹಾರ ಸುಜನ್ನೋದ್ದರಾ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಾಗರ ವಾಸ ನಾಗಮುಕೇಶ ನುಡಿಸಿದ ಭಾಷಾ ಭಜನಾ ವಿಶೇಷ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸುಜನರು ಕೂಡಿ ಭಜನೆಯ ಮಾಡಿ ಭಜಿಸುತಲಾಡಿ ಜಗವಕೊಂಡಾಡಿ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಂಗಳಾರಾಮ ಮಂಗಳಭೀಮ  ಮಂಗಳಧಾಮ ಜಗದನೀಸ್ಸೀಮ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಜಯರಘುವೀರ ಜಗಧದಿ ಶೂರ ಭಯನಿವಹಾರ ಭಕ್ತಮಂದಾರ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದಶರಥ ಪುತ್ರ ಧನ್ಯಚೇರಿತ್ರ ಪಶುಮತಿ ಮಿತ್ರ ಪುಣ್ಯ ಸುಗಾಕ್ರಾ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಜೀವ ನೇತ್ರ ರಮಣೀಯ ಘಾತ್ರ ಸೀತಾ ಕಲಾತ್ರ ಸಿಂಧೂಪವಿತ್ರ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭವ್ಯ ವಿಲಾಸ ಭಕ್ತ ಶಂಕಾಶ  ಭವ ಭಯ ಶೂರ ಭಕ್ತಾದಿ ವಾಸ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಚಿನ್ಮಯ ರಾಮ ಚಿದ್ರುಪದಾನ ಅಖಂಡ ರಾಮ ಆನಂದರಾಮ '}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀ ರಾಮ ರಾಮ ಗೋಪಾಲ ರಾಮ ಶ್ರೀಲೋಲಾ ರಾಮ ಜಾನಕಿ ರಾಮ'}
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


export default Sname;