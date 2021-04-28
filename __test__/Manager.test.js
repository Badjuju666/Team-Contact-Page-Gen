
const Mana = require("../lib/Manager");

test("manager object", () => {
    expect(Mana.name).toEqual(expect.any(String));
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

const office = { 
    phone: '310-456-0987'
};

test("get employee phone number", () => {
    expect(office.phone).toBe('310-456-0987')
});