/*
PRINT A TRIANGLE

          *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************

*/

function doPrintTriangle(rowN) {

  for (let row = 0; row <= rowN; row++) {

    for (let space = row; space < rowN; space++) {
      process.stdout.write(" ")
    }
    
    for (let star = 0; star < ((row * 2) -1); star++) {
      process.stdout.write("*")
    }
    
    process.stdout.write("\n")

  }

}


doPrintTriangle(10)
doPrintTriangle(5)
doPrintTriangle(15)