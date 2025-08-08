function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
  window.scrollTo(0, 0);
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileNav");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

window.addEventListener('resize', function() {
  const desktopNav = document.querySelector('nav ul');
  const mobileNav = document.getElementById("mobileNav");
  const style = window.getComputedStyle(desktopNav);
  if (style.display !== 'none') {
    mobileNav.style.display = 'none';
  }
});

