// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",data)
var arr=JSON.parse(localStorage.getItem("shedule"))||[]
function data(){
 event.preventDefault()
//  var teamdocument.querySelector("#teamA").value
//  var team1=document.querySelector("#teamB").value
//  var date=document.querySelector("#date").value
//  var venue=document.querySelector("#venue").value

   obj={
     matchNum:masaiForm.matchNum.value,
     teamA:masaiForm.teamA.value,
     teamB:masaiForm.teamB.value,
     date:masaiForm.date.value,
     venue:masaiForm.venue.value
     
   }
 data.append(matchNum,teamA,teamB,date,venue)
 arr.push(data)
// console.log(data)
// console.log(arr)

localStorage.setItem("shedule",JSON.stringify(arr))
window.location="matches.html"

}


    
    
