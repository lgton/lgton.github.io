// WebTrends SmartSource Data Collector Tag v10.4.1
// Copyright (c) 2014 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.2
// Created: 2014.03.27
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid:"dcs222zlzvaot8og50vpqid9s_1n9b",
        domain:"statse.webtrendslive.com",
        timezone:1,
        i18n:false,
        fpcdom:".lgt.com",
        onsitedoms:"lgt.com",
		download:true,
		downloadtypes:"xlsx,docx,xls,doc,pdf,txt,csv,zip",
		navigationtag:"div,table",
		trackevents:true,
		trimoffsiteparams:false,
		enabled:true,
		fpc:"WT_FPC",
		paidsearchparams:"gclid",
		splitvalue:"",
		preserve:true,
		plugins:{
            //hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
            replicate: { src: "/system/modules/com.lgt.internet.v1.config/resources/webtrends/webtrends.replicate.js", servers: [ { domain: "sdc.lgt.com", dcsid: "dcssl3kn94hajkv9oc5kelwtc_9y5j" } ] }
       	}
   	});
	
	dcs.DCS.dcsipa=1;
	
	dcs.track();
	

};
(function(){
    var s=document.createElement("script"); s.async=true; s.src="system/modules/com.lgt.internet.v1.config/resources/webtrends/webtrends.min.js";    
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());