import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import styles from './IndexPage.less';


// const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
//   <svg
//     className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
//     {...restProps}
//   >
//     <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
//     {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
//   </svg>
//    );

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
