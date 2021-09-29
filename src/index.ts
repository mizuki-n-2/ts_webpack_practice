import Reverser from "./reverser"

let element = document.getElementById("element")
const word = window.prompt("反転したい文字を入力してね！")
if (word) {
  const reverser = new Reverser(word)
  reverser.reverse(element)
} else {
  window.alert("！！？")
  if(element) element.innerHTML = "<h1>お疲れ様でした！</h1>"
}
  
