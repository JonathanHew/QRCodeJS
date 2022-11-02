import React, { Fragment, useState } from "react";

const InputURL = () => {
  const [url_text, setURL] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { url_text };
      //console.log(body);
      //console.log(JSON.stringify.body);
      const response = await fetch("http://localhost:5002/scan", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);
    window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">QR code generator</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={url_text}
          onChange={e => setURL(e.target.value)}
        />
        <button className="btn btn-success">Generate</button>
      </form>
    </Fragment>
  );
};

export default InputURL;
