import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JeonginLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isInputValue = id.includes('@') && pw.length >= 5;

  const goToMain = () => {
    navigate('/main');
  };

  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };

  return (
    <main className="login">
      <h1 className="westagram_login">Westagram</h1>
      <input
        onChange={saveUserId}
        value={id}
        id="LoginId"
        className="login_id"
        type="name"
        placeholder=" 전화번호,
        사용자이름 또는 이메일"
        required
      />
      <input
        onChange={saveUserPw}
        value={pw}
        id="LoginPw"
        className="login_pw"
        type="password"
        placeholder="
        비밀번호"
        required
      />
      <button
        id="LoginBtn"
        className={isInputValue ? 'buttonLoginAble' : 'buttonLoginDisable'}
        disabled={isInputValue ? false : true}
        onClick={goToMain}
      >
        로그인
      </button>
      <a
        className="forgot_pw"
        href="https://www.instagram.com/accounts/password/reset/"
      >
        비밀번호를 잊으셨나요?
      </a>
    </main>
  );
};

export default JeonginLogin;
