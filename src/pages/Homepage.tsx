import { useEffect } from "react";
import Aboutcompany from "../components/Aboutcompany";
import Acheivements from "../components/Acheivements";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Funfact from "../components/Funfact";
import Homebanner from "../components/Homebanner";
import Horizontalloop from "../components/Horizontalloop";
import Layout from "../components/Layout";
import Marquesection from "../components/Marquesection";
import Portfolio from "../components/Portfolio";
import ServicesComp from "../components/ServicesComp";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home - Creative Digital Agency HTML Template";
  }, []);
  return (
    <Layout>
      <Homebanner />
      <ServicesComp />
      <Aboutcompany />
      <Marquesection />
      <Portfolio />
      <Funfact />
      <Acheivements />
      <Horizontalloop />
      <Video />
      <Testimonial />
      <Contact />
      <Blogs />
    </Layout>
  );
};

export default Homepage;
