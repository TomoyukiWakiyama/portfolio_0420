document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const gnavList = document.querySelector('.gnavList');
    const gnav = document.querySelector('.gnav');
    const to = new ToggleOpen('.hamburger', '.hamburger');
    const to2 = new ToggleOpen('.gnav', '.hamburger');
    hamburger.addEventListener('click', function(){
        to.open();
        to2.open();
    });
    gnav.addEventListener('click', (event) => {
        if(event.target.closest('.gnavList') === null) {
            to.open();
            to2.open();
        }
    });

});
