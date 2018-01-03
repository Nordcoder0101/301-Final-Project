$('#form-logi').submit(function(e){
    e.prevent.Default();
    var username = $('input#username').val();
    var pword = $('input#password').val();

    if (pword == ""){
        alert ("Please enter Password");
        $('#password').focus();
        return false;
    }

    if (username == ""){
        alert ("Please enter username");
        $('#username').focus();
        return false;
    }

    if(username != 'name' && pword != 'password'){
        $.ajax({
            url:
            type:
            data: {
                username: name,
                pword: password
            },
            success: function(data) {
                console.log (data);

                var obj = JSON.parse(data);

                if(obj.result != 'invalid'){
                    alert("login succeeded");
                    window.location = 'www.batheinmymilk.com'
                }
            }
        })
    }
})