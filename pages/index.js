import React from "react";
import Link from "next/link";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {

  const textToCopy = "0xd0e5e51a4456399f11296534f72882b1d8af8b0d"


  return (
    <>
      <Navbar transparent />
      <main>
      <a className="hidden" id="landing">Website by Aryes - TG: Aryamsamsam </a>
        <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-screen bg-center bg-cover"
            style={{
              backgroundImage:
                "url('../public/img/bg.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-100 bg-black "
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-24 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-bold text-6xl pt-48">
                    RippleBurnReflect
                  </h1>
                  <div className="top-2/4 pt-12 items-center justify-center text-center">
                  <p className="pt-2 text-lg text-blueGray-200 ">
                    The revolutionary XRP rewards token, which brings real value to its investors
                  </p>
                 
                <a
                  className="mt-24 bg-white text-black text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 lg:mt-12 ease-linear transition-all duration-150"
                  type="button"
                  href="https://poocoin.app/tokens/0x77282df2e846a641530f08cf3988602884218d39"
                  target="_blank" rel="noreferrer"
                >
                  <i className="fas fa-money-check-dollar"></i> BUY $RBR
                </a>
                </div>
                <div className="left-[400px] h-12 w-12 flex justify-center items-center text-center">
{ /*               <CC content={textToCopy} className="flex absolute left-10" />*/}
                </div>
                <a className="hidden">Website by Aryes - TG: Aryamsamsam </a>
                </div>
              </div>
            </div> 
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
        </div>

        <section className="pb-12 bg-black pt-24 -mt-12">
          <div className="container mx-auto px-4 pt-32 py-24">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Built by hodlers, for the holders</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Our holders believe in the vision. We know that the XRP reflections are more rewarding than most can only imagine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <i className="fas fa-lock"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Safety first</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The team behind $RBR decided to fork the cleanest and safest contract in BSC history, together with a proper LP lock.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Utility</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The token itself is a utility, with a true burn feature and massive XRP reflections generated automatically. Swap, staking, Post2Earn and more bullish utilities will come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-black">
          <div className="container mx-auto px-4 lg:pt-2 lg:pb-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4 py-2"> 
                <h2 className="text-5xl font-semibold text-white mb-2">
                  Long Term Commitment
                </h2>
                <p className="text-xl leading-relaxed mt-4 mb-12 text-white">
                RippleBurnReflect is a true community-driven project in the old style of bsc. We are here to stay, we are here to bring real value to our investors. $RBR has a vision that goes far beyond being a mere memecoin. Our holders earn $XRP automatically by just holding, no matter how $RBR moves. This token is here to win, bringing future partnerships and strong community which will make every holder win.
                </p>
                <Link href="https://pancakeswap.finance/swap?outputCurrency=0x77282DF2E846A641530f08cf3988602884218d39">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x77282DF2E846A641530f08cf3988602884218d39" className="pt-8 font-bold text-3xl text-white hover:bg-gray-700 mt-8">
                    Buy RippleBurnReflect on PancakeSwap
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-4/12 px-4 text-center">
                <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-2xl mt-5 font-semibold text-white">
                  Team
                </h6>
                <p className="mt-2 mb-4 text-white text-lg">
                  The project is lead by core members of Nordic Alphas. We started off with Patrick as CEO, Aryes as CMO and Fix as the contract developer. Along the way we have gotten full support from both new people and old friends, which at this point are also seen as team members. In the end, the team really is the community.
                </p>
              </div>
              <div className="w-full lg:w-4/12 px-4 text-center">
                <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <h5 className="text-2xl mt-5 font-semibold text-white">
                  Reflections and True burn
                </h5>
                <p className="mt-2 mb-4 text-white text-lg">
                From every transactions, holders are rewarded heavily in $XRP. The more you hold, the more you earn. The team has also implemented a true burn feature, which means that 1% of every transaction is gone from the total supply. This is a true burn, as the tokens are burned from the total supply, not just sent to a black hole. These are just the starting tokenomics, more utility will come.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-black">
          <div  id="roadmap"
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
          <div className="container mx-auto px-4 ">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold text-white ">Current plans</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-300">
                    RippleBurnReflect is a long term project still in development. We have a lot of goals for the future and are working hard to make the community's dreams come true.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white  mr-3">
                            <i className="fas fa-chart-line"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            Safe staking platform
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                            <i className="fas fa-coins"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-200">
                            Community listings
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                            <i className="fas fa-wallet"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            Safe swap, staking, burn and reflection collection...
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white  mr-3">
                            <i className="fas fa-hashtag"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            Partnerships and community building
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            More utilities and features that brings RBR and XRP together
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                            <i className="fas fa-piggy-bank"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            Exchange listings
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
