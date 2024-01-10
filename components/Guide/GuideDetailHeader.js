"use client";
import guideData from "../../app/guide/guideData";

const GuideHeader = ({ id }) => {
  let guide = guideData.find((guide) => guide.id == id);

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight ">
        {guide && guide.title}
      </h2>
      <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 ">
        <div className="flex flex-wrap items-center">
          <div className="mb-5 mr-10 flex items-center">
            {/* <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/blog/author-02.png"
                  alt="author"
                  fill
                />
              </div>
            </div> */}
            <div className="w-full">
              <h4 className="mb-1 text-base font-medium text-body-color">
                By
                <span>
                  {guide && guide.by
                    ? ` ${guide.by}`
                    : " Kem Belia 42 Commitee"}
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <a
            href="#0"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white"
          >
            {guide && guide.tags}
          </a>
        </div>
      </div>
    </>
  );
};

export default GuideHeader;
