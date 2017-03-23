/*
 Name:             Aliyu B. Zakari,
 UMS:              01190914
 Major:            Computer Science Major
 Email:            aliyu_zakari@student.uml.edu
 School:           UMass Lowell Computer Science,
 Course:           91.61 GUI Programming I, Sec 201
 Assignment:       7


 Documentation:
 This assignment goal is making a muliplcation table using Javascript.

 */
$("form").on('submit', function (e) {
                  //ajax call here
                  submit();
                  //stop form submission
                  e.preventDefault();
                  return false;
                  });

//document.getElementById('button').onclick = submit;

function submit(){

//    /*check to make sure there is actually a number in each input*/
//    if(document.getElementById("xvaluemin").value.length == 0){
//        window.alert("X-min is wrong, PLease try again");
//        return false;
//    }
//    if(document.getElementById("xvaluemax").value.length == 0){
//        window.alert("X-max is wrong, PLease try again");
//        return false;
//    }
//    if(document.getElementById("yvaluemin").value.length == 0){
//        window.alert("Y-min is wrong, PLease try again");
//        return false;
//    }
//    if(document.getElementById("yvaluemax").value.length == 0){
//        window.alert("Y-max is wrong, PLease try again");
//        return false;
//    }
    
 //Where the validation occurs
    $('#myForm').validate({
                          rules: {
                          xvaluemin:  {
                          required: true,
                          range: [1,1000]
                          },
                          yvaluemin:  {
                          required: true,
                          range: [1,1000]
                          },
                          xvaluemax:  {
                          required: true,
                          range: [1,1000]
                          },
                          yvaluemax:  {
                          required: true,
                          range: [1,1000]
                          },
                          },
                          messages: {
                          xvaluemin: {
                          required: "Enter value",
                          range: "X min must be between 1 to 1000"
                          },
                          yvaluemin: {
                          required: "Enter value",
                          range: "Y min must be between 1 to 1000"
                          },
                          xvaluemax: {
                          required: "Enter value",
                          range: "X max must be between 1 to 1000"
                          },
                          yvaluemax: {
                          required: "Enter value",
                          range: "Y max must be between 1 to 1000"
                          },
                          },
                          errorContainer: $('#errorContainer'),
                          errorLabelContainer: $('#errorContainer ul'),
                          wrapper: 'li'
                          });
//If something is wrong with the valiation, it will clear the table and send out a message.
    if(!$('#myForm').valid()){
        var table = document.getElementById("multTable");
        table.style.display="table";
        table.innerHTML = "";
        return false;
    }

    var xvaluemin = parseInt(document.getElementById("xvaluemin").value);
    var xvaluemax = parseInt(document.getElementById("xvaluemax").value);
    var yvaluemin = parseInt(document.getElementById("yvaluemin").value);
    var yvaluemax = parseInt(document.getElementById("yvaluemax").value);

    /*Refreshes the table*/
    var table = document.getElementById("multTable");
    table.style.display="table";
    table.innerHTML = "";


//    /*Checking Logic*/
//    if(xvaluemin > xvaluemax){
//        window.alert("X-min is greater than X-max");
//        return false;
//    }
//    if(yvaluemin > yvaluemax){
//        window.alert("Y-min is greater than Y-max");
//        return false;
//    }

//    //Checking boundary
//    if(xvaluemax - xvaluemin > 1000){
//        window.alert("To large, difference between X-max-value and X-min-value should be less than 1000");
//        return false;
//    }
//    if(yvaluemax - yvaluemin > 1000){
//        window.alert("To large, difference between Y-max-value and Y-min-value should be less than 1000");
//        return false;
//    }


    //loop to create rows in table
    for(var i = yvaluemax; i >= yvaluemin; --i){

        var row = table.insertRow(0);
        //loop to create cells in each row
        for(var j = xvaluemax; j >= xvaluemin; --j){
            //create cell in row
            var cell = row.insertCell(0);
            //fill cell with product of column and row
            cell.innerHTML = (i * j);

            if (j%2 == 0){
                cell.className = "theader2";
            }
        }
        //create header cell for each row and insert at beginning
        var cell = row.insertCell(0);
        cell.innerHTML = i;
        //styling so we can differentiate headers
        cell.className = "theader";
    }
    //create top row for headers of each column
    var row = table.insertRow(0);
    for(var j = xvaluemax; j >= xvaluemin; --j){
        var cell = row.insertCell(0);
        cell.innerHTML = j;
        cell.className = "theader";
    }
    //create top left cell with labels for table
    var cell = row.insertCell(0);
    cell.innerHTML = "X*Y";
    cell.className = "theader";
    return false;
}
