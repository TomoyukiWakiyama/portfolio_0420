class ToggleOpen {
    constructor(el) {
        this.el = document.querySelector(el);
    }
    open() {
        this.el.classList.toggle('open');
    }
}