// import "../styles/board/NoticeTemplate.scss";
import { Link, useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

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
          <button class="btn">공지사항 작성</button>
        </Link>

        <a href="javascript:history.back();">
          <button class="btn">돌아가기</button>
        </a>
      </section>
      <Footer />
    </>
  );
}

export default NoticeTemplate;
