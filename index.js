const nemo = ["nemo"];
const everyone = ["bloat", "dory", "bruce", 
"marlin", "gill", "nemo"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + "milliseconds");
}
findNemo(nemo);
findNemo(everyone)

//practicing good coding concepts just started ZTM DS and ALG course
