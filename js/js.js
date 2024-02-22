function escreve(title){
    const textoArray = title.innerHTML.split('');
    title.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            title.innerHTML += letra;
        }, 100 * i)
    });
}

const title = document.querySelector('h1');
 escreve(title);