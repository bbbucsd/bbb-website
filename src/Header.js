import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {

  render() {
    //<li><a href="https://facebook.com/bbbucsd/" title="Facebook" target="_blank">v</a></li>
    //<li><a href="mailto:bbb@ucsd.edu" title="Mail" target="_blank">u</a></li>
    return (
      <div>
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/volunteer">volunteer</Link></li>
              </ul>
            </nav>
            <aside>
              <ul className="social icon">
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
