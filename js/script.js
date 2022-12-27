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

    //repo
    const elementTitle = document.querySelector('.title')
    const elementDescription = document.querySelector('.description')
    const elementStars = document.querySelector('.stars')
    const elementForks = document.querySelector('.forks')
    const elementLanguage = document.querySelector('.language')

    elementTitle.innerHTML = `<a href="${data[13].html_url}" target="_blank">${data[13].name} </a>`
    elementDescription.innerHTML = data[13].description
    elementStars.innerHTML = data[13].stargazers_count
    elementForks.innerHTML = data[13].forks
    elementLanguage.innerHTML = data[13].language
  })
