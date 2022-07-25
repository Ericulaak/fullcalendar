$('.copyId').click(function(){
    var $eventId = $(this).parent().parent().parent().attr('id');
    alert($eventId);
    });