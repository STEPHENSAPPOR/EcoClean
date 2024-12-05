import synergyImage from '../assets/images/synergy.png';

const Blog = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {/* Blog Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 pb-2 pt-4 flex justify-center items-center">
        BLOG
      </h2>
      {/* Solar Panels Installation Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg mt-12 p-6 border-l-4 border-[#5bb450]">
        <img
          src={synergyImage}
          alt="Solar Panels"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
        <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-[#5bb450]">
            Solar Panels Installation
          </h3>
          <h4 className="text-sm text-gray-500 mb-4">
            WITH MOST SUNLIGHT CONVERSION EFFICIENCY
          </h4>
          <p className="text-gray-600 mb-4">
            Stay updated with the latest industry trends, tips, and insights by following our blog. We
            cover a wide range of topics related to solar energy, dust detection technology, and
            maintenance best practices. Our blog is a valuable resource for anyone looking to learn
            more about maximizing the efficiency and longevity of their solar panels.
          </p>
          <a
            href="#"
            className="text-[#5bb450] hover:underline font-bold flex items-center justify-center md:justify-start"
          >
            GET STARTED →
          </a>
        </div>
      </div>
      {/* Custom UI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Card 1 */}
        <div className="flex items-center p-4 bg-white shadow-md rounded-md border-l-4 border-[#5bb450]">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#5bb450]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 8h-2V3H7v5H5v2h2v9h10v-9h2V8zm-6 9H9v-2h4v2zm0-4H9V8h4v5z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">
              CUSTOMER SATISFACTION
            </h3>
            <p className="text-gray-600 text-sm">
              Client satisfaction is our top priority, and we go above
              and beyond to meet their needs.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex items-center p-4 bg-white shadow-md rounded-md border-l-4 border-[#5bb450]">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#5bb450]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 15.46l-5.27-2.11A5.99 5.99 0 0017 9a6 6 0 10-12 0c0 2.21 1.2 4.15 3 5.19V22h4v-8h-2v-2.12A3.994 3.994 0 018 9c0-2.22 1.78-4 4-4s4 1.78 4 4a4.003 4.003 0 01-3 3.88V14h4v8h4v-6.54z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">24 HOURS ONLINE</h3>
            <p className="text-gray-600 text-sm">
              Professional staff are online 24 hours a day to answer your
              questions.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex items-center p-4 bg-white shadow-md rounded-md border-l-4 border-[#5bb450]">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#5bb450]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L1 21h22L12 2zm0 3.27L18.18 19H5.82L12 5.27zm-1 4.73v6h2v-6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">QUALITY CONTROL</h3>
            <p className="text-gray-600 text-sm">
              For the whole production process, we will have five to six
              inspection procedures, including machine testing and manual
              inspection.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex items-center p-4 bg-white shadow-md rounded-md border-l-4 border-[#5bb450]">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#5bb450]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 21h18v-2H3v2zm16.71-5.88l-4.58-4.59c.14-.38.22-.78.22-1.2 0-1.65-1.35-3-3-3-1.65 0-3 1.35-3 3 0 .42.08.82.22 1.2l-4.58 4.59L3.42 15 12 6.41 20.58 15l-1.29 1.29z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">MAINTENANCE</h3>
            <p className="text-gray-600 text-sm">
              Our comprehensive maintenance packages include regular
              inspections, cleaning, and repairs to keep your solar panels in top condition.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;
