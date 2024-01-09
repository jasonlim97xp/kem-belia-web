import { sponsors } from "./sponsorsData";

const Sponsors = () => {
  return (
    <div className="mb-24 mt-24 px-10 lg:px-28">
      <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-black lg:text-6xl ">
        Our Sponsors
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-4 gap-4 sm:grid-cols-8 ">
        {sponsors.map((sponsor) => (
          <div className="flex items-center justify-center">
            <img
              className="rounded-3xl"
              src={`/images/sponsors/${sponsor.logo}`}
              width="120"
              height="120"
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