//insta feed
$(document).ready(function () {
    var userFeed = new Instafeed({
        get: 'user'
        , userId: '4741714911'
        , limit: 12
        , resolution: 'standard_resolution'
        , accessToken: '4741714911.1677ed0.1e3cc902ae3b4f2f93518e442cac6fca'
        , sortBy: 'most-recent'
        , template: '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 instaimg"><a class="instagram-{{orientation}} href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    , });
    userFeed.run();
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image'
        , delegate: 'a'
        , gallery: {
            enabled: true
        }
    });
});
//insta feed ends