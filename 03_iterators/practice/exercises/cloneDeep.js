/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(value) {
  const result = {};

  for (let key in value) {
    if (typeof value[key] === 'object') {
      result[key] = cloneDeep(value[key]);
    } else {
      result[key] = value[key];
    }
  }

  return result;
}
