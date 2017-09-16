

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'Happy.png';

imgArray[1] = new Image();
imgArray[1].src = 'Surprised.png';

imgArray[2] = new Image();
imgArray[2].src = 'Sad.png';


imgArray[3] = new Image();
imgArray[3].src = 'Loving.png';


imgArray[4] = new Image();
imgArray[4].src = 'Excited.png';

imgArray[5] = new Image();
imgArray[5].src = 'Angry.png';

  function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}
}

var answerArray = new Array();
answerArray =['Happy', 'Surprised', 'Sad', 'Loving', 'Excited', 'Angry']


function submitAnswer() {
  for(i = 0, length = radios.length; i<length; i++) {
    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
    }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == answerArray[i] ) {
    alert('Answer is correct !');
    nextImage(imgArray[i])
  } else {
    alert('Answer is wrong');
  }
};

