
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



