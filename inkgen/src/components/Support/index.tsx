import Image from "next/image";
import PageTitle from "../Common/PageTitle";
import siteConfig from "../../../siteConfig";

const Support = () => {
  return (
    <section id="support" className="scroll-mt-17">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-999 overflow-hidden rounded-[30px] bg-[white] dark:bg-dark pt-25 px-4 sm:px-20 lg:px-27.5">
          {/* <!-- grid row --> */}
          <div className="flex justify-center gap-7.5 absolute left-1/2 -translate-x-1/2 -top-[16%] max-w-[690px] w-full -z-1 opacity-40"></div>

          {/* <!-- stars --> */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          <PageTitle
            title="Contact Us"
            paragraph="We'll be happy to help you with anything - just reach out!"
          />

          {/* <!-- support form --> */}
          <div className="form-box-gradient-light dark:form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
            <form
              action={siteConfig.emailFormLink}
              method="POST"
              className="relative z-10"
            >
              <div className="-mx-4 xl:-mx-10 flex flex-wrap">
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label
                      htmlFor="name"
                      className="text-[black] dark:text-[white] mb-2.5 block font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05] w-full py-3 px-6 outline-none text-[black] dark:text-[white]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label
                      htmlFor="email"
                      className="text-[black] dark:text-[white] mb-2.5 block font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05] w-full py-3 px-6 outline-none text-[black] dark:text-[white]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="mb-10">
                    <label
                      htmlFor="message"
                      className="text-[black] dark:text-[white] mb-2.5 block font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      rows={6}
                      required
                      className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05]  w-full py-5 px-6 outline-none text-[black] dark:text-[white]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="button-styling bg-[#8b3eff] inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
