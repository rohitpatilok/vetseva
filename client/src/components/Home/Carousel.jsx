import react from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function Banners() {
  return (
    <div className="banners laptop:ml-10 laptop:mr-10 mobile:ml-0 mobile:mr-0">
        <Carousel>
      <Carousel.Item interval={3000}>
        <img className="w-full laptop:h-96 mt-10 mobile:h-60" src="/images/banner-2.png" alt="hello baby" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="w-full laptop:h-96 mt-10 mobile:h-60"c src="/images/banner-1.png" alt="hello baby" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="w-full laptop:h-96 mt-10 mobile:h-60" src="/images/banner-3.png" alt="hello baby" />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Banners;