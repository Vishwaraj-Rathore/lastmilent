import FullPageImageWithText from "../../components/FullPageImageWithText";
import FullPageCenteredText from "../../components/FullPageCenteredText";
import ChallengesSection from "../../components/ChallengesSection";
import FeaturesGrid from "../../components/FeaturesGrid";

export default function FairLane() {
  const challenges = [
    {
      title: "Environmental Consciousness",
      description:
        "Building in harmony with nature is no longer a choice but a responsibility. Our expertise lies in creating environmentally friendly buildings that minimise their ecological impact.",
    },
    {
      title: "Durability",
      description:
        "A building's strength and durability are fundamental to its longevity. By employing advanced construction techniques and selecting resilient materials, we ensure our buildings are built to last.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Energy consumption in buildings significantly contributes to greenhouse gas emissions. We integrate sustainable technologies such as solar panels, and energy-efficient HVAC systems to maximise energy savings without compromising comfort or functionality.",
    },
    {
      title: "Cost Savings",
      description:
        "Our eco-friendly designs and energy-efficient solutions reduce energy bills, lower maintenance costs, and increased property value. Clients can enjoy immediate and long-term financial advantages by investing in our services.",
    },
    {
      title: "Compliance",
      description:
        "As sustainability becomes increasingly regulated, buildings must meet or exceed green building standards and certifications. Our team stays current with the latest industry guidelines and can navigate the complexities of sustainability certifications.",
    },
  ];
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
      <ChallengesSection
        title="Challenges addressed by LMEL’s FairLane"
        subtitle="At LMEL, we understand the importance of constructing structures that meet today’s needs and safeguard the future for generations to come."
        challenges={challenges}
      />
      <FeaturesGrid
        title="We Go Beyond"
        subtitle="Get your investment’s worth, read on to know all that you can gain."
        features={[
          "/fairfea1.png",
          "/fairfea2.png",
          "/fairfea3.png",
          "/fairfea4.png",
          "/fairfea5.png",
          "/fairfea6.png",
        ]}
      />
    </>
  );
}
