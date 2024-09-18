document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.mobile-menu'),
        overlay = document.querySelector('.overlay'),
        btnMenu = document.querySelector('.btn-menu'),
        btnCloseMenu = document.querySelector('.close-menu');

    function closeMenu(btn) {
        btn.addEventListener('click', (e) => {
            menu.classList.remove('open')
            overlay.classList.remove('open')

            btnMenu.classList.remove('btn-menu--open')
        })
    }

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')
        overlay.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
    })
    closeMenu(btnCloseMenu)
    closeMenu(overlay)

    function resize() {
        let width = window.innerWidth;

        if (width > 1280) {
            menu.classList.remove('open')
            overlay.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    // Фильтр на главной
    let toggle = document.querySelectorAll('.filter-input__top');

    toggle.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let item = e.target.closest('.filter-input__item');
            if (!item) return; 
            
            let name = item.querySelector('.filter-input__name');
            let icon = item.querySelector('.filter-input__icon');
            let body = item.querySelector('.filter-input__body');
            
            if (!name || !icon || !body) return;
    
            // Закрыть все открытые списки перед открытием нового
            document.querySelectorAll('.filter-input__item').forEach(otherItem => {
                if (otherItem !== item) {
                    let otherName = otherItem.querySelector('.filter-input__name');
                    let otherIcon = otherItem.querySelector('.filter-input__icon');
                    let otherBody = otherItem.querySelector('.filter-input__body');
                    
                    // Проверка на наличие элементов перед их закрытием
                    if (otherName) otherName.classList.remove('active');
                    if (otherIcon) otherIcon.classList.remove('open');
                    if (otherBody) otherBody.classList.remove('open');
                }
            });
    
            // Открыть/закрыть текущий список
            name.classList.toggle('active');
            icon.classList.toggle('open');
            body.classList.toggle('open');
        });
    });
})