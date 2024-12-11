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