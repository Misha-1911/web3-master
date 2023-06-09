const { Router } = require('express');
const { Users } = require('../models/users');
const router = Router();
router.get("/users", async (req,res) => {
    const {name,email} = req.query;
    const queryDb = {};
    if(name)
    {
        queryDb.name=name;
    }
    if(email)
    {
        queryDb.email=email;
    }
    // if(name && email)
    // {
        
    //     if(queryDb.email==name)
    //     {
    //         return res.status(400).send({message:'Ви використали фільтри не правильно, змініть значення фільтрів або виберіть тільки один '});
            
    //     }
            

        
    // }
    const docs = await Users.find(queryDb);
    return res.status(200).send(docs);
    });
    module.exports={router};