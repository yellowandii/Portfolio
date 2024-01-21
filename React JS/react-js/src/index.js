import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from "./App"
import './css/main.css'
import App2 from './components/App2'



const app = ReactDOMClient.createRoot(document.getElementById('root'))

const app2 = ReactDOMClient.createRoot(document.getElementById('second'))


app.render(<App></App>)

app2.render(<App2></App2>)


