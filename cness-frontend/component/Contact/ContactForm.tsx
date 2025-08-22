"use client";

import Image from "next/image";
import React, { useState } from "react";
import { sendMail } from "@/app/actions/sendMail";
import Link from "next/link";
import { AiFillPhone as Phone } from "react-icons/ai";

interface FormProps {
  data: {
    badgeText: string;
    Title: string;
    desc: string;
    image: {
      url: string;
      name: string;
    };
  };
}

const ContactForm: React.FC<FormProps> = ({ data }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { data: { ...form } };

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Call server action after Strapi save
      await sendMail(form);
      alert("Form submitted & email sent!");
      setForm({ name: "", email: "", phone: "", companyName: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-4 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-2xl ">
        {/* Left side content */}
        <div className=" px-10 ">
          <div className="mb-10 flex flex-col gap-6 max-w-xl">
            <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300 w-fit">
              {data.badgeText}
            </p>
            <h2 className="text-3xl md:text-5xl font-[450] text-primary leading-tight">
              {data.Title}
            </h2>
            <p className="text-gray-600">{data.desc}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-full font-[450] hover:bg-tertiary hover:text-foreground transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side image */}
        <div className="flex justify-center relative">
          <Image
            src={data.image.url}
            alt={data.image.name}
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full"
          />

          <div className=" bg-white/80 backdrop-blur-2xl absolute bottom-10 rounded-full mx-10 px-6 py-3 flex items-center gap-2">
            <div className=" bg-secondary p-2 rounded-full text-primary">
              <Phone size={20} />
            </div>
            <p>Call us at <Link href={'tel:(101) 500 0200'} className=" text-tertiary underline">(101) 500 0200</Link>  or fill out our form, and we’ll contact you within one business day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
