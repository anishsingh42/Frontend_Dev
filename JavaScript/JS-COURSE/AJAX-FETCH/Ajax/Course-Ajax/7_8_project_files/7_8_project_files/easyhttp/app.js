const http = new easyHTTPS;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//Get single post
// let postId = 2;
// http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`, function(err,post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Create a data
const data = {
  userid: '2',
  title: 'Custom Post',
  body: 'This is custom post body'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err) {
   console.log(err);
  } else {
    console.log(post);
  }
});