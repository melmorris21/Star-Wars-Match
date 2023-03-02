/*
Author: Melissa Morris
Date: 3/31/19
CIS 241-3167
Ch 12 Assignment - Draggable Elements
*/

$(document).ready(function() {
    var answer = ['lukeSkywalkerTitle', 'darthVaderTitle', 'padmeAmidalaTitle', 'jarjarBinksTitle','kyloRenTitle'].join('');

   function coordinates(event,ui) {
    console.log(ui.position);
   }

   $('#words').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer) {
        alert('Correct!');
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });
});