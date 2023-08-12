import Icon from "./assets/menu.jpeg";

const displayMenu = (() => {
    const runMenu = () => {
        const content = document.querySelector('#content');
        const content_body = document.querySelector('#content-body');
        content_body.innerHTML = '';

        // stuff here
        const menu_body = document.createElement('div');
        menu_body.classList.add('menu-body');

        // hero menu image
        const myIcon = new Image();
        myIcon.src = Icon;
        const menuHero = document.createElement('div');
        menuHero.classList.add('menu-hero');

        // main menu section
        const menu_div = document.createElement('div');
        menu_div.classList.add('menu-div');

        // menu items

        function createDish (name, price, desc) {
            const dish = document.createElement('div');
            const dish_head = document.createElement('h2');
            const dish_text = document.createElement('p');
            const dish_price = document.createElement('span');

            dish.classList.add('dish-cards');
            dish_head.classList.add('dish-titles');
            dish_price.classList.add('dish-prices');

            dish_price.textContent = `- ${price}`;
            dish_head.textContent = `${name} `;
            dish_head.appendChild(dish_price);
            dish_text.textContent = desc;
            dish.appendChild(dish_head);
            dish.appendChild(dish_text);
            
            menu_div.appendChild(dish);
        };

        createDish('GRILLED GREEK CHICKEN', '99', 'Roasted slowly. Garlic, oregano, red pepper flakes, vinegar.');
        createDish('BUTTERMILK FRIED CHICKEN', '109', 'Southern-style chicken. Buttermilk, dijon mustard, cayenne.');
        createDish('MALAYSIAN BARBECUE WINGS', '109', 'Oyster sauce, dark soy, sesame oil.');
        createDish('GOCHUJANG WINGS', '109', 'Gochujang, ginger, sesame.');
        createDish('CHIMICHURRI CHICKEN', '129', 'Served with Mexican rice, black beans, green salad.');
               
        // put all into content
        menu_body.appendChild(menu_div);
        content_body.appendChild(menuHero);
        content_body.appendChild(menu_body);
        content.appendChild(content_body);
    };
    return { runMenu };
})();

export { displayMenu };