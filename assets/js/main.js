document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const togglePassword = document.getElementById('toggle-password');

    togglePassword.addEventListener('click', () => {
      // Toggle the input type between 'password' and 'text'
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      // Toggle the icon class
      if (isPassword) {
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
      } else {
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
      }
    });
  });

  const sidebar = document.querySelector(".sidebar");
  const sidebarToggler = document.querySelector(".sidebar-toggler");
  const menuToggler = document.querySelector(".menu-toggler");
  // Ensure these heights match the CSS sidebar height values
  let collapsedSidebarHeight = "56px"; // Height in mobile view (collapsed)
  let fullSidebarHeight = "calc(100vh - 32px)"; // Height in larger screen
  // Toggle sidebar's collapsed state
  sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
  // Update sidebar height and menu toggle text
  const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
  }
  // Toggle menu-active class and adjust height
  menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
  });
  // (Optional code): Adjust sidebar height on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      sidebar.style.height = fullSidebarHeight;
    } else {
      sidebar.classList.remove("collapsed");
      sidebar.style.height = "auto";
      toggleMenu(sidebar.classList.contains("menu-active"));
    }
  });