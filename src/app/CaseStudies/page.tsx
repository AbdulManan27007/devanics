"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, Radio } from "antd";
import Navbar from "@/app/components/navbar";
import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "../components/card-landingpage";
import ContactForm from '../components/form'
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";
const CaseStudies = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container pt-[45px]">
          <p className="font-formalLight text-h2">
            Explore our key <br />
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
                Projects
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
      {/* Radio Button */}
      <div className="landing-page-container flex justify-center py-10">
        <Radio.Group
          onChange={handleChange}
          value={selectedValue}
          defaultValue="AllProjects"
          className="Card-radio-group"
        >
         <Radio.Button value="AllProjects">
          All Projects
          </Radio.Button>
          <Radio.Button value="WebApp" >
          Web App
          </Radio.Button>
          <Radio.Button value="MobileApp" >
          Mobile App
          </Radio.Button>
          <Radio.Button value="Website" >
          Website 
          </Radio.Button>
          <Radio.Button value="LandingPage" >
          Landing Page
          </Radio.Button>
        </Radio.Group>
      </div>
      {/* Cards */}
      <div className="mx-auto grid w-full max-w-[1104px] grid-cols-2 pb-[42px]">
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
        <Card
          height="pt-[62px]"
          imageSrc="/images/CaseStudies/card6.png"
          imageAlt="Vector"
          title="Tabela"
          highlight="Tabela"
          description="a management system for Restaurants"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
        <Card
          imageSrc="/images/CaseStudies/card5.png"
          imageAlt="Vector"
          title="Tabela"
          highlight="Tabela"
          description="a management system for Restaurants"
          tags={["SaaS", "Web App"]}
          onButtonClick={handleButtonClick}
        />
      </div>
      {/* ContactForm */}
      <ContactForm/>
      {/* FAQS */}
      <FAQS />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudies;
