$(function(){
    $('#login-show').click(function(){
      $('#login-modal').fadeIn();

    });

    $('.close-modal').click(function(){
      $('#login-modal').fadeOut();
    });

    $('#header-top').click(function(){
      $('html,body').scrollTop(0);
    });
    



    $('#main').hover(function(){
        $('#welcome-message').fadeIn(3000);
    });

    $('#welcome-message').fadeIn(function(){
        $('#aboutme-message').fadeIn(1000);
        $('#aboutme-message').slideUp(1000);
        $('#aboutme-message').fadeIn(1000);
     });
 
     $('#contact-').hover(function(){
        $('#welcome-message').fadeIn(3000);
    });






    $('.skill-hover').hover (
      function(){
        $(this).find('.text-contents').addClass('text-active');
      },
      function(){
        $(this).find('.text-contents').removeClass('text-active');
      }
      );
  







    $('.faq-list-item').click(function(){
        var $answer=$(this).find('.answer');
        if ($answer.hasClass('open')){
          $answer.removeClass('open');
          $answer.slideUp();
          $(this).find('span').text('+');
        }else{
          $answer.addClass('open');
          $answer.slideDown();
          $(this).find('span').text('-');
        }
      });
    


});
