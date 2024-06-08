import { Metadata } from "next";
import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';

const pageTitle = `Terms of Use`;
const pageDescription = `Explore our Terms of USe to understand the rules and guidelines governing the use of our image manipulation tool.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const AffiliatePage = () => {
  return (
    <>
     <section className="pt-3 pb-25">
        <div className="max-w-[1170px]  mx-auto text-[black]/70 dark:text-[white]/50 px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="InkGen Affiliate Program" paragraph="Join our affiliate program and earn commissions by promoting Ink Studio AI, the AI-powered tattoo design platform." />
            <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className="">
                  Join Affiliate Program
              </Button>
            </div>

          <div className="mt-8">
          <div className="content-container">

          <h2 className="mt-24 text-2xl font-bold">How It Works</h2>
          <p className="mt-4">Access your affiliate dashboard at XXX. Here you can track your referrals, commissions, and performance.</p>
          
          <h2 className="mt-24 text-2xl font-bold">Payments</h2>
          <p className="mt-4">Commissions are paid out on the 15th of every month. There's no minimum threshold for payouts, so you'll get paid for every sale you refer.</p>
      
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AffiliatePage;
