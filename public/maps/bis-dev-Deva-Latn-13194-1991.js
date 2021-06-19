var map = function(Interscript) {Interscript.define_map("bis-dev-Deva-Latn-13194-1991", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "ं(?=[कखगघङ])", "ṅ");
s = Interscript.gsub(s, "ं(?=[चछजझञ])", "ñ");
s = Interscript.gsub(s, "ं(?=[टठडढण])", "ṇ");
s = Interscript.gsub(s, "ं(?=[तथदधन])", "n");
s = Interscript.gsub(s, "ं(?=[पफबभम])", "m");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_1212928673390016889);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_1212928673390016889 = {"2309":{"":"a"},"2310":{"":"ā"},"2311":{"":"i"},"2312":{"":"ī"},"2313":{"":"u"},"2314":{"":"ū"},"2315":{"":"ṛ"},"2400":{"":"ṝ"},"2316":{"":"ḻ"},"2401":{"":"ḹ"},"2319":{"":"ē"},"2320":{"":"ai"},"2317":{"":"ê"},"2322":{"":"o"},"2323":{"":"ŏ"},"2324":{"":"au"},"2321":{"":"ô"},"2325":{"":"k"},"2326":{"":"kh"},"2327":{"":"g"},"2328":{"":"gh"},"2329":{"":"ṅ"},"2330":{"":"c"},"2331":{"":"ch"},"2332":{"":"j"},"2333":{"":"jh"},"2334":{"":"ñ"},"2335":{"":"ṭ"},"2336":{"":"ṭh"},"2337":{"":"ḍ"},"2338":{"":"ḍh"},"2339":{"":"ṇ"},"2340":{"":"t"},"2341":{"":"th"},"2342":{"":"d"},"2343":{"":"dh"},"2344":{"":"n"},"2345":{"":"ṉ"},"2346":{"":"p"},"2347":{"":"ph"},"2348":{"":"b"},"2349":{"":"bh"},"2350":{"":"m"},"2351":{"":"y"},"2399":{"":"ẏ"},"2352":{"":"r"},"2353":{"":"ṟ"},"2354":{"":"l"},"2355":{"":"ḷ"},"2356":{"":"ẕ"},"2357":{"":"v"},"2358":{"":"ś"},"2359":{"":"ṣ"},"2360":{"":"s"},"2361":{"":"h"},"2392":{"":"q"},"2393":{"":"ḵẖ"},"2394":{"":"gẖ"},"2395":{"":"z"},"2396":{"":"d̂"},"2397":{"":"d̂h"},"2398":{"":"f"},"2305":{"":"m"},"2307":{"32":{"":"ḥ"}},"2306":{"":"ṃ"},"2366":{"":"ā"},"2367":{"":"i"},"2368":{"":"ī"},"2369":{"":"u"},"2370":{"":"ū"},"2371":{"":"ṛ"},"2374":{"":"e"},"2375":{"":"ē"},"2376":{"":"ai"},"2373":{"":"ê"},"2378":{"":"o"},"2379":{"":"ō"},"2380":{"":"au"},"2377":{"":"ô"},"2381":{"":""},"2364":{"":""},"2404":{"":"."},"8205":{"":""}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }