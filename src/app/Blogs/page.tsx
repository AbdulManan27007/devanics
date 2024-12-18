"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { Radio } from "antd";
import BlogDetails from "../components/Blogs";
import Footer from "../components/Footer";
import Link from "next/link";

const Blogs = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[45px]">
          <p className="font-formalLight text-h2">
            Useful
            <span className="group relative">
              <span className="mx-[6px] font-formalRegular text-lightblue group-hover:text-[#F69400]">
                <span className="absolute -mt-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/Blogs/Vector.png"
                    width={223}
                    height={108}
                    alt="Vector"
                    className="image-filter group-hover:hue-rotate-25 transition-all duration-300"
                  />
                </span>
                Insights
              </span>
            </span>
          </p>
        </div>
        {/* Radio Button */}
        <div className="landing-page-container flex justify-start pb-[23px] pt-[42px]">
          <Radio.Group
            onChange={handleChange}
            value={selectedValue}
            className="Card-radio-group"
            defaultValue="All"
          >
            <Radio.Button value="All">All</Radio.Button>
            <Radio.Button value="AboutDevanics">About Devanics</Radio.Button>
            <Radio.Button value="Development">Development</Radio.Button>
            <Radio.Button value="QualityAssurance">
              Quality Assurance
            </Radio.Button>
            <Radio.Button value="BusinessAnalyst">
              Business Analyst
            </Radio.Button>
            <Radio.Button value="HR&Recruiting">HR & Recruiting</Radio.Button>
            <Radio.Button value="Others">Others</Radio.Button>
          </Radio.Group>
        </div>
        {/* Blogs details */}
        <div className="landing-page-container grid grid-cols-2 gap-[42px] pb-[96px]">
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog01.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog02.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog03.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog04.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog05.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
          <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog06.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
