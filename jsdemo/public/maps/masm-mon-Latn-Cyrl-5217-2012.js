var map = function(Interscript) {Interscript.define_map("masm-mon-Latn-Cyrl-5217-2012", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "ii", "ий");
s = Interscript.gsub(s, "Ii", "Ий");
s = Interscript.gsub(s, "ai", "ай");
s = Interscript.gsub(s, "Ai", "Ай");
s = Interscript.gsub(s, "ei", "эй");
s = Interscript.gsub(s, "Ei", "Эй");
s = Interscript.gsub(s, "oi", "ой");
s = Interscript.gsub(s, "Oi", "Ой");
s = Interscript.gsub(s, "üi", "үй");
s = Interscript.gsub(s, "Üi", "Үй");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_1630437089538812579);
return s;
};
map.cache.PTREE_1630437089538812579 = {"65":{"":"А"},"66":{"":"Б"},"86":{"":"В"},"71":{"":"Г"},"68":{"":"Д"},"89":{"101":{"":"Е"},"111":{"":"Ё"},"":"Ы","117":{"":"Ю"},"97":{"":"Я"}},"74":{"":"Ж"},"90":{"":"З"},"73":{"":"И"},"75":{"":"К","104":{"":"Х"}},"76":{"":"Л"},"77":{"":"М"},"78":{"":"Н"},"79":{"":"О"},"214":{"":"Ө"},"80":{"":"П"},"82":{"":"Р"},"83":{"":"С","104":{"":"Ш"}},"84":{"":"Т","115":{"":"Ц"}},"85":{"":"У"},"220":{"":"Ү"},"70":{"":"Ф"},"67":{"104":{"":"Ч"}},"69":{"":"Э"},"97":{"":"а"},"98":{"":"б"},"118":{"":"в"},"103":{"":"г"},"100":{"":"д"},"121":{"101":{"":"е"},"111":{"":"ё"},"":"ы","117":{"":"ю"},"97":{"":"я"}},"106":{"":"ж"},"122":{"":"з"},"105":{"":"и"},"107":{"":"к","104":{"":"х"}},"108":{"":"л"},"109":{"":"м"},"110":{"":"н"},"111":{"":"о"},"246":{"":"ө"},"112":{"":"п"},"114":{"":"р"},"115":{"":"с","104":{"":"ш"}},"116":{"":"т","115":{"":"ц"}},"117":{"":"у"},"252":{"":"ү"},"102":{"":"ф"},"99":{"104":{"":"ч"}},"101":{"":"э"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }