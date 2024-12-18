import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import Image from "next/image";
import {} from "@ant-design/icons";
import type { UploadProps } from "antd";

const props: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const PopUpForm = () => {
  return (
    <form action="" className="w-full max-w-[727px] space-y-[42px] pt-[75px]">
      <div className="flex flex-row justify-between gap-[20px]">
        {/* Input 1 */}
        <p className="flex w-full flex-col">
          <label className="font-gelasio text-h6 text-grayHeading">
            Full Name
          </label>
          <input
            type="text"
            className="h-[40px] border-b font-gelasio text-h8 bg-transparent text-grayHeading caret-grayHeading focus:outline-none"
          />
        </p>
        {/* Input 2 */}
        <p className="flex w-full flex-col">
          <label className="font-gelasio text-h6 text-grayHeading">
            Email Address
          </label>
          <input
            type="text"
            className="h-[40px] border-b font-gelasio text-h8 bg-transparent text-grayHeading caret-grayHeading focus:outline-none"
          />
        </p>
      </div>
      <p className="flex w-full flex-col">
        <label className="font-gelasio text-h6 text-grayHeading">
          Cover Letter
        </label>
        <input
          type="text"
          className="h-[40px] border-b font-gelasio text-h8 bg-transparent text-grayHeading caret-grayHeading focus:outline-none"
          />
      </p>
      <div className="flex flex-row gap-3 font-gelasio text-h6 text-grayHeading">
        <Upload {...props}>
          <Button type="text">
            
            <Image
              src="/images/JobDetails/attachment.svg"
              width={24}
              height={24}
              alt=""
            />
            <p className="font-gelasio text-h6 text-grayHeading">Upload your Resume</p>
          </Button>
        </Upload>
      </div>
      <div className="group relative mt-[12px] flex flex-row items-center gap-6">
          <p
            className="cursor-pointer font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow" >
            Apply Now
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
    </form>
  );
};

export default PopUpForm;
