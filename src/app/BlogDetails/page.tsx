import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Slider from "../components/BlogsDetailSlider/Slider"
import Footer from "../components/Footer"
const BlogDetails = () => {
  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[48px] text-center">
          <p className="font-gelasio text-h8 text-grayText">
            Phoenix Baker • 19 Jan 2024
          </p>
          <p className="font-formalLight text-h2 text-black">
            Building your API Stack
          </p>
          <p className="pt-2 font-gelasio text-h7 text-[#475467]">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <p className="pb-[96px] pt-[64px]">
            <Image
              src="/images/JobDetails/hero-pic.png"
              width={1280}
              height={484}
              alt="hero"
            />
          </p>
        </div>
        <div className="landing-page-container flex justify-between gap-[42px]">
          <div className="w-full max-w-[399px] font-formalLight text-h2 text-grayHeading">
            Introduction
          </div>
          <div>
            <p className="font-gelasio text-h6 text-[#636363]">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
              semper. <br />
              <br /> Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. <br />
              <br /> Mi tincidunt elit, id quisque ligula ac diam, amet. Vel
              etiam suspendisse morbi eleifend faucibus eget vestibulum felis.
              Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
              Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt.
              At feugiat sapien varius id. Eget quis mi enim, leo lacinia
              pharetra, semper. <br />
              <br /> Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.
            </p>
            <p className="py-[42px]">
              <Image
                src="/images/JobDetails/hero-pic.png"
                width={839}
                height={553}
                alt="hero"
              />
            </p>
          </div>
        </div>
        <div className="landing-page-container flex justify-between gap-[42px]">
          <div className="w-full max-w-[399px] font-formalLight text-h2 text-grayHeading">
            Software and tools
          </div>
          <div>
            <p className="font-gelasio text-h6 text-[#636363]">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
              semper. <br />
              <br /> Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. <br />
              <br />
              <span className="font-formalRegular text-h3 text-grayHeading">
                “In a world older and more complete than ours they move finished
                and complete, gifted with extensions of the <br /> senses we
                have lost or never attained, living by voices <br /> we shall
                never hear.”
                <p className="pt-[32px] font-gelasio text-h8 text-[#475467]">
                  — Olivia Rhye, Product Designer <br />
                  <br />
                </p>
              </span>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
              semper. <br />
              <br /> Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. <br />
              <br />
            </p>
          </div>
        </div>
        <div className="landing-page-container flex justify-between gap-[42px]">
          <div className="w-full max-w-[399px] font-formalLight text-h2 text-grayHeading">
            Conclusion
          </div>
          <div>
            <p className="font-gelasio text-h6 text-[#636363]">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse. <br />
              <br /> Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
              egestas condimentum mi massa. In tincidunt pharetra consectetur
              sed duis facilisis metus. Etiam egestas in nec sed et. Quis
              lobortis at sit dictum eget nibh tortor commodo cursus.
              <br />
              <br />
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor. <br />
              <br /> Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.
            </p>
          </div>
        </div>
              <div className="landing-page-container pb-[24px] pt-[96px] font-formalLight text-h1 text-grayHeading">
                <div className="group relative">
                Latest
                  <span className="group relative inline-block">
                    <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                    blog
                    </span>
                    <span className="absolute left-0 top-full -mt-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                      <Image
                        src="/images/Blogs/Vector-1.png"
                        width={153}
                        height={22}
                        alt="Vector"
                        className="image-filter"
                      />
                    </span>
                  </span>
                  posts
                </div>
              </div>
              <div className="ml-[80px] pb-[96px]">
                <Slider/>
              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogDetails;
