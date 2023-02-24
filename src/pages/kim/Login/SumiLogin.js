import React, { useState } from 'react';
import './SumiLogin.scss';

const SumiLogin = () => {
  const [input, setInput] = useState('');

  const saveUserId = e => {
    setInput(e.target.value);
  };

  const saveUserPw = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
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
        >
          <fieldset>
            <legend className="screen_out">로그인</legend>
            <input
              type="text"
              name="email"
              className="inp_user"
              placeholder="전화번호, 사용자이름 또는 이메일"
              title="전화번호, 사용자이름 또는 이메일"
              onChange={saveUserId}
            />
            <input
              type="password"
              name="pw"
              className="inp_psassword"
              placeholder="비밀번호"
              title="비밀번호"
              onChange={saveUserPw}
            />
            <button type="submit" className="btn_login" disabled>
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
