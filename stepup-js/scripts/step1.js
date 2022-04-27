document.addEventListener('DOMContentLoaded', function () {
    let options = {
        color: 'yellow',
        backgroundColor: '#333'
    };
    stopWatch(options);
});
function stopWatch(options) {
    const display = document.querySelector('.display'); // displayを取得
    const startButton = document.querySelector('.startButton');
    const stopButton = document.querySelector('.stopButton');
    let timer = null; // setIntervalの変数を初期化
    
    startButton.addEventListener('click', function(){
        if(timer === null) {
            startButton.classList.add('_blank');
            stopButton.classList.remove('_blank');
            let seconds = 0; // タイムの数値を初期化
            display.innerText = seconds;
            timer = setInterval(function(){
                seconds++;
                display.innerText = seconds;
            }, 1000);
            addMessage('開始');
        }
    });

    stopButton.addEventListener('click', function(){
        if(timer !== null) {
            startButton.classList.remove('_blank');
            stopButton.classList.add('_blank');
            clearInterval(timer); // timerをclearIntervalを用いて止める
            timer = null; // タイマーの状況を条件式で判定させるために設定
        }
        addMessage('終了');
    });

    function addMessage(message) {
        let log = document.querySelector('.log');
        let messageElm = document.createElement('div');
        let now = new Date();
        messageElm.innerText = message + '：' + now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒';
        messageElm.classList = ['message'];
        log.appendChild(messageElm);

        // logの中にあるfirstChildを見つけ出して、それより前に（insertBefore）messageElmを挿入する
        // log.insertBefore(messageElm, log.firstChild);
    }
    options = options || {};
    let color = options.color || 'lightblue';
    let backgroundColor = options.backgroundColor || 'black';
    let displayElm = document.querySelector('.display');
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor;
    
}