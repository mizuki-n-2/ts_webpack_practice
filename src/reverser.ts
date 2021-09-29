export default class Reverser {
  word: string

  constructor(word: string) {
    this.word = word
  }

  reverse(element: HTMLElement | null) {
    const reverseWord = this.word.split("").reverse().join("")
    if(element)
      element.innerHTML = `<h1>「 <span id="before">${this.word}</span> 」を反転すると、、、</h1>` +
                          `<h1><span class="big">「 <span id="after">${reverseWord}</span> 」</span>になるよ！</h1>`
  }
}