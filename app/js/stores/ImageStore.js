import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
    listenables: [ImageActions],
    imagelist: [],
    sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
        let tags = ['sports', 'cars', 'space', 'nasa'],
            randomTag = tags[Math.floor(Math.random() * tags.length)];
        $.ajax({
            url: this.sourceUrl + `&tag=${randomTag}`,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('Fetch Complete !! ' + data.modified);
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }
});

export default ImageStore;