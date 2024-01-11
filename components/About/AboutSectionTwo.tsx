import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-video text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/bukit_lagong_map.jpg"
                alt="bukit_lagong_map"
                width="0"
                height="0"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-fit">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h2 className="mb-5 text-4xl font-bold text-black lg:text-6xl">
                  Important Info
                </h2>
                <p className="text-base font-medium leading-relaxed text-black">
                  <b>Date: </b>27, 28, 29, 30 January 2023
                </p>
                <p className="text-base font-medium leading-relaxed text-black">
                  <b>Location: </b>Taman Rimba Bukit Lagong, Batu Caves,
                  Selangor
                </p>
                <p className="text-base font-medium leading-relaxed text-black">
                  <b>Target Participants: </b>150 Secondary BSMM Klang Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
