// =========================================================
// OBSERVAÇÃO: este mesmo arquivo é usado em index.html,
// login.html e cadastro.html. Como cada página tem elementos
// diferentes, antes de usar um elemento conferimos com "if"
// se ele existe. Sem isso, o JavaScript dá erro nas páginas
// que não têm aquele elemento.
// =========================================================


// =========================================================
// MENU HAMBÚRGUER
// =========================================================

// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#hamburger");
const menu = document.querySelector("#nav");

// 2. Só continua se a página tiver o menu (login e cadastro não têm)
if (botaoMenu && menu) {

    // 3. Escuta o clique no botão
    botaoMenu.addEventListener("click", function () {
        // 4. Alterna (liga/desliga) a classe "active" no botão e no menu.
        //    No botão ela transforma as 3 barras em um "X";
        //    no menu ela faz ele abrir.
        botaoMenu.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // =====================================================
    // FECHAR O MENU AO CLICAR EM UM LINK
    // =====================================================

    // querySelectorAll pega TODOS os links do menu
    const linksDoMenu = document.querySelectorAll(".nav a");

    // forEach = "para cada link da lista, faça isso:"
    linksDoMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove a classe "active" e o menu fecha
            botaoMenu.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}


// =========================================================
// PESQUISA DE CATEGORIAS
// Conforme o usuário digita, escondemos as categorias que
// não combinam com o texto.
// =========================================================

const campoBusca = document.querySelector("#busca");

if (campoBusca) {
    // "input" acontece a cada letra digitada
    campoBusca.addEventListener("input", function () {

        // toLowerCase() deixa tudo em minúsculas, para "ação" e "Ação" serem iguais
        const termo = campoBusca.value.toLowerCase();

        const categorias = document.querySelectorAll("#lista-categorias li");

        categorias.forEach(function (categoria) {
            const nomeCategoria = categoria.textContent.toLowerCase();

            // includes() confere se o nome contém o que foi digitado
            if (nomeCategoria.includes(termo)) {
                categoria.style.display = "";      // mostra
            } else {
                categoria.style.display = "none";  // esconde
            }
        });
    });
}


// =========================================================
// FORMULÁRIO DE CONTATO
// Ainda não temos backend, então a mensagem não é enviada
// de verdade. Por enquanto, só mostramos um aviso.
// =========================================================

const formContato = document.querySelector("#form-contato");
const avisoForm = document.querySelector("#form-aviso");

if (formContato) {
    // "submit" acontece quando o usuário clica em "Enviar mensagem"
    formContato.addEventListener("submit", function (evento) {

        // Cancela o comportamento padrão (recarregar a página)
        evento.preventDefault();

        // Pega o que o usuário digitou no campo "nome"
        const nome = document.querySelector("#nome").value;

        // As crases (`) permitem usar a variável dentro do texto com ${ }
        avisoForm.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;

        // Limpa todos os campos
        formContato.reset();
    });
}


// =========================================================
// LOGIN (página estática)
// Sem banco de dados ainda: qualquer e-mail e senha
// preenchidos "entram" e levam para a página principal.
// =========================================================

const formLogin = document.querySelector("#form-login");

if (formLogin) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        avisoForm.textContent = "Login realizado! Redirecionando...";

        // setTimeout espera 1200 milissegundos (1,2 segundo) e depois executa a função
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1200);
    });
}


// =========================================================
// CADASTRO (página estática)
// Confere se as duas senhas são iguais antes de continuar.
// =========================================================

const formCadastro = document.querySelector("#form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const senha = document.querySelector("#senha").value;
        const confirmar = document.querySelector("#confirmar").value;

        // !== significa "diferente de"
        if (senha !== confirmar) {
            avisoForm.style.color = "#b4182d"; // vermelho do CineFlow
            avisoForm.textContent = "As senhas não são iguais.";
            return; // para aqui e não continua
        }

        avisoForm.style.color = ""; // volta à cor padrão (verde)
        avisoForm.textContent = "Conta criada! Redirecionando para o login...";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1200);
    });
}


// =========================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================================

const campoAno = document.querySelector("#ano");

if (campoAno) {
    // new Date() pega a data de hoje; getFullYear() pega só o ano
    campoAno.textContent = new Date().getFullYear();
}
