curl -s -c cookies.txt https://megapizza.cz/modrany
curl -s -b cookies.txt https://megapizza.cz/ -o Homepage.html

node parser.js