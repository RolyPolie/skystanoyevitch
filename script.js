
    // Modal function
// const modal = document.querySelector(".modal");
// function toggleActive() {
//     modal.classList.toggle("is-active");
//     }

//     function modalClose() {
//         modal.classList.remove("is-active");
// }

$(document).ready(function() {

    // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
            
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
            // $('.navbar-dropdown').hide();



            $('.has-dropdown').click(function(){
                $('.navbar-dropdown').removeClass('is-hidden-mobile')
                $('.navbar-dropdown').toggleClass('is-active')

            })
    
        });

        $('.has-dropdown').click(function(){
            $('.has-dropdown').toggleClass('is-active');
        })

        
    });