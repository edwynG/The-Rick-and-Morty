import React, { useRef } from "react";
import "../../../css/FormContact.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdSubtitles } from "react-icons/md";
import { messageSend } from "../../../API/API";

function FormContact({notification}) {
  const name = useRef();
  const lastName = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    let nm = name.current.value;
    let ln = lastName.current.value;
    let ms = message.current.value;
    let em = email.current.value;
    let sj = subject.current.value;
    name.current.value = "";
    lastName.current.value = "";
    message.current.value = "";
    email.current.value = "";
    subject.current.value = "";
    console.log(nm,ln,ms,em,sj)

    try {
      let result = await messageSend(nm, ln, ms, em, sj);
      notification(result)
    } catch (error) {
      notification(result)
    }
  };

  return (
    <>
      <form className="Form-container" onSubmit={handlerSubmit}>
        <div className="Form-title">
          <h3 className="title_h3">Hello programmer</h3>
          <h2 className="title_h2">Contact us</h2>
          <h4 className="title_h4">
            You want to know what REST API we use?
            <a href="https://rickandmortyapi.com/" target="_blank">
              {" "}
              Click here{" "}
            </a>
          </h4>
        </div>
        <div className="Form-inputs_container">
          <label htmlFor="Nombre" className="inputs_container_label name">
            <input
              type="text"
              id="Nombre"
              autoComplete="off"
              required
              ref={name}
            />
            <span>Your name</span>

            <FaUser />
          </label>
          <label htmlFor="Apellido" className="inputs_container_label lastname">
            <input
              type="text"
              id="Apellido"
              autoComplete="off"
              required
              ref={lastName}
            />
            <span>Your last name</span>

            <FaUser />
          </label>
          <label htmlFor="Email" className="inputs_container_label email">
            <input
              type="text"
              id="Email"
              autoComplete="off"
              required
              ref={email}
            />
            <span>Your email</span>

            <MdEmail />
          </label>
          <label htmlFor="Asunto" className="inputs_container_label subject">
            <input
              type="text"
              id="Asunto"
              autoComplete="off"
              required
              ref={subject}
            />
            <span>Your subject</span>

            <MdSubtitles />
          </label>
          <label htmlFor="Message" className="inputs_container_label message">
            <textarea
              type="text"
              id="Message"
              autoComplete="off"
              required
              ref={message}
            ></textarea>
            <span>Messge</span>
          </label>
        </div>
        <div className="Form-btn_container">
          <button type="submit" className="btn_send">
            Send message
          </button>
        </div>
      </form>
    </>
  );
}

export default FormContact;
