

var inp;
// var element = ;

function myFunction() {
    console.log("fun enter");
    inp = document.getElementById("myText").value;
    console.log(inp);
    document.getElementById("prin").innerHTML = inp;
}

function textStyle()
{
    window.onclick = e => 
    {
        if(e.target.innerText=="Bold")
        {  
            document.getElementById("prin").style.fontWeight = "700";
            document.getElementById("Bold").style.color="white";
            document.getElementById("Bold").style.backgroundColor="DeepSkyBlue";
        }
        else if(e.target.innerText=="Italic")
        {  
            document.getElementById("prin").style.fontStyle = "italic";
            document.getElementById("Italic").style.color="white";
            document.getElementById("Italic").style.backgroundColor="DeepSkyBlue";
        }
        else if(e.target.innerText=="Underline")
        {  
            document.getElementById("prin").style.textDecoration = "underline";
            document.getElementById("Underline").style.color="white";
            document.getElementById("Underline").style.backgroundColor="DeepSkyBlue";
            document.getElementById("Strikethrough").style = "initial";
        }
        else if(e.target.innerText=="Strikethrough")
        {  
            document.getElementById("prin").style.textDecoration = "line-through";
            document.getElementById("Strikethrough").style.color="white";
            document.getElementById("Strikethrough").style.backgroundColor="DeepSkyBlue";
            document.getElementById("Underline").style = "initial";
        }
        else if(e.target.innerText=="clear")
        {  
            document.getElementById("prin").style.textDecoration = "initial";
            document.getElementById("prin").style.fontStyle = "initial";
            document.getElementById("prin").style.fontWeight = "initial";

            document.getElementById("Underline").style = "initial";
            document.getElementById("Strikethrough").style = "initial";
            document.getElementById("Bold").style = "initial";
            document.getElementById("Italic").style = "initial";
        }
    }
}

function fontSize()
{
    window.onclick = e => 
    {
        if(e.target.innerText=="Inc +")
        {  
            var element = document.getElementById("prin");
            var i = window.getComputedStyle(element);
            var fs = i.getPropertyValue('font-size');
            var num = parseInt(fs.match(/\d+/g));
            num=num+4;
            document.getElementById("prin").style.fontSize = num+"px";
            document.getElementById("font_size").innerHTML = "Text size - "+num+"px";
        }
        else if(e.target.innerText=="Dec -")
        {  
            var element = document.getElementById("prin");
            var i = window.getComputedStyle(element);
            var fs = i.getPropertyValue('font-size');
            var num = parseInt(fs.match(/\d+/g));
            num=num-4;
            document.getElementById("prin").style.fontSize = num+"px";
            document.getElementById("font_size").innerHTML = "Text size - "+num+"px";
        }
        else if(e.target.innerText=="Reset")
        {
            document.getElementById("prin").style.fontSize ="32px";
            document.getElementById("font_size").innerHTML = "Text size - 32px";
        }
    }
}

function textAlign()
{
    window.onclick = e => 
    {
        if(e.target.innerText=="Left align")
        {  
            document.getElementById("prin").style.textAlign = "left";
            document.getElementById("Left").style.color="white";
            document.getElementById("Left").style.backgroundColor="DeepSkyBlue";

            document.getElementById("Right").style = "initial";
            document.getElementById("Center").style = "initial";
        }
        else if(e.target.innerText=="Right align")
        {  
            document.getElementById("prin").style.textAlign = "right";
            document.getElementById("Right").style.color="white";
            document.getElementById("Right").style.backgroundColor="DeepSkyBlue";

            document.getElementById("Left").style = "initial";
            document.getElementById("Center").style = "initial";

        }
        else if(e.target.innerText=="Center align")
        {  
            document.getElementById("prin").style.textAlign = "center";
            document.getElementById("Center").style.color="white";
            document.getElementById("Center").style.backgroundColor="DeepSkyBlue";

            document.getElementById("Left").style = "initial";
            document.getElementById("Right").style = "initial";
        }
    }
}

function textClr()
{
    window.onclick = e => 
    {
        if(e.target.innerText=="B")
        {  
            document.getElementById("prin").style.color = "Blue";
            document.getElementById("txt_clr").innerHTML = "Text color - Blue";
        }
        else if(e.target.innerText=="G")
        {  
            document.getElementById("prin").style.color = "Green";
            document.getElementById("txt_clr").innerHTML = "Text color - Green";
        }
        else if(e.target.innerText=="R")
        {  
            document.getElementById("prin").style.color = "Red";
            document.getElementById("txt_clr").innerHTML = "Text color - Red";
        }
        else if(e.target.innerText=="Bk")
        {  
            document.getElementById("prin").style.color = "Black";
            document.getElementById("txt_clr").innerHTML = "Text color - Black";
        }
        else if(e.target.innerText=="Y")
        {  
            document.getElementById("prin").style.color = "Yellow";
            document.getElementById("txt_clr").innerHTML = "Text color - Yellow";
        }
        else if(e.target.innerText=="O")
        {  
            document.getElementById("prin").style.color = "Orange";
            document.getElementById("txt_clr").innerHTML = "Text color - Orange";
        }
        else if(e.target.innerText=="W")
        {  
            document.getElementById("prin").style.color = "White";
            document.getElementById("txt_clr").innerHTML = "Text color - White";
        }
        else if(e.target.innerText=="Reset")
        {
            document.getElementById("prin").style.color = "Black";
            document.getElementById("txt_clr").innerHTML = "Text color";
        }
    }
}

function bgClr()
{
    window.onclick = e => 
    {
        if(e.target.innerText=="B")
        {  
            document.getElementById("prin").style.backgroundColor = "Blue";
            document.getElementById("bg_clr").innerHTML = "Background color - Blue";
        }
        else if(e.target.innerText=="G")
        {  
            document.getElementById("prin").style.backgroundColor = "Green";
            document.getElementById("bg_clr").innerHTML = "Background color - Green";
        }
        else if(e.target.innerText=="R")
        {  
            document.getElementById("prin").style.backgroundColor = "Red";
            document.getElementById("bg_clr").innerHTML = "Background color - Red";
        }
        else if(e.target.innerText=="Bk")
        {  
            document.getElementById("prin").style.backgroundColor = "Black";
            document.getElementById("bg_clr").innerHTML = "Background color - Black";
        }
        else if(e.target.innerText=="Y")
        {  
            document.getElementById("prin").style.backgroundColor = "Yellow";
            document.getElementById("bg_clr").innerHTML = "Background color - Yellow";
        }
        else if(e.target.innerText=="O")
        {  
            document.getElementById("prin").style.backgroundColor = "Orange";
            document.getElementById("bg_clr").innerHTML = "Background color - Orange";
        }
        else if(e.target.innerText=="W")
        {  
            document.getElementById("prin").style.backgroundColor = "White";
            document.getElementById("bg_clr").innerHTML = "Background color - White";
        }
        else if(e.target.innerText=="Reset")
        {
            document.getElementById("prin").style.backgroundColor = "White";
            document.getElementById("bg_clr").innerHTML = "Background color";
        }
    }
}