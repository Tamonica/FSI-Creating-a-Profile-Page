
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let descriptionHeader = document.createElement('h3')
descriptionHeader.append('Description');
dogDetails.append(descriptionHeader)

let paragragh = document.createElement('p')
paragragh.textContent = 'This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her, anddislikes other animals'
dogDetails.append(paragragh); 

let descriptionHeader2 = document.createElement('h3')
descriptionHeader2.append('Feeding Times:')
dogDetails.append(descriptionHeader2)

