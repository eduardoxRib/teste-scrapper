import { getRandomIntInclusive } from "../helpers.js"

export function smartwatch(reply) {
  const prices = [getRandomIntInclusive(40000, 90000), getRandomIntInclusive(40000, 90000), getRandomIntInclusive(40000, 90000), getRandomIntInclusive(40000, 90000)]
    reply.status(200).send({
        "data": {
            "title": "Relógio Smartwatch Amazfit Gts 4",
            "prices": {
                "min": Math.min(...prices),
                "med": Math.floor(prices.reduce((p, c) => p + c, 0) / prices.length),
                "max": Math.max(...prices)
            },
            "products": [
                {
                    "image_url": "https://http2.mlstatic.com/D_NQ_NP_933553-MLU73420562169_122023-O.webp",
                    "price": prices[0],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.mercadolivre.com.br/smartwatch-amazfit-gts-4-mini-165-a2176-black/p/MLB19810451",
                    "seller": "Mercado Livre",
                    "seller_url": "https://www.mercadolivre.com.br",
                    "title": "Smartwatch Amazfit Gts 4 Mini A2176"
                },
                {
                    "image_url": "https://images.tcdn.com.br/img/img_prod/854435/relogio_smartwatch_xiaomi_amazfit_gts_4_mini_preto_a_prova_d_agua_50_metros_oximetro_a2176_104065_1_133f08cfcbb76781828a3d96b576be46.jpeg",
                    "price": prices[1],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.xtremeinfo.com.br/smartphones-e-gadgests/relogios-smartwatch/relogio-smartwatch-xiaomi-amazfit-gts-4-mini-preto-a-prova-d-agua-50-metros-oximetro-a2176",
                    "seller": "Xtreme Informática",
                    "seller_url": "https://www.xtremeinfo.com.br",
                    "title": "Relógio Smartwatch XIAOMI Amazfit GTS 4 Mini Preto"
                },
                {
                    "image_url": "https://m.media-amazon.com/images/I/51UECNWIuAL._AC_SY679_.jpg",
                    "price": prices[2],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.amazon.com.br/Amazfit-Reconhecimento-Inteligente-Posicionamento-dias_Flamingo/dp/B0B8N8SDT1",
                    "seller": "Amazon",
                    "seller_url": "https://www.amazon.com.br",
                    "title": "Amazfit GTS 4 Mini 120+ Modos Esportivos e Reconhecimento Inteligente"
                },
                {
                    "image_url": "https://m.media-amazon.com/images/I/61fYIhvPnfL._AC_SX522_.jpg",
                    "price": prices[3],
                    "rating": getRandomIntInclusive(1, 5),
                    "scraped_from_url": "https://www.amazon.com.br/Amazfit-smartwatch-rastreador-exerc%C3%ADcio-compat%C3%ADvel/dp/B0D25P367Q",
                    "seller": "Amazon",
                    "seller_url": "https://www.amazon.com.br",
                    "title": "Amazfit GTS 4 mini smartwatch para homens e mulheres, Alexa GPS"
                }
            ]
        }
    })
}
