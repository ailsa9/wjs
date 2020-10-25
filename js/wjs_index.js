/**
 * Created by ֣� on 2020/8/1.
 */
$(function () {
    //��ʼ��������ʾ
    $('[data-toggle="tooltip"]').tooltip();

    // ��ȡ����item
    var items = $('.carousel-inner .item');

    //������Ļ�Ĵ�С�ı�
    $(window).on('resize', function () {
        //1. ��ȡ��ǰ��Ļ�Ŀ��
        var width = $(window).width();

        //2. �ж���Ļ�Ŀ��
        //���ƶ���
        if(width >= 768){
            // Ϊÿһ��item�����Ԫ�ء�������
            $(items).each(function (index, value) {
                var item = $(this);
                // ��ȡ��ǰ�Զ��������еĴ洢��ͼƬ·��
                var imgSrc = item.data('largeImage');
                // ��ӷ��ƶ��˵���Ԫ��
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }
        //�ƶ���
        else{
            $(items).each(function (index, value) {
                var item = $(this);
               var imgSrc = item.data('smallImage');
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt=""></a>');
            });
        }
    }).trigger('resize');

    //�����Ʒ�鵼����Ŀ��
    var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find('li');
    var totalWidth = 0;//�ܿ��
    lis.each(function (index, value) {
        totalWidth = totalWidth + $(value).outerWidth(true);
        //width():��ȡ��ǰԪ�����ݵĿ��
        //innerWidth():��ȡ��ǰԪ�����ݵĿ��+padding
        //outerWidth():��ȡ��ǰԪ�����ݵĿ��+padding+border
        //outerWidth(true):��ȡ��ǰԪ�����ݵĿ��+padding+border+margin
    });
    ul.width(totalWidth);

    // ʹ�ò��ʵ�ֵ������Ļ�������
    var myScroll = new IScroll('.tabs_parent', {
        scrollX: true, scrollY: false
    });
});