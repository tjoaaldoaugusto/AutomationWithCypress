/// <reference types="cypress" />

it('sauce demo functional', function() {

    ///login with valid credential

    cy.visit ('https://www.saucedemo.com/', { failOnStatusCode: false })
    
    cy.get ('[data-test="username"]').type('standard_user')
    cy.wait(200)

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(200)

    cy.get('[data-test="login-button"]').click()
    cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
    cy.wait(200)

    ///filtering a product display

    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.wait(600)
    cy.scrollTo('bottom')
    cy.wait(600)

    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.wait(600)
    cy.scrollTo('bottom')
    cy.wait(600)
    
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    cy.wait(600)
    cy.scrollTo('bottom')
    cy.wait(600)

    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    cy.wait(600)
    cy.scrollTo('bottom')
    cy.wait(600)

    //view the detail of product

    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.wait(600)
    cy.get('[data-test="inventory-item-price"]').should('include.text', '$', '29.99')
    cy.wait(600)
    cy.get('[data-test="back-to-products"]').should('include.text', 'Back to products').click()
    cy.wait(600)

    cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click()
    cy.wait(600)
    cy.get('[data-test="inventory-item-desc"]').should('include.text', 'American', '100% ringspun')
    cy.wait(600)
    cy.get('[data-test="back-to-products"]').should('include.text', 'Back to products').click()
    cy.wait(600)
})