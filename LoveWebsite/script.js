document.addEventListener('DOMContentLoaded', () => {
    // 添加飘落的爱心效果
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    // 点击惊喜按钮的效果
    const surpriseBtn = document.querySelector('.surprise-btn');
    const messages = [
        '你是我生命中最美丽的风景',
        '有你的每一天都是情人节',
        '我永远都不会停止爱你',
        '你的笑容是我最大的幸福',
        '我要牵着你的手，走完这一生'
    ];

    let currentIndex = 0;

    surpriseBtn.addEventListener('click', () => {
        const messageBox = document.querySelector('.message-box');
        
        // 创建新消息元素
        const newMessage = document.createElement('p');
        newMessage.className = 'love-message';
        newMessage.style.opacity = '0';
        newMessage.textContent = messages[currentIndex];
        
        // 添加消息并设置动画
        messageBox.appendChild(newMessage);
        setTimeout(() => {
            newMessage.style.transition = 'opacity 0.5s ease';
            newMessage.style.opacity = '1';
        }, 100);

        // 更新索引
        currentIndex = (currentIndex + 1) % messages.length;

        // 创建心形特效
        for(let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 100);
        }
    });
});

// 添加飘落的爱心的样式
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: fixed;
        top: -20px;
        font-size: 20px;
        animation: fall linear forwards;
        z-index: 1000;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style); 