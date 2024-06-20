import { Metadata } from "next";
import Headline from "@/components/Common/Headline";
const pageTitle = `Tattoo Pain Chart`;
const pageDescription = ``;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const PainChartPage = () => {
  return (
    <>
     <section className="pt-3 pb-25">

          <Headline 
            title="Tattoo Pain Chart" 
            paragraph="Getting a tattoo generally involves some pain, but the location and your personal tolerance will affect how much it hurts. Getting tattooed on an area with little fat, many nerve endings, or thin skin is more likely to hurt."
            showButton={false} 
           />
          
          <div className="mt-8">
          <div className="content-container">

          <h2 className="mt-24 mb-8 text-3xl font-bold">Female Pain Chart</h2>
          <img src="/resources/female-tattoo-pain-chart.png" alt="" className="w-full h-full object-cover object-center" />


          <h2 className="mt-24 mb-8 text-3xl font-bold">Male Pain Chart</h2>
          <img src="/resources/male-tattoo-pain-chart.png" alt="" className="w-full h-full object-cover object-center" />
          
          
          <h2 className="mt-24 mb-8 text-3xl font-bold">10 Painful Areas</h2>
          <p className="mt-4">It’s generally more painful to get a tattoo on a part of your body with many nerve endings, close to bones without much fat, or where your skin is very thin. Pain in these areas may be high to severe.</p>
          <p className="mt-4">This may include the following:</p>
          <ul className="list-disc pl-6">
            <li className="mt-4">Skull, neck and spine</li>
            <li>Rib cage</li>
            <li>Areola and Nipple</li>
            <li>Armpit and Inner Bicep</li>
            <li>Inner or Outer Elbow</li>
            <li>Wrist, Palm and Finger</li>
            <li>Stomach</li>
            <li>Groin and Inner Thigh</li>
            <li>Kneecap or Behind the Knees</li>
            <li>Shin</li>
            <li>Ankle, Foot and Toe</li>
          </ul>

          <h2 className="mt-24 mb-8 text-3xl font-bold">6 LEAST Painful Areas</h2>
          <p className="mt-4">It’s generally less painful to get a tattoo on areas of your body that are padded with some fat, have tight skin, have few nerve endings, and aren’t close to bones. Pain in these areas may be low to moderate.</p>
          <p className="mt-4">This may include the following:</p>
          <ul className="list-disc pl-6">
            <li className="mt-4">Skull, neck and spine</li>
            <li>Chest</li>
            <li>Back</li>
            <li>Upper Arm and Shoulder</li>
            <li>Forearm</li>
            <li>Outer Thigh</li>
            <li>Calf</li>
          </ul>

          <h2 className="mt-24 mb-8 text-3xl font-bold">How Does it Feel to Get a Tattoo?</h2>
          <p className="mt-4">There are a few general sensations commonly felt when getting a tattoo. Being familiar with these sensations before getting tattooed can give you an idea of what to expect and how to tell when your pain isn’t typical.</p>
          
          <h2 className="mt-12 mb-8 text-2xl font-bold">Dull or Background Pain</h2>
          <p className="mt-4">When the needle revs up with its loud buzz and the needle’s sharp prick first hits your skin, your body’s reaction is to start producing stress hormones like adrenaline.</p>
          <p className="mt-4">These hormones numb the pain, making it feel like a dull ache in the background. During your session, you may feel this pain periodically change or intensify.</p>
          <p className="mt-4">You’re more likely to stay in the dull pain phase if you’re distracted by another activity, such as talking with your artist, listening to music, or watching TV.</p>


           <h2 className="mt-12 mb-8 text-2xl font-bold">Vibrating Pain</h2>
          <p className="mt-4">When a tattoo needle pierces skin above the bone, nerves in your bones may pick up the vibrating sensation, especially if the needle moves quickly. This causes vibrating pain.</p>
        
          <h2 className="mt-12 mb-8 text-2xl font-bold">Burning Pain</h2>
          <p className="mt-4">Burning pain feels like having something very hot pressed against your skin for an extended period.</p>
          <p className="mt-4">It’s most commonly felt in areas a tattoo artist has worked on for a long time, caused by a combination of your skin’s rawness and the repeated trauma resulting from a tattoo needle piercing your skin in the same place.</p>

          <h2 className="mt-12 mb-8 text-2xl font-bold">Scratching Pain</h2>
          <p className="mt-4">Scratching pain can feel like a cat dragging its claws across your skin.</p>
          <p className="mt-4">It tends to hurt more when multiple needles are used at the same time rather than a single needle, such as when your artist adds shading to your tattoo.</p>

          <h2 className="mt-12 mb-8 text-2xl font-bold">Sharp or Stinging Pain</h2>
          <p className="mt-4">Sharp or stinging pain can be described as many tiny bee stings. This kind of pain is most commonly felt when a tattoo artist uses fewer needles, or just one needle, to add very fine detail or make the outline of your tattoo.</p>
          <p className="mt-4">Body parts with thinner or tighter skin, like the wrists and biceps, are more likely to feel sharp or stinging pain.</p>
          <p className="mt-4">While experienced tattoo artists know what they’re doing, new or less experienced tattooers may be unintentionally heavy-handed. Extremely sharp or intense pain might mean your tattooer is pushing their needles too deeply into your skin.</p>
          <p className="mt-4">This can cause a tattoo deformity called a blowout, which causes the ink to disperse below the top layers of skin that should be tattooed. The end result is a blurry tattoo.</p>

          <h2 className="mt-24 mb-8 text-3xl font-bold">The Bottom Line</h2>
          <p className="mt-4">Most people find getting a tattoo painful. However, there are certain things you can do to help minimize pain, so be sure to talk with your tattoo artist about your concerns during your consultation appointment.</p>
          <p className="mt-4">Depending on your anatomy and desired design, they can help you determine where a tattoo might hurt more or less. Your tattoo artist can also discuss your options for numbing creams and advise you on their use.</p>
          <p className="mt-4">Most people find getting a tattoo painful. However, there are certain things you can do to help minimize pain, so be sure to talk with your tattoo artist about your concerns during your consultation appointment.</p>

          </div>
          </div>

      </section>
    </>
  );
};

export default PainChartPage;
