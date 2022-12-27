fetch('https://api.github.com/users/gojibetters')
  .then(response => response.json())
  .then(reponse => {
    const data = reponse

    //info
    const elementPhoto = document.querySelector('.photo')
    const elementName = document.querySelector('.name')
    const elementBio = document.querySelector('.bio')

    //repo
    

    elementPhoto.innerHTML = `<img src="${data.avatar_url}"/>`
    elementName.innerHTML = data.name
    elementBio.innerHTML = data.bio
  })
