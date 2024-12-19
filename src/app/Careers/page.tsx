"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Button, Radio, RadioChangeEvent } from "antd";
import Navbar from "@/app/components/navbar";
import { ArrowRightOutlined } from "@ant-design/icons";
import CareersCards from "../components/Careers-Cards";
import FAQS from "../components/FAQS";
import Link from "next/link";
import Footer from "../components/Footer";

const Careers = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

   const [selectedValue, setSelectedValue] = useState<string | number>();
 
   const handleChange = (e: RadioChangeEvent) => {
     setSelectedValue(e.target.value);
   };

  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[45px]">
          <p className="font-formalLight text-h2">
            Devanics <br />
            <span className="group relative">
              <span className="mx-[6px] font-formalRegular text-lightblue group-hover:text-[#F69400]">
                <span className="absolute transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/landingPage/vector-blue.png"
                    width={223}
                    height={108}
                    alt="Vector"
                    className="image-filter group-hover:hue-rotate-25 transition-all duration-300"
                  />
                </span>
                Careers
              </span>
            </span>
          </p>
        </div>
        <div className="landing-page-container flex justify-between gap-[24px] pt-[24px]">
          <div className="">
            <Image
              src="/images/ServicePage/service-hero.png"
              width={589}
              height={365}
              alt="Vector"
            />
          </div>
          <div className="w-full max-w-[638px]">
            <div className="mt-6 font-gelasio text-h6 text-grayText">
              “Choosing Devanics for our website development and design needs
              was one of the best decisions we made! From the very start, their
              team was attentive and dedicated to bringing our vision to life.”
            </div>
            <div className="group relative mt-[12px] flex flex-row items-center gap-6">
              <p className="cursor-pointer font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow">
                Hire Now
              </p>
              <span className="group-hover:image-filter">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined style={{ color: "#1478F2" }} />}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #1478F2",
                    color: "#1478F2",
                    width: "56px",
                    height: "56px",
                  }}
                ></Button>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* open Positions */}
      <div className="landing-page-container pb-[24px] pt-[96px] font-formalLight text-h1 text-grayHeading">
        <div className="group relative">
          Open
          <span className="group relative inline-block">
            <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
              Positions
            </span>
            <span className="absolute left-0 top-full -mt-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
              <Image
                src="/images/landingPage/vector-blue-2.png"
                width={329}
                height={22}
                alt="Vector"
                className="image-filter"
              />
            </span>
          </span>
        </div>
      </div>
      {/* Radio Buttons */}
      <div className="landing-page-container flex justify-start">
        <Radio.Group
          onChange={handleChange}
          value={selectedValue}
          className="Card-radio-group"
          defaultValue="AllJobs"
        >
          <Radio.Button value="AllJobs">All Jobs</Radio.Button>
          <Radio.Button value="UIUXDesign">UI UX Design</Radio.Button>
          <Radio.Button value="Development">Development</Radio.Button>
          <Radio.Button value="QualityAssurance">
            Quality Assurance
          </Radio.Button>
          <Radio.Button value="BusinessAnalyst">Business Analyst</Radio.Button>
          <Radio.Button value="HR&Recruiting">HR & Recruiting</Radio.Button>
          <Radio.Button value="Others">Others</Radio.Button>
        </Radio.Group>
      </div>
      {/* Careers Cards */}
      <div className="landing-page-container grid grid-cols-2 gap-[42px] pb-[96px] pt-[42px]">
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
        <Link href="/JobDetails">
          <CareersCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </Link>
      </div>
      {/* Contact Form */}
      <div className="h-[698px] w-full bg-[url('/images/landingPage/CTA-bg.png')] bg-cover bg-center">
        <div className="landing-page-container py-[96px]">
          <div className="font-formalLight text-h1 text-white">
            <div className="group relative">
              Drop us a <br />
              <span className="font-formalRegular group-hover:text-[#F69400]">
                <span className="absolute left-[-18.4px] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/Careers/vector.png"
                    width={176}
                    height={200}
                    alt="Vector"
                    className="image-filter rotate-[-6.26deg]"
                  />
                </span>
                line!
              </span>
            </div>
          </div>
          <form
            action=""
            className="w-full max-w-[727px] space-y-[42px] pt-[75px]"
          >
            <div className="flex flex-row justify-between gap-[20px]">
              {/* Input 1 */}
              <p className="flex w-full flex-col">
                <label className="font-gelasio text-h6 text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="h-[40px] border-b border-borderWhite bg-transparent text-white caret-white focus:outline-none"
                />
              </p>
              {/* Input 2 */}
              <p className="flex w-full flex-col">
                <label className="font-gelasio text-h6 text-white">
                  Email Address
                </label>
                <input
                  type="text"
                  className="h-[40px] border-b border-borderWhite bg-transparent text-white caret-white focus:outline-none"
                />
              </p>
            </div>
            <p className="flex w-full flex-col">
              <label className="font-gelasio text-h6 text-white">
                Tell us about your project
              </label>
              <input
                type="text"
                className="h-[40px] border-b border-borderWhite bg-transparent text-white caret-white focus:outline-none"
              />
            </p>
            <div className="group relative mt-[42px] flex flex-row items-center gap-6">
              <p className="font-gelasio text-h7 text-white">Contact Us</p>
              <Button
                type="primary"
                shape="circle"
                icon={<ArrowRightOutlined />}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid",
                  width: "56px",
                  height: "56px",
                }}
              />
            </div>
          </form>
        </div>
      </div>
      {/* FAQS */}
      <FAQS />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
