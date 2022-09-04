window.addEventListener('DOMContentLoaded', () => {

    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        bookList = document.querySelector('#book-list');

        
    btn.addEventListener('click', (event) => {
        event.preventDefault()

        if (title.value == '' && author.value == '' && year.value == '') {
            alert('Please input your information')
        } else {
            const newRow = document.createElement('tr')

            //creating new title
            const newTitlte = document.createElement('th')
            newTitlte.innerHTML = title.value
            newRow.appendChild(newTitlte)

            //creating new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            //creating new year
            const dataYear = document.createElement('th')
            dataYear.innerHTML = author.value
            newRow.appendChild(dataYear)

            // displaying in UI

            bookList.appendChild(newRow);


            title.value = ''
            author.value = ''
            year.value = ''
        }
    })
})
