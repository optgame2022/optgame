export enum ExchangeType {
    TRADING = "TRADING", FUNDING = "FUNDING", MARGIN = "MARGIN",
}

export enum ExchangeSide {
    BUY = "BUY", SELL = "SELL",
}

export enum MarketDatatype {
    ORDER = "ORDER",
        POSITION = "POSITION",
        CANDLE = "CANDLE",
        TICKER = "TICKER",
}

export enum ExchangeName {
    ETORO = "ETORO",
        IQOPTION = "IQOPTION",

        _1BROKER = "_1BROKER",
        _1BTCXE = "_1BTCXE",
        ACX = "ACX",
        ALLCOIN = "ALLCOIN",
        ANXPRO = "ANXPRO",
        BIBOX = "BIBOX",
        BINANCE = "BINANCE",
        BIT2C = "BIT2C",
        BITBAY = "BITBAY",
        BITCOINCOID = "BITCOINCOID",
        BITFINEX = "BITFINEX",
        BITFLYER = "BITFLYER",
        BITHUMB = "BITHUMB",
        BITLISH = "BITLISH",
        BITMARKET = "BITMARKET",
        BITMEX = "BITMEX",
        BITSO = "BITSO",
        BITSTAMP = "BITSTAMP",
        BITTREX = "BITTREX",
        BL3P = "BL3P",
        BLEUTRADE = "BLEUTRADE",
        BRAZILIEX = "BRAZILIEX",
        BTCBOX = "BTCBOX",
        BTCCHINA = "BTCCHINA",
        BTCEXCHANGE = "BTCEXCHANGE",
        BTCMARKETS = "BTCMARKETS",
        BTCTRADEUA = "BTCTRADEUA",
        BTCTURK = "BTCTURK",
        BTCX = "BTCX",
        BXINTH = "BXINTH",
        CCEX = "CCEX",
        CEX = "CEX",
        CHBTC = "CHBTC",
        CHILEBIT = "CHILEBIT",
        COINCHECK = "COINCHECK",
        COINEXCHANGE = "COINEXCHANGE",
        COINFLOOR = "COINFLOOR",
        COINGI = "COINGI",
        COINMARKETCAP = "COINMARKETCAP",
        COINMATE = "COINMATE",
        COINSECURE = "COINSECURE",
        COINSPOT = "COINSPOT",
        CRYPTOPIA = "CRYPTOPIA",
        DSX = "DSX",
        EXMO = "EXMO",
        FLOWBTC = "FLOWBTC",
        FOXBIT = "FOXBIT",
        FYBSE = "FYBSE",
        FYBSG = "FYBSG",
        GATECOIN = "GATECOIN",
        GATEIO = "GATEIO",
        GDAX = "GDAX",
        GEMINI = "GEMINI",
        GETBTC = "GETBTC",
        HITBTC = "HITBTC",
        HUOBI = "HUOBI",
        HUOBICNY = "HUOBICNY",
        HUOBIPRO = "HUOBIPRO",
        INDEPENDENTRESERVE = "INDEPENDENTRESERVE",
        ITBIT = "ITBIT",
        JUBI = "JUBI",
        KRAKEN = "KRAKEN",
        KUCOIN = "KUCOIN",
        KUNA = "KUNA",
        LAKEBTC = "LAKEBTC",
        LIQUI = "LIQUI",
        LIVECOIN = "LIVECOIN",
        LUNO = "LUNO",
        LYKKE = "LYKKE",
        MERCADO = "MERCADO",
        MIXCOINS = "MIXCOINS",
        NOVA = "NOVA",
        OKCOINCNY = "OKCOINCNY",
        OKCOINUSD = "OKCOINUSD",
        OKEX = "OKEX",
        PAYMIUM = "PAYMIUM",
        POLONIEX = "POLONIEX",
        QRYPTOS = "QRYPTOS",
        QUADRIGACX = "QUADRIGACX",
        QUOINEX = "QUOINEX",
        SOUTHXCHANGE = "SOUTHXCHANGE",
        SURBITCOIN = "SURBITCOIN",
        THEROCK = "THEROCK",
        TIDEX = "TIDEX",
        URDUBIT = "URDUBIT",
        VAULTORO = "VAULTORO",
        VBTC = "VBTC",
        VIRWOX = "VIRWOX",
        WEX = "WEX",
        XBTCE = "XBTCE",
        YOBIT = "YOBIT",
        YUNBI = "YUNBI",
        ZAIF = "ZAIF",
        ZB = "ZB",
}

