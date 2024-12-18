import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc?: string;
  description?: string;
  imageAlt?: string;
  title?: string;
  highlight?: string;
  height?:string;
  tags?: string[];
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  height,
  imageSrc, 
  highlight , 
  description , 
  tags = [], 
  imageAlt = 'Image', 
  onButtonClick = () => {}, 
}) => {
  return (
    <div className={`${height}`}>
      <div className="max-w-[522px] w-full overflow-hidden group rounded-[16px] mt-[42px]">
  {imageSrc && (
    <Image
      src={imageSrc}
      width={522}
      height={485}
      alt={imageAlt}
      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
  )}
</div>
      <div className="max-w-[522px] w-full flex justify-between pt-4">
        <div>
          <div className="max-w-[393px] w-full font-gelasio text-h5 text-grayText">
            <span className="text-grayHeading">{highlight} – </span>{description}
          </div>
          {tags.length > 0 && (
            <div className="space-x-[9px] mt-[9px]">
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
            className="rounded-full border border-lightblue p-[11px]"
            onClick={onButtonClick}
            aria-label="Click to navigate"
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
    </div>
  );
};

export default Card;
