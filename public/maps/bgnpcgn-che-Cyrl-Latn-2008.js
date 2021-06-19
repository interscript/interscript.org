var map = function(Interscript) {Interscript.define_map("bgnpcgn-che-Cyrl-Latn-2008", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "(?<!"+Interscript.aliases.boundary+"’)"+Interscript.aliases.boundary+"Е", "Ye");
s = Interscript.gsub(s, "(?<!"+Interscript.aliases.boundary+"’)"+Interscript.aliases.boundary+"е", "ye");
s = Interscript.gsub(s, "ккх", "qq");
s = Interscript.gsub(s, "ккЪ", "q̇q̇");
s = Interscript.gsub(s, "ККх", "QQ");
s = Interscript.gsub(s, "ККЪ", "Q̇Q̇");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_982015088673458039);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_982015088673458039 = {"1040":{"":"A","1100":{"":"Ä"}},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G","1216":{"":"Ġ"}},"1044":{"":"D"},"1045":{"":"E"},"1025":{"":"Yo"},"1046":{"":"Z̵"},"1047":{"":"Z"},"1048":{"":"I"},"1067":{"":"Y"},"1050":{"":"K","1093":{"":"Q"},"1098":{"":"Q̇"},"1216":{"":"Kh"}},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1054":{"":"O","1100":{"":"Ö"}},"1055":{"":"P","1216":{"":"Ph"}},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T","1216":{"":"Th"}},"1059":{"":"U","1100":{"":"Ü"}},"1060":{"":"F"},"1061":{"":"X","1100":{"":"Ẋ"},"1216":{"":"H"}},"1208":{"":"C","1216":{"":"Ċ"}},"1063":{"":"Ç","1216":{"":"Ç̇"}},"1064":{"":"Ş"},"1065":{"":"ŞÇ"},"1066":{"":"’"},"1068":{"":""},"1069":{"":"E"},"1070":{"":"Yu","1100":{"":"Yü"}},"1071":{"":"Ya","1100":{"":"Yä"}},"1216":{"":"J"},"1072":{"":"a","1100":{"":"ä"}},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g","1231":{"":"ġ"}},"1076":{"":"d"},"1077":{"":"e"},"1105":{"":"yo"},"1078":{"":"z̵"},"1079":{"":"z"},"1080":{"":"i"},"1081":{"":"y"},"1082":{"":"k","1093":{"":"q"},"1098":{"":"q̇"},"1231":{"":"kh"}},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1086":{"":"o","1100":{"":"ö"}},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t","1231":{"":"th"}},"1091":{"":"u","1100":{"":"ü"}},"1092":{"":"f"},"1093":{"":"x","1100":{"":"ẋ"},"1231":{"":"h"}},"1209":{"":"c","1231":{"":"с̇"}},"1095":{"":"ç","1231":{"":"cç̇"}},"1096":{"":"ş"},"1097":{"":"şç"},"1098":{"":"’"},"1099":{"":"y"},"1100":{"":""},"1101":{"":"e"},"1102":{"":"yü"},"1103":{"":"yä"},"1231":{"":"j"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }