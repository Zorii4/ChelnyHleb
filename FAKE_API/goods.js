const categoriesObj = {
    baker: { id: 1, title: "Мудрый пекарь", name:"baker" },
    kitchen: { id: 2, title: "Домашняя кухня", name:"kitchen"},
    meat: { id: 3, title: "Мясо, птица", name:"meat"}
}

const categories = [
    { id: 1, title: "Мудрый пекарь", background: "/img/categories/bakerBG.jpg", pic: "/img/categories/catPicLittle.jpg", category: categoriesObj.baker.name},
    { id: 2, title: "Домашняя кухня", background: "/img/categories/bakerBG.jpg", pic: "/img/categories/catPicLittle.jpg", category: categoriesObj.kitchen.name},
    { id: 3, title: "Мясо, птица", background: "/img/categories/homeKitchen.jpg", pic: "/img/categories/catPicLittle.jpg", category: categoriesObj.meat.name},
]

const subCategoriesObj = {
    cake: { id: 1, title: "Торты", category: categoriesObj.baker.name, name: "cake"},
    pie: { id: 2, title: "Пироги", category: categoriesObj.baker.name, name: "pie"},
    salad: { id: 3, title: "Салаты мясные", category: categoriesObj.kitchen.name, name: "salad"},
    chicken: { id: 4, title: "Мясо курицы", category: categoriesObj.meat.name, name: "chicken"},
    turkey: { id: 5, title: "Мясо индейки", category: categoriesObj.meat.name, name: "turkey"}
}

const subCategories = [
    { id: 1, title: "Торты", category: categoriesObj.baker.name, subCategory: subCategoriesObj.cake.name, categoryId:1},
    { id: 2, title: "Пироги", category: categoriesObj.baker.name, subCategory: subCategoriesObj.pie.name, categoryId:1},
    { id: 3, title: "Салаты мясные", category: categoriesObj.kitchen.name, subCategory: subCategoriesObj.salad.name, categoryId:2},
    { id: 4, title: "Мясо курицы", category: categoriesObj.meat.name, subCategory: subCategoriesObj.chicken.name, categoryId:3},
    { id: 5, title: "Мясо индейки", category: categoriesObj.meat.name, subCategory: subCategoriesObj.turkey.name, categoryId:3}
]

const finalCategories = {
    chocolatCake: {id: 1, title: "Торты шоколадные", subCategory: subCategoriesObj.cake.name, name:"chocolatCake"},
    fruitCake: {id: 2, title: "Торты фруктовые", subCategory: subCategoriesObj.cake.name, name:"fruitCake"},
    fishPie: {id: 3, title: "Пироги с рыбой", subCategory: subCategoriesObj.pie.name, name:"fishPie"},
    saladOlivie: {id: 4, title: "Салат оливье", subCategory: subCategoriesObj.salad.name, name:"saladOlivie"},
    fatChicken: {id: 5, title: "Жирные курицы", subCategory: subCategoriesObj.chicken.name, name:"fatChicken"},
    thinChicken: {id: 6, title: "Худые курицы", subCategory: subCategoriesObj.chicken.name, name:"thinChicken"},
    simpleTurkey: {id: 7, title: "Простые индюшки", subCategory: subCategoriesObj.turkey.name, name:"simpleTurkey"},
}

const finalCategoriesArr = [
    {id: 1, title: "Торты шоколадные", category:categoriesObj.baker.name, subCategory: subCategoriesObj.cake.name, name:"chocolatCake"},
    {id: 2, title: "Торты фруктовые", category:categoriesObj.baker.name, subCategory: subCategoriesObj.cake.name, name:"fruitCake"},
    {id: 3, title: "Пироги с рыбой", category:categoriesObj.kitchen.name, subCategory: subCategoriesObj.pie.name, name:"fishPie"},
    {id: 4, title: "Салат оливье", category:categoriesObj.kitchen.name, subCategory: subCategoriesObj.salad.name, name:"saladOlivie"},
    {id: 5, title: "Жирные курицы", category:categoriesObj.meat.name, subCategory: subCategoriesObj.chicken.name, name:"fatChicken"},
    {id: 6, title: "Худые курицы", category:categoriesObj.meat.name, subCategory: subCategoriesObj.chicken.name, name:"thinChicken"},
    {id: 7, title: "Простые индюшки", category:categoriesObj.meat.name, subCategory: subCategoriesObj.turkey.name, name:"simpleTurkey"},
]

