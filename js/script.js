// COMPONENTE DO CABEÇALHO
class MeuCabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="overlay" onclick="toggleNav()"></div>

            <header class="menu-open">
                <div class="header-content">
                    <button class="btn-trigger" onclick="toggleNav()">≡</button>
                    <div class="brand-box">
                        <img src="https://www.micropedia.com.br/images/b/b4/Brasao_Tybaia.png" alt="Brasão de Tybaia" class="brasao">
                        <span class="nome-principado">Principado de Tybaia</span>
                    </div>
                </div>
            </header>

            <nav id="sidebar">
                <div class="menu-scroll">
                    <div class="sidebar-header">
                        <h2>Chancelaria Nacional</h2>
                    </div>
                    
                    <div class="nav-list">
                        <a href="#" class="group-title" style="text-decoration: none;">Início</a>

                        <div class="nav-group" style="border-left: 5px solid var(--branco);">
                            <span class="group-title">Sobre</span>
                            <ul class="sub-links">
                                <li><a href="#">História</a></li>
                                <li><a href="#">Notícias</a></li>
                            </ul>
                        </div>

                        <div class="nav-group" style="border-left: 5px solid var(--dourado);">
                            <span class="group-title">Diplomacia</span>
                            <ul class="sub-links">
                                <li><a href="#">Tratados</a></li>
                                <li><a href="#">Relações</a></li>
                            </ul>
                        </div>

                        <div class="nav-group" style="border-left: 5px solid var(--verde);">
                            <span class="group-title">Distritos</span>
                            <ul class="sub-links">
                                <li><a href="#">Maranguape</a></li>
                                <li><a href="#">Maracanaú</a></li>
                                <li><a href="#">Caucaia</a></li>
                                <li><a href="#">Distrito Neutro</a></li>
                            </ul>
                        </div>

                        <div class="nav-group" style="border-left: 5px solid var(--azul-escuro);">
                            <span class="group-title">Legislativo</span>
                            <ul class="sub-links">
                                <li><a href="#">Conselho dos Elos</a></li>
                                <li><a href="#">Legislação</a></li>
                                <li><a href="#">Carta de Tybaia</a></li>
                            </ul>
                        </div>

                        <div class="nav-group" style="border-left: 5px solid var(--vermelho);">
                            <span class="group-title">O Principado</span>
                            <ul class="sub-links">
                                <li><a href="#">Coroa</a></li>
                                <li><a href="#">Família Principesca</a></li>
                                <li><a href="#">Governo</a></li>
                                <li><a href="#">Diário Oficial</a></li>
                            </ul>
                        </div>

                        <button class="btn-close-mobile" onclick="toggleNav()" style="display: none;">Fechar Painel</button>
                    </div>
                </div>

                <div class="toggle-column" onclick="toggleNav()" title="Ocultar Painel">
                    <span>❮</span>
                </div>
            </nav>
        `;
    }
}
customElements.define('meu-cabecalho', MeuCabecalho);

// COMPONENTE DO RODAPÉ
class MeuRodape extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="chancelaria-container">
                <img src="https://www.micropedia.com.br/images/b/b4/Brasao_Tybaia.png" alt="Brasão de Tybaia" class="chancelaria-logo">
                
                <h3 class="chancelaria-title">Chancelaria Nacional</h3>
                <p class="chancelaria-subtitle">Principado de Tybaia</p>

                <div class="contact-grid">
                    <div class="contact-item">📍 Sede Administrativa - Distrito Neutro</div>
                    <a href="mailto:contato@tybaia.gov" class="contact-item">✉️ chancelaria@tybaia.gov</a>
                    <div class="contact-item">🏛️ Gabinete de Relações Exteriores</div>
                </div>

                <a href="#" class="btn-portal">PORTAL DO CIDADÃO</a>
            </div>

            <div class="footer-bottom">
                &copy; 2026 Principado de Tybaia. Soberania, Ordem e Tradição.
            </div>

            <div class="flag-strip">
                <div class="bg-blue"></div>
                <div class="bg-white"></div>
                <div class="bg-green"></div>
                <div class="bg-red"></div>
            </div>
        </footer>
        `;
    }
}
customElements.define('meu-rodape', MeuRodape);

function toggleNav() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
    } else {
        // Se não tiver classe nenhuma (início), ele assume que está aberto e fecha
        if (body.classList.contains('menu-closed')) {
            body.classList.replace('menu-closed', 'menu-open');
        } else {
            // Se estiver aberto ou sem classe, ele fecha
            body.classList.add('menu-closed');
            body.classList.remove('menu-open');
        }
    }
}

// Garante que o estado inicial do Desktop seja 'menu-open'
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 1024) {
        document.body.classList.add('menu-open');
    }
    
    // Ajuste do botão mobile
    const checkMobile = () => {
        const btnClose = document.querySelector('.btn-close-mobile');
        if (btnClose) {
            btnClose.style.display = window.innerWidth < 1024 ? 'block' : 'none';
        }
    };
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
});

// Exibe botão de fechar no mobile
window.onload = window.onresize = function() {
    const btnClose = document.querySelector('.btn-close-mobile');
    if (window.innerWidth < 1024) {
        btnClose.style.display = 'block';
    } else {
        btnClose.style.display = 'none';
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('sidebar').classList.remove('mobile-open');
    }
};