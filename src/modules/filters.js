export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })
}

export const priceFilter = (goods) => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')

  const minPrice = parseFloat(minInput.value || 0)
  const maxPrice = parseFloat(maxInput.value || Infinity)

  return goods.filter((goodsItem) => {
    return goodsItem.price >= minPrice && goodsItem.price <= maxPrice
  })
}