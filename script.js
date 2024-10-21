let currentTab = 0;
showTab(currentTab);

function showTab(n){
let tabs = document.getElementsByClassName('tab')
tabs[n].style.display="block";

if(n==0){
     document.getElementById("prevBtn").style.display="none";
}
else{
    document.getElementById("prevBtn").style.display="inline";
}

if(n==(tabs.length-1)){
    document.getElementById("nextBtn").innerHTML="Soumettre";
}else{
    document.getElementById("nextBtn").innerHTML="Suivant";
}
}
function nextPrev(n){
    let tabs=document.getElementsByClassName('tab');
    if(n==1 && !validateForm()){
        return false;
    }
    tabs[currentTab].style.display="none";

    currentTab = currentTab +n;

    if(currentTab>=tabs.length){
        document.getElementById("multipartForm").submit();
        return false;
    }
    showTab(currentTab);
}
function validateForm(){
    let valid  = true;
    let inputs = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input");

    for(i=0;i<inputs.length;i++){
      if(inputs[i].value === ""){
        inputs[i].className+="error" ;  
        valid = false  
      }
    }
    return valid
}