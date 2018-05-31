import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function connectApp(ConnectedComponent) {

  class Connection extends Component {

    render() {
      return (
        <div>
          <Header {...this.props} {...this.state} />
          <ConnectedComponent {...this.props} {...this.state} />
          <Footer {...this.props} {...this.state} />
        </div>
      );
    }
  };

  return Connection;
}
