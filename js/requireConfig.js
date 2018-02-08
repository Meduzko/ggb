(function (require, define) {

    var config = {

        baseUrl: "/js",
        waitSeconds: 0, // No timeout (best for slow connection)

        // configuration for CSS plugin
        // see: https://github.com/guybedford/require-css
        map: {
            '*': {
                //'css': 'third_party/require_css/css.min'
            }
        },

        "paths": {
            "jquery" : "vendor/jquery-3.0.0.min",
            "swiper": "vendor/swiper",
            "jquery.responsiveTabs": "vendor/jquery.responsiveTabs",
            "home-slider": "vendors/home-slider"
            "mobile_menu": "vendors/mobile_menu"
        },

        "shim": {
            "jquery": {"exports": "jQuery"}
        }
    };


    // adding additional JS path (if file was not found or loading timeout)
    for (var index in config.paths) {
        if (config.paths.hasOwnProperty(index) && typeof config.paths[index] === 'string') {
            config.paths[index] = [config.paths[index], config.paths[index]];
        }
    }

    require.config(config);

})(require, define);
