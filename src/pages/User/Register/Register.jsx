import React from "react";
import "./Register.css";
import "../../../styles/common/Auth.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerContainer sm:flex-col lg:flex-row">
        <div className="registerLeft sm:w-full">
          <p className="stateTitle">新規登録</p>
          <h1 className="registerTitle">みんなの予約注文アプリ</h1>
          <p className="registerMessage">サクッと注文みんなハッピー</p>
        </div>
        <div className="registerRight sm:w-full sm:mt-3">
          <form className="registerForm" noValidate>
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
                  />
                </dd>
              </div>
              <button className="formSubmit" type="submit">新規登録</button>
              <button className="formSubmit" type="submit">ログイン</button>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
