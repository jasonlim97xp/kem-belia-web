import { sponsors } from "./sponsorsData";

const Sponsors = () => {
  return (
    <div className="mb-24 mt-24 px-10 lg:px-20">
      <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-black lg:text-6xl ">
        Our Sponsors
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 lg:grid-cols-7 ">
        {sponsors.map((sponsor) => (
          <div className="flex items-center justify-center">
            <img
              className=" rounded-none sm:p-0 lg:rounded-2xl lg:p-4"
              src={`/images/sponsors/${sponsor.logo}`}
              width="180"
              height="180"
              alt={sponsor.name + " logo"}
              title={sponsor.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