export enum Currency {
    USD = "USD",
        BTC = "BTC",
        ETH = "ETH",
        RRT = "RRT",
        SAN = "SAN",
        EDO = "EDO",
}

export enum Symbol {
    // forex
    EUR_USD = "EUR/USD",
        GBP_USD = "GBP/USD",
        USD_JPY = "USD/JPY",
        EUR_GBP = "EUR/GBP",
        GBP_JPY = "GBP/JPY",
        EUR_JPY = "EUR/JPY",
        AUD_CAD = "AUD/CAD",
        NZD_USD = "NZD/USD",
        USD_RUB = "USD/RUB",
        USD_CHF = "USD/CHF",
        AUD_USD = "AUD/USD",
        USD_CAD = "USD/CAD",
        AUD_JPY = "AUD/JPY",
        GBP_CAD = "GBP/CAD",
        GBP_CHF = "GBP/CHF",
        GBP_AUD = "GBP/AUD",
        EUR_CAD = "EUR/CAD",
        CHF_JPY = "CHF/JPY",
        CAD_CHF = "CAD/CHF",
        EUR_AUD = "EUR/AUD",
        USD_NOK = "USD/NOK",
        EUR_NZD = "EUR/NZD",
        USD_SEK = "USD/SEK",
        USD_TRY = "USD/TRY",
        USD_INR = "USD/INR",
        USD_PLN = "USD/PLN",
        USD_BRL = "USD/BRL",
        USD_ZAR = "USD/ZAR",
        USD_SGD = "USD/SGD",
        USD_HKD = "USD/HKD",
        AUD_CHF = "AUD/CHF",
        AUD_NZD = "AUD/NZD",
        CAD_JPY = "CAD/JPY",
        EUR_CHF = "EUR/CHF",
        GBP_NZD = "GBP/NZD",
        NZD_CAD = "NZD/CAD",
        NZD_JPY = "NZD/JPY",
        EUR_SEK = "EUR/SEK",
        EUR_NOK = "EUR/NOK",
        CHF_SGD = "CHF/SGD",
        EUR_CNH = "EUR/CNH",
        EUR_HKD = "EUR/HKD",
        EUR_SGD = "EUR/SGD",
        USD_CNH = "USD/CNH",
        USD_MXN = "USD/MXN",

        // iq option OTC
        EUR_USD_OTC = "EUR/USD-OTC",
        GBP_USD_OTC = "GBP/USD-OTC",
        USD_JPY_OTC = "USD/JPY-OTC",
        NZD_USD_OTC = "NZD/USD-OTC",

        // crypto currency
        BTC_USD = "BTC/USD",
        BCH_USD = "BCH/USD",
        IOT_USD = "IOT/USD",
        OMG_USD = "OMG/USD",
        EOS_USD = "EOS/USD",
        DSH_USD = "DSH/USD",
        SAN_USD = "SAN/USD",
        ETH_USD = "ETH/USD",
        LTC_USD = "LTC/USD",
        ZEC_USD = "ZEC/USD",
        XMR_USD = "XMR/USD",
        ETC_USD = "ETC/USD",
        XRP_USD = "XRP/USD",
        NEO_USD = "NEO/USD",
        ETP_USD = "ETP/USD",
        EDO_USD = "EDO/USD",
        SNT_USD = "SNT/USD",
        GNT_USD = "GNT/USD",
        QSH_USD = "QSH/USD",

        ETH_BTC = "ETH/BTC",
        BCH_BTC = "BCH/BTC",
        IOT_BTC = "IOT/BTC",
        OMG_BTC = "OMG/BTC",
        DSH_BTC = "DSH/BTC",
        ZEC_BTC = "ZEC/BTC",
        XMR_BTC = "XMR/BTC",
        LTC_BTC = "LTC/BTC",
        SAN_BTC = "SAN/BTC",
        EOS_BTC = "EOS/BTC",
        ETC_BTC = "ETC/BTC",
        XRP_BTC = "XRP/BTC",
        NEO_BTC = "NEO/BTC",
        ETP_BTC = "ETP/BTC",

        BCH_ETH = "BCH/ETH",
        IOT_ETH = "IOT/ETH",
        OMG_ETH = "OMG/ETH",
        SAN_ETH = "SAN/ETH",
        EOS_ETH = "EOS/ETH",
        NEO_ETH = "NEO/ETH",
        ETP_ETH = "ETP/ETH",
}