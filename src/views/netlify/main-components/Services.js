import React from "react";

const servicesData = [
  {
    iconSrc: require("../../../assets/icons/piggy-bank.png"),
    title: "Tiết kiệm",
    subTitle:
      "Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.",
  },
  {
    iconSrc: require("../../../assets/icons/chart-up.png"),
    title: "Chất Lượng",
    subTitle:
      "Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.",
  },
  {
    iconSrc: require("../../../assets/icons/wallet.png"),
    title: "Nhanh Chóng",
    subTitle:
      "Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.",
  },
  {
    iconSrc: require("../../../assets/icons/lock.png"),
    title: "Bảo Mật",
    subTitle:
      "Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.",
  },
];
function Services() {
  return (
    <div className="services-container">
      <div className="container">
        <div className="row">
          {servicesData.map((item) => {
            return (
              <div className="service-item col-3 text-center" key={item.title}>
                <div className="service-icon mb-3">
                  <img src={item.iconSrc} />
                </div>
                <div className="service-title mb-3">
                  <h3>{item.title}</h3>
                </div>
                <div className="service-subTitle">
                  <p>{item.subTitle}</p>
                </div>
                <a href="" className="mt-3">
                  Xem thêm
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
