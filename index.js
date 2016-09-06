/**
 * Created by dragfire on 02-09-2016.
 */
'use strict';

class XHR {
    static Obj() {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }

        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {}
        }

        return xhr;
    }

    static send(url, method, data, headers, async) {
        if (async === undefined) {
            async = true;
        }

        return (new Promise((resolve, reject) => {
            var xhr = XHR.Obj();

            xhr.open(method, url, async);

            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        xhr.setRequestHeader(key, headers[key]);
                    }
                }
            }

            if (method == 'POST') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }

            xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };

            xhr.onerror = function() {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };

            xhr.send(data);
        }));
    }
}

export default class Ajax {
    static get(url, data, headers, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return XHR.send(url + (query.length ? '?' + query.join('&') : ''), 'GET', null, headers, async);
    }

    static post(url, data, headers, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return XHR.send(url, 'POST', query.join('&'), headers, async);
    }
}
