var app;

$(function(){
  app = {
    server: '',
    textBoxCount: 0,
    listRef: new Firebase('https://flickering-fire-3816.firebaseio.com/List/Words'),
    canAddExample: true,
    wordToEdit:null,
    currentList: [],


	  init: function(){
	  	

	  	//selectors
	  	app.$body = $('body');
	    app.$newExample = $('#new_ex_btn');
	    app.$wordInput = $('#word_input');
	    app.$wordInputSave = $('#word_input_save');
	    app.$currentWord = $('#current_word');
	    app.$createExample = $('#create_example');
	    app.$createDefintion = $('#user_definition');
	    app.$createVideo = $('#user_video');
	    app.$word_input_clear = $('#word_input_clear');
	    app.$word_list_word = $('.word_list_word');
	    app.$appendHere = $('#appendHere');
	    app.$annotations = $('#annotations');


	    //events
	    app.$createExample.on('click', app.createExampleSentence);
	    app.$createDefintion.on('click', app.createDefintion);
	    app.$createVideo.on('click', app.createVideo);
	    app.$wordInputSave.on('click', app.addWordtoList);
	    app.$wordInput.keyup(function(event){
	        if(event.keyCode == 13){
	            app.addWordtoList();
	        }
	    });
	    app.$word_input_clear.on('click', app.wordInputClear);
	    app.$word_list_word.on('click', app.editWord);
	    $('#cancelTextBox').on('click', app.clearTextBox);
        
	  },

// Add and remove textbox utility
	  addTextBox: function(){
	    if(app.canAddExample){
		  var $textbox = $('<div class="textbox"><textarea  id="ex_textbox" rows="2" cols="50"></textarea><button id="saveTextBox" class="btn btn-success">Save</button><button id="cancelTextBox" class="btn btn-danger">Cancel</button></div>'); 
	  	  app.$appendHere.append($textbox);
	  	  app.canAddExample = false;
		}
	  },

	  clearTextBox: function(){
	  	console.log("hererey");
	  	$('.textbox').val('');
	  	$('.textbox').fadeOut('slow').remove();
	  	app.canAddExample = true;
	  },

//sentence examples
	  createExampleSentence: function(){
        app.addTextBox();	
	    $('#saveTextBox').on('click', function(){
	    	var exampleSentence = $('.textbox').val() + "";
	    	var exampleChild = app.listRef.child();
	    	
	    	app.clearTextBox();
	    });
	    $('#cancelTextBox').on('click', function(){
	    	app.clearTextBox();
	    });


	  },

	  
//definition
	  createDefintion: function(){
      if(app.canAddExample){
		    app.addTextBox();
        	app.canAddExample = false;
        }
      $('#saveTextBox').on('click', function(){
	    	var exampleSentence = $('.textbox').val() + "";
	    	// app.addExampleToWord(exampleSentence);
	    	app.clearTextBox();
	    });
	    $('#cancelTextBox').on('click', function(){
	    	app.clearTextBox();
	    });
	  },

//videos
      createVideo: function(){
	      if(app.canAddExample){
			    app.addTextBox();
	        	app.canAddExample = false;
	        }
	      $('#saveTextBox').on('click', function(){
		    	var exampleSentence = $('.textbox').val() + "";
		    	// app.addExampleToWord(exampleSentence);
		    	app.clearTextBox();
		    });
		    $('#cancelTextBox').on('click', function(){
		    	app.clearTextBox();
		    });
      },
                           
// word input 
	  addWordtoList: function(){
        app.wordToEdit = app.$wordInput.val();
        app.$currentWord.html(app.wordToEdit);
	  	app.listRef.push(app.wordToEdit);
        app.$wordInput.val('');
	  },

	  wordInputClear : function(){
        app.$wordInput.val('');
        app.$currentWord.html('');
	  },

//grab annotation data from firebase and display 
	  appendAnnotations: function(word){

	  },

	  


  };
}());


var list = angular.module('wordList', ["firebase"]);
list.controller("Words", ["$scope", "$firebase",
  function($scope, $firebase) {
  	$scope.items = $firebase(app.listRef);
  }

]);






