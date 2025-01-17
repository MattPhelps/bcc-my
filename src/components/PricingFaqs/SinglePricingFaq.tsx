type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  question: string;
  answer: string;
};

const SinglePricingFaq = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, question, answer } = faqData;

  return (
    <div className="flex flex-col border-b border-black/[0.15] dark:border-white/[0.15]">
      <h4
        onClick={() => {
          handleFaqToggle(id);
        }}
        className={`cursor-pointer flex justify-between items-center text-[black] dark:text-[white] font-semibold text-[22px] leading-[28px] py-5 lg:py-7 ${
          activeFaq === id ? "text-[black] dark:text-[white]" : ""
        }`}
      >
        {question}
        <span>
          {activeFaq === id ? (
            <svg
              className="fill-[#000000a1] dark:fill-[#ffffffc7]"
              width="22"
              height="2"
              viewBox="0 0 22 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z" />
            </svg>
          ) : (
            <svg
              className="fill-[#000000a1] dark:fill-[#ffffffc7]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z" />
            </svg>
          )}
        </span>
      </h4>
      <div
        className={`grid text-base text-body-color dark:text-body-color-dark`}
        style={{
          gridTemplateRows: `${activeFaq === id ? "1fr" : "0fr"}`,
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className={`overflow-hidden transition-all duration-300`}>
          <div className="pb-6 pt-1 font-medium">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePricingFaq;
