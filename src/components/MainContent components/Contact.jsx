import React, { useEffect, useRef } from "react";
import ContentClasic from "./Home components/ContentClasic";
import "../../css/Contact.css";
import FormContact from "./Contact components/FormContact";
import CardSample from "../../components/MainContent components/Home components/CardSample";
import { useState } from "react";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BsSendExclamationFill } from "react-icons/bs";

function Contact() {
  const [notification, setNotification] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  let notiInfo = {
    title: notification?.status == 200 ? "Message send" : "Message not send",
    content: notification.text,
    svg:
      notification?.status == 200 ? (
        <BsFillSendCheckFill />
      ) : (
        <BsSendExclamationFill />
      ),
  };

  let styleNoti = {
    backgroundColor:
      notification?.status == 200
        ? "var(--color_hover)"
        : "var(--color_live_false)",
    minWidth: 200,
    height: 120,
    color: "#fff",
    fill: "#fff",
  };
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 12000);
  }, [notification]);

  return (
    <ContentClasic>
      <section className="Container-Contact">
        <section className="container-personal_title">
          <div className="contianer-img"></div>
          <h2 className="title-contact">
            If you can imagine it you can program it
          </h2>
          <h3 className="subContext">
            Contact us by this means for any information or inconvenience with
            the web{" "}
          </h3>
        </section>

        <section className="Container-form">
          <FormContact notification={setNotification} />
        </section>
        <section className="container-personal">
          <CardSample
            style={{ flexGrow: 1, maxWidth: 400 }}
            content={{
              title: "Prepared by Edwyn Guzman",
              content: "We have more projects on GITHUB",
              svg: (
                <img src="https://i.pinimg.com/564x/21/3a/75/213a759433b15b0f85e6867f4ed7c368.jpg" />
              ),
            }}
            extra={
              <>
                <a
                  href="https://github.com/edwynG"
                  className="extra_card_enlace"
                  target="_blank"
                >
                  Read more
                </a>
              </>
            }
          />
          <h5 className="pie_extra">
            <span className="animation-text">Hello world..</span>
          </h5>
        </section>

        {showNotification && (
          <>
            <span className="notification_container animation_notification">
              <CardSample content={notiInfo} style={styleNoti} />
            </span>
          </>
        )}
      </section>
    </ContentClasic>
  );
}

export default Contact;
