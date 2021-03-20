
describe('cypress problem', () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('_aceinvoice_session');
    })
    it('visit aceinvoice', () => {
        cy.visit('https://www.aceinvoice.com/');
    })
    it('sign up for free', () => {
        cy.get('ul li').contains("Sign up for FREE").click();
    }
    )
    it('email address', () => {
        cy.get('input[data-test-id=signup-email]').type('Sauravkumar98-march-19-2021-2142@example.com');
        cy.get('input[data-test-id=signup-submit]').click();
        cy.get('input[data-test-id=signup-password').type('welcome1234!');
        cy.get('input[data-test-id=signup-continue]').click();
    })

    it('first name', () => {
        cy.get('input[data-test-id=introduction-first-name]').type('Oliver');
    })
    it('last name', () => {
        cy.get('input[data-test-id=introduction-last-name]').type('Smith');
    })
    it('time zone', () => {
        cy.get('select[data-test-id=introduction-timezone]').select('New Delhi');
    })
    it('date', () => {
        cy.get('input[type ="radio"]').check('%d/%m/%Y', { force: true });
    })
    it('privacy', () => {
        cy.get('span').contains("By checking you agree to ").click();
    })
    it('privacy2', () => {
        cy.get('div[data-test-id=introduction-marketing-email-consent-input]').click()
    })
    it('introduction submit', () => {
        cy.get('input[data-test-id=introduction-submit').click();
    })

    it('company name', () => {
        cy.get('input[data-test-id=organization-name]').type('sauravkumar Private Limited');
    })
    it('company-submit', () => {
        cy.get('input[data-test-id=organization-submit]').click();
    })
    it('company skip', () => {
        cy.get('a[data-test-id=client-form-skip]').click();
    })
    it('assert first', () => {
        cy.get('h4').contains("Congratulations, you're all set!");
    })
    it('company-continue', () => {
        cy.get('button[data-test-id=onboarding-continue').click();
    })

    it('asserts second', () => {
        cy.get('.py-2').contains("Verification email sent to");
    })
    it('clients', () => {
        cy.get('a[data-test-id=header-clients]').click();
    })
    it('client add', () => {
        cy.get('a[data-test-id=client-add-new]').click();
    })
    it('client new', () => {
        cy.get('input[data-test-id=client-name]').type('Trix Inc');
    })
    it('client submit', () => {
        cy.get('input[data-test-id=client-submit]').click();
    })
    it("asserts third", () => {
        cy.get('[data-test-id=project-add-new]').contains("Add New Project");
    })

    it('client name', () => {
        cy.get('[data-test-id=project-name]').type("Trix Web Development");
    })
    it('hourly rate', () => {
        cy.get('[data-test-id=project-billing-method]').select('hourly_project_rate');
    })
    it('project rate', () => {
        cy.get('[data-test-id=project-rate').type('20');
    })
    it('project submit', () => {
        cy.get('[data-test-id=project-save]').click({ force: true });
    })
    it("asserts four", () => {
        cy.get('div[data-test-id=project-billing-method]').contains("Hourly Project Rate");
    })
    it("asserts five", () => {
        cy.get('div span').contains("No rounding");
    })
    it('asserts six', () => {
        cy.get('[data-test-id=project-team-member-table-name-1]').contains("Oliver Smith");
    })
})
