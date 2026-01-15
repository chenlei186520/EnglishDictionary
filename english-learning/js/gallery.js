// gallery.js - 图鉴功能逻辑

// 图鉴物品列表
const galleryItems = [
    {
        id: 1,
        name: "普通卡皮巴拉",
        icon: "🐿️",
        description: "最基本的卡皮巴拉图标",
        cost: 50,
        owned: true // 默认拥有
    },
    {
        id: 2,
        name: "微笑卡皮巴拉",
        icon: "😊🐿️",
        description: "面带微笑的卡皮巴拉",
        cost: 100
    },
    {
        id: 3,
        name: "爱心卡皮巴拉",
        icon: "❤️🐿️",
        description: "充满爱心的卡皮巴拉",
        cost: 150
    },
    {
        id: 4,
        name: "学习卡皮巴拉",
        icon: "📚🐿️",
        description: "正在学习的卡皮巴拉",
        cost: 200
    },
    {
        id: 5,
        name: "睡觉卡皮巴拉",
        icon: "😴🐿️",
        description: "正在睡觉的卡皮巴拉",
        cost: 250
    },
    {
        id: 6,
        name: "跳舞卡皮巴拉",
        icon: "💃🐿️",
        description: "正在跳舞的卡皮巴拉",
        cost: 300
    },
    {
        id: 7,
        name: "厨师卡皮巴拉",
        icon: "👨🍳🐿️",
        description: "正在做饭的卡皮巴拉",
        cost: 350
    },
    {
        id: 8,
        name: "宇航员卡皮巴拉",
        icon: "👨🚀🐿️",
        description: "宇航员卡皮巴拉",
        cost: 500
    },
    {
        id: 9,
        name: "国王卡皮巴拉",
        icon: "👑🐿️",
        description: "卡皮巴拉国王",
        cost: 1000
    }
];

// 加载图鉴
function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;
    
    // 获取用户已拥有的物品
    const ownedItems = getOwnedItems();
    
    // 清空容器
    galleryContainer.innerHTML = '';
    
    // 生成图鉴卡片
    galleryItems.forEach(item => {
        const isOwned = ownedItems.includes(item.id) || item.owned;
        const card = createGalleryCard(item, isOwned);
        galleryContainer.appendChild(card);
    });
}

// 创建图鉴卡片
function createGalleryCard(item, isOwned) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    
    const userScore = parseInt(localStorage.getItem('userScore')) || 0;
    const canAfford = userScore >= item.cost;
    
    card.innerHTML = `
        <div class="gallery-item">${item.icon}</div>
        <div class="gallery-name">${item.name}</div>
        <div class="gallery-description">${item.description}</div>
        <div class="gallery-cost">💰 ${item.cost} 积分</div>
        <button 
            class="gallery-btn ${isOwned ? 'owned' : ''} ${!isOwned && !canAfford ? 'disabled' : ''}"
            data-id="${item.id}"
            ${!isOwned && !canAfford ? 'disabled' : ''}
        >
            ${isOwned ? '✅ 已拥有' : '💎 兑换'}
        </button>
    `;
    
    // 添加兑换事件
    const btn = card.querySelector('.gallery-btn');
    if (btn && !isOwned && canAfford) {
        btn.addEventListener('click', () => handleExchange(item.id));
    }
    
    return card;
}

// 处理兑换
function handleExchange(itemId) {
    const item = galleryItems.find(i => i.id === itemId);
    if (!item) return;
    
    let userScore = parseInt(localStorage.getItem('userScore')) || 0;
    
    // 检查积分是否足够
    if (userScore < item.cost) {
        alert('积分不足，无法兑换！');
        return;
    }
    
    // 扣除积分
    userScore -= item.cost;
    localStorage.setItem('userScore', userScore.toString());
    
    // 更新积分显示
    updateScore(userScore);
    
    // 标记为已拥有
    const ownedItems = getOwnedItems();
    if (!ownedItems.includes(itemId)) {
        ownedItems.push(itemId);
        localStorage.setItem('ownedItems', JSON.stringify(ownedItems));
    }
    
    // 更新页面
    loadGallery();
    
    // 显示兑换成功信息
    alert(`🎉 成功兑换 ${item.name}！`);
}

// 获取已拥有的物品
function getOwnedItems() {
    const ownedItems = localStorage.getItem('ownedItems');
    return ownedItems ? JSON.parse(ownedItems) : [];
}

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 加载图鉴
    loadGallery();
    
    // 返回按钮事件
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});