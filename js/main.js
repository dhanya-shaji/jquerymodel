$(document).ready(function () {
    $(".ladda-button").click(function () {
        var l = Ladda.create(this);
        l.start();
        var userid = $("#exampleInputEmail1").val();
        var userpassword = $("#exampleInputPassword1").val();
        $.get("http://projectapi.texol.webfactional.com/ProjectTracker_api/login?username="+userid+"&password="+userpassword+"", function (response) {
           
           
            
            if (response.resultCode ==0) {
                alert("incorrect username or password ");
                l.stop();
            }
            else {
                alert("login succesfull");
                l.stop();
            }
        });
        
    });
});