import React from 'react';
import ImageActions from './actions/ImageActions';
import ImageGrid from './components/ImageGrid';

export const name = 'app';

setInterval(function() {
    ImageActions.fetchList();
}, 10000);

React.render(<ImageGrid />, document.getElementById('app-container'))