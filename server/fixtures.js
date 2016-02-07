if (Posts.find().count() === 0) {

var now = new Date().getTime();

//2 new users
var tomId= Meteor.users.insert({
  profile: {name: 'Tom Coleman'}
});

var tom = Meteor.users.findOne(tomId);

var sachaId= Meteor.users.insert({
  profile: {name: 'Sacha Greif'}
});

var sacha = Meteor.users.findOne(sachaId);

var telescopeid =  Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

Comments.insert({
  postId: telescopeid,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: new Date (now - 3*3600*1000),
  body: 'Interesting project Sacha, can I get involved?'
});

Comments.insert({
  postId: telescopeid,
  userId: tomId,
  author: tom.profile.name,
  submitted: new Date (now - 5*3600*1000),
  body: 'Interesting project Sacha, can I get involved?',
});

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0
  });

  for (var i = 0 ; i<10; i++){
    Posts.insert({
      title: 'Test post #'+ i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-'+i,
      submitted: new Date(now - i*3600*1000),
      commentsCount: 0
    });
  }
}
