define(['jquery','cookie'],function(){
	//实现登录功能
	$('#loginId').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $('#loginForm').serialize(),
            dataType : 'json',
            success : function (data){
                // console.log(data);
                if(data.code==200){
                    //把登录的用户信息存储到cookie里面，方便页面之间数据共享
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/index/index';
                }
            }
        });
        return false;
    });
});