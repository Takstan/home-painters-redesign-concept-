import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, validateLeadForm } from './estimate.ts';

test('calculateEstimate returns realistic ranges for interior rooms', () => {
  const result = calculateEstimate({
    serviceType: 'interior',
    rooms: 3,
    surfaceCondition: 'excellent'
  });

  assert.ok(result.minPrice > 1000, 'Min price should be over $1000 for 3 rooms');
  assert.ok(result.maxPrice > result.minPrice, 'Max price should exceed min price');
  assert.equal(result.warrantyYears, 3, 'Includes 3-year warranty');
  assert.ok(result.estimatedDays >= 2, 'Estimated duration should be at least 2 days');
});

test('calculateEstimate adjusts cost and days for heavy preparation', () => {
  const normal = calculateEstimate({
    serviceType: 'interior',
    rooms: 2,
    surfaceCondition: 'excellent'
  });

  const heavy = calculateEstimate({
    serviceType: 'interior',
    rooms: 2,
    surfaceCondition: 'heavy_prep'
  });

  assert.ok(heavy.minPrice > normal.minPrice, 'Heavy prep should cost more than standard');
  assert.ok(heavy.estimatedDays > normal.estimatedDays, 'Heavy prep should add labor days');
});

test('calculateEstimate supports kitchen cabinet painting', () => {
  const cabinets = calculateEstimate({
    serviceType: 'cabinets',
    rooms: 1
  });

  assert.ok(cabinets.minPrice >= 1500, 'Cabinets should have appropriate base rate');
  assert.ok(cabinets.includedPerks.length > 0, 'Includes customer perks');
});

test('validateLeadForm validates required fields correctly', () => {
  const invalid = validateLeadForm({
    fullName: '',
    phone: '123',
    email: 'bad-email',
    serviceType: 'interior',
    postalCode: ''
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.postalCode);

  const valid = validateLeadForm({
    fullName: 'Sarah Jenkins',
    phone: '416-555-0199',
    email: 'sarah.j@example.ca',
    serviceType: 'interior',
    postalCode: 'M4E 2V1'
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
