import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBilibili } from '@fortawesome/free-brands-svg-icons/faBilibili';

import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={
      "Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <div className="title">
        <h2>
          About this site
        </h2>
        <p>
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
          view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me.<br /><br />
          Visit my Youtube & Bilibili channel to know more about my works!<br />
          <FontAwesomeIcon icon={faBilibili} />Bilibili: <a href="https://space.bilibili.com/513594231?spm_id_from=333.337.0.0" target="_blank" rel="noopener noreferrer">保护团长</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faYoutube} />Youtube: <a href="https://www.youtube.com/@IvyNiu-b8q" target="_blank" rel="noopener noreferrer">Ivy Niu</a>{' '}
        </p>
        {/* <h2>
          My Family
        </h2> */}
        <img src={`${PUBLIC_URL}/images/poster.jpeg`} alt="" className="poster-image" />
      </div>

    </article>
  </Main>
);

export default Index;
