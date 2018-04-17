

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {



}
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
  // window.localStorage.removeItem('todos') // clears previous data to refresh everytime just for testing.

  $('.list > ul').html('');
  if (typeof window.localStorage.getItem('todos') === 'undefined' || window.localStorage.getItem('todos') == null) {
    var storage = window.localStorage;
    console.log(storage);
    var value = JSON.stringify(
      [

        {
          title: 'task undone 1',
          done: '0',
        },
        {
          title: 'task done 1',
          done: '1',
        },
        {
          title: 'task done 2',
          done: '1',
        },
        {
          title: 'task done 3',
          done: '1',
        },
        {
          title: 'task undone 2',
          done: '0',
        }
        // [
        // ]
      ]
    );
    storage.setItem('todos', value)


    $('.list > ul').append(`
      <li class="item-content item-input">
        <div class="item-inner">
          <!-- "item-floating-label" class on item title -->
          <div class="item-title item-floating-label">Name</div>
          <div class="item-input-wrap">
            <input type="text" name="name">
            <span class="input-clear-button"></span>
          </div>
        </div>
        <div class="item-media">
          <button class="button button-fill">Add</button>
        </div>
      </li>
    `);

  } else {
    var todos = JSON.parse( window.localStorage.getItem('todos') );
    console.log(window.localStorage);

    /**
     * looping through JSON input
     * and distributong data between done and Upcoming
     *
     */

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].done == '0') {
        var checked = '';
        $('.list-undone > ul').append(`
          <li data-index=`+ i +`>
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
      } else {
        var checked = 'checked';
        $('.list-done > ul').append(`
          <li data-index=`+ i +`>
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
    $('.list > ul').append(`
      <li class="item-content item-input">
        <div class="item-inner">
          <!-- "item-floating-label" class on item title -->
          <div class="item-title item-floating-label">Name</div>
          <div class="item-input-wrap">
            <input type="text" name="name">
            <span class="input-clear-button"></span>
          </div>
        </div>
        <div class="item-media">
          <button class="button button-fill">Add</button>
        </div>
      </li>
    `);
  }
  setTimeout(function() {
    navigator.splashscreen.hide();
  }, 2000);
  // application logic goes here after document.ready and all element rendering
  // NOTE: cordova onDeviceReady isn't working with me
  $('.list > ul').change(function (e) {
    alert ('checkbox check')
    window.localStorage.setItem('todos', window.localStorage.getItem('todos'))

  })
  $('.item-inner button').click(function (e) {

  })

  // end app logic
})


if (cordova.platformId == 'android') {
  StatusBar.backgroundColorByHexString("#a42819");
}
