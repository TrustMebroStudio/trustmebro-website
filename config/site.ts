export const siteConfig = {
  name: "Trust Me Bro",
  title: "Trust Me Bro | Official Game Site",
  description:
    "Official website for Trust Me Bro, a dark and stylish action experience from Trust Me Bro Studio.",
  domain: "trustmebrostudio.com",
  branding: {
    logo: "/assets/trust-me-bro-logo.png",
    logoAlt: "Trust Me Bro logo"
  },
  social: {
    youtube: "https://youtube.com/@trustmebrogame?si=6S_Nm023Hq4B12sn",
    instagram: "https://www.instagram.com/trustmebrostudio/",
    x: "https://x.com/RealTrustMeBro",
    discord: "https://discord.gg/aj9z6Hsd"
  },
  links: {
    steam: "#",
    trailer: "#",
    pressKit:
      "https://drive.google.com/drive/folders/1aGbOUKoM00LfYOby2bAuw7KIOrtN633V?usp=sharing"
  },
  seo: {
    ogImage: "/assets/main-capsule.png",
    ogImageAlt: "Trust Me Bro key visual"
  },
  emails: {
    public: {
      contact: "contact@trustmebrostudio.com",
      support: "support@trustmebrostudio.com"
    },
    destination: {
      contact: "trustmebrostudio@gmail.com",
      support: "trustmebro.support@gmail.com"
    }
  }
};

export type SiteConfig = typeof siteConfig;
