 const asyncHandler = (requestHandler) => {
    (res, req, next)=>{
        Promise.resolve(requestHandler(res, req, next))
               .catch((err) => next(err))
    }
 }

export {asyncHandler}
// HIGHER ORDER FUNCTION => MEANS YE PARAMETERS OR FUNCTIONS JO VARIABLE STORE KR SKTE HO 

// const asyncHandler = (fnc) => async (res, req, next) => {
//     try {
//         await fnc(res, req, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })

//     }
// }