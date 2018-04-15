// (function () {
//   var json = JSON.stringify({
//     'code': '1',
//     'status': [
//     {'afsd': 'afds'},
//     {'afsd': 'afds'},
//     {'afsd': 'afds'},
//     ]
//   });
//   alert(json)
// }())

var app = new Framework7({
  // App root element
  root: '#app',
  pushState: true,
  // App Name
  name: 'Todo List',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes

  routes: [
    {
      name: '',
      path: '/',
      url: 'index.html',
    },
    {
      name: 'news',
      path: '/news/',
      url: 'news.html',
    },
    {
      name: 'about',
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters---
});

var mainView = app.views.create('.view-main');



if (cordova.platformId == 'android') {
  StatusBar.backgroundColorByHexString("#a42819");
}
