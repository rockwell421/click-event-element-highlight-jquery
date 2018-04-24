//Go transparent

var selections = [
    ['one', 'three', 'seven'],
    ['two', 'four', 'five', 'eight'],
    ['six']
];

jQuery('.sec-4-btn').click(function(){
	jQuery(".col-sm-6").removeClass('go-transparent');

  var buttonIndex = jQuery(this).data( "refindex" );
 console.log("buttonIndex", buttonIndex)
    for(var i = 0, l = selections[buttonIndex].length; i < l; i++){
        jQuery('#' + selections[buttonIndex][i]).addClass('go-transparent')
    }
});
