"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Danfo } from "next/font/google";

const danfo = Danfo({ subsets: ["latin"] });

export type ContactProps = SliceComponentProps<Content.ContactSlice>;

const Contact = ({ slice }: ContactProps): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.action = `https://formspree.io/f/xqabwjyv`;
    }
  };  

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-5 pt-36 px-4 bg-[#171717] text-white"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          className={`${danfo.className} text-3xl md:text-4xl font-bold text-white`}
        >
          Contact Us
        </h2>
        <p className="text-base md:text-lg text-zinc-400">
          Tell us about your project and receive a quote in your inbox!
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        className="max-w-xl mx-auto mt-10 space-y-6"
      >
        <input type="hidden" name="_cc" value="guirgis@a1streetcustoms.com" />
        <input type="hidden" name="_captcha" value="false" />

        <Input
          name="Name"
          type="text"
          placeholder="Name"
          required
          className="w-full text-white placeholder-zinc-500 rounded-md border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-red-700 transition"
        />
        <Input
          name="Email"
          type="email"
          placeholder="Email"
          required
          className="w-full text-white placeholder-zinc-500 rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
        />
        <Input
          name="Car Details"
          type="text"
          placeholder="Car make, year & model"
          required
          className="w-full text-white placeholder-zinc-500 rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
        />
        <textarea
          name="Message"
          placeholder="Your Message"
          className="w-full h-32 text-white placeholder-zinc-500 rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
        />
        <Button
          type="submit"
          variant="default"
          className="w-full md:text-lg py-4 rounded-md font-semibold bg-[#c0a562] hover:bg-[#9e8851] transition"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Contact;
