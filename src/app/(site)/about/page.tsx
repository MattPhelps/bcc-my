import { Metadata } from "next";
import PageTitle from "../../../components/Common/PageTitle";

const pageTitle = `About InkGen`;
const pageDescription = ``;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const AboutPage = () => {

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
          <PageTitle title="About InkGen"  paragraph=""   />
          <div className="mt-8">
          <div className="content-container">
            <p>As the founder, I'm proud to help tattoo lovers discover the perfect tattoo for them.</p>
            <br></br>
            <p>We understand that choosing the right tattoo design can be challenging, and that's where InkGen comes in. Our platform uses cutting-edge AI tech to generate custom designs that match your individual style and preferences.</p>
            <br></br>
            <p>At InkGen, we believe that the tattoo experience should be seamless and enjoyable from start to finish. So whether you're a tattoo enthusiast, a first-timer, or a tattoo artist, we invite you to  <a href="/idea">explore what InkGen has to offer.</a></p>
            <br></br>    
            <h2 className="mt-8 text-2xl font-bold">Thanks for Joining the InkGen Community!</h2>
            <br></br>    
            <p>Tattoos are a form of self-expression that can be used to communicate who you are, what you believe in, and what you are passionate about. They are also a way to show your individuality and style. InkGen wants to help you find the perfect tattoo.  </p>
            <br></br>    
            <p>InkGen is an AI that creates original tattoo designs based on your ideas and preferences. It's an AI tattoo generator! To use InkGen, simply select the style of tattoo you want, input your idea, and let the AI generate a design for you. You can save your favorite designs and share them with your friends.</p>
            <br></br>    
            <p>InkGen is the perfect way to <a href="/design">create your next tattoo.</a> With InkGen, you can be sure that your tattoo will be one-of-a-kind and totally unique to you.</p>
            <p></p>
            <br></br>    
            <h2 className="mt-8 text-2xl font-bold">Why we are changing the way you discover tattoo ideas</h2>
            <br></br>    
            <p>The current way you get tattoos is painful.</p>
            <br></br>    
            <p>You have to go to a tattoo artist, discuss what you want, and then hope that they can deliver a design that you love. This process is time-consuming (months) and expensive. Worst of all, sometimes it's regrettable.</p>
            <br></br>    
            <p>InkGen is the perfect way to find your next tattoo. With InkGen, you can be sure that your tattoo will be one-of-a-kind and totally unique to you.</p>
            <br></br>    
         
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
