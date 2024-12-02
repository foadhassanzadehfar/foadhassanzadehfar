import { useState } from "react";
import "./App.css";
import theaterImage from "/public/theater-youtanazi.jpg";

const App = () => {
  const [index, setIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const array = [
    { id: 1, title: "در تئاتر شرکت نمی کنم" },
    { id: 2, title: "آیا مطمئنی؟" },
    { id: 3, title: "مگر رنگ سبز فسفری مورد علاقت نبود؟ چرا پس اونو نمیزنی" },
    { id: 4, title: "بازم مطمعنی؟ داری اشتباه می‌کنی" },
  ];

  const handleCancel = () => {
    setIndex((prevIndex) => (prevIndex + 1) % array.length);
  };

  const handleAccept = () => {
    setShowPhoto(true);
  };

  return (
    <>
      <div className="address">
        <h4 className="">
          آدرس: احمدآباد، پاستور 11 تماشاخانه مایان یا شمایل سابق سالن 1
        </h4>
      </div>
      <div className="container">
        {!showPhoto ? (
          <div>
            <button className="btn submit-btn" onClick={handleAccept}>
              در تئاتر شرکت می کنم
            </button>
            <button className="btn cancel-btn" onClick={handleCancel}>
              {array[index].title}
            </button>
          </div>
        ) : (
          <div className="photo">
            <img src={theaterImage} alt="theater" height={564} width={364} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
