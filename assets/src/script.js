document.addEventListener("DOMContentLoaded", function () {
    const loginCadastro = document.getElementById('loginCadastro')
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if (isAuthenticated) {
        const userName = localStorage.getItem('userName')
        loginCadastro.innerHTML = `
            <span>Logado como ${userName}</span>
            <a id="logoutBtn" href="#">Sair</a>
        `
    } else {
        loginCadastro.innerHTML = `
            <a href="http://127.0.0.1:5502/login.html">Entrar</a>
            <a class="cadastro-header" href="./cadastro.html">Cadastrar</a>
        `
    }


    const logoutBtn = document.getElementById('logoutBtn')
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (event) {
            event.preventDefault()
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('userName')
            window.location.href = 'index.html'
        })
    }
})
