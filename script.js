function gameStart()
{
    var firstIndex = document.getElementById('rockImage').style.display="inline";
}
/*function slider()
{
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
    
    
    //rock button function
    
    document.getElementById('rock').onclick = function stop_1(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline';
    }

    //paper button function
    
    document.getElementById('paper').onclick = function stop_2(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline';
    }

    //scissors butten function
    document.getElementById('scissors').onclick = function stop_3(){
        clearInterval(starter);
        document.getElementById('startButton').style.display='inline';
    }
}*/
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

//rock button function
   


//paper button function

/*document.getElementById('paper').onclick = function stop_2(){
    clearInterval(ob.ret());
    document.getElementById('startButton').style.display='inline';
}

//scissors butten function
document.getElementById('scissors').onclick = function stop_3(){
    clearInterval(ob.ret());
    document.getElementById('startButton').style.display='inline';
}






/*
function call(n , a){
    var name = n;
    var age = a;

    function info(){
        console.log("Hello my name is ",name)
    }
    function per(){
        console.log("I'm ",age," years old.")
    }
    return{
        info,per
    }
}

ob = call("Omid Tahmasebi" , 26)
ob.info()
ob.per()
*/