const express = require('express')
const app = express();
const port = process.env.PORT || 4000
app.use(express.json())
const Post = require('./database/conn')

// retrive data from client site using post route
app.post('/admin/post',async (req,res)=>{
    const {title ,content} = req.body
    console.log(title,content);
    const post = new Post({
        title,
        content,
        createdAt:(new Date()).toLocaleString()
    })
    await post.save();
    res.status(200).send({message : "your data already save"})
})

// get data from data base 
app.get('/admin/post',async (req,res)=>{
    await Post.find((err,pdata)=>{
        if(err) res.json({message : "database down"})
        else res.send(pdata)
    })
})



// insert many data in database 
// User.insertMany([kanhiaya,dherraj,sourav],(err)=>{
//     if(err) throw err;
//     else console.log("successful saved data");
// })

// Read data in database 
// User.find((err,data)=>{
//     if(err) throw err;
//     else{
//         console.log(data);
//         data.forEach((item)=>{
//            item.name==="sourav" && console.log(item.name , "- > " ,item.age);

//         })
//     }
// })

// update data in database
// Fruit.updateMany({name:"Banana"},{rating:2},(err)=>{
//     if(err) throw err;
//     else console.log("Update your value");
// })

// delte data in the database
// User.deleteMany({name:"sourav"},(err)=>{
//     if(err) throw err;
//     else console.log("Succesfully deleted item in database");
// })

app.post("/home",async (req,res)=>{
        const {email,password} = req.body
        if(email==="" || password===""){
            res.json({error : "uncomplete your email or password"})
        }else{
            const user = new User({
                email,
                password
            })
            user.save();
            res.send({response : "Your data is succesfuly saved in database"})
        }
    // }
    
})

app.listen(port,()=>{
    console.log(`Your server running on ${port}`);
})