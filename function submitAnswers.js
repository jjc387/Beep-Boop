function test()
{
  var userImage = document.getElementById("picture");
  var correctAnswer = document.getElementById("picture");
    if(userImage.src.indexOf(correctAnswer.src) != -1)
    {
      alert("Answer is correct!");
      /* change image!! */
    }
    else 
    {
      alert("Answer is wrong! Try again.");
    }
}
