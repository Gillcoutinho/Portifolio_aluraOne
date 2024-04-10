function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Referencie o botão de alternância de tema no HTML
const themeToggle = document.getElementById('theme-toggle');

// Adicione um ouvinte de evento para o clique no botão
themeToggle.addEventListener('click', function () {
  // Adicione ou remova a classe apropriada para alternar os temas
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
