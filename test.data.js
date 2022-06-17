// Список курсов
const courses = [
  { name: "Courses in England", prices: [0, 100] }, // Test 1,
  { name: "Courses in Germany", prices: [500, null] }, // Test 3
  { name: "Courses in Italy", prices: [100, 200] }, // Test 1, Test 2
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] }, // Test 3
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1 = [null, 200]; // Должно вернуться результатов в тесте -- 2
const requiredRange2 = [100, 350]; // Должно вернуться результатов в тесте -- 1
const requiredRange3 = [200, null]; // Должно вернуться результатов в тесте -- 2

module.exports = { courses, requiredRange1, requiredRange2, requiredRange3 };
