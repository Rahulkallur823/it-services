// const express = require('express');
// const {
//   loginController,
//   registerController,
//   testController,
//   forgotPasswordController
// } = require('../controllers/registercontroller');
// const { requireSignIn, isAdmin } = require('../middlewere/authmiddlware');
// const router = express.Router();

// // Register route
// router.post('/register', registerController);

// // Login route
// router.post('/login', loginController);

// // Forgot password route
// router.post('/forgot-password', forgotPasswordController);

// // Test route
// router.get('/test', requireSignIn, isAdmin, testController);

// // User authentication route
// router.get('/user-auth', requireSignIn, (req, res) => {
//   res.status(200).json({ ok: true });
// });

// // Admin authentication route
// router.get('/admin-auth', requireSignIn,isAdmin, (req, res) => {
//   res.status(200).json({
//     ok: true,
//     success: true,
//     message: "Welcome to the admin dashboard!"
//   });
// });

// module.exports = router;
