import '!style!css!less!./SignUp.less';
import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <section id="signup" className="section-block">
        <div className="row">
          <h3>報名</h3>
          <div className="text-center">

            <div className="pure-u-1 pure-u-md-1-2 title">台灣年度 PHP 聚會於10月9日在輔仁大學國璽樓舉行。</div>
            <div className="pure-u-1 pure-u-md-1-2 date">開放報名時間 <span className="time">2015/09/14</span> 中午 12:00 (Taipei/Asia)</div>
          </div>
          <div className="pure-u-1 text-center signup-btn">
            <a href="" className="pure-button btn" target="_blank">立即報名</a>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
