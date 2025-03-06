var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Customer;
}());
// ✅ Creating an instance of Customer and calling the method
var customer1 = new Customer();
customer1.firstName = "John";
customer1.lastName = "Doe";
customer1.greeter();
