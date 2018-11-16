import React, { Component } from 'react';
import classNames from 'classnames/bind';
import StyledButton from './components/StyledButton';
import Button from './components/Button';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div>
        <div className={cx('box', {
          blue : isBlue
        })}>
          <div className={cx('box-inside')}></div>
        </div>
        <Button>버튼</Button>
        <StyledButton>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
