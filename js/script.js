$(document).ready(function(){
  $( function() {
    var rgbValue = 0
    $( '.rgb-btn-group .btn' ).on('click', function() {
      if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
      }
      else {
        $(this).addClass('on')
      }
      if ( $('.btn.rgb-red').hasClass('on') ) {
        rgbValue = rgbValue + 4
      }
      if ( $('.btn.rgb-green').hasClass('on') ) {
        rgbValue = rgbValue + 2
      }
      if ( $('.btn.rgb-blue').hasClass('on') ) {
        rgbValue = rgbValue + 1
      }
      color = setColor(rgbValue)
      changeColorAnimation(color)
      rgbValue = 0;
    })
  })

  function setColor(rgbValue) {
    var color
    switch (rgbValue) {
      case 0:// black
      color = '#9e9e9e'
      break;
      case 1:// blue
      color = '#90caf9'
      break;
      case 2:// green
      color = '#79c6b6'
      break;
      case 3:// cyan
      color = '#80deea'
      break;
      case 4:// red
      color = '#ed929f'
      break;
      case 5:// parple
      color = '#ce93d8'
      break;
      case 6:// yellow
      color = '#ffc35d'
      break;
      case 7:// white
      color = '#eeeeee'
      break;
    }
    return color
  }

  function changeColorAnimation(color) {
    $( 'body' ).animate({
      backgroundColor: color
    }, 1000 )
  }
})
