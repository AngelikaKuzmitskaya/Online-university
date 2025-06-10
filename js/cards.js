
    document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.info').style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
    card.querySelector('.info').style.display = 'none';
});
});

