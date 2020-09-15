import React from 'react';

import LogoVercel from '../../public/vercel.svg';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      {children}
      <LogoVercel />
    </S.Wrapper>
  )
}

export default Layout;