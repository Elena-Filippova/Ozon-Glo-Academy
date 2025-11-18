import { priceFilter } from './filters'
import getData from './getData'
import renderGoods from './renderGoods'

const price = () => {
  getData().then((data) => {
    renderGoods(priceFilter(data))
  })
}

export default price