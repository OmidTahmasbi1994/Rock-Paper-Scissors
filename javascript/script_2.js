function gameStart()
{
    document.getElementById('rockImage').style.display="inline";
    document.getElementById('startButton').style.display='inline-block';
}
function slider(){
    
    document.getElementById('rockImage').style.display="none";

    //For a random digit between(x,y) =>  x + Math.floor(Math.random() * y)
    
    
    const images = document.getElementById('round').getElementsByTagName('img');
    let index = 0 + Math.floor(Math.random() * 3);
    const starter = setInterval(function(){flash()} , 1);

    function flash()
    {
        const i = index;
        images[i].style.display='none';
        index = 0 + Math.floor(Math.random() * 3);
        images[index].style.display='inline';
    }

    //when slider is called start button should be none display
    document.getElementById('startButton').style.display='none';

    //when slider is called all massages will be none display
    document.getElementById('startMassage').style.display='none';
    document.getElementById('winMassage').style.display='none';
    document.getElementById('loseMassage').style.display='none';
    document.getElementById('repeatMassage').style.display='none';

    document.getElementById('rock').style.display = 'inline';
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('scissors').style.display = 'inline';



    //select buttons function

    document.getElementById('rock').onclick = function(){rock_stopper()};
    document.getElementById('paper').onclick = function(){paper_stopper()}; 
    document.getElementById('scissors').onclick = function(){scissors_stopper()};
    
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