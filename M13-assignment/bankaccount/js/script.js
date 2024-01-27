const buttonClick = (btnId) => {
    // let btnId = btnId
    // const wasClicked = (btnId) => {
        console.log(`The ${btnId} button was clicked!`)
    // }
}

const init = () => {
    document.getElementById('name').addEventListener('click', buttonClick('name'))
    document.getElementById('deposit').addEventListener('click', buttonClick('deposit'))
    document.getElementById('withdrawl').addEventListener('click', buttonClick('withdrawl'))
}

window.addEventListener('load', init())