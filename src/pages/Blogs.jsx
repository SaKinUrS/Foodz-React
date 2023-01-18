import React, { useEffect, useState } from "react";

import imgMain from "./../img/blogs/healthy-food.jpg";
import imgLazyMain from "./../img/blogs/healthy-food-lazy.jpg";

import imgLazySteak from "./../img/blogs/steak-lazy.jpg";

import axios from "axios";

import { SwiperBlogs } from "../Components/UI/Swiper";
import { allArticles, articles } from "../helpers/api";
import Search from "../Components/UI/Search";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const tags = [
  "Family",
  "Food",
  "Cooking",
  "Healthy",
  "Breakfast",
  "Tips",
  "Grilled",
  "Veterinarian",
  "Family",
  "Diet",
  "Veterinarian",
];

export default function Blogs() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [asides, setAsides] = useState([]);

  useEffect(() => {
    axios
      .get("https://63a72eac59fd83b1bb4054c8.mockapi.io/asian-foodz")
      .then((res) => setAsides(res.data));
  }, []);

  const onClickTag = (tag) => {
    setActiveTag(tag);
  };
  console.log();
  return (
    <section className="blogs">
      <div className="blogs__container">
        <div className="blogs__header header-block">
          <div className="header-block__title">Our blogs</div>
          <div className="header-block__text">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </div>
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        {searchValue ? (
          <ul className="blogs__list">
            {allArticles
              .filter(
                (item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  item.filter.find((tag) =>
                    tag.toLowerCase().includes(searchValue.toLowerCase())
                  )
              )
              .map((item) => (
                <li key={item.title}>
                  <a href="#!" className="searched-blogs">
                    <div className="searched-blogs__img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="searched-blogs__content">
                      <div className="searched-blogs__main">
                        <div className="searched-blogs__date">{item.date}</div>
                        <div className="searched-blogs__title">
                          {item.title}
                        </div>
                        <div className="searched-blogs__text">{item.text}</div>
                      </div>
                      <div className="aside-item__filter blog-filter">
                        {item.filter.map((item) => (
                          <a
                            href="#!"
                            className={`blog-filter__item item-filter_${
                              item === "Healthy"
                                ? "orange"
                                : item === "Tips"
                                ? "menthol"
                                : item === "Breakfast"
                                ? "red"
                                : item === "Display"
                                ? "green"
                                : item === "Food"
                                ? "green"
                                : item === "Grilled"
                                ? "yellow"
                                : item === "Veterinarian" || "Cooking"
                                ? "purple"
                                : ""
                            }`}
                            data-cat="orange"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        ) : (
          <>
            <div className="blogs__recent recent-blogs">
              <div className="main-blogs__title blog-title">
                Recent Blog Post
              </div>
              <div className="recent-blogs__body">
                <div className="recent-blogs__main main-blogs">
                  <article className="main-blogs__blog">
                    <div className="main-blogs__img">
                      <LazyLoadImage
                        src={imgMain}
                        alt="healthy-food"
                        placeholderSrc={imgLazyMain}
                        effect="blur"
                      />
                    </div>
                    <div className="main-blogs__content">
                      <div className="main-blogs__date blog-date">
                        Jun 20, 2022
                      </div>
                      <div className="main-blogs__label">
                        Healthy Food Choices for Your Family
                      </div>
                      <div className="main-blogs__text blog-text">
                        How can you ensure that your child is well nourished?
                        Here are some tips to keep in mind when planning and
                        preparing meals for your family.
                      </div>
                      <div className="main-blogs__filter blog-filter">
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
                          className="blog-filter__item item-filter_blue"
                          data-cat="blue"
                        >
                          Family
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="recent-blogs__secondary secondary-blogs">
                  {articles
                    .filter((article) =>
                      article.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((article) => (
                      <article
                        key={article.title}
                        className="secondary-blogs__blog"
                      >
                        <div className="secondary-blogs__img">
                          <LazyLoadImage
                            src={article.img}
                            alt="apple"
                            placeholderSrc={imgLazySteak}
                            effect="blur"
                          />
                        </div>
                        <div className="secondary-blogs__content">
                          <div className="secondary-blogs__date blog-date">
                            {article.date}
                          </div>
                          <div className="secondary-blogs__label blog-label">
                            {article.title}
                          </div>
                          <div className="secondary-blogs__text blog-text">
                            {article.text}
                          </div>
                          <div className="secondary-blogs__filter blog-filter">
                            {article.filter.map((cat) => (
                              <a
                                href="#!"
                                className={`blog-filter__item item-filter_${
                                  cat === "Healthy"
                                    ? "blue"
                                    : cat === "Tips"
                                    ? "menthol"
                                    : cat === "Cooking"
                                    ? "purple"
                                    : cat === "Display" || "Food"
                                    ? "green"
                                    : cat === "Breakfast"
                                    ? "red"
                                    : ""
                                }`}
                                data-cat="green"
                              >
                                {cat}
                              </a>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>

            <div className="blogs__all all-blogs">
              <div className="all-blogs__slider">
                <div className="all-blogs__title blog-title">All Blog post</div>
                <SwiperBlogs />
              </div>
              <aside className="all-blogs__aside aside-blogs">
                <div className="all-blogs__title blog-title">Most viewed</div>
                <div className="aside-blogs__body">
                  {asides
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((item) => (
                      <div
                        key={item.title}
                        className="aside-blogs__item aside-item"
                      >
                        <div className="aside-item__img">
                          <img src={item.img} alt="Healthiest Foods" />
                        </div>
                        <div className="aside-item__content">
                          <div className="aside-item__label">{item.title}</div>
                          <div className="aside-item__text blog-text">
                            {item.text}
                          </div>

                          <div className="aside-item__filter blog-filter">
                            {item.filter.map((item, index) => (
                              <a
                                href="#!"
                                key={index}
                                className={`blog-filter__item item-filter_${
                                  item === "Healthy"
                                    ? "orange"
                                    : item === "Breakfast"
                                    ? "red"
                                    : item === "Veterinarian"
                                    ? "purple"
                                    : item === "Tips"
                                    ? "menthol"
                                    : item === "Display" || "Food"
                                    ? "green"
                                    : ""
                                }`}
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </aside>
            </div>

            <div className="`blogs__category category`">
              <div className="category__header header-block">
                <div className="header-block__title">
                  Finding categories through words
                </div>
              </div>
              <div className="category__body">
                {tags.map((tag, index) => (
                  <a
                    onClick={() => onClickTag(tag)}
                    href="#!"
                    key={index}
                    className={`category__item item-filter_${
                      tag === "Family"
                        ? `blue ${activeTag === tag ? "_active" : ""}`
                        : tag === "Cooking"
                        ? `purple ${activeTag === tag ? "_active" : ""}`
                        : tag === "Healthy"
                        ? `orange ${activeTag === tag ? "_active" : ""}`
                        : tag === "Breakfast"
                        ? `red ${activeTag === tag ? "_active" : ""}`
                        : tag === "Tips"
                        ? `menthol ${activeTag === tag ? "_active" : ""}`
                        : tag === "Grilled"
                        ? `yellow ${activeTag === tag ? "_active" : ""}`
                        : tag === "Veterinarian"
                        ? `vine ${activeTag === tag ? "_active" : ""}`
                        : tag === "Diet" || "Food"
                        ? `green ${activeTag === tag ? "_active" : ""}`
                        : ""
                    } `}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
