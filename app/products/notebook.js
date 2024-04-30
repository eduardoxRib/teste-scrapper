import { getRandomIntInclusive } from "../helpers.js"

export function notebook(reply) {
  const prices = [getRandomIntInclusive(2600_00, 3800_00), getRandomIntInclusive(2600_00, 3800_00), getRandomIntInclusive(2600_00, 3800_00), getRandomIntInclusive(2600_00, 3800_00)]
    reply.status(200).send({
        "data": {
            "title": "Notebook Samsung Galaxy Book2",
            "prices": {
                "min": Math.min(...prices),
                "med": Math.floor(prices.reduce((p, c) => p + c, 0) / prices.length),
                "max": Math.max(...prices)
            },
            "products": [
                {
                    "image_url": "https://samsungbrshop.vtexassets.com/arquivos/ids/195462-800-auto?v=637959156198500000&width=800&height=auto&aspect=true",
                    "price": prices[0],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://shop.samsung.com/br/samsung-galaxy-book2-w11h-intel-core-i5-np550xed-kf2br/p",
                    "seller": "Samsung",
                    "seller_url": "https://shop.samsung.com",
                    "title": "Notebook Samsung Galaxy Book2 Intel Core i5-1235U"
                },
                {
                    "image_url": "https://m.media-amazon.com/images/I/51wJreDCHfL._AC_SX425_.jpg",
                    "price": prices[1],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.amazon.com.br/Notebook-Samsung-i5-1235U-Windows-Grafite/dp/B0C5YT4KQZ",
                    "seller": "Amazon",
                    "seller_url": "https://www.amazon.com.br/",
                    "title": "Galaxy Book2 Intel® Core™ i5-1235U, Windows 11 Home"
                },
                {
                    "image_url": "https://a-static.mlcdn.com.br/800x560/notebook-samsung-galaxy-book-2-intel-core-i5-8gb-ssd-256gb-156-full-hd-windows-11-np550xed-kf2br/magazineluiza/238037000/45853b41ecada0baf03da053be05e526.jpg",
                    "price": prices[2],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.magazineluiza.com.br/notebook-samsung-galaxy-book-2-intel-core-i5-8gb-ssd-256gb-156-full-hd-windows-11-np550xed-kf2br/p/238037000/in/nsbo",
                    "seller": "Magazineluiza",
                    "seller_url": "https://www.magazineluiza.com.br",
                    "title": "Notebook Samsung Galaxy Book 2 Intel Core i5 8GB"
                },
                {
                    "image_url": "https://images.kabum.com.br/produtos/fotos/520072/notebook-galaxy-book2-intel-core-i5-1235u-windows-11-home-8gb-256gb-ssd-intel-iris-xe-15-6-full-hd-led-np550xed-kf2br_1706818190_gg.jpg",
                    "price": prices[3],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.kabum.com.br/produto/520072/notebook-samsung-galaxy-book2-intel-core-i5-1235u-8gb-ram-ssd-256gb-15-6-full-hd-windows-11-home-grafite-np550xed-kf2br",
                    "seller": "Kabum",
                    "seller_url": "https://www.kabum.com.br/",
                    "title": "Notebook Samsung Galaxy Book2 Intel Core i5"
                }
            ]
        }
    })
}