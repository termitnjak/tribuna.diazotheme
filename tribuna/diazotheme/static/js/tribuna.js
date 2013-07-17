jQuery17(function () {
    "use strict";

    function makeID(){
        var name = jQuery17(this).text().toLowerCase().replace(/ /g, '_');
        jQuery17(this.parentNode).attr('id', name);
    }

    function selectOne(){
        // When clicking on name, push it to top and remove everything else
        jQuery17('#selected-tags-list > li > span').each( function() {
            var name = jQuery17(this).text().toLowerCase().replace(/ /g, '_');
            jQuery17('#tags-list #' + name + ' > a').text('+');
            jQuery17('#all-tags-list #' + name + ' > a').text('+');
            jQuery17('#tags-list #' + name).removeClass("selected");
            jQuery17('#all-tags-list #' + name).removeClass("selected");
            jQuery17("#formfield-form-widgets-all_tags [value='" + jQuery17(this).text() + "']").click();
            jQuery17(this.parentNode).remove();
        });

        var name = jQuery17(this).text().toLowerCase().replace(/ /g, '_');
        jQuery17('#tags-list #' + name + ' > a').text('-');
        jQuery17('#all-tags-list #' + name + ' > a').text('-');
        jQuery17('#tags-list #' + name).addClass("selected");
        jQuery17('#all-tags-list #' + name).addClass("selected");
        jQuery17(this.parentNode.parentNode).clone(true).addClass("selected").appendTo('#selected-tags-list');
        jQuery17("#formfield-form-widgets-all_tags [value='" + jQuery17(this).text() + "']").click();
    }

    function moveUpDown(){
        // When clicking on +/-, move/remove from top and change sign appropriately
        if(jQuery17(this.parentNode.parentNode).attr('id') === 'tags-list' ||
            jQuery17(this.parentNode.parentNode).attr('id') === 'all-tags-list'){
            var name = jQuery17(this.parentNode.getElementsByTagName('span')).text().toLowerCase().replace(/ /g, '_');
            var item = jQuery17('#selected-tags-list #' + name);
            if(!item.attr('id')){
                jQuery17('#tags-list #' + name + ' > a').text('-');
                jQuery17('#all-tags-list #' + name + ' > a').text('-');
                jQuery17('#tags-list #' + name).addClass("selected");
                jQuery17('#all-tags-list #' + name).addClass("selected");
                jQuery17(this.parentNode).clone(true).addClass("selected").appendTo('#selected-tags-list');
            }
            else{
                jQuery17('#tags-list #' + name + ' > a').text('+');
                jQuery17('#all-tags-list #' + name + ' > a').text('+');
                jQuery17('#tags-list #' + name).removeClass("selected");
                jQuery17('#all-tags-list #' + name).removeClass("selected");
                item.remove();
            }
            jQuery17("#formfield-form-widgets-all_tags [value='" + jQuery17(this.parentNode.getElementsByTagName('span')).text() + "']").click();
        }
        else{
            var name = jQuery17(this.parentNode.getElementsByTagName('span')).text().toLowerCase().replace(/ /g, '_');
            jQuery17('#tags-list #' + name + ' > a').text('+');
            jQuery17('#all-tags-list #' + name + ' > a').text('+');
            jQuery17('#tags-list #' + name).removeClass("selected");
            jQuery17('#all-tags-list #' + name).removeClass("selected");
            jQuery17(this.parentNode).remove();
        }
    }

    function runEffect() {
        // Show the div if it's hidden, hide if it it's shown
        var all_tags = $( "#all-tags-list" );
        if(all_tags.css("display") === "none"){
          jQuery17( "#all-tags-list" ).show("fast");
        }
        else{
           jQuery17( "#all-tags-list" ).hide("fast");
        }
    }

    jQuery17(document).ready(function () {
        // Change all ID's
        jQuery17("#selected-tags-list > li > span").each( makeID);
        jQuery17("#tags-list > li > span").each( makeID);
        jQuery17("#all-tags-list > li > span").each( makeID);

        // Setup for moving tags up and down via +/-
        jQuery17("#selected-tags-list > li > a").click( moveUpDown);
        jQuery17("#tags-list > li > a").click( moveUpDown);
        jQuery17("#all-tags-list > li > a").click( moveUpDown);

        // Setup for selecting tag via clicking on name
        jQuery17("#selected-tags-list > li > span > a").click( selectOne);
        jQuery17("#tags-list > li > span > a").click( selectOne);
        jQuery17("#all-tags-list > li > span > a").click( selectOne);


        jQuery17('#entrypage-link').click(function () {
            jQuery17('#entrypage-form-container').toggleClass('expanded');
        });

        // Click event for show/hide "button" (actually just a link)
        jQuery17("#show-all-tags" ).click(function() {
          runEffect();
          return false;
        });

        // Set up the click functions for filters, hardcoded for now
        jQuery17("#types-list #articles").change( function(){
            jQuery17("#form-widgets-content_filters-0").click();
        });
        jQuery17("#types-list #comments").change( function(){
            jQuery17("#form-widgets-content_filters-1").click();
        });
        jQuery17("#types-list #images").change( function(){
            jQuery17("#form-widgets-content_filters-2").click();
        });

        // Sort_on
        jQuery17("#form-widgets-sort_on").attr('id', 'blop123');
        jQuery17("#form-widgets-sort_on").attr('id', 'form-widgets-sort_on-noform');
        jQuery17('#blop123').attr('id', "form-widgets-sort_on");
        jQuery17("#form-widgets-sort_on-noform").change( function() {
            jQuery17("#form-widgets-sort_on").val(this.value);
        });

        // Sort_order
        // form-widgets-sort_order
        // jQuery17("#form-widgets-sort_order").attr('id', 'blop123');
        // jQuery17("#form-widgets-sort_order").attr('id', 'form-widgets-sort_order-noform');
        // jQuery17('#blop123').attr('id', "form-widgets-sort_order");
        // jQuery17("#form-widgets-sort_order-noform").change( function() {
        //     console.info("It's a changin'");
        //     console.info(this.value);
        //     jQuery17("#form-widgets-sort_order").val(this.value);
        // });

    });

});
