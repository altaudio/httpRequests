import React from 'react' //ignore this
import request from 'superagent'

let bushReq =request
  .get('https://api.spotify.com/v1/search?q=kate%20bush&type=artist')
  	.end(function(err, res){
  		let bushInfo = JSON.parse(bushReq.xhr.response);
  		console.log(bushInfo);
  		console.log(`Kate bush has ${bushInfo.artists.items[0].followers.total} followers`);
  	});
