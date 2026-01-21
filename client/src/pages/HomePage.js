import React from "react";
import Layout from "../components/Layouts/Layout";
// import { useAuth } from "../Context/auth";
import { useAuth } from "../Context/auth";
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers"}>
      <h1>HomePage</h1>
      <pre> {JSON.stringify(auth, null, 4)} </pre>
    </Layout>
  );
};

export default Homepage;
