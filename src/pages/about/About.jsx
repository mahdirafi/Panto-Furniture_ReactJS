import aboutImg from "../../assets/about-background.jpg";
import Experiences from "../home/Experiences";

const About = () => {
  return (
    <section>
      <div
        className="w-full h-111 bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className=" ">
          <h2 className="text-6xl text-white font-bold underline underline-offset-4 ">
            About Page
          </h2>
        </div>

        {/* experience */}
      </div>
      <Experiences />
    </section>
  );
};

export default About;
