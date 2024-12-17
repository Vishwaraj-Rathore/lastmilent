import FullPageImageWithText from "../../components/FullPageImageWithText";
import FullPageCenteredText from "../../components/FullPageCenteredText";

export default function FairLane() {
  return (
    <>
      <FullPageImageWithText
        backgroundImage="/mainpagebg.jpg"
        altText="FairLane Background"
        title="FairLane"
        subtitle="Experience the Radiance of Nature's Gift"
      />
      <FullPageCenteredText
        content="At LMEL, we believe that buildings should be more than just structures; they should be harmonious with their surroundings, promoting a healthy and balanced ecosystem. Our team of skilled architects, engineers, and designers is driven by the passion for creating sustainable solutions that optimize energy efficiency, reduce waste and minimize environmental impact. From residential complexes to commercial buildings and beyond, we apply our expertise to every project, ensuring that sustainability is at the core of every design." // Replace with your actual content
      />
    </>
  );
}
