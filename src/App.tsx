import { useState } from "react";
import "./App.css";

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
          <img
            src="public/theater-youtanazi.jpg"
            alt="theater"
            height={564}
            width={364}
          />
        </div>
      )}
    </div>
  );
};

export default App;
