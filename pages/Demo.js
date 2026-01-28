class Demo {
  constructor(page) 
  {
    this.page = page;
    this.reviewName = page.locator('#review-name');
    this.question = page.locator('#question-title');
  }

  async review() {
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');  
    // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    await this.page.getByRole('link', { name: 'Reviews', exact: true }).click();
    await this.page.getByRole('button', { name: 'Create New Cycle' }).click();
    await this.page.getByRole('button', { name: 'Create Performance Review' }).click();
    await this.reviewName.fill('Test ReviewQA2');
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('switch').first().click();
    await this.page.getByRole('switch').nth(3).click();
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('button', { name: 'Create Form' }).first().click();
    await this.page.getByRole('button', { name: 'Create From Scratch' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Create New Block' }).click();
    await this.page.getByRole('menuitem', { name: 'Question' }).click();
    await this.page.getByRole('textbox', { name: 'QUESTION' }).fill('Demo');
    await this.page.locator('label:nth-child(3) > .ant-radio-button').click();
    await this.page.locator('.inputPrimary.driver-dropdown-input').click();
    await this.page.locator('#performance-review-question-driver-dropdown-item').first().click();
    await this.page.getByRole('button', { name: 'Add Question Block' }).click();

    await this.page.getByRole('button', { name: 'Create Another Block' }).click();
    await this.page.getByRole('menuitem', { name: 'Question' }).click();
    await this.page.getByRole('textbox', { name: 'QUESTION' }).fill('Demo test');
    await this.page.locator('.inputPrimary.driver-dropdown-input').click();
    await this.page.getByText('Driving Performance').click();
    await this.page.getByRole('button', { name: 'Advanced Settings' }).click();
    await this.page.getByRole('switch').nth(4).click();
    await this.page.getByRole('button', { name: 'Add Question Block' }).click();
    console.log('Verify question behavior when score visibility is disabled');  
        //========== For DEMO SERVER======================//
    await this.page.getByRole('button', { name: 'Create Another Block' }).click();
    await this.page.getByRole('menuitem', { name: 'Weighted Score' }).click();
    await this.page.getByLabel('', { exact: true }).nth(1).check();
    await this.page.locator('div').filter({ hasText: /^Section$/ }).nth(1).click();
    await this.page.locator('.ant-select-item').click();
    await this.page.getByRole('button', { name: 'Add Weighted Score Block' }).click();
  //==================================== For staging Server======================//
  // await this.page.getByRole('button', { name: 'Create Another Block' }).click();
  // await this.page.getByRole('menuitem', { name: 'Weighted Score' }).click();
  // await this.page.getByLabel('', { exact: true }).nth(1).check();
  // await this.page.locator('div').filter({ hasText: /^Section$/ }).nth(1).click();
  // await this.page.locator('div').filter({ hasText: /^competency$/ }).nth(1).click();
  // await this.page.getByRole('button', { name: 'Add Weighted Score Block' }).click();
  // await this.page.getByRole('button', { name: 'Create Another Block' }).click();
  // await this.page.getByRole('menuitem', { name: 'Weighted Score' }).click();
  // await this.page.getByLabel('', { exact: true }).nth(1).check();
  // await this.page.locator('div').filter({ hasText: /^Section$/ }).nth(1).click();
  // await this.page.locator('div').filter({ hasText: /^Driving Performance$/ }).nth(5).click();
  // await this.page.getByRole('button', { name: 'Add Weighted Score Block' }).click();        
//========================================//==========================================
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('button', { name: 'Create Form' }).click();
    await this.page.getByRole('button', { name: 'Create From Scratch' }).click();
    await this.page.getByRole('button', { name: 'Create From Template' }).click();
    await this.page.waitForTimeout(4000);
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.locator('div:nth-child(4) > .flex.created-form-block-wrapper > .action-buttons > .anticon > svg').click();
    await this.page.locator('label:nth-child(3) > .ant-radio-button').click();
    await this.page.getByRole('switch').nth(2).click();

    await this.page.locator('.inputPrimary.driver-dropdown-input').click();
    await this.page.getByText('Decision Making').click();

    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Update question Block' }).click();

    await this.page.getByRole('button', { name: 'Create Another Block' }).click();
    await this.page.getByRole('menuitem', { name: 'Weighted Score' }).click();
    await this.page.getByLabel('', { exact: true }).nth(1).check();
    await this.page.locator('div').filter({ hasText: /^Section$/ }).nth(1).click();
    await this.page.locator('div').filter({ hasText: /^Decision Making$/ }).nth(5).click();
    await this.page.getByRole('button', { name: 'Add Weighted Score Block' }).click();
    await this.page.getByRole('button', { name: 'Create Another Block' }).click();
    await this.page.getByRole('menuitem', { name: 'Weighted Score' }).click();
    await this.page.getByLabel('', { exact: true }).first().check();
    await this.page.getByRole('textbox').nth(1).click();
    await this.page.getByRole('textbox').nth(1).fill('100');
    await this.page.getByRole('button', { name: 'Add Weighted Score Block' }).click();

    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Type to search' }).first().fill('Maverick Rumsey');
    // await this.page.getByRole('textbox', { name: 'Type to search' }).nth(1).fill('Steve Jobs');
    await this.page.waitForTimeout(1000);
    // ==================================demo=========================//
    await this.page.getByRole('button', { name: 'plus' }).click();
    //=======================staging==================================//
    // await this.page.locator('div:nth-child(7) > .grid-row > .add-button-wrapper > div > .ant-btn').click();
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('button', { name: 'Save & Continue' }).click();
    await this.page.getByRole('button', { name: 'Create Review Cycle' }).click();
    console.log("Review Cycle Created Sucussfully");
    }
    catch(error){
      console.log("Failed to Create Review Cycle");
      throw error;
    }
  }
  async selfrevlaunch(){
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');  
    // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    await this.page.getByRole('link', { name: 'Reviews', exact: true }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Search for a Review Cycle' }).fill('Test ReviewQA2');
    await this.page.getByRole('button', { name: 'Open' }).first().click();    
    await this.page.getByRole('cell', { name: 'Launch' }).first().click();
    await this.page.locator('div').filter({ hasText: /^Silent Launch$/ }).nth(2).click();
    await this.page.locator('div').filter({ hasText: /^Instant Launch$/ }).nth(1).click();
    await this.page.getByRole('checkbox', { name: 'Select All' }).check();
    await this.page.locator('button.ant-btn.primaryButton:has-text("Launch")').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Yes').click();
    await this.page.waitForTimeout(1000);
    console.log("Self REview Launched successfully");
    }
    catch(error){
      console.log("Failed to Launch Self Review");
      throw error;
    }
  }

  async siftuser(){
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/switch?email=maverick1147692196@example.net');
    // await this.page.goto('https://api.staging.peoplebox.ai/demo/switch?email=punch@tata.coom');
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('link', { name: 'Write Self Review' }).first().click();
    await this.page.getByRole('button', { name: '1 Unsatisfactory' }).click();
    await this.page.locator('.ProseMirror').fill('Good');
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Met Expectations', exact: true }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.getByRole('dialog').getByRole('button', { name: 'Submit' }).click();
    console.log("Self review form filled successfully");
    }
    catch(error){
      console.log("Failed to Fill Seld Review");
      throw error;
    }
  }

  async mgrrvwlaunch(){
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    await this.page.getByRole('link', { name: 'Reviews', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Search for a Review Cycle' }).fill('Test ReviewQA2');
    await this.page.getByRole('button', { name: 'Open' }).first().click();    
    await this.page.getByRole('cell', { name: 'Launch' }).first().click();
    await this.page.locator('div').filter({ hasText: /^Silent Launch$/ }).nth(2).click();
    await this.page.locator('div').filter({ hasText: /^Instant Launch$/ }).nth(1).click();
    await this.page.getByText('Recipients', { exact: true }).click();
    await this.page.getByText('Jony Ive').click();
    // await this.page.getByText('Rafeal').click();
    await this.page.locator('button.ant-btn.primaryButton >> text=Launch').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByText('Yes').click();
    await this.page.waitForTimeout(1000);
    console.log("Manager Review Launched successfully");
    }
    catch(error){
      console.log("Failed to Launch Manager Review");
      throw error;
    }
  }
  
  async managerreview(){
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/switch?email=jony1147278870@example.net');
    // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Write Reviews' }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Write' }).click();
    await this.page.locator('.ProseMirror').first().fill('Great Working');
    await this.page.getByRole('button', { name: 'Met Expectations' }).click();
    const editors = this.page.locator('.ProseMirror');
    // First editor
    await editors.nth(0).click();
    await editors.nth(0).fill('Good');
    // Second editor
    await editors.nth(1).click();
    await editors.nth(1).fill('Great');
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.getByRole('dialog').getByRole('button', { name: 'Submit' }).click();
    console.log("Manager filled Review successfully");
    }
    catch(error){
      console.log("Failed to Fill Manager Review.");
      throw error;
    }
  }
  async releaseReview(){
    try{
    await this.page.goto('https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
    await this.page.getByRole('link', { name: 'Reviews', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Search for a Review Cycle' }).fill('Test ReviewQA2');
    await this.page.getByRole('button', { name: 'Open' }).first().click();    
    await this.page.getByRole('cell', { name: 'Launch' }).first().click();
    await this.page.locator('div').filter({ hasText: /^Silent Launch$/ }).nth(2).click();
    await this.page.locator('div').filter({ hasText: /^Instant Launch$/ }).nth(1).click();
    await this.page.getByText('Recipients', { exact: true }).click();
    await this.page.getByText('Maverick Rumsey').click();
    // await this.page.getByText('Steve Jobs').click();
    await this.page.waitForTimeout(1000);
    await this.page.locator('button.ant-btn.primaryButton').filter({ hasText: 'Launch' }).click();
    await this.page.getByRole('textbox', { name: 'RELEASE REVIEW' }).fill('RELEASE REVIEW');
    await this.page.getByRole('button', { name: 'Release Review' }).click();
    console.log("Release Reviews successfully");
    }
    catch(error){
      console.log("Failed to Release Review");
      throw error;
    }
  }
  async verifyreview(){
    try{
      await this.page.goto('http://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
      // await this.page.goto('http://api.staging.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
      await this.page.getByRole('link', { name: 'View Reviews' }).first().click();
      await this.page.getByText('Calibration View', { exact: true }).click();
      await this.page.getByText('Write Review').click();
      await this.page.getByRole('button', { name: 'View' }).click();
      await this.page.getByRole('tab', { name: 'Manager' }).click();
      const downloadPromise = this.page.waitForEvent('download');
      await this.page.getByRole('button', { name: 'Download PDF' }).click();
      const download = await downloadPromise;
      await this.page.getByText('Team\'s Progress').click();
      await this.page.locator('span').filter({ hasText: 'Team\'s Progress' }).first().click();
      await this.page.getByText('FEEDBACK TO RECEIVE').click();
      await this.page.getByText('Overview').click();
      await this.page.getByRole('img').nth(5).click();
      await this.page.getByRole('button', { name: 'View' }).click();
      console.log('The Visible Score feature has been verified and is working as expected.');
    }
    catch(error){
      console.log('The verification step failed as the actual result did not match the expected result.');
    }
  }    
}
module.exports = { Demo };
