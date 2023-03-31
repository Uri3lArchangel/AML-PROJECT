(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [419], {
        37946: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                detectEnv: function() {
                    return v
                },
                detectOS: function() {
                    return w
                },
                formatIOSMobile: function() {
                    return H
                },
                formatMobileRegistry: function() {
                    return X
                },
                formatMobileRegistryEntry: function() {
                    return Q
                },
                getClientMeta: function() {
                    return U
                },
                getCrypto: function() {
                    return N
                },
                getCryptoOrThrow: function() {
                    return B
                },
                getDappRegistryUrl: function() {
                    return Z
                },
                getDocument: function() {
                    return I
                },
                getDocumentOrThrow: function() {
                    return C
                },
                getFromWindow: function() {
                    return x
                },
                getFromWindowOrThrow: function() {
                    return S
                },
                getLocal: function() {
                    return z
                },
                getLocalStorage: function() {
                    return P
                },
                getLocalStorageOrThrow: function() {
                    return L
                },
                getLocation: function() {
                    return O
                },
                getLocationOrThrow: function() {
                    return T
                },
                getMobileLinkRegistry: function() {
                    return J
                },
                getMobileRegistryEntry: function() {
                    return Y
                },
                getNavigator: function() {
                    return R
                },
                getNavigatorOrThrow: function() {
                    return A
                },
                getWalletRegistryUrl: function() {
                    return V
                },
                isAndroid: function() {
                    return y
                },
                isBrowser: function() {
                    return k
                },
                isIOS: function() {
                    return b
                },
                isMobile: function() {
                    return M
                },
                isNode: function() {
                    return E
                },
                mobileLinkChoiceKey: function() {
                    return W
                },
                removeLocal: function() {
                    return F
                },
                safeJsonParse: function() {
                    return q
                },
                safeJsonStringify: function() {
                    return j
                },
                saveMobileLinkInfo: function() {
                    return $
                },
                setLocal: function() {
                    return D
                }
            });
            var r = n(65755),
                i = n(62873),
                o = n(83454),
                s = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                },
                a = function(t, e, n) {
                    this.name = t, this.version = e, this.os = n, this.type = "browser"
                },
                u = function(t) {
                    this.version = t, this.type = "node", this.name = "node", this.os = o.platform
                },
                c = function(t, e, n, r) {
                    this.name = t, this.version = e, this.os = n, this.bot = r, this.type = "bot-device"
                },
                l = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                h = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                f = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                d = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FBAV\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                p = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function g(t) {
                return t ? _(t) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new h : "undefined" !== typeof navigator ? _(navigator.userAgent) : "undefined" !== typeof o && o.version ? new u(o.version.slice(1)) : null
            }

            function m(t) {
                return "" !== t && d.reduce((function(e, n) {
                    var r = n[0],
                        i = n[1];
                    if (e) return e;
                    var o = i.exec(t);
                    return !!o && [r, o]
                }), !1)
            }

            function _(t) {
                var e = m(t);
                if (!e) return null;
                var n = e[0],
                    r = e[1];
                if ("searchbot" === n) return new l;
                var i = r[1] && r[1].split(/[._]/).slice(0, 3);
                i ? i.length < 3 && (i = s(i, function(t) {
                    for (var e = [], n = 0; n < t; n++) e.push("0");
                    return e
                }(3 - i.length))) : i = [];
                var o = i.join("."),
                    u = function(t) {
                        for (var e = 0, n = p.length; e < n; e++) {
                            var r = p[e],
                                i = r[0];
                            if (r[1].exec(t)) return i
                        }
                        return null
                    }(t),
                    h = f.exec(t);
                return h && h[1] ? new c(n, o, u, h[1]) : new a(n, o, u)
            }

            function v(t) {
                return g(t)
            }

            function w() {
                const t = v();
                return t && t.os ? t.os : void 0
            }

            function y() {
                const t = w();
                return !!t && t.toLowerCase().includes("android")
            }

            function b() {
                const t = w();
                return !!t && (t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function M() {
                return !!w() && (y() || b())
            }

            function E() {
                const t = v();
                return !(!t || !t.name) && "node" === t.name.toLowerCase()
            }

            function k() {
                return !E() && !!R()
            }
            const x = i.getFromWindow,
                S = i.getFromWindowOrThrow,
                C = i.getDocumentOrThrow,
                I = i.getDocument,
                A = i.getNavigatorOrThrow,
                R = i.getNavigator,
                T = i.getLocationOrThrow,
                O = i.getLocation,
                B = i.getCryptoOrThrow,
                N = i.getCrypto,
                L = i.getLocalStorageOrThrow,
                P = i.getLocalStorage;

            function U() {
                return r.D()
            }
            const q = function(t) {
                    if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                },
                j = function(t) {
                    return "string" === typeof t ? t : JSON.stringify(t)
                };

            function D(t, e) {
                const n = j(e),
                    r = P();
                r && r.setItem(t, n)
            }

            function z(t) {
                let e = null,
                    n = null;
                const r = P();
                return r && (n = r.getItem(t)), e = n ? q(n) : n, e
            }

            function F(t) {
                const e = P();
                e && e.removeItem(t)
            }
            const W = "WALLETCONNECT_DEEPLINK_CHOICE";

            function H(t, e) {
                const n = encodeURIComponent(t);
                return e.universalLink ? `${e.universalLink}/wc?uri=${n}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function $(t) {
                const e = t.href.split("?")[0];
                D(W, Object.assign(Object.assign({}, t), {
                    href: e
                }))
            }

            function Y(t, e) {
                return t.filter((t => t.name.toLowerCase().includes(e.toLowerCase())))[0]
            }

            function J(t, e) {
                let n = t;
                return e && (n = e.map((e => Y(t, e))).filter(Boolean)), n
            }
            const K = "https://registry.walletconnect.com";

            function V() {
                return K + "/api/v2/wallets"
            }

            function Z() {
                return K + "/api/v2/dapps"
            }

            function Q(t, e = "mobile") {
                var n;
                return {
                    name: t.name || "",
                    shortName: t.metadata.shortName || "",
                    color: t.metadata.colors.primary || "",
                    logo: null !== (n = t.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: t[e].universal || "",
                    deepLink: t[e].native || ""
                }
            }

            function X(t, e = "mobile") {
                return Object.values(t).filter((t => !!t[e].universal || !!t[e].native)).map((t => Q(t, e)))
            }
        },
        73419: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return Tt
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                decrypt: function() {
                    return xt
                },
                encrypt: function() {
                    return kt
                },
                generateKey: function() {
                    return Mt
                },
                verifyHmac: function() {
                    return Et
                }
            });
            var i = n(26729),
                o = n.n(i),
                s = n(46160),
                a = n(96641),
                u = n(37946);
            const c = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                l = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                h = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                };
            var f = n(11460),
                d = n.n(f),
                p = (n(4501), n(65054)),
                g = n.n(p),
                m = n(48764).Buffer;
            const _ = "hex",
                v = "utf8",
                w = "0";

            function y(t) {
                return new Uint8Array(t)
            }

            function b(t, e = !1) {
                const n = t.toString(_);
                return e ? N(n) : n
            }

            function M(t) {
                return t.toString(v)
            }

            function E(t) {
                return g()(t)
            }

            function k(t, e = !1) {
                return b(E(t), e)
            }

            function x(t) {
                return M(E(t))
            }

            function S(t) {
                return m.from(B(t), _)
            }

            function C(t) {
                return y(S(t))
            }

            function I(t) {
                return m.from(t, v)
            }

            function A(t) {
                return y(I(t))
            }

            function R(t, e) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
            }

            function T(...t) {
                let e = [];
                return t.forEach((t => e = e.concat(Array.from(t)))), new Uint8Array([...e])
            }

            function O(t, e = 8, n = "0") {
                return function(t, e, n = "0") {
                    return P(t, e, !0, n)
                }(t, function(t, e = 8) {
                    const n = t % e;
                    return n ? (t - n) / e * e + e : t
                }(t.length, e), n)
            }

            function B(t) {
                return t.replace(/^0x/, "")
            }

            function N(t) {
                return t.startsWith("0x") ? t : `0x${t}`
            }

            function L(t) {
                return (t = O(t = B(t), 2)) && (t = N(t)), t
            }

            function P(t, e, n, r = "0") {
                const i = e - t.length;
                let o = t;
                if (i > 0) {
                    const e = r.repeat(i);
                    o = n ? e + t : t + e
                }
                return o
            }

            function U(t) {
                return E(new Uint8Array(t))
            }

            function q(t, e) {
                return function(t, e = !1) {
                    return b(I(t), e)
                }(t, !e)
            }

            function j(t, e) {
                const n = B(L(new(d())(t).toString(16)));
                return e ? n : N(n)
            }
            var D = n(91094),
                z = n(56186);

            function F(t) {
                return L(t)
            }

            function W(t) {
                return function(t) {
                    const e = t.startsWith("0x");
                    return t = (t = B(t)).startsWith(w) ? t.substring(1) : t, e ? N(t) : t
                }(N(t))
            }
            const H = z.payloadId;

            function $() {
                return ((t, e) => {
                    for (e = t = ""; t++ < 36; e += 51 * t & 52 ? (15 ^ t ? 8 ^ Math.random() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
                    return e
                })()
            }

            function Y(t, e) {
                let n;
                const r = function(t, e) {
                    let n;
                    const r = h[t];
                    return r && (n = `https://${r}.infura.io/v3/${e}`), n
                }(t, e.infuraId);
                return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n
            }

            function J(t, e) {
                return R(t, e)
            }

            function K(t) {
                return "undefined" !== typeof t.result
            }

            function V(t) {
                return "undefined" !== typeof t.error
            }

            function Z(t) {
                return "undefined" !== typeof t.event
            }

            function Q(t) {
                t = B(t.toLowerCase());
                const e = B((0, D.keccak_256)(I(t)));
                let n = "";
                for (let r = 0; r < t.length; r++) parseInt(e[r], 16) > 7 ? n += t[r].toUpperCase() : n += t[r];
                return N(n)
            }

            function X(t) {
                var e;
                return (e = t) && e.length && !J(t[0]) && (t[0] = q(t[0])), t
            }

            function G(t) {
                if ("undefined" !== typeof t.type && "0" !== t.type) return t;
                if ("undefined" === typeof t.from || (!(e = t.from) || "0x" !== e.toLowerCase().substring(0, 2) || !/^(0x)?[0-9a-f]{40}$/i.test(e) || !/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e) && e !== Q(e))) throw new Error("Transaction object must include a valid 'from' value.");
                var e;

                function n(t) {
                    let e = t;
                    return ("number" === typeof t || "string" === typeof t && ! function(t) {
                        return "" === t || "string" === typeof t && "" === t.trim()
                    }(t)) && (J(t) ? "string" === typeof t && (e = F(t)) : e = j(t)), "string" === typeof e && (e = W(e)), e
                }
                const r = {
                        from: F(t.from),
                        to: "undefined" === typeof t.to ? void 0 : F(t.to),
                        gasPrice: "undefined" === typeof t.gasPrice ? "" : n(t.gasPrice),
                        gas: "undefined" === typeof t.gas ? "undefined" === typeof t.gasLimit ? "" : n(t.gasLimit) : n(t.gas),
                        value: "undefined" === typeof t.value ? "" : n(t.value),
                        nonce: "undefined" === typeof t.nonce ? "" : n(t.nonce),
                        data: "undefined" === typeof t.data ? "" : F(t.data) || "0x"
                    },
                    i = ["gasPrice", "gas", "value", "nonce"];
                return Object.keys(r).forEach((t => {
                    ("undefined" === typeof r[t] || "string" === typeof r[t] && !r[t].trim().length) && i.includes(t) && delete r[t]
                })), r
            }
            var tt = n(17563);

            function et(t, e) {
                let n = nt(t);
                return n = Object.assign(Object.assign({}, n), e), t = function(t) {
                    return tt.stringify(t)
                }(n), t
            }

            function nt(t) {
                return tt.parse(t)
            }
            var rt = class {
                constructor() {
                    this._eventEmitters = [], "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", (() => this.trigger("online"))), window.addEventListener("offline", (() => this.trigger("offline"))))
                }
                on(t, e) {
                    this._eventEmitters.push({
                        event: t,
                        callback: e
                    })
                }
                trigger(t) {
                    let e = [];
                    t && (e = this._eventEmitters.filter((e => e.event === t))), e.forEach((t => {
                        t.callback()
                    }))
                }
            };
            const it = "undefined" !== typeof n.g.WebSocket ? n.g.WebSocket : n(57026);
            var ot = class {
                constructor(t) {
                    if (this.opts = t, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new rt, !t.url || "string" !== typeof t.url) throw new Error("Missing or invalid WebSocket url");
                    this._url = t.url, this._netMonitor.on("online", (() => this._socketCreate()))
                }
                set readyState(t) {}
                get readyState() {
                    return this._socket ? this._socket.readyState : -1
                }
                set connecting(t) {}
                get connecting() {
                    return 0 === this.readyState
                }
                set connected(t) {}
                get connected() {
                    return 1 === this.readyState
                }
                set closing(t) {}
                get closing() {
                    return 2 === this.readyState
                }
                set closed(t) {}
                get closed() {
                    return 3 === this.readyState
                }
                open() {
                    this._socketCreate()
                }
                close() {
                    this._socketClose()
                }
                send(t, e, n) {
                    if (!e || "string" !== typeof e) throw new Error("Missing or invalid topic field");
                    this._socketSend({
                        topic: e,
                        type: "pub",
                        payload: t,
                        silent: !!n
                    })
                }
                subscribe(t) {
                    this._socketSend({
                        topic: t,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })
                }
                on(t, e) {
                    this._events.push({
                        event: t,
                        callback: e
                    })
                }
                _socketCreate() {
                    if (this._nextSocket) return;
                    const t = function(t, e, n) {
                        var r, i;
                        const o = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"),
                            s = (0, u.isBrowser)() ? {
                                protocol: e,
                                version: n,
                                env: "browser",
                                host: (null === (r = (0, u.getLocation)()) || void 0 === r ? void 0 : r.host) || ""
                            } : {
                                protocol: e,
                                version: n,
                                env: (null === (i = (0, u.detectEnv)()) || void 0 === i ? void 0 : i.name) || ""
                            },
                            a = et(function(t) {
                                const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                                return "undefined" !== typeof e ? t.substr(e) : ""
                            }(o[1] || ""), s);
                        return o[0] + "?" + a
                    }(this._url, this._protocol, this._version);
                    if (this._nextSocket = new it(t), !this._nextSocket) throw new Error("Failed to create socket");
                    this._nextSocket.onmessage = t => this._socketReceive(t), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = t => this._socketError(t), this._nextSocket.onclose = () => {
                        setTimeout((() => {
                            this._nextSocket = null, this._socketCreate()
                        }), 1e3)
                    }
                }
                _socketOpen() {
                    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                }
                _socketClose() {
                    this._socket && (this._socket.onclose = () => {}, this._socket.close())
                }
                _socketSend(t) {
                    const e = JSON.stringify(t);
                    this._socket && 1 === this._socket.readyState ? this._socket.send(e) : (this._setToQueue(t), this._socketCreate())
                }
                async _socketReceive(t) {
                    let e;
                    try {
                        e = JSON.parse(t.data)
                    } catch (n) {
                        return
                    }
                    if (this._socketSend({
                            topic: e.topic,
                            type: "ack",
                            payload: "",
                            silent: !0
                        }), this._socket && 1 === this._socket.readyState) {
                        const t = this._events.filter((t => "message" === t.event));
                        t && t.length && t.forEach((t => t.callback(e)))
                    }
                }
                _socketError(t) {
                    const e = this._events.filter((t => "error" === t.event));
                    e && e.length && e.forEach((e => e.callback(t)))
                }
                _queueSubscriptions() {
                    this._subscriptions.forEach((t => this._queue.push({
                        topic: t,
                        type: "sub",
                        payload: "",
                        silent: !0
                    }))), this._subscriptions = this.opts.subscriptions || []
                }
                _setToQueue(t) {
                    this._queue.push(t)
                }
                _pushQueue() {
                    this._queue.forEach((t => this._socketSend(t))), this._queue = []
                }
            };
            const st = "Session currently connected",
                at = "Session currently disconnected",
                ut = "JSON RPC response format is invalid",
                ct = "User close QRCode Modal";
            var lt = class {
                constructor() {
                    this._eventEmitters = []
                }
                subscribe(t) {
                    this._eventEmitters.push(t)
                }
                unsubscribe(t) {
                    this._eventEmitters = this._eventEmitters.filter((e => e.event !== t))
                }
                trigger(t) {
                    let e, n = [];
                    e = "undefined" !== typeof t.method ? t.method : K(t) || V(t) ? `response:${t.id}` : Z(t) ? t.event : "", e && (n = this._eventEmitters.filter((t => t.event === e))), n && n.length || function(t) {
                        return c.includes(t) || t.startsWith("wc_")
                    }(e) || Z(e) || (n = this._eventEmitters.filter((t => "call_request" === t.event))), n.forEach((e => {
                        if (V(t)) {
                            const n = new Error(t.error.message);
                            e.callback(n, null)
                        } else e.callback(null, t)
                    }))
                }
            };
            var ht = class {
                constructor(t = "walletconnect") {
                    this.storageId = t
                }
                getSession() {
                    let t = null;
                    const e = (0, u.getLocal)(this.storageId);
                    return e && "undefined" !== typeof e.bridge && (t = e), t
                }
                setSession(t) {
                    return (0, u.setLocal)(this.storageId, t), t
                }
                removeSession() {
                    (0, u.removeLocal)(this.storageId)
                }
            };
            const ft = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((t => `https://${t}.bridge.walletconnect.org`));

            function dt() {
                return ft[Math.floor(Math.random() * ft.length)]
            }
            var pt = class {
                    constructor(t) {
                        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new lt, this._clientMeta = (0, u.getClientMeta)() || t.connectorOpts.clientMeta || null, this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new ht(t.connectorOpts.storageId), this._qrcodeModal = t.connectorOpts.qrcodeModal, this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, this._signingMethods = [...l, ...t.connectorOpts.signingMethods || []], !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw new Error("Missing one of the required parameters: bridge / uri / session");
                        var e;
                        t.connectorOpts.bridge && (this.bridge = function(t) {
                            return "walletconnect.org" === function(t) {
                                return function(t) {
                                    let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
                                    return e = e.split(":")[0], e = e.split("?")[0], e
                                }(t).split(".").slice(-2).join(".")
                            }(t)
                        }(e = t.connectorOpts.bridge) ? dt() : e), t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
                        const n = t.connectorOpts.session || this._getStorageSession();
                        n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = t.transport || new ot({
                            protocol: this.protocol,
                            version: this.version,
                            url: this.bridge,
                            subscriptions: [this.clientId]
                        }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), t.pushServerOpts && this._registerPushServer(t.pushServerOpts)
                    }
                    set bridge(t) {
                        t && (this._bridge = t)
                    }
                    get bridge() {
                        return this._bridge
                    }
                    set key(t) {
                        if (!t) return;
                        const e = C(t).buffer;
                        this._key = e
                    }
                    get key() {
                        if (this._key) {
                            return t = this._key, e = !0, k(new Uint8Array(t), !e)
                        }
                        var t, e;
                        return ""
                    }
                    set clientId(t) {
                        t && (this._clientId = t)
                    }
                    get clientId() {
                        let t = this._clientId;
                        return t || (t = this._clientId = $()), this._clientId
                    }
                    set peerId(t) {
                        t && (this._peerId = t)
                    }
                    get peerId() {
                        return this._peerId
                    }
                    set clientMeta(t) {}
                    get clientMeta() {
                        let t = this._clientMeta;
                        return t || (t = this._clientMeta = (0, u.getClientMeta)()), t
                    }
                    set peerMeta(t) {
                        this._peerMeta = t
                    }
                    get peerMeta() {
                        return this._peerMeta
                    }
                    set handshakeTopic(t) {
                        t && (this._handshakeTopic = t)
                    }
                    get handshakeTopic() {
                        return this._handshakeTopic
                    }
                    set handshakeId(t) {
                        t && (this._handshakeId = t)
                    }
                    get handshakeId() {
                        return this._handshakeId
                    }
                    get uri() {
                        return this._formatUri()
                    }
                    set uri(t) {
                        if (!t) return;
                        const {
                            handshakeTopic: e,
                            bridge: n,
                            key: r
                        } = this._parseUri(t);
                        this.handshakeTopic = e, this.bridge = n, this.key = r
                    }
                    set chainId(t) {
                        this._chainId = t
                    }
                    get chainId() {
                        return this._chainId
                    }
                    set networkId(t) {
                        this._networkId = t
                    }
                    get networkId() {
                        return this._networkId
                    }
                    set accounts(t) {
                        this._accounts = t
                    }
                    get accounts() {
                        return this._accounts
                    }
                    set rpcUrl(t) {
                        this._rpcUrl = t
                    }
                    get rpcUrl() {
                        return this._rpcUrl
                    }
                    set connected(t) {}
                    get connected() {
                        return this._connected
                    }
                    set pending(t) {}
                    get pending() {
                        return !!this._handshakeTopic
                    }
                    get session() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    }
                    set session(t) {
                        t && (this._connected = t.connected, this.accounts = t.accounts, this.chainId = t.chainId, this.bridge = t.bridge, this.key = t.key, this.clientId = t.clientId, this.clientMeta = t.clientMeta, this.peerId = t.peerId, this.peerMeta = t.peerMeta, this.handshakeId = t.handshakeId, this.handshakeTopic = t.handshakeTopic)
                    }
                    on(t, e) {
                        const n = {
                            event: t,
                            callback: e
                        };
                        this._eventManager.subscribe(n)
                    }
                    off(t) {
                        this._eventManager.unsubscribe(t)
                    }
                    async createInstantRequest(t) {
                        this._key = await this._generateKey();
                        const e = this._formatRequest({
                            method: "wc_instantRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                request: this._formatRequest(t)
                            }]
                        });
                        this.handshakeId = e.id, this.handshakeTopic = $(), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        }), this.on("modal_closed", (() => {
                            throw new Error(ct)
                        }));
                        const n = () => {
                            this.killSession()
                        };
                        try {
                            const t = await this._sendCallRequest(e);
                            return t && n(), t
                        } catch (r) {
                            throw n(), r
                        }
                    }
                    async connect(t) {
                        if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
                        return this.connected ? {
                            chainId: this.chainId,
                            accounts: this.accounts
                        } : (await this.createSession(t), new Promise((async (t, e) => {
                            this.on("modal_closed", (() => e(new Error(ct)))), this.on("connect", ((n, r) => {
                                if (n) return e(n);
                                t(r.params[0])
                            }))
                        })))
                    }
                    async createSession(t) {
                        if (this._connected) throw new Error(st);
                        if (this.pending) return;
                        this._key = await this._generateKey();
                        const e = this._formatRequest({
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: t && t.chainId ? t.chainId : null
                            }]
                        });
                        this.handshakeId = e.id, this.handshakeTopic = $(), this._sendSessionRequest(e, "Session update rejected", {
                            topic: this.handshakeTopic
                        }), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        })
                    }
                    approveSession(t) {
                        if (this._connected) throw new Error(st);
                        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                        const e = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            n = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: e
                            };
                        this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                    rejectSession(t) {
                        if (this._connected) throw new Error(st);
                        const e = t && t.message ? t.message : "Session Rejected",
                            n = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: e
                                }
                            });
                        this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: e
                            }]
                        }), this._removeStorageSession()
                    }
                    updateSession(t) {
                        if (!this._connected) throw new Error(at);
                        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                        const e = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [e]
                            });
                        this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                    async killSession(t) {
                        const e = t ? t.message : "Session Disconnected",
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            });
                        await this._sendRequest(n), this._handleSessionDisconnect(e)
                    }
                    async sendTransaction(t) {
                        if (!this._connected) throw new Error(at);
                        const e = G(t),
                            n = this._formatRequest({
                                method: "eth_sendTransaction",
                                params: [e]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signTransaction(t) {
                        if (!this._connected) throw new Error(at);
                        const e = G(t),
                            n = this._formatRequest({
                                method: "eth_signTransaction",
                                params: [e]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signMessage(t) {
                        if (!this._connected) throw new Error(at);
                        const e = this._formatRequest({
                            method: "eth_sign",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async signPersonalMessage(t) {
                        if (!this._connected) throw new Error(at);
                        t = X(t);
                        const e = this._formatRequest({
                            method: "personal_sign",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async signTypedData(t) {
                        if (!this._connected) throw new Error(at);
                        const e = this._formatRequest({
                            method: "eth_signTypedData",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async updateChain(t) {
                        if (!this._connected) throw new Error("Session currently disconnected");
                        const e = this._formatRequest({
                            method: "wallet_updateChain",
                            params: [t]
                        });
                        return await this._sendCallRequest(e)
                    }
                    unsafeSend(t, e) {
                        return this._sendRequest(t, e), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: t,
                                options: e
                            }]
                        }), new Promise(((e, n) => {
                            this._subscribeToResponse(t.id, ((t, r) => {
                                if (t) n(t);
                                else {
                                    if (!r) throw new Error("Missing JSON RPC response");
                                    e(r)
                                }
                            }))
                        }))
                    }
                    async sendCustomRequest(t, e) {
                        if (!this._connected) throw new Error(at);
                        switch (t.method) {
                            case "eth_accounts":
                                return this.accounts;
                            case "eth_chainId":
                                return j(this.chainId);
                            case "eth_sendTransaction":
                            case "eth_signTransaction":
                                t.params && (t.params[0] = G(t.params[0]));
                                break;
                            case "personal_sign":
                                t.params && (t.params = X(t.params))
                        }
                        const n = this._formatRequest(t);
                        return await this._sendCallRequest(n, e)
                    }
                    approveRequest(t) {
                        if (!K(t)) throw new Error('JSON-RPC success response must include "result" field'); {
                            const e = this._formatResponse(t);
                            this._sendResponse(e)
                        }
                    }
                    rejectRequest(t) {
                        if (!V(t)) throw new Error('JSON-RPC error response must include "error" field'); {
                            const e = this._formatResponse(t);
                            this._sendResponse(e)
                        }
                    }
                    transportClose() {
                        this._transport.close()
                    }
                    async _sendRequest(t, e) {
                        const n = this._formatRequest(t),
                            r = await this._encrypt(n),
                            i = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.topic) ? e.topic : this.peerId,
                            o = JSON.stringify(r),
                            s = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.forcePushNotification) ? !e.forcePushNotification : function(t) {
                                return !!t.method.startsWith("wc_") || !l.includes(t.method)
                            }(n);
                        this._transport.send(o, i, s)
                    }
                    async _sendResponse(t) {
                        const e = await this._encrypt(t),
                            n = this.peerId,
                            r = JSON.stringify(e);
                        this._transport.send(r, n, !0)
                    }
                    async _sendSessionRequest(t, e, n) {
                        this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, e)
                    }
                    _sendCallRequest(t, e) {
                        return this._sendRequest(t, e), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: t,
                                options: e
                            }]
                        }), this._subscribeToCallResponse(t.id)
                    }
                    _formatRequest(t) {
                        if ("undefined" === typeof t.method) throw new Error('JSON RPC request must have valid "method" value');
                        return {
                            id: "undefined" === typeof t.id ? H() : t.id,
                            jsonrpc: "2.0",
                            method: t.method,
                            params: "undefined" === typeof t.params ? [] : t.params
                        }
                    }
                    _formatResponse(t) {
                        if ("undefined" === typeof t.id) throw new Error('JSON RPC request must have valid "id" value');
                        const e = {
                            id: t.id,
                            jsonrpc: "2.0"
                        };
                        if (V(t)) {
                            const n = function(t) {
                                const e = t.message || "Failed or Rejected Request";
                                let n = -32e3;
                                if (t && !t.code) switch (e) {
                                    case "Parse error":
                                        n = -32700;
                                        break;
                                    case "Invalid request":
                                        n = -32600;
                                        break;
                                    case "Method not found":
                                        n = -32601;
                                        break;
                                    case "Invalid params":
                                        n = -32602;
                                        break;
                                    case "Internal error":
                                        n = -32603;
                                        break;
                                    default:
                                        n = -32e3
                                }
                                const r = {
                                    code: n,
                                    message: e
                                };
                                return t.data && (r.data = t.data), r
                            }(t.error);
                            return Object.assign(Object.assign(Object.assign({}, e), t), {
                                error: n
                            })
                        }
                        if (K(t)) {
                            return Object.assign(Object.assign({}, e), t)
                        }
                        throw new Error(ut)
                    }
                    _handleSessionDisconnect(t) {
                        const e = t || "Session Disconnected";
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, u.removeLocal)(u.mobileLinkChoiceKey)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: e
                            }]
                        }), this._removeStorageSession(), this.transportClose()
                    }
                    _handleSessionResponse(t, e) {
                        e && e.approved ? (this._connected ? (e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), e.peerId && !this.peerId && (this.peerId = e.peerId), e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(t)
                    }
                    async _handleIncomingMessages(t) {
                        if (![this.clientId, this.handshakeTopic].includes(t.topic)) return;
                        let e;
                        try {
                            e = JSON.parse(t.payload)
                        } catch (r) {
                            return
                        }
                        const n = await this._decrypt(e);
                        n && this._eventManager.trigger(n)
                    }
                    _subscribeToSessionRequest() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                    _subscribeToResponse(t, e) {
                        this.on(`response:${t}`, e)
                    }
                    _subscribeToSessionResponse(t, e) {
                        this._subscribeToResponse(t, ((t, n) => {
                            t ? this._handleSessionResponse(t.message) : K(n) ? this._handleSessionResponse(e, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(e)
                        }))
                    }
                    _subscribeToCallResponse(t) {
                        return new Promise(((e, n) => {
                            this._subscribeToResponse(t, ((t, r) => {
                                t ? n(t) : K(r) ? e(r.result) : r.error && r.error.message ? n(r.error) : n(new Error(ut))
                            }))
                        }))
                    }
                    _subscribeToInternalEvents() {
                        this.on("display_uri", (() => {
                            this._qrcodeModal && this._qrcodeModal.open(this.uri, (() => {
                                this._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }), this._qrcodeModalOptions)
                        })), this.on("connect", (() => {
                            this._qrcodeModal && this._qrcodeModal.close()
                        })), this.on("call_request_sent", ((t, e) => {
                            const {
                                request: n
                            } = e.params[0];
                            if ((0, u.isMobile)() && this._signingMethods.includes(n.method)) {
                                const t = (0, u.getLocal)(u.mobileLinkChoiceKey);
                                t && (window.location.href = t.href)
                            }
                        })), this.on("wc_sessionRequest", ((t, e) => {
                            t && this._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: t.toString()
                                }]
                            }), this.handshakeId = e.id, this.peerId = e.params[0].peerId, this.peerMeta = e.params[0].peerMeta;
                            const n = Object.assign(Object.assign({}, e), {
                                method: "session_request"
                            });
                            this._eventManager.trigger(n)
                        })), this.on("wc_sessionUpdate", ((t, e) => {
                            t && this._handleSessionResponse(t.message), this._handleSessionResponse("Session disconnected", e.params[0])
                        }))
                    }
                    _initTransport() {
                        this._transport.on("message", (t => this._handleIncomingMessages(t))), this._transport.on("open", (() => this._eventManager.trigger({
                            event: "transport_open",
                            params: []
                        }))), this._transport.on("close", (() => this._eventManager.trigger({
                            event: "transport_close",
                            params: []
                        }))), this._transport.on("error", (() => this._eventManager.trigger({
                            event: "transport_error",
                            params: ["Websocket connection failed"]
                        }))), this._transport.open()
                    }
                    _formatUri() {
                        return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
                    }
                    _parseUri(t) {
                        const e = function(t) {
                            const e = t.indexOf(":"),
                                n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                                r = t.substring(0, e),
                                i = function(t) {
                                    const e = t.split("@");
                                    return {
                                        handshakeTopic: e[0],
                                        version: parseInt(e[1], 10)
                                    }
                                }(t.substring(e + 1, n)),
                                o = function(t) {
                                    const e = nt(t);
                                    return {
                                        key: e.key || "",
                                        bridge: e.bridge || ""
                                    }
                                }("undefined" !== typeof n ? t.substr(n) : "");
                            return Object.assign(Object.assign({
                                protocol: r
                            }, i), o)
                        }(t);
                        if (e.protocol === this.protocol) {
                            if (!e.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            const t = e.handshakeTopic;
                            if (!e.bridge) throw Error("Invalid or missing bridge url parameter value");
                            const n = decodeURIComponent(e.bridge);
                            if (!e.key) throw Error("Invalid or missing key parameter value");
                            return {
                                handshakeTopic: t,
                                bridge: n,
                                key: e.key
                            }
                        }
                        throw new Error("URI format is invalid")
                    }
                    async _generateKey() {
                        if (this._cryptoLib) {
                            return await this._cryptoLib.generateKey()
                        }
                        return null
                    }
                    async _encrypt(t) {
                        const e = this._key;
                        if (this._cryptoLib && e) {
                            return await this._cryptoLib.encrypt(t, e)
                        }
                        return null
                    }
                    async _decrypt(t) {
                        const e = this._key;
                        if (this._cryptoLib && e) {
                            return await this._cryptoLib.decrypt(t, e)
                        }
                        return null
                    }
                    _getStorageSession() {
                        let t = null;
                        return this._sessionStorage && (t = this._sessionStorage.getSession()), t
                    }
                    _setStorageSession() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                    _removeStorageSession() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                    _manageStorageSession() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                    _registerPushServer(t) {
                        if (!t.url || "string" !== typeof t.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!t.type || "string" !== typeof t.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!t.token || "string" !== typeof t.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        const e = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: t.type,
                            token: t.token,
                            peerName: "",
                            language: t.language || ""
                        };
                        this.on("connect", (async (n, r) => {
                            if (n) throw n;
                            if (t.peerMeta) {
                                const t = r.params[0].peerMeta.name;
                                e.peerName = t
                            }
                            try {
                                const n = await fetch(`${t.url}/new`, {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(e)
                                });
                                if (!(await n.json()).success) throw Error("Failed to register in Push Server")
                            } catch (n) {
                                throw Error("Failed to register in Push Server")
                            }
                        }))
                    }
                },
                gt = n(1468);
            const mt = "AES-CBC",
                _t = "HMAC";
            async function vt(t, e = "AES-CBC") {
                return gt.getSubtleCrypto().importKey("raw", t, function(t) {
                    return t === mt ? {
                        length: 256,
                        name: mt
                    } : {
                        hash: {
                            name: "SHA-256"
                        },
                        name: _t
                    }
                }(e), !0, function(t) {
                    return t === mt ? ["encrypt", "decrypt"] : ["sign", "verify"]
                }(e))
            }

            function wt(t, e, n) {
                return async function(t, e, n) {
                    const r = gt.getSubtleCrypto(),
                        i = await vt(e, mt),
                        o = await r.encrypt({
                            iv: t,
                            name: mt
                        }, i, n);
                    return new Uint8Array(o)
                }(t, e, n)
            }

            function yt(t, e, n) {
                return async function(t, e, n) {
                    const r = gt.getSubtleCrypto(),
                        i = await vt(e, mt),
                        o = await r.decrypt({
                            iv: t,
                            name: mt
                        }, i, n);
                    return new Uint8Array(o)
                }(t, e, n)
            }
            async function bt(t, e) {
                const n = await async function(t, e) {
                    const n = gt.getSubtleCrypto(),
                        r = await vt(t, _t),
                        i = await n.sign({
                            length: 256,
                            name: _t
                        }, r, e);
                    return new Uint8Array(i)
                }(t, e);
                return n
            }
            async function Mt(t) {
                const e = function(t) {
                    return gt.getBrowerCrypto().getRandomValues(new Uint8Array(t))
                }((t || 256) / 8);
                return y(E(e)).buffer
            }
            async function Et(t, e) {
                const n = C(t.data),
                    r = C(t.iv),
                    i = k(C(t.hmac), !1),
                    o = T(n, r),
                    s = k(await bt(e, o), !1);
                return B(i) === B(s)
            }
            async function kt(t, e, n) {
                const r = y(U(e)),
                    i = y(U(n || await Mt(128))),
                    o = k(i, !1),
                    s = A(JSON.stringify(t)),
                    a = await wt(i, r, s),
                    u = k(a, !1),
                    c = T(a, i);
                return {
                    data: u,
                    hmac: k(await bt(r, c), !1),
                    iv: o
                }
            }
            async function xt(t, e) {
                const n = y(U(e));
                if (!n) throw new Error("Missing key: required for decryption");
                if (!(await Et(t, n))) return null;
                const r = C(t.data),
                    i = C(t.iv),
                    o = x(await yt(i, n, r));
                let s;
                try {
                    s = JSON.parse(o)
                } catch (a) {
                    return null
                }
                return s
            }
            var St = class extends pt {
                    constructor(t, e) {
                        super({
                            cryptoLib: r,
                            connectorOpts: t,
                            pushServerOpts: e
                        })
                    }
                },
                Ct = n(4337),
                It = n.n(Ct),
                At = n(73416);
            class Rt extends At.XR {
                constructor(t) {
                    super(), this.events = new(o()), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = t, this.chainId = (null === t || void 0 === t ? void 0 : t.chainId) || this.chainId, this.wc = this.register(t)
                }
                get connected() {
                    return "undefined" !== typeof this.wc && this.wc.connected
                }
                get connecting() {
                    return this.pending
                }
                get connector() {
                    return this.wc = this.register(this.opts), this.wc
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t) {
                    if (!this.connected) return new Promise(((e, n) => {
                        this.on("error", (t => {
                            n(t)
                        })), this.on("open", (() => {
                            e()
                        })), this.create(t)
                    }));
                    this.onOpen()
                }
                async close() {
                    "undefined" !== typeof this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
                }
                async send(t) {
                    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(t).then((t => this.events.emit("payload", t))).catch((e => this.events.emit("payload", (0, z.formatJsonRpcError)(t.id, e.message))))
                }
                register(t) {
                    if (this.wc) return this.wc;
                    this.opts = t || this.opts, this.bridge = (null === t || void 0 === t ? void 0 : t.connector) ? t.connector.bridge : (null === t || void 0 === t ? void 0 : t.bridge) || "https://bridge.walletconnect.org", this.qrcode = "undefined" === typeof(null === t || void 0 === t ? void 0 : t.qrcode) || !1 !== t.qrcode, this.chainId = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.chainId) ? t.chainId : this.chainId, this.qrcodeModalOptions = null === t || void 0 === t ? void 0 : t.qrcodeModalOptions;
                    const e = {
                        bridge: this.bridge,
                        qrcodeModal: this.qrcode ? It() : void 0,
                        qrcodeModalOptions: this.qrcodeModalOptions,
                        storageId: null === t || void 0 === t ? void 0 : t.storageId,
                        signingMethods: null === t || void 0 === t ? void 0 : t.signingMethods,
                        clientMeta: null === t || void 0 === t ? void 0 : t.clientMeta
                    };
                    if (this.wc = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.connector) ? t.connector : new St(e), "undefined" === typeof this.wc) throw new Error("Failed to register WalletConnect connector");
                    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
                }
                onOpen(t) {
                    this.pending = !1, t && (this.wc = t), this.events.emit("open")
                }
                onClose() {
                    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
                }
                onError(t, e = "Failed or Rejected Request", n = -32e3, r) {
                    const i = {
                        id: t.id,
                        jsonrpc: t.jsonrpc,
                        error: {
                            code: n,
                            message: e
                        }
                    };
                    return "undefined" !== typeof r && (i.error.data = r), this.events.emit("payload", i), i
                }
                create(t) {
                    this.wc = this.register(this.opts), this.chainId = t || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
                        chainId: this.chainId
                    }).then((() => this.events.emit("created"))).catch((t => this.events.emit("error", t))))
                }
                registerConnectorEvents() {
                    this.wc = this.register(this.opts), this.wc.on("connect", (t => {
                        var e, n;
                        t ? this.events.emit("error", t) : (this.accounts = (null === (e = this.wc) || void 0 === e ? void 0 : e.accounts) || [], this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId, this.onOpen())
                    })), this.wc.on("disconnect", (t => {
                        t ? this.events.emit("error", t) : this.onClose()
                    })), this.wc.on("modal_closed", (() => {
                        this.events.emit("error", new Error("User closed modal"))
                    })), this.wc.on("session_update", ((t, e) => {
                        const {
                            accounts: n,
                            chainId: r
                        } = e.params[0];
                        (!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, this.events.emit("chainChanged", r))
                    }))
                }
                async sendPayload(t) {
                    this.wc = this.register(this.opts);
                    try {
                        const e = await this.wc.unsafeSend(t);
                        return this.sanitizeResponse(e)
                    } catch (e) {
                        return this.onError(t, e.message)
                    }
                }
                sanitizeResponse(t) {
                    return "undefined" !== typeof t.error && "undefined" === typeof t.error.code ? (0, z.formatJsonRpcError)(t.id, t.error.message, t.error.data) : t
                }
            }
            var Tt = class {
                constructor(t) {
                    this.events = new(o()), this.rpc = {
                        infuraId: null === t || void 0 === t ? void 0 : t.infuraId,
                        custom: null === t || void 0 === t ? void 0 : t.rpc
                    }, this.signer = new s.r(new Rt(t));
                    const e = this.signer.connection.chainId || (null === t || void 0 === t ? void 0 : t.chainId) || 1;
                    this.http = this.setHttpProvider(e), this.registerEventListeners()
                }
                get connected() {
                    return this.signer.connection.connected
                }
                get connector() {
                    return this.signer.connection.connector
                }
                get accounts() {
                    return this.signer.connection.accounts
                }
                get chainId() {
                    return this.signer.connection.chainId
                }
                get rpcUrl() {
                    var t;
                    return (null === (t = this.http) || void 0 === t ? void 0 : t.connection).url || ""
                }
                async request(t) {
                    switch (t.method) {
                        case "eth_requestAccounts":
                            return await this.connect(), this.signer.connection.accounts;
                        case "eth_accounts":
                            return this.signer.connection.accounts;
                        case "eth_chainId":
                            return this.signer.connection.chainId
                    }
                    if (l.includes(t.method)) return this.signer.request(t);
                    if ("undefined" === typeof this.http) throw new Error(`Cannot request JSON-RPC method (${t.method}) without provided rpc url`);
                    return this.http.request(t)
                }
                sendAsync(t, e) {
                    this.request(t).then((t => e(null, t))).catch((t => e(t, void 0)))
                }
                async enable() {
                    return await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect() {
                    this.signer.connection.connected || await this.signer.connect()
                }
                async disconnect() {
                    this.signer.connection.connected && await this.signer.disconnect()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                registerEventListeners() {
                    this.signer.connection.on("accountsChanged", (t => {
                        this.events.emit("accountsChanged", t)
                    })), this.signer.connection.on("chainChanged", (t => {
                        this.http = this.setHttpProvider(t), this.events.emit("chainChanged", t)
                    })), this.signer.on("disconnect", (() => {
                        this.events.emit("disconnect")
                    }))
                }
                setHttpProvider(t) {
                    const e = Y(t, this.rpc);
                    if ("undefined" === typeof e) return;
                    return new s.r(new a.k(e))
                }
            }
        },
        4337: function(t, e, n) {
            var r = n(83454);

            function i(t) {
                return t && "object" === typeof t && "default" in t ? t.default : t
            }
            var o = n(37946),
                s = i(n(92592)),
                a = i(n(20640)),
                u = n(89714);
            "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var c = "walletconnect-wrapper",
                l = "walletconnect-style-sheet",
                h = "walletconnect-qrcode-modal",
                f = "walletconnect-qrcode-text";

            function d(t) {
                return u.createElement("div", {
                    className: "walletconnect-modal__header"
                }, u.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='https://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), u.createElement("p", null, "WalletConnect"), u.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: t.onClose
                }, u.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, u.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), u.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }

            function p(t) {
                return u.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: t.href,
                    id: "walletconnect-connect-button-" + t.name,
                    onClick: t.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: t.color
                    },
                    target: "_blank"
                }, t.name)
            }

            function g(t) {
                var e = t.color,
                    n = t.href,
                    r = t.name,
                    i = t.logo,
                    o = t.onClick;
                return u.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: n,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, u.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, r), u.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, u.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + i + "') " + e,
                        backgroundSize: "100%"
                    }
                }), u.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='https://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function m(t) {
                var e = t.color,
                    n = t.href,
                    r = t.name,
                    i = t.logo,
                    o = t.onClick,
                    s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                return u.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: n,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, u.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + i + "') " + e,
                        backgroundSize: "100%"
                    }
                }), u.createElement("div", {
                    style: {
                        fontSize: s
                    },
                    className: "walletconnect-connect__button__text"
                }, r))
            }

            function _(t) {
                var e = o.isAndroid(),
                    n = u.useState(""),
                    r = n[0],
                    i = n[1],
                    s = u.useState(""),
                    a = s[0],
                    c = s[1],
                    l = u.useState(1),
                    h = l[0],
                    d = l[1],
                    _ = a ? t.links.filter((function(t) {
                        return t.name.toLowerCase().includes(a.toLowerCase())
                    })) : t.links,
                    v = t.errorMessage,
                    w = a || _.length > 5,
                    y = Math.ceil(_.length / 12),
                    b = [12 * (h - 1) + 1, 12 * h],
                    M = _.length ? _.filter((function(t, e) {
                        return e + 1 >= b[0] && e + 1 <= b[1]
                    })) : [],
                    E = !(e || !(y > 1)),
                    k = void 0;
                return u.createElement("div", null, u.createElement("p", {
                    id: f,
                    className: "walletconnect-qrcode__text"
                }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && u.createElement("input", {
                    className: "walletconnect-search__input",
                    placeholder: "Search",
                    value: r,
                    onChange: function(t) {
                        i(t.target.value), clearTimeout(k), t.target.value ? k = setTimeout((function() {
                            c(t.target.value), d(1)
                        }), 1e3) : (i(""), c(""), d(1))
                    }
                }), u.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : w && _.length ? "__wrap" : "")
                }, e ? u.createElement(p, {
                    name: t.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: t.uri,
                    onClick: u.useCallback((function() {
                        o.saveMobileLinkInfo({
                            name: "Unknown",
                            href: t.uri
                        })
                    }), [])
                }) : M.length ? M.map((function(e) {
                    var n = e.color,
                        r = e.name,
                        i = e.shortName,
                        s = e.logo,
                        a = o.formatIOSMobile(t.uri, e),
                        c = u.useCallback((function() {
                            o.saveMobileLinkInfo({
                                name: r,
                                href: a
                            })
                        }), [M]);
                    return w ? u.createElement(m, {
                        color: n,
                        href: a,
                        name: i || r,
                        logo: s,
                        onClick: c
                    }) : u.createElement(g, {
                        color: n,
                        href: a,
                        name: r,
                        logo: s,
                        onClick: c
                    })
                })) : u.createElement(u.Fragment, null, u.createElement("p", null, v.length ? t.errorMessage : t.links.length && !_.length ? t.text.no_wallets_found : t.text.loading))), E && u.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(y).fill(0).map((function(t, e) {
                    var n = e + 1,
                        r = h === n;
                    return u.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: r ? "bold" : "normal"
                        },
                        onClick: function() {
                            return d(n)
                        }
                    }, n)
                }))))
            }

            function v(t) {
                var e = !!t.message.trim();
                return u.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
                }, t.message)
            }

            function w(t) {
                var e = u.useState(""),
                    n = e[0],
                    r = e[1],
                    i = u.useState(""),
                    o = i[0],
                    c = i[1];
                u.useEffect((function() {
                    try {
                        return Promise.resolve(function(t) {
                            try {
                                var e = "";
                                return Promise.resolve(s.toString(t, {
                                    margin: 0,
                                    type: "svg"
                                })).then((function(t) {
                                    return "string" === typeof t && (e = t.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e
                                }))
                            } catch (n) {
                                return Promise.reject(n)
                            }
                        }(t.uri)).then((function(t) {
                            c(t)
                        }))
                    } catch (e) {
                        Promise.reject(e)
                    }
                }), []);
                return u.createElement("div", null, u.createElement("p", {
                    id: f,
                    className: "walletconnect-qrcode__text"
                }, t.text.scan_qrcode_with_wallet), u.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), u.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, u.createElement("a", {
                    onClick: function() {
                        a(t.uri) ? (r(t.text.copied_to_clipboard), setInterval((function() {
                            return r("")
                        }), 1200)) : (r("Error"), setInterval((function() {
                            return r("")
                        }), 1200))
                    }
                }, t.text.copy_to_clipboard)), u.createElement(v, {
                    message: n
                }))
            }

            function y(t) {
                var e = o.isAndroid(),
                    n = o.isMobile(),
                    r = n ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0,
                    i = u.useState(!1),
                    s = i[0],
                    a = i[1],
                    c = u.useState(!1),
                    l = c[0],
                    f = c[1],
                    p = u.useState(!n),
                    g = p[0],
                    m = p[1],
                    v = {
                        mobile: n,
                        text: t.text,
                        uri: t.uri,
                        qrcodeModalOptions: t.qrcodeModalOptions
                    },
                    y = u.useState(""),
                    b = y[0],
                    M = y[1],
                    E = u.useState(!1),
                    k = E[0],
                    x = E[1],
                    S = u.useState([]),
                    C = S[0],
                    I = S[1],
                    A = u.useState(""),
                    R = A[0],
                    T = A[1],
                    O = function() {
                        l || s || r && !r.length || C.length > 0 || u.useEffect((function() {
                            ! function() {
                                try {
                                    if (e) return Promise.resolve();
                                    a(!0);
                                    var i = function(t, e) {
                                        try {
                                            var n = t()
                                        } catch (r) {
                                            return e(r)
                                        }
                                        return n && n.then ? n.then(void 0, e) : n
                                    }((function() {
                                        var e = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : o.getWalletRegistryUrl();
                                        return Promise.resolve(fetch(e)).then((function(e) {
                                            return Promise.resolve(e.json()).then((function(e) {
                                                var i = e.listings,
                                                    s = n ? "mobile" : "desktop",
                                                    u = o.getMobileLinkRegistry(o.formatMobileRegistry(i, s), r);
                                                a(!1), f(!0), T(u.length ? "" : t.text.no_supported_wallets), I(u);
                                                var c = 1 === u.length;
                                                c && (M(o.formatIOSMobile(t.uri, u[0])), m(!0)), x(c)
                                            }))
                                        }))
                                    }), (function(e) {
                                        a(!1), f(!0), T(t.text.something_went_wrong), console.error(e)
                                    }));
                                    Promise.resolve(i && i.then ? i.then((function() {})) : void 0)
                                } catch (s) {
                                    return Promise.reject(s)
                                }
                            }()
                        }))
                    };
                O();
                var B = n ? g : !g;
                return u.createElement("div", {
                    id: h,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, u.createElement("div", {
                    className: "walletconnect-modal__base"
                }, u.createElement(d, {
                    onClose: t.onClose
                }), k && g ? u.createElement("div", {
                    className: "walletconnect-modal__single_wallet"
                }, u.createElement("a", {
                    onClick: function() {
                        return o.saveMobileLinkInfo({
                            name: C[0].name,
                            href: b
                        })
                    },
                    href: b,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, t.text.connect_with + " " + (k ? C[0].name : "") + " \u203a")) : e || s || !s && C.length ? u.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + (B ? " right__selected" : "")
                }, u.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), n ? u.createElement(u.Fragment, null, u.createElement("a", {
                    onClick: function() {
                        return m(!1), O()
                    }
                }, t.text.mobile), u.createElement("a", {
                    onClick: function() {
                        return m(!0)
                    }
                }, t.text.qrcode)) : u.createElement(u.Fragment, null, u.createElement("a", {
                    onClick: function() {
                        return m(!0)
                    }
                }, t.text.qrcode), u.createElement("a", {
                    onClick: function() {
                        return m(!1), O()
                    }
                }, t.text.desktop))) : null, u.createElement("div", null, g || !e && !s && !C.length ? u.createElement(w, Object.assign({}, v)) : u.createElement(_, Object.assign({}, v, {
                    links: C,
                    errorMessage: R
                })))))
            }
            var b = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!",
                    connect_with: "Verbinden mit Hilfe von",
                    loading: "Laden...",
                    something_went_wrong: "Etwas ist schief gelaufen",
                    no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                    no_wallets_found: "keine Wallet gefunden"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!",
                    connect_with: "Connect with",
                    loading: "Loading...",
                    something_went_wrong: "Something went wrong",
                    no_supported_wallets: "There are no supported wallets yet",
                    no_wallets_found: "No wallets found"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Conectar mediante",
                    loading: "Cargando...",
                    something_went_wrong: "Algo sali\xf3 mal",
                    no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                    no_wallets_found: "No se encontraron billeteras"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!",
                    connect_with: "Connectez-vous \xe0 l'aide de",
                    loading: "Chargement...",
                    something_went_wrong: "Quelque chose a mal tourn\xe9",
                    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                    no_wallets_found: "Aucun portefeuille trouv\xe9"
                },
                ko: {
                    choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
                    connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
                    scan_qrcode_with_wallet: "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
                    connect: "\uc5f0\uacb0",
                    qrcode: "QR \ucf54\ub4dc",
                    mobile: "\ubaa8\ubc14\uc77c",
                    desktop: "\ub370\uc2a4\ud06c\ud0d1",
                    copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
                    copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
                    connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
                    loading: "\ub85c\ub4dc \uc911...",
                    something_went_wrong: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
                    no_supported_wallets: "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                    no_wallets_found: "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Ligar por meio de",
                    loading: "Carregamento...",
                    something_went_wrong: "Algo correu mal",
                    no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                    no_wallets_found: "Nenhuma carteira encontrada"
                },
                zh: {
                    choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
                    connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
                    scan_qrcode_with_wallet: "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
                    connect: "\u8fde\u63a5",
                    qrcode: "\u4e8c\u7ef4\u7801",
                    mobile: "\u79fb\u52a8",
                    desktop: "\u684c\u9762",
                    copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
                    copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
                    connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
                    loading: "\u6b63\u5728\u52a0\u8f7d...",
                    something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
                    no_supported_wallets: "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
                    no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305"
                },
                fa: {
                    choose_preferred_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                    connect_mobile_wallet: "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
                    scan_qrcode_with_wallet: "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
                    connect: "\u0627\u062a\u0635\u0627\u0644",
                    qrcode: "\u06a9\u062f QR",
                    mobile: "\u0633\u06cc\u0627\u0631",
                    desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
                    copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
                    copied_to_clipboard: "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
                    connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
                    loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
                    something_went_wrong: "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
                    no_supported_wallets: "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
                    no_wallets_found: "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f"
                }
            };

            function M() {
                var t = o.getDocumentOrThrow(),
                    e = t.getElementById(h);
                e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
                    var e = t.getElementById(c);
                    e && t.body.removeChild(e)
                }), 300))
            }

            function E(t) {
                return function() {
                    M(), t && t()
                }
            }

            function k() {
                var t = o.getNavigatorOrThrow().language.split("-")[0] || "en";
                return b[t] || b.en
            }

            function x(t, e, n) {
                ! function() {
                    var t = o.getDocumentOrThrow(),
                        e = t.getElementById(l);
                    e && t.head.removeChild(e);
                    var n = t.createElement("style");
                    n.setAttribute("id", l), n.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', t.head.appendChild(n)
                }();
                var r = function() {
                    var t = o.getDocumentOrThrow(),
                        e = t.createElement("div");
                    return e.setAttribute("id", c), t.body.appendChild(e), e
                }();
                u.render(u.createElement(y, {
                    text: k(),
                    uri: t,
                    onClose: E(e),
                    qrcodeModalOptions: n
                }), r)
            }
            var S = function() {
                return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node
            };
            var C = {
                open: function(t, e, n) {
                    console.log(t), S() ? function(t) {
                        s.toString(t, {
                            type: "terminal"
                        }).then(console.log)
                    }(t) : x(t, e, n)
                },
                close: function() {
                    S() || M()
                }
            };
            t.exports = C
        },
        89714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Children: function() {
                    return vt
                },
                Component: function() {
                    return w
                },
                Fragment: function() {
                    return v
                },
                PureComponent: function() {
                    return dt
                },
                Suspense: function() {
                    return bt
                },
                SuspenseList: function() {
                    return kt
                },
                cloneElement: function() {
                    return Dt
                },
                createContext: function() {
                    return q
                },
                createElement: function() {
                    return g
                },
                createFactory: function() {
                    return qt
                },
                createPortal: function() {
                    return It
                },
                createRef: function() {
                    return _
                },
                default: function() {
                    return Ht
                },
                findDOMNode: function() {
                    return Ft
                },
                forwardRef: function() {
                    return mt
                },
                hydrate: function() {
                    return Ot
                },
                isValidElement: function() {
                    return jt
                },
                lazy: function() {
                    return Et
                },
                memo: function() {
                    return pt
                },
                render: function() {
                    return Tt
                },
                unmountComponentAtNode: function() {
                    return zt
                },
                unstable_batchedUpdates: function() {
                    return Wt
                },
                useCallback: function() {
                    return nt
                },
                useContext: function() {
                    return rt
                },
                useDebugValue: function() {
                    return it
                },
                useEffect: function() {
                    return Q
                },
                useErrorBoundary: function() {
                    return ot
                },
                useImperativeHandle: function() {
                    return tt
                },
                useLayoutEffect: function() {
                    return X
                },
                useMemo: function() {
                    return et
                },
                useReducer: function() {
                    return Z
                },
                useRef: function() {
                    return G
                },
                useState: function() {
                    return V
                },
                version: function() {
                    return Ut
                }
            });
            var r, i, o, s, a, u, c, l = {},
                h = [],
                f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

            function d(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function p(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }

            function g(t, e, n) {
                var r, i = arguments,
                    o = {};
                for (r in e) "key" !== r && "ref" !== r && (o[r] = e[r]);
                if (arguments.length > 3)
                    for (n = [n], r = 3; r < arguments.length; r++) n.push(i[r]);
                if (null != n && (o.children = n), "function" == typeof t && null != t.defaultProps)
                    for (r in t.defaultProps) void 0 === o[r] && (o[r] = t.defaultProps[r]);
                return m(t, o, e && e.key, e && e.ref, null)
            }

            function m(t, e, n, i, o) {
                var s = {
                    type: t,
                    props: e,
                    key: n,
                    ref: i,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: o
                };
                return null == o && (s.__v = s), r.vnode && r.vnode(s), s
            }

            function _() {
                return {}
            }

            function v(t) {
                return t.children
            }

            function w(t, e) {
                this.props = t, this.context = e
            }

            function y(t, e) {
                if (null == e) return t.__ ? y(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? y(t) : null
            }

            function b(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return b(t)
                }
            }

            function M(t) {
                (!t.__d && (t.__d = !0) && i.push(t) && !o++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || s)(E)
            }

            function E() {
                for (var t; o = i.length;) t = i.sort((function(t, e) {
                    return t.__v.__b - e.__v.__b
                })), i = [], t.some((function(t) {
                    var e, n, r, i, o, s, a;
                    t.__d && (s = (o = (e = t).__v).__e, (a = e.__P) && (n = [], (r = d({}, o)).__v = r, i = A(a, o, r, e.__n, void 0 !== a.ownerSVGElement, null, n, null == s ? y(o) : s), R(n, o), i != s && b(o)))
                }))
            }

            function k(t, e, n, r, i, o, s, a, u) {
                var c, f, d, g, m, _, v, w = n && n.__k || h,
                    b = w.length;
                if (a == l && (a = null != o ? o[0] : b ? y(n, 0) : null), c = 0, e.__k = x(e.__k, (function(n) {
                        if (null != n) {
                            if (n.__ = e, n.__b = e.__b + 1, null === (d = w[c]) || d && n.key == d.key && n.type === d.type) w[c] = void 0;
                            else
                                for (f = 0; f < b; f++) {
                                    if ((d = w[f]) && n.key == d.key && n.type === d.type) {
                                        w[f] = void 0;
                                        break
                                    }
                                    d = null
                                }
                            if (g = A(t, n, d = d || l, r, i, o, s, a, u), (f = n.ref) && d.ref != f && (v || (v = []), d.ref && v.push(d.ref, null, n), v.push(f, n.__c || g, n)), null != g) {
                                var h;
                                if (null == _ && (_ = g), void 0 !== n.__d) h = n.__d, n.__d = void 0;
                                else if (o == d || g != a || null == g.parentNode) {
                                    t: if (null == a || a.parentNode !== t) t.appendChild(g), h = null;
                                        else {
                                            for (m = a, f = 0;
                                                (m = m.nextSibling) && f < b; f += 2)
                                                if (m == g) break t;
                                            t.insertBefore(g, a), h = a
                                        }
                                    "option" == e.type && (t.value = "")
                                }
                                a = void 0 !== h ? h : g.nextSibling, "function" == typeof e.type && (e.__d = a)
                            } else a && d.__e == a && a.parentNode != t && (a = y(d))
                        }
                        return c++, n
                    })), e.__e = _, null != o && "function" != typeof e.type)
                    for (c = o.length; c--;) null != o[c] && p(o[c]);
                for (c = b; c--;) null != w[c] && B(w[c], w[c]);
                if (v)
                    for (c = 0; c < v.length; c++) O(v[c], v[++c], v[++c])
            }

            function x(t, e, n) {
                if (null == n && (n = []), null == t || "boolean" == typeof t) e && n.push(e(null));
                else if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) x(t[r], e, n);
                else n.push(e ? e("string" == typeof t || "number" == typeof t ? m(null, t, null, null, t) : null != t.__e || null != t.__c ? m(t.type, t.props, t.key, null, t.__v) : t) : t);
                return n
            }

            function S(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === f.test(e) ? n + "px" : null == n ? "" : n
            }

            function C(t, e, n, r, i) {
                var o, s, a, u, c;
                if (i ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e)
                    if (o = t.style, "string" == typeof n) o.cssText = n;
                    else {
                        if ("string" == typeof r && (o.cssText = "", r = null), r)
                            for (u in r) n && u in n || S(o, u, "");
                        if (n)
                            for (c in n) r && n[c] === r[c] || S(o, c, n[c])
                    }
                else "o" === e[0] && "n" === e[1] ? (s = e !== (e = e.replace(/Capture$/, "")), a = e.toLowerCase(), e = (a in t ? a : e).slice(2), n ? (r || t.addEventListener(e, I, s), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, I, s)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !i && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("https://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("https://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
            }

            function I(t) {
                this.l[t.type](r.event ? r.event(t) : t)
            }

            function A(t, e, n, i, o, s, a, u, c) {
                var l, h, f, p, g, m, _, y, b, M, E = e.type;
                if (void 0 !== e.constructor) return null;
                (l = r.__b) && l(e);
                try {
                    t: if ("function" == typeof E) {
                        if (y = e.props, b = (l = E.contextType) && i[l.__c], M = l ? b ? b.props.value : l.__ : i, n.__c ? _ = (h = e.__c = n.__c).__ = h.__E : ("prototype" in E && E.prototype.render ? e.__c = h = new E(y, M) : (e.__c = h = new w(y, M), h.constructor = E, h.render = N), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = M, h.__n = i, f = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != E.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, E.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, f) null == E.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
                        else {
                            if (null == E.getDerivedStateFromProps && y !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(y, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(y, h.__s, M) || e.__v === n.__v && !h.__) {
                                for (h.props = y, h.state = h.__s, e.__v !== n.__v && (h.__d = !1), h.__v = e, e.__e = n.__e, e.__k = n.__k, h.__h.length && a.push(h), l = 0; l < e.__k.length; l++) e.__k[l] && (e.__k[l].__ = e);
                                break t
                            }
                            null != h.componentWillUpdate && h.componentWillUpdate(y, h.__s, M), null != h.componentDidUpdate && h.__h.push((function() {
                                h.componentDidUpdate(p, g, m)
                            }))
                        }
                        h.context = M, h.props = y, h.state = h.__s, (l = r.__r) && l(e), h.__d = !1, h.__v = e, h.__P = t, l = h.render(h.props, h.state, h.context), e.__k = null != l && l.type == v && null == l.key ? l.props.children : Array.isArray(l) ? l : [l], null != h.getChildContext && (i = d(d({}, i), h.getChildContext())), f || null == h.getSnapshotBeforeUpdate || (m = h.getSnapshotBeforeUpdate(p, g)), k(t, e, n, i, o, s, a, u, c), h.base = e.__e, h.__h.length && a.push(h), _ && (h.__E = h.__ = null), h.__e = !1
                    } else null == s && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = T(n.__e, e, n, i, o, s, a, c);
                    (l = r.diffed) && l(e)
                }
                catch (t) {
                    e.__v = null, r.__e(t, e, n)
                }
                return e.__e
            }

            function R(t, e) {
                r.__c && r.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        r.__e(t, e.__v)
                    }
                }))
            }

            function T(t, e, n, r, i, o, s, a) {
                var u, c, f, d, p, g = n.props,
                    m = e.props;
                if (i = "svg" === e.type || i, null != o)
                    for (u = 0; u < o.length; u++)
                        if (null != (c = o[u]) && ((null === e.type ? 3 === c.nodeType : c.localName === e.type) || t == c)) {
                            t = c, o[u] = null;
                            break
                        }
                if (null == t) {
                    if (null === e.type) return document.createTextNode(m);
                    t = i ? document.createElementNS("https://www.w3.org/2000/svg", e.type) : document.createElement(e.type, m.is && {
                        is: m.is
                    }), o = null, a = !1
                }
                if (null === e.type) g !== m && t.data != m && (t.data = m);
                else {
                    if (null != o && (o = h.slice.call(t.childNodes)), f = (g = n.props || l).dangerouslySetInnerHTML, d = m.dangerouslySetInnerHTML, !a) {
                        if (g === l)
                            for (g = {}, p = 0; p < t.attributes.length; p++) g[t.attributes[p].name] = t.attributes[p].value;
                        (d || f) && (d && f && d.__html == f.__html || (t.innerHTML = d && d.__html || ""))
                    }(function(t, e, n, r, i) {
                        var o;
                        for (o in n) "children" === o || "key" === o || o in e || C(t, o, null, n[o], r);
                        for (o in e) i && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || C(t, o, e[o], n[o], r)
                    })(t, m, g, i, a), d ? e.__k = [] : (e.__k = e.props.children, k(t, e, n, r, "foreignObject" !== e.type && i, o, s, l, a)), a || ("value" in m && void 0 !== (u = m.value) && u !== t.value && C(t, "value", u, g.value, !1), "checked" in m && void 0 !== (u = m.checked) && u !== t.checked && C(t, "checked", u, g.checked, !1))
                }
                return t
            }

            function O(t, e, n) {
                try {
                    "function" == typeof t ? t(e) : t.current = e
                } catch (t) {
                    r.__e(t, n)
                }
            }

            function B(t, e, n) {
                var i, o, s;
                if (r.unmount && r.unmount(t), (i = t.ref) && (i.current && i.current !== t.__e || O(i, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (i = t.__c)) {
                    if (i.componentWillUnmount) try {
                        i.componentWillUnmount()
                    } catch (t) {
                        r.__e(t, e)
                    }
                    i.base = i.__P = null
                }
                if (i = t.__k)
                    for (s = 0; s < i.length; s++) i[s] && B(i[s], e, n);
                null != o && p(o)
            }

            function N(t, e, n) {
                return this.constructor(t, n)
            }

            function L(t, e, n) {
                var i, o, s;
                r.__ && r.__(t, e), o = (i = n === u) ? null : n && n.__k || e.__k, t = g(v, null, [t]), s = [], A(e, (i ? e : n || e).__k = t, o || l, l, void 0 !== e.ownerSVGElement, n && !i ? [n] : o ? null : h.slice.call(e.childNodes), s, n || l, i), R(s, t)
            }

            function P(t, e) {
                L(t, e, u)
            }

            function U(t, e) {
                var n, r;
                for (r in e = d(d({}, t.props), e), arguments.length > 2 && (e.children = h.slice.call(arguments, 2)), n = {}, e) "key" !== r && "ref" !== r && (n[r] = e[r]);
                return m(t.type, n, e.key || t.key, e.ref || t.ref, null)
            }

            function q(t) {
                var e = {},
                    n = {
                        __c: "__cC" + c++,
                        __: t,
                        Consumer: function(t, e) {
                            return t.children(e)
                        },
                        Provider: function(t) {
                            var r, i = this;
                            return this.getChildContext || (r = [], this.getChildContext = function() {
                                return e[n.__c] = i, e
                            }, this.shouldComponentUpdate = function(t) {
                                i.props.value !== t.value && r.some((function(e) {
                                    e.context = t.value, M(e)
                                }))
                            }, this.sub = function(t) {
                                r.push(t);
                                var e = t.componentWillUnmount;
                                t.componentWillUnmount = function() {
                                    r.splice(r.indexOf(t), 1), e && e.call(t)
                                }
                            }), t.children
                        }
                    };
                return n.Consumer.contextType = n, n.Provider.__ = n, n
            }
            r = {
                __e: function(t, e) {
                    for (var n, r; e = e.__;)
                        if ((n = e.__c) && !n.__) try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(t)), r) return M(n.__E = n)
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, w.prototype.setState = function(t, e) {
                var n;
                n = this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof t && (t = t(n, this.props)), t && d(n, t), null != t && this.__v && (e && this.__h.push(e), M(this))
            }, w.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), M(this))
            }, w.prototype.render = v, i = [], o = 0, s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = l, c = 0;
            var j, D, z, F = 0,
                W = [],
                H = r.__r,
                $ = r.diffed,
                Y = r.__c,
                J = r.unmount;

            function K(t, e) {
                r.__h && r.__h(D, t, F || e), F = 0;
                var n = D.__H || (D.__H = {
                    __: [],
                    __h: []
                });
                return t >= n.__.length && n.__.push({}), n.__[t]
            }

            function V(t) {
                return F = 1, Z(lt, t)
            }

            function Z(t, e, n) {
                var r = K(j++, 2);
                return r.__c || (r.__c = D, r.__ = [n ? n(e) : lt(void 0, e), function(e) {
                    var n = t(r.__[0], e);
                    r.__[0] !== n && (r.__[0] = n, r.__c.setState({}))
                }]), r.__
            }

            function Q(t, e) {
                var n = K(j++, 3);
                !r.__s && ct(n.__H, e) && (n.__ = t, n.__H = e, D.__H.__h.push(n))
            }

            function X(t, e) {
                var n = K(j++, 4);
                !r.__s && ct(n.__H, e) && (n.__ = t, n.__H = e, D.__h.push(n))
            }

            function G(t) {
                return F = 5, et((function() {
                    return {
                        current: t
                    }
                }), [])
            }

            function tt(t, e, n) {
                F = 6, X((function() {
                    "function" == typeof t ? t(e()) : t && (t.current = e())
                }), null == n ? n : n.concat(t))
            }

            function et(t, e) {
                var n = K(j++, 7);
                return ct(n.__H, e) ? (n.__H = e, n.__h = t, n.__ = t()) : n.__
            }

            function nt(t, e) {
                return F = 8, et((function() {
                    return t
                }), e)
            }

            function rt(t) {
                var e = D.context[t.__c],
                    n = K(j++, 9);
                return n.__c = t, e ? (null == n.__ && (n.__ = !0, e.sub(D)), e.props.value) : t.__
            }

            function it(t, e) {
                r.useDebugValue && r.useDebugValue(e ? e(t) : t)
            }

            function ot(t) {
                var e = K(j++, 10),
                    n = V();
                return e.__ = t, D.componentDidCatch || (D.componentDidCatch = function(t) {
                    e.__ && e.__(t), n[1](t)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            }

            function st() {
                W.some((function(t) {
                    if (t.__P) try {
                        t.__H.__h.forEach(at), t.__H.__h.forEach(ut), t.__H.__h = []
                    } catch (i) {
                        return t.__H.__h = [], r.__e(i, t.__v), !0
                    }
                })), W = []
            }

            function at(t) {
                t.t && t.t()
            }

            function ut(t) {
                var e = t.__();
                "function" == typeof e && (t.t = e)
            }

            function ct(t, e) {
                return !t || e.some((function(e, n) {
                    return e !== t[n]
                }))
            }

            function lt(t, e) {
                return "function" == typeof e ? e(t) : e
            }

            function ht(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function ft(t, e) {
                for (var n in t)
                    if ("__source" !== n && !(n in e)) return !0;
                for (var r in e)
                    if ("__source" !== r && t[r] !== e[r]) return !0;
                return !1
            }
            r.__r = function(t) {
                H && H(t), j = 0, (D = t.__c).__H && (D.__H.__h.forEach(at), D.__H.__h.forEach(ut), D.__H.__h = [])
            }, r.diffed = function(t) {
                $ && $(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    n && n.__h.length && (1 !== W.push(e) && z === r.requestAnimationFrame || ((z = r.requestAnimationFrame) || function(t) {
                        var e, n = function() {
                                clearTimeout(r), cancelAnimationFrame(e), setTimeout(t)
                            },
                            r = setTimeout(n, 100);
                        "undefined" != typeof window && (e = requestAnimationFrame(n))
                    })(st))
                }
            }, r.__c = function(t, e) {
                e.some((function(t) {
                    try {
                        t.__h.forEach(at), t.__h = t.__h.filter((function(t) {
                            return !t.__ || ut(t)
                        }))
                    } catch (a) {
                        e.some((function(t) {
                            t.__h && (t.__h = [])
                        })), e = [], r.__e(a, t.__v)
                    }
                })), Y && Y(t, e)
            }, r.unmount = function(t) {
                J && J(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    if (n) try {
                        n.__.forEach((function(t) {
                            return t.t && t.t()
                        }))
                    } catch (t) {
                        r.__e(t, e.__v)
                    }
                }
            };
            var dt = function(t) {
                var e, n;

                function r(e) {
                    var n;
                    return (n = t.call(this, e) || this).isPureReactComponent = !0, n
                }
                return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r.prototype.shouldComponentUpdate = function(t, e) {
                    return ft(this.props, t) || ft(this.state, e)
                }, r
            }(w);

            function pt(t, e) {
                function n(t) {
                    var n = this.props.ref,
                        r = n == t.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !r : ft(this.props, t)
                }

                function r(e) {
                    return this.shouldComponentUpdate = n, g(t, ht({}, e))
                }
                return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.t = !0, r
            }
            var gt = r.__b;

            function mt(t) {
                function e(e) {
                    var n = ht({}, e);
                    return delete n.ref, t(n, e.ref)
                }
                return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
            }
            r.__b = function(t) {
                t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), gt && gt(t)
            };
            var _t = function(t, e) {
                    return t ? x(t).reduce((function(t, n, r) {
                        return t.concat(e(n, r))
                    }), []) : null
                },
                vt = {
                    map: _t,
                    forEach: _t,
                    count: function(t) {
                        return t ? x(t).length : 0
                    },
                    only: function(t) {
                        if (1 !== (t = x(t)).length) throw new Error("Children.only() expects only one child.");
                        return t[0]
                    },
                    toArray: x
                },
                wt = r.__e;

            function yt(t) {
                return t && ((t = ht({}, t)).__c = null, t.__k = t.__k && t.__k.map(yt)), t
            }

            function bt() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function Mt(t) {
                var e = t.__.__c;
                return e && e.u && e.u(t)
            }

            function Et(t) {
                var e, n, r;

                function i(i) {
                    if (e || (e = t()).then((function(t) {
                            n = t.default || t
                        }), (function(t) {
                            r = t
                        })), r) throw r;
                    if (!n) throw e;
                    return g(n, i)
                }
                return i.displayName = "Lazy", i.t = !0, i
            }

            function kt() {
                this.i = null, this.l = null
            }
            r.__e = function(t, e, n) {
                if (t.then)
                    for (var r, i = e; i = i.__;)
                        if ((r = i.__c) && r.__c) return r.__c(t, e.__c);
                wt(t, e, n)
            }, (bt.prototype = new w).__c = function(t, e) {
                var n = this;
                null == n.o && (n.o = []), n.o.push(e);
                var r = Mt(n.__v),
                    i = !1,
                    o = function() {
                        i || (i = !0, r ? r(s) : s())
                    };
                e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
                    o(), e.__c && e.__c()
                };
                var s = function() {
                    var t;
                    if (!--n.__u)
                        for (n.__v.__k[0] = n.state.u, n.setState({
                                u: n.__b = null
                            }); t = n.o.pop();) t.forceUpdate()
                };
                n.__u++ || n.setState({
                    u: n.__b = n.__v.__k[0]
                }), t.then(o, o)
            }, bt.prototype.render = function(t, e) {
                return this.__b && (this.__v.__k[0] = yt(this.__b), this.__b = null), [g(w, null, e.u ? null : t.children), e.u && t.fallback]
            };
            var xt = function(t, e, n) {
                if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                    for (n = t.i; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        t.i = n = n[2]
                    }
            };
            (kt.prototype = new w).u = function(t) {
                var e = this,
                    n = Mt(e.__v),
                    r = e.l.get(t);
                return r[0]++,
                    function(i) {
                        var o = function() {
                            e.props.revealOrder ? (r.push(i), xt(e, t, r)) : i()
                        };
                        n ? n(o) : o()
                    }
            }, kt.prototype.render = function(t) {
                this.i = null, this.l = new Map;
                var e = x(t.children);
                t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
                for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
                return t.children
            }, kt.prototype.componentDidUpdate = kt.prototype.componentDidMount = function() {
                var t = this;
                t.l.forEach((function(e, n) {
                    xt(t, n, e)
                }))
            };
            var St = function() {
                function t() {}
                var e = t.prototype;
                return e.getChildContext = function() {
                    return this.props.context
                }, e.render = function(t) {
                    return t.children
                }, t
            }();

            function Ct(t) {
                var e = this,
                    n = t.container,
                    r = g(St, {
                        context: e.context
                    }, t.vnode);
                return e.s && e.s !== n && (e.v.parentNode && e.s.removeChild(e.v), B(e.h), e.p = !1), t.vnode ? e.p ? (n.__k = e.__k, L(r, n), e.__k = n.__k) : (e.v = document.createTextNode(""), P("", n), n.appendChild(e.v), e.p = !0, e.s = n, L(r, n, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), B(e.h)), e.h = r, e.componentWillUnmount = function() {
                    e.v.parentNode && e.s.removeChild(e.v), B(e.h)
                }, null
            }

            function It(t, e) {
                return g(Ct, {
                    vnode: t,
                    container: e
                })
            }
            var At = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            w.prototype.isReactComponent = {};
            var Rt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

            function Tt(t, e, n) {
                if (null == e.__k)
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                return L(t, e), "function" == typeof n && n(), t ? t.__c : null
            }

            function Ot(t, e, n) {
                return P(t, e), "function" == typeof n && n(), t ? t.__c : null
            }
            var Bt = r.event;

            function Nt(t, e) {
                t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
                    configurable: !1,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        this["UNSAFE_" + e] = t
                    }
                })
            }
            r.event = function(t) {
                Bt && (t = Bt(t)), t.persist = function() {};
                var e = !1,
                    n = !1,
                    r = t.stopPropagation;
                t.stopPropagation = function() {
                    r.call(t), e = !0
                };
                var i = t.preventDefault;
                return t.preventDefault = function() {
                    i.call(t), n = !0
                }, t.isPropagationStopped = function() {
                    return e
                }, t.isDefaultPrevented = function() {
                    return n
                }, t.nativeEvent = t
            };
            var Lt = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                Pt = r.vnode;
            r.vnode = function(t) {
                t.$$typeof = Rt;
                var e = t.type,
                    n = t.props;
                if (e) {
                    if (n.class != n.className && (Lt.enumerable = "className" in n, null != n.className && (n.class = n.className), Object.defineProperty(n, "className", Lt)), "function" != typeof e) {
                        var r, i, o;
                        for (o in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === e && (x(n.children).forEach((function(t) {
                                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0)
                            })), delete n.value), n)
                            if (r = At.test(o)) break;
                        if (r)
                            for (o in i = t.props = {}, n) i[At.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = n[o]
                    }! function(e) {
                        var n = t.type,
                            r = t.props;
                        if (r && "string" == typeof n) {
                            var i = {};
                            for (var o in r) /^on(Ani|Tra|Tou)/.test(o) && (r[o.toLowerCase()] = r[o], delete r[o]), i[o.toLowerCase()] = o;
                            if (i.ondoubleclick && (r.ondblclick = r[i.ondoubleclick], delete r[i.ondoubleclick]), i.onbeforeinput && (r.onbeforeinput = r[i.onbeforeinput], delete r[i.onbeforeinput]), i.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
                                var s = i.oninput || "oninput";
                                r[s] || (r[s] = r[i.onchange], delete r[i.onchange])
                            }
                        }
                    }(), "function" == typeof e && !e.m && e.prototype && (Nt(e.prototype, "componentWillMount"), Nt(e.prototype, "componentWillReceiveProps"), Nt(e.prototype, "componentWillUpdate"), e.m = !0)
                }
                Pt && Pt(t)
            };
            var Ut = "16.8.0";

            function qt(t) {
                return g.bind(null, t)
            }

            function jt(t) {
                return !!t && t.$$typeof === Rt
            }

            function Dt(t) {
                return jt(t) ? U.apply(null, arguments) : t
            }

            function zt(t) {
                return !!t.__k && (L(null, t), !0)
            }

            function Ft(t) {
                return t && (t.base || 1 === t.nodeType && t) || null
            }
            var Wt = function(t, e) {
                    return t(e)
                },
                Ht = {
                    useState: V,
                    useReducer: Z,
                    useEffect: Q,
                    useLayoutEffect: X,
                    useRef: G,
                    useImperativeHandle: tt,
                    useMemo: et,
                    useCallback: nt,
                    useContext: rt,
                    useDebugValue: it,
                    version: "16.8.0",
                    Children: vt,
                    render: Tt,
                    hydrate: Tt,
                    unmountComponentAtNode: zt,
                    createPortal: It,
                    createElement: g,
                    createContext: q,
                    createFactory: qt,
                    cloneElement: Dt,
                    createRef: _,
                    Fragment: v,
                    isValidElement: jt,
                    findDOMNode: Ft,
                    Component: w,
                    PureComponent: dt,
                    memo: pt,
                    forwardRef: mt,
                    unstable_batchedUpdates: Wt,
                    Suspense: bt,
                    SuspenseList: kt,
                    lazy: Et
                }
        },
        11460: function(t, e, n) {
            ! function(t, e) {
                "use strict";

                function r(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }

                function o(t, e, n) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (n = e, e = 10), this._init(t || 0, e || 10, n || "be"))
                }
                var s;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = n(36563).Buffer
                } catch (k) {}

                function a(t, e, n) {
                    for (var r = 0, i = Math.min(t.length, n), o = e; o < i; o++) {
                        var s = t.charCodeAt(o) - 48;
                        r <<= 4, r |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s
                    }
                    return r
                }

                function u(t, e, n, r) {
                    for (var i = 0, o = Math.min(t.length, n), s = e; s < o; s++) {
                        var a = t.charCodeAt(s) - 48;
                        i *= r, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, n) {
                    if ("number" === typeof t) return this._initNumber(t, e, n);
                    if ("object" === typeof t) return this._initArray(t, e, n);
                    "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n)
                }, o.prototype._initNumber = function(t, e, n) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
                }, o.prototype._initArray = function(t, e, n) {
                    if (r("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, s, a = 0;
                    if ("be" === n)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    else if ("le" === n)
                        for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var r, i, o = 0;
                    for (n = t.length - 6, r = 0; n >= e; n -= 6) i = a(t, n, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, r++);
                    n + 6 !== e && (i = a(t, e, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303), this.strip()
                }, o.prototype._parseBase = function(t, e, n) {
                    this.words = [0], this.length = 1;
                    for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                    r--, i = i / e | 0;
                    for (var o = t.length - n, s = o % r, a = Math.min(o, o - s) + n, c = 0, l = n; l < a; l += r) c = u(t, l, l + r, e), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (0 !== s) {
                        var h = 1;
                        for (c = u(t, l, t.length, e), l = 0; l < s; l++) h *= e;
                        this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                    }
                }, o.prototype.copy = function(t) {
                    t.words = new Array(this.length);
                    for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                    t.length = this.length, t.negative = this.negative, t.red = this.red
                }, o.prototype.clone = function() {
                    var t = new o(null);
                    return this.copy(t), t
                }, o.prototype._expand = function(t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function f(t, e, n) {
                    n.negative = e.negative ^ t.negative;
                    var r = t.length + e.length | 0;
                    n.length = r, r = r - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        a = 67108863 & s,
                        u = s / 67108864 | 0;
                    n.words[0] = a;
                    for (var c = 1; c < r; c++) {
                        for (var l = u >>> 26, h = 67108863 & u, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1); d <= f; d++) {
                            var p = c - d | 0;
                            l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        n.words[c] = 0 | h, u = 0 | l
                    }
                    return 0 !== u ? n.words[c] = 0 | u : n.length--, n.strip()
                }
                o.prototype.toString = function(t, e) {
                    var n;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        n = "";
                        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                u = (16777215 & (a << i | o)).toString(16);
                            n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? c[6 - u.length] + u + n : u + n, (i += 2) >= 26 && (i -= 26, s--)
                        }
                        for (0 !== o && (n = o.toString(16) + n); n.length % e !== 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var f = l[t],
                            d = h[t];
                        n = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var g = p.modn(d).toString(t);
                            n = (p = p.idivn(d)).isZero() ? g + n : c[f - g.length] + g + n
                        }
                        for (this.isZero() && (n = "0" + n); n.length % e !== 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    r(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return r("undefined" !== typeof s), this.toArrayLike(s, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, n) {
                    var i = this.byteLength(),
                        o = n || Math.max(1, i);
                    r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                    var s, a, u = "le" === e,
                        c = new t(o),
                        l = this.clone();
                    if (u) {
                        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), c[a] = s;
                        for (; a < o; a++) c[a] = 0
                    } else {
                        for (a = 0; a < o - i; a++) c[a] = 0;
                        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), c[o - a - 1] = s
                    }
                    return c
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        n = 0;
                    return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        n = 0;
                    return 0 === (8191 & e) && (n += 13, e >>>= 13), 0 === (127 & e) && (n += 7, e >>>= 7), 0 === (15 & e) && (n += 4, e >>>= 4), 0 === (3 & e) && (n += 2, e >>>= 2), 0 === (1 & e) && n++, n
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var n = this._zeroBits(this.words[e]);
                        if (t += n, 26 !== n) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this.strip()
                }, o.prototype.ior = function(t) {
                    return r(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return r(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, n;
                    this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                    for (var r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
                    if (this !== e)
                        for (; r < e.length; r++) this.words[r] = e.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return r(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    r("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        n = t % 26;
                    this._expand(e), n > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    r("number" === typeof t && t >= 0);
                    var n = t / 26 | 0,
                        i = t % 26;
                    return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, n, r;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (n = this, r = t) : (n = t, r = this);
                    for (var i = 0, o = 0; o < r.length; o++) e = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < n.length; o++) e = (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (n !== this)
                        for (; o < n.length; o++) this.words[o] = n.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n, r, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (n = this, r = t) : (n = t, r = this);
                    for (var o = 0, s = 0; s < r.length; s++) o = (e = (0 | n.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < n.length; s++) o = (e = (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < n.length && n !== this)
                        for (; s < n.length; s++) this.words[s] = n.words[s];
                    return this.length = Math.max(this.length, s), n !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var d = function(t, e, n) {
                    var r, i, o, s = t.words,
                        a = e.words,
                        u = n.words,
                        c = 0,
                        l = 0 | s[0],
                        h = 8191 & l,
                        f = l >>> 13,
                        d = 0 | s[1],
                        p = 8191 & d,
                        g = d >>> 13,
                        m = 0 | s[2],
                        _ = 8191 & m,
                        v = m >>> 13,
                        w = 0 | s[3],
                        y = 8191 & w,
                        b = w >>> 13,
                        M = 0 | s[4],
                        E = 8191 & M,
                        k = M >>> 13,
                        x = 0 | s[5],
                        S = 8191 & x,
                        C = x >>> 13,
                        I = 0 | s[6],
                        A = 8191 & I,
                        R = I >>> 13,
                        T = 0 | s[7],
                        O = 8191 & T,
                        B = T >>> 13,
                        N = 0 | s[8],
                        L = 8191 & N,
                        P = N >>> 13,
                        U = 0 | s[9],
                        q = 8191 & U,
                        j = U >>> 13,
                        D = 0 | a[0],
                        z = 8191 & D,
                        F = D >>> 13,
                        W = 0 | a[1],
                        H = 8191 & W,
                        $ = W >>> 13,
                        Y = 0 | a[2],
                        J = 8191 & Y,
                        K = Y >>> 13,
                        V = 0 | a[3],
                        Z = 8191 & V,
                        Q = V >>> 13,
                        X = 0 | a[4],
                        G = 8191 & X,
                        tt = X >>> 13,
                        et = 0 | a[5],
                        nt = 8191 & et,
                        rt = et >>> 13,
                        it = 0 | a[6],
                        ot = 8191 & it,
                        st = it >>> 13,
                        at = 0 | a[7],
                        ut = 8191 & at,
                        ct = at >>> 13,
                        lt = 0 | a[8],
                        ht = 8191 & lt,
                        ft = lt >>> 13,
                        dt = 0 | a[9],
                        pt = 8191 & dt,
                        gt = dt >>> 13;
                    n.negative = t.negative ^ e.negative, n.length = 19;
                    var mt = (c + (r = Math.imul(h, z)) | 0) + ((8191 & (i = (i = Math.imul(h, F)) + Math.imul(f, z) | 0)) << 13) | 0;
                    c = ((o = Math.imul(f, F)) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, r = Math.imul(p, z), i = (i = Math.imul(p, F)) + Math.imul(g, z) | 0, o = Math.imul(g, F);
                    var _t = (c + (r = r + Math.imul(h, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(f, H) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, $) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(_, z), i = (i = Math.imul(_, F)) + Math.imul(v, z) | 0, o = Math.imul(v, F), r = r + Math.imul(p, H) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(g, H) | 0, o = o + Math.imul(g, $) | 0;
                    var vt = (c + (r = r + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, K) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(y, z), i = (i = Math.imul(y, F)) + Math.imul(b, z) | 0, o = Math.imul(b, F), r = r + Math.imul(_, H) | 0, i = (i = i + Math.imul(_, $) | 0) + Math.imul(v, H) | 0, o = o + Math.imul(v, $) | 0, r = r + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(g, J) | 0, o = o + Math.imul(g, K) | 0;
                    var wt = (c + (r = r + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Q) | 0) + Math.imul(f, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, Q) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(E, z), i = (i = Math.imul(E, F)) + Math.imul(k, z) | 0, o = Math.imul(k, F), r = r + Math.imul(y, H) | 0, i = (i = i + Math.imul(y, $) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, $) | 0, r = r + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, K) | 0, r = r + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, Q) | 0) + Math.imul(g, Z) | 0, o = o + Math.imul(g, Q) | 0;
                    var yt = (c + (r = r + Math.imul(h, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(f, G) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tt) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(S, z), i = (i = Math.imul(S, F)) + Math.imul(C, z) | 0, o = Math.imul(C, F), r = r + Math.imul(E, H) | 0, i = (i = i + Math.imul(E, $) | 0) + Math.imul(k, H) | 0, o = o + Math.imul(k, $) | 0, r = r + Math.imul(y, J) | 0, i = (i = i + Math.imul(y, K) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, K) | 0, r = r + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, Q) | 0) + Math.imul(v, Z) | 0, o = o + Math.imul(v, Q) | 0, r = r + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(g, G) | 0, o = o + Math.imul(g, tt) | 0;
                    var bt = (c + (r = r + Math.imul(h, nt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, rt) | 0) + Math.imul(f, nt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, rt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(A, z), i = (i = Math.imul(A, F)) + Math.imul(R, z) | 0, o = Math.imul(R, F), r = r + Math.imul(S, H) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(C, H) | 0, o = o + Math.imul(C, $) | 0, r = r + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, K) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, K) | 0, r = r + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, Q) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, Q) | 0, r = r + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(v, G) | 0, o = o + Math.imul(v, tt) | 0, r = r + Math.imul(p, nt) | 0, i = (i = i + Math.imul(p, rt) | 0) + Math.imul(g, nt) | 0, o = o + Math.imul(g, rt) | 0;
                    var Mt = (c + (r = r + Math.imul(h, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, st) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(O, z), i = (i = Math.imul(O, F)) + Math.imul(B, z) | 0, o = Math.imul(B, F), r = r + Math.imul(A, H) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(R, H) | 0, o = o + Math.imul(R, $) | 0, r = r + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, K) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, K) | 0, r = r + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, Q) | 0) + Math.imul(k, Z) | 0, o = o + Math.imul(k, Q) | 0, r = r + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, tt) | 0, r = r + Math.imul(_, nt) | 0, i = (i = i + Math.imul(_, rt) | 0) + Math.imul(v, nt) | 0, o = o + Math.imul(v, rt) | 0, r = r + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(g, ot) | 0, o = o + Math.imul(g, st) | 0;
                    var Et = (c + (r = r + Math.imul(h, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ct) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ct) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(L, z), i = (i = Math.imul(L, F)) + Math.imul(P, z) | 0, o = Math.imul(P, F), r = r + Math.imul(O, H) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(B, H) | 0, o = o + Math.imul(B, $) | 0, r = r + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, K) | 0) + Math.imul(R, J) | 0, o = o + Math.imul(R, K) | 0, r = r + Math.imul(S, Z) | 0, i = (i = i + Math.imul(S, Q) | 0) + Math.imul(C, Z) | 0, o = o + Math.imul(C, Q) | 0, r = r + Math.imul(E, G) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, tt) | 0, r = r + Math.imul(y, nt) | 0, i = (i = i + Math.imul(y, rt) | 0) + Math.imul(b, nt) | 0, o = o + Math.imul(b, rt) | 0, r = r + Math.imul(_, ot) | 0, i = (i = i + Math.imul(_, st) | 0) + Math.imul(v, ot) | 0, o = o + Math.imul(v, st) | 0, r = r + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(g, ut) | 0, o = o + Math.imul(g, ct) | 0;
                    var kt = (c + (r = r + Math.imul(h, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ft) | 0) + Math.imul(f, ht) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ft) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(q, z), i = (i = Math.imul(q, F)) + Math.imul(j, z) | 0, o = Math.imul(j, F), r = r + Math.imul(L, H) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(P, H) | 0, o = o + Math.imul(P, $) | 0, r = r + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, K) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, K) | 0, r = r + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, Q) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, Q) | 0, r = r + Math.imul(S, G) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(C, G) | 0, o = o + Math.imul(C, tt) | 0, r = r + Math.imul(E, nt) | 0, i = (i = i + Math.imul(E, rt) | 0) + Math.imul(k, nt) | 0, o = o + Math.imul(k, rt) | 0, r = r + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, r = r + Math.imul(_, ut) | 0, i = (i = i + Math.imul(_, ct) | 0) + Math.imul(v, ut) | 0, o = o + Math.imul(v, ct) | 0, r = r + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(g, ht) | 0, o = o + Math.imul(g, ft) | 0;
                    var xt = (c + (r = r + Math.imul(h, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, gt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, gt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(q, H), i = (i = Math.imul(q, $)) + Math.imul(j, H) | 0, o = Math.imul(j, $), r = r + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, K) | 0, r = r + Math.imul(O, Z) | 0, i = (i = i + Math.imul(O, Q) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, Q) | 0, r = r + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, tt) | 0, r = r + Math.imul(S, nt) | 0, i = (i = i + Math.imul(S, rt) | 0) + Math.imul(C, nt) | 0, o = o + Math.imul(C, rt) | 0, r = r + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, r = r + Math.imul(y, ut) | 0, i = (i = i + Math.imul(y, ct) | 0) + Math.imul(b, ut) | 0, o = o + Math.imul(b, ct) | 0, r = r + Math.imul(_, ht) | 0, i = (i = i + Math.imul(_, ft) | 0) + Math.imul(v, ht) | 0, o = o + Math.imul(v, ft) | 0;
                    var St = (c + (r = r + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, gt) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(g, gt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(q, J), i = (i = Math.imul(q, K)) + Math.imul(j, J) | 0, o = Math.imul(j, K), r = r + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, Q) | 0) + Math.imul(P, Z) | 0, o = o + Math.imul(P, Q) | 0, r = r + Math.imul(O, G) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, tt) | 0, r = r + Math.imul(A, nt) | 0, i = (i = i + Math.imul(A, rt) | 0) + Math.imul(R, nt) | 0, o = o + Math.imul(R, rt) | 0, r = r + Math.imul(S, ot) | 0, i = (i = i + Math.imul(S, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, r = r + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ct) | 0) + Math.imul(k, ut) | 0, o = o + Math.imul(k, ct) | 0, r = r + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, ft) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ft) | 0;
                    var Ct = (c + (r = r + Math.imul(_, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, gt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(v, gt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, r = Math.imul(q, Z), i = (i = Math.imul(q, Q)) + Math.imul(j, Z) | 0, o = Math.imul(j, Q), r = r + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(P, G) | 0, o = o + Math.imul(P, tt) | 0, r = r + Math.imul(O, nt) | 0, i = (i = i + Math.imul(O, rt) | 0) + Math.imul(B, nt) | 0, o = o + Math.imul(B, rt) | 0, r = r + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, r = r + Math.imul(S, ut) | 0, i = (i = i + Math.imul(S, ct) | 0) + Math.imul(C, ut) | 0, o = o + Math.imul(C, ct) | 0, r = r + Math.imul(E, ht) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, ft) | 0;
                    var It = (c + (r = r + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, gt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, gt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(q, G), i = (i = Math.imul(q, tt)) + Math.imul(j, G) | 0, o = Math.imul(j, tt), r = r + Math.imul(L, nt) | 0, i = (i = i + Math.imul(L, rt) | 0) + Math.imul(P, nt) | 0, o = o + Math.imul(P, rt) | 0, r = r + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, r = r + Math.imul(A, ut) | 0, i = (i = i + Math.imul(A, ct) | 0) + Math.imul(R, ut) | 0, o = o + Math.imul(R, ct) | 0, r = r + Math.imul(S, ht) | 0, i = (i = i + Math.imul(S, ft) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, ft) | 0;
                    var At = (c + (r = r + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, gt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(k, gt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(q, nt), i = (i = Math.imul(q, rt)) + Math.imul(j, nt) | 0, o = Math.imul(j, rt), r = r + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, r = r + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(B, ut) | 0, o = o + Math.imul(B, ct) | 0, r = r + Math.imul(A, ht) | 0, i = (i = i + Math.imul(A, ft) | 0) + Math.imul(R, ht) | 0, o = o + Math.imul(R, ft) | 0;
                    var Rt = (c + (r = r + Math.imul(S, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, gt) | 0) + Math.imul(C, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(C, gt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(q, ot), i = (i = Math.imul(q, st)) + Math.imul(j, ot) | 0, o = Math.imul(j, st), r = r + Math.imul(L, ut) | 0, i = (i = i + Math.imul(L, ct) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ct) | 0, r = r + Math.imul(O, ht) | 0, i = (i = i + Math.imul(O, ft) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, ft) | 0;
                    var Tt = (c + (r = r + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, gt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(R, gt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(q, ut), i = (i = Math.imul(q, ct)) + Math.imul(j, ut) | 0, o = Math.imul(j, ct), r = r + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, ft) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, ft) | 0;
                    var Ot = (c + (r = r + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, gt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(B, gt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(q, ht), i = (i = Math.imul(q, ft)) + Math.imul(j, ht) | 0, o = Math.imul(j, ft);
                    var Bt = (c + (r = r + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, gt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(P, gt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863;
                    var Nt = (c + (r = Math.imul(q, pt)) | 0) + ((8191 & (i = (i = Math.imul(q, gt)) + Math.imul(j, pt) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(j, gt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = mt, u[1] = _t, u[2] = vt, u[3] = wt, u[4] = yt, u[5] = bt, u[6] = Mt, u[7] = Et, u[8] = kt, u[9] = xt, u[10] = St, u[11] = Ct, u[12] = It, u[13] = At, u[14] = Rt, u[15] = Tt, u[16] = Ot, u[17] = Bt, u[18] = Nt, 0 !== c && (u[19] = c, n.length++), n
                };

                function p(t, e, n) {
                    return (new g).mulp(t, e, n)
                }

                function g(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (d = f), o.prototype.mulTo = function(t, e) {
                    var n, r = this.length + t.length;
                    return n = 10 === this.length && 10 === t.length ? d(this, t, e) : r < 63 ? f(this, t, e) : r < 1024 ? function(t, e, n) {
                        n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & r, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= u; c++) {
                                var l = o - c,
                                    h = (0 | t.words[l]) * (0 | e.words[c]),
                                    f = 67108863 & h;
                                a = 67108863 & (f = f + a | 0), i += (s = (s = s + (h / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            n.words[o] = a, r = s, s = i
                        }
                        return 0 !== r ? n.words[o] = r : n.length--, n.strip()
                    }(this, t, e) : p(this, t, e), n
                }, g.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, n, t);
                    return e
                }, g.prototype.revBin = function(t, e, n) {
                    if (0 === t || t === n - 1) return t;
                    for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                    return r
                }, g.prototype.permute = function(t, e, n, r, i, o) {
                    for (var s = 0; s < o; s++) r[s] = e[t[s]], i[s] = n[t[s]]
                }, g.prototype.transform = function(t, e, n, r, i, o) {
                    this.permute(o, t, e, n, r, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var a = s << 1, u = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a)
                            for (var h = u, f = c, d = 0; d < s; d++) {
                                var p = n[l + d],
                                    g = r[l + d],
                                    m = n[l + d + s],
                                    _ = r[l + d + s],
                                    v = h * m - f * _;
                                _ = h * _ + f * m, m = v, n[l + d] = p + m, r[l + d] = g + _, n[l + d + s] = p - m, r[l + d + s] = g - _, d !== a && (v = u * h - c * f, f = u * f + c * h, h = v)
                            }
                }, g.prototype.guessLen13b = function(t, e) {
                    var n = 1 | Math.max(e, t),
                        r = 1 & n,
                        i = 0;
                    for (n = n / 2 | 0; n; n >>>= 1) i++;
                    return 1 << i + 1 + r
                }, g.prototype.conjugate = function(t, e, n) {
                    if (!(n <= 1))
                        for (var r = 0; r < n / 2; r++) {
                            var i = t[r];
                            t[r] = t[n - r - 1], t[n - r - 1] = i, i = e[r], e[r] = -e[n - r - 1], e[n - r - 1] = -i
                        }
                }, g.prototype.normalize13b = function(t, e) {
                    for (var n = 0, r = 0; r < e / 2; r++) {
                        var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
                        t[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, g.prototype.convert13b = function(t, e, n, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) n[s] = 0;
                    r(0 === o), r(0 === (-8192 & o))
                }, g.prototype.stub = function(t) {
                    for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
                    return e
                }, g.prototype.mulp = function(t, e, n) {
                    var r = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(r),
                        o = this.stub(r),
                        s = new Array(r),
                        a = new Array(r),
                        u = new Array(r),
                        c = new Array(r),
                        l = new Array(r),
                        h = new Array(r),
                        f = n.words;
                    f.length = r, this.convert13b(t.words, t.length, s, r), this.convert13b(e.words, e.length, c, r), this.transform(s, o, a, u, r, i), this.transform(c, o, l, h, r, i);
                    for (var d = 0; d < r; d++) {
                        var p = a[d] * l[d] - u[d] * h[d];
                        u[d] = a[d] * h[d] + u[d] * l[d], a[d] = p
                    }
                    return this.conjugate(a, u, r), this.transform(a, u, f, o, r, i), this.conjugate(f, o, r), this.normalize13b(f, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), p(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    r("number" === typeof t), r(t < 67108864);
                    for (var e = 0, n = 0; n < this.length; n++) {
                        var i = (0 | this.words[n]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o
                    }
                    return 0 !== e && (this.words[n] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                            var r = n / 26 | 0,
                                i = n % 26;
                            e[n] = (t.words[r] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr());
                    if (++r < e.length)
                        for (var i = n.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (n = n.mul(i));
                    return n
                }, o.prototype.iushln = function(t) {
                    r("number" === typeof t && t >= 0);
                    var e, n = t % 26,
                        i = (t - n) / 26,
                        o = 67108863 >>> 26 - n << 26 - n;
                    if (0 !== n) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o,
                                u = (0 | this.words[e]) - a << n;
                            this.words[e] = u | s, s = a >>> 26 - n
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, n) {
                    var i;
                    r("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o,
                        u = n;
                    if (i -= s, i = Math.max(0, i), u) {
                        for (var c = 0; c < s; c++) u.words[c] = this.words[c];
                        u.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s];
                    else this.words[0] = 0, this.length = 1;
                    var l = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = l << 26 - o | h >>> o, l = h & a
                    }
                    return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, n) {
                    return r(0 === this.negative), this.iushrn(t, e, n)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    r("number" === typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= n) && !!(this.words[n] & i)
                }, o.prototype.imaskn = function(t) {
                    r("number" === typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26;
                    if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                    if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return r("number" === typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (r("number" === typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, n) {
                    var i, o, s = t.length + n;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + n]) + a;
                        var u = (0 | t.words[i]) * e;
                        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & o
                    }
                    for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                    if (0 === a) return this.strip();
                    for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var n = (this.length, t.length),
                        r = this.clone(),
                        i = t,
                        s = 0 | i.words[i.length - 1];
                    0 !== (n = 26 - this._countBits(s)) && (i = i.ushln(n), r.iushln(n), s = 0 | i.words[i.length - 1]);
                    var a, u = r.length - i.length;
                    if ("mod" !== e) {
                        (a = new o(null)).length = u + 1, a.words = new Array(a.length);
                        for (var c = 0; c < a.length; c++) a.words[c] = 0
                    }
                    var l = r.clone()._ishlnsubmul(i, 1, u);
                    0 === l.negative && (r = l, a && (a.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var f = 67108864 * (0 | r.words[i.length + h]) + (0 | r.words[i.length + h - 1]);
                        for (f = Math.min(f / s | 0, 67108863), r._ishlnsubmul(i, f, h); 0 !== r.negative;) f--, r.negative = 0, r._ishlnsubmul(i, 1, h), r.isZero() || (r.negative ^= 1);
                        a && (a.words[h] = f)
                    }
                    return a && a.strip(), r.strip(), "div" !== e && 0 !== n && r.iushrn(n), {
                        div: a || null,
                        mod: r
                    }
                }, o.prototype.divmod = function(t, e, n) {
                    return r(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var i, s, a
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        r = t.ushrn(1),
                        i = t.andln(1),
                        o = n.cmp(r);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    r(t <= 67108863);
                    for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;
                    return n
                }, o.prototype.idivn = function(t) {
                    r(t <= 67108863);
                    for (var e = 0, n = this.length - 1; n >= 0; n--) {
                        var i = (0 | this.words[n]) + 67108864 * e;
                        this.words[n] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        n = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++c;
                    for (var l = n.clone(), h = e.clone(); !e.isZero();) {
                        for (var f = 0, d = 1; 0 === (e.words[0] & d) && f < 26; ++f, d <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, g = 1; 0 === (n.words[0] & g) && p < 26; ++p, g <<= 1);
                        if (p > 0)
                            for (n.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)), a.iushrn(1), u.iushrn(1);
                        e.cmp(n) >= 0 ? (e.isub(n), i.isub(a), s.isub(u)) : (n.isub(e), a.isub(i), u.isub(s))
                    }
                    return {
                        a: a,
                        b: u,
                        gcd: n.iushln(c)
                    }
                }, o.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        n = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, s = new o(1), a = new o(0), u = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var c = 0, l = 1; 0 === (e.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (e.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        for (var h = 0, f = 1; 0 === (n.words[0] & f) && h < 26; ++h, f <<= 1);
                        if (h > 0)
                            for (n.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s))
                    }
                    return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        n = t.clone();
                    e.negative = 0, n.negative = 0;
                    for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; n.isEven();) n.iushrn(1);
                        var i = e.cmp(n);
                        if (i < 0) {
                            var o = e;
                            e = n, n = o
                        } else if (0 === i || 0 === n.cmpn(1)) break;
                        e.isub(n)
                    }
                    return n.iushln(r)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    r("number" === typeof t);
                    var e = t % 26,
                        n = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                    for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, n = t < 0;
                    if (0 !== this.negative && !n) return -1;
                    if (0 === this.negative && n) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        n && (t = -t), r(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, n = this.length - 1; n >= 0; n--) {
                        var r = 0 | this.words[n],
                            i = 0 | t.words[n];
                        if (r !== i) {
                            r < i ? e = -1 : r > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function(t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new M(t)
                }, o.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var m = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function _(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function v() {
                    _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function y() {
                    _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function b() {
                    _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function M(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function E(t) {
                    M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                _.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, _.prototype.ireduce = function(t) {
                    var e, n = t;
                    do {
                        this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var r = e < this.n ? -1 : n.ucmp(this.p);
                    return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
                }, _.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, _.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(v, _), v.prototype.split = function(t, e) {
                    for (var n = 4194303, r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
                    if (e.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & n, i = 10; i < t.length; i++) {
                        var s = 0 | t.words[i];
                        t.words[i - 10] = (s & n) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, v.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = 0 | t.words[n];
                        e += 977 * r, t.words[n] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(w, _), i(y, _), i(b, _), b.prototype.imulK = function(t) {
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = 19 * (0 | t.words[n]) + e,
                            i = 67108863 & r;
                        r >>>= 26, t.words[n] = i, e = r
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (m[t]) return m[t];
                    var e;
                    if ("k256" === t) e = new v;
                    else if ("p224" === t) e = new w;
                    else if ("p192" === t) e = new y;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new b
                    }
                    return m[t] = e, e
                }, M.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, M.prototype._verify2 = function(t, e) {
                    r(0 === (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, M.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, M.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, M.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var n = t.add(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
                }, M.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var n = t.iadd(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n
                }, M.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.sub(e);
                    return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
                }, M.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.isub(e);
                    return n.cmpn(0) < 0 && n.iadd(this.m), n
                }, M.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, M.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, M.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, M.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, M.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, M.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 === 1), 3 === e) {
                        var n = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, n)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    r(!i.isZero());
                    var a = new o(1).toRed(this),
                        u = a.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        l = this.m.bitLength();
                    for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(u);) l.redIAdd(u);
                    for (var h = this.pow(l, i), f = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a);) {
                        for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
                        r(m < p);
                        var _ = this.pow(h, new o(1).iushln(p - m - 1));
                        f = f.redMul(_), h = _.redSqr(), d = d.redMul(h), p = m
                    }
                    return f
                }, M.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, M.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var n = new Array(16);
                    n[0] = new o(1).toRed(this), n[1] = t;
                    for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
                    var i = n[0],
                        s = 0,
                        a = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
                        for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                            var h = c >> l & 1;
                            i !== n[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 === ++a || 0 === r && 0 === l) && (i = this.mul(i, n[s]), a = 0, s = 0)) : a = 0
                        }
                        u = 26
                    }
                    return i
                }, M.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, M.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new E(t)
                }, i(E, M), E.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, E.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, E.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var n = t.imul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, E.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var n = t.mul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                }, E.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = n.nmd(t), this)
        },
        62873: function(t, e) {
            "use strict";

            function n(t) {
                let e;
                return "undefined" !== typeof window && "undefined" !== typeof window[t] && (e = window[t]), e
            }

            function r(t) {
                const e = n(t);
                if (!e) throw new Error(`${t} is not defined in Window`);
                return e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, e.getFromWindow = n, e.getFromWindowOrThrow = r, e.getDocumentOrThrow = function() {
                return r("document")
            }, e.getDocument = function() {
                return n("document")
            }, e.getNavigatorOrThrow = function() {
                return r("navigator")
            }, e.getNavigator = function() {
                return n("navigator")
            }, e.getLocationOrThrow = function() {
                return r("location")
            }, e.getLocation = function() {
                return n("location")
            }, e.getCryptoOrThrow = function() {
                return r("crypto")
            }, e.getCrypto = function() {
                return n("crypto")
            }, e.getLocalStorageOrThrow = function() {
                return r("localStorage")
            }, e.getLocalStorage = function() {
                return n("localStorage")
            }
        },
        65755: function(t, e, n) {
            "use strict";
            e.D = void 0;
            const r = n(62873);
            e.D = function() {
                let t, e;
                try {
                    t = r.getDocumentOrThrow(), e = r.getLocationOrThrow()
                } catch (o) {
                    return null
                }

                function n(...e) {
                    const n = t.getElementsByTagName("meta");
                    for (let t = 0; t < n.length; t++) {
                        const r = n[t],
                            i = ["itemprop", "property", "name"].map((t => r.getAttribute(t))).filter((t => !!t && e.includes(t)));
                        if (i.length && i) {
                            const t = r.getAttribute("content");
                            if (t) return t
                        }
                    }
                    return ""
                }
                const i = function() {
                    let e = n("name", "og:site_name", "og:title", "twitter:title");
                    return e || (e = t.title), e
                }();
                return {
                    description: n("description", "og:description", "twitter:description", "keywords"),
                    url: e.origin,
                    icons: function() {
                        const n = t.getElementsByTagName("link"),
                            r = [];
                        for (let t = 0; t < n.length; t++) {
                            const i = n[t],
                                o = i.getAttribute("rel");
                            if (o && o.toLowerCase().indexOf("icon") > -1) {
                                const t = i.getAttribute("href");
                                if (t)
                                    if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("https:") && 0 !== t.indexOf("//")) {
                                        let n = e.protocol + "//" + e.host;
                                        if (0 === t.indexOf("/")) n += t;
                                        else {
                                            const r = e.pathname.split("/");
                                            r.pop();
                                            n += r.join("/") + "/" + t
                                        }
                                        r.push(n)
                                    } else if (0 === t.indexOf("//")) {
                                    const n = e.protocol + t;
                                    r.push(n)
                                } else r.push(t)
                            }
                        }
                        return r
                    }(),
                    name: i
                }
            }
        },
        20640: function(t, e, n) {
            "use strict";
            var r = n(11742),
                i = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            t.exports = function(t, e) {
                var n, o, s, a, u, c, l = !1;
                e || (e = {}), n = e.debug || !1;
                try {
                    if (s = r(), a = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = t, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(r) {
                            if (r.stopPropagation(), e.format)
                                if (r.preventDefault(), "undefined" === typeof r.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var o = i[e.format] || i.default;
                                    window.clipboardData.setData(o, t)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(e.format, t);
                            e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData))
                        })), document.body.appendChild(c), a.selectNodeContents(c), u.addRange(a), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    l = !0
                } catch (h) {
                    n && console.error("unable to copy using execCommand: ", h), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0
                    } catch (h) {
                        n && console.error("unable to copy using clipboardData: ", h), n && console.error("falling back to prompt"), o = function(t) {
                            var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return t.replace(/#{\s*key\s*}/g, e)
                        }("message" in e ? e.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, t)
                    }
                } finally {
                    u && ("function" == typeof u.removeRange ? u.removeRange(a) : u.removeAllRanges()), c && document.body.removeChild(c), s()
                }
                return l
            }
        },
        4501: function(t) {
            t.exports = r, r.strict = i, r.loose = o;
            var e = Object.prototype.toString,
                n = {
                    "[object Int8Array]": !0,
                    "[object Int16Array]": !0,
                    "[object Int32Array]": !0,
                    "[object Uint8Array]": !0,
                    "[object Uint8ClampedArray]": !0,
                    "[object Uint16Array]": !0,
                    "[object Uint32Array]": !0,
                    "[object Float32Array]": !0,
                    "[object Float64Array]": !0
                };

            function r(t) {
                return i(t) || o(t)
            }

            function i(t) {
                return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array
            }

            function o(t) {
                return n[e.call(t)]
            }
        },
        5826: function(t) {
            var e = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == e.call(t)
            }
        },
        92592: function(t, e, n) {
            var r = n(47138),
                i = n(95115),
                o = n(6907),
                s = n(93776);

            function a(t, e, n, o, s) {
                var a = [].slice.call(arguments, 1),
                    u = a.length,
                    c = "function" === typeof a[u - 1];
                if (!c && !r()) throw new Error("Callback required as last argument");
                if (!c) {
                    if (u < 1) throw new Error("Too few arguments provided");
                    return 1 === u ? (n = e, e = o = void 0) : 2 !== u || e.getContext || (o = n, n = e, e = void 0), new Promise((function(r, s) {
                        try {
                            var a = i.create(n, o);
                            r(t(a, e, o))
                        } catch (u) {
                            s(u)
                        }
                    }))
                }
                if (u < 2) throw new Error("Too few arguments provided");
                2 === u ? (s = n, n = e, e = o = void 0) : 3 === u && (e.getContext && "undefined" === typeof s ? (s = o, o = void 0) : (s = o, o = n, n = e, e = void 0));
                try {
                    var l = i.create(n, o);
                    s(null, t(l, e, o))
                } catch (h) {
                    s(h)
                }
            }
            e.create = i.create, e.toCanvas = a.bind(null, o.render), e.toDataURL = a.bind(null, o.renderToDataURL), e.toString = a.bind(null, (function(t, e, n) {
                return s.render(t, n)
            }))
        },
        47138: function(t) {
            t.exports = function() {
                return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        21845: function(t, e, n) {
            var r = n(10242).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                for (var e = Math.floor(t / 7) + 2, n = r(t), i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), o = [n - 7], s = 1; s < e - 1; s++) o[s] = o[s - 1] - i;
                return o.push(6), o.reverse()
            }, e.getPositions = function(t) {
                for (var n = [], r = e.getRowColCoords(t), i = r.length, o = 0; o < i; o++)
                    for (var s = 0; s < i; s++) 0 === o && 0 === s || 0 === o && s === i - 1 || o === i - 1 && 0 === s || n.push([r[o], r[s]]);
                return n
            }
        },
        8260: function(t, e, n) {
            var r = n(76910),
                i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(t) {
                this.mode = r.ALPHANUMERIC, this.data = t
            }
            o.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    var n = 45 * i.indexOf(this.data[e]);
                    n += i.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6)
            }, t.exports = o
        },
        97245: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 === (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++) this.putBit(1 === (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        73280: function(t, e, n) {
            var r = n(99131);

            function i(t) {
                if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = r.alloc(t * t), this.reservedBit = r.alloc(t * t)
            }
            i.prototype.set = function(t, e, n, r) {
                var i = t * this.size + e;
                this.data[i] = n, r && (this.reservedBit[i] = !0)
            }, i.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, i.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, i.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = i
        },
        43424: function(t, e, n) {
            var r = n(99131),
                i = n(76910);

            function o(t) {
                this.mode = i.BYTE, this.data = r.from(t)
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = o
        },
        35393: function(t, e, n) {
            var r = n(64908),
                i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[4 * (t - 1) + 0];
                    case r.M:
                        return i[4 * (t - 1) + 1];
                    case r.Q:
                        return i[4 * (t - 1) + 2];
                    case r.H:
                        return i[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return o[4 * (t - 1) + 0];
                    case r.M:
                        return o[4 * (t - 1) + 1];
                    case r.Q:
                        return o[4 * (t - 1) + 2];
                    case r.H:
                        return o[4 * (t - 1) + 3];
                    default:
                        return
                }
            }
        },
        64908: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" !== typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw new Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        76526: function(t, e, n) {
            var r = n(10242).getSymbolSize;
            e.getPositions = function(t) {
                var e = r(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        61642: function(t, e, n) {
            var r = n(10242),
                i = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                for (var n = t.bit << 3 | e, o = n << 10; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
                return 21522 ^ (n << 10 | o)
            }
        },
        69729: function(t, e, n) {
            var r = n(99131),
                i = r.alloc(512),
                o = r.alloc(256);
            ! function() {
                for (var t = 1, e = 0; e < 255; e++) i[e] = t, o[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (e = 255; e < 512; e++) i[e] = i[e - 255]
            }(), e.log = function(t) {
                if (t < 1) throw new Error("log(" + t + ")");
                return o[t]
            }, e.exp = function(t) {
                return i[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : i[o[t] + o[e]]
            }
        },
        35442: function(t, e, n) {
            var r = n(76910),
                i = n(10242);

            function o(t) {
                this.mode = r.KANJI, this.data = t
            }
            o.getBitsLength = function(t) {
                return 13 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e < this.data.length; e++) {
                    var n = i.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else {
                        if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
                }
            }, t.exports = o
        },
        27126: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var n = 3,
                r = 3,
                i = 40,
                o = 10;

            function s(t, n, r) {
                switch (t) {
                    case e.Patterns.PATTERN000:
                        return (n + r) % 2 === 0;
                    case e.Patterns.PATTERN001:
                        return n % 2 === 0;
                    case e.Patterns.PATTERN010:
                        return r % 3 === 0;
                    case e.Patterns.PATTERN011:
                        return (n + r) % 3 === 0;
                    case e.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
                    case e.Patterns.PATTERN101:
                        return n * r % 2 + n * r % 3 === 0;
                    case e.Patterns.PATTERN110:
                        return (n * r % 2 + n * r % 3) % 2 === 0;
                    case e.Patterns.PATTERN111:
                        return (n * r % 3 + (n + r) % 2) % 2 === 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            }
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                for (var e = t.size, r = 0, i = 0, o = 0, s = null, a = null, u = 0; u < e; u++) {
                    i = o = 0, s = a = null;
                    for (var c = 0; c < e; c++) {
                        var l = t.get(u, c);
                        l === s ? i++ : (i >= 5 && (r += n + (i - 5)), s = l, i = 1), (l = t.get(c, u)) === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = l, o = 1)
                    }
                    i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5))
                }
                return r
            }, e.getPenaltyN2 = function(t) {
                for (var e = t.size, n = 0, i = 0; i < e - 1; i++)
                    for (var o = 0; o < e - 1; o++) {
                        var s = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
                        4 !== s && 0 !== s || n++
                    }
                return n * r
            }, e.getPenaltyN3 = function(t) {
                for (var e = t.size, n = 0, r = 0, o = 0, s = 0; s < e; s++) {
                    r = o = 0;
                    for (var a = 0; a < e; a++) r = r << 1 & 2047 | t.get(s, a), a >= 10 && (1488 === r || 93 === r) && n++, o = o << 1 & 2047 | t.get(a, s), a >= 10 && (1488 === o || 93 === o) && n++
                }
                return n * i
            }, e.getPenaltyN4 = function(t) {
                for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * o
            }, e.applyMask = function(t, e) {
                for (var n = e.size, r = 0; r < n; r++)
                    for (var i = 0; i < n; i++) e.isReserved(i, r) || e.xor(i, r, s(t, i, r))
            }, e.getBestMask = function(t, n) {
                for (var r = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, s = 0; s < r; s++) {
                    n(s), e.applyMask(s, t);
                    var a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(s, t), a < o && (o = a, i = s)
                }
                return i
            }
        },
        76910: function(t, e, n) {
            var r = n(43114),
                i = n(7007);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw new Error("Invalid mode: " + t);
                if (!r.isValid(e)) throw new Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return i.testNumeric(t) ? e.NUMERIC : i.testAlphanumeric(t) ? e.ALPHANUMERIC : i.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw new Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" !== typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw new Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        41085: function(t, e, n) {
            var r = n(76910);

            function i(t) {
                this.mode = r.NUMERIC, this.data = t.toString()
            }
            i.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                var e, n, r;
                for (e = 0; e + 3 <= this.data.length; e += 3) n = this.data.substr(e, 3), r = parseInt(n, 10), t.put(r, 10);
                var i = this.data.length - e;
                i > 0 && (n = this.data.substr(e), r = parseInt(n, 10), t.put(r, 3 * i + 1))
            }, t.exports = i
        },
        26143: function(t, e, n) {
            var r = n(99131),
                i = n(69729);
            e.mul = function(t, e) {
                for (var n = r.alloc(t.length + e.length - 1), o = 0; o < t.length; o++)
                    for (var s = 0; s < e.length; s++) n[o + s] ^= i.mul(t[o], e[s]);
                return n
            }, e.mod = function(t, e) {
                for (var n = r.from(t); n.length - e.length >= 0;) {
                    for (var o = n[0], s = 0; s < e.length; s++) n[s] ^= i.mul(e[s], o);
                    for (var a = 0; a < n.length && 0 === n[a];) a++;
                    n = n.slice(a)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                for (var n = r.from([1]), o = 0; o < t; o++) n = e.mul(n, [1, i.exp(o)]);
                return n
            }
        },
        95115: function(t, e, n) {
            var r = n(99131),
                i = n(10242),
                o = n(64908),
                s = n(97245),
                a = n(73280),
                u = n(21845),
                c = n(76526),
                l = n(27126),
                h = n(35393),
                f = n(52882),
                d = n(23103),
                p = n(61642),
                g = n(76910),
                m = n(16130),
                _ = n(5826);

            function v(t, e, n) {
                var r, i, o = t.size,
                    s = p.getEncodedBits(e, n);
                for (r = 0; r < 15; r++) i = 1 === (s >> r & 1), r < 6 ? t.set(r, 8, i, !0) : r < 8 ? t.set(r + 1, 8, i, !0) : t.set(o - 15 + r, 8, i, !0), r < 8 ? t.set(8, o - r - 1, i, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, i, !0) : t.set(8, 15 - r - 1, i, !0);
                t.set(o - 8, 8, 1, !0)
            }

            function w(t, e, n) {
                var o = new s;
                n.forEach((function(e) {
                    o.put(e.mode.bit, 4), o.put(e.getLength(), g.getCharCountIndicator(e.mode, t)), e.write(o)
                }));
                var a = 8 * (i.getSymbolTotalCodewords(t) - h.getTotalCodewordsCount(t, e));
                for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
                for (var u = (a - o.getLengthInBits()) / 8, c = 0; c < u; c++) o.put(c % 2 ? 17 : 236, 8);
                return function(t, e, n) {
                    for (var o = i.getSymbolTotalCodewords(e), s = h.getTotalCodewordsCount(e, n), a = o - s, u = h.getBlocksCount(e, n), c = u - o % u, l = Math.floor(o / u), d = Math.floor(a / u), p = d + 1, g = l - d, m = new f(g), _ = 0, v = new Array(u), w = new Array(u), y = 0, b = r.from(t.buffer), M = 0; M < u; M++) {
                        var E = M < c ? d : p;
                        v[M] = b.slice(_, _ + E), w[M] = m.encode(v[M]), _ += E, y = Math.max(y, E)
                    }
                    var k, x, S = r.alloc(o),
                        C = 0;
                    for (k = 0; k < y; k++)
                        for (x = 0; x < u; x++) k < v[x].length && (S[C++] = v[x][k]);
                    for (k = 0; k < g; k++)
                        for (x = 0; x < u; x++) S[C++] = w[x][k];
                    return S
                }(o, t, e)
            }

            function y(t, e, n, r) {
                var o;
                if (_(t)) o = m.fromArray(t);
                else {
                    if ("string" !== typeof t) throw new Error("Invalid data");
                    var s = e;
                    if (!s) {
                        var h = m.rawSplit(t);
                        s = d.getBestVersionForData(h, n)
                    }
                    o = m.fromString(t, s || 40)
                }
                var f = d.getBestVersionForData(o, n);
                if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
                } else e = f;
                var p = w(e, n, o),
                    g = i.getSymbolSize(e),
                    y = new a(g);
                return function(t, e) {
                        for (var n = t.size, r = c.getPositions(e), i = 0; i < r.length; i++)
                            for (var o = r[i][0], s = r[i][1], a = -1; a <= 7; a++)
                                if (!(o + a <= -1 || n <= o + a))
                                    for (var u = -1; u <= 7; u++) s + u <= -1 || n <= s + u || (a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? t.set(o + a, s + u, !0, !0) : t.set(o + a, s + u, !1, !0))
                    }(y, e),
                    function(t) {
                        for (var e = t.size, n = 8; n < e - 8; n++) {
                            var r = n % 2 === 0;
                            t.set(n, 6, r, !0), t.set(6, n, r, !0)
                        }
                    }(y),
                    function(t, e) {
                        for (var n = u.getPositions(e), r = 0; r < n.length; r++)
                            for (var i = n[r][0], o = n[r][1], s = -2; s <= 2; s++)
                                for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? t.set(i + s, o + a, !0, !0) : t.set(i + s, o + a, !1, !0)
                    }(y, e), v(y, n, 0), e >= 7 && function(t, e) {
                        for (var n, r, i, o = t.size, s = d.getEncodedBits(e), a = 0; a < 18; a++) n = Math.floor(a / 3), r = a % 3 + o - 8 - 3, i = 1 === (s >> a & 1), t.set(n, r, i, !0), t.set(r, n, i, !0)
                    }(y, e),
                    function(t, e) {
                        for (var n = t.size, r = -1, i = n - 1, o = 7, s = 0, a = n - 1; a > 0; a -= 2)
                            for (6 === a && a--;;) {
                                for (var u = 0; u < 2; u++)
                                    if (!t.isReserved(i, a - u)) {
                                        var c = !1;
                                        s < e.length && (c = 1 === (e[s] >>> o & 1)), t.set(i, a - u, c), -1 === --o && (s++, o = 7)
                                    }
                                if ((i += r) < 0 || n <= i) {
                                    i -= r, r = -r;
                                    break
                                }
                            }
                    }(y, p), isNaN(r) && (r = l.getBestMask(y, v.bind(null, y, n))), l.applyMask(r, y), v(y, n, r), {
                        modules: y,
                        version: e,
                        errorCorrectionLevel: n,
                        maskPattern: r,
                        segments: o
                    }
            }
            e.create = function(t, e) {
                if ("undefined" === typeof t || "" === t) throw new Error("No input text");
                var n, r, s = o.M;
                return "undefined" !== typeof e && (s = o.from(e.errorCorrectionLevel, o.M), n = d.from(e.version), r = l.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)), y(t, n, s, r)
            }
        },
        52882: function(t, e, n) {
            var r = n(99131),
                i = n(26143),
                o = n(6772).lW;

            function s(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            s.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = i.generateECPolynomial(this.degree)
            }, s.prototype.encode = function(t) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                var e = r.alloc(this.degree),
                    n = o.concat([t, e], t.length + this.degree),
                    s = i.mod(n, this.genPoly),
                    a = this.degree - s.length;
                if (a > 0) {
                    var u = r.alloc(this.degree);
                    return s.copy(u, a), u
                }
                return s
            }, t.exports = s
        },
        7007: function(t, e) {
            var n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            e.KANJI = new RegExp(r, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(i, "g"), e.NUMERIC = new RegExp(n, "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            var o = new RegExp("^" + r + "$"),
                s = new RegExp("^[0-9]+$"),
                a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return o.test(t)
            }, e.testNumeric = function(t) {
                return s.test(t)
            }, e.testAlphanumeric = function(t) {
                return a.test(t)
            }
        },
        16130: function(t, e, n) {
            var r = n(76910),
                i = n(41085),
                o = n(8260),
                s = n(43424),
                a = n(35442),
                u = n(7007),
                c = n(10242),
                l = n(65987);

            function h(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function f(t, e, n) {
                for (var r, i = []; null !== (r = t.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return i
            }

            function d(t) {
                var e, n, i = f(u.NUMERIC, r.NUMERIC, t),
                    o = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
                return c.isKanjiModeEnabled() ? (e = f(u.BYTE, r.BYTE, t), n = f(u.KANJI, r.KANJI, t)) : (e = f(u.BYTE_KANJI, r.BYTE, t), n = []), i.concat(o, e, n).sort((function(t, e) {
                    return t.index - e.index
                })).map((function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }))
            }

            function p(t, e) {
                switch (e) {
                    case r.NUMERIC:
                        return i.getBitsLength(t);
                    case r.ALPHANUMERIC:
                        return o.getBitsLength(t);
                    case r.KANJI:
                        return a.getBitsLength(t);
                    case r.BYTE:
                        return s.getBitsLength(t)
                }
            }

            function g(t, e) {
                var n, u = r.getBestModeForData(t);
                if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
                switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new i(t);
                    case r.ALPHANUMERIC:
                        return new o(t);
                    case r.KANJI:
                        return new a(t);
                    case r.BYTE:
                        return new s(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce((function(t, e) {
                    return "string" === typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t
                }), [])
            }, e.fromString = function(t, n) {
                for (var i = function(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            switch (i.mode) {
                                case r.NUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.ALPHANUMERIC,
                                        length: i.length
                                    }, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: h(i.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: h(i.data)
                                    }])
                            }
                        }
                        return e
                    }(d(t, c.isKanjiModeEnabled())), o = function(t, e) {
                        for (var n = {}, i = {
                                start: {}
                            }, o = ["start"], s = 0; s < t.length; s++) {
                            for (var a = t[s], u = [], c = 0; c < a.length; c++) {
                                var l = a[c],
                                    h = "" + s + c;
                                u.push(h), n[h] = {
                                    node: l,
                                    lastCount: 0
                                }, i[h] = {};
                                for (var f = 0; f < o.length; f++) {
                                    var d = o[f];
                                    n[d] && n[d].node.mode === l.mode ? (i[d][h] = p(n[d].lastCount + l.length, l.mode) - p(n[d].lastCount, l.mode), n[d].lastCount += l.length) : (n[d] && (n[d].lastCount = l.length), i[d][h] = p(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, e))
                                }
                            }
                            o = u
                        }
                        for (f = 0; f < o.length; f++) i[o[f]].end = 0;
                        return {
                            map: i,
                            table: n
                        }
                    }(i, n), s = l.find_path(o.map, "start", "end"), a = [], u = 1; u < s.length - 1; u++) a.push(o.table[s[u]].node);
                return e.fromArray(function(t) {
                    return t.reduce((function(t, e) {
                        var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                    }), [])
                }(a))
            }, e.rawSplit = function(t) {
                return e.fromArray(d(t, c.isKanjiModeEnabled()))
            }
        },
        10242: function(t, e) {
            var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }, e.getBCHDigit = function(t) {
                for (var e = 0; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" !== typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return "undefined" !== typeof n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        43114: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        23103: function(t, e, n) {
            var r = n(10242),
                i = n(35393),
                o = n(64908),
                s = n(76910),
                a = n(43114),
                u = n(5826),
                c = r.getBCHDigit(7973);

            function l(t, e) {
                return s.getCharCountIndicator(t, e) + 4
            }

            function h(t, e) {
                var n = 0;
                return t.forEach((function(t) {
                    var r = l(t.mode, e);
                    n += r + t.getBitsLength()
                })), n
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!a.isValid(t)) throw new Error("Invalid QR Code version");
                "undefined" === typeof n && (n = s.BYTE);
                var o = 8 * (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
                if (n === s.MIXED) return o;
                var u = o - l(n, t);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(u / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(u / 11 * 2);
                    case s.KANJI:
                        return Math.floor(u / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(u / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                var r, i = o.from(n, o.M);
                if (u(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (var r = 1; r <= 40; r++)
                            if (h(t, r) <= e.getCapacity(r, n, s.MIXED)) return r
                    }(t, i);
                    if (0 === t.length) return 1;
                    r = t[0]
                } else r = t;
                return function(t, n, r) {
                    for (var i = 1; i <= 40; i++)
                        if (n <= e.getCapacity(i, r, t)) return i
                }(r.mode, r.getLength(), i)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                for (var e = t << 12; r.getBCHDigit(e) - c >= 0;) e ^= 7973 << r.getBCHDigit(e) - c;
                return t << 12 | e
            }
        },
        6907: function(t, e, n) {
            var r = n(89653);
            e.render = function(t, e, n) {
                var i = n,
                    o = e;
                "undefined" !== typeof i || e && e.getContext || (i = e, e = void 0), e || (o = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                var s = r.getImageWidth(t.modules.size, i),
                    a = o.getContext("2d"),
                    u = a.createImageData(s, s);
                return r.qrToImageData(u.data, t, i),
                    function(t, e, n) {
                        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = n, e.width = n, e.style.height = n + "px", e.style.width = n + "px"
                    }(a, o, s), a.putImageData(u, 0, 0), o
            }, e.renderToDataURL = function(t, n, r) {
                var i = r;
                "undefined" !== typeof i || n && n.getContext || (i = n, n = void 0), i || (i = {});
                var o = e.render(t, n, i),
                    s = i.type || "image/png",
                    a = i.rendererOpts || {};
                return o.toDataURL(s, a.quality)
            }
        },
        93776: function(t, e, n) {
            var r = n(89653);

            function i(t, e) {
                var n = t.a / 255,
                    r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function o(t, e, n) {
                var r = t + e;
                return "undefined" !== typeof n && (r += " " + n), r
            }
            e.render = function(t, e, n) {
                var s = r.getOptions(e),
                    a = t.modules.size,
                    u = t.modules.data,
                    c = a + 2 * s.margin,
                    l = s.color.light.a ? "<path " + i(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                    h = "<path " + i(s.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        for (var r = "", i = 0, s = !1, a = 0, u = 0; u < t.length; u++) {
                            var c = Math.floor(u % e),
                                l = Math.floor(u / e);
                            c || s || (s = !0), t[u] ? (a++, u > 0 && c > 0 && t[u - 1] || (r += s ? o("M", c + n, .5 + l + n) : o("m", i, 0), i = 0, s = !1), c + 1 < e && t[u + 1] || (r += o("h", a), a = 0)) : i++
                        }
                        return r
                    }(u, a, s.margin) + '"/>',
                    f = 'viewBox="0 0 ' + c + " " + c + '"',
                    d = '<svg xmlns="https://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + h + "</svg>\n";
                return "function" === typeof n && n(null, d), d
            }
        },
        89653: function(t, e) {
            function n(t) {
                if ("number" === typeof t && (t = t.toString()), "string" !== typeof t) throw new Error("Color should be defined as hex string");
                var e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
                3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                    return [t, t]
                })))), 6 === e.length && e.push("F", "F");
                var n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                var e = "undefined" === typeof t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    r = t.width && t.width >= 21 ? t.width : void 0,
                    i = t.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                var r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }, e.qrToImageData = function(t, n, r) {
                for (var i = n.modules.size, o = n.modules.data, s = e.getScale(i, r), a = Math.floor((i + 2 * r.margin) * s), u = r.margin * s, c = [r.color.light, r.color.dark], l = 0; l < a; l++)
                    for (var h = 0; h < a; h++) {
                        var f = 4 * (l * a + h),
                            d = r.color.light;
                        if (l >= u && h >= u && l < a - u && h < a - u) d = c[o[Math.floor((l - u) / s) * i + Math.floor((h - u) / s)] ? 1 : 0];
                        t[f++] = d.r, t[f++] = d.g, t[f++] = d.b, t[f] = d.a
                    }
            }
        },
        99131: function(t, e, n) {
            "use strict";
            var r = n(5826);
            o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo()
                } catch (e) {
                    return !1
                }
            }();
            var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function o(t, e, n) {
                return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" === typeof t ? u(this, t) : function(t, e, n, r) {
                    if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                    if ("undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer) return function(t, e, n, r) {
                        if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        var i;
                        i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                        o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = c(t, i);
                        return i
                    }(t, e, n, r);
                    if ("string" === typeof e) return function(t, e) {
                        var n = 0 | h(e),
                            r = a(t, n),
                            i = r.write(e);
                        i !== n && (r = r.slice(0, i));
                        return r
                    }(t, e);
                    return function(t, e) {
                        if (o.isBuffer(e)) {
                            var n = 0 | s(e.length),
                                r = a(t, n);
                            return 0 === r.length || e.copy(r, 0, 0, n), r
                        }
                        if (e) {
                            if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !== typeof e.length || (i = e.length) !== i ? a(t, 0) : c(t, e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return c(t, e.data)
                        }
                        var i;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }(this, t, e, n) : new o(t, e, n)
            }

            function s(t) {
                if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }

            function a(t, e) {
                var n;
                return o.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = o.prototype : (null === (n = t) && (n = new o(e)), n.length = e), n
            }

            function u(t, e) {
                var n = a(t, e < 0 ? 0 : 0 | s(e));
                if (!o.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r) n[r] = 0;
                return n
            }

            function c(t, e) {
                for (var n = e.length < 0 ? 0 : 0 | s(e.length), r = a(t, n), i = 0; i < n; i += 1) r[i] = 255 & e[i];
                return r
            }

            function l(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function h(t) {
                return o.isBuffer(t) ? t.length : "undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" !== typeof t && (t = "" + t), 0 === t.length ? 0 : l(t).length)
            }
            o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), o.prototype.write = function(t, e, n) {
                void 0 === e || void 0 === n && "string" === typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
                var r = this.length - e;
                if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                return function(t, e, n, r) {
                    return function(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                        return i
                    }(l(e, t.length - n), t, n, r)
                }(this, t, e, n)
            }, o.prototype.slice = function(t, e) {
                var n, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), o.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = o.prototype;
                else {
                    var i = e - t;
                    n = new o(i, void 0);
                    for (var s = 0; s < i; ++s) n[s] = this[s + t]
                }
                return n
            }, o.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, s = r - n;
                if (this === t && n < e && e < r)
                    for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < s; ++i) t[i + e] = this[i + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                return s
            }, o.prototype.fill = function(t, e, n) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (e = 0, n = this.length) : "string" === typeof n && (n = this.length), 1 === t.length) {
                        var r = t.charCodeAt(0);
                        r < 256 && (t = r)
                    }
                } else "number" === typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var i;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" === typeof t)
                    for (i = e; i < n; ++i) this[i] = t;
                else {
                    var s = o.isBuffer(t) ? t : new o(t),
                        a = s.length;
                    for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
                }
                return this
            }, o.concat = function(t, e) {
                if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a(null, 0);
                var n;
                if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var i = u(null, e),
                    s = 0;
                for (n = 0; n < t.length; ++n) {
                    var c = t[n];
                    if (!o.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
                    c.copy(i, s), s += c.length
                }
                return i
            }, o.byteLength = h, o.prototype._isBuffer = !0, o.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, t.exports.alloc = function(t) {
                var e = new o(t);
                return e.fill(0), e
            }, t.exports.from = function(t) {
                return new o(t)
            }
        },
        6772: function(t, e, n) {
            "use strict";
            var r = n(79742),
                i = n(80645),
                o = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.lW = u, e.h2 = 50;
            var s = 2147483647;

            function a(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, n) {
                if ("number" === typeof t) {
                    if ("string" === typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return c(t, e, n)
            }

            function c(t, e, n) {
                if ("string" === typeof t) return function(t, e) {
                    "string" === typeof e && "" !== e || (e = "utf8");
                    if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    var n = 0 | g(t, e),
                        r = a(n),
                        i = r.write(t, e);
                    i !== n && (r = r.slice(0, i));
                    return r
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (z(t, Uint8Array)) {
                        var e = new Uint8Array(t);
                        return d(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return f(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (z(t, ArrayBuffer) || t && z(t.buffer, ArrayBuffer)) return d(t, e, n);
                if ("undefined" !== typeof SharedArrayBuffer && (z(t, SharedArrayBuffer) || t && z(t.buffer, SharedArrayBuffer))) return d(t, e, n);
                if ("number" === typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var r = t.valueOf && t.valueOf();
                if (null != r && r !== t) return u.from(r, e, n);
                var i = function(t) {
                    if (u.isBuffer(t)) {
                        var e = 0 | p(t.length),
                            n = a(e);
                        return 0 === n.length || t.copy(n, 0, 0, e), n
                    }
                    if (void 0 !== t.length) return "number" !== typeof t.length || F(t.length) ? a(0) : f(t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data)
                }(t);
                if (i) return i;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function l(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return l(t), a(t < 0 ? 0 : 0 | p(t))
            }

            function f(t) {
                for (var e = t.length < 0 ? 0 : 0 | p(t.length), n = a(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                return n
            }

            function d(t, e, n) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var r;
                return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, u.prototype), r
            }

            function p(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function g(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
                if ("string" !== typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                var n = t.length,
                    r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                for (var i = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return q(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return j(t).length;
                    default:
                        if (i) return r ? -1 : q(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function m(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return R(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return S(this, e, n);
                    case "ascii":
                        return I(this, e, n);
                    case "latin1":
                    case "binary":
                        return A(this, e, n);
                    case "base64":
                        return x(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function _(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
            }

            function v(t, e, n, r, i) {
                if (0 === t.length) return -1;
                if ("string" === typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (i) return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" === typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, n, r, i);
                if ("number" === typeof e) return e &= 255, "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : w(t, [e], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(t, e, n, r, i) {
                var o, s = 1,
                    a = t.length,
                    u = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    var l = -1;
                    for (o = n; o < a; o++)
                        if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                            if (-1 === l && (l = o), o - l + 1 === u) return l * s
                        } else -1 !== l && (o -= o - l), l = -1
                } else
                    for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                        for (var h = !0, f = 0; f < u; f++)
                            if (c(t, o + f) !== c(e, f)) {
                                h = !1;
                                break
                            }
                        if (h) return o
                    }
                return -1
            }

            function y(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = e.length;
                r > o / 2 && (r = o / 2);
                for (var s = 0; s < r; ++s) {
                    var a = parseInt(e.substr(2 * s, 2), 16);
                    if (F(a)) return s;
                    t[n + s] = a
                }
                return s
            }

            function b(t, e, n, r) {
                return D(q(e, t.length - n), t, n, r)
            }

            function M(t, e, n, r) {
                return D(function(t) {
                    for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                    return e
                }(e), t, n, r)
            }

            function E(t, e, n, r) {
                return D(j(e), t, n, r)
            }

            function k(t, e, n, r) {
                return D(function(t, e) {
                    for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
                    return o
                }(e, t.length - n), t, n, r)
            }

            function x(t, e, n) {
                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
            }

            function S(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], i = e; i < n;) {
                    var o, s, a, u, c = t[i],
                        l = null,
                        h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + h <= n) switch (h) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            128 === (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                            break;
                        case 3:
                            o = t[i + 1], s = t[i + 2], 128 === (192 & o) && 128 === (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                            break;
                        case 4:
                            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                    }
                    null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += h
                }
                return function(t) {
                    var e = t.length;
                    if (e <= C) return String.fromCharCode.apply(String, t);
                    var n = "",
                        r = 0;
                    for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += C));
                    return n
                }(r)
            }
            u.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (n) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(t, e, n) {
                return c(t, e, n)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, n) {
                return function(t, e, n) {
                    return l(t), t <= 0 ? a(t) : void 0 !== e ? "string" === typeof n ? a(t).fill(e, n) : a(t).fill(e) : a(t)
                }(t, e, n)
            }, u.allocUnsafe = function(t) {
                return h(t)
            }, u.allocUnsafeSlow = function(t) {
                return h(t)
            }, u.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function(t, e) {
                if (z(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), z(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
                    if (t[i] !== e[i]) {
                        n = t[i], r = e[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                var n;
                if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var r = u.allocUnsafe(e),
                    i = 0;
                for (n = 0; n < t.length; ++n) {
                    var o = t[n];
                    if (z(o, Uint8Array)) i + o.length > r.length ? u.from(o).copy(r, i) : Uint8Array.prototype.set.call(r, o, i);
                    else {
                        if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(r, i)
                    }
                    i += o.length
                }
                return r
            }, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) _(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) _(this, e, e + 3), _(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function() {
                var t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : m.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function() {
                var t = "",
                    n = e.h2;
                return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">"
            }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, n, r, i) {
                if (z(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && e >= n) return 0;
                if (r >= i) return -1;
                if (e >= n) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = t.slice(e, n), h = 0; h < a; ++h)
                    if (c[h] !== l[h]) {
                        o = c[h], s = l[h];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, u.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }, u.prototype.indexOf = function(t, e, n) {
                return v(this, t, e, n, !0)
            }, u.prototype.lastIndexOf = function(t, e, n) {
                return v(this, t, e, n, !1)
            }, u.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" === typeof e) r = e, n = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - e;
                if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return y(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, t, e, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return M(this, t, e, n);
                    case "base64":
                        return E(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, t, e, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var C = 4096;

            function I(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                return r
            }

            function A(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                return r
            }

            function R(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = e; o < n; ++o) i += W[t[o]];
                return i
            }

            function T(t, e, n) {
                for (var r = t.slice(e, n), i = "", o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function O(t, e, n) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function B(t, e, n, r, i, o) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length) throw new RangeError("Index out of range")
            }

            function N(t, e, n, r, i, o) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function L(t, e, n, r, o) {
                return e = +e, n >>>= 0, o || N(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
            }

            function P(t, e, n, r, o) {
                return e = +e, n >>>= 0, o || N(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
            }
            u.prototype.slice = function(t, e) {
                var n = this.length;
                (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                var r = this.subarray(t, e);
                return Object.setPrototypeOf(r, u.prototype), r
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, n) {
                t >>>= 0, e >>>= 0, n || O(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, n) {
                t >>>= 0, e >>>= 0, n || O(t, e, this.length);
                for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                return r
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || O(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readIntLE = function(t, e, n) {
                t >>>= 0, e >>>= 0, n || O(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
            }, u.prototype.readIntBE = function(t, e, n) {
                t >>>= 0, e >>>= 0, n || O(t, e, this.length);
                for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, u.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, u.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, u.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, n, r) {
                (t = +t, e >>>= 0, n >>>= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, n, r) {
                (t = +t, e >>>= 0, n >>>= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                    o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e >>>= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    B(this, t, e, n, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }, u.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e >>>= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    B(this, t, e, n, i - 1, -i)
                }
                var o = n - 1,
                    s = 1,
                    a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }, u.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e >>>= 0, n || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeFloatLE = function(t, e, n) {
                return L(this, t, e, !0, n)
            }, u.prototype.writeFloatBE = function(t, e, n) {
                return L(this, t, e, !1, n)
            }, u.prototype.writeDoubleLE = function(t, e, n) {
                return P(this, t, e, !0, n)
            }, u.prototype.writeDoubleBE = function(t, e, n) {
                return P(this, t, e, !1, n)
            }, u.prototype.copy = function(t, e, n, r) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i = r - n;
                return this === t && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), i
            }, u.prototype.fill = function(t, e, n, r) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (r = e, e = 0, n = this.length) : "string" === typeof n && (r = n, n = this.length), void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                    if ("string" === typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    if (1 === t.length) {
                        var i = t.charCodeAt(0);
                        ("utf8" === r && i < 128 || "latin1" === r) && (t = i)
                    }
                } else "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var o;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = e; o < n; ++o) this[o] = t;
                else {
                    var s = u.isBuffer(t) ? t : u.from(t, r),
                        a = s.length;
                    if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
                }
                return this
            };
            var U = /[^+/0-9A-Za-z-_]/g;

            function q(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function j(t) {
                return r.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(U, "")).length < 2) return "";
                    for (; t.length % 4 !== 0;) t += "=";
                    return t
                }(t))
            }

            function D(t, e, n, r) {
                for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                return i
            }

            function z(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function F(t) {
                return t !== t
            }
            var W = function() {
                for (var t = "0123456789abcdef", e = new Array(256), n = 0; n < 16; ++n)
                    for (var r = 16 * n, i = 0; i < 16; ++i) e[r + i] = t[n] + t[i];
                return e
            }()
        },
        17563: function(t, e, n) {
            "use strict";
            const r = n(70610),
                i = n(44020),
                o = n(80500);

            function s(t) {
                if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function a(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function u(t, e) {
                return e.decode ? i(t) : t
            }

            function c(t) {
                return Array.isArray(t) ? t.sort() : "object" === typeof t ? c(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t
            }

            function l(t) {
                const e = t.indexOf("#");
                return -1 !== e && (t = t.slice(0, e)), t
            }

            function h(t) {
                const e = (t = l(t)).indexOf("?");
                return -1 === e ? "" : t.slice(e + 1)
            }

            function f(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
            }

            function d(t, e) {
                s((e = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, e)).arrayFormatSeparator);
                const n = function(t) {
                        let e;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, n, r) => {
                                    e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === r[t] && (r[t] = {}), r[t][e[1]] = n) : r[t] = n
                                };
                            case "bracket":
                                return (t, n, r) => {
                                    e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = [n] : r[t] = n
                                };
                            case "comma":
                            case "separator":
                                return (e, n, r) => {
                                    const i = "string" === typeof n && n.split("").indexOf(t.arrayFormatSeparator) > -1 ? n.split(t.arrayFormatSeparator).map((e => u(e, t))) : null === n ? n : u(n, t);
                                    r[e] = i
                                };
                            default:
                                return (t, e, n) => {
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], e) : n[t] = e
                                }
                        }
                    }(e),
                    r = Object.create(null);
                if ("string" !== typeof t) return r;
                if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
                for (const i of t.split("&")) {
                    let [t, s] = o(e.decode ? i.replace(/\+/g, " ") : i, "=");
                    s = void 0 === s ? null : ["comma", "separator"].includes(e.arrayFormat) ? s : u(s, e), n(u(t, e), s, r)
                }
                for (const i of Object.keys(r)) {
                    const t = r[i];
                    if ("object" === typeof t && null !== t)
                        for (const n of Object.keys(t)) t[n] = f(t[n], e);
                    else r[i] = f(t, e)
                }
                return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce(((t, e) => {
                    const n = r[e];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? t[e] = c(n) : t[e] = n, t
                }), Object.create(null))
            }
            e.extract = h, e.parse = d, e.stringify = (t, e) => {
                if (!t) return "";
                s((e = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, e)).arrayFormatSeparator);
                const n = n => {
                        return e.skipNull && (null === (r = t[n]) || void 0 === r) || e.skipEmptyString && "" === t[n];
                        var r
                    },
                    r = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return e => (n, r) => {
                                    const i = n.length;
                                    return void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[", i, "]"].join("")] : [...n, [a(e, t), "[", a(i, t), "]=", a(r, t)].join("")]
                                };
                            case "bracket":
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[]"].join("")] : [...n, [a(e, t), "[]=", a(r, t)].join("")];
                            case "comma":
                            case "separator":
                                return e => (n, r) => null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [
                                    [a(e, t), "=", a(r, t)].join("")
                                ] : [
                                    [n, a(r, t)].join(t.arrayFormatSeparator)
                                ];
                            default:
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, a(e, t)] : [...n, [a(e, t), "=", a(r, t)].join("")]
                        }
                    }(e),
                    i = {};
                for (const s of Object.keys(t)) n(s) || (i[s] = t[s]);
                const o = Object.keys(i);
                return !1 !== e.sort && o.sort(e.sort), o.map((n => {
                    const i = t[n];
                    return void 0 === i ? "" : null === i ? a(n, e) : Array.isArray(i) ? i.reduce(r(n), []).join("&") : a(n, e) + "=" + a(i, e)
                })).filter((t => t.length > 0)).join("&")
            }, e.parseUrl = (t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                const [n, r] = o(t, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: d(h(t), e)
                }, e && e.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: u(r, e)
                } : {})
            }, e.stringifyUrl = (t, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const r = l(t.url).split("?")[0] || "",
                    i = e.extract(t.url),
                    o = e.parse(i, {
                        sort: !1
                    }),
                    s = Object.assign(o, t.query);
                let u = e.stringify(s, n);
                u && (u = `?${u}`);
                let c = function(t) {
                    let e = "";
                    const n = t.indexOf("#");
                    return -1 !== n && (e = t.slice(n)), e
                }(t.url);
                return t.fragmentIdentifier && (c = `#${a(t.fragmentIdentifier,n)}`), `${r}${u}${c}`
            }
        },
        11742: function(t) {
            t.exports = function() {
                var t = document.getSelection();
                if (!t.rangeCount) return function() {};
                for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++) n.push(t.getRangeAt(r));
                switch (e.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        e.blur();
                        break;
                    default:
                        e = null
                }
                return t.removeAllRanges(),
                    function() {
                        "Caret" === t.type && t.removeAllRanges(), t.rangeCount || n.forEach((function(e) {
                            t.addRange(e)
                        })), e && e.focus()
                    }
            }
        },
        65054: function(t, e, n) {
            var r = n(48764).Buffer,
                i = n(4501).strict;
            t.exports = function(t) {
                if (i(t)) {
                    var e = r.from(t.buffer);
                    return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e
                }
                return r.from(t)
            }
        }
    }
]);