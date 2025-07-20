export const register = async(req,res) => {
    try {
        res.send("Register api successfully..!!!")
    } catch (error) {
        res.status(500).json({
            mesaage: error.message,
        })
    }
}