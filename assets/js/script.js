// You can modify the upload files to pdf's, docs etc
// Currently it will upload only images/pdf

$(document).ready(function($) {

  // Upload btn on change call function
  $(".uploadlogo").change(function() {
    var filename = readURL(this);
    $(this).parent().children('span').html(filename);
  });

  // Read File and return value
  function readURL(input) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (
      ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
      )) {
      var path = $(input).val();
      var filename = path.replace(/^.*\\/, "");
      // $('.fileUpload span').html('Uploaded Proof : ' + filename);
      return "Uploaded file : "+filename;
    } else {
      $(input).val("");
      return "Only image/pdf formats are allowed!";
    }
  }
  // Upload btn end

  // ------------------------------------------ Toggle chatbot -----------------------------------------------
  $('.profile_div').click(function() {
    $('.profile_div').toggle();
    $('.rec-div').toggle();
  });

  $('.myclose').click(function() {
    $('.profile_div').toggle();
    $('.rec-div').toggle();
  });

});
