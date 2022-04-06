let num = +prompt('Type a number between 1 and 5', '');
let resStr = '';
let starStr = '';
let emptySpace = '';

for(let i = 0; i < num; i++) {
  starStr = starStr + '*' + ' ';

  while(emptySpace.length < num - starStr.length / 2) {
    emptySpace+= ' ';
  }

  resStr+= emptySpace + starStr + '\n';
  emptySpace = '';

}
alert(resStr);