import React, { useRef } from "react";

import img4 from "../../img/blogs/slider/01.png";
import img5 from "../../img/blogs/slider/02.png";
import img6 from "../../img/blogs/slider/03.png";
import img7 from "../../img/blogs/slider/04.png";
import img8 from "../../img/blogs/slider/05.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSwiper } from "swiper/react";

import Button from "./Button";
import { offers } from "../../helpers/api";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export function SwiperOffers() {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const swiper = useSwiper();

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // when window width is >= 480px
        1024: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1296: {
          spaceBetween: 84,
          slidesPerView: 3,
        },
      }}
      navigation={{
        // Both prevEl & nextEl are null at render so this does not work
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.navigation.prevEl = prevBtnRef.current;
        swiper.navigation.nextEl = nextBtnRef.current;
      }}
      loop
    >
      {offers.map((offer) => (
        <SwiperSlide key={offer.title} className="offers-slide">
          <Link to="" className="offers-slide__item">
            <div className="offers-slide__img">
              <img src={offer.img} alt="Tokpokki" />
            </div>
            <div className="offers-slide__desc">
              <div className="offers-slide__top">
                <div className="offers-slide__name">{offer.title}</div>
                <div className="offers-slide__reviews reviews-offers">
                  <RatingStars />
                  <div className="reviews-offers__count">
                    {offer.reviews} Reviews
                  </div>
                </div>
                <div className="offers-slide__structure structure-offers">
                  <span>{offers.text}</span>
                  <ul className="structure-offers__list">
                    {offer.struc.map((item, index) => (
                      <li key={index} className="structure-offers__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="offers-slide__price price-offers">
                <div className="price-offers__number price">${offer.price}</div>
                <Button children={"order now"} size={"SmallerBtn"} />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="slider__buttons buttons-offers">
        <button
          onClick={() => swiper.slidePrev()}
          ref={prevBtnRef}
          className="buttons-offers__button buttons-offers__prev"
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
            />
          </svg>
        </button>
        <button
          ref={nextBtnRef}
          className="buttons-offers__button buttons-offers__next"
          onClick={() => swiper.slideNext()}
        >
          1
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
            />
          </svg>
        </button>
      </div>
    </Swiper>
  );
}

export function SwiperBlogs() {
  return (
    <Swiper
      className="swiper-blogs"
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="blogs-slide">
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img4} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              12 of the Healthiest Foods to Eat for Breakfast
            </div>
            <div className="blogs-slide__text blog-text">
              Breakfast is a great way to start your day. While some people
              prefer to skip breakfast, others need a source of energy to get
              going.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_red"
                data-cat="red"
              >
                Breakfast
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img5} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Grilled Fish with Grilled Lemon Recipe for dinner!
            </div>
            <div className="blogs-slide__text blog-text">
              Place into grill pan, butter-side down. Spread with 1 teaspoon
              Butter with Canola Oil sprinkle remaining garlic.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_yellow"
                data-cat="yellow"
              >
                Grilled
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img6} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How to Make Vinaigrette (Plus 3 Essential Variations!)
            </div>
            <div className="blogs-slide__text blog-text">
              PWe’re going back to basics today with one of my most essential
              everyday recipes, vinaigrette!
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img7} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Why should we an eat apple every morning ?
            </div>
            <div className="blogs-slide__text blog-text">
              An Apple a Day Keeps the Doctor Away. Apples are an incredibly
              nutritious fruit that offers multiple health benefits.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img8} alt="Perfect Steak" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How To Cook Perfect Steak on the Stovetop in 3 Steps?
            </div>
            <div className="blogs-slide__text blog-text">
              Cooking a very good steak on the stovetop goes like this: Buy the
              best steak for pan-searing (boneless NY strip or rib-eye).
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide className="blogs-slide">
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img7} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Why should we an eat apple every morning ?
            </div>
            <div className="blogs-slide__text blog-text">
              An Apple a Day Keeps the Doctor Away. Apples are an incredibly
              nutritious fruit that offers multiple health benefits.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img8} alt="Perfect Steak" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How To Cook Perfect Steak on the Stovetop in 3 Steps?
            </div>
            <div className="blogs-slide__text blog-text">
              Cooking a very good steak on the stovetop goes like this: Buy the
              best steak for pan-searing (boneless NY strip or rib-eye).
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img4} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              12 of the Healthiest Foods to Eat for Breakfast
            </div>
            <div className="blogs-slide__text blog-text">
              Breakfast is a great way to start your day. While some people
              prefer to skip breakfast, others need a source of energy to get
              going.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_red"
                data-cat="red"
              >
                Breakfast
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img5} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Grilled Fish with Grilled Lemon Recipe for dinner!
            </div>
            <div className="blogs-slide__text blog-text">
              Place into grill pan, butter-side down. Spread with 1 teaspoon
              Butter with Canola Oil sprinkle remaining garlic.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_yellow"
                data-cat="yellow"
              >
                Grilled
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img6} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How to Make Vinaigrette (Plus 3 Essential Variations!)
            </div>
            <div className="blogs-slide__text blog-text">
              PWe’re going back to basics today with one of my most essential
              everyday recipes, vinaigrette!
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
            </div>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide className="blogs-slide">
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img6} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How to Make Vinaigrette (Plus 3 Essential Variations!)
            </div>
            <div className="blogs-slide__text blog-text">
              PWe’re going back to basics today with one of my most essential
              everyday recipes, vinaigrette!
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img8} alt="Perfect Steak" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How To Cook Perfect Steak on the Stovetop in 3 Steps?
            </div>
            <div className="blogs-slide__text blog-text">
              Cooking a very good steak on the stovetop goes like this: Buy the
              best steak for pan-searing (boneless NY strip or rib-eye).
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img4} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              12 of the Healthiest Foods to Eat for Breakfast
            </div>
            <div className="blogs-slide__text blog-text">
              Breakfast is a great way to start your day. While some people
              prefer to skip breakfast, others need a source of energy to get
              going.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_red"
                data-cat="red"
              >
                Breakfast
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img5} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Grilled Fish with Grilled Lemon Recipe for dinner!
            </div>
            <div className="blogs-slide__text blog-text">
              Place into grill pan, butter-side down. Spread with 1 teaspoon
              Butter with Canola Oil sprinkle remaining garlic.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_yellow"
                data-cat="yellow"
              >
                Grilled
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img7} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Why should we an eat apple every morning ?
            </div>
            <div className="blogs-slide__text blog-text">
              An Apple a Day Keeps the Doctor Away. Apples are an incredibly
              nutritious fruit that offers multiple health benefits.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide className="blogs-slide">
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img6} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How to Make Vinaigrette (Plus 3 Essential Variations!)
            </div>
            <div className="blogs-slide__text blog-text">
              PWe’re going back to basics today with one of my most essential
              everyday recipes, vinaigrette!
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img7} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Why should we an eat apple every morning ?
            </div>
            <div className="blogs-slide__text blog-text">
              An Apple a Day Keeps the Doctor Away. Apples are an incredibly
              nutritious fruit that offers multiple health benefits.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_orange"
                data-cat="orange"
              >
                Healthy
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img8} alt="Perfect Steak" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              How To Cook Perfect Steak on the Stovetop in 3 Steps?
            </div>
            <div className="blogs-slide__text blog-text">
              Cooking a very good steak on the stovetop goes like this: Buy the
              best steak for pan-searing (boneless NY strip or rib-eye).
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img4} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              12 of the Healthiest Foods to Eat for Breakfast
            </div>
            <div className="blogs-slide__text blog-text">
              Breakfast is a great way to start your day. While some people
              prefer to skip breakfast, others need a source of energy to get
              going.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_green"
                data-cat="green"
              >
                Food
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_red"
                data-cat="red"
              >
                Breakfast
              </a>
            </div>
          </div>
        </article>
        <article className="blogs-slide__item">
          <div className="blogs-slide__img">
            <img src={img5} alt="Healthiest Foods" />
          </div>
          <div className="blogs-slide__content">
            <div className="blogs-slide__date blog-date">Jun 20, 2022</div>
            <div className="blogs-slide__label blog-label">
              Grilled Fish with Grilled Lemon Recipe for dinner!
            </div>
            <div className="blogs-slide__text blog-text">
              Place into grill pan, butter-side down. Spread with 1 teaspoon
              Butter with Canola Oil sprinkle remaining garlic.
            </div>
            <div className="blogs-slide__filter blog-filter">
              <a
                href="#!"
                className="blog-filter__item item-filter_purple"
                data-cat="purple"
              >
                Cooking
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_yellow"
                data-cat="yellow"
              >
                Grilled
              </a>
              <a
                href="#!"
                className="blog-filter__item item-filter_menthol"
                data-cat="menthol"
              >
                Tips
              </a>
            </div>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>
  );
}
