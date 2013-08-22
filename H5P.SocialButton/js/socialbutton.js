/*
 *	H5P Social Button
 *	Demo's and documentation:
 *	griffwith.com/drupal
 *
 *	Copyright (c) 2013 griffen
 *	griffwith.com
 *
 *	Licensed under MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 */

/*
 * Init a H5P object
 */
var H5P = H5P || {};

/**
 * 
 * @param object params
 *  The object defined in content.json
 * @param int contentId
 *  The nodes vid
 * @returns object
 *  The Picture Slider Object
 */
H5P.SocialButton = function(params, contentId) {
    var that = this;
    if (!(this instanceof H5P.SocialButton))
        return H5P.SocialButton(params, contentId);

    // Get the newest jquery from H5P
    var $ = H5P.jQuery;

    // Making a shorcut path to the content
    var cp = H5P.getContentPath(contentId);

    //Setting default values
    var defaults = {
      "button_image": "images/1.JPG"
    };

    // setting all the paramters into one variable
    var params = $.extend({}, defaults, params);

    var $myDom;

    /**
     * Attach the Social Button html to a given target
     * 
     * @param {string|jquery} target
     *  Where the H5P html should be placed
     */
    this.attach = function(target) {
        var that = this;

        // Make sure we have a jquery object
        $myDom = typeof target === 'string' ? $('#' + target) : target;

        //<div class="classysocial right" 
        //  data-arc-length="360" 
        //  data-image-type="facebook" 
        //  data-picture="picozu" 
        //  data-facebook-handle="picozu" 
        //  data-twitter-handle="picozu_editor" 
        //  data-email-handle="office@picozu.net" 
        //  data-networks="facebook,twitter,email">
        //</div>

        //Adding the Social Button
        //$myDom.html('<div class="classysocial right" data-arc-length="360" data-image-type="facebook" data-picture="picozu" data-facebook-handle="picozu" data-twitter-handle="picozu_editor" data-email-handle="office@picozu.net" data-networks="facebook,twitter,email"></div>');
        $myDom.html('<div class="classysocial bubble" data-networks="github,socl,facebook,twitter,instagram,pinterest,email" data-instagram-handle="picozu" data-picture="picozu" data-pinterest-handle="picozu" data-github-handle="classpm" data-email-handle="office@picozu.net" data-twitter-handle="picozu_editor" data-socl-handle="marius-stanciu" data-facebook-handle="picozu" data-image-type="facebook" data-orientation="arc" style="float:left">');
        /*
         // Render DOM elements
         var $slider = $('<div class="h5p-' + params.SliderType + '"></div>');
         
         var $slidercontainer = $('<div id="h5p-slidercontainer"></div>');
         $slider.append($slidercontainer);
         $slidercontainer.append($('<div class="h5p-slide"><img src="' + cp + params.images[i].image.path + '" alt="carousel ' + i + '" width="' + as_imagewidth + '" height="' + as_imageheight + '"/><div></div></div>'));
         
         $myDom.append($slider);
         */
        $(function() {
            $(".classysocial").each(function() {
                new ClassySocial(this);
                $(".main img").remove();
                console.log("params: "+params);
                var $newMain = $('<img alt="main img" src="'+cp+params.button_image.path+'"/>');
                $(".main").append($newMain);
            });

        });

        return this;
    };


};