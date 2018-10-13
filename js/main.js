$(document).ready(function() {

         // Clear the form button
         $("#clear-form").on("click", function() {
            window.location.reload(true);
         });

         // Popup alert to contact Randy or Trudie before working on certain guides
         $("#author-dropdown").on("change", function(){
               if ($("#author-dropdown").val() == "hjuhn@nd.edu" || $("#author-dropdown").val() == "archlib@nd.edu" || $("#author-dropdown").val() == "hl-data-management-consulting-list@nd.edu" || $("#author-dropdown").val() == "cdshelpdesk@nd.edu") {
                  $("#contact-product-owner").hide().removeClass("hidden").fadeIn();
               } else {
                  $("#contact-product-owner").fadeOut();
               }
            });

            $("#refresh-title").on("click", function() {
               $("#guide-title").val("");
            });

            // Open email to the guide author
            $("#email-author").on("click", function() {

               var author = $('#author-dropdown option:selected').text();
               var authorEmail = $('#author-dropdown option:selected').val();

               // Parse author's first name
               var authorFirstName = author.split(",");

               // Variables
               var guideTitle = $("#guide-title").val();
               var guideType = "";
               var guideTemplate = "";
               var guideName = "";
               var friendlyURLPages = "";
               var friendlyURLGuide = "";
               var associatedSubjects = "";
               var fiveTags = "";
               var profileAllPages = "";
               var noBelowProfile = "";
               var noBlankPages = "";

               var newline = "%0D%0A";
               var comments = $("#comments").val();

               // Message components
               if ($("#guide-type").is(":checked")) {
                  guideType ="Lorem" + newline + newline;
               }

               if ($("#guide-template").is(":checked")) {
                  guideTemplate ="Lorem" + newline + newline;
               }

               if ($("#guide-name").is(":checked")) {
                  guideName ="Lorem" + newline + newline;
               }

               if ($("#friendly-url-pages").is(":checked")) {
                  friendlyURLPages ="Lorem" + newline + newline;
               }

               if ($("#friendly-url-guide").is(":checked")) {
                  friendlyURLGuide ="Lorem" + newline + newline;
               }

               if ($("#associated-subjects").is(":checked")) {
                  associatedSubjects ="Lorem" + newline + newline;
               }

               if ($("#five-tags").is(":checked")) {
                  fiveTags ="Lorem" + newline + newline;
               }

               if ($("#profile-all-pages").is(":checked")) {
                  profileAllPages ="Lorem" + newline + newline;
               }

               if ($("#no-below-profile").is(":checked")) {
                  noBelowProfile ="Lorem" + newline + newline;
               }

               if ($("#blank-pages").is(":checked")) {
                  noBlankPages ="Lorem" + newline + newline;
               }

               if (comments !== "") {
                  comments = "Additional Comments:" + newline + comments + newline + newline;
               }



               // Final Message
               var emailMessage = "Hi" + authorFirstName[1] + "," + newline + "Below, please find the list of recent changes to your guide:" + newline + guideTitle + newline + newline + "The LibGuides Management Team (LMT) has made these changes as part of our continuing review of guides in which we aim to ensure that all guides meet the minimum requirements for publication. Each change is described in detail below:" + newline + newline + guideTemplate + guideName + guideType + friendlyURLGuide + associatedSubjects + fiveTags + profileAllPages + noBelowProfile + noBlankPages + comments + newline + newline + "As always, if you have any questions or concerns, or would like additional training on or assistance with your guides, email the LMT at:" + newline + newline + "lmt-list@nd.edu " + newline;

               var openEmail = "mailto:" + authorEmail + "?subject=Weekly Writing Assessment" + "&body=" + emailMessage;

               // Open the email in new window or client
               window.location.href = openEmail;

            });


            // // Tooltips
            $('[data-toggle="tooltip"]').tooltip();

            // Popovers for the information icons -- this allows multiple popovers per page
            $('[data-toggle="popover"]').popover({
               'container': 'body',
               "animation": true
            });

         });
      // document.ready closes
