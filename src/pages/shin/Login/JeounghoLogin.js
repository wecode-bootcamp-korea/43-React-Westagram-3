import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './JeounghoLogin.scss';

function JeounghoLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [validity, setValidity] = useState(true);

  const changeId = e => {
    setId(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const validation = validity => {
    return id.includes('@') && password.length >= 5
      ? setValidity(!validity)
      : setValidity(validity);
  };

  const movePage = () => {
    return (
      id.includes('@') &&
      password.length >= 5(alert('로그인 성공'), navigate('/jeoungho-Main'))
    );
  };

  return (
    <main className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>
          <span>W</span>es<span>t</span>agram
        </h1>
        <input
          className="inputArea"
          type="text"
          placeholder="이메일"
          value={id}
          onChange={changeId}
          onKeyUp={validation}
        />
        <input
          className="inputArea"
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          value={password}
          onChange={changePassword}
          onKeyUp={validation}
        />
        <button
          disabled={validity}
          className={validity ? 'defaultLogin' : 'changeLogin'}
          onClick={movePage}
        >
          로그인
        </button>
        <Link className="forgotPassword" to="#">
          비밀번호를 잊으셨나요?
        </Link>
      </form>
    </main>
  );
}

export default JeounghoLogin;
