import '!style!css!less!./Sponsor.less';
import React, { Component } from 'react';
import SponsorList from './List';
import SponsorData from 'json!yaml!../../../data/sponsors';

class Sponsor extends Component {

  render() {
    return (
      <section id="sponsors" className="section-block">
        <div className="row">
          <h3>贊助</h3>
          <SponsorList data={SponsorData.sponsors} />
        </div>
      </section>
    );
  }
}

export default Sponsor;
