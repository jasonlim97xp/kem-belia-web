import Link from "next/link";
import NextImage from "next/image";
import { blurHashToDataURL } from "@/utils/blurhash-to-base64";

const Hero = async () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url('/kb_hero.jpeg')] bg-center pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto flex max-w-[800px] flex-col items-center text-center"
                data-wow-delay=".2s"
              >
                <NextImage
                  src="/kb42_logo.png"
                  alt="kembelia42"
                  width={400}
                  height={400}
                  placeholder="blur"
                  blurDataURL={blurHashToDataURL("/kb42_logo.png")}
                />
                <h1 className="mb-10 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Kem Belia Ke-42 2024
                </h1>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/guide"
                    className="rounded-md bg-[#FF0000] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#FF0000]/80"
                  >
                    View Campers Guide
                  </Link>
                  <Link
                    href="/map"
                    className="rounded-md bg-[#FFFFFF] px-8 py-4 text-base font-semibold text-[#FF0000] duration-300 ease-in-out hover:bg-[#FFFFFF]/80"
                  >
                    View Campsite
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
