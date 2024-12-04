import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import renewImage from "../assets/images/renew.jpg";
import panelsImage from "../assets/images/panels.jpg";


const Product = () => {
  const images = [
    {
      src: renewImage,
      title: 'Peak Efficiency',
      description: 'Advanced dust detection systems | Automated cleaning robots'
    },
    {
      src: panelsImage,
      title: 'Repairs and Maintenance',
      description: 'Expert Solar Panel Installation | Thorough Maintenance Services'
    },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000, // Slow down the transition to 5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed to 5 seconds
    fade: true, // Use fade effect for transitions
    arrows: true,
  };

  return (
    <div className="relative mt-5">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-4">
          What We Offer
        </h2>
      </div>
      <Slider {...settings} className="relative overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto object-cover"
              style={{ height: 'auto', maxHeight: '450px' }} // Adjust the max height as needed
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6 bg-black bg-opacity-50">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#FDDB22] mb-2">
                {image.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product;
