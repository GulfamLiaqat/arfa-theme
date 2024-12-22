import { useEffect } from "react";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Creative Digital Agency HTML Template";
  }, []);
  return (
    <Layout>
      <BreadCrumbs pageName="Services" />
    </Layout>
  );
};

export default Services;
