/**
 * lang-nav.js — resolves lang switcher to equivalent page + fixes active state
 */
(function(){
  var PT = ['about','curiosities','findings','library','start-here','the-manuscript','what-it-isnt'];
  var ES = ['about','curiosities','findings','library','start-here','the-manuscript','what-it-isnt'];

  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  var lang = 'en', slug = '';

  if(path.startsWith('/pt/') || path === '/pt') {
    lang = 'pt';
    slug = path.replace(/^\/pt\/?/, '');
  } else if(path.startsWith('/es/') || path === '/es') {
    lang = 'es';
    slug = path.replace(/^\/es\/?/, '');
  } else {
    slug = path.replace(/^\//, '');
  }

  var enHref = slug ? '/' + slug : '/';
  var ptHref = (PT.indexOf(slug) > -1) ? '/pt/' + slug : '/pt/';
  var esHref = (ES.indexOf(slug) > -1) ? '/es/' + slug : '/es/';

  var switcher = document.querySelector('.lang-switcher');
  if(!switcher) return;

  switcher.querySelectorAll('a').forEach(function(a){
    var t = (a.textContent || a.innerText).trim();
    if(t.indexOf('EN') > -1)      { a.href = enHref;  a.classList.toggle('active', lang==='en'); }
    else if(t.indexOf('PT') > -1) { a.href = ptHref;  a.classList.toggle('active', lang==='pt'); }
    else if(t.indexOf('ES') > -1) { a.href = esHref;  a.classList.toggle('active', lang==='es'); }
  });
})();
