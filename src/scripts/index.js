/* Desenvolva sua lógica aqui */
import { handleModal } from "./modal.js"
import { insertedValues } from "./valuesData.js"

const handleRegisterValue = (array) => {
  const modal = document.querySelector('.modal__controller')
  const value = document.querySelector('#value')
  const radios = document.querySelectorAll('input[type="radio"]')
  const button = document.querySelector('.submit')

  let newValue = {}

  button.addEventListener('click', (event) => {
    event.preventDefault()

    //adicionando o id ao objeto
    newValue.id = Number(array.length + 1)

    //adicionando o valor
    newValue.value = Number(value.value)

  //adicionando tipo entranda/saida
  radios.forEach((radio) => {
    if (radio.checked) {
      if (radio.value == 0) {
        newValue.valuesCategory = "Entrada"
      } else {
        newValue.valuesCategory = "Saída"
      }
    }
  });

  array.push(newValue)
  newValue = {}
  render(insertedValues)

  modal.close()
  })
}

const render = (array) => {
  const resumeList = document.querySelector('.resume__list')

  resumeList.innerHTML = ""

  array.forEach(value => {
    const card = createCard(value)

    resumeList.appendChild(card)
  });

}

const createCard = (object) => {
  const li = document.createElement('li')
  const value = document.createElement('span')
  const div = document.createElement('div')
  const op = document.createElement('span')
  const btn = document.createElement('button')

  li.classList.add("value__card")
  value.classList.add("text1")
  value.classList.add("medium")
  op.classList.add("span")
  div.classList.add("buttons__container")
  btn.classList.add("delete__button")

  btn.addEventListener('click', () => {

    

  })

  value.innerText = `R$ ${object.value.toFixed(2)}`
  op.innerText = object.valuesCategory
  btn.innerHTML = "<img src='./src/assets/trash.svg'>"

  div.append(op, btn)
  li.append(value, div)

  return li
}

const handleDeleteClient = (array) => {
  const buttons = document.querySelectorAll('.delete__button')


  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('asdasdas')

    })
  })
}

const sumValues = () => {
  const sumItem = document.querySelector('.sum__item')


}




handleDeleteClient()
handleRegisterValue(insertedValues)
render(insertedValues)
handleModal()