$(function() {
    setPuzzleWithSize(3);
})

function setSizeBySearch(){
    try {
        size = parseInt($('#input_val').val());
    }
    catch{
        alert("type just the size of the grid... setting size to 3")
        size = 3;
    }
    setPuzzleWithSize(size);
    
}

function setPuzzleWithSize(size) {
    var nums = []
    var idealNums = []

    $("#puzzle").empty();
    // size = 3;

    var startTime = new Date().getTime()


    var max_row = parseInt(size);
    var max_col = parseInt(size);

    var myclicks = 0;
    var mywclicks = 0;
    
    $("#clicks").html(myclicks);
    $("#wrongclicks").html(mywclicks);
    $("#time").html(0 + ' secs');

    for(var i=0;i<(max_col*max_row);i++){
        nums.push(i);
        idealNums.push(i);
    }

    shuffle(nums)


    var k = 0;
    var blankID = -1;

    for(var i=0;i<max_row;i++){
        for(var j=0;j<max_col;j++){
            var val = nums[k++];

            if(val === 0) {
                val = "&nbsp;";
                blankID = getID(i, j, max_col);
            }

            $("<button>")
            .on("click", function() {
                myclicks++;
                var myID = $(this).attr("id");
                console.log(myID, blankID, canClick(myID, blankID, max_row, max_col));
                console.log($(this).text());

                            $("#clicks").html(myclicks);

                if(canClick(myID, blankID, max_row, max_col)){
                    myButton = $(this)
                    blankButton = $("#"+blankID)
                    // console.log(myButton, blankButton)

                    blankButton.text(myButton.text())
                    myButton.html("&nbsp;")
                    blankID = myID;
                    if(check(max_col, max_row)){
                        setTimeout(alert("DONE"), 1000)
                        
                    }
                    for(var ii=0;ii<max_col*max_row;ii++){
                        setUIClick(ii, blankID, max_row, max_col);
                    }
    
                }
                else{
                    mywclicks++;
                    // alert("Cannot Click")
                }
                var endTime = new Date().getTime()
                var diff = parseInt(parseInt(endTime - startTime)/1000);
                $("#time").html(diff + ' secs');
                $("#clicks").html(myclicks);
                $("#wrongclicks").html(mywclicks);


            })
            .html(val)
            // .val(val)
            .appendTo("#puzzle")
            .attr("id", getID(i, j, max_col));
            for(var ii=0;ii<max_col*max_row;ii++){
                setUIClick(ii, blankID, max_row, max_col);
            }

        }
        $("<br>").appendTo("#puzzle");
    }
}

function shuffle(array){
    array.sort(function() {
        return Math.random() - 0.5;
    });
    return array;
}

function getID(row, col, max_col){
    return row*max_col + col;
}

function getRow(id, max_col){
    return parseInt(id / max_col);
}

function getCol(id, max_row){
    return parseInt(id % max_row);
}

function canClick(myID, blankID, max_row, max_col){
    rownum = getRow(myID, max_col)
    colnum = getCol(myID, max_row)
    rowblank = getRow(blankID, max_col)
    colblank = getCol(blankID, max_row)

    // console.log(rownum, colnum, rowblank, colblank)

    if((rownum === (rowblank - 1) && colnum === colblank) ||
        (rownum === (rowblank + 1) && colnum === colblank) ||
        (colnum === (colblank - 1) && rownum === rowblank) ||
        (colnum === (colblank + 1) && rownum === rowblank)) {
            return true;
    }
    else return false;
}

function check(max_col, max_row){
    for(var i=1;i<(max_col*max_row);i++){
        myButton = $("#"+i)
        if(myButton.text() !== myButton.attr("id")) return false;
    }
    return true;

}

function setUIClick(myID, blankID, max_row, max_col){
    if(canClick(myID, blankID, max_row, max_col)) {
        $("#"+myID).addClass('clickBut')
    }
    else{
        $("#"+myID).removeClass('clickBut')
    }
}