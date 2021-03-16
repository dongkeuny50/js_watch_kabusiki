
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
		window.location.href = 'index.html';
	} catch (ignore) {
	}
    });
    
    var weburl ="http://asp1.krx.co.kr/servlet/krx.asp.XMLSiseEng?code=194480";
    //locale handler
    	var localelng = "ko_KR";
    	//default
    tizen.systeminfo.getPropertyValue("LOCALE", function(device){
           localelng =  device.language;
        });
    
    $(".content_text").each(function(index, item){
        set_locale($(item),localelng);
    })

    //default locale set
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){

    	loading($("#name"),localelng);
    	$("#curjuka").text("");
	
        $.ajax({ 
        	type: 'GET',
        	url: weburl, 
        	success: function(data) {
            	$("#name").text($(data.responseText).find("TBL_StockInfo").attr("JongName"));
            	$("#curjuka").text($(data.responseText).find("TBL_StockInfo").attr("CurJuka"));
        	
        },
        error: function(data){
            // do what ever you want to do when error happens
        	$("#name").text($(data.responseText).find("TBL_StockInfo").attr("JongName"));
        	$("#curjuka").text($(data.responseText).find("TBL_StockInfo").attr("CurJuka"));
        }
        });
    });
    
};
function set_locale(resource, localelng){
	
    defaulttxt = resource.text().split(".");
    localedtxt = ""
    switch(localelng){
    case "ko_KR":
    		localedtxt = defaulttxt[0];
    		break;
    case "ja_JP":
		localedtxt = defaulttxt[1];
		break;
    case "en_AU":
    		localedtxt = defaulttxt[2];
    		break;
    	default:
    		break;
    }
    resource.text(localedtxt);
	
}


function loading(resource, localelng){
    defaulttxt = "불러오는 중..,ロード中,proccessing..".split(",");
    localedtxt = ""
    switch(localelng){
    case "ko_KR":
    		localedtxt = defaulttxt[0];
    		break;
    case "ja_JP":
		localedtxt = defaulttxt[1];
		break;
    case "en_AU":
    		localedtxt = defaulttxt[2];
    		break;
    	default:
    		break;
    }
    resource.text(localedtxt);
	
}

