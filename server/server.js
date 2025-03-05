import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import App from '../src/App'
const app = express()


app.use('^/$',(req,res)=> {
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data) => {
        if(err) console.log(err);
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`))
        
    })
})
app.use(express.static(path.join(__dirname, '..', 'build')))
app.listen(8000,() => console.log('listening on port 8000'))