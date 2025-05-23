import { globalStyle } from '@vanilla-extract/css';
import '@styles/layers.css';
import '@styles/reset.css';

globalStyle('html', {
  fontSize: '62.5%',
  scrollPaddingTop: '7rem',
});

globalStyle('body', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

globalStyle('main', {
  minHeight: '70vh',
  flexGrow: 1,
  paddingTop: '17.16rem',
});
