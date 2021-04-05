import discounts from './discounts'
export const getItemQuantity = (basketItems) =>
    basketItems.reduce(function (obj, b) {
        obj[b.id] = ++obj[b.id] || 1
        return obj
    }, {})

export const getDiscountObj = (pid) =>
    discounts.filter((d) => d.discountProductId === pid)[0]

export const getSavings = (itemQuantity = {}) => {
    const savings = []
    Object.entries(itemQuantity).map(([key, value]) => {
        const item = discounts.filter((item) => getDiscountObj(item, key))[0]
        if (value / item.multiplesOf >= 1) {
            ;[...Array(value / item.multiplesOf).keys()].map((i) =>
                savings.push({
                    description: item.description,
                    value: item.discountValue,
                })
            )
        }
    })
    console.log(' savings r', savings)
}
