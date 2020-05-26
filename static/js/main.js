$(document).ready(function () {
    $.fn.extend({
        toggleHtml: function (a, b) {
            return this.html(this.html() == b ? a : b);
        },
    });

    // - See More Projects Button - //
    $("#btn-see-more").on("click", function () {
        $("#hidden-projects").slideToggle(500, function () {
            $("#btn-see-more").toggleHtml(
                "Show More Projects",
                'Show Fewer Projects'
            );
        });
    });

    tippy("[data-tippy-content]");

    // ----------------------------------------------- Insert Copyright Year //
    $("#copyright-year").text(new Date().getFullYear());
});
