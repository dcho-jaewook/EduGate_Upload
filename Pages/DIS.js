
let currentSlide = 0;
const books = document.querySelectorAll('.DIS-books-ele');

function plusSlides(n) {
    console.log(n);
    currentSlide += n;
    if (currentSlide > 3)
        currentSlide = 0;
    else if (currentSlide < 0)
        currentSlide = 3;

    adjustVisual();
}

function adjustVisual() {
    console.log("Call");
    console.log(books);
    books.forEach((book, index) => {
        console.log(book);
        book.classList.remove('current', 'next', 'prev');
        if (index === currentSlide)
            book.classList.add("current");
        else if (index === (currentSlide - 1 + books.length) % books.length)
            book.classList.add("prev");
        else if (index === (currentSlide + 1) % books.length)
            book.classList.add("next");
    });
}