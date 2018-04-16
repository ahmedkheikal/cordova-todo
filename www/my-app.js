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



$(document).ready(function () {
  $('.list > ul').html('');
  if (typeof window.localStorage.getItem('todos') === 'undefined') {
    var storage = window.localStorage;
    console.log(storage);
    var value = JSON.stringify(
      [

        {
          title: 'task 1',
          done: '0',
        },
        {
          title: 'task 2',
          done: '1',
        },
        {
          title: 'task 3',
          done: '0',
        },
        {
          title: 'task 4',
          done: '1',
        },
        {
          title: 'task 1 tany',
          done: '0',
        }
        // [
        // ]
      ]
    );
    if (storage.setItem('todos', value)) {
      alert(todos)
    } else {
      alert('error')
    }
  } else {
    var todos = JSON.parse( window.localStorage.getItem('todos') );
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].done == '1')
        var checked = 'checked';
      else
        var checked = '';


      $('.list > ul').append(`
        <li>
          <label class="item-checkbox item-content">
            <!-- Checkbox input -->
            <input type="checkbox"`+ checked +`/>
            <!-- Checkbox icon -->
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <!-- Checkbox Title -->
              <div class="item-title">`+ todos[i].title +`</div>
            </div>
          </label>
        </li>
      `);
    }
  }
})


if (cordova.platformId == 'android') {
  StatusBar.backgroundColorByHexString("#a42819");
}


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  $('.list > ul').html('');
  if (typeof storage === 'undefined') {
    var storage = window.localStorage;
    var value = JSON.stringify(
      {
        title: 'task 1',
        done: '0',
      },
      {
        title: 'task 2',
        done: '1',
      },
      {
        title: 'task 3',
        done: '0',
      },
      {
        title: 'task 4',
        done: '1',
      },
      {
        title: 'task 1 tany',
        done: '0',
      }
      // [
      // ]
    );
    storage.setItem(todos, value);
  } else {
    var value = storage.getItem(todos); // Pass a key name to get its value.
    for (var i = 0; i < todos.items.length; i++) {
      if (todos.items[i].done == '1')
        var checked = 'checked';
      else
        var checked = '';


      $('.list > ul').append(`
        <li>
          <label class="item-checkbox item-content">
            <!-- Checkbox input -->
            <input type="checkbox"`+ checked +`/>
            <!-- Checkbox icon -->
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <!-- Checkbox Title -->
              <div class="item-title">`+ todos.items[i].title +`</div>
            </div>
          </label>
        </li>
      `);
    }
  }
  // var storage = window.localStorage;
  // storage.setItem(todos, value) // Pass a key name and its value to add or update that key.
  // storage.removeItem(key) // Pass a key name to remove that key from storage.
}
