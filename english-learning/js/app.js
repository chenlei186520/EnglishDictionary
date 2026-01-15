// app.js - 主要应用逻辑

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化应用
    initApp();
    
    // 如果是首页，初始化选择功能
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        initSelection();
    }
    
    // 初始化积分和打卡功能
    initUserInfo();
});

// 初始化应用
function initApp() {
    console.log('🎉 小学生英语学习乐园初始化完成！');
}

// 初始化选择功能
function initSelection() {
    const startBtn = document.getElementById('startBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', handleStartLearning);
    }
}

// 处理开始学习按钮点击
function handleStartLearning() {
    const textbook = document.getElementById('textbook').value;
    const grade = document.getElementById('grade').value;
    const semester = document.getElementById('semester').value;
    
    // 保存选择的参数到localStorage
    localStorage.setItem('currentTextbook', textbook);
    localStorage.setItem('currentGrade', grade);
    localStorage.setItem('currentSemester', semester);
    
    // 跳转到学习页面
    window.location.href = 'learn.html';
}

// 初始化用户信息
function initUserInfo() {
    // 初始化积分
    let score = parseInt(localStorage.getItem('userScore')) || 0;
    updateScore(score);
    
    // 初始化打卡功能
    initCheckIn();
    
    // 初始化图鉴功能
    initGallery();
}

// 更新积分显示
function updateScore(score) {
    const scoreElement = document.getElementById('userScore');
    if (scoreElement) {
        scoreElement.textContent = score;
    }
    localStorage.setItem('userScore', score.toString());
}

// 初始化打卡功能
function initCheckIn() {
    const checkInBtn = document.getElementById('checkInBtn');
    if (!checkInBtn) return;
    
    // 检查今天是否已经打卡
    const today = new Date().toDateString();
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    
    if (lastCheckIn === today) {
        checkInBtn.disabled = true;
        checkInBtn.textContent = '✅ 已打卡';
        checkInBtn.style.background = '#9ca3af';
    }
    
    // 添加打卡点击事件
    checkInBtn.addEventListener('click', handleCheckIn);
}

// 初始化图鉴功能
function initGallery() {
    const galleryBtn = document.getElementById('galleryBtn');
    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            window.location.href = 'gallery.html';
        });
    }
}

// 处理打卡
function handleCheckIn() {
    const today = new Date().toDateString();
    const checkInBtn = document.getElementById('checkInBtn');
    
    // 标记为已打卡
    localStorage.setItem('lastCheckIn', today);
    
    // 更新按钮状态
    checkInBtn.disabled = true;
    checkInBtn.textContent = '✅ 已打卡';
    checkInBtn.style.background = '#9ca3af';
    
    // 奖励积分
    let score = parseInt(localStorage.getItem('userScore')) || 0;
    const checkInReward = 10;
    score += checkInReward;
    updateScore(score);
    
    // 显示打卡成功提示
    showNotification(`🎉 打卡成功！获得 ${checkInReward} 积分！`);
}

// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // 设置样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-size: 1.1rem;
        z-index: 1000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
    `;
    
    // 添加动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; transform: translateX(100%); }
        }
    `;
    document.head.appendChild(style);
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 3秒后移除
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// 返回首页功能
function goBackHome() {
    window.location.href = 'index.html';
}