import img2 from "./../img/blogs/apple.png";
import img3 from "./../img/blogs/steak.png";

import imgTokpokki from "../img/offers/Tokpokki.png";
import imgBbq from "../img/offers/bbq.png";
import imgKimchi from "../img/offers/kimchi.png";

export const articles = [
  {
    date: "Jun 19, 2022",
    title: "Why should we an eat apple every morning ?",
    filter: ["Food", "Healthy", "Tips"],
    img: img2,
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 14, 2022",
    filter: ["Cooking", "Tips"],
    title: "How To Cook Perfect Steak on the Stovetop in 8 Steps?",
    img: img3,
    text: "Cooking a very good steak on the stovetop goes like this: Buy the best steak for pan-searing (boneless NY strip or rib-eye).",
  },
];

export const allArticles = [
  {
    date: "Jun 19, 2022",
    title: "Why should we an eat apple every morning ?",
    filter: ["Food", "Healthy", "Tips"],
    img: "https://selecthealth.org/-/media/selecthealth/blogs/post/2022/08/apple_types_fb_sm.ashx?h=630&w=1200",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 14, 2022",
    filter: ["Cooking", "Tips"],
    title: "How To Cook Perfect Steak on the Stovetop in 3 Steps?",
    img: "https://samors.ru/wp-content/uploads/2020/10/Primer-pp-perekusa.jpg",
    text: "Cooking a very good steak on the stovetop goes like this: Buy the best steak for pan-searing (boneless NY strip or rib-eye).",
  },
  {
    date: "Jun 20, 2022",
    title: "12 of the Healthiest Foods to eat for breakfast of your kid",
    filter: ["Healthy", "Tips"],
    img: "https://media.greenmatters.com/brand-img/SoDPKsJSv/0x0/healthiest-food-in-the-world3-1615949205605.jpg",
    text: "Breakfast is a great way to start your day.While some people prefer to skip breakfast, others need a source of energy to get going.",
  },
  {
    date: "Feb 16, 2022",
    title: "12 Style-Focused Ways To Display Your Best Dishes",
    filter: ["Display"],
    img: "https://static.toiimg.com/photo/msid-66476758/66476758.jpg",
    text: "Breakfast is a great way to start your day.While some people prefer to skip breakfast, others need a source of energy to get going.",
  },
  {
    date: "Dec 9, 2022",
    title: "The Best Foods to Eat While Working Out to Lose Weight",
    filter: ["Food", "Breakfast"],
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/12/healthy-meal-prep.jpg?quality=82&strip=all",
    text: "Breakfast is a great way to start your day.While some people prefer to skip breakfast, others need a source of energy to get going.",
  },
  {
    date: "Jun 30, 2022",
    title: "How to Become a Veterinarian: Key Steps and Qualities",
    filter: ["Veterinarian", "Healthy"],
    img: "https://menunedeli.ru/wp-content/uploads/2019/08/PP-picca-500x350-1200x800.jpg",
    text: "Breakfast is a great way to start your day.While some people prefer to skip breakfast, others need a source of energy to get going.",
  },
  {
    date: "Jun 30, 2022",
    title: "12 of the Healthiest Foods to Eat for Breakfast",
    filter: ["Food", "Tips"],
    img: "https://static.onecms.io/wp-content/uploads/sites/44/2020/09/16/greek-salmon-bowl.jpeg",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 30, 2022",
    title: "Grilled Fish with Grilled Lemon Recipe for dinner!",
    filter: ["Cooking", "Grilled", "Tips"],
    img: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwOTc2MDA5NjE4NTU3/zesty_grilled_fish.jpg",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 30, 2022",
    title: "Why should we an eat apple every morning ? - This is why",
    filter: ["Healthy"],
    img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/red-apples.jpg",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 30, 2022",
    title: "How To Cook Perfect Steak on the Stovetop in 13 Steps?",
    filter: ["Food", "Healthy", "Tips"],
    img: "https://cookthestory.com/wp-content/uploads/2019/04/How-to-Cook-Steaks-Perfectly-1392x780-1440.jpg",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
  {
    date: "Jun 30, 2022",
    title: "How To Cook Perfect Steak on the Stovetop in 20 Steps?",
    filter: ["Cooking", "Tips"],
    img: "https://www.thespruceeats.com/thmb/CZkvpXexqm26DJn9iEnVcItIWPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg",
    text: "An Apple a Day Keeps the Doctor Away. Apples are an incredibly nutritious fruit that offers multiple health benefits.",
  },
];

export const navs = [
  { title: "Home", url: "/" },
  { title: "Menu", url: "/menu" },
  { title: "Blogs", url: "/blogs" },
  { title: "Contacts", url: "/contact" },
];

export const offers = [
  {
    title: "Gimbap",
    price: 12.99,
    text: "",
    reviews: 200,
    img: imgTokpokki,
    struc: ["Meat", "Spicy"],
  },
  {
    title: "Korea BBQ",
    price: 21.99,
    reviews: 150,
    text: "Excellent flavor for your preference with :",
    img: imgBbq,
    struc: ["Aromatic", "Spicy", "Honeyed sugary"],
  },
  {
    title: "Kimchi",
    price: 51.99,
    reviews: 680,
    text: "",
    img: imgKimchi,
    struc: ["Chicken", "Sous"],
  },
];

const dsfsdf = [
  {
    id: "1",
    img: "http://localhost:3000/static/media/jaja.e73114915c22954d2db5.png",
    title: "Jajangmyeon",
    price: "25.99",
    reviews: "100",
    composition: [
      "Sugar",
      "Strawberry jam",
      "Rice win vinegar",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Butter",
    ],
  },
  {
    id: "2",
    img: "http://localhost:3000/static/media/Tokpokki.99065a0bf5347466b0c9.png",
    title: "Gimbap",
    price: "10.99",
    reviews: "150",

    composition: ["Ketchup", "Strawberry jam", "Soy sauce", "Garlic", "Butter"],
  },
  {
    id: "3",
    img: "http://localhost:3000/static/media/kimchi.95c32f721caa85480e85.png",
    title: "Kimchi",
    price: "211.99",
    reviews: "123",
    composition: ["Meat", "Strawberry jam", "Garlic", "Butter"],
  },
  {
    id: "4",
    img: "http://localhost:3000/static/media/jjigae.7ba79bfd9f45730a40f5.png",
    title: "Kimchi Jjigae",
    price: "210.99",
    reviews: "320",
    composition: [
      "Chicken",
      "Spicy sous",
      "Strawberry jam",
      "Garlic",
      "Butter",
    ],
  },
  {
    id: "5",
    img: "http://localhost:3000/static/media/chicken.db932780dfb77e6d4587.png",
    title: "Yangnyeom Chicken",
    price: "50.99",
    reviews: "214",
    composition: ["Ice Cream", "Cheaps", "Strawberry jam", "Garlic", "Butter"],
  },
  {
    id: "6",
    img: "http://localhost:3000/static/media/soup.4df99283645d35a4f6ed.png",
    title: "Beef Noodle Soup",
    price: "4.99",
    reviews: "512",
    composition: [
      "Butter",
      "Potato",
      "Tomato",
      "Mayones",
      "Strawberry jam",
      "Garlic",
    ],
  },
];
