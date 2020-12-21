export const products = [
    {
        title: 'Nike Tanjun',
        category:"shoe",
        brand: "Nike",
        url: "https://static.nike.com/a/images/t_default/59f7ed70-eef3-4b02-85c3-4493a328c77d/tanjun-older-shoe-AKTdeyBg.jpg",
        availableSize : {
            7 : {
                _id: 1,
                color: {
                    "red" : {
                        countInstock:5
                    },
                    "white" : {
                        countInstock:5
                    },
            }
            },
            8 : {
                _id: 2,
                color: "white",
                countInstock: 13
            },
            8.5 : {
                _id: 3,
                color: "blue",
                countInstock: 13
            }
        },
        Price: 200,
        Review: 10,
        Description: "Run till the end of the world"
    },
    {
        id:2,
        title: 'Nike WearAllDay',
        category:"shoe",
        brand: "Nike",
        url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/11bd4de0-9bc3-4132-8e31-3cdbff732ec9/wearallday-shoe-dxtsS5.jpg",
        availableSize : {
        },
        Price: 450,
        Review: 5,
        Description: "Comfortable every Time"
    },
    {
        id:3,
        title: 'Nike Revolution',
        category:"shoe",
        brand: "Nike",
        url: "https://static.nike.com/a/images/t_default/63402e89-a42e-43cb-9cca-0aa0b5f7d848/revolution-5-running-shoe-RNxmvG.jpg",
        Price: 660,
        Review: 15,
        Description: "Latest version of 2020, the best seller in Revolution serie"
    },
    {
        id:4,
        title: 'Ultraboot',
        category:"shoe",
        brand: "Addidas",
        url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4b577be6ec8c4f6e992eab0b00a16f8d_9366/Duramo_9_Shoes_Blue_EG8661_01_standard.jpg",
        availableSize : {
            12 : {

            },
            12
        },
        Price: 300,
        Review: 3,
        Description: "Stylist, Comfort, No String"
    },
    {
        id:5,
        title: 'Addidas Neo Cloudform',
        category:"shoe",
        brand: "Addidas",
        url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2d2ba5fc19d942e9a865a90a00ce4d7b_9366/Cloudfoam_Ultimate_Shoes_Blue_B43842_01_standard.jpg",
        availableSize : {
            12 : {

            },
            12
        },
        Price: 150,
        Review: 45,
        Description: "Simple and unique shoe never makes you bored"
    },
    {
        id:6,
        title: 'Nike Airmax',
        category:"shoe",
        brand: "Nike",
        url: "https://catalog.21buttons.com/02153d77aa011af811a5b980affd5e6566bd60ed.smedium.jpg",
        availableSize : {
            12 : {

            },
            12
        },
        Price: 600,
        Review: 7,
        Description: "Run till the end of the world"
    },
    {
        id:7,
        title: 'Puma flash',
        category:"shoe",
        brand: "Puma",
        url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190508/28/sv01/fnd/PNA/fmt/png/IGNITE-Flash-evoKNIT-Men's-Training-Shoes",
        availableSize : {
            12 : {

            },
            12
        },
        Price: 500,
        Review: 10,
        Description: "Run till the end of the world"
    }
];

const params = {
    TableName: process.env.tableName,
    Item: {
        productId: uuid.v1(),
        title: 'Nike Revolution',
        category:"shoe",
        brand: "Nike",
        url: "https://static.nike.com/a/images/t_default/63402e89-a42e-43cb-9cca-0aa0b5f7d848/revolution-5-running-shoe-RNxmvG.jpg",
        size: {
            sizeId: "7",
            sizeName: 7,
            countInstock: 15
        },
        price: 660,
        review: 15,
        description: "Latest version of 2020, the best seller in Revolution serie",
        createdAt: Date.now()
    }
}