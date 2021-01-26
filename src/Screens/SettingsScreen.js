/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {View, BackHandler, Switch} from 'react-native';
import {TouchableRipple, List, Avatar, Divider, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const jayanth = require('../Assets/Images/jayanth.webp');
const yoga = require('../Assets/Images/yoga.webp');

const SettingsScreen = ({navigation}) => {
  const {
    darkmode,
    toggleDarkMode,
    darkSwitch,
    backgroundColor,
    textColor,
    toggleDarkSwitch,
    headerBackground,
  } = useContext(ThemeContext);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('HomeScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const SLISTHEADER = (props) => {
    return (
      <List.Item
        title={props.title}
        titleStyle={{color: textColor}}
        left={(_props) => (
          <List.Icon {...props} icon={props.icon} color={textColor} />
        )}
      />
    );
  };

  const SLISTITEM = (props) => {
    return (
      <TouchableRipple
        onPress={props.toggle}
        rippleColor="rgba(0, 0, 0, .32)"
        centered={true}>
        <List.Item
          title={props.title}
          description={props.subtitle}
          titleStyle={{color: textColor}}
          descriptionStyle={{color: textColor}}
          right={(_props) => (
            <Switch
              value={props.state}
              onValueChange={props.toggle}
              trackColor={{false: '#ccc', true: '#81b0ff'}}
              thumbColor={props.state ? '#5098E6' : '#f4f3f4'}
            />
          )}
        />
      </TouchableRipple>
    );
  };

  const SCL = (props) => {
    return (
      <>
        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .32)"
          centered={true}
          style={{marginLeft: 10}}>
          <List.Item
            title={props.title}
            titleStyle={{color: textColor}}
            left={(_props) => <Avatar.Image size={50} source={props.image} />}
          />
        </TouchableRipple>
        <Divider style={{backgroundColor: headerBackground}} />
      </>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <HeaderComponent
        backAction={() => {
          navigation.navigate('HomeScreen');
        }}
        title={'Settings'}
      />
      <SLISTHEADER title={'General Settings'} icon={'cogs'} />
      <SLISTITEM
        toggle={toggleDarkMode}
        title={'Dark theme'}
        subtitle={'Reduce glare and improve night viewing'}
        state={darkmode}
      />
      <SLISTITEM
        toggle={toggleDarkSwitch}
        title={'Toggle in Every Page'}
        subtitle={'Show toggle dark mode switch in every page'}
        state={darkSwitch}
      />
      <SLISTHEADER title={'Created By'} icon={'information'} />
      <SCL image={jayanth} title={'Jayanthbharadwaj M'} />
      <SCL image={yoga} title={'Yoga'} />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: 4,
          flex: 1,
        }}>
        <Text style={{color: textColor, fontSize: 20}}>Made With {''}</Text>
        <Icon
          name={'heart'}
          style={{
            color: 'red',
            fontSize: 25,
          }}
        />
        <Text style={{color: textColor, fontSize: 20}}> In India</Text>
      </View>
      <Admob />
    </View>
  );
};

export default SettingsScreen;
