let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        this.document.querySelector('#header').classList.add('show');
    }

    else {
        this.document.querySelector('#header').classList.remove('show');
    }

    prevScrollPos = currentScrollPos
});