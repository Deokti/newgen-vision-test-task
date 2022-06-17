const { expect, use } = require("chai");
const assertArrays = require("chai-arrays");
use(assertArrays);

const { courseFilter } = require("../couse.filter.js");
const {
  courses,
  requiredRange1,
  requiredRange2,
  requiredRange3,
} = require("../test.data.js");

describe("courseFilter", function () {
  it("Should return an array of courses range from null (0) to 100", () => {
    const data = courseFilter(courses, requiredRange1);
    expect(data).to.be.ofSize(2);
  });
  it("Should return an array of courses range from 100 to 350", () => {
    const data = courseFilter(courses, requiredRange2);
    expect(data).to.be.ofSize(1);
  });
  it("Should return an array of courses range from 200 to null (Infinity)", () => {
    const data = courseFilter(courses, requiredRange3);
    expect(data).to.be.ofSize(2);
  });
});
