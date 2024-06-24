const { mongo } = require("mongoose")

const mongoose = require('mongoose') 

async function main() {
    await mongoose.connect('mongodb://localhost:27017/adoteme')
    console.log('Coxeção estabelecida com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose