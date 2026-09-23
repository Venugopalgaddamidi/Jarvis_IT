

function getCourses(req,res){

}
async function createCourses(req,res){

   
    const { name, email, password, role } = req.body
    
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                "message": "Invalid input"
            })
        }
    
        const existingUser = await User.findOne({ email: email })
    
        if (existingUser) {
            return res.status(400).json({
                "message": "Email already registered"
            })
        }
        const encrytPassword = await bcryptjs.hash(password, 4)
    
        const newUser = await User.create({
            name: name,
            email: email,
            password: encrytPassword,
            role: role
        })
    
        res.status(200).json({
            "message": "User registered Successfully..."
        })

}
function deleteCourses(req,res){

}
function getCourses(req,res){

}
function updateCourses(req,res){

}
function getCoursesById(req,res){

}


module.exports={
    getCourses,
    createCourses,
    deleteCourses,
    updateCourses,
    getCoursesById
}


