import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=" w-full bg-[url('/images/landingPage/Footer.png')] bg-cover bg-center">
    <div className="landing-page-container flex justify-between">
      <div className="pt-[100px]">
        <Image
          src="/images/landingPage/logo-white.svg"
          width={312}
          height={58}
          alt="Vector"
          className="image-filter"
        />
      </div>
      <div className="flex w-full max-w-[656px] flex-row justify-between pt-[100px]">
        <div className="space-y-[20px]">
          <p className="cursor-pointer font-gelasio text-h5 text-[#D9E8F4]">
            Services
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            UX UI Design
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Web Development
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Mobile Development
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Quality Assurance
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            MVP Builder
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Dedicated Teams
          </p>
        </div>
        <div className="w-full max-w-[231px] space-y-[20px]">
          <p className="cursor-pointer font-gelasio text-h5 text-[#D9E8F4]">
            Quick Links
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Home
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            About
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Services
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Case Studies
          </p>
          <p className="cursor-pointer font-formalLight text-h4 text-white">
            Careers
          </p>
        </div>
      </div>
    </div>
    <div className="landing-page-container  pt-[127px] ">
          <div className="h-[1px] bg-[#E4E4E4]"></div>
    </div>
    <div className="flex justify-center py-[23px] font-gelasio text-white text-h9">© 2023 Copyrights devanics. All rights are reserved.</div>
  </div>
  )
}

export default Footer