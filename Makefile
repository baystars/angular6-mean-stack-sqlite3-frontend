IP=`/sbin/ifconfig | grep 'inet' | head -1 | cut -d ':' -f 2 | cut -d ' ' -f 1`

run: serve-network-dev

serve:
	ng serve --live-reload true

serve-open:
	ng serve --open

serve-network:
	ng serve --host $(IP) --port 4200 --live-reload true

serve-network-dev:
	ng serve --host $(IP) --port 4200 --live-reload true --configuration=dev

install:
	npm i

clean:
	rm -fr node_modules

add:
	git add .

commit: add
	git commit -m 'modify'

push: commit
	git push -u origin master
