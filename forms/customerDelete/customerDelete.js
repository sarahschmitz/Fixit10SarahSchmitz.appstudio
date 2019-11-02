let allCustomerData = []

customerDelete.onshow=function(){
      let query = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
  if (req1.status == 200) { 

        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no names of that type.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtNames.value = message
      } 

  } else

        NSB.MsgBox("Error code: " + req1.status)
}


btnSubmit1.onclick=function(){
    let delName = inptName.value 
        let found = false
    for (i = 0; i <= allCustomerData.length - 1; i++) {
        if (delName == allCustomerData[i][1])
            found = true
 }
    if (found == false) 
       NSB.MsgBox("That name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + delName + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=3hGm9xnt&query=" + queryDelete)

      if (req1.status == 200) { 
        if (req1.responseText == 500) 
            NSB.MsgBox("You have successfully deleted the company: " + delName)
            var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtResults1.value = message
        else
            NSB.MsgBox("There was a problem deleting " + delName + " from the database.")
      } else {

        NSB.MsgBox("Error: " + req1.status);
      }  
  } 

