// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    swipeBackPage: false,
    swipePanelOnlyClose: true,
    pushState: true,
    template7Pages: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false,
});

function isWeixinBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua)) ? true : false;
}


$(document).ready(function() {
    $("#RegisterForm").validate();
    $("#LoginForm").validate();
    $("#ForgotForm").validate();
    $('.close-popup').on('click', function() {
        $("label.error").hide();
    });
});

$$(document).on('pageInit', function(e) {
    $("#RegisterForm").validate();
    $("#LoginForm").validate();
    $("#ForgotForm").validate();
    $('.close-popup').on('click', function() {
        $("label.error").hide();
    });
    (function() {
        [].slice.call(document.querySelectorAll('select#selectoptions')).forEach(function(el) {
            new SelectFx(el, {
                stickyPlaceholder: false
            });
        });
    })();
})
myApp.onPageInit('music', function(page) {
    audiojs.events.ready(function() {
        var as = audiojs.createAll();
    });
})
myApp.onPageInit('videos', function(page) {
    $(".videocontainer").fitVids();
})
myApp.onPageInit('contact', function(page) {
    $("#ContactForm").validate({
        submitHandler: function(form) {
            ajaxContact(form);
            return false;
        }
    });
})
myApp.onPageInit('blog', function(page) {

    // $(".post_entry").hide();
    // size_li = $(".post_entry").size();
    // x = 4;
    // $('.post_entry:lt(' + x + ')').show();
    // $('#loadMore').on('click', function() {
    //     x = (x + 1 <= size_li) ? x + 1 : size_li;
    //     $('.post_entry:lt(' + x + ')').show();
    //     if (x === size_li) {
    //         $('#loadMore').hide();
    //         $('#showLess').show();
    //     }
    // });

})

myApp.onPageInit('shop', function(page) {

    $('.qntyplusshop').on('click', function(e) {

        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal)) {
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }

    });
    $(".qntyminusshop").on('click', function(e) {
        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }
    });

})
myApp.onPageInit('shopitem', function(page) {
    $(".swipebox").swipebox();
    $('.qntyplusshop').on('click', function(e) {

        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal)) {
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }

    });
    $(".qntyminusshop").on('click', function(e) {
        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }
    });

})
myApp.onPageInit('cart', function(page) {

    $('.item_delete').on('click', function(e) {
        e.preventDefault();
        var currentVal = $(this).attr('id');
        $('div#' + currentVal).fadeOut('slow');
    });

})
myApp.onPageInit('photos', function(page) {
    $(".swipebox").swipebox();
    $("a.switcher").on("click", function(e) {
        e.preventDefault();

        var theid = $(this).attr("id");
        var theproducts = $("ul#photoslist");
        var classNames = $(this).attr('class').split(' ');


        if ($(this).hasClass("active")) {
            // if currently clicked button has the active class
            // then we do nothing!
            return false;
        } else {
            // otherwise we are clicking on the inactive button
            // and in the process of switching views!

            if (theid === "view13") {
                $(this).addClass("active");
                $("#view11").removeClass("active");
                $("#view11").children("img").attr("src", "images/switch_11.png");

                $("#view12").removeClass("active");
                $("#view12").children("img").attr("src", "images/switch_12.png");

                var theimg = $(this).children("img");
                theimg.attr("src", "images/switch_13_active.png");

                // remove the list class and change to grid
                theproducts.removeClass("photo_gallery_11");
                theproducts.removeClass("photo_gallery_12");
                theproducts.addClass("photo_gallery_13");

            } else if (theid === "view12") {
                $(this).addClass("active");
                $("#view11").removeClass("active");
                $("#view11").children("img").attr("src", "images/switch_11.png");

                $("#view13").removeClass("active");
                $("#view13").children("img").attr("src", "images/switch_13.png");

                var theimg = $(this).children("img");
                theimg.attr("src", "images/switch_12_active.png");

                // remove the list class and change to grid
                theproducts.removeClass("photo_gallery_11");
                theproducts.removeClass("photo_gallery_13");
                theproducts.addClass("photo_gallery_12");

            } else if (theid === "view11") {
                $("#view12").removeClass("active");
                $("#view12").children("img").attr("src", "images/switch_12.png");

                $("#view13").removeClass("active");
                $("#view13").children("img").attr("src", "images/switch_13.png");

                var theimg = $(this).children("img");
                theimg.attr("src", "images/switch_11_active.png");

                // remove the list class and change to grid
                theproducts.removeClass("photo_gallery_12");
                theproducts.removeClass("photo_gallery_13");
                theproducts.addClass("photo_gallery_11");

            }

        }

    });

    var active_des = page.query;
    if (active_des != null) {
        if (active_des.active == "call_number")
            myApp.showTab('#tab_call_number');
        else if (active_des.active == "steps")
            myApp.showTab('#tab_call_steps');
        else if (active_des.active == "front")
            myApp.showTab('#tab_call_front');
        else if (active_des.active == "menu")
            myApp.showTab('#tab_call_menu');
        else if (active_des.active == "cancel")
            myApp.showTab('#tab_call_cancel');
        else if (active_des.active == "chef")
            myApp.showTab('#tab_call_chef');
        else if (active_des.active == "pay")
            myApp.showTab('#tab_call_pay');
        else if (active_des.active == "scene")
            myApp.showTab('#tab_call_scene');
    }
})

