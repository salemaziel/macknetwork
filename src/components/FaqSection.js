import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Faq
          items={[
            {
              question: "What is the Mackintosh Network?",
              answer:
                "It is the central hub for Mackintosh friends and family to find and use self-hosted services.",
            },
            {
              question: "What is a 'self-hosted service'?",
              answer:
                "A self hosted service is one that is running on a server (aka computer) owned or controlled by an individual, rather than some big company or corporation. When you connect to the service, you are connecting to that individuals computer, with no one else sitting in between to collect your data or charge you fees."
            },
            {
              question: "What is the benefit of a self hosted service?",
              answer:
                "The benefits include online privacy due to not having companies tracking, collecting, and selling your data, using services for free that are similar to other similar paid services, and having a direct line to the help line if you're having trouble with a service, because you already know the person running it.",
            },
            {
              question: "Who is that person again, and how do I contact them?",
              answer:
                "In this case it is mostly (actually, only) Salem Aziel. If you don't know how to contact him through family or some mutual friends, chances are you're not friends or family and won't be able to use the network at all",
            },
          ]}
        ></Faq>
      </Container>
    </Section>
  );
}

export default FaqSection;
