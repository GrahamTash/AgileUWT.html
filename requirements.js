document.getElementById("submitReq").addEventListener("click", function(event) {
  rqName = document.getElementById('reqName').value;
  rqDsc = document.getElementById('reqDsc').value;
  checks = 0;

  if(document.getElementById('lowPriority').checked) { 
    reqPriority = document.getElementById("lowPriority").value;
    document.getElementById('reqErr2').style.display = 'none';
  }
  else if(document.getElementById('midPriority').checked) { 
    reqPriority = document.getElementById("midPriority").value;
    document.getElementById('reqErr2').style.display = 'none';
  }
  else if(document.getElementById('highPriority').checked) { 
    reqPriority = document.getElementById("highPriority").value;
    document.getElementById('reqErr2').style.display = 'none';
  } 
  else {
    reqPriority = 'None'
    document.getElementById('reqErr2').style.display = 'block';
    checks -=1
  }

  if (rqName.length > 0) {
      document.getElementById('reqErr1').style.display = 'none';
      checks +=1
  }
  else document.getElementById('reqErr1').style.display = 'block';

  if (checks == 1) {
    document.getElementById('reqAddedMsg').style.display = 'block';
  }
  else {
    document.getElementById('reqAddedMsg').style.display = 'none';
  }



  
  console.log(document.getElementById('reqErr2'));
  console.log(rqName);
  console.log(rqDsc);
  //chosenPriority = document.querySelector('input[name="choosePriority"]:checked').value;
  console.log(reqPriority);


   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();

});