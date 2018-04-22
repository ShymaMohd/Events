// Check browser support
if (typeof(Storage) !== "undefined") {
    
    document.getElementById("result1").innerHTML = localStorage.getItem("u1");
    document.getElementById("result2").innerHTML = localStorage.getItem("u2");
    document.getElementById("result3").innerHTML = localStorage.getItem("u3");
    document.getElementById("result4").innerHTML = localStorage.getItem("u4");
    document.getElementById("result5").innerHTML = localStorage.getItem("u5");
     
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    