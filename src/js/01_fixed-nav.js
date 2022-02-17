(function () {
  window.onscroll = function() {
    setSticky()
  };

  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  function setSticky() {
    if (window.scrollY > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
})()
