(function() {
  let btnSearch = document.getElementById('search__btn');
  let btnClose = document.getElementById('close__btn');

  const dropdown = new bootstrap.Dropdown(btnSearch);

  btnClose.addEventListener('click', function() {
    dropdown.hide();
  });
})();
