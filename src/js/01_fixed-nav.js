(function() {
  window.onscroll = function() {
    setSticky()
  };

  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  function setSticky() {
    if(window.scrollY > sticky && window.innerWidth > 1000) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
})()
