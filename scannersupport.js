_ = {
    nameStack: [],
    counter: 0,
    symbolTable :{},
    inventSymbolIndex : function (s) {
	let index = _.symbolTable [s];
	if (index == undefined) {
	    index = _.counter;
	    _.symbolTable [s] = index;
	    _.counter += 1;
	}
	_.nameStack.push (index);
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
