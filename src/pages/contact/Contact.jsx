import contactImg from '../../assets/contact-background.jpg'
import Materials from '../home/Materials';
import Testimonials from '../home/Testimonials';

const Contact = () => {
  return (
    <section>
      <div
        className="relative w-full h-111 bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-6xl text-white font-bold underline underline-offset-4">
            Contact Page
          </h2>
        </div>
      </div>
      <Materials />
      <Testimonials />
    </section>
  );
};

export default Contact;