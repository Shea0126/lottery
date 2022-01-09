/**
 * 事件委托没能达到禁止重复按钮重复的功能，或与其他点击事件冲突
 * 改个时间再看看到底是什么问题！！！
 */
// window.onload = function(){
//     // let box = document.querySelector(".luckybox")
//     var box = document.getElementsByClassName("luckybox")[0]
//     console.log(box)
//     box.onclick = function(ev){
//         var   ev = ev || window.event
//         var  nDiv = ev.srcElement || ev.target
//         var  _num = Math.floor(Math.random()*10)
//         if(_num === 5){
//             nDiv.innerText = "恭喜你中奖了！"
//             nDiv.onclick = null
//         }else{
//             nDiv.innerText = "很遗憾，你未中奖"
//             nDiv.onclick = null
//         }
//         // nDiv.innerHTML = "Shea"
//     }
// }
/**
 * 功能基本能达到要求，应该还需要再优化
 */
let box = document.querySelector(".luckybox")
let nDiv = box.querySelectorAll("div")
console.log(nDiv)
for(let i = 0; i < nDiv.length ; i++){
    nDiv[i].onclick = function(){
        let _num = Math.floor(Math.random()*100)
        if(_num === 5){
            this.innerText = "恭喜你中奖了！" + _num
            this.onclick = null     // 设置此点按钮只可点击一次
        }else{
            this.innerText = "很遗憾，你未中奖" + _num
            console.log(_num)
            this.onclick = null
        }
    }
}
let btn = document.querySelector("button")
btn.onclick = function(){
    window.location.reload()
}
