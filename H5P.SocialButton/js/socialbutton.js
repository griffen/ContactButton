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
      "Facebook": true,
      "Twitter": true,
      "Dribbble": true,
      "Socl": true,
      "Youtube": true,
      "Vimeo": true,
      "Google Plus": true,
      "Pinterest": true,
      "LinkedIn": true,
      "Flickr": true,
      "Blogger": true,
      "GitHub": true,
      "DeviantArt": true,
      "Skype": true,
      "Steam": true,
      "Wordpress": true,
      "Yahoo": true,
      "eMail": true
    },
    "dataImageType": true,
    "dataPicture": true,
    "dataYYYHandle": {
      "data_name_handle": true,
      "data_name2_handle": true
    },
    "dataOrientation": "arc",
    "dataGap": 30,
    "dataArcStart": 30,
    "dataArcLength": 360,
    "dataRadius": 20
  };

  //<div class="classysocial rif (params.dataNetworks.Twitter) {ight" 
  //  data-arc-length="360" 
  //  data-image-type="facebook" 
  //  data-picture="picozu" 
  //  data-facebook-handle="picozu" 
  //  data-twitter-handle="picozu_editor" 
  //  data-email-handle="office@picozu.net" 
  //  data-networks="facebook,twitter,email">


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
    if (params.dataNetworks.Facebook) {
      networks = "facebook";
      handlers = ' data-facebook-handle="examleHandle" ';
    }
    if (params.dataNetworks.Twitter) {
      networks = (networks == "") ? "twitter" : networks + ",twitter";
      handlers = handlers + 'data-twitter-handle="examleHandle" ';
    }
    if (params.dataNetworks.Dribbble) {
      networks = (networks == "") ? "dribbble" : networks + ",dribbble";
      handlers = handlers + 'data-dribbble-handle="examleHandle" ';
    }
    if (params.dataNetworks.Socl) {
      networks = (networks == "") ? "socl" : networks + ",socl";
      handlers = handlers + 'data-socl-handle="examleHandle" ';
    }
    if (params.dataNetworks.Youtube) {
      networks = (networks == "") ? "youtube" : networks + ",youtube";
      handlers = handlers + 'data-youtube-handle="examleHandle" ';
    }
    if (params.dataNetworks.Vimeo) {
      networks = (networks == "") ? "vimeo" : networks + ",vimeo";
      handlers = handlers + 'data-vimeo-handle="examleHandle" ';
    }
    if (params.dataNetworks.GooglePlus) { // toLowerCase, instagram
      networks = (networks == "") ? "google" : networks + ",google";
      handlers = handlers + 'data-google-handle="examleHandle" ';
    }
    if (params.dataNetworks.Pinterest) {
      networks = (networks == "") ? "pinterest" : networks + ",pinterest";
      handlers = handlers + 'data-pinterest-handle="examleHandle" ';
    }
    if (params.dataNetworks.LinkedIn) {
      networks = (networks == "") ? "linkedin" : networks + ",linkedin";
      handlers = handlers + 'data-linkedin-handle="examleHandle" ';
    }
    if (params.dataNetworks.Flickr) {
      networks = (networks == "") ? "flickr" : networks + ",flickr";
      handlers = handlers + 'data-flickr-handle="examleHandle" ';
    }
    if (params.dataNetworks.Blogger) {
      networks = (networks == "") ? "blogger" : networks + ",blogger";
      handlers = handlers + 'data-blogger-handle="examleHandle" ';
    }
    if (params.dataNetworks.GitHub) {
      networks = (networks == "") ? "github" : networks + ",github";
      handlers = handlers + 'data-github-handle="examleHandle" ';
    }
    if (params.dataNetworks.DeviantArt) {
      networks = (networks == "") ? "deviantart" : networks + ",deviantart";
      handlers = handlers + 'data-deviantart-handle="examleHandle" ';
    }
    if (params.dataNetworks.Skype) {
      networks = (networks == "") ? "skype" : networks + ",skype";
      handlers = handlers + 'data-skype-handle="examleHandle" ';
    }
    if (params.dataNetworks.Steam) {
      networks = (networks == "") ? "steam" : networks + ",steam";
      handlers = handlers + 'data-steam-handle="examleHandle" ';
    }
    if (params.dataNetworks.Wordpress) {
      networks = (networks == "") ? "wordpress" : networks + ",wordpress";
      handlers = handlers + 'data-wordpress-handle="examleHandle" ';
    }
    if (params.dataNetworks.Yahoo) {
      networks = (networks == "") ? "yahoo" : networks + ",yahoo";
      handlers = handlers + 'data-yahoo-handle="examleHandle" ';
    }
    if (params.dataNetworks.eMail) {
      networks = (networks == "") ? "email" : networks + ",email";
      handlers = handlers + 'data-email-handle="examleHandle" ';
    }

    //Adding the Social Button
    console.log("test: " + handlers);
    $myDom.html('<div class="classysocial ' + params.placement +
            '" data-orientation="' + params.dataOrientation +
            '" data-arc-length="' + params.dataArcLength +
            '"' + handlers +
            ' data-networks="' + networks +
            //'" data-image-type="facebook" data-picture="picozu"></div>');
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