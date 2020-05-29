var i = 1
function dyna(){
    var p = document.getElementById('dynamic')
    var pp = document.createElement("input")
    var ppp = document.createElement("div")
    var label = document.createElement("label")
    pp.setAttribute("type","text")
    pp.setAttribute("id","inputfield"+i)
    ppp.setAttribute('class','input-field')
    label.setAttribute("for","inputfield"+i)
    label.innerHTML = "first name"
    // appending input element to div first
    ppp.append(pp)
    // append label
    ppp.append(label)
   //append tto html doc
    p.append(ppp)
     i++
 }

 function offesetInsert(){
   //  col s6 offset-s6
   let row_div = document.createElement("div")
   let col_div = document.createElement("div")
   let inputfield = document.createElement("input")
   let lable1 = document.createElement("label")
   let inputdiv = document.createElement("div")
   row_div.setAttribute("class","row")
   col_div.setAttribute("class","col s6 offset-s6")
   inputfield.setAttribute("id","inside"+i)
   inputfield.setAttribute("type","text")
   lable1.setAttribute("for","inside"+i)
   inputdiv.setAttribute("class","input-field")
   lable1.innerHTML = "name"
   
   inputdiv.append(inputfield)
   inputdiv.append(lable1)
   col_div.append(inputdiv)
   row_div.append(col_div)
   document.getElementById('dynamic').append(row_div)
   i++   
 }
//  <div class="row">
//     <form class="col s12">
//       <div class="row">
//         <div class="input-field col s6">
//           <input placeholder="Placeholder" id="first_name" type="text" class="validate">
//           <label for="first_name">First Name</label>
//         </div>
/* <div class="input-field col s6">
<input id="last_name" type="text" class="validate">
<label for="last_name">Last Name</label>
</div> */
 function demo1(){
    var virat = document.getElementById('dynamic1')
    var pri = document.createElement('input')
    var x1 = document.createElement('div')
    pri.setAttribute("type","email")
    pri.setAttribute('id','itext2')
    var dhar = document.createElement('label')
    dhar.setAttribute('for','itext2')
    dhar.innerHTML = "email id"
    virat.append(dhar)
    virat.append(pri)
    virat.append(x1)
 }
 function demo2(){
    var virat1 = document.getElementById('dynamic2')
    var pri1 = document.createElement('input')
    var x2 = document.createElement('div')
    pri1.setAttribute("type","password")
    pri1.setAttribute('id','itext3')
    var dhar1 = document.createElement('label')
    dhar1.setAttribute('for','itext3')
    dhar1.innerHTML = "password"
    virat1.append(dhar1)
    virat1.append(pri1)
    virat.append(x2)
 }
 function demo3(){
    var virat2 = document.getElementById('dynamic3')
    var pri2 = document.createElement('input')
    var x3 = document.createElement('div')
    pri2.setAttribute("type","phoneno")
    pri2.setAttribute('id','itext4')
    var dhar2 = document.createElement('label')
    dhar2.setAttribute('for','itext4')
    dhar2.innerHTML = "phonenumber"
    virat2.append(dhar2)
    virat2.append(pri2)
    virat.append(x3)
 }
 function demo4(){
    var virat3 = document.getElementById('dynamic4')
    var pri3 = document.createElement('input')
    var x4 = document.createElement('div')
    pri3.setAttribute("type","date")
    pri3.setAttribute('id','itext5')
    var dhar3 = document.createElement('label')
    dhar3.setAttribute('for','itext5')
    dhar3.innerHTML = "DOB"
    virat3.append(dhar3)
    virat3.append(pri3)
    virat.append(x4)
 }
 function demo5(){
    var virat4 = document.getElementById('dynamic5')
    var pri4 = document.createElement('input')
    var x5 = document.createElement('div')
    pri4.setAttribute("type","checkbox")
    pri4.setAttribute('id','itext6')
    var dhar4 = document.createElement('label')
    var dhar5 = document.createElement('label')
     dhar4.setAttribute('for','itext6')
    dhar4.innerHTML= "dancing"
    dhar5.innerHTML="drawing"
    virat4.append(pri4)
    virat4.append(dhar5)
    virat.append(x5)
 }
  