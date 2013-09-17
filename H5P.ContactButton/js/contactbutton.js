/*
 *	H5P Contact Button
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
 *  The Contact button Object
 */
H5P.ContactButton = function(params, contentId) {
  var that = this;
  if (!(this instanceof H5P.ContactButton))
    return H5P.ContactButton(params, contentId);

  // Get the newest jquery from H5P
  var $ = H5P.jQuery;

  // Making a shorcut path to the content
  var cp = H5P.getContentPath(contentId);

  //Setting default values
  var defaults = {
    "placement": "left",
    "dataTheme": "default",
    "dataNetworks": {
      "facebook": true,
      "facebookHandle": "FacebookUsername",
      "twitter": true,
      "twitterHandle": "TwitterUsername",
      "dribbble": false,
      "dribbbleHandle": "_",
      "socl": false,
      "soclHandle": "_",
      "youtube": false,
      "youtubeHandle": "_",
      "vimeo": false,
      "vimeoHandle": "_",
      "google": true,
      "googleHandle": "GooglePlusUsername",
      "instagram": true,
      "instagramHandle": "_",
      "pinterest": false,
      "pinterestHandle": "_",
      "linkedin": false,
      "linkedinHandle": "_",
      "flickr": false,
      "flickrHandle": "_",
      "blogger": false,
      "bloggerHandle": "_",
      "github": true,
      "githubHandle": "griffen/ContactButton",
      "deviantart": false,
      "deviantartHandle": "_",
      "skype": false,
      "skypeHandle": "_",
      "steam": false,
      "steamHandle": "_",
      "wordpress": false,
      "wordpressHandle": "_",
      "yahoo": false,
      "yahooHandle": "_",
      "email": false,
      "emailHandle": "_"
    },
    "dataImageType": "default",
    "dataPicture": "none",
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
   * Attach the Contact Button html to a given target
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

    //Set button image
    if (params.dataImageType === "default") {
      picturePath = (params.dataTheme === 'slick') ? cp + 'images/button_bw.png' : cp + 'images/button_color.png';
    } else {
      picturePath = params.dataPicture;
    }

    //Adding the Contact Button
    $myDom.html('<div class="classysocial ' +
            '" data-theme="' + params.dataTheme +
            '" data-image-type="' + params.dataImageType +
            '" data-picture="' + picturePath +
            '" data-orientation="' + params.dataOrientation +
            '" data-arc-length=' + params.dataArcLength +
            ' data-gap=' + params.dataGap +
            ' data-arc-start=' + params.dataArcStart +
            ' data-radius=' + params.dataRadius +
            handlers +
            ' data-networks="' + networks +
            '" style="float:' + params.placement +
            '"></div>');

    $(function() {
      $(".classysocial").each(function() {
        new ClassySocial(this);
      });

    });

    return this;
  };

};
