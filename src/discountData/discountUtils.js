import discounts from './discounts'
export const getItemQuantity = (basketItems) =>
    basketItems.reduce(function (obj, b) {
        obj[b.id] = ++obj[b.id] || 1
        return obj
    }, {})

export const getDiscountObj = (pid) =>
    discounts.filter((d) => d.discountProductId === +pid)[0]

export const qualifiedForDiscount = (quantity = 0, multiplesOf = 0) =>
    quantity / multiplesOf >= 1

export const createSavingObjects = (
    discountQuantity = 0,
    { description, discountValue }
) => {
    const savingObjects = []
    for (const d of [...Array(Math.floor(discountQuantity)).keys()])
        savingObjects.splice(d, 0, {
            description: description,
            value: discountValue,
        })
    return savingObjects
}

export const getSavings = (itemQuantity = {}) => {
    const savings = []
    Object.entries(itemQuantity).map(([key, value]) => {
        const item = getDiscountObj(key)
        if (item) {
            const { multiplesOf } = item
            if (qualifiedForDiscount(value, multiplesOf)) {
                savings.push(...createSavingObjects(value / multiplesOf, item))
            }
        }
    })
    return savings
}
