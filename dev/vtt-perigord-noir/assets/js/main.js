// eliaaa-webdev

let sta = localStorage.getItem('sta');if(sta==1){localStorage.removeItem('sta');localStorage.setItem('sta', 2);}else if(sta==2){localStorage.removeItem('sta');localStorage.setItem('sta', 3);}else if(sta==3){localStorage.removeItem('sta');localStorage.setItem('sta', 4);}else if(sta==4){localStorage.removeItem('sta');localStorage.setItem('sta', 5);}else if(sta==5){localStorage.removeItem('sta');localStorage.setItem('sta', 6);}else{
  // alert("Fermeture exceptionnelle le 23 août 2022 !");
  localStorage.removeItem('sta');localStorage.setItem('sta', 1);}
