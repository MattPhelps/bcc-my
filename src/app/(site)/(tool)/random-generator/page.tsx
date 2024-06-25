'use client'
import { useState } from "react"
import Headline from "@/components/Common/Headline";
import Button from "@/components/Common/Button";
import { getRandomTattooDesign } from "@/libs/services/designService";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

const pageTitle = `Random Tattoo Generator`;
const pageDescription = `Generate random tattoo designs for inspiration. Click to discover unique tattoo ideas and find your perfect design.`;

{/* 
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};
*/}

const IdeaGeneratorPage = () => {
  const [randomDesign, setRandomDesign] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateDesign = async () => {
    try {
      setError(null); // Clear previous errors
      const design = await getRandomTattooDesign();
      setRandomDesign(design);
    } catch (err) {
      setError('Failed to fetch a random tattoo design. Please try again.');
      setRandomDesign(null);
    }
  };

  return (
    <>
      <section className="pt-3 pb-25">
        <Headline
          title={pageTitle}
          paragraph="Click to generate a random tattoo design"
          showButton={false}
        />

        {/* Render error message if any */}
        {error && (
          <div className="error-message">
            <p className="text-center text-[red] pb-10">{error}</p>
          </div>
        )}

        {/* Render random design here */}
        {randomDesign && (
          <div className="random-design">
            <img src={randomDesign.imageUrl} alt="Random Tattoo Design" />
            <p>{randomDesign.description}</p>
          </div>
        )}

        <Button
          href="#"
          onClick={handleGenerateDesign}
          style={{}}
          className=""
        >
          Generate Tattoo
        </Button>

        {/* ADD SECTION HERE */}

        <div className="content-container">
          <h2 className="mt-8 pt-10 text-2xl font-bold">Discover Unique Tattoo Designs</h2>
          <p className="mt-4">
            Welcome to our Random Tattoo Generator! Are you looking for inspiration for your next tattoo? Our generator provides a wide variety of unique tattoo designs to spark your creativity. Whether you're interested in traditional tattoos, modern styles, or something completely original, our tool has got you covered. Click the button above to see a new random tattoo design and find your perfect match.
          </p>
          <h3 className="mt-8 pt-10 text-xl font-bold">Why Use a Tattoo Design Generator?</h3>
          <p className="mt-4">
            Finding the right tattoo design can be overwhelming with so many options available. Our tattoo design generator simplifies the process by offering you random designs that might just be what you're looking for. This tool is perfect for those who are undecided or looking to explore different tattoo styles before making a commitment.
          </p>
          <h3 className="mt-8 pt-10 text-xl font-bold">Get Inspired</h3>
          <p className="mt-4">
            Tattoos are a form of self-expression and body art. They tell stories, commemorate special moments, and represent personal values. With our Random Tattoo Generator, you can explore various designs, get inspired, and find the perfect tattoo that resonates with you. Whether you prefer minimalist designs, intricate patterns, or bold statements, you'll find something that catches your eye.
          </p>
          <h3 className="mt-8 pt-10 text-xl font-bold">Share Your Designs</h3>
          <p className="mt-4">
            Once you've found a design you love, share it with friends or your tattoo artist. Use the inspiration to create a custom piece that's uniquely yours. Don't forget to check out our other tools and resources for more tattoo ideas and tips.
          </p>
        </div>
        <div className="pt-20">
          <CallToAction
            heading="Design Your Own Tattoo"
            description="Ink yourself with your OWN creation. Get 3 free credits today."
            buttonText="👉 Try for Free 👈"
            buttonSlug="/signup"
          />
        </div>
      </section>
    </>
  );
};

export default IdeaGeneratorPage;
