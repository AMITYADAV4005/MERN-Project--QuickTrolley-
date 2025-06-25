export const PriceWithDiscount = (price,dis = 1)=>{
    const discountAmount = Math.ceil((Number(price) * Number(dis)) / 100)    /* round off the amount */
    //const discountAmount = (Number(price) * Number(dis)) / 100
    const actualPrice = Number(price) - Number(discountAmount)
    return actualPrice
}

export default PriceWithDiscount

