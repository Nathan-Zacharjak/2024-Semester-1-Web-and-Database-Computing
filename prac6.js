// Top menu 2 (task 1.7):

const topMenu = [
    {
        title: 'Home',
        url: '/',
        submenus: []
    },
    {
        title: 'About',
        url: '/about',
        submenus: [
            { title: 'Who we are', url: '/about#us' },
            { title: 'What we do', url: '/about#store' },
            { title: 'Our range', url: '/about#range' }
        ]
    },
    {
        title: 'Contact Us',
        url: '/contact',
        submenus: [
            { title: 'Information', url: '/contact#info' },
            { title: 'Returns', url: '/contact#return' },
            { title: 'Locate Us', url: '/contact#locate' }
        ]
    }
];


// // Stores (task 1.8):

// const stores = [{ name:'Adelaide City',  address:'45 Florabunda Lane, Adelaide, 5000', counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg/320px-11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg' },
// { name:'Steelton South', address:'77 Weigall Avenue, Steelton, 5413',  counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/4/42/Well-shop-front.jpg' },
// { name:'Milton',         address:'33 McGregor Street, Milton, 5880',   counter: 0, img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Greggs_store_front.JPG/320px-Greggs_store_front.JPG' }]



const SPECIALS = [
    { name: 'Salt', price: '$0.99', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Korean_sea_salt.jpg' },
    { name: 'Pepper', price: '$2.49', url: 'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
    { name: 'Tomato Sauce', price: '$3.50', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
    { name: 'Worchestershire Sauce', price: '$4.20', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
];

// eslint-disable-next-line no-undef, no-unused-vars
const vueinst = new Vue({
    el: "#app",
    data: {
        choose: "Choose ...",
        special: SPECIALS[0],
        show_ad: true,
        dark_mode: false,
        top_menu: topMenu,
        c_text: 'type your comment here',
        c_arr: [],
        top_menu_item: 0,
        top_menu_hover: false
    }
});
