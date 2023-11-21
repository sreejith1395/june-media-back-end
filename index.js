// import json server 

const jsonserver=require('json-server')

// create jsonserver 

const server=jsonserver.create()

// set router 
const router=jsonserver.router("db.json")

// middleware 

const middleware=jsonserver.defaults()

// create port 


const PORT=process.env.PORT ||4000

// middleware use in server 
server.use(middleware)
server.use(router)


// run server 

server.listen(PORT,()=>{
    console.log("media player server started at Port:"+PORT);
})



















