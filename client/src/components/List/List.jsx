import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt babbal luga",
      isNew: true,
      oldPrice: 950,
      price: 500,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt babbal luga",
      isNew: false,
      oldPrice: 950,
      price: 500,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt babbal luga",
      isNew: true,
      oldPrice: 950,
      price: 500,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt babbal luga",
      isNew: false,
      oldPrice: 950,
      price: 500,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
