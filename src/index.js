import React from 'react'
import {render} from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import Counter from './components/Counter';


render(<Provider store={store}>
    <Counter />
</Provider>, window.root)