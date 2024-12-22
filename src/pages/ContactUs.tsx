import { useEffect } from "react";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";
import Contact from "../components/Contact";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - Creative Digital Agency HTML Template";
  }, []);
  return (
    <Layout>
      <BreadCrumbs pageName="Contact Us" />
      <Contact />
    </Layout>
  );
};

export default ContactUs;
