const petArray = []
const getInput = (list, inputPet) => {
    let allPets = document.getElementById(list)
    let newPet = document.createElement('li')
    let arrayList = allPets.querySelectorAll('li')
    newPet.innerText = inputPet.value
    newPet.classList.add('original')
    allPets.appendChild(newPet)
    console.log(arrayList)
    inputPet.value = ''
    arrayList.forEach(allList => {
        allList.addEventListener('click', function () {
            allList.style.display = 'none'
            console.log('clicked')
        })
    })
    return false
}