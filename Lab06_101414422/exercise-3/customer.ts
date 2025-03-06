class Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

// ✅ Creating an instance using the constructor
let customer2 = new Customer("Jane", "Smith");
customer2.greeter();
