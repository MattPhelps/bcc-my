import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";

const pageTitle = `Privacy Policy`;
const pageDescription = `Prioritize your privacy while using our services. Our Privacy Policy outlines how we protect your data and respect user confidentiality.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const PrivacyPage = () => {
  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Privacy Policy" paragraph={siteConfig.lastUpdated} />

          <div className="mt-8">
          <div className="content-container">
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            <h3 className="mt-4 text-xl font-semibold">Intro</h3>
            <p>Privacy is a fundamental human right. We will uphold the privacy of our users by fighting against ads, trackers and other impingements on privacy. We will never profit by monetizing your data but instead seek to fulfill our company mission by delivering a great product & service.</p>
            <p>Our commitment to privacy and data protection is reflected in this Privacy Statement which describes how we collect and process “personal information” that identifies you, like your name or email address. Any other information besides this is "non-personal information." If we store personal information with non-personal information, we'll consider that combination to be personal information.</p>
            <p>References to our "Services" at INKGEN AI (inkgen.ai) in this statement include our website, apps, and other products and services. This statement applies to our Services that display or reference this Privacy Statement. Third-party services that we integrate with are governed under their own privacy policies.</p>
            <h3 className="mt-6 text-xl font-semibold">Information Gathering</h3>
            <p>We learn information about you when: You directly provide it to us. For example, we collect: Name and contact information. We collect details such as name and email address. Payment information. If you make a purchase, we collect credit card numbers, financial account information and other payment details. Content and files. We collect and retain the photos, documents or other files you send to us in connection with delivering our Services, including via email or chat.</p>
            <p>We collect it automatically through our products and services. For instance, we collect: Identifiers and device information. When you visit our websites, our web servers log your Internet Protocol (IP) address and information about your device, including device identifiers, device type, operating system, browser, and other software including type, version, language, settings, and configuration. Geolocation data. Depending on your device and app settings, we collect geolocation data when you use our Services.</p>
            <p>Usage data. We log your activity on our website, including the URL of the website from which you came to our site, pages you viewed on our website, how long you spent on a page, access times, and other details about your use of and actions on our website. We also collect information about which web-elements or objects you interact with on our Service, metadata about your activity on the Service, changes in your user state, and the duration of your use of our Service.</p>
            <p>Someone else tells us information about you. Third-party sources include, for example: Third-party partners. Third-party applications and services, including social networks you choose to connect with or interact with through our services. Service providers. Third parties that collect or provide data in connection with work they do on our behalf, for example companies that determine your device's location based on its IP address.</p>
            <p>When we try and understand more about you based on information you've given to us. We infer new information from other
            data we collect, including using automated means to generate information about your likely preferences or other characteristics (“inferences”). For example, we infer your general geographic location based on your IP address.</p>
            <h3 className="mt-6 text-xl font-semibold">Information Use</h3>
            <p>We use each category of personal information about you:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>To provide you with our Services</li>
              <li>To improve and develop our Services</li>
              <li>To communicate with you</li>
              <li>To provide customer support</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold">Information Sharing</h3>
            <p>We share information about you:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>When we've asked & received your consent to share it.</li>
              <li>As needed, including to third-party service providers, to process or provide Services or products to you, but only if those entities agree to provide at least the same level of privacy protection we're committed to under this Privacy Statement.</li>
              <li>To comply with laws or to respond to lawful requests and legal process, provided that we'll notify you unless we're legally prohibited from doing so.</li>
              <li>We'll only release personal information if we believe in good faith that it's legally required.</li>
              <li>Only if we reasonably believe it's necessary to prevent harm to the rights, property or safety of you or others.</li>
              <li>In the event of a corporate restructuring or change in our organizational structure or status to a successor or affiliate.</li>
            </ul>
            <p>Please note that some of our Services include integrations, references, or links to services provided by third parties whose privacy practices differ from ours. If you provide personal information to any of those third parties, or allow us to share personal information with them, that data is governed by their privacy statements.</p>
            <p>Finally, we may share non-personal information in accordance with applicable law.</p>
            <h3 className="mt-6 text-xl font-semibold">Information Protection</h3>
            <p>We implement physical, business and technical security measures to safeguard your personal information. In the event of a security breach, we'll notify you so that you can take appropriate protective steps. We only keep your personal information for as long as is needed to do what we collected it for. After that, we destroy it unless required by law.</p>
            <h3 className="mt-6 text-xl font-semibold">Other Information</h3>
            <p>We retain personal data for as long as necessary to provide the services and fulfill the transactions you have requested, comply with our legal obligations, resolve disputes, enforce our agreements, and other legitimate and lawful business purposes. Because these needs can vary for different data types in the context of different services, actual retention periods can vary significantly based on criteria such as user expectations or consent, the sensitivity of the data, the availability of automated controls that enable users to delete data, and our legal or contractual obligations.</p>
            <p>As part of our normal operations, your information may be stored in computers in other countries outside of your home country. By giving us information, you consent to this kind of information transfer. Irrespective of where your information resides, we'll comply with applicable law and abide by our commitments herein.</p>
            <p>We don't want your personal information if you're under 13. Do not provide it to us. If your child is under 13 and you believe your child has provided us with their personal information, please contact us to have such information removed.</p>
            <h3 className="mt-6 text-xl font-semibold">European Economic Area, United Kingdom, Swiss and California users</h3>
            <p>The following rights are granted under the European General Data Protection Regulation (“GDPR”) and California Consumer Privacy Act (“CCPA”). InkGen AI applies these rights to all users of our products, regardless of your location:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>The right to know what personal information is collected.</li>
              <li>The right to know if personal information is being shared, and to whom.</li>
              <li>The right to access your personal information.</li>
              <li>The right to exercise your privacy rights without being discriminated against.</li>
            </ul>
            <p>EEA, UK, and Swiss Users: Our lawful bases for collecting and processing personal information under the GDPR include: Performing our contract with you and providing our services. Legitimate interests: we receive technical and interaction data of users, which may include IP addresses, to improve the security and reliability of our services and prevent abuse, and to understand where people learn about InkGen AI. Consent: where we ask for your consent to process your information, you can always withdraw this consent.</p>
            <p>Under the GDPR, EEA, UK, and Swiss users have additional rights: The right to request correction or erasure of personal information. The right to object to processing your personal information. The right to transfer or receive a copy of the personal information in a usable and portable format, when any automated processing of personal data is based on your consent or a contract with you. The rights to withdraw your consent to processing, when the processing is based on your consent. When we are processing data on behalf of another party that is the “data controller,” you should direct your request to that party. You also have the right to lodge a complaint with a supervisory authority, but we encourage you to first contact us with any questions or concerns.</p>
            <p>California Users: Under the CCPA, California residents have additional rights: The right to request personal information to be deleted, subject to several exceptions. The right to opt-out of the sale of personal information. Note that we do not “sell” personal information as defined by the CCPA and have not done so in the past 12 months. You may designate, in writing or through a power of attorney, an authorized agent to make requests on your behalf to exercise your rights under the CCPA. Before accepting such a request from an agent, we will require the agent to provide proof you have authorized it to act on your behalf, and we may need you to verify your identity directly with us. Further, to provide or delete specific pieces of personal information we will need to verify your identity to the degree of certainty required by law.</p>
            <h3 className="mt-6 text-xl font-semibold">Exercising Your Rights</h3>
            <p>To exercise the rights described above or if you have a question or concern, please contact us at {siteConfig.supportEmail} and we will aim to address or resolve it. If we cannot, you have the right to lodge a complaint with your local data protection authority.</p>
            <h3 className="mt-6 text-xl font-semibold">Changes</h3>
            <p>We may need to change this Privacy Statement and our notices from time to time. Any updates will be posted online with an effective date. Continued use of our services after the effective date of any changes constitutes acceptance of those changes.</p>
            <h3 className="mt-6 text-xl font-semibold">Contact Us</h3>
            <p>You can get in touch by emailing us at <a href="/contact">{siteConfig.supportEmail}</a>.</p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
