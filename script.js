let sliderElement = document.querySelector(`#slider`)
let buttonElement = document.querySelector(`#button`)

let sizePassword = document.querySelector(`#quant`)
let password = document.querySelector(`#password`)

let containerPassword = document.querySelector(`#container-password`)

let charSet = 'abcdefghijklmnopqrtuwxyzABCDEFGHIJKLMNOPQRTUWXYZ0123456789@!#$&'
let novaSenha = ``

sizePassword.innerHTML = sliderElement.value



slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

buttonElement.addEventListener(`click`, function () {

    let pass = ``

    for( let i = 0, n = charSet.length ; i < sliderElement.value; i++ ){
        pass += charSet.charAt( Math.floor( Math.random() * n ) )
    }
    
    containerPassword.classList.remove(`hide`)
    password.innerHTML = pass
    novaSenha = pass
})

containerPassword.addEventListener( `click`, copyPassword )


async function copyPassword () {
    const textCopied = await navigator.clipboard.writeText(novaSenha)

    alert(`Senha copiada com sucesso!`)
}