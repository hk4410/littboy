function check() {
  console.log('check');
  let flag = 0;
  
  if (document.contact.name1.value == "") {
    flag = 1;
  }
  else if (document.contact.mail.value =="") {
    flag = 1;  
  }
  else if (document.cotact.number.value == "") {
    flag = 1;
  }
  
  
  if (flag) {
    window.alert('必要項目に未入力があります');
    return false;
  }
  else {
    return true;
  }
  
    
    
    
    
}
    
    