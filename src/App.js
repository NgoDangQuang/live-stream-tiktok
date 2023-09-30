import {
  faClose,
  faCoins,
  faGifts,
  faShare,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.css";
import { dataMock } from "./mock_data";

function App() {
  const [count, setCount] = useState(1);

  const initData = [dataMock[0], dataMock[1], dataMock[2], dataMock[3]];
  const [data, setData] = useState(initData);

  const handleClick = () => {
    if (count < dataMock.length) {
      const newData = [
        dataMock[0 + count],
        dataMock[1 + count],
        dataMock[2 + count],
        dataMock[3 + count],
      ];
      setData(newData);
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="main" onClick={handleClick}>
        <div className="container">
          <div className="body">
            <div className="playground flex">
              <div className="user-info flex">
                <div className="avt" />
                <div className="name">
                  <h2>CLB Khởi Nghiệp</h2>
                  <h3>2.5K thích</h3>
                </div>
                <div className="follow">+ Follow</div>
              </div>
              <div className="viewer flex">
                <div className="view flex">
                  <FontAwesomeIcon icon={faUser} className="icon-user" />
                  <div className="user">508</div>
                </div>
                <FontAwesomeIcon icon={faClose} className="icon-close" />
              </div>
            </div>
            <div className="comment">
              {data?.map((dataItem, index) => {
                return (
                  <div className="cmt flex" key={index}>
                    <img src={dataItem.avt} alt="avt" className="avt-cmt" />
                    <div className="content">
                      <h2 className="cmt-name">
                        {dataItem.userName}
                        <span className="cmt-join">{dataItem.join}</span>
                      </h2>
                      <h3 className="cmt-content">{dataItem.content}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="footer flex">
              <div className="input-cmt">Thêm bình luận</div>
              <FontAwesomeIcon
                icon={faUserFriends}
                className="icon-user-friend"
              />
              <FontAwesomeIcon icon={faCoins} className="icon-coin" />
              <FontAwesomeIcon icon={faGifts} className="icon-gifts" />
              <FontAwesomeIcon icon={faShare} className="icon-share" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
