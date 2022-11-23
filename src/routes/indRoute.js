const express =require("express") ;
 const {userRoute} =require("./userRoute") ;
 const {postRoute} =require("./postRoute") ;
 const {adminRoute} =require("./adminRoute") ;
// import prodRoute =require("./prodRoute") ;
// import orderRoute =require("./orderRoute) ";

const router = express.Router();

router.use("/user", userRoute);
router.use("/post", postRoute);
router.use("/admin", adminRoute);

module.exports= {router};
