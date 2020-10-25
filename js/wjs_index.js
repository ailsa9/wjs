/**
 * Created by 郑姗 on 2020/8/1.
 */
$(function () {
    //初始化工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 获取所有item
    var items = $('.carousel-inner .item');

    //监听屏幕的大小改变
    $(window).on('resize', function () {
        //1. 获取当前屏幕的宽度
        var width = $(window).width();

        //2. 判断屏幕的宽度
        //非移动端
        if(width >= 768){
            // 为每一个item添加子元素——遍历
            $(items).each(function (index, value) {
                var item = $(this);
                // 获取当前自定义属性中的存储的图片路径
                var imgSrc = item.data('largeImage');
                // 添加非移动端的子元素
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }
        //移动端
        else{
            $(items).each(function (index, value) {
                var item = $(this);
               var imgSrc = item.data('smallImage');
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt=""></a>');
            });
        }
    }).trigger('resize');

    //计算产品块导航项的宽度
    var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find('li');
    var totalWidth = 0;//总宽度
    lis.each(function (index, value) {
        totalWidth = totalWidth + $(value).outerWidth(true);
        //width():获取当前元素内容的宽度
        //innerWidth():获取当前元素内容的宽度+padding
        //outerWidth():获取当前元素内容的宽度+padding+border
        //outerWidth(true):获取当前元素内容的宽度+padding+border+margin
    });
    ul.width(totalWidth);

    // 使用插件实现导航条的滑动操作
    var myScroll = new IScroll('.tabs_parent', {
        scrollX: true, scrollY: false
    });
});