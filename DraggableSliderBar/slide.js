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
      let moveTo = marginLeft - startPosition;
      if (moveTo <= 0) {
        moveTo = 0;
      } else if (moveTo >= 300) {
        moveTo = 300;
      }

      setPercent(moveTo)
      $input.val(moveTo);
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
    $('.progress').css('width', `${percent}px`);
    $('#drag_spot').css('left', `${percent-5}px`);
  }
})();
