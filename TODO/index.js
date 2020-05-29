var i = 1
$(document).ready(function(){
    $("#add_btn").click(function (){
        //input field la iruthu data edukanum
        let value_todo = $("#todoinput_id").val()
        let temp_para = $("<p></p>").attr("id","todo_item"+i).attr("class","center-align")
        temp_para.html(value_todo)
        $("#todo_items").append(temp_para)
        i++
    })
    $("#remove_btn").click(function(){
        console.log("before removing i = "+i)
        $("#todo_item"+i).remove()
        i--
        console.log("after removing i = "+i)
    })
})