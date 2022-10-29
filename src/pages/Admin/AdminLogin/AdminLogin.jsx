import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="login">
      <div className="loginContainer sm:flex-col lg:flex-row">
        <div className="loginLeft sm:w-full">
          <p className="stateTitle">管理者ログイン画面</p>
          <h1 className="loginTitle">みんなの予約注文アプリ</h1>
          <p className="loginMessage">サクッと注文みんなハッピー</p>
        </div>
        <div className="loginRight sm:w-full sm:mt-3">
          <form className="loginForm" noValidate>
            <dl className="loginFormDl">
              <div className="loginFormRow">
                <dt className="loginFormDt">
                  <label htmlFor="email">メールアドレス</label>
                </dt>
                <dd className="loginFormDd">
                  <input
                    id="email"
                    type="email"
                    placeholder="メールアドレスを入力しください。"
                    value=""
                  />
                </dd>
              </div>
              <div className="loginFormRow">
                <dt className="loginFormDt">
                  <label htmlFor="password">パスワード</label>
                </dt>
                <dd className="loginFormDd">
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

export default AdminLogin;
