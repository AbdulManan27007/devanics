"use client"
import { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import Accordion from "./Accordion";
import { ArrowRightOutlined } from "@ant-design/icons";

const FAQS = () => {
    const [collapsedItems, setCollapsedItems] = useState<boolean[]>([
        true,
        true,
        true,
        true,
        true,
      ]);
    
      const handleToggle = (index: number) => {
        setCollapsedItems((prev) => {
          const newCollapsedItems = [...prev];
          newCollapsedItems[index] = !newCollapsedItems[index];
          return newCollapsedItems;
        });
      };
  return (
    <div className="relative">
        <div className="landing-page-container flex justify-between py-[96px]">
          <div className="w-full max-w-[50%] space-y-[24px]">
            <div className="font-formalLight text-h1 text-grayHeading">
              <p className="group relative">
                Frequently Asked <br />
                <span className="font-formalRegular text-lightblue group-hover:text-[#F69400]">
                  <span className="absolute -ml-5 -mt-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                    <Image
                      src="/images/landingPage/vector-blue.png"
                      width={360}
                      height={108}
                      alt="Vector"
                      className="image-filter"
                    />
                  </span>
                  Questions
                </span>
              </p>
            </div>
            <div className="font-gelasio text-h5 text-grayText2">
              Can’t find your question?
            </div>
            <div className="group relative mt-[42px] flex flex-row items-center gap-6">
              <p className="font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow">
                Contact Us
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
          <div className="w-full max-w-[50%]">
            <Accordion
              isCollapsed={collapsedItems[0]}
              handleToggle={() => handleToggle(0)}
              heading="How can Devanics help improve my business?"
              bodyText="Devanics can enhance your business by providing tailored software
    solutions, creating user-friendly interfaces, optimizing your
    website, and ensuring high-quality performance of software. 
    What industries does Devanics specialize in? Devanics has
    experience working with various industries, including but
    not limited to e-commerce, healthcare, finance, education, and
    technology startups.
    What is MVP builder software, and why is it beneficial? MVP
    (Minimum Viable Product) builder software allows you to quickly
    create a basic version of your product or application with
    essential features."
            />
            <Accordion
              isCollapsed={collapsedItems[2]}
              handleToggle={() => handleToggle(2)}
              heading="How does the documentation service benefit my project?"
              bodyText="Devanics can enhance your business by providing tailored software
    solutions, creating user-friendly interfaces, optimizing your
    website, and ensuring high-quality performance of software. 
    What industries does Devanics specialize in? Devanics has
    experience working with various industries, including but
    not limited to e-commerce, healthcare, finance, education, and
    technology startups.
    What is MVP builder software, and why is it beneficial? MVP
    (Minimum Viable Product) builder software allows you to quickly
    create a basic version of your product or application with
    essential features."
            />
            <Accordion
              isCollapsed={collapsedItems[3]}
              handleToggle={() => handleToggle(3)}
              heading="How does Devanics ensure the quality of the software?"
              bodyText="Devanics can enhance your business by providing tailored software
    solutions, creating user-friendly interfaces, optimizing your
    website, and ensuring high-quality performance of software. 
    What industries does Devanics specialize in? Devanics has
    experience working with various industries, including but
    not limited to e-commerce, healthcare, finance, education, and
    technology startups.
    What is MVP builder software, and why is it beneficial? MVP
    (Minimum Viable Product) builder software allows you to quickly
    create a basic version of your product or application with
    essential features."
            />
            <Accordion
              isCollapsed={collapsedItems[4]}
              handleToggle={() => handleToggle(4)}
              heading="How can I get a quote or estimate for my project?"
              bodyText="Devanics can enhance your business by providing tailored software
    solutions, creating user-friendly interfaces, optimizing your
    website, and ensuring high-quality performance of software. 
    What industries does Devanics specialize in? Devanics has
    experience working with various industries, including but
    not limited to e-commerce, healthcare, finance, education, and
    technology startups.
    What is MVP builder software, and why is it beneficial? MVP
    (Minimum Viable Product) builder software allows you to quickly
    create a basic version of your product or application with
    essential features."
            />
            <Accordion
              isCollapsed={collapsedItems[5]}
              handleToggle={() => handleToggle(5)}
              heading="How do you ensure the security of the software developed?"
              bodyText="Devanics can enhance your business by providing tailored software
    solutions, creating user-friendly interfaces, optimizing your
    website, and ensuring high-quality performance of software. 
    What industries does Devanics specialize in? Devanics has
    experience working with various industries, including but
    not limited to e-commerce, healthcare, finance, education, and
    technology startups.
    What is MVP builder software, and why is it beneficial? MVP
    (Minimum Viable Product) builder software allows you to quickly
    create a basic version of your product or application with
    essential features."
            />
          </div>
        </div>
        <div className="absolute -mt-[505px]">
          <Image
            src="/images/landingPage/mask-02.png"
            width={360}
            height={108}
            alt="Vector"
            className="image-filter"
          />
        </div>
      </div>
  )
}

export default FAQS