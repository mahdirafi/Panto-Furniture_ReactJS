import material1Img from "../../assets/material1.png";
import material2Img from "../../assets/material2.png";
import material3Img from "../../assets/material3.png";
import Button from "../../Components/Button";

const Materials = () => {
  return (
    <section className="section-container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 my-16 md:my-22 px-4 sm:px-6">
      {/* Text content */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-primary mb-3 md:mb-4">
          Materials
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 capitalize lg:w-4/5">
          Very serious materials for making furniture
        </h2>
        <p className="text-secondary dark:text-white mb-5 text-sm sm:text-base lg:w-2/3 mx-auto md:mx-0">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <div className="flex justify-center md:justify-start">
          <Button text="More Info" />
        </div>
      </div>

      {/* Image grid */}
      <div className="w-full lg:w-1/2 flex flex-col md:grid md:grid-cols-3 md:items-end gap-4 md:gap-6">
        {/* Left column: 2 stacked images */}
        <div className="flex md:flex-col gap-4 md:gap-6 w-full">
          <img
            src={material1Img}
            alt="Material 1"
            className="w-1/2 md:w-full h-auto object-cover rounded-lg"
          />
          <img
            src={material2Img}
            alt="Material 2"
            className="w-1/2 md:w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right column: large image */}
        <div className="w-full md:col-span-2">
          <img
            src={material3Img}
            alt="Material 3"
            className="w-full h-auto md:h-[514px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Materials;
