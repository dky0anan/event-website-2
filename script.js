document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // 檢查元素是否存在，確保代碼不會報錯
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // 點擊時切換 .nav-links 的 active 類別 (讓它顯示/隱藏)
            navLinks.classList.toggle('active');
            
            // 點擊時切換 .hamburger-menu 的 open 類別 (線條動畫用)
            hamburger.classList.toggle('open'); 
        });
    }
});