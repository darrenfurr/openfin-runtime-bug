import { createMuiTheme } from '@material-ui/core/styles';

const type = 'dark'; // set theme here

const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightHeavy: 700,
  useNextVariants: true,
};

const palette = {
  type,
  background: { paper: '#303030', default: '#19212B' },
  primary: {
    main: '#19212B',
    light: 'rgb(71, 77, 85)',
    dark: 'rgb(17, 23, 30)',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#07638e',
    light: 'rgb(56, 130, 164)',
    dark: 'rgb(4, 69, 99)',
    contrastText: '#ffffff',
  },
  action: {
    hoverOpacity: 0.08,
    hover: 'rgba(0, 0, 0, 0.08)',
    selected: 'rgba(0, 0, 0, 0.14)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    active: 'rgba(0, 0, 0, 0.54)',
  },
  direction: {
    up: '#0B9567',
    down: '#f44336',
  },
  divider: '#757575',
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  // color: setColor(),
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A700: '#616161',
    A100: '#d5d5d5',
    A400: '#303030',
    A200: '#aaaaaa',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.38)',
    hint: 'rgba(255, 255, 255, 0.38)',
  },
};

const overrides = {
  MuiSlider: {
    maxWidth: 25,
  },
};

const defaultTheme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  palette,
  typography,
  overrides,
};

export default createMuiTheme({ ...defaultTheme });
