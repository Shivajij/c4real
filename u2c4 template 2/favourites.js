// // write js code here corresponding to favourites.html
// var mydata=JSON.parse(localStorage.getItem("favourites"))
// displydata(mydata)
// function displydata(data){
//     data.forEach(function(el){
//         let tr=document.createElement("tr")
//         let td1=document.createElement("td")
//       td1.innerText=el.td1
//         let tr2=document.createElement("td")
//         td2.innerText=el.td2
//         let td3=document.createElement("td")
//         td3.innerText=el.td3
//         let td4=document.createElement("td")
//         td4.innerText=el.td4
//         let td5=document.createElement("td")
//         td4.innerText=el.td5
      

       
//         tr.append(td1,td2,td3,td4,td5)
//         document.querySelector("#tbody").append(tr)
//     })
 
// }
var my_data=JSON.parse(localStorage.getItem("Favourites"));
displayData(my_data);

function displayData(data){
    data.forEach(function (elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem. match;

        var td2=document.createElement("td");
        td2.innerText=elem. teamA;

        var td3=document.createElement("td");
        td3.innerText=elem. teamB;

        var td4=document.createElement("td");
        td4.innerText=elem.data;

        var td5=document.createElement("td");
       


    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
        

    })

   
   

}