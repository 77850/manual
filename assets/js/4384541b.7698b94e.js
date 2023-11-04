"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[8730],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6357:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0},a="Overview",s={unversionedId:"profile-format/overview",id:"profile-format/overview",title:"Overview",description:"Surfboard follow Surge's profile format",source:"@site/docs/profile-format/overview.md",sourceDirName:"profile-format",slug:"/profile-format/overview",permalink:"/docs/profile-format/overview",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"How to use this app",permalink:"/docs/how_to_use_this_app"},next:{title:"// Comment",permalink:"/docs/profile-format/comment"}},l={},c=[],p={toc:c};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Surfboard follow ",(0,o.kt)("a",{parentName:"p",href:"https://nssurge.com/"},"Surge"),"'s profile format"),(0,o.kt)("p",{parentName:"admonition"},"Surge's profile documentation can be viewed ",(0,o.kt)("a",{parentName:"p",href:"https://manual.nssurge.com/"},"here"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true # subscribe profile url and auto update config\n[General]\n# Specify dns server used by application\ndns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953\n\n# Specify doh server used by application\ndoh-server = https://9.9.9.9/dns-query\n\n# Specify route rule and domain rule, matching traffic will not be redirected or rejected.\nskip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com //444\n\n# Test url used by url-test and manually node speed test. Redirect proxy will use this url.\nproxy-test-url = http://www.gstatic.com/generate_204\n\n# Test url used by url-test and manually node speed test. Direct proxy will use this url.\ninternet-test-url = http://www.gstatic.cn/generate_204\n\n# Timeout for all connectivity test\ntest-timeout = 5\n\n# Match domain won't get fake ip dns response\nalways-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com\n\n# Establish a http proxy server on your device and provide proxy service in specified ip\nhttp-listen = 0.0.0.0:1234\n\n# Establish a socks5 proxy server on your device and provide proxy service in specified ip\nsocks5-listen = 127.0.0.1:1235\n\n# If proxy not support udp relay, use DIRECT or REJECT instead\nudp-policy-not-supported-behaviour = DIRECT\n\n[Host]\n# map 'abc.com' to '1.2.3.4'\nabc.com = 1.2.3.4\n\n# map any domain end with '.dev' to '6.7.8.9'\n*.dev = 6.7.8.9\n\n# alias 'bar.com' dns query result to 'foo.com'\nfoo.com = bar.com\n\n# assign '8.8.8.8' as dns server for 'bar.com'\nbar.com = server:8.8.8.8\n\n[Proxy]\n# build in policy\nOn = direct\nOff = reject\n\n# http proxy\nProxyHTTP = http, 1.2.3.4, 443, username, password\n\n# https proxy\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\n\n# socks5 proxy\nProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false\n\n# socks5 over tls proxy\nProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\n\n# shadowsocks proxy, simple-obfs supported\nProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/\n\n# vmess proxy, tls and websocket supported, pure tcp is not supported\nProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true\n\n# trojan proxy, trojan grpc is not supported\nProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com\n\n# wireguard proxy\nProxyWireguard = wireguard, section-name = HomeServer\n\n[WireGuard HomeServer]\nprivate-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=\nself-ip = 10.0.2.2\ndns-server = 8.8.8.8\nmtu = 1280\npeer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820)\n\n[Proxy Group]\n# proxy group whose selected proxy can be changed manually\nSelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT\n\n# proxy group whose selected proxy can be decided based on url test result automatically\nAutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true\n\n# proxy group with a external proxies list url\nExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*\nAutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt\n\n# proxy group which contains all proxy under [Proxy] section\nAllProxies = select, include-all-proxies = true\n\n# proxy group which contains all proxy from other group by name\nIncludeOtherGroup = select, include-other-group = \"SelectGroup, ExternalGroup\", policy-regex-filter=Proxy.*\n\n# proxy group whose selection is chosen randomly\nLoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS\n\n# proxy group just like url-test but follow 'first come first served' rule\nFallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5\n\n[Rule]\n# domain exact match 'www.apple.com' will be redirected to proxy named 'ProxyHTTP' in [Proxy] section \nDOMAIN,www.apple.com,ProxyHTTP\n\n# domain exact match 'www.google.com' will be redirected to proxy group named 'SelectGroup' in [Proxy Group] section\nDOMAIN,www.google.com,SelectGroup\n\n# domain ends with 'apple.com' will be redirected to 'Proxy', DNS query of this domain will triggered in the remote proxy\nDOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns\n\n# domain contains 'google' keyword will be redirected to 'Proxy', a fake ip will be returned in DNS query\nDOMAIN-KEYWORD,google,Proxy,enhanced-mode\n\n# destination ip match route '192.168.0.0/16' will be sent directly\nIP-CIDR,192.168.0.0/16,DIRECT\n\n# destination ip located in United State will be rejected\nGEOIP,US,REJECT\n\n# traffic sent by application whose package name is 'com.android.vending' will be sent to 'Proxy'\nPROCESS-NAME,com.android.vending,Proxy  # android package name\nPROCESS-NAME,*google*,Proxy             # android package name wildcard rule\n\n# traffic match external rules defined in 'https://ruleset.com/cn' will be sent to 'ProxyVMess'\nRULE-SET,https://ruleset.com/cn,ProxyVMess\n\n# traffic match external domain rules defined in 'https://domainset.com/ad' will be rejected'\nDOMAIN-SET,https://domainset.com/ad,REJECT\n\n# traffic sent using wifi whose ssid name is 'CMCC' will be rejected\nSUBNET,SSID:CMCC,REJECT\n\n# traffic sent using wifi whose bssid is 'F4-98-A0-73-3A-5B' will be sent directly\nSUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT\n\n# traffic sent through a router whose ip is '192.168.1.1' will be sent directly\nSUBNET,ROUTER:192.168.1.1,DIRECT\n\n# traffic sent using wifi will be sent directly\nSUBNET,TYPE:WIFI,DIRECT\n\n# traffic sent using wired network will be sent directly\nSUBNET,TYPE:WIRED,DIRECT\n\n# traffic sent using mobile network will be sent through 'SelectGroup'\nSUBNET,TYPE:CELLULAR,SelectGroup\n\n# traffic sent using mobile network whose MCC is 100 and MNC is 200, will be sent directly\nSUBNET,MCCMNC:100-200,DIRECT\n\n# traffic doesn't match rules above will be sent to 'ProxyTrojan'\nFINAL,ProxyTrojan\n\n[Panel]\nPanelA = title=\"Panel Title\", content=\"Panel Content\\nSecondLine\", style=info\n")),(0,o.kt)("p",null,"You can read on for detailed definitions of different sections"))}d.isMDXComponent=!0}}]);