// Created by iWeb 3.0.3 local-build-20120507

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Online-tool_files/Freestyle_01.png'),IWCreateImage('Online-tool_files/Freestyle_02.png'),IWCreateImage('Online-tool_files/Freestyle_03.png'),IWCreateImage('Online-tool_files/Freestyle_06.png'),IWCreateImage('Online-tool_files/Freestyle_09.png'),IWCreateImage('Online-tool_files/Freestyle_08.png'),IWCreateImage('Online-tool_files/Freestyle_07.png'),IWCreateImage('Online-tool_files/Freestyle_04.png')],null,2,0.800000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Online-tool_files/Online-toolMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
