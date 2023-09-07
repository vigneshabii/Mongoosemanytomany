const mongoose=require('mongoose');

const getDatabase = async ()=>{
    const client=await mongoose.connect('mongodb://127.0.0.1:27017/shop').then(()=>{
        console.log('Database Connected')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports={getDatabase};