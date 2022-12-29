fetch('https://api.github.com/users/gojibetters')
  .then(response => response.json())
  .then(response => {
    const data = response

    //info
    const elementPhoto = document.querySelector('.photo')
    const elementName = document.querySelector('.name')
    const elementBio = document.querySelector('.bio')

    elementPhoto.innerHTML = `<img src="${data.avatar_url}"/>`
    elementName.innerHTML = data.name
    elementBio.innerHTML = data.bio

    //social media
    const elementLocation = document.querySelector('.location')
    const elementCompany = document.querySelector('.company')
    const elementGithub = document.querySelector('.github')
    const elementLinkedin = document.querySelector('.linkedin')
    const elementEmail = document.querySelector('.email')

    elementLocation.innerHTML = `<img src="assets/map-pin.svg"/><a href="https://www.google.com/search?q=brazil" target="_blank">Brazil</a>`
    elementCompany.innerHTML = `<img src="assets/briefcase.svg" /><a href="https://lab2dev.com/" target="_blank">Lab2Dev</a>`
    elementGithub.innerHTML = `<img src="assets/github.svg" /><a href="https://github.com/gojibetters" target="_blank">Gojibetters</a>`
    elementLinkedin.innerHTML = `<img src="assets/linkedin.svg" /><a href="https://www.linkedin.com/in/brunopatez/" target="_blank">Bruno Patez</a>`
    elementEmail.innerHTML = `<img src="assets/mail.svg" /><a href="mailto:brunoapatez@gmail.com">Send email</a>`
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
        <img src="assets/star.svg" />
        <div class="stars"></div>
      </div>
      <div class="forksIcon">
        <img src="assets/git-branch.svg" />
        <div class="forks"></div>
      </div>
      <div class="languageIcon">
        <img src="assets/yellipse.svg" />
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
      if (data[i].description == null) {
        data[i].description = 'empty description'
      } else if (data[i].language == null) {
        data[i].language = 'unknown'
      }
      elementTitle[
        i
      ].innerHTML = `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`
      elementDescription[i].innerHTML = data[i].description
      elementStars[i].innerHTML = data[i].stargazers_count
      elementForks[i].innerHTML = data[i].forks
      elementLanguage[i].innerHTML = data[i].language
    }
  })
