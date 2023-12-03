import React from "react";
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper";
import PageContentSection from "../PageContentWrapper/PageContentSection";
import { StaticImage } from "gatsby-plugin-image";
import H1 from "../Typography/H1";
import ContactForm from "../ContactForm/ContactForm";
import Paragraph from "../Typography/Paragraph";

const ContactContent = () => {
  return (
    <PageContentWrapper reverse="true">
      <PageContentSection>
        <H1 fontSize="48px">Contact Me</H1>
        <Paragraph>
          Please feel free to contact me by filling the form if you need any
          further information ^_^
        </Paragraph>
        <StaticImage
          src="../../assets/images/contact.jpg"
          alt="woman cooking"
          className="contact-image"
        />
      </PageContentSection>
      <PageContentSection>
        <ContactForm />
      </PageContentSection>
    </PageContentWrapper>
  );
};

export default ContactContent;
