import { Fragment } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Home({ lang }) {
  return (
    <Fragment>
      <Header lang={lang} />
      <Main lang={lang} />
    </Fragment>
  );
}
