import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Components/UI/Button";
import RatingStars from "../Components/UI/RatingStars";

export default function FoodItem() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63a72eac59fd83b1bb4054c8.mockapi.io/menu-foodz/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <section className="food">
      <div className="food__container">
        <Link to="/menu" className="food__back">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.20711 0.792893C5.59763 1.18342 5.59763 1.81658 5.20711 2.20711L2.41421 5L5.20711 7.79289C5.59763 8.18342 5.59763 8.81658 5.20711 9.20711C4.81658 9.59763 4.18342 9.59763 3.79289 9.20711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L3.79289 0.792893C4.18342 0.402369 4.81658 0.402369 5.20711 0.792893Z"
            />
          </svg>
          <h4>Go Back</h4>
        </Link>

        <div className="food__body">
          <div className="food__img">
            <img src={product.img} alt="" />
          </div>
          <div className="food__content">
            <h3 className="food__suptitle">Best Seller</h3>
            <h2 className="food__title">{product.title}</h2>
            <div className="food__price price">${product.price}</div>
            <div className="food__about">
              <div className="food__reviews">
                <RatingStars />
                <div className="reviews-offers__count food-reviews__count">
                  {product.reviews} Reviews
                </div>
              </div>
              <Link to="" className="food__link">
                View All
              </Link>
            </div>

            <div className="food__info">
              <div className="food__desc food-desc">
                <p className="food-desc__title title-food">Description:</p>
                <p className="food-desc__text">
                  Yangnyeom chicken (Korean: 양념치킨) is a variety of Korean
                  fried chicken seasoned with a sweet and spicy sauce of
                  gochujang, garlic, sugar, and other spices. It is often eaten
                  as anju, food consumed while drinking, in South Korea.
                </p>
              </div>
              <div className="food__structure structure__food">
                <h3 className="structure__food__title title-food">
                  Adjust the flavor:
                </h3>
                <ul className="structure-food__item">
                  {product.composition?.map((item) => (
                    <li className="food__comp">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="food__preferences preferences-food">
                <h3 className="preferences-food title-food">Note:</h3>
                <textarea placeholder="More spicy, more sauce, ..."></textarea>
              </div>
            </div>
            <Button children={"order now"} size={"NormalBtn"} />
          </div>
        </div>
      </div>
    </section>
  );
}
