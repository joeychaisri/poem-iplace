import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.scss"
import "../../node_modules/slick-carousel/slick/slick.scss"
class aboutus extends React.Component {
  render () {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        autoplay: true,
        autoplaySpeed : 1000,
        arrows: false,
      };
    return (
        <div>
        <Slider {...settings}>
        <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
        {/* <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div> */}
        
        
      </div>
    );
  }
}

export default aboutus;