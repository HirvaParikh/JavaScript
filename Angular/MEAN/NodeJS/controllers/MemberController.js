const express=require('express');
const router=express.Router();

var ObjectId=require('mongoose').Types.ObjectId;

var {Member}=require('../models/MemberModel');

router.get('/',(req,res)=>{
    Member.find((err,docs)=>{
        if(err) throw err;
        console.log(docs);
        res.send(docs);
    });
});

router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
    {
        Member.findById(req.params.id,(err,docs)=>{
            if(err) throw err;
            res.send(docs);
        });
    }
    else
    {
        return res.status(200).send("No Record Found with Given Id: "+req.params.id);
    }
});

router.post('/',(req,res)=>{
    var MemberRecord=new Member({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        ContactNo:req.body.ContactNo,
        EmailId:req.body.EmailId,
        Password:req.body.Password,
        Gender:req.body.Gender,
        Status:req.body.Status
    });
    
    MemberRecord.save((err,doc)=>{
        if(err)throw err;
        console.log("Document Inserted Succefully..!!");
    });
});

router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
    {
        var MemberRecord={   
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            ContactNo:req.body.ContactNo,
            EmailId:req.body.EmailId,
            Password:req.body.Password,
            Gender:req.body.Gender,
            Status:req.body.Status
        };

        Member.findByIdAndUpdate(req.params.id,{$set:MemberRecord},{new:true},(err,docs)=>{
            if(err) throw err;
            res.send(docs);
        });
    }
    else
    {
        return res.status(200).send("No Record Found with Given Id: "+req.params.id);
    }
});

router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
    {
        Member.findByIdAndRemove(req.params.id,(err,docs)=>{
            if(err) throw err;
            res.send(docs);
        });
    }
    else
    {
        return res.status(200).send("No Record Found with Given Id: "+req.params.id);
    }
});


module.exports=router;