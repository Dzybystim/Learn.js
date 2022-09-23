// Отримати дані з API і вивести їх на сторінку
// https://dog.ceo/dog-api/

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
  response.json()
console.log(response)
if(response.status===404) {
  throw new Error('Упс')
}
})
.then(data => updateImg (data.message))
.catch(error => console.log(error))

function updateImg (img) {
  const imgElement = document.querySelector('.dog');
  imgElement.src=img;
}

function renderError (error) {
  const spanElement = document.querySelector('.error');
  console.log(spanElement);
  spanElement.textContent=error;
}