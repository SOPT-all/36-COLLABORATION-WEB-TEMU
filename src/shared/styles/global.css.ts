import { globalStyle } from '@vanilla-extract/css';
import '@styles/layers.css';
import '@styles/reset.css';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});
