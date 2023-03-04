document.addEventListener('DOMContentLoaded',function(){
    const power = document.querySelector("[name=button_power]")
    const buttonOut = document.querySelector("[name=button_out]")
    const brigUp = document.querySelector("[name=button_brig_up]")
    const volumeUp = document.querySelector("[name=button_volume_up]")
    const brigDown = document.querySelector("[name=brig_down]")
    const volumeDown = document.querySelector("[name=button_volume_down]")
    const arrUp = document.querySelector("[name=button_arr_up]")
    const arrLeft = document.querySelector("[name=button_arr_left]")
    const arrPause = document.querySelector("[name=button_arr_enter]")
    const arrRight = document.querySelector("[name=button_arr_right]")
    const arrDown = document.querySelector("[name=button_arr_down]")
    const enter = document.querySelector("[name=button_enter]")
    const window = document.querySelector("[name=button_window]")

    var connection = new WebSocket('ws://192.168.1.107:8855/');

    connection.onopen = () =>{
        console.log("its OK");
        connection.send("hello!");
    }

    power.onclick = () => {
        connection.send("power")
    }

    buttonOut.onclick = () => {
        connection.send("out")
    }

    brigUp.onclick = () => {
        connection.send("brikUP")
    }

    volumeUp.onclick = () => {
        connection.send("volumeUp")
    }

    brigDown.onclick = () => {
        connection.send("brigDown")
    }

    volumeDown.onclick = () => {
        connection.send("volumeDown")
    }

    arrUp.onclick = () => {
        connection.send("arrUp")
    }

    arrLeft.onclick = () => {
        connection.send("arrLeft")
    }

    arrPause.onclick = () => {
        connection.send("arrPause")
    }

    arrRight.onclick = () => {
        connection.send("arrRight")
    }

    arrDown.onclick = () => {
        connection.send("arrDown")
    }

    enter.onclick = () => {
        connection.send("enter")
    }

    window.onclick = () => {
        connection.send("window")
    }


}, false);
