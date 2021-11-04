// Viewer
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
// modal
class modal {
    constructor(id) {
        this.id = id;
        this.getListeners();
        this.getElement();
        this.setEvent();
        this.setAttribute();
    }
    setAttribute() {
        this.element.style.display = 'none';
    }
    getListeners() {
        this.listeners = document.querySelectorAll('*[modal-open=true][modal-id=' + this.id + ']');
    }
    getElement() {
        this.element = document.getElementById(this.id);
        this.elementMask = document.querySelector('#' + this.id + ' .modal-mask');
    }
    setToggle() {
        if (this.element.style.display == 'block')
            this.element.style.display = 'none';
        else this.element.style.display = 'block';
    }

    setEvent() {
        this.listeners.forEach(listener => {
            listener.onclick = e => {
                this.setToggle();
            }
        })
        this.elementMask.onclick = e => {
            this.setToggle();
        }
    }
}
new modal('modal1');