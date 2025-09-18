// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Submissão de formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve para confirmar sua consulta.');
    this.reset();
});

// Botões com ação
document.querySelectorAll('button').forEach(button => {
    if (button.type !== 'submit' && !button.querySelector('form')) {
        button.addEventListener('click', function() {
            const txt = this.textContent.trim().toLowerCase();

            if (txt.includes('agendar') || txt.includes('reservar')) {
                // Rola para a seção de contato
                document.querySelector('#contato').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (txt.includes('ver serviços')) {
                // Rola para a seção de serviços
                document.querySelector('#servicos').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (txt.includes('mais informações')) {
                // Mostra alerta de exemplo
                alert('Para mais informações sobre este serviço, entre em contato pelo telefone ou formulário.');
            }
        });
    }
});

// Fade-in ao rolar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .bg-white.p-8.rounded-xl').forEach(el => {
    observer.observe(el);
});
