(function () {
  const saved = localStorage.getItem('nw_lang');
  if (saved === 'en') document.body.classList.remove('zh');
})();
