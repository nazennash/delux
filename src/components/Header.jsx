import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setMobileMenu(false); // Close the mobile menu on screen resize
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 py-5 px-10 overflow-hidden border-b border-slate-700 uppercase text-sms z-50">
        <div className="flex items-center gap-x-3">
          <img src={logo} alt="logo" className="w-16" />
          <p className="font-bold tracking-wider text-2xl">Delux</p>
        </div>

        <div className="hidden lg:flex gap-x-10 text-slate-500 font-semibold">
          <a href="#features">features</a>
          <a href="#pricing">pricing</a>
          <a href="#how-to-use">how to use</a>
          <a href="#roadmap">roadmap</a>
        </div>

        <div className="hidden lg:flex gap-x-10 items-center">
          <a href="#new-account">new account</a>
          <button className="border gradient rounded-tr-2xl rounded-bl-2xl px-5 py-2 uppercase">
            <a href="#sign-in">sign in</a>
          </button>
        </div>

        <div className="lg:hidden">
          <BiMenu
            onClick={() => setMobileMenu(!mobileMenu)}
            size={40}
            className="cursor-pointer text-white"
          />
        </div>
      </div>

      {mobileMenu && (
        <div className="bg-slate-700 lg:hidden fixed inset-0 flex flex-col items-center justify-center space-y-10 text-white text-lg font-semibold z-40">
          <a href="#features" onClick={() => setMobileMenu(false)}>
            features
          </a>
          <a href="#pricing" onClick={() => setMobileMenu(false)}>
            pricing
          </a>
          <a href="#how-to-use" onClick={() => setMobileMenu(false)}>
            how to use
          </a>
          <a href="#roadmap" onClick={() => setMobileMenu(false)}>
            roadmap
          </a>
          <a href="#new-account" onClick={() => setMobileMenu(false)}>
            new account
          </a>
          <a href="#sign-in" onClick={() => setMobileMenu(false)}>
            sign in
          </a>
        </div>
      )}
    </>
  );
};
