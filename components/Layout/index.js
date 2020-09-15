import React from 'react';

import styles from '../../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default Layout;