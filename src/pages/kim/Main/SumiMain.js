import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../../../components/CommentList/CommentList';
import './SumiMain.scss';

const SumiMain = () => {
  const [comment, setComment] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [text, setText] = useState([]);
  const [active, setActive] = useState(false);

  const handleOnChange = e => {
    setComment(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
    const newItem = { id: Math.random(), comment: comment };
    setText([...text, newItem]);
    e.target.reset();
  };
  const changeClass = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (isSubmit) {
      let userArr = text.map(item => item.id);
      console.log(userArr);
    }
  }, [isSubmit, text]);

  return (
    <div className="sumiMain">
      <nav className="navWesta">
        <div className="innerNav">
          <h1 className="titLogo">
            <Link to="#none" className="linkLogo">
              Westagram
            </Link>
          </h1>
          <div className="wrapSearch">
            <form method="post" action="#none">
              <fieldset>
                <legend className="screenOut">검색</legend>
                <input type="text" className="inpSearch" title="검색어 입력" />
              </fieldset>
            </form>
          </div>
          <div className="gnbMenu">
            <h2 className="screenOut">위스타그램 메인 메뉴</h2>
            <ul className="listUtil">
              <li>
                <Link to="#none" className="linkUtil">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    className="imgG"
                    alt="탐색"
                  />
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkUtil">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    className="imgG"
                    alt="알림"
                  />
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkUtil">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    className="imgG"
                    alt="프로필"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="contentWesta">
        <h2 className="screenOut">위스타그램 홈</h2>
        <article className="instaFeed">
          <h3 className="screenOut">피드</h3>
          <ul className="listInsta">
            <li>
              <Link to="#none" className="linkProfile">
                <span className="wrapThumb">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                </span>
                <strong className="titUser">
                  <span className="screenOut">작성자 : </span>wecode_bootcamp
                </strong>
                <span className="numDate">
                  <span className="screenOut">작성 일 : </span>2일
                </span>
              </Link>
              <span className="wrapFeedimg">
                <span
                  className="thumbFeed"
                  style={{
                    backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                  }}
                />
              </span>
              <div className="utilFeed">
                <button className="btnLike" type="button">
                  <img
                    src="images/kim/ico_like.svg"
                    className="imgG"
                    alt="좋아요"
                  />
                </button>
                <button className="btnComment" type="button">
                  <img
                    src="images/kim/ico_comment.svg"
                    className="imgG"
                    alt="댓글"
                  />
                </button>
                <button className="btnShare" type="button">
                  <img
                    src="images/kim/ico_share.svg"
                    className="imgG"
                    alt="공유하기"
                  />
                </button>
                <button className="btnBookmark" type="button">
                  <img
                    src="images/kim/ico_bookmark.svg"
                    className="imgG"
                    alt="즐겨찾기"
                  />
                </button>
              </div>
              <div className="feedUser">
                <Link to="#none" className="linkUser">
                  <span className="screenOut">작성자: </span>wecode_bootcamp
                </Link>
                <p className="descFeed">
                  <span className="screenOut">작성자 소개 : </span>위워크에서
                  진행한 베이킹 클래스
                </p>
                <button type="button" className="btnMore">
                  <span className="screenOut">내용</span>더보기
                </button>
              </div>
              <div className="groupComment">
                <Link to="#none" className="linkComment">
                  댓글 100개 모두 보기
                </Link>
                <div className="areaWritebox">
                  <form
                    action="#none"
                    method="post"
                    name="formComment"
                    className="formComment"
                    onSubmit={handleSubmit}
                  >
                    <input
                      aria-label="댓글 달기..."
                      className="inpComment"
                      placeholder="댓글 달기..."
                      onChange={handleOnChange}
                    />
                    <button type="submit" className="btnSubmit">
                      게시
                    </button>
                  </form>
                </div>
                {isSubmit && <strong className="screenOut">댓글 리스트</strong>}
                {isSubmit && (
                  <ul className="listComment">
                    <CommentList
                      text={text}
                      active={active}
                      changeClass={changeClass}
                    />
                  </ul>
                )}
              </div>
              <button type="button" className="btnOption">
                <svg
                  aria-label="옵션 더 보기"
                  className="_ab6-"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </button>
            </li>
          </ul>
        </article>
        <aside className="asideInsta">
          <Link to="#none" className="linkUser">
            <span className="wrapThumb">
              <span
                className="thumbUser"
                style={{
                  backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                }}
              />
            </span>
            <span className="infoUser">
              <strong className="titUser">
                <span className="screenOut">회원님 아이디 : </span>
                wecode_bootcamp
              </strong>
              <span className="txtInfo">
                <span className="screenOut">회원님 소개 : </span>Wecode - 위코드
              </span>
            </span>
          </Link>
          <div className="boxInfo">
            <strong className="titInfo">스토리</strong>
            <ul className="listInfo">
              <li>
                <Link to="#none" className="linkProfile">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                  <span className="infoUser">
                    <strong className="titUser">
                      <span className="screenOut">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="numDate">
                      <span className="screenOut">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkProfile">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                  <span className="infoUser">
                    <strong className="titUser">
                      <span className="screenOut">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="numDate">
                      <span className="screenOut">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkProfile">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                  <span className="infoUser">
                    <strong className="titUser">
                      <span className="screenOut">작성자 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="numDate">
                      <span className="screenOut">작성 시간 : </span>16분 전
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
            <Link to="#none" className="linkMore">
              모두보기
            </Link>
          </div>
          <div className="boxInfo">
            <strong className="titInfo">회원님을 위한 추천</strong>
            <ul className="listInfo">
              <li>
                <Link to="#none" className="linkProfile">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                  <span className="infoUser">
                    <strong className="titUser">
                      <span className="screenOut">추천친구 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="txtInfo">
                      <span className="screenOut">팔로우 상태 : </span>
                      wecode_bootcamp 외 112명이 팔로우 중입니다.
                    </span>
                  </span>
                </Link>
                <button className="btnFollow" type="button">
                  팔로우
                </button>
              </li>
              <li>
                <Link to="#none" className="linkProfile">
                  <span
                    className="thumbProfile"
                    style={{
                      backgroundImage: `url(images/kim/@thumb_960x640.jpg)`,
                    }}
                  />
                  <span className="infoUser">
                    <strong className="titUser">
                      <span className="screenOut">추천친구 : </span>
                      wecode_bootcamp
                    </strong>
                    <span className="txtInfo">
                      <span className="screenOut">팔로우 상태 : </span>
                      일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                    </span>
                  </span>
                </Link>
                <button className="btnFollow" type="button">
                  팔로우
                </button>
              </li>
            </ul>
            <Link to="#none" className="linkMore">
              모두보기
            </Link>
          </div>
          <footer className="instaFooter">
            <strong className="screenOut">위스타그램 서비스 정보</strong>
            <ul className="listCorp">
              <li>
                <Link to="#none" className="linkCorp">
                  소개
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  도움말
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  홍보 센터
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  채용 정보
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  약관
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  위치
                </Link>
              </li>
              <li>
                <Link to="#none" className="linkCorp">
                  언어
                </Link>
              </li>
            </ul>
            <p className="txtCopy">&#169; 2023 INSTAGRAM FROM META</p>
          </footer>
        </aside>
      </main>
    </div>
  );
};
export default SumiMain;
