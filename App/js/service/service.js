app.factory("UserService", function() {
    var users = ["Ivete", "Alex", "Paulo"];

    return {
        all: function() {
            return users;
        },
        primeiro: function() {
            return users[0];
        }
    };
})