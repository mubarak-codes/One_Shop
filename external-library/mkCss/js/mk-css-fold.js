let foldToggler = document.querySelectorAll('.fold-toggler');
let drawerToggler = document.querySelectorAll('.drawer-toggler');
let offscreenToggler = document.querySelectorAll('.ofscreen-toggler');


foldToggler.forEach((toggler)=>{
 let foldElement = toggler.dataset.mkTarget;
 let foldTarget = document.querySelector(foldElement);
 
 let display = false; 
 foldTarget.classList.add('fold-false')
 
 toggler.addEventListener('click', ()=>{
  if (display === false ) {
   display = true;
   if (foldTarget.classList.contains('fold')) {
    foldTarget.classList.remove('fold-false');
    foldTarget.classList.add('fold-true');
   } 
  } else{
   display = false;
   if (foldTarget.classList.contains('fold')) {
    foldTarget.classList.remove('fold-true');
    foldTarget.classList.add('fold-false');
   }
  };
 });
}); 





drawerToggler.forEach((toggler)=>{
 let drawerElement = toggler.dataset.mkTarget;
 let drawerTarget = document.querySelector(drawerElement);
 
 
 
 let display = false; 
 if (drawerTarget.classList.contains('drawer-bottom')) {
  drawerTarget.classList.add('drawer-false-bottom')
 } else if (drawerTarget.classList.contains('drawer-top')) {
  drawerTarget.classList.add('drawer-false-top')
 } else if (drawerTarget.classList.contains('drawer-start')) {
 drawerTarget.classList.add('drawer-false-start')
 } else if (drawerTarget.classList.contains('drawer-end')) {
 drawerTarget.classList.add('drawer-false-end')
 }
 
 toggler.addEventListener('click', ()=>{
  if (display === false ) {
   display = true;

   if (drawerTarget.classList.contains('drawer-bottom')) {
    drawerTarget.classList.remove('drawer-false-bottom');
    drawerTarget.classList.add('drawer-true-bottom');
   } else if (drawerTarget.classList.contains('drawer-top')) {
    drawerTarget.classList.remove('drawer-false-top');
    drawerTarget.classList.add('drawer-true-top');
   } else if (drawerTarget.classList.contains('drawer-start')) {
    drawerTarget.classList.remove('drawer-false-start');
    drawerTarget.classList.add('drawer-true-start');
   } else if (drawerTarget.classList.contains('drawer-end')) {
    drawerTarget.classList.remove('drawer-false-end');
    drawerTarget.classList.add('drawer-true-end');
   }
  } else{
   display = false;
 
   if (drawerTarget.classList.contains('drawer-bottom')) {
    drawerTarget.classList.remove('drawer-true-bottom');
    drawerTarget.classList.add('drawer-false-bottom');
   } else if (drawerTarget.classList.contains('drawer-top')){
    drawerTarget.classList.remove('drawer-true-top');
    drawerTarget.classList.add('drawer-false-top');
   } else if (drawerTarget.classList.contains('drawer-start')){
    drawerTarget.classList.remove('drawer-true-start');
    drawerTarget.classList.add('drawer-false-start');
   } else if (drawerTarget.classList.contains('drawer-end')){
    drawerTarget.classList.remove('drawer-true-end');
    drawerTarget.classList.add('drawer-false-end');
   }
  };
 });
 
  let exitButton = drawerTarget.querySelector('.drawer-exit');  
 exitButton.addEventListener('click', ()=>{
  display = false
  if (drawerTarget.classList.contains('drawer-bottom')) {
    drawerTarget.classList.remove('drawer-true-bottom');
    drawerTarget.classList.add('drawer-false-bottom');
   } else if (drawerTarget.classList.contains('drawer-top')){
    drawerTarget.classList.remove('drawer-true-top');
    drawerTarget.classList.add('drawer-false-top');
   } else if (drawerTarget.classList.contains('drawer-start')){
    drawerTarget.classList.remove('drawer-true-start');
    drawerTarget.classList.add('drawer-false-start');
   } else if (drawerTarget.classList.contains('drawer-end')){
    drawerTarget.classList.remove('drawer-true-end');
    drawerTarget.classList.add('drawer-false-end');
   }
 }) 
});