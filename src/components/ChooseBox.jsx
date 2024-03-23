import React from "react";

function ChooseBox({ img, title, text, link, linkImg }) {
  return (
    <div className="choose-box">
      <div className="choose-box__img">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={linkImg.src} alt={linkImg.alt} style={linkImg.style} />
          </a>
        ) : (
          <img src={img.src} alt={img.alt} style={img.style} />
        )}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

// export default ChooseBox;

export default ChooseBox;