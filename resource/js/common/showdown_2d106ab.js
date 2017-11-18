function validate(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",n={valid:!0,error:""};showdown.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var s=t+" sub-extension "+o+": ",i=e[o];if("object"!=typeof i)return n.valid=!1,n.error=s+"must be an object, but "+typeof i+" given",n;if(!showdown.helper.isString(i.type))return n.valid=!1,n.error=s+'property "type" must be a string, but '+typeof i.type+" given",n;var a=i.type=i.type.toLowerCase();if("language"===a&&(a=i.type="lang"),"html"===a&&(a=i.type="output"),"lang"!==a&&"output"!==a&&"listener"!==a)return n.valid=!1,n.error=s+"type "+a+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',n;if("listener"===a){if(showdown.helper.isUndefined(i.listeners))return n.valid=!1,n.error=s+'. Extensions of type "listener" must have a property called "listeners"',n}else if(showdown.helper.isUndefined(i.filter)&&showdown.helper.isUndefined(i.regex))return n.valid=!1,n.error=s+a+' extensions must define either a "regex" property or a "filter" method',n;if(i.listeners){if("object"!=typeof i.listeners)return n.valid=!1,n.error=s+'"listeners" property must be an object but '+typeof i.listeners+" given",n;for(var l in i.listeners)if(i.listeners.hasOwnProperty(l)&&"function"!=typeof i.listeners[l])return n.valid=!1,n.error=s+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof i.listeners[l]+" given",n}if(i.filter){if("function"!=typeof i.filter)return n.valid=!1,n.error=s+'"filter" must be a function, but '+typeof i.filter+" given",n}else if(i.regex){if(showdown.helper.isString(i.regex)&&(i.regex=new RegExp(i.regex,"g")),!(i.regex instanceof RegExp))return n.valid=!1,n.error=s+'"regex" property must either be a string or a RegExp object, but '+typeof i.regex+" given",n;if(showdown.helper.isUndefined(i.replace))return n.valid=!1,n.error=s+'"regex" extensions must implement a replace string or function',n}}return n}var showdown={},parsers={},extensions={},globalOptions=getDefaultOpts(!0),setFlavor="vanilla",flavor={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:getDefaultOpts(!0),allOn:allOptionsOn()};showdown.helper={},showdown.extensions={},showdown.setOption=function(e,r){"use strict";return globalOptions[e]=r,this},showdown.getOption=function(e){"use strict";return globalOptions[e]},showdown.getOptions=function(){"use strict";return globalOptions},showdown.resetOptions=function(){"use strict";globalOptions=getDefaultOpts(!0)},showdown.setFlavor=function(e){"use strict";if(!flavor.hasOwnProperty(e))throw Error(e+" flavor was not found");showdown.resetOptions();var r=flavor[e];setFlavor=e;for(var t in r)r.hasOwnProperty(t)&&(globalOptions[t]=r[t])},showdown.getFlavor=function(){"use strict";return setFlavor},showdown.getFlavorOptions=function(e){"use strict";return flavor.hasOwnProperty(e)?flavor[e]:void 0},showdown.getDefaultOptions=function(e){"use strict";return getDefaultOpts(e)},showdown.subParser=function(e,r){"use strict";if(showdown.helper.isString(e)){if("undefined"==typeof r){if(parsers.hasOwnProperty(e))return parsers[e];throw Error("SubParser named "+e+" not registered!")}parsers[e]=r}},showdown.extension=function(e,r){"use strict";if(!showdown.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=showdown.helper.stdExtName(e),showdown.helper.isUndefined(r)){if(!extensions.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return extensions[e]}"function"==typeof r&&(r=r()),showdown.helper.isArray(r)||(r=[r]);var t=validate(r,e);if(!t.valid)throw Error(t.error);extensions[e]=r},showdown.getAllExtensions=function(){"use strict";return extensions},showdown.removeExtension=function(e){"use strict";delete extensions[e]},showdown.resetExtensions=function(){"use strict";extensions={}},showdown.validateExtension=function(e){"use strict";var r=validate(e,null);return r.valid?!0:(console.warn(r.error),!1)};