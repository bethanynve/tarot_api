//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#content').innerHTML += `<h2>${data.cards[0].name}</h2>`
        document.querySelector('#content').innerHTML += `<h3>${data.cards[0].meaning_up}</h3>`
        if (choice > 1) {
        document.querySelector('#content').innerHTML += `<h2>${data.cards[1].name}</h2>`
        document.querySelector('#content').innerHTML += `<h3>${data.cards[1].meaning_up}</h3>`
        } 
        if (choice > 2) {
          document.querySelector('#content').innerHTML += `<h2>${data.cards[2].name}</h2>`
          document.querySelector('#content').innerHTML += `<h3>${data.cards[2].meaning_up}</h3>`
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}