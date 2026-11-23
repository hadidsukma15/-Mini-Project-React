import FeatureCard from './FeatureCard.jsx'

function FeatureSection({ features }) {
  return (
    <section
      className="mx-auto mt-0 max-w-[1096px] pt-[60px] max-[1160px]:mx-8 max-[860px]:mx-5 max-[860px]:pt-[42px]"
      id="about"
      aria-labelledby="features-title"
    >
      <header>
        <h2
          id="features-title"
          className="text-[clamp(24px,2.4vw,29px)] font-extrabold tracking-[-0.025em] text-[#15181c]"
        >
          Why Choose DibiEdu?
        </h2>
        <p className="mt-3 max-w-[580px] text-[13.5px] leading-[1.6] text-[#6d7279]">
          Our platform is designed to provide a seamless and effective learning
          experience, ensuring you gain the skills you need to succeed.
        </p>
      </header>

      <div className="mt-6 grid grid-cols-3 gap-[18px] max-[860px]:flex max-[860px]:snap-x max-[860px]:snap-mandatory max-[860px]:overflow-x-auto max-[860px]:pb-2 max-[560px]:flex-col max-[560px]:overflow-visible">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
