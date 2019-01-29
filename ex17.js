let count = 5;
label1:
while(count > 0) {
    console.log("in while", count);
  if(count > 2) {
      for(i = 0; i < 4; i++) {
          console.log("in for", i)
          if(i == 2) {
              count--;
              continue label1;
          }
      }
  } else if(count == 2) {
      count -= 2
      console.log("continue in while")
      continue label1;
  } else {
      break;
  }
  count--;
}

label2:
console.log("Done.");