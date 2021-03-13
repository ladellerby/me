import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | LaDell Erby">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      "Started with a git push, no we here!"
    </p>
  </Layout>
);

export default IndexPage;
