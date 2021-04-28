
const Eng = require ('../lib/Engineer');

test("engineer object", () => {
    expect(Eng.name).toEqual(expect.any(String));
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
    expect(email.email).toBe('monkeyflip@company.com')
});

const user = {github:'monkey'}
test("usename", () => {
    expect(user.github).toBe('monkey');
})