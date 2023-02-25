import React from "react";
import { Carousel } from "react-carousel-minimal";

const CarouselComponent = () => {
  const data = [
    {
      image:
        "https://thumbs.dreamstime.com/b/smartphone-headphones-office-accessories-yellow-background-modern-lifestyle-business-flat-lay-banner-copy-space-176172776.jpg",
      caption: "Text will come soon... 1",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/smartphone-office-accessories-yellow-background-modern-lifestyle-business-flat-lay-banner-copy-space-176172335.jpg",
      caption: "Text will come soon... 2",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  return (
    <Carousel
      data={data}
      time={2000}
      width="100%"
      height="40vh"
      captionStyle={captionStyle}
      // radius="10px"
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      style={{
        textAlign: "center",
        maxWidth: "100vw",
        maxHeight: "40vh",
        margin: "0",
      }}
    />
  );
};

export default CarouselComponent;
