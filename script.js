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
    document.getElementById('winMassage').style.display='none';
    document.getElementById('loseMassage').style.display='none';

    //rock button
    document.getElementById('rock').onclick = function stopper_1(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline-block';
        if(images[index].id=='rockImage')
            document.getElementById('winMassage').style.display='inline';
        else
            document.getElementById('loseMassage').style.display='inline';

    }
    
    //paper button
    document.getElementById('paper').onclick = function stopper_2(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline-block';
        if(images[index].id=='paperImage')
            document.getElementById('winMassage').style.display='inline';
        else
            document.getElementById('loseMassage').style.display='inline';
    }

    //scissors button
    document.getElementById('scissors').onclick = function stopper_3(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline-block';
        if(images[index].id=='scissorsImage')
            document.getElementById('winMassage').style.display='inline';
        else
            document.getElementById('loseMassage').style.display='inline';
    }
}