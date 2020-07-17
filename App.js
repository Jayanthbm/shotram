/* eslint-disable prettier/prettier */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './src/Screens/HomeScreen';
import ShotramScreen from './src/Screens/ShotramScreen';
import BhajaneScreen from './src/Screens/BhajaneScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

//Shotras
import Dashavatara from './src/Shotras/Dashavatara';
import GodaSthuti from './src/Shotras/GodaSthuti';
import GopalaVimshathi from './src/Shotras/GopalaVimshathi';
import Hayagriva from './src/Shotras/Hayagriva';
import MukundaMala from './src/Shotras/MukundaMala';
import RaghuveeraGadya from './src/Shotras/RaghuveeraGadya';
import Sudarshanastaka from './src/Shotras/Sudarshanastaka';
import Tiruppavai from './src/Shotras/Tiruppavai';
import GarudaDandakam from './src/Shotras/GarudaDandakam';
import VishnuSahasranamam from './src/Shotras/VishnuSahasranamam';
import Jitante from './src/Shotras/Jitante';
import Nyasadashaka from './src/Shotras/Nyasadashaka';
import Amaladipiran from './src/Shotras/Amaladipiran';
import KanninunShiruttamb from './src/Shotras/KanninunShiruttamb';
import ChaturShloki from './src/Shotras/ChaturShloki';
import Tirupalland from './src/Shotras/Tirupalland';
import Tirupalliyucchi from './src/Shotras/Tirupalliyucchi';
import Shatumurai from './src/Shotras/Shatumurai';
import ShatumuraiValitirunam from './src/Shotras/ShatumuraiValitirunam';
import DeshikaMangalam from './src/Shotras/DeshikaMangalam';
import SriStuti from './src/Shotras/SriStuti';

import BhajaYatirajam from './src/Bhajanes/BhajaYatirajam';
import ThugireRangana from './src/Bhajanes/ThugireRangana';
import HanumanChalisa from './src/Bhajanes/HanumanChalisa';
import HareKrishnaMantram from './src/Bhajanes/HareKrishnaMantram';
import ShuddaBrahma from './src/Bhajanes/ShuddaBrahma';
import SreenivasaNeenePaliso from './src/Bhajanes/SreenivasaNeenePaliso';
const switchNavigator = createSwitchNavigator({
  HomeScreen: createBottomTabNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="home" size={20} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Icon
            name="settings"
            size={20}
          />
        ),
      },
    },
  }),
  ShotramScreen: ShotramScreen,
  BhajaneScreen: BhajaneScreen,
  //Shotras
  Dashavatara: Dashavatara,
  GodaSthuti: GodaSthuti,
  GopalaVimshathi: GopalaVimshathi,
  Hayagriva: Hayagriva,
  MukundaMala: MukundaMala,
  RaghuveeraGadya: RaghuveeraGadya,
  Sudarshanastaka: Sudarshanastaka,
  Tiruppavai: Tiruppavai,
  GarudaDandakam: GarudaDandakam,
  VishnuSahasranamam: VishnuSahasranamam,
  Jitante: Jitante,
  Nyasadashaka: Nyasadashaka,
  Amaladipiran: Amaladipiran,
  KanninunShiruttamb: KanninunShiruttamb,
  ChaturShloki: ChaturShloki,
  Tirupalland: Tirupalland,
  Tirupalliyucchi: Tirupalliyucchi,
  Shatumurai: Shatumurai,
  ShatumuraiValitirunam: ShatumuraiValitirunam,
  DeshikaMangalam: DeshikaMangalam,
  SriStuti: SriStuti,
  //Bhajanes
  BhajaYatirajam: BhajaYatirajam,
  ThugireRangana: ThugireRangana,
  HanumanChalisa: HanumanChalisa,
  HareKrishnaMantram: HareKrishnaMantram,
  ShuddaBrahma: ShuddaBrahma,
  SreenivasaNeenePaliso: SreenivasaNeenePaliso
});

const App = createAppContainer(switchNavigator);

export default App;
