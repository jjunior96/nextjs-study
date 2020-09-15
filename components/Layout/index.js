import React from 'react';

// import styles from '../../styles/Layout.module.css';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}

export default Layout;