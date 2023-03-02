import React, { useState } from 'react';
import './SumiLogin.scss';

const SumiLogin = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [disabled, setDisabled] = useState(true);

  const onEmail = e => {
    console.log(e.target.value);
    if (e.target.value === '') {
      console.log('값이 비어있음');
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const onPw = e => {
    if (e.target.value === '') {
      console.log('값이 비어있음');
      setDisabled(true);
    } else {
      setDisabled(false);
    }
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
              onChange={onEmail}
            />
            <input
              type="password"
              name="pw"
              className="inp_psassword"
              placeholder="비밀번호"
              title="비밀번호"
              onChange={onPw}
            />
            <button type="submit" className="btn_login" disabled={disabled}>
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
