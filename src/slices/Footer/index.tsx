import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black text-zinc-400 py-10 px-4 md:px-10 border-t border-neutral-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* Centered Copyright */}
        <aside className="text-center">
          <p className="font-bold">A1 Street Customs</p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
          <br />
          <div className="flex justify-center">
            <a href='https://www.instagram.com/a1streetcustoms?igsh=MXV6bWhtM3VldHhrYQ=='>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                className="fill-current">
                  <path
                    d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z">
                  </path>
              </svg>
            </a>
          </div>
        </aside>

        {/* Address Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-lg font-semibold">Address</h3>
          <div className="text-sm leading-relaxed">
            <PrismicRichText field={slice.primary.address} />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-lg font-semibold">Contact</h3>
          <p className="text-sm">{slice.primary.email}</p>
          <p className="text-sm">{slice.primary.number}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
