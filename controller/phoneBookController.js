require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PhoneBook = require ('../model/phoneBook');

module.exports = {
    async createPhoneEntry (req, res){
        try{
            if(!req.body.name || !req.body.phone) return res.status(500).json({'Error': 'No name or number'});

            let phoneEntry = new PhoneBook({
                _id: uuid(),
                name: req.body.name,
                phone: req.body.phone
            });

            let PhoneEntry = await PhoneBook.create(phoneEntry);
            return res.status(200).json({'Response':PhoneEntry});

        }catch(err){
            return res.status(500).json({'Error':err});
        }
    },
    async deletePhoneEntry (req, res){
        try{
            const phone_id = req.params.phoneBookId;
            const phone = await PhoneBook.findById(phone_id);
            if(phone){
               await PhoneBook.deleteOne({_id:phone_id});
               return res.status(200).json({'Response':'Item deleted'});
            }else{
                return res.status(401).json({'Error':'Item not found'})
            }
        }catch(err){
            return res.status(500).json({'Error':err});
        }
    },
    async updatePhoneEntry(req, res){
        try{
            const phone_id = req.params.phoneBookId;
            const phone = await PhoneBook.findById(phone_id);
            if (phone){
                const updateData = {
                    name: req.body.name,
                    phone: req.body.phone
                };
               const newPhone = await PhoneBook.updateOne({_id:phone_id},updateData);
                return res.status(200).json({'Response': 'Item updated'});
            }else{
                return res.status(401).json({'Error':'Item not found'});
            }
        }catch(err){
            return res.status(500).json({'Error':err});
        }
    },
    async getPhoneEntry(req, res){
        try{
            const phone_id = req.params.phoneBookId;
            const phone = await PhoneBook.findById(phone_id);
            if(phone){
                return res.status(200).json({'Response':phone});
            }else{
                return res.status(401).json({'Error':'Item not found'});
            }
        
        }catch(err){
            return res.status(500).json({'Error':err});
        }
    },
    async searchPhoneBook(req, res){
        try{
            console.log('start here');
            const phone_param = req.params.phoneBookParam;
            const searchType = req.query.type;

            if(searchType==='name'){
                let phoneResults = await PhoneBook.find({name:phone_param});
                if (phoneResults != ''){
                    return res.status(200).json({'Response':phoneResults});
                }else{
                    return res.status(401).json({'Error':'No item found'});
                }            
            } else if(searchType==='phone'){
                let phoneResults = await PhoneBook.find({phone: phone_param});
                if (phoneResults != ''){
                    return res.status(200).json({'Response':phoneResults});
                }else{
                    return res.status(401).json({'Error':'No item found'});
                }
            }
           
        }catch(err){
            return res.status(500).json({'Error':err});
        }
    }
}