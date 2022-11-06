import app from "../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Navbar from "../../../compornents/parts/Navbar";
import "./AdminDashboard.css";
import { useState } from "react";
import { addProducts } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AdminDashboard = () => {
  const [productImage, setProductImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + productImage.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, productImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          //この中でapiを叩く
          const product = { ...inputs, img: downloadURL };
          console.log(product)
          addProducts(dispatch,product)
          console.log("成功しました。");
        });
      }
    );
  };
  return (
    <div className="adminDashboardPage">
      <Navbar type="admin" />
      <div className="adminDashboardPageContent">
        <h2 className="adminTitle">管理者ダッシュボード</h2>
        <div className="adminDashboardPageWrapper">
          <form onSubmit={handleSubmit} className="adminDashboardForm">
            <dl className="formDl">
              <div className="formRow">
                <dt className="formDt">
                  <label htmlFor="productName">商品名</label>
                </dt>
                <dd className="formDd">
                  <input
                    type="text"
                    id="productName"
                    placeholder="商品の名前を入力してください"
                    name="productName"
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <div className="formRow">
                <dt className="formDt">
                  <label htmlFor="productPrice">値段</label>
                </dt>
                <dd className="formDd">
                  <input
                    type="number"
                    id="productPrice"
                    placeholder="商品の値段を入力してください"
                    name="price"
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <div className="formRow">
                <dt className="formDt">
                  <label htmlFor="productDisc">商品の説明</label>
                </dt>
                <dd className="formDd">
                  <textarea
                    name="desc"
                    id="productDisc"
                    placeholder="商品の説明を入力してください。"
                    onChange={handleChange}
                  ></textarea>
                </dd>
              </div>
              <div className="formRow">
                <dt className="formDt">
                  <label htmlFor="productFile">商品の画像</label>
                </dt>
                <dd className="formDd">
                  <input
                    type="file"
                    name=""
                    id="productFile"
                    onChange={(e) => setProductImage(e.target.files[0])}
                  />
                </dd>
              </div>
            </dl>
            <button type="submit">送信</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
