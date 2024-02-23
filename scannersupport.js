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
    symbolTableAsString : function () {
	s = "";
	Object.keys (_.symbolTable).forEach (function (k) {
	    s += `\n{"symbol" : "${k}", "id" : ${_.symbolTable [k]}},`;});
	return s;
    }
}
,
