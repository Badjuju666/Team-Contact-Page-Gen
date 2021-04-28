
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
        this.card =
            `
        <div class="col">    
            <div class="card ${this.color} border-success mb-3 card d-flex justify-content-around">
                <div class="d-flex justify-content-around mt-3 mx-2">
                    <h4 class="card-header">${this.role}</h4>    
                </div>
                <div class="card-body ${this.color} mt-3 mx-2 px-3">
                    <h4 id="purp" class="card-title text-center">${this.name}</h4>
                    <div class="list-group border-dark list-group-flush">
                        <a class="list-group-item list-group-item-action list-group-item-success">ID:        ${this.id}</a>
                        <a class="list-group-item list-group-item-action list-group-item-success" href="mailto:${this.email}">Email:        ${this.email}</a>`
                if (this.role === 'Manager') {
                    this.card += `<a class="list-group-item list-group-item-action list-group-item-success">Office Number:        ${this.office}</a>`
                } else if (this.role === 'Engineer') {
                    this.card += `<a class="list-group-item list-group-item-action list-group-item-success"> href="https://github.com/${this.github}" target="_blank">Github Link:        ${this.github}</a>`
                } else if (this.role === 'Intern') {
                    this.card += `<a class="list-group-item list-group-item-action list-group-item-success">School:        ${this.school}</a>`
                }

                this.card += 
                    `        
                    </div>
                </div>        
            </div>
        </div>`

    }

    getCard2() {
        this.card =
            `
        <div class="card border ${this.color} pt-3 border-success rounded">
            <div class="d-flex justify-content-around">    
                <h4 class="card-header d-flex justify-content-around">${this.role}</h4>
            </div>          
            <div class="card-body ${this.color}">
                <h3 id="purp" class="card-title text-center">${this.name}</h3>
                <div class="list-group border-dark list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-success">Employee ID: ${this.id}</a>
                    <a class="list-group-item list-group-item-action list-group-item-success" href="mailto:${this.email}">Email: ${this.email}</a>
                    <a class="list-group-item list-group-item-action list-group-item-success">Office Number: ${this.office}</a>
                </div>
            </div>
            <div class="rounded wrapper text-white bg-warning bg-gradient d-flex justify-content-around border border-light card-footer">
                <h4>${this.name} Team</h4>
            </div>
        </div>
        <div class="mt-5 pt-5 row row-cols-1 row-cols-md-2 g-4">
            `
        this.card2 += 
            `       </div>
            </div>`
    }
};

module.exports = Employee