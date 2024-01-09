"use client";
import { useState } from "react";
import Link from "next/link";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/app/guide/guideData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Pagination } from "@/components/Guide/Pagination";

const Blog = () => {
  // Pagination required variables
  const blogsPerPage = 6;
  const totalBlogs = blogData.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const blogsToShow = blogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Breadcrumb
        pageName="Kem Belia Camper's Guide"
        description="Whatever information that you need to know for the camp, you can find it here."
      />

      <section className="pb-[120px] pt-[20px]">
        <div className="container">
          <div className="flex-start -mx-4 flex flex-wrap gap-y-4">
            {blogsToShow.map((blog) => (
              <Link
                key={blog.id}
                href={`/guide/content/${blog.url}`}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </Link>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default Blog;
