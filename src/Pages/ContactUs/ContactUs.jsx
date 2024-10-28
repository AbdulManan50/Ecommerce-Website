import React from "react";
import { FaPhone } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <>
      <div className="h-[30vh]"></div>
      <div className="w-custom mx-auto flex pb-20 gap-10">
        <div className="w-[30%] p-10 shadow-md">
          <div className="space-y-3 border-black border-b-[2px] pb-5">
            <div className="flex items-center gap-5">
              <div className="bg-secondary p-4 text-white rounded-full">
                <FaPhone />
              </div>
              <div className="text-lg font-Poppins ">
                <h1>Call To Us</h1>
              </div>
            </div>
            <h1 className="font-Poppins">
              We are available 24/7, 7 days a week.
            </h1>
            <h1 className="font-Poppins">Phone: +8801611112222</h1>
          </div>
          <div className="space-y-3  pb-5">
            <div className="flex items-center gap-5 pt-5">
              <div className="bg-secondary p-4 text-white rounded-full">
                <FaPhone />
              </div>
              <div className="text-lg font-Poppins ">
                <h1>Write To US</h1>
              </div>
            </div>
            <h1 className="font-Poppins">
              Fill out our form and we will contact you within 24 hours.
            </h1>
            <h1 className="font-Poppins">Emails: customer@exclusive.com</h1>
            <h1 className="font-Poppins">Emails: support@exclusive.com</h1>
          </div>
        </div>
        <div className="w-[70%] space-y-5 p-10 shadow-md">
          <div className="flex gap-5">
            <div className="w-1/3 bg-primary py-3 px-3 ">
              <input
                type="text"
                placeholder="Your Name"
                className="font-Poppins outline-none bg-transparent"
              />
            </div>
            <div className="w-1/3 bg-primary py-3 px-3 ">
              <input
                type="text"
                placeholder="Your Name"
                className="font-Poppins outline-none bg-transparent"
              />
            </div>
            <div className="w-1/3 bg-primary py-3 px-3 ">
              <input
                type="text"
                placeholder="Your Name"
                className="font-Poppins outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="bg-primary ">
            <textarea
              placeholder="Your Message"
              className="bg-transparent h-[200px] w-full outline-none p-3"
            />
          </div>
          <div className="text-end pr-5">
            <button className="font-Poppins text-white bg-secondary px-10 py-3 rounded-md ">Send Massage</button>
          </div>
        </div>
      </div>
    </>
  );
}
