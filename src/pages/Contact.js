import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import ContactInfo from '../data/stats/contact';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Zitong Zhu via email @ zhuzitong@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can contact me at: </p>
        <div className="contact-info">
          {ContactInfo.map((contact) => (
            <div key={contact.key} className="contact-item">
              <span className="contact-key">{contact.key} :</span>
              <span className="contact-value">{contact.value}</span>
            </div>
          ))}
        </div>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
