document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".sidebar").style.display = "block";
});

document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector(".sidebar").style.display = "none";
});


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}