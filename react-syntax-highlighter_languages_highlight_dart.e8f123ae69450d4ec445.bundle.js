(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1352:function(e,n){e.exports=function(e){var n={className:"subst",variants:[{begin:"\\${",end:"}"},{begin:"\\$[A-Za-z0-9_]+"}],keywords:"true false null this is new super"},t={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE,n]},{begin:'"""',end:'"""',contains:[e.BACKSLASH_ESCAPE,n]},{begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,n]},{begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,n]}]};n.contains=[e.C_NUMBER_MODE,t];return{keywords:{keyword:"assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef",built_in:"print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"},contains:[t,e.COMMENT("/\\*\\*","\\*/",{subLanguage:"markdown"}),e.COMMENT("///","$",{subLanguage:"markdown"}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:"{",excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}}}]);