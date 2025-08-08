
const show = id => {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
const toggleMenu = () => {
  const m = document.getElementById('mobileNav');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
window.addEventListener('resize', () => {
  if (getComputedStyle(document.querySelector('nav ul')).display !== 'none') {
    document.getElementById('mobileNav').style.display = 'none';
  }
});
