import React from "react"
import { FaCode, FaReact } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr";
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "PSD TO HTML",
    text: `I can turn various design ideas into a beautiful, semantic and web-standard HTML5 / CSS3 template. I have experience and knowledge for responsive HTML conversion..`,
  },
  {
    id: 2,
    icon: <FaReact className="service-icon" />,
    title: "REACT JS DEVELOPMENT",
    text: `React.js is by far the most popular and in-demand JavaScript library that allows you to create productive and user-friendly interfaces.

    In the past few years, it has completely overtaken all other competitors in popularity, mainly due to their exceptional focus on user experience combined with ease of development.
    
    Today it is the most recognizable framework that allows not only developers, but mainly businessmen and marketers to achieve their lofty goals..`,
  },
  {
    id: 3,
    icon: <GrGatsbyjs className="service-icon" />,
    title: "GATSBY JS DEVELOPMENT",
    text: `Gatsby is a free, open source React-based framework that makes it easy to build incredibly fast websites and apps.

    It is the favorite static site generator for developers because it uses the latest technology stack and great documentation, and combines the best features of React and GraphQL..`,
  },
]

export default services
