const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        callback(null, uuidv4() + '-' + Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if(allowedTypes.includes(file.mimetype)) {
        callback(null, true)
    }else(
        callback(null, false)
    )
}

let upload = multer({storage, fileFilter})

module.exports = upload