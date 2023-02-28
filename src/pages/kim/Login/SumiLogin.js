import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SumiLogin.scss';

const SumiLogin = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInPutPw] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/sumi-Main');
  };

  const saveUserEmail = e => {
    setInputEmail(e.target.value);
  };

  const saveUserPw = e => {
    setInPutPw(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const saveAccount = () => {
    inputEmail.indexOf('@') > -1 && inputPw.length > 5
      ? setIsDisabled(false)
      : setIsDisabled(true);
  };

  return (
    <div className="sumiLogin">
      <h2 className="screenOut">인스타그램</h2>
      <div className="boxLogin">
        <strong className="titLogo">Westagram</strong>
        <form
          method="post"
          action="#none"
          className="loginForm"
          onSubmit={onSubmit}
          onKeyUp={saveAccount}
        >
          <fieldset>
            <legend className="screenOut">로그인</legend>
            <input
              type="text"
              name="email"
              className="inpUser"
              placeholder="전화번호, 사용자이름 또는 이메일"
              title="전화번호, 사용자이름 또는 이메일"
              onChange={saveUserEmail}
            />
            <input
              type="password"
              name="pw"
              className="inpPassword"
              placeholder="비밀번호"
              title="비밀번호"
              onChange={saveUserPw}
            />
            {inputEmail.indexOf('@') > -1 && inputPw.length > 5 ? (
              ''
            ) : (
              <p className="descError">
                올바른 이메일 주소와 비밀번호를 입력해주세요.
              </p>
            )}
            <button
              type="submit"
              className="btnLogin"
              disabled={isDisabled}
              onClick={goToMain}
            >
              로그인
            </button>
          </fieldset>
        </form>
        <Link to="#none" className="linkPassword">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
};
export default SumiLogin;
