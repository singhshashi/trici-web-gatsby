import { createTheme } from '@fluentui/react/lib/Styling'

const themeTriciLight= createTheme({
    palette: {
      themePrimary: '#074f66',
      themeLighterAlt: '#f0f7f9',
      themeLighter: '#c4dee7',
      themeLight: '#97c3d1',
      themeTertiary: '#488ca3',
      themeSecondary: '#166078',
      themeDarkAlt: '#06465c',
      themeDark: '#053b4e',
      themeDarker: '#042c39',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#595959',
      neutralSecondary: '#373737',
      neutralPrimaryAlt: '#2f2f2f',
      neutralPrimary: '#000000',
      neutralDark: '#151515',
      black: '#0b0b0b',
      white: '#ffffff',
    }});

  const themeTriciDark= createTheme({
    palette: {
      themePrimary: '#ffffff',
      themeLighterAlt: '#767676',
      themeLighter: '#a6a6a6',
      themeLight: '#c8c8c8',
      themeTertiary: '#d0d0d0',
      themeSecondary: '#dadada',
      themeDarkAlt: '#eaeaea',
      themeDark: '#f4f4f4',
      themeDarker: '#f8f8f8',
      neutralLighterAlt: '#074c63',
      neutralLighter: '#074b62',
      neutralLight: '#07485e',
      neutralQuaternaryAlt: '#064357',
      neutralQuaternary: '#064053',
      neutralTertiaryAlt: '#063d50',
      neutralTertiary: '#c8c8c8',
      neutralSecondary: '#d0d0d0',
      neutralPrimaryAlt: '#dadada',
      neutralPrimary: '#ffffff',
      neutralDark: '#f4f4f4',
      black: '#f8f8f8',
      white: '#074f66',
    }});

const myTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },

});
    export const themes = {
        themeTriciDark: themeTriciDark,
        themeTriciLight: themeTriciLight,
        themeFabricDefault: myTheme
    }