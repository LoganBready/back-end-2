const e = require('express');
const houses = require('./db.json')
let globalID = 4;


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const {id} = req.params
        const index = houses.findIndex((houses) => {
            return houses.id === +id
        })
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        const newHouse = {
            id: globalID,
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalID++

    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex((houses) => {return houses.id === +id})
        
        if (houses[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }  else {
            res.status(400).send('Unkown error')
        }
    }
}