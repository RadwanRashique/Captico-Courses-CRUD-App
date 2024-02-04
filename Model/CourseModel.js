const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    courseName: {
        type: String
    },
    courseImage: {
        type: String
    },
    courseDescription: {
        type: String
    },
    price: {
        type: Number
    },

}, {
    timestamps: true
})

const courseModel = mongoose.model('courseDetails', courseSchema)
module.exports = courseModel