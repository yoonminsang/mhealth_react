import React from "react";
import "./stylesheets/Main.css";
const Main = () => {
  return (
    <section className="main">
      <h4>추천 유튜브</h4>
      <div className="youtube">
        <a
          href="https://www.youtube.com/channel/UCdtRAcd3L_UpV4tMXCw63NQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>피지컬캘러리</b>
          <br></br>
          {/* <p>재활치료, 운동브이로그, 운동법 등을 예능과 섞어서 보여주는 유튜브이다.</p> */}
          <img
            src="https://i.ytimg.com/vi/IXR_PRvguMk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDRKJ5iHo8pV4DBE5Bgl_Jz9GsK7g"
            alt="피지컬랠러리"
          ></img>
        </a>
      </div>
      <div className="youtube">
        <a
          href="https://www.youtube.com/user/MrRagoona88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>말왕TV</b>
          <br></br>
          {/* <p>헬스뿐만 아니라 다양한 운동법을 소개하는 유튜브이다.</p> */}
          <img
            src="https://i.ytimg.com/vi/_F19dax_OJc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDxddC82XL7faZbRVcSJC-PIOLq1Q"
            alt="말왕TV"
          ></img>
        </a>
      </div>

      <div className="youtube">
        <a
          href="https://www.youtube.com/channel/UCuwyPNJScQ5luAV7b8juFfg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>강경원</b>
          <br></br>
          {/* <p>올림피아에 나갈정도로 국내에서 손꼽히는 보디빌더의 유튜브이다.</p> */}
          <img
            src="https://i.ytimg.com/vi/onwoGwzNLpU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCyFwNwB7FVKaKvbwN9oQdZLReWmg"
            alt="강경원"
          ></img>
        </a>
      </div>

      <div className="youtube">
        <a
          href="https://www.youtube.com/channel/UCMA7GmwOUuvSlM4XUhN2JFA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>설기관</b>
          <br></br>
          {/* <p>보디빌딩 국가대표이며 세계선수권 대회에서도 우승한 보디빌더의 </p> */}
          <img
            src="https://i.ytimg.com/vi/Bz2NNwbVYBw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGBTNw_6LgMyghp7oy0XQPRElM-Q"
            alt="설기관"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Main;
