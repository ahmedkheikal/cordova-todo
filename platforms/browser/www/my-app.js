// start app init
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

// end app init


$(document).ready(function () {

  $('.list > ul').html('');
  if (typeof window.localStorage.getItem('todos') === 'undefined' || window.localStorage.getItem('todos') == null) {
    var storage = window.localStorage;
    console.log(storage);

    /**
     * sample json data for testing
     * production app must have an empty array in this value
     * var value = JSON.stringify(
     *   []
     *  );
     */


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

    // appending add todo input

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
     // get todos from localStorage
    var todos = JSON.parse( window.localStorage.getItem('todos') );

    /**
     * looping through JSON input
     * and distributong data between done and Upcoming
     *
     */

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].done == '0') {
        var checked = '';
        $('.list-undone > ul').append(`
          <li>
            <label class="item-checkbox item-content">
              <!-- Checkbox input -->
              <input type="checkbox"`+ checked +` data-index=`+ i +` />
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
              <input type="checkbox"`+ checked +` data-index=`+ i +` />
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
    // appending add todo input
    $('.list-undone > ul').append(`
      <li class="item-content item-input">
        <div class="item-inner">
          <!-- "item-floating-label" class on item title -->
          <div class="item-title item-floating-label">Name</div>
          <div class="item-input-wrap">
            <input type="text" value="">
            <span class="input-clear-button"></span>
          </div>
        </div>
        <div class="item-media">
          <button class="button button-fill">Add</button>
        </div>
      </li>
    `);
  }
  // application logic goes here after document.ready and all element rendering
  // NOTE: cordova onDeviceReady isn't working with me
  $(document).on('change', '.list > ul input[type=checkbox]', function (e) {
  // $('.list > ul input[type=checkbox]').change(function (e) {
    var index = $(this).attr('data-index');
    if ($(this).is(':checked')) {
      // NOTE: update data to make done = 1
      console.log(todos[index]);
      todos[index].done = '1';
      window.localStorage.removeItem('todos')
      window.localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      // NOTE: update data to make done = 0
      console.log(todos[index]);
      todos[index].done = '0';
      window.localStorage.removeItem('todos')
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  })
  $('.item-media > button').click(function (e) {
    // adding a new todo
    todos.push({
      title: $('.item-input-wrap input[type=text]').val(),
      done: '0'
    });
    // getting added item to var newItem
    var newItem  = todos[todos.length - 1];
    $('.item-input-wrap input[type=text]').val('');

    window.localStorage.removeItem('todos');
    window.localStorage.setItem('todos', JSON.stringify(todos));

    $('.list-undone > ul > li:last').before(`
      <li>
        <label class="item-checkbox item-content">
          <!-- Checkbox input -->
          <input type="checkbox" data-index=`+ todos.indexOf(newItem) +` />
          <!-- Checkbox icon -->
          <i class="icon icon-checkbox"></i>
          <div class="item-inner">
            <!-- Checkbox Title -->
            <div class="item-title">`+ newItem.title +`</div>
          </div>
        </label>
      </li>
    `);

  })

  // end app logic
})


if (cordova.platformId == 'android') {
  StatusBar.backgroundColorByHexString("#a42819");
}
