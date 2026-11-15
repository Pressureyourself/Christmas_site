// ==========================================================================
// 1. МАССИВ С ДАННЫМИ ТОВАРОВ (БАЗА ДАННЫХ ВНУТРИ СКРИПТА)
// ==========================================================================
const products = [
    {
        id: 1,
        name: "Розовая фея",
        article: "PNK 28 CM",
        price: 676767,
        image: "images/img1.png"
    },
    {
        id: 2,
        name: "Светодиодный венок из сосны",
        article: "GRN 122 CM 420 TPC",
        price: 6767,
        image: "images/img2.png"
    },
    {
        id: 3,
        name: "Заснеженный венок из сосны",
        article: "HE-93308",
        price: 6800,
        image: "images/img3.png"
    },
    {
        id: 4,
        name: "Фея тиффани",
        article: "HE-9330809",
        price: 6767,
        image: "images/img4.png"
    },
    {
        id: 5,
        name: "Новогодние шары",
        article: "HE-9323",
        price: 3500,
        image: "images/img5.png"
    },
    {
        id: 6,
        name: "Рождественская балерина",
        article: "HE-9323",
        price: 6767,
        image: "images/img6.png"
    },
    {
        id: 7,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img7.png"
    },
    {
        id: 8,
        name: "",
        article: "",
        price: 6767,
        image: "images/img8.jpg"
    },
    {
        id: 9,
        name: "",
        article: "",
        price: 6767,
        image: "images/img9.png"
    },
    {
        id: 10,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img10.png"
    },
    {
        id:11,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img11.png"
    },
    {
        id:12,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img12.jpg"
    },
    {
        id:13,
        name: "",
        article: "HE",
        price: 6767,
        image: "images/img13.png"
    },
    {
        id:14,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img14.png"
    },
    {
        id:15,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img15.png"
    },
    {
        id:16,
        name: "",
        article: "HE",
        price: 6767,
        image: "images/img16.png"
    },
    {
        id:17,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img17.png"
    },
    {
        id:18,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img18.png"
    },
    {
        id:19,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img19.png"
    },
    {
        id:20,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img20.png"
    },
    {
        id:21,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img21.png"
    },
    {
        id:22,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img22.png"
    },
    {
        id:23,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img23.png"
    },
    {
        id:24,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img24.png"
    },
    {
        id:25,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img25.png"
    },
    {
        id:26,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img26.png"
    },
    {
        id:27,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img28.png"
    },
    {
        id:28,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img27.png"
    },
    {
        id:29,
        name: "",
        article: "HE-93",
        price: 6767,
        image: "images/img29.png"
    }
    
];


// ==========================================================================
// 2. МАГИЯ СНЕГА И МУЗЫКАЛЬНЫЙ ПЛЕЕР
// ==========================================================================

function createSnow() {
    let container = document.querySelector('.snowflake-container');
    if (!container) {
        container = document.createElement('div');
        container.classList.add('snowflake-container');
        document.body.appendChild(container);
    }

    function spawnSnowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');

        const size = Math.random() * 5 + 2; 
        const startX = Math.random() * window.innerWidth; 
        const duration = Math.random() * 4 + 4; 
        const delay = Math.random() * 5; 

        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.left = `${startX}px`;
        flake.style.animationDuration = `${duration}s`;
        flake.style.animationDelay = `${delay}s`;

        container.appendChild(flake);

        setTimeout(() => {
            flake.remove();
        }, (duration + delay) * 1000);
    }

    for (let i = 0; i < 100; i++) {
        spawnSnowflake();
    }

    setInterval(spawnSnowflake, 200);
}

window.addEventListener('DOMContentLoaded', createSnow);

function initMusicPlayer() {
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');

    if (!musicBtn || !bgMusic) return;

    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = '🔊 Музыка играет';
            musicBtn.classList.add('playing');
        } else {
            bgMusic.pause();
            musicBtn.textContent = '🔈 Включить музыку';
            musicBtn.classList.remove('playing');
        }
    });
}

window.addEventListener('DOMContentLoaded', initMusicPlayer);


// ==========================================================================
// 3. СИСТЕМА КАТАЛОГА И ИЗБРАННОГО (ФИЛЬТРАЦИЯ СТРОГО ПО СЕРДЕЧКАМ)
// ==========================================================================

let favorites = [];

// Загружаем избранное из памяти браузера
try {
    const saved = localStorage.getItem("goodwill-favorites");
    const parsed = saved ? JSON.parse(saved) : [];
    if (Array.isArray(parsed)) {
        favorites = parsed.filter(id => products.some(product => product.id === id));
    }
} catch {
    favorites = [];
}

function formatPrice(price) {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function renderProducts() {
    const productsContainer = document.querySelector(".catalog-grid");
    if (!productsContainer) return; 

    productsContainer.innerHTML = ""; 

    // СВЕРХНАДЕЖНЫЙ СПОСОБ: Проверяем текст главного заголовка страницы (H1) или заголовок вкладки
    const headerTitle = document.querySelector(".header .hdr");
    const pageHeadingText = headerTitle ? headerTitle.textContent.toLowerCase() : "";
    const tabTitleText = document.title.toLowerCase();

    // Мы на странице избранного, если в H1 или названии вкладки есть слово "избранное"
    const isFavoritesPage = pageHeadingText.includes("избранное") || tabTitleText.includes("избранное");
    
    // ФИЛЬТРАЦИЯ: Оставляем только те товары, ID которых сохранены в избранном
    const displayProducts = isFavoritesPage 
        ? products.filter(product => favorites.includes(product.id)) 
        : products;

    // Если мы на странице избранного и отложенных товаров нет
    if (isFavoritesPage && displayProducts.length === 0) {
        productsContainer.innerHTML = `
            <div style="text-align: center; color: #fff; font-size: 20px; padding: 40px; font-family: sans-serif; width: 100%; grid-column: 1/-1;">
                <p>Ваш список избранного пуст 🎄</p>
                <p style="font-size: 16px; opacity: 0.8; margin-top: 10px;">Добавьте товары в каталоге, нажав на сердечко!</p>
            </div>
        `;
        return;
    }

    displayProducts.forEach(product => {
        const isFavorite = favorites.includes(product.id);
        const heartSymbol = isFavorite ? "♥" : "♡";
        const favoriteClass = isFavorite ? "favorite-btn is-favorite" : "favorite-btn";

        const cardHTML = `
            <article class="product-card">
                <div class="product-image-container" style="background-image: url('${product.image}');">
                    <button class="${favoriteClass}" type="button" onclick="toggleFavorite(${product.id}, event)" aria-label="Добавить в избранное">
                        ${heartSymbol}
                    </button>
                    <div class="product-overlay-text">
                        <h3>${product.name}</h3>
                        <p class="sku">Артикул: ${product.article}</p>
                    </div>
                </div>
                <div class="product-info-footer">
                    <span class="price">${formatPrice(product.price)}</span>
                </div>
            </article>
        `;
        productsContainer.innerHTML += cardHTML;
    });
}

// Функция переключения сердечка при клике
window.toggleFavorite = function(productId, event) {
    event.stopPropagation(); 
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId); 
    } else {
        favorites.push(productId); 
    }

    try {
        localStorage.setItem("goodwill-favorites", JSON.stringify(favorites));
    } catch {}

    renderProducts(); // Мгновенно обновляем карточки на экране
};

document.addEventListener('DOMContentLoaded', renderProducts);
