import React, { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethods";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await userRequest.post("/auth/login", inputs);
      console.log(inputs);
      console.log(res);
    }catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="userLogin">
      <div className="userLoginContainer sm:flex-col lg:flex-row">
        <div className="userLoginLeft sm:w-full">
          <p className="stateTitle">ログイン</p>
          <h1 className="userLoginTitle">みんなの予約注文アプリ</h1>
          <p className="userLoginMessage">サクッと注文みんなハッピー</p>
        </div>
        <div className="userLoginRight sm:w-full sm:mt-3">
          <form className="userLoginForm" onSubmit={handleSubmit}>
            <dl className="userLoginFormDl">
              <div className="userLoginFormRow">
                <dt className="userLoginFormDt">
                  <label htmlFor="email">メールアドレス</label>
                </dt>
                <dd className="userLoginFormDd">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="メールアドレスを入力しください。"
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <div className="userLoginFormRow">
                <dt className="userLoginFormDt">
                  <label htmlFor="password">パスワード</label>
                </dt>
                <dd className="userLoginFormDd">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="パスワードを入力してください。"
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <button className="formSubmit" type="submit">
                ログイン
              </button>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
