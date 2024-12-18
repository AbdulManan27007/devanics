import React from 'react'
import Image from "next/image";
import {  Rate  } from "antd";

const testimonial = () => {
  return (
    <div className=" flex justify-between pt-[42px]">
    <div className=" flex justify-center items-start max-w-[542px] w-full">
      <Image
        src="/images/landingPage/coma.png"
        width={259}
        height={159}
        alt="Vector"
      />
    </div>
    <div className="w-full max-w-[738px] ">
      <div><Rate/></div>
      <div className="font-gelasio text-h6 text-grayText pt-6">
        “Choosing Devanics for our website development and design needs was
        one of the best decisions we made! From the very start, their team
        was attentive, professional, and dedicated to bringing our vision to
        life. They provided a seamless experience, guiding us through each
        step of the process and delivering a website that truly reflects our
        brands identity.”
      </div>
      <div className="flex justify-between max-w-[223px] w-full pt-[52px]">
        <div>
          <Image
            src="/images/landingPage/Avatar.png"
            width={62}
            height={62}
            alt="Vector"
          />
        </div>
        <div>
          <div className="font-gelasio text-h5 text-grayHeading">John Smith</div>
          <div className="font-gelasio text-h6 text-grayText2 ">Toronto, Canada</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default testimonial