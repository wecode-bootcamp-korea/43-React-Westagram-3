import React, { useEffect, useState } from 'react';
import Feed from '../../../components/Comment/Feed';
import building from '../../../assets/shin/KakaoTalk_20230216_100337086.jpg';
import './JeounghoMain.scss';

const JeounghoMain = () => {
  const [isminiMemu, setIsMiniMemu] = useState(false);
  const [idValueFind, setIdValueFind] = useState('');
  const [foundId, setFoundId] = useState([]);
  const [isIdArea, setIsIdArea] = useState('hidden');
  const [mainData, setMainData] = useState([]);
  const [mainData2, setMainData2] = useState([]);

  useEffect(() => {
    fetch('./data/mainData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setMainData(data)]);
  }, []);

  useEffect(() => {
    fetch('./data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => [setMainData2(data)]);
  }, []);

  const miniMenuToggle = () => {
    setIsMiniMemu(!isminiMemu);
  };

  const changeIdValueFind = e => {
    setIdValueFind(e.target.value);
  };

  const idReach = idValueFind => {
    return idValueFind
      ? (setFoundId(
          mainData2
            .filter(item => item.profile.includes(idValueFind))
            .map(item => item.profile)
        ),
        setIsIdArea(''))
      : (setFoundId([]), setIsIdArea('hidden'));
  };

  return (
    <div className="main">
      <nav>
        <div className="container">
          <img
            className="instagram_img"
            src="./images/shin/제목 없음.png"
            alt="instargram logo"
          />
          <div className="icon">
            <input
              className="search"
              type="text"
              placeholder="검색"
              value={idValueFind}
              onChange={changeIdValueFind}
              onKeyUp={() => idReach(idValueFind)}
            />
            <ul className={`searchIdArea${isIdArea}`}>
              {foundId.map(item => (
                <li key={item}>
                  <img src="./images/shin/default profile.png" alt="default" />
                  {item}
                </li>
              ))}
            </ul>
            <i className="bi bi-search" />
          </div>
          <div className="imgs">
            <img src="./images/shin/explore.png" alt="explore logo" />
            <img src="./images/shin/heart.png" alt="heart logo" />
            <img
              onClick={miniMenuToggle}
              src="./images/shin/profile.png"
              alt="profile logo"
            />
          </div>
        </div>
        <div className={isminiMemu ? 'menuBoxClicked ' : 'menuBox '}>
          <ul>
            {mainData.map(item => (
              <li key={item.id}>
                <i className={item.className} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="mainContainer">
        <div>
          {mainData2.map(list => (
            <Feed key={list.id} list={list} />
          ))}
        </div>
        <div className="subMain">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img src={building} alt="building" />
                <p>63_building</p>
              </div>
            </div>

            <div className="story">
              <div className="storyHeader">
                <p>스토리</p>
                <strong>모두 보기</strong>
              </div>
              {mainData2.map(item => (
                <div className="suggestion" key={item.id}>
                  <img src="./images/shin/default profile.png" alt="default" />
                  <p>{item.profile}</p>
                </div>
              ))}
            </div>

            <div className="recommendation">
              <div className="recommendationHeader">
                <p>회원님을 위한 추천</p>
                <strong>모두 보기</strong>
              </div>
              {mainData2.map(item => (
                <div className="suggestion" key={item.id}>
                  <img src="./images/shin/default profile.png" alt="default" />
                  <p>{item.profile}</p>
                </div>
              ))}
            </div>
            <div className="footer">
              {FOOTER.map(item => (
                <span key={item.id}>{item.text} • </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JeounghoMain;

const FOOTER = [
  { id: 1, text: '소개' },
  { id: 2, text: '도움말' },
  { id: 3, text: '홍보센터' },
  { id: 4, text: 'API' },
  { id: 5, text: '채용 정보' },
  { id: 6, text: '개인정보처리방침' },
  { id: 7, text: '약관' },
  { id: 8, text: '위치' },
  { id: 9, text: '인기계정' },
  { id: 10, text: '해시태그' },
  { id: 11, text: '언어' },
];
