import { transparentize } from 'polished';

const blue = '#8fc3e9';
const red = '#f26a5c';
const orange = '#D46A43';
const yellow = '#FDCE9D';
const navy = '#2D3540';
const beige = '#F7F0e6';

export default {
  accent: beige,
  buttonHoverColor: yellow,
  errorBackgroundColor: transparentize(0.85, red),
  errorColor: red,
  headerBorderColor: yellow,
  inputBgFocusColor: transparentize(0.85, beige),
  inputBorderColor: transparentize(0.75, navy),
  issueLabelBg: beige,
  labelColor: transparentize(0.25, navy),
  linkHoverColor: blue,
  mobileMax: '767px',
  mobileNavBackground: beige,
  navLinkHoverBorder: blue,
  sansSerifFont: '"Yantramanav",sans-serif',
  text: navy,
  warningColor: orange,
};
