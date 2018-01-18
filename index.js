function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  var listLength = list.length;
  var num;
  
  for (let i=0; i < listLength; i++) {
    num = parseInt(list[i].innerHTML)
    list[i].innerHTML = (num + n).toString()
  }
}

function deepestChild() {
  var current = document.querySelector('div#grand-node');
  var next = [];
  
  while (current) {
    
    if (current.textContent === 'boo!') {
      return current
    }
    
    
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

deepestChild()