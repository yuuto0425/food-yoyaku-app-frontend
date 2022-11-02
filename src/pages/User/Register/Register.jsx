import React, { useState } from "react";
import "./Register.css";
import "../../../styles/common/Auth.css";
import axios from "axios";
import { userRequest } from "../../../requestMethods";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [confirmPasswordVal, setConfirmPasswordVal] = useState("");
  const [telVal, setTelVal] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordVal !== confirmPasswordVal) {
      setErrors({
        password: "パスワードが間違っています。もう一度確認をしてください。",
      });
    } else {
      const user = {
        userName: nameVal,
        email: emailVal,
        password: passwordVal,
      };
      try {
        const data =  await userRequest.post("/auth/register", user);
        console.log(data);
        navigate("/userLogin");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerContainer sm:flex-col lg:flex-row">
        <div className="registerLeft sm:w-full">
          <p className="stateTitle">新規登録</p>
          <h1 className="registerTitle">みんなの予約注文アプリ</h1>
          <p className="registerMessage">サクッと注文みんなハッピー</p>
        </div>
        <div className="registerRight sm:w-full sm:mt-3">
          <form className="registerForm" onSubmit={(e) => handleSubmit(e)}>
            <dl className="registerFormDl">
              <div className="registerFormRow">
                <dt className="registerFormDt">
                  <label htmlFor="name">お名前</label>
                </dt>
                <dd className="registerFormDd">
                  <input
                    id="name"
                    type="text"
                    placeholder="お名前を入力してください"
                    value={nameVal}
                    onChange={(e) => setNameVal(e.target.value)}
                    required
                  />
                </dd>
              </div>
              <div className="registerFormRow">
                <dt className="registerFormDt">
                  <label htmlFor="email">メールアドレス</label>
                </dt>
                <dd className="registerFormDd">
                  <input
                    id="email"
                    type="email"
                    placeholder="メールアドレスを入力しください。"
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    required
                  />
                </dd>
              </div>
              <div className="registerFormRow">
                <dt className="registerFormDt">
                  <label htmlFor="password">パスワード</label>
                </dt>
                <dd className="registerFormDd">
                  <input
                    id="password"
                    type="password"
                    placeholder="パスワードを入力してください。"
                    value={passwordVal}
                    onChange={(e) => setPasswordVal(e.target.value)}
                    required
                  />
                </dd>
              </div>
              <div className="registerFormRow">
                <dt className="registerFormDt">
                  <label htmlFor="confirmPassword">確認用パスワード</label>
                </dt>
                <dd className="registerFormDd">
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="確認用のパスワードを入力してください。"
                    value={confirmPasswordVal}
                    onChange={(e) => setConfirmPasswordVal(e.target.value)}
                    required
                  />
                </dd>
              </div>
              <div className="registerFormRow">
                <dt className="registerFormDt">
                  <label htmlFor="tel">電話番号</label>
                </dt>
                <dd className="registerFormDd">
                  <input
                    id="tel"
                    type="tel"
                    placeholder="電話番号を入力してください"
                    value={telVal}
                    onChange={(e) => setTelVal(e.target.value)}
                  />
                </dd>
              </div>
              <button className="formSubmit" type="submit">
                新規登録
              </button>
              <button className="formSubmit">ログイン</button>
            </dl>
            <ul className="errorTexts">
              <li style={{ color: "red" }} className="errorText">
                {errors.password}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
