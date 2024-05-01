$(document).ready(function () {
    $(".reports_item").slice(0, 6).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".reports_item:hidden").slice(0, 6).slideDown();
        if ($(".reports_item:hidden").length == 0) {
            $("#loadMore").text("No Reports Available").addClass("noContent");
        }
    });
});

var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
            '<article class="reports_item">' +
            '<a href="{{cover}}" target="_blank">' +
            '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" title="{{title}} Cover"/>'+
            '</a>' +
            '<footer class="reports_docs">' +
            '{{#documents}}' +
            '<h3 class="reports_title">' +
            '<a href="{{url}}" target="_blank" title="{{title}}">{{title}} <span>({{file_size}} {{file_type}})</span></a>' +
            '</h3>' +
            '{{/documents}}' +
            '</footer>' +
            '</article>' +
            '{{/.}}'
        )
    },

    init: function () {
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();