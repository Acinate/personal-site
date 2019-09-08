import { useState } from 'react';

interface IMessage {
  subject: string;
  email: string;
  name: string;
  comments: string;
}

const messageState: IMessage = {
  subject: '',
  email: '',
  name: '',
  comments: ''
};

const useContactForm = (callback) => {
  const [message, setMessage] = useState(messageState);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(message);
  };
  const handleInputChange = (event) => {
    event.persist();
    setMessage((msg) => ({
      ...msg,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    message
  };
};

export default useContactForm;
