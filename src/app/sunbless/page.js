import FullPageImageWithText from "../../components/FullPageImageWithText";
import FullPageCenteredText from "../../components/FullPageCenteredText";
import ChallengesSection from "../../components/ChallengesSection";
import WeGoBeyond from "../../components/WeGoBeyond";
import WideApplications from "../../components/WideApplications";
import FeaturesGrid from "../../components/FeaturesGrid";
import ClientSpotlights from "../../components/ClientSpotlights";

export default function SunBless() {
  const challenges = [
    {
      title: "Radiation",
      description:
        "Buildings gain heat from solar radiation, primarily from infrared radiation. The heat collected by a building's outer surfaces, such as its roof, walls, or windows, can raise the temperature inside the structure. This makes residents uncomfortable and strain the HVAC systems' cooling capacity.",
    },
    {
      title: "Heat Damage",
      description:
        "Direct sunlight causes building materials to absorb heat and expand. These materials go through numerous cycles of expansion and contraction due to the daily variations in temperature. The structural integrity of the building components may be compromised due to fractures, warping, or other deformation caused by this heat stress over time.",
    },
    {
      title: "High Energy Bills",
      description:
        "As the temperature outside rises, so does the need for cooling within structures. Air conditioning is more frequently required to maintain comfortable indoor temperatures as the temperature rises. Higher energy costs result from cooling systems working harder and using more energy to remove heat from inside spaces.",
    },
    {
      title: "Urban Heat Island",
      description:
        "Many surfaces in urban environments, such as asphalt roads, concrete buildings, and paved parking lots, absorb and hold heat. These surfaces collect a substantial quantity of solar light and turn it into heat because of their high thermal mass and low reflectance. There is also less greenery in urban regions.",
    },
  ];

  return (
    <>
      <FullPageImageWithText
        backgroundImage="/mainpagebg.jpg"
        altText="SunBless Background"
        title="SunBless"
        subtitle="Experience the Radiance of Nature's Gift"
      />
      <FullPageCenteredText content="Introducing SunBless, a cutting-edge coating solution that completely transforms your environments thanks to its unmatched performance and amazing features. Bid adieu to stifling summers and chilly winters. In order to successfully avoid heat absorption and drastically lower indoor temperatures, SunBless is precisely manufactured to reflect solar radiation. SunBless excels at thermal insulation, generating a warmer and cosier atmosphere in chilly climates. When these characteristics are combined, they result in significant energy savings of up to 65%. Without sacrificing style or aesthetics, enjoy warmer interiors in the winter and cooler interiors in the summer.SunBless, however, doesn't stop there. It provides a plethora of advantages that greatly improve its performance. Its waterproofing qualities give an extra layer of defence, ensuring the endurance and durability of your surfaces. High anti-corrosive qualities included into SunBless mean less maintenance and cost savings for you. Long-lasting performance is ensured by its excellent flexibility and stickiness, giving you assurance for years to come. Organic substances are used to create SunBless. It encourages a healthier interior atmosphere and lessens its influence on the environment because its VOC (Volatile Organic Compounds) emissions are practically nonexistent. Learn about SunBless's strength and embrace a coating option that not only offers outstanding performance but also adheres to your environmental principles. Experience the ideal fusion of cutting-edge features and environmental responsibility as you transform your home with SunBless." />
      <ChallengesSection
        title="Challenges Addressed By LMEL's SunBless"
        subtitle="SunBless does more than cool your space, it reduces costs and minimizes adverse impact on the environment."
        challenges={challenges}
      />
      <WeGoBeyond />
      <WideApplications />
      <FeaturesGrid
        title="What Sets SunBless Apart From The Rest"
        subtitle="Rest assured with our product's robust features, ensuring some savings and your well-being"
        features={[
          "/sunfea1.png",
          "/sunfea2.png",
          "/sunfea3.png",
          "/sunfea4.png",
          "/sunfea5.png",
          "/sunfea6.png",
        ]}
      />
      <ClientSpotlights />
    </>
  );
}
