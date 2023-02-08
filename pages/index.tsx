import { FC } from "react";
import Heading from "../components/home-component/heading.component";
import IcanDo from "../components/home-component/about.component";
import Experiences from "../components/home-component/experience.component";
import Project from "../components/home-component/github-project.component";

const Home: FC = () => {
  return (
    <>
      <Heading />
      <IcanDo />
      <Experiences/>
      <Project/>
    </>
  );
};

export default Home;
