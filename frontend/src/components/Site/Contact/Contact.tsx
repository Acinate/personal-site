import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contactForm" className="contact_container">
        <h2 className="section-title">Contact</h2>
        <div className="contact_inner">
          <div className="contact_disclaimer">
            <p>Use this form to get in touch with me.</p>
            <p>Messages will be delivered directly to my e-mail.</p>
            <p>Ask me anything.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  }
}
