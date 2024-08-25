function gameStart()
{
    document.getElementById('rockImage').style.display="inline";
    document.getElementById('startButton').style.display='inline-block';
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

    document.getElementById('startMassage').style.display='none';
    document.getElementById('winMassage').style.display='none';
    document.getElementById('loseMassage').style.display='none';
    document.getElementById('repeatMassage').style.display='none';

    document.getElementById('rock').style.display = 'inline';
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('scissors').style.display = 'inline';



    //select buttons function

    document.getElementById('rock').onclick = rock_stopper;
    document.getElementById('paper').onclick = paper_stopper; 
    document.getElementById('scissors').onclick = scissors_stopper;
    
    //rock button
    function rock_stopper(){
        clearInterval(starter);

        document.getElementById('paper').style.display = 'none';
        document.getElementById('scissors').style.display = 'none';

        document.getElementById('startButton').style.display='inline-block';

        if(images[index].id=='scissorsImage')
            document.getElementById('winMassage').style.display='inline';
        else if(images[index].id=='paperImage')
            document.getElementById('loseMassage').style.display='inline';
        else if(images[index].id=='rockImage')
            document.getElementById('repeatMassage').style.display='inline';
    }

    //paper button
    function paper_stopper(){
        clearInterval(starter);

        document.getElementById('rock').style.display = 'none';
        document.getElementById('scissors').style.display = 'none';

        document.getElementById('startButton').style.display='inline-block';
        if(images[index].id=='rockImage')
            document.getElementById('winMassage').style.display='inline';
        else if(images[index].id=='scissorsImage')
            document.getElementById('loseMassage').style.display='inline';
        else if(images[index].id=='paperImage')
            document.getElementById('repeatMassage').style.display='inline';
    }

    //scissors button
    function scissors_stopper(){
        clearInterval(starter);

        document.getElementById('rock').style.display = 'none';
        document.getElementById('paper').style.display = 'none';

        document.getElementById('startButton').style.display='inline-block';
        if(images[index].id=='paperImage')
            document.getElementById('winMassage').style.display='inline';
        else if(images[index].id=='rockImage')
            document.getElementById('loseMassage').style.display='inline';
        else if(images[index].id=='scissorsImage')
            document.getElementById('repeatMassage').style.display='inline';
    }    
}