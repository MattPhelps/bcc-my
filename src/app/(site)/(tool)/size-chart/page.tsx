import { Metadata } from "next";
import Headline from "@/components/Common/Headline";
import CallToAction from "@/components/CallToAction";

const pageTitle = `Tattoo Size Chart`;
const pageDescription = `Explore our comprehensive Tattoo Size Chart to help you plan your next tattoo. Find detailed information on various tattoo sizes, placement options, and tips to ensure you choose the perfect size for your design. Get started with our easy-to-use chart and make an informed decision for your body art.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const SizeChartPage = () => {
  return (
    <>
      <section className="pt-3 pb-25">
        
          <Headline
            title={pageTitle}
            paragraph="What's a good tattoo size for you?"
            showButton={false}
          />

        <div className="content-container">
          <p className="mt-4">
            Tattoo artists use inches to determine the total size of your desired body art. Depending on the chosen option, the tattooed area can be square, rectangle, or non-specific. Some artists calculate a total area to cover when discussing the price and other specifics with you.
          </p>
          <p className="mt-4">
            Another thing to note is that big tattoo sizes might require multiple sessions. A single session takes about two hours. But if you and the artist can handle it, it can extend up to five hours.
          </p>
          <p className="mt-4">
            With that in mind, check out our tattoo size and time chart. It’s relative but should give you a general idea about different tattoo size requirements!
          </p>

          {/* INSERT TABLE HERE */}
          <table className="w-full mt-8 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Tattoo Size</th>
                <th className="border border-black p-2">Measurements</th>
                <th className="border border-black p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2">Small</td>
                <td className="border border-gray-300 p-2">2x2 inches</td>
                <td className="border border-gray-300 p-2">Up to 1 hour</td>
                <td className="border border-gray-300 p-2">Placement</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Medium</td>
                <td className="border border-gray-300 p-2">4x4 inches</td>
                <td className="border border-gray-300 p-2">1 to 3 hours</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Large</td>
                <td className="border border-gray-300 p-2">6x6 inches</td>
                <td className="border border-gray-300 p-2">3 to 5 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Extra Large</td>
                <td className="border border-gray-300 p-2">8x8 inches or larger</td>
                <td className="border border-gray-300 p-2">Multiple sessions</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-15 text-2xl font-bold">2×2 TATTOO SIZE</h2>
          <p className="mt-4">
          If you look at the tattoo size and time chart, this is a fine choice for most beginners. It’s not the smallest option available, so it gives enough room to convey the right message. If you have a single symbol, animal, or character, 2×2 will be sufficient to show it proudly.
          </p>
          <p className="mt-4">
          The experts recommend anything from hearts and other symbols to butterflies, birds, and other animals for a small tattoo. You can also pick initials and some minimalist designs. As for the placement, go with the ankles, or wrists, or lower arm, especially if you are a female.
          </p>

          <h2 className="mt-15 text-2xl font-bold">3×3 TATTOO SIZE</h2>
          <p className="mt-4">
          This is a common option, and the crucial thing to note is that it significantly increases the total tattoo area. That gives you more room when choosing the placement of the 3×3 tattoo. You can go with thighs or wrists, but also shoulders and upper arms. This size is sufficient enough for your chest and ribcage if those are your preferred body art options.
          </p>
          <p className="mt-4">
          You can portray an animal protector or a mythological character with this size. A floral motive, but also swords, feathers, and similar shapes, can be a wise choice, too.
          </p>

          <h2 className="mt-15 text-2xl font-bold">4×4 TATTOO SIZE</h2>
          <p className="mt-4">
          This range already enters large tattoo sizes. Not many people choose an actual square area, so the shape depends on the chosen tattoo. A dragon, tiger, or another powerful creator will look good in this size. You can go for cartoon and mythological characters, but also humans. If the stylist is skilled enough, they can even add some imagery around the focal point of the tattoo.
          </p>

          <h2 className="mt-15 text-2xl font-bold">6x6 TATTOO SIZE</h2>
          <p className="mt-4">
          Although there are larger tattoo sizes, this is the last one we’ll mention. If it’s your first piece, don’t go bigger than this. 6×6 tattoos look best on thighs, hips, shoulders, or the upper back. It’s also enough to get a half or full-sleeve, depending on your arm’s dimensions.
          </p>
          <p className="mt-4">
          If you like large fonts and symbols, you can go with that. However, there’s no reason not to combine a mythical creature or character with some additional elements. Roses and skulls are a common combination for this tattoo size.
          </p>
          </div>
          

          <div className="mt-15">
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

export default SizeChartPage;
