$(document).ready(function(){
    $('#para').text('Jai Shree Ram!');
    $('#para1').text('Jai Shree Ram!');
    $('#hide').click(function(){
        $('.paragraph').hide();
    });
    
    $('#show').click(function(){
        $('.paragraph').show();
    });

    $('#fadeToggle').click(function(){
        $('#para').fadeToggle();
    })
    $('#fadeToggleSlow').click(function(){
        $('#para1').fadeToggle('slow');
    })
    $('#slideup').click(function(){
        $('.paragraph1').slideUp();
    })
    $('#slidedown').click(function(){
        $('.paragraph1').slideDown();
    })
    $('#animate').click(function(){
        $('.box').animate({
            left: '250px',
            height: '+=200px',
            width: '+=140px',
            opacity: '1',
            
        },function(){
            $('.paragraph2').slideDown('very slow');
        });
    });

    $('#btn').on({
        mouseenter: function(){
            $(this).css("background-color", "Lightskyblue");
            
        },
        mouseleave: function(){
            $(this).css("background-color", "skyblue");
            $(this).css({"color": "darkblue"});
            $(this).css({"border": "1px solid red"});

        }
    });

    $('.append').on('click', function(){
        let a = prompt('Enter what you want to append: p or h1');
        let b = prompt('Enter the text you want to append');
        if(a == 'p'){
            $('.container1').append('<p>'+b+',</p>')
            $('.appremove').text('Remove the appended paragraph')
            $('.appremove').on('click', function(){
                $('.container1').children('p').remove();
                $('.appremove').text('Removed')
            })
        }
        else if(a == 'h1'){
            $('.container1').append('<h1>'+b+'</h1>')
            $('.appremove').text('Remove the appended heading')
            $('.appremove').on('click', function(){
                $('.container1').children('h1').remove();
                $('.appremove').text('Removed')
            })
        }
    })
    $('.prepend').on('click', function(){
        let c = prompt('Enter what you want to prepend: p or h1');
        let d = prompt('Enter the text you want to prepend');
        if(c == 'p'){
            $('.container2').prepend('<p>'+d+',</p>')
            $('.preremove').text('Remove the prepended paragraph')
            $('.preremove').on('click', function(){
                $('.container2').children('p').remove();
                $('.preremove').text('Removed')
            })
        }
        else if(c == 'h1'){
            $('.container2').prepend('<h1>'+d+'</h1>')
            $('.preremove').text('Remove the prepended heading')
            $('.preremove').on('click', function(){
                $('.container2').children('h1').remove();
                $('.preremove').text('Removed')
            })
        }
    })
    
});



