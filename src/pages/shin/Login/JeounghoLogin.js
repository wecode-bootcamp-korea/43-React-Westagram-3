import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JeounghoLogin.scss';

function JeounghoLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [validity, setValidity] = useState(false);

  const changeId = e => {
    setId(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onKeyUp = validity => {
    return id.length > 0 && password.length > 0
      ? setValidity(validity)
      : setValidity(!validity);
  };

  const onClick = () => {
    if (id.length === 0) {
      alert('아이디를 입력하세요');
    } else if (id.length > 1 && password.length === 0) {
      alert('비밀번호를 입력하세요');
    } else if (id.length > 20 || !id.includes('@')) {
      alert('아이디 형식이 맞지 않습니다. 다시 입력하세요');
    } else if (id.length > 1 && password.length < 5) {
      alert('비밀번호는 5글자 이상입니다.');
    } else if (id === password) {
      alert('아이디와 비밀번호를 다르게 입력해주세요');
    } else {
      alert('로그인 성공');
      navigate('/jeoungho-Main');
    }
  };

  return (
    <main className="jeounghoLogin" onKeyUp={onKeyUp}>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>
          <span>W</span>es<span>t</span>agram
        </h1>
        <input
          id="email"
          type="text"
          placeholder="이메일"
          value={id}
          onChange={changeId}
        />
        <input
          id="pas"
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          value={password}
          onChange={changePassword}
        />
        <button
          className={validity ? 'changeLogin' : 'defaultLogin'}
          onClick={onClick}
        >
          로그인
        </button>
        <a href="#!">비밀번호를 잊으셨나요?</a>
      </form>
    </main>
  );
}

export default JeounghoLogin;
