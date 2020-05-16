
var tableData = data;

// YOUR CODE HERE!

var alien_data = data;
var tbody = d3.select("tbody");




function renderTable(arrayofObjects) {
  
  tbody.html("");
    
   
    arrayofObjects.forEach((object) => {
        var row = tbody.append("tr");
        
        
        Object.values(object).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(alien_data);


var button = d3.select("#filter-btn"); 
button.on("click", handleClick); 
 


function handleClick() {
  var cleaned_data = alien_data;
    

  var user_intake = d3.select("input");
  var user_date = user_intake.property("value");
  
  
  if (user_date) {
    cleaned_data = alien_data.filter(object =>
      object.datetime === user_date);
  }
  
  
  renderTable(cleaned_data);  
}
