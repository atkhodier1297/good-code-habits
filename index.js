const nemo = ["nemo"];
const everyone = ["bloat", "dory", "bruce", 
"marlin", "gill", "nemo"];
const large = new Array(100000).fill("nemo")

function findNemo(array) {
  //let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  //let t1 = performance.now();
  //console.log("Call to find Nemo took " + (t1 - t0) + "milliseconds");
}
//findNemo(large); 
// O(n) --> Linear Time n is the number of executable inputs
// as the inpouts increase the number of operations increase linearly most common Big O you will find


const boxes = [0,1,2,3,4,5,6,7,8,9]

function logBox(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
}

logBox(boxes) //O(2) still a flat line

// we round it down to O(1) for ease of use
// it doesnt matter how big the inputs are we are always looking at constant time
