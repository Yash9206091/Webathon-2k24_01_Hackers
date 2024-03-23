import ChooseBox from "./ChooseBox";
import BitHand from "../images/chooseus/choose-main.png";
// import {
//   IconChecklist,
//   IconDeviceMobileMessage,
//   IconMoneybag,
//   IconPencilBolt,
//   IconStack,
//   IconWallet,
// } from "@tabler/icons-react";

function WhyUs() {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
              Learn <span>& Earn</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
              <ChooseBox
                  img={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://www.youtube.com/watch?v=IiKWd5umKsc"
                  linkImg={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />

                <ChooseBox
                  img={{
                    src: "https://www.istockphoto.com/video/imaginative-visual-business-handshake-with-computer-graphic-of-investment-data-gm1304328310-395515629",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://youtu.be/k-RTEIaYvAg?si=50Io-m7DTAqx-U2F"
                  linkImg={{
                    src: "data:image/jpeg;base64,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",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />

                  <ChooseBox
                  img={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://youtu.be/CBJ3_A5SMsc?si=OvUMl-IgBG8cLrDQ"
                  linkImg={{
                    src: "https://cdn3.vectorstock.com/i/1000x1000/82/97/money-business-financial-strategy-report-chart-bag-vector-32658297.jpg",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />
              </div>
              <div className="choose-container__content__2">
                <img src={BitHand} alt="hand_img" />
              </div>
              <div className="choose-container__content__3">
              <ChooseBox
                  img={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://youtu.be/7mo167ohvJw?si=iyNI_v1QYb8duBkV"
                  linkImg={{
                    src: "https://media.npr.org/assets/img/2023/05/15/money-g687b88d57_1920_wide-5590eb3e0f052b356f42bc5091e4753af74628c8-s1100-c50.jpg",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />
                <ChooseBox
                  img={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://youtu.be/MFCdA2vGVh4?si=6L4kuXfsLtIjCiq8"
                  linkImg={{
                    src: "https://cloudinary.hbs.edu/hbsit/image/upload/s--xd-ANfyW--/f_auto,c_fill,h_375,w_750,/v20200101/8FC6545D865C150668D5A2A02C13C732.jpg",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />
                <ChooseBox
                  img={{
                    src: "https://oakbusinessconsultant.com/wp-content/uploads/2023/01/What-is-Financial-Budget.png",
                    alt: "Image",
                    style: { width: "100px", height: "100px" },
                  }}
                  // title="Title"
                  // text="Some text"
                  link="https://youtu.be/CBJ3_A5SMsc?si=OvUMl-IgBG8cLrDQ"
                  linkImg={{
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VIdP_kymq40RNPOipw6aCTPuvMFmfZg6Xg&usqp=CAU",
                    alt: "Link Image",
                    style: { width: "300px", height: "150px", },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
