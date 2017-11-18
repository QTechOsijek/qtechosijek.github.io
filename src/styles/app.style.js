import style from './style';

const s = Object.create(style);

s.root = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '0 0 98px 0',
  width: window.innerWidth,
  minHeight: window.innerHeight * 0.9,
  // use responsive max-width to simulate padding/margin to allow
  // space for vertical scroll bar without creating horizontal scroll bar
  // (if there is padding, the window will scroll horizontally to show the padding)

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.title = {
  fontSize: '30px',
  paddingTop: '2vh',
  paddingBottom: '2vh',
  color: 'white',
  fontFamily: 'Archivo Black',
  textAlign: 'center',
  backgroundColor: '#4CAF50',
};

s.repoLink = {
  fontSize: '14px',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px',
};

export default s;
