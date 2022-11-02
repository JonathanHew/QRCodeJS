import React, { Fragment, useEffect, useState } from "react";
import QRcode from "qrcode.react";

const DisplayURLs = () => {
  const [QRs, setQR] = useState([]);

  const getQR = async () => {
    try {
      const response = await fetch("http://localhost:5002/scan");
      const jsonData = await response.json();

      setQR(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQR();
  }, []);

  return (
    <Fragment>
      {QRs.map((qr) => (
        <div>
          <p>{qr.url_text}</p>
          <QRcode value={qr.url_text}></QRcode>
        </div>
      ))}
    </Fragment>
  );
};
export default DisplayURLs;
