function escreve(elemento, texto) {
    const textoArray = texto.split('');
    elemento.textContent = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.textContent += letra;
        }, 100 * i)
    });
}

const title = document.querySelector('h1');
escreve(title, title.textContent);

document.getElementById('btnPT').addEventListener('click', function () {
    const titleText = "Bem-vindo!";
    escreve(title, titleText);

    document.getElementById('descricao').textContent = "Me chamo Gabriel, sou um desenvolvedor web com experiência em projetos front-end/back-end. Minha especialidade inclui HTML, CSS, Angular, Bootstrap.";
    document.getElementById('descricao2').textContent = "Além disso, tenho domínio de Java, Spring Boot, Python, Git, Docker, Postman e PostgreSQL para o desenvolvimento de back-end.";
    document.getElementById('titulo2').textContent = "Projetos";
    document.getElementById('descP1').textContent = "Este site foi criado com o intuito didático e para me apresentar. Nele, compartilho meus trabalhos, habilidades e um pouco sobre mim.";
    document.getElementById('tec1').textContent = "Tecnologias: HTML, CSS, JS.";
    document.getElementById('descP2').textContent = "Sistema criado com a intenção de facilitar o gerenciamento de vendas para pequenos empreendedores.";
    document.getElementById('tec2').textContent = "Tecnologias: HTML, CSS, JS, Java, SpringBoot, Postman, PostgreSQL.";
});

document.getElementById('btnEN').addEventListener('click', function () {
    const titleText = "Welcome!";
    escreve(title, titleText);

    document.getElementById('descricao').textContent = "My name is Gabriel, I am a web developer with experience in front-end/back-end projects. My expertise includes HTML, CSS, Angular, Bootstrap.";    
    document.getElementById('descricao2').textContent = "Additionally, I have domain of Java, Spring Boot, Python, Git, Docker, Postman, and PostgreSQL for back-end development.";
    document.getElementById('titulo2').textContent = "Projects";
    document.getElementById('descP1').textContent = "This website was created with didactic purposes and to present myself. Here, I share my works, skills, and a bit about me.";
    document.getElementById('tec1').textContent = "Technologies: HTML, CSS, JS.";
    document.getElementById('descP2').textContent = "System created with the intention of facilitating sales management for small entrepreneurs.";
    document.getElementById('tec2').textContent = "Technologies: HTML, CSS, JS, Java, SpringBoot, Postman, PostgreSQL.";
    
});

document.getElementById('btnPT').addEventListener('click', function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    this.classList.add('active');
});

document.getElementById('btnEN').addEventListener('click', function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    this.classList.add('active');
});
