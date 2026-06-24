const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    const isCurrent = a.getAttribute('href') === `#${current}`;
    a.style.color = isCurrent ? 'var(--gold)' : '';
    a.style.opacity = isCurrent ? '1' : '';
  });
});

const contatoForm = document.querySelector('.contato-form');
const submitButton = document.querySelector('.btn-submit');

// Não bloqueamos o envio do formulário para que o Formsubmit.co possa processar o POST.
// Se precisar de feedback customizado antes de redirecionar, podemos implementar isso com AJAX.
if (!contatoForm || !submitButton) {
  // Nada a fazer aqui.
}
