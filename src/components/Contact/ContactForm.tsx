import React from 'react';
import './ContactForm.scss';
import useContactForm from './ContactFormHook';

const alertUser = (message: any) => {
  alert(`Message Sent!
  Subject: ${message.subject}
  Sender: ${message.email}
  Name: ${message.name}
  Comments: ${message.comments}`);
};

export default function ContactForm() {
  const { message, handleInputChange, handleSubmit } = useContactForm(
    alertUser
  );
  return (
    <div className="contactForm_container">
      <div className="contactForm_inner">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              onChange={handleInputChange}
              value={message.subject}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={handleInputChange}
              value={message.email}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              value={message.name}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              id="comments"
              rows={10}
              onChange={handleInputChange}
              value={message.comments}
              required
            />
          </div>
          <div className="controls">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
