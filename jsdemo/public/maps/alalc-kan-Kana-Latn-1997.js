var map = function(Interscript) {Interscript.define_map("alalc-kan-Kana-Latn-1997", function(Interscript, map) {
map.dependencies = [];
map.aliases.kana_chars_1 = "ಾ";
map.aliases_re.kana_chars_1 = "[ಾಿೀುೂೃೆೇೈೊೋೌ್]";
map.stages.main = function(s) {
s = Interscript.gsub(s, "ಕ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "k");
s = Interscript.gsub(s, "ಖ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "kh");
s = Interscript.gsub(s, "ಗ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "g");
s = Interscript.gsub(s, "ಘ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "gh");
s = Interscript.gsub(s, "ಙ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṅ");
s = Interscript.gsub(s, "ಚ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "c");
s = Interscript.gsub(s, "ಛ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ch");
s = Interscript.gsub(s, "ಜ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "j");
s = Interscript.gsub(s, "ಝ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "jh");
s = Interscript.gsub(s, "ಞ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ñ");
s = Interscript.gsub(s, "ಟ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṭ");
s = Interscript.gsub(s, "ಠ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṭh");
s = Interscript.gsub(s, "ಡ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ḍ");
s = Interscript.gsub(s, "ಢ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ḍh");
s = Interscript.gsub(s, "ಣ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṇ");
s = Interscript.gsub(s, "ತ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "t");
s = Interscript.gsub(s, "ಥ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "th");
s = Interscript.gsub(s, "ದ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "d");
s = Interscript.gsub(s, "ಧ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "dh");
s = Interscript.gsub(s, "ನ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "n");
s = Interscript.gsub(s, "ಪ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "p");
s = Interscript.gsub(s, "ಫ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ph");
s = Interscript.gsub(s, "ಬ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "b");
s = Interscript.gsub(s, "ಭ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "bh");
s = Interscript.gsub(s, "ಮ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "m");
s = Interscript.gsub(s, "ಯ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "y");
s = Interscript.gsub(s, "ರ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "r");
s = Interscript.gsub(s, "ಱ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṟ");
s = Interscript.gsub(s, "ಲ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "l");
s = Interscript.gsub(s, "ಳ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ḷ");
s = Interscript.gsub(s, "ೞ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "l̤");
s = Interscript.gsub(s, "ವ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "v");
s = Interscript.gsub(s, "ಶ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ś");
s = Interscript.gsub(s, "ಷ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "ṣ");
s = Interscript.gsub(s, "ಸ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "s");
s = Interscript.gsub(s, "ಹ(?="+Interscript.get_alias_re("alalc-kan-Kana-Latn-1997", "kana_chars_1")+")", "h");
s = Interscript.gsub(s, "ಂ(?=[ಕಖಗಘಙ])", "ṅ");
s = Interscript.gsub(s, "ಂ(?=[ಚಛಜಝಞ])", "ñ");
s = Interscript.gsub(s, "ಂ(?=[ಟಠಡಢಣ])", "ṇ");
s = Interscript.gsub(s, "ಂ(?=[ತಥದಧನ])", "n");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_1311084287822906201);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_1311084287822906201 = {"3205":{"":"a"},"3206":{"":"ā"},"3207":{"":"i"},"3208":{"":"ī"},"3209":{"":"u"},"3210":{"":"ū"},"3211":{"":"ṛ"},"3296":{"":"ṝ"},"3212":{"":"ḻ"},"3214":{"":"e"},"3215":{"":"ē"},"3216":{"":"ai"},"3218":{"":"o"},"3219":{"":"ō"},"3220":{"":"au"},"3221":{"":"ka"},"3222":{"":"kha"},"3223":{"":"ga"},"3224":{"":"gha"},"3225":{"":"ṅa"},"3226":{"":"ca"},"3227":{"":"cha"},"3228":{"":"ja"},"3229":{"":"jha"},"3230":{"":"ña"},"3231":{"":"ṭa"},"3232":{"":"ṭha"},"3233":{"":"ḍa"},"3234":{"":"ḍha"},"3235":{"":"ṇa"},"3236":{"":"ta"},"3237":{"":"tha"},"3238":{"":"da"},"3239":{"":"dha"},"3240":{"":"na"},"3242":{"":"pa"},"3243":{"":"pha"},"3244":{"":"ba"},"3245":{"":"bha"},"3246":{"":"ma"},"3247":{"":"ya"},"3248":{"":"ra"},"3249":{"":"ṟa"},"3250":{"":"la"},"3251":{"":"ḷa"},"3294":{"":"l̤a"},"3253":{"":"va"},"3254":{"":"śa"},"3255":{"":"ṣa"},"3256":{"":"sa"},"3257":{"":"ha"},"3203":{"":"ḥ"},"3202":{"":"ṃ"},"3260":{"":""},"3262":{"":"ā"},"3263":{"":"i"},"3264":{"":"ī"},"3265":{"":"u"},"3266":{"":"ū"},"3267":{"":"ṛ"},"3268":{"":"ṝ"},"3298":{"":"ḻ"},"3270":{"":"e"},"3271":{"":"ē"},"3272":{"":"ai"},"3274":{"":"o"},"3275":{"":"ō"},"3276":{"":"au"},"2381":{"":""},"2364":{"":""},"3277":{"":""},"8205":{"":""},"8204":{"":""},"3302":{"":"0"},"3303":{"":"1"},"3304":{"":"2"},"3305":{"":"3"},"3306":{"":"4"},"3307":{"":"5"},"3308":{"":"6"},"3309":{"":"7"},"3310":{"":"8"},"3311":{"":"9"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }