$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/*
=============================================================================================
Code Reuse: Sugar Sapan - https://sugarspan.com/bootstrap-4-transparent-header-using-sticky-navbar/ 
=============================================================================================

*/
$(function() {

    const alNav = document.querySelector('#dm-sticky-nav');
    const navChangePoint = 100;
    function stickyNav() {
        if (window.scrollY >= navChangePoint) {
            alNav.classList.add('dm-fixed-nav');
            alNav.classList.remove('dm-transparent-nav');
        } else {
            alNav.classList.remove('dm-fixed-nav');
            alNav.classList.add('dm-transparent-nav');
        }
    }
    window.addEventListener('scroll', stickyNav);
    stickyNav();
});
/* 
=============================================================================================
Code Reuse: Traversy Media
=============================================================================================
*/
const colsLeft = document.querySelectorAll('.animateInLeft') 

window.addEventListener('scroll', checkCols)

checkCols()

function checkCols() {
    const triggerBottom = window.innerHeight / 20 * 19
    
    colsLeft.forEach(animateInLeft => {
        const colTop =  animateInLeft.getBoundingClientRect().top

        if(colTop < triggerBottom){
            animateInLeft.classList.add('show')
        } else {
            animateInLeft.classList.remove('show')
        }
    })
}
/* 
=============================================================================================
End of Code Reuse: Traversy Media
=============================================================================================
*/

