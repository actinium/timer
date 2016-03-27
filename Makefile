.PHONY: publish
publish: index.html timer.css timer.js
	@git checkout gh-pages
	@git checkout master -- index.html timer.css timer.js
	@git commit -m "Update gh-pages."
	@git push
	@git checkout master
