// Seleciona elementos do header
const nav = document.querySelector('header nav');
const menuDesktop = nav.querySelector('ul');
const botoes = nav.querySelector('div');
const header = document.querySelector('header');

// Cria o botão hamburger
const botaoHamburger = document.createElement('button');
botaoHamburger.innerHTML = '☰';
botaoHamburger.style.fontSize = '1.5rem';
botaoHamburger.style.background = 'none';
botaoHamburger.style.border = 'none';
botaoHamburger.style.cursor = 'pointer';
botaoHamburger.style.display = 'none'; // começa oculto
nav.appendChild(botaoHamburger);

// Cria um menu mobile escondido
const menuMobile = document.createElement('div');
menuMobile.style.position = 'absolute';
menuMobile.style.top = '100%';
menuMobile.style.right = '0';
menuMobile.style.backgroundColor = 'rgba(249,250,251,0.95)';
menuMobile.style.backdropFilter = 'blur(10px)';
menuMobile.style.border = '1px solid #e5e7eb';
menuMobile.style.borderRadius = '0.5rem';
menuMobile.style.padding = '1rem';
menuMobile.style.display = 'none';
menuMobile.style.flexDirection = 'column';
menuMobile.style.gap = '1rem';
menuMobile.style.zIndex = '100';
nav.appendChild(menuMobile);

// Move links e botões para o menu mobile
const links = Array.from(menuDesktop.querySelectorAll('li')).map(li => li.cloneNode(true));
links.forEach(link => menuMobile.appendChild(link));
const botoesClone = botoes.cloneNode(true);
menuMobile.appendChild(botoesClone);

// Função para atualizar visibilidade do menu baseado na largura
function atualizarMenu() {
    if(window.innerWidth < 768) {
        menuDesktop.style.display = 'none';
        botoes.style.display = 'none';
        botaoHamburger.style.display = 'block';
    } else {
        menuDesktop.style.display = 'flex';
        botoes.style.display = 'flex';
        botaoHamburger.style.display = 'none';
        menuMobile.style.display = 'none';
    }
}

// Alterna o menu mobile ao clicar no hamburger
botaoHamburger.addEventListener('click', () => {
    menuMobile.style.display = menuMobile.style.display === 'flex' ? 'none' : 'flex';
});

// Atualiza ao carregar e ao redimensionar
window.addEventListener('resize', atualizarMenu);
window.addEventListener('load', atualizarMenu);
