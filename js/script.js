fetch('https://api.github.com/users/gojibetters')
  .then(response => response.json())
  .then(reponse => {
    const data = reponse

    //info
    const elementPhoto = document.querySelector('.photo')
    const elementName = document.querySelector('.name')
    const elementBio = document.querySelector('.bio')

    elementPhoto.innerHTML = `<img src="${data.avatar_url}"/>`
    elementName.innerHTML = data.name
    elementBio.innerHTML = data.bio
  })

fetch('https://api.github.com/users/gojibetters/repos')
  .then(response => response.json())
  .then(response => {
    const data = response

    const elementContainer = document.querySelector('.container')
    const repoCard = `<div class="item">
    <div class="title"></div>
    <div class="description"></div>
    <div class="stats">
      <div class="starIcon">
        <img src="assets/star.png" />
        <div class="stars"></div>
      </div>
      <div class="forksIcon">
        <img src="assets/git-branch.png" />
        <div class="forks"></div>
      </div>
      <div class="languageIcon">
        <img src="assets/yellipse.png" />
        <div class="language"></div>
      </div>
    </div>
  </div>`

    for (let i = 0; i < data.length - 1; i++) {
      elementContainer.innerHTML += repoCard
    }

    //repo
    const elementTitle = document.getElementsByClassName('title')
    const elementDescription = document.getElementsByClassName('description')
    const elementStars = document.getElementsByClassName('stars')
    const elementForks = document.getElementsByClassName('forks')
    const elementLanguage = document.getElementsByClassName('language')

    for (let i = 0; i < elementTitle.length; i++) {
      elementTitle[
        i
      ].innerHTML = `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`
      elementDescription[i].innerHTML = data[i].description
      elementStars[i].innerHTML = data[i].stargazers_count
      elementForks[i].innerHTML = data[i].forks
      elementLanguage[i].innerHTML = data[i].language
    }
  })
