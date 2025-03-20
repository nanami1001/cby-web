// 當頁面加載完成後添加事件處理
window.onload = function() {
    // 監聽 "了解更多" 連結的點擊事件
    const moreInfoLink = document.getElementById("more-info");

    moreInfoLink.addEventListener("click", function(event) {
        event.preventDefault();  // 阻止默認行為，避免跳轉
        alert("即將來到更多哥特風格的世界！");
    });
};
