let mengdeEl = document.querySelector('#mengde')
let prosentEl = document.querySelector('#prosent')
let konverterEl = document.querySelector('#konverter')
let prosentPilsEl = document.querySelector('#prosentPils')
let pilsEl = document.querySelector('#pils')

konverterEl.addEventListener('click', konverter)

function konverter(){
    let rent = Number(mengdeEl.value*(prosentEl.value))
    console.log(rent)
    let enheter = Number((rent/prosentPilsEl.value)/500)
    console.log(enheter)
    pilsEl.innerHTML = `Pils: ${Math.round(enheter * 100) / 100}`
}