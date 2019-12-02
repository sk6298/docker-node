const express=require('express')
const db=require('../db')
const utils=require('../utils')

router=express.Router()

router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from students`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })
})
router.post('/',(request,response)=>{
    const{name,roll_no}=request.body
    const connection=db.connect()
    const statement=`insert into students(name,roll_no) values('${name}',${roll_no})`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })
})
router.put('/:id',(request,response)=>{
    const id=request.params.id
    const{name,roll_no}=request.body
    const connection=db.connect()
    const statement=`update students set name='${name}',roll_no=${roll_no} where id=${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })
})
router.delete('/:id',(request,response)=>{
    const id=request.params.id
    const connection=db.connect()
    const statement=`delete from students where id=${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })
})

module.exports=router