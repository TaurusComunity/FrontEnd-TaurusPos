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
  let fullSidebarHeight = "calc(100vh - 3px)"; // Height in larger screen
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


  document.addEventListener('DOMContentLoaded', (event) => {
    const fechaElemento = document.getElementById('fecha');
    const añoElemento = document.getElementById('año');
    const fecha = new Date();

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dia = dias[fecha.getDay()];
    const diaNumero = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    fechaElemento.textContent = `Hoy ${diaNumero} de ${mes} de ${año}`;
    añoElemento.textContent = `${año}`;
});

  document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days');
    const monthYearSpan = document.getElementById('month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();
    const today = new Date();

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    function generateCalendar(date) {
        daysContainer.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDayOfMonth.getDay();

        monthYearSpan.textContent = `${meses[month]} ${year}`;

        // Días del mes anterior
        const prevMonth = new Date(year, month - 1, 0);
        const daysInPrevMonth = prevMonth.getDate();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = daysInPrevMonth - i;
            dayDiv.classList.add('text-gray-400', 'p-1');
            daysContainer.appendChild(dayDiv);
        }

        // Días del mes actual
        for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.classList.add('p-1');

            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                dayDiv.classList.add('bg-[#ff3131]', 'text-white', 'rounded-full');
            }

            daysContainer.appendChild(dayDiv);
        }

        // Días del mes siguiente
        const nextMonthStart = (firstDayOfWeek + lastDayOfMonth.getDate()) % 7;
        if (nextMonthStart !== 0) {
            for (let i = 1; i <= (7 - nextMonthStart); i++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = i;
                dayDiv.classList.add('text-gray-400', 'p-1');
                daysContainer.appendChild(dayDiv);
            }
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    generateCalendar(currentDate);
});


// Obtener la referencia al elemento de saludo
const saludoElement = document.getElementById('saludo');

// Obtener la hora actual
const now = new Date();
const hours = now.getHours();

// Determinar el saludo según la hora
let saludo;
if (hours >= 5 && hours < 12) {
    saludo = "¡Buenos días!,";
} else if (hours >= 12 && hours < 18) {
    saludo = "¡Buenas tardes!,";
} else {
    saludo = "¡Buenas noches!,";
}

// Actualizar el contenido del saludo
saludoElement.textContent = saludo;


// Frases motivadoras para cada día
const frases = [
  // Lunes
  "¡Nuevo lunes, nueva oportunidad de brillar! 🌟",
  "¡Comienza la semana con fuerza y determinación! 💪",
  "¡El éxito de esta semana empieza hoy! 🚀",
  "¡Haz que este lunes sea legendario! 🔥",
  "¡Hoy es el primer paso hacia tus metas! 🏆",
  // Martes
  "¡Martes, el día perfecto para avanzar! 🏃‍♂️",
  "¡Sigue construyendo tus sueños! 🌈",
  "¡Hoy es tu oportunidad para destacar! ✨",
  "¡Martes de energía, mantén el ritmo! ⚡",
  "¡Nada puede detenerte hoy, sigue adelante! 🛤️",
  // Miércoles
  "¡Mitad de semana, pero todavía hay mucho por lograr! 🚧",
  "¡Este miércoles está lleno de posibilidades! 🌟",
  "¡Un paso más cerca de tus objetivos! 🏔️",
  "¡Cada pequeño esfuerzo suma al éxito! 🎯",
  "¡Es miércoles, sigue construyendo tu futuro! 🏗️",
  // Jueves
  "¡El fin de semana se acerca, pero no bajes la guardia! 💼",
  "¡Hoy es el día para dar lo mejor de ti! 🔥",
  "¡Jueves de oportunidades, no las dejes pasar! 🌊",
  "¡La constancia siempre trae recompensas! 🥇",
  "¡Este jueves, el esfuerzo marca la diferencia! 🛠️",
  // Viernes
  "¡El viernes es solo el inicio de tus logros! 🚀",
  "¡Termina la semana con la misma fuerza con la que empezaste! 💪",
  "¡Hoy puedes alcanzar grandes cosas! 🌟",
  "¡Viernes, el día para celebrar tu esfuerzo! 🎉",
  "¡Aprovecha el viernes, da ese último empujón! 🚴‍♂️",
  // Sábado
  "¡Sábado, el día perfecto para soñar y actuar! 🌞",
  "¡Hoy es un buen día para seguir creciendo! 🌱",
  "¡Sábado de energía y positividad! 🌈",
  "¡El esfuerzo de hoy es la recompensa de mañana! 💼",
  "¡Aprovecha este sábado para avanzar un paso más! ⏳",
  // Domingo
  "¡Domingo, tiempo de reflexionar y planificar! 📝",
  "¡Recarga energías, mañana comienza otra gran semana! 🌟",
  "¡El descanso también es parte del éxito! 🛌",
  "¡Hoy es el día para prepararte para nuevos retos! 🛠️",
  "¡Domingo, un momento para agradecer y avanzar! 🙏",
  // Frases genéricas
  "¡Cada día es una nueva oportunidad para ser mejor! 🌟",
  "¡El límite está en tu mente, no en tus acciones! 🚀",
  "¡Confía en ti, hoy será un gran día! 💪",
  "¡Nunca es tarde para comenzar algo increíble! ✨",
  "¡Haz que cada día cuente! 🎯",
  "¡Tu actitud define tus resultados! 😎",
  "¡Cada esfuerzo que haces vale la pena! 🥇",
  "¡Persigue tus sueños, nunca dejes de intentarlo! 🌈",
  "¡Hoy es el día perfecto para hacer historia! 📖",
  "¡La clave del éxito está en no rendirse jamás! 🔑"
];


const diaActual = new Date().getDay();
const frasesDia = frases.slice(diaActual * 5, diaActual * 5 + 5); // 5 frases por día
const fraseSeleccionada = frasesDia[Math.floor(Math.random() * frasesDia.length)];
document.getElementById('fraseDia').textContent = fraseSeleccionada;

frasesDiaElement.classList.remove('fade-in');
setTimeout(() => {
    frasesDiaElement.classList.add('fade-in');
}, 50);



