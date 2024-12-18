import React from 'react';
interface CardProps {
  numbers?: string;
  title?: string;
  description?: string;
}
const CardAbout: React.FC<CardProps> = ({
  numbers,
  title,
  description,
 
}) => {
  return (
    <div className="flex h-[590px] w-[413px] flex-col justify-between rounded-[16px] bg-cardBlue ">
    <div className="pt-[50px] font-formalRegular text-h11 font-bold text-white">
    <span
        className=""
        style={{
          color: "transparent",
          WebkitTextStroke: "1px",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, transparent, white)",
          WebkitBackgroundClip: "text",
        }}
      >
        0
      </span>
      {numbers}
    </div>
    <div className="p-6">
      <p className="font-formalRegular text-h2 text-white">
       {title}
      </p>
      <p className="pt-4 font-gelasio text-h6 text-white">
        {description}
      </p>
    </div>
  </div>
  );
};

export default CardAbout;
