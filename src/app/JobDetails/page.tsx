"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import { Button, Modal } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import JobCards from "../components/Careers-Cards";
import Footer from "../components/Footer";
import PopUpMessage from "../components/PopUpForm";
const JobDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        <div className="landing-page-container text-center">
          <p className="pt-[48px] font-formalLight text-h2 text-black">
            Frontend Developer
          </p>
          <p className="flex flex-row justify-center gap-[9px] pt-4">
            <div>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-[24px] border border-black px-3 py-[5px] transition-all">
                <span className="-z-1 absolute bottom-0 h-0 w-0 rounded-[24px] bg-lightblue transition-all duration-500 ease-out group-hover:h-full group-hover:w-full"></span>
                <p className="relative z-10 font-gelasio text-h7 text-grayHeading transition-colors duration-300 ease-in-out group-hover:text-white">
                  Full time{" "}
                </p>
              </button>
            </div>
            <div>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-[24px] border border-black px-3 py-[5px] transition-all">
                <span className="-z-1 absolute bottom-0 h-0 w-0 rounded-[24px] bg-lightblue transition-all duration-500 ease-out group-hover:h-full group-hover:w-full"></span>
                <p className="relative z-10 font-gelasio text-h7 text-grayHeading transition-colors duration-300 ease-in-out group-hover:text-white">
                  Remote{" "}
                </p>
              </button>
            </div>
          </p>
          <p className="py-[64px]">
            <Image
              src="/images/JobDetails/hero-pic.png"
              width={1280}
              height={484}
              alt="hero"
            />
          </p>
        </div>
      </div>
      {/* Text */}
      <div className="landing-page-container w-full">
        <p className="font-gelasio text-h6 text-grayText">
          We’re on the lookout for a passionate and energetic Account Manager to
          join our team! In this role, you’ll be the go-to person for our
          clients, helping them navigate their journey with us, build strong
          relationships, understand their unique needs, and create tailored
          solutions that make a real difference. <br />
          <br /> If you love connecting with people and want to play a key role
          in our client’s success while driving growth for our company, we want
          to hear from you!
        </p>
        <div className="group relative mt-[12px] flex flex-row items-center gap-6">
          <p
            className="cursor-pointer font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow"
            onClick={showModal}
          >
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
              onClick={showModal}
            ></Button>
          </span>
        </div>
        {/* Modal */}
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered
          width={727}
        >
          <div>
            {/* Submit Form */}
            <PopUpMessage />
          </div>
        </Modal>
        {/* What you’ll do: */}
        <div className="space-y-3 py-[64px]">
          <p className="font-formalLight text-h3 text-grayHeading">
            What you’ll do:
          </p>
          <ul className="space-y-4 font-gelasio text-h6 text-grayText">
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Working on our studio’s commercial and internal projects.
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Collaborating with a team of professional 3D artists, motion
              designers, and developers to achieve the best results.
            </li>
          </ul>
        </div>
        {/* Your requirements: */}
        <div className="space-y-3 pb-[64px]">
          <p className="font-formalLight text-h3 text-grayHeading">
            Your requirements:
          </p>
          <ul className="space-y-4 font-gelasio text-h6 text-grayText">
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>2 years of
              commercial experience in UX/UI design
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              High level of Figma proficiency
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Experience in UX studies (JTBD, information architecture)
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Knowledge of current interface guides: Apple recommendations,
              Material Design from Google
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Proficiency in written and spoken English at least at the
              Intermediate level
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Experience and understanding of file transfer processes for
              development
            </li>
          </ul>
        </div>
        {/* What will be the advantage: */}
        <div className="space-y-3 pb-[64px]">
          <p className="font-formalLight text-h3 text-grayHeading">
            What will be the advantage:
          </p>
          <ul className="space-y-4 font-gelasio text-h6 text-grayText">
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>You have skills in
              working with web analytics
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              You know how to form personas and test hypotheses
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              You have experience in working with design systems
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              You are familiar with the development of Webflow, Framer, No-code
              and others
            </li>
          </ul>
        </div>
        {/* Our offer includes: */}
        <div className="space-y-3 pb-[96px]">
          <p className="font-formalLight text-h3 text-grayHeading">
            Our offer includes:
          </p>
          <ul className="space-y-4 font-gelasio text-h6 text-grayText">
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>Flexibility in
              processes and KPIs (we are always focused on results)
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>A team of people
              with an open-minded approach
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Full-time schedule with a loyal approach and autonomy in processes
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Focus on development (playgrounds, corporate English, courses, and
              speakers)
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Onboarding processes, performance reviews, and individual
              development plans are in place
            </li>
            <li className="flex items-start">
              <span className="mr-3 size-3 text-xl">•</span>
              Support of the team, with whom you go through fire and water and
              poker on Fridays
            </li>
          </ul>
          <div className="group relative mt-[12px] flex flex-row items-center gap-6">
          <p
            className="cursor-pointer font-gelasio text-h7 text-lightblue group-hover:text-hoverYellow"
            onClick={showModal}
          >
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
              onClick={showModal}
            ></Button>
          </span>
        </div>
        {/* Modal */}
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered
          width={727}
        >
          <div>
            {/* Submit Form */}
            <PopUpMessage />
          </div>
        </Modal>
        </div>
      </div>
      {/* Related Jobs */}
      <div className="landing-page-container">
        <p className="font-formalLight text-h1 text-grayHeading">
          Related Jobs
        </p>
        {/* Careers Cards */}
        <div className="landing-page-container grid grid-cols-2 gap-[42px] pb-[96px] pt-[32px]">
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
          <JobCards
            heading="Middle UI/UX Designer"
            description="Phenomenon Studio is looking for a talented and creative full-time Middle UX/UI Designer to join our team:)"
            tags={["Full time", "Remote"]}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobDetails;
