$('button').click(() => {
    console.log("Yeah, you clicked me")
  });

  $('#second').on('click', () => {
    $('#first').text('Clicked on the second')
  });

  $('#third').on('click', () => {
   $('.btn').css('background-color', '#21fba8');
   $('.btn').css('color', 'black')
  });

  $('#first').on('click', () => {
    $('.btn').css('background', 'none');
    $('.btn').css('color', 'white');
    $('#first').text('Click on me')
  });

let color;

$('#four').one('click', () => {
    if ($('input').val() === "") {
         color = "blue";
     } else {
          color = $('input').val();
      };
      $('.btn').css('background', `${color}`);
    });