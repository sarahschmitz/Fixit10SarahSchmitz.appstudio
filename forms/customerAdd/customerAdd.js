

btnSubmit2.onclick=function(){
    let name = inptName1.value
    let query = "INSERT INTO customer VALUES("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")"

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
  if (req1.status == 200) { 

        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no names of that type.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults2.value = message
      } 

  } else

        NSB.MsgBox("Error code: " + req1.status)
}
