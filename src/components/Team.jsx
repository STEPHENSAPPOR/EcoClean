import profileImage from '../assets/images/profile.jpeg';

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Team</h1>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img 
          className="w-full h-64 object-cover" 
          src={profileImage} 
          alt="Profile"
        />
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Joshua Dery - CEO
          </h2>
          <p className="text-gray-600 mt-2">
            Resourceful Renewable Energy Engineer with a passion for integrating sustainable solar solutions within industries, households, and beyond. Recognized for his data-driven mindset honed through expertise in solar systems design, quantitative analysis using Excel/Google Sheets, and an emerging specialization in AI and IoT applications. He is a quick study with a proclivity for creative problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
