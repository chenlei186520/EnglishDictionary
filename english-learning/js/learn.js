// learn.js - 学习页面逻辑

// 全局变量
let currentWords = [];
let currentWordIndex = 0;
let score = 0;
let textbook = 'yilin';
let grade = '1';
let semester = '1';
let hasListened = false; // 跟踪用户是否已经听了发音

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化学习页面
    initLearningPage();
});

// 初始化学习页面
function initLearningPage() {
    // 获取用户选择的参数
    textbook = localStorage.getItem('currentTextbook') || 'yilin';
    grade = localStorage.getItem('currentGrade') || '1';
    semester = localStorage.getItem('currentSemester') || '1';
    
    // 显示学习信息
    displayLearningInfo();
    
    // 加载单词列表
    loadWords();
    
    // 显示当前单词
    displayCurrentWord();
    
    // 绑定事件
    bindEvents();
}

// 显示学习信息
function displayLearningInfo() {
    const learningTitle = document.getElementById('learningTitle');
    if (learningTitle) {
        const textbookNames = {
            'yilin': '译林版',
            'pep': '人教版',
            'oxford': '牛津版'
        };
        const semesterNames = {
            '1': '上学期',
            '2': '下学期'
        };
        
        learningTitle.textContent = `${textbookNames[textbook]} ${grade}年级 ${semesterNames[semester]}`;
    }
}

// 加载单词列表
function loadWords() {
    // 从单词数据库获取单词
    currentWords = getWordList(textbook, grade, semester);
    
    // 如果没有单词，返回首页
    if (currentWords.length === 0) {
        alert('该教材暂未添加，返回首页！');
        window.location.href = 'index.html';
        return;
    }
    
    // 随机打乱单词顺序
    shuffleArray(currentWords);
}

// 显示当前单词
function displayCurrentWord() {
    if (currentWords.length === 0 || currentWordIndex >= currentWords.length) {
        return;
    }
    
    const currentWord = currentWords[currentWordIndex];
    
    // 更新单词显示
    const wordDisplay = document.getElementById('wordDisplay');
    const wordPhonics = document.getElementById('wordPhonics');
    const wordMeaning = document.getElementById('wordMeaning');
    const progressText = document.getElementById('progressText');
    
    // 使用自然拼读方式显示单词（不同音节不同颜色）
    if (wordDisplay) {
        wordDisplay.innerHTML = formatWordWithPhonics(currentWord.word, currentWord.spelling);
    }
    
    if (wordPhonics) wordPhonics.textContent = currentWord.phonics;
    if (wordMeaning) wordMeaning.textContent = currentWord.meaning;
    if (progressText) progressText.textContent = `单词 ${currentWordIndex + 1}/${currentWords.length}`;
    
    // 清空输入框和结果消息
    const spellingInput = document.getElementById('spellingInput');
    const resultMessage = document.getElementById('resultMessage');
    
    // 重置是否已听发音状态
    hasListened = false;
    
    if (resultMessage) {
        // 显示提示信息
        resultMessage.textContent = '🔊 请先点击听发音哦！';
        resultMessage.className = 'result-message';
    }
    
    if (spellingInput) {
        spellingInput.value = '';
        // 禁用输入框，必须先听发音
        spellingInput.disabled = true;
    }
    
    // 隐藏下一个按钮
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.style.display = 'none';
    }
}

// 绑定事件
function bindEvents() {
    // 音频按钮事件
    const audioBtn = document.getElementById('audioBtn');
    if (audioBtn) {
        audioBtn.addEventListener('click', playWordAudio);
    }
    
    // 拼写输入事件
    const spellingInput = document.getElementById('spellingInput');
    if (spellingInput) {
        spellingInput.addEventListener('input', handleSpellingInput);
        spellingInput.addEventListener('keypress', handleKeyPress);
    }
    
    // 返回按钮事件
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', goBackHome);
    }
    
    // 下一个按钮事件
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextWord);
    }
}

// 处理拼写输入
function handleSpellingInput() {
    const spellingInput = document.getElementById('spellingInput');
    const resultMessage = document.getElementById('resultMessage');
    const currentWord = currentWords[currentWordIndex];
    
    if (!spellingInput || !resultMessage) return;
    
    const userInput = spellingInput.value.toLowerCase().trim();
    const correctWord = currentWord.word.toLowerCase();
    
    // 实时验证
    if (userInput === correctWord) {
        // 拼写正确
        resultMessage.textContent = '🎉 太棒了！拼写正确！';
        resultMessage.className = 'result-message correct';
        
        // 播放成功音频
        speakMessage('太棒了！拼写正确！');
        
        // 增加积分（改为2分）
        const wordScore = 2;
        score += wordScore;
        updateScore(score);
        
        // 自动跳转到下一个单词（延迟1秒）
        setTimeout(() => {
            goToNextWord();
        }, 1000);
        
        // 禁用输入框
        spellingInput.disabled = true;
    } else if (userInput.length >= correctWord.length) {
        // 拼写错误
        resultMessage.textContent = '💪 再试一次，你可以的！';
        resultMessage.className = 'result-message incorrect';
        
        // 播放鼓励音频
        speakMessage('再试一次，你可以的！');
    } else {
        // 清除结果消息
        resultMessage.textContent = '';
        resultMessage.className = 'result-message';
    }
}

// 处理回车键
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && nextBtn.style.display === 'inline-block') {
            goToNextWord();
        }
    }
}

// 播放单词音频
function playWordAudio() {
    const currentWord = currentWords[currentWordIndex];
    speakWord(currentWord.word);
}

// 播放单词发音（使用Web Speech API）
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        
        // 选择甜美音色的美式发音
        const voices = window.speechSynthesis.getVoices();
        // 尝试找到适合的美式英语女声
        const americanVoice = voices.find(voice => 
            voice.lang === 'en-US' && voice.name.includes('Female')
        );
        
        if (americanVoice) {
            utterance.voice = americanVoice;
        } else {
            // 如果没有找到，使用第一个美式英语语音
            const usVoice = voices.find(voice => voice.lang === 'en-US');
            if (usVoice) {
                utterance.voice = usVoice;
            }
        }
        
        // 设置发音开始时的回调
        utterance.onstart = function() {
            hasListened = true;
            // 启用输入框
            const spellingInput = document.getElementById('spellingInput');
            if (spellingInput) {
                spellingInput.disabled = false;
                spellingInput.focus();
            }
            
            // 更新提示信息
            const resultMessage = document.getElementById('resultMessage');
            if (resultMessage) {
                resultMessage.textContent = '✏️ 现在可以输入单词拼写了！';
                resultMessage.className = 'result-message';
            }
        };
        
        window.speechSynthesis.speak(utterance);
    }
}

// 播放消息（使用Web Speech API）
function speakMessage(message) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'zh-CN';
        
        // 选择甜美音色的中文发音
        const voices = window.speechSynthesis.getVoices();
        // 尝试找到适合的中文女声
        const chineseVoice = voices.find(voice => 
            voice.lang === 'zh-CN' && voice.name.includes('Female')
        );
        
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        } else {
            // 如果没有找到，使用第一个中文语音
            const cnVoice = voices.find(voice => voice.lang === 'zh-CN');
            if (cnVoice) {
                utterance.voice = cnVoice;
            }
        }
        
        window.speechSynthesis.speak(utterance);
    }
}

// 确保语音列表加载完成
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        // 语音列表已加载完成
    };
}

// 跳转到下一个单词
function goToNextWord() {
    currentWordIndex++;
    if (currentWordIndex < currentWords.length) {
        displayCurrentWord();
    } else {
        // 完成所有单词
        alert(`🎉 恭喜你完成了所有单词的学习！\n总积分：${score}`);
        window.location.href = 'index.html';
    }
}

// 打乱数组（Fisher-Yates算法）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 格式化单词为自然拼读彩色显示
function formatWordWithPhonics(word, spelling) {
    if (!spelling) {
        return word;
    }
    
    // 定义颜色数组（小学生喜欢的明亮颜色）
    const colors = [
        '#FF6B6B', // 红色
        '#4ECDC4', // 青色
        '#45B7D1', // 蓝色
        '#FFA07A', // 三文鱼色
        '#98D8C8', // 薄荷绿
        '#F7DC6F', // 黄色
        '#BB8FCE', // 紫色
        '#85C1E2', // 浅蓝色
        '#F8C471', // 橙色
        '#82E0AA'  // 浅绿色
    ];
    
    // 分割拼写和单词
    const spellingParts = spelling.split('-');
    let formattedWord = '';
    let currentIndex = 0;
    
    // 为每个拼写部分应用不同颜色
    spellingParts.forEach((part, index) => {
        // 获取对应颜色
        const color = colors[index % colors.length];
        
        // 获取单词中对应的字母
        const wordPart = word.substring(currentIndex, currentIndex + part.length);
        
        // 生成彩色HTML
        formattedWord += `<span style="color: ${color}; font-weight: bold;">${wordPart}</span>`;
        
        // 更新当前索引
        currentIndex += part.length;
    });
    
    return formattedWord;
}

// 返回首页
function goBackHome() {
    window.location.href = 'index.html';
}