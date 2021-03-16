import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";

const IndexPage = () => {
  const bg = useColorModeValue("white", "#171923");
  return (
    <div>
      <Layout title="Home | LaDell Erby"> </Layout>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          background: ${bg};
        }
      `}</style>
    </div>
  );
};
export default IndexPage;
