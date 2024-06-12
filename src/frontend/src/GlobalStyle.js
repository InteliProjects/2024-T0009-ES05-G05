import { createGlobalStyle } from 'styled-components';
import BeVietnamPro from './fonts/BeVietnamPro-Regular.ttf'; // Caminho para o arquivo da fonte
import BeVietmamProBold from './fonts/BeVietnamPro-Bold.ttf';
import BeVietmamProExtraBold from './fonts/BeVietnamPro-ExtraBold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url(${BeVietnamPro}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Be Vietnam Pro Extra Bold';
    src: url(${BeVietmamProExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Be Vietnam Pro Bold';
    src: url(${BeVietmamProBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
`;

export default GlobalStyle;
