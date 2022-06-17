/**
 * @param {{
 *  name: string,
 *  prices: [number | null, number | null]
 * }} courses - список курсов
 */
const coursesBubbleSort = (courses) => {
  const _courses = [...courses];
  const _length = _courses.length;

  for (let i = _length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const priceOne = _courses[j].prices[0] || 0;
      const priceTwo = _courses[j + 1].prices[0] || 0;

      if (priceOne > priceTwo) {
        const temp = _courses[j + 1];
        _courses[j + 1] = _courses[j];
        _courses[j] = temp;
      }
    }
  }

  return _courses;
};

module.exports = coursesBubbleSort;
