import Image from "next/image";
import avatar from "@/app/assets/images/avatar.png";
import "@/app/assets/sass/skills.scss";

export default function Skills({ lang }) {
  return (
    <div className="skills">
      <figure className="figure">
        <div className="image-shadow">
          <Image width={277} height={277} src={avatar} alt="avatar" />
        </div>
        <figcaption
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Front-end developer
        </figcaption>
      </figure>
      <div className="show-skills">
        <div className="my-skill">
          <h3>{lang.mySkill.title}</h3>
          <p>
            <b>{lang.mySkill.work}: </b>
            <span>
              HTML, CSS, SCSS, JS, ReactJS, NextJS, NodeJS, ExpressJS,...
            </span>
          </p>
          <hr />
          <p>
            <b>{lang.mySkill.otherSkill}: </b>
            <span>{lang.infoOtherSkill.p}</span>
          </p>
        </div>
        <div className="history">
          <h3>{lang.history.title}</h3>

          <p>
            <b>2015-2018: </b>
            <span>{lang.history.about1}</span>
          </p>
          <hr />
          <p>
            <b>2019-2021: </b>
            <span>{lang.history.about2}</span>
          </p>
          <hr />
          <p>
            <b>2022-2026: </b>
            <span>{lang.history.about3}</span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
