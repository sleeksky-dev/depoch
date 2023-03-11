import { toDepoch, fromDepoch } from '../src/index'

test('Depoch number', () => {
  const dt = toDepoch(20230101);
  const obj = fromDepoch(dt);
  expect(obj.year).toBe(2023);
  expect(obj.month).toBe(1);
  expect(obj.date).toBe(1);
  expect(obj.day).toBe('Sunday');
})

test('Depoch echo', () => {
  const dt = toDepoch(19000);
  expect(dt).toBe(19000);
})

test('Depoch string', () => {
  const dt = toDepoch('2023-01-01');
  const obj = fromDepoch(dt);
  expect(obj.year).toBe(2023);
  expect(obj.month).toBe(1);
  expect(obj.date).toBe(1);
  expect(obj.day).toBe('Sunday');
})

test('Depoch date string', () => {
  const dt = toDepoch('01-01-2023');
  const obj = fromDepoch(dt);
  expect(obj.year).toBe(2023);
  expect(obj.month).toBe(1);
  expect(obj.date).toBe(1);
  expect(obj.day).toBe('Sunday');
})

test('Depoch local time', () => {
  const dt = toDepoch('2023-01-01T04:00:00');
  const obj = fromDepoch(dt);
  expect(obj.year).toBe(2023);
  expect(obj.month).toBe(1);
  expect(obj.date).toBe(1);
  expect(obj.day).toBe('Sunday');
})

test('Depoch date', () => {
  const dt = toDepoch();
  const now = new Date();
  const obj = fromDepoch(dt);
  expect(obj.year).toBe(now.getFullYear());
  expect(obj.month).toBe(now.getMonth() + 1);
  expect(obj.date).toBe(now.getDate());
})

