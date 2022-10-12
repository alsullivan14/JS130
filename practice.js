function delayLog() {
  var delay;
  for (delay = 0; delay < 10; delay++) {
    setTimeout(() => console.log(`${delay}`), delay * 1000);
  }
}


delayLog();

/*
1  // 1 second later
2  // 1 second later (2 seconds after start)
3  // 1 second later (3 seconds after start)
4  // etc...
5
6
7
8
9
10
*/