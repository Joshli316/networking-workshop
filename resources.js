(function () {
  'use strict';

  function toggleLang() {
    const isZh = document.body.classList.toggle('zh');
    localStorage.setItem('nw_lang', isZh ? 'zh' : 'en');
    document.documentElement.lang = isZh ? 'zh-CN' : 'en';
    document.getElementById('langToggle').textContent = isZh ? '中文' : 'EN';
  }

  (function initLang() {
    const saved = localStorage.getItem('nw_lang');
    const isZh = saved !== 'en';
    document.body.classList.toggle('zh', isZh);
    document.documentElement.lang = isZh ? 'zh-CN' : 'en';
    document.getElementById('langToggle').textContent = isZh ? '中文' : 'EN';
  })();

  const ACTIONS = {
    'toggle-lang': toggleLang,
    'print': function () { window.print(); },
  };

  document.body.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-action]');
    if (!trigger) return;
    const fn = ACTIONS[trigger.dataset.action];
    if (fn) { fn(); }
  });

  try {
    new QRCode(document.getElementById('qr-top'), {
      text: 'https://networking-workshop.pages.dev',
      width: 100,
      height: 100,
      colorDark: '#047857',
      colorLight: '#ffffff'
    });
  } catch (e) {
    const el = document.getElementById('qr-top');
    if (el) el.textContent = 'networking-workshop.pages.dev';
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
})();
