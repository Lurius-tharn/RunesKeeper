
$str = (Get-NetIpAddress -addressFamily Ipv4 -InterfaceAlias WI-FI).IPAddress
"export const IP_ADRESS = '$str'"  | Out-File -FilePath ./config/config.js  -Encoding utf8
