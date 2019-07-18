var fetchContactDetails = function () {
    var id = document.getElementById("contactID").value;
    if (!id) return;
    id = parseInt(id)
    var url = "http://10.150.120.87:4000/contacts/" + id
    // console.log(url);

    var xhr = new XMLHttpRequest();
    // console.log('xhr.readyState is', xhr.readyState); // --> 0 Uninitialised
    xhr.open('GET', url, true);
    // console.log('xhr.readyState is', xhr.readyState); // --> 1 Initialised
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // Job to be done when the response is complete
            if(xhr.status == 200){
                var p1 = JSON.parse(xhr.responseText);
                // console.log(xhr.responseText);
                document.getElementById('name').innerHTML = p1.firstname + ' ' + p1.lastname;
                document.getElementById('email').innerHTML = p1.email;
                document.getElementById('phone').innerHTML = p1.phone;
                document.getElementById('picture').setAttribute('src', p1.picture);
            }
            else{
                document.getElementById('name').innerHTML = "Not Found :(";
                document.getElementById('email').innerHTML = "Not Found :(";
                document.getElementById('phone').innerHTML = "Not Found :(";
                alert("No Data Found for this ID");
            }
        }
    };
    xhr.send(); // at this time --> 2 (request Sent), and becomes 3 (interactive) and 4 (complete)
};