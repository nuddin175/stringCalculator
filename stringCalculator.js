function StringCalculator() {
  // Method to add string of numbers
  this.Add = (str) => {
    let [delimiter, strNum] = this.getDelimiter(str);

    if (strNum === "") {
      return 0;
    }

    let strList = strNum.split(delimiter);

    let sum = 0;
    strList.forEach((str) => {
      if (Number(str.trim()) < 0) {
        throw `Negatives not allowed: ${str.trim()} found in string`;
      }

      if (str.trim() <= 1000) {
        sum += Number(str.trim());
      }
    });
    return sum;
  };

  // Method to get delimiter based on input. Returns the input string with delimiter field removed
  this.getDelimiter = (strNum) => {
    let delimiter = ",";

    if (strNum.substring(0, 2) === "//") {
      let delimiterCounter = 2;
      for (let i = 2; i < strNum.length; i++) {
        delimiterCounter++;
        if (strNum[i] === "\n") {
          break;
        }
      }
      delimiter = strNum.substring(2, delimiterCounter - 1);
      strNum = strNum.substring(delimiterCounter);
    }
    strNum = strNum.trim();
    return [delimiter, strNum];
  };
}

module.exports = { StringCalculator };
