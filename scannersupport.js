_ = {
    nameStack: [],
    counter: 0,
    inventSymbolName : function () {
	let name = `sym_${_.counter}`;
	_.nameStack.push (name);
	_.counter += 1;
	return "";
    },
    symbolName : function () {
	return _.nameStack [_.nameStack.length - 1];
    },
    killSymbolName : function () {
	_.nameStack.pop ();
	return "";
    },
}
,
