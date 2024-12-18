import React from "react";
import Image from "next/image";

interface BlogProps {
  imageSrc?: string;
  heading?: string;
  date?: string;
  description?: string;
}

const Blogs: React.FC<BlogProps> = ({
  imageSrc,
  description,
  heading,
  date,
}) => {
  return (
    <div className="landing-page-container space-y-4">
      <div>
        {imageSrc && (
          <Image src={imageSrc} width={619} height={485} alt="blog01" />
        )}
      </div>
      <div className="flex w-full max-w-[619px] justify-between">
        <div className="space-y-[9px]">
          <p className="font-formalLight text-h3 text-grayHeading">{heading}</p>
          <p className="font-gelasio text-h8 text-grayText">{date}</p>
          <p className="font-gelasio text-h7 text-[#475467]">{description}</p>
        </div>
        <div>
          <button className="w-[42px] rounded-full border border-lightblue p-[11px]">
            <Image
              src="/images/landingPage/arrow-up-right.svg"
              width={20}
              height={20}
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
