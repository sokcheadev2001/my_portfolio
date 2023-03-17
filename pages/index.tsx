import Heading from "../components/home-component/heading.component";
import IcanDo from "../components/home-component/about.component";
import Experiences from "../components/home-component/experience.component";
import Project from "../components/home-component/github-project.component";
import { supabase } from "../libs/supabaseClient";
import { NextPage } from "next";
import { User } from "../types/User/user.type";

const Home: NextPage<{ user: User }> = ({ user }) => {
  if (!user) return <div>Loading...</div>;
  return (
    <>
      <Heading {...user} />
      <IcanDo />
      <Experiences />
      <Project />
    </>
  );
};

export async function getServerSideProps() {
  let { data } = await supabase
    .from("personalData")
    .select("title, name, description, position")
    .single();
  return {
    props: {
      user: data,
    },
  };
}

export default Home;
