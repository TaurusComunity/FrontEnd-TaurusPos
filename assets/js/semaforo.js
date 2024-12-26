document.addEventListener('DOMContentLoaded', () => {
    const contador = document.querySelectorAll('.contador');

    contador.forEach(cell => {
        const text = cell.textContent.trim();
        const quantityMatch = text.match(/\d+/);
        
        if (quantityMatch) {
            const quantity = parseInt(quantityMatch[0], 10);

            if (quantity >= 11 ) {
                cell.classList.add('bg-[#81a263]', 'text-negro');
            } else if (quantity >= 6 && quantity <= 10) {
                cell.classList.add('bg-[#FFA62F]', 'text-negro');
            } else if (quantity <= 5) {
                cell.classList.add('bg-[#fd5d5d]', 'text-negro');
            }
        }
    });
});