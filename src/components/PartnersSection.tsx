const partners = [
  {
    name: "Kaspersky",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kaspersky_Lab_logo.svg/320px-Kaspersky_Lab_logo.svg.png",
  },
  {
    name: "Tenable",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tenable_logo.svg/320px-Tenable_logo.svg.png",
  },
  {
    name: "Forcepoint",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Forcepoint_logo.svg/320px-Forcepoint_logo.svg.png",
  },
  {
    name: "Action1",
    logo: "https://www.action1.com/img/logo-white.svg",
  },
  {
    name: "Ridge Security",
    logo: "https://ridgesecurity.ai/wp-content/uploads/2022/03/ridge-security-logo-white.svg",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-mono text-muted-foreground uppercase tracking-widest mb-10">
          Parceiros & Tecnologias
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-7 md:h-8 object-contain max-w-[120px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = p.name;
                  span.className = "text-sm font-semibold text-muted-foreground font-mono";
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
