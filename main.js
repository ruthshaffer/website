$(document).ready(function() {
    
    
    
    
    
    
  
  
  $("#red").click(function() {
      $('body').css('background-color', 'red');
    $('img').hide();
    $(".red").css('display', 'inline');
      $("div.images").randomize("", ".red");
  }); 
  
    $("#pink").click(function() {
         $('body').css('background-color', 'pink');
    $('img').hide();
    $(".pink").css('display', 'inline');
        $("div.images").randomize("", ".pink");
  }); 
    
    $("#orange").click(function() {
         $('body').css('background-color', 'orange');
    $('img').hide();
    $(".orange").css('display', 'inline');
        $("div.images").randomize("", ".orange");
  }); 
    
    $("#yellow").click(function() {
         $('body').css('background-color', 'yellow');
    $('img').hide();
    $(".yellow").css('display', 'inline');
        $("div.images").randomize("", ".yellow");
  }); 
    
    $("#green").click(function() {
         $('body').css('background-color', 'greenyellow');
    $('img').hide();
    $(".green").css('display', 'inline');
        $("div.images").randomize("", ".green");
  }); 
    
    $("#blue").click(function() {
         $('body').css('background-color', 'blue');
    $('img').hide();
    $(".blue").css('display', 'inline');
        $("div.images").randomize("", ".blue");
  }); 
    
    $("#purple").click(function() {
         $('body').css('background-color', 'mediumpurple');
    $('img').hide();
    $(".purple").css('display', 'inline');
        $("div.images").randomize("", ".purple");
  }); 
    
    $("#rainbow").click(function() {
         $('body').css('background-color', 'red');
    $('img').hide();
    $(".rainbow").css('display', 'inline');
        $("div.images").randomize("", ".rainbow");
  }); 
    
     $("#white").click(function() {
         $('body').css('background-color', 'white');
    $('img').hide();
    $(".white").css('display', 'inline');
        $("div.images").randomize("", ".white");
  }); 
    
    $("#black").click(function() {
         $('body').css('background-color', 'black');
    $('img').hide();
    $(".black").css('display', 'inline');
        $("div.images").randomize("", ".black");
  }); 
    
   
});

(function($) {
  
  $.fn.randomize = function(tree, childElem) {
    return this.each(function() {
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();
      
      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      for(var i=0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });    
  };

})(jQuery);
