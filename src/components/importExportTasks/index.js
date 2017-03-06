
import request from 'superagent'
import _ from 'lodash'

request
  .get('https://api.spotify.com/v1/search?q=kate%20bush&type=artist')
    .end((err, res) => {
      console.log(res)
    })

request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
    .end((err, res) => {
      const bushAlbums =
        _.uniq(
          (_.map(res.body.items, (obj) => {
            return obj.name
          })
        ))

      console.log(bushAlbums)
    })
