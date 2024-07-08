import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Terms of Service | ${siteConfig.siteName}`;
const pageDescription = `Explore our Terms of Service to understand the rules and guidelines governing the use of our image manipulation tool.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const TermsPage = () => {

  return (
    <>
       <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px]  mx-auto text-[black]/70 dark:text-[white]/50 px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Terms of Service" paragraph="Updated: February 19th, 2024" />

          <div className="mt-8">
            <p className="text-lg font-bold">ATTENTION:</p>
            <p className="mt-4">THIS IS A LEGALLY-BINDING CONTRACT.</p>
            <p className="mt-4">PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THE SERVICE. THIS AGREEMENT GOVERNS YOUR RELATIONSHIP WITH {siteConfig.siteName.charAt(0).toUpperCase() + siteConfig.siteName.slice(1)} AND USE OF THE SERVICES PROVIDED THROUGH THE WEBSITE. YOU MAY USE THE SERVICES PROVIDED THROUGH THE WEBSITE ONLY ON THE CONDITION THAT YOU ACCEPT ALL OF THE TERMS AND CONDITIONS CONTAINED HEREIN. USING THE SERVICES PROVIDED THROUGH THE WEBSITE INDICATES THAT YOU ACCEPT THESE TERMS OF SERVICE. IF YOU DO NOT ACCEPT THESE TERMS OF SERVICE, DO NOT USE THE WEBSITE OR SERVICES.</p>
            <p className="mt-4">THESE TERMS OF SERVICE INCLUDES THE PRIVACY POLICY LOCATED AT <a href={siteConfig.siteURL + "/privacy"}>{siteConfig.siteURL}/privacy</a> WHICH IS INCORPORATED AND MADE A PART OF THESE TERMS OF SERVICE.</p>

            <h2 className="mt-8 text-2xl font-bold">Acceptance of Terms of Service</h2>
            <p className="mt-4">These Terms and Conditions outline the rules and regulations for the use of our Service and form the agreement between you (“You”) and {siteConfig.shortURL}. These Terms and Conditions establish the rights and obligations of all users concerning the Service.</p>
            <p className="mt-4">Your access to and use of the Service is conditional upon your acceptance of and compliance with these Terms and Conditions. These Terms and to all visitors, users, and others who access or use the Service.</p>
            <p className="mt-4">By accessing or using the Service, you agree to be bound by these Terms and Conditions. If you disagree with any part of these Terms and Conditions, you may not access the Service.</p>
            <p className="mt-4">You represent that you are at least 18 years old. {siteConfig.shortURL} does not permit individuals under 18 years of age to use the Service.</p>
            <p className="mt-4">Your access to and use of the Service is also conditional upon your acceptance of and compliance with the Privacy Policy of {siteConfig.shortURL}. Our Privacy Policy explains our policies and procedures on the collection, use, and disclosure of your personal information when you use the Service and informs you about your privacy rights and how the law protects you. Please read our Privacy Policy carefully before using our Service.</p>

            <h2 className="mt-8 text-2xl font-bold">Warning: Strictly No Underage Content</h2>
            <p className="mt-4">Generating, requesting, or sharing any content involving underage individuals, real or simulated, is strictly prohibited and will be logged and reported. This includes any form of child pornography, anime, fake news with intent to distribute, or violence/gore involving minors. Violation of this policy will result in a permanent ban and flagging of your account, and law enforcement will be notified as part of our strict compliance process.</p>
            <p className="mt-4">{siteConfig.shortURL} will provide law enforcement server administrative information to prosecute cyber crimes. We have a zero-tolerance policy without warning.</p>

            <h2 className="mt-8 text-2xl font-bold">Refund and Paid Services Policy</h2>
            <p className="mt-4">Our Services may include certain services that are available via a one-time payment. The pricing for such Services will be as set out on the website.</p>
            <p className="mt-4">All payments are non-refundable. Once made, payment transactions are final and not reversible.</p>
            <p className="mt-4">We reserve the right to change the pricing for the Service at any time.</p>

            <h2 className="mt-8 text-2xl font-bold">Content Policy</h2>
            <p className="mt-4">You must adhere to our Content Policy when using our Service:.</p>
            <p className="mt-4">“Content” refers to any material that you generate through the use of our Services. Your Content is not representative of or affiliated with {siteConfig.shortURL}, and we do not claim any ownership rights over your Content.</p>
            <p className="mt-4">We do not store your Content. Once it has been delivered, it is promptly removed from our servers.</p>
            <p className="mt-4">You must not generate, create, upload, or share any images or content that are illegal or could cause harm, including, but not limited to:</p>
            
            <ul className="list-disc mt-4 ml-5">
               <li>Content promoting or expressing hate based on identity, using hateful symbols, negative stereotypes, or comparisons of certain groups to animals or objects.</li>
               <li>Content mocking, threatening, or bullying individuals.</li>
               <li>Content depicting violent acts, suffering, or humiliation of others.</li>
               <li>Content promoting or encouraging suicide, self-harm, or eating disorders.</li>
               <li>Content involving child abuse or exploitation, including images or videos of children, or any print or artwork that depicts or promotes child abuse.</li>
               <li>Content depicting rape or domestic abuse.</li>
               <li>Content involving the sale of illegal substances or products requiring permits or licenses, including pharmaceuticals, narcotics, pets, or firearms.</li>
               <li>Content that is fraudulent or deceptive, including false information or attempts to exploit others.</li>
               <li>Content involving false impersonation or identity theft.</li>
               <li>Content depicting brutal fights, graphic injuries, or human death.</li>
               <li>Content depicting graphic violence or promoting violence against others.</li>
               <li>Content involving bestiality or sexual acts with animals..</li>
               <li>Content depicting “loli”, “lolicon”, “shota”, or “shotacon” content, involving sexualized depictions of children.</li>
               <li>Content based on real persons or copyrighted material, unless it’s yourself or you have obtained consent.</li>
            </ul>
            <p className="mt-4">Do not mislead your audience about AI involvement:</p>
            <p className="mt-4">When sharing your work, proactively disclose AI involvement. You may not mislead others about the nature of the work, e.g., claiming the work was entirely human-generated or that it’s an unaltered photograph of a real event.</p>

            <p className="mt-4">Respect the rights of others:</p>
            <ul className="list-disc mt-4 ml-5">
               <li>Do not upload/generate images of people without their consent.</li>
               <li>Do not upload/generate images without holding appropriate usage rights.</li>
               <li>Do not upload/generate images of public figures.</li>
            </ul>
            <p className="mt-4">Please report any suspected violations of these rules to {siteConfig.supportEmail}. We will investigate and take action accordingly, up to and including terminating the violating account.</p>

            <h2 className="mt-8 text-2xl font-bold">Liability</h2>
            <p className="mt-4">Neither of us (nor any of our affiliates, subsidiaries, contractors, licensors, officers, directors, agents, or employees (“Related Parties”)) will be liable for any indirect, incidental, consequential, punitive, special, or other similar damages, including loss of revenue, profits, data, benefits, or savings, whether or not due to the fault or negligence of the company or related parties, and regardless of whether either of us or our related parties have been advised of the possibility of such damages or losses.</p>

            <h2 className="mt-8 text-2xl font-bold">Disclaimer of Warranties</h2>
            <p className="mt-4">{siteConfig.shortURL}’s services are provided on an AS IS – WITH ALL FAULTS basis. You acknowledge that unexpected content may be generated through {siteConfig.shortURL}. Your use of our service is entirely at your own risk. We do not guarantee the availability of our service at any given time, or the reliability of our service when it is running. We do not guarantee the integrity of, or the continued availability of, files on our servers. Whether we make backups, and if so, whether restoration of those backups will be available to you, is at our discretion. {siteConfig.shortURL} DISCLAIMS ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF FITNESS AND MERCHANTABILITY. NOTWITHSTANDING ANYTHING ELSE STATED IN THESE TERMS, AND IRRESPECTIVE OF WHETHER {siteConfig.shortURL} TAKES OR DOES NOT TAKE MEASURES TO REMOVE INAPPROPRIATE OR HARMFUL CONTENT FROM ITS SITE, {siteConfig.shortURL} HAS NO DUTY TO MONITOR ANY CONTENT ON ITS SITE. {siteConfig.shortURL} DOES NOT ASSUME RESPONSIBILITY FOR THE ACCURACY, APPROPRIATENESS, OR HARMLESSNESS OF ANY CONTENT APPEARING ON {siteConfig.shortURL} THAT IS NOT PRODUCED BY {siteConfig.shortURL}, INCLUDING BUT NOT LIMITED TO USER CONTENT, ADVERTISING CONTENT, USER GENERATED AI CONTENT, OR OTHERWISE.</p>
            <p className="mt-4">Your sole remedy for the loss of any services and/or of any images or other data you may have stored on {siteConfig.shortURL}’s service is to discontinue your use of our service. {siteConfig.shortURL} WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF, OR INABILITY TO USE, {siteConfig.shortURL}’S SERVICES, EVEN IF {siteConfig.shortURL} HAS BEEN ADVISED OF OR REASONABLY SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. NO CAUSE OF ACTION ARISING OUT OF YOUR USE OF {siteConfig.shortURL}’S SERVICES MAY BE BROUGHT MORE THAN ONE YEAR AFTER IT OCCURS.</p>

            <h2 className="mt-8 text-2xl font-bold">Change</h2>
            <p className="mt-4">We reserve the right to change or update these Terms at any time and without notice. All changes made to these terms are retroactive and apply to all users, content, and communications, overriding any previously agreed-upon terms.</p>

            <h2 className="mt-8 text-2xl font-bold">Definitions</h2>
            <p className="mt-4">“Us/we” refers to {siteConfig.shortURL} and its operators. “You” refers to any user that has accessed this site with any intention other than viewing this TOS. “Content” refers to any material that you generate through the use of our Services.</p>

            <h2 className="mt-8 text-2xl font-bold">Contact Us</h2>
            <p className="mt-4">If you have any questions about these Terms and Conditions, you can contact our the company us by email: {siteConfig.supportEmail}</p>


          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default TermsPage;

