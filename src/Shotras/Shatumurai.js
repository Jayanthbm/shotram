/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Switch, BackHandler, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Slider from '@react-native-community/slider';
import Header from '../Components/Header';
import St from '../Components/St';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';

const Shatumurai = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(null);
    const [darkmode, setDarkMode] = useState(null);
    const [showToggle, setShowToggle] = useState(null);
    const backgroundColor = darkmode ? '#000' : '#fff';
    const textColor = darkmode ? '#fff' : '#000';

    const [font, setFont] = useState(24);
    const storeData = async (value) => {
        try {
            let v = value ? 'true' : 'false';
            await AsyncStorage.setItem('@darkmode', v);
        } catch (e) { }
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
        } catch (e) { }
    };

    useEffect(() => {
        getData();
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
                    title="ಶಾತ್ತುಮರೈ"
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
                            line1={'||ತಿರುಪ್ಪಾವೈ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶಿತ್ತಂ ಶಿರುಕಾಲೇ ವಂದುನ್ನೈ ಶೇವಿತ್ತು,'}
                            line2={'ಉನ್ ಪೋತ್ತಾಮರೈ ಯಡಿಯೇ ಪೋತ್ತುಂ ಪೋರುಳ್ ಕೇಳಾಯ್,'}
                            line3={'ಪೆತ್ತಂ ಮೇಯ್ ತುಣ್ಣುಂ ಕುಲತ್ತೀಲ್ ಪಿರಂದು,'}
                            line4={'ನೀಕುತ್ತೇವಲಂಗಳೈ ಕೊಳ್ಳಾಮಲ್ ಪೋಗಾದು,'}
                            line5={'ಇತ್ತೈಪರ್ರೈಕೊಳ್ವಾನನ್ನು ಕಾಣ್ ಗೋವಿಂದಾ,'}
                            line6={'ಎತೈಕ್ಕುಂ ಏಳ್ ಏಳ್ ಪಿರವಿಕ್ಕುಂ,'}
                            line7={'ಉಂದನ್ನೋಡುತೋ ಮೇಯಾವೋಂ ಉನಕ್ಕೇ ನಾಮಾಳ್ ಚ್ಚೈವೋಂ ,'}
                            line8={'ಮತೈನಂಕಾಮಂಗಳ್ ಮಾತ್ತೇಲೋರೆಂಬಾವಾಯ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಂಗಕ್ಕಡಲ್ ಕಡೈನ್ಧ.ಮಾಧಾವನೇ ಕೇಶವನೈ,'}
                            line2={'ತಿಂಗಳ್ ತಿರುಮುಗತ್ತುಚ್ಚೇಯೀಡೈಯಾಲ್ ಶನ್ನಿರೈಂಜಿ,'}
                            line3={'ಅಂಗಪ್ಪರೈಗೊಂಡವಾತ್ರೈ ,'}
                            line4={'ಅಣಿಪುದುವೈ ಪೆಂಗಮಲತ್ತಂಡೆರಿಯಲ್ ಪಟ್ಟರ್ ಪಿರಾನ್ ಗೋದೈಶೊನ್ನ ,'}
                            line5={'ಶಂಗತ್ತಮಿ ಮಾಲೈಮುಪ್ಪಡುಂ ತಪ್ಪಾಮೇ,'}
                            line6={'ಇಂಗುಪರೀಶು ರೈಪ್ಪಾರೀರಿರೆಂಡು ಮಾಲ್ ವರೈತ್ತೊಳ್,'}
                            line7={'ಶೆಂಗಣ್ ತಿರುಮುಗತ್ತು ಚ್ಚೇಲ್ವತ್ತಿರುಮಾಲಾಲ್,'}
                            line8={'ಎಂಗುಂ ತಿರುವರುಳ್ ಪೆತ್ತು-ಇರುಬರುವೆರೆಂಬವಾಯ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'||ತಿರುಪ್ಪಲ್ಲಾಂಡು||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಲ್ಲಾಂಡು ಪಲ್ಲಾಂಡು ಪಲ್ಲಾಯಿರುತ್ತಾಂಡು,'}
                            line2={'ಪಲಕೋಡಿ ನೂರಾಯಿರಂ,'}
                            line3={'ಮಲ್ಲಾಂಡು ತಿಣ್ಣೋಳ್ ಮಣಿವಣ್ಣಾ,'}
                            line4={'ಉನ್ ಚೇವಡಿ ಚೆವ್ವಿ ತಿರುಕ್ಕಾಪ್ಪು ||1||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಡಿಯೋಮೋಡುಂ ನಿನ್ನೋಡುಂ,'}
                            line2={'ಪಿರಿವಿನ್ರಿ ಆಯಿರಂ ಪಲ್ಲಾಂಡು ವಡಿವಾಯ್ ನಿನ್ವಲ ಮಾರ್ಬಿನಿಲ್,'}
                            line3={'ವಾಳ್ಗಿನ್ರ ಮಂಗೈಯುಂ ಪಲ್ಲಾಂಡು ವಡಿವಾರ್ ಚೋದಿ ವಳತ್ತುರೈಯುಂ,'}
                            line4={'ಚುಡಿರಾಳಿಯುಂ ಪಲ್ಲಾಂಡು ಪಡೈಪೋರ್ ಪುಕ್ಕು ಮುಳಂಗುಂ,'}
                            line5={'ಅಪ್ಪಾಂಜಚನ್ನಿಯಮುಂ ಪಲ್ಲಾಂಡೆ ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'||ವಾಳಿತ್ತಿರುನಾಮಮ್||'}
                        />
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
                            line1={'ವಾಳಿಯಿ ರಾಮಾನುಜ ಪಿಳ್ಳಾನ್ ಮಾದಗವಾಲ್ ವಾಳುಂ ಅಣಿನಿಗಮಾಂತಗುರು ವಾಳಿಯವನ್ ,'}
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
                            line1={'ನಾನಿಲಮುಂ ತಾನ್ವಾಳ್,,ನಾನ್ಮರೈಗಳ್ ತಾಮ್ ನಾಳೆ ಮಾನಹರಿಯನ್ ಮಾರನ್ ಮರೈವಾಳ್ ಜ್ಞಾನಿಯರ್ಗಳ್ ಶೆನ್ನಿಯಣಿಶೇರ್ ತೂಪ್ಪುಲ್ ವೇದಾಂತ ದೇಶಿಕನೇ ಇನ್ನುಮ್ಮೊರು ನೂಟ್ರಾಂಡಿರುಮ್!'}
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


export default Shatumurai;
