import React, { useState, useEffect } from 'react';
import axios from 'axios';

const message = 'test';

const textCenter: any = {
  textAlign: 'center',
  color: '#fff'
};

const MOTD = () => {
  const [data, setData] = useState({ message: 'message not found' });

  const baseUrl = window.location.host;
  const apiUrl = 'http://' + baseUrl + '/api/';

  const getMessage = async () => {
    await axios(apiUrl)
      .then((result) => {
        if (result.data && result.data.message) {
          setData({ message: result.data.message });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="MOTD">
      <p style={textCenter}>{data.message}</p>
    </div>
  );
};

export default MOTD;
