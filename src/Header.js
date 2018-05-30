import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import './Header.css';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
              </ul>
            </nav>
            <aside>
              <ul className="social icon">
                <li><a href="https://facebook.com/bbbucsd/" title="Facebook" target="_blank">v</a></li>
                <li><a href="mailto:bbb@ucsd.edu" title="Mail" target="_blank">u</a></li>
              </ul>
            </aside>
          </div>
        </header>

        <section className="page_heading">
          <div className="logo container">
            <img src="images/icon.jpg" alt="Books Beyond Boundaries Icon" height="90" width="90" />
          </div>
        </section>

      </div>
    );
  }
}
