const bookName = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const progress = document.querySelector('#progress');
const addNewBtn = document.querySelector('#addNew');
const allInputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const addNewBookBtn = document.querySelector('.addNewBookBtn');
const cardsContainer = document.querySelector('.cardsContainer');
const mainBody = document.querySelector('.main-body');



let myLibrary = [];


function Book(title,author,pages,progress){
    this.title = title
    this.author = author
    this.pages = pages
    this.progress = progress    

}


function addToLibrary () {
    let newBook = new Book(title.value,author.value,pages.value,progress.value)
    myLibrary.push(newBook)
}

function makeCard() {
    const createDiv = document.createElement('div')
    const titleP = document.createElement('p')
    const authorP = document.createElement('p')
    const pagesP = document.createElement('p')
    const readP = document.createElement('p')
    const removeBtn = document.createElement('button')
    const removeBtnDiv = document.createElement('div')

    createDiv.classList.add('bookCard')
    titleP.classList.add('title')
    authorP.classList.add('author')
    pagesP.classList.add('pages')
    readP.classList.add('read')
    removeBtn.classList.add('removeBtn')
    removeBtnDiv.classList.add('removeBtnDiv')


    titleP.textContent = `Title :  ${myLibrary[myLibrary.length-1].title}`
    authorP.textContent = `Author :  ${myLibrary[myLibrary.length-1].author}`
    pagesP.textContent = `Pages:  ${myLibrary[myLibrary.length-1].pages}`
    readP.textContent = `Read :  ${myLibrary[myLibrary.length-1].progress}`
    removeBtn.textContent = 'Remove'

    cardsContainer.appendChild(createDiv);
    createDiv.appendChild(titleP)
    createDiv.appendChild(authorP)
    createDiv.appendChild(pagesP)
    createDiv.appendChild(readP)
    createDiv.appendChild(removeBtnDiv)
    removeBtnDiv.appendChild(removeBtn)

    removeBtn.addEventListener('click',()=> {
        cardsContainer.removeChild(createDiv)
    })
    
}



addNewBtn.addEventListener('click', () => {

    addToLibrary()
    makeCard() 


    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value   = ''
    }

    form.classList.toggle('addNewBookForm')
    if(form.classList.contains('addNewBookForm')) {
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }
    else {
        document.body.style.backgroundColor = '#fff';
    }

    console.log(myLibrary[myLibrary.length-1].title)

})

addNewBookBtn.addEventListener('click', () => {
    form.classList.toggle('addNewBookForm')
    if(form.classList.contains('addNewBookForm')) {
        document.body.style.backgroundColor = "rgba(0,0,22,0.1)"
    }
    else {
        document.body.style.backgroundColor = '#fff';
    }

})

