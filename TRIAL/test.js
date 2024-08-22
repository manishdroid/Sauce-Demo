

const assert = require('chai').assert;

describe('Sauce Demo Sorting Test', () => {
    it('should verify sorting functionality', async () => {
        // 1. Go to https://www.saucedemo.com/
        await browser.url('https://www.saucedemo.com/');
        
        // Assert that we're on the correct page
        const title = await browser.getTitle();
        assert.include(title, 'Swag Labs', 'Not on the Sauce Demo login page');

        // 2. Log in to the site
        const username = await $('#user-name');
        const password = await $('#password');
        const loginButton = await $('#login-button');

        await username.setValue('standard_user');
        await password.setValue('secret_sauce');
        await loginButton.click();

        // Assert that login was successful
        const productsTitle = await $('.title');
        assert.equal(await productsTitle.getText(), 'Products', 'Login failed or not on the products page');

        // Verify that the items are sorted by Name (A -> Z)
        const initialItems = await $$('.inventory_item_name').map(elem => elem.getText());
        
        // Assert that the initial sorting is correct (A -> Z)
        assert.deepEqual(initialItems, [...initialItems].sort(), 'Items are not initially sorted by Name (A -> Z)');

        // 3. Change the sorting to Name (Z -> A)
        const sortDropdown = await $('.product_sort_container');
        await sortDropdown.selectByAttribute('value', 'za');

        // Assert that the sorting option has changed
        const selectedOption = await sortDropdown.getValue();
        assert.equal(selectedOption, 'za', 'Sorting option not changed correctly');

        // 4. Verify that the items are sorted correctly
        const sortedItems = await $$('.inventory_item_name').map(elem => elem.getText());
        
        // Assert that the new sorting is correct (Z -> A)
        assert.deepEqual(sortedItems, [...sortedItems].sort().reverse(), 'Items are not correctly sorted by Name (Z -> A)');

        // Additional assertion to compare with the initial order
        assert.notDeepEqual(sortedItems, initialItems, 'The order of items did not change after sorting');

        // Verify the first and last items specifically
        assert.isTrue(sortedItems[0] > sortedItems[sortedItems.length - 1], 
            `First item '${sortedItems[0]}' is not alphabetically after last item '${sortedItems[sortedItems.length - 1]}'`);

        console.log('All assertions passed successfully!');
    });
});