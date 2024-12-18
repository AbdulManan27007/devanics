import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import ServiceCard from "../components/service-card";
// import FormData from '../components/form';
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";

const Sevices = () => {
  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[45px]">
          <p className="font-formalLight text-h2">
            Lightning fast
            <span className="group relative">
              <span className="mx-[6px] font-formalRegular text-lightblue group-hover:text-[#F69400]">
                <span className="absolute transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Image
                    src="/images/landingPage/vector-blue.png"
                    width={250}
                    height={108}
                    alt="Vector"
                    className="image-filter group-hover:hue-rotate-25 transition-all duration-300"
                  />
                </span>
                deliveries
              </span>
            </span>
            with <br /> laser sharp
            <span className="group relative inline-block">
              <span className="ml-2 font-formalRegular text-lightblue group-hover:text-[#F69400]">
                precision.
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
              src="/images/ServicePage/service-hero.png"
              width={589}
              height={365}
              alt="Vector"
            />
          </div>
          <div className="w-full max-w-[638px]">
            <div className="mt-6 font-gelasio text-h6 text-grayText">
              To stand out in the crowded digital landscape and make a
              significant impact with your products, your creation deserves the
              skilled craftsmanship of Ungrammary, a top-tier UX/UI design
              agency. Let us elevate your product with the excellence and
              innovation it warrants.H
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
      <div className="landing-page-container grid w-full grid-cols-3 gap-[30px] py-[96px]">
        <ServiceCard
          heading="UI UX Design"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/UIUX.png"
        />
        <ServiceCard
          heading="Web Development"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/web-dev.png"
        />
        <ServiceCard
          heading="Software Documentation"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/software-doc.png"
        />
        <ServiceCard
          heading="UI UX Quality Assurance"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/QA.png"
        />
        <ServiceCard
          heading="MVP Builder"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/MVP.png"
        />
        <ServiceCard
          heading="Mobile Development"
          description="Choosing courage over comfort, right over easy, & practicing our values instead of just professing them."
          imageSrc="/images/ServicePage/mobile-dev.png"
        />
      </div>
      {/* UI-UX */}
      <div className="landing-page-container flex items-center justify-between gap-[64px]">
        <div className="w-full max-w-[590px] space-y-6">
          <div className="font-formalLight text-h2 text-black">
            UI UX Design
          </div>
          <div className="font-gelasio text-h6 text-grayText">
            Founded in 2019 as a Pakistan design & development studio, Devanics
            has grown into a top-rated international agency with offices all
            over the world <br />
            <br /> In these 5 years, we’ve assembled a tight-knit team of
            professionals united by a common aim: to build products that matter.
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
        <div className="gap-6 py-[96px]">
          <div className="flex flex-row gap-6 pb-6">
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image01.png"
                width={230}
                height={208}
                alt="Vector"
                className="h-full transition-transform duration-500 group-hover:scale-90"
              />
            </div>
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image04.png"
                width={376}
                height={208}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image02.png"
                width={409}
                height={288}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image03.png"
                width={197}
                height={288}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Web-Development */}
      <div className="bg-[#E6EFF7]">
        <div className="landing-page-container flex flex-row-reverse items-center justify-between gap-[64px]">
          <div className="w-full max-w-[590px] space-y-6">
            <div className="font-formalLight text-h2 text-black">
              Web Development
            </div>
            <div className="font-gelasio text-h6 text-grayText">
              Founded in 2019 as a Pakistan design & development studio,
              Devanics has grown into a top-rated international agency with
              offices all over the world <br />
              <br /> In these 5 years, we’ve assembled a tight-knit team of
              professionals united by a common aim: to build products that
              matter.
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
          <div className="gap-6 py-[96px]">
            <div className="flex flex-row gap-6 pb-6">
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image-web01.png"
                  width={630}
                  height={208}
                  alt="Vector"
                  className="h-full transition-transform duration-500 group-hover:scale-90"
                />
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image02.png"
                  width={409}
                  height={288}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image03.png"
                  width={197}
                  height={288}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Software Documentation */}
      <div className="landing-page-container flex items-center justify-between gap-[64px]">
        <div className="w-full max-w-[590px] space-y-6">
          <div className="font-formalLight text-h2 text-black">
            Software Documentation
          </div>
          <div className="font-gelasio text-h6 text-grayText">
            Founded in 2019 as a Pakistan design & development studio, Devanics
            has grown into a top-rated international agency with offices all
            over the world <br />
            <br /> In these 5 years, we’ve assembled a tight-knit team of
            professionals united by a common aim: to build products that matter.
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
        <div className="gap-6 py-[96px]">
          <div className="flex flex-row gap-6 pb-6">
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image01.png"
                width={230}
                height={208}
                alt="Vector"
                className="h-full transition-transform duration-500 group-hover:scale-90"
              />
            </div>
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image04.png"
                width={376}
                height={208}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
          </div>

          <div className="group overflow-hidden">
            <Image
              src="/images/ServicePage/image-doc01.png"
              width={630}
              height={288}
              alt="Vector"
              className="transition-transform duration-500 group-hover:scale-90"
            />
          </div>
        </div>
      </div>
      {/* UI UX Quality Assurance */}
      <div className="bg-[#E6EFF7]">
        <div className="landing-page-container flex flex-row-reverse items-center justify-between gap-[64px]">
          <div className="w-full max-w-[590px] space-y-6">
            <div className="font-formalLight text-h2 text-black">
              UI UX Quality Assurance
            </div>
            <div className="font-gelasio text-h6 text-grayText">
              Founded in 2019 as a Pakistan design & development studio,
              Devanics has grown into a top-rated international agency with
              offices all over the world <br />
              <br /> In these 5 years, we’ve assembled a tight-knit team of
              professionals united by a common aim: to build products that
              matter.
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
          <div className="gap-6 py-[96px]">
            <div className="flex flex-row gap-6 pb-6">
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/imageQA01.png"
                  width={314}
                  height={533}
                  alt="Vector"
                  className="h-full transition-transform duration-500 group-hover:scale-90"
                />
              </div>

              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/imageQA02.png"
                  width={314}
                  height={533}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MVP Builder */}
      <div className="landing-page-container flex items-center justify-between gap-[64px]">
        <div className="w-full max-w-[590px] space-y-6">
          <div className="font-formalLight text-h2 text-black">MVP Builder</div>
          <div className="font-gelasio text-h6 text-grayText">
            Founded in 2019 as a Pakistan design & development studio, Devanics
            has grown into a top-rated international agency with offices all
            over the world <br />
            <br /> In these 5 years, we’ve assembled a tight-knit team of
            professionals united by a common aim: to build products that matter.
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
        <div className="gap-6 py-[96px]">
          <div className="flex flex-row gap-6 pb-6">
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image-web01.png"
                width={630}
                height={208}
                alt="Vector"
                className="h-full transition-transform duration-500 group-hover:scale-90"
              />
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image02.png"
                width={409}
                height={288}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
            <div className="group overflow-hidden">
              <Image
                src="/images/ServicePage/image03.png"
                width={197}
                height={288}
                alt="Vector"
                className="transition-transform duration-500 group-hover:scale-90"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Development */}
      <div className="bg-[#E6EFF7]">
        <div className="landing-page-container flex flex-row-reverse items-center justify-between gap-[64px]">
          <div className="w-full max-w-[590px] space-y-6">
            <div className="font-formalLight text-h2 text-black">
              Mobile Development
            </div>
            <div className="font-gelasio text-h6 text-grayText">
              Founded in 2019 as a Pakistan design & development studio,
              Devanics has grown into a top-rated international agency with
              offices all over the world <br />
              <br /> In these 5 years, we’ve assembled a tight-knit team of
              professionals united by a common aim: to build products that
              matter.
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
          <div className="gap-6 py-[96px]">
            <div className="flex flex-row gap-6 pb-6">
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image-mobdev-04.png"
                  width={230}
                  height={208}
                  alt="Vector"
                  className="h-full transition-transform duration-500 group-hover:scale-90"
                />
              </div>
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image-mobdev-03.png"
                  width={376}
                  height={208}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image-mobdev-02.png"
                  width={409}
                  height={288}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
              <div className="group overflow-hidden">
                <Image
                  src="/images/ServicePage/image-mobdev-01.png"
                  width={197}
                  height={288}
                  alt="Vector"
                  className="transition-transform duration-500 group-hover:scale-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form */}
      {/* <FormData /> */}
      {/* FAQS */}
      <FAQS />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sevices;
