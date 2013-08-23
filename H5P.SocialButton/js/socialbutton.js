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
    "buttonImage": "images/1.JPG",
    "placement": "left",
    "dataTheme": "default",
    "dataNetworks": {
      "facebook": true,
      "facebookHandle": "exFacebookHandler",
      "twitter": true,
      "dribbble": false,
      "socl": false,
      "youtube": true,
      "vimeo": true,
      "google": true,
      "pinterest": false,
      "linkedin": true,
      "flickr": true,
      "blogger": false,
      "github": true,
      "deviantart": false,
      "skype": false,
      "steam": false,
      "wordpress": false,
      "yahoo": false,
      "email": true
    },
    "dataImageType": "",
    "dataPicture": "",
    "dataOrientation": "arc",
    "dataGap": 70,
    "dataArcStart": 0,
    "dataArcLength": 360,
    "dataRadius": 80
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

    networks = " ";
    handlers = " ";
    for (var property in params.dataNetworks) {
      if (property.indexOf("Handle") == -1) {
        if (params.dataNetworks[property]) {
          networks = (networks == " ") ? property : networks + "," + property;
          handlers = handlers + 'data-' + property + '-handle';
        }
        addNetwork = params.dataNetworks[property];
      } else {
        if (addNetwork) {
          handlers = handlers + '="' + params.dataNetworks[property] + '" ';
        }
      }
    }

    //Adding the Social Button
    $myDom.html('<div class="classysocial ' + params.placement +
            '" data-theme="' + params.dataTheme +
            '" data-image-type="' + params.dataImageType +
            '" data-picture="' + params.dataPicture +
            '" data-orientation="' + params.dataOrientation +
            '" data-arc-length=' + params.dataArcLength +
            ' data-gap=' + params.dataGap +
            ' data-arc-start=' + params.dataArcStart +
            ' data-radius=' + params.dataRadius +
            handlers +
            ' data-networks="' + networks +
            '"></div>');

    $(function() {
      $(".classysocial").each(function() {
        new ClassySocial(this);
        $(".main img").remove();
        console.log("img: " + params.buttonImage);
        var $newMain = $('<img alt="main img" src="' + cp + params.buttonImage + '"/>');
        $(".main").append($newMain);
      });

    });

    return this;
  };

};