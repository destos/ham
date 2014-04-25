"use strict";

$("#viewer").on("pagecreate", function() {
  
  var viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  
  var svg = d3.select('#canvas').attr(viewport);
    
  var cross = new Viewfinder(svg)
  
  cross.transform.scale({x:2,y:2})
  
  cross.position({x:viewport.width/2,y:viewport.height/2})  
  
    
  // var first = new Card(svg)  
  // first.title("healtharound.me")
  // first.level( 1)
  // first.strip.fill('blue')  


  // $( "#canvas" ).on( "swipeleft", function( event ) {
  //   console.log('left')
  //   turn_wheel(1)
  //   
  // })
  // 
  // $( "#canvas" ).on( "swiperight", function( event ) {
  //   console.log('right')
  //   turn_wheel(-1)
  // })
  // 
  // 
  // $( "#canvas" ).on( "info_clicked", function( event ) {
  //   $.mobile.changePage( "#locale", {
  //     changeHash: false
  //   });
  // })
  // 
  // $( "i.home_button" ).on( 'click', function( event ) {
  //   $.mobile.changePage( "#dialer", {
  //     changeHash: false
  //   });
  // })

  // wait for the api to be ready (which means waiting for position)
  ham.ready.done(function() {
    ham.sample()
      .done(function(data) {
        
        // patch for nesting
        data.elements = data.scores;
        
        var s = new  Card(svg)
        s.title("healtharound.me too")
        s.level( 2)
        s.strip.update(data.elements)  
        
        

      })
      .error(function(d) {
        debugger;
      });
  });

});
