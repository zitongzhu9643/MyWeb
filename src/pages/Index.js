import React from 'react';
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
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
          view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <h2>
          My Ideal Career
        </h2>
        <img src={`${PUBLIC_URL}/images/poster.jpg`} alt="" className="poster-image" />
      </div>

    </article>
  </Main>
);

export default Index;
