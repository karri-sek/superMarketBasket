export const getItemQuantity = (basketItems) =>
    basketItems.reduce(function (obj, b) {
        obj[b.id] = ++obj[b.id] || 1
        return obj
    }, {})
