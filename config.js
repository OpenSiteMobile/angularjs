// Copyright Notice:
//					config.js
//			Copyright©2012-2017 - OpenSiteMobile
//				All rights reserved
// ==========================================================================
//			http://opensitemobile.com and http://ngmomentum.com
// ==========================================================================
// Contact Information:
//			Author: Dwight Vietzke
//			Email:  dwight_vietzke@yahoo.com

/*
	OpenSiteMobile - AngularJS demo pages configuration file
*/

/*global
	msos: false,
    _gaq: true,
    ___gcfg: true
*/

msos.console.info('config -> start, (/angularjs/config.js file).');
msos.console.time('config');

// Set specific config flags (w/ boolean)
msos.site_specific({});

// --------------------------
// Stylesheets to load (CSS injection)
// --------------------------

if (msos.config.debug_css) {

	msos.deferred_css = [
		msos.resource_url('fonts','css/fontawesome.uc.css'),
		msos.resource_url('ng','bootstrap/css/v335_wo_icons.min.css'),		// w/o icons
		msos.resource_url('ng','bootstrap/css/v335_theme.min.css')
	];

} else {

	msos.deferred_css = [
		msos.resource_url('fonts','css/fontawesome.min.css'),
		msos.resource_url('ng','bootstrap/css/v335_wo_icons.uc.css'),		// w/o icons
		msos.resource_url('ng','bootstrap/css/v335_theme.uc.css')
	];

}


// --------------------------
// Scripts to 'defer' load (script injection)
// --------------------------

if (msos.config.debug_script) {

	// Debug full scripts (line no's mean something)
    msos.deferred_scripts = [
		msos.resource_url('jquery', 'v321_msos.uc.js'),
		msos.resource_url('jquery', 'ui/v1120.uc.js'),		// All UI Core + Draggable Interaction + Effects Core
		msos.resource_url('ng', 'v158_msos.uc.js'),
		msos.resource_url('ng', 'bootstrap/v0130_msos.uc.js'),
		msos.resource_url('ng', 'animate/v159_msos.uc.js'),
		msos.resource_url('', 'site.js'),											// Common installation specific setup code (which needs jQuery, underscore.js, etc.)
		msos.resource_url('msos', 'core.uc.js')
	];

} else {

	// Standard site provided (including ext. bundles) scripts
    msos.deferred_scripts = [
		msos.resource_url('jquery', 'v321_msos.min.js'),
		msos.resource_url('jquery', 'ui/v1120.min.js'),			// All UI Core + Draggable Interaction + Effects Core
		msos.resource_url('ng', 'v158_msos.min.js'),
		msos.resource_url('ng', 'bootstrap/v0130_msos.min.js'),
		msos.resource_url('ng', 'animate/v159_msos.min.js'),
		msos.resource_url('', 'site.js'),
		msos.resource_url('msos', 'core.min.js')
	];
}


// --------------------------
// Google Related Globals
// --------------------------

// Replace with your site specific Google and other variables
var _gaq = [],
    ___gcfg = {};

// Google Analytics
_gaq.push(['_setAccount', 'UA-24170958-1']);
_gaq.push(['_trackPageview']);
// Ref. 'msos.site.google_analytics' in site.uc.js -> site.min.js
msos.config.google.analytics_domain = 'opensitemobile.com';

// Add your Google Web Page Translator Widget ID here.
msos.config.google.translate_id = '7aa52b36fcd8fcb6-07fbdbdc6a976e62-g7261f6c2de6e277c-d';
msos.config.google.no_translate = {
	by_id: ['#marquee', '#header', '#footer', '#pyromane', '#locale', '#culture', '#calendar'],
	by_class: [],
	by_tag: ['code', 'u']
};
msos.config.google.hide_tooltip = {
	by_id: [],
	by_class: []
};

// Social website API access keys
msos.config.social = {
	google: '526338426431.apps.googleusercontent.com',
	facebook: '583738878406494',
	windows: '000000004C107945',
	instagram: '34e2fb9bd305446cb080d852597584e9',
	cloudmade: 'efca0172cf084708a66a6d48ae1046dd',
	foursquare: 'SFYWHRQ1LTUJEQWYQMHOCXYWNFNS0MKUCAGANTHLFUGJX02E'
};

// Add your Google Maps API key here.
msos.config.google.maps_api_key = 'AIzaSyAhvG_5h55iUW3fLREMTPxB6joCAexYQ2o';

msos.css_loader(msos.deferred_css);
msos.script_loader(msos.deferred_scripts);

msos.console.info('config -> done!');
msos.console.timeEnd('config');
