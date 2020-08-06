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
                  "https://cdn.shopify.com/s/files/1/0079/2389/2306/files/photo-1524653736724-8490ee06859d_360x.jpeg",
              },
              {
                title: "Cloud",
                body:
                  "Personal Cloud Storage",
                image:
                  "https://cdn.shopify.com/s/files/1/0079/2389/2306/files/photo-1524653736724-8490ee06859d_360x.jpeg",
              },
              {
                title: "VideoChat",
                body:
                  "Personal Video Conferencing",
                image:
                  "https://cdn.shopify.com/s/files/1/0079/2389/2306/files/photo-1524653736724-8490ee06859d_360x.jpeg",
              },
              {
                title: "and More",
                body:
                  "More To Come",
                image:
                  "https://cdn.shopify.com/s/files/1/0079/2389/2306/files/photo-1524653736724-8490ee06859d_360x.jpeg",
              },
            ]}
          ></Features>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
