import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';

import { Slide01 } from './slide/Slide01';
import { Slide02 } from './slide/Slide02';
import { Slide03 } from './slide/Slide03';
import { Slide04 } from './slide/Slide04';
import { Slide05 } from './slide/Slide05';
import { Slide06 } from './slide/Slide06';

import { Deck, DefaultTemplate} from 'spectacle';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const theme = {
  colors: {
    primary: '#1d1d1f',      // 메인 글자색 (애플 특유의 짙은 다크그레이)
    secondary: '#86868b',    // 보조 글자색 (연한 회색)
    tertiary: '#f5f5f7',     // 발표 전체 기본 배경색 (애플 스타일 라이트 그레이)
    quaternary: '#ffffff'    // 카드 형태에 사용할 순백색 (White) 
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};


export default function Presentation() {
  return (
    <Deck 
      theme={theme}
      template={() => <DefaultTemplate color={theme.colors.primary} />}
      >
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
      <Slide05 />
      <Slide06 />
    </Deck>
  );
};


// 현재 index.html의 <div id="app"></div> 태그를 찾아 렌더링하도록 매핑
const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Presentation />);
}