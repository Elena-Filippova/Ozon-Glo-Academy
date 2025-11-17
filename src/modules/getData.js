const getData = () => {
  return fetch('https://ozon-test-9fb5f-default-rtdb.firebaseio.com/')
    .then(response => response.json())
}

export default getData