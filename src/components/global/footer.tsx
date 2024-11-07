import React from 'react'
import Image from "next/image";

const footer = () => {
  return (
    <footer className="footer bg-black text-white p-10">
  <aside>
    <Image 
        src="/logo2.png"
        width={120}
        height={70}
        alt="Logo"
        className=""
    />
    <p className='pl-[5%]'>
        Tribotics LTD.
        <br/><br/>
        © 2024 Tribotics. All rights reserved.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <p>
        {/* <span className='font-extrabold'>Contact</span> */}
        <a href="mailto:sales@tribotics.co.uk">sales@tribotics.co.uk</a>
        <br/><br/>
        <a href='tel:+44 (0)1685 350617'>+44 (0)1685 350617</a>
        <br/>
        <a href='tel:+44 (0)7833 128264'>+44 (0)7833 128264</a>
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Address</h6>
    <p>
        Unit 1
        <br/>
        Triangle Business Park
        <br/>
        Merthyr Tydfil
        <br/>
        South Wales
        <br/>
        CF48 4TQ
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover" href='/about'>About us</a>
    <a className="link link-hover" href='/contact'>Contact</a>
    <a className="link link-hover" href='/blog'>Blog</a>
    <a className="link link-hover">Careers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    {/* <a className="link link-hover">Terms of use</a> */}
    <a href='/privacy-policy' className="link link-hover">Privacy policy</a>
    {/* <a className="link link-hover">Cookie policy</a> */}
    <h6 className="footer-title pt-4">Social</h6>
    <div className="grid grid-flow-col gap-4">
        <a href='https://www.linkedin.com/company/tribotics-limited/'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M22.225 0H1.771C.791 0 0 .791 0 1.771v20.452C0 23.209.791 24 1.771 24h20.452C23.209 24 24 23.209 24 22.225V1.771C24 .791 23.209 0 22.225 0zM7.078 20.452H3.548V9.057h3.53v11.395zM5.313 7.454c-1.131 0-2.048-.917-2.048-2.048 0-1.131.917-2.048 2.048-2.048s2.048.917 2.048 2.048c0 1.131-.917 2.048-2.048 2.048zm15.14 12.998h-3.53v-5.479c0-1.306-.026-2.987-1.821-2.987-1.821 0-2.101 1.423-2.101 2.891v5.575h-3.53V9.057h3.39v1.561h.048c.472-.896 1.627-1.839 3.348-1.839 3.584 0 4.245 2.36 4.245 5.427v6.246z"></path>
          </svg>
        </a>

        <a href='https://www.facebook.com/profile.php?id=61561303208748'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
  </nav>
</footer>
  )
}

export default footer