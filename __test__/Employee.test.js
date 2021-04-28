
const Emp = require("../lib/Employee");

test("employee object", () => {
    expect(Emp.name).toEqual(expect.any(String));
});

const idnum = {id: '66666'};

test("id", () => {
    expect(idnum.id).toBe('66666');
})

const email = {email: 'monkeyflip@company.com'};

test("email", () => {
    expect(email.email).toBe('monkeyflip@company.com');

})

test("return role", () => { 
    expect(Emp.role).toBe();
})