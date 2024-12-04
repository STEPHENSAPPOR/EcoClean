import { Code, Smartphone, Cloud } from 'lucide-react';

const Choose = () => {
  return (
    <div className="py-16 bg-[#212542]">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FDDB22] p-4 rounded-full">
              <Code className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Expert Team</h3>
          <p className="mt-4 text-gray-600 text-center">
          Our team comprises skilled professionals with extensive experience in
          the solar energy sector.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FDDB22] p-4 rounded-full">
              <Smartphone className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Comprehensive Services</h3>
          <p className="mt-4 text-gray-600 text-center">
          We provide end-to-end solutions, from installation to
          maintenance, ensuring your solar panels perform at their best.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FDDB22] p-4 rounded-full">
              <Cloud className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Sustainability Commitment</h3>
          <p className="mt-4 text-gray-600 text-center">
          We are dedicated to promoting sustainable energy
          practices and reducing carbon footprints.
          </p>
        </div>
      </div>


      
    </div>
  );
};

export default Choose;
