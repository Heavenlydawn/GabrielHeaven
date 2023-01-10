const menuBar = document.getElementById("menu-bar")


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active'); 
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

menuBar.addEventListener(onclick, function(){
    alert("I was clicked")
})