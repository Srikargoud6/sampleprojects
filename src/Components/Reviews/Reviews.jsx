import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const data = [
  {
    name: "Alvin Caal",
    role: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae harum sed, voluptatum quia porro dolore quae, esse doloremque aut in reiciendis, deserunt consectetur. Quaerat reiciendis voluptate minus quos! Quo",
    img: "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Konstantin Mishchenko",
    role: "Full Stack Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur magnam ad nostrum a aliquam praesentium repellendus sint nihil consectetur deserunt totam iure repudiandae quod fugit, reprehenderit optio? Tempora, excepturi",
    img: "https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sebastian Stan",
    role: "Backend Engineer",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nisi! Quia in molestias aperiam ullam vero, autem quam beatae rem ducimus? Temporibus, voluptatem voluptatum. Libero atque magnam iusto doloremque rem",
    img: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jack Winbow",
    role: "DevOps Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque amet voluptatem quasi dignissimos nobis praesentium! Pariatur, modi odit ratione voluptatibus exercitationem quasi asperiores cumque repellat iure sed numquam quod",
    img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const checkNum = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  const randReview = () => {
    let randIndex = Math.floor(Math.random() * data.length);
    if (randIndex === index) {
      randIndex = index + 1;
    }
    console.log(randIndex);
    setIndex(checkNum(randIndex));
  };
  return (
    <main className="mainCont">
      <section className="reviewCard">
        <div>
          <img src={data[index].img} className="image" />
        </div>
        <div>
          <h2>{data[index].name}</h2>
        </div>
        <div>
          <h5 className="text-primary mb-4">{data[index].role}</h5>
        </div>
        <div>
          <p>{data[index].review}</p>
        </div>
        <div className="arrows">
          <div className="m-3">
            <MdArrowBackIos
              className="arrowsStyle"
              onClick={() => prevReview(index)}
            />
          </div>
          <div className="m-3">
            <MdArrowForwardIos
              className="arrowsStyle"
              onClick={() => nextReview(index)}
            />
          </div>
        </div>
        <div>
          <button className="button" onClick={() => randReview()}>
            Surprise Me
          </button>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
