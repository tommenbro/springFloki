import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
         
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold pb-2">Join the family!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, enjoy the company of our beautiful community!
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 justify-center items-center">
                <a
                  className=" font-5xl scale-150 h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  href="https://twitter.com/intent/user?screen_name=XRPBurnReflect"
                  target="_blank"
                >
                  <div className="fab fa-twitter items-center justify-center align-center text-center text-white"
                  ></div>
                </a>
                <a
                  className="font-5xl scale-150 h-25 w-25 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  href="https://t.me/RippleBurnReflectPortal"
                  target="_blank"
                >
                  <i className="fab fa-telegram text-white"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white font-semibold block pb-2 text-sm"
                        href="https://poocoin.app/tokens/0x77282df2e846a641530f08cf3988602884218d39"
                      >
                        Buy Spring Floki
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-semibold block pb-2 text-sm"
                        href="#roadmap"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-semibold block pb-2 text-sm"
                        href="https://bscscan.com/address/0x77282df2e846a641530f08cf3988602884218d39"
                      >
                        Contract
                      </a>
                    </li>
                    
                  </ul>
                </div>
   
              </div>
            </div>
          </div>
          <hr className="my-6 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} RippleBurnReflect
                <br/>
                <a className="hidden">Website by Aryes - TG: Aryamsamsam </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
