document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const drawButton = document.getElementById('draw-button');
    const numbersContainer = document.querySelector('.lotto-numbers');

    // 테마 설정
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeToggle.checked);
        document.body.classList.toggle('light-mode', !themeToggle.checked);
    });

    // 초기 테마 설정
    document.body.classList.add('light-mode');

    // 번호 추첨
    drawButton.addEventListener('click', () => {
        drawButton.disabled = true;
        numbersContainer.innerHTML = '';

        // 애니메이션을 위한 임시 공 생성
        for (let i = 0; i < 6; i++) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            numbersContainer.appendChild(ball);
        }

        // 번호 추첨 및 애니메이션
        setTimeout(() => {
            const numbers = generateLottoNumbers();
            displayNumbers(numbers);
            drawButton.disabled = false;
        }, 2000); // 2초 후 결과 표시
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.classList.add('ball', 'final');
                ball.textContent = number;
                ball.style.backgroundColor = getBallColor(number);
                numbersContainer.appendChild(ball);
            }, index * 300); // 순차적으로 공 표시
        });
    }

    function getBallColor(number) {
        if (number <= 10) return '#f9c851'; // 노란색
        if (number <= 20) return '#6ac8f2'; // 파란색
        if (number <= 30) return '#ff7f7f'; // 빨간색
        if (number <= 40) return '#aaa';    // 회색
        return '#b2d9a3'; // 녹색
    }
});
