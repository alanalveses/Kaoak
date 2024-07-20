document.addEventListener('DOMContentLoaded', () => {
    const shareLinks = document.querySelectorAll('.share-link');

    shareLinks.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            const title = link.getAttribute('data-title');
            const url = link.getAttribute('data-url');
            const text = `Confira este jogo incrível: ${title}`;

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: title,
                        text: text,
                        url: url
                    });
                    console.log('Compartilhamento bem-sucedido!');
                } catch (err) {
                    console.error('Erro ao compartilhar:', err);
                }
            } else {
                alert('O compartilhamento não é suportado neste navegador.');
            }
        });
    });
});
