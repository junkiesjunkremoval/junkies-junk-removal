const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const params = new URLSearchParams(window.location.search);
if (params.get('submitted') === '1') {
  const form = document.querySelector('.quote-form');
  if (form) {
    const notice = document.createElement('p');
    notice.className = 'form-success';
    notice.setAttribute('role', 'status');
    notice.textContent = 'Thanks! If your form was submitted successfully, your request is on its way. We will follow up using the contact details you provided.';
    notice.style.cssText = 'padding:14px;background:#202a17;border:1px solid #b8ff2c;color:#f4f5f0;font-size:13px;margin:0 0 10px';
    form.prepend(notice);
  }
}
