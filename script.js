
let cpf = document.getElementById('cpf');
console.log(cpf)

document.getElementById('cpf').addEventListener('blur', () => {
    
    let value = cpf.value.replace(/([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, '$1.$2.$3-$4');
        cpf.value = value
         console.log(value)
})