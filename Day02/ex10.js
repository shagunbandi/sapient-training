function printMultiplicationTable() {
    // 1. Read the value from text box
    var input = document.getElementById('num').value;
    if(!input) {
        return;
    }

    output = ""

    if(!isNaN(input)){
        try {

            // 3. If successfull then generate a string representing the table
            var num = parseInt(input)
            for(var i=1;i<=15;i++){
                output += `${num} X ${i} = ${num*i}<br/>`;
            }        
        }
        catch(e) {
            output = 'Cannot print table for <b>' + input + '</b>';
        }
    }
    else {
        output = 'Cannot print table';
    }

    // 5. Output the stirng to a div
    document.getElementById('id1').innerHTML = output;


}