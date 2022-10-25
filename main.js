const url = ": https://aps-weather-app.herokuapp.com"

function getUser() {
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContext = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

getUse()
