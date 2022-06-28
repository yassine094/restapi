const express = require('express');
const blogs=require('./models/user')
require('dotenv').config({path:'./config/.env'})
const PORT = process.env.PORT || 3000;

const app = express();
const connectDB=require('./config/db');
connectDB();
app.use(express.json())

app.get('/test', (req, res) => {
    res.json({ok:true});
});

app.get('/great/:name', (req, res) => {
    res.json({ greeting: `hello ${req.params.name}!` })
});

app.listen(PORT, ()=>console.log('listening on port '+PORT));


//@desc get users
//@param get /getusers
//access public
app.get('/getusers', async (req, res) => { 
    try {
    const userlist= await blogs.find();
   res.json(userlist);
        
} catch (error) {
    res.status(501).json({msg:'something went wrong'});
    
}
   
})
//@desc create user 
//@param post /postusers
//access public 
app.post('/postusers', async (req, res) => {
    const user=new blogs(req.body);
    const newuser =await user.save();
    res.json(newuser);
})
//@desc delete user with name
//@param delete /deleteusers/:name
//@access public
app.delete('/deleteusers/:name', async (req, res) => {
    await blogs.deleteOne({name:req.params.name})
    res.json({msg:'delete user successfully'})
   
});
//@desc update user   with name
//@params PUT /putusers/:name
//@access public 
app.put('/putusers/:name', async (req, res) =>{
    await blogs.updateOne({name:req.params.name},req.body) 
        res.json({msg:'update user successfully'})
})