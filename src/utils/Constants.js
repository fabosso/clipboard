export const images = {
  "bg-header": {
    mobile: process.env.PUBLIC_URL + "/images/bg-header-mobile.png",
    desktop: process.env.PUBLIC_URL + "/images/bg-header-desktop.png",
  },
  icons: {
    blacklist: process.env.PUBLIC_URL + "/images/icon-blacklist.svg",
    preview: process.env.PUBLIC_URL + "/images/icon-preview.svg",
    text: process.env.PUBLIC_URL + "/images/icon-text.svg",
  },
  logo: process.env.PUBLIC_URL + "/images/logo.svg",
  computer: process.env.PUBLIC_URL + "/images/image-computer.png",
  devices: process.env.PUBLIC_URL + "/images/image-devices.png",
  logos: {
    google: process.env.PUBLIC_URL + "/images/logo-google.png",
    hp: process.env.PUBLIC_URL + "/images/logo-hp.png",
    ibm: process.env.PUBLIC_URL + "/images/logo-ibm.png",
    microsoft: process.env.PUBLIC_URL + "/images/logo-microsoft.png",
    vector: process.env.PUBLIC_URL + "/images/logo-vector-graphics.png",
  },
};

export const tools = [
  {
    src: "blacklist",
    header: "Create blacklists",
    description:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    src: "text",
    header: "Plain text snippets",
    description:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    src: "preview",
    header: "Sneak preview",
    description:
      "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

export const features = [
  {
    header: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    header: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    header: "Complete History",
    description:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

export const footerIcons = [
  {
    src: "facebook",
    hoverColor: "#3B5998",
  },
  {
    src: "twitter",
    hoverColor: "#00ACEE",
  },
  {
    src: "instagram",
    hoverColor: "#8a3ab9",
  },
];

export const footerLinks = [
  {
    text: "FAQs",
    url: "localhost:3000",
  },
  {
    text: "Contact Us",
    url: "localhost:3000",
  },
  {
    text: "Privacy Policy",
    url: "localhost:3000",
  },
  {
    text: "Press Kit",
    url: "localhost:3000",
  },
  {
    text: "Install Guide",
    url: "localhost:3000",
  },
];

export const logos = [
  {
    src: images.logos.google,
    alt: "google",
  },
  {
    src: images.logos.ibm,
    alt: "ibm",
  },
  {
    src: images.logos.microsoft,
    alt: "microsoft",
  },
  {
    src: images.logos.hp,
    alt: "hp",
  },
  {
    src: images.logos.vector,
    alt: "vector graphics",
  },
];
