## Cloudv Store Back

like google cloud I decided to create something similar and call it
Cloud Store This application has been designed as a full stack application using M.E.R.N technology stack

this repository shows the creation of the back end of the Cloud Store applications

it demonstrates working with 
 # express.js
 # node.js 
 # mongodb

  ## Сore Technologies
bcryptjs
config
express
express-fileupload
express-validator
jsonwebtoken
mongoose
nodemon
uuid


## server code to index.js 
<img width="500" alt="server" src="https://github.com/user-attachments/assets/e83c5d2c-6849-47fb-8278-cef10e13af29">

## routes

## registration
1. we get data about user from request 
const {email,password} = req.body

2.we check if this data valid
3.check if no simple data to data base
4.we use to bcryptjs for hash password
5.we save this user to data base and create file for her

## login
1. we get data about user from request 
const {email,password} = req.body

  2.search if we have simplle data, for example 
  const user await User.findOne({email})
  3. if we have email simple we will cheack password
   const isPassValid = bcrypt.compareSync(password, user.password)
  4. if all clear, we create jwt token and return data 
          
  5.after we create is authorization code









    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, config.get('secretKey'))
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}


            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
  

that was authorization


## in order to create files i create fileController

i create class fileController whis functions like


<img width="600" alt="controller" src="https://github.com/user-attachments/assets/ad79c18e-62ea-4ae0-9323-023d2ca50a26">

<img width="600" alt="function" src="https://github.com/user-attachments/assets/c93d15c3-3eff-4643-ad50-db767013b2d8">


## fileServises
<img width="600" alt="servise" src="https://github.com/user-attachments/assets/0f815977-0bd2-412f-87a6-6e3997be4df4">

## The project is currently under development
