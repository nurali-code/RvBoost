
document.addEventListener('DOMContentLoaded', function () {

    // Функция для добавления и удаления класса 'active' для элементов
    function toggleActiveElements(elements) {
        elements.forEach(element => {
            element.classList.remove('active');
        });
    }

    // Обработчик события клика на кнопку .btn-menu
    const btnMenu = document.querySelector('.btn-menu');
    const body = document.body;
    const nav = document.querySelector('.nav');
    btnMenu.addEventListener('click', function () {
        [body, nav, btnMenu].forEach(element => {
            element.classList.add('active');
        });
    });
    // Обработчик события клика вне определенных элементов
    document.addEventListener('click', function (e) {
        const selectors = ['.modal-content', '.btn-menu', '.language-form', '.nav', '.language__btn', '.present', '.cat-item'];
        if (!selectors.some(selector => e.target.matches(selector) || e.target.closest(selector))) {
            toggleActiveElements([body, nav, btnMenu, document.querySelector('.language-form')]);
            hideModals();
        }
    });

    /*--------------------------------------------------end*/

    // Функция для выбора продукта
    function productSelect(item) {
        const cardHeading = document.querySelector('.card__heading');
        const cardPrice = document.querySelector('.card__price');
        const cardtValue = item.getAttribute('data-product');

        document.querySelectorAll('[data-product-img]').forEach(img => {
            img.style.display = 'none';
        });

        const selectedImg = document.querySelector(`[data-product-img="${cardtValue}"]`);
        if (selectedImg) {
            selectedImg.style.display = 'block';
        }
        const label = item.classList.contains('label') ? item : document.querySelector(`[for="${cardtValue}"]`);
        if (label) {
            document.querySelectorAll('[for]').forEach(forLabel => {
                forLabel.checked = false;
            });
            label.previousElementSibling.checked = true;
            cardHeading.textContent = label.querySelector('.heading').textContent;
            cardPrice.innerHTML = label.querySelector('.price').innerHTML;
        }
    }

    const initialSelectedItem = document.querySelector('.card-nav__item.active');
    if (initialSelectedItem) {
        productSelect(initialSelectedItem);
    }

    document.querySelectorAll('[data-product]').forEach(item => {
        item.addEventListener('click', function () {
            productSelect(this);
        });
    });

    /*---------------------------------------------------end*/

    // Обработчик события клика на .language__btn
    const languageBtn = document.querySelector('.language__btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', function () {
            const languageForm = this.nextElementSibling;
            if (languageForm) {
                languageForm.classList.toggle('active');
            }
        });
    }

    /*---------------------------------------------------end*/

    if (window.innerWidth >= 1000) {
        setTimeout(() => {
            document.querySelector('.present').classList.add('active');
        }, 20000);

        let timer;
        let added = false;

        function toggleShowClass() {
            const purchase = document.querySelector('.purchase');
            if (purchase && !added) {
                purchase.classList.add('active');
                setTimeout(() => {
                    purchase.classList.remove('active');
                }, 10000);
                added = true;
            }
        }

        const purchaseClose = document.querySelector('.purchase__close');
        if (purchaseClose) {
            purchaseClose.addEventListener('click', () => {
                const purchase = document.querySelector('.purchase');
                if (purchase) {
                    purchase.classList.remove('active');
                }
            });
        }

        document.addEventListener('mousemove', () => {
            if (!added) {
                clearTimeout(timer);
                timer = setTimeout(toggleShowClass, 10000);
            }
        });
    }

    /*---------------------------------------------------end*/

    // Функция для скрытия модальных окон
    function hideModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.classList.remove('active');
    }

    // Обработчики событий для модальных окон
    document.querySelectorAll('[data-modal]').forEach(modalBtn => {
        modalBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                showModal(modalId);
            }
        });
    });

    document.querySelectorAll('.modal__close, .modal__cancel').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            hideModals();
        });
    });

    function showModal(id) {
        const modal = document.querySelector('#' + id);
        if (modal) {
            document.body.classList.add('active');
            modal.style.display = 'block';
        }
    }

    /*---------------------------------------------------end*/

    // Обработчики событий для плавной прокрутки
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /*---------------------------------------------------end*/

    // Обработчики событий для выпадающего меню
    const dropdownButtons = document.querySelectorAll('.dropdown__btn');
    if (dropdownButtons.length > 0) {
        dropdownButtons[0].classList.add('active');
        dropdownButtons[0].nextElementSibling.classList.add('active');
    }

    dropdownButtons.forEach(dropdownButton => {
        dropdownButton.addEventListener('click', function (e) {
            const isActive = this.classList.contains('active');
            dropdownButtons.forEach(button => {
                button.classList.remove('active');
                const content = button.nextElementSibling;
                if (content) {
                    content.classList.remove('active');
                }
            });
            if (!isActive) {
                this.classList.add('active');
                const content = this.nextElementSibling;
                if (content) {
                    content.classList.add('active');
                }
            }
        });
    });

});
