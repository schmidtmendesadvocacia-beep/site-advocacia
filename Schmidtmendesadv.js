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
if (contatoForm && submitButton) {
  contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim() || 'Não informado';
    const phone = document.getElementById('contact-phone')?.value.trim() || 'Não informado';
    const email = document.getElementById('contact-email')?.value.trim() || 'Não informado';
    const area = document.getElementById('contact-area')?.value || 'Não informado';
    const message = document.getElementById('contact-message')?.value.trim() || 'Sem mensagem';

    // Remover envio via mailto: manter apenas o formulário como antes.
    // Exibe confirmação ao usuário e reseta o formulário (sem abrir cliente de e-mail).
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Mensagem enviada!';
    submitButton.style.background = '#4a7c59';
    submitButton.style.color = '#fff';

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.background = '';
      submitButton.style.color = '';
      submitButton.disabled = false;
      contatoForm.reset();
    }, 3000);
  });
}
