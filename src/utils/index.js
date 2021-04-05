export const removeBasketItem = (a = [], p = {}) => {
    let index = a.indexOf(a.find((e) => e.id === p.id))
    return index > -1 ? [...a.slice(0, index), ...a.slice(index + 1)] : [...a]
}
