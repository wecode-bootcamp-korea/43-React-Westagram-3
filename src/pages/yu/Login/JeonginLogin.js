import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/JeonginLogin.scss';

const JeonginLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isInputValue = id.includes('@') && pw.length >= 5;

  const goToMain = () => {
    navigate('/jeongin-Main');
  };
  const handleSubmit = e => {
    if (e.key === 'Enter') {
      navigate('/jeongin-Main');
    }
  };
  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };

  return (
    <main className="login">
      <div className="login_box">
        <h1 className="westagram_login">Westagram</h1>
        <input
          onChange={saveUserId}
          value={id}
          className="login_id"
          type="name"
          placeholder=" 전화번호,
        사용자이름 또는 이메일"
          required
        />
        <input
          onChange={saveUserPw}
          value={pw}
          onKeyDown={e => handleSubmit(e)}
          className="login_pw"
          type="password"
          placeholder="
        비밀번호"
          required
        />
        <button
          id="LoginBtn"
          className={isInputValue ? 'buttonLoginAble' : 'buttonLoginDisable'}
          disabled={!isInputValue}
          onClick={goToMain}
        >
          로그인
        </button>
        <div className="forgot_pw">비밀번호를 잊으셨나요?</div>
      </div>
    </main>
  );
};

export default JeonginLogin;
