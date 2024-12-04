import synergyImage from "../assets/images/synergy.png";

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center mt-12"
      style={{ backgroundImage: `url(${synergyImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[#212542] bg-opacity-50">
        <div className="text-center text-white p-6 max-w-lg sm:p-8 md:max-w-xl lg:max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-[#FDDB22] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          EcoClean Solutions
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            EcoClean Solutions is a pioneering company dedicated to enhancing
            the efficiency and longevity of solar panels through innovative dust
            detection and automated cleaning solutions.  
          </p>
      
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button className="px-6 py-2 bg-[#FDDB22] text-white rounded-full hover:bg-[#e68900] transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
