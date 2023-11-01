describe('login and logout', () => {
    it('User can be login with email or username', () => {
        cy.visit('https://kabiixoo-z3v6.onrender.com/signin')
        cy.get('.inputTextUsername').type(`${Cypress.env('user_id')}`)
        cy.get('.inputTextPass').type(`${Cypress.env('user_password')}`)
        cy.get('.btSignIn').click()

        // notification popup
        cy.get('.swal2-popup')
            .should('contain', 'เข้าสู่ระบบสำเร็จ')
            .and('contain', 'แจ้งเตือน')
        cy.get('.swal2-confirm').click()

        //after login passed
        cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/home');
    })

    it('User can be login with google', () => {
        cy.visit('https://kabiixoo-z3v6.onrender.com/signin')
        // cy.get('.bt_lwg').click()
        // cy.get('.swal2-popup')

        // //noti popup
        // .should('contain', 'เข้าสู่ระบบสำเร็จ')
        // .and('contain', 'แจ้งเตือน')
        // cy.get('.swal2-confirm').click()

        // //after login passed
        // cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/home');

    })

    it('Admin can be login email or username', () => {
        cy.visit('https://kabiixoo-z3v6.onrender.com/signin')
        cy.get('.inputTextUsername').type(`${Cypress.env('admin_id')}`)
        cy.get('.inputTextPass').type(`${Cypress.env('admin_password')}`)
        cy.get('.btSignIn').click()

        // notification popup
        cy.get('.swal2-popup')
            .should('contain', 'เข้าสู่ระบบสำเร็จ')
            .and('contain', 'แจ้งเตือน')
        cy.get('.swal2-confirm').click()

        //after login passed. display admin screen
        cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/administrator-homepage');

    })

    it('User can be logged out', () => {
        cy.visit('https://kabiixoo-z3v6.onrender.com/signin')
        cy.get('.inputTextUsername').type(`${Cypress.env('user_id')}`)
        cy.get('.inputTextPass').type(`${Cypress.env('user_password')}`)
        cy.get('.btSignIn').click()

        // notification popup
        cy.get('.swal2-popup')
            .should('contain', 'เข้าสู่ระบบสำเร็จ')
            .and('contain', 'แจ้งเตือน')
        cy.get('.swal2-confirm').click()

        //logout
        cy.get('.login-dropdown-display').click()
        cy.get('.login-dropdown-bottom').click()
        cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/')
    })

    it('Admin can be logout', () => {
        cy.visit('https://kabiixoo-z3v6.onrender.com/signin')
        cy.get('.inputTextUsername').type(`${Cypress.env('admin_id')}`)
        cy.get('.inputTextPass').type(`${Cypress.env('admin_password')}`)
        cy.get('.btSignIn').click()

        // notification popup
        cy.get('.swal2-popup')
            .should('contain', 'เข้าสู่ระบบสำเร็จ')
            .and('contain', 'แจ้งเตือน')
        cy.get('.swal2-confirm').click()

        //after login passed. display admin screen
        cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/administrator-homepage');

        //logout
        cy.get('.logoutAdmin').click()
        cy.url().should('include', 'https://kabiixoo-z3v6.onrender.com/')
    })
})