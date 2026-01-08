// const fs = require('fs');

// module.exports = async (browserContext, scenario) => {
//   let cookies = [];
//   const cookiePath = scenario.cookiePath;

//   if (!cookiePath) {
//     return;
//   }

//   // Read Cookies from File, if exists
//   if (fs.existsSync(cookiePath)) {
//     cookies = JSON.parse(fs.readFileSync(cookiePath));
//   }

//   if (!cookies.length) {
//     return;
//   }

//   // Add cookies to browser context
//   await browserContext.addCookies(cookies);

//   console.log('Cookie state restored with:', JSON.stringify(cookies, null, 2));
// };
