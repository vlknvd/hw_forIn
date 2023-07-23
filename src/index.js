const object = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(obj, arr) {
  const result = [];
  for (const prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop) && !arr.includes(prop)) {
      result.push({ key: prop, value: obj[prop] });
    }
  }
  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.splice(result, 0, { key: arr[i], value: obj[arr[i]] });
  }
  return result;
}

orderByProps(object, ['level', 'name']);
