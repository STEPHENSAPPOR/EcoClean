import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <section className="bg-[#212542] p-6 md:p-8 text-center mt-5">
      <div className="mb-8">
        <h2 className="text-[#5bb450] text-sm md:text-base">
          Want to know about our offers first?
        </h2>
        <h1 className="text-[#5bb450] text-xl md:text-3xl my-3">
          Subscribe to our newsletter
        </h1>
        <form className="flex flex-col md:flex-row justify-center my-4">
          <input
            type="email"
            placeholder="Your email ..."
            className="p-2 w-full md:w-64 border-none rounded-l-md outline-none text-base mb-2 md:mb-0"
            required
          />
          <button
            type="submit"
            className="p-2 bg-[#071311] text-[#5bb450] text-base rounded-md cursor-pointer w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 text-[#5bb450]">
        <div className="flex flex-col items-center text-sm md:text-base">
          <Phone className="text-[#5bb450] mb-2" size={20} />
          <p>+233 54 734 7335</p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <MapPin className="text-[text-[#5bb450] mb-2" size={20} />
          <p>EcoClean Solutions<br/>72X2+P2Q, Tarkwa - Esiama Rd, Tarkwa</p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <Mail className="text-[#5bb450] mb-2" size={20} />
          <p>ecocleansolutions56@gmail.com</p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <Clock className="text-[#5bb450] mb-2" size={20} />
          <p>24hrs</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
