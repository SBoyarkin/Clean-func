import healthyStatus from "../status";
test('health status "healthy"', () => {
  let result = healthyStatus({name: 'Маг', health: 90});
  expect(result).toBe('healthy');
})

test('health status "wounded"', () => {
  let result = healthyStatus({name: 'Маг', health: 35});
  expect(result).toBe('wounded');
})

test('health status "critical"', () => {
  let result = healthyStatus({name: 'Маг', health: 10});
  expect(result).toBe('critical');
})

