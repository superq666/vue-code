
var vm = new Vue({
  		el:"#itany",
  		data:{
        "entries": [{
          "startedDateTime": "2018-08-15T01:48:08.356Z",
          "time": 5443.490614975977,
          "request": {
            "method": "GET",
            'url':"https://testpool.yhlsoft.com/home/apps?device_changed",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":method",
              "value": "GET"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":path",
              "value": "/home/apps?device_changed"
            }, {
              "name": "cache-control",
              "value": "max-age=0"
            }, {
              "name": "upgrade-insecure-requests",
              "value": "1"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738642%3BbcxMR3dQDe9rl5cTfE6Eyi2qoln4XiykmbDPwNkc_1M%3D"
            }, {
              "name": "if-none-match",
              "value": "W/\"7c6934fbdc77305548e724f455661a0d\""
            }],
            "queryString": [{
              "name": "device_changed",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738642%3BbcxMR3dQDe9rl5cTfE6Eyi2qoln4XiykmbDPwNkc_1M%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 304,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "status",
              "value": "304"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:09 GMT"
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "x-download-options",
              "value": "noopen"
            }, {
              "name": "x-permitted-cross-domain-policies",
              "value": "none"
            }, {
              "name": "referrer-policy",
              "value": "strict-origin-when-cross-origin"
            }, {
              "name": "etag",
              "value": "W/\"7c6934fbdc77305548e724f455661a0d\""
            }, {
              "name": "cache-control",
              "value": "max-age=0, private, must-revalidate"
            }, {
              "name": "set-cookie",
              "value": "_yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D; path=/; secure; HttpOnly"
            }, {
              "name": "x-request-id",
              "value": "3562f193-49b3-44ef-9d7b-feed85c82b86"
            }, {
              "name": "x-runtime",
              "value": "0.069006"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }],
            "cookies": [{
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D",
              "path": "/",
              "expires": null,
              "httpOnly": true,
              "secure": true
            }],
            "content": {
              "size": 136650,
              "mimeType": "text/html"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 1671
          },
          "cache": {},
          "timings": {
            "blocked": 1.387614999968093,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.44500000000000006,
            "wait": 5430.046999981563,
            "receive": 11.610999994445592,
            "_blocked_queueing": 0.6149999680928886
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.832Z",
          "time": 0.18099998123943806,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/cssnormalize/cssnormalize-min.css&3.14.1/cssfonts/cssfonts-min.css&3.14.1/cssgrids/cssgrids-min.css",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "3.14.1/cssnormalize/cssnormalize-min.css",
              "value": ""
            }, {
              "name": "3.14.1/cssfonts/cssfonts-min.css",
              "value": ""
            }, {
              "name": "3.14.1/cssgrids/cssgrids-min.css",
              "value": ""
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "x-runtime",
              "value": "0.004363"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"8ad96c01279ac163c789f53542e346dd\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "628b6ba0-30f0-40ab-a1a2-acebd2a2a37e"
            }],
            "cookies": [],
            "content": {
              "size": 6000,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.15999999595806003,
            "receive": 0.02099998528137803,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.833Z",
          "time": 0.13699999544769526,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/stylesheets/vue_control.css",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 17 Jul 2018 14:28:46 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css"
            }, {
              "name": "content-length",
              "value": "3896"
            }],
            "cookies": [],
            "content": {
              "size": 17052,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.11600001016631722,
            "receive": 0.02099998528137803,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.833Z",
          "time": 0.19300001440569758,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/TreeGrid/Office/Grid.css?ver=07242018",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-17cd6\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css"
            }],
            "cookies": [],
            "content": {
              "size": 97494,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.18100003944709897,
            "receive": 0.011999974958598614,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.834Z",
          "time": 0.07399998139590025,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/application.css?ver=07242018",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 24 Jul 2018 12:21:28 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css"
            }, {
              "name": "content-length",
              "value": "38259"
            }],
            "cookies": [],
            "content": {
              "size": 245786,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.060999998822808266,
            "receive": 0.012999982573091984,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.835Z",
          "time": 0.0879999715834856,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/jquery/jquery-min.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:16 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-16bb3\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 93107,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.07599999662488699,
            "receive": 0.011999974958598614,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.835Z",
          "time": 0.13499998021870852,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/vue/vue.min.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-ea61\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 60001,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.1230000052601099,
            "receive": 0.011999974958598614,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.836Z",
          "time": 0.06399996345862746,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/vue/vue-validator.min.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-1101\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 4353,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.05199998850002885,
            "receive": 0.011999974958598614,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.836Z",
          "time": 0.14999997802078724,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/vue/underscore-min.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-4057\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 16471,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.12799998512491584,
            "receive": 0.0219999928958714,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.836Z",
          "time": 0.09300000965595245,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/vue/common.js?ver=07242018.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 11:48:02 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b72c172-5e1f0\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 385520,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.08299999171867967,
            "receive": 0.010000017937272787,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.837Z",
          "time": 0.08899997919797897,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/vue/yhl-controls.min.js?ver=07242018.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 11:48:02 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b72c172-6a715\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 435989,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.08099997648969293,
            "receive": 0.008000002708286047,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.837Z",
          "time": 0.05100003909319639,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/home/assets/vue_app/init.js?ver=07242018.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 09 Aug 2018 14:23:19 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }, {
              "name": "content-length",
              "value": "779"
            }],
            "cookies": [],
            "content": {
              "size": 779,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.042000028770416975,
            "receive": 0.009000010322779417,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.837Z",
          "time": 0.07300003198906779,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/home/assets/vue_app/vue_comps.js?ver=07242018.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 09 Aug 2018 14:23:19 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 3621,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.062000006437301636,
            "receive": 0.011000025551766157,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.837Z",
          "time": 0.36800000816583633,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?1/yui/yui-min.js&1/simpleyui/simpleyui-min.js&1/gallery-itsaselectlist/gallery-itsaselectlist-min.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [{
              "name": "1/yui/yui-min.js",
              "value": ""
            }, {
              "name": "1/simpleyui/simpleyui-min.js",
              "value": ""
            }, {
              "name": "1/gallery-itsaselectlist/gallery-itsaselectlist-min.js",
              "value": ""
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "x-runtime",
              "value": "0.005190"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"551c6cc81c0c27952a77e582137ddf8b\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "1967c6a6-07d5-455f-b68d-58c395f5b216"
            }],
            "cookies": [],
            "content": {
              "size": 277417,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.354000017978251,
            "receive": 0.013999990187585354,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.838Z",
          "time": 0.08800002979114652,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/TreeGrid/GridE.js",
            "httpVersion": "spdy",
            "headers": [],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-5c878\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 379000,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": -1,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 0.08100003469735384,
            "receive": 0.006999995093792677,
            "_blocked_queueing": -1
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "memory",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.838Z",
          "time": 12451.882459015469,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/application.js?ver=07242018.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/assets/application.js?ver=07242018.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:14 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Fri, 03 Aug 2018 04:16:12 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }, {
              "name": "content-length",
              "value": "121782"
            }],
            "cookies": [],
            "content": {
              "size": 660958,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 122490
          },
          "cache": {},
          "timings": {
            "blocked": 5.01445900005009,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 1.7889999999999997,
            "wait": 6762.265000015639,
            "receive": 5682.81399999978,
            "_blocked_queueing": 1.4590000500902534
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.839Z",
          "time": 12804.23072200123,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/javascripts/Yhl-debug.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/assets/javascripts/Yhl-debug.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:14 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Wed, 24 Jan 2018 12:55:24 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }, {
              "name": "content-length",
              "value": "56521"
            }],
            "cookies": [],
            "content": {
              "size": 216790,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 57084
          },
          "cache": {},
          "timings": {
            "blocked": 5.978722000015434,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 1.1179999999999994,
            "wait": 6761.606000022702,
            "receive": 6035.5279999785125,
            "_blocked_queueing": 1.7220000154338777
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.840Z",
          "time": 8.375538026390132,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/jquery/jstz.main.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:47:46 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"5b62ef74-a956\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 43350,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": 0,
            "_transferSize": 0
          },
          "cache": {},
          "timings": {
            "blocked": 0.15553800001135096,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0,
            "wait": 5.48800000371784,
            "receive": 2.732000022660941,
            "_blocked_queueing": 1.5380000113509595
          },
          "serverIPAddress": "23.20.207.213",
          "_fromCache": "disk",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:13.840Z",
          "time": 13481.152798999276,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/users/show_user_logo?track=0",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/users/show_user_logo?track=0"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "track",
              "value": "0"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:14 GMT"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-transfer-encoding",
              "value": "binary"
            }, {
              "name": "content-disposition",
              "value": "inline; filename=\"blob\""
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "753e74a4-0058-44ab-bc62-8e5daeda0f1c"
            }, {
              "name": "x-runtime",
              "value": "0.076614"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"792c0fef2ba0e5c75a8b13966126404c\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "cache-control",
              "value": "private"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "set-cookie",
              "value": "_yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D; path=/; secure; HttpOnly"
            }],
            "cookies": [{
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "path": "/",
              "expires": null,
              "httpOnly": true,
              "secure": true
            }],
            "content": {
              "size": 110379,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 112270
          },
          "cache": {},
          "timings": {
            "blocked": 3.5417989999982527,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.8270000000000004,
            "wait": 6761.495999992583,
            "receive": 6715.288000006694,
            "_blocked_queueing": 3.798999998252839
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:14.469Z",
          "time": 9778.012661024346,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/home/assets/vue_app/dashboard.js?ver=07242018.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/home/assets/vue_app/dashboard.js?ver=07242018.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "ver",
              "value": "07242018.js"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738659%3BwGoKZGskIXVRfIr67i85WP-yoMO8wCxf32hqU1KnrQQ%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:15 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Thu, 09 Aug 2018 14:23:19 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }],
            "cookies": [],
            "content": {
              "size": 304563,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 90006
          },
          "cache": {},
          "timings": {
            "blocked": 0.7516610000273213,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.21699999999999997,
            "wait": 6139.20700000773,
            "receive": 3637.8370000165887,
            "_blocked_queueing": 0.661000027321279
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.336Z",
          "time": 988.8099320022156,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?1/loader/loader-min.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?1/loader/loader-min.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "1/loader/loader-min.js",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.002582"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"c9fce6d877876cd3a6b81d40127863bb\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "0ac63f5c-f5ee-40da-bfa7-024a3e2670be"
            }],
            "cookies": [],
            "content": {
              "size": 52395,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 16055
          },
          "cache": {},
          "timings": {
            "blocked": 0.8579319999953732,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.2829999999999999,
            "wait": 985.4639999760687,
            "receive": 2.205000026151538,
            "_blocked_queueing": 0.9319999953731894
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.736Z",
          "time": 1342.02584801571,
          "request": {
            "method": "GET",
            "url": "https://assets.zendesk.com/embeddable_framework/main.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 302,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:28 GMT"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b63a0f3-2568d9\""
            }, {
              "name": "status",
              "value": "302"
            }, {
              "name": "content-type",
              "value": "text/html"
            }, {
              "name": "location",
              "value": "https://static.zdassets.com/ekr/asset_composer.js"
            }, {
              "name": "cache-control",
              "value": "max-age=600, public"
            }, {
              "name": "content-length",
              "value": "154"
            }],
            "cookies": [],
            "content": {
              "size": 0,
              "mimeType": "text/html"
            },
            "redirectURL": "https://static.zdassets.com/ekr/asset_composer.js",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 318
          },
          "cache": {},
          "timings": {
            "blocked": 2.3058479999853296,
            "dns": 1.2150000000000003,
            "ssl": 685.212,
            "connect": 824.2130000000001,
            "send": 0.36599999999998545,
            "wait": 511.05200001775097,
            "receive": 2.873999997973442,
            "_blocked_queueing": 1.8479999853298068
          },
          "serverIPAddress": "117.18.237.110",
          "connection": "1067",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.746Z",
          "time": 8402.339579963824,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/images/nav_sprite_big.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/images/nav_sprite_big.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/combo/assets/application.css?ver=07242018"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-3ba9a\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "244378"
            }],
            "cookies": [],
            "content": {
              "size": 244378,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 245058
          },
          "cache": {},
          "timings": {
            "blocked": 2.090579999992624,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.3580000000000001,
            "wait": 745.0220000020676,
            "receive": 7654.868999961764,
            "_blocked_queueing": 0.5799999926239252
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.746Z",
          "time": 11031.70156899991,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/images/nav_sprite.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/images/nav_sprite.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/combo/assets/application.css?ver=07242018"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-24636\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "149046"
            }],
            "cookies": [],
            "content": {
              "size": 149046,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 149627
          },
          "cache": {},
          "timings": {
            "blocked": 1.82856900002528,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.11399999999999988,
            "wait": 1999.7810000230484,
            "receive": 9029.977999976836,
            "_blocked_queueing": 0.56900002527982
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.967Z",
          "time": 8532.937518981751,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/Images/nav_sprite2016.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/Images/nav_sprite2016.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-ac26\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "44070"
            }],
            "cookies": [],
            "content": {
              "size": 44070,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 44532
          },
          "cache": {},
          "timings": {
            "blocked": 0.8515189999938011,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.17300000000000004,
            "wait": 1780.9109999772386,
            "receive": 6751.002000004519,
            "_blocked_queueing": 0.5189999938011169
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:26.967Z",
          "time": 8907.84743999492,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/Images/report_app.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/Images/report_app.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-1f85\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "8069"
            }],
            "cookies": [],
            "content": {
              "size": 8069,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 8485
          },
          "cache": {},
          "timings": {
            "blocked": 0.6704399999743328,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.126,
            "wait": 1781.1450000229254,
            "receive": 7125.905999972019,
            "_blocked_queueing": 0.43999997433274984
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:27.145Z",
          "time": 15044.135503032885,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/Images/nav_sprite.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/Images/nav_sprite.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-24636\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:27 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "149046"
            }],
            "cookies": [],
            "content": {
              "size": 149046,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 149627
          },
          "cache": {},
          "timings": {
            "blocked": 0.4775030000465922,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.134,
            "wait": 1603.7980000214054,
            "receive": 13439.726000011433,
            "_blocked_queueing": 0.5030000465922058
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:27.398Z",
          "time": 2311.212732971413,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/widget-base/assets/skins/sam/widget-base.css&3.14.1/cssbutton/cssbutton-min.css&3.14.1/widget-modality/assets/skins/sam/widget-modality.css&3.14.1/widget-stack/assets/skins/sam/widget-stack.css&3.14.1/panel/assets/skins/sam/panel.css",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/widget-base/assets/skins/sam/widget-base.css&3.14.1/cssbutton/cssbutton-min.css&3.14.1/widget-modality/assets/skins/sam/widget-modality.css&3.14.1/widget-stack/assets/skins/sam/widget-stack.css&3.14.1/panel/assets/skins/sam/panel.css"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "text/css,*/*;q=0.1"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/widget-base/assets/skins/sam/widget-base.css",
              "value": ""
            }, {
              "name": "3.14.1/cssbutton/cssbutton-min.css",
              "value": ""
            }, {
              "name": "3.14.1/widget-modality/assets/skins/sam/widget-modality.css",
              "value": ""
            }, {
              "name": "3.14.1/widget-stack/assets/skins/sam/widget-stack.css",
              "value": ""
            }, {
              "name": "3.14.1/panel/assets/skins/sam/panel.css",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.003071"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:28 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"2461beb28ec7652397d0d0a9b639398f\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "4359e8e6-adbc-4f96-ade2-bc1a142efdf3"
            }],
            "cookies": [],
            "content": {
              "size": 8641,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 2613
          },
          "cache": {},
          "timings": {
            "blocked": 1.0737329999934881,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.21999999999999997,
            "wait": 2307.7339999811425,
            "receive": 2.1849999902769923,
            "_blocked_queueing": 0.7329999934881926
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:28.077Z",
          "time": 1077.0201810040903,
          "request": {
            "method": "GET",
            "url": "https://static.zdassets.com/ekr/asset_composer.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:29 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "cf-cache-status",
              "value": "HIT"
            }, {
              "name": "last-modified",
              "value": "Wed, 08 Aug 2018 14:04:16 GMT"
            }, {
              "name": "server",
              "value": "cloudflare"
            }, {
              "name": "x-amz-request-id",
              "value": "B9F83EBD75A4FD18"
            }, {
              "name": "etag",
              "value": "W/\"9c09c378da0b345c0a39c117c45c2b47\""
            }, {
              "name": "expect-ct",
              "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "public, max-age=3600, s-maxage=60"
            }, {
              "name": "cf-ray",
              "value": "44a7ffcc3ffe2312-LAX"
            }, {
              "name": "x-amz-version-id",
              "value": "xojSGE6KbnQEtqcN97AMmOn8hdrQamUy"
            }, {
              "name": "x-amz-id-2",
              "value": "6MpiqHn8BxGmUuKcNdJippROQHvv4tq2GPoor99p++90Mr/78gNAcwEmZhYOqguekNxUluu7BoY="
            }],
            "cookies": [],
            "content": {
              "size": 4002,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 2277
          },
          "cache": {},
          "timings": {
            "blocked": 0.45018099998123945,
            "dns": 1.333,
            "ssl": 520.9659999999999,
            "connect": 771.621,
            "send": 0.4519999999999982,
            "wait": 301.34799997140465,
            "receive": 1.8160000327043235,
            "_blocked_queueing": 0.18099998123943806
          },
          "serverIPAddress": "104.18.73.113",
          "connection": "1111",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:29.159Z",
          "time": 658.4340619614129,
          "request": {
            "method": "GET",
            "url": "https://ekr.zdassets.com/compose/web_widget/advyzon.zendesk.com",
            "httpVersion": "spdy",
            "headers": [{
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "Origin",
              "value": "https://testpool.yhlsoft.com"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "via",
              "value": "1.1 e0559a822309b4036bf1911ebfc409ec.cloudfront.net (CloudFront)"
            }, {
              "name": "vary",
              "value": "Origin"
            }, {
              "name": "x-cache",
              "value": "Miss from cloudfront"
            }, {
              "name": "status",
              "value": "200, 200 OK"
            }, {
              "name": "content-length",
              "value": "230"
            }, {
              "name": "x-request-id",
              "value": "aace3936-258e-43ab-abd0-adafca2a7bd5"
            }, {
              "name": "x-runtime",
              "value": "0.011464"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"9fd61c9b3dc06d1a9ca547ea38dad8f5\""
            }, {
              "name": "access-control-max-age",
              "value": "1728000"
            }, {
              "name": "access-control-allow-methods",
              "value": "GET, POST, OPTIONS"
            }, {
              "name": "content-type",
              "value": "application/json; charset=utf-8"
            }, {
              "name": "access-control-allow-origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "access-control-expose-headers",
              "value": ""
            }, {
              "name": "cache-control",
              "value": "public, max-age=600, s-maxage=60"
            }, {
              "name": "access-control-allow-credentials",
              "value": "true"
            }, {
              "name": "x-amz-cf-id",
              "value": "G7MI_iWcfzMCleY64_bXU3w9oNN3qMB7Fhh_HKXyvwODRcxj64dzpw=="
            }],
            "cookies": [],
            "content": {
              "size": 230,
              "mimeType": "application/json"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 762
          },
          "cache": {},
          "timings": {
            "blocked": 0.825061999995727,
            "dns": 2.2110000000000003,
            "ssl": 210.468,
            "connect": 408.962,
            "send": 1.1259999999999764,
            "wait": 243.27899997961896,
            "receive": 2.0309999817982316,
            "_blocked_queueing": 1.061999995727092
          },
          "serverIPAddress": "13.35.121.104",
          "connection": "1122",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:29.716Z",
          "time": 8865.591908001225,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/attribute-core/attribute-core-min.js&3.14.1/attribute-observable/attribute-observable-min.js&3.14.1/attribute-extras/attribute-extras-min.js&3.14.1/attribute-base/attribute-base-min.js&3.14.1/attribute-complex/attribute-complex-min.js&3.14.1/base-core/base-core-min.js&3.14.1/base-observable/base-observable-min.js&3.14.1/base-base/base-base-min.js&3.14.1/base-pluginhost/base-pluginhost-min.js&3.14.1/classnamemanager/classnamemanager-min.js&3.14.1/event-synthetic/event-synthetic-min.js&3.14.1/event-focus/event-focus-min.js&3.14.1/widget-base/widget-base-min.js&3.14.1/widget-htmlparser/widget-htmlparser-min.js&3.14.1/widget-skin/widget-skin-min.js&3.14.1/widget-uievents/widget-uievents-min.js&3.14.1/base-build/base-build-min.js&3.14.1/event-key/event-key-min.js&3.14.1/event-outside/event-outside-min.js&3.14.1/widget-autohide/widget-autohide-min.js&3.14.1/escape/escape-min.js&3.14.1/button-core/button-core-min.js&3.14.1/button-plugin/button-plugin-min.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/attribute-core/attribute-core-min.js&3.14.1/attribute-observable/attribute-observable-min.js&3.14.1/attribute-extras/attribute-extras-min.js&3.14.1/attribute-base/attribute-base-min.js&3.14.1/attribute-complex/attribute-complex-min.js&3.14.1/base-core/base-core-min.js&3.14.1/base-observable/base-observable-min.js&3.14.1/base-base/base-base-min.js&3.14.1/base-pluginhost/base-pluginhost-min.js&3.14.1/classnamemanager/classnamemanager-min.js&3.14.1/event-synthetic/event-synthetic-min.js&3.14.1/event-focus/event-focus-min.js&3.14.1/widget-base/widget-base-min.js&3.14.1/widget-htmlparser/widget-htmlparser-min.js&3.14.1/widget-skin/widget-skin-min.js&3.14.1/widget-uievents/widget-uievents-min.js&3.14.1/base-build/base-build-min.js&3.14.1/event-key/event-key-min.js&3.14.1/event-outside/event-outside-min.js&3.14.1/widget-autohide/widget-autohide-min.js&3.14.1/escape/escape-min.js&3.14.1/button-core/button-core-min.js&3.14.1/button-plugin/button-plugin-min.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/attribute-core/attribute-core-min.js",
              "value": ""
            }, {
              "name": "3.14.1/attribute-observable/attribute-observable-min.js",
              "value": ""
            }, {
              "name": "3.14.1/attribute-extras/attribute-extras-min.js",
              "value": ""
            }, {
              "name": "3.14.1/attribute-base/attribute-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/attribute-complex/attribute-complex-min.js",
              "value": ""
            }, {
              "name": "3.14.1/base-core/base-core-min.js",
              "value": ""
            }, {
              "name": "3.14.1/base-observable/base-observable-min.js",
              "value": ""
            }, {
              "name": "3.14.1/base-base/base-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/base-pluginhost/base-pluginhost-min.js",
              "value": ""
            }, {
              "name": "3.14.1/classnamemanager/classnamemanager-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-synthetic/event-synthetic-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-focus/event-focus-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-base/widget-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-htmlparser/widget-htmlparser-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-skin/widget-skin-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-uievents/widget-uievents-min.js",
              "value": ""
            }, {
              "name": "3.14.1/base-build/base-build-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-key/event-key-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-outside/event-outside-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-autohide/widget-autohide-min.js",
              "value": ""
            }, {
              "name": "3.14.1/escape/escape-min.js",
              "value": ""
            }, {
              "name": "3.14.1/button-core/button-core-min.js",
              "value": ""
            }, {
              "name": "3.14.1/button-plugin/button-plugin-min.js",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.003715"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"56ba69a083cf1af2444bcb26c85739a3\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "919d4e02-f754-40d2-a32b-00d57628ae26"
            }],
            "cookies": [],
            "content": {
              "size": 43312,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 15737
          },
          "cache": {},
          "timings": {
            "blocked": 3.852907999976538,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 1.146,
            "wait": 3463.62999999474,
            "receive": 5396.963000006508,
            "_blocked_queueing": 1.9079999765381217
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:29.717Z",
          "time": 9926.068155006913,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/widget-stdmod/widget-stdmod-min.js&3.14.1/widget-buttons/widget-buttons-min.js&3.14.1/widget-modality/widget-modality-min.js&3.14.1/widget-position/widget-position-min.js&3.14.1/widget-position-align/widget-position-align-min.js&3.14.1/widget-position-constrain/widget-position-constrain-min.js&3.14.1/widget-stack/widget-stack-min.js&3.14.1/panel/panel-min.js&3.14.1/yui-throttle/yui-throttle-min.js&3.14.1/dd-ddm-base/dd-ddm-base-min.js&3.14.1/dd-drag/dd-drag-min.js&3.14.1/dd-plugin/dd-plugin-min.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/widget-stdmod/widget-stdmod-min.js&3.14.1/widget-buttons/widget-buttons-min.js&3.14.1/widget-modality/widget-modality-min.js&3.14.1/widget-position/widget-position-min.js&3.14.1/widget-position-align/widget-position-align-min.js&3.14.1/widget-position-constrain/widget-position-constrain-min.js&3.14.1/widget-stack/widget-stack-min.js&3.14.1/panel/panel-min.js&3.14.1/yui-throttle/yui-throttle-min.js&3.14.1/dd-ddm-base/dd-ddm-base-min.js&3.14.1/dd-drag/dd-drag-min.js&3.14.1/dd-plugin/dd-plugin-min.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/widget-stdmod/widget-stdmod-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-buttons/widget-buttons-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-modality/widget-modality-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-position/widget-position-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-position-align/widget-position-align-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-position-constrain/widget-position-constrain-min.js",
              "value": ""
            }, {
              "name": "3.14.1/widget-stack/widget-stack-min.js",
              "value": ""
            }, {
              "name": "3.14.1/panel/panel-min.js",
              "value": ""
            }, {
              "name": "3.14.1/yui-throttle/yui-throttle-min.js",
              "value": ""
            }, {
              "name": "3.14.1/dd-ddm-base/dd-ddm-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/dd-drag/dd-drag-min.js",
              "value": ""
            }, {
              "name": "3.14.1/dd-plugin/dd-plugin-min.js",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.004118"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"236ec1e65ff99efd43b628d5e4ac2a77\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "08324bee-7a92-468e-8a9a-981b755fb644"
            }],
            "cookies": [],
            "content": {
              "size": 42760,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 14721
          },
          "cache": {},
          "timings": {
            "blocked": 2.3221549999839626,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.56,
            "wait": 3463.6650000244417,
            "receive": 6459.520999982487,
            "_blocked_queueing": 3.1549999839626253
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:29.817Z",
          "time": 235.37554704752984,
          "request": {
            "method": "GET",
            "url": "https://ekr.zdassets.com/compose_product/web_widget/11542baa849521c63a7a34a8b27b33281a566220?features%5B%5D=ticket_submission",
            "httpVersion": "spdy",
            "headers": [{
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "Origin",
              "value": "https://testpool.yhlsoft.com"
            }],
            "queryString": [{
              "name": "features%5B%5D",
              "value": "ticket_submission"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "via",
              "value": "1.1 e0559a822309b4036bf1911ebfc409ec.cloudfront.net (CloudFront)"
            }, {
              "name": "vary",
              "value": "Origin"
            }, {
              "name": "x-cache",
              "value": "Miss from cloudfront"
            }, {
              "name": "status",
              "value": "200, 200 OK"
            }, {
              "name": "content-length",
              "value": "502"
            }, {
              "name": "x-request-id",
              "value": "952360bf-cbc9-4514-8cfe-1f1bf2045eea"
            }, {
              "name": "x-runtime",
              "value": "0.004238"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"dca20fad0515a73965e410456c2f2caf\""
            }, {
              "name": "access-control-max-age",
              "value": "1728000"
            }, {
              "name": "access-control-allow-methods",
              "value": "GET, POST, OPTIONS"
            }, {
              "name": "content-type",
              "value": "text/plain; charset=utf-8"
            }, {
              "name": "access-control-allow-origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "access-control-expose-headers",
              "value": ""
            }, {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            }, {
              "name": "access-control-allow-credentials",
              "value": "true"
            }, {
              "name": "x-amz-cf-id",
              "value": "QR-7K0ApIioIg2SsA69xEstIatX1MtyJdcgpydsuEG3HEuoZsRDGsA=="
            }],
            "cookies": [],
            "content": {
              "size": 502,
              "mimeType": "text/plain"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 1021
          },
          "cache": {},
          "timings": {
            "blocked": 0.44854700003238396,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.23300000000000004,
            "wait": 233.19300002684443,
            "receive": 1.5010000206530094,
            "_blocked_queueing": 0.5470000323839486
          },
          "serverIPAddress": "13.35.121.104",
          "connection": "1122",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:30.067Z",
          "time": 298.66255998646375,
          "request": {
            "method": "GET",
            "url": "https://static.zdassets.com/web_widget/latest/runtime.e6ec24d33aba385ceba2.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "cf-cache-status",
              "value": "HIT"
            }, {
              "name": "x-amz-request-id",
              "value": "2267E50259721429"
            }, {
              "name": "x-amz-server-side-encryption",
              "value": "AES256"
            }, {
              "name": "cf-ray",
              "value": "44a7ffd3ecc62312-LAX"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "x-amz-replication-status",
              "value": "REPLICA"
            }, {
              "name": "x-amz-id-2",
              "value": "VQC6eQe9mcT9D4HobG2azXSxf5/KOuZe7LSsSoNTBTW/VlELYMiuQgLD4QoA4kwZyh/x29rFxBg="
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 01:19:46 GMT"
            }, {
              "name": "server",
              "value": "cloudflare"
            }, {
              "name": "etag",
              "value": "W/\"54a4aba31662cd45f759409e41065c0c\""
            }, {
              "name": "expect-ct",
              "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "x-amz-version-id",
              "value": "RnxALsi0EYMltxRAiDYsDXxwJmhgnEAZ"
            }, {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "expires",
              "value": "Wed, 14 Aug 2019 01:19:45 GMT"
            }],
            "cookies": [],
            "content": {
              "size": 2302,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 1543
          },
          "cache": {},
          "timings": {
            "blocked": 2.4895599999567493,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.867,
            "wait": 291.84600000843034,
            "receive": 3.4599999780766666,
            "_blocked_queueing": 0.5599999567493796
          },
          "serverIPAddress": "104.18.73.113",
          "connection": "1111",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:30.067Z",
          "time": 1529.8288859988097,
          "request": {
            "method": "GET",
            "url": "https://static.zdassets.com/web_widget/latest/common_vendor.3aab105646e8fbff3e94.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "cf-cache-status",
              "value": "HIT"
            }, {
              "name": "x-amz-request-id",
              "value": "945EC75324032690"
            }, {
              "name": "x-amz-server-side-encryption",
              "value": "AES256"
            }, {
              "name": "cf-ray",
              "value": "44a7ffd3ecc72312-LAX"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "x-amz-replication-status",
              "value": "REPLICA"
            }, {
              "name": "x-amz-id-2",
              "value": "Wd/irKcuNmPc3IBSXsVtGstDeOhi8hVjIiEMYHYXn7PTvf7LRA/klDCLiemEK6SFxTYmnK0k8yQ="
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 01:19:47 GMT"
            }, {
              "name": "server",
              "value": "cloudflare"
            }, {
              "name": "etag",
              "value": "W/\"0746721f943ae907dd7596cbe6c37437\""
            }, {
              "name": "expect-ct",
              "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "x-amz-version-id",
              "value": "3_x6NktsfJWy0twI7q5yQQaMny5sQS0V"
            }, {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "expires",
              "value": "Wed, 14 Aug 2019 01:19:46 GMT"
            }],
            "cookies": [],
            "content": {
              "size": 261337,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 87406
          },
          "cache": {},
          "timings": {
            "blocked": 2.3268859999943525,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.7069999999999999,
            "wait": 292.15699997526406,
            "receive": 1234.6380000235513,
            "_blocked_queueing": 0.8859999943524599
          },
          "serverIPAddress": "104.18.73.113",
          "connection": "1111",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:30.067Z",
          "time": 1910.1751150187338,
          "request": {
            "method": "GET",
            "url": "https://static.zdassets.com/web_widget/latest/translations.14c6cd01dd19dbf6161a.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "cf-cache-status",
              "value": "HIT"
            }, {
              "name": "x-amz-request-id",
              "value": "213CCEA938091EBD"
            }, {
              "name": "x-amz-server-side-encryption",
              "value": "AES256"
            }, {
              "name": "cf-ray",
              "value": "44a7ffd3ecc82312-LAX"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "x-amz-replication-status",
              "value": "REPLICA"
            }, {
              "name": "x-amz-id-2",
              "value": "1hkhm0Kqv146pyTk4Xibh2ILutJJtX2HvEscTTBi9OIetYEwI5LHQ5qACOWONonY7ZSMuTmVNhU="
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 01:19:47 GMT"
            }, {
              "name": "server",
              "value": "cloudflare"
            }, {
              "name": "etag",
              "value": "W/\"57c7a51205b8c5fe4b4627887ceb57b9\""
            }, {
              "name": "expect-ct",
              "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "x-amz-version-id",
              "value": "CyjlZ_olhWaPX3LCrMekB03l1T_3Ozc9"
            }, {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "expires",
              "value": "Wed, 14 Aug 2019 01:19:46 GMT"
            }],
            "cookies": [],
            "content": {
              "size": 644938,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 196007
          },
          "cache": {},
          "timings": {
            "blocked": 2.0021149999918415,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.5510000000000002,
            "wait": 535.3249999952055,
            "receive": 1372.2970000235364,
            "_blocked_queueing": 1.1149999918416142
          },
          "serverIPAddress": "104.18.73.113",
          "connection": "1111",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:30.067Z",
          "time": 3685.523489014304,
          "request": {
            "method": "GET",
            "url": "https://static.zdassets.com/web_widget/latest/web_widget.566e647020648af384bf.js",
            "httpVersion": "spdy",
            "headers": [{
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "spdy",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:30 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "cf-cache-status",
              "value": "HIT"
            }, {
              "name": "x-amz-request-id",
              "value": "8899BA0BD725C54A"
            }, {
              "name": "x-amz-server-side-encryption",
              "value": "AES256"
            }, {
              "name": "cf-ray",
              "value": "44a7ffd3ecc92312-LAX"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "x-amz-replication-status",
              "value": "REPLICA"
            }, {
              "name": "x-amz-id-2",
              "value": "OuN77JyF8FY75eqw+31JCSoyZ0lF87prWA4vhjVXpqqHpcqpWBWl/qSjR3s79sd49pGINehx0ns="
            }, {
              "name": "last-modified",
              "value": "Tue, 14 Aug 2018 01:19:48 GMT"
            }, {
              "name": "server",
              "value": "cloudflare"
            }, {
              "name": "etag",
              "value": "W/\"70a965b5770047bf9dcdb69c366c520e\""
            }, {
              "name": "expect-ct",
              "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "x-amz-version-id",
              "value": "2o1T_xX0KyxGclmGHcx6FL4rBA7JWqZT"
            }, {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "expires",
              "value": "Wed, 14 Aug 2019 01:19:47 GMT"
            }],
            "cookies": [],
            "content": {
              "size": 1258905,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 341633
          },
          "cache": {},
          "timings": {
            "blocked": 1.8474889999874868,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.16900000000000004,
            "wait": 1952.872999978382,
            "receive": 1730.6340000359342,
            "_blocked_queueing": 1.4889999874867499
          },
          "serverIPAddress": "104.18.73.113",
          "connection": "1111",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:34.012Z",
          "time": 800.4897399894423,
          "request": {
            "method": "GET",
            "url": "https://advyzon.zendesk.com/embeddable/config",
            "httpVersion": "http/1.1",
            "headers": [{
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "Origin",
              "value": "https://testpool.yhlsoft.com"
            }],
            "queryString": [],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "OK",
            "httpVersion": "http/1.1",
            "headers": [{
              "name": "Date",
              "value": "Wed, 15 Aug 2018 01:48:35 GMT"
            }, {
              "name": "Content-Encoding",
              "value": "gzip"
            }, {
              "name": "Transfer-Encoding",
              "value": "chunked"
            }, {
              "name": "Status",
              "value": "200 OK"
            }, {
              "name": "Access-Control-Max-Age",
              "value": "1728000"
            }, {
              "name": "Access-Control-Allow-Methods",
              "value": "GET"
            }, {
              "name": "Connection",
              "value": "keep-alive"
            }, {
              "name": "X-Request-Id",
              "value": "90b4d53db989a7318b55044ce6f62498"
            }, {
              "name": "X-Runtime",
              "value": "0.019743"
            }, {
              "name": "Server",
              "value": "nginx"
            }, {
              "name": "ETag",
              "value": "W/\"f2d6864a14491bc5fde1aba1576f6112\""
            }, {
              "name": "Vary",
              "value": "Origin"
            }, {
              "name": "Strict-Transport-Security",
              "value": "max-age=31536000;"
            }, {
              "name": "Content-Type",
              "value": "application/json; charset=utf-8"
            }, {
              "name": "Access-Control-Allow-Origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "Access-Control-Expose-Headers",
              "value": ""
            }, {
              "name": "Cache-Control",
              "value": "max-age=600, public, public"
            }, {
              "name": "Access-Control-Allow-Credentials",
              "value": "true"
            }, {
              "name": "X-Zendesk-Origin-Server",
              "value": "embeddable10.pod14.use1.zdsys.com"
            }],
            "cookies": [],
            "content": {
              "size": 273,
              "mimeType": "application/json"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 909
          },
          "cache": {},
          "timings": {
            "blocked": 0.625739999988582,
            "dns": 1.238,
            "ssl": 279.763,
            "connect": 526.541,
            "send": 0.2479999999999336,
            "wait": 269.84099998312445,
            "receive": 1.9960000063292682,
            "_blocked_queueing": 0.7399999885819852
          },
          "serverIPAddress": "54.208.38.43",
          "connection": "1167",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:34.841Z",
          "time": 247.6639530164539,
          "request": {
            "method": "GET",
            "url": "https://advyzon.zendesk.com/embeddable_blip?type=pageView&data=eyJwYWdlVmlldyI6eyJyZWZlcnJlciI6Imh0dHBzOi8vdGVzdHBvb2wueWhsc29mdC5jb20vaG9tZS9hcHBzP2RldmljZV9jaGFuZ2VkIiwidGltZSI6ODI4LCJuYXZpZ2F0b3JMYW5ndWFnZSI6InpoLUNOIiwicGFnZVRpdGxlIjoieUhMc29mdCBNYWluIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY4LjAuMzQ0MC4xMDYgU2FmYXJpLzUzNy4zNiIsImhlbHBDZW50ZXJEZWR1cCI6ZmFsc2V9LCJidWlkIjoiMDEyZjNjZjY0MmI2NDNkMDNhZDYxNDI2YTcxZGI5YjUiLCJzdWlkIjoiYWNjYmQwY2MxNjExOGQwZTg5ODA2ZTc3Yzk5ZjFjZmIiLCJ2ZXJzaW9uIjoiMTE1NDJiYWE4IiwidGltZXN0YW1wIjoiMjAxOC0wOC0xNVQwMTo0ODozNC44MzlaIiwidXJsIjoiaHR0cHM6Ly90ZXN0cG9vbC55aGxzb2Z0LmNvbS9ob21lL2FwcHMvYXBwcyJ9",
            "httpVersion": "http/1.1",
            "headers": [{
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "Referer",
              "value": "https://testpool.yhlsoft.com/"
            }, {
              "name": "Origin",
              "value": "https://testpool.yhlsoft.com"
            }],
            "queryString": [{
              "name": "type",
              "value": "pageView"
            }, {
              "name": "data",
              "value": "eyJwYWdlVmlldyI6eyJyZWZlcnJlciI6Imh0dHBzOi8vdGVzdHBvb2wueWhsc29mdC5jb20vaG9tZS9hcHBzP2RldmljZV9jaGFuZ2VkIiwidGltZSI6ODI4LCJuYXZpZ2F0b3JMYW5ndWFnZSI6InpoLUNOIiwicGFnZVRpdGxlIjoieUhMc29mdCBNYWluIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY4LjAuMzQ0MC4xMDYgU2FmYXJpLzUzNy4zNiIsImhlbHBDZW50ZXJEZWR1cCI6ZmFsc2V9LCJidWlkIjoiMDEyZjNjZjY0MmI2NDNkMDNhZDYxNDI2YTcxZGI5YjUiLCJzdWlkIjoiYWNjYmQwY2MxNjExOGQwZTg5ODA2ZTc3Yzk5ZjFjZmIiLCJ2ZXJzaW9uIjoiMTE1NDJiYWE4IiwidGltZXN0YW1wIjoiMjAxOC0wOC0xNVQwMTo0ODozNC44MzlaIiwidXJsIjoiaHR0cHM6Ly90ZXN0cG9vbC55aGxzb2Z0LmNvbS9ob21lL2FwcHMvYXBwcyJ9"
            }],
            "cookies": [],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "OK",
            "httpVersion": "http/1.1",
            "headers": [{
              "name": "Access-Control-Allow-Origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "Date",
              "value": "Wed, 15 Aug 2018 01:48:35 GMT"
            }, {
              "name": "Server",
              "value": "nginx"
            }, {
              "name": "Connection",
              "value": "keep-alive"
            }, {
              "name": "Content-Length",
              "value": "0"
            }, {
              "name": "Content-Type",
              "value": "application/octet-stream, text/html; charset=utf-8"
            }],
            "cookies": [],
            "content": {
              "size": 0,
              "mimeType": "text/html"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 253
          },
          "cache": {},
          "timings": {
            "blocked": 1.2349529999806546,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.13800000000000012,
            "wait": 244.88799998534097,
            "receive": 1.403000031132251,
            "_blocked_queueing": 0.9529999806545675
          },
          "serverIPAddress": "54.208.38.43",
          "connection": "1167",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:39.708Z",
          "time": 2702.3186680251383,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/stylesheets/yhl_navmenu.css",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/assets/stylesheets/yhl_navmenu.css"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "text/css,*/*;q=0.1"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:40 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 17 Jul 2018 14:28:46 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css"
            }, {
              "name": "content-length",
              "value": "6144"
            }],
            "cookies": [],
            "content": {
              "size": 32878,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 6588
          },
          "cache": {},
          "timings": {
            "blocked": 1.922668000022415,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.5349999999999999,
            "wait": 2600.407000014961,
            "receive": 99.45400001015514,
            "_blocked_queueing": 0.6680000224150717
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:39.708Z",
          "time": 2741.999943961622,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/yui/build/node-menunav/assets/node-menunav-core.css",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/assets/yui/build/node-menunav/assets/node-menunav-core.css"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "text/css,*/*;q=0.1"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:40 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Tue, 31 Mar 2015 04:29:03 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"551a228f-cd1\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css"
            }],
            "cookies": [],
            "content": {
              "size": 3281,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 1919
          },
          "cache": {},
          "timings": {
            "blocked": 1.5789439999703319,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.393,
            "wait": 2736.4430000212938,
            "receive": 3.5849999403581023,
            "_blocked_queueing": 0.9439999703317881
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:39.709Z",
          "time": 2742.4210699659307,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/autocomplete-list/assets/skins/sam/autocomplete-list.css",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/autocomplete-list/assets/skins/sam/autocomplete-list.css"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "text/css,*/*;q=0.1"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/autocomplete-list/assets/skins/sam/autocomplete-list.css",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.002888"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:40 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"3d14f1bb230e2e45b9fdb7751fd26f43\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "text/css; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "3d9b33cf-d084-49a9-92e8-5a5d0a762f39"
            }],
            "cookies": [],
            "content": {
              "size": 866,
              "mimeType": "text/css"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 1040
          },
          "cache": {},
          "timings": {
            "blocked": 1.1700699999984354,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.1399999999999999,
            "wait": 2737.364000014387,
            "receive": 3.746999951545149,
            "_blocked_queueing": 1.069999998435378
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:42.470Z",
          "time": 1351.6468149955035,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/plugin/plugin-min.js&3.14.1/event-simulate/event-simulate-min.js&3.14.1/async-queue/async-queue-min.js&3.14.1/gesture-simulate/gesture-simulate-min.js&3.14.1/node-event-simulate/node-event-simulate-min.js&3.14.1/node-focusmanager/node-focusmanager-min.js&3.14.1/node-menunav/node-menunav-min.js&3.14.1/io-xdr/io-xdr-min.js&3.14.1/io-form/io-form-min.js&3.14.1/io-upload-iframe/io-upload-iframe-min.js&3.14.1/queue-promote/queue-promote-min.js&3.14.1/io-queue/io-queue-min.js&3.14.1/array-extras/array-extras-min.js&3.14.1/event-valuechange/event-valuechange-min.js&3.14.1/autocomplete-base/autocomplete-base-min.js&3.14.1/autocomplete-sources/autocomplete-sources-min.js&3.14.1/autocomplete-list/lang/autocomplete-list_en.js&3.14.1/event-resize/event-resize-min.js&3.14.1/shim-plugin/shim-plugin-min.js&3.14.1/autocomplete-list/autocomplete-list-min.js&3.14.1/autocomplete-list-keys/autocomplete-list-keys-min.js&3.14.1/autocomplete-plugin/autocomplete-plugin-min.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/plugin/plugin-min.js&3.14.1/event-simulate/event-simulate-min.js&3.14.1/async-queue/async-queue-min.js&3.14.1/gesture-simulate/gesture-simulate-min.js&3.14.1/node-event-simulate/node-event-simulate-min.js&3.14.1/node-focusmanager/node-focusmanager-min.js&3.14.1/node-menunav/node-menunav-min.js&3.14.1/io-xdr/io-xdr-min.js&3.14.1/io-form/io-form-min.js&3.14.1/io-upload-iframe/io-upload-iframe-min.js&3.14.1/queue-promote/queue-promote-min.js&3.14.1/io-queue/io-queue-min.js&3.14.1/array-extras/array-extras-min.js&3.14.1/event-valuechange/event-valuechange-min.js&3.14.1/autocomplete-base/autocomplete-base-min.js&3.14.1/autocomplete-sources/autocomplete-sources-min.js&3.14.1/autocomplete-list/lang/autocomplete-list_en.js&3.14.1/event-resize/event-resize-min.js&3.14.1/shim-plugin/shim-plugin-min.js&3.14.1/autocomplete-list/autocomplete-list-min.js&3.14.1/autocomplete-list-keys/autocomplete-list-keys-min.js&3.14.1/autocomplete-plugin/autocomplete-plugin-min.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/plugin/plugin-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-simulate/event-simulate-min.js",
              "value": ""
            }, {
              "name": "3.14.1/async-queue/async-queue-min.js",
              "value": ""
            }, {
              "name": "3.14.1/gesture-simulate/gesture-simulate-min.js",
              "value": ""
            }, {
              "name": "3.14.1/node-event-simulate/node-event-simulate-min.js",
              "value": ""
            }, {
              "name": "3.14.1/node-focusmanager/node-focusmanager-min.js",
              "value": ""
            }, {
              "name": "3.14.1/node-menunav/node-menunav-min.js",
              "value": ""
            }, {
              "name": "3.14.1/io-xdr/io-xdr-min.js",
              "value": ""
            }, {
              "name": "3.14.1/io-form/io-form-min.js",
              "value": ""
            }, {
              "name": "3.14.1/io-upload-iframe/io-upload-iframe-min.js",
              "value": ""
            }, {
              "name": "3.14.1/queue-promote/queue-promote-min.js",
              "value": ""
            }, {
              "name": "3.14.1/io-queue/io-queue-min.js",
              "value": ""
            }, {
              "name": "3.14.1/array-extras/array-extras-min.js",
              "value": ""
            }, {
              "name": "3.14.1/event-valuechange/event-valuechange-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-base/autocomplete-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-sources/autocomplete-sources-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-list/lang/autocomplete-list_en.js",
              "value": ""
            }, {
              "name": "3.14.1/event-resize/event-resize-min.js",
              "value": ""
            }, {
              "name": "3.14.1/shim-plugin/shim-plugin-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-list/autocomplete-list-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-list-keys/autocomplete-list-keys-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-plugin/autocomplete-plugin-min.js",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.010641"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:43 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"0620d88ef597c457fbb1d93999e096f9\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "ec3140ba-a24a-4e65-be16-046bb45d05fb"
            }],
            "cookies": [],
            "content": {
              "size": 77163,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 26677
          },
          "cache": {},
          "timings": {
            "blocked": 2.7318149999775923,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.5390000000000001,
            "wait": 311.27200000735,
            "receive": 1037.103999988176,
            "_blocked_queueing": 0.8149999775923789
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:42.470Z",
          "time": 308.25555597408675,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/yui/cache?3.14.1/text-data-wordbreak/text-data-wordbreak-min.js&3.14.1/text-wordbreak/text-wordbreak-min.js&3.14.1/autocomplete-filters/autocomplete-filters-min.js&3.14.1/highlight-base/highlight-base-min.js&3.14.1/autocomplete-highlighters/autocomplete-highlighters-min.js",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/yui/cache?3.14.1/text-data-wordbreak/text-data-wordbreak-min.js&3.14.1/text-wordbreak/text-wordbreak-min.js&3.14.1/autocomplete-filters/autocomplete-filters-min.js&3.14.1/highlight-base/highlight-base-min.js&3.14.1/autocomplete-highlighters/autocomplete-highlighters-min.js"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "3.14.1/text-data-wordbreak/text-data-wordbreak-min.js",
              "value": ""
            }, {
              "name": "3.14.1/text-wordbreak/text-wordbreak-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-filters/autocomplete-filters-min.js",
              "value": ""
            }, {
              "name": "3.14.1/highlight-base/highlight-base-min.js",
              "value": ""
            }, {
              "name": "3.14.1/autocomplete-highlighters/autocomplete-highlighters-min.js",
              "value": ""
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.003723"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:43 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"ef3400ec5a85109e33c114083fe983b9\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "cache-control",
              "value": "max-age=7776000, public"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "d8311575-bb18-4640-a6bb-c3ecf8f0396c"
            }],
            "cookies": [],
            "content": {
              "size": 14114,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 6175
          },
          "cache": {},
          "timings": {
            "blocked": 1.863555999973789,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.20699999999999985,
            "wait": 303.72000000546126,
            "receive": 2.464999968651682,
            "_blocked_queueing": 1.5559999737888575
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:43.942Z",
          "time": 3723.2866149639594,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/reminder?track=0",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/reminder?track=0"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "x-requested-with",
              "value": "XMLHttpRequest"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "track",
              "value": "0"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.023387"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:44 GMT"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "etag",
              "value": "W/\"cdd9aa852fcfc26d081fb61ec8e06ea4\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "access-control-allow-origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "cache-control",
              "value": "max-age=0, private, must-revalidate"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "set-cookie",
              "value": "_yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D; path=/; secure; HttpOnly"
            }, {
              "name": "content-type",
              "value": "application/json; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "93157721-c4b0-4cad-bdb6-51c39417730e"
            }],
            "cookies": [{
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D",
              "path": "/",
              "expires": null,
              "httpOnly": true,
              "secure": true
            }],
            "content": {
              "size": 44,
              "mimeType": "application/json"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 1711
          },
          "cache": {},
          "timings": {
            "blocked": 0.7076149999680929,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.19500000000000006,
            "wait": 3719.6269999837987,
            "receive": 2.7569999801926315,
            "_blocked_queueing": 0.6149999680928886
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:43.966Z",
          "time": 3697.057564012124,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/combo/assets/images/nav_sprite.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/combo/assets/images/nav_sprite.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps?device_changed"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-24636\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:44 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "149046"
            }],
            "cookies": [],
            "content": {
              "size": 149046,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 149627
          },
          "cache": {},
          "timings": {
            "blocked": 0.4605639999872074,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.16299999999999998,
            "wait": 701.0249999874718,
            "receive": 2995.409000024665,
            "_blocked_queueing": 0.5639999872073531
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:44.007Z",
          "time": 3658.7951730311033,
          "request": {
            "method": "POST",
            "url": "https://testpool.yhlsoft.com/crm/role/roles/get_fn_permission?fn_type=disable",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/role/roles/get_fn_permission?fn_type=disable"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D"
            }, {
              "name": "origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "x-requested-with",
              "value": "XMLHttpRequest"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": "content-length",
              "value": "0"
            }, {
              "name": ":method",
              "value": "POST"
            }],
            "queryString": [{
              "name": "fn_type",
              "value": "disable"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73865e%3BCvOkf4V7AZ8qy0zA7spTwDMrywoOshoia0AP7qQFrM8%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "x-runtime",
              "value": "0.032498"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:44 GMT"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "etag",
              "value": "W/\"b1b5ea7a03fe9ed4bd308ad19e46f204\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "access-control-allow-origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "cache-control",
              "value": "max-age=0, private, must-revalidate"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "set-cookie",
              "value": "_yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D; path=/; secure; HttpOnly"
            }, {
              "name": "content-type",
              "value": "application/json; charset=utf-8"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "9c4542c1-02f2-47a9-893f-1bbf0c940749"
            }],
            "cookies": [{
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D",
              "path": "/",
              "expires": null,
              "httpOnly": true,
              "secure": true
            }],
            "content": {
              "size": 15980,
              "mimeType": "application/json"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 17674
          },
          "cache": {},
          "timings": {
            "blocked": 0.3241730000046082,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.5660000000000001,
            "wait": 3649.404999976616,
            "receive": 8.50000005448237,
            "_blocked_queueing": 3.173000004608184
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:47.713Z",
          "time": 759.6036930131959,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/users/sms_warn_view",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/users/sms_warn_view"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "x-requested-with",
              "value": "XMLHttpRequest"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:48 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "x-content-type-options",
              "value": "nosniff"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }, {
              "name": "x-request-id",
              "value": "d25f1516-188a-49df-a619-3af79d881809"
            }, {
              "name": "x-runtime",
              "value": "0.018141"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "W/\"f091f6be55aa6c227328dd0ebbc58e20\""
            }, {
              "name": "x-frame-options",
              "value": "SAMEORIGIN"
            }, {
              "name": "content-type",
              "value": "text/html; charset=utf-8"
            }, {
              "name": "access-control-allow-origin",
              "value": "https://testpool.yhlsoft.com"
            }, {
              "name": "cache-control",
              "value": "max-age=0, private, must-revalidate"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "set-cookie",
              "value": "_yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D; path=/; secure; HttpOnly"
            }],
            "cookies": [{
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D",
              "path": "/",
              "expires": null,
              "httpOnly": true,
              "secure": true
            }],
            "content": {
              "size": 3178,
              "mimeType": "text/html"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 2991
          },
          "cache": {},
          "timings": {
            "blocked": 0.5776930000381544,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.279,
            "wait": 755.7689999799766,
            "receive": 2.9780000331811607,
            "_blocked_queueing": 0.6930000381544232
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:47.734Z",
          "time": 739.2176340239239,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/favicon.ico",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/favicon.ico"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b73867c%3B--9a9_VIH5rBlijXezwXpAHQzNI2E9wMSBRdTzu79iU%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Mon, 18 Jan 2016 13:55:12 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"569ceec0-10be\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:48 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/x-icon"
            }, {
              "name": "content-length",
              "value": "4286"
            }],
            "cookies": [],
            "content": {
              "size": 4286,
              "mimeType": "image/x-icon"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 4704
          },
          "cache": {},
          "timings": {
            "blocked": 0.687633999996353,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.2769999999999999,
            "wait": 735.2909999961629,
            "receive": 2.9620000277645886,
            "_blocked_queueing": 0.6339999963529408
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:48.494Z",
          "time": 991.1057189645362,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/images/nav_sprite2016.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/images/nav_sprite2016.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-ac26\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:49 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "44070"
            }],
            "cookies": [],
            "content": {
              "size": 44070,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 44532
          },
          "cache": {},
          "timings": {
            "blocked": 0.540718999945093,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.19699999999999995,
            "wait": 622.2899999941811,
            "receive": 368.07799997041,
            "_blocked_queueing": 0.7189999450929463
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:48.552Z",
          "time": 974.1906839790172,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/assets/user/profile/sms_check.js?tmd=07242018",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/assets/user/profile/sms_check.js?tmd=07242018"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "*/*"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [{
              "name": "tmd",
              "value": "07242018"
            }],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:49 GMT"
            }, {
              "name": "content-encoding",
              "value": "gzip"
            }, {
              "name": "last-modified",
              "value": "Mon, 21 May 2018 07:31:40 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "vary",
              "value": "Accept-Encoding"
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "content-type",
              "value": "application/javascript"
            }, {
              "name": "content-length",
              "value": "363"
            }],
            "cookies": [],
            "content": {
              "size": 863,
              "mimeType": "application/javascript"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 807
          },
          "cache": {},
          "timings": {
            "blocked": 0.6546840000278317,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.18199999999999994,
            "wait": 971.6930000205859,
            "receive": 1.6609999584034085,
            "_blocked_queueing": 0.6840000278316438
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }, {
          "startedDateTime": "2018-08-15T01:48:48.561Z",
          "time": 1270.6756809779326,
          "request": {
            "method": "GET",
            "url": "https://testpool.yhlsoft.com/crm/images/sms_check.png",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": ":path",
              "value": "/crm/images/sms_check.png"
            }, {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            }, {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9"
            }, {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
            }, {
              "name": "accept",
              "value": "image/webp,image/apng,image/*,*/*;q=0.8"
            }, {
              "name": "referer",
              "value": "https://testpool.yhlsoft.com/home/apps/apps"
            }, {
              "name": ":authority",
              "value": "testpool.yhlsoft.com"
            }, {
              "name": "cookie",
              "value": "_yhlsoft_email=chris.peng%40yhlsoft.com; _yhlsoft_user=E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D"
            }, {
              "name": ":scheme",
              "value": "https"
            }, {
              "name": ":method",
              "value": "GET"
            }],
            "queryString": [],
            "cookies": [{
              "name": "_yhlsoft_email",
              "value": "chris.peng%40yhlsoft.com",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }, {
              "name": "_yhlsoft_user",
              "value": "E8eB0UJNJTKZnz-OZcURNKub8ZRWNWhMp7BNUo2145qIULvkmb42fdDXllcCRNVU4vJjXx_CbFVYLyGPpYukXZhYxwqqHriOiJZJt_IzHgmGBxCV5-RbcbYJdVeFiUmXK1APuzSJNLvvWu74YjkaAhxNGFDR4qUGTlNoQZyipScimw_RQLGNoUYWSqRfzWw6BNQ8feKYUk1VkJ2JRR3TDqpAYri-VnHNVdJGIgFlhFnwU6jsGU2MTkuctm1_5EYakcZ9kGSWdFuSChTvuofTPoGuo1_jG2EKeiF-xXi3DzdkbcUy8nyg1CpRoJ6Xy7c4D4hS1aZX0tdyZlOYGOknkdHPsOx5iWP97iZaXcf-zHBHODaUsVZkhQD_4piDp4I7SOY3-GLOCE2158ppUakuW06h8XCCgim0koptrsng-dph0SVM8YifP5BvGmG5XHGHjn2ehtfHcd95tolXyRsWSRFnnuB4xJdWZC3cvbCMqi_yOXQeXNrd0jwT5TyHT26jvPK860SSqpkRnz_IVNuxAGEgLjSvLEB3ajPyQSKO3bdF6b82pZvWsIfSqXo1_hRbCWGI0swidsgiwhREaYuV4T-Lr3LRIk11gQpDokAE3XnLrZ42PNvZpI08NeN2Ob5ZP7ysADFJsaBtXRN9UsGdysWU1CkiohPRSnwt_mSw38aGVmjwZDdG9u1IPm7_53-OU7Jv6KwksUpu4Sj0mn9axv2hNKnfdnPbyEDa9KUYBa0y8kw7PBQiQW8uW18QXiSsEcra5gn2q9kJGS4NEGsiyys89kLJhtXPeaZ_zz-F-3YcgugmjVwVV3pyqszNb39LGgBiyOZ_eP2mEeISVUnU59a5EuKmSeNvDxJW-3zA47Wf_ZxGTHCDBLmC8tKP4XPmm4RUm9AVa3UqqO9-zqzHki1SHm0G3rOmnx6g8sGyGEPcfhR2-e8wILe1FJLdveodw_Fh6un_JLvwnmNG_uvzj-j-0Wyp6c-mxXQgLcJ84Gf2Hw4tAPbITYfH2c4WYd2Z62zKMyynwxdR71NnIIIoDYllWJlGsJW8AY6gqCDowS77pjjGCTIf81X4zJL1LwBOdG68XSL1wWhI9F1nSVqu8WiXLIcLzgB1XRuq79aeLXGX7kZi_gDQu3I4Fn3c3nu_H7YzqzFmdNsnqponlllZw6c_0MezmYdjHiNB14PKJNc%3D%3B5b738680%3B7BMvklUSs2xlnIqyGkRHVa4kzNeIndgzvNV_QOx_9Cs%3D",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }],
            "headersSize": -1,
            "bodySize": 0
          },
          "response": {
            "status": 200,
            "statusText": "",
            "httpVersion": "http/2.0",
            "headers": [{
              "name": "content-security-policy",
              "value": "default-src https: 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; script-src https: 'unsafe-inline' 'unsafe-eval'; style-src https: 'unsafe-inline'; img-src * data:; frame-ancestors 'self' *.yhlsoft.com *.advisorservices.com *.tdainstitutional.com; font-src * data:;"
            }, {
              "name": "last-modified",
              "value": "Thu, 02 Aug 2018 11:48:04 GMT"
            }, {
              "name": "server",
              "value": "nginx"
            }, {
              "name": "etag",
              "value": "\"5b62ef74-135f\""
            }, {
              "name": "p3p",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            }, {
              "name": "status",
              "value": "200"
            }, {
              "name": "date",
              "value": "Wed, 15 Aug 2018 01:48:49 GMT"
            }, {
              "name": "accept-ranges",
              "value": "bytes"
            }, {
              "name": "content-type",
              "value": "image/png"
            }, {
              "name": "content-length",
              "value": "4959"
            }],
            "cookies": [],
            "content": {
              "size": 4959,
              "mimeType": "image/png"
            },
            "redirectURL": "",
            "headersSize": -1,
            "bodySize": -1,
            "_transferSize": 5375
          },
          "cache": {},
          "timings": {
            "blocked": 0.6816810000049882,
            "dns": -1,
            "ssl": -1,
            "connect": -1,
            "send": 0.239,
            "wait": 1268.4380000195652,
            "receive": 1.3169999583624303,
            "_blocked_queueing": 0.6810000049881637
          },
          "serverIPAddress": "23.20.207.213",
          "connection": "771",
          "pageref": "page_1"
        }]
  			

  		}


  	});



