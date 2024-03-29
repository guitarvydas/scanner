LIBSRC=0D/odin/std
ODIN_FLAGS ?= -debug -o:none
D2J=0d/das2json/das2json

all: dev-html

dev-html: clean scanner transpile.drawio.json
	./scanner html.js main scanner.drawio $(LIBSRC)/transpile.drawio

dev-unicode: clean scanner transpile.drawio.json
	./scanner unicode.js main scanner.drawio $(LIBSRC)/transpile.drawio

dev-small: clean scanner transpile.drawio.json
	./scanner test.js main scanner.drawio $(LIBSRC)/transpile.drawio

dev: clean run

run: scanner transpile.drawio.json
	./scanner plain.js main scanner.drawio $(LIBSRC)/transpile.drawio

scanner: scanner.drawio.json
	odin build . $(ODIN_FLAGS)

scanner.drawio.json: scanner.drawio transpile.drawio.json
	$(D2J) scanner.drawio

transpile.drawio.json: $(LIBSRC)/transpile.drawio
	$(D2J) $(LIBSRC)/transpile.drawio

clean:
	rm -rf scanner scanner.dSYM *~ *.json
