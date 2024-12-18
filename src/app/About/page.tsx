import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import FactsFigures from "../components/facts&Figures";
import Footer from "../components/Footer";
import FAQS from "../components/FAQS";
import AboutSlider from "../components/AboutPageSlider/Slider";

const About = () => {
  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[45px]">
          <p className="font-formalLight text-h2">
            Crafting custom
            <span className="group relative">
              <span className="mx-[6px] font-formalRegular text-lightblue group-hover:text-[#F69400]">
                <span className="absolute transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/landingPage/vector-blue.png"
                    width={219}
                    height={108}
                    alt="Vector"
                    className="image-filter group-hover:hue-rotate-25 transition-all duration-300"
                  />
                </span>
                software
              </span>
            </span>
            that <br /> drives impact and
            <span className="group relative inline-block">
              <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                innovation
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
          </p>
        </div>
        <div className="landing-page-container flex justify-between gap-[24px] pt-[24px]">
          <div className="">
            <Image
              src="/images/AboutPage/About-hero.png"
              width={589}
              height={420}
              alt="Vector"
            />
          </div>
          <div className="w-full max-w-[638px]">
            <div className="mt-6 font-gelasio text-h6 text-grayText">
              With years of experience in the industry, our expert team
              professionals is committed to delivering exceptional results that
              exceed our clients expectations. Devanics has the expertise and
              resources to help to develop custom software’s. Contact us today
              to learn more about how we can help your business succeed!
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
      {/* Section 2 */}
      <div className="flex h-[552px] w-full items-center justify-center bg-[url('/images/AboutPage/about-section2-bg.png')] bg-cover bg-center">
        <div className="w-full max-w-[1052px]">
          <p className="text-center font-formalLight text-h10 text-white">
            <span className="font-formalRegular">Devanics </span> is a
            full-service software development company that offers a wide range
            of services to meet our clients needs. In addition to web
            development and mobile development, we also provide custom software
            development, software testing and quality assurance, UI/UX design,
            and digital marketing services
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="relative">
        <div className="landing-page-container flex justify-end pt-[80px] text-right">
          <p className="font-formalLight text-h2">
            Empowering
            <span className="group relative inline-block">
              <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                Businesses
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
            <br /> Through Innovation and <br />
            <span className="group relative inline-block">
              <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                Partnership
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
          </p>
        </div>
        <div className="flex justify-between gap-[128px] pb-[80px]">
          <div className="">
            <Image
              src="/images/AboutPage/about-section4.png"
              width={840}
              height={422}
              alt="Vector"
            />
          </div>
          <div className="mr-[110px] w-full max-w-[570px] pt-[38px] font-gelasio text-h7 text-grayText">
            ur vision is to empower businesses worldwide with innovative and
            reliable software solutions that enhance their efficiency,
            productivity, and profitability. We aim to be the preferred partner
            for custom software development services by leveraging our technical
            expertise, customer-centric approach, and commitment to excellence.{" "}
            <br /> <br />
            We strive to build long-term relationships with our clients based on
            trust, transparency, and mutual growth
          </div>
        </div>
      </div>
      {/* Section 4 */}
      {/* <AboutSlider/> */}
      <div className="bg-darkblue2">
    <div className="ml-[80px] py-[64px] ">
      <div className="font-formalLight text-h2 text-white pb-[46px]">
        <span className="font-formalRegular">Values</span> that Define Us
      </div>
      <AboutSlider/>
    </div>
  </div>

      {/* CEO Message */}
      <div className="landing-page-container py-[96px]">
        <div className="font-formalLight text-h2 text-grayHeading">
          <div className="group relative">
            Meet the face behind <br />
            <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
              <span className="absolute -ml-10 -mt-3 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                <Image
                  src="/images/landingPage/vector-blue.png"
                  width={286}
                  height={94}
                  alt="Vector"
                  className="image-filter"
                />
              </span>
              Devanics
            </span>
          </div>
        </div>
        <div className="mt-[36px] flex justify-between">
          <div>
            <Image
              src="/images/AboutPage/CEO.png"
              width={413}
              height={415}
              alt="Vector"
            />
          </div>
          <div className="flex w-full max-w-[814px] flex-col">
            <div className="mb-[56px]">
              <Image
                src="/images/AboutPage/comma.png"
                width={100}
                height={73}
                alt="Vector"
              />
            </div>
            <p className="font-formalLight text-h10 text-black">
              Our CEO’s Message
            </p>
            <p className="my-6 font-gelasio text-h6 text-grayText">
              As we step into a new era, I want to emphasize our commitment to
              innovation, collaboration, and excellence. Our predevelopment
              services play a crucial role in shaping the software industry’s
              future. We’ve built trust and lasting partnerships, setting the
              foundation for successful projects.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="font-gelasio text-h5 text-grayHeading">
                  Arslan Anjum
                </p>
                <p className="font-gelasio text-h6 text-grayText2">
                  C.E.O Devanics
                </p>
              </div>
              <div className="flex flex-row space-x-4">
                <p className="cursor-pointer">
                  <Image
                    src="/images/AboutPage/x.svg"
                    width={32}
                    height={32}
                    alt="Vector"
                  />
                </p>
                <p className="cursor-pointer">
                  <Image
                    src="/images/AboutPage/facebook.svg"
                    width={32}
                    height={32}
                    alt="Vector"
                  />
                </p>
                <p className="cursor-pointer">
                  <Image
                    src="/images/AboutPage/instagram.svg"
                    width={32}
                    height={32}
                    alt="Vector"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Devanics facts & figures */}
      <FactsFigures />
      {/* FAQS */}
      <FAQS />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
