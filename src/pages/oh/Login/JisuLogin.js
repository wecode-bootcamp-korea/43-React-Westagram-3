import React, { useState } from 'react';
import './JisuLogin.scss';
import { useNavigate } from 'react-router-dom';

const JisuLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/jisu-Main');
  };
  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };
  return (
    <div className="login">
      <div className="content">
        <div className="content_head">
          <span>westagram</span>
        </div>

        <div className="content_center">
          <div className="center_body">
            <input
              className="center_id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
            />
            <input
              className="center_pw"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
            />
          </div>
          <button className="center_login" onClick={goToMain}>
            로그인
          </button>
        </div>

        <div className="content_foot">
          <a href="#none">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};
export default JisuLogin;
