import {Colors} from 'react-native/Libraries/NewAppScreen';

const Color = {
  white: '#ffffff',
  black: '#111111',
  main: '#3679fe',
  grey_0: '#d5d5d5',
  grey_1: '#a6a6a6',
  red: '#e84118',
};

export const theme = {
  background: Color.white,
  text: Color.black,
  errorText: Color.red,

  //Button
  btnBackground: Color.main,
  btnTitle: Color.white,
  btnTextLink: Color.main,
  btnSignout: Color.red,

  //Image
  imgBackground: Color.grey_0,
  imgBtnBackground: Color.grey_1,
  imgBtnIcon: Color.white,

  //Input
  inputBackground: Color.white,
  inputLabel: Color.grey_1,
  inputPlaceholder: Color.grey_1,
  inputBorder: Color.grey_1,
  inputDisabled: Color.grey_0,

  //Spiner
  spinnerBackground: Color.black,
  spinnerIndicator: Color.white,

  //Tab
  tabBtnActive: Color.main,
  tabBtnInactive: Color.grey_1,
};
