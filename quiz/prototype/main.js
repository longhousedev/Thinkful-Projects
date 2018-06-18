$( document ).ready(function() {
    $(".answer-box").click(function(){
        var userAns = ($(this).children("p").attr("class"));
        if (userAns === "c") {
            alert("Correct!")
        } 
        else {
            alert("Wrong answer. please try again.")
        }
    });
});