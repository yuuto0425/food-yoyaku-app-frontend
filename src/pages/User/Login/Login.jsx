import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="userLogin">
      <div className="userLoginContainer sm:flex-col lg:flex-row">
        <div className="userLoginLeft sm:w-full">
          <p className="stateTitle">ログイン</p>
          <h1 className="userLoginTitle">みんなの予約注文アプリ</h1>
          <p className="userLoginMessage">サクッと注文みんなハッピー</p>
        </div>
        <div className="userLoginRight sm:w-full sm:mt-3">
          <form className="userLoginForm" noValidate>
            <dl className="userLoginFormDl">
              <div className="userLoginFormRow">
                <dt className="userLoginFormDt">
                  <label htmlFor="email">メールアドレス</label>
                </dt>
                <dd className="userLoginFormDd">
                  <input
                    id="email"
                    type="email"
                    placeholder="メールアドレスを入力しください。"
                    value=""
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
                    placeholder="パスワードを入力してください。"
                    value=""
                  />
                </dd>
              </div>
              <button className="formSubmit" type="submit">ログイン</button>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
