const path = require('path')
const usersFile = path.resolve(__dirname, '../../data/users.json')
const fs = require('fs')
const { v4 } = require('uuid');


const controller = {}

controller.allUsers = (req, res) => {
    fs.readFile(usersFile, (err, data) => {
        if (err) res.status(500).send({message: 'Error al leer los datos de usario'})

        const jsonDta = JSON.parse(data)

        res.send(jsonDta)
    })
}

controller.userById = (req, res) => {
    fs.readFile(usersFile, (err, data) => {
        if (err) res.status(500).send({message:'Error al leer el archivo de usurios'})
        const jsonData = JSON.parse(data)
        const user = jsonData.find(user =>{
            return user.userId === req.params.id})
        res.send(user)
    })
}

controller.createUser = (req, res) => {
    fs.readFile(usersFile, (err, data)=> {
        if (err) res.status(500).send({message:'Error al leer el archivo de usurios'})

        const newData = req.body

        const jsonData = JSON.parse(data)

        const userCheck = jsonData.some(user => user.name === newData.name)

        if(userCheck){
            return res.status(409).send({message:'Usuario Duplicado'})
        }

        newData.userId = v4()

    

        jsonData.push(newData)

    fs.writeFile(usersFile, JSON.stringify(jsonData), err=> {
        if(err) return res.status(500).send({message:'Error al guardar el usuario'})
        res.status(200).send(jsonData)
    })
})}

controller.deleteUser = (req, res) => {
    fs.readFile(usersFile, (err, data)=> {
        if (err) res.status(500).send({message: 'No se ha podido borrar el usuario'});
        const newData = req.params.id

        const jsonData = JSON.parse(data)

        const userIndex = jsonData.findIndex(user => user.userId === newData)
        
        if(userIndex === -1){
            return res.status(409).send({message:'Ese usuario no existe'})
        }

        jsonData.splice(userIndex, 1)

        fs.writeFile(usersFile, JSON.stringify(jsonData), err=> {
            if(err) return res.status(500).send({message:'Error al guardar el usuario'})
            res.status(200).send(jsonData)
        })

    })
}

controller.patchUser = (req, res) => {
    fs.readFile('./data/users.json', (err, data)=> {
        if (err) res.status(500).send({message: 'Error al leer los datos de usario'});
        const userId = req.params.id

        const jsonData = JSON.parse(data)

        const userPosition = jsonData.findIndex(user => user.userId === userId)

        if(userPosition===-1){
            return res.status(404).send({message:'Ese usuario no existe'})
        }

        if(req.body.email){

            const userCheck = jsonData.some(user => user.email === req.body.email)

            if(userCheck){
                return res.status(409).send({message:'No se ha podido actualizar el email porque ya esta en uso'})
            }
        }

        const user = jsonData[userPosition]

        const userPatched = {...user, ...req.body}

        jsonData[userPosition] = userPatched
        
        fs.writeFile(usersFile, JSON.stringify(jsonData), err=> {
            if(err) return res.status(500).send({message:'Error al guardar el usuario'})
            res.status(200).send(jsonData)
        })


    })
}


module.exports = controller