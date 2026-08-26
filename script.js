(function(){
  var flow = document.getElementById('navFlow');

  function positionFlow(){
    if(window.innerWidth <= 760 || !flow) return;
    var active = document.querySelector('.nav-item.active');
    var sidebar = document.querySelector('.sidebar');
    if(!active || !sidebar) return;
    var sTop = sidebar.getBoundingClientRect().top;
    var bTop = active.getBoundingClientRect().top;
    flow.style.top = (bTop - sTop) + 'px';
  }

  window.addEventListener('resize', positionFlow);
  positionFlow();

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
