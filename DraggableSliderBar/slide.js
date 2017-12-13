(function() {
  let isDragging = false;
  let startPosition = $('#wrapper').offset().left || 0;
  let $input = $('#input_box');

  $('#drag_spot').mousedown((evt) => {
    isDragging = true;
  });
  $('body').mouseup((evt) => {
    isDragging = false;
  });

  $('#slider_bar').mousemove((evt) => {
    if(isDragging) {
      let marginLeft = evt.pageX;
      console.log("****", marginLeft);
      let moveTo = marginLeft - startPosition;

      if (moveTo <= 0) {
        moveTo = 0;
      } else if (moveTo >= 300) {
        moveTo = 300;
      }
      $input.val(moveTo);
      $('.progress').css('width', `${moveTo}px`);
    }
  });

  $('#input_box').change((evt) => {
    let $ele = $(evt.target);
    let num = Number.parseInt($ele.val());

    if (!Number.isNaN(num)) {
      setPercent(num);
    }
  });

  function setPercent(percent) {
    if (percent <= 0) {
      percent = 0;
    } else if (percent >= 300) {
      percent = 300;
    }
    console.log("****", percent);
    $('.progress').css('width', `${percent}px`);
  }

})();
