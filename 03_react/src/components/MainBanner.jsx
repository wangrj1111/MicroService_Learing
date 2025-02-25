import { Carousel } from "antd";
import "./MainBanner.css"; // 引入CSS文件

const images = [
  "https://images.pexels.com/photos/30682275/pexels-photo-30682275.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/19739301/pexels-photo-19739301.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/30650213/pexels-photo-30650213.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/30669128/pexels-photo-30669128.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
];

const MainBanner = () => (
  <Carousel autoplay className="full-width-carousel">
    {images.map((imageUrl, index) => (
      <div key={index} className="carousel-item">
        <img
          src={imageUrl}
          alt={`Slide ${index + 1}`}
          className="carousel-image"
        />
      </div>
    ))}
  </Carousel>
);

export default MainBanner;
