import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

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
//input
  const listenText = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <button
            className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
            onClick={validemail}
          >
            Email Testing
          </button>
          <button
            className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
            onClick={listenText}
          >
            Listen
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
        <p className="container  text-start">{text}</p>
      </div>

      <div className="container  d-flex g-0 justify-content-end">
        <Button variant="success rounded-8 shadow-0" onClick={handleShow}>
          <MDBIcon fas icon="headset" className="fa-2x me-0" />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          dialogClassName="position-bottom-right"
          keyboard={false}
          
          style={{ position: "fixed", right: 0, bottom: 0 }}
        >
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title>Chat With Us</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            <iframe
              src="https://mediafiles.botpress.cloud/bab7bcb6-4c6e-4c9d-8c09-24673a63f02e/webchat/bot.html"
              frameborder="0"
              width="100%"
              height="auto"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
