import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={cx('box', { 
        blue: isBlue 
      })}>
      </div>
    );
  }
}

export default App;