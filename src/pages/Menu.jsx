import React, { useEffect, useState } from "react";
import tabIcon from "../img/menu/tab-icon.png";

import Button from "../Components/UI/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { SkeletonMenu } from "../Components/Skeleton";
import RatingStars from "../Components/UI/RatingStars";
const tabs = [
  { title: "Korean Food", img: tabIcon },
  { title: "Vietnam Food", img: tabIcon },
  { title: "ThaiLand Food", img: tabIcon },
];
export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  const [foodz, setFoodz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://63a72eac59fd83b1bb4054c8.mockapi.io/menu-foodz")
      .then((res) => {
        setFoodz(res.data);
        setIsLoading(false);
      });
  }, []);
  const activateTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="meal">
      <div className="meal__container">
        <div className="meal__header header-block">
          <div className="header-block__title">
            Get <span>special</span> Meal
          </div>
          <div className="header-block__text">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </div>
        </div>
        <ul className="meal-tabs">
          {tabs.map((tab, index) => (
            <li key={tab.title}>
              <button
                onClick={() => activateTab(index)}
                className={`meal-tabs__button ${
                  index === activeTab ? "active" : ""
                }`}
                type="button"
              >
                <img src={tab.img} alt="tab-icon" />
                <span>{tab.title}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="meal__body">
          {isLoading
            ? [...Array(6)].map((_, i) => <SkeletonMenu key={i} />)
            : foodz.map((food) => (
                <div key={food.id} className="meal__column">
                  <Link to={`${food.id}`} className="meal__item item-meal">
                    <div className="item-meal__img">
                      <img src={food.img} alt={food.title} />
                    </div>
                    <div className="item-meal__desc">
                      <div className="item-meal__name">{food.title}</div>
                      <div className="item-meal__reviews reviews-offers">
                        <RatingStars />
                        <div className="reviews-offers__count">
                          {food.reviews} Reviews
                        </div>
                      </div>

                      <div className="item-meal__price">
                        <div className="item-meal__number price">
                          ${food.price}
                        </div>
                        <Button children={"order now"} size={"SmallerBtn"} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
