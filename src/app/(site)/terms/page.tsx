import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Terms of Use`;
const pageDescription = `Explore our Terms of USe to understand the rules and guidelines governing the use of our image manipulation tool.`;

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
          <PageTitle title="Terms of Use" paragraph={siteConfig.lastUpdated} />

          <div className="mt-8">
          <div className="content-container">
            <p className="text-lg font-bold">Terms of Use</p>
            <p className="mt-4">PLEASE READ THESE TERMS OF SERVICE ("AGREEMENT" OR "TERMS OF USE") CAREFULLY BEFORE USING THE SERVICES OFFERED BY INKGEN.AI. THIS AGREEMENT SETS FORTH THE LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF THE INKGEN AI WEBSITE AND ALL RELATED SERVICES, INCLUDING, WITHOUT LIMITATION, ANY FEATURES, CONTENT, WEBSITES (INCLUDING WWW.INKGEN.AI) OR APPLICATIONS OFFERED FROM TIME TO TIME BY INKGEN AI IN CONNECTION THEREWITH (COLLECTIVELY "SERVICE(S)"). BY USING THE SERVICES IN ANY MANNER, YOU AGREE TO BE BOUND BY THIS AGREEMENT.</p>
            <h2 className="mt-8 text-2xl font-bold">Acceptance of Terms of Service</h2>
            <p className="mt-4">The Service is offered subject to acceptance without modification of all of these Terms of Service and all other operating rules, policies and procedures that may be published from time to time in connection with the Services by InkGen AI. In addition, some services offered through the Service may be subject to additional terms and conditions promulgated by InkGen AI from time to time; your use of such services is subject to those additional terms and conditions, which are incorporated into these Terms of Service by this reference. InkGen AI may, in its sole discretion, refuse to offer the Service to any person or entity and change its eligibility criteria at any time. This provision is void where prohibited by law and the right to access the Service is revoked in such jurisdictions.</p>
            <h2 className="mt-8 text-2xl font-bold">Modification of Terms of Service</h2>
            <p className="mt-4">At its sole discretion, InkGen AI may modify or replace any of the Terms of Service, or change, suspend, or discontinue the Service (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the InkGen AI websites or Service or by sending you an email. InkGen AI may also impose limits on certain features and services or restrict your access to parts or all of the Service without notice or liability. It is your responsibility to check the Terms of Service periodically for changes. Your continued use of the Service following the posting of any changes to the Terms of Service constitutes acceptance of those changes.</p>
            <h2 className="mt-8 text-2xl font-bold">Rules and Conduct</h2>
            <p className="mt-4">As a condition of use, you promise not to use the Service for any purpose that is prohibited by the Terms of Service. For purposes of the Terms of Service, the term "Content" includes, without limitation, any information, data, text, photographs, videos, software, scripts, graphics, and interactive features generated, provided, or otherwise made accessible on or through the Service. By way of example, and not as a limitation, you shall not (and shall not permit any third party to) take any action (including contributing any Content) that: would constitute a violation of any applicable law, rule or regulation; infringes any intellectual property or other right of any other person or entity; is threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, obscene, offensive, or profane; constitutes unauthorized or unsolicited advertising, junk or bulk e-mail; contains software viruses or any other similar computer codes, files, or programs; or impersonates any person or entity. Further, you shall not (directly or indirectly): (i) take any action that imposes or may impose an unreasonable or disproportionately large load on InkGen AI's (or its third party providers') infrastructure; or (ii) interfere or attempt to interfere with the proper working of the Service or any activities conducted on the Service; (iii) bypass any measures InkGen AI may use to prevent or restrict access to the Service (or parts thereof).</p>
            <h2 className="mt-8 text-2xl font-bold">Trademarks and Patents</h2>
            <p className="mt-4">All InkGen AI logos, marks and designations are trademarks or registered trademarks of InkGen AI. All other trademarks mentioned in this website are the property of their respective owners. The trademarks and logos displayed on this website may not be used without the prior written consent of InkGen AI or their respective owners. Portions, features and/or functionality of InkGen AI's products may be protected under InkGen AI patent applications or patents.</p>
            <h2 className="mt-8 text-2xl font-bold">License</h2>
            <p className="mt-4">InkGen AI grants you a limited, non-exclusive, non-transferable license to use the designs generated by our AI for personal use. Personal use means using the designs to get tattooed on your own body or for the purpose of designing a tattoo for a friend or family member.</p>
            <h2 className="mt-8 text-2xl font-bold">Commercial Use</h2>
            <p className="mt-4">If you intend to use the designs generated by InkGen AI for commercial purposes, including but not limited to designing tattoos for clients or use as inspiration in client discovery, you must purchase a subscription or pay for credits to use our service. Failure to do so constitutes a breach of these Terms of Use.</p>
            <h2 className="mt-8 text-2xl font-bold">No Resale or Redistribution</h2>
            <p className="mt-4">You are not permitted to resell or redistribute the designs generated by InkGen AI, whether for profit or not. All rights to the designs belong to InkGen AI and any unauthorized use of the designs will be considered a breach of these Terms of Use.</p>
            <h2 className="mt-8 text-2xl font-bold">Ownership</h2>
            <p className="mt-4">InkGen AI retains all rights, title, and interest in and to the designs generated by our AI. You acknowledge that the designs are the property of InkGen AI and that you have no right to use the designs other than as expressly set forth in these Terms of Use.</p>
            <h2 className="mt-8 text-2xl font-bold">Termination</h2>
            <p className="mt-4">InkGen AI may terminate your access to all or any part of the Service at any time if you fail to comply with these Terms of Service, which may result in the forfeiture and destruction of all information associated with your account. Further, either party may terminate the Services for any reason and at any time upon written notice. If you wish to terminate your account, you may do so by following the instructions on the Service. Any fees paid hereunder are non-refundable. Upon any termination, all rights and licenses granted to you in this Agreement shall immediately terminate, but all provisions hereof which by their nature should survive termination shall survive termination, including, without limitation, warranty disclaimers, indemnity and limitations of liability.</p>
            <h2 className="mt-8 text-2xl font-bold">Indemnification</h2>
            <p className="mt-4">You shall defend, indemnify, and hold harmless InkGen AI, its affiliates and each of its, and its affiliates employees, contractors, directors, suppliers and representatives from all liabilities, losses, claims, and expenses, including reasonable attorneys' fees, that arise from or relate to (i) your use or misuse of, or access to, the Service, or (ii) your violation of the Terms of Service or any applicable law, contract, policy, regulation or other obligation. InkGen AI reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with InkGen AI in connection therewith.</p>
            <h2 className="mt-8 text-2xl font-bold">Limitation of Liability</h2>
            <p className="mt-4">IN NO EVENT SHALL INKGEN AI OR ITS DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SERVICE (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, OR SUBSTITUTE GOODS OR SERVICES, (II) FOR YOUR RELIANCE ON THE SERVICE OR (III) FOR ANY DIRECT DAMAGES IN EXCESS (IN THE AGGREGATE) OF THE FEES PAID BY YOU FOR THE SERVICE OR, IF GREATER, $500. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU.</p>
            <h2 className="mt-8 text-2xl font-bold">Disclaimer</h2>
            <p className="mt-4">ALL USE OF THE SERVICE AND ANY CONTENT IS UNDERTAKEN ENTIRELY AT YOUR OWN RISK. THE SERVICE (INCLUDING, WITHOUT LIMITATION, THE INKGEN AI WEB APP AND ANY CONTENT) IS PROVIDED "AS IS" AND "AS AVAILABLE" AND IS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>
            <h2 className="mt-8 text-2xl font-bold">Miscellaneous</h2>
            <p className="mt-4">The Terms of Service are the entire agreement between you and InkGen AI AI with respect to the Service, and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and InkGen AI with respect to the Service. If any provision of the Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms of Service will otherwise remain in full force and effect and enforceable. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. InkGen AI shall not be liable for any failure to perform its obligations hereunder due to any cause beyond InkGen AI's reasonable control. The Terms of Service are personal to you, and are not assignable or transferable by you except with InkGen AI's prior written consent. InkGen AI may assign, transfer or delegate any of its rights and obligations hereunder without consent. No agency, partnership, joint venture, or employment relationship is created as a result of the Terms of Service and neither party has any authority of any kind to bind the other in any respect. Except as otherwise provided herein, all notices under the Terms of Service will be in writing and will be deemed to have been duly given when received, if personally delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; or two days after it is sent, if sent for next day delivery by recognized overnight delivery service.</p>
            <h2 className="mt-8 text-2xl font-bold">Governing Law</h2>
            <p className="mt-4">These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which InkGen AI is located, without giving effect to any choice of law or conflict of law provision or rule.</p>
            <h2 className="mt-8 text-2xl font-bold">Contact Us</h2>
            <p className="mt-4">For questions regarding the Service, you can get in touch by emailing us at <a href="/contact">{siteConfig.supportEmail}</a></p>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;
