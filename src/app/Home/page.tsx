"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import FormData from '../components/form'
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";
import Navbar from "@/app/components/navbar";
import Card from "../components/card-landingpage";
import TextSection from "../components/textSection";
import FactsFigures from "../components/facts&Figures";
import Slider from "../components/landingPageSlider/Slider";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
const Home = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container flex justify-between py-[81px]">
          <div>
            {" "}
            <div className="font-formalLight text-h1">
              Delivering software{" "}
              <div className="group relative">
                <p className="font-formalRegular text-lightblue group-hover:text-[#F69400]">
                  <div className="absolute -ml-8 -mt-3 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                    <Image
                      src="/images/landingPage/vector-blue.png"
                      width={348}
                      height={100}
                      alt="Vector"
                      className="image-filter group-hover:hue-rotate-25 transition-all duration-300"
                    />
                  </div>
                  solutions
                </p>
              </div>
              inspired by
              <span className="group relative inline-block">
                <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                  Innovations
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
            <div className="mt-6 font-gelasio text-h6 text-grayText">
              Trusted Partner for Enterprises, SMBs, Startups, and You <br />{" "}
              Together we build inspiring software that achieves your business
              results.
            </div>
            <div className="group relative mt-[42px] flex flex-row items-center gap-6">
              <p className="font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow">
                Book Consultation
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
          <div className="mr-[70px]">
            <Image
              src="/images/landingPage/dashboard.png"
              width={535}
              height={419}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-darkblue2 to-darkblue1 py-[96px] ">
        <div className="landing-page-container flex justify-between gap-[157px]">
          <div className="font-formalLight text-h2 text-white">
            Seamlessly blending{" "}
            <span className="group relative inline-block">
              <span className="font-formalRegular font-bold text-white group-hover:text-[#F69400]">
                Design
              </span>
              <span className="absolute left-0 top-full -mt-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                <Image
                  src="/images/landingPage/vector-white-2.png"
                  width={231}
                  height={25}
                  alt="Vector"
                  className="image-filter"
                />
              </span>
            </span>
            and
            <span className="group relative inline-block">
              <span className="mx-2 font-formalRegular font-bold text-white group-hover:text-[#F69400]">
                Development
              </span>
              <span className="absolute left-0 top-full -mt-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                <Image
                  src="/images/landingPage/vector-white-2.png"
                  width={341}
                  height={22}
                  alt="Vector"
                  className="image-filter"
                />
              </span>
            </span>
            for flawless execution
          </div>
          <div className="w-full max-w-[412px] flex justify-between flex-col">
            <div className="flex justify-end">
              <Button
                type="primary"
                shape="circle"
                icon={<ArrowRightOutlined />}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #FFFFFF",
                  color: "#FFFFFF",
                  width: "74px",
                  height: "74px",
                }}
              ></Button>
            </div>
            <div className="font-gelasio text-h7 text-white">
              Our services are defined by a commitment to delivering exceptional
              quality, reliability, and value to every client
            </div>
          </div>
        </div>
      <div className="pt-[56px]">
        <TextSection
          title="UI UX Design"
          description="Designing intuitive interfaces to enhance user experience and simplify navigation for seamless interaction."
        />
        <p className="landing-page-container h-[1px] bg-gradient-to-l via-[#566E82] from-transparent"></p>
        <TextSection
          title="Web Development"
          description="Crafting visually appealing, user-focused websites tailored to meet clients' unique goals and needs."
        />
        <p className="landing-page-container h-[1px] bg-gradient-to-l via-[#566E82] from-transparent"></p>
        <TextSection
          title="Mobile Development"
          description="Developing iOS and Android applications to offer seamless, engaging experiences across mobile platforms."
        />
        <p className="landing-page-container h-[1px] bg-gradient-to-l via-[#566E82] from-transparent"></p>
        <TextSection
          title="MVP Builder"
          description="Creating and launching streamlined product versions focused on delivering essential core features"
        />
        <p className="landing-page-container h-[1px] bg-gradient-to-l via-[#566E82] from-transparent"></p>
        <TextSection
          title="Software Documentation"
          description="Producing clear, concise application documentation to guide users in troubleshooting and issue resolution."
        />
        <p className="landing-page-container h-[1px] bg-gradient-to-l via-[#566E82] from-transparent"></p>
        <TextSection
          title="Quality Assurance"
          description="Testing software thoroughly to ensure products meet quality standards, optimizing functionality and usability."
        />
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 top-0">
          <Image
            src="/images/landingPage/mask-01.png"
            width={400}
            height={150}
            alt="Vector"
          />
        </div>
        <div className="landing-page-container flex items-center justify-between gap-[157px] pt-[96px]">
          <div className="font-formalLight text-h1 text-grayHeading">
            <div className="group relative">
              See the results of <br /> our work across
              <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                <span className="-mt- absolute -ml-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/landingPage/vector-blue.png"
                    width={312}
                    height={87}
                    alt="Vector"
                    className="image-filter"
                  />
                </span>
                Industries
              </span>
            </div>
          </div>
          <div className="flex justify-end">
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
          </div>
        </div>
        <div className="landing-page-container flex justify-end">
          <p className="mt-6 w-full max-w-[517px] font-gelasio text-h6 text-grayText">
            Unlocking sustainable innovations that drive impactful change and
            pave the way for a greener, environmentally responsible future.
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1104px] grid-cols-2 py-[42px]">
        <Card
          imageSrc="/images/landingPage/card-02.png"
          imageAlt="Vector"
          title="Tabela"
          highlight="Tabela"
          description="a management system for Restaurants"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
        <Card
          height="pt-[62px]"
          imageSrc="/images/landingPage/card-04.png"
          imageAlt="Vector"
          title="Sway Finance"
          highlight="Sway Finance"
          description="cash management application"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
        <Card
          height="pt-[62px]"
          imageSrc="/images/landingPage/card-01.png"
          imageAlt="Vector"
          title="Tabela"
          highlight="Tabela"
          description="a management system for Restaurants"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
        <Card
          imageSrc="/images/landingPage/card-03.png"
          imageAlt="Vector"
          title="Tabela"
          highlight="Tabela"
          description="a management system for Restaurants"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
      </div>
      {/* Devanics facts & figures */}
      <FactsFigures />
      {/* What our Clients say about us */}
      <div className="landing-page-container py-[96px]">
        <div className="flex items-center justify-between gap-[157px]">
          <div className="w-full max-w-[645px] font-formalLight text-h1 text-grayHeading">
            <div className="group relative">
              What our
              <span className="group relative inline-block">
                <span className="mx-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                  Clients
                </span>
                <span className="absolute left-0 top-full -mt-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/landingPage/vector-blue-2.png"
                    width={231}
                    height={25}
                    alt="Vector"
                    className="image-filter"
                  />
                </span>
              </span>
              say about us
            </div>
          </div>
          <div className="flex justify-end space-x-6">
            <Button
              type="primary"
              shape="circle"
              icon={<ArrowLeftOutlined style={{ color: "#1478F2" }} />}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #1478F2",
                color: "#1478F2",
                width: "56px",
                height: "56px",
              }}
            ></Button>
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
          </div>
        </div>
        <Slider />
      </div>
      {/* Form */}
      <FormData />
      {/* FAQS */}
      <FAQS />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
