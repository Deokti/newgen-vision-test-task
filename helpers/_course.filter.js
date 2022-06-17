const compareRanges = require("./compare.ranges.js");

const _courseFilter = (courses, range) => {
  const result = [];
  const _length = courses.length;

  for (let i = 0; i < _length; i++) {
    const course = courses[i];

    if (compareRanges(course.prices, range)) {
      result.push(course);
    }
  }

  return result;
};

module.exports = _courseFilter;
