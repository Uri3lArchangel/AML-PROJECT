

//Sign Page

const showVeryFirstPage = () => {
    const home = document.getElementById('home-page')
    home.style.display = 'none';

    const firstPage = document.getElementById('first-page-parent');
    console.log(firstPage)
    firstPage.style.display = 'none'


    const lastPage = document.getElementById('last-page-parent');
    console.log(lastPage)
    lastPage.style.display = 'none'



    const secondPage = document.getElementById('second-page-parent')
    secondPage.style.display = 'none'

    const veryFirstPage = document.getElementById('very-first-page-parent')

    veryFirstPage.style.display = 'flex'
    veryFirstPage.style.flexDirection = 'column'
    veryFirstPage.style.alignItems = 'center'
    veryFirstPage.style.marginTop = '30px'

    InitializeContract();

}

//Please Wait page

const showFirstPage = () => {
    const home = document.getElementById('home-page')
    home.style.display = 'none';

    const veryFirstPage = document.getElementById('very-first-page-parent')

    veryFirstPage.style.display = 'none'

    const secondPage = document.getElementById('second-page-parent')
    secondPage.style.display = 'none'


    const firstPage = document.getElementById('first-page-parent');
    console.log(firstPage)
    firstPage.style.display = 'flex'
    firstPage.style.flexDirection = 'column'
    firstPage.style.alignItems = 'center'
    firstPage.style.marginTop = '30px'

}

//Repeat check page

const showSecondPage = () => {
    const home = document.getElementById('home-page')
    home.style.display = 'none';

    const firstPage = document.getElementById('first-page-parent');
    console.log(firstPage)
    firstPage.style.display = 'none'
    const veryFirstPage = document.getElementById('very-first-page-parent')

    veryFirstPage.style.display = 'none'

    const lastPage = document.getElementById('last-page-parent');
    console.log(lastPage)
    lastPage.style.display = 'none'



    const fourthPage = document.getElementById('second-page-parent')
    fourthPage.style.display = 'flex'
    fourthPage.style.flexDirection = 'column';
    fourthPage.style.textAlign = 'center'
    fourthPage.style.marginTop = '30px'
}

//Final screen

const showThirdPage = () => {
    const home = document.getElementById('home-page')
    home.style.display = 'none';

    const firstPage = document.getElementById('first-page-parent');
    console.log(firstPage)
    firstPage.style.display = 'none'

    const veryFirstPage = document.getElementById('very-first-page-parent')

    veryFirstPage.style.display = 'none'

    const fourthPage = document.getElementById('second-page-parent')
    fourthPage.style.display = 'none'

    const lastPage = document.getElementById('last-page-parent');
    console.log(lastPage)
    lastPage.style.display = 'block'

}
