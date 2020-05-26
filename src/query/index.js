import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'normalize.css'

import './index.css'
import App from './App'

ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))
