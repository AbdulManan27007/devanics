import React from "react";
import Image from "next/image";
import { Button,  } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

interface CardProps {
  heading?: string;
  imageSrc?: string;
  description?: string;
}

const ServiceCard: React.FC<CardProps> = ({ heading, imageSrc, description, }) => {
  return (
    <div className="group flex h-[428px] w-full max-w-[407px] flex-col hover:justify-between justify-end rounded-[16px] bg-[#E6EFF7] p-6 hover:max-w-[630px] hover:bg-darkblue2 hover:text-white">
      <div className="hidden group-hover:block">
        {imageSrc && (
          <Image src={imageSrc} width={118} height={118} alt="Vector" />
        )}
      </div>
      <div>
        <p className="font-formalLight text-h10 text-grayHeading group-hover:text-white">
          {heading}
        </p>
        <div className="flex justify-between">
          <div className="font-gelasio text-h6 text-grayText group-hover:text-white">
            {description}
          </div>
          <span className="hidden rotate-90 group-hover:block">
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
            ></Button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
