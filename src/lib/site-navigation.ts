export type NavGroup = {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
};

export const NAV_GROUPS: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "How It Works", href: "/how-it-works/" },
  {
    label: "Talents",
    href: "/talents/",
    items: [
      { label: "All Talents", href: "/talents/" },
      { label: "Actors", href: "/actors/" },
      { label: "Models", href: "/models/" },
      { label: "Child Artists", href: "/child-artists/" },
      { label: "Influencers", href: "/influencers/" },
      { label: "Dancers", href: "/dancers/" },
      { label: "Voice Artists", href: "/voice-artists/" },
    ],
  },
  {
    label: "Casting Calls",
    href: "/casting-calls/",
    items: [
      { label: "All Casting Calls", href: "/casting-calls/" },
      { label: "Bollywood Films", href: "/casting-calls/bollywood-films/" },
      { label: "TV Serials", href: "/casting-calls/tv-serials/" },
      { label: "OTT / Web Series", href: "/casting-calls/ott-web-series/" },
      { label: "Music Videos", href: "/casting-calls/music-videos/" },
      { label: "Print Ads", href: "/casting-calls/print-ads/" },
      { label: "TV Commercials", href: "/casting-calls/tv-commercials/" },
      { label: "Fashion Shows", href: "/casting-calls/fashion-shows/" },
    ],
  },
  {
    label: "Blog",
    href: "/blog/",
    items: [
      { label: "Blog Home", href: "/blog/" },
      { label: "Actors", href: "/blog/category/actors/" },
      { label: "Models", href: "/blog/category/models/" },
      { label: "Industry News", href: "/blog/category/industry-news/" },
    ],
  },
  { label: "Membership", href: "/membership/" },
  { label: "Contact", href: "/contact-us/" },
];

export const FOOTER_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Membership", href: "/membership/" },
      { label: "Success Stories", href: "/success-stories/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
  {
    title: "Talents",
    links: [
      { label: "All Talents", href: "/talents/" },
      { label: "Actors", href: "/actors/" },
      { label: "Models", href: "/models/" },
      { label: "Child Artists", href: "/child-artists/" },
      { label: "Influencers", href: "/influencers/" },
      { label: "Dancers", href: "/dancers/" },
      { label: "Voice Artists", href: "/voice-artists/" },
    ],
  },
  {
    title: "Casting",
    links: [
      { label: "Casting Calls", href: "/casting-calls/" },
      { label: "Bollywood Films", href: "/casting-calls/bollywood-films/" },
      { label: "TV Serials", href: "/casting-calls/tv-serials/" },
      { label: "OTT / Web Series", href: "/casting-calls/ott-web-series/" },
      { label: "Music Videos", href: "/casting-calls/music-videos/" },
      { label: "TV Commercials", href: "/casting-calls/tv-commercials/" },
      { label: "Fashion Shows", href: "/casting-calls/fashion-shows/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Actors", href: "/blog/category/actors/" },
      { label: "Models", href: "/blog/category/models/" },
      { label: "Industry News", href: "/blog/category/industry-news/" },
      { label: "Register", href: "/register/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
      { label: "Refund & Cancellation", href: "/refund-and-cancellation-policy/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];
