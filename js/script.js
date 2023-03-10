
function onYouTubeIframeAPIReady() {
  // create the YouTube player
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'o6pm5zyOUnE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}



$(document).ready(function() {
  $("[list='my-list']").on("input propertychange", function() {
    window.location = $("#my-list option[value='"+$("[list='my-list']").val()+"']").find("a").attr("href")
  });
});


const dropdownToggle = document.querySelector('[data-bs-toggle="dropdown"]');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function() {
  dropdownMenu.classList.toggle('open');
});




//Comment section//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
      sidemenu.style.right= "0";
  }
  function closemenu(){
      sidemenu.style.right= "-200px";
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwCR9zi4oRYGDso36Yyhxygu61jlX5UFI2XyhngFPKdy4oT-TNfEPQM9mrJzUonJFFr/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })