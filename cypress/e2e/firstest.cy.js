/// <reference types="cypress" />

it('sauce demo functional', function() {

    ///login with valid credential

    cy.visit ('https://www.saucedemo.com/', { failOnStatusCode: false })
    
    cy.get ('[data-test="username"]').type('standard_user')
    cy.wait(400)

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(400)

    cy.get('[data-test="login-button"]').click()
    cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
    cy.wait(400)

    ///filtering a product display

    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)

    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)

    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)

    //view the detail of product

    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.wait(1000)
   
    cy.get('[data-test="inventory-item-price"]').should('include.text', '$', '29.99')
    cy.wait(1000)
   
    cy.get('[data-test="back-to-products"]').should('include.text', 'Back to products').click()
    cy.wait(1000)

    cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click()
    cy.wait(1000)
    
    cy.get('[data-test="inventory-item-desc"]').should('include.text', 'American', '100% ringspun')
    cy.wait(1000)
    
    cy.get('[data-test="back-to-products"]').should('include.text', 'Back to products').click()
    cy.wait(1000)

    //adding an item into cart

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(400)
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '1')
    cy.wait(400)
    
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('[data-test="shopping-cart-link"]')
    cy.wait(1000)

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(400)
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '1')
    cy.wait(400)
    
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.wait(400)
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '2')
    cy.wait(400)
    
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.wait(400)
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
    cy.wait(400)

    //checking an item on cart page

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.wait(400)
    
    cy.get('[data-test="inventory-item-name"]').should('include.text', 'Sauce Labs Bolt T-Shirt')
    cy.wait(1000)
    
    cy.get('[data-test="inventory-item-desc"]').should('include.text', '100% ringspun')
    cy.wait(1000)

    cy.get('[data-test="inventory-item-price"]').should('include.text', '$', '15.99')
    cy.wait(1000)
    
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.wait(1000)
    
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '2')
    cy.wait(1000)
    
    cy.get('[data-test="continue-shopping"]').click()
    cy.wait(1000)
    
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.wait(1000)
    
    cy.get('[data-test="checkout"]').click()
    cy.wait(1000)

    //filling an information

    cy.get('[data-test="firstName"]').type('No')
    cy.wait(1000)

    cy.get('[data-test="lastName"]').type('Dupe')
    cy.wait(1000)

    cy.get('[data-test="postalCode"]').type('1111')
    cy.wait(1000)

    cy.get('[data-test="title"]').should('include.text', 'Checkout: Your Information')
    cy.wait(1000)

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.wait(1000)
    
    cy.get('[data-test="checkout"]').click()
    cy.wait(1000)

    cy.get('[data-test="cancel"]').click()
    cy.wait(1000)

    cy.get('[data-test="checkout"]').click()
    cy.wait(1000)

    cy.get('[data-test="firstName"]').type('No')
    cy.wait(1000)

    cy.get('[data-test="lastName"]').type('Dupe')
    cy.wait(1000)

    cy.get('[data-test="postalCode"]').type('1111')
    cy.wait(1000)

    cy.get('[data-test="continue"]').click()
    cy.wait(1000)

    ///overview the cart

    cy.get('[data-test="inventory-item-name"]')
    cy.wait(1000)

    cy.get('[data-test="inventory-item-price"]')
    cy.wait(1000)

    cy.get('[data-test="item-quantity"]')
    cy.wait(1000)

    cy.get('[data-test="shipping-info-label"]')
    cy.wait(1000)

    cy.get('[data-test="payment-info-label"]')
    cy.wait(1000)

    cy.get('[data-test="total-info-label"]')
    cy.wait(1000)

    cy.get('[data-test="payment-info-label"]')
    cy.wait(1000)

    cy.get('[data-test="total-label"]')
    cy.wait(1000)

    cy.get('[data-test="finish"]').click()
    cy.wait(1000)

    ///complete purhcase

    cy.get('[data-test="pony-express"]')
    cy.wait(1000)

    cy.get('[data-test="complete-header"]').should('include.text', 'Thank you for your order!')
    cy.wait(1000)

    cy.get('[data-test="complete-text"]').should('include.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    cy.wait(1000)
    
    cy.get('[data-test="back-to-products"]').click()
    cy.wait(1000)
})