_ = {
    nameStack: [],
    counter: 0,
    inventSymbolIndex : function (s) {
	let index = _.counter;
	_.nameStack.push (index);
	_.counter += 1;
	return "";
    },
    topSymbolIndex : function () {
	return _.nameStack [_.nameStack.length - 1];
    },
    killSymbolIndex : function () {
	_.nameStack.pop ();
	return "";
    },
}
,
