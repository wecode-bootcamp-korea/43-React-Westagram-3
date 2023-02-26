import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="login">
      <h2 className="screen_out">인스타그램</h2>
      <div className="box_login">
        <strong className="tit_logo">Westagram</strong>
        <form
          method="post"
          action="#none"
          className="login_form"
          onSubmit={onSubmit}
          onKeyUp={saveAccount}
        >
          <fieldset>
            <legend className="screen_out">로그인</legend>
            <input
              type="text"
              name="email"
              className="inp_user"
              placeholder="전화번호, 사용자이름 또는 이메일"
              title="전화번호, 사용자이름 또는 이메일"
              onChange={saveUserEmail}
            />
            <input
              type="password"
              name="pw"
              className="inp_psassword"
              placeholder="비밀번호"
              title="비밀번호"
              onChange={saveUserPw}
            />
            {inputEmail.indexOf('@') > -1 && inputPw.length > 5 ? (
              ''
            ) : (
              <p className="desc_error">
                올바른 이메일 주소와 비밀번호를 입력해주세요.
              </p>
            )}
            <button
              type="submit"
              className="btn_login"
              disabled={isDisabled}
              onClick={goToMain}
            >
              로그인
            </button>
          </fieldset>
        </form>
        <a href="#none" className="link_psassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};
export default SumiLogin;
