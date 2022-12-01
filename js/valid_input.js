//Links used for help in completion of assignment:
//https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
$(function() {
    // Creates the form validation procedure
    $("form[name='my_table']").validate({
        //Laws that need to be followed in order
        //for the code to execute
        rules: {
            //required meaning that a value must be inputted
            //number meaning that the value must be an integer
            //min meaning the minimum value that the integer can be
            //max meaning the maximum value that the integer can be
            x_min: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            x_max: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            y_min: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            y_max: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },

        },
        //error messages that will be displayed in the case where the user
        //does not follow the aforementioned rules above.
        messages: {
            x_min: {
                required: "You may only enter a minimum x value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            x_max: {
                required: "You may only enter a maximum x value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            y_min: {
                required: "You may only enter a minimum y value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            y_max: {
                required: "You may only enter a maximum y value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
        },
        //will only run Arithmetic function if the input is correct
        submitHandler: function() {
            Arithmetic();
            return false;
        },
        //In the case where we input something incorrect, then we display an empty table
        invalidHandler: function() {
            $("#true_table").empty();
        }
    });
});
