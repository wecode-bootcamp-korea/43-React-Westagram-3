/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from 'react';
import JeonginComment from './JeonginComment';
import INFO_LIST from './jeongin_info';
import '../../../pages/yu/Main/JeonginMain.scss';

const JeonginMain = () => {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const [nextId, setNextId] = useState(0);
  const commentInput = useRef('');
  const [cat, setCat] = useState();

  const onChange = e => {
    setInput(e.target.value);
  };
  const submit = e => {
    e.preventDefault();
    const newComments = comments.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setComments(newComments);
    setInput('');
  };

  useEffect(() => {
    fetch('/data/feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCat(data);
      });
  }, []);

  const commentList = comments.map(comment => (
    <li className="commentUserBox" key={comment.id}>
      <div>
        <span className="commentUserId">wecode_zzang</span>
        {comment.text}
      </div>
      <button className="commentUserHeartButton">
        <img className="commentUserHeart" src="/images/yu/heart.png" />
      </button>
    </li>
  ));

  return (
    <div className="main">
      <div className="nav">
        <div className="navContainer">
          <img className="navLogo" src="/images/yu/instagram.png" />
          <span className="navVerticalLine" />
          <h1 className="westagram">Westagram</h1>
        </div>
        <div className="navSearchbar">
          <input className="search" type="search" placeholder="검색" />
        </div>
        <div className="icons">
          <img className="icons explore" src="/images/yu/explore.png" />
          <img className="icons heart" src="/images/yu/heart.png" />
          <img className="icons profile" src="/images/yu/profile.png" />
        </div>
      </div>

      <div className="articleBox">
        {cat &&
          cat.map((cat, key) => (
            <article key={key}>
              <div className="articleTop">
                <img className="articleAvatar" src={`${cat.article_image}`} />
                <h2>{cat.insta_id}</h2>
              </div>
              <img className="articleImage" src={`${cat.article_image}`} />
              <div className="articleBottom">
                <div className="buttonBar">
                  <div className="buttonBarLeft" />
                  <div className="buttonBarRight" />
                </div>
                <div className="contentsGreat">
                  <img
                    className="contentsAvatar"
                    src="/images/yu/person1.png"
                  />
                  <span>wecode_zzang님 외 4명이 좋아합니다.</span>
                </div>
                <span className="userName">{cat.insta_id}</span>
                <span className="userComment">{cat.article_comment}</span>
                <span className="userMore">...더보기</span>
                <div className="userTime">54분전</div>
              </div>
              <div className="addUserComment">
                <JeonginComment commentList={commentList} />
              </div>
              <form className="commentSubmit" onSubmit={submit}>
                <input
                  className="commentText"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={onChange}
                  ref={commentInput}
                  value={input}
                />
                <button className="commentSubmit">게시</button>
              </form>
            </article>
          ))}
      </div>

      <div className="aside">
        <div className="asideTop">
          <img className="asideAvatar" src="/images/yu/person1.png" />
          <div className="avatarText">
            <h3 className="name">wecode_bootcamp</h3>
            <h3 className="nickName">WeCode - 위코드</h3>
          </div>
        </div>
        <div className="story">
          <div className="storyTop">
            <h4 className="storyName">스토리</h4>
            <h5 className="storyMore">모두 보기</h5>
          </div>
          <div className="storyList">
            <div className="storyPerson">
              <img className="avatar" src="/images/yu/person1.png" />
              <div>
                <div className="avatarId">wecode_zzang</div>
                <div className="avatarTime">12분 전</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommend">
          <div className="recommendTop">
            <h4 className="storyName">회원님을 위한 추천</h4>
            <h5 className="storyMore">모두 보기</h5>
          </div>
          <div>
            <div className="recommendPerson">
              <img className="avatar" src="/images/yu/person1.png" />
              <div className="followPerson">
                <div>
                  <div className="personId">wecode_zzang</div>
                  <div className="personTime">12분 전</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
          </div>
        </div>

        <ul className="infoPolicy">
          {INFO_LIST.map(info => (
            <span key={info.id} className="infoPolicyList">
              {info.text}
            </span>
          ))}
          <div className="coperation">2019 WESTAGRAM</div>
        </ul>
      </div>
    </div>
  );
};

export default JeonginMain;
