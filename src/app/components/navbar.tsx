"use client";
import React, { useState } from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown menu items
  const items = [
    {
      key: "1",
      label: (
        <Link
          href="/"
          className="cursor-pointer font-gelasio text-h8 text-[#4D525A]"
        >
          Service 1
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/"
          className="cursor-pointer font-gelasio text-h8 text-[#4D525A]"
        >
          Service 2
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/"
          className="cursor-pointer font-gelasio text-h8 text-[#4D525A]"
        >
          Service 3
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          href="/"
          className="cursor-pointer font-gelasio text-h8 text-[#4D525A]"
        >
          Service 4
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          href="/"
          className="cursor-pointer font-gelasio text-h8 text-[#4D525A]"
        >
          Service 5
        </Link>
      ),
    },
  ];
  return (
    <div className="max-w-screen relative z-50 mx-2 flex h-[50px] flex-col md:h-[80px] lg:mx-0">
      <div className="landing-page-container flex h-full w-full max-w-full flex-row items-center justify-between">
        <div className="flex flex-row gap-[86px]">
          <Link href="/">
            <Image
              src="/images/landingPage/logo.svg"
              width={122}
              height={32}
              alt="Logo"
              className="h-[25px] w-[120px] md:h-full md:w-full"
              priority
            />
          </Link>
          <div className="hidden flex-row gap-6 font-gelasio text-h8 text-[#4D525A] lg:flex">
            <div>
              <Link href="/" className="cursor-pointer">
                Home
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/About" className="cursor-pointer">
                About
              </Link>
            </div>
            <div className="cursor-pointer">
              <Dropdown overlay={<Menu items={items} />} trigger={["click"]}>
                <div onClick={(e) => e.preventDefault()}>
                  <Space>
                    <span className="cursor-pointer">
                      <Link href="/Services" className="cursor-pointer">
                        Services
                      </Link>
                    </span>
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            </div>
            <div className="cursor-pointer">
              <Link href="/CaseStudies" className="cursor-pointer">
                Case Studies
              </Link>
            </div>
            <div className="cursor-pointer">
            <Link href="/Blogs" className="cursor-pointer">
              Blogs
            </Link>
          </div>
            <div className="cursor-pointer">
              <Link href="/Careers" className="cursor-pointer">
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Link href="/ContactUs">
          <button className="px-6 py-[10px] rounded-[24px] border border-lightblue  text-lightblue transition-colors duration-300 hover:bg-lightblue hover:text-white">
            <p className=" font-gelasio  text-h8">Contact Us</p>
          </button>
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <MenuFoldOutlined />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <MenuUnfoldOutlined />{" "}
          </button>
        </div>
        <div className="mx-4 flex flex-col font-gelasio text-h8 text-[#4D525A]">
          <Link href="/" className="py-2">
            Home
          </Link>

          <div className="py-2">Pricing</div>
          <div className="py-2">
            <Link href="/About" className="cursor-pointer">
              About
            </Link>
          </div>
          <Link href="/Services" className="cursor-pointer">
            <Dropdown overlay={<Menu items={items} />} trigger={["click"]}>
              <div onClick={(e) => e.preventDefault()}>
                <Space>
                  <span className="cursor-pointer">Services</span>
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </Link>
          <div className="py-2">
            <Link href="/CaseStudies" className="cursor-pointer">
              Case Studies
            </Link>
          </div>
          <div className="py-2">
            <Link href="/Blogs" className="cursor-pointer">
              Blogs
            </Link>
          </div>
          <div className="py-2">
            <Link href="/Careers" className="cursor-pointer">
              Careers
            </Link>
          </div>
        </div>
        <div className="mx-3 flex flex-col gap-3">
          <Link href="/ContactUs">
          <button className="rounded-full border border-lightblue py-2 text-lightblue transition-colors duration-300 hover:bg-lightblue hover:text-white">
            <p className="font-gelasio text-h8">Contact Us</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
