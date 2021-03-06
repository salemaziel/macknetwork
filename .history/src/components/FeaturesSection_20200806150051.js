import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Watch",
                body:
                  "Personal Netflix-like Media Hub",
                image:
                  "https://pmcvariety.files.wordpress.com/2019/04/netflix-tv-screen.jpg",
              },
              {
                title: "Cloud",
                body:
                  "Personal Cloud Storage",
                image:
                  "https://prepr.org/wp-content/uploads/2019/06/Firm-Central-Cloud.png",
              },
              {
                title: "VideoChat",
                body:
                  "Personal Video Conferencing",
                image:
                  "https://cdn.vox-cdn.com/thumbor/R5ericK4jly9ilvVmXUvoltuOXc=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011059/GVC_UI_50people_laptop_1024x652.png",
              },
              {
                title: "More",
                body:
                  "And More To Come, when I Can Get To it",
                image:
                  "https://s27389.pcdn.co/wp-content/uploads/2019/12/predictions-for-cloud-in-2020-1024x440.jpeg",
              },
            ]}
          ></Features>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
