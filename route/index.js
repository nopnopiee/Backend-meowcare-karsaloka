import express from 'express'
// import userRoute from '../route/user.route.js'
import adminRoute from '../route/admin.route.js'
import dokterRoute from '../route/dokter.route.js'
import kategoriprodukRoute from '../route/kategoriproduk.route.js'
import vaksinRoute from '../route/vaksin.route.js'
import rasRoute from '../route/ras.route.js'
import jeniskelaminRoute from '../route/jeniskelamin.route.js'
import pengirimanRoute from '../route/pengiriman.route.js'
import beritaRoute from '../route/berita.route.js'
import customerRoute from '../route/customer.route.js'
import produkRoute from '../route/produk.route.js'
import jadwalRoute from '../route/jadwal.route.js'
import kalenderRoute from '../route/kalender.route.js'
// import authRoute from '../route/auth.route.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'
// import passport from 'passport'
// import "../middleware/passport.js"

const router = express()

router.use(adminRoute)
// router.use(authenticateToken,adminRoute)
// router.use(passport.authenticate('jwt', {session:false}),userRoute)
router.use(dokterRoute)
router.use(vaksinRoute)
router.use(kategoriprodukRoute)
router.use(rasRoute)
router.use(jeniskelaminRoute)
router.use(pengirimanRoute)
router.use(beritaRoute)
router.use(customerRoute)
router.use(produkRoute)
router.use(jadwalRoute)
router.use(kalenderRoute)
// router.use(authRoute)


export default router

// import express from 'express'
// import adminRoute from '../route/admin.route.js'
// import authRoute from '../route/auth.route.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'
// import passport from 'passport'
// import "../middleware/passport.js"

// const router = express()

// // router.use(authenticateToken,siswaRoute)
// router.use(adminRoute)
// router.use(passport.authenticate('jwt', {session:false}),siswaRoute)
// router.use(authRoute)


// export default router
