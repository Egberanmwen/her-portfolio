const headerContainer = document.getElementById('headerContainer');
headerContainer.innerHTML = `
    <div class="containerNav">
        <div class="logoDiv">
            <a href="">
                <img src="/src/images/logo.png" width="100" alt="">
            </a>
        </div>
        <div class="nav" id="toggleMen">
            <span id="hamburger" >&#9776;</span> 
            <!-- <span class="cancel hide" id="cancelMenu">&times;</span> -->
        </div>
        </div>
        <nav id="menuLink" class="nav open" >
        <ul >
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        </nav>
    </div>  
`
const hamburgerMenu = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const footerDiv =document.querySelector('.footerDiv');
hamburgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('open')
})
footerDiv.innerHTML  = `
    <p class="parText fontFamily text-center mt-2"><span></span> ✌️ This website was coded by Egberanmwen Doris,and it is open sourced</p>
`