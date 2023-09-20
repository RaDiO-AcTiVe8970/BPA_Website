const featuresData = [
  {
    title: "Tailored Solutions",
    description:
      "Crafting custom software solutions that perfectly align with your unique business needs.",
  },
  {
    title: "Expert Development Team",
    description:
      "Our experienced software developers excel in diverse programming languages, methodologies, and tools.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Providing continuous application upkeep, including bug fixes, updates, and technical assistance.",
  },
  {
    title: "Uncompromising Quality Assurance",
    description:
      "Dedicated QA professionals ensuring the utmost quality in software development.",
  },
  {
    title: "Agile Development Approach",
    description:
      "Harnessing Agile methodologies like Scrum for collaborative and flexible project management.",
  },
  {
    title: "Data Security & Privacy Focus",
    description:
      "Prioritizing data security measures to safeguard client information, compliant with GDPR and CCPA.",
  },
];

function Features() {
  return (
    <>
      <div className="grid place-items-center w-full bg-base-200">
        <div className="max-w-5xl py-24 content-center justify-center">
          <h1 className="text-4xl  text-center font-bold">Our Services</h1>
          <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {featuresData.map((feature, key) => {
              return (
                <div
                  key={key}
                  className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
                >
                  <div className="card-body mt-4 items-center text-center">
                    <h2 className="card-title">{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
