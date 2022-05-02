// write js code here corresponding to matches.html
var mydata=JSON.parse(localStorage.getItem("favourites"))
displydata(mydata)
function displydata(data){
    data.forEach(function(el){
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
      td1.innerText=el.td1
        let tr2=document.createElement("td")
        td2.innerText=el.td2
        let td3=document.createElement("td")
        td3.innerText=el.td3
        let td4=document.createElement("td")
        td4.innerText=el.td4
        let td5=document.createElement("td")
        td4.innerText=el.td5
        let td6=document.createElement("td")
        td4.innerText=el.td6

       
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("#tbody").append(tr)
    })
}