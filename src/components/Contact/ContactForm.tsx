import React from 'react';
import './ContactForm.scss';
import useContactForm from './ContactFormHook';

interface IMessage {
  subject: string;
  email: string;
  name: string;
  comments: string;
}

const message = (m: IMessage) => {
  alert(`Message Sent!
  Subject: ${m.subject}
  Sender: ${m.email}
  Name: ${m.name}
  Comments: ${m.comments}`);
};

export default function ContactForm() {
  const { inputs, handleInputChange, handleSubmit } = useContactForm(message, {
    subject: '',
    email: '',
    name: '',
    comments: ''
  });

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
              value={inputs.subject}
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
              value={inputs.email}
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
              value={inputs.name}
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
              value={inputs.comments}
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
