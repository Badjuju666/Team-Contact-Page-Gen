
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole()
        this.card
        this.card2
        this.color = this.getColor()
        // this.getCard()
    }

    getColor() {
        return this.color
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

    getCard() {
        
    }
};

module.exports = Employee