const goods = [
    {        
        id: 1,
        title: "Торт с шоколадным шоколадом",
        rate: 4.6,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/watermelon.png",
        discount: 12,
        like: true,
        popular: false,
        new: true,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.baker.name,
        subCategory: subCategoriesObj.cake.name,
        finalCategory: finalCategories.chocolatCake.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/onion.png"
    },
    {        
        id: 2,
        title: "Курица бройлер",
        rate: 4.2,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/watermelon.png",
        discount: 20,
        like: false,
        popular: true,
        new: true,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.meat.name,
        subCategory: subCategoriesObj.chicken.name,
        finalCategory: finalCategories.fatChicken.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/onion.png" 
    },
    {        
        id: 3,
        title: "Курица клуша",
        rate: 4.2,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/juice.png",
        discount: 10,
        like: true,
        popular: false,
        new: true,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.meat.name,
        subCategory: subCategoriesObj.chicken.name,
        finalCategory: finalCategories.thinChicken.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/yo.png"
    },
    {        
        id: 4,
        title: "Курица цыпленок",
        rate: 4.6,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/juice.png",
        like: false,
        popular: true,
        new: true,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.meat.name,
        subCategory: subCategoriesObj.chicken.name,
        finalCategory: finalCategories.thinChicken.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/alexandrov.png" 
    },
    {        
        id: 5,
        title: "Пирог с щукой",
        rate: 5.0,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/watermelon.png",
        discount: 25,
        like: true,
        popular: true,
        new: false,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.kitchen.name,
        subCategory: subCategoriesObj.pie.name,
        finalCategory: finalCategories.fishPie.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/alexandrov.png"
    },
    {        
        id: 6,
        title: "Пирог с семгой",
        rate: 4.6,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/juice.png",
        like: true,
        popular: false,
        new: false,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.kitchen.name,
        subCategory: subCategoriesObj.pie.name,
        finalCategory: finalCategories.fishPie.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/yo.png" 
    },
    {        
        id: 7,
        title: "Торт с апельсинами",
        rate: 3.6,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/watermelon.png",
        discount: 23,
        like: true,
        popular: true,
        new: true,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.baker.name,
        subCategory: subCategoriesObj.cake.name,
        finalCategory: finalCategories.fruitCake.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/onion.png" 
    },
    {        
        id: 8,
        title: "Салат оливье с колбасой",
        rate: 4.5,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/juice.png",
        discount: 10,
        like: true,
        popular: false,
        new: false,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.kitchen.name,
        subCategory: subCategoriesObj.salad.name,
        finalCategory: finalCategories.saladOlivie.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/onion.png" 
    },
    {        
        id: 9,
        title: "Салат оливье с курицей",
        rate: 5.0,
        oldprice: 211.56,
        newprice: 189.89,
        image: "/img/watermelon.png",
        like: false,
        popular: true,
        new: false,
        bigImg:"/img/bigbottle.png",
        brand: "Домик в деревне",
        feedbackQuantity: 30,
        category: categoriesObj.kitchen.name,
        subCategory: subCategoriesObj.salad.name,
        finalCategory: finalCategories.saladOlivie.name,
        consist:["Молоко цельное", "Сливки", "Вода"],
        energy: 60,
        protein: 2.9,
        carbonates: 4.7,
        fat: 3.5,
        kind: "Пастеризованное",
        type: "В бутылке",
        weight: 0.927,
        volume: 0.927,
        fatness: 2.5,
        standart: "ГОСТ 31454-2012",
        bestBefore: "9 дней",
        tempMin: 2,
        tempMax: 6,
        basketImg: "/img/basket-images/yo.png" 
    },
]

const users = [
    {
        id: 1,
        name: "Анастасия",
        email: "asd@asd.asd",
        phone: 123456789,
        bonus:22,
        cardNumber:"6535 6565 8789 3468",
        password:123
    },
    {
        id: 2,
        name: "Ксения",
        email: "asd@asd.asd",
        phone: 123456789,
        bonus:321,
        cardNumber: "1234 4356 7688 9868",
        password:123
    },
    {
        id: 3,
        name: "Евгений Борисович",
        email: "asd@asd.asd",
        phone: 123456789,
        bonus:431,
        cardNumber: "1234 4356 7688 9868",
        password:123
    },
    {
        id: 4,
        name: "Виталий",
        email: "asd@asd.asd",
        phone: 123456789,
        bonus:315,
        cardNumber: "1234 4356 7688 9868",
        password:123
    }
]

const comments = [
    {
        id: 1,
        value: "Очень вкусное нежирное молоко, в кофе замечательно и каша получилась отменная!",
        date: new Date(2022, 8, 16),
        userId: 1        
    },
    {
        id: 2,
        value: "Нехватало данной позиции. Молочко очень вкусное, сладенькое. Будем покупать",
        date: new Date(2022, 8, 24),
        userId: 2
    },
    {
        id: 3,
        value: "Вкусное молоко. Каша отменная! Сразу выпили",
        date: new Date(2022, 8, 25),
        photo: "photo",
        userId: 3
    },
    {
        id: 4,
        value: "Отличное молоко!",
        date: new Date(2022, 9, 1),
        userId: 4
    }
]

const banner = [
    {   
        id:1, 
        title: "Виноград",
        subtitle: "Виноград киш-миш, 1 кг",
        description: "Сладкий и ароматный, созревший под жарким солнцем Армении. И совсем без косточек",
        oldprice: 149.90,
        newprice: 83.90,
        discount: 40,
        image: "/img/grape.png",
        duration: "28 июн - 10 июл"
    },
    {   
        id:2, 
        title: "Пиво",
        subtitle: "Пиво 1 литр",
        description: "Сладкий и ароматный, созревший под жарким солнцем Армении. И совсем без косточек",
        oldprice: 109.90,
        newprice: 99.90,
        discount: 40,
        image: "/img/grape.png",
        duration: "28 июн - 10 июл"
    },
    {   
        id:3, 
        title: "Морковь",
        subtitle: "Морковь мытая, 1 кг",
        description: "Сладкий и ароматный, созревший под жарким солнцем Армении. И совсем без косточек",
        oldprice: 140.90,
        newprice: 120.90,
        discount: 40,
        image: "/img/grape.png",
        duration: "21 июл - 10 авг"
    }
]

const sesonesBanner = [
    {
        id: 1,
        title: "Фермерские продукты",
        background: "/img/sesonsBG.jpg",
        description: "Возраждение традиций и качественных продуктов питания"
    }
]

const shops = [
    {
        id:1,
        coordinates: "55.74, 52.42"
    },
    {
        id:2,
        coordinates: "55.70, 52.46"
    },
    {
        id:3,
        coordinates: "55.75, 52.53"
    }
]

export function fetchAllGoods() {
    return goods
}

export function fetchAllCategories() {
    return categories
}

export function fetchAllSubCategories() {
    return subCategories
}

export function fetchCategoryById (id) {
    const a =  categories.find ((item) => item.id === id)
    return a
}

export function fetchGoodById (id) {
    const res = goods.find ((item) => item.id === id)
    return res
}

export function fetchFinalCategories () {
    return finalCategoriesArr
}

export function fetchAllUsers () {
    return users
}

export function fetchAllComments () {
    return comments
}

export function fetchBannerDatas () {
    return banner
}

export function fetchSesonesData () {
    return sesonesBanner
}

export function fetchBasket () {
    let basket = []
    basket.push (goods[8])
    basket.push (goods[4])
    basket.push (goods[2])
    basket.push (goods[7])
    return basket
}

export function fetchShops () {
    return shops
}

export function fetchOneUser () {
    return users[2]
}