function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed < speedLimit) {
      console.log("Ok");
      alert("OK"); //EXTRA
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
        alert("License suspended"); //EXTRA
      } else {
        console.log(`Points: ${demeritPoints}`);
        alert(`Points: ${demeritPoints}`);  //EXTRA
      }
    }
  }
  const speed = parseFloat(prompt("Enter the speed of the car: "));
  speedDetector(speed);
