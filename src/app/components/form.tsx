"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Button, Radio, RadioChangeEvent } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const FormB = () => {
  
  const [selectedValue, setSelectedValue] = useState<string | number>();
 
  const handleChange = (e: RadioChangeEvent) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="h-[971px] w-full bg-[url('/images/landingPage/CTA-bg.png')] bg-cover bg-center">
      <div className="landing-page-container py-[96px]">
        <div className="font-formalLight text-h1 text-white">
          <div className="group relative">
            Ready to bring your <br />
            <span className="font-formalRegular group-hover:text-[#F69400]">
              <span className="absolute -ml-4 -mt-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                <Image
                  src="/images/landingPage/vector-white.png"
                  width={407}
                  height={118}
                  alt="Vector"
                  className="image-filter"
                />
              </span>
              ideas to life?
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
          <div>
            <span className="font-gelasio text-h6 text-white">
              What is your budget for this project
            </span>
            <Radio.Group
          onChange={handleChange}
          value={selectedValue}
          defaultValue="Idon’tKnow"
          className="form-radio-group "
        >
         <Radio.Button value="Idon’tKnow">
         I don’t Know
          </Radio.Button>
          <Radio.Button value="upto$10k" >
          upto $10k
          </Radio.Button>
          <Radio.Button value="$10k-$20k" >
          $10k-$20k
          </Radio.Button>
          <Radio.Button value="$10k-$25k" >
          $10k-$25k 
          </Radio.Button>
          <Radio.Button value="$25k-$50k" >
          $25k-$50k
          </Radio.Button>
        </Radio.Group>
          </div>
          <div>
            <span className="font-gelasio text-h6 text-white">
              How did you hear about us
            </span>
            <Radio.Group
          onChange={handleChange}
          value={selectedValue}
          defaultValue="Dribble"
          className="form-radio-group mt-[11px]"
        >
         <Radio.Button value="Dribble">
         Dribble
          </Radio.Button>
          <Radio.Button value="Behance" >
          Behance
          </Radio.Button>
          <Radio.Button value="GoogleSearch" >
          Google Search
          </Radio.Button>
          <Radio.Button value="LinkedIn" >
          LinkedIn 
          </Radio.Button>
          <Radio.Button value="Others" >
          Others
          </Radio.Button>
        </Radio.Group>
          </div>
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
  );
};

export default FormB;
