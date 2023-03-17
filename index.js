count = 0;
countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  console.log("Button clicked: " + count);
  countEl.innerText = count;
}

function reset() {
  count = 0;
    countEl.innerText = count;
    console.log('Reset')
}

function save() {
    saveEl.innerText += ' ' + count + ' -'
    console.log('Saved ' + count)
    reset();
}
