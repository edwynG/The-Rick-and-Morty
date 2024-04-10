import React from "react";
import ContentClasic from "./Home component/ContentClasic";
import "../../css/Contact.css";
import FormContact from "./Contact component.jsx/FormContact"
import CardSample from "../../components/MainContent components/Home component/CardSample"
function Contact() {
  return (
    <ContentClasic>
      <section className="Container-Contact">
      <section className="container-personal_title">
        <div className="contianer-img">
     
        </div>
        <h2 className="title-contact">If you can imagine it you can program it</h2>
        <h3 className="subContext">Contact us by this means for any information or inconvenience with the web </h3>
      </section>

        <section className="Container-form">
          <FormContact/>
        </section>
        <section className="container-personal">

          <CardSample
          style={{flexGrow:1,maxWidth:400}}
              content={{
                title:"Prepared by Edwyn Guzman",
                content:"We have more projects on GITHUB",
                svg:<img src="https://i.pinimg.com/564x/21/3a/75/213a759433b15b0f85e6867f4ed7c368.jpg"/>
                
              }}
              extra={<><a href="https://github.com/edwynG" className="extra_card_enlace" target="_blank">Read more</a></>}
          />
          <h5 className="pie_extra">
            <span className="animation-text">Hello world..</span>
          </h5>
        </section>
      </section>
    </ContentClasic>
  );
}

export default Contact;
