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
  var current = document.querySelectorAll('div#grand-node div');
  var next = [];

  while (current) {

    if (!(current instanceof NodeList) && !next.length) {
      return current
    }


    if (current instanceof NodeList) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

deepestChild()