const BinarySearchTree = require("./binary-constructor");

//1

/* 

              3
          /      \     
         1        6      
        /  \     /  \  
       2    4   5    9 
                    /
                   7



//2 Remove the Root

              5
          /      \
         1        6
        /  \       \
       2    4       9
                    /
                   7
*/

//3
//Please check "binary-constructor.js" for class

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3, "a");
  BST.insert(1, "b");
  BST.insert(4, "c");
  BST.insert(6, "d");
  BST.insert(9, "e");
  BST.insert(2, "f");
  BST.insert(5, "g");
  BST.insert(7, "h");

  return BST;
}

//console.log(main());

// function main2() {
//   const BST = new BinarySearchTree();

//   BST.insert("E", 1);
//   BST.insert("A", 2);
//   BST.insert("S", 3);
//   BST.insert("Y", 4);
//   BST.insert("Q", 5);
//   BST.insert("U", 6);
//   BST.insert("E", 7);
//   BST.insert("S", 8);
//   BST.insert("T", 9);
//   BST.insert("I", 10);
//   BST.insert("O", 11);
//   BST.insert("N", 12);

//   return BST;
// }

// console.log(main2());

//4 What does this program do?
//This program returns the sum of a parent node and its children

//5 Height of a BST
// depth-temp[0] search using recursion.
//running counter, reset after looping back to start
//if the returned counter is > largest counter you have, replace it

// function height(BST, counter = 0) {
//   if (!BST) {
//     console.log("End of branch reached!");
//     return counter;
//   }

//   const h1 = height(BST.left, counter++);
//   const h2 = height(BST.right, counter++);

//   if (h1 > h2) {
//     return h1;
//   } else {
//     return h2;
//   }
// }

// console.log(height(main()));

// function Breadthhh(BST, counter = 0) {
//   if (!BST) {
//     console.log("End of branch reached!");
//     return counter;
//   }

//   const h1 = height(BST.left, counter++);
//   const h2 = height(BST.right, counter++);

//   if (h1 > h2) {
//     return h1;
//   } else {
//     return h2;
//   }
// }

// console.log(Breadthhh(main()));

//6

//7

// function findThird(BST, temp = [0, 0, 0]) {
//   //if key is greater than largest, largest = key
//   //if secLargest < largest, secLargest = largest
//   //if thirdLargest < secLargest, thirdLargest = secLargest
//   //else
//   if (!BST) {
//     return temp[2];
//   }

//   let key = BST.key;

//   if (key > temp[0]) {
//     temp[2] = temp[1];
//     temp[1] = temp[0];
//     temp[0] = key;
//   } else if (key > temp[1]) {
//     temp[2] = temp[1];
//     temp[1] = key;
//   } else if (key > temp[2]) {
//     temp[2] = key;
//   }
//   const h1 = findThird(BST.left, temp);
//   const h2 = findThird(BST.right, temp);

//   return h1 > h2 ? h1 : h2;
// }
// console.log(findThird(main()));

//8 balanced bst
// function Breadthhh(BST, counter = 0) {
//   if (!BST) {
//     console.log("End of branch reached!");
//     return counter;
//   }

//   const h1 = Breadthhh(BST.left, counter++);
//   const h2 = Breadthhh(BST.right, counter++);
//   console.log(h1, h2);
//   if (h1.counter == h2.counter) {
//     return true;
//   } else if (h1.counter + 1 === h2.counter) {
//     return true;
//   } else if (h2.counter + 1 === h1.counter) {
//     return true;
//   } else return false;
// }

//console.log(Breadthhh(main()));

//9
function compareTrees(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let success = false;
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] === arr2[y]) {
        success = true;
        break;
      }
    }
    if (!success) {
      return false;
    }
  }
  return true;
}

// console.log(
//   "Samzies? ",
//   compareTrees([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0])
// );

//6
function isItBST(BT) {
  //BST !duplicate keys
  //key.left < key
  //key.right > key
  if (!BT) {
    return true;
  }
  if (BT.key < BT.key.left) {
    return false;
  }
  if (BT.key > BT.key.right) {
    return false;
  }

  const h1 = isItBST(BT.left);
  const h2 = isItBST(BT.right);

  if (h1 && h2) {
    return true;
  } else return false;
}

console.log(isItBST(main()));
