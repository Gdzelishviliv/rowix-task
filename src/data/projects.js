import Zenith from "../assets/Zenith.svg";
import ZenithImage from "../assets/ZenithImage.svg";
import A from "../assets/A.svg";
import B from "../assets/B.svg";
import C from "../assets/C.svg";
import D from "../assets/D.svg";
import E from "../assets/E.svg";
import Aura from "../assets/Aura.svg";
import AuraImage from "../assets/AuraImage.svg";
import I from "../assets/I.svg";
import F from "../assets/F.svg";
import G from "../assets/G.svg";
import H from "../assets/H.svg";

const projects = [
  {
    id: "zenith",
    icon: Zenith,
    title: "Zenith Fitness App",
    category: "Mobile App Development",
    time: "6 months",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    image: ZenithImage,
    techStack: [
      { name: "React Native" },
      { name: "Firebase" },
      { name: "Redux" },
      { name: "Rest API" },
      { name: "MongoDB" },
    ],
    members: [{ icn: A }, { icn: B }, { icn: C }, { icn: D }, { icn: E }],
  },
  {
    id: "aura",
    icon: Aura,
    title: "A-Aura Ecommerce",
    category: "Web Design & Development",
    time: "3 months",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    image: AuraImage,
    techStack: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    members: [{ icn: I }, { icn: F }, { icn: G }, { icn: H }, { icn: B }],
  },
];

export default projects;