myApp.onPageInit('files', function(page) {

    if (isWeixinBrowser()) {
        // myApp.addNotification({
        //     title: '提示',
        //     message: '您正在微信浏览器内'
        // });

        // $("#files_weixin_info").show();

        $(".weixin-tip").show();
    };

});

myApp.onPageBeforeRemove('files', function(page) {

    $(".weixin-tip").hide();
});



myApp.onPageInit('tables', function(page) {




});

myApp.onPageInit('features', function(page) {

    var mySwiper = new Swiper('.swiper-container-features', {
        preloadImages: false,
        lazyLoading: true,
        pagination: '.swiper-pagination-features'
    })

});

myApp.onPageAfterAnimation('tables', function(page) {
    var option = {
        title: {
            text: '用工量'
        },
        tooltip: {},
        legend: {
            data: ['易顺', '其他', '传统']
        },
        xAxis: {
            data: ["收银人员", "迎宾人员", "服务员", "管理人员"]
        },
        yAxis: {},
        series: [{
                name: '易顺',
                type: 'bar',
                data: [1, 1, 6, 1]
            },
            {
                name: '其他',
                type: 'bar',
                data: [1, 2, 8, 2]
            },
            {
                name: '传统',
                type: 'bar',
                data: [2, 2, 9, 2]
            }
        ]
    };


    var option_cost = {
        title: {
            text: '人工成本'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['易顺', '其他', '传统']
        },
        radar: [{
            indicator: [
                { name: '收银人员' },
                { name: '迎宾人员' },
                { name: '服务员' },
                { name: '管理人员' }
            ],
            axisLabel: {
                show: false,
                textStyle: {
                    color: 'rgb(0,0,0)'
                }
            },
            radius: 90
        }],
        series: [{
            type: 'radar',
            data: [{
                    name: '易顺',
                    value: [5400 * 12 * 1, 5400 * 12 * 1, 5200 * 12 * 6, 8600 * 12 * 1]
                },
                {
                    name: '其他',
                    value: [5400 * 12 * 1, 5400 * 12 * 2, 5200 * 12 * 8, 8600 * 12 * 2]
                },
                {
                    name: '传统',
                    value: [5400 * 12 * 2, 5400 * 12 * 2, 5200 * 12 * 9, 8600 * 12 * 2]
                }
            ]
        }]
    };

    var myChart = echarts.init(document.getElementById('table_chart_front'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var myChart_cost = echarts.init(document.getElementById('table_chart_const'));
    myChart_cost.setOption(option_cost);

    tables_chart_inited = true;
});

myApp.onPageAfterAnimation('acitons-video', function(page) {
    plyr.setup();
});