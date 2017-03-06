import React from 'react' //ignore this
import request from 'superagent'
import _ from 'lodash'

request
  .get('https://api.spotify.com/v1/search?q=kate%20bush&type=artist')
  	.end(function(err, res){
  		console.log(res);
  	});

request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
  	.end(function(err, res){
  		let bushAlbums =
  			_.uniqBy(
  				(_.map(res.body.items, (obj) => {
  			      return obj.name;
  		        })
  		    ), (album)=>{return album});

  		console.log(bushAlbums);
  	});

