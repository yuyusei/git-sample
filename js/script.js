/* window.addEventListener('DOMContentLoaded',function(){
  //gsap.to('.box',{x:100,delay:.5})
  //gsap.from('.box',{x:100,delay:.5})
  //gsap.fromTo('.box', {x:100},{x:500,delay:1})//dellayは後ろに
  //gsap.fromTo('.box', {x:100},{x:500,delay:1})
  //gsap.set('.box', {x:500})//初期状態を設定
  const tl = gsap.timeline({
    defaults: {
      duration:1
    }
  });//時間管理、時系列
  tl
    .to('.box', { x: 100, delay:1})
    .to('.box', { y: 100 }, '+=3')//+=3秒遅く動く
    .to('.box', { x: 150 })
    .add(function () {
      console.log('ok');
    })
}) */
window.addEventListener('DOMContentLoaded',function(){
  /*   gsap.to(".box", { x:200, repeat:-1, yoyo:true, yoyoEase: true, ease: 'bounce', duration: 5, delay:1}) */
  let translateX = gsap.utils.random(0, 500,true);
/*   let boxes = gsap.utils.toArray('.box'); */
/*   gsap.utils.toArray('.box').forEach((target)=> {
    gsap.to(target, { x: translateX(), delay: 1 })
  }) */
/*   gsap.to('.box', {x:translateX, delay: 1}); */
/*   gsap.to('.heading', {'--scaleX':1, delay: 1,duration:.5}); */

})
//constは再代入不可、letは可能
/* document.addEventListener('DOMContentLoaded',function(){
  const start = document.querySelector('.start');
  const pause = document.querySelector('.pause');
  const resume = document.querySelector('.resume');
  const reverse = document.querySelector('.reverse');
  const restart = document.querySelector('.restart');
  const kill = document.querySelector('.kill');

  const animation = gsap.to('.box', { rotate: 360, duration: 3 })
  animation.pause();

  start.addEventListener('click', function () {
    animation.restart();
  })
  pause.addEventListener('click', function () {
    animation.pause();
  })
  resume.addEventListener('click', function () {
    animation.resume();
  })
  reverse.addEventListener('click', function () {
    animation.reverse();
  })
  restart.addEventListener('click', function () {
    animation.restart();
  })
  kill.addEventListener('click', function () {
    animation.kill();
  })

})
 */

/* window.addEventListener('DOMContentLoaded',function(){
  const list = document.querySelector('.list');
  const anchors = document.querySelectorAll('.list li a');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault(); */
/*       let element = document.querySelector(anchor.getAttribute('href'));
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      }) */
/*       gsap.to(window, {duration:1,ease:'power2.out',
        scrollTo: {
          y: anchor.getAttribute('href'),
          offsetY: list.offsetHeight,
          autoKill: true
      }});


    })
  })
})
 */
/* document.addEventListener('DOMContentLoaded',function(){
  gsap.to('.container', {
    clipPath: 'inset(100% 0 0 0)', ease: 'none', scrollTrigger:{
    trigger: '.container',
    start: 'top 100px',
    end: 'bottom 100px',
    scrub:true,
  }});
})
 */
/* window.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box,.box2');
  boxes.forEach((box) => {
    gsap.to(box, { autoAlpha: 0, scrollTrigger: {
      trigger: box,
      start: 'top center',
      markers:true,
    }});
  })
})
 */
/* document.addEventListener('DOMContentLoaded', function () {
  const mm = gsap.matchMedia();
  mm.add('(min-width:901px)', () => {
    gsap.fromTo('.card', { autoAlpha: 0,y:20 }, {y:0,
      autoAlpha: 1, stagger: .05, scrollTrigger: {
        trigger: '.card-wrapper',
        start:'center bottom',
        markers:true,
    }});
  })
  mm.add('(max-width:900px)', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      gsap.fromTo(card, { autoAlpha: 0,y:20}, {y:0,
        autoAlpha: 1, scrollTrigger: {
          trigger: card,
          start: 'center bottom',
          markers: true,
        }
      });
    })

  })
}) */
/* document.addEventListener('DOMContentLoaded', function () {
  const markers = document.querySelectorAll('.js-marker');
  markers.forEach((marker) => {
    gsap.to(marker, {
      backgroundSize: '100% 100%', scrollTrigger: {
        trigger: marker,
        start: 'center 80%',
        markers:true,
    }});
  })


})
 */
/* document.addEventListener('DOMContentLoaded',function(){
  gsap.registerEffect({
    name: 'markerAnimation',
    effect: (targets, config) => {
      gsap.to(targets, {
        backgroundSize: config.backgroundSize, duration: config.duration, scrollTrigger: {
          trigger: targets,
          start:config.start
      }});

    },
    //初期状態
    defaults:{backgroundSize:'100% 100%',duration:1,start:'center 80%'}
  })
  const markers = document.querySelectorAll('.js-marker');
  markers.forEach((marker, i) => {
    if (i == 0 || i == 1) {
      gsap.effects.markerAnimation(marker, { backgroundSize:'100%,60%'})
    } else {
      gsap.effects.markerAnimation(marker, {})
    }
  })
})
 */


//自作
/* window.addEventListener('DOMContentLoaded',function(){
  const btn = document.querySelector('.btn');
    btn.addEventListener('click', (e) => {
      gsap.set('.menu__item a,.stripe', {y: 0, stagger:.05});
    })
})
 */
/* document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn');
  const menuTL = gsap.timeline();
  btn.addEventListener('click', function () {
    //閉じているとき
    if (!btn.classList.contains('is-active')) {
      menuTL
        .fromTo('.stripe', { y: '-100%' }, { y: '0%', stagger: .05 })
        .fromTo('.menu__item > a', { y: '100%' }, { y: '0%' }, '-=.5')//早めにアニメーション
        .to('.btn', { color: '#333' }, '<')//前と同時に発火
        .add(() => {
          btn.classList.add('is-active');
        })
    } else {//開いているとき
      gsap.fromTo('.menu__item > a', { y: '0%' }, { y: '100%' })
      gsap.fromTo('.stripe', { y: '0%' }, { y: '100%', stagger: .05 })
      gsap.to('.btn', { color: '#fff' })
      btn.classList.remove('is-active');
    }
  })
}) */

/* window.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('.header-menu-trigger');
  let windowHeight = window.innerHeight;
  let menuTL = gsap.timeline();
  let scale = windowHeight / btn.clientHeight;
  let headerMenu = document.querySelector('.header-menu');

  btn.addEventListener('click', function () {
    //閉じているとき
    if (!btn.classList.contains('is-active')) {
      menuTL
      .add(() => {
        btn.classList.add('is-active');
        headerMenu.classList.add('is-active');
      })
      .to('.circle-bg',{ scale: scale*2.5})

      .fromTo('.header-lists li', {autoAlpha:0, y:20},{autoAlpha:1, y:0, stagger:.025, duration: .3}, '-=.2')
    } else {//開いているとき
      menuTL
      .to('.circle-bg', { scale: '0' })
        .add(() => {
          btn.classList.remove('is-active');
          headerMenu.classList.remove('is-active');
        })
    }
  })
})
 */
/*   window.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('.header-menu-trigger');
  let menuTL = gsap.timeline();
  let menuLeft = document.querySelector('.menu__left');
  let menuRight = document.querySelector('.menu__right');

  btn.addEventListener('click', function () {
    //閉じているとき
    if (!btn.classList.contains('is-active')) {
      menuTL
      .add(() => {
        btn.classList.add('is-active');
      })
        .to('.menu', {display: 'flex'})
        .to('.menu__left', { clipPath: 'inset(0% 0% 0% 0%)'})
        .to('.menu__right', { clipPath: 'inset(0% 0% 0% 0%)' },'<')
        .to('.menu__left img', { clipPath: 'inset(0% 0% 0% 0%)',duration:1,ease:'power3.out'},'+=.1')
        .to('.js-text-move', { y: '0%' },'-=.5')
        .to('.menu__title',{'--scaleX':1,duration:.5})
    } else {//開いているとき
      menuTL
      .to('.js-text-move', { y: '100%' })
      .set('.menu__title', { '--scaleX': 0})
      .to('.menu__right', { clipPath: 'inset(0% 0% 100% 0%)' })
        .to('.menu__left img', { clipPath: 'inset(100% 0% 0% 0%)' }, '<')
      .to('.menu__left', { clipPath: 'inset(100% 0% 0% 0%)' },'<')
      .to('.menu', { display: 'none' })
      .add(() => {
        btn.classList.remove('is-active');
      })
    }
  })
})
 */
/* window.addEventListener('load', function () {
  let openingTL = gsap.timeline();
  openingTL
    .to('.opening__img', { y: '0', delay: 1 ,ease:'power3.out',duration:1.5})
    .to('.opening__img', { scale:1 ,duration:1.5})
    .to('.opening__img', { filter: 'none' })
    .to('.js-textAnimation span', { y: '0', stagger: .1 })
    .to('.header',{y:'0'},'-=.5')
})
*/

//spanタグに変換する関数
/* let splitTargets = document.querySelectorAll('.js-splitText');
let newText = '';//生成する要素を格納するための変数
splitTargets.forEach((target) => {
  newText = '';
  spanText = target.innerHTML;
  spanText.split('').forEach((char) => {
    newText += '<span>'+char+'</span>';
  })
  newTextBefore = "<div class='before'>" + newText + "</div>"
  newTextAfter = "<div class='after'>" + newText + "</div>"
  newText = "<span class='text-wrap'>"+newTextBefore+newTextAfter+"</span>"
  target.innerHTML = newText;
})
//イベントリスナー
splitTargets.forEach((target) => {
  if (!target.classList.contains('is-active')) {
    let beforeSpan = target.querySelector('.before').querySelectorAll('span');
    let afterSpan = target.querySelector('.after').querySelectorAll('span');
    target.addEventListener('mouseenter', () => {
      gsap.to(beforeSpan,{y:'-100%',stagger:.03});
      gsap.to(afterSpan, { y: '0%', stagger: .03 });

    })
    target.addEventListener('mouseleave', () => {
      gsap.to(beforeSpan, { y: '0%', stagger: .03 });
      gsap.to(afterSpan, { y: '100%', stagger: .03 });
    })
  }
})
 */
/* let splitTargets = document.querySelectorAll('.js-splitText');
let newText = '';//生成する要素を格納するための変数
splitTargets.forEach((target) => {
  newText = '';
  spanText = target.innerHTML;
  spanText.split('').forEach((char) => {
    newText += '<span>'+char+'</span>';
  })
  target.innerHTML = newText;
})
//イベントリスナー
let targets = document.querySelectorAll('.js-text-effect');
targets.forEach((target) => {
  let spans = target.querySelectorAll('span')
  gsap.to(spans, {
    autoAlpha: 1, rotateY: 0, stagger: .05, duration:.5, scrollTrigger:{
      trigger: spans,
      start: 'top center',
      markers: true,
    }
  });
})
 */
//イベントリスナー
/* window.addEventListener('DOMContentLoaded',function(){
  let targets = document.querySelectorAll('.text-wrapper');
  targets.forEach((target) => {
    item = target.querySelector('.text');
    let textTL = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        markers:true
      }
    });
    textTL
    .to(target, {'--scaleX': '1' })
    .to(item, {
        autoAlpha:1, y: 0, duration: 1
      }, '-=.3')
  })
})
 */
/* CustomEase.create("custom","0.48, -0.02, 0, 0.85")
window.addEventListener('scroll',function(){
  gsap.to('.text', {
    clipPath: 'inset(0 0% 0 0)',ease: 'custom', duration:1.6, scrollTrigger: {
      trigger: '.text',
      start: 'top bottom',
      toggleActions: 'play none none reverse',
      markers: true
    }
  });
})
 */
/* window.addEventListener('DOMContentLoaded',function(){
  gsap.fromTo('.cta__img', {y:100},{
    y: -100,scrollTrigger: {
      trigger: '.cta__img',
      scrub:1,//1秒遅れる
      start: 'top bottom',
      end:'top top',
      markers:true
  }});
  gsap.fromTo('.cta__img', { filter: 'blur(10px)' }, {
    filter: 'blur(0px)', scrollTrigger: {
      trigger: '.cta',
      start: 'top bottom',
      end: 'top center',
      scrub: 1,
      markers: true
  }})
}) */

/* window.addEventListener('DOMContentLoaded',function(){
  gsap.to('.js-move-text', {
    x: '0%', scrollTrigger: {
      trigger: '.js-move-text',
      start: 'top bottom',
      end: 'center center',
      scrub:1,
      markers: true,
      onLeave: () => {
        gsap.to('.js-move-text span', { color:'#55A417',duration:.25});
      },
      onEnterBack: () => {
        gsap.to('.js-move-text span', { color:'#fff',duration:.25});
      }
  }});
})
gsap.to('.js-move-text span', {
  color: '#55A417', duration: .25, scrollTrigger: {
    trigger: '.js-move-text span',
    start: 'center center',
    toggleActions:'play none none reverse'
}}); */
/* window.addEventListener('DOMContentLoaded',function(){
  gsap.to('.js-scale-change', {
    width: '100%', height: '100%', borderRadius: 0, duration: 1, scrollTrigger: {
      trigger: '.js-sticky',
      start: 'center center',
      markers: true,
      scrub: true,
      pin: true
    }});

}) */
window.addEventListener('DOMContentLoaded',function(){
  gsap.to('.bg-black', {
    '--scaleX': '1', '--scaleY': '1', '--borderRadius': '0', scrollTrigger: {
      trigger: '.js-sticky',
      start: 'center center',
      markers: true,
      scrub: true,
      pin: true
    }});

})
