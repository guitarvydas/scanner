LIBSRC=0D/odin/std
ODIN_FLAGS ?= -debug -o:none
D2J=0d/das2json/das2json

run: scanner transpile.drawio.json
	./scanner main scanner.drawio $(LIBSRC)/transpile.drawio

scanner: scanner.drawio.json
	odin build . $(ODIN_FLAGS)

scanner.drawio.json: scanner.drawio transpile.drawio.json
	$(D2J) scanner.drawio

transpile.drawio.json: $(LIBSRC)/transpile.drawio
	$(D2J) $(LIBSRC)/transpile.drawio

clean:
	rm -rf scanner scanner.dSYM *~ *.json