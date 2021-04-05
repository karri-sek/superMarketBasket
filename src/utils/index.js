export const removeBasketItem = (a = [], p = {}) => {
    let index = a.indexOf(a.find((e) => e.id === p.id))
    return index > -1 ? [...a.slice(0, index), ...a.slice(index + 1)] : [...a]
}

const reducer = (accumulator, currentValue) => accumulator + currentValue

export const getSubTotal = (basketItems = []) =>
    isEmpty(basketItems)
        ? 0
        : basketItems.map((item) => item.price).reduce(reducer)

export const isEmpty = (value) =>
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (value instanceof Array && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)

export const getTotalSavingsValue = (savings = []) =>
    isEmpty(savings) ? 0 : savings.map((saving) => saving.value).reduce(reducer)

export const getTotalToPayValue = (subTotal, savingsTotal) =>
    subTotal - savingsTotal
