import { getRandomIntInclusive } from "../helpers.js"

export function iphone14(reply) {
  const prices = [getRandomIntInclusive(300_000, 420_000), getRandomIntInclusive(300_000, 420_000), getRandomIntInclusive(300_000, 420_000)]
    reply.status(200).send({
        "data": {
            "title": "Apple iPhone 14 (128 GB)",
            "prices": {
                "min": Math.min(...prices),
                "med": Math.floor(prices.reduce((p, c) => p + c, 0) / prices.length),
                "max": Math.max(...prices)
            },
            "products": [
                {
                    "image_url": "https://m.media-amazon.com/images/I/41t1UNX2zHL._AC_SL1000_.jpg",
                    "price": prices[0],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.amazon.com.br/Apple-iPhone-14-128-GB/dp/B00CLP06OW/ref=sr_1_3?dib=eyJ2IjoiMSJ9.3Iq3Nv7YXbAZG1AV-JA6_Ri0GYXVpHHZapL2Cwlw3o4OAfh4m3-3mhys04I0uTmDNrWTfw8_QfeBzDCD3EO3Tkacsiafv-xB_FXkoL0TxdUNHE3TRGkQiA4bxTA1uMHz-B6fQrq_V2ez3l4fdxj6v3jh5QF_l8df39ruY1iGv-MGRcUDA8_gjnrk2C2duT1YrSO-KvAHv9fpEaeqoqPJXxpPYy8XzqYpOUCp2dHX-SvrrbDEjsrsRSKf4Z0Z7ux4JDcfGP4FRgk41mqheTDOztBpfQ6AirvsduGaPzvuMzY.KGoi7E-GjP495CnSMxoLNyNaoDWIWGytcehkGkoZuWM&dib_tag=se&keywords=iphone+14&qid=1712000359&sr=8-3&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
                    "seller": "Amazon",
                    "seller_url": "https://www.amazon.com.br",
                    "title": "Apple iPhone 14 (128 GB) – Estelar"
                },
                {
                    "image_url": "https://www.tradeinn.com/f/13933/139331604/apple-iphone-14-128gb-6.1.jpg",
                    "price": prices[1],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.tradeinn.com/techinn/pt/apple-iphone-14-128gb-6.1/139331604/p?utm_source=google_products&utm_medium=merchant&id_producte=17677383&country=br&srsltid=AfmBOopIttrnMPZmW3hrKHcS7nrjOO4ICWDobj9vo0x66YE5ImIBY1AwMvM",
                    "seller": "Tradeinn",
                    "seller_url": "https://www.tradeinn.com",
                    "title": "Apple IPhone 14 128GB 6.1"
                },
                {
                    "image_url": "https://a-static.mlcdn.com.br/800x560/apple-iphone-14-128gb-estelar-61-12mp-ios-5g/magazineluiza/237184100/b208242666e673bb1cfff75f61667947.jpg",
                    "price": prices[2],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.magazineluiza.com.br/apple-iphone-14-128gb-estelar-61-12mp-ios-5g/p/237184100/te/ip14",
                    "seller": "Magazineluiza",
                    "seller_url": "https://www.magazineluiza.com.br",
                    "title": "Apple IPhone 14 128GB 6.1"
                }
            ]
        }
    })
}