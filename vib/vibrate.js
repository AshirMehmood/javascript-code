document.querySelector('#btn-1').onclick= function vibrate(ms){
navigator.vibrate(ms)
}
document.querySelector('.btn2').onclick=function vibratePattern(){
    navigator.vibrate([100,200,300,200,300]);
    }