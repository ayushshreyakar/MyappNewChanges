import logo from './logo.png'
import MainCourse from './MainCourse.webp'
import desserts from './desserts.jpg'
import idli_sambar_img from './idli_sambar_img.jpg'
import poha_img from './poha_img.jpg'
import aloo_paratha_img from './aloo_paratha_img.jpg'
import samosa_img from './samosa_img.jpg'
import pav_bhaji_img from './pav_bhaji_img.jpg'
import bhel_puri_img from './bhel_puri_img.jpg'
import masala_chai_img from './masala_chai_img.jpg'
import mango_lassi_img from './mango_lassi_img.jpg'
import filter_coffee_img from './filter_coffee_img.jpg'
import biriyani_img from './biriyani_img.jpeg'
import paneer_butter_masala_img from './paneer_butter_masala_img.jpeg';
import masala_dosa_img from './masala_dosa_img.jpeg';
import paneer_tikka_img from './paneer_tikka_img.jpeg';
import veg_spring_roll_img from './veg_spring_roll_img.jpeg';
import hara_bhara_kabab_img from './hara_bhara_kabab_img.jpeg';
import gulab_jamun_img from './gulab_jamun_img.jpeg';
import rasgulla_img from './rasgulla_img.jpeg';
import chocolate_brownie_img from './chocolate_brownie_img.jpeg';
import fruit_salad_img from './fruit_salad_img.jpeg';
import icon_white from './icon_white.png'
import icon_red from './icon_red.png'
import icon_green from './icon_green.png'
import shopping_basket from './shopping-basket.png'
import starters1 from './starters1.webp'
import serach from './search.png'
import breakfast from './breakfast.jpg'
import snacks from './snacks.jpg'
import beverages from './beverages.jpg'
import right_arrow from './right_arrow.png'
import cross_icon from './cross_icon.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout from './logout.png'


export const assets = {
    logo,
    icon_green,
    icon_red,
    icon_white,
    shopping_basket,
    serach,
    right_arrow,
    cross_icon,
    profile_icon,
    bag_icon,
    logout
}

export const menu_list = [
    {
        menu_name: "Starters",
        menu_image: starters1
    },
    {
        menu_name: "Main Course",
        menu_image: MainCourse
    },
    {
        menu_name: "Dessert",
        menu_image: desserts
    },
    {
        menu_name: "Breakfast",
        menu_image: breakfast
    },
    {
        menu_name: "Snacks",
        menu_image: snacks
    },
    {
        menu_name: "Beverages",
        menu_image: beverages
    }
]

export const restaurants = [
  {
    id: "r1",
    name: "Spicy Indian Tandoor",
    food_list: [
      {
        _id: "1",
        name: "Biriyani",
        image: biriyani_img,
        description: "Hyderabadi biriyani with tender chicken and extra spices.",
        category: "Main Course",
        price: 250,
      },
      {
        _id: "2",
        name: "Paneer Butter Masala",
        image: paneer_butter_masala_img,
        description: "Paneer cubes in our signature rich buttery tomato gravy.",
        category: "Main Course",
        price: 210,
      },
      {
        _id: "4",
        name: "Paneer Tikka",
        image: paneer_tikka_img,
        description: "Char-grilled paneer marinated in a smoky spice blend.",
        category: "Starters",
        price: 190,
      },
      {
        _id: "5",
        name: "Veg Spring Rolls",
        image: veg_spring_roll_img,
        description: "Golden fried rolls with mixed vegetables, served with chilli sauce.",
        category: "Starters",
        price: 170,
      },
      {
        _id: "7",
        name: "Gulab Jamun",
        image: gulab_jamun_img,
        description: "Warm jamuns dipped in saffron-flavored sugar syrup.",
        category: "Dessert",
        price: 90,
      },
      {
        _id: "12",
        name: "Poha",
        image: poha_img,
        description: "Light poha with onions, peanuts, and coriander garnish.",
        category: "Breakfast",
        price: 55,
      },
    ],
  },
  {
    id: "r2",
    name: "South Delight",
    food_list: [
      {
        _id: "3",
        name: "Masala Dosa",
        image: masala_dosa_img,
        description: "Crispy dosa with ghee, chutney, and spicy potato masala.",
        category: "Main Course",
        price: 100,
      },
      {
        _id: "6",
        name: "Hara Bhara Kabab",
        image: hara_bhara_kabab_img,
        description: "Spinach, peas, and potato patties with mint chutney.",
        category: "Starters",
        price: 150,
      },
      {
        _id: "8",
        name: "Rasgulla",
        image: rasgulla_img,
        description: "Soft spongy rasgullas in chilled light syrup.",
        category: "Dessert",
        price: 70,
      },
      {
        _id: "11",
        name: "Idli Sambar",
        image: idli_sambar_img,
        description: "Steamed idlis with hot sambar and chutneys.",
        category: "Breakfast",
        price: 65,
      },
      {
        _id: "13",
        name: "Aloo Paratha",
        image: aloo_paratha_img,
        description: "Flaky paratha stuffed with spiced potatoes, served with curd.",
        category: "Breakfast",
        price: 95,
      },
      {
        _id: "19",
        name: "Filter Coffee",
        image: filter_coffee_img,
        description: "South Indian filter coffee with frothy milk.",
        category: "Beverages",
        price: 45,
      },
    ],
  },
  {
    id: "r3",
    name: "Street Bites",
    food_list: [
      {
        _id: "14",
        name: "Samosa",
        image: samosa_img,
        description: "Crispy fried samosas with tangy chutney.",
        category: "Snacks",
        price: 35,
      },
      {
        _id: "15",
        name: "Pav Bhaji",
        image: pav_bhaji_img,
        description: "Buttery pav with spicy vegetable bhaji.",
        category: "Snacks",
        price: 130,
      },
      {
        _id: "16",
        name: "Bhel Puri",
        image: bhel_puri_img,
        description: "Crispy bhel puri with tangy chutneys and sev.",
        category: "Snacks",
        price: 65,
      },
      {
        _id: "17",
        name: "Masala Chai",
        image: masala_chai_img,
        description: "Strong tea with milk, cardamom, and ginger.",
        category: "Beverages",
        price: 25,
      },
      {
        _id: "18",
        name: "Mango Lassi",
        image: mango_lassi_img,
        description: "Thick mango lassi with fresh pulp.",
        category: "Beverages",
        price: 85,
      },
    ],
  },
  {
    id: "r4",
    name: "Sweet Treats",
    food_list: [
      {
        _id: "7",
        name: "Gulab Jamun",
        image: gulab_jamun_img,
        description: "Classic gulab jamun served warm.",
        category: "Dessert",
        price: 75,
      },
      {
        _id: "8",
        name: "Rasgulla",
        image: rasgulla_img,
        description: "Fresh rasgullas in chilled syrup.",
        category: "Dessert",
        price: 85,
      },
      {
        _id: "9",
        name: "Chocolate Brownie",
        image: chocolate_brownie_img,
        description: "Chocolate brownie with ice cream (optional).",
        category: "Dessert",
        price: 150,
      },
      {
        _id: "10",
        name: "Fruit Salad",
        image: fruit_salad_img,
        description: "Seasonal fruits tossed in honey.",
        category: "Dessert",
        price: 110,
      },
    ],
  },
];
