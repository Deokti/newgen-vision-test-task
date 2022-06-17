const compareRanges = (range1, range2) => {
  return (
    (range1[0] || 0) >= (range2[0] || 0) &&
    (range1[1] || Infinity) <= (range2[1] || Infinity)
  );
};

module.exports = compareRanges;
