import Image from "next/image";
import Link from "next/link";
import Highlighter from "./HighLighter";

const FeaturesList = () => {
  return (
    <section className="pt-12.5">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-7.5">
          {/* <!-- features item --> */}
          <div className="sm:col-span-12">
            <Highlighter>
              <div className="relative rounded-3xl features-box-border">
                <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                  <div className="flex items-center justify-between relative z-20">
                    <div className="max-w-[477px] w-full">
                      <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                        <Image
                          src="/images/hero/icon-title.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />

                        <span className="hero-subtitle-text">
                          100% Free
                        </span>
                      </span>
                      <h3 className="text-white mb-4.5 font-bold text-heading-4">
                        Download From Any Website
                      </h3>
                      <p className="font-medium mb-10">
                      Copy, paste and click &quot;Download&quot;. That&apos;s all there is to downloading videos from any platform on the internet.
                      </p>
                      <Link
                        href="/downloaders"
                        className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button"
                      >
                        See All Downloaders
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="max-w-[428px] relative aspect-square w-full hidden sm:block">
                      <Image
                        src="/images/features/big-icon.svg"
                        alt="icon"
                        fill
                      />
                    </div>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
                    <span className="absolute right-0 bottom-0">
                      <Image
                        src="/images/features/shape-01.png"
                        alt="shape"
                        width={282}
                        height={226}
                      />
                    </span>
                    <span className="absolute left-0 top-0 w-full aspect-[1170/192]">
                      <Image
                        src="/images/features/shape-02.svg"
                        alt="shape"
                        fill
                      />
                    </span>
                    <span className="absolute w-full h-full left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-03.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute w-full h-full left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-04.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute max-w-[530px] w-full aspect-[530/270] left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-05.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute max-w-[580px] aspect-[580/430] w-full right-0 top-0">
                      <Image
                        src="/images/features/shape-03.svg"
                        alt="shape"
                        fill
                        className="max-w-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
