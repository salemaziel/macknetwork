import React from "react";
import Section from "./Section";
import ContentCards from "./ContentCards";

import Container from 'react-bootstrap/Container'


import cardStyles from './cards.module.css'

function ContentCardsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
        <Container fluid>
        <ContentCards
          items={[
            {
              image: "https://cdn.shopify.com/s/files/1/0079/2389/2306/products/photo_2020-06-2521.33.28_540x.jpg?v=1594163836",
              title: "DELTA 8 CARTRIDGES",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
              link: "/#"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0079/2389/2306/products/wteLegendary-OG_540x.jpg?v=1589326898",
              title: "Top Shelf Flower",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
              link: "/#"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0079/2389/2306/products/Dr.D.CBD_Gummy_1500-White_R5F-1024x1024_82b6f99e-ef88-417d-9682-e124e44999f2_540x.png?v=1589294790",
              title: "Delta 8 Gummies",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
              link: "/#"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0079/2389/2306/products/sour_diesel_540x.png?v=1583745625",
              title: "Delta 8 Liters",
              body: 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
              link: "/#"
            },
          ]}
        ></ContentCards>
        </Container>
    </Section>
  );
}

export default ContentCardsSection;
