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

    let filterMainOpen = document.querySelector('.filter-btn-more');

    if(filterMainOpen) {
        let filterMainText = filterMainOpen.querySelector('.filter-input__name'),
        filterOther = document.querySelector('.hero__wrapper');

        let toggleFilter = true;

        filterMainOpen.addEventListener('click', (e) => {
            filterOther.classList.toggle('open')

            filterMainText.textContent = toggleFilter ? 'Скрыть' : 'Еще фильтры';
            toggleFilter = !toggleFilter;
        })
    }


    // Фильтр в каталоге
    let filter = document.querySelector('.catalog__side'),
        filterOpen = document.querySelector('.catalog__menu'),
        filterClose = document.querySelector('.filter__close');
    
    if(filter) {
        filterOpen.addEventListener('click', (e) => {
            filter.classList.add('open')
        })

        filterClose.addEventListener('click', (e) => {
            filter.classList.remove('open')
        })
    }


    // Аккордеон
    $('.accordion__top').click((e) => {
        let container = $(e.target).closest('.accordion-list__item');
        container.find('.accordion__bottom').toggleClass('open')
        container.find('.accordion__top').toggleClass('open')
    })
    $('.filter-category__top').click((e) => {
        let container = $(e.target).closest('.filter-category__list');
        container.toggleClass('open')
    })

    // Модальное окно
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function () {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    showModal($('.feedback'), $('.modal--form'));
    showModal($('.mobile-search'), $('.modal--search'));
    showModal($('.mobile-contacts'), $('.modal--contacts'));

    const listItems = document.querySelectorAll('.card-table--char .card-table__item');
    const moreButton = document.querySelector('.card-table__more');
    const visibleItemsCount = 6;
    let isExpanded = false;
    
    if(listItems.length) {
        function updateListVisibility() {
            listItems.forEach((item, index) => {
                if (index >= visibleItemsCount) {
                    item.style.display = isExpanded ? 'flex' : 'none';
                }
            });
            moreButton.textContent = isExpanded ? 'Скрыть' : 'Показать еще';
        }
    
        updateListVisibility();
    
        moreButton.addEventListener('click', function() {
            isExpanded = !isExpanded;
            updateListVisibility();
        });
    }

    // Scroll
    let element = document.querySelector('.slimScroll');
    if(element) {
        let instance = new slimScroll(element, {
            'wrapperClass': 'scroll-wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarContainerSpecialClass': 'animate',
            'scrollBarClass': 'scroll'
        });
    }

    // Fancybox
    function fancybox(container) {
        Fancybox.bind(`[data-fancybox="${container}"]`, {
            compact: false,
            contentClick: "iterateZoom",
            Images: {
                Panzoom: {
                    maxScale: 2,
                },
            },
            wheel: "slide",
            Toolbar: {
                display: {
                    left: [
                        "infobar",
                    ],
                    middle: [],
                    right: [
                        "iterateZoom",
                        "close",
                    ],
                }
            }
        });
    }
    fancybox('specification')
    fancybox('certificate')
    fancybox('card')
})