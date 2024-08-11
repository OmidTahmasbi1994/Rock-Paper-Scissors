function gameStart()
{
    var firstIndex = document.getElementById('rockImage').style.display="inline";
}
function slider(){
    var images = document.getElementById('round').getElementsByTagName('img');
    var index = 0;
    
    var starter = setInterval(function(){flash()} , 1);
    function flash()
    {
        index++;
        if(index==images.length)
        {
            index=0;
        }
        if(index==0)
            images[images.length-1].style.display='none';
        else
            images[index-1].style.display='none';
            
        images[index].style.display='inline';
    }
    document.getElementById('startButton').style.display='none';

    document.getElementById('rock').onclick = stopper
    document.getElementById('paper').onclick = stopper
    document.getElementById('scissors').onclick = stopper
    function stopper(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline';
    }
}