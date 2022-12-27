function TurnOnDarkMode() {
  const button = document.querySelector('.lightBulb');
  var element = document.body;

  button.addEventListener('click', event => {
    element.classList.toggle("dark-mode");
  });
}

TurnOnDarkMode();

function colorPicker() {
  var p = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for(var i = 0; i < p.length; i++)
  {
      for(var j = 0; j < p.length; j++)
      {
          for(var k = 0; k < p.length; k++)
          {
              var x = i - k * 0.5;
              var y = j - k * 0.25;
              background[x][y] = "#" + p[i] + p[j] + p[k];
          }
      }
  }

  var div = document.querySelector(".colorPicker");
  for (var l = 0; l < maxX; l++)
  {
      for (var m = 0; m < maxY; m++)
      {
          div.innerHTML ='<div style="background:#' + background[x][y] +'"></div>';
      }

      //https://www.youtube.com/watch?v=FX1xb1cim7E 
  }
}
