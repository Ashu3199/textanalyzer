import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToClear = () => {
    let newText = "";
    setText(newText);
  };

  const validemail = () => {
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    let newText = isValidEmail(text);
    if (newText) {
      let newText = "yes is a valid email";
      setText(newText);
    } else {
      let newText = "Sorry , Wrong email";
      setText(newText);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{ position: "relative" }}>
          <textarea
            className={`form-control bg-${
              copied ? "success" : "dark"
            } text-light`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <MDBIcon
            fas
            icon={copied ? "check" : "paste"}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
              padding: "5px",
              color: copied ? "green" : "white",
            }}
            onClick={handleCopyToClipboard}
          />
          {copied && (
            <div style={{ color: "green", marginTop: "5px" }}>Copied!</div>
          )}
        </div>
        <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
        <button className="btn btn-success mx-1 my-1 text-capitalize btn-sm " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1 my-1 text-capitalize btn-sm " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-1 my-1 text-capitalize btn-sm " onClick={validemail}>
          Email Testing
        </button>
        <button className="btn btn-danger mx-1" onClick={handleToClear}>
          Clear
        </button>
        </div>
      </div>
      <div className="container my-3 text-light">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
