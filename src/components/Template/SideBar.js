import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zitong Zhu</h2>
        <p>
          <a href="mailto:zhuzitong@gmail.com">zhuzitong@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Zitong. I hold an M.S.E. in{' '}
        <a href="https://www.cis.upenn.edu/graduate/program-offerings/mse-in-cis/">
          Computer and Information Science
        </a>
        {' '}from the University of Pennsylvania. I worked at{' '}
        <a href="https://www.tencent.com">Tencent Technology</a>{' '}for four years, where I was responsible for
        the architecture and development of internal financial systems, primarily using Java.
        Currently, I&apos;m pursuing a Master of Information Technology at the{' '}
        <a href="https://www.auckland.ac.nz">University of Auckland</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">
        &copy; Zitong Zhu <Link to="/">mldangelo.com</Link>.
      </p> */}
    </section>
  </section>
);

export default SideBar;
