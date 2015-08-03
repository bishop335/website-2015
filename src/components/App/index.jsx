import '!style!css!less!./App.less';
import React, { Component } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Footer from '../Footer';
import About from '../About';
import SignUp from '../SignUp';
import Prospect from '../Prospect';
import Speaker from '../Speaker';
import Schedule from '../Schedule';
import Location from '../Location';
import Sponsor from '../Sponsor';

class App extends Component {

  componentDidMount() {
    let title = document.title;
    let $w = $(window);
    let $b = (window.opera) ?
      (document.compatMode === 'CSS1Compat' ? $('html') : $('body')) :
      $('html,body');

    $(function() {
      $w.on('hashchange', function () {
        let hash = window.location.hash || '#top-section';
        let $link = $('a[href="' + hash + '"]');
        let pageId = hash.replace('-section', '');
        let subTitle = $link.text() || '首頁';
        let top = ($(pageId).offset() && $(pageId).offset().top) || 0;

        $('nav a').css('border-bottom', '0px');
        $link.css('border-bottom', '1px solid #fff');

        $b.animate({
          scrollTop: top
        }, 600, function () {
          $b.scrollTop(top);
        });

        // update title
        document.title = subTitle + ' | ' + title;
        ga('send', 'pageview', {
          'page': 'index.html' + hash,
          'title': document.title
        });
      }).trigger('hashchange');
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <SignUp />
        <Prospect />
        <Speaker />
        <Schedule />
        <Location />
        <About />
        <Sponsor />
        <Footer />
      </div>
    );
  }
}

export default App;