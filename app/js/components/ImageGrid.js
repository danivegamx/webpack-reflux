import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/imagestore';

let ImageGrid = React.createClass({
    mixins: [Reflux.connect(ImageStore, 'imagestore')],
    render: function() {
        if (this.state.imagestore) {
            return <div className="container-fluid">
                        <div className="row"> {
                        this.state.imagestore.map(function(image) {
                            return <div key={image.author_id} className="col-xs-12 col-md-2">
                                <a href={image.link}>
                                    <img className="img-responsive img-thumbnail" src={image.media.m}></img>
                                </a>
                            </div>
                        })
                    } </div>
                </div>
        } else {
            return ( <p> No hay imágenes </p>);
        }
    }
});

export default ImageGrid;