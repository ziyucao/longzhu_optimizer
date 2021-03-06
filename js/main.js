﻿var lz = lz || {};

lz.allowed = false;

lz.firstRun = true;


lz.toggle = function( status ){

    lz.allowed = ( status != 0 ? true : false );

    if( lz.allowed ){
    
        handle( status );
		
		if( lz.allowed ) requestAnimationFrame( checker );
			
		if( lz.firstRun ) lz.firstRun = false;
        
    }else{
    
        stop();
        
    }

    function handle( mode ){
		
		/*
        * @author lync
        */
		
		//常规模式
		if( mode == 1 ){

		    //@ziyucao 0.5s延时防止网页没有加载完
            setTimeout(function () {
                optimizeCss();

                removeAd();
            }, 500);
		

					
		}
		//全屏模式
		else if( mode == 2 ){

            setTimeout(function () {
                fullscreen();
            }, 500);
			
		}
        
    }
	
	function fullscreen(){
	
		$( '.header' ).hide();
		
		$( '#topbar' ).hide();

		$( '.play_back' ).hide();
		
		$( '.stage-container-live' ).css({ 'margin-top': 0 });
		
		$( '#stage-center' ).css({ 'padding-top': 0 });
		
		$( '.live' ).css({ 'right': '340px' });
		
		$( '.stage-inner' ).css({ 'padding': 0 });
		
		$( '.ptc-footer' ).remove();

        $( '.stage-container.stage-container-live' ).css({  'width': 'auto!important',
            'position': 'fixed!important',
            'top': '0!important',
            'right': '0!important',
            'left': '0!important',
            'bottom': '0!important',
            'overflow-x': 'auto!important',
            'min-width': '0!important'});


        afterResizeFull();
        $(window).resize(afterResizeFull);
	}

	function afterResizeFull() {
        /**
         * @author ziyucao
         */

        setTimeout(function () {
            $('.live-player').height($(window).height() - 64);
        }, 100);

    }

    function removeAd() {
	
		/**
        * @author lync
        */
		//移除小龙龙
		$('.task_finished_dialog').remove();
		//移除爆灯
		$('#activity-entry-newyear').remove();

        /**
        * @author ziyucao
        */
        $('.quiz-intrduction').remove();
        // 底部广告屏蔽
        $('.stage-container-widget').remove();
        $('.topbar-nav-yzcm').remove();
        $('.topbar-nav-shop-hover').remove();
        $('.tencent-popup').remove();
        $('.live-footer-hotgames').remove();
        $('.live-footer-games').remove();
        $('.official-activities').remove();
        $('.top-banner-pic').remove();
        $('.chatroom-ap').remove();
        $('.lobster-small').remove();
        /**
         *
         */

        $( '#chat-limit-scroll-container' ).find( '.effect-panel-outer' ).hide();

        $( '.chatroom-con' ).css( 'user-select','auto' );
		$( '#right-nav' ).remove();

    }
	
	function optimizeCss(){
	
		/**
        * @author lync
        */
		// 优化公告样式
		setTimeout( function(){ 
		
			$( '.announcement-title' ).css( {'padding':'8px 0px 0px 15px', 'border-bottom':0 } ); 
			
			$( '.announcement-container' ).css( 'padding', '14px 15px' );
			
		}, 0 );
		
		$( '.announcement-title' ).find( 'i' ).remove();	
				
		$( '.header' ).css( 'border-radius' , '4px 0px 0px 4px' );
		
		$( '.stage-container-right' ).css( 'border-radius','0px 4px 4px 0px' );
		
		// 将竞猜模块移动到聊天窗口方便操作
		var l = $( '#chatroom-tabs' ).find( '.goog-tab' ).length;
		
		$( $( '#chatroom-tabs' ).find( '.goog-tab' )[l-1] ).text( '【德云色竞猜党】' ).css( 'color', '#ff0000' );
		
		// 移除礼物列表
		$( '#gift-history-list-scroll' ).hide();
		
		$( '.gift-history-list' ).append( $('#guess') );


        /**
        * @author ziyucao
        */
        // 移除通关进度
        $('.challenge-task').remove();

        // 移除左边导航栏
        $('.simplesidenav-nav').remove();
        $('.stage').css('padding-left', '0');

        // 页面padding调整
        $('.stage-inner').css({'padding-right': '14px',
            'padding-bottom': '50px'});
        $('.ptc-footer').css({'margin-top': '0',
            'border-top': '0'});

        // 将头条替换成房间公告
        $('.announcement').insertBefore($('.gift-radio'));
        $('.announcement').css({'border': 'none',
            'border-radius': '0px 4px 4px 0px',
            'height': '120px'});
        $('.announcement-container').css('height', 'auto');
        $('#announcement-content').css('height', 'auto');
        $('.announcement-title').css('padding-left', '40px');
        $('.announcement-title i').css('left', '15px');
        $('.gift-radio').hide();

        // 圆角化
        $('.play_back').css('border-radius', '4px 4px 4px 4px');
        $('.stage-container-left').css('border-radius', '4px 4px 4px 4px');
        $('#live-footer-tabs').css('border-radius', '0 0 0 4px');
        $('.live-footer-tabs-inner').css('border-radius', '0 0 0 4px');
        $('#chatroom').css('border-radius', '0 4px 4px 0');
        $('.showFans').css('border-radius', '4px 0 0 4px');
        $('#chatroom-button').css('border-radius', '0 4px 4px 0');
        $('#chatroom-input').css('border-radius', '4px 0 0 4px');
        $('.feed-pane-count').css({'border-radius': '4px 4px 4px 4px',
            'padding': '0 6px 0 4px'});
        $('.feed-pane').css({'border-radius': '4px 4px 4px 4px',
            'padding-right': '8px'});
        $('.header-avatar-img').css('border-radius', '4px');

        afterResize();
        $(window).resize(afterResize);
	}

	function afterResize() {
        /**
         * @author ziyucao
         */
        // 移除左边导航栏后页面调整
        $('.stage').css('padding-left', '0');
        // // 调整播放器高度适应策略
        // setTimeout(function () {
        //     var liveWidth = $('#live-player').width();
        //     var liveHeight = liveWidth/16*9;
        //     var windowHeight = $(window).height();
        //     windowHeight = windowHeight > 300 ? windowHeight : 300;
        //     liveHeight = liveHeight + 118 > windowHeight? liveHeight + 118 : windowHeight - 118;
        //     $('#live-player').css('height', liveHeight);
        //     }, 100);
    }
    function checker(){
		/*
        * @author lync
        */
		
		// 屏蔽贵族进场特效
		$( '#chat-limit-scroll-container' ).find( '.pt-cars-enter' ).hide();
		
		$( '#chat-limit-scroll-container' ).find( '.user_enter_msg' ).hide();
    
        $( '#live-player' ).find( '.tp-link.report-rbi-static' ).hide()
        
        $( '#chat-limit-scroll-container' ).find( '.effect-panel-outer' ).hide();
        
        $( '#effect-animate' ).hide();
        
        $( '#chatroom' ).find( '.effect-panel-outer' ).hide();
        
        var a = $( '#chat-limit-scroll-container' ).find( '.pt-chat-plugins-cell' );

        var n = a.length;

        while(--n > 0){

            var el = $( '#chat-limit-scroll-container' ).find('.pt-chat-plugins-cell')[n];

            if( $(el).find('.send-text').length ) $(el).hide();
            
            var re = new RegExp( /^\d{1,}(6)$/ );
            
            if( re.test( $(el).find('.message-content').text() ) ) $(el).hide();
            
        }

        if( lz.allowed ) requestAnimationFrame( checker );
    }

    function stop() {

        window.location.reload();
		
    }

}