const calculator = require("./stringCalculator");
const StringCalculator = new calculator.StringCalculator();

describe("Add", () => {
  it("testing for strings sperated by comma", () => {
    expect(StringCalculator.Add("1,2")).toBe(3);
    expect(StringCalculator.Add("1,2,5")).toBe(8);
  });

  it("testing with empty string", () => {
    expect(StringCalculator.Add("")).toBe(0);
  });

  it("testing for strings with new lines", () => {
    expect(StringCalculator.Add("1\n,2,3")).toBe(6);
    expect(StringCalculator.Add("1,2\n,4")).toBe(7);
  });

  it("testing for strings with delimiters", () => {
    expect(StringCalculator.Add("//;\n1;3;4")).toBe(8);
    expect(StringCalculator.Add("//$\n1$2$3")).toBe(6);
    expect(StringCalculator.Add("//@\n2@3@8")).toBe(13);
  });

  it("testing for strings with negative numbers", () => {
    expect(() => {
      StringCalculator.Add("1,-1,2");
    }).toThrow("Negatives not allowed: -1 found in string");

    expect(() => {
      StringCalculator.Add("-2\n,2,3");
    }).toThrow("Negatives not allowed: -2 found in string");

    expect(() => {
      StringCalculator.Add("//$\n1$2$-3");
    }).toThrow("Negatives not allowed: -3 found in string");
  });

  it("testing to ignore numbers larger than 1000", () => {
    expect(StringCalculator.Add("1,2,1001")).toBe(3);
    expect(StringCalculator.Add("1,2000,1001")).toBe(1);
  });

  it("testing for delimiters with arbitrary length", () => {
    expect(StringCalculator.Add("//***\n1***2***3")).toBe(6);
    expect(StringCalculator.Add("//*;$\n2*;$2*;$3")).toBe(7);
  });
});
