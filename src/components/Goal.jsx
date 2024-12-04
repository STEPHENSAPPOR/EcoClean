const Goal = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-4">
          About Us
        </h2>
      </div>
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Grid Item */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg text-center bg-[#212542] ">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#5bb450]">Our Vision</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              To be the global leader in innovative solar panel cleaning and maintenance solutions, driving
              the transition to sustainable energy through cutting-edge technology and exceptional
              service.
            </p>
          </div>
          {/* Second Grid Item */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg text-center bg-[#212542] ">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#5bb450]">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              To maximize the efficiency of solar panels by providing state-of-the-art dust detection and
              cleaning solutions, alongside expert installation and maintenance services, contributing to a
              greener and more sustainable future.
            </p>
          </div>
          {/* Third Grid Item */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg text-center bg-[#212542] ">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#5bb450]">Ingenuity</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              At EcoClean Solutions, we pride ourselves on our ingenuity. Our team of engineers and
              technicians is constantly pushing the boundaries of technology to develop groundbreaking
              solutions that address the challenges faced by solar panel owners. Our AI-powered dust
              detection system is a testament to our commitment to innovation and excellence.
            </p>
          </div>
          {/* Fourth Grid Item */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg text-center bg-[#212542] ">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#5bb450]">Excellence</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              We strive for excellence in everything we do. From our advanced technological solutions to
              our customer service, we aim to exceed expectations and deliver unmatched quality. Our
              dedication to excellence ensures that our clients receive the best possible care and the most
              effective solutions for their solar panel needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
