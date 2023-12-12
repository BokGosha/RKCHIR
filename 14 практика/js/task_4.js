document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const handle = document.getElementById('sliderHandle');

    let isDragging = false;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        handle.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        handle.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const sliderRect = slider.getBoundingClientRect();
        let newPosition = e.clientX - sliderRect.left;

        // Ограничиваем положение бегунка в пределах слайдера
        if (newPosition < 0) {
            newPosition = 0;
        } else if (newPosition > sliderRect.width - handle.clientWidth) {
            newPosition = sliderRect.width - handle.clientWidth;
        }

        handle.style.left = newPosition + 'px';
    });
});