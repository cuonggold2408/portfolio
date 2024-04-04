import "@/app/assets/sass/main.scss";
import Skills from "../SideBar/Skills";
import Info from "../Infomation/Info";

export default function Main({ lang }) {
  return (
    <div className="container-main">
      <div className="title">
        <p>Cường Nguyễn</p>
        <p className="info-title">{lang.infoTitle.hoverTitle}</p>
      </div>
      <main style={{ display: "flex", gap: "30px" }}>
        <Skills lang={lang} />
        <Info lang={lang} />
      </main>
    </div>
  );
}
