import { DesignIcon, EyesIcon, UIIcon, WebIcon } from "@/public/SvgsIcons";

const services: {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}[] = [
  {
    icon: <DesignIcon />,
    title: "UI/UX Design",
    description:
      "Promote your business to the masses and build a strong reputation in the market with our digital branding services.",
    link: "#",
  },
  {
    icon: <WebIcon />,
    title: "Web Development",
    description:
      "Promote your business to the masses and build a strong reputation in the market with our digital branding services.",
    link: "#",
  },
  {
    icon: <EyesIcon />,
    title: "UI/UX Design",
    description:
      "Promote your business to the masses and build a strong reputation in the market with our digital branding services.",
    link: "#",
  },
  {
    icon: <UIIcon />,
    title: "Email Marketing",
    description:
      "Entice customers and prospects to take specific actions using personalised messaging that promotes your brand.",
    link: "#",
  },
];

export default services;
