import React, { useEffect, useState } from "react";
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  // const data = list.filter((data) => data.category === "Hand Tool");
  // const data2 = list.filter((data) => data.category === "Power Tool");
  // const data3 = list.filter((data) => data.category === "Measuring Tool");
  const [handTools, setHandTools] = useState([]);
const [powerTools, setPowerTools] = useState([]);
const [measuringTools, setMeasuringTools] = useState([]);

useEffect(() => {
  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book");

      setHandTools(res.data.filter((item) => item.category === "Hand Tool"));
      setPowerTools(res.data.filter((item) => item.category === "Power Tool"));
      setMeasuringTools(res.data.filter((item) => item.category === "Measuring Tool"));
    } catch (error) {
      console.log(error);
    }
  };
  getBook();
}, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Suggested Tools</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {handTools.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
          {/* <Slider {...settings}>
          {data.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider> */}
        </div>
        <div className="py-16">
          <Slider {...settings}>
            {powerTools.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
          {/* <Slider {...settings}>
          {data2.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider> */}
        </div>
        <div className="py-16">
          <Slider {...settings}>
            {measuringTools.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
          {/* <Slider {...settings}>
          {data3.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider> */}
        </div>
      </div>
    </>
  );
}
export default Freebook;
