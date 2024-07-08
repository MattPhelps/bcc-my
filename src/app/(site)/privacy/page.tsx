import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Privacy Policy | ${siteConfig.siteName}`;
const pageDescription = `Prioritize your privacy while Nudifying your image.. Our Privacy Policy outlines how we protect your data and respect user confidentiality.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const PrivacyPage = () => {

  return (
    <>
      <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Privacy Policy" paragraph="Updated: February 19th, 2024" />

          <div className="mt-8">
            <p className="text-lg font-bold">PLEASE READ THIS DOCUMENT CAREFULLY.</p>
            <p className="mt-4">IT CONTAINS IMPORTANT INFORMATION THAT YOU SHOULD KNOW BEFORE USING THE WEBSITE OR SERVICES. BY USING THE WEBSITE OR SERVICES, YOU WILL BE DEEMED TO HAVE ACCEPTED THIS PRIVACY POLICY.</p>

            <h2 className="mt-8 text-2xl font-bold">Introduction</h2>
            <p className="mt-4">We at {siteConfig.shortURL} place the utmost importance on the privacy and security of our users. However, We have zero tolerance for any attempts to prompt illegal underage content. If you’re caught engaging in such activities, we will take swift and decisive action, reporting you to the local authorities without hesitation. You will have zero privacy.</p>
            <p className="mt-4">By using the Website or Services, you accept the practices set forth in this Privacy Policy and the Terms of Service. This privacy statement was created to disclose its information gathering and dissemination practices for its website located at {siteConfig.siteName} and other related websites owned and/or operated by {siteConfig.siteName} (together, the &quot;Website&quot;), products (for example, {siteConfig.siteName}), and the services offered and provided through the Website (the &quot;Services&quot; as described in the Terms of Service).</p>
            <p className="mt-4">We have created this privacy statement to provide you with clear, simple, and complete information about how we process the personal data you give us or the data we may collect while you are browsing our website, how it may be transferred to third parties, and your rights and options to control your personal information and protect your privacy. Accordingly, we prepared this statement to inform you of the privacy principles that govern the Website and Services (the &quot;Privacy Policy&quot;).</p>
            <p className="mt-4">{siteConfig.siteName} reserves the right to modify this Privacy Policy at any time by posting such changes on this page. If we make any material changes, we will notify you by means of a notice on the Website prior to the change becoming effective, and we may also try to notify you through email of the privacy changes, if necessary. Please check the revision date below to determine if this Privacy Policy has been modified since you last reviewed it. Your continued use of any portion of the Website or Services following the posting of the updated Privacy Policy will constitute your acceptance of the changes.</p>

            <h2 className="mt-8 text-2xl font-bold">A. INFORMATION WE COLLECT</h2>
            <h3 className="mt-6 text-xl font-semibold">How we collect your information</h3>
            <p className="mt-4">We may collect information regarding the use of our Website, especially with respect to your browsing (pages visited, links clicked, etc.). Some of this information may be collected using cookies placed in your web browser when you browse our website. The information that we request is and will be retained by us and used as described in this Privacy Policy. We do not request or intend to collect any “special categories of information” such as any information on health, race, religion, political opinions or philosophical beliefs, sexual preferences, or orientation.</p>
            <p className="mt-4">When you request a page from our Website, our servers log the information provided in the HTTP request header, JavaScript or similar technical tools, including the IP number, the time of the request, the URL of your request, and other information. We collect this information to make our Website function correctly and provide you the functionality that you see on the Website, as our servers use this information to deliver to you the pages on this Website. We also use this information to better understand how visitors use our Website and how we can better tune our Website, its contents, and functionality to meet your needs. However, this information is not associated with any personally identifiable information of persons browsing the Website.</p>
            <p className="mt-4">When you use the Website, {siteConfig.Name} Downloader or trusted third parties authorized by {siteConfig.siteName} may also collect certain technical and routing information about your computer (also known as environmental variables) to facilitate your use of the Website and the Services enabled thereby. When you browse the Internet, your Internet browser (such as Mozilla Firefox, Google Chrome, or Microsoft Internet Explorer) automatically transmits some information to {siteConfig.siteName} every time you access content on one of our internet domains. Examples of such information include the URL of the particular Web page you visited, the IP (Internet Protocol) address of the computer you are using, or the browser version that you are using to access the Website. All of this information may be collected by {siteConfig.siteName} and used to help improve our offerings to you.</p>
            <p className="mt-4">We use cookies and other similar technologies to help provide our Services, to advertise to you, and to analyze how you use our Services and whether advertisements are being viewed. By continuing to use and navigate our sites, services, applications, tools, or messaging, you are agreeing to our use of cookies described in this Privacy Policy.</p>
            <p className="mt-4">{siteConfig.siteName} does not track users over time and across third-party websites to provide targeted advertising and therefore does use do not track (DNT) signals. However, some third-party sites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you. If you are visiting such sites, your web browser may allow you to set the DNT signal on your browser so that third parties (particularly advertisers) know you do not want to be tracked.</p>
            <p className="mt-4">Our Website also may contain links to other third-party websites. {siteConfig.siteName} is not responsible for the privacy practices or the content of such websites. We encourage you to carefully read the privacy statement of any website you visit. {siteConfig.siteName} may make third-party applications available to you through the Website or Services. The information collected by {siteConfig.siteName} when you enable a third-party application is processed under this Privacy Policy. Information collected by the third-party application provider is governed by the provider&apos;s privacy policies.</p>
            <p className="mt-4">We may collect your information when you: (i) create a customer account on our applications, if applicable; (ii) contact our customer service or send requests for information to us; (iii) browse on the Internet using cookies or similar technology.</p>
            <p className="mt-4">{siteConfig.siteName} processes your information to:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>enable you to create and manage your access to your customer account if applicable;</li>
              <li>connect you to external, third-party applications, such as when you create an account using an external application;</li>
              <li>manage customer relations with respect to any requests for information or complaints you may send us;</li>
              <li>manage and optimize your customer experience by improving our knowledge of our customers;</li>
              <li>conduct statistical analyses to develop management, measuring, and reporting tools in order to adjust and improve our services;</li>
              <li>when you have given your consent for the processing of your data and of your browsing data via cookies, etc.</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">User Account</h3>
            <p className="mt-4">Some of the Services offered to users of the Website may require you to register for a user account with {siteConfig.siteName} (&quot;User Account&quot;). When registering for a User Account, {siteConfig.siteName} will ask you to voluntarily supply {siteConfig.siteName} with certain information about yourself. You may also register with {siteConfig.siteName} through your account with certain third-party social networking services (collectively, &quot;SNS&quot;). Please note that if you opt to use your SNS account to login to our Website and use our Services, {siteConfig.siteName} is able to access your data in connection with your SNS account. If you wish to deactivate your personal User Account, you can contact the company us at {siteConfig.supportEmail}. When you deactivate your personal account, all information stored and maintained as part of your account, including, without limitation, information obtained from your SNS will be deactivated (although some information may be retained for archival, analytics, backup, and record purposes).</p>


            <h3 className="mt-6 text-xl font-semibold">Embedded Content from Other Websites</h3>
            <p className="mt-4">Our site may feature embedded content (e.g., videos, images, articles, etc.) from other websites. This content behaves as if you were visiting the other website directly. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with the embedded content. This may include tracking your interaction if you have an account and are logged in to that website.</p>


            <h3 className="mt-6 text-xl font-semibold">Your Data Rights</h3>
            <p className="mt-4">If you have an account on our site, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.</p>
            <p className="mt-4">You may also request the removal of your email address and uploaded personal photos. Our team will carefully review your activity to ensure no illegal or suspicious activities are present before deleting your records. You cannot self-govern your data; it will be reviewed.</p>
            <p className="mt-4">We are required to keep certain data for administrative, legal, or security purposes.</p>
            <p className="mt-4">Any violations of our Terms of Service will be swiftly escalated to law enforcement where applicable.</p>
            <p className="mt-4">We cannot stress this enough: do not attempt to create or share illegal or underage content using our software. We will take immediate and severe legal action against any offenders.</p>

            <h3 className="mt-6 text-xl font-semibold">Information Relating to Children</h3>
            <p className="mt-4">The {siteConfig.siteName} Website and any Software or Services available on that site are not directed or allowed to be used by children under 18 years or other permitted by the applicable law age.</p>

          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default PrivacyPage;
