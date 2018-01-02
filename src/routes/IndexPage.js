import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import styles from './IndexPage.css';


function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.test} >
        <Button>这里是一个button</Button>
        <div className={styles.another} >这里是另外一个区域</div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
