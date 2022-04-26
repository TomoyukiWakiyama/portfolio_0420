document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 900,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        //autoplay
        autoplay: {
            delay: 2500,
        },
    });
    // IntersectionObserver オブジェクトを作成
    // 交差時に実行するコールバック関数を渡す
    // const observer = new IntersectionObserver((entries) => {
        // entriesは監視対象すべてが入っているリスト  
        // for(const e of entries) {
            // mainVisualが見えていたらtrue, 
            // isIntersecting プロパティは交差しているかどうかの真偽値
            // viewport に交差し、入ったときに isIntersecting === true、出たときに false になる
            // if(e.isIntersecting) {
            //     // document.getElementById('headerBG').style.backgroundColor = 'green';
            //     console.log('inview');
            // } else {
            //     // document.getElementById('headerBG').style.backgroundColor = 'pink';
            //     console.log('outview');
            // }
        // }
        // entries.forEach(entry => {
        //     if(entry.isIntersecting) {
        //         // document.getElementById('headerBG').style.backgroundColor = 'green';
        //         console.log('inview');
        //     } else {
        //         // document.getElementById('headerBG').style.backgroundColor = 'pink';
        //         console.log('outview');
        //     }
        // });
    // });
    // observe メソッドに監視対象要素を引数として渡すことで監視されるようになります
    // observer.observe(document.querySelector('.mainVisual'));

    const swiperWrapper = document.querySelector('.swiper');
    const header = document.querySelector('.header');
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // console.log(entry);
                header.classList.remove('_scroll-gray');
            } else {
                // console.log(entry);
                header.classList.add('_scroll-gray');
            }
        });
    }
    const options = {
        // 実際にはrootを変更することはほとんどない
        root: null, 
        rootMargin: "-120px 0px 0px 0px"
    };
    const io = new IntersectionObserver(callback, options);
    io.observe(swiperWrapper);
});