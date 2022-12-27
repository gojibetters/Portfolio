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
    const elementTitle = document.getElementsByClassName('title')
    const elementDescription = document.getElementsByClassName('description')
    const elementStars = document.getElementsByClassName('stars')
    const elementForks = document.getElementsByClassName('forks')
    const elementLanguage = document.getElementsByClassName('language')

    for (let i = 0; i < elementTitle.length; i++) {
      console.log(elementTitle.length)
      elementTitle[
        i
      ].innerHTML = `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`
      elementDescription[i].innerHTML = data[i].description
      elementStars[i].innerHTML = data[i].stargazers_count
      elementForks[i].innerHTML = data[i].forks
      elementLanguage[i].innerHTML = data[i].language
    }
  })
