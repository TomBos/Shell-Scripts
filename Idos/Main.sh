read -rp "Enter Starting Point: " start && read -rp "Enter Ending Point: " end

curl 'https://idos.cz/vlakyautobusymhdvse/spojeni/' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'origin: https://idos.cz' \
  -H 'pragma: no-cache' \
  -H 'priority: u=0, i' \
  -H 'referer: https://idos.cz/vlakyautobusymhdvse/spojeni/' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  --data-raw "From=$start&FromHidden=$start%251%258819&positionACPosition=50.06822604817706%2514.455422160156262&To=$end&ToHidden=$end%251%2511126&positionACPosition=&AdvancedForm.Via%5B0%5D=&AdvancedForm.ViaHidden%5B0%5D=&Date=&Time=&IsArr=False" \
  > "Search-$start-$end.tmp"