import { Code, Smartphone, Computer, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'DustDetection and Cleaning',
    description: 'We create stunning and functional websites tailored to your business needs, ensuring a seamless user experience across all devices.',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Solar Panel Installation',
    description: 'We offer expert installation services, ensuring that your solar panels are set up for optimal performance. ',
  },
  {
    icon: <Computer size={40} />,
    title: 'Maintenance Services',
    description: 'Our comprehensive maintenance packages include regular inspections, cleaning, and repairs to keep your solar panels in top condition. ',
  },
  {
    icon: <Cloud size={40} />,
    title: 'Innovative Technology',
    description: ' We utilize the latest AI and automation technologies to deliver efficient and reliable solutions.',
  },
];

const Services = () => {
  return (
    <div className="text-black py-16 px-4 sm:px-8 lg:px-16 mt-9">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-8">
          <h3 className="text-[#FDDB22] uppercase tracking-widest text-xl sm:text-2xl">Our Services</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">What We Do?</h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
            EcoClean Solutions offers a comprehensive range of services designed to keep your solar
            panels operating at peak efficiency. Our offerings include advanced dust detection systems,
            automated cleaning robots, expert solar panel installation, and thorough maintenance
            services. We provide end-to-end solutions that cater to the diverse needs of our clients.
          </p>
          <div className="mt-12">
            <button className="px-6 py-3 bg-[#212542] text-white rounded-full transition-all duration-300 hover:bg-[#e68900] text-sm sm:text-base">
              View All Services
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {services.map((service, index) => (
              <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex items-start border-l-4 border-[#FDDB22]">
                <div className="mr-4 text-blue-400">
                  <div className="bg-[#212542]  text-white p-4 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#FDDB22]">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
