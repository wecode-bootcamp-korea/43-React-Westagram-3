/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../../../pages/yu/Main/JeonginMain.scss';

const JeonginMain = () => {
  const [contents, setContents] = useState('');
  const [comment, setComment] = useState([]);

  const handleChange = e => {
    setContents(e.target.value);
  };
  const handleClick = () => {
    const commentNew = { content: contents };
    setComment([...comment, commentNew]);
    setContents('');
  };
  const handleSubmit = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="nav_container">
          <img className="nav_logo" src="/images/yu/instagram.png" />
          <span className="nav_vertical_line" />
          <h1 className="westagram">Westagram</h1>
        </div>
        <div className="nav_searchbar">
          <input className="search" type="search" placeholder="검색" />
        </div>
        <div className="icons">
          <img className="icons explore" src="/images/yu/explore.png" />
          <img className="icons heart" src="/images/yu/heart.png" />
          <img className="icons profile" src="/images/yu/profile.png" />
        </div>
      </div>

      <div className="contents">
        <div className="feeds">
          <article>
            <div className="article-top">
              <img className="article_avatar" src="/images/yu/wecode.jpeg" />
              <h2>wecode_bootcamp</h2>
            </div>
            <img
              className="article_image"
              src="/images/yu/wecode_article.png"
            />
            <div className="article_bottom">
              <div className="button_bar">
                <div className="button_bar_left" />
                <div className="button_bar_right" />
              </div>
              <div className="contents_great">
                <img className="contents_avatar" src="/images/yu/person1.png" />
                <span>wecode_zzang님 외 4명이 좋아합니다.</span>
              </div>
              <span className="user_name">wecode_bootcamp</span>
              <span className="user_comment">
                "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서
                배우고 저는 총 5개 회사에서 오퍼를 받았습니다."
              </span>
              <span className="user_more">...더보기</span>
              <div className="user_time">54분전</div>
              <div className="add_user_comment">
                <ul>
                  {comment.map((ddd, idx) => {
                    return <li key={idx}>{ddd.content}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="comment">
              <input
                className="comment_text"
                type="text"
                placeholder="댓글 달기..."
                onChange={handleChange}
                value={contents}
                onKeyDown={e => handleSubmit(e)}
              />
              <button onClick={handleClick} className="comment_submit">
                게시
              </button>
            </div>
          </article>
        </div>

        <div className="side_bar">
          <div className="side_bar_top">
            <img className="side_bar_avatar" src="/images/yu/person1.png" />
            <div className="avatar_text">
              <h3 className="name">wecode_bootcamp</h3>
              <h3 className="nickname">WeCode - 위코드</h3>
            </div>
          </div>
          <div className="story">
            <div className="story_top">
              <h4 className="story_name">스토리</h4>
              <h5 className="story_more">모두 보기</h5>
            </div>
            <div className="story_list">
              <div className="story_person">
                <img className="avatar" src="/images/yu/person1.png" />
                <div>
                  <div className="avatar_id">wecode_zzang</div>
                  <div className="avatar_time">12분 전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommend_top">
              <h4 className="story_name">회원님을 위한 추천</h4>
              <h5 className="story_more">모두 보기</h5>
            </div>
            <div>
              <div className="recommend_person">
                <img className="avatar" src="/images/yu/person1.png" />
                <div className="follow_person">
                  <div>
                    <div className="person_id">wecode_zzang</div>
                    <div className="person_time">12분 전</div>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
              </div>
            </div>
          </div>

          <div className="company">
            <h6>
              Westagram정보 지원 홍보센터 API 채용정보 개인정보처리방침 약관
              디렉터리 프로필 해시태그 언어
            </h6>
            <h6>2019 WESTAGRAM</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeonginMain;
