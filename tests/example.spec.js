import { test, expect } from '@playwright/test';
const { Demo } = require('../pages/Demo');


test('get started link', async ({ page }) => {
  const demo = new Demo(page)
  test.setTimeout(90000)
  await demo.review();
  await demo.selfrevlaunch();
  await demo.siftuser();
  await demo.mgrrvwlaunch();
  await demo.managerreview();
  await demo.releaseReview();
  await demo.verifyreview();
});
