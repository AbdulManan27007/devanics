"use client"
import React from 'react'
import Navbar from "@/app/components/navbar";
import ContactForm from '../components/form'
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="relative w-full bg-gradient-to-r from-[#E0EBF4] via-white to-[#E0EBF4]">
        <Navbar />
        </div>
        {/* ContactForm */}
        <ContactForm/>
        {/* FAQS */}
        <FAQS/>
        {/* Footer */}
        <Footer/>
        </div>
  )
}

export default ContactUs