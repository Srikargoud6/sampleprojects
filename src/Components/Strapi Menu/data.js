import React from "react";
import { CgCommunity } from "react-icons/cg";
import { TiInfoLarge } from "react-icons/ti";
import { TfiControlEject } from "react-icons/tfi";
import { SiXdadevelopers, SiStrapi } from "react-icons/si";
import { TbBusinessplan } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { FaDocker, FaGithub } from "react-icons/fa";

const sublinks = [
  {
    page: "Products",
    links: [
      {
        link: "Community",
        icon: <CgCommunity />,
        url: "/products",
      },
      {
        link: "Content",
        icon: <TiInfoLarge />,
        url: "/products",
      },
      {
        link: "Roles",
        icon: <TfiControlEject />,
        url: "/products",
      },
    ],
  },
  {
    page: "Solutions",
    links: [
      {
        link: "Developers",
        icon: <SiXdadevelopers />,
        url: "/products",
      },
      {
        link: "Business Teams",
        icon: <TbBusinessplan />,
        url: "/products",
      },
      {
        link: "Content Managers",
        icon: <GrUserManager />,
        url: "/products",
      },
      {
        link: "E-commerce",
        icon: <SiStrapi />,
        url: "/products",
      },
    ],
  },
  {
    page: "Resources",
    links: [
      {
        link: "Starters",
        icon: <FaDocker />,
        url: "/products",
      },
      {
        link: "Showcase",
        icon: <FaGithub />,
        url: "/products",
      },
    ],
  },
];

export default sublinks;
