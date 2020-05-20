$(document).ready(function () {
    $.fn.extend({
        toggleHtml: function (a, b) {
            return this.html(this.html() == b ? a : b);
        },
    });

    // - See More Projects Button - //
    $("#btn-see-more").on("click", function () {
        console.log("uuyui");
        $("#hidden-projects").slideToggle(700, function () {
            $("#btn-see-more").toggleHtml(
                'See More Projects',
                '<i class="fas fa-angle-double-up fa-2x"></i>'
            );
        });
    });
});
