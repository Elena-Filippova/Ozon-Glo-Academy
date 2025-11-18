const getData = async (str) => {
  const response = await fetch(`https://ozon-test-9fb5f-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
  return await response.json()
}

export default getData