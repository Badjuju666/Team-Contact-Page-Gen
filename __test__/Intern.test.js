
const Int = require('../lib/Intern');

test("intern object", () => {
    expect(Int.name).toEqual(expect.any(String));
});

    const idnum = {
        name: 'monkey',
        id: '66666'
    };

    test("employee id", () => {
        expect(idnum.id).toBe('66666');
    })

    const email = {
        name: 'monkey',
        email: 'monkeyflip@company.com'
    };

    test("employee email", () => {
        expect(email.email).toBe('monkeyflip@company.com');
    })

const school = {name: 'NYU'}

test("school name", () => {
    expect(school.name).toBe('NYU');
})