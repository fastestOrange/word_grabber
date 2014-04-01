var app;

$(function(){
  app = {
    server: '',
    textBoxCount: 0,
    listRef: new Firebase('https://flickering-fire-3816.firebaseio.com').child('Lists').push('marta').child('Words'),
    canAddExample:true,
    wordToEdit: "",


	  init: function(){
	  	//selectors
	  	app.$body = $('body');
	    app.$newExample = $('#new_ex_btn');
	    app.$wordInput = $('#word_input');
	    app.$wordInputSave = $('#word_input_save');


	    //events
	    app.$newExample.on('click', app.createExampleSentence);
	    app.$wordInputSave.on('click', app.addWordtoList);


	  },

	  createExampleSentence: function(){
	  	if(app.canAddExample){
	  	 app.$wordInput.append('<div class="addExWrapper"></div>')
	     var $textbox = $('<textarea class="ex_textbox" id="ex_textbox" rows="3" cols="60"></textarea><button id="save_example" class="btn">Save</button>');
	    
	    $('.addExWrapper').append($textbox);
	    app.canAddExample = false;
	    } 

	    $('#save_example').on('click', function(){
	    	var $textbox = $('#ex_textbox')
	    	var exampleSentence = $textbox.val() + "";
	    	app.addExampleToWord(exampleSentence);
	    	$textbox.val('');
	    	$('.addExWrapper').fadeOut('slow').empty();

	    	app.canAddExample = true;
	    

	    });

	  },

	  addExampleToWord: function(word, exampleSentence){
         
	  },

	  addWordtoList: function(){
        var wordToPost = app.$wordInput.val();
        var wordId = app.listRef.push(wordToPost).name();
        console.log(wordId);
        app.$wordInput.val('');

	  },

	  


  };
}());






