const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    env: {
      user_id: "user1",
      user_password: "user1",
      admin_id: "admin",
      admin_password: "admin123",
    }
  },
});
