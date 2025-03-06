class Customer {
    firstName: string;
    lastName: string;

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

// ✅ Creating an instance of Customer and calling the method
let customer1 = new Customer();
customer1.firstName = "John";
customer1.lastName = "Doe";
customer1.greeter();
