function ChkOpener(){null==window.opener&&(window.open("","_self",""),window.opener=null,window.close())}function CloseWindow(){window.opener=null,window.close()}function getParent(e){for(var n=e,t=0;4>t;t++){if(null!=n.SiteMode)return n;if(null==n.parent)return null;n=n.parent}return null}function StandalonePlayer(){window.moveTo(0,0);var e=GetIBC_IsLogin();if(!e&&"4200800"!=SiteID||!e&&"4200800"==SiteID&&"161"!=ScheduleType)return alert(err_mainWindowClosed),null!=fFrame&&fFrame.IsCssControl?window.FrameValidation.location.href=ImgServURL+TVImagePath:window.FrameValidation.location.href=ImgServURL+SkinPath+"images/tv_image.jpg",window.opener=null,window.open("","_self"),void window.close();var n=document.getElementById("mintxtdiv"),t=document.getElementById("maxtxtdiv");if(n.disabled=!0,t.disabled=!0,"block"==document.getElementById("containerhead").style.display){bStandalonePlayer=!0,document.getElementById("containerhead").style.display="none",document.getElementById("containerhead").style.visibility="hidden",document.getElementById("containerleft").style.display="none",document.getElementById("containerleft").style.visibility="hidden";var i=document.getElementById("footer");"undefined"!=typeof i&&null!=i&&(document.getElementById("footer").style.display="none",document.getElementById("footer").style.visibility="hidden"),document.getElementById("minimgdiv").style.display="none",document.getElementById("minimgdiv").style.visibility="hidden",document.getElementById("maximgdiv").style.display="block",document.getElementById("maximgdiv").style.visibility="visible",document.getElementById("mintxtdiv").style.display="none",document.getElementById("mintxtdiv").style.visibility="hidden",document.getElementById("maxtxtdiv").style.display="block",document.getElementById("maxtxtdiv").style.visibility="visible",document.getElementById("blueArea").style.display="none"}else{bStandalonePlayer=!1,document.getElementById("containerhead").style.display="block",document.getElementById("containerhead").style.visibility="visible",document.getElementById("containerleft").style.display="",document.getElementById("containerleft").style.visibility="visible";var i=document.getElementById("footer");"undefined"!=typeof i&&null!=i&&(document.getElementById("footer").style.display="block",document.getElementById("footer").style.visibility="visible"),document.getElementById("minimgdiv").style.display="block",document.getElementById("minimgdiv").style.visibility="visible",document.getElementById("maximgdiv").style.display="none",document.getElementById("maximgdiv").style.visibility="hidden",document.getElementById("mintxtdiv").style.display="block",document.getElementById("mintxtdiv").style.visibility="visible",document.getElementById("maxtxtdiv").style.display="none",document.getElementById("maxtxtdiv").style.visibility="hidden",document.getElementById("blueArea").style.display="block",void 0!=ScheduleType&&("151"==ScheduleType||"152"==ScheduleType||"153"==ScheduleType?(document.getElementById("leftcont").src="StreamingSchedule.aspx?Type="+ScheduleType,window.leftcont.location.href="StreamingSchedule.aspx?Type="+ScheduleType):"161"==ScheduleType?(document.getElementById("leftcont").src="StreamingSchedule.aspx?Type=161",window.leftcont.location.href="StreamingSchedule.aspx?Type=161"):(document.getElementById("leftcont").src="StreamingSchedule.aspx?Type=1",window.leftcont.location.href="StreamingSchedule.aspx?Type=1"))}""!=mainplayer_Width&&""!=mainplayer_Height&&""!=singleplayer_Width&&""!=singleplayer_Height?ResizeByXY(bStandalonePlayer,singleplayer_Width,singleplayer_Height,mainplayer_Width,mainplayer_Height):Resize(bStandalonePlayer),n.disabled=!1,t.disabled=!1}function Resize(e){try{var n=GetIBC_IsLogin();if(!isReSizeLoading&&n){var t=getParent(window.opener);ImgServURL=t.imgServerURL}!n&&"4200800"!=SiteID||!n&&"4200800"==SiteID&&"161"!=ScheduleType?null!=t&&t.IsCssControl?window.FrameValidation.location.href=ImgServURL+TVImagePath:window.FrameValidation.location.href=ImgServURL+SkinPath+"images/tv_image.jpg":document.DataForm.submit(),AdjustSize(e),document.getElementById("containerMain").style.width="100%",document.getElementById("containerMain").style.height="100%",isReSizeLoading=!0}catch(i){}}function AdjustSize(e){if("5"==document.getElementById("HorseChannelID").value)if($("body").removeClass("maxWin"),$("body").removeClass("miniWin"),1==e){$("body").addClass("double miniWin");try{window.resizeTo(1070,590),window.outerWidth=1085,window.outerHeight=590}catch(n){setTimeout("ResizeIE(1070,590,1085,590)",1e3)}}else{$("body").addClass("double");try{window.resizeTo(1340,710),window.outerWidth=1355,window.outerHeight=710}catch(n){setTimeout("ResizeIE(1345,710,1355,710)",1e3)}}else if("3"==document.getElementById("StreamingSrc").value&&"5"!=document.getElementById("HorseChannelID").value)if($("body").removeClass("maxWin"),$("body").removeClass("miniWin"),$("body").removeClass("double"),document.getElementById("FrameValidation").width=484,1==e){$("body").addClass("miniWin");try{window.resizeTo(550,590),window.outerWidth=565,window.outerHeight=590}catch(n){setTimeout("ResizeIE(550,590,565,590)",1e3)}}else try{window.resizeTo(820,700),window.outerWidth=825,window.outerHeight=700}catch(n){setTimeout("ResizeIE(820,700,825,700)",1e3)}else if($("body").removeClass("double"),$("body").removeClass("double miniWin"),$("body").removeClass("maxWin"),$("body").removeClass("maxWin miniWin"),"8"==document.getElementById("StreamingSrc").value&&484!=document.getElementById("FrameValidation").width)if(1==e){$("body").addClass("maxWin miniWin");try{window.resizeTo(750,590),window.outerWidth=765,window.outerHeight=590}catch(n){setTimeout("ResizeIE(750,590,765,590)",1e3)}}else{$("body").addClass("maxWin");try{window.resizeTo(1005,700),window.outerWidth=1010,window.outerHeight=700}catch(n){setTimeout("ResizeIE(1005,700,1010,700)",1e3)}}else if("9"==document.getElementById("StreamingSrc").value&&484!=document.getElementById("FrameValidation").width)if(1==e){$("body").addClass("wbWin miniWin");try{window.resizeTo(665,650),window.outerWidth=675,window.outerHeight=650}catch(n){setTimeout("ResizeIE(665,650,675,650)",1e3)}}else{$("body").addClass("wbWin");try{window.resizeTo(930,740),window.outerWidth=945,window.outerHeight=740}catch(n){setTimeout("ResizeIE(930,740,945,740)",1e3)}}else if(1==e){$("body").addClass("miniWin");var t=500,i=505;"true"==document.getElementById("bingoMode").value&&"5"==document.getElementById("StreamingSrc").value&&(t=1030,i=1045);try{window.resizeTo(t,590),window.outerWidth=i,window.outerHeight=590}catch(n){setTimeout("ResizeIE(550,590,565,590)",1e3)}}else{var a=820,o=825;"true"==document.getElementById("bingoMode").value&&"5"==document.getElementById("StreamingSrc").value&&($("body").addClass("double"),a=1340,o=1355);try{window.resizeTo(a,700),window.outerWidth=o,window.outerHeight=700}catch(n){setTimeout("ResizeIE("+a+",700,"+o+",700)",1e3)}}}function ResizeByXY(e,n,t,i,a){try{var o=GetIBC_IsLogin();if(!isReSizeLoading&&o){var r=getParent(window.opener);ImgServURL=r.imgServerURL}!o&&"4200800"!=SiteID||!o&&"4200800"==SiteID&&"161"!=ScheduleType?null!=r&&r.IsCssControl?window.FrameValidation.location.href=ImgServURL+TVImagePath:window.FrameValidation.location.href=ImgServURL+SkinPath+"images/tv_image.jpg":document.DataForm.submit(),singleplayer_Width=n,singleplayer_Height=t,mainplayer_Width=i,mainplayer_Height=a,1==e?(window.resizeTo(n,t),window.outerWidth=n,window.outerHeight=t):(window.resizeTo(i,a),window.outerWidth=i,window.outerHeight=a),document.getElementById("containerMain").style.width="100%",document.getElementById("containerMain").style.height="100%",isReSizeLoading=!0}catch(m){}}function ResizeIE(e,n,t,i){try{window.resizeTo(e,n),window.outerWidth=t,window.outerHeight=i}catch(a){}}function Resize1(e){(0==e&&"block"!=document.getElementById("containerhead").style.display||1==e&&"block"==document.getElementById("containerhead").style.display)&&StandalonePlayer()}function SetTitle(e,n){document.getElementById("GreyhoundsContainer").style.display="none",document.getElementById("SportsContainer").style.display="block",document.getElementById("left_title").innerHTML=n,document.getElementById("Button1").style.display="0"==e?"":"none"}function Refresh_List(){var e=GetIBC_IsLogin();StreamingStatusIsLogin!=e?CloseWindow():"151"==ScheduleType||"152"==ScheduleType||"153"==ScheduleType?window.leftcont.location.href="StreamingSchedule.aspx?Type="+ScheduleType:"161"==ScheduleType?window.leftcont.location.href="StreamingSchedule.aspx?Type=161":window.leftcont.location.href="StreamingSchedule.aspx?Type=1",StreamingStatusIsLogin=e}function AutoRefreshLoginCheckin(){var e=GetIBC_IsLogin();if(StreamingStatusIsLogin!=e&&"4200800"!=SiteID||StreamingStatusIsLogin!=e&&"4200800"==SiteID&&"161"!=ScheduleType)e||(alert(err_mainWindowClosed),null!=fFrame&&fFrame.IsCssControl?window.FrameValidation.location.href=ImgServURL+TVImagePath:window.FrameValidation.location.href=ImgServURL+SkinPath+"images/tv_image.jpg",window.opener=null,window.open("","_self"),window.close());else{var n=document.getElementById("containerleft");if(null!=n&&"block"==n.style.display){var t=document.getElementById("leftcont");null!=t&&document.getElementById("leftcont").contentWindow.location.reload(!0)}}StreamingStatusIsLogin=e}function GetIBC_IsLogin(){try{return mainWindowIsClosed()?!1:window.opener.IsLogin||window.opener.IsUserStreaming}catch(e){return!1}}function mainWindowIsClosed(){return null==window.opener||window.opener.closed}function swapHorseStreaming(e,n,t){"2"!=CurrentHorseChannelID&&"3"!=CurrentHorseChannelID?isHorseStreaming&&CurrentHorseChannelID!=e&&SetLoadVideoLocation("9999","3",e,n,t):!isHorseStreaming||CurrentLeagueID==n&&CurrentRaceNumber==t||SetLoadVideoLocation("9999","3",e,n,t)}function hTVbuttonTimmerCheck(){return 0==hTVbuttonPush?(hTVbuttonPush=!0,setTimeout(function(){1==hTVbuttonPush&&(hTVbuttonPush=!1)},5e3),!0):!1}function OpenHorseStreaming(){if(CloseTVBox(),hTVbuttonTimmerCheck()){var e=document.getElementById("HorseChannelID");null!=e&&openRacingStreaming("151")}}function hTV_euroButtonTimmerCheck(){return 0==hTV_euroButtonPush?(hTV_euroButtonPush=!0,setTimeout(function(){1==hTV_euroButtonPush&&(hTV_euroButtonPush=!1)},5e3),!0):!1}function EuroOpenGreyhoundsStreaming(){if(CloseTVBox(),GreyTV_ButtonTimmerCheck()){var e=document.getElementById("HorseChannelID");null!=e&&("5"==e.value?EuroOpenRacingStreaming("152"):null==fFrame.StreamingFrame||fFrame.StreamingFrame.closed?(fFrame.StreamingFrame=fFrame.window.open("../StreamingFrame.aspx","StreamingFrame","top=20,left=20,height=680,width=810,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"),setTimeout("fFrame.StreamingFrame.ShowGreyhoundsContainer()",1e3),setTimeout("EuroSwitchGreyhoundsStreaming()",1500)):EuroSwitchGreyhoundsStreaming())}}function EuroOpenHorseStreaming(){if(CloseTVBox(),hTVbuttonTimmerCheck()){var e=document.getElementById("HorseChannelID"),n=document.getElementById("RacingLeagueID"),t=document.getElementById("RacingRaceNumber");if(null!=e){var i="3";null==window.top.StreamingFrame||window.top.StreamingFrame.closed?window.top.StreamingFrame=window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc="+i+"&HorseChannelID="+e.value+"&RacingLeagueID="+n.value+"&RacingRaceNumber="+t.value,"StreamingFrame","top=200,left=300,height=485,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no"):(window.top.StreamingFrame.isHorseStreaming=!0,window.top.StreamingFrame.swapHorseStreaming(e,n,t)),window.top.StreamingFrame.focus()}}}function EuroOpenHarnessStreaming(){if(CloseTVBox(),hTVbuttonTimmerCheck()){var e=document.getElementById("HorseChannelID");if(null!=e){var n=e.value,t="3";null==fFrame.StreamingFrame||fFrame.StreamingFrame.closed?fFrame.StreamingFrame=window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc="+t+"&HorseChannelID="+n+"&RacingType=153","StreamingFrame",GetEuroStreamingParameter(n)):(fFrame.StreamingFrame.isHorseStreaming=!0,fFrame.StreamingFrame.swapHorseStreaming(n)),fFrame.StreamingFrame.focus()}}}function GetEuroStreamingParameter(e){var n=525,t=GetEuroStreamingDefaultHeigth(e);if("5"==e)switch(SiteId){case"4200400":n=1055,t=580;break;case"4201400":n=1075,t=580;break;case"4201400":n=1065,t=580}return"top=20,left=20,height="+t+",width="+n+",status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"}function GetEuroStreamingDefaultHeigth(e){return"153"==e?485:520}function ChagneHorseStream(e,n,t){var i=fFrame.LastSelectedSport;$("#HorseChannelID").val(e),$("#RacingLeagueID").val(n),$("#RacingRaceNumber").val(t),null==getStreamingFrameHandle()||getStreamingFrameHandle().closed||("6"==e?getStreamingFrameHandle().CurrentHorseChannelID!=e&&(switchGreyhoundsStreaming(),getStreamingFrameHandle().CurrentHorseChannelID=e):(getStreamingFrameHandle().isHorseStreaming=!0,getStreamingFrameHandle().ScheduleType=i,getStreamingFrameHandle().swapHorseStreaming(e,n,t),getStreamingFrameHandle().ShowHorseRacingSchule(parseInt(i,10))))}function ChagneBingoStream(){null==getStreamingFrameHandle()||getStreamingFrameHandle().closed||(getStreamingFrameHandle().isHorseStreaming=!1,getStreamingFrameHandle().ScheduleType="161",getStreamingFrameHandle().swapBingoStreaming(),getStreamingFrameHandle().ShowNumberGameSchule())}function EuroChagneHorseStream(e,n,t){var i=document.getElementById("HorseChannelID"),a=fFrame.LastSelectedSport;return null==i?void setTimeout("EuroChagneHorseStream('"+e+"','"+n+"','"+t+"')",100):(i.value=e,$("#RacingLeagueID").val(n),$("#RacingRaceNumber").val(t),void(null==StreamingFrame||StreamingFrame.closed||(StreamingFrame.swapHorseStreaming(e,n,t),StreamingFrame.ShowHorseRacingSchule(a))))}function swapBingoStreaming(){SetLoadVideoLocation("9999","5","0","0","0")}function SetLoadVideoLocation(e,n,t,i,a){if(t=t||"0",i=i||"0",a=a||"0",("3"==n&&"5"!=t||"1"==n||"4"==n||"9"==n)&&(document.getElementById("FrameValidation").width=484),"5"==n&&("true"==document.getElementById("bingoMode").value?document.getElementById("FrameValidation").width=978:document.getElementById("FrameValidation").width=484),"2"!=t&&"3"!=t){if(isPlaySuccess&&document.getElementById("Matchid").value==e&&document.getElementById("StreamingSrc").value==n&&document.getElementById("HorseChannelID").value==t)return}else if(document.getElementById("StreamingSrc").value==n&&document.getElementById("HorseChannelID").value==t&&document.getElementById("RacingLeagueID").value==i&&document.getElementById("RacingRaceNumber").value==a)return;bStandalonePlayer="none"!=document.getElementById("containerhead").style.display?!1:!0,""!=e&&GetIBC_IsLogin()||""!=e&&!GetIBC_IsLogin()&&"4200800"==SiteID&&"161"==ScheduleType?null!=document.getElementById("Matchid")&&null!=document.getElementById("StreamingSrc")&&null!=document.getElementById("HorseChannelID")&&(document.getElementById("Matchid").value=e,document.getElementById("StreamingSrc").value=n,document.getElementById("HorseChannelID").value=t,document.getElementById("RacingLeagueID").value=i,document.getElementById("RacingRaceNumber").value=a,document.DataForm.submit(),AdjustSize(bStandalonePlayer)):(null!=fFrame&&fFrame.IsCssControl?window.FrameValidation.location.href=ImgServURL+TVImagePath:window.FrameValidation.location.href=ImgServURL+SkinPath+"images/tv_image.jpg",AdjustSize(bStandalonePlayer))}function getStreamingHtml(e,n,t){return fFrame.CanSeeSportStreaming?0==n?"":1==fFrame.SiteMode?"":t&&fFrame.IsUserStreaming?"<div class='icon displayOn'><span class='tv' onclick=openSingleStreaming("+e+",0)></span></div>":"4200800"==fFrame.SiteId?"<div class='icon displayOn'><span class='tv off' ></span></div>":"4200100"==fFrame.SiteId?"<div class='icon displayOn'><span class='tv off' ></span></div>":fFrame.IsUserStreaming?"<div class='icon displayOn'><span class='tv off' ></span></div>":void 0:""}function OpenStreamingMenu(e){""==document.getElementById("tv"+e).innerHTML&&(document.getElementById("tv"+e).innerHTML=getStreamingMenuHtml(e)),document.getElementById("tv"+e).style.display="block"}function CloseStreamingMenu(e){var n=document.getElementById("cm-nav");if(null!=n){var t=document.getElementById("tv"+e);null!=t&&(t.style.display="none")}}function getStreamingMenuHtml(e){var n=document.getElementById("cm-nav");if(null!=n){var t=n.innerHTML;return t=t.replace(/#L/,"javascript:openSingleStreaming("+e+",0);"),t=t.replace(/#S/,"javascript:openSingleStreaming("+e+",1);")}return""}function getBingoStreamingHtml(){return"4200800"==fFrame.SiteId?"<a id='bTV' href='javascript:openBingoStreaming();'><img border='0' src='"+fFrame.imgServerURL+fFrame.SkinRootPath+"public/images/layout/tv_L.gif' hspace='1' /></a>":(fFrame.IsCssControl,"<div class='icon displayOn'><span class='tv' onclick=openBingoStreaming()></span></div>")}function ReflashSingleStreaming(){if(null!=fFrame.leftFrame){var e=fFrame.leftFrame.document.getElementById("iTV"),n=e.src;e.src="",e.src=n}}function SwitchSingleStreaming(){if(null!=fFrame.leftFrame){var e=fFrame.leftFrame.document.getElementById("iTV"),n=e.src;n=n.substr(n.indexOf("StreamingLV.aspx")),n=n.replace("StreamingLV.aspx?Matchid=",""),n=n.replace("&TVmode=small",""),CloseTVBox(),openSingleStreaming(n,0)}}function SingleTV_ButtonTimmerCheck(){return 0==SingleTV_ButtonPush?(SingleTV_ButtonPush=!0,setTimeout(function(){1==SingleTV_ButtonPush&&(SingleTV_ButtonPush=!1)},5e3),!0):!1}function openSingleStreaming(e,n){openSingleStreamingMain(e,n)}function openSingleStreamingMain(e,n){if(SingleTV_ButtonTimmerCheck())switch(CloseStreamingMenu(e),n){case 0:CloseTVBox();var t=function(n,t){if(null!=n&&!t)try{n.SetLoadVideoLocation(e,"1","0","0","0")}catch(i){}};fFrame.openWindowsHandle("StreamingFrame",!0,"","StreamingFrame.aspx?Matchid="+e,"top=20,left=20,height=520,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes",!1,t);break;case 1:var i=fFrame.getOpenWindowsHandle("StreamingFrame");if(null==i||i.closed||i.CloseWindow(),CloseTVBox(),"show_left"==fFrame.topFrame.document.getElementById("showhideleft").className&&(fFrame.topFrame.SwitchShowHidLeft(),fFrame.topFrame.SwitchLefthideshow()),null!=fFrame.leftFrame){var a=fFrame.leftFrame.document.getElementById("iTV");a.src="StreamingLV.aspx?Matchid="+e+"&TVmode=small"}break;case 2:}}function BingoTV_ButtonTimmerCheck(){return 0==BingoTV_ButtonPush?(BingoTV_ButtonPush=!0,setTimeout(function(){1==BingoTV_ButtonPush&&(BingoTV_ButtonPush=!1)},5e3),!0):!1}function openBingoStreaming(){CloseTVBox(),BingoTV_ButtonTimmerCheck()&&openBingoStreamingMain()}function openBingoStreamingMain(){if(CanOpenStreaming()){CloseTVBox();var e=function(e,n){null!=e&&(e.isHorseStreaming=!1,e.ScheduleType="161",n||(e.ShowNumberGameSchule(),e.swapBingoStreaming()))};fFrame.openWindowsHandle("StreamingFrame",!0,"","StreamingFrame.aspx?Matchid=9999&StreamingSrc=5","top=20,left=20,height=520,width=1030,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no",!1,e)}}function CloseTVBox(){if(null!=fFrame&&null!=fFrame.leftFrame){var e=fFrame.leftFrame.document.getElementById("iTV");null!=e&&(e.src="");var n=fFrame.leftFrame.document.getElementById("TVBox");null!=n&&(n.style.display="none");var t=fFrame.leftFrame.document.getElementById("div_Casino");null!=t&&(t.style.display="")}}function hTVHead_ButtonTimmerCheck(){return 0==hTVHead_ButtonPush?(hTVHead_ButtonPush=!0,setTimeout(function(){1==hTVHead_ButtonPush&&(hTVHead_ButtonPush=!1)},5e3),!0):!1}function openStreaming(e){CloseTVBox(),hTVHead_ButtonTimmerCheck()&&openStreamingMain()}function openStreamingMain(){CloseTVBox();var e=topFrame.document.getElementById("iTV");if(null!=e){e.disabled=!0,e.href="JavaScript:void(0);";var n=function(n,t){null==n||t||(null!=n.document.getElementById("containerhead")&&"none"==n.document.getElementById("containerhead").style.display&&n.StandalonePlayer(),"Chrome"==userBrowser()?n.blur():n.focus()),e.href="JavaScript:fFrame.openStreamingMain();",e.disabled=!1}}fFrame.openWindowsHandle("StreamingFrame",!0,"","StreamingFrame.aspx","top=20,left=20,height=612,width=818,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no",!1,n)}function CloseHorseInfoPopWindow(){try{null!=HorseInfoPopWindow&&HorseInfoPopWindow.open&&(HorseInfoPopWindow.close(),HorseInfoPopWindow=null),(null!=getStreamingFrameHandle()||getStreamingFrameHandle().open)&&(getStreamingFrameHandle().close(),fFrame.windowsHandle.StreamingFrame=null)}catch(e){}}function hTVBingo_ButtonTimmerCheck(){return 0==hTVBingo_ButtonPush?(hTVBingo_ButtonPush=!0,setTimeout(function(){1==hTVBingo_ButtonPush&&(hTVBingo_ButtonPush=!1)},5e3),!0):!1}function OpenNumberGameStreaming(){CloseTVBox(),hTVBingo_ButtonTimmerCheck()&&openBingoStreamingMain()}function GreyTV_ButtonTimmerCheck(){return 0==GreyTV_ButtonPush?(GreyTV_ButtonPush=!0,setTimeout(function(){1==GreyTV_ButtonPush&&(GreyTV_ButtonPush=!1)},5e3),!0):!1}function OpenGreyhoundsStreaming(){if(CloseTVBox(),GreyTV_ButtonTimmerCheck()){fFrame=getParent(window);var e=document.getElementById("HorseChannelID");if(null!=e)if("5"==e.value)openRacingStreaming("152");else if(CanOpenStreaming()){var n=function(e,n){null!=e&&(n?(setTimeout("getStreamingFrameHandle().ShowGreyhoundsContainer();",1e3),setTimeout("switchGreyhoundsStreaming();",1500)):switchGreyhoundsStreaming())};fFrame.openWindowsHandle("StreamingFrame",!0,"","StreamingFrame.aspx","top=20,left=20,height=680,width=825,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes",!1,n)}}}function EuroOpenRacingStreaming(e){var n="3",t=document.getElementById("HorseChannelID"),i=t.value;null==fFrame.StreamingFrame||fFrame.StreamingFrame.closed?(fFrame.StreamingFrame=fFrame.window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc="+n+"&RacingType="+e+"&HorseChannelID="+i,"StreamingFrame",GetEuroStreamingParameter(i)),fFrame.StreamingFrame.isHorseStreaming=!0,fFrame.StreamingFrame.ScheduleType=e):(fFrame.StreamingFrame.isHorseStreaming=!0,fFrame.StreamingFrame.ScheduleType=e,fFrame.StreamingFrame.swapHorseStreaming(i))}function HarnTV_ButtonTimmerCheck(){return 0==HarnTV_ButtonPush?(HarnTV_ButtonPush=!0,setTimeout(function(){1==HarnTV_ButtonPush&&(HarnTV_ButtonPush=!1)},5e3),!0):!1}function OpenHarnessStreaming(){CloseTVBox(),HarnTV_ButtonTimmerCheck()&&openRacingStreaming("153")}function CanOpenStreaming(){return OpenStreamingFlag?!1:(OpenStreamingFlag=!0,"undefined"!=typeof setOpenStreamingTimer&&clearTimeout(setOpenStreamingTimer),setOpenStreamingTimer=setTimeout("ReSetStreamingFlag()",3e3),!0)}function ReSetStreamingFlag(){OpenStreamingFlag=!1}function openRacingStreaming(e){if(CanOpenStreaming()){var n=document.getElementById("HorseChannelID").value,t=document.getElementById("RacingLeagueID").value,i=document.getElementById("RacingRaceNumber").value;fFrame=getParent(window),fFrame.openRacingStreamingMain(e,n,t,i)}}function openRacingStreamingMain(e,n,t,i){var a="3",o=function(a,o){null!=a&&(a.isHorseStreaming=!0,a.ScheduleType=e,o||(a.ShowHorseRacingSchule(e),a.swapHorseStreaming(n,t,i)))};null==fFrame&&(fFrame=getParent(window)),fFrame.openWindowsHandle("StreamingFrame",!0,"","StreamingFrame.aspx?Matchid=9999&StreamingSrc="+a+"&RacingType="+e+"&HorseChannelID="+n+"&RacingLeagueID="+t+"&RacingRaceNumber="+i,"top=20,left=20,height=520,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes",!1,o)}function EuroSwitchGreyhoundsStreaming(){bStandalonePlayer=!1,fFrame.StreamingFrame.document.getElementById("containerhead").style.display="block",fFrame.StreamingFrame.document.getElementById("containerhead").style.visibility="visible",fFrame.StreamingFrame.document.getElementById("containerleft").style.display="",fFrame.StreamingFrame.document.getElementById("containerleft").style.visibility="visible",fFrame.StreamingFrame.document.getElementById("footer").style.display="block",fFrame.StreamingFrame.document.getElementById("footer").style.visibility="visible",null!=fFrame.StreamingFrame.document.getElementById("minimgdiv")&&(fFrame.StreamingFrame.document.getElementById("minimgdiv").style.display="block",fFrame.StreamingFrame.document.getElementById("minimgdiv").style.visibility="visible",fFrame.StreamingFrame.document.getElementById("mintxtdiv").style.display="block",fFrame.StreamingFrame.document.getElementById("mintxtdiv").style.visibility="visible"),null!=fFrame.StreamingFrame.document.getElementById("maximgdiv")&&(fFrame.StreamingFrame.document.getElementById("maximgdiv").style.display="none",fFrame.StreamingFrame.document.getElementById("maximgdiv").style.visibility="hidden",fFrame.StreamingFrame.document.getElementById("maxtxtdiv").style.display="none",fFrame.StreamingFrame.document.getElementById("maxtxtdiv").style.visibility="hidden"),fFrame.StreamingFrame.window.resizeTo(820,760),fFrame.StreamingFrame.window.outerWidth=820,fFrame.StreamingFrame.window.outerHeight=760,fFrame.StreamingFrame.document.getElementById("containerMain").style.width="100%",fFrame.StreamingFrame.document.getElementById("containerMain").style.height="100%",fFrame.StreamingFrame.isHorseStreaming=!1,fFrame.StreamingFrame.ShowGreyhoundsContainer();var e="",n=document.getElementById("Stadium"),t="";null!=n&&(e=n.value),t=fFrame.StreamingFrame.document.getElementById("fgreyhounds").src,fFrame.StreamingFrame.document.getElementById("fgreyhounds").src=t+"&stadium="+e}function switchGreyhoundsStreaming(){bStandalonePlayer=!1,getStreamingFrameHandle().document.getElementById("containerhead").style.display="block",getStreamingFrameHandle().document.getElementById("containerhead").style.visibility="visible",getStreamingFrameHandle().document.getElementById("containerleft").style.display="",getStreamingFrameHandle().document.getElementById("containerleft").style.visibility="visible";var e=getStreamingFrameHandle().document.getElementById("footer");null!=e&&(e.style.display="block",e.style.visibility="visible"),null!=getStreamingFrameHandle().document.getElementById("minimgdiv")&&(getStreamingFrameHandle().document.getElementById("minimgdiv").style.display="block",getStreamingFrameHandle().document.getElementById("minimgdiv").style.visibility="visible",getStreamingFrameHandle().document.getElementById("mintxtdiv").style.display="block",getStreamingFrameHandle().document.getElementById("mintxtdiv").style.visibility="visible"),null!=getStreamingFrameHandle().document.getElementById("maxtxtdiv")&&(getStreamingFrameHandle().document.getElementById("maximgdiv").style.display="none",getStreamingFrameHandle().document.getElementById("maximgdiv").style.visibility="hidden",getStreamingFrameHandle().document.getElementById("maxtxtdiv").style.display="none",getStreamingFrameHandle().document.getElementById("maxtxtdiv").style.visibility="hidden"),getStreamingFrameHandle().window.resizeTo(820,760),getStreamingFrameHandle().window.outerWidth=820,getStreamingFrameHandle().window.outerHeight=760,getStreamingFrameHandle().document.getElementById("containerMain").style.width="100%",getStreamingFrameHandle().document.getElementById("containerMain").style.height="100%",getStreamingFrameHandle().isHorseStreaming=!1,getStreamingFrameHandle().CurrentHorseChannelID="6",getStreamingFrameHandle().ShowGreyhoundsContainer()}function serviceOpenStreaming(){null==fFrame.StreamingFrame||fFrame.StreamingFrame.closed?fFrame.StreamingFrame=fFrame.window.open("../StreamingFrame.aspx","StreamingFrame","top=200,left=300,height=630,width=800,status=no,toolbar=no,menubar=no,resizable=yes,location=no"):630==fFrame.StreamingFrame.height?(fFrame.StreamingFrame.Resize(!1),fFrame.StreamingFrame.focus()):(fFrame.StreamingFrame.close(),fFrame.StreamingFrame=fFrame.window.open("../StreamingFrame.aspx","StreamingFrame","top=200,left=300,height=630,width=800,status=no,toolbar=no,menubar=no,resizable=yes,location=no"))}function openGreyhoundUKStreamingBySchedule(){fFrame=getParent(window),null==fFrame.StreamingFrame||fFrame.StreamingFrame.closed?(fFrame.StreamingFrame=fFrame.window.open("StreamingFrame.aspx","StreamingFrame","top=20,left=20,height=680,width=810,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"),setTimeout("fFrame.StreamingFrame.ShowGreyhoundsContainer()",1e3),setTimeout("switchGreyhoundsStreaming()",1500)):switchGreyhoundsStreaming(),fFrame.StreamingFrame.focus()}function getStreamingFrameHandle(){return fFrame.IsLogin?fFrame.getOpenWindowsHandle("StreamingFrame"):null}var bStandalonePlayer=!1,isReSizeLoading=!1,StreamingStatusIsLogin=GetIBC_IsLogin(),isPlaySuccess=!1,ImgServURL="",CurrentHorseChannelID="",CurrentLeagueID="",CurrentRaceNumber="",fFrame=getParent(window),mainplayer_Width="",mainplayer_Height="",singleplayer_Width="",singleplayer_Height="",OpenStreamingFlag=!1,setOpenStreamingTimer=null,hTVbuttonPush=!1,hTV_euroButtonPush=!1;window.focus();var SingleTV_ButtonPush=!1,BingoTV_ButtonPush=!1,hTVHead_ButtonPush=!1,hTVBingo_ButtonPush=!1,GreyTV_ButtonPush=!1,HarnTV_ButtonPush=!1;