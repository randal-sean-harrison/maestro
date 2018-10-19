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

               // Variables --------------------------------
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

               var checkmark = "%E2%9C%94  ";
               var newline = "%0D%0A";
               var comments = $("#comments").val();

               // Message components --------------------------------

               if ($("#guide-type").is(":checked")) {
                  guideType = checkmark + "GUIDE TYPE -- We have updated your guide type to reflect its correct type. This will ensure users can find it in the correct category on the Libguides home page." + newline + newline;
               }

               if ($("#guide-template").is(":checked")) {
                  guideTemplate = checkmark + "GUIDE TEMPLATE -- We have selected the appropriate guide template for your guide. This will ensure that future changes to that template will propagate to your guide." + newline + newline;
               }

               if ($("#guide-name").is(":checked")) {
                  guideName = checkmark + "GUIDE NAME -- We have edited your guide name in order to bring it into compliance with guide naming conventions. This will result in better findability as users browse for guides and search for your guide specifically." + newline + newline;
               }

               if ($("#friendly-url-pages").is(":checked")) {
                  friendlyURLPages = checkmark + "FRIENDLY URL FOR YOUR PAGES -- We have added or edited the friendly URL for 1 or more of your guide's pages (1 or more pages) in order to bring it into compliance with page-naming conventions. Friendly URLs on individual pages lead to better findability and reduce cognitive load on users." + newline + newline;
               }

               if ($("#friendly-url-guide").is(":checked")) {
                  friendlyURLGuide = checkmark + "FRIENDLY URL FOR YOUR GUIDE -- We have added or edited the friendly URL for your guide in order to bring it into compliance with guide-naming conventions. Friendly URLs on guides lead to better findability and reduce cognitive load on users." + newline + newline;
               }

               if ($("#associated-subjects").is(":checked")) {
                  associatedSubjects = checkmark + "SUBJECT AREA -- We have associated your guide with approximately 1 general subject area. Associating your guide with a subject increases its findability." + newline + newline;
               }

               if ($("#five-tags").is(":checked")) {
                  fiveTags = checkmark + "FIVE (5) TAGS -- We have ensured your guide is limited up to 5 tags. Associating your guide with a limited set of tags increases its findability when users search by tag." + newline + newline;
               }

               if ($("#profile-all-pages").is(":checked")) {
                  profileAllPages = checkmark + "PROFILE BOX -- We have added a profile box on 1 or more of your pages. A luminous point of contact consistently placed on each page helps users get needed assistance." + newline + newline;
               }

               if ($("#no-below-profile").is(":checked")) {
                  noBelowProfile = checkmark + "NO CONTENT BENEATH PROFILE BOXES -- We have shifted content under any profile boxes to the right-hand content column on 1 or more pages. The left column is reserved for navigation and profile boxes only." + newline + newline;
               }

               if ($("#blank-pages").is(":checked")) {
                  noBlankPages = checkmark + "BLANK PAGES -- We have redirected 1 or more blank pages in your guide to another appropriate page in your guide. Blank pages confuse readers and weaken the library's ethos overall." + newline + newline;
               }

               if (comments !== "") {
                  comments = "Additional Comments: " + comments + newline;
               }

               // Final Message
               var emailMessage = "Hi" + authorFirstName[1] + "," + newline + "Below, please find the list of recent changes to your guide: " + "\"" + guideTitle + ".\" " +  "The LibGuides Management Team (LMT) has made changes to this guide as part of our continuing review of guides in which we aim to ensure that all guides meet the minimum requirements for publication. Each change is described in detail below:" + newline + newline + guideTemplate + guideName + guideType + friendlyURLGuide + friendlyURLPages + associatedSubjects + fiveTags + profileAllPages + noBelowProfile + noBlankPages + comments + newline + "As always, if you have any questions or concerns, or would like additional training on or assistance with your guides, email the LMT at lmt-list@nd.edu, or simply reply to this email.";

               var openEmail = "mailto:" + authorEmail + "?subject=Changes to your Library Guide&reply-to=lmt-list@nd.edu&cc=maestro-list@nd.edu" + "&body=" + emailMessage;

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
