import "@/app/assets/sass/info.scss";

export default function Info({ lang }) {
  return (
    <div className="info">
      <div className="header-title">
        <div className="title">
          <p>{lang.contact.infoContact}</p>
        </div>
        <div className="contact">
          <p>
            Phone:{" "}
            <a target="_blank" href="tel: 0889942896">
              0889942896
            </a>
          </p>
          <p>
            Zalo:{" "}
            <a target="_blank" href="https://zalo.me">
              https://zalo.me
            </a>
          </p>
          <p>
            Email:{" "}
            <a target="_blank" href="mailto: cuonggold2408@gmail.com">
              cuonggold2408@gmail.com
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100024551161214"
            >
              https://www.facebook.com/profile.php?id=100024551161214
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="my-project">
        <div className="title">
          <h3>{lang.projects.infoProject}</h3>
        </div>
        <div className="info-project">
          <div className="project">
            <h4>Project Mindmap</h4>
            <p>{lang.mindmap.p1}</p>
            <p>{lang.mindmap.p2}</p>
            <div className="link-demo">
              <div className="demo">
                <a href="https://mindmap-steel.vercel.app/" target="_blank">
                  Demo
                </a>
                <p className="show-demo">https://mindmap-steel.vercel.app/</p>
              </div>
              <div className="code">
                <a
                  href="https://github.com/cuonggold2408/mindmap-project"
                  target="_blank"
                >
                  Code
                </a>
                <p className="show-code">
                  https://github.com/cuonggold2408/mindmap-project
                </p>
              </div>
            </div>
            <hr />
            <p style={{ marginTop: "16px" }}>
              <b>Updating...</b>
            </p>
          </div>
        </div>
        <div className="source-project">
          <a href="https://github.com/cuonggold2408" target="_blank">
            https://github.com/cuonggold2408
          </a>
        </div>
      </div>
      <div className="my-hobby">
        <div className="title">
          <h3>{lang.myHobby.title}</h3>
        </div>
        <ul className="list-hobby">
          <li>{lang.myHobby.li1}</li>
          <li>{lang.myHobby.li2}</li>
          <li>{lang.myHobby.li3}</li>
        </ul>
      </div>
      <div className="footer">
        <p>© 2023 Nguyễn Quang Cường - Devhogquao</p>
      </div>
    </div>
  );
}
