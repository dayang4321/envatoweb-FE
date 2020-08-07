
    $(document).ready(function() {
        $('#transaction-history-sort').multiselect({

            buttonClass: 'sort-button btn',
            onChange: function (option, checked) {
                    console.log('values');

                    var values = [];
                    $('#transaction-history-sort option').each(function() {
                        if ($(this).val() !== option.val()) {
                            values.push($(this).val());
                            console.log(values)
                        }
                    });
 
                    $('#transaction-history-sort').multiselect('deselect', values);
                }
        });
    });

$('.transaction-table .transaction-status').addClass(function (index) {
    console.log($('.transaction-table .transaction-status').contents()[index].data);
    if ($('.transaction-table .transaction-status').contents()[index].data === "Successful") { return "success-text" }
    else return "warning-text"
})

    $('#transaction-modal').on('show.bs.modal', function (event) {
        //var button = $(event.relatedTarget) // Button that triggered the modal
        var button = $(event.relatedTarget) // Button that triggered the modal
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        const modalData = (index, param) => { return $(button).closest("tr").children().children('.card-title, .info-text').contents()[index][param] }
       // console.log( $(button).closest("tr").children().children('.card-title,.info-text').html())
        $('.modal-data').children().html((index) => {
            if (modalData(index, "data")) { return modalData(index, "data") }
            else { return modalData(index, "outerHTML") }
        });

        $('.modal .transaction-status').addClass(function (index) {
            console.log($('.modal .transaction-status').contents()[index].data);
            if ($('.modal .transaction-status').contents()[index].data === "Successful") { return "success-text" }
            else return "warning-text"
        });
      })


