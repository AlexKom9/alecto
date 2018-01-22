;(function(){

    // $.get({
    //     type: "GET",
    //     url: "http://api.github.com/users",
    //     // data: ....,
    //     success: function(users){
    //         // console.log(users);
    //         for (let i = 0; i < users.length; i++) {
    //             const user = users[i];
    //             $("#users").append(`
    //                 <tr>
    //                     <td>
    //                         <img src="${user.avatar_url}" width="100">
    //                     </td>
    //                     <td>${user.login}</td>
    //                 </tr>
    //             `);
    //         }
    //     }
    // })

    $.get('http://api.github.com/users', function(users){
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            $("#users").append(`
                <tr>
                    <td>
                        <img src="${user.avatar_url}" width="100">
                    </td>
                    <td>${user.login}</td>
                </tr>
            `);
        }
    })

    $('#getUser').click(function(){
        let login = $('#login').val();
        $.get('http://api.github.com/users/'+login, function(user){
        $("#users").html(`
            <tr>
                <td>
                    <img src="${user.avatar_url}" width="100">
                </td>
                <td>${user.login}</td>
            </tr>
        `);
    })
    })

}());