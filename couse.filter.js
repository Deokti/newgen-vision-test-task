const coursesBubbleSort = require("./helpers/course.bubble.sort");
const _courseFilter = require("./helpers/_course.filter");

/**
 * @param {{
 *  name: string,
 *  prices: [number | null, number | null]
 * }} courses - список курсов
 * @param {[number | null, number | null]} range - диапозон цен
 */
const courseFilter = (courses, range) => {
  const filter = _courseFilter(courses, range);
  const sort = coursesBubbleSort(filter);
  return sort;
};

module.exports = { courseFilter };
