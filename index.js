import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_bOzSZxjVhGKlpAXXuEUHHbPzLfKYkwDdtuCktf7V');

export async function coinExchange(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })

    return res.data[toCurrency] * units;
}