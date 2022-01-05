# EdTube

Development:
Dev Tools(Safari): in terminal run 'react-devtools' from fron-end root directory

API Search Response Reference
  - items - res.data.items
  - id - res.data.items[index].id.videoId,
  - title - res.data.items[index].snippet.title
  - description - res.data.items[index].snippet.description
  - thumbnails - res.data.items[index].snippet.thumbnails."*size".url  
  - channelTitle - res.data.items[index].snippet.channelTitle
  - publishTime - res.data.items[index].snippet.publishTime


*SIZE: default/medium/high