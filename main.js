document.addEventListener('DOMContentLoaded', () => {
    const moodText = document.getElementById('mood-text');
    const moodSentence = document.getElementById('mood-sentence');
    const changeMoodButton = document.getElementById('change-mood-button');
    const musicUpload = document.getElementById('music-upload');
    const musicPlayer = document.getElementById('music-player');
    const body = document.body;

    const moods = [
        {
            mood: '행복',
            sentence: '세상은 가능성으로 가득 차 있어요!',
            bgColor: '#f9c851',
            textColor: '#333'
        },
        {
            mood: '차분함',
            sentence: '고요한 바다처럼 마음의 평화를 느껴보세요.',
            bgColor: '#6ac8f2',
            textColor: '#fff'
        },
        {
            mood: '열정',
            sentence: '오늘 당신의 열정을 불태울 시간이에요!',
            bgColor: '#ff7f7f',
            textColor: '#fff'
        },
        {
            mood: '신비로움',
            sentence: '미지의 세계를 탐험하는 상상을 해보세요.',
            bgColor: '#a0a0e0',
            textColor: '#fff'
        },
        {
            mood: '활기',
            sentence: '초록빛 자연처럼 생명력이 넘치는 하루!',
            bgColor: '#b2d9a3',
            textColor: '#333'
        },
        {
            mood: '고요',
            sentence: '잠시 모든 것을 잊고, 깊은 숨을 쉬어보세요.',
            bgColor: '#aaa',
            textColor: '#fff'
        }
    ];

    let lastMoodIndex = -1;

    changeMoodButton.addEventListener('click', () => {
        // 중복되지 않는 랜덤 인덱스 선택
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * moods.length);
        } while (randomIndex === lastMoodIndex);
        
        lastMoodIndex = randomIndex;
        const randomMood = moods[randomIndex];

        // 텍스트와 스타일 변경
        moodText.textContent = randomMood.mood;
        moodSentence.textContent = randomMood.sentence;
        body.style.backgroundColor = randomMood.bgColor;
        body.style.color = randomMood.textColor;

        // 버튼 색상도 배경과 대비되게 변경
        changeMoodButton.style.backgroundColor = randomMood.textColor;
        changeMoodButton.style.color = randomMood.bgColor;
    });

    musicUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const musicURL = URL.createObjectURL(file);
            musicPlayer.src = musicURL;
            musicPlayer.play();
        }
    });
});