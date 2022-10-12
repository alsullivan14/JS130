/*
function makeList() {
  let arr = [];
  return function(arg) {
    let item = arg;
    if (!arr.includes(item) && item !== undefined) {
      arr[arr.length] = item;
      console.log(`${item} added!`);
    } else if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1);
      console.log(`${item} removed!`);
    } else if (arr.length > 0 && item === undefined) {
      arr.forEach(thing => console.log(thing));
    } else {
      console.log("The list is empty");
    }
  };
}


let list = makeList();
list();
//The list is empty.

list("make breakfast");
//make breakfast added!

list("read book");
//read book added!

list();
//make breakfast
//read book

list("make breakfast");
//make breakfast removed!

list();
//read book
*/

function makeList() {
  let items = [];
  return {
    listItems: items,
    add(item) {
      this.listItems.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      this.listItems.splice(this.listItems.indexOf(item), 1);
      console.log(`${item} removed!`);
    },
    list() {
      this.listItems.forEach(item => console.log(item));
    },
  };
}

let list = makeList();
list.add("peas");
//peas added!

list.list();
//peas

list.add("corn");
//corn added!

list.list();
//peas
//corn

list.remove("peas");
//peas removed!

list.list();
//corn
console.log(list.items)