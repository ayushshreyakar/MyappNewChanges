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

export const food_list = [
    {
        _id: "1",
        name: "Biriyani",
        image: biriyani_img,
        description: "Fragrant basmati rice cooked with aromatic spices and tender meat or vegetables.",
        category: "Main Course",
        price: 220
    },
    {
        _id: "2",
        name: "Paneer Butter Masala",
        image: paneer_butter_masala_img,
        description: "Soft paneer cubes in a rich, buttery tomato gravy.",
        category: "Main Course",
        price: 200
    },
    {
        _id: "3",
        name: "Masala Dosa",
        image: masala_dosa_img,
        description: "Crispy rice crepe filled with spiced mashed potatoes, served with chutney and sambar.",
        category: "Main Course",
        price: 80
    },
    {
        _id: "4",
        name: "Paneer Tikka",
        image: paneer_tikka_img,
        description: "Juicy, marinated paneer pieces grilled to perfection with Indian spices.",
        category: "Starters",
        price: 180
    },
    {
        _id: "5",
        name: "Veg Spring Rolls",
        image: veg_spring_roll_img,
        description: "Crispy rolls filled with sautéed vegetables and served with sweet chilli sauce.",
        category: "Starters",
        price: 160
    },
    {
        _id: "6",
        name: "Hara Bhara Kabab",
        image: hara_bhara_kabab_img,
        description: "Pan-fried green patties made with spinach, peas, and potatoes.",
        category: "Starters",
        price: 160
    },
    {
        _id: "7",
        name: "Gulab Jamun",
        image: gulab_jamun_img,
        description: "Soft, deep-fried dough balls soaked in warm sugar syrup.",
        category: "Dessert",
        price: 70
    },
    {
        _id: "8",
        name: "Rasgulla",
        image: rasgulla_img,
        description: "Soft and spongy balls made from chhena and soaked in light sugar syrup.",
        category: "Dessert",
        price: 80
    },
    {
        _id: "9",
        name: "Chocolate Brownie",
        image: chocolate_brownie_img,
        description: "Rich, fudgy brownie topped with a drizzle of chocolate sauce.",
        category: "Dessert",
        price: 120
    },
    {
        _id: "10",
        name: "Fruit Salad",
        image: fruit_salad_img,
        description: "A refreshing mix of seasonal fruits, lightly sweetened and chilled.",
        category: "Dessert",
        price: 120
    },

    // ------------------ Breakfast ------------------
    {
        _id: "11",
        name: "Idli Sambar",
        image: idli_sambar_img,
        description: "Soft steamed rice cakes served with sambar and coconut chutney.",
        category: "Breakfast",
        price: 60
    },
    {
        _id: "12",
        name: "Poha",
        image: poha_img,
        description: "Flattened rice cooked with onions, peas, mustard seeds, and garnished with coriander.",
        category: "Breakfast",
        price: 50
    },
    {
        _id: "13",
        name: "Aloo Paratha",
        image: aloo_paratha_img,
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with curd and pickle.",
        category: "Breakfast",
        price: 90
    },

    // ------------------ Snacks ------------------
    {
        _id: "14",
        name: "Samosa",
        image: samosa_img,
        description: "Deep-fried pastry filled with spicy potato mixture, served with chutney.",
        category: "Snacks",
        price: 30
    },
    {
        _id: "15",
        name: "Pav Bhaji",
        image: pav_bhaji_img,
        description: "Buttery bread rolls served with spicy mashed vegetable curry.",
        category: "Snacks",
        price: 120
    },
    {
        _id: "16",
        name: "Bhel Puri",
        image: bhel_puri_img,
        description: "Tangy and crunchy mixture of puffed rice, sev, chutneys, and fresh veggies.",
        category: "Snacks",
        price: 60
    },

    // ------------------ Beverages ------------------
    {
        _id: "17",
        name: "Masala Chai",
        image: masala_chai_img,
        description: "Strong Indian tea brewed with milk, sugar, and aromatic spices.",
        category: "Beverages",
        price: 30
    },
    {
        _id: "18",
        name: "Mango Lassi",
        image: mango_lassi_img,
        description: "Refreshing yogurt-based drink blended with ripe mango pulp.",
        category: "Beverages",
        price: 80
    },
    {
        _id: "19",
        name: "Filter Coffee",
        image: filter_coffee_img,
        description: "South Indian style strong coffee served with frothy milk.",
        category: "Beverages",
        price: 40
    }
]

export const restaurants = [
  {
    id: "r1",
    name: "Spicy Indian Tandoor",
    food_list: food_list.filter((item) =>
      ["1", "2", "4", "5", "7", "12"].includes(item._id) // biriyani, paneer butter masala, paneer tikka, spring rolls, gulab jamun, poha
    ),
  },
  {
    id: "r2",
    name: "South Delight",
    food_list: food_list.filter((item) =>
      ["3", "6", "8", "11", "13", "19"].includes(item._id) // dosa, hara bhara kabab, rasgulla, idli, aloo paratha, filter coffee
    ),
  },
  {
    id: "r3",
    name: "Street Bites",
    food_list: food_list.filter((item) =>
      ["14", "15", "16", "17", "18"].includes(item._id) // samosa, pav bhaji, bhel puri, chai, lassi
    ),
  },
  {
    id: "r4",
    name: "Sweet Treats",
    food_list: food_list.filter((item) =>
      ["7", "8", "9", "10"].includes(item._id) // gulab jamun, rasgulla, brownie, fruit salad
    ),
  },
];

