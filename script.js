class viewListener {
    constructor(id) {
        this.id = id;
        this.getElements();
        this.getListeners();
        this.setListeners();
    }
    getElements() {
        this.getElement = document.getElementById(this.id);
        this.getMainViewImg = document.querySelector('#' + this.id + ' .main-viewer img');
    }
    getListeners() {
        this.listeners = document.querySelectorAll('#' + this.id + ' li a');
    }
    setLink(a) {
        this.getMainViewImg.setAttribute('src', a);
    }
    setListeners() {
        this.listeners.forEach(listener => {
            listener.onclick = e => {
                e.preventDefault();
                let link = listener.getAttribute('href');
                this.setLink(link);
            };
        });
    }
}
new viewListener('viewer1');