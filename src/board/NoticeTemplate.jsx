import "../styles/board/NoticeTemplate.scss";
import { Link, useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import NoticeList from "./NoticeList";
import NoticeBoard from "./NoticeBoard";

function NoticeTemplate({ children }) {
  return (
    <>
      <Topbar />
      <div className="NoticeTemplate">
        <div className="app-title">공지사항</div>
        <div className="content">{children}</div>
      </div>

      <section className="Notice-Template-btn">
        <Link to={`/NoticePost`}>
          <button className="btn">공지사항 작성</button>
        </Link>

        <Link to={`/`}>
          <button className="btn">돌아가기</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default NoticeTemplate;
