import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-xl"
        data-wow-delay=".1s"
      >
        <div className="relative block h-[220px] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="p-6">
          <h3>
            <p className="mb-4 block text-xl font-bold text-black sm:text-2xl ">
              {title}
            </p>
          </h3>
          <p className="pb-4 text-base font-medium text-body-color ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
