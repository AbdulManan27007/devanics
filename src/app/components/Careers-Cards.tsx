import React from "react";
import Image from "next/image";

interface CardProps {
  description?: string;
  heading?: string;
  tags?: string[];
  onButtonClick?: () => void;
}

const CareersCards: React.FC<CardProps> = ({
  heading,
  description,
  tags = [],
  onButtonClick = () => {},
}) => {
  return (
      <div className="flex w-full max-w-[619px] justify-between rounded-[24px] bg-[#E6EFF7] p-6 border border-[#E4E4E4]">
        <div>
          <p className="font-formalLight text-h3 text-grayHeading">{heading}</p>
          <p className="mt-4 line-clamp-2 font-gelasio text-h5 text-grayText">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="mt-[9px] space-x-[9px]">
              {tags.map((tag, index) => (
                <button
                key={index}
                className="relative inline-flex items-center justify-center overflow-hidden transition-all  rounded-[24px] border border-black px-3 py-[5px] group">
                <span className="absolute  bottom-0 w-0 h-0 rounded-[24px] bg-lightblue transition-all duration-500 ease-out group-hover:w-full group-hover:h-full -z-1"></span>
                <p className="relative font-gelasio text-h7 text-grayHeading transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  {tag}
                </p>
              </button>
              
              ))}
            </div>
          )}
        </div>
        <div>
        <button
          className="w-[42px] rounded-full border border-lightblue p-[11px]"
          onClick={onButtonClick}
        >
          <Image
            src="/images/landingPage/arrow-up-right.svg"
            width={20}
            height={20}
            alt="Arrow Icon"
          />
        </button>
        </div>
    </div>
  );
};

export default CareersCards;
