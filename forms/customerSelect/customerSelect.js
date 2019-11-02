customerSelect.onshow=function(){
    let query = "SELECT state FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
  if (req1.status == 200) { 

        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no states of that type.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtState.value = message
      } 

  } else

        NSB.MsgBox("Error code: " + req1.status)
}



btnSubmit.onclick=function(){
  let state = inptState.value
  let query = "SELECT name FROM customer WHERE state = " + '"' + state + '"'


    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
  if (req1.status == 200) { 

        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no states of that type.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtResults.value = message
      } 

  } else

        NSB.MsgBox("Error code: " + req1.status)
}

