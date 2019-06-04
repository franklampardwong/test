import React, { Component } from 'react';
import EpicMenu from './EpicMenu';

import logo from './logo.gif';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
      { label: 'Test 1', link: '#test-1' },
    ];

    return (
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>
    );
  }
}

export default App;