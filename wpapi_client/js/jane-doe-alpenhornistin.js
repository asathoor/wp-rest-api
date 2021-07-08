/**
 * Project: Jane Doe Alpenhornistin
 **/

// reusable navbar
let navBar = `
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="https://multimusen.dk/wp-content/uploads/cropped-cropped-cropped-multimusen-150-150-1.png" height="35" alt="Multimusen logo" loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#centerText">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#leftText">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#rightText">Gigs</a>
          </li>
        </ul>
        <!-- /Left links -->
      </div>
      <!-- /Collapsible wrapper -->
      <!-- /Container wrapper -->
  </nav>
  <!-- /Navbar -->
  `

// initiation on document ready
window.onload = function() {

      // navigation
      navigation.innerHTML = navBar

      // view content
      getPage(2714, 'leftText') // add page 2714 to #leftText
      getPage(2693, 'centerText')
      getPage(2720, 'rightText')
      getPage(2745, 'SoMe')

      // footer
      JDfooter.innerHTML = `
        &copy; Jane Doe, 2021 - all rigths reserved. <br>
        Abbey Rd. 123 <br>
        Liverpool <br>
        Mob. 123 456
      `
}

// add content from WordPress
function getPage(pageId, viewIn) {

 const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/pages/"

 fetch(getPosts + pageId).then(
   response => {
     return response.json(); // get JSON data$
   }).then(data => {

   // create a view here
   let showHere = document.getElementById( viewIn )

   // create HTML here
   showHere.innerHTML += '<article>' +
     '<h2>' + data.title.rendered + '</h2>' +
     '<div>' +
       data.content.rendered +
     '</div>' +
     '</article>'

 }).catch(err => {
   console.log(err)
 })
}
