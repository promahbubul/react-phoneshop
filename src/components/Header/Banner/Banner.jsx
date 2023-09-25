import React from "react";
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel
      autoplay={true}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
        alt="image 1"
        className="h-[350px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-psd/smartphone-sale-banner-template_185005-374.jpg"
        alt="image 2"
        className="h-[350px] w-full object-cover"
      />
      <img
        src="https://thumbs.dreamstime.com/b/purple-creative-banner-template-two-realistic-smartphones-purple-creative-banner-template-two-realistic-smartphones-244514553.jpg"
        alt="image 3"
        className="h-[350px] w-full object-cover"
      />
    </Carousel>
  );
};

export default Banner;
