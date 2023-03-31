(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [516], {
        21187: function(t, e, r) {
            "use strict";
            r.d(e, {
                ZP: function() {
                    return S
                }
            });
            var n = r(67294),
                i = r(50088),
                o = r(60275);
            const a = (0, o.F4)({
                    "0%": {
                        opacity: "0.2"
                    },
                    "20%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: "0.2"
                    }
                }),
                s = (0, o.F4)({
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                }),
                u = (0, o.F4)({
                    "0%": {
                        transform: "translate(0px, 0px)"
                    },
                    "50%": {
                        transform: "translate(0, calc(-$$loadingSize * 1.4))"
                    },
                    "100%": {
                        transform: "translate(0px, 0px)"
                    }
                }),
                f = (0, o.F4)({
                    "0%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: .15
                    }
                }),
                h = (0, o.zo)("div", {
                    d: "inline-flex",
                    fd: "column",
                    ai: "center",
                    position: "relative",
                    variants: {
                        color: {
                            currentColor: {
                                $$loadingColor: "currentColor"
                            },
                            white: {
                                $$loadingColor: "$colors$white"
                            },
                            default: {
                                $$loadingColor: "$colors$primary"
                            },
                            primary: {
                                $$loadingColor: "$colors$primary"
                            },
                            secondary: {
                                $$loadingColor: "$colors$secondary"
                            },
                            success: {
                                $$loadingColor: "$colors$success"
                            },
                            warning: {
                                $$loadingColor: "$colors$warning"
                            },
                            error: {
                                $$loadingColor: "$colors$error"
                            }
                        },
                        textColor: {
                            white: {
                                $$loadingTextColor: "$colors$white"
                            },
                            default: {
                                $$loadingTextColor: "$colors$text"
                            },
                            primary: {
                                $$loadingTextColor: "$colors$primary"
                            },
                            secondary: {
                                $$loadingTextColor: "$colors$secondary"
                            },
                            success: {
                                $$loadingTextColor: "$colors$success"
                            },
                            warning: {
                                $$loadingTextColor: "$colors$warning"
                            },
                            error: {
                                $$loadingTextColor: "$colors$error"
                            }
                        }
                    },
                    defaultVariants: {
                        color: "default",
                        textColor: "default"
                    }
                }),
                c = (0, o.zo)("div", {
                    size: "100%",
                    position: "relative",
                    left: "50%",
                    top: "50%"
                }),
                l = (0, o.zo)("div", {
                    d: "flex",
                    fd: "column",
                    jc: "center",
                    ai: "center",
                    position: "relative",
                    variants: {
                        size: {
                            xs: {
                                size: "$6"
                            },
                            sm: {
                                size: "$8"
                            },
                            md: {
                                size: "$9"
                            },
                            lg: {
                                size: "$11"
                            },
                            xl: {
                                size: "$12"
                            }
                        }
                    }
                }),
                d = (0, o.zo)("span", {
                    bg: "$$loadingColor",
                    position: "absolute",
                    top: "-3.9%",
                    width: "24%",
                    height: "8%",
                    left: "-10%",
                    br: "$lg",
                    animation: `${f} 1.2s linear 0s infinite normal none running`,
                    "&:nth-child(1)": {
                        animationDelay: "-1.2s",
                        transform: "rotate(0deg) translate(146%)"
                    },
                    "&:nth-child(2)": {
                        animationDelay: "-1.1s",
                        transform: "rotate(30deg) translate(146%)"
                    },
                    "&:nth-child(3)": {
                        animationDelay: "-1s",
                        transform: "rotate(60deg) translate(146%)"
                    },
                    "&:nth-child(4)": {
                        animationDelay: "-0.9s",
                        transform: "rotate(90deg) translate(146%)"
                    },
                    "&:nth-child(5)": {
                        animationDelay: "-0.8s",
                        transform: "rotate(120deg) translate(146%)"
                    },
                    "&:nth-child(6)": {
                        animationDelay: "-0.7s",
                        transform: "rotate(150deg) translate(146%)"
                    },
                    "&:nth-child(7)": {
                        animationDelay: "-0.6s",
                        transform: "rotate(180deg) translate(146%)"
                    },
                    "&:nth-child(8)": {
                        animationDelay: "-0.5s",
                        transform: "rotate(210deg) translate(146%)"
                    },
                    "&:nth-child(9)": {
                        animationDelay: "-0.4s",
                        transform: "rotate(240deg) translate(146%)"
                    },
                    "&:nth-child(10)": {
                        animationDelay: "-0.3s",
                        transform: "rotate(270deg) translate(146%)"
                    },
                    "&:nth-child(11)": {
                        animationDelay: "-0.2s",
                        transform: "rotate(300deg) translate(146%)"
                    },
                    "&:nth-child(12)": {
                        animationDelay: "-0.1s",
                        transform: "rotate(330deg) translate(146%)"
                    }
                }),
                p = (0, o.zo)("span", {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    size: "100%",
                    dflex: "center",
                    bgColor: "transparent",
                    us: "none",
                    variants: {
                        size: {
                            xs: {
                                $$loadingSize: "$space$8",
                                $$loadingBorder: "$space$1"
                            },
                            sm: {
                                $$loadingSize: "$space$10",
                                $$loadingBorder: "$space$1"
                            },
                            md: {
                                $$loadingSize: "$space$12",
                                $$loadingBorder: "calc($space$1 * 1.5)"
                            },
                            lg: {
                                $$loadingSize: "$space$15",
                                $$loadingBorder: "$space$2"
                            },
                            xl: {
                                $$loadingSize: "$space$18",
                                $$loadingBorder: "$space$3"
                            }
                        },
                        type: {
                            default: {
                                d: "flex",
                                br: "$rounded",
                                position: "relative",
                                size: "$$loadingSize",
                                i: {
                                    top: "0px",
                                    size: "100%",
                                    position: "absolute",
                                    br: "inherit"
                                },
                                "._1": {
                                    border: "$$loadingBorder solid $$loadingColor",
                                    borderTop: "$$loadingBorder solid transparent",
                                    borderLeft: "$$loadingBorder solid transparent",
                                    borderRight: "$$loadingBorder solid transparent",
                                    animation: `${s} 0.8s ease infinite`
                                },
                                "._2": {
                                    border: "$$loadingBorder dotted $$loadingColor",
                                    borderTop: "$$loadingBorder solid transparent",
                                    borderLeft: "$$loadingBorder solid transparent",
                                    borderRight: "$$loadingBorder solid transparent",
                                    animation: `${s} 0.8s linear infinite`,
                                    opacity: .5
                                },
                                "._3": {
                                    display: "none"
                                }
                            },
                            points: {
                                d: "flex",
                                position: "relative",
                                transform: "translate(0, calc($$loadingSize * 0.6))",
                                i: {
                                    size: "$$loadingSize",
                                    margin: "0 3px",
                                    bg: "$$loadingColor"
                                },
                                "._1": {
                                    br: "$rounded",
                                    animation: `${u} 0.75s ease infinite`
                                },
                                "._2": {
                                    br: "$rounded",
                                    animation: `${u} 0.75s ease infinite 0.25s`
                                },
                                "._3": {
                                    br: "$rounded",
                                    animation: `${u} 0.75s ease infinite 0.5s`
                                }
                            },
                            "points-opacity": {
                                d: "flex",
                                position: "relative",
                                i: {
                                    display: "inline-block",
                                    size: "$$loadingSize",
                                    br: "$rounded",
                                    bg: "$$loadingColor",
                                    margin: "0 1px",
                                    animation: `${a} 1.4s infinite both`
                                },
                                "._2": {
                                    animationDelay: "0.2s"
                                },
                                "._3": {
                                    animationDelay: "0.4s"
                                }
                            },
                            spinner: {},
                            gradient: {
                                display: "flex",
                                position: "relative",
                                size: "$$loadingSize",
                                "._1": {
                                    position: "absolute",
                                    size: "100%",
                                    border: "0px",
                                    animation: `${s} 1s linear infinite`,
                                    top: "0px",
                                    br: "$rounded",
                                    bg: "linear-gradient(0deg, $background 33%,$$loadingColor 100%)"
                                },
                                "._2": {
                                    top: "2px",
                                    position: "absolute",
                                    size: "calc(100% - 4px)",
                                    border: "0px",
                                    bg: "$background",
                                    br: "$rounded"
                                },
                                "._3": {
                                    display: "none"
                                }
                            }
                        }
                    },
                    compoundVariants: [{
                        size: "xs",
                        type: "points-opacity",
                        css: {
                            $$loadingSize: "$space$1"
                        }
                    }, {
                        size: "sm",
                        type: "points-opacity",
                        css: {
                            $$loadingSize: "$space$2"
                        }
                    }, {
                        size: "md",
                        type: "points-opacity",
                        css: {
                            $$loadingSize: "$space$3"
                        }
                    }, {
                        size: "lg",
                        type: "points-opacity",
                        css: {
                            $$loadingSize: "$space$4"
                        }
                    }, {
                        size: "xl",
                        type: "points-opacity",
                        css: {
                            $$loadingSize: "$space$5"
                        }
                    }, {
                        size: "xs",
                        type: "points",
                        css: {
                            $$loadingSize: "$space$1"
                        }
                    }, {
                        size: "sm",
                        type: "points",
                        css: {
                            $$loadingSize: "$space$2"
                        }
                    }, {
                        size: "md",
                        type: "points",
                        css: {
                            $$loadingSize: "$space$3"
                        }
                    }, {
                        size: "lg",
                        type: "points",
                        css: {
                            $$loadingSize: "$space$4"
                        }
                    }, {
                        size: "xl",
                        type: "points",
                        css: {
                            $$loadingSize: "$space$5"
                        }
                    }],
                    defaultVariants: {
                        type: "default"
                    }
                }),
                m = (0, o.zo)("label", {
                    mt: "$1",
                    color: "$$loadingTextColor",
                    fontSize: "$$loadingSize",
                    "*": {
                        margin: 0
                    },
                    variants: {
                        size: {
                            xs: {
                                fontSize: "$space$5",
                                marginTop: "$2"
                            },
                            sm: {
                                fontSize: "$space$6",
                                marginTop: "$3"
                            },
                            md: {
                                fontSize: "$base",
                                marginTop: "$4"
                            },
                            lg: {
                                fontSize: "$space$10",
                                marginTop: "$4"
                            },
                            xl: {
                                fontSize: "$space$11",
                                marginTop: "$5"
                            }
                        }
                    }
                });
            var b = r(61309),
                g = r(85893);
            const y = ({
                children: t,
                size: e,
                color: r,
                textColor: n,
                className: i,
                ...o
            }) => {
                const a = Array.isArray(t) ? (null == t ? void 0 : t.length) > 1 && void 0 !== t[0] : void 0 !== t,
                    s = t && a ? "" : "Loading";
                return (0, g.jsxs)(l, {
                    className: (0, b.Z)("nextui-spinner", i),
                    color: r,
                    size: e,
                    ...o,
                    children: [(0, g.jsx)(c, {
                        "aria-label": s,
                        className: "nextui-spinner-container",
                        children: [...new Array(12)].map(((t, e) => (0, g.jsx)(d, {}, `nextui-spinner-${e}`)))
                    }), t && (0, g.jsx)(m, {
                        color: n,
                        size: e,
                        children: t
                    })]
                })
            };
            y.toString = () => ".nextui-spinner";
            var v = y;
            const w = ({
                children: t,
                size: e,
                gradientBackground: r,
                loadingCss: i,
                type: o,
                ...a
            }) => {
                const s = t ? "" : "Loading",
                    u = (0, n.useMemo)((() => {
                        if ("gradient" === o) return {
                            "._2": {
                                bg: r
                            }
                        }
                    }), [o]);
                return (0, g.jsx)(h, { ...a,
                    children: "spinner" === o ? (0, g.jsx)(v, {
                        size: e,
                        children: t
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(p, {
                            "aria-label": s,
                            className: `nextui-loading nextui-loading-${o}`,
                            css: { ...i,
                                ...u
                            },
                            size: e,
                            type: o,
                            children: [(0, g.jsx)("i", {
                                className: "_1"
                            }), (0, g.jsx)("i", {
                                className: "_2"
                            }), (0, g.jsx)("i", {
                                className: "_3"
                            })]
                        }), t && (0, g.jsx)(m, {
                            className: "nextui-loading-label",
                            size: e,
                            children: t
                        })]
                    })
                })
            };
            w.toString = () => ".nextui-loading";
            const M = n.memo(w);
            var S = (0, i.Z)(M, {
                size: "md",
                type: "default"
            })
        },
        97501: function(t, e, r) {
            "use strict";
            r.d(e, {
                ZP: function() {
                    return dt
                }
            });
            var n = r(67294),
                i = r(73935),
                o = r(12532);
            const a = () => !!Boolean("undefined" != typeof window && window.document && window.document.createElement) && navigator.platform.toUpperCase().indexOf("MAC") >= 0,
                s = t => {
                    const e = document.createElement("div");
                    return e.setAttribute("id", t), e
                };
            var u = (t = (() => Math.random().toString(32).slice(2, 10))(), e) => {
                    const r = `nextui-${t}`,
                        {
                            isBrowser: i
                        } = (0, o.Z)(),
                        [a, u] = (0, n.useState)(i ? s(r) : null);
                    return (0, n.useEffect)((() => {
                        const t = (e ? e() : null) || document.body,
                            n = null == t ? void 0 : t.querySelector(`#${r}`),
                            i = n || s(r);
                        n || t.appendChild(i), u(i)
                    }), []), a
                },
                f = r(50088),
                h = r(61309);
            var c = n.memo((({
                    children: t,
                    onExited: e,
                    onEntered: r,
                    className: i,
                    childrenRef: o,
                    enterTime: a = 60,
                    leaveTime: s = 60,
                    clearTime: u = 60,
                    visible: f = !1,
                    name: c = "transition",
                    ...l
                }) => {
                    const [d, p] = (0, n.useState)(""), [m, b] = (0, n.useState)(f);
                    return (0, n.useLayoutEffect)((() => {
                        const t = f ? "enter" : "leave";
                        f && !m && b(!0), p(`${c}-${t}`);
                        const n = f ? a : s,
                            i = setTimeout((() => {
                                p(`${c}-${t} ${c}-${t}-active`), "leave" === t ? null == e || e() : null == r || r(), clearTimeout(i)
                            }), n),
                            o = setTimeout((() => {
                                f || (p(""), b(!1)), clearTimeout(o)
                            }), n + u);
                        return () => {
                            clearTimeout(i), clearTimeout(o)
                        }
                    }), [f, m]), (0, n.useEffect)((() => {
                        if (null == o || !o.current) return;
                        const t = d.split(" "),
                            e = o.current.className.split(" ").filter((t => !t.includes(c)));
                        o.current.className = (0, h.Z)(e, t)
                    }), [o, d]), n.isValidElement(t) && m ? n.cloneElement(t, { ...l,
                        className: (0, h.Z)(t.props.className, i, !(null != o && o.current) && d)
                    }) : null
                })),
                l = r(66391),
                d = r(38738);
            const p = 9,
                m = 27,
                b = 32,
                g = {
                    CtrlCmd: 2048,
                    Shift: 1024,
                    Alt: 512,
                    WinCtrl: 256
                };
            var y = (t, e, r = {}) => {
                    const i = Array.isArray(e) ? e : [e],
                        {
                            disableGlobalEvent: o = !1,
                            capture: s = !1,
                            stopPropagation: u = !1,
                            preventDefault: f = !1,
                            event: h = "keydown"
                        } = r,
                        c = (t => {
                            const e = t.filter((t => !!(0, d.sF)(g, t))),
                                r = {
                                    CtrlCmd: !1,
                                    Shift: !1,
                                    Alt: !1,
                                    WinCtrl: !1
                                };
                            return e.forEach((t => {
                                const e = (0, d.sF)(g, t);
                                r[e] = !0
                            })), r
                        })(i),
                        l = i.filter((t => !(0, d.sF)(g, t))),
                        {
                            CtrlCmd: p,
                            WinCtrl: m
                        } = {
                            CtrlCmd: a() ? "metaKey" : "ctrlKey",
                            WinCtrl: a() ? "ctrlKey" : "metaKey"
                        },
                        b = e => {
                            c.Shift && !e.shiftKey || c.Alt && !e.altKey || c.CtrlCmd && !e[p] || c.WinCtrl && !e[m] || l.length > 0 && !l.includes(e.keyCode) || (u && e.stopPropagation(), f && e.preventDefault(), t && t(e))
                        };
                    (0, n.useEffect)((() => (o || document.addEventListener(h, b), () => {
                        document.removeEventListener(h, b)
                    })), [o]);
                    const y = (t, e = !1) => t !== h || e !== s ? () => {} : t => b(t);
                    return {
                        bindings: {
                            onKeyDown: y("keydown"),
                            onKeyDownCapture: y("keydown", !0),
                            onKeyPress: y("keypress"),
                            onKeyPressCapture: y("keypress", !0),
                            onKeyUp: y("keyup"),
                            onKeyUpCapture: y("keyup", !0)
                        }
                    }
                },
                v = r(3569),
                w = r(60275);
            const M = (0, w.F4)({
                    "0%": {
                        opacity: 0
                    },
                    "60%": {
                        opacity: .75
                    },
                    "100%": {
                        opacity: 1
                    }
                }),
                S = (0, w.F4)({
                    "0%": {
                        opacity: 0
                    }
                }),
                x = (0, w.F4)({
                    "0%": {
                        backdropFilter: "saturate(0%) blur(0)"
                    }
                }),
                _ = (0, w.zo)("div", {
                    position: "relative",
                    display: "inline-block",
                    zIndex: "$max",
                    outline: "none",
                    width: "100%",
                    margin: "$9 auto",
                    verticalAlign: "middle",
                    "@sm": {
                        width: "90%",
                        maxWidth: "90%"
                    },
                    variants: {
                        animated: {
                            true: {
                                "&": {
                                    animationName: M,
                                    animationDuration: "200ms",
                                    animationTimingFunction: "ease-in",
                                    animationDirection: "normal"
                                }
                            },
                            false: {
                                transition: "none"
                            }
                        }
                    }
                }),
                A = (0, w.zo)("div", {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    size: "100%",
                    pe: "none",
                    zIndex: "$max",
                    "@motion": {
                        transition: "none"
                    },
                    variants: {
                        blur: {
                            true: {
                                bg: "$black",
                                opacity: "$$backdropOpacity",
                                "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
                                    opacity: 1,
                                    backdropFilter: "saturate(180%) blur(20px)",
                                    animationName: `${x}, ${S}`,
                                    bg: "rgba(0, 0, 0, 0.1)"
                                }
                            },
                            false: {
                                bg: "$black",
                                opacity: "$$backdropOpacity",
                                animationName: `${S}`,
                                animationDuration: "0.2s",
                                animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                            }
                        },
                        animated: {
                            true: {
                                animationName: `${S}`,
                                animationDuration: "0.2s",
                                animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                            },
                            false: {
                                transition: "none"
                            }
                        }
                    }
                }),
                E = (0, w.zo)("div", {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "auto",
                    zIndex: "$max",
                    WebkitOverflowScrolling: "touch",
                    boxSizing: "border-box",
                    textAlign: "center",
                    "&:before": {
                        content: "",
                        display: "inline-block",
                        width: 0,
                        height: "100%",
                        verticalAlign: "middle"
                    },
                    ".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-default": {
                        opacity: 0
                    },
                    ".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-default": {
                        opacity: "$$backdropOpacity"
                    },
                    ".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-default": {
                        opacity: "$$backdropOpacity"
                    },
                    ".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-default": {
                        opacity: 0
                    },
                    ".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-blur": {
                        bg: "rgba(0, 0, 0, 0.1)"
                    },
                    ".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-blur": {
                        bg: "rgba(0, 0, 0, 0.4)"
                    },
                    ".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-blur": {
                        bg: "rgba(0, 0, 0, 0.4)"
                    },
                    ".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-blur": {
                        bg: "rgba(0, 0, 0, 0.1)"
                    },
                    variants: {
                        fullScreen: {
                            true: {
                                display: "inline-flex",
                                overflow: "hidden",
                                [`& ${_}`]: {
                                    width: "100vw",
                                    maxWidth: "100vw",
                                    height: "100vh",
                                    margin: 0
                                },
                                [`& ${A}`]: {
                                    display: "none"
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        fullScreen: !1
                    }
                });
            var k = r(85893);
            const R = "nextui-backdrop",
                O = n.memo((({
                    children: t,
                    onClick: e,
                    onKeyPress: r,
                    visible: i,
                    maxWidth: o,
                    blur: a,
                    animated: s,
                    opacity: u,
                    preventDefault: f,
                    className: d,
                    css: p,
                    ...g
                }) => {
                    const [, v, w] = (0, l.Z)(!1), M = t => {
                        w.current || e && e(t)
                    }, S = (0, n.useCallback)((t => {
                        t.stopPropagation()
                    }), []), x = () => {
                        if (!w.current) return;
                        const t = setTimeout((() => {
                            v(!1), clearTimeout(t)
                        }), 0)
                    }, {
                        bindings: O
                    } = y((t => {
                        r && r(t)
                    }), [m, b], {
                        disableGlobalEvent: !0,
                        preventDefault: f
                    }), P = (0, n.useMemo)((() => i ? "open" : "closed"), [i]), I = (0, n.useMemo)((() => (0, k.jsxs)(E, {
                        "aria-hidden": !0,
                        className: (0, h.Z)(R, `${R}--${P}`, d),
                        css: {
                            $$backdropOpacity: u,
                            ...p
                        },
                        "data-state": P,
                        role: "button",
                        tabIndex: -1,
                        onClick: M,
                        onMouseUp: x,
                        ...O,
                        ...g,
                        children: [(0, k.jsx)(A, {
                            animated: s,
                            blur: a,
                            className: (0, h.Z)(`${R}-layer`, a ? `${R}-layer-blur` : `${R}-layer-default`)
                        }), (0, k.jsx)(_, {
                            animated: s,
                            className: `${R}-content`,
                            css: {
                                maxWidth: o
                            },
                            onClick: S,
                            onMouseDown: () => v(!0),
                            children: t
                        })]
                    })), [t]);
                    return (0, k.jsx)(k.Fragment, {
                        children: s ? (0, k.jsx)(c, {
                            clearTime: 150,
                            enterTime: 20,
                            leaveTime: 20,
                            name: `${R}-wrapper`,
                            visible: i,
                            children: I
                        }) : i ? I : null
                    })
                }));
            v.Ts && (O.displayName = "NextUI.Backdrop"), O.toString = () => ".nextui-backdrop";
            var P = (0, f.Z)(O, {
                onClick: () => {},
                visible: !1,
                blur: !1,
                animated: !0,
                preventDefault: !0,
                opacity: .5,
                className: ""
            });
            const I = {
                    scrollLayer: !1
                },
                T = new Map,
                j = t => !!(t.touches && t.touches.length > 1) || (t.preventDefault(), !1);
            var N = (t, e) => {
                if ("undefined" == typeof document) return [!1, t => t];
                const r = t || (0, n.useRef)(document.body),
                    [i, o] = (0, n.useState)(!1),
                    a = { ...I,
                        ...e || {}
                    },
                    s = () => !a.scrollLayer && !("undefined" == typeof window || !window.navigator) && /iP(ad|hone|od)/.test(window.navigator.platform);
                return (0, n.useEffect)((() => {
                    if (!r || !r.current) return;
                    const t = r.current.style.overflow;
                    if (i) {
                        if (T.has(r.current)) return;
                        return s() ? document.addEventListener("touchmove", j, {
                            passive: !1
                        }) : r.current.style.overflow = "hidden", void T.set(r.current, {
                            last: t
                        })
                    }
                    if (T.has(r.current)) {
                        if (s()) document.removeEventListener("touchmove", j);
                        else {
                            const t = T.get(r.current);
                            r.current.style.overflow = t.last
                        }
                        T.delete(r.current)
                    }
                }), [i, r]), [i, o]
            };
            const B = n.memo((({
                size: t,
                fill: e,
                plain: r,
                width: n,
                height: i,
                className: o,
                ...a
            }) => (0, k.jsx)("svg", r ? {
                className: o,
                fill: "none",
                height: t || i,
                stroke: e,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                viewBox: "0 0 24 24",
                width: t || n,
                ...a,
                children: (0, k.jsx)("path", {
                    d: "M18 6L6 18M6 6l12 12"
                })
            } : {
                className: o,
                height: t || i,
                viewBox: "0 0 24 24",
                width: t || n,
                ...a,
                children: (0, k.jsx)("path", {
                    d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
                    fill: e
                })
            })));
            var L = (0, f.Z)(B, {
                width: 24,
                height: 24,
                plain: !1,
                className: ""
            });
            const C = (0, w.F4)({
                    "0%": {
                        transform: "scale(0.95)"
                    },
                    "40%": {
                        transform: "scale(1.02)"
                    },
                    "80%": {
                        transform: "scale(0.98)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                }),
                $ = (0, w.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "scale(0.95)"
                    },
                    "60%": {
                        opacity: .75,
                        transform: "scale(1.02)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                }),
                z = (0, w.F4)({
                    "0%": {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    "100%": {
                        opacity: 0,
                        transform: "scale(0.95)"
                    }
                });
            var q = r(39975);
            const U = (0, w.zo)("div", {
                    outline: "none",
                    overflow: "hidden",
                    width: 0,
                    height: 0,
                    opacity: 0
                }),
                F = (0, w.zo)("button", {
                    position: "absolute",
                    background: "transparent",
                    border: "none",
                    zIndex: "$1",
                    top: "$space$3",
                    right: "$space$2",
                    margin: 0,
                    d: "inline-flex",
                    ai: "center",
                    height: "auto",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    transition: "$default",
                    padding: "calc($space$sm * 0.5)",
                    color: "$accents4",
                    br: "$space$5",
                    svg: {
                        color: "currentColor"
                    },
                    "&:hover": {
                        svg: {
                            opacity: .8
                        }
                    },
                    variants: {
                        disabled: {
                            true: {
                                cursor: "not-allowed"
                            }
                        }
                    }
                }, q.xg),
                D = (0, w.zo)("div", {
                    display: "flex",
                    flexShrink: 0,
                    ai: "center",
                    ov: "hidden",
                    color: "inherit",
                    padding: "$sm $10",
                    fs: "$xs",
                    variants: {
                        noPadding: {
                            true: {
                                padding: 0
                            }
                        },
                        autoMargin: {
                            true: {
                                "> *:first-child": {
                                    mt: 0
                                },
                                "> *:last-child": {
                                    mb: 0
                                }
                            }
                        }
                    }
                }),
                K = (0, w.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 auto",
                    padding: "$sm $10",
                    oy: "auto",
                    position: "relative",
                    ta: "left",
                    variants: {
                        noPadding: {
                            true: {
                                flex: 1,
                                padding: 0
                            }
                        },
                        autoMargin: {
                            true: {
                                "> *:first-child": {
                                    mt: 0
                                },
                                "> *": {
                                    mb: "$8"
                                },
                                "> *:last-child": {
                                    mb: 0
                                }
                            }
                        }
                    }
                }),
                H = (0, w.zo)("div", {
                    d: "flex",
                    flexWrap: "wrap",
                    flexShrink: 0,
                    overflow: "hidden",
                    color: "inherit",
                    ai: "center",
                    fs: "$xs",
                    padding: "$sm $lg",
                    variants: {
                        noPadding: {
                            true: {
                                padding: 0
                            }
                        },
                        autoMargin: {
                            true: {
                                "> *": {
                                    m: "$2"
                                }
                            }
                        }
                    }
                }),
                Z = (0, w.zo)("section", {
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    overflow: "hidden",
                    height: "fit-content(20em)",
                    maxHeight: "inherit",
                    display: "flex",
                    outline: "none",
                    flexDirection: "column",
                    position: "relative",
                    boxSizing: "border-box",
                    color: "$foreground",
                    br: "$lg",
                    boxShadow: "$lg",
                    bg: "$backgroundContrast",
                    animationFillMode: "forwards",
                    "@motion": {
                        transition: "none"
                    },
                    "&.nextui-modal-wrapper-enter:not(.nextui-modal-rendered)": {
                        animationName: $,
                        animationDuration: "200ms",
                        animationTimingFunction: "ease-in",
                        animationDirection: "normal"
                    },
                    "&.nextui-modal-wrapper-leave": {
                        animationName: z,
                        animationDuration: "50ms",
                        animationTimingFunction: "ease-out"
                    },
                    variants: {
                        fullScreen: {
                            true: {
                                size: "100%",
                                maxHeight: "100%"
                            },
                            false: {
                                "&.nextui-modal-rebound": {
                                    animationDuration: "250ms",
                                    animationName: C,
                                    animationTimingFunction: "ease",
                                    animationFillMode: "forwards"
                                }
                            }
                        },
                        scroll: {
                            true: {
                                maxHeight: "calc(100vh - 200px)"
                            }
                        },
                        closeButton: {
                            true: {
                                paddingTop: "$lg",
                                [`& ${F}`]: {
                                    svg: {
                                        size: "$10"
                                    }
                                }
                            }
                        }
                    },
                    compoundVariants: [{
                        scroll: !0,
                        fullScreen: !0,
                        css: {
                            maxHeight: "100%"
                        }
                    }]
                }),
                W = ({
                    onClick: t,
                    ...e
                }) => (0, k.jsx)(F, {
                    "aria-label": "Close",
                    className: "nextui-modal-close-icon",
                    type: "button",
                    onClick: e => {
                        e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), t && t(e)
                    },
                    ...e,
                    children: (0, k.jsx)(L, {
                        plain: !0,
                        "aria-hidden": !0,
                        className: "nextui-modal-close-icon-svg",
                        fill: "currentColor",
                        size: 18
                    })
                });
            W.toString = () => ".nextui-modal-close-icon";
            var G = n.memo(W);
            const V = "nextui-modal",
                J = ({
                    className: t,
                    children: e,
                    visible: r,
                    fullScreen: i,
                    closeButton: o,
                    rebound: a,
                    animated: s,
                    onCloseButtonClick: u,
                    scroll: f,
                    ...l
                }) => {
                    const d = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        b = (0, n.useRef)(null),
                        [g, y] = (0, n.useState)(!1);
                    (0, n.useEffect)((() => {
                        const t = setTimeout((() => {
                            y(!0), clearTimeout(t)
                        }), 300);
                        return () => clearTimeout(t)
                    }), []), (0, n.useEffect)((() => {
                        if (!r) return;
                        const t = document.activeElement;
                        ((t, e) => {
                            if (!t || !e) return !1;
                            let r = e;
                            for (; r;) {
                                if (r === t) return !0;
                                r = r.parentNode
                            }
                            return !1
                        })(d.current, t) || m.current && m.current.focus()
                    }), [r]);
                    const v = t => {
                            const e = t.keyCode === p;
                            if (!r || !e) return;
                            const n = document.activeElement;
                            t.shiftKey ? n === m.current && b.current && b.current.focus() : n === b.current && m.current && m.current.focus()
                        },
                        w = () => {
                            u && u()
                        },
                        M = (0, n.useMemo)((() => r ? "open" : "closed"), [r]),
                        S = (0, n.useMemo)((() => (0, k.jsxs)(Z, {
                            ref: d,
                            "aria-modal": r,
                            className: (0, h.Z)(V, `nextui-modal--${M}`, {
                                "nextui-modal-fullscreen": i,
                                "nextui-modal-with-close-button": o,
                                "nextui-modal-rebound": a,
                                "nextui-modal-rendered": g
                            }, t),
                            closeButton: o,
                            "data-state": M,
                            fullScreen: i,
                            role: "dialog",
                            scroll: f,
                            tabIndex: -1,
                            ...l,
                            onKeyDown: v,
                            children: [(0, k.jsx)(U, {
                                ref: m,
                                "aria-hidden": "true",
                                className: "nextui-modal-hide-tab",
                                role: "button",
                                tabIndex: 0
                            }), o && (0, k.jsx)(G, {
                                onClick: w
                            }), e, (0, k.jsx)(U, {
                                ref: b,
                                "aria-hidden": "true",
                                className: "nextui-modal-hide-tab",
                                role: "button",
                                tabIndex: 0
                            })]
                        })), [a, e]);
                    return (0, k.jsx)(k.Fragment, {
                        children: s ? (0, k.jsx)(c, {
                            clearTime: 300,
                            enterTime: 20,
                            leaveTime: 20,
                            name: "nextui-modal-wrapper",
                            visible: r,
                            children: S
                        }) : r ? S : null
                    })
                };
            J.toString = () => ".nextui-modal-wrapper";
            var X = (0, f.Z)(J, {
                className: "",
                visible: !1,
                rebound: !1
            });
            const Y = n.createContext({}),
                Q = ({
                    children: t,
                    onClose: e,
                    onOpen: r,
                    open: o,
                    autoMargin: a,
                    width: s,
                    className: f,
                    preventClose: h,
                    blur: c,
                    animated: d,
                    fullScreen: p,
                    noPadding: b,
                    ...g
                }) => {
                    const v = u("modal"),
                        [, w] = N(null, {
                            scrollLayer: !0
                        }),
                        [M, S, x] = (0, l.Z)(!1),
                        [_, A] = (0, n.useState)(!1),
                        E = () => {
                            e && e(), S(!1), w(!1)
                        };
                    (0, n.useEffect)((() => {
                        void 0 !== o && (o && r && r(), !o && x.current && e && e(), S(o), w(o))
                    }), [o]);
                    const R = () => {
                            A(!0);
                            const t = setTimeout((() => {
                                A(!1), clearTimeout(t)
                            }), 300)
                        },
                        {
                            bindings: O
                        } = y((() => {
                            h ? R() : E()
                        }), m, {
                            disableGlobalEvent: !0,
                            preventDefault: !0
                        }),
                        I = (0, n.useMemo)((() => ({
                            close: E,
                            autoMargin: a,
                            noPadding: b
                        })), []);
                    return v ? (0, i.createPortal)((0, k.jsx)(Y.Provider, {
                        value: I,
                        children: (0, k.jsx)(P, {
                            animated: d,
                            blur: c,
                            fullScreen: p,
                            maxWidth: s,
                            visible: M,
                            onClick: () => {
                                h ? R() : E()
                            },
                            ...O,
                            children: (0, k.jsx)(X, {
                                animated: d,
                                className: f,
                                fullScreen: p,
                                rebound: _,
                                visible: M,
                                onCloseButtonClick: E,
                                ...g,
                                children: t
                            })
                        })
                    }), v) : null
                };
            v.Ts && (Q.displayName = "NextUI.Modal"), Q.toString = () => ".nextui-modal", Q.defaultProps = {
                width: "400px",
                className: "",
                preventClose: !1,
                fullScreen: !1,
                closeButton: !1,
                animated: !0,
                blur: !1,
                scroll: !1,
                noPadding: !1
            };
            var tt = Q;
            const et = "nextui-modal-header",
                rt = ({
                    children: t,
                    className: e,
                    justify: r,
                    autoMargin: i,
                    css: o,
                    ...a
                }) => {
                    const {
                        autoMargin: s,
                        noPadding: u
                    } = (0, n.useContext)(Y), f = (0, n.useMemo)((() => void 0 !== s ? s : i), [i, s]);
                    return (0, k.jsx)(D, {
                        autoMargin: f,
                        className: (0, h.Z)(et, {
                            [`${et}-auto-margin`]: f,
                            [`${et}-no-padding`]: u
                        }, e),
                        css: {
                            justifyContent: r,
                            ...o
                        },
                        noPadding: u,
                        ...a,
                        children: t
                    })
                };
            rt.toString = () => ".nextui-modal-header";
            const nt = n.memo(rt);
            var it = (0, f.Z)(nt, {
                className: "",
                justify: "center",
                autoMargin: !0
            });
            const ot = "nextui-modal-body",
                at = ({
                    className: t,
                    children: e,
                    autoMargin: r,
                    ...i
                }) => {
                    const {
                        autoMargin: o,
                        noPadding: a
                    } = (0, n.useContext)(Y), s = (0, n.useMemo)((() => void 0 !== o ? o : r), [r, o]);
                    return (0, k.jsx)(K, {
                        autoMargin: s,
                        className: (0, h.Z)(ot, {
                            [`${ot}-auto-margin`]: s,
                            [`${ot}-no-padding`]: a
                        }, t),
                        noPadding: a,
                        ...i,
                        children: e
                    })
                };
            at.toString = () => ".nextui-modal-body";
            const st = n.memo(at);
            var ut = (0, f.Z)(st, {
                className: "",
                autoMargin: !0
            });
            const ft = "nextui-modal-footer",
                ht = ({
                    children: t,
                    className: e,
                    justify: r,
                    autoMargin: i,
                    css: o,
                    ...a
                }) => {
                    const {
                        autoMargin: s,
                        noPadding: u
                    } = (0, n.useContext)(Y), f = (0, n.useMemo)((() => void 0 !== s ? s : i), [i, s]);
                    return (0, k.jsx)(H, {
                        autoMargin: f,
                        className: (0, h.Z)(ft, {
                            [`${ft}-auto-margin`]: f,
                            [`${ft}-no-padding`]: u
                        }, e),
                        css: {
                            justifyContent: r,
                            ...o
                        },
                        noPadding: u,
                        ...a,
                        children: t
                    })
                };
            ht.toString = () => ".nextui-modal-footer";
            const ct = n.memo(ht);
            var lt = (0, f.Z)(ct, {
                className: "",
                justify: "flex-end",
                autoMargin: !0
            });
            tt.Header = it, tt.Body = ut, tt.Footer = lt;
            var dt = tt
        },
        29931: function(t, e, r) {
            var n;

            function i(t) {
                this.rand = t
            }
            if (t.exports = function(t) {
                    return n || (n = new i(null)), n.generate(t)
                }, t.exports.Rand = i, i.prototype.generate = function(t) {
                    return this._rand(t)
                }, i.prototype._rand = function(t) {
                    if (this.rand.getBytes) return this.rand.getBytes(t);
                    for (var e = new Uint8Array(t), r = 0; r < e.length; r++) e[r] = this.rand.getByte();
                    return e
                }, "object" === typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e), e
            } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e), e
            } : "object" === typeof window && (i.prototype._rand = function() {
                throw new Error("Not implemented yet")
            });
            else try {
                var o = r(89214);
                if ("function" !== typeof o.randomBytes) throw new Error("Not supported");
                i.prototype._rand = function(t) {
                    return o.randomBytes(t)
                }
            } catch (a) {}
        },
        71027: function(t, e, r) {
            var n = r(89509).Buffer,
                i = r(79681).Transform,
                o = r(32553).s;

            function a(t) {
                i.call(this), this.hashMode = "string" === typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }
            r(35717)(a, i), a.prototype.update = function(t, e, r) {
                "string" === typeof t && (t = n.from(t, e));
                var i = this._update(t);
                return this.hashMode ? this : (r && (i = this._toString(i, r)), i)
            }, a.prototype.setAutoPadding = function() {}, a.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }, a.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }, a.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }, a.prototype._transform = function(t, e, r) {
                var n;
                try {
                    this.hashMode ? this._update(t) : this.push(this._update(t))
                } catch (i) {
                    n = i
                } finally {
                    r(n)
                }
            }, a.prototype._flush = function(t) {
                var e;
                try {
                    this.push(this.__final())
                } catch (r) {
                    e = r
                }
                t(e)
            }, a.prototype._finalOrDigest = function(t) {
                var e = this.__final() || n.alloc(0);
                return t && (e = this._toString(e, t, !0)), e
            }, a.prototype._toString = function(t, e, r) {
                if (this._decoder || (this._decoder = new o(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");
                var n = this._decoder.write(t);
                return r && (n += this._decoder.end()), n
            }, t.exports = a
        },
        23482: function(t, e, r) {
            "use strict";
            var n = r(35717),
                i = r(62318),
                o = r(79785),
                a = r(89072),
                s = r(71027);

            function u(t) {
                s.call(this, "digest"), this._hash = t
            }
            n(u, s), u.prototype._update = function(t) {
                this._hash.update(t)
            }, u.prototype._final = function() {
                return this._hash.digest()
            }, t.exports = function(t) {
                return "md5" === (t = t.toLowerCase()) ? new i : "rmd160" === t || "ripemd160" === t ? new o : new u(a(t))
            }
        },
        86266: function(t, e, r) {
            "use strict";
            var n = e;
            n.version = r(18597).i8, n.utils = r(80953), n.rand = r(29931), n.curve = r(88254), n.curves = r(45427), n.ec = r(57954), n.eddsa = r(65980)
        },
        4918: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(80953),
                o = i.getNAF,
                a = i.getJSF,
                s = i.assert;

            function u(t, e) {
                this.type = t, this.p = new n(e.p, 16), this.red = e.prime ? n.red(e.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = e.n && new n(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function f(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            t.exports = u, u.prototype.point = function() {
                throw new Error("Not implemented")
            }, u.prototype.validate = function() {
                throw new Error("Not implemented")
            }, u.prototype._fixedNafMul = function(t, e) {
                s(t.precomputed);
                var r = t._getDoubles(),
                    n = o(e, 1, this._bitLength),
                    i = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
                i /= 3;
                var a, u, f = [];
                for (a = 0; a < n.length; a += r.step) {
                    u = 0;
                    for (var h = a + r.step - 1; h >= a; h--) u = (u << 1) + n[h];
                    f.push(u)
                }
                for (var c = this.jpoint(null, null, null), l = this.jpoint(null, null, null), d = i; d > 0; d--) {
                    for (a = 0; a < f.length; a++)(u = f[a]) === d ? l = l.mixedAdd(r.points[a]) : u === -d && (l = l.mixedAdd(r.points[a].neg()));
                    c = c.add(l)
                }
                return c.toP()
            }, u.prototype._wnafMul = function(t, e) {
                var r = 4,
                    n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, a = o(e, r, this._bitLength), u = this.jpoint(null, null, null), f = a.length - 1; f >= 0; f--) {
                    for (var h = 0; f >= 0 && 0 === a[f]; f--) h++;
                    if (f >= 0 && h++, u = u.dblp(h), f < 0) break;
                    var c = a[f];
                    s(0 !== c), u = "affine" === t.type ? c > 0 ? u.mixedAdd(i[c - 1 >> 1]) : u.mixedAdd(i[-c - 1 >> 1].neg()) : c > 0 ? u.add(i[c - 1 >> 1]) : u.add(i[-c - 1 >> 1].neg())
                }
                return "affine" === t.type ? u.toP() : u
            }, u.prototype._wnafMulAdd = function(t, e, r, n, i) {
                var s, u, f, h = this._wnafT1,
                    c = this._wnafT2,
                    l = this._wnafT3,
                    d = 0;
                for (s = 0; s < n; s++) {
                    var p = (f = e[s])._getNAFPoints(t);
                    h[s] = p.wnd, c[s] = p.points
                }
                for (s = n - 1; s >= 1; s -= 2) {
                    var m = s - 1,
                        b = s;
                    if (1 === h[m] && 1 === h[b]) {
                        var g = [e[m], null, null, e[b]];
                        0 === e[m].y.cmp(e[b].y) ? (g[1] = e[m].add(e[b]), g[2] = e[m].toJ().mixedAdd(e[b].neg())) : 0 === e[m].y.cmp(e[b].y.redNeg()) ? (g[1] = e[m].toJ().mixedAdd(e[b]), g[2] = e[m].add(e[b].neg())) : (g[1] = e[m].toJ().mixedAdd(e[b]), g[2] = e[m].toJ().mixedAdd(e[b].neg()));
                        var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            v = a(r[m], r[b]);
                        for (d = Math.max(v[0].length, d), l[m] = new Array(d), l[b] = new Array(d), u = 0; u < d; u++) {
                            var w = 0 | v[0][u],
                                M = 0 | v[1][u];
                            l[m][u] = y[3 * (w + 1) + (M + 1)], l[b][u] = 0, c[m] = g
                        }
                    } else l[m] = o(r[m], h[m], this._bitLength), l[b] = o(r[b], h[b], this._bitLength), d = Math.max(l[m].length, d), d = Math.max(l[b].length, d)
                }
                var S = this.jpoint(null, null, null),
                    x = this._wnafT4;
                for (s = d; s >= 0; s--) {
                    for (var _ = 0; s >= 0;) {
                        var A = !0;
                        for (u = 0; u < n; u++) x[u] = 0 | l[u][s], 0 !== x[u] && (A = !1);
                        if (!A) break;
                        _++, s--
                    }
                    if (s >= 0 && _++, S = S.dblp(_), s < 0) break;
                    for (u = 0; u < n; u++) {
                        var E = x[u];
                        0 !== E && (E > 0 ? f = c[u][E - 1 >> 1] : E < 0 && (f = c[u][-E - 1 >> 1].neg()), S = "affine" === f.type ? S.mixedAdd(f) : S.add(f))
                    }
                }
                for (s = 0; s < n; s++) c[s] = null;
                return i ? S : S.toP()
            }, u.BasePoint = f, f.prototype.eq = function() {
                throw new Error("Not implemented")
            }, f.prototype.validate = function() {
                return this.curve.validate(this)
            }, u.prototype.decodePoint = function(t, e) {
                t = i.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * r) return 6 === t[0] ? s(t[t.length - 1] % 2 === 0) : 7 === t[0] && s(t[t.length - 1] % 2 === 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw new Error("Unknown point format")
            }, f.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, f.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, f.prototype.encode = function(t, e) {
                return i.encode(this._encode(e), t)
            }, f.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, f.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, f.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var o = 0; o < t; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: t,
                    points: r
                }
            }, f.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                return {
                    wnd: t,
                    points: e
                }
            }, f.prototype._getBeta = function() {
                return null
            }, f.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            }
        },
        31138: function(t, e, r) {
            "use strict";
            var n = r(80953),
                i = r(73785),
                o = r(35717),
                a = r(4918),
                s = n.assert;

            function u(t) {
                this.twisted = 1 !== (0 | t.a), this.mOneA = this.twisted && -1 === (0 | t.a), this.extended = this.mOneA, a.call(this, "edwards", t), this.a = new i(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 === (0 | t.c)
            }

            function f(t, e, r, n, o) {
                a.BasePoint.call(this, t, "projective"), null === e && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            o(u, a), t.exports = u, u.prototype._mulA = function(t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }, u.prototype._mulC = function(t) {
                return this.oneC ? t : this.c.redMul(t)
            }, u.prototype.jpoint = function(t, e, r, n) {
                return this.point(t, e, r, n)
            }, u.prototype.pointFromX = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    n = this.c2.redSub(this.a.redMul(r)),
                    o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    a = n.redMul(o.redInvm()),
                    s = a.redSqrt();
                if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
                var u = s.fromRed().isOdd();
                return (e && !u || !e && u) && (s = s.redNeg()), this.point(t, s)
            }, u.prototype.pointFromY = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    n = r.redSub(this.c2),
                    o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    a = n.redMul(o.redInvm());
                if (0 === a.cmp(this.zero)) {
                    if (e) throw new Error("invalid point");
                    return this.point(this.zero, t)
                }
                var s = a.redSqrt();
                if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
                return s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t)
            }, u.prototype.validate = function(t) {
                if (t.isInfinity()) return !0;
                t.normalize();
                var e = t.x.redSqr(),
                    r = t.y.redSqr(),
                    n = e.redMul(this.a).redAdd(r),
                    i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                return 0 === n.cmp(i)
            }, o(f, a.BasePoint), u.prototype.pointFromJSON = function(t) {
                return f.fromJSON(this, t)
            }, u.prototype.point = function(t, e, r, n) {
                return new f(this, t, e, r, n)
            }, f.fromJSON = function(t, e) {
                return new f(t, e[0], e[1], e[2])
            }, f.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, f.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, f.prototype._extDbl = function() {
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(t),
                    i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                    o = n.redAdd(e),
                    a = o.redSub(r),
                    s = n.redSub(e),
                    u = i.redMul(a),
                    f = o.redMul(s),
                    h = i.redMul(s),
                    c = a.redMul(o);
                return this.curve.point(u, f, c, h)
            }, f.prototype._projDbl = function() {
                var t, e, r, n, i, o, a = this.x.redAdd(this.y).redSqr(),
                    s = this.x.redSqr(),
                    u = this.y.redSqr();
                if (this.curve.twisted) {
                    var f = (n = this.curve._mulA(s)).redAdd(u);
                    this.zOne ? (t = a.redSub(s).redSub(u).redMul(f.redSub(this.curve.two)), e = f.redMul(n.redSub(u)), r = f.redSqr().redSub(f).redSub(f)) : (i = this.z.redSqr(), o = f.redSub(i).redISub(i), t = a.redSub(s).redISub(u).redMul(o), e = f.redMul(n.redSub(u)), r = f.redMul(o))
                } else n = s.redAdd(u), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), t = this.curve._mulC(a.redISub(n)).redMul(o), e = this.curve._mulC(n).redMul(s.redISub(u)), r = n.redMul(o);
                return this.curve.point(t, e, r)
            }, f.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, f.prototype._extAdd = function(t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                    n = this.t.redMul(this.curve.dd).redMul(t.t),
                    i = this.z.redMul(t.z.redAdd(t.z)),
                    o = r.redSub(e),
                    a = i.redSub(n),
                    s = i.redAdd(n),
                    u = r.redAdd(e),
                    f = o.redMul(a),
                    h = s.redMul(u),
                    c = o.redMul(u),
                    l = a.redMul(s);
                return this.curve.point(f, h, l, c)
            }, f.prototype._projAdd = function(t) {
                var e, r, n = this.z.redMul(t.z),
                    i = n.redSqr(),
                    o = this.x.redMul(t.x),
                    a = this.y.redMul(t.y),
                    s = this.curve.d.redMul(o).redMul(a),
                    u = i.redSub(s),
                    f = i.redAdd(s),
                    h = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),
                    c = n.redMul(u).redMul(h);
                return this.curve.twisted ? (e = n.redMul(f).redMul(a.redSub(this.curve._mulA(o))), r = u.redMul(f)) : (e = n.redMul(f).redMul(a.redSub(o)), r = this.curve._mulC(u).redMul(f)), this.curve.point(c, e, r)
            }, f.prototype.add = function(t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }, f.prototype.mul = function(t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }, f.prototype.mulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
            }, f.prototype.jmulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
            }, f.prototype.normalize = function() {
                if (this.zOne) return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
            }, f.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, f.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, f.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, f.prototype.eq = function(t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }, f.prototype.eqXToP = function(t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e)) return !0;
                for (var r = t.clone(), n = this.curve.redN.redMul(this.z);;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0
                }
            }, f.prototype.toP = f.prototype.normalize, f.prototype.mixedAdd = f.prototype.add
        },
        88254: function(t, e, r) {
            "use strict";
            var n = e;
            n.base = r(4918), n.short = r(6673), n.mont = r(22881), n.edwards = r(31138)
        },
        22881: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(35717),
                o = r(4918),
                a = r(80953);

            function s(t) {
                o.call(this, "mont", t), this.a = new n(t.a, 16).toRed(this.red), this.b = new n(t.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function u(t, e, r) {
                o.BasePoint.call(this, t, "projective"), null === e && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(e, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            i(s, o), t.exports = s, s.prototype.validate = function(t) {
                var e = t.normalize().x,
                    r = e.redSqr(),
                    n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                return 0 === n.redSqrt().redSqr().cmp(n)
            }, i(u, o.BasePoint), s.prototype.decodePoint = function(t, e) {
                return this.point(a.toArray(t, e), 1)
            }, s.prototype.point = function(t, e) {
                return new u(this, t, e)
            }, s.prototype.pointFromJSON = function(t) {
                return u.fromJSON(this, t)
            }, u.prototype.precompute = function() {}, u.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, u.fromJSON = function(t, e) {
                return new u(t, e[0], e[1] || t.one)
            }, u.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, u.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, u.prototype.dbl = function() {
                var t = this.x.redAdd(this.z).redSqr(),
                    e = this.x.redSub(this.z).redSqr(),
                    r = t.redSub(e),
                    n = t.redMul(e),
                    i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i)
            }, u.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.diffAdd = function(t, e) {
                var r = this.x.redAdd(this.z),
                    n = this.x.redSub(this.z),
                    i = t.x.redAdd(t.z),
                    o = t.x.redSub(t.z).redMul(r),
                    a = i.redMul(n),
                    s = e.z.redMul(o.redAdd(a).redSqr()),
                    u = e.x.redMul(o.redISub(a).redSqr());
                return this.curve.point(s, u)
            }, u.prototype.mul = function(t) {
                for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
                for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
                return n
            }, u.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.eq = function(t) {
                return 0 === this.getX().cmp(t.getX())
            }, u.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, u.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        6673: function(t, e, r) {
            "use strict";
            var n = r(80953),
                i = r(73785),
                o = r(35717),
                a = r(4918),
                s = n.assert;

            function u(t) {
                a.call(this, "short", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function f(t, e, r, n) {
                a.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function h(t, e, r, n) {
                a.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            o(u, a), t.exports = u, u.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var e, r;
                    if (t.beta) e = new i(t.beta, 16).toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new i(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return {
                        beta: e,
                        lambda: r,
                        basis: t.basis ? t.basis.map((function(t) {
                            return {
                                a: new i(t.a, 16),
                                b: new i(t.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, u.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : i.mont(t),
                    r = new i(2).toRed(e).redInvm(),
                    n = r.redNeg(),
                    o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
            }, u.prototype._getEndoBasis = function(t) {
                for (var e, r, n, o, a, s, u, f, h, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, d = this.n.clone(), p = new i(1), m = new i(0), b = new i(0), g = new i(1), y = 0; 0 !== l.cmpn(0);) {
                    var v = d.div(l);
                    f = d.sub(v.mul(l)), h = b.sub(v.mul(p));
                    var w = g.sub(v.mul(m));
                    if (!n && f.cmp(c) < 0) e = u.neg(), r = p, n = f.neg(), o = h;
                    else if (n && 2 === ++y) break;
                    u = f, d = l, l = f, b = p, p = h, g = m, m = w
                }
                a = f.neg(), s = h;
                var M = n.sqr().add(o.sqr());
                return a.sqr().add(s.sqr()).cmp(M) >= 0 && (a = e, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
                    a: n,
                    b: o
                }, {
                    a: a,
                    b: s
                }]
            }, u.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    n = e[1],
                    i = n.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    a = i.mul(r.a),
                    s = o.mul(n.a),
                    u = i.mul(r.b),
                    f = o.mul(n.b);
                return {
                    k1: t.sub(a).sub(s),
                    k2: u.add(f).neg()
                }
            }, u.prototype.pointFromX = function(t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var o = n.fromRed().isOdd();
                return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n)
            }, u.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    n = this.a.redMul(e),
                    i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, u.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var a = this._endoSplit(e[o]),
                        s = t[o],
                        u = s._getBeta();
                    a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), u = u.neg(!0)), n[2 * o] = s, n[2 * o + 1] = u, i[2 * o] = a.k1, i[2 * o + 1] = a.k2
                }
                for (var f = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0; h < 2 * o; h++) n[h] = null, i[h] = null;
                return f
            }, o(f, a.BasePoint), u.prototype.point = function(t, e, r) {
                return new f(this, t, e, r)
            }, u.prototype.pointFromJSON = function(t, e) {
                return f.fromJSON(this, t, e)
            }, f.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            n = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(n)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(n)
                            }
                        }
                    }
                    return e
                }
            }, f.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, f.fromJSON = function(t, e, r) {
                "string" === typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2]) return n;

                function i(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [n].concat(o.doubles.points.map(i))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [n].concat(o.naf.points.map(i))
                    }
                }, n
            }, f.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, f.prototype.isInfinity = function() {
                return this.inf
            }, f.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t)) return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, f.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    n = t.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    a = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, a)
            }, f.prototype.getX = function() {
                return this.x.fromRed()
            }, f.prototype.getY = function() {
                return this.y.fromRed()
            }, f.prototype.mul = function(t) {
                return t = new i(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, f.prototype.mulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, f.prototype.jmulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, f.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, f.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        n = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return e
            }, f.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, o(h, a.BasePoint), u.prototype.jpoint = function(t, e, r) {
                return new h(this, t, e, r)
            }, h.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }, h.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, h.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(e),
                    i = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    a = t.y.redMul(r.redMul(this.z)),
                    s = n.redSub(i),
                    u = o.redSub(a);
                if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var f = s.redSqr(),
                    h = f.redMul(s),
                    c = n.redMul(f),
                    l = u.redSqr().redIAdd(h).redISub(c).redISub(c),
                    d = u.redMul(c.redISub(l)).redISub(o.redMul(h)),
                    p = this.z.redMul(t.z).redMul(s);
                return this.curve.jpoint(l, d, p)
            }, h.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    n = t.x.redMul(e),
                    i = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    a = r.redSub(n),
                    s = i.redSub(o);
                if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = a.redSqr(),
                    f = u.redMul(a),
                    h = r.redMul(u),
                    c = s.redSqr().redIAdd(f).redISub(h).redISub(h),
                    l = s.redMul(h.redISub(c)).redISub(i.redMul(f)),
                    d = this.z.redMul(a);
                return this.curve.jpoint(c, l, d)
            }, h.prototype.dblp = function(t) {
                if (0 === t) return this;
                if (this.isInfinity()) return this;
                if (!t) return this.dbl();
                var e;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    a = this.y,
                    s = this.z,
                    u = s.redSqr().redSqr(),
                    f = a.redAdd(a);
                for (e = 0; e < t; e++) {
                    var h = o.redSqr(),
                        c = f.redSqr(),
                        l = c.redSqr(),
                        d = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
                        p = o.redMul(c),
                        m = d.redSqr().redISub(p.redAdd(p)),
                        b = p.redISub(m),
                        g = d.redMul(b);
                    g = g.redIAdd(g).redISub(l);
                    var y = f.redMul(s);
                    e + 1 < t && (u = u.redMul(l)), o = m, s = y, f = g
                }
                return this.curve.jpoint(o, f.redMul(i), s)
            }, h.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, h.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    a = a.redIAdd(a);
                    var s = n.redAdd(n).redIAdd(n),
                        u = s.redSqr().redISub(a).redISub(a),
                        f = o.redIAdd(o);
                    f = (f = f.redIAdd(f)).redIAdd(f), t = u, e = s.redMul(a.redISub(u)).redISub(f), r = this.y.redAdd(this.y)
                } else {
                    var h = this.x.redSqr(),
                        c = this.y.redSqr(),
                        l = c.redSqr(),
                        d = this.x.redAdd(c).redSqr().redISub(h).redISub(l);
                    d = d.redIAdd(d);
                    var p = h.redAdd(h).redIAdd(h),
                        m = p.redSqr(),
                        b = l.redIAdd(l);
                    b = (b = b.redIAdd(b)).redIAdd(b), t = m.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(b), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, h.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    a = a.redIAdd(a);
                    var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        u = s.redSqr().redISub(a).redISub(a);
                    t = u;
                    var f = o.redIAdd(o);
                    f = (f = f.redIAdd(f)).redIAdd(f), e = s.redMul(a.redISub(u)).redISub(f), r = this.y.redAdd(this.y)
                } else {
                    var h = this.z.redSqr(),
                        c = this.y.redSqr(),
                        l = this.x.redMul(c),
                        d = this.x.redSub(h).redMul(this.x.redAdd(h));
                    d = d.redAdd(d).redIAdd(d);
                    var p = l.redIAdd(l),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    t = d.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(h);
                    var b = c.redSqr();
                    b = (b = (b = b.redIAdd(b)).redIAdd(b)).redIAdd(b), e = d.redMul(p.redISub(t)).redISub(b)
                }
                return this.curve.jpoint(t, e, r)
            }, h.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = e.redSqr(),
                    a = r.redSqr(),
                    s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                    u = e.redAdd(e),
                    f = (u = u.redIAdd(u)).redMul(a),
                    h = s.redSqr().redISub(f.redAdd(f)),
                    c = f.redISub(h),
                    l = a.redSqr();
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var d = s.redMul(c).redISub(l),
                    p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(h, d, p)
            }, h.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = e.redSqr(),
                    i = t.redAdd(t).redIAdd(t),
                    o = i.redSqr(),
                    a = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                    s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
                    u = n.redIAdd(n);
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var f = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),
                    h = e.redMul(f);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var c = this.x.redMul(s).redISub(h);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var l = this.y.redMul(f.redMul(u.redISub(f)).redISub(a.redMul(s)));
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var d = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
                return this.curve.jpoint(c, l, d)
            }, h.prototype.mul = function(t, e) {
                return t = new i(t, e), this.curve._wnafMul(this, t)
            }, h.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var n = e.redMul(this.z),
                    i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }, h.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, h.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, h.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        45427: function(t, e, r) {
            "use strict";
            var n, i = e,
                o = r(33715),
                a = r(88254),
                s = r(80953).assert;

            function u(t) {
                "short" === t.type ? this.curve = new a.short(t) : "edwards" === t.type ? this.curve = new a.edwards(t) : this.curve = new a.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function f(t, e) {
                Object.defineProperty(i, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new u(e);
                        return Object.defineProperty(i, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            i.PresetCurve = u, f("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: o.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), f("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: o.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), f("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: o.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), f("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: o.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), f("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: o.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), f("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["9"]
            }), f("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                n = r(91037)
            } catch (h) {
                n = void 0
            }
            f("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: o.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
            })
        },
        57954: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(2156),
                o = r(80953),
                a = r(45427),
                s = r(29931),
                u = o.assert,
                f = r(31251),
                h = r(90611);

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                "string" === typeof t && (u(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t), t = a[t]), t instanceof a.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            t.exports = c, c.prototype.keyPair = function(t) {
                return new f(this, t)
            }, c.prototype.keyFromPrivate = function(t, e) {
                return f.fromPrivate(this, t, e)
            }, c.prototype.keyFromPublic = function(t, e) {
                return f.fromPublic(this, t, e)
            }, c.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new i({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || s(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
                    var a = new n(e.generate(r));
                    if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
                }
            }, c.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, c.prototype.sign = function(t, e, r, o) {
                "object" === typeof r && (o = r, r = null), o || (o = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new n(t, 16));
                for (var a = this.n.byteLength(), s = e.getPrivate().toArray("be", a), u = t.toArray("be", a), f = new i({
                        hash: this.hash,
                        entropy: s,
                        nonce: u,
                        pers: o.pers,
                        persEnc: o.persEnc || "utf8"
                    }), c = this.n.sub(new n(1)), l = 0;; l++) {
                    var d = o.k ? o.k(l) : new n(f.generate(this.n.byteLength()));
                    if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(c) >= 0)) {
                        var p = this.g.mul(d);
                        if (!p.isInfinity()) {
                            var m = p.getX(),
                                b = m.umod(this.n);
                            if (0 !== b.cmpn(0)) {
                                var g = d.invm(this.n).mul(b.mul(e.getPrivate()).iadd(t));
                                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                                    var y = (p.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(b) ? 2 : 0);
                                    return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), y ^= 1), new h({
                                        r: b,
                                        s: g,
                                        recoveryParam: y
                                    })
                                }
                            }
                        }
                    }
                }
            }, c.prototype.verify = function(t, e, r, i) {
                t = this._truncateToN(new n(t, 16)), r = this.keyFromPublic(r, i);
                var o = (e = new h(e, "hex")).r,
                    a = e.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
                var s, u = a.invm(this.n),
                    f = u.mul(t).umod(this.n),
                    c = u.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(f, r.getPublic(), c)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(f, r.getPublic(), c)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
            }, c.prototype.recoverPubKey = function(t, e, r, i) {
                u((3 & r) === r, "The recovery param is more than two bits"), e = new h(e, i);
                var o = this.n,
                    a = new n(t),
                    s = e.r,
                    f = e.s,
                    c = 1 & r,
                    l = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                s = l ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
                var d = e.r.invm(o),
                    p = o.sub(a).mul(d).umod(o),
                    m = f.mul(d).umod(o);
                return this.g.mulAdd(p, s, m)
            }, c.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                if (null !== (e = new h(e, n)).recoveryParam) return e.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var o;
                    try {
                        o = this.recoverPubKey(t, e, i)
                    } catch (t) {
                        continue
                    }
                    if (o.eq(r)) return i
                }
                throw new Error("Unable to find valid recovery factor")
            }
        },
        31251: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(80953).assert;

            function o(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            t.exports = o, o.fromPublic = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    pub: e,
                    pubEnc: r
                })
            }, o.fromPrivate = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    priv: e,
                    privEnc: r
                })
            }, o.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, o.prototype.getPublic = function(t, e) {
                return "string" === typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, o.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, o.prototype._importPrivate = function(t, e) {
                this.priv = new n(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, o.prototype._importPublic = function(t, e) {
                if (t.x || t.y) return "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, e)
            }, o.prototype.derive = function(t) {
                return t.validate() || i(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, o.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, o.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, o.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        90611: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(80953),
                o = i.assert;

            function a(t, e) {
                if (t instanceof a) return t;
                this._importDER(t, e) || (o(t.r && t.s, "Signature without r or s"), this.r = new n(t.r, 16), this.s = new n(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function s() {
                this.place = 0
            }

            function u(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, a = e.place; o < n; o++, a++) i <<= 8, i |= t[a], i >>>= 0;
                return !(i <= 127) && (e.place = a, i)
            }

            function f(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function h(t, e) {
                if (e < 128) t.push(e);
                else {
                    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                    for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                    t.push(e)
                }
            }
            t.exports = a, a.prototype._importDER = function(t, e) {
                t = i.toArray(t, e);
                var r = new s;
                if (48 !== t[r.place++]) return !1;
                var o = u(t, r);
                if (!1 === o) return !1;
                if (o + r.place !== t.length) return !1;
                if (2 !== t[r.place++]) return !1;
                var a = u(t, r);
                if (!1 === a) return !1;
                var f = t.slice(r.place, a + r.place);
                if (r.place += a, 2 !== t[r.place++]) return !1;
                var h = u(t, r);
                if (!1 === h) return !1;
                if (t.length !== h + r.place) return !1;
                var c = t.slice(r.place, h + r.place);
                if (0 === f[0]) {
                    if (!(128 & f[1])) return !1;
                    f = f.slice(1)
                }
                if (0 === c[0]) {
                    if (!(128 & c[1])) return !1;
                    c = c.slice(1)
                }
                return this.r = new n(f), this.s = new n(c), this.recoveryParam = null, !0
            }, a.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = f(e), r = f(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var n = [2];
                h(n, e.length), (n = n.concat(e)).push(2), h(n, r.length);
                var o = n.concat(r),
                    a = [48];
                return h(a, o.length), a = a.concat(o), i.encode(a, t)
            }
        },
        65980: function(t, e, r) {
            "use strict";
            var n = r(33715),
                i = r(45427),
                o = r(80953),
                a = o.assert,
                s = o.parseBytes,
                u = r(79087),
                f = r(23622);

            function h(t) {
                if (a("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof h)) return new h(t);
                t = i[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = n.sha512
            }
            t.exports = h, h.prototype.sign = function(t, e) {
                t = s(t);
                var r = this.keyFromSecret(e),
                    n = this.hashInt(r.messagePrefix(), t),
                    i = this.g.mul(n),
                    o = this.encodePoint(i),
                    a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
                    u = n.add(a).umod(this.curve.n);
                return this.makeSignature({
                    R: i,
                    S: u,
                    Rencoded: o
                })
            }, h.prototype.verify = function(t, e, r) {
                t = s(t), e = this.makeSignature(e);
                var n = this.keyFromPublic(r),
                    i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
                    o = this.g.mul(e.S());
                return e.R().add(n.pub().mul(i)).eq(o)
            }, h.prototype.hashInt = function() {
                for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                return o.intFromLE(t.digest()).umod(this.curve.n)
            }, h.prototype.keyFromPublic = function(t) {
                return u.fromPublic(this, t)
            }, h.prototype.keyFromSecret = function(t) {
                return u.fromSecret(this, t)
            }, h.prototype.makeSignature = function(t) {
                return t instanceof f ? t : new f(this, t)
            }, h.prototype.encodePoint = function(t) {
                var e = t.getY().toArray("le", this.encodingLength);
                return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
            }, h.prototype.decodePoint = function(t) {
                var e = (t = o.parseBytes(t)).length - 1,
                    r = t.slice(0, e).concat(-129 & t[e]),
                    n = 0 !== (128 & t[e]),
                    i = o.intFromLE(r);
                return this.curve.pointFromY(i, n)
            }, h.prototype.encodeInt = function(t) {
                return t.toArray("le", this.encodingLength)
            }, h.prototype.decodeInt = function(t) {
                return o.intFromLE(t)
            }, h.prototype.isPoint = function(t) {
                return t instanceof this.pointClass
            }
        },
        79087: function(t, e, r) {
            "use strict";
            var n = r(80953),
                i = n.assert,
                o = n.parseBytes,
                a = n.cachedProperty;

            function s(t, e) {
                this.eddsa = t, this._secret = o(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = o(e.pub)
            }
            s.fromPublic = function(t, e) {
                return e instanceof s ? e : new s(t, {
                    pub: e
                })
            }, s.fromSecret = function(t, e) {
                return e instanceof s ? e : new s(t, {
                    secret: e
                })
            }, s.prototype.secret = function() {
                return this._secret
            }, a(s, "pubBytes", (function() {
                return this.eddsa.encodePoint(this.pub())
            })), a(s, "pub", (function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            })), a(s, "privBytes", (function() {
                var t = this.eddsa,
                    e = this.hash(),
                    r = t.encodingLength - 1,
                    n = e.slice(0, t.encodingLength);
                return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
            })), a(s, "priv", (function() {
                return this.eddsa.decodeInt(this.privBytes())
            })), a(s, "hash", (function() {
                return this.eddsa.hash().update(this.secret()).digest()
            })), a(s, "messagePrefix", (function() {
                return this.hash().slice(this.eddsa.encodingLength)
            })), s.prototype.sign = function(t) {
                return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
            }, s.prototype.verify = function(t, e) {
                return this.eddsa.verify(t, e, this)
            }, s.prototype.getSecret = function(t) {
                return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), t)
            }, s.prototype.getPublic = function(t) {
                return n.encode(this.pubBytes(), t)
            }, t.exports = s
        },
        23622: function(t, e, r) {
            "use strict";
            var n = r(73785),
                i = r(80953),
                o = i.assert,
                a = i.cachedProperty,
                s = i.parseBytes;

            function u(t, e) {
                this.eddsa = t, "object" !== typeof e && (e = s(e)), Array.isArray(e) && (e = {
                    R: e.slice(0, t.encodingLength),
                    S: e.slice(t.encodingLength)
                }), o(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof n && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
            }
            a(u, "S", (function() {
                return this.eddsa.decodeInt(this.Sencoded())
            })), a(u, "R", (function() {
                return this.eddsa.decodePoint(this.Rencoded())
            })), a(u, "Rencoded", (function() {
                return this.eddsa.encodePoint(this.R())
            })), a(u, "Sencoded", (function() {
                return this.eddsa.encodeInt(this.S())
            })), u.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, u.prototype.toHex = function() {
                return i.encode(this.toBytes(), "hex").toUpperCase()
            }, t.exports = u
        },
        91037: function(t) {
            t.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        80953: function(t, e, r) {
            "use strict";
            var n = e,
                i = r(73785),
                o = r(79746),
                a = r(34504);
            n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function(t, e, r) {
                var n = new Array(Math.max(t.bitLength(), r) + 1);
                n.fill(0);
                for (var i = 1 << e + 1, o = t.clone(), a = 0; a < n.length; a++) {
                    var s, u = o.andln(i - 1);
                    o.isOdd() ? (s = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1)
                }
                return n
            }, n.getJSF = function(t, e) {
                var r = [
                    [],
                    []
                ];
                t = t.clone(), e = e.clone();
                for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0;) {
                    var a, s, u = t.andln(3) + i & 3,
                        f = e.andln(3) + o & 3;
                    3 === u && (u = -1), 3 === f && (f = -1), a = 0 === (1 & u) ? 0 : 3 !== (n = t.andln(7) + i & 7) && 5 !== n || 2 !== f ? u : -u, r[0].push(a), s = 0 === (1 & f) ? 0 : 3 !== (n = e.andln(7) + o & 7) && 5 !== n || 2 !== u ? f : -f, r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * o === s + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                }
                return r
            }, n.cachedProperty = function(t, e, r) {
                var n = "_" + e;
                t.prototype[e] = function() {
                    return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                }
            }, n.parseBytes = function(t) {
                return "string" === typeof t ? n.toArray(t, "hex") : t
            }, n.intFromLE = function(t) {
                return new i(t, "hex", "le")
            }
        },
        73785: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var a;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(85568).Buffer
                } catch (A) {}

                function s(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function u(t, e, r) {
                    var n = s(t, r);
                    return r - 1 >= e && (n |= s(t, r - 1) << 4), n
                }

                function f(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
                        var s = t.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, r) {
                    if ("number" === typeof t) return this._initNumber(t, e, r);
                    if ("object" === typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                }, o.prototype._initNumber = function(t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function(t, e, r) {
                    if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e, r) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0,
                        a = 0;
                    if ("be" === r)
                        for (n = t.length - 1; n >= e; n -= 2) i = u(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    else
                        for (n = (t.length - e) % 2 === 0 ? e + 1 : e; n < t.length; n += 2) i = u(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function(t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, u = 0, h = r; h < s; h += n) u = f(t, h, h + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== a) {
                        var c = 1;
                        for (u = f(t, h, t.length, e), h = 0; h < a; h++) c *= e;
                        this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                    this.strip()
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
                var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function d(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var f = 1; f < n; f++) {
                        for (var h = u >>> 26, c = 67108863 & u, l = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= l; d++) {
                            var p = f - d | 0;
                            h += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a
                        }
                        r.words[f] = 0 | c, u = 0 | h
                    }
                    return 0 !== u ? r.words[f] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? h[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var f = c[t],
                            d = l[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(d).toString(t);
                            r = (p = p.idivn(d)).isZero() ? m + r : h[f - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return n("undefined" !== typeof a), this.toArrayLike(a, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === e,
                        f = new t(o),
                        h = this.clone();
                    if (u) {
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[s] = a;
                        for (; s < o; s++) f[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) f[s] = 0;
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[o - s - 1] = a
                    }
                    return f
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
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
                    return n(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
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
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    for (; 0 !== o && a < r.length; a++) o = (e = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var p = function(t, e, r) {
                    var n, i, o, a = t.words,
                        s = e.words,
                        u = r.words,
                        f = 0,
                        h = 0 | a[0],
                        c = 8191 & h,
                        l = h >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        b = 0 | a[2],
                        g = 8191 & b,
                        y = b >>> 13,
                        v = 0 | a[3],
                        w = 8191 & v,
                        M = v >>> 13,
                        S = 0 | a[4],
                        x = 8191 & S,
                        _ = S >>> 13,
                        A = 0 | a[5],
                        E = 8191 & A,
                        k = A >>> 13,
                        R = 0 | a[6],
                        O = 8191 & R,
                        P = R >>> 13,
                        I = 0 | a[7],
                        T = 8191 & I,
                        j = I >>> 13,
                        N = 0 | a[8],
                        B = 8191 & N,
                        L = N >>> 13,
                        C = 0 | a[9],
                        $ = 8191 & C,
                        z = C >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        D = 0 | s[1],
                        K = 8191 & D,
                        H = D >>> 13,
                        Z = 0 | s[2],
                        W = 8191 & Z,
                        G = Z >>> 13,
                        V = 0 | s[3],
                        J = 8191 & V,
                        X = V >>> 13,
                        Y = 0 | s[4],
                        Q = 8191 & Y,
                        tt = Y >>> 13,
                        et = 0 | s[5],
                        rt = 8191 & et,
                        nt = et >>> 13,
                        it = 0 | s[6],
                        ot = 8191 & it,
                        at = it >>> 13,
                        st = 0 | s[7],
                        ut = 8191 & st,
                        ft = st >>> 13,
                        ht = 0 | s[8],
                        ct = 8191 & ht,
                        lt = ht >>> 13,
                        dt = 0 | s[9],
                        pt = 8191 & dt,
                        mt = dt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var bt = (f + (n = Math.imul(c, U)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(l, U) | 0)) << 13) | 0;
                    f = ((o = Math.imul(l, F)) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(p, U), i = (i = Math.imul(p, F)) + Math.imul(m, U) | 0, o = Math.imul(m, F);
                    var gt = (f + (n = n + Math.imul(c, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, H) | 0) + Math.imul(l, K) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, H) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, U), i = (i = Math.imul(g, F)) + Math.imul(y, U) | 0, o = Math.imul(y, F), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, H) | 0;
                    var yt = (f + (n = n + Math.imul(c, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, G) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, G) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, U), i = (i = Math.imul(w, F)) + Math.imul(M, U) | 0, o = Math.imul(M, F), n = n + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, H) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, G) | 0;
                    var vt = (f + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, X) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(x, U), i = (i = Math.imul(x, F)) + Math.imul(_, U) | 0, o = Math.imul(_, F), n = n + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, H) | 0, n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, G) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, X) | 0;
                    var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(E, U), i = (i = Math.imul(E, F)) + Math.imul(k, U) | 0, o = Math.imul(k, F), n = n + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, H) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                    var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(l, rt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, U), i = (i = Math.imul(O, F)) + Math.imul(P, U) | 0, o = Math.imul(P, F), n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, H) | 0, n = n + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, X) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
                    var St = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, at) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(T, U), i = (i = Math.imul(T, F)) + Math.imul(j, U) | 0, o = Math.imul(j, F), n = n + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(E, W) | 0, i = (i = i + Math.imul(E, G) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, G) | 0, n = n + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, X) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0;
                    var xt = (f + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(l, ut) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, ft) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(B, U), i = (i = Math.imul(B, F)) + Math.imul(L, U) | 0, o = Math.imul(L, F), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, H) | 0, n = n + Math.imul(O, W) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(P, W) | 0, o = o + Math.imul(P, G) | 0, n = n + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, X) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, at) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ft) | 0;
                    var _t = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, lt) | 0) + Math.imul(l, ct) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, lt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul($, U), i = (i = Math.imul($, F)) + Math.imul(z, U) | 0, o = Math.imul(z, F), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, H) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, G) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, X) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ft) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, lt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, lt) | 0;
                    var At = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(l, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul($, K), i = (i = Math.imul($, H)) + Math.imul(z, K) | 0, o = Math.imul(z, H), n = n + Math.imul(B, W) | 0, i = (i = i + Math.imul(B, G) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, X) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, at) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, at) | 0, n = n + Math.imul(w, ut) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ut) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(g, ct) | 0, i = (i = i + Math.imul(g, lt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, lt) | 0;
                    var Et = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul($, W), i = (i = Math.imul($, G)) + Math.imul(z, W) | 0, o = Math.imul(z, G), n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, at) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, at) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, lt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, lt) | 0;
                    var kt = (f + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul($, J), i = (i = Math.imul($, X)) + Math.imul(z, J) | 0, o = Math.imul(z, X), n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(T, rt) | 0, i = (i = i + Math.imul(T, nt) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, at) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(k, ut) | 0, o = o + Math.imul(k, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, lt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, lt) | 0;
                    var Rt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(M, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul($, Q), i = (i = Math.imul($, tt)) + Math.imul(z, Q) | 0, o = Math.imul(z, tt), n = n + Math.imul(B, rt) | 0, i = (i = i + Math.imul(B, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, at) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, at) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ft) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ft) | 0, n = n + Math.imul(E, ct) | 0, i = (i = i + Math.imul(E, lt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, lt) | 0;
                    var Ot = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul($, rt), i = (i = Math.imul($, nt)) + Math.imul(z, rt) | 0, o = Math.imul(z, nt), n = n + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, at) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, at) | 0, n = n + Math.imul(T, ut) | 0, i = (i = i + Math.imul(T, ft) | 0) + Math.imul(j, ut) | 0, o = o + Math.imul(j, ft) | 0, n = n + Math.imul(O, ct) | 0, i = (i = i + Math.imul(O, lt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, lt) | 0;
                    var Pt = (f + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul($, ot), i = (i = Math.imul($, at)) + Math.imul(z, ot) | 0, o = Math.imul(z, at), n = n + Math.imul(B, ut) | 0, i = (i = i + Math.imul(B, ft) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ft) | 0, n = n + Math.imul(T, ct) | 0, i = (i = i + Math.imul(T, lt) | 0) + Math.imul(j, ct) | 0, o = o + Math.imul(j, lt) | 0;
                    var It = (f + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul($, ut), i = (i = Math.imul($, ft)) + Math.imul(z, ut) | 0, o = Math.imul(z, ft), n = n + Math.imul(B, ct) | 0, i = (i = i + Math.imul(B, lt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, lt) | 0;
                    var Tt = (f + (n = n + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(j, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul($, ct), i = (i = Math.imul($, lt)) + Math.imul(z, ct) | 0, o = Math.imul(z, lt);
                    var jt = (f + (n = n + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
                    var Nt = (f + (n = Math.imul($, pt)) | 0) + ((8191 & (i = (i = Math.imul($, mt)) + Math.imul(z, pt) | 0)) << 13) | 0;
                    return f = ((o = Math.imul(z, mt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = bt, u[1] = gt, u[2] = yt, u[3] = vt, u[4] = wt, u[5] = Mt, u[6] = St, u[7] = xt, u[8] = _t, u[9] = At, u[10] = Et, u[11] = kt, u[12] = Rt, u[13] = Ot, u[14] = Pt, u[15] = It, u[16] = Tt, u[17] = jt, u[18] = Nt, 0 !== f && (u[19] = f, r.length++), r
                };

                function m(t, e, r) {
                    return (new b).mulp(t, e, r)
                }

                function b(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= u; f++) {
                                var h = o - f,
                                    c = (0 | t.words[h]) * (0 | e.words[f]),
                                    l = 67108863 & c;
                                s = 67108863 & (l = l + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : m(this, t, e), r
                }, b.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, b.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, b.prototype.permute = function(t, e, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]]
                }, b.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < i; h += s)
                            for (var c = u, l = f, d = 0; d < a; d++) {
                                var p = r[h + d],
                                    m = n[h + d],
                                    b = r[h + d + a],
                                    g = n[h + d + a],
                                    y = c * b - l * g;
                                g = c * g + l * b, b = y, r[h + d] = p + b, n[h + d] = m + g, r[h + d + a] = p - b, n[h + d + a] = m - g, d !== s && (y = u * c - f * l, l = u * l + f * c, c = y)
                            }
                }, b.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, b.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, b.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, b.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, b.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, b.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        f = new Array(n),
                        h = new Array(n),
                        c = new Array(n),
                        l = r.words;
                    l.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, f, n), this.transform(a, o, s, u, n, i), this.transform(f, o, h, c, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * h[d] - u[d] * c[d];
                        u[d] = s[d] * c[d] + u[d] * h[d], s[d] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), m(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    n("number" === typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << r;
                            this.words[e] = u | a, a = s >>> 26 - r
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var i;
                    n("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var f = 0; f < a; f++) u.words[f] = this.words[f];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - o | c >>> o, h = c & s
                    }
                    return u && 0 !== h && (u.words[u.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, a = t.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var u = (0 | t.words[i]) * e;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        n = this.clone(),
                        i = t,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, u = n.length - i.length;
                    if ("mod" !== e) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                        for (var f = 0; f < s.length; f++) s.words[f] = 0
                    }
                    var h = n.clone()._ishlnsubmul(i, 1, u);
                    0 === h.negative && (n = h, s && (s.words[u] = 1));
                    for (var c = u - 1; c >= 0; c--) {
                        var l = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                        for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, c); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                        s && (s.words[c] = l)
                    }
                    return s && s.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(t)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 !== (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
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
                    var i, a, s
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function(t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), f = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++f;
                    for (var h = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var l = 0, d = 1; 0 === (e.words[0] & d) && l < 26; ++l, d <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(h), u.isub(c)), s.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: r.iushln(f)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, a = new o(1), s = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var f = 0, h = 1; 0 === (e.words[0] & h) && f < 26; ++f, h <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var c = 0, l = 1; 0 === (r.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a))
                    }
                    return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
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
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
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
                    return new x(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var g = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function y(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function v() {
                    y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function M() {
                    y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function x(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function _(t) {
                    x.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                y.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, y.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, y.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, y.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(v, y), v.prototype.split = function(t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var a = 0 | t.words[i];
                        t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, v.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(w, y), i(M, y), i(S, y), S.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (g[t]) return g[t];
                    var e;
                    if ("k256" === t) e = new v;
                    else if ("p224" === t) e = new w;
                    else if ("p192" === t) e = new M;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new S
                    }
                    return g[t] = e, e
                }, x.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, x.prototype._verify2 = function(t, e) {
                    n(0 === (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, x.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, x.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, x.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, x.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, x.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, x.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, x.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, x.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, x.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, x.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, x.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, x.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        f = this.m.subn(1).iushrn(1),
                        h = this.m.bitLength();
                    for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(u);) h.redIAdd(u);
                    for (var c = this.pow(h, i), l = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                        for (var m = d, b = 0; 0 !== m.cmp(s); b++) m = m.redSqr();
                        n(b < p);
                        var g = this.pow(c, new o(1).iushln(p - b - 1));
                        l = l.redMul(g), c = g.redSqr(), d = d.redMul(c), p = b
                    }
                    return l
                }, x.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, x.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var f = e.words[n], h = u - 1; h >= 0; h--) {
                            var c = f >> h & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === h) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return i
                }, x.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, x.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new _(t)
                }, i(_, x), _.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, _.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, _.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, _.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        46877: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(339);

            function i(t) {
                return "string" === typeof t && (!!/^(0x)?[0-9a-f]{512}$/i.test(t) && !(!/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t)))
            }

            function o(t, e) {
                "object" === typeof e && e.constructor === Uint8Array && (e = n.bytesToHex(e));
                const r = n.keccak256(e).replace("0x", "");
                for (let n = 0; n < 12; n += 4) {
                    const e = (parseInt(r.substr(n, 2), 16) << 8) + parseInt(r.substr(n + 2, 2), 16) & 2047,
                        i = 1 << e % 4;
                    if ((a(t.charCodeAt(t.length - 1 - Math.floor(e / 4))) & i) !== i) return !1
                }
                return !0
            }

            function a(t) {
                if (t >= 48 && t <= 57) return t - 48;
                if (t >= 65 && t <= 70) return t - 55;
                if (t >= 97 && t <= 102) return t - 87;
                throw new Error("invalid bloom")
            }

            function s(t) {
                return "string" === typeof t && (!!/^(0x)?[0-9a-f]{64}$/i.test(t) && !(!/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t)))
            }

            function u(t) {
                return "string" === typeof t && (!!t.match(/^(0x)?[0-9a-fA-F]{40}$/) || !!t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/))
            }
            e.isBloom = i, e.isInBloom = o, e.isUserEthereumAddressInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!u(e)) throw new Error(`Invalid ethereum address given: "${e}"`);
                return o(t, n.padLeft(e, 64))
            }, e.isContractAddressInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!u(e)) throw new Error(`Invalid contract address given: "${e}"`);
                return o(t, e)
            }, e.isTopicInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!s(e)) throw new Error("Invalid topic");
                return o(t, e)
            }, e.isTopic = s, e.isAddress = u
        },
        339: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(91094);

            function i(t) {
                if (null == t) throw new Error("cannot convert null value to array");
                if ("string" === typeof t) {
                    const e = t.match(/^(0x)?[0-9a-fA-F]*$/);
                    if (!e) throw new Error("invalid hexidecimal string");
                    if ("0x" !== e[1]) throw new Error("hex string must have 0x prefix");
                    (t = t.substring(2)).length % 2 && (t = "0" + t);
                    const r = [];
                    for (let n = 0; n < t.length; n += 2) r.push(parseInt(t.substr(n, 2), 16));
                    return o(new Uint8Array(r))
                }
                if (function(t) {
                        if (!t || parseInt(String(t.length)) != t.length || "string" === typeof t) return !1;
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1
                        }
                        return !0
                    }(t)) return o(new Uint8Array(t));
                throw new Error("invalid arrayify value")
            }

            function o(t) {
                return void 0 !== t.slice || (t.slice = () => {
                    const e = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }
            e.keccak256 = function(t) {
                return "0x" + n.keccak_256(i(t))
            }, e.padLeft = (t, e) => {
                const r = /^0x/i.test(t) || "number" === typeof t,
                    n = e - (t = t.toString().replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
                return (r ? "0x" : "") + new Array(n).join("0") + t
            }, e.bytesToHex = function(t) {
                const e = [];
                for (let r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
                return `0x${e.join("").replace(/^0+/,"")}`
            }, e.toByteArray = i
        },
        29847: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            var i = r(21964),
                o = r(16523),
                a = i.BN,
                s = new a("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                u = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e = e || {};
                        var r = [{
                            name: "nonce",
                            length: 32,
                            allowLess: !0,
                            default: new n([])
                        }, {
                            name: "gasPrice",
                            length: 32,
                            allowLess: !0,
                            default: new n([])
                        }, {
                            name: "gasLimit",
                            alias: "gas",
                            length: 32,
                            allowLess: !0,
                            default: new n([])
                        }, {
                            name: "to",
                            allowZero: !0,
                            length: 20,
                            default: new n([])
                        }, {
                            name: "value",
                            length: 32,
                            allowLess: !0,
                            default: new n([])
                        }, {
                            name: "data",
                            alias: "input",
                            allowZero: !0,
                            default: new n([])
                        }, {
                            name: "v",
                            allowZero: !0,
                            default: new n([28])
                        }, {
                            name: "r",
                            length: 32,
                            allowZero: !0,
                            allowLess: !0,
                            default: new n([])
                        }, {
                            name: "s",
                            length: 32,
                            allowZero: !0,
                            allowLess: !0,
                            default: new n([])
                        }];
                        i.defineProperties(this, r, e), Object.defineProperty(this, "from", {
                            enumerable: !0,
                            configurable: !0,
                            get: this.getSenderAddress.bind(this)
                        });
                        var o = i.bufferToInt(this.v),
                            a = Math.floor((o - 35) / 2);
                        a < 0 && (a = 0), this._chainId = a || e.chainId || 0, this._homestead = !0
                    }
                    return t.prototype.toCreationAddress = function() {
                        return "" === this.to.toString("hex")
                    }, t.prototype.hash = function(t) {
                        void 0 === t && (t = !0);
                        var e = void 0;
                        if (t) e = this.raw;
                        else if (this._chainId > 0) {
                            var r = this.raw.slice();
                            this.v = this._chainId, this.r = 0, this.s = 0, e = this.raw, this.raw = r
                        } else e = this.raw.slice(0, 6);
                        return i.rlphash(e)
                    }, t.prototype.getChainId = function() {
                        return this._chainId
                    }, t.prototype.getSenderAddress = function() {
                        if (this._from) return this._from;
                        var t = this.getSenderPublicKey();
                        return this._from = i.publicToAddress(t), this._from
                    }, t.prototype.getSenderPublicKey = function() {
                        if ((!this._senderPubKey || !this._senderPubKey.length) && !this.verifySignature()) throw new Error("Invalid Signature");
                        return this._senderPubKey
                    }, t.prototype.verifySignature = function() {
                        var t = this.hash(!1);
                        if (this._homestead && 1 === new a(this.s).cmp(s)) return !1;
                        try {
                            var e = i.bufferToInt(this.v);
                            this._chainId > 0 && (e -= 2 * this._chainId + 8), this._senderPubKey = i.ecrecover(t, e, this.r, this.s)
                        } catch (r) {
                            return !1
                        }
                        return !!this._senderPubKey
                    }, t.prototype.sign = function(t) {
                        var e = this.hash(!1),
                            r = i.ecsign(e, t);
                        this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r)
                    }, t.prototype.getDataFee = function() {
                        for (var t = this.raw[5], e = new a(0), r = 0; r < t.length; r++) 0 === t[r] ? e.iaddn(o.txDataZeroGas.v) : e.iaddn(o.txDataNonZeroGas.v);
                        return e
                    }, t.prototype.getBaseFee = function() {
                        var t = this.getDataFee().iaddn(o.txGas.v);
                        return this._homestead && this.toCreationAddress() && t.iaddn(o.txCreation.v), t
                    }, t.prototype.getUpfrontCost = function() {
                        return new a(this.gasLimit).imul(new a(this.gasPrice)).iadd(new a(this.value))
                    }, t.prototype.validate = function(t) {
                        var e = [];
                        return this.verifySignature() || e.push("Invalid Signature"), this.getBaseFee().cmp(new a(this.gasLimit)) > 0 && e.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === t || !1 === t ? 0 === e.length : e.join(" ")
                    }, t
                }();
            t.exports = u
        },
        21964: function(t, e, r) {
            "use strict";
            var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = r(72543),
                o = i.keccak224,
                a = i.keccak384,
                s = i.keccak256,
                u = i.keccak512,
                f = r(24565),
                h = r(27596),
                c = r(51675),
                l = r(80361),
                d = r(23482),
                p = r(89509).Buffer;
            Object.assign(e, r(80884)), e.MAX_INTEGER = new l("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), e.TWO_POW256 = new l("10000000000000000000000000000000000000000000000000000000000000000", 16), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.SHA3_NULL_S = e.KECCAK256_NULL_S, e.KECCAK256_NULL = p.from(e.KECCAK256_NULL_S, "hex"), e.SHA3_NULL = e.KECCAK256_NULL, e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S, e.KECCAK256_RLP_ARRAY = p.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY, e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.SHA3_RLP_S = e.KECCAK256_RLP_S, e.KECCAK256_RLP = p.from(e.KECCAK256_RLP_S, "hex"), e.SHA3_RLP = e.KECCAK256_RLP, e.BN = l, e.rlp = c, e.secp256k1 = f, e.zeros = function(t) {
                return p.allocUnsafe(t).fill(0)
            }, e.zeroAddress = function() {
                var t = e.zeros(20);
                return e.bufferToHex(t)
            }, e.setLengthLeft = e.setLength = function(t, r, n) {
                var i = e.zeros(r);
                return t = e.toBuffer(t), n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r)
            }, e.setLengthRight = function(t, r) {
                return e.setLength(t, r, !0)
            }, e.unpad = e.stripZeros = function(t) {
                for (var r = (t = e.stripHexPrefix(t))[0]; t.length > 0 && "0" === r.toString();) r = (t = t.slice(1))[0];
                return t
            }, e.toBuffer = function(t) {
                if (!p.isBuffer(t))
                    if (Array.isArray(t)) t = p.from(t);
                    else if ("string" === typeof t) t = e.isHexString(t) ? p.from(e.padToEven(e.stripHexPrefix(t)), "hex") : p.from(t);
                else if ("number" === typeof t) t = e.intToBuffer(t);
                else if (null === t || void 0 === t) t = p.allocUnsafe(0);
                else if (l.isBN(t)) t = t.toArrayLike(p);
                else {
                    if (!t.toArray) throw new Error("invalid type");
                    t = p.from(t.toArray())
                }
                return t
            }, e.bufferToInt = function(t) {
                return new l(e.toBuffer(t)).toNumber()
            }, e.bufferToHex = function(t) {
                return "0x" + (t = e.toBuffer(t)).toString("hex")
            }, e.fromSigned = function(t) {
                return new l(t).fromTwos(256)
            }, e.toUnsigned = function(t) {
                return p.from(t.toTwos(256).toArray())
            }, e.keccak = function(t, r) {
                switch (t = e.toBuffer(t), r || (r = 256), r) {
                    case 224:
                        return o(t);
                    case 256:
                        return s(t);
                    case 384:
                        return a(t);
                    case 512:
                        return u(t);
                    default:
                        throw new Error("Invald algorithm: keccak" + r)
                }
            }, e.keccak256 = function(t) {
                return e.keccak(t)
            }, e.sha3 = e.keccak, e.sha256 = function(t) {
                return t = e.toBuffer(t), d("sha256").update(t).digest()
            }, e.ripemd160 = function(t, r) {
                t = e.toBuffer(t);
                var n = d("rmd160").update(t).digest();
                return !0 === r ? e.setLength(n, 32) : n
            }, e.rlphash = function(t) {
                return e.keccak(c.encode(t))
            }, e.isValidPrivate = function(t) {
                return f.privateKeyVerify(t)
            }, e.isValidPublic = function(t, e) {
                return 64 === t.length ? f.publicKeyVerify(p.concat([p.from([4]), t])) : !!e && f.publicKeyVerify(t)
            }, e.pubToAddress = e.publicToAddress = function(t, r) {
                return t = e.toBuffer(t), r && 64 !== t.length && (t = f.publicKeyConvert(t, !1).slice(1)), h(64 === t.length), e.keccak(t).slice(-20)
            };
            var m = e.privateToPublic = function(t) {
                return t = e.toBuffer(t), f.publicKeyCreate(t, !1).slice(1)
            };
            e.importPublic = function(t) {
                return 64 !== (t = e.toBuffer(t)).length && (t = f.publicKeyConvert(t, !1).slice(1)), t
            }, e.ecsign = function(t, e) {
                var r = f.sign(t, e),
                    n = {};
                return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n
            }, e.hashPersonalMessage = function(t) {
                var r = e.toBuffer("\x19Ethereum Signed Message:\n" + t.length.toString());
                return e.keccak(p.concat([r, t]))
            }, e.ecrecover = function(t, r, n, i) {
                var o = p.concat([e.setLength(n, 32), e.setLength(i, 32)], 64),
                    a = r - 27;
                if (0 !== a && 1 !== a) throw new Error("Invalid signature v value");
                var s = f.recover(t, o, a);
                return f.publicKeyConvert(s, !1).slice(1)
            }, e.toRpcSig = function(t, r, n) {
                if (27 !== t && 28 !== t) throw new Error("Invalid recovery id");
                return e.bufferToHex(p.concat([e.setLengthLeft(r, 32), e.setLengthLeft(n, 32), e.toBuffer(t - 27)]))
            }, e.fromRpcSig = function(t) {
                if (65 !== (t = e.toBuffer(t)).length) throw new Error("Invalid signature length");
                var r = t[64];
                return r < 27 && (r += 27), {
                    v: r,
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                }
            }, e.privateToAddress = function(t) {
                return e.publicToAddress(m(t))
            }, e.isValidAddress = function(t) {
                return /^0x[0-9a-fA-F]{40}$/.test(t)
            }, e.isZeroAddress = function(t) {
                return e.zeroAddress() === e.addHexPrefix(t)
            }, e.toChecksumAddress = function(t) {
                t = e.stripHexPrefix(t).toLowerCase();
                for (var r = e.keccak(t).toString("hex"), n = "0x", i = 0; i < t.length; i++) parseInt(r[i], 16) >= 8 ? n += t[i].toUpperCase() : n += t[i];
                return n
            }, e.isValidChecksumAddress = function(t) {
                return e.isValidAddress(t) && e.toChecksumAddress(t) === t
            }, e.generateAddress = function(t, r) {
                return t = e.toBuffer(t), r = (r = new l(r)).isZero() ? null : p.from(r.toArray()), e.rlphash([t, r]).slice(-20)
            }, e.isPrecompiled = function(t) {
                var r = e.unpad(t);
                return 1 === r.length && r[0] >= 1 && r[0] <= 8
            }, e.addHexPrefix = function(t) {
                return "string" !== typeof t || e.isHexPrefixed(t) ? t : "0x" + t
            }, e.isValidSignature = function(t, e, r, n) {
                var i = new l("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    o = new l("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                return 32 === e.length && 32 === r.length && ((27 === t || 28 === t) && (e = new l(e), r = new l(r), !(e.isZero() || e.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new l(r).cmp(i))))
            }, e.baToJSON = function(t) {
                if (p.isBuffer(t)) return "0x" + t.toString("hex");
                if (t instanceof Array) {
                    for (var r = [], n = 0; n < t.length; n++) r.push(e.baToJSON(t[n]));
                    return r
                }
            }, e.defineProperties = function(t, r, i) {
                if (t.raw = [], t._fields = [], t.toJSON = function(r) {
                        if (r) {
                            var n = {};
                            return t._fields.forEach((function(e) {
                                n[e] = "0x" + t[e].toString("hex")
                            })), n
                        }
                        return e.baToJSON(this.raw)
                    }, t.serialize = function() {
                        return c.encode(t.raw)
                    }, r.forEach((function(r, n) {
                        function i() {
                            return t.raw[n]
                        }

                        function o(i) {
                            "00" !== (i = e.toBuffer(i)).toString("hex") || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = e.stripZeros(i), h(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || h(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), t.raw[n] = i
                        }
                        t._fields.push(r.name), Object.defineProperty(t, r.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: i,
                            set: o
                        }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: o,
                            get: i
                        })
                    })), i)
                    if ("string" === typeof i && (i = p.from(e.stripHexPrefix(i), "hex")), p.isBuffer(i) && (i = c.decode(i)), Array.isArray(i)) {
                        if (i.length > t._fields.length) throw new Error("wrong number of fields in data");
                        i.forEach((function(r, n) {
                            t[t._fields[n]] = e.toBuffer(r)
                        }))
                    } else {
                        if ("object" !== ("undefined" === typeof i ? "undefined" : n(i))) throw new Error("invalid data");
                        var o = Object.keys(i);
                        r.forEach((function(e) {
                            -1 !== o.indexOf(e.name) && (t[e.name] = i[e.name]), -1 !== o.indexOf(e.alias) && (t[e.alias] = i[e.alias])
                        }))
                    }
            }
        },
        24565: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = r(43091),
                o = r(67587),
                a = r(85484),
                s = function(t) {
                    return 32 === t.length && i.privateKeyVerify(Uint8Array.from(t))
                };
            t.exports = {
                privateKeyVerify: s,
                privateKeyExport: function(t, e) {
                    if (32 !== t.length) throw new RangeError("private key length is invalid");
                    var r = o.privateKeyExport(t, e);
                    return a.privateKeyExport(t, r, e)
                },
                privateKeyImport: function(t) {
                    if (null !== (t = a.privateKeyImport(t)) && 32 === t.length && s(t)) return t;
                    throw new Error("couldn't import from DER format")
                },
                privateKeyNegate: function(t) {
                    return n.from(i.privateKeyNegate(Uint8Array.from(t)))
                },
                privateKeyModInverse: function(t) {
                    if (32 !== t.length) throw new Error("private key length is invalid");
                    return n.from(o.privateKeyModInverse(Uint8Array.from(t)))
                },
                privateKeyTweakAdd: function(t, e) {
                    return n.from(i.privateKeyTweakAdd(Uint8Array.from(t), e))
                },
                privateKeyTweakMul: function(t, e) {
                    return n.from(i.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e)))
                },
                publicKeyCreate: function(t, e) {
                    return n.from(i.publicKeyCreate(Uint8Array.from(t), e))
                },
                publicKeyConvert: function(t, e) {
                    return n.from(i.publicKeyConvert(Uint8Array.from(t), e))
                },
                publicKeyVerify: function(t) {
                    return (33 === t.length || 65 === t.length) && i.publicKeyVerify(Uint8Array.from(t))
                },
                publicKeyTweakAdd: function(t, e, r) {
                    return n.from(i.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(e), r))
                },
                publicKeyTweakMul: function(t, e, r) {
                    return n.from(i.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e), r))
                },
                publicKeyCombine: function(t, e) {
                    var r = [];
                    return t.forEach((function(t) {
                        r.push(Uint8Array.from(t))
                    })), n.from(i.publicKeyCombine(r, e))
                },
                signatureNormalize: function(t) {
                    return n.from(i.signatureNormalize(Uint8Array.from(t)))
                },
                signatureExport: function(t) {
                    return n.from(i.signatureExport(Uint8Array.from(t)))
                },
                signatureImport: function(t) {
                    return n.from(i.signatureImport(Uint8Array.from(t)))
                },
                signatureImportLax: function(t) {
                    if (0 === t.length) throw new RangeError("signature length is invalid");
                    var e = a.signatureImportLax(t);
                    if (null === e) throw new Error("couldn't parse DER signature");
                    return o.signatureImport(e)
                },
                sign: function(t, e, r) {
                    if (null === r) throw new TypeError("options should be an Object");
                    var o = void 0;
                    if (r) {
                        if (o = {}, null === r.data) throw new TypeError("options.data should be a Buffer");
                        if (r.data) {
                            if (32 !== r.data.length) throw new RangeError("options.data length is invalid");
                            o.data = new Uint8Array(r.data)
                        }
                        if (null === r.noncefn) throw new TypeError("options.noncefn should be a Function");
                        r.noncefn && (o.noncefn = function(t, e, i, o, a) {
                            var s = null != i ? n.from(i) : null,
                                u = null != o ? n.from(o) : null,
                                f = n.from("");
                            return r.noncefn && (f = r.noncefn(n.from(t), n.from(e), s, u, a)), Uint8Array.from(f)
                        })
                    }
                    var a = i.ecdsaSign(Uint8Array.from(t), Uint8Array.from(e), o);
                    return {
                        signature: n.from(a.signature),
                        recovery: a.recid
                    }
                },
                verify: function(t, e, r) {
                    return i.ecdsaVerify(Uint8Array.from(e), Uint8Array.from(t), r)
                },
                recover: function(t, e, r, o) {
                    return n.from(i.ecdsaRecover(Uint8Array.from(e), r, Uint8Array.from(t), o))
                },
                ecdh: function(t, e) {
                    return n.from(i.ecdh(Uint8Array.from(t), Uint8Array.from(e), {}))
                },
                ecdhUnsafe: function(t, e, r) {
                    if (33 !== t.length && 65 !== t.length) throw new RangeError("public key length is invalid");
                    if (32 !== e.length) throw new RangeError("private key length is invalid");
                    return n.from(o.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(e), r))
                }
            }
        },
        85484: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = n.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                o = n.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            e.privateKeyExport = function(t, e, r) {
                var a = n.from(r ? i : o);
                return t.copy(a, r ? 8 : 9), e.copy(a, r ? 181 : 214), a
            }, e.privateKeyImport = function(t) {
                var e = t.length,
                    r = 0;
                if (e < r + 1 || 48 !== t[r]) return null;
                if (e < (r += 1) + 1 || !(128 & t[r])) return null;
                var n = 127 & t[r];
                if (n < 1 || n > 2) return null;
                if (e < (r += 1) + n) return null;
                var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
                return e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1] ? null : t.slice(r + 2, r + 2 + t[r + 1])
            }, e.signatureImportLax = function(t) {
                var e = n.alloc(32, 0),
                    r = n.alloc(32, 0),
                    i = t.length,
                    o = 0;
                if (48 !== t[o++]) return null;
                var a = t[o++];
                if (128 & a && (o += a - 128) > i) return null;
                if (2 !== t[o++]) return null;
                var s = t[o++];
                if (128 & s) {
                    if (o + (a = s - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o]
                }
                if (s > i - o) return null;
                var u = o;
                if (o += s, 2 !== t[o++]) return null;
                var f = t[o++];
                if (128 & f) {
                    if (o + (a = f - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (f = 0; a > 0; o += 1, a -= 1) f = (f << 8) + t[o]
                }
                if (f > i - o) return null;
                var h = o;
                for (o += f; s > 0 && 0 === t[u]; s -= 1, u += 1);
                if (s > 32) return null;
                var c = t.slice(u, u + s);
                for (c.copy(e, 32 - c.length); f > 0 && 0 === t[h]; f -= 1, h += 1);
                if (f > 32) return null;
                var l = t.slice(h, h + f);
                return l.copy(r, 32 - l.length), {
                    r: e,
                    s: r
                }
            }
        },
        67587: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = r(80361),
                o = new(0, r(86266).ec)("secp256k1"),
                a = o.curve;
            e.privateKeyExport = function(t, e) {
                var r = new i(t);
                if (r.ucmp(a.n) >= 0) throw new Error("couldn't export to DER format");
                var n = o.g.mul(r);
                return s(n.getX(), n.getY(), e)
            }, e.privateKeyModInverse = function(t) {
                var e = new i(t);
                if (e.ucmp(a.n) >= 0 || e.isZero()) throw new Error("private key range is invalid");
                return e.invm(a.n).toArrayLike(n, "be", 32)
            }, e.signatureImport = function(t) {
                var e = new i(t.r);
                e.ucmp(a.n) >= 0 && (e = new i(0));
                var r = new i(t.s);
                return r.ucmp(a.n) >= 0 && (r = new i(0)), n.concat([e.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)])
            }, e.ecdhUnsafe = function(t, e, r) {
                var n = o.keyFromPublic(t),
                    u = new i(e);
                if (u.ucmp(a.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var f = n.pub.mul(u);
                return s(f.getX(), f.getY(), r)
            };
            var s = function(t, e, r) {
                var i = void 0;
                return r ? ((i = n.alloc(33))[0] = e.isOdd() ? 3 : 2, t.toArrayLike(n, "be", 32).copy(i, 1)) : ((i = n.alloc(65))[0] = 4, t.toArrayLike(n, "be", 32).copy(i, 1), e.toArrayLike(n, "be", 32).copy(i, 33)), i
            }
        },
        80361: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var a;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(27790).Buffer
                } catch (A) {}

                function s(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function u(t, e, r) {
                    var n = s(t, r);
                    return r - 1 >= e && (n |= s(t, r - 1) << 4), n
                }

                function f(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
                        var s = t.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, r) {
                    if ("number" === typeof t) return this._initNumber(t, e, r);
                    if ("object" === typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                }, o.prototype._initNumber = function(t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function(t, e, r) {
                    if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e, r) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0,
                        a = 0;
                    if ("be" === r)
                        for (n = t.length - 1; n >= e; n -= 2) i = u(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    else
                        for (n = (t.length - e) % 2 === 0 ? e + 1 : e; n < t.length; n += 2) i = u(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function(t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, u = 0, h = r; h < s; h += n) u = f(t, h, h + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== a) {
                        var c = 1;
                        for (u = f(t, h, t.length, e), h = 0; h < a; h++) c *= e;
                        this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                    this.strip()
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
                var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function d(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var f = 1; f < n; f++) {
                        for (var h = u >>> 26, c = 67108863 & u, l = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= l; d++) {
                            var p = f - d | 0;
                            h += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a
                        }
                        r.words[f] = 0 | c, u = 0 | h
                    }
                    return 0 !== u ? r.words[f] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? h[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var f = c[t],
                            d = l[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(d).toString(t);
                            r = (p = p.idivn(d)).isZero() ? m + r : h[f - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return n("undefined" !== typeof a), this.toArrayLike(a, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === e,
                        f = new t(o),
                        h = this.clone();
                    if (u) {
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[s] = a;
                        for (; s < o; s++) f[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) f[s] = 0;
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[o - s - 1] = a
                    }
                    return f
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
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
                    return n(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
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
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    for (; 0 !== o && a < r.length; a++) o = (e = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var p = function(t, e, r) {
                    var n, i, o, a = t.words,
                        s = e.words,
                        u = r.words,
                        f = 0,
                        h = 0 | a[0],
                        c = 8191 & h,
                        l = h >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        b = 0 | a[2],
                        g = 8191 & b,
                        y = b >>> 13,
                        v = 0 | a[3],
                        w = 8191 & v,
                        M = v >>> 13,
                        S = 0 | a[4],
                        x = 8191 & S,
                        _ = S >>> 13,
                        A = 0 | a[5],
                        E = 8191 & A,
                        k = A >>> 13,
                        R = 0 | a[6],
                        O = 8191 & R,
                        P = R >>> 13,
                        I = 0 | a[7],
                        T = 8191 & I,
                        j = I >>> 13,
                        N = 0 | a[8],
                        B = 8191 & N,
                        L = N >>> 13,
                        C = 0 | a[9],
                        $ = 8191 & C,
                        z = C >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        D = 0 | s[1],
                        K = 8191 & D,
                        H = D >>> 13,
                        Z = 0 | s[2],
                        W = 8191 & Z,
                        G = Z >>> 13,
                        V = 0 | s[3],
                        J = 8191 & V,
                        X = V >>> 13,
                        Y = 0 | s[4],
                        Q = 8191 & Y,
                        tt = Y >>> 13,
                        et = 0 | s[5],
                        rt = 8191 & et,
                        nt = et >>> 13,
                        it = 0 | s[6],
                        ot = 8191 & it,
                        at = it >>> 13,
                        st = 0 | s[7],
                        ut = 8191 & st,
                        ft = st >>> 13,
                        ht = 0 | s[8],
                        ct = 8191 & ht,
                        lt = ht >>> 13,
                        dt = 0 | s[9],
                        pt = 8191 & dt,
                        mt = dt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var bt = (f + (n = Math.imul(c, U)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(l, U) | 0)) << 13) | 0;
                    f = ((o = Math.imul(l, F)) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(p, U), i = (i = Math.imul(p, F)) + Math.imul(m, U) | 0, o = Math.imul(m, F);
                    var gt = (f + (n = n + Math.imul(c, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, H) | 0) + Math.imul(l, K) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, H) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, U), i = (i = Math.imul(g, F)) + Math.imul(y, U) | 0, o = Math.imul(y, F), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, H) | 0;
                    var yt = (f + (n = n + Math.imul(c, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, G) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, G) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, U), i = (i = Math.imul(w, F)) + Math.imul(M, U) | 0, o = Math.imul(M, F), n = n + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, H) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, G) | 0;
                    var vt = (f + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, X) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(x, U), i = (i = Math.imul(x, F)) + Math.imul(_, U) | 0, o = Math.imul(_, F), n = n + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, H) | 0, n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, G) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, X) | 0;
                    var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(E, U), i = (i = Math.imul(E, F)) + Math.imul(k, U) | 0, o = Math.imul(k, F), n = n + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, H) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                    var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(l, rt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, U), i = (i = Math.imul(O, F)) + Math.imul(P, U) | 0, o = Math.imul(P, F), n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, H) | 0, n = n + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, X) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
                    var St = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, at) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(T, U), i = (i = Math.imul(T, F)) + Math.imul(j, U) | 0, o = Math.imul(j, F), n = n + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(E, W) | 0, i = (i = i + Math.imul(E, G) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, G) | 0, n = n + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, X) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0;
                    var xt = (f + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(l, ut) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, ft) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(B, U), i = (i = Math.imul(B, F)) + Math.imul(L, U) | 0, o = Math.imul(L, F), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, H) | 0, n = n + Math.imul(O, W) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(P, W) | 0, o = o + Math.imul(P, G) | 0, n = n + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, X) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, at) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ft) | 0;
                    var _t = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, lt) | 0) + Math.imul(l, ct) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, lt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul($, U), i = (i = Math.imul($, F)) + Math.imul(z, U) | 0, o = Math.imul(z, F), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, H) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, G) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, X) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ft) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, lt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, lt) | 0;
                    var At = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(l, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul($, K), i = (i = Math.imul($, H)) + Math.imul(z, K) | 0, o = Math.imul(z, H), n = n + Math.imul(B, W) | 0, i = (i = i + Math.imul(B, G) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, X) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, at) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, at) | 0, n = n + Math.imul(w, ut) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ut) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(g, ct) | 0, i = (i = i + Math.imul(g, lt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, lt) | 0;
                    var Et = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul($, W), i = (i = Math.imul($, G)) + Math.imul(z, W) | 0, o = Math.imul(z, G), n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, at) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, at) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, lt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, lt) | 0;
                    var kt = (f + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul($, J), i = (i = Math.imul($, X)) + Math.imul(z, J) | 0, o = Math.imul(z, X), n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(T, rt) | 0, i = (i = i + Math.imul(T, nt) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, at) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(k, ut) | 0, o = o + Math.imul(k, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, lt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, lt) | 0;
                    var Rt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(M, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul($, Q), i = (i = Math.imul($, tt)) + Math.imul(z, Q) | 0, o = Math.imul(z, tt), n = n + Math.imul(B, rt) | 0, i = (i = i + Math.imul(B, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, at) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, at) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ft) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ft) | 0, n = n + Math.imul(E, ct) | 0, i = (i = i + Math.imul(E, lt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, lt) | 0;
                    var Ot = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul($, rt), i = (i = Math.imul($, nt)) + Math.imul(z, rt) | 0, o = Math.imul(z, nt), n = n + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, at) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, at) | 0, n = n + Math.imul(T, ut) | 0, i = (i = i + Math.imul(T, ft) | 0) + Math.imul(j, ut) | 0, o = o + Math.imul(j, ft) | 0, n = n + Math.imul(O, ct) | 0, i = (i = i + Math.imul(O, lt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, lt) | 0;
                    var Pt = (f + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul($, ot), i = (i = Math.imul($, at)) + Math.imul(z, ot) | 0, o = Math.imul(z, at), n = n + Math.imul(B, ut) | 0, i = (i = i + Math.imul(B, ft) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ft) | 0, n = n + Math.imul(T, ct) | 0, i = (i = i + Math.imul(T, lt) | 0) + Math.imul(j, ct) | 0, o = o + Math.imul(j, lt) | 0;
                    var It = (f + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul($, ut), i = (i = Math.imul($, ft)) + Math.imul(z, ut) | 0, o = Math.imul(z, ft), n = n + Math.imul(B, ct) | 0, i = (i = i + Math.imul(B, lt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, lt) | 0;
                    var Tt = (f + (n = n + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(j, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul($, ct), i = (i = Math.imul($, lt)) + Math.imul(z, ct) | 0, o = Math.imul(z, lt);
                    var jt = (f + (n = n + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
                    var Nt = (f + (n = Math.imul($, pt)) | 0) + ((8191 & (i = (i = Math.imul($, mt)) + Math.imul(z, pt) | 0)) << 13) | 0;
                    return f = ((o = Math.imul(z, mt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = bt, u[1] = gt, u[2] = yt, u[3] = vt, u[4] = wt, u[5] = Mt, u[6] = St, u[7] = xt, u[8] = _t, u[9] = At, u[10] = Et, u[11] = kt, u[12] = Rt, u[13] = Ot, u[14] = Pt, u[15] = It, u[16] = Tt, u[17] = jt, u[18] = Nt, 0 !== f && (u[19] = f, r.length++), r
                };

                function m(t, e, r) {
                    return (new b).mulp(t, e, r)
                }

                function b(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= u; f++) {
                                var h = o - f,
                                    c = (0 | t.words[h]) * (0 | e.words[f]),
                                    l = 67108863 & c;
                                s = 67108863 & (l = l + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : m(this, t, e), r
                }, b.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, b.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, b.prototype.permute = function(t, e, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]]
                }, b.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < i; h += s)
                            for (var c = u, l = f, d = 0; d < a; d++) {
                                var p = r[h + d],
                                    m = n[h + d],
                                    b = r[h + d + a],
                                    g = n[h + d + a],
                                    y = c * b - l * g;
                                g = c * g + l * b, b = y, r[h + d] = p + b, n[h + d] = m + g, r[h + d + a] = p - b, n[h + d + a] = m - g, d !== s && (y = u * c - f * l, l = u * l + f * c, c = y)
                            }
                }, b.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, b.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, b.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, b.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, b.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, b.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        f = new Array(n),
                        h = new Array(n),
                        c = new Array(n),
                        l = r.words;
                    l.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, f, n), this.transform(a, o, s, u, n, i), this.transform(f, o, h, c, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * h[d] - u[d] * c[d];
                        u[d] = s[d] * c[d] + u[d] * h[d], s[d] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), m(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    n("number" === typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << r;
                            this.words[e] = u | a, a = s >>> 26 - r
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var i;
                    n("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var f = 0; f < a; f++) u.words[f] = this.words[f];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - o | c >>> o, h = c & s
                    }
                    return u && 0 !== h && (u.words[u.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, a = t.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var u = (0 | t.words[i]) * e;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        n = this.clone(),
                        i = t,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, u = n.length - i.length;
                    if ("mod" !== e) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                        for (var f = 0; f < s.length; f++) s.words[f] = 0
                    }
                    var h = n.clone()._ishlnsubmul(i, 1, u);
                    0 === h.negative && (n = h, s && (s.words[u] = 1));
                    for (var c = u - 1; c >= 0; c--) {
                        var l = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                        for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, c); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                        s && (s.words[c] = l)
                    }
                    return s && s.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(t)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 !== (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
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
                    var i, a, s
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function(t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), f = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++f;
                    for (var h = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var l = 0, d = 1; 0 === (e.words[0] & d) && l < 26; ++l, d <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(h), u.isub(c)), s.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: r.iushln(f)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, a = new o(1), s = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var f = 0, h = 1; 0 === (e.words[0] & h) && f < 26; ++f, h <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var c = 0, l = 1; 0 === (r.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a))
                    }
                    return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
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
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
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
                    return new x(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var g = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function y(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function v() {
                    y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function M() {
                    y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function x(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function _(t) {
                    x.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                y.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, y.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, y.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, y.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(v, y), v.prototype.split = function(t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var a = 0 | t.words[i];
                        t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, v.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(w, y), i(M, y), i(S, y), S.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (g[t]) return g[t];
                    var e;
                    if ("k256" === t) e = new v;
                    else if ("p224" === t) e = new w;
                    else if ("p192" === t) e = new M;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new S
                    }
                    return g[t] = e, e
                }, x.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, x.prototype._verify2 = function(t, e) {
                    n(0 === (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, x.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, x.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, x.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, x.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, x.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, x.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, x.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, x.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, x.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, x.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, x.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, x.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        f = this.m.subn(1).iushrn(1),
                        h = this.m.bitLength();
                    for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(u);) h.redIAdd(u);
                    for (var c = this.pow(h, i), l = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                        for (var m = d, b = 0; 0 !== m.cmp(s); b++) m = m.redSqr();
                        n(b < p);
                        var g = this.pow(c, new o(1).iushln(p - b - 1));
                        l = l.redMul(g), c = g.redSqr(), d = d.redMul(c), p = b
                    }
                    return l
                }, x.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, x.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var f = e.words[n], h = u - 1; h >= 0; h--) {
                            var c = f >> h & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === h) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return i
                }, x.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, x.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new _(t)
                }, i(_, x), _.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, _.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, _.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, _.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        15919: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createHashFunction = function(t) {
                return function(e) {
                    var r = t();
                    return r.update(e), n.from(r.digest())
                }
            }
        },
        72543: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(15919),
                i = r(95811);
            e.keccak224 = n.createHashFunction((function() {
                return i("keccak224")
            })), e.keccak256 = n.createHashFunction((function() {
                return i("keccak256")
            })), e.keccak384 = n.createHashFunction((function() {
                return i("keccak384")
            })), e.keccak512 = n.createHashFunction((function() {
                return i("keccak512")
            }))
        },
        30459: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(61798);
            e.getRandomBytes = function(t) {
                return new Promise((function(e, r) {
                    n(t, (function(t, n) {
                        t ? r(t) : e(n)
                    }))
                }))
            }, e.getRandomBytesSync = function(t) {
                return n(t)
            }
        },
        43091: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function a(t) {
                            try {
                                u(n.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(t) {
                            try {
                                u(n.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(a, s)
                        }
                        u((n = n.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var r, n, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (s) {
                                    o = [6, s], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(17221),
                a = r(30459);
            e.createPrivateKey = function() {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.getRandomBytes(32)];
                                case 1:
                                    return t = e.sent(), o.privateKeyVerify(t) ? [2, t] : [3, 0];
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, e.createPrivateKeySync = function() {
                    for (;;) {
                        var t = a.getRandomBytesSync(32);
                        if (o.privateKeyVerify(t)) return t
                    }
                },
                function(t) {
                    for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
                }(r(17221))
        },
        94278: function(t, e, r) {
            "use strict";
            var n = r(43614),
                i = r(83206),
                o = new n(0),
                a = new n(-1),
                s = {
                    noether: "0",
                    wei: "1",
                    kwei: "1000",
                    Kwei: "1000",
                    babbage: "1000",
                    femtoether: "1000",
                    mwei: "1000000",
                    Mwei: "1000000",
                    lovelace: "1000000",
                    picoether: "1000000",
                    gwei: "1000000000",
                    Gwei: "1000000000",
                    shannon: "1000000000",
                    nanoether: "1000000000",
                    nano: "1000000000",
                    szabo: "1000000000000",
                    microether: "1000000000000",
                    micro: "1000000000000",
                    finney: "1000000000000000",
                    milliether: "1000000000000000",
                    milli: "1000000000000000",
                    ether: "1000000000000000000",
                    kether: "1000000000000000000000",
                    grand: "1000000000000000000000",
                    mether: "1000000000000000000000000",
                    gether: "1000000000000000000000000000",
                    tether: "1000000000000000000000000000000"
                };

            function u(t) {
                var e = t ? t.toLowerCase() : "ether",
                    r = s[e];
                if ("string" !== typeof r) throw new Error("[ethjs-unit] the unit provided " + t + " doesn't exists, please use the one of the following units " + JSON.stringify(s, null, 2));
                return new n(r, 10)
            }

            function f(t) {
                if ("string" === typeof t) {
                    if (!t.match(/^-?[0-9.]+$/)) throw new Error("while converting number to string, invalid number value '" + t + "', should be a number matching (^-?[0-9.]+).");
                    return t
                }
                if ("number" === typeof t) return String(t);
                if ("object" === typeof t && t.toString && (t.toTwos || t.dividedToIntegerBy)) return t.toPrecision ? String(t.toPrecision()) : t.toString(10);
                throw new Error("while converting number to string, invalid number value '" + t + "' type " + typeof t + ".")
            }
            t.exports = {
                unitMap: s,
                numberToString: f,
                getValueOfUnit: u,
                fromWei: function(t, e, r) {
                    var n = i(t),
                        f = n.lt(o),
                        h = u(e),
                        c = s[e].length - 1 || 1,
                        l = r || {};
                    f && (n = n.mul(a));
                    for (var d = n.mod(h).toString(10); d.length < c;) d = "0" + d;
                    l.pad || (d = d.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
                    var p = n.div(h).toString(10);
                    l.commify && (p = p.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    var m = p + ("0" == d ? "" : "." + d);
                    return f && (m = "-" + m), m
                },
                toWei: function(t, e) {
                    var r = f(t),
                        i = u(e),
                        o = s[e].length - 1 || 1,
                        h = "-" === r.substring(0, 1);
                    if (h && (r = r.substring(1)), "." === r) throw new Error("[ethjs-unit] while converting number " + t + " to wei, invalid value");
                    var c = r.split(".");
                    if (c.length > 2) throw new Error("[ethjs-unit] while converting number " + t + " to wei,  too many decimal points");
                    var l = c[0],
                        d = c[1];
                    if (l || (l = "0"), d || (d = "0"), d.length > o) throw new Error("[ethjs-unit] while converting number " + t + " to wei, too many decimal places");
                    for (; d.length < o;) d += "0";
                    l = new n(l), d = new n(d);
                    var p = l.mul(i).add(d);
                    return h && (p = p.mul(a)), new n(p.toString(10), 10)
                }
            }
        },
        43614: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var a;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = r(48764).Buffer
                } catch (_) {}

                function s(t, e, r) {
                    for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
                        var a = t.charCodeAt(o) - 48;
                        n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                    }
                    return n
                }

                function u(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
                        var s = t.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, r) {
                    if ("number" === typeof t) return this._initNumber(t, e, r);
                    if ("object" === typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initNumber = function(t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function(t, e, r) {
                    if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var n, i, o = 0;
                    for (r = t.length - 6, n = 0; r >= e; r -= 6) i = s(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    r + 6 !== e && (i = s(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                }, o.prototype._parseBase = function(t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, h = r; h < s; h += n) f = u(t, h, h + n, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                    if (0 !== a) {
                        var c = 1;
                        for (f = u(t, h, t.length, e), h = 0; h < a; h++) c *= e;
                        this.imuln(c), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
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
                var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var f = 1; f < n; f++) {
                        for (var h = u >>> 26, c = 67108863 & u, l = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= l; d++) {
                            var p = f - d | 0;
                            h += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a
                        }
                        r.words[f] = 0 | c, u = 0 | h
                    }
                    return 0 !== u ? r.words[f] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? f[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var l = h[t],
                            d = c[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(d).toString(t);
                            r = (p = p.idivn(d)).isZero() ? m + r : f[l - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return n("undefined" !== typeof a), this.toArrayLike(a, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === e,
                        f = new t(o),
                        h = this.clone();
                    if (u) {
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[s] = a;
                        for (; s < o; s++) f[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) f[s] = 0;
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[o - s - 1] = a
                    }
                    return f
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
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
                    return n(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
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
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    for (; 0 !== o && a < r.length; a++) o = (e = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var d = function(t, e, r) {
                    var n, i, o, a = t.words,
                        s = e.words,
                        u = r.words,
                        f = 0,
                        h = 0 | a[0],
                        c = 8191 & h,
                        l = h >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        b = 0 | a[2],
                        g = 8191 & b,
                        y = b >>> 13,
                        v = 0 | a[3],
                        w = 8191 & v,
                        M = v >>> 13,
                        S = 0 | a[4],
                        x = 8191 & S,
                        _ = S >>> 13,
                        A = 0 | a[5],
                        E = 8191 & A,
                        k = A >>> 13,
                        R = 0 | a[6],
                        O = 8191 & R,
                        P = R >>> 13,
                        I = 0 | a[7],
                        T = 8191 & I,
                        j = I >>> 13,
                        N = 0 | a[8],
                        B = 8191 & N,
                        L = N >>> 13,
                        C = 0 | a[9],
                        $ = 8191 & C,
                        z = C >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        D = 0 | s[1],
                        K = 8191 & D,
                        H = D >>> 13,
                        Z = 0 | s[2],
                        W = 8191 & Z,
                        G = Z >>> 13,
                        V = 0 | s[3],
                        J = 8191 & V,
                        X = V >>> 13,
                        Y = 0 | s[4],
                        Q = 8191 & Y,
                        tt = Y >>> 13,
                        et = 0 | s[5],
                        rt = 8191 & et,
                        nt = et >>> 13,
                        it = 0 | s[6],
                        ot = 8191 & it,
                        at = it >>> 13,
                        st = 0 | s[7],
                        ut = 8191 & st,
                        ft = st >>> 13,
                        ht = 0 | s[8],
                        ct = 8191 & ht,
                        lt = ht >>> 13,
                        dt = 0 | s[9],
                        pt = 8191 & dt,
                        mt = dt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var bt = (f + (n = Math.imul(c, U)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(l, U) | 0)) << 13) | 0;
                    f = ((o = Math.imul(l, F)) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(p, U), i = (i = Math.imul(p, F)) + Math.imul(m, U) | 0, o = Math.imul(m, F);
                    var gt = (f + (n = n + Math.imul(c, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, H) | 0) + Math.imul(l, K) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, H) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, U), i = (i = Math.imul(g, F)) + Math.imul(y, U) | 0, o = Math.imul(y, F), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, H) | 0;
                    var yt = (f + (n = n + Math.imul(c, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, G) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, G) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, U), i = (i = Math.imul(w, F)) + Math.imul(M, U) | 0, o = Math.imul(M, F), n = n + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, H) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, G) | 0;
                    var vt = (f + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, X) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(x, U), i = (i = Math.imul(x, F)) + Math.imul(_, U) | 0, o = Math.imul(_, F), n = n + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, H) | 0, n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, G) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, X) | 0;
                    var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(E, U), i = (i = Math.imul(E, F)) + Math.imul(k, U) | 0, o = Math.imul(k, F), n = n + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, H) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                    var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(l, rt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, U), i = (i = Math.imul(O, F)) + Math.imul(P, U) | 0, o = Math.imul(P, F), n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, H) | 0, n = n + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, X) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
                    var St = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, at) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(T, U), i = (i = Math.imul(T, F)) + Math.imul(j, U) | 0, o = Math.imul(j, F), n = n + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(E, W) | 0, i = (i = i + Math.imul(E, G) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, G) | 0, n = n + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, X) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0;
                    var xt = (f + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(l, ut) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, ft) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(B, U), i = (i = Math.imul(B, F)) + Math.imul(L, U) | 0, o = Math.imul(L, F), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, H) | 0, n = n + Math.imul(O, W) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(P, W) | 0, o = o + Math.imul(P, G) | 0, n = n + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, X) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, at) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ft) | 0;
                    var _t = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, lt) | 0) + Math.imul(l, ct) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, lt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul($, U), i = (i = Math.imul($, F)) + Math.imul(z, U) | 0, o = Math.imul(z, F), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, H) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, G) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, X) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ft) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, lt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, lt) | 0;
                    var At = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(l, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul($, K), i = (i = Math.imul($, H)) + Math.imul(z, K) | 0, o = Math.imul(z, H), n = n + Math.imul(B, W) | 0, i = (i = i + Math.imul(B, G) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, X) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, at) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, at) | 0, n = n + Math.imul(w, ut) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ut) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(g, ct) | 0, i = (i = i + Math.imul(g, lt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, lt) | 0;
                    var Et = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul($, W), i = (i = Math.imul($, G)) + Math.imul(z, W) | 0, o = Math.imul(z, G), n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, at) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, at) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, lt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, lt) | 0;
                    var kt = (f + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul($, J), i = (i = Math.imul($, X)) + Math.imul(z, J) | 0, o = Math.imul(z, X), n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(T, rt) | 0, i = (i = i + Math.imul(T, nt) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, at) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(k, ut) | 0, o = o + Math.imul(k, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, lt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, lt) | 0;
                    var Rt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(M, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul($, Q), i = (i = Math.imul($, tt)) + Math.imul(z, Q) | 0, o = Math.imul(z, tt), n = n + Math.imul(B, rt) | 0, i = (i = i + Math.imul(B, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, at) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, at) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ft) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ft) | 0, n = n + Math.imul(E, ct) | 0, i = (i = i + Math.imul(E, lt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, lt) | 0;
                    var Ot = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul($, rt), i = (i = Math.imul($, nt)) + Math.imul(z, rt) | 0, o = Math.imul(z, nt), n = n + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, at) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, at) | 0, n = n + Math.imul(T, ut) | 0, i = (i = i + Math.imul(T, ft) | 0) + Math.imul(j, ut) | 0, o = o + Math.imul(j, ft) | 0, n = n + Math.imul(O, ct) | 0, i = (i = i + Math.imul(O, lt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, lt) | 0;
                    var Pt = (f + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul($, ot), i = (i = Math.imul($, at)) + Math.imul(z, ot) | 0, o = Math.imul(z, at), n = n + Math.imul(B, ut) | 0, i = (i = i + Math.imul(B, ft) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ft) | 0, n = n + Math.imul(T, ct) | 0, i = (i = i + Math.imul(T, lt) | 0) + Math.imul(j, ct) | 0, o = o + Math.imul(j, lt) | 0;
                    var It = (f + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul($, ut), i = (i = Math.imul($, ft)) + Math.imul(z, ut) | 0, o = Math.imul(z, ft), n = n + Math.imul(B, ct) | 0, i = (i = i + Math.imul(B, lt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, lt) | 0;
                    var Tt = (f + (n = n + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(j, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul($, ct), i = (i = Math.imul($, lt)) + Math.imul(z, ct) | 0, o = Math.imul(z, lt);
                    var jt = (f + (n = n + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
                    var Nt = (f + (n = Math.imul($, pt)) | 0) + ((8191 & (i = (i = Math.imul($, mt)) + Math.imul(z, pt) | 0)) << 13) | 0;
                    return f = ((o = Math.imul(z, mt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = bt, u[1] = gt, u[2] = yt, u[3] = vt, u[4] = wt, u[5] = Mt, u[6] = St, u[7] = xt, u[8] = _t, u[9] = At, u[10] = Et, u[11] = kt, u[12] = Rt, u[13] = Ot, u[14] = Pt, u[15] = It, u[16] = Tt, u[17] = jt, u[18] = Nt, 0 !== f && (u[19] = f, r.length++), r
                };

                function p(t, e, r) {
                    return (new m).mulp(t, e, r)
                }

                function m(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (d = l), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return r = 10 === this.length && 10 === t.length ? d(this, t, e) : n < 63 ? l(this, t, e) : n < 1024 ? function(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= u; f++) {
                                var h = o - f,
                                    c = (0 | t.words[h]) * (0 | e.words[f]),
                                    l = 67108863 & c;
                                s = 67108863 & (l = l + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : p(this, t, e), r
                }, m.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, m.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, m.prototype.permute = function(t, e, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]]
                }, m.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < i; h += s)
                            for (var c = u, l = f, d = 0; d < a; d++) {
                                var p = r[h + d],
                                    m = n[h + d],
                                    b = r[h + d + a],
                                    g = n[h + d + a],
                                    y = c * b - l * g;
                                g = c * g + l * b, b = y, r[h + d] = p + b, n[h + d] = m + g, r[h + d + a] = p - b, n[h + d + a] = m - g, d !== s && (y = u * c - f * l, l = u * l + f * c, c = y)
                            }
                }, m.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, m.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, m.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, m.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, m.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, m.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        f = new Array(n),
                        h = new Array(n),
                        c = new Array(n),
                        l = r.words;
                    l.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, f, n), this.transform(a, o, s, u, n, i), this.transform(f, o, h, c, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * h[d] - u[d] * c[d];
                        u[d] = s[d] * c[d] + u[d] * h[d], s[d] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), p(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    n("number" === typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << r;
                            this.words[e] = u | a, a = s >>> 26 - r
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var i;
                    n("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var f = 0; f < a; f++) u.words[f] = this.words[f];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - o | c >>> o, h = c & s
                    }
                    return u && 0 !== h && (u.words[u.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, a = t.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var u = (0 | t.words[i]) * e;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        n = this.clone(),
                        i = t,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, u = n.length - i.length;
                    if ("mod" !== e) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                        for (var f = 0; f < s.length; f++) s.words[f] = 0
                    }
                    var h = n.clone()._ishlnsubmul(i, 1, u);
                    0 === h.negative && (n = h, s && (s.words[u] = 1));
                    for (var c = u - 1; c >= 0; c--) {
                        var l = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                        for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, c); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                        s && (s.words[c] = l)
                    }
                    return s && s.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(t)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 !== (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
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
                    var i, a, s
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function(t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), f = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++f;
                    for (var h = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var l = 0, d = 1; 0 === (e.words[0] & d) && l < 26; ++l, d <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(h), u.isub(c)), s.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: r.iushln(f)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, a = new o(1), s = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var f = 0, h = 1; 0 === (e.words[0] & h) && f < 26; ++f, h <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var c = 0, l = 1; 0 === (r.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a))
                    }
                    return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
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
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
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
                    return new S(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function g(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function y() {
                    g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function v() {
                    g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function M() {
                    g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function S(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function x(t) {
                    S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                g.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, g.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                }, g.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, g.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(y, g), y.prototype.split = function(t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var a = 0 | t.words[i];
                        t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, y.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(v, g), i(w, g), i(M, g), M.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (b[t]) return b[t];
                    var e;
                    if ("k256" === t) e = new y;
                    else if ("p224" === t) e = new v;
                    else if ("p192" === t) e = new w;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new M
                    }
                    return b[t] = e, e
                }, S.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, S.prototype._verify2 = function(t, e) {
                    n(0 === (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, S.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, S.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, S.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, S.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, S.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, S.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, S.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, S.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, S.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, S.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, S.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, S.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        f = this.m.subn(1).iushrn(1),
                        h = this.m.bitLength();
                    for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(u);) h.redIAdd(u);
                    for (var c = this.pow(h, i), l = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                        for (var m = d, b = 0; 0 !== m.cmp(s); b++) m = m.redSqr();
                        n(b < p);
                        var g = this.pow(c, new o(1).iushln(p - b - 1));
                        l = l.redMul(g), c = g.redSqr(), d = d.redMul(c), p = b
                    }
                    return l
                }, S.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, S.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var f = e.words[n], h = u - 1; h >= 0; h--) {
                            var c = f >> h & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === h) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return i
                }, S.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, S.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new x(t)
                }, i(x, S), x.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, x.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, x.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, x.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, x.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        80884: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = r(23944),
                o = r(49604);

            function a(t) {
                var e = t;
                if ("string" !== typeof e) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof e + ", while padToEven.");
                return e.length % 2 && (e = "0" + e), e
            }

            function s(t) {
                return "0x" + t.toString(16)
            }
            t.exports = {
                arrayContainsArray: function(t, e, r) {
                    if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof t + "'");
                    if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof e + "'");
                    return e[Boolean(r) ? "some" : "every"]((function(e) {
                        return t.indexOf(e) >= 0
                    }))
                },
                intToBuffer: function(t) {
                    var e = s(t);
                    return new n(a(e.slice(2)), "hex")
                },
                getBinarySize: function(t) {
                    if ("string" !== typeof t) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof t + "'.");
                    return n.byteLength(t, "utf8")
                },
                isHexPrefixed: i,
                stripHexPrefix: o,
                padToEven: a,
                intToHex: s,
                fromAscii: function(t) {
                    for (var e = "", r = 0; r < t.length; r++) {
                        var n = t.charCodeAt(r).toString(16);
                        e += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + e
                },
                fromUtf8: function(t) {
                    return "0x" + a(new n(t, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(t) {
                    var e = "",
                        r = 0,
                        n = t.length;
                    for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
                        var i = parseInt(t.substr(r, 2), 16);
                        e += String.fromCharCode(i)
                    }
                    return e
                },
                toUtf8: function(t) {
                    return new n(a(o(t).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function(t, e, r) {
                    if (!Array.isArray(t)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof t + "'");
                    if ("string" !== typeof e) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof e + "'.");
                    for (var n = [], i = 0; i < t.length; i++) {
                        var o = t[i][e];
                        if (r && !o) o = "";
                        else if ("string" !== typeof o) throw new Error("invalid abi");
                        n.push(o)
                    }
                    return n
                },
                isHexString: function(t, e) {
                    return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
                }
            }
        },
        3349: function(t, e, r) {
            "use strict";
            var n = r(89509).Buffer,
                i = r(88473).Transform;

            function o(t) {
                i.call(this), this._block = n.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
            }
            r(35717)(o, i), o.prototype._transform = function(t, e, r) {
                var n = null;
                try {
                    this.update(t, e)
                } catch (i) {
                    n = i
                }
                r(n)
            }, o.prototype._flush = function(t) {
                var e = null;
                try {
                    this.push(this.digest())
                } catch (r) {
                    e = r
                }
                t(e)
            }, o.prototype.update = function(t, e) {
                if (function(t, e) {
                        if (!n.isBuffer(t) && "string" !== typeof t) throw new TypeError(e + " must be a string or a buffer")
                    }(t, "Data"), this._finalized) throw new Error("Digest already called");
                n.isBuffer(t) || (t = n.from(t, e));
                for (var r = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
                    for (var o = this._blockOffset; o < this._blockSize;) r[o++] = t[i++];
                    this._update(), this._blockOffset = 0
                }
                for (; i < t.length;) r[this._blockOffset++] = t[i++];
                for (var a = 0, s = 8 * t.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
                return this
            }, o.prototype._update = function() {
                throw new Error("_update is not implemented")
            }, o.prototype.digest = function(t) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = !0;
                var e = this._digest();
                void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
                for (var r = 0; r < 4; ++r) this._length[r] = 0;
                return e
            }, o.prototype._digest = function() {
                throw new Error("_digest is not implemented")
            }, t.exports = o
        },
        2156: function(t, e, r) {
            "use strict";
            var n = r(33715),
                i = r(34504),
                o = r(79746);

            function a(t) {
                if (!(this instanceof a)) return new a(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = i.toArray(t.nonce, t.nonceEnc || "hex"),
                    n = i.toArray(t.pers, t.persEnc || "hex");
                o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
            }
            t.exports = a, a.prototype._init = function(t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, a.prototype._hmac = function() {
                return new n.hmac(this.hash, this.K)
            }, a.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, a.prototype.reseed = function(t, e, r, n) {
                "string" !== typeof e && (n = r, r = e, e = null), t = i.toArray(t, e), r = i.toArray(r, n), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, a.prototype.generate = function(t, e, r, n) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" !== typeof e && (n = r, r = e, e = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
                for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                var a = o.slice(0, t);
                return this._update(r), this._reseed++, i.encode(a, e)
            }
        },
        23944: function(t) {
            t.exports = function(t) {
                if ("string" !== typeof t) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof t + ", while checking isHexPrefixed.");
                return "0x" === t.slice(0, 2)
            }
        },
        62318: function(t, e, r) {
            "use strict";
            var n = r(35717),
                i = r(3349),
                o = r(89509).Buffer,
                a = new Array(16);

            function s() {
                i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function u(t, e) {
                return t << e | t >>> 32 - e
            }

            function f(t, e, r, n, i, o, a) {
                return u(t + (e & r | ~e & n) + i + o | 0, a) + e | 0
            }

            function h(t, e, r, n, i, o, a) {
                return u(t + (e & n | r & ~n) + i + o | 0, a) + e | 0
            }

            function c(t, e, r, n, i, o, a) {
                return u(t + (e ^ r ^ n) + i + o | 0, a) + e | 0
            }

            function l(t, e, r, n, i, o, a) {
                return u(t + (r ^ (e | ~n)) + i + o | 0, a) + e | 0
            }
            n(s, i), s.prototype._update = function() {
                for (var t = a, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
                var r = this._a,
                    n = this._b,
                    i = this._c,
                    o = this._d;
                r = f(r, n, i, o, t[0], 3614090360, 7), o = f(o, r, n, i, t[1], 3905402710, 12), i = f(i, o, r, n, t[2], 606105819, 17), n = f(n, i, o, r, t[3], 3250441966, 22), r = f(r, n, i, o, t[4], 4118548399, 7), o = f(o, r, n, i, t[5], 1200080426, 12), i = f(i, o, r, n, t[6], 2821735955, 17), n = f(n, i, o, r, t[7], 4249261313, 22), r = f(r, n, i, o, t[8], 1770035416, 7), o = f(o, r, n, i, t[9], 2336552879, 12), i = f(i, o, r, n, t[10], 4294925233, 17), n = f(n, i, o, r, t[11], 2304563134, 22), r = f(r, n, i, o, t[12], 1804603682, 7), o = f(o, r, n, i, t[13], 4254626195, 12), i = f(i, o, r, n, t[14], 2792965006, 17), r = h(r, n = f(n, i, o, r, t[15], 1236535329, 22), i, o, t[1], 4129170786, 5), o = h(o, r, n, i, t[6], 3225465664, 9), i = h(i, o, r, n, t[11], 643717713, 14), n = h(n, i, o, r, t[0], 3921069994, 20), r = h(r, n, i, o, t[5], 3593408605, 5), o = h(o, r, n, i, t[10], 38016083, 9), i = h(i, o, r, n, t[15], 3634488961, 14), n = h(n, i, o, r, t[4], 3889429448, 20), r = h(r, n, i, o, t[9], 568446438, 5), o = h(o, r, n, i, t[14], 3275163606, 9), i = h(i, o, r, n, t[3], 4107603335, 14), n = h(n, i, o, r, t[8], 1163531501, 20), r = h(r, n, i, o, t[13], 2850285829, 5), o = h(o, r, n, i, t[2], 4243563512, 9), i = h(i, o, r, n, t[7], 1735328473, 14), r = c(r, n = h(n, i, o, r, t[12], 2368359562, 20), i, o, t[5], 4294588738, 4), o = c(o, r, n, i, t[8], 2272392833, 11), i = c(i, o, r, n, t[11], 1839030562, 16), n = c(n, i, o, r, t[14], 4259657740, 23), r = c(r, n, i, o, t[1], 2763975236, 4), o = c(o, r, n, i, t[4], 1272893353, 11), i = c(i, o, r, n, t[7], 4139469664, 16), n = c(n, i, o, r, t[10], 3200236656, 23), r = c(r, n, i, o, t[13], 681279174, 4), o = c(o, r, n, i, t[0], 3936430074, 11), i = c(i, o, r, n, t[3], 3572445317, 16), n = c(n, i, o, r, t[6], 76029189, 23), r = c(r, n, i, o, t[9], 3654602809, 4), o = c(o, r, n, i, t[12], 3873151461, 11), i = c(i, o, r, n, t[15], 530742520, 16), r = l(r, n = c(n, i, o, r, t[2], 3299628645, 23), i, o, t[0], 4096336452, 6), o = l(o, r, n, i, t[7], 1126891415, 10), i = l(i, o, r, n, t[14], 2878612391, 15), n = l(n, i, o, r, t[5], 4237533241, 21), r = l(r, n, i, o, t[12], 1700485571, 6), o = l(o, r, n, i, t[3], 2399980690, 10), i = l(i, o, r, n, t[10], 4293915773, 15), n = l(n, i, o, r, t[1], 2240044497, 21), r = l(r, n, i, o, t[8], 1873313359, 6), o = l(o, r, n, i, t[15], 4264355552, 10), i = l(i, o, r, n, t[6], 2734768916, 15), n = l(n, i, o, r, t[13], 1309151649, 21), r = l(r, n, i, o, t[4], 4149444226, 6), o = l(o, r, n, i, t[11], 3174756917, 10), i = l(i, o, r, n, t[2], 718787259, 15), n = l(n, i, o, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
            }, s.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = o.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
            }, t.exports = s
        },
        34504: function(t, e) {
            "use strict";
            var r = e;

            function n(t) {
                return 1 === t.length ? "0" + t : t
            }

            function i(t) {
                for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
                return e
            }
            r.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" !== typeof t) {
                    for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                    return r
                }
                if ("hex" === e) {
                    (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t);
                    for (n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                } else
                    for (n = 0; n < t.length; n++) {
                        var i = t.charCodeAt(n),
                            o = i >> 8,
                            a = 255 & i;
                        o ? r.push(o, a) : r.push(a)
                    }
                return r
            }, r.zero2 = n, r.toHex = i, r.encode = function(t, e) {
                return "hex" === e ? i(t) : t
            }
        },
        27596: function(t, e, r) {
            var n = r(83454),
                i = r(48764).Buffer;
            ! function() {
                var e = {
                        997: function(t) {
                            t.exports = function(t, r, n) {
                                if (t.filter) return t.filter(r, n);
                                if (void 0 === t || null === t) throw new TypeError;
                                if ("function" != typeof r) throw new TypeError;
                                for (var i = [], o = 0; o < t.length; o++)
                                    if (e.call(t, o)) {
                                        var a = t[o];
                                        r.call(n, a, o, t) && i.push(a)
                                    }
                                return i
                            };
                            var e = Object.prototype.hasOwnProperty
                        },
                        468: function(t, e, r) {
                            "use strict";

                            function i(t) {
                                return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                }, i(t)
                            }
                            var o, a, s = r(977).codes,
                                u = s.ERR_AMBIGUOUS_ARGUMENT,
                                f = s.ERR_INVALID_ARG_TYPE,
                                h = s.ERR_INVALID_ARG_VALUE,
                                c = s.ERR_INVALID_RETURN_VALUE,
                                l = s.ERR_MISSING_ARGS,
                                d = r(971),
                                p = r(467).inspect,
                                m = r(467).types,
                                b = m.isPromise,
                                g = m.isRegExp,
                                y = Object.assign ? Object.assign : r(203).assign,
                                v = Object.is ? Object.is : r(113);
                            new Map;

                            function w() {
                                var t = r(97);
                                o = t.isDeepEqual, a = t.isDeepStrictEqual
                            }
                            var M = !1,
                                S = t.exports = E,
                                x = {};

                            function _(t) {
                                if (t.message instanceof Error) throw t.message;
                                throw new d(t)
                            }

                            function A(t, e, r, n) {
                                if (!r) {
                                    var i = !1;
                                    if (0 === e) i = !0, n = "No value argument passed to `assert.ok()`";
                                    else if (n instanceof Error) throw n;
                                    var o = new d({
                                        actual: r,
                                        expected: !0,
                                        message: n,
                                        operator: "==",
                                        stackStartFn: t
                                    });
                                    throw o.generatedMessage = i, o
                                }
                            }

                            function E() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                A.apply(void 0, [E, e.length].concat(e))
                            }
                            S.fail = function t(e, r, i, o, a) {
                                var s, u = arguments.length;
                                if (0 === u) s = "Failed";
                                else if (1 === u) i = e, e = void 0;
                                else {
                                    if (!1 === M) {
                                        M = !0;
                                        var f = n.emitWarning ? n.emitWarning : console.warn.bind(console);
                                        f("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")
                                    }
                                    2 === u && (o = "!=")
                                }
                                if (i instanceof Error) throw i;
                                var h = {
                                    actual: e,
                                    expected: r,
                                    operator: void 0 === o ? "fail" : o,
                                    stackStartFn: a || t
                                };
                                void 0 !== i && (h.message = i);
                                var c = new d(h);
                                throw s && (c.message = s, c.generatedMessage = !0), c
                            }, S.AssertionError = d, S.ok = E, S.equal = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                e != r && _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "==",
                                    stackStartFn: t
                                })
                            }, S.notEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                e == r && _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "!=",
                                    stackStartFn: t
                                })
                            }, S.deepEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                void 0 === o && w(), o(e, r) || _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "deepEqual",
                                    stackStartFn: t
                                })
                            }, S.notDeepEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                void 0 === o && w(), o(e, r) && _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "notDeepEqual",
                                    stackStartFn: t
                                })
                            }, S.deepStrictEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                void 0 === o && w(), a(e, r) || _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "deepStrictEqual",
                                    stackStartFn: t
                                })
                            }, S.notDeepStrictEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                void 0 === o && w();
                                a(e, r) && _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "notDeepStrictEqual",
                                    stackStartFn: t
                                })
                            }, S.strictEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                v(e, r) || _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "strictEqual",
                                    stackStartFn: t
                                })
                            }, S.notStrictEqual = function t(e, r, n) {
                                if (arguments.length < 2) throw new l("actual", "expected");
                                v(e, r) && _({
                                    actual: e,
                                    expected: r,
                                    message: n,
                                    operator: "notStrictEqual",
                                    stackStartFn: t
                                })
                            };
                            var k = function t(e, r, n) {
                                var i = this;
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), r.forEach((function(t) {
                                    t in e && (void 0 !== n && "string" === typeof n[t] && g(e[t]) && e[t].test(n[t]) ? i[t] = n[t] : i[t] = e[t])
                                }))
                            };

                            function R(t, e, r, n, i, o) {
                                if (!(r in t) || !a(t[r], e[r])) {
                                    if (!n) {
                                        var s = new k(t, i),
                                            u = new k(e, i, t),
                                            f = new d({
                                                actual: s,
                                                expected: u,
                                                operator: "deepStrictEqual",
                                                stackStartFn: o
                                            });
                                        throw f.actual = t, f.expected = e, f.operator = o.name, f
                                    }
                                    _({
                                        actual: t,
                                        expected: e,
                                        message: n,
                                        operator: o.name,
                                        stackStartFn: o
                                    })
                                }
                            }

                            function O(t, e, r, n) {
                                if ("function" !== typeof e) {
                                    if (g(e)) return e.test(t);
                                    if (2 === arguments.length) throw new f("expected", ["Function", "RegExp"], e);
                                    if ("object" !== i(t) || null === t) {
                                        var a = new d({
                                            actual: t,
                                            expected: e,
                                            message: r,
                                            operator: "deepStrictEqual",
                                            stackStartFn: n
                                        });
                                        throw a.operator = n.name, a
                                    }
                                    var s = Object.keys(e);
                                    if (e instanceof Error) s.push("name", "message");
                                    else if (0 === s.length) throw new h("error", e, "may not be an empty object");
                                    return void 0 === o && w(), s.forEach((function(i) {
                                        "string" === typeof t[i] && g(e[i]) && e[i].test(t[i]) || R(t, e, i, r, s, n)
                                    })), !0
                                }
                                return void 0 !== e.prototype && t instanceof e || !Error.isPrototypeOf(e) && !0 === e.call({}, t)
                            }

                            function P(t) {
                                if ("function" !== typeof t) throw new f("fn", "Function", t);
                                try {
                                    t()
                                } catch (t) {
                                    return t
                                }
                                return x
                            }

                            function I(t) {
                                return b(t) || null !== t && "object" === i(t) && "function" === typeof t.then && "function" === typeof t.catch
                            }

                            function T(t) {
                                return Promise.resolve().then((function() {
                                    var e;
                                    if ("function" === typeof t) {
                                        if (!I(e = t())) throw new c("instance of Promise", "promiseFn", e)
                                    } else {
                                        if (!I(t)) throw new f("promiseFn", ["Function", "Promise"], t);
                                        e = t
                                    }
                                    return Promise.resolve().then((function() {
                                        return e
                                    })).then((function() {
                                        return x
                                    })).catch((function(t) {
                                        return t
                                    }))
                                }))
                            }

                            function j(t, e, r, n) {
                                if ("string" === typeof r) {
                                    if (4 === arguments.length) throw new f("error", ["Object", "Error", "Function", "RegExp"], r);
                                    if ("object" === i(e) && null !== e) {
                                        if (e.message === r) throw new u("error/message", 'The error message "'.concat(e.message, '" is identical to the message.'))
                                    } else if (e === r) throw new u("error/message", 'The error "'.concat(e, '" is identical to the message.'));
                                    n = r, r = void 0
                                } else if (null != r && "object" !== i(r) && "function" !== typeof r) throw new f("error", ["Object", "Error", "Function", "RegExp"], r);
                                if (e === x) {
                                    var o = "";
                                    r && r.name && (o += " (".concat(r.name, ")")), o += n ? ": ".concat(n) : ".";
                                    var a = "rejects" === t.name ? "rejection" : "exception";
                                    _({
                                        actual: void 0,
                                        expected: r,
                                        operator: t.name,
                                        message: "Missing expected ".concat(a).concat(o),
                                        stackStartFn: t
                                    })
                                }
                                if (r && !O(e, r, n, t)) throw e
                            }

                            function N(t, e, r, n) {
                                if (e !== x) {
                                    if ("string" === typeof r && (n = r, r = void 0), !r || O(e, r)) {
                                        var i = n ? ": ".concat(n) : ".",
                                            o = "doesNotReject" === t.name ? "rejection" : "exception";
                                        _({
                                            actual: e,
                                            expected: r,
                                            operator: t.name,
                                            message: "Got unwanted ".concat(o).concat(i, "\n") + 'Actual message: "'.concat(e && e.message, '"'),
                                            stackStartFn: t
                                        })
                                    }
                                    throw e
                                }
                            }

                            function B() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                A.apply(void 0, [B, e.length].concat(e))
                            }
                            S.throws = function t(e) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                j.apply(void 0, [t, P(e)].concat(n))
                            }, S.rejects = function t(e) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                return T(e).then((function(e) {
                                    return j.apply(void 0, [t, e].concat(n))
                                }))
                            }, S.doesNotThrow = function t(e) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                N.apply(void 0, [t, P(e)].concat(n))
                            }, S.doesNotReject = function t(e) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                return T(e).then((function(e) {
                                    return N.apply(void 0, [t, e].concat(n))
                                }))
                            }, S.ifError = function t(e) {
                                if (null !== e && void 0 !== e) {
                                    var r = "ifError got unwanted exception: ";
                                    "object" === i(e) && "string" === typeof e.message ? 0 === e.message.length && e.constructor ? r += e.constructor.name : r += e.message : r += p(e);
                                    var n = new d({
                                            actual: e,
                                            expected: null,
                                            operator: "ifError",
                                            message: r,
                                            stackStartFn: t
                                        }),
                                        o = e.stack;
                                    if ("string" === typeof o) {
                                        var a = o.split("\n");
                                        a.shift();
                                        for (var s = n.stack.split("\n"), u = 0; u < a.length; u++) {
                                            var f = s.indexOf(a[u]);
                                            if (-1 !== f) {
                                                s = s.slice(0, f);
                                                break
                                            }
                                        }
                                        n.stack = "".concat(s.join("\n"), "\n").concat(a.join("\n"))
                                    }
                                    throw n
                                }
                            }, S.strict = y(B, S, {
                                equal: S.strictEqual,
                                deepEqual: S.deepStrictEqual,
                                notEqual: S.notStrictEqual,
                                notDeepEqual: S.notDeepStrictEqual
                            }), S.strict.strict = S.strict
                        },
                        971: function(t, e, r) {
                            "use strict";

                            function i(t, e, r) {
                                return e in t ? Object.defineProperty(t, e, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = r, t
                            }

                            function o(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            function a(t, e) {
                                return !e || "object" !== d(e) && "function" !== typeof e ? s(t) : e
                            }

                            function s(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }

                            function u(t) {
                                var e = "function" === typeof Map ? new Map : void 0;
                                return u = function(t) {
                                    if (null === t || ! function(t) {
                                            return -1 !== Function.toString.call(t).indexOf("[native code]")
                                        }(t)) return t;
                                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                                    if ("undefined" !== typeof e) {
                                        if (e.has(t)) return e.get(t);
                                        e.set(t, r)
                                    }

                                    function r() {
                                        return h(t, arguments, l(this).constructor)
                                    }
                                    return r.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: r,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), c(r, t)
                                }, u(t)
                            }

                            function f() {
                                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" === typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function h(t, e, r) {
                                return h = f() ? Reflect.construct : function(t, e, r) {
                                    var n = [null];
                                    n.push.apply(n, e);
                                    var i = new(Function.bind.apply(t, n));
                                    return r && c(i, r.prototype), i
                                }, h.apply(null, arguments)
                            }

                            function c(t, e) {
                                return c = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                }, c(t, e)
                            }

                            function l(t) {
                                return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                }, l(t)
                            }

                            function d(t) {
                                return d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                }, d(t)
                            }
                            var p = r(467).inspect,
                                m = r(977).codes.ERR_INVALID_ARG_TYPE;

                            function b(t, e, r) {
                                return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e
                            }
                            var g = "",
                                y = "",
                                v = "",
                                w = "",
                                M = {
                                    deepStrictEqual: "Expected values to be strictly deep-equal:",
                                    strictEqual: "Expected values to be strictly equal:",
                                    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                                    deepEqual: "Expected values to be loosely deep-equal:",
                                    equal: "Expected values to be loosely equal:",
                                    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                                    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                                    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                                    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                                    notEqual: 'Expected "actual" to be loosely unequal to:',
                                    notIdentical: "Values identical but not reference-equal:"
                                };

                            function S(t) {
                                var e = Object.keys(t),
                                    r = Object.create(Object.getPrototypeOf(t));
                                return e.forEach((function(e) {
                                    r[e] = t[e]
                                })), Object.defineProperty(r, "message", {
                                    value: t.message
                                }), r
                            }

                            function x(t) {
                                return p(t, {
                                    compact: !1,
                                    customInspect: !1,
                                    depth: 1e3,
                                    maxArrayLength: 1 / 0,
                                    showHidden: !1,
                                    breakLength: 1 / 0,
                                    showProxy: !1,
                                    sorted: !0,
                                    getters: !0
                                })
                            }

                            function _(t, e, r) {
                                var i = "",
                                    o = "",
                                    a = 0,
                                    s = "",
                                    u = !1,
                                    f = x(t),
                                    h = f.split("\n"),
                                    c = x(e).split("\n"),
                                    l = 0,
                                    p = "";
                                if ("strictEqual" === r && "object" === d(t) && "object" === d(e) && null !== t && null !== e && (r = "strictEqualObject"), 1 === h.length && 1 === c.length && h[0] !== c[0]) {
                                    var m = h[0].length + c[0].length;
                                    if (m <= 10) {
                                        if (("object" !== d(t) || null === t) && ("object" !== d(e) || null === e) && (0 !== t || 0 !== e)) return "".concat(M[r], "\n\n") + "".concat(h[0], " !== ").concat(c[0], "\n")
                                    } else if ("strictEqualObject" !== r) {
                                        if (m < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                                            for (; h[0][l] === c[0][l];) l++;
                                            l > 2 && (p = "\n  ".concat(function(t, e) {
                                                if (e = Math.floor(e), 0 == t.length || 0 == e) return "";
                                                var r = t.length * e;
                                                for (e = Math.floor(Math.log(e) / Math.log(2)); e;) t += t, e--;
                                                return t + t.substring(0, r - t.length)
                                            }(" ", l), "^"), l = 0)
                                        }
                                    }
                                }
                                for (var S = h[h.length - 1], _ = c[c.length - 1]; S === _ && (l++ < 2 ? s = "\n  ".concat(S).concat(s) : i = S, h.pop(), c.pop(), 0 !== h.length && 0 !== c.length);) S = h[h.length - 1], _ = c[c.length - 1];
                                var A = Math.max(h.length, c.length);
                                if (0 === A) {
                                    var E = f.split("\n");
                                    if (E.length > 30)
                                        for (E[26] = "".concat(g, "...").concat(w); E.length > 27;) E.pop();
                                    return "".concat(M.notIdentical, "\n\n").concat(E.join("\n"), "\n")
                                }
                                l > 3 && (s = "\n".concat(g, "...").concat(w).concat(s), u = !0), "" !== i && (s = "\n  ".concat(i).concat(s), i = "");
                                var k = 0,
                                    R = M[r] + "\n".concat(y, "+ actual").concat(w, " ").concat(v, "- expected").concat(w),
                                    O = " ".concat(g, "...").concat(w, " Lines skipped");
                                for (l = 0; l < A; l++) {
                                    var P = l - a;
                                    if (h.length < l + 1) P > 1 && l > 2 && (P > 4 ? (o += "\n".concat(g, "...").concat(w), u = !0) : P > 3 && (o += "\n  ".concat(c[l - 2]), k++), o += "\n  ".concat(c[l - 1]), k++), a = l, i += "\n".concat(v, "-").concat(w, " ").concat(c[l]), k++;
                                    else if (c.length < l + 1) P > 1 && l > 2 && (P > 4 ? (o += "\n".concat(g, "...").concat(w), u = !0) : P > 3 && (o += "\n  ".concat(h[l - 2]), k++), o += "\n  ".concat(h[l - 1]), k++), a = l, o += "\n".concat(y, "+").concat(w, " ").concat(h[l]), k++;
                                    else {
                                        var I = c[l],
                                            T = h[l],
                                            j = T !== I && (!b(T, ",") || T.slice(0, -1) !== I);
                                        j && b(I, ",") && I.slice(0, -1) === T && (j = !1, T += ","), j ? (P > 1 && l > 2 && (P > 4 ? (o += "\n".concat(g, "...").concat(w), u = !0) : P > 3 && (o += "\n  ".concat(h[l - 2]), k++), o += "\n  ".concat(h[l - 1]), k++), a = l, o += "\n".concat(y, "+").concat(w, " ").concat(T), i += "\n".concat(v, "-").concat(w, " ").concat(I), k += 2) : (o += i, i = "", 1 !== P && 0 !== l || (o += "\n  ".concat(T), k++))
                                    }
                                    if (k > 20 && l < A - 2) return "".concat(R).concat(O, "\n").concat(o, "\n").concat(g, "...").concat(w).concat(i, "\n") + "".concat(g, "...").concat(w)
                                }
                                return "".concat(R).concat(u ? O : "", "\n").concat(o).concat(i).concat(s).concat(p)
                            }
                            var A = function(t) {
                                function e(t) {
                                    var r;
                                    if (function(t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                        }(this, e), "object" !== d(t) || null === t) throw new m("options", "Object", t);
                                    var i = t.message,
                                        o = t.operator,
                                        u = t.stackStartFn,
                                        f = t.actual,
                                        h = t.expected,
                                        c = Error.stackTraceLimit;
                                    if (Error.stackTraceLimit = 0, null != i) r = a(this, l(e).call(this, String(i)));
                                    else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (g = "\x1b[34m", y = "\x1b[32m", w = "\x1b[39m", v = "\x1b[31m") : (g = "", y = "", w = "", v = "")), "object" === d(f) && null !== f && "object" === d(h) && null !== h && "stack" in f && f instanceof Error && "stack" in h && h instanceof Error && (f = S(f), h = S(h)), "deepStrictEqual" === o || "strictEqual" === o) r = a(this, l(e).call(this, _(f, h, o)));
                                    else if ("notDeepStrictEqual" === o || "notStrictEqual" === o) {
                                        var p = M[o],
                                            b = x(f).split("\n");
                                        if ("notStrictEqual" === o && "object" === d(f) && null !== f && (p = M.notStrictEqualObject), b.length > 30)
                                            for (b[26] = "".concat(g, "...").concat(w); b.length > 27;) b.pop();
                                        r = 1 === b.length ? a(this, l(e).call(this, "".concat(p, " ").concat(b[0]))) : a(this, l(e).call(this, "".concat(p, "\n\n").concat(b.join("\n"), "\n")))
                                    } else {
                                        var A = x(f),
                                            E = "",
                                            k = M[o];
                                        "notDeepEqual" === o || "notEqual" === o ? (A = "".concat(M[o], "\n\n").concat(A)).length > 1024 && (A = "".concat(A.slice(0, 1021), "...")) : (E = "".concat(x(h)), A.length > 512 && (A = "".concat(A.slice(0, 509), "...")), E.length > 512 && (E = "".concat(E.slice(0, 509), "...")), "deepEqual" === o || "equal" === o ? A = "".concat(k, "\n\n").concat(A, "\n\nshould equal\n\n") : E = " ".concat(o, " ").concat(E)), r = a(this, l(e).call(this, "".concat(A).concat(E)))
                                    }
                                    return Error.stackTraceLimit = c, r.generatedMessage = !i, Object.defineProperty(s(r), "name", {
                                        value: "AssertionError [ERR_ASSERTION]",
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }), r.code = "ERR_ASSERTION", r.actual = f, r.expected = h, r.operator = o, Error.captureStackTrace && Error.captureStackTrace(s(r), u), r.stack, r.name = "AssertionError", a(r)
                                }
                                return function(t, e) {
                                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                        t.prototype = Object.create(e && e.prototype, {
                                            constructor: {
                                                value: t,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), e && c(t, e)
                                    }(e, t),
                                    function(t, e, r) {
                                        e && o(t.prototype, e), r && o(t, r)
                                    }(e, [{
                                        key: "toString",
                                        value: function() {
                                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                                        }
                                    }, {
                                        key: p.custom,
                                        value: function(t, e) {
                                            return p(this, function(t) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var r = null != arguments[e] ? arguments[e] : {},
                                                        n = Object.keys(r);
                                                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                                                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                                                    })))), n.forEach((function(e) {
                                                        i(t, e, r[e])
                                                    }))
                                                }
                                                return t
                                            }({}, e, {
                                                customInspect: !1,
                                                depth: 0
                                            }))
                                        }
                                    }]), e
                            }(u(Error));
                            t.exports = A
                        },
                        977: function(t, e, r) {
                            "use strict";

                            function n(t) {
                                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                }, n(t)
                            }

                            function i(t, e) {
                                return !e || "object" !== n(e) && "function" !== typeof e ? function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t) : e
                            }

                            function o(t) {
                                return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                }, o(t)
                            }

                            function a(t, e) {
                                return a = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                }, a(t, e)
                            }
                            var s, u, f = {};

                            function h(t, e, r) {
                                function n(t, r, n) {
                                    return "string" === typeof e ? e : e(t, r, n)
                                }
                                r || (r = Error);
                                var s = function(e) {
                                    function r(e, a, s) {
                                        var u;
                                        return function(t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                        }(this, r), (u = i(this, o(r).call(this, n(e, a, s)))).code = t, u
                                    }
                                    return function(t, e) {
                                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                        t.prototype = Object.create(e && e.prototype, {
                                            constructor: {
                                                value: t,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), e && a(t, e)
                                    }(r, e), r
                                }(r);
                                f[t] = s
                            }

                            function c(t, e) {
                                if (Array.isArray(t)) {
                                    var r = t.length;
                                    return t = t.map((function(t) {
                                        return String(t)
                                    })), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
                                }
                                return "of ".concat(e, " ").concat(String(t))
                            }
                            h("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), h("ERR_INVALID_ARG_TYPE", (function(t, e, i) {
                                var o, a;
                                if (void 0 === s && (s = r(468)), s("string" === typeof t, "'name' must be a string"), "string" === typeof e && function(t, e, r) {
                                        return t.substr(!r || r < 0 ? 0 : +r, e.length) === e
                                    }(e, "not ") ? (o = "must not be", e = e.replace(/^not /, "")) : o = "must be", function(t, e, r) {
                                        return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e
                                    }(t, " argument")) a = "The ".concat(t, " ").concat(o, " ").concat(c(e, "type"));
                                else {
                                    var u = function(t, e, r) {
                                        return "number" !== typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                                    }(t, ".") ? "property" : "argument";
                                    a = 'The "'.concat(t, '" ').concat(u, " ").concat(o, " ").concat(c(e, "type"))
                                }
                                return a += ". Received type ".concat(n(i))
                            }), TypeError), h("ERR_INVALID_ARG_VALUE", (function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                                void 0 === u && (u = r(467));
                                var i = u.inspect(e);
                                return i.length > 128 && (i = "".concat(i.slice(0, 128), "...")), "The argument '".concat(t, "' ").concat(n, ". Received ").concat(i)
                            }), TypeError, RangeError), h("ERR_INVALID_RETURN_VALUE", (function(t, e, r) {
                                var i;
                                return i = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)), "Expected ".concat(t, ' to be returned from the "').concat(e, '"') + " function but got ".concat(i, ".")
                            }), TypeError), h("ERR_MISSING_ARGS", (function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                void 0 === s && (s = r(468)), s(e.length > 0, "At least one arg needs to be specified");
                                var i = "The ",
                                    o = e.length;
                                switch (e = e.map((function(t) {
                                    return '"'.concat(t, '"')
                                })), o) {
                                    case 1:
                                        i += "".concat(e[0], " argument");
                                        break;
                                    case 2:
                                        i += "".concat(e[0], " and ").concat(e[1], " arguments");
                                        break;
                                    default:
                                        i += e.slice(0, o - 1).join(", "), i += ", and ".concat(e[o - 1], " arguments")
                                }
                                return "".concat(i, " must be specified")
                            }), TypeError), t.exports.codes = f
                        },
                        97: function(t, e, r) {
                            "use strict";

                            function n(t, e) {
                                return function(t) {
                                    if (Array.isArray(t)) return t
                                }(t) || function(t, e) {
                                    var r = [],
                                        n = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                                    } catch (t) {
                                        i = !0, o = t
                                    } finally {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return r
                                }(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                            }

                            function i(t) {
                                return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                }, i(t)
                            }
                            var o = void 0 !== /a/g.flags,
                                a = function(t) {
                                    var e = [];
                                    return t.forEach((function(t) {
                                        return e.push(t)
                                    })), e
                                },
                                s = function(t) {
                                    var e = [];
                                    return t.forEach((function(t, r) {
                                        return e.push([r, t])
                                    })), e
                                },
                                u = Object.is ? Object.is : r(113),
                                f = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                                    return []
                                },
                                h = Number.isNaN ? Number.isNaN : r(252);

                            function c(t) {
                                return t.call.bind(t)
                            }
                            var l = c(Object.prototype.hasOwnProperty),
                                d = c(Object.prototype.propertyIsEnumerable),
                                p = c(Object.prototype.toString),
                                m = r(467).types,
                                b = m.isAnyArrayBuffer,
                                g = m.isArrayBufferView,
                                y = m.isDate,
                                v = m.isMap,
                                w = m.isRegExp,
                                M = m.isSet,
                                S = m.isNativeError,
                                x = m.isBoxedPrimitive,
                                _ = m.isNumberObject,
                                A = m.isStringObject,
                                E = m.isBooleanObject,
                                k = m.isBigIntObject,
                                R = m.isSymbolObject,
                                O = m.isFloat32Array,
                                P = m.isFloat64Array;

                            function I(t) {
                                if (0 === t.length || t.length > 10) return !0;
                                for (var e = 0; e < t.length; e++) {
                                    var r = t.charCodeAt(e);
                                    if (r < 48 || r > 57) return !0
                                }
                                return 10 === t.length && t >= Math.pow(2, 32)
                            }

                            function T(t) {
                                return Object.keys(t).filter(I).concat(f(t).filter(Object.prototype.propertyIsEnumerable.bind(t)))
                            }

                            function j(t, e) {
                                if (t === e) return 0;
                                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                                    if (t[i] !== e[i]) {
                                        r = t[i], n = e[i];
                                        break
                                    }
                                return r < n ? -1 : n < r ? 1 : 0
                            }

                            function N(t, e) {
                                return o ? t.source === e.source && t.flags === e.flags : RegExp.prototype.toString.call(t) === RegExp.prototype.toString.call(e)
                            }

                            function B(t, e, r, n) {
                                if (t === e) return 0 !== t || (!r || u(t, e));
                                if (r) {
                                    if ("object" !== i(t)) return "number" === typeof t && h(t) && h(e);
                                    if ("object" !== i(e) || null === t || null === e) return !1;
                                    if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1
                                } else {
                                    if (null === t || "object" !== i(t)) return (null === e || "object" !== i(e)) && t == e;
                                    if (null === e || "object" !== i(e)) return !1
                                }
                                var o = p(t);
                                if (o !== p(e)) return !1;
                                if (Array.isArray(t)) {
                                    if (t.length !== e.length) return !1;
                                    var a = T(t),
                                        s = T(e);
                                    return a.length === s.length && C(t, e, r, n, 1, a)
                                }
                                if ("[object Object]" === o && (!v(t) && v(e) || !M(t) && M(e))) return !1;
                                if (y(t)) {
                                    if (!y(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)) return !1
                                } else if (w(t)) {
                                    if (!w(e) || !N(t, e)) return !1
                                } else if (S(t) || t instanceof Error) {
                                    if (t.message !== e.message || t.name !== e.name) return !1
                                } else {
                                    if (g(t)) {
                                        if (r || !O(t) && !P(t)) {
                                            if (! function(t, e) {
                                                    return t.byteLength === e.byteLength && 0 === j(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                                                }(t, e)) return !1
                                        } else if (! function(t, e) {
                                                if (t.byteLength !== e.byteLength) return !1;
                                                for (var r = 0; r < t.byteLength; r++)
                                                    if (t[r] !== e[r]) return !1;
                                                return !0
                                            }(t, e)) return !1;
                                        var f = T(t),
                                            c = T(e);
                                        return f.length === c.length && C(t, e, r, n, 0, f)
                                    }
                                    if (M(t)) return !(!M(e) || t.size !== e.size) && C(t, e, r, n, 2);
                                    if (v(t)) return !(!v(e) || t.size !== e.size) && C(t, e, r, n, 3);
                                    if (b(t)) {
                                        if (! function(t, e) {
                                                return t.byteLength === e.byteLength && 0 === j(new Uint8Array(t), new Uint8Array(e))
                                            }(t, e)) return !1
                                    } else if (x(t) && ! function(t, e) {
                                            return _(t) ? _(e) && u(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e)) : A(t) ? A(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e) : E(t) ? E(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e) : k(t) ? k(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e) : R(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e)
                                        }(t, e)) return !1
                                }
                                return C(t, e, r, n, 0)
                            }

                            function L(t, e) {
                                return e.filter((function(e) {
                                    return d(t, e)
                                }))
                            }

                            function C(t, e, r, n, i, o) {
                                if (5 === arguments.length) {
                                    o = Object.keys(t);
                                    var a = Object.keys(e);
                                    if (o.length !== a.length) return !1
                                }
                                for (var s = 0; s < o.length; s++)
                                    if (!l(e, o[s])) return !1;
                                if (r && 5 === arguments.length) {
                                    var u = f(t);
                                    if (0 !== u.length) {
                                        var h = 0;
                                        for (s = 0; s < u.length; s++) {
                                            var c = u[s];
                                            if (d(t, c)) {
                                                if (!d(e, c)) return !1;
                                                o.push(c), h++
                                            } else if (d(e, c)) return !1
                                        }
                                        var p = f(e);
                                        if (u.length !== p.length && L(e, p).length !== h) return !1
                                    } else {
                                        var m = f(e);
                                        if (0 !== m.length && 0 !== L(e, m).length) return !1
                                    }
                                }
                                if (0 === o.length && (0 === i || 1 === i && 0 === t.length || 0 === t.size)) return !0;
                                if (void 0 === n) n = {
                                    val1: new Map,
                                    val2: new Map,
                                    position: 0
                                };
                                else {
                                    var b = n.val1.get(t);
                                    if (void 0 !== b) {
                                        var g = n.val2.get(e);
                                        if (void 0 !== g) return b === g
                                    }
                                    n.position++
                                }
                                n.val1.set(t, n.position), n.val2.set(e, n.position);
                                var y = H(t, e, r, o, n, i);
                                return n.val1.delete(t), n.val2.delete(e), y
                            }

                            function $(t, e, r, n) {
                                for (var i = a(t), o = 0; o < i.length; o++) {
                                    var s = i[o];
                                    if (B(e, s, r, n)) return t.delete(s), !0
                                }
                                return !1
                            }

                            function z(t) {
                                switch (i(t)) {
                                    case "undefined":
                                        return null;
                                    case "object":
                                        return;
                                    case "symbol":
                                        return !1;
                                    case "string":
                                        t = +t;
                                    case "number":
                                        if (h(t)) return !1
                                }
                                return !0
                            }

                            function q(t, e, r) {
                                var n = z(r);
                                return null != n ? n : e.has(n) && !t.has(n)
                            }

                            function U(t, e, r, n, i) {
                                var o = z(r);
                                if (null != o) return o;
                                var a = e.get(o);
                                return !(void 0 === a && !e.has(o) || !B(n, a, !1, i)) && (!t.has(o) && B(n, a, !1, i))
                            }

                            function F(t, e, r, n) {
                                for (var o = null, s = a(t), u = 0; u < s.length; u++) {
                                    var f = s[u];
                                    if ("object" === i(f) && null !== f) null === o && (o = new Set), o.add(f);
                                    else if (!e.has(f)) {
                                        if (r) return !1;
                                        if (!q(t, e, f)) return !1;
                                        null === o && (o = new Set), o.add(f)
                                    }
                                }
                                if (null !== o) {
                                    for (var h = a(e), c = 0; c < h.length; c++) {
                                        var l = h[c];
                                        if ("object" === i(l) && null !== l) {
                                            if (!$(o, l, r, n)) return !1
                                        } else if (!r && !t.has(l) && !$(o, l, r, n)) return !1
                                    }
                                    return 0 === o.size
                                }
                                return !0
                            }

                            function D(t, e, r, n, i, o) {
                                for (var s = a(t), u = 0; u < s.length; u++) {
                                    var f = s[u];
                                    if (B(r, f, i, o) && B(n, e.get(f), i, o)) return t.delete(f), !0
                                }
                                return !1
                            }

                            function K(t, e, r, o) {
                                for (var a = null, u = s(t), f = 0; f < u.length; f++) {
                                    var h = n(u[f], 2),
                                        c = h[0],
                                        l = h[1];
                                    if ("object" === i(c) && null !== c) null === a && (a = new Set), a.add(c);
                                    else {
                                        var d = e.get(c);
                                        if (void 0 === d && !e.has(c) || !B(l, d, r, o)) {
                                            if (r) return !1;
                                            if (!U(t, e, c, l, o)) return !1;
                                            null === a && (a = new Set), a.add(c)
                                        }
                                    }
                                }
                                if (null !== a) {
                                    for (var p = s(e), m = 0; m < p.length; m++) {
                                        var b = n(p[m], 2),
                                            g = (c = b[0], b[1]);
                                        if ("object" === i(c) && null !== c) {
                                            if (!D(a, t, c, g, r, o)) return !1
                                        } else if (!r && (!t.has(c) || !B(t.get(c), g, !1, o)) && !D(a, t, c, g, !1, o)) return !1
                                    }
                                    return 0 === a.size
                                }
                                return !0
                            }

                            function H(t, e, r, n, i, o) {
                                var a = 0;
                                if (2 === o) {
                                    if (!F(t, e, r, i)) return !1
                                } else if (3 === o) {
                                    if (!K(t, e, r, i)) return !1
                                } else if (1 === o)
                                    for (; a < t.length; a++) {
                                        if (!l(t, a)) {
                                            if (l(e, a)) return !1;
                                            for (var s = Object.keys(t); a < s.length; a++) {
                                                var u = s[a];
                                                if (!l(e, u) || !B(t[u], e[u], r, i)) return !1
                                            }
                                            return s.length === Object.keys(e).length
                                        }
                                        if (!l(e, a) || !B(t[a], e[a], r, i)) return !1
                                    }
                                for (a = 0; a < n.length; a++) {
                                    var f = n[a];
                                    if (!B(t[f], e[f], r, i)) return !1
                                }
                                return !0
                            }
                            t.exports = {
                                isDeepEqual: function(t, e) {
                                    return B(t, e, false)
                                },
                                isDeepStrictEqual: function(t, e) {
                                    return B(t, e, true)
                                }
                            }
                        },
                        171: function(t, e, r) {
                            "use strict";
                            var n = r(627),
                                i = r(302),
                                o = i(n("String.prototype.indexOf"));
                            t.exports = function(t, e) {
                                var r = n(t, !!e);
                                return "function" === typeof r && o(t, ".prototype.") > -1 ? i(r) : r
                            }
                        },
                        302: function(t, e, r) {
                            "use strict";
                            var n = r(194),
                                i = r(627),
                                o = i("%Function.prototype.apply%"),
                                a = i("%Function.prototype.call%"),
                                s = i("%Reflect.apply%", !0) || n.call(a, o),
                                u = i("%Object.getOwnPropertyDescriptor%", !0),
                                f = i("%Object.defineProperty%", !0),
                                h = i("%Math.max%");
                            if (f) try {
                                f({}, "a", {
                                    value: 1
                                })
                            } catch (t) {
                                f = null
                            }
                            t.exports = function(t) {
                                var e = s(n, a, arguments);
                                if (u && f) {
                                    var r = u(e, "length");
                                    r.configurable && f(e, "length", {
                                        value: 1 + h(0, t.length - (arguments.length - 1))
                                    })
                                }
                                return e
                            };
                            var c = function() {
                                return s(n, o, arguments)
                            };
                            f ? f(t.exports, "apply", {
                                value: c
                            }) : t.exports.apply = c
                        },
                        217: function(t, e, r) {
                            "use strict";
                            var n = r(705),
                                i = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
                                o = Object.prototype.toString,
                                a = Array.prototype.concat,
                                s = Object.defineProperty,
                                u = s && function() {
                                    var t = {};
                                    try {
                                        for (var e in s(t, "x", {
                                                enumerable: !1,
                                                value: t
                                            }), t) return !1;
                                        return t.x === t
                                    } catch (t) {
                                        return !1
                                    }
                                }(),
                                f = function(t, e, r, n) {
                                    (!(e in t) || function(t) {
                                        return "function" === typeof t && "[object Function]" === o.call(t)
                                    }(n) && n()) && (u ? s(t, e, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: r,
                                        writable: !0
                                    }) : t[e] = r)
                                },
                                h = function(t, e) {
                                    var r = arguments.length > 2 ? arguments[2] : {},
                                        o = n(e);
                                    i && (o = a.call(o, Object.getOwnPropertySymbols(e)));
                                    for (var s = 0; s < o.length; s += 1) f(t, o[s], e[o[s]], r[o[s]])
                                };
                            h.supportsDescriptors = !!u, t.exports = h
                        },
                        203: function(t) {
                            "use strict";

                            function e(t, e) {
                                if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                                for (var r = Object(t), n = 1; n < arguments.length; n++) {
                                    var i = arguments[n];
                                    if (void 0 !== i && null !== i)
                                        for (var o = Object.keys(Object(i)), a = 0, s = o.length; a < s; a++) {
                                            var u = o[a],
                                                f = Object.getOwnPropertyDescriptor(i, u);
                                            void 0 !== f && f.enumerable && (r[u] = i[u])
                                        }
                                }
                                return r
                            }
                            t.exports = {
                                assign: e,
                                polyfill: function() {
                                    Object.assign || Object.defineProperty(Object, "assign", {
                                        enumerable: !1,
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                            }
                        },
                        981: function(t) {
                            var e = Object.prototype.hasOwnProperty,
                                r = Object.prototype.toString;
                            t.exports = function(t, n, i) {
                                if ("[object Function]" !== r.call(n)) throw new TypeError("iterator must be a function");
                                var o = t.length;
                                if (o === +o)
                                    for (var a = 0; a < o; a++) n.call(i, t[a], a, t);
                                else
                                    for (var s in t) e.call(t, s) && n.call(i, t[s], s, t)
                            }
                        },
                        861: function(t) {
                            "use strict";
                            var e = "Function.prototype.bind called on incompatible ",
                                r = Array.prototype.slice,
                                n = Object.prototype.toString,
                                i = "[object Function]";
                            t.exports = function(t) {
                                var o = this;
                                if ("function" !== typeof o || n.call(o) !== i) throw new TypeError(e + o);
                                for (var a, s = r.call(arguments, 1), u = function() {
                                        if (this instanceof a) {
                                            var e = o.apply(this, s.concat(r.call(arguments)));
                                            return Object(e) === e ? e : this
                                        }
                                        return o.apply(t, s.concat(r.call(arguments)))
                                    }, f = Math.max(0, o.length - s.length), h = [], c = 0; c < f; c++) h.push("$" + c);
                                if (a = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(u), o.prototype) {
                                    var l = function() {};
                                    l.prototype = o.prototype, a.prototype = new l, l.prototype = null
                                }
                                return a
                            }
                        },
                        194: function(t, e, r) {
                            "use strict";
                            var n = r(861);
                            t.exports = Function.prototype.bind || n
                        },
                        627: function(t, e, r) {
                            "use strict";
                            var n, i = SyntaxError,
                                o = Function,
                                a = TypeError,
                                s = function(t) {
                                    try {
                                        return o('"use strict"; return (' + t + ").constructor;")()
                                    } catch (t) {}
                                },
                                u = Object.getOwnPropertyDescriptor;
                            if (u) try {
                                u({}, "")
                            } catch (t) {
                                u = null
                            }
                            var f = function() {
                                    throw new a
                                },
                                h = u ? function() {
                                    try {
                                        return f
                                    } catch (t) {
                                        try {
                                            return u(arguments, "callee").get
                                        } catch (t) {
                                            return f
                                        }
                                    }
                                }() : f,
                                c = r(567)(),
                                l = Object.getPrototypeOf || function(t) {
                                    return t.__proto__
                                },
                                d = {},
                                p = "undefined" === typeof Uint8Array ? n : l(Uint8Array),
                                m = {
                                    "%AggregateError%": "undefined" === typeof AggregateError ? n : AggregateError,
                                    "%Array%": Array,
                                    "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
                                    "%ArrayIteratorPrototype%": c ? l([][Symbol.iterator]()) : n,
                                    "%AsyncFromSyncIteratorPrototype%": n,
                                    "%AsyncFunction%": d,
                                    "%AsyncGenerator%": d,
                                    "%AsyncGeneratorFunction%": d,
                                    "%AsyncIteratorPrototype%": d,
                                    "%Atomics%": "undefined" === typeof Atomics ? n : Atomics,
                                    "%BigInt%": "undefined" === typeof BigInt ? n : BigInt,
                                    "%Boolean%": Boolean,
                                    "%DataView%": "undefined" === typeof DataView ? n : DataView,
                                    "%Date%": Date,
                                    "%decodeURI%": decodeURI,
                                    "%decodeURIComponent%": decodeURIComponent,
                                    "%encodeURI%": encodeURI,
                                    "%encodeURIComponent%": encodeURIComponent,
                                    "%Error%": Error,
                                    "%eval%": eval,
                                    "%EvalError%": EvalError,
                                    "%Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
                                    "%Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
                                    "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? n : FinalizationRegistry,
                                    "%Function%": o,
                                    "%GeneratorFunction%": d,
                                    "%Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
                                    "%Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
                                    "%Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
                                    "%isFinite%": isFinite,
                                    "%isNaN%": isNaN,
                                    "%IteratorPrototype%": c ? l(l([][Symbol.iterator]())) : n,
                                    "%JSON%": "object" === typeof JSON ? JSON : n,
                                    "%Map%": "undefined" === typeof Map ? n : Map,
                                    "%MapIteratorPrototype%": "undefined" !== typeof Map && c ? l((new Map)[Symbol.iterator]()) : n,
                                    "%Math%": Math,
                                    "%Number%": Number,
                                    "%Object%": Object,
                                    "%parseFloat%": parseFloat,
                                    "%parseInt%": parseInt,
                                    "%Promise%": "undefined" === typeof Promise ? n : Promise,
                                    "%Proxy%": "undefined" === typeof Proxy ? n : Proxy,
                                    "%RangeError%": RangeError,
                                    "%ReferenceError%": ReferenceError,
                                    "%Reflect%": "undefined" === typeof Reflect ? n : Reflect,
                                    "%RegExp%": RegExp,
                                    "%Set%": "undefined" === typeof Set ? n : Set,
                                    "%SetIteratorPrototype%": "undefined" !== typeof Set && c ? l((new Set)[Symbol.iterator]()) : n,
                                    "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                                    "%String%": String,
                                    "%StringIteratorPrototype%": c ? l("" [Symbol.iterator]()) : n,
                                    "%Symbol%": c ? Symbol : n,
                                    "%SyntaxError%": i,
                                    "%ThrowTypeError%": h,
                                    "%TypedArray%": p,
                                    "%TypeError%": a,
                                    "%Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
                                    "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                                    "%Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
                                    "%Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
                                    "%URIError%": URIError,
                                    "%WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
                                    "%WeakRef%": "undefined" === typeof WeakRef ? n : WeakRef,
                                    "%WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet
                                },
                                b = function t(e) {
                                    var r;
                                    if ("%AsyncFunction%" === e) r = s("async function () {}");
                                    else if ("%GeneratorFunction%" === e) r = s("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === e) r = s("async function* () {}");
                                    else if ("%AsyncGenerator%" === e) {
                                        var n = t("%AsyncGeneratorFunction%");
                                        n && (r = n.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === e) {
                                        var i = t("%AsyncGenerator%");
                                        i && (r = l(i.prototype))
                                    }
                                    return m[e] = r, r
                                },
                                g = {
                                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                    "%ArrayPrototype%": ["Array", "prototype"],
                                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                    "%BooleanPrototype%": ["Boolean", "prototype"],
                                    "%DataViewPrototype%": ["DataView", "prototype"],
                                    "%DatePrototype%": ["Date", "prototype"],
                                    "%ErrorPrototype%": ["Error", "prototype"],
                                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                    "%FunctionPrototype%": ["Function", "prototype"],
                                    "%Generator%": ["GeneratorFunction", "prototype"],
                                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                    "%JSONParse%": ["JSON", "parse"],
                                    "%JSONStringify%": ["JSON", "stringify"],
                                    "%MapPrototype%": ["Map", "prototype"],
                                    "%NumberPrototype%": ["Number", "prototype"],
                                    "%ObjectPrototype%": ["Object", "prototype"],
                                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                    "%PromisePrototype%": ["Promise", "prototype"],
                                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                    "%Promise_all%": ["Promise", "all"],
                                    "%Promise_reject%": ["Promise", "reject"],
                                    "%Promise_resolve%": ["Promise", "resolve"],
                                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                    "%RegExpPrototype%": ["RegExp", "prototype"],
                                    "%SetPrototype%": ["Set", "prototype"],
                                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                    "%StringPrototype%": ["String", "prototype"],
                                    "%SymbolPrototype%": ["Symbol", "prototype"],
                                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                    "%URIErrorPrototype%": ["URIError", "prototype"],
                                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                },
                                y = r(194),
                                v = r(646),
                                w = y.call(Function.call, Array.prototype.concat),
                                M = y.call(Function.apply, Array.prototype.splice),
                                S = y.call(Function.call, String.prototype.replace),
                                x = y.call(Function.call, String.prototype.slice),
                                _ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                A = /\\(\\)?/g,
                                E = function(t) {
                                    var e = x(t, 0, 1),
                                        r = x(t, -1);
                                    if ("%" === e && "%" !== r) throw new i("invalid intrinsic syntax, expected closing `%`");
                                    if ("%" === r && "%" !== e) throw new i("invalid intrinsic syntax, expected opening `%`");
                                    var n = [];
                                    return S(t, _, (function(t, e, r, i) {
                                        n[n.length] = r ? S(i, A, "$1") : e || t
                                    })), n
                                },
                                k = function(t, e) {
                                    var r, n = t;
                                    if (v(g, n) && (n = "%" + (r = g[n])[0] + "%"), v(m, n)) {
                                        var o = m[n];
                                        if (o === d && (o = b(n)), "undefined" === typeof o && !e) throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
                                        return {
                                            alias: r,
                                            name: n,
                                            value: o
                                        }
                                    }
                                    throw new i("intrinsic " + t + " does not exist!")
                                };
                            t.exports = function(t, e) {
                                if ("string" !== typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
                                if (arguments.length > 1 && "boolean" !== typeof e) throw new a('"allowMissing" argument must be a boolean');
                                var r = E(t),
                                    n = r.length > 0 ? r[0] : "",
                                    o = k("%" + n + "%", e),
                                    s = o.name,
                                    f = o.value,
                                    h = !1,
                                    c = o.alias;
                                c && (n = c[0], M(r, w([0, 1], c)));
                                for (var l = 1, d = !0; l < r.length; l += 1) {
                                    var p = r[l],
                                        b = x(p, 0, 1),
                                        g = x(p, -1);
                                    if (('"' === b || "'" === b || "`" === b || '"' === g || "'" === g || "`" === g) && b !== g) throw new i("property names with quotes must have matching quotes");
                                    if ("constructor" !== p && d || (h = !0), v(m, s = "%" + (n += "." + p) + "%")) f = m[s];
                                    else if (null != f) {
                                        if (!(p in f)) {
                                            if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
                                            return
                                        }
                                        if (u && l + 1 >= r.length) {
                                            var y = u(f, p);
                                            f = (d = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : f[p]
                                        } else d = v(f, p), f = f[p];
                                        d && !h && (m[s] = f)
                                    }
                                }
                                return f
                            }
                        },
                        567: function(t, e, r) {
                            "use strict";
                            var n = "undefined" !== typeof Symbol && Symbol,
                                i = r(186);
                            t.exports = function() {
                                return "function" === typeof n && ("function" === typeof Symbol && ("symbol" === typeof n("foo") && ("symbol" === typeof Symbol("bar") && i())))
                            }
                        },
                        186: function(t) {
                            "use strict";
                            t.exports = function() {
                                if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1;
                                if ("symbol" === typeof Symbol.iterator) return !0;
                                var t = {},
                                    e = Symbol("test"),
                                    r = Object(e);
                                if ("string" === typeof e) return !1;
                                if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                                if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                                for (e in t[e] = 42, t) return !1;
                                if ("function" === typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                                if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                                var n = Object.getOwnPropertySymbols(t);
                                if (1 !== n.length || n[0] !== e) return !1;
                                if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                                if ("function" === typeof Object.getOwnPropertyDescriptor) {
                                    var i = Object.getOwnPropertyDescriptor(t, e);
                                    if (42 !== i.value || !0 !== i.enumerable) return !1
                                }
                                return !0
                            }
                        },
                        646: function(t, e, r) {
                            "use strict";
                            var n = r(194);
                            t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
                        },
                        140: function(t) {
                            "function" === typeof Object.create ? t.exports = function(t, e) {
                                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : t.exports = function(t, e) {
                                if (e) {
                                    t.super_ = e;
                                    var r = function() {};
                                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                                }
                            }
                        },
                        749: function(t) {
                            "use strict";
                            var e = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag,
                                r = Object.prototype.toString,
                                n = function(t) {
                                    return !(e && t && "object" === typeof t && Symbol.toStringTag in t) && "[object Arguments]" === r.call(t)
                                },
                                i = function(t) {
                                    return !!n(t) || null !== t && "object" === typeof t && "number" === typeof t.length && t.length >= 0 && "[object Array]" !== r.call(t) && "[object Function]" === r.call(t.callee)
                                },
                                o = function() {
                                    return n(arguments)
                                }();
                            n.isLegacyArguments = i, t.exports = o ? n : i
                        },
                        611: function(t) {
                            "use strict";
                            var e = Object.prototype.toString,
                                r = Function.prototype.toString,
                                n = /^\s*(?:function)?\*/,
                                i = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag,
                                o = Object.getPrototypeOf,
                                a = function() {
                                    if (!i) return !1;
                                    try {
                                        return Function("return function*() {}")()
                                    } catch (t) {}
                                }(),
                                s = a ? o(a) : {};
                            t.exports = function(t) {
                                return "function" === typeof t && (!!n.test(r.call(t)) || (i ? o(t) === s : "[object GeneratorFunction]" === e.call(t)))
                            }
                        },
                        562: function(t) {
                            "use strict";
                            t.exports = function(t) {
                                return t !== t
                            }
                        },
                        252: function(t, e, r) {
                            "use strict";
                            var n = r(302),
                                i = r(217),
                                o = r(562),
                                a = r(917),
                                s = r(828),
                                u = n(a(), Number);
                            i(u, {
                                getPolyfill: a,
                                implementation: o,
                                shim: s
                            }), t.exports = u
                        },
                        917: function(t, e, r) {
                            "use strict";
                            var n = r(562);
                            t.exports = function() {
                                return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n
                            }
                        },
                        828: function(t, e, r) {
                            "use strict";
                            var n = r(217),
                                i = r(917);
                            t.exports = function() {
                                var t = i();
                                return n(Number, {
                                    isNaN: t
                                }, {
                                    isNaN: function() {
                                        return Number.isNaN !== t
                                    }
                                }), t
                            }
                        },
                        387: function(t, e, n) {
                            "use strict";
                            var i = n(981),
                                o = n(382),
                                a = n(171),
                                s = a("Object.prototype.toString"),
                                u = n(567)() && "symbol" === typeof Symbol.toStringTag,
                                f = o(),
                                h = a("Array.prototype.indexOf", !0) || function(t, e) {
                                    for (var r = 0; r < t.length; r += 1)
                                        if (t[r] === e) return r;
                                    return -1
                                },
                                c = a("String.prototype.slice"),
                                l = {},
                                d = n(30),
                                p = Object.getPrototypeOf;
                            u && d && p && i(f, (function(t) {
                                var e = new r.g[t];
                                if (!(Symbol.toStringTag in e)) throw new EvalError("this engine has support for Symbol.toStringTag, but " + t + " does not have the property! Please report this.");
                                var n = p(e),
                                    i = d(n, Symbol.toStringTag);
                                if (!i) {
                                    var o = p(n);
                                    i = d(o, Symbol.toStringTag)
                                }
                                l[t] = i.get
                            }));
                            t.exports = function(t) {
                                if (!t || "object" !== typeof t) return !1;
                                if (!u) {
                                    var e = c(s(t), 8, -1);
                                    return h(f, e) > -1
                                }
                                return !!d && function(t) {
                                    var e = !1;
                                    return i(l, (function(r, n) {
                                        if (!e) try {
                                            e = r.call(t) === n
                                        } catch (t) {}
                                    })), e
                                }(t)
                            }
                        },
                        113: function(t) {
                            "use strict";
                            var e = function(t) {
                                return t !== t
                            };
                            t.exports = function(t, r) {
                                return 0 === t && 0 === r ? 1 / t === 1 / r : t === r || !(!e(t) || !e(r))
                            }
                        },
                        237: function(t, e, r) {
                            "use strict";
                            var n;
                            if (!Object.keys) {
                                var i = Object.prototype.hasOwnProperty,
                                    o = Object.prototype.toString,
                                    a = r(857),
                                    s = Object.prototype.propertyIsEnumerable,
                                    u = !s.call({
                                        toString: null
                                    }, "toString"),
                                    f = s.call((function() {}), "prototype"),
                                    h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                                    c = function(t) {
                                        var e = t.constructor;
                                        return e && e.prototype === t
                                    },
                                    l = {
                                        $applicationCache: !0,
                                        $console: !0,
                                        $external: !0,
                                        $frame: !0,
                                        $frameElement: !0,
                                        $frames: !0,
                                        $innerHeight: !0,
                                        $innerWidth: !0,
                                        $onmozfullscreenchange: !0,
                                        $onmozfullscreenerror: !0,
                                        $outerHeight: !0,
                                        $outerWidth: !0,
                                        $pageXOffset: !0,
                                        $pageYOffset: !0,
                                        $parent: !0,
                                        $scrollLeft: !0,
                                        $scrollTop: !0,
                                        $scrollX: !0,
                                        $scrollY: !0,
                                        $self: !0,
                                        $webkitIndexedDB: !0,
                                        $webkitStorageInfo: !0,
                                        $window: !0
                                    },
                                    d = function() {
                                        if ("undefined" === typeof window) return !1;
                                        for (var t in window) try {
                                            if (!l["$" + t] && i.call(window, t) && null !== window[t] && "object" === typeof window[t]) try {
                                                c(window[t])
                                            } catch (t) {
                                                return !0
                                            }
                                        } catch (t) {
                                            return !0
                                        }
                                        return !1
                                    }(),
                                    p = function(t) {
                                        if ("undefined" === typeof window || !d) return c(t);
                                        try {
                                            return c(t)
                                        } catch (t) {
                                            return !1
                                        }
                                    };
                                n = function(t) {
                                    var e = null !== t && "object" === typeof t,
                                        r = "[object Function]" === o.call(t),
                                        n = a(t),
                                        s = e && "[object String]" === o.call(t),
                                        c = [];
                                    if (!e && !r && !n) throw new TypeError("Object.keys called on a non-object");
                                    var l = f && r;
                                    if (s && t.length > 0 && !i.call(t, 0))
                                        for (var d = 0; d < t.length; ++d) c.push(String(d));
                                    if (n && t.length > 0)
                                        for (var m = 0; m < t.length; ++m) c.push(String(m));
                                    else
                                        for (var b in t) l && "prototype" === b || !i.call(t, b) || c.push(String(b));
                                    if (u)
                                        for (var g = p(t), y = 0; y < h.length; ++y) g && "constructor" === h[y] || !i.call(t, h[y]) || c.push(h[y]);
                                    return c
                                }
                            }
                            t.exports = n
                        },
                        705: function(t, e, r) {
                            "use strict";
                            var n = Array.prototype.slice,
                                i = r(857),
                                o = Object.keys,
                                a = o ? function(t) {
                                    return o(t)
                                } : r(237),
                                s = Object.keys;
                            a.shim = function() {
                                if (Object.keys) {
                                    var t = function() {
                                        var t = Object.keys(arguments);
                                        return t && t.length === arguments.length
                                    }(1, 2);
                                    t || (Object.keys = function(t) {
                                        return i(t) ? s(n.call(t)) : s(t)
                                    })
                                } else Object.keys = a;
                                return Object.keys || a
                            }, t.exports = a
                        },
                        857: function(t) {
                            "use strict";
                            var e = Object.prototype.toString;
                            t.exports = function(t) {
                                var r = e.call(t),
                                    n = "[object Arguments]" === r;
                                return n || (n = "[object Array]" !== r && null !== t && "object" === typeof t && "number" === typeof t.length && t.length >= 0 && "[object Function]" === e.call(t.callee)), n
                            }
                        },
                        913: function(t) {
                            t.exports = function(t) {
                                return t instanceof i
                            }
                        },
                        989: function(t, e, r) {
                            "use strict";
                            var n = r(749),
                                i = r(611),
                                o = r(728),
                                a = r(387);

                            function s(t) {
                                return t.call.bind(t)
                            }
                            var u = "undefined" !== typeof BigInt,
                                f = "undefined" !== typeof Symbol,
                                h = s(Object.prototype.toString),
                                c = s(Number.prototype.valueOf),
                                l = s(String.prototype.valueOf),
                                d = s(Boolean.prototype.valueOf);
                            if (u) var p = s(BigInt.prototype.valueOf);
                            if (f) var m = s(Symbol.prototype.valueOf);

                            function b(t, e) {
                                if ("object" !== typeof t) return !1;
                                try {
                                    return e(t), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function g(t) {
                                return "[object Map]" === h(t)
                            }

                            function y(t) {
                                return "[object Set]" === h(t)
                            }

                            function v(t) {
                                return "[object WeakMap]" === h(t)
                            }

                            function w(t) {
                                return "[object WeakSet]" === h(t)
                            }

                            function M(t) {
                                return "[object ArrayBuffer]" === h(t)
                            }

                            function S(t) {
                                return "undefined" !== typeof ArrayBuffer && (M.working ? M(t) : t instanceof ArrayBuffer)
                            }

                            function x(t) {
                                return "[object DataView]" === h(t)
                            }

                            function _(t) {
                                return "undefined" !== typeof DataView && (x.working ? x(t) : t instanceof DataView)
                            }
                            e.isArgumentsObject = n, e.isGeneratorFunction = i, e.isTypedArray = a, e.isPromise = function(t) {
                                return "undefined" !== typeof Promise && t instanceof Promise || null !== t && "object" === typeof t && "function" === typeof t.then && "function" === typeof t.catch
                            }, e.isArrayBufferView = function(t) {
                                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : a(t) || _(t)
                            }, e.isUint8Array = function(t) {
                                return "Uint8Array" === o(t)
                            }, e.isUint8ClampedArray = function(t) {
                                return "Uint8ClampedArray" === o(t)
                            }, e.isUint16Array = function(t) {
                                return "Uint16Array" === o(t)
                            }, e.isUint32Array = function(t) {
                                return "Uint32Array" === o(t)
                            }, e.isInt8Array = function(t) {
                                return "Int8Array" === o(t)
                            }, e.isInt16Array = function(t) {
                                return "Int16Array" === o(t)
                            }, e.isInt32Array = function(t) {
                                return "Int32Array" === o(t)
                            }, e.isFloat32Array = function(t) {
                                return "Float32Array" === o(t)
                            }, e.isFloat64Array = function(t) {
                                return "Float64Array" === o(t)
                            }, e.isBigInt64Array = function(t) {
                                return "BigInt64Array" === o(t)
                            }, e.isBigUint64Array = function(t) {
                                return "BigUint64Array" === o(t)
                            }, g.working = "undefined" !== typeof Map && g(new Map), e.isMap = function(t) {
                                return "undefined" !== typeof Map && (g.working ? g(t) : t instanceof Map)
                            }, y.working = "undefined" !== typeof Set && y(new Set), e.isSet = function(t) {
                                return "undefined" !== typeof Set && (y.working ? y(t) : t instanceof Set)
                            }, v.working = "undefined" !== typeof WeakMap && v(new WeakMap), e.isWeakMap = function(t) {
                                return "undefined" !== typeof WeakMap && (v.working ? v(t) : t instanceof WeakMap)
                            }, w.working = "undefined" !== typeof WeakSet && w(new WeakSet), e.isWeakSet = function(t) {
                                return w(t)
                            }, M.working = "undefined" !== typeof ArrayBuffer && M(new ArrayBuffer), e.isArrayBuffer = S, x.working = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView && x(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = _;
                            var A = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

                            function E(t) {
                                return "[object SharedArrayBuffer]" === h(t)
                            }

                            function k(t) {
                                return "undefined" !== typeof A && ("undefined" === typeof E.working && (E.working = E(new A)), E.working ? E(t) : t instanceof A)
                            }

                            function R(t) {
                                return b(t, c)
                            }

                            function O(t) {
                                return b(t, l)
                            }

                            function P(t) {
                                return b(t, d)
                            }

                            function I(t) {
                                return u && b(t, p)
                            }

                            function T(t) {
                                return f && b(t, m)
                            }
                            e.isSharedArrayBuffer = k, e.isAsyncFunction = function(t) {
                                return "[object AsyncFunction]" === h(t)
                            }, e.isMapIterator = function(t) {
                                return "[object Map Iterator]" === h(t)
                            }, e.isSetIterator = function(t) {
                                return "[object Set Iterator]" === h(t)
                            }, e.isGeneratorObject = function(t) {
                                return "[object Generator]" === h(t)
                            }, e.isWebAssemblyCompiledModule = function(t) {
                                return "[object WebAssembly.Module]" === h(t)
                            }, e.isNumberObject = R, e.isStringObject = O, e.isBooleanObject = P, e.isBigIntObject = I, e.isSymbolObject = T, e.isBoxedPrimitive = function(t) {
                                return R(t) || O(t) || P(t) || I(t) || T(t)
                            }, e.isAnyArrayBuffer = function(t) {
                                return "undefined" !== typeof Uint8Array && (S(t) || k(t))
                            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach((function(t) {
                                Object.defineProperty(e, t, {
                                    enumerable: !1,
                                    value: function() {
                                        throw new Error(t + " is not supported in userland")
                                    }
                                })
                            }))
                        },
                        467: function(t, e, r) {
                            var i = Object.getOwnPropertyDescriptors || function(t) {
                                    for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
                                    return r
                                },
                                o = /%[sdj%]/g;
                            e.format = function(t) {
                                if (!v(t)) {
                                    for (var e = [], r = 0; r < arguments.length; r++) e.push(f(arguments[r]));
                                    return e.join(" ")
                                }
                                r = 1;
                                for (var n = arguments, i = n.length, a = String(t).replace(o, (function(t) {
                                        if ("%%" === t) return "%";
                                        if (r >= i) return t;
                                        switch (t) {
                                            case "%s":
                                                return String(n[r++]);
                                            case "%d":
                                                return Number(n[r++]);
                                            case "%j":
                                                try {
                                                    return JSON.stringify(n[r++])
                                                } catch (t) {
                                                    return "[Circular]"
                                                }
                                            default:
                                                return t
                                        }
                                    })), s = n[r]; r < i; s = n[++r]) g(s) || !S(s) ? a += " " + s : a += " " + f(s);
                                return a
                            }, e.deprecate = function(t, r) {
                                if ("undefined" !== typeof n && !0 === n.noDeprecation) return t;
                                if ("undefined" === typeof n) return function() {
                                    return e.deprecate(t, r).apply(this, arguments)
                                };
                                var i = !1;
                                return function() {
                                    if (!i) {
                                        if (n.throwDeprecation) throw new Error(r);
                                        n.traceDeprecation ? console.trace(r) : console.error(r), i = !0
                                    }
                                    return t.apply(this, arguments)
                                }
                            };
                            var a = {},
                                s = /^$/;
                            if (n.env.NODE_DEBUG) {
                                var u = n.env.NODE_DEBUG;
                                u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + u + "$", "i")
                            }

                            function f(t, r) {
                                var n = {
                                    seen: [],
                                    stylize: c
                                };
                                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), b(r) ? n.showHidden = r : r && e._extend(n, r), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = h), l(n, t, n.depth)
                            }

                            function h(t, e) {
                                var r = f.styles[e];
                                return r ? "\x1b[" + f.colors[r][0] + "m" + t + "\x1b[" + f.colors[r][1] + "m" : t
                            }

                            function c(t, e) {
                                return t
                            }

                            function l(t, r, n) {
                                if (t.customInspect && r && A(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                                    var i = r.inspect(n, t);
                                    return v(i) || (i = l(t, i, n)), i
                                }
                                var o = function(t, e) {
                                    if (w(e)) return t.stylize("undefined", "undefined");
                                    if (v(e)) {
                                        var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                        return t.stylize(r, "string")
                                    }
                                    if (y(e)) return t.stylize("" + e, "number");
                                    if (b(e)) return t.stylize("" + e, "boolean");
                                    if (g(e)) return t.stylize("null", "null")
                                }(t, r);
                                if (o) return o;
                                var a = Object.keys(r),
                                    s = function(t) {
                                        var e = {};
                                        return t.forEach((function(t, r) {
                                            e[t] = !0
                                        })), e
                                    }(a);
                                if (t.showHidden && (a = Object.getOwnPropertyNames(r)), _(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return d(r);
                                if (0 === a.length) {
                                    if (A(r)) {
                                        var u = r.name ? ": " + r.name : "";
                                        return t.stylize("[Function" + u + "]", "special")
                                    }
                                    if (M(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                                    if (x(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                                    if (_(r)) return d(r)
                                }
                                var f, h = "",
                                    c = !1,
                                    S = ["{", "}"];
                                (m(r) && (c = !0, S = ["[", "]"]), A(r)) && (h = " [Function" + (r.name ? ": " + r.name : "") + "]");
                                return M(r) && (h = " " + RegExp.prototype.toString.call(r)), x(r) && (h = " " + Date.prototype.toUTCString.call(r)), _(r) && (h = " " + d(r)), 0 !== a.length || c && 0 != r.length ? n < 0 ? M(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r), f = c ? function(t, e, r, n, i) {
                                    for (var o = [], a = 0, s = e.length; a < s; ++a) P(e, String(a)) ? o.push(p(t, e, r, n, String(a), !0)) : o.push("");
                                    return i.forEach((function(i) {
                                        i.match(/^\d+$/) || o.push(p(t, e, r, n, i, !0))
                                    })), o
                                }(t, r, n, s, a) : a.map((function(e) {
                                    return p(t, r, n, s, e, c)
                                })), t.seen.pop(), function(t, e, r) {
                                    var n = t.reduce((function(t, e) {
                                        return e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                                    }), 0);
                                    if (n > 60) return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];
                                    return r[0] + e + " " + t.join(", ") + " " + r[1]
                                }(f, h, S)) : S[0] + h + S[1]
                            }

                            function d(t) {
                                return "[" + Error.prototype.toString.call(t) + "]"
                            }

                            function p(t, e, r, n, i, o) {
                                var a, s, u;
                                if ((u = Object.getOwnPropertyDescriptor(e, i) || {
                                        value: e[i]
                                    }).get ? s = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (s = t.stylize("[Setter]", "special")), P(n, i) || (a = "[" + i + "]"), s || (t.seen.indexOf(u.value) < 0 ? (s = g(r) ? l(t, u.value, null) : l(t, u.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map((function(t) {
                                        return "  " + t
                                    })).join("\n").substr(2) : "\n" + s.split("\n").map((function(t) {
                                        return "   " + t
                                    })).join("\n")) : s = t.stylize("[Circular]", "special")), w(a)) {
                                    if (o && i.match(/^\d+$/)) return s;
                                    (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"))
                                }
                                return a + ": " + s
                            }

                            function m(t) {
                                return Array.isArray(t)
                            }

                            function b(t) {
                                return "boolean" === typeof t
                            }

                            function g(t) {
                                return null === t
                            }

                            function y(t) {
                                return "number" === typeof t
                            }

                            function v(t) {
                                return "string" === typeof t
                            }

                            function w(t) {
                                return void 0 === t
                            }

                            function M(t) {
                                return S(t) && "[object RegExp]" === E(t)
                            }

                            function S(t) {
                                return "object" === typeof t && null !== t
                            }

                            function x(t) {
                                return S(t) && "[object Date]" === E(t)
                            }

                            function _(t) {
                                return S(t) && ("[object Error]" === E(t) || t instanceof Error)
                            }

                            function A(t) {
                                return "function" === typeof t
                            }

                            function E(t) {
                                return Object.prototype.toString.call(t)
                            }

                            function k(t) {
                                return t < 10 ? "0" + t.toString(10) : t.toString(10)
                            }
                            e.debuglog = function(t) {
                                if (t = t.toUpperCase(), !a[t])
                                    if (s.test(t)) {
                                        var r = n.pid;
                                        a[t] = function() {
                                            var n = e.format.apply(e, arguments);
                                            console.error("%s %d: %s", t, r, n)
                                        }
                                    } else a[t] = function() {};
                                return a[t]
                            }, e.inspect = f, f.colors = {
                                bold: [1, 22],
                                italic: [3, 23],
                                underline: [4, 24],
                                inverse: [7, 27],
                                white: [37, 39],
                                grey: [90, 39],
                                black: [30, 39],
                                blue: [34, 39],
                                cyan: [36, 39],
                                green: [32, 39],
                                magenta: [35, 39],
                                red: [31, 39],
                                yellow: [33, 39]
                            }, f.styles = {
                                special: "cyan",
                                number: "yellow",
                                boolean: "yellow",
                                undefined: "grey",
                                null: "bold",
                                string: "green",
                                date: "magenta",
                                regexp: "red"
                            }, e.types = r(989), e.isArray = m, e.isBoolean = b, e.isNull = g, e.isNullOrUndefined = function(t) {
                                return null == t
                            }, e.isNumber = y, e.isString = v, e.isSymbol = function(t) {
                                return "symbol" === typeof t
                            }, e.isUndefined = w, e.isRegExp = M, e.types.isRegExp = M, e.isObject = S, e.isDate = x, e.types.isDate = x, e.isError = _, e.types.isNativeError = _, e.isFunction = A, e.isPrimitive = function(t) {
                                return null === t || "boolean" === typeof t || "number" === typeof t || "string" === typeof t || "symbol" === typeof t || "undefined" === typeof t
                            }, e.isBuffer = r(913);
                            var R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                            function O() {
                                var t = new Date,
                                    e = [k(t.getHours()), k(t.getMinutes()), k(t.getSeconds())].join(":");
                                return [t.getDate(), R[t.getMonth()], e].join(" ")
                            }

                            function P(t, e) {
                                return Object.prototype.hasOwnProperty.call(t, e)
                            }
                            e.log = function() {
                                console.log("%s - %s", O(), e.format.apply(e, arguments))
                            }, e.inherits = r(140), e._extend = function(t, e) {
                                if (!e || !S(e)) return t;
                                for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
                                return t
                            };
                            var I = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                            function T(t, e) {
                                if (!t) {
                                    var r = new Error("Promise was rejected with a falsy value");
                                    r.reason = t, t = r
                                }
                                return e(t)
                            }
                            e.promisify = function(t) {
                                if ("function" !== typeof t) throw new TypeError('The "original" argument must be of type Function');
                                if (I && t[I]) {
                                    var e;
                                    if ("function" !== typeof(e = t[I])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                                    return Object.defineProperty(e, I, {
                                        value: e,
                                        enumerable: !1,
                                        writable: !1,
                                        configurable: !0
                                    }), e
                                }

                                function e() {
                                    for (var e, r, n = new Promise((function(t, n) {
                                            e = t, r = n
                                        })), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
                                    i.push((function(t, n) {
                                        t ? r(t) : e(n)
                                    }));
                                    try {
                                        t.apply(this, i)
                                    } catch (t) {
                                        r(t)
                                    }
                                    return n
                                }
                                return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), I && Object.defineProperty(e, I, {
                                    value: e,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                }), Object.defineProperties(e, i(t))
                            }, e.promisify.custom = I, e.callbackify = function(t) {
                                if ("function" !== typeof t) throw new TypeError('The "original" argument must be of type Function');

                                function e() {
                                    for (var e = [], r = 0; r < arguments.length; r++) e.push(arguments[r]);
                                    var i = e.pop();
                                    if ("function" !== typeof i) throw new TypeError("The last argument must be of type Function");
                                    var o = this,
                                        a = function() {
                                            return i.apply(o, arguments)
                                        };
                                    t.apply(this, e).then((function(t) {
                                        n.nextTick(a.bind(null, null, t))
                                    }), (function(t) {
                                        n.nextTick(T.bind(null, t, a))
                                    }))
                                }
                                return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, i(t)), e
                            }
                        },
                        728: function(t, e, n) {
                            "use strict";
                            var i = n(981),
                                o = n(382),
                                a = n(171),
                                s = a("Object.prototype.toString"),
                                u = n(567)() && "symbol" === typeof Symbol.toStringTag,
                                f = o(),
                                h = a("String.prototype.slice"),
                                c = {},
                                l = n(30),
                                d = Object.getPrototypeOf;
                            u && l && d && i(f, (function(t) {
                                if ("function" === typeof r.g[t]) {
                                    var e = new r.g[t];
                                    if (!(Symbol.toStringTag in e)) throw new EvalError("this engine has support for Symbol.toStringTag, but " + t + " does not have the property! Please report this.");
                                    var n = d(e),
                                        i = l(n, Symbol.toStringTag);
                                    if (!i) {
                                        var o = d(n);
                                        i = l(o, Symbol.toStringTag)
                                    }
                                    c[t] = i.get
                                }
                            }));
                            var p = n(387);
                            t.exports = function(t) {
                                return !!p(t) && (u ? function(t) {
                                    var e = !1;
                                    return i(c, (function(r, n) {
                                        if (!e) try {
                                            var i = r.call(t);
                                            i === n && (e = i)
                                        } catch (t) {}
                                    })), e
                                }(t) : h(s(t), 8, -1))
                            }
                        },
                        382: function(t, e, n) {
                            "use strict";
                            var i = n(997);
                            t.exports = function() {
                                return i(["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], (function(t) {
                                    return "function" === typeof r.g[t]
                                }))
                            }
                        },
                        30: function(t, e, r) {
                            "use strict";
                            var n = r(627)("%Object.getOwnPropertyDescriptor%", !0);
                            if (n) try {
                                n([], "length")
                            } catch (t) {
                                n = null
                            }
                            t.exports = n
                        }
                    },
                    o = {};

                function a(t) {
                    var r = o[t];
                    if (void 0 !== r) return r.exports;
                    var n = o[t] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        e[t](n, n.exports, a), i = !1
                    } finally {
                        i && delete o[t]
                    }
                    return n.exports
                }
                a.ab = "//";
                var s = a(468);
                t.exports = s
            }()
        },
        79681: function(t, e, r) {
            var n = r(83454);
            ! function() {
                var e = {
                        140: function(t) {
                            "function" === typeof Object.create ? t.exports = function(t, e) {
                                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : t.exports = function(t, e) {
                                if (e) {
                                    t.super_ = e;
                                    var r = function() {};
                                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                                }
                            }
                        },
                        349: function(t) {
                            "use strict";
                            const e = {};

                            function r(t, r, n) {
                                function i(t, e, n) {
                                    return "string" === typeof r ? r : r(t, e, n)
                                }
                                n || (n = Error);
                                class o extends n {
                                    constructor(t, e, r) {
                                        super(i(t, e, r))
                                    }
                                }
                                o.prototype.name = n.name, o.prototype.code = t, e[t] = o
                            }

                            function n(t, e) {
                                if (Array.isArray(t)) {
                                    const r = t.length;
                                    return t = t.map((t => String(t))), r > 2 ? `one of ${e} ${t.slice(0,r-1).join(", ")}, or ` + t[r - 1] : 2 === r ? `one of ${e} ${t[0]} or ${t[1]}` : `of ${e} ${t[0]}`
                                }
                                return `of ${e} ${String(t)}`
                            }
                            r("ERR_INVALID_OPT_VALUE", (function(t, e) {
                                return 'The value "' + e + '" is invalid for option "' + t + '"'
                            }), TypeError), r("ERR_INVALID_ARG_TYPE", (function(t, e, r) {
                                let i, o;
                                if ("string" === typeof e && function(t, e, r) {
                                        return t.substr(!r || r < 0 ? 0 : +r, e.length) === e
                                    }(e, "not ") ? (i = "must not be", e = e.replace(/^not /, "")) : i = "must be", function(t, e, r) {
                                        return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e
                                    }(t, " argument")) o = `The ${t} ${i} ${n(e,"type")}`;
                                else {
                                    const r = function(t, e, r) {
                                        return "number" !== typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                                    }(t, ".") ? "property" : "argument";
                                    o = `The "${t}" ${r} ${i} ${n(e,"type")}`
                                }
                                return o += ". Received type " + typeof r, o
                            }), TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", (function(t) {
                                return "The " + t + " method is not implemented"
                            })), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", (function(t) {
                                return "Cannot call " + t + " after a stream was destroyed"
                            })), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", (function(t) {
                                return "Unknown encoding: " + t
                            }), TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.q = e
                        },
                        716: function(t, e, r) {
                            "use strict";
                            var i = Object.keys || function(t) {
                                var e = [];
                                for (var r in t) e.push(r);
                                return e
                            };
                            t.exports = h;
                            var o = r(787),
                                a = r(513);
                            r(140)(h, o);
                            for (var s = i(a.prototype), u = 0; u < s.length; u++) {
                                var f = s[u];
                                h.prototype[f] || (h.prototype[f] = a.prototype[f])
                            }

                            function h(t) {
                                if (!(this instanceof h)) return new h(t);
                                o.call(this, t), a.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)))
                            }

                            function c() {
                                this._writableState.ended || n.nextTick(l, this)
                            }

                            function l(t) {
                                t.end()
                            }
                            Object.defineProperty(h.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(h.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(h.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(h.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                                },
                                set: function(t) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
                                }
                            })
                        },
                        788: function(t, e, r) {
                            "use strict";
                            t.exports = i;
                            var n = r(551);

                            function i(t) {
                                if (!(this instanceof i)) return new i(t);
                                n.call(this, t)
                            }
                            r(140)(i, n), i.prototype._transform = function(t, e, r) {
                                r(null, t)
                            }
                        },
                        787: function(t, e, i) {
                            "use strict";
                            var o;
                            t.exports = E, E.ReadableState = A;
                            i(361).EventEmitter;
                            var a = function(t, e) {
                                    return t.listeners(e).length
                                },
                                s = i(455),
                                u = i(300).Buffer,
                                f = r.g.Uint8Array || function() {};
                            var h, c = i(837);
                            h = c && c.debuglog ? c.debuglog("stream") : function() {};
                            var l, d, p, m = i(41),
                                b = i(289),
                                g = i(483).getHighWaterMark,
                                y = i(349).q,
                                v = y.ERR_INVALID_ARG_TYPE,
                                w = y.ERR_STREAM_PUSH_AFTER_EOF,
                                M = y.ERR_METHOD_NOT_IMPLEMENTED,
                                S = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            i(140)(E, s);
                            var x = b.errorOrDestroy,
                                _ = ["error", "close", "destroy", "pause", "resume"];

                            function A(t, e, r) {
                                o = o || i(716), t = t || {}, "boolean" !== typeof r && (r = e instanceof o), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = g(this, t, "readableHighWaterMark", r), this.buffer = new m, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (l || (l = i(862).s), this.decoder = new l(t.encoding), this.encoding = t.encoding)
                            }

                            function E(t) {
                                if (o = o || i(716), !(this instanceof E)) return new E(t);
                                var e = this instanceof o;
                                this._readableState = new A(t, this, e), this.readable = !0, t && ("function" === typeof t.read && (this._read = t.read), "function" === typeof t.destroy && (this._destroy = t.destroy)), s.call(this)
                            }

                            function k(t, e, r, n, i) {
                                h("readableAddChunk", e);
                                var o, a = t._readableState;
                                if (null === e) a.reading = !1,
                                    function(t, e) {
                                        if (h("onEofChunk"), e.ended) return;
                                        if (e.decoder) {
                                            var r = e.decoder.end();
                                            r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
                                        }
                                        e.ended = !0, e.sync ? I(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, T(t)))
                                    }(t, a);
                                else if (i || (o = function(t, e) {
                                        var r;
                                        (function(t) {
                                            return u.isBuffer(t) || t instanceof f
                                        })(e) || "string" === typeof e || void 0 === e || t.objectMode || (r = new v("chunk", ["string", "Buffer", "Uint8Array"], e));
                                        return r
                                    }(a, e)), o) x(t, o);
                                else if (a.objectMode || e && e.length > 0)
                                    if ("string" === typeof e || a.objectMode || Object.getPrototypeOf(e) === u.prototype || (e = function(t) {
                                            return u.from(t)
                                        }(e)), n) a.endEmitted ? x(t, new S) : R(t, a, e, !0);
                                    else if (a.ended) x(t, new w);
                                else {
                                    if (a.destroyed) return !1;
                                    a.reading = !1, a.decoder && !r ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? R(t, a, e, !1) : j(t, a)) : R(t, a, e, !1)
                                } else n || (a.reading = !1, j(t, a));
                                return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
                            }

                            function R(t, e, r, n) {
                                e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && I(t)), j(t, e)
                            }
                            Object.defineProperty(E.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(t) {
                                    this._readableState && (this._readableState.destroyed = t)
                                }
                            }), E.prototype.destroy = b.destroy, E.prototype._undestroy = b.undestroy, E.prototype._destroy = function(t, e) {
                                e(t)
                            }, E.prototype.push = function(t, e) {
                                var r, n = this._readableState;
                                return n.objectMode ? r = !0 : "string" === typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = u.from(t, e), e = ""), r = !0), k(this, t, e, !1, r)
                            }, E.prototype.unshift = function(t) {
                                return k(this, t, null, !0, !1)
                            }, E.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, E.prototype.setEncoding = function(t) {
                                l || (l = i(862).s);
                                var e = new l(t);
                                this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += e.write(r.data), r = r.next;
                                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
                            };
                            var O = 1073741824;

                            function P(t, e) {
                                return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                                    return t >= O ? t = O : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
                                }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
                            }

                            function I(t) {
                                var e = t._readableState;
                                h("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (h("emitReadable", e.flowing), e.emittedReadable = !0, n.nextTick(T, t))
                            }

                            function T(t) {
                                var e = t._readableState;
                                h("emitReadable_", e.destroyed, e.length, e.ended), e.destroyed || !e.length && !e.ended || (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, $(t)
                            }

                            function j(t, e) {
                                e.readingMore || (e.readingMore = !0, n.nextTick(N, t, e))
                            }

                            function N(t, e) {
                                for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
                                    var r = e.length;
                                    if (h("maybeReadMore read 0"), t.read(0), r === e.length) break
                                }
                                e.readingMore = !1
                            }

                            function B(t) {
                                var e = t._readableState;
                                e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
                            }

                            function L(t) {
                                h("readable nexttick read 0"), t.read(0)
                            }

                            function C(t, e) {
                                h("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), $(t), e.flowing && !e.reading && t.read(0)
                            }

                            function $(t) {
                                var e = t._readableState;
                                for (h("flow", e.flowing); e.flowing && null !== t.read(););
                            }

                            function z(t, e) {
                                return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r);
                                var r
                            }

                            function q(t) {
                                var e = t._readableState;
                                h("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, n.nextTick(U, e, t))
                            }

                            function U(t, e) {
                                if (h("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
                                    var r = e._writableState;
                                    (!r || r.autoDestroy && r.finished) && e.destroy()
                                }
                            }

                            function F(t, e) {
                                for (var r = 0, n = t.length; r < n; r++)
                                    if (t[r] === e) return r;
                                return -1
                            }
                            E.prototype.read = function(t) {
                                h("read", t), t = parseInt(t, 10);
                                var e = this._readableState,
                                    r = t;
                                if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return h("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? q(this) : I(this), null;
                                if (0 === (t = P(t, e)) && e.ended) return 0 === e.length && q(this), null;
                                var n, i = e.needReadable;
                                return h("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && h("length less than watermark", i = !0), e.ended || e.reading ? h("reading or ended", i = !1) : i && (h("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = P(r, e))), null === (n = t > 0 ? z(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), 0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && q(this)), null !== n && this.emit("data", n), n
                            }, E.prototype._read = function(t) {
                                x(this, new M("_read()"))
                            }, E.prototype.pipe = function(t, e) {
                                var r = this,
                                    i = this._readableState;
                                switch (i.pipesCount) {
                                    case 0:
                                        i.pipes = t;
                                        break;
                                    case 1:
                                        i.pipes = [i.pipes, t];
                                        break;
                                    default:
                                        i.pipes.push(t)
                                }
                                i.pipesCount += 1, h("pipe count=%d opts=%j", i.pipesCount, e);
                                var o = (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? u : g;

                                function s(t, e) {
                                    h("onunpipe"), t === r && e && !1 === e.hasUnpiped && (e.hasUnpiped = !0, l())
                                }

                                function u() {
                                    h("onend"), t.end()
                                }
                                i.endEmitted ? n.nextTick(o) : r.once("end", o), t.on("unpipe", s);
                                var f = function(t) {
                                    return function() {
                                        var e = t._readableState;
                                        h("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, "data") && (e.flowing = !0, $(t))
                                    }
                                }(r);
                                t.on("drain", f);
                                var c = !1;

                                function l() {
                                    h("cleanup"), t.removeListener("close", m), t.removeListener("finish", b), t.removeListener("drain", f), t.removeListener("error", p), t.removeListener("unpipe", s), r.removeListener("end", u), r.removeListener("end", g), r.removeListener("data", d), c = !0, !i.awaitDrain || t._writableState && !t._writableState.needDrain || f()
                                }

                                function d(e) {
                                    h("ondata");
                                    var n = t.write(e);
                                    h("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== F(i.pipes, t)) && !c && (h("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
                                }

                                function p(e) {
                                    h("onerror", e), g(), t.removeListener("error", p), 0 === a(t, "error") && x(t, e)
                                }

                                function m() {
                                    t.removeListener("finish", b), g()
                                }

                                function b() {
                                    h("onfinish"), t.removeListener("close", m), g()
                                }

                                function g() {
                                    h("unpipe"), r.unpipe(t)
                                }
                                return r.on("data", d),
                                    function(t, e, r) {
                                        if ("function" === typeof t.prependListener) return t.prependListener(e, r);
                                        t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
                                    }(t, "error", p), t.once("close", m), t.once("finish", b), t.emit("pipe", r), i.flowing || (h("pipe resume"), r.resume()), t
                            }, E.prototype.unpipe = function(t) {
                                var e = this._readableState,
                                    r = {
                                        hasUnpiped: !1
                                    };
                                if (0 === e.pipesCount) return this;
                                if (1 === e.pipesCount) return t && t !== e.pipes || (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r)), this;
                                if (!t) {
                                    var n = e.pipes,
                                        i = e.pipesCount;
                                    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                                    for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var a = F(e.pipes, t);
                                return -1 === a || (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r)), this
                            }, E.prototype.on = function(t, e) {
                                var r = s.prototype.on.call(this, t, e),
                                    i = this._readableState;
                                return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, h("on readable", i.length, i.reading), i.length ? I(this) : i.reading || n.nextTick(L, this))), r
                            }, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(t, e) {
                                var r = s.prototype.removeListener.call(this, t, e);
                                return "readable" === t && n.nextTick(B, this), r
                            }, E.prototype.removeAllListeners = function(t) {
                                var e = s.prototype.removeAllListeners.apply(this, arguments);
                                return "readable" !== t && void 0 !== t || n.nextTick(B, this), e
                            }, E.prototype.resume = function() {
                                var t = this._readableState;
                                return t.flowing || (h("resume"), t.flowing = !t.readableListening, function(t, e) {
                                    e.resumeScheduled || (e.resumeScheduled = !0, n.nextTick(C, t, e))
                                }(this, t)), t.paused = !1, this
                            }, E.prototype.pause = function() {
                                return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, E.prototype.wrap = function(t) {
                                var e = this,
                                    r = this._readableState,
                                    n = !1;
                                for (var i in t.on("end", (function() {
                                        if (h("wrapped end"), r.decoder && !r.ended) {
                                            var t = r.decoder.end();
                                            t && t.length && e.push(t)
                                        }
                                        e.push(null)
                                    })), t.on("data", (function(i) {
                                        (h("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause())))
                                    })), t) void 0 === this[i] && "function" === typeof t[i] && (this[i] = function(e) {
                                    return function() {
                                        return t[e].apply(t, arguments)
                                    }
                                }(i));
                                for (var o = 0; o < _.length; o++) t.on(_[o], this.emit.bind(this, _[o]));
                                return this._read = function(e) {
                                    h("wrapped _read", e), n && (n = !1, t.resume())
                                }, this
                            }, "function" === typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === d && (d = i(224)), d(this)
                            }), Object.defineProperty(E.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(E.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(E.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(t) {
                                    this._readableState && (this._readableState.flowing = t)
                                }
                            }), E._fromList = z, Object.defineProperty(E.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" === typeof Symbol && (E.from = function(t, e) {
                                return void 0 === p && (p = i(720)), p(E, t, e)
                            })
                        },
                        551: function(t, e, r) {
                            "use strict";
                            t.exports = h;
                            var n = r(349).q,
                                i = n.ERR_METHOD_NOT_IMPLEMENTED,
                                o = n.ERR_MULTIPLE_CALLBACK,
                                a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                s = n.ERR_TRANSFORM_WITH_LENGTH_0,
                                u = r(716);

                            function f(t, e) {
                                var r = this._transformState;
                                r.transforming = !1;
                                var n = r.writecb;
                                if (null === n) return this.emit("error", new o);
                                r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
                                var i = this._readableState;
                                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                            }

                            function h(t) {
                                if (!(this instanceof h)) return new h(t);
                                u.call(this, t), this._transformState = {
                                    afterTransform: f.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" === typeof t.transform && (this._transform = t.transform), "function" === typeof t.flush && (this._flush = t.flush)), this.on("prefinish", c)
                            }

                            function c() {
                                var t = this;
                                "function" !== typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush((function(e, r) {
                                    l(t, e, r)
                                }))
                            }

                            function l(t, e, r) {
                                if (e) return t.emit("error", e);
                                if (null != r && t.push(r), t._writableState.length) throw new s;
                                if (t._transformState.transforming) throw new a;
                                return t.push(null)
                            }
                            r(140)(h, u), h.prototype.push = function(t, e) {
                                return this._transformState.needTransform = !1, u.prototype.push.call(this, t, e)
                            }, h.prototype._transform = function(t, e, r) {
                                r(new i("_transform()"))
                            }, h.prototype._write = function(t, e, r) {
                                var n = this._transformState;
                                if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
                                    var i = this._readableState;
                                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                                }
                            }, h.prototype._read = function(t) {
                                var e = this._transformState;
                                null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
                            }, h.prototype._destroy = function(t, e) {
                                u.prototype._destroy.call(this, t, (function(t) {
                                    e(t)
                                }))
                            }
                        },
                        513: function(t, e, i) {
                            "use strict";

                            function o(t) {
                                var e = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    ! function(t, e, r) {
                                        var n = t.entry;
                                        t.entry = null;
                                        for (; n;) {
                                            var i = n.callback;
                                            e.pendingcb--, i(r), n = n.next
                                        }
                                        e.corkedRequestsFree.next = t
                                    }(e, t)
                                }
                            }
                            var a;
                            t.exports = E, E.WritableState = A;
                            var s = {
                                    deprecate: i(777)
                                },
                                u = i(455),
                                f = i(300).Buffer,
                                h = r.g.Uint8Array || function() {};
                            var c, l = i(289),
                                d = i(483).getHighWaterMark,
                                p = i(349).q,
                                m = p.ERR_INVALID_ARG_TYPE,
                                b = p.ERR_METHOD_NOT_IMPLEMENTED,
                                g = p.ERR_MULTIPLE_CALLBACK,
                                y = p.ERR_STREAM_CANNOT_PIPE,
                                v = p.ERR_STREAM_DESTROYED,
                                w = p.ERR_STREAM_NULL_VALUES,
                                M = p.ERR_STREAM_WRITE_AFTER_END,
                                S = p.ERR_UNKNOWN_ENCODING,
                                x = l.errorOrDestroy;

                            function _() {}

                            function A(t, e, r) {
                                a = a || i(716), t = t || {}, "boolean" !== typeof r && (r = e instanceof a), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = d(this, t, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var s = !1 === t.decodeStrings;
                                this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                                    ! function(t, e) {
                                        var r = t._writableState,
                                            i = r.sync,
                                            o = r.writecb;
                                        if ("function" !== typeof o) throw new g;
                                        if (function(t) {
                                                t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                                            }(r), e) ! function(t, e, r, i, o) {
                                            --e.pendingcb, r ? (n.nextTick(o, i), n.nextTick(j, t, e), t._writableState.errorEmitted = !0, x(t, i)) : (o(i), t._writableState.errorEmitted = !0, x(t, i), j(t, e))
                                        }(t, r, i, e, o);
                                        else {
                                            var a = I(r) || t.destroyed;
                                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || P(t, r), i ? n.nextTick(O, t, r, a, o) : O(t, r, a, o)
                                        }
                                    }(e, t)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
                            }

                            function E(t) {
                                var e = this instanceof(a = a || i(716));
                                if (!e && !c.call(E, this)) return new E(t);
                                this._writableState = new A(t, this, e), this.writable = !0, t && ("function" === typeof t.write && (this._write = t.write), "function" === typeof t.writev && (this._writev = t.writev), "function" === typeof t.destroy && (this._destroy = t.destroy), "function" === typeof t.final && (this._final = t.final)), u.call(this)
                            }

                            function k(t, e, r) {
                                return t.objectMode || !1 === t.decodeStrings || "string" !== typeof e || (e = f.from(e, r)), e
                            }

                            function R(t, e, r, n, i, o, a) {
                                e.writelen = n, e.writecb = a, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new v("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
                            }

                            function O(t, e, r, n) {
                                r || function(t, e) {
                                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                                }(t, e), e.pendingcb--, n(), j(t, e)
                            }

                            function P(t, e) {
                                e.bufferProcessing = !0;
                                var r = e.bufferedRequest;
                                if (t._writev && r && r.next) {
                                    var n = e.bufferedRequestCount,
                                        i = new Array(n),
                                        a = e.corkedRequestsFree;
                                    a.entry = r;
                                    for (var s = 0, u = !0; r;) i[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                                    i.allBuffers = u, R(t, e, !0, e.length, i, "", a.finish), e.pendingcb++, e.lastBufferedRequest = null, a.next ? (e.corkedRequestsFree = a.next, a.next = null) : e.corkedRequestsFree = new o(e), e.bufferedRequestCount = 0
                                } else {
                                    for (; r;) {
                                        var f = r.chunk,
                                            h = r.encoding,
                                            c = r.callback;
                                        if (R(t, e, !1, e.objectMode ? 1 : f.length, f, h, c), r = r.next, e.bufferedRequestCount--, e.writing) break
                                    }
                                    null === r && (e.lastBufferedRequest = null)
                                }
                                e.bufferedRequest = r, e.bufferProcessing = !1
                            }

                            function I(t) {
                                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
                            }

                            function T(t, e) {
                                t._final((function(r) {
                                    e.pendingcb--, r && x(t, r), e.prefinished = !0, t.emit("prefinish"), j(t, e)
                                }))
                            }

                            function j(t, e) {
                                var r = I(e);
                                if (r && (function(t, e) {
                                        e.prefinished || e.finalCalled || ("function" !== typeof t._final || e.destroyed ? (e.prefinished = !0, t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = !0, n.nextTick(T, t, e)))
                                    }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
                                    var i = t._readableState;
                                    (!i || i.autoDestroy && i.endEmitted) && t.destroy()
                                }
                                return r
                            }
                            i(140)(E, u), A.prototype.getBuffer = function() {
                                    for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                                    return e
                                },
                                function() {
                                    try {
                                        Object.defineProperty(A.prototype, "buffer", {
                                            get: s.deprecate((function() {
                                                return this.getBuffer()
                                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (t) {}
                                }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
                                    value: function(t) {
                                        return !!c.call(this, t) || this === E && (t && t._writableState instanceof A)
                                    }
                                })) : c = function(t) {
                                    return t instanceof this
                                }, E.prototype.pipe = function() {
                                    x(this, new y)
                                }, E.prototype.write = function(t, e, r) {
                                    var i = this._writableState,
                                        o = !1,
                                        a = !i.objectMode && function(t) {
                                            return f.isBuffer(t) || t instanceof h
                                        }(t);
                                    return a && !f.isBuffer(t) && (t = function(t) {
                                        return f.from(t)
                                    }(t)), "function" === typeof e && (r = e, e = null), a ? e = "buffer" : e || (e = i.defaultEncoding), "function" !== typeof r && (r = _), i.ending ? function(t, e) {
                                        var r = new M;
                                        x(t, r), n.nextTick(e, r)
                                    }(this, r) : (a || function(t, e, r, i) {
                                        var o;
                                        return null === r ? o = new w : "string" === typeof r || e.objectMode || (o = new m("chunk", ["string", "Buffer"], r)), !o || (x(t, o), n.nextTick(i, o), !1)
                                    }(this, i, t, r)) && (i.pendingcb++, o = function(t, e, r, n, i, o) {
                                        if (!r) {
                                            var a = k(e, n, i);
                                            n !== a && (r = !0, i = "buffer", n = a)
                                        }
                                        var s = e.objectMode ? 1 : n.length;
                                        e.length += s;
                                        var u = e.length < e.highWaterMark;
                                        u || (e.needDrain = !0);
                                        if (e.writing || e.corked) {
                                            var f = e.lastBufferedRequest;
                                            e.lastBufferedRequest = {
                                                chunk: n,
                                                encoding: i,
                                                isBuf: r,
                                                callback: o,
                                                next: null
                                            }, f ? f.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                                        } else R(t, e, !1, s, n, i, o);
                                        return u
                                    }(this, i, a, t, e, r)), o
                                }, E.prototype.cork = function() {
                                    this._writableState.corked++
                                }, E.prototype.uncork = function() {
                                    var t = this._writableState;
                                    t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || P(this, t))
                                }, E.prototype.setDefaultEncoding = function(t) {
                                    if ("string" === typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new S(t);
                                    return this._writableState.defaultEncoding = t, this
                                }, Object.defineProperty(E.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(E.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), E.prototype._write = function(t, e, r) {
                                    r(new b("_write()"))
                                }, E.prototype._writev = null, E.prototype.end = function(t, e, r) {
                                    var i = this._writableState;
                                    return "function" === typeof t ? (r = t, t = null, e = null) : "function" === typeof e && (r = e, e = null), null !== t && void 0 !== t && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), i.ending || function(t, e, r) {
                                        e.ending = !0, j(t, e), r && (e.finished ? n.nextTick(r) : t.once("finish", r));
                                        e.ended = !0, t.writable = !1
                                    }(this, i, r), this
                                }, Object.defineProperty(E.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(E.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(t) {
                                        this._writableState && (this._writableState.destroyed = t)
                                    }
                                }), E.prototype.destroy = l.destroy, E.prototype._undestroy = l.undestroy, E.prototype._destroy = function(t, e) {
                                    e(t)
                                }
                        },
                        224: function(t, e, r) {
                            "use strict";
                            var i;

                            function o(t, e, r) {
                                return e in t ? Object.defineProperty(t, e, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = r, t
                            }
                            var a = r(7),
                                s = Symbol("lastResolve"),
                                u = Symbol("lastReject"),
                                f = Symbol("error"),
                                h = Symbol("ended"),
                                c = Symbol("lastPromise"),
                                l = Symbol("handlePromise"),
                                d = Symbol("stream");

                            function p(t, e) {
                                return {
                                    value: t,
                                    done: e
                                }
                            }

                            function m(t) {
                                var e = t[s];
                                if (null !== e) {
                                    var r = t[d].read();
                                    null !== r && (t[c] = null, t[s] = null, t[u] = null, e(p(r, !1)))
                                }
                            }

                            function b(t) {
                                n.nextTick(m, t)
                            }
                            var g = Object.getPrototypeOf((function() {})),
                                y = Object.setPrototypeOf((i = {
                                    get stream() {
                                        return this[d]
                                    },
                                    next: function() {
                                        var t = this,
                                            e = this[f];
                                        if (null !== e) return Promise.reject(e);
                                        if (this[h]) return Promise.resolve(p(void 0, !0));
                                        if (this[d].destroyed) return new Promise((function(e, r) {
                                            n.nextTick((function() {
                                                t[f] ? r(t[f]) : e(p(void 0, !0))
                                            }))
                                        }));
                                        var r, i = this[c];
                                        if (i) r = new Promise(function(t, e) {
                                            return function(r, n) {
                                                t.then((function() {
                                                    e[h] ? r(p(void 0, !0)) : e[l](r, n)
                                                }), n)
                                            }
                                        }(i, this));
                                        else {
                                            var o = this[d].read();
                                            if (null !== o) return Promise.resolve(p(o, !1));
                                            r = new Promise(this[l])
                                        }
                                        return this[c] = r, r
                                    }
                                }, o(i, Symbol.asyncIterator, (function() {
                                    return this
                                })), o(i, "return", (function() {
                                    var t = this;
                                    return new Promise((function(e, r) {
                                        t[d].destroy(null, (function(t) {
                                            t ? r(t) : e(p(void 0, !0))
                                        }))
                                    }))
                                })), i), g);
                            t.exports = function(t) {
                                var e, r = Object.create(y, (o(e = {}, d, {
                                    value: t,
                                    writable: !0
                                }), o(e, s, {
                                    value: null,
                                    writable: !0
                                }), o(e, u, {
                                    value: null,
                                    writable: !0
                                }), o(e, f, {
                                    value: null,
                                    writable: !0
                                }), o(e, h, {
                                    value: t._readableState.endEmitted,
                                    writable: !0
                                }), o(e, l, {
                                    value: function(t, e) {
                                        var n = r[d].read();
                                        n ? (r[c] = null, r[s] = null, r[u] = null, t(p(n, !1))) : (r[s] = t, r[u] = e)
                                    },
                                    writable: !0
                                }), e));
                                return r[c] = null, a(t, (function(t) {
                                    if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                                        var e = r[u];
                                        return null !== e && (r[c] = null, r[s] = null, r[u] = null, e(t)), void(r[f] = t)
                                    }
                                    var n = r[s];
                                    null !== n && (r[c] = null, r[s] = null, r[u] = null, n(p(void 0, !0))), r[h] = !0
                                })), t.on("readable", b.bind(null, r)), r
                            }
                        },
                        41: function(t, e, r) {
                            "use strict";

                            function n(t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    e && (n = n.filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))), r.push.apply(r, n)
                                }
                                return r
                            }

                            function i(t, e, r) {
                                return e in t ? Object.defineProperty(t, e, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = r, t
                            }

                            function o(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            var a = r(300).Buffer,
                                s = r(837).inspect,
                                u = s && s.custom || "inspect";

                            function f(t, e, r) {
                                a.prototype.copy.call(t, e, r)
                            }
                            t.exports = function() {
                                function t() {
                                    ! function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), this.head = null, this.tail = null, this.length = 0
                                }
                                return function(t, e, r) {
                                    e && o(t.prototype, e), r && o(t, r)
                                }(t, [{
                                    key: "push",
                                    value: function(t) {
                                        var e = {
                                            data: t,
                                            next: null
                                        };
                                        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                                    }
                                }, {
                                    key: "unshift",
                                    value: function(t) {
                                        var e = {
                                            data: t,
                                            next: this.head
                                        };
                                        0 === this.length && (this.tail = e), this.head = e, ++this.length
                                    }
                                }, {
                                    key: "shift",
                                    value: function() {
                                        if (0 !== this.length) {
                                            var t = this.head.data;
                                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                                        }
                                    }
                                }, {
                                    key: "clear",
                                    value: function() {
                                        this.head = this.tail = null, this.length = 0
                                    }
                                }, {
                                    key: "join",
                                    value: function(t) {
                                        if (0 === this.length) return "";
                                        for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;
                                        return r
                                    }
                                }, {
                                    key: "concat",
                                    value: function(t) {
                                        if (0 === this.length) return a.alloc(0);
                                        for (var e = a.allocUnsafe(t >>> 0), r = this.head, n = 0; r;) f(r.data, e, n), n += r.data.length, r = r.next;
                                        return e
                                    }
                                }, {
                                    key: "consume",
                                    value: function(t, e) {
                                        var r;
                                        return t < this.head.data.length ? (r = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), r
                                    }
                                }, {
                                    key: "first",
                                    value: function() {
                                        return this.head.data
                                    }
                                }, {
                                    key: "_getString",
                                    value: function(t) {
                                        var e = this.head,
                                            r = 1,
                                            n = e.data;
                                        for (t -= n.length; e = e.next;) {
                                            var i = e.data,
                                                o = t > i.length ? i.length : t;
                                            if (o === i.length ? n += i : n += i.slice(0, t), 0 === (t -= o)) {
                                                o === i.length ? (++r, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = i.slice(o));
                                                break
                                            }++r
                                        }
                                        return this.length -= r, n
                                    }
                                }, {
                                    key: "_getBuffer",
                                    value: function(t) {
                                        var e = a.allocUnsafe(t),
                                            r = this.head,
                                            n = 1;
                                        for (r.data.copy(e), t -= r.data.length; r = r.next;) {
                                            var i = r.data,
                                                o = t > i.length ? i.length : t;
                                            if (i.copy(e, e.length - t, 0, o), 0 === (t -= o)) {
                                                o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                                                break
                                            }++n
                                        }
                                        return this.length -= n, e
                                    }
                                }, {
                                    key: u,
                                    value: function(t, e) {
                                        return s(this, function(t) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var r = null != arguments[e] ? arguments[e] : {};
                                                e % 2 ? n(Object(r), !0).forEach((function(e) {
                                                    i(t, e, r[e])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                                }))
                                            }
                                            return t
                                        }({}, e, {
                                            depth: 0,
                                            customInspect: !1
                                        }))
                                    }
                                }]), t
                            }()
                        },
                        289: function(t) {
                            "use strict";

                            function e(t, e) {
                                i(t, e), r(t)
                            }

                            function r(t) {
                                t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
                            }

                            function i(t, e) {
                                t.emit("error", e)
                            }
                            t.exports = {
                                destroy: function(t, o) {
                                    var a = this,
                                        s = this._readableState && this._readableState.destroyed,
                                        u = this._writableState && this._writableState.destroyed;
                                    return s || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(i, this, t)) : n.nextTick(i, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function(t) {
                                        !o && t ? a._writableState ? a._writableState.errorEmitted ? n.nextTick(r, a) : (a._writableState.errorEmitted = !0, n.nextTick(e, a, t)) : n.nextTick(e, a, t) : o ? (n.nextTick(r, a), o(t)) : n.nextTick(r, a)
                                    })), this)
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(t, e) {
                                    var r = t._readableState,
                                        n = t._writableState;
                                    r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e)
                                }
                            }
                        },
                        7: function(t, e, r) {
                            "use strict";
                            var n = r(349).q.ERR_STREAM_PREMATURE_CLOSE;

                            function i() {}
                            t.exports = function t(e, r, o) {
                                if ("function" === typeof r) return t(e, null, r);
                                r || (r = {}), o = function(t) {
                                    var e = !1;
                                    return function() {
                                        if (!e) {
                                            e = !0;
                                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                            t.apply(this, n)
                                        }
                                    }
                                }(o || i);
                                var a = r.readable || !1 !== r.readable && e.readable,
                                    s = r.writable || !1 !== r.writable && e.writable,
                                    u = function() {
                                        e.writable || h()
                                    },
                                    f = e._writableState && e._writableState.finished,
                                    h = function() {
                                        s = !1, f = !0, a || o.call(e)
                                    },
                                    c = e._readableState && e._readableState.endEmitted,
                                    l = function() {
                                        a = !1, c = !0, s || o.call(e)
                                    },
                                    d = function(t) {
                                        o.call(e, t)
                                    },
                                    p = function() {
                                        var t;
                                        return a && !c ? (e._readableState && e._readableState.ended || (t = new n), o.call(e, t)) : s && !f ? (e._writableState && e._writableState.ended || (t = new n), o.call(e, t)) : void 0
                                    },
                                    m = function() {
                                        e.req.on("finish", h)
                                    };
                                return ! function(t) {
                                        return t.setHeader && "function" === typeof t.abort
                                    }(e) ? s && !e._writableState && (e.on("end", u), e.on("close", u)) : (e.on("complete", h), e.on("abort", p), e.req ? m() : e.on("request", m)), e.on("end", l), e.on("finish", h), !1 !== r.error && e.on("error", d), e.on("close", p),
                                    function() {
                                        e.removeListener("complete", h), e.removeListener("abort", p), e.removeListener("request", m), e.req && e.req.removeListener("finish", h), e.removeListener("end", u), e.removeListener("close", u), e.removeListener("finish", h), e.removeListener("end", l), e.removeListener("error", d), e.removeListener("close", p)
                                    }
                            }
                        },
                        720: function(t, e, r) {
                            "use strict";

                            function n(t, e, r, n, i, o, a) {
                                try {
                                    var s = t[o](a),
                                        u = s.value
                                } catch (t) {
                                    return void r(t)
                                }
                                s.done ? e(u) : Promise.resolve(u).then(n, i)
                            }

                            function i(t) {
                                return function() {
                                    var e = this,
                                        r = arguments;
                                    return new Promise((function(i, o) {
                                        var a = t.apply(e, r);

                                        function s(t) {
                                            n(a, i, o, s, u, "next", t)
                                        }

                                        function u(t) {
                                            n(a, i, o, s, u, "throw", t)
                                        }
                                        s(void 0)
                                    }))
                                }
                            }

                            function o(t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    e && (n = n.filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))), r.push.apply(r, n)
                                }
                                return r
                            }

                            function a(t, e, r) {
                                return e in t ? Object.defineProperty(t, e, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = r, t
                            }
                            var s = r(349).q.ERR_INVALID_ARG_TYPE;
                            t.exports = function(t, e, r) {
                                var n;
                                if (e && "function" === typeof e.next) n = e;
                                else if (e && e[Symbol.asyncIterator]) n = e[Symbol.asyncIterator]();
                                else {
                                    if (!e || !e[Symbol.iterator]) throw new s("iterable", ["Iterable"], e);
                                    n = e[Symbol.iterator]()
                                }
                                var u = new t(function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var r = null != arguments[e] ? arguments[e] : {};
                                            e % 2 ? o(Object(r), !0).forEach((function(e) {
                                                a(t, e, r[e])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                            }))
                                        }
                                        return t
                                    }({
                                        objectMode: !0
                                    }, r)),
                                    f = !1;

                                function h() {
                                    return c.apply(this, arguments)
                                }

                                function c() {
                                    return c = i((function*() {
                                        try {
                                            var t = yield n.next(), e = t.value;
                                            t.done ? u.push(null) : u.push(yield e) ? h() : f = !1
                                        } catch (t) {
                                            u.destroy(t)
                                        }
                                    })), c.apply(this, arguments)
                                }
                                return u._read = function() {
                                    f || (f = !0, h())
                                }, u
                            }
                        },
                        522: function(t, e, r) {
                            "use strict";
                            var n;
                            var i = r(349).q,
                                o = i.ERR_MISSING_ARGS,
                                a = i.ERR_STREAM_DESTROYED;

                            function s(t) {
                                if (t) throw t
                            }

                            function u(t, e, i, o) {
                                o = function(t) {
                                    var e = !1;
                                    return function() {
                                        e || (e = !0, t.apply(void 0, arguments))
                                    }
                                }(o);
                                var s = !1;
                                t.on("close", (function() {
                                    s = !0
                                })), void 0 === n && (n = r(7)), n(t, {
                                    readable: e,
                                    writable: i
                                }, (function(t) {
                                    if (t) return o(t);
                                    s = !0, o()
                                }));
                                var u = !1;
                                return function(e) {
                                    if (!s && !u) return u = !0,
                                        function(t) {
                                            return t.setHeader && "function" === typeof t.abort
                                        }(t) ? t.abort() : "function" === typeof t.destroy ? t.destroy() : void o(e || new a("pipe"))
                                }
                            }

                            function f(t) {
                                t()
                            }

                            function h(t, e) {
                                return t.pipe(e)
                            }

                            function c(t) {
                                return t.length ? "function" !== typeof t[t.length - 1] ? s : t.pop() : s
                            }
                            t.exports = function() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                var n, i = c(e);
                                if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new o("streams");
                                var a = e.map((function(t, r) {
                                    var o = r < e.length - 1;
                                    return u(t, o, r > 0, (function(t) {
                                        n || (n = t), t && a.forEach(f), o || (a.forEach(f), i(n))
                                    }))
                                }));
                                return e.reduce(h)
                            }
                        },
                        483: function(t, e, r) {
                            "use strict";
                            var n = r(349).q.ERR_INVALID_OPT_VALUE;
                            t.exports = {
                                getHighWaterMark: function(t, e, r, i) {
                                    var o = function(t, e, r) {
                                        return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null
                                    }(e, i, r);
                                    if (null != o) {
                                        if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
                                        return Math.floor(o)
                                    }
                                    return t.objectMode ? 16 : 16384
                                }
                            }
                        },
                        455: function(t, e, r) {
                            t.exports = r(781)
                        },
                        207: function(t, e, r) {
                            var n = r(300),
                                i = n.Buffer;

                            function o(t, e) {
                                for (var r in t) e[r] = t[r]
                            }

                            function a(t, e, r) {
                                return i(t, e, r)
                            }
                            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(t, e, r) {
                                if ("number" === typeof t) throw new TypeError("Argument must not be a number");
                                return i(t, e, r)
                            }, a.alloc = function(t, e, r) {
                                if ("number" !== typeof t) throw new TypeError("Argument must be a number");
                                var n = i(t);
                                return void 0 !== e ? "string" === typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
                            }, a.allocUnsafe = function(t) {
                                if ("number" !== typeof t) throw new TypeError("Argument must be a number");
                                return i(t)
                            }, a.allocUnsafeSlow = function(t) {
                                if ("number" !== typeof t) throw new TypeError("Argument must be a number");
                                return n.SlowBuffer(t)
                            }
                        },
                        552: function(t, e, r) {
                            t.exports = i;
                            var n = r(361).EventEmitter;

                            function i() {
                                n.call(this)
                            }
                            r(140)(i, n), i.Readable = r(787), i.Writable = r(513), i.Duplex = r(716), i.Transform = r(551), i.PassThrough = r(788), i.finished = r(7), i.pipeline = r(522), i.Stream = i, i.prototype.pipe = function(t, e) {
                                var r = this;

                                function i(e) {
                                    t.writable && !1 === t.write(e) && r.pause && r.pause()
                                }

                                function o() {
                                    r.readable && r.resume && r.resume()
                                }
                                r.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (r.on("end", s), r.on("close", u));
                                var a = !1;

                                function s() {
                                    a || (a = !0, t.end())
                                }

                                function u() {
                                    a || (a = !0, "function" === typeof t.destroy && t.destroy())
                                }

                                function f(t) {
                                    if (h(), 0 === n.listenerCount(this, "error")) throw t
                                }

                                function h() {
                                    r.removeListener("data", i), t.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", u), r.removeListener("error", f), t.removeListener("error", f), r.removeListener("end", h), r.removeListener("close", h), t.removeListener("close", h)
                                }
                                return r.on("error", f), t.on("error", f), r.on("end", h), r.on("close", h), t.on("close", h), t.emit("pipe", r), t
                            }
                        },
                        862: function(t, e, r) {
                            "use strict";
                            var n = r(207).Buffer,
                                i = n.isEncoding || function(t) {
                                    switch ((t = "" + t) && t.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function o(t) {
                                var e;
                                switch (this.encoding = function(t) {
                                    var e = function(t) {
                                        if (!t) return "utf8";
                                        for (var e;;) switch (t) {
                                            case "utf8":
                                            case "utf-8":
                                                return "utf8";
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return "utf16le";
                                            case "latin1":
                                            case "binary":
                                                return "latin1";
                                            case "base64":
                                            case "ascii":
                                            case "hex":
                                                return t;
                                            default:
                                                if (e) return;
                                                t = ("" + t).toLowerCase(), e = !0
                                        }
                                    }(t);
                                    if ("string" !== typeof e && (n.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
                                    return e || t
                                }(t), this.encoding) {
                                    case "utf16le":
                                        this.text = u, this.end = f, e = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = s, e = 4;
                                        break;
                                    case "base64":
                                        this.text = h, this.end = c, e = 3;
                                        break;
                                    default:
                                        return this.write = l, void(this.end = d)
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e)
                            }

                            function a(t) {
                                return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2
                            }

                            function s(t) {
                                var e = this.lastTotal - this.lastNeed,
                                    r = function(t, e, r) {
                                        if (128 !== (192 & e[0])) return t.lastNeed = 0, "\ufffd";
                                        if (t.lastNeed > 1 && e.length > 1) {
                                            if (128 !== (192 & e[1])) return t.lastNeed = 1, "\ufffd";
                                            if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2])) return t.lastNeed = 2, "\ufffd"
                                        }
                                    }(this, t);
                                return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
                            }

                            function u(t, e) {
                                if ((t.length - e) % 2 === 0) {
                                    var r = t.toString("utf16le", e);
                                    if (r) {
                                        var n = r.charCodeAt(r.length - 1);
                                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1)
                                    }
                                    return r
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
                            }

                            function f(t) {
                                var e = t && t.length ? this.write(t) : "";
                                if (this.lastNeed) {
                                    var r = this.lastTotal - this.lastNeed;
                                    return e + this.lastChar.toString("utf16le", 0, r)
                                }
                                return e
                            }

                            function h(t, e) {
                                var r = (t.length - e) % 3;
                                return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r))
                            }

                            function c(t) {
                                var e = t && t.length ? this.write(t) : "";
                                return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
                            }

                            function l(t) {
                                return t.toString(this.encoding)
                            }

                            function d(t) {
                                return t && t.length ? this.write(t) : ""
                            }
                            e.s = o, o.prototype.write = function(t) {
                                if (0 === t.length) return "";
                                var e, r;
                                if (this.lastNeed) {
                                    if (void 0 === (e = this.fillLast(t))) return "";
                                    r = this.lastNeed, this.lastNeed = 0
                                } else r = 0;
                                return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
                            }, o.prototype.end = function(t) {
                                var e = t && t.length ? this.write(t) : "";
                                return this.lastNeed ? e + "\ufffd" : e
                            }, o.prototype.text = function(t, e) {
                                var r = function(t, e, r) {
                                    var n = e.length - 1;
                                    if (n < r) return 0;
                                    var i = a(e[n]);
                                    if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
                                    if (--n < r || -2 === i) return 0;
                                    if ((i = a(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
                                    if (--n < r || -2 === i) return 0;
                                    if ((i = a(e[n])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;
                                    return 0
                                }(this, t, e);
                                if (!this.lastNeed) return t.toString("utf8", e);
                                this.lastTotal = r;
                                var n = t.length - (r - this.lastNeed);
                                return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n)
                            }, o.prototype.fillLast = function(t) {
                                if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
                            }
                        },
                        777: function(t) {
                            function e(t) {
                                try {
                                    if (!r.g.localStorage) return !1
                                } catch (t) {
                                    return !1
                                }
                                var e = r.g.localStorage[t];
                                return null != e && "true" === String(e).toLowerCase()
                            }
                            t.exports = function(t, r) {
                                if (e("noDeprecation")) return t;
                                var n = !1;
                                return function() {
                                    if (!n) {
                                        if (e("throwDeprecation")) throw new Error(r);
                                        e("traceDeprecation") ? console.trace(r) : console.warn(r), n = !0
                                    }
                                    return t.apply(this, arguments)
                                }
                            }
                        },
                        300: function(t) {
                            "use strict";
                            t.exports = r(48764)
                        },
                        361: function(t) {
                            "use strict";
                            t.exports = r(17187)
                        },
                        781: function(t) {
                            "use strict";
                            t.exports = r(17187).EventEmitter
                        },
                        837: function(t) {
                            "use strict";
                            t.exports = r(89539)
                        }
                    },
                    i = {};

                function o(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = i[t] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        e[t](n, n.exports, o), a = !1
                    } finally {
                        a && delete i[t]
                    }
                    return n.exports
                }
                o.ab = "//";
                var a = o(552);
                t.exports = a
            }()
        },
        4298: function(t, e, r) {
            t.exports = r(72189)
        },
        45033: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var a;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = r(48764).Buffer
                } catch (_) {}

                function s(t, e, r) {
                    for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
                        var a = t.charCodeAt(o) - 48;
                        n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                    }
                    return n
                }

                function u(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
                        var s = t.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function(t, e, r) {
                    if ("number" === typeof t) return this._initNumber(t, e, r);
                    if ("object" === typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initNumber = function(t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function(t, e, r) {
                    if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var n, i, o = 0;
                    for (r = t.length - 6, n = 0; r >= e; r -= 6) i = s(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    r + 6 !== e && (i = s(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                }, o.prototype._parseBase = function(t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, h = r; h < s; h += n) f = u(t, h, h + n, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                    if (0 !== a) {
                        var c = 1;
                        for (f = u(t, h, t.length, e), h = 0; h < a; h++) c *= e;
                        this.imuln(c), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
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
                var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var f = 1; f < n; f++) {
                        for (var h = u >>> 26, c = 67108863 & u, l = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= l; d++) {
                            var p = f - d | 0;
                            h += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a
                        }
                        r.words[f] = 0 | c, u = 0 | h
                    }
                    return 0 !== u ? r.words[f] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? f[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var l = h[t],
                            d = c[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(d).toString(t);
                            r = (p = p.idivn(d)).isZero() ? m + r : f[l - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return n("undefined" !== typeof a), this.toArrayLike(a, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === e,
                        f = new t(o),
                        h = this.clone();
                    if (u) {
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[s] = a;
                        for (; s < o; s++) f[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) f[s] = 0;
                        for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[o - s - 1] = a
                    }
                    return f
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
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
                    return n(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return n(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
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
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    for (; 0 !== o && a < r.length; a++) o = (e = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var d = function(t, e, r) {
                    var n, i, o, a = t.words,
                        s = e.words,
                        u = r.words,
                        f = 0,
                        h = 0 | a[0],
                        c = 8191 & h,
                        l = h >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        b = 0 | a[2],
                        g = 8191 & b,
                        y = b >>> 13,
                        v = 0 | a[3],
                        w = 8191 & v,
                        M = v >>> 13,
                        S = 0 | a[4],
                        x = 8191 & S,
                        _ = S >>> 13,
                        A = 0 | a[5],
                        E = 8191 & A,
                        k = A >>> 13,
                        R = 0 | a[6],
                        O = 8191 & R,
                        P = R >>> 13,
                        I = 0 | a[7],
                        T = 8191 & I,
                        j = I >>> 13,
                        N = 0 | a[8],
                        B = 8191 & N,
                        L = N >>> 13,
                        C = 0 | a[9],
                        $ = 8191 & C,
                        z = C >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        D = 0 | s[1],
                        K = 8191 & D,
                        H = D >>> 13,
                        Z = 0 | s[2],
                        W = 8191 & Z,
                        G = Z >>> 13,
                        V = 0 | s[3],
                        J = 8191 & V,
                        X = V >>> 13,
                        Y = 0 | s[4],
                        Q = 8191 & Y,
                        tt = Y >>> 13,
                        et = 0 | s[5],
                        rt = 8191 & et,
                        nt = et >>> 13,
                        it = 0 | s[6],
                        ot = 8191 & it,
                        at = it >>> 13,
                        st = 0 | s[7],
                        ut = 8191 & st,
                        ft = st >>> 13,
                        ht = 0 | s[8],
                        ct = 8191 & ht,
                        lt = ht >>> 13,
                        dt = 0 | s[9],
                        pt = 8191 & dt,
                        mt = dt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var bt = (f + (n = Math.imul(c, U)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(l, U) | 0)) << 13) | 0;
                    f = ((o = Math.imul(l, F)) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(p, U), i = (i = Math.imul(p, F)) + Math.imul(m, U) | 0, o = Math.imul(m, F);
                    var gt = (f + (n = n + Math.imul(c, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, H) | 0) + Math.imul(l, K) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, H) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, U), i = (i = Math.imul(g, F)) + Math.imul(y, U) | 0, o = Math.imul(y, F), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, H) | 0;
                    var yt = (f + (n = n + Math.imul(c, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, G) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, G) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, U), i = (i = Math.imul(w, F)) + Math.imul(M, U) | 0, o = Math.imul(M, F), n = n + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, H) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, G) | 0;
                    var vt = (f + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, X) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(x, U), i = (i = Math.imul(x, F)) + Math.imul(_, U) | 0, o = Math.imul(_, F), n = n + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, H) | 0, n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, G) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, X) | 0;
                    var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(E, U), i = (i = Math.imul(E, F)) + Math.imul(k, U) | 0, o = Math.imul(k, F), n = n + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, H) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                    var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(l, rt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, U), i = (i = Math.imul(O, F)) + Math.imul(P, U) | 0, o = Math.imul(P, F), n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, H) | 0, n = n + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, X) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
                    var St = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, at) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(T, U), i = (i = Math.imul(T, F)) + Math.imul(j, U) | 0, o = Math.imul(j, F), n = n + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(E, W) | 0, i = (i = i + Math.imul(E, G) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, G) | 0, n = n + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, X) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0;
                    var xt = (f + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(l, ut) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, ft) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(B, U), i = (i = Math.imul(B, F)) + Math.imul(L, U) | 0, o = Math.imul(L, F), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, H) | 0, n = n + Math.imul(O, W) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(P, W) | 0, o = o + Math.imul(P, G) | 0, n = n + Math.imul(E, J) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, X) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, at) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ft) | 0;
                    var _t = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, lt) | 0) + Math.imul(l, ct) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, lt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul($, U), i = (i = Math.imul($, F)) + Math.imul(z, U) | 0, o = Math.imul(z, F), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, H) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, G) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, X) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ft) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, lt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, lt) | 0;
                    var At = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(l, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(l, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul($, K), i = (i = Math.imul($, H)) + Math.imul(z, K) | 0, o = Math.imul(z, H), n = n + Math.imul(B, W) | 0, i = (i = i + Math.imul(B, G) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, X) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, at) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, at) | 0, n = n + Math.imul(w, ut) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ut) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(g, ct) | 0, i = (i = i + Math.imul(g, lt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, lt) | 0;
                    var Et = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul($, W), i = (i = Math.imul($, G)) + Math.imul(z, W) | 0, o = Math.imul(z, G), n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, at) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, at) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, lt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, lt) | 0;
                    var kt = (f + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul($, J), i = (i = Math.imul($, X)) + Math.imul(z, J) | 0, o = Math.imul(z, X), n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(T, rt) | 0, i = (i = i + Math.imul(T, nt) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, at) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(k, ut) | 0, o = o + Math.imul(k, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, lt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, lt) | 0;
                    var Rt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(M, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul($, Q), i = (i = Math.imul($, tt)) + Math.imul(z, Q) | 0, o = Math.imul(z, tt), n = n + Math.imul(B, rt) | 0, i = (i = i + Math.imul(B, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, at) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, at) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ft) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ft) | 0, n = n + Math.imul(E, ct) | 0, i = (i = i + Math.imul(E, lt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, lt) | 0;
                    var Ot = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul($, rt), i = (i = Math.imul($, nt)) + Math.imul(z, rt) | 0, o = Math.imul(z, nt), n = n + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, at) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, at) | 0, n = n + Math.imul(T, ut) | 0, i = (i = i + Math.imul(T, ft) | 0) + Math.imul(j, ut) | 0, o = o + Math.imul(j, ft) | 0, n = n + Math.imul(O, ct) | 0, i = (i = i + Math.imul(O, lt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, lt) | 0;
                    var Pt = (f + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul($, ot), i = (i = Math.imul($, at)) + Math.imul(z, ot) | 0, o = Math.imul(z, at), n = n + Math.imul(B, ut) | 0, i = (i = i + Math.imul(B, ft) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ft) | 0, n = n + Math.imul(T, ct) | 0, i = (i = i + Math.imul(T, lt) | 0) + Math.imul(j, ct) | 0, o = o + Math.imul(j, lt) | 0;
                    var It = (f + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul($, ut), i = (i = Math.imul($, ft)) + Math.imul(z, ut) | 0, o = Math.imul(z, ft), n = n + Math.imul(B, ct) | 0, i = (i = i + Math.imul(B, lt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, lt) | 0;
                    var Tt = (f + (n = n + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(j, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul($, ct), i = (i = Math.imul($, lt)) + Math.imul(z, ct) | 0, o = Math.imul(z, lt);
                    var jt = (f + (n = n + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    f = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
                    var Nt = (f + (n = Math.imul($, pt)) | 0) + ((8191 & (i = (i = Math.imul($, mt)) + Math.imul(z, pt) | 0)) << 13) | 0;
                    return f = ((o = Math.imul(z, mt)) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = bt, u[1] = gt, u[2] = yt, u[3] = vt, u[4] = wt, u[5] = Mt, u[6] = St, u[7] = xt, u[8] = _t, u[9] = At, u[10] = Et, u[11] = kt, u[12] = Rt, u[13] = Ot, u[14] = Pt, u[15] = It, u[16] = Tt, u[17] = jt, u[18] = Nt, 0 !== f && (u[19] = f, r.length++), r
                };

                function p(t, e, r) {
                    return (new m).mulp(t, e, r)
                }

                function m(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (d = l), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return r = 10 === this.length && 10 === t.length ? d(this, t, e) : n < 63 ? l(this, t, e) : n < 1024 ? function(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= u; f++) {
                                var h = o - f,
                                    c = (0 | t.words[h]) * (0 | e.words[f]),
                                    l = 67108863 & c;
                                s = 67108863 & (l = l + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : p(this, t, e), r
                }, m.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, m.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, m.prototype.permute = function(t, e, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]]
                }, m.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < i; h += s)
                            for (var c = u, l = f, d = 0; d < a; d++) {
                                var p = r[h + d],
                                    m = n[h + d],
                                    b = r[h + d + a],
                                    g = n[h + d + a],
                                    y = c * b - l * g;
                                g = c * g + l * b, b = y, r[h + d] = p + b, n[h + d] = m + g, r[h + d + a] = p - b, n[h + d + a] = m - g, d !== s && (y = u * c - f * l, l = u * l + f * c, c = y)
                            }
                }, m.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, m.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, m.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, m.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, m.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, m.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        f = new Array(n),
                        h = new Array(n),
                        c = new Array(n),
                        l = r.words;
                    l.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, f, n), this.transform(a, o, s, u, n, i), this.transform(f, o, h, c, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * h[d] - u[d] * c[d];
                        u[d] = s[d] * c[d] + u[d] * h[d], s[d] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), p(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    n("number" === typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << r;
                            this.words[e] = u | a, a = s >>> 26 - r
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var i;
                    n("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var f = 0; f < a; f++) u.words[f] = this.words[f];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - o | c >>> o, h = c & s
                    }
                    return u && 0 !== h && (u.words[u.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(t) {
                    n("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, a = t.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var u = (0 | t.words[i]) * e;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        n = this.clone(),
                        i = t,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, u = n.length - i.length;
                    if ("mod" !== e) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                        for (var f = 0; f < s.length; f++) s.words[f] = 0
                    }
                    var h = n.clone()._ishlnsubmul(i, 1, u);
                    0 === h.negative && (n = h, s && (s.words[u] = 1));
                    for (var c = u - 1; c >= 0; c--) {
                        var l = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                        for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, c); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                        s && (s.words[c] = l)
                    }
                    return s && s.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(t)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 !== (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
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
                    var i, a, s
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function(t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), f = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++f;
                    for (var h = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var l = 0, d = 1; 0 === (e.words[0] & d) && l < 26; ++l, d <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(h), u.isub(c)), s.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: r.iushln(f)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, a = new o(1), s = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var f = 0, h = 1; 0 === (e.words[0] & h) && f < 26; ++f, h <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var c = 0, l = 1; 0 === (r.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a))
                    }
                    return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
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
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
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
                    return new S(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function g(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function y() {
                    g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function v() {
                    g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function M() {
                    g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function S(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function x(t) {
                    S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                g.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, g.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                }, g.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, g.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(y, g), y.prototype.split = function(t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var a = 0 | t.words[i];
                        t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, y.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(v, g), i(w, g), i(M, g), M.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (b[t]) return b[t];
                    var e;
                    if ("k256" === t) e = new y;
                    else if ("p224" === t) e = new v;
                    else if ("p192" === t) e = new w;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new M
                    }
                    return b[t] = e, e
                }, S.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, S.prototype._verify2 = function(t, e) {
                    n(0 === (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, S.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, S.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, S.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, S.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, S.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, S.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, S.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, S.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, S.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, S.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, S.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, S.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        f = this.m.subn(1).iushrn(1),
                        h = this.m.bitLength();
                    for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(u);) h.redIAdd(u);
                    for (var c = this.pow(h, i), l = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                        for (var m = d, b = 0; 0 !== m.cmp(s); b++) m = m.redSqr();
                        n(b < p);
                        var g = this.pow(c, new o(1).iushln(p - b - 1));
                        l = l.redMul(g), c = g.redSqr(), d = d.redMul(c), p = b
                    }
                    return l
                }, S.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, S.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var f = e.words[n], h = u - 1; h >= 0; h--) {
                            var c = f >> h & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === h) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return i
                }, S.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, S.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new x(t)
                }, i(x, S), x.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, x.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, x.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, x.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, x.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        83206: function(t, e, r) {
            var n = r(45033),
                i = r(49604);
            t.exports = function(t) {
                if ("string" === typeof t || "number" === typeof t) {
                    var e = new n(1),
                        r = String(t).toLowerCase().trim(),
                        o = "0x" === r.substr(0, 2) || "-0x" === r.substr(0, 3),
                        a = i(r);
                    if ("-" === a.substr(0, 1) && (a = i(a.slice(1)), e = new n(-1, 10)), !(a = "" === a ? "0" : a).match(/^-?[0-9]+$/) && a.match(/^[0-9A-Fa-f]+$/) || a.match(/^[a-fA-F]+$/) || !0 === o && a.match(/^[0-9A-Fa-f]+$/)) return new n(a, 16).mul(e);
                    if ((a.match(/^-?[0-9]+$/) || "" === a) && !1 === o) return new n(a, 10).mul(e)
                } else if ("object" === typeof t && t.toString && !t.pop && !t.push && t.toString(10).match(/^-?[0-9]+$/) && (t.mul || t.dividedToIntegerBy)) return new n(t.toString(10), 10);
                throw new Error("[number-to-bn] while converting number " + JSON.stringify(t) + " to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.")
            }
        },
        61798: function(t, e, r) {
            "use strict";
            var n = r(83454),
                i = 65536,
                o = 4294967295;
            var a = r(89509).Buffer,
                s = r.g.crypto || r.g.msCrypto;
            s && s.getRandomValues ? t.exports = function(t, e) {
                if (t > o) throw new RangeError("requested too many random bytes");
                var r = a.allocUnsafe(t);
                if (t > 0)
                    if (t > i)
                        for (var u = 0; u < t; u += i) s.getRandomValues(r.slice(u, u + i));
                    else s.getRandomValues(r);
                if ("function" === typeof e) return n.nextTick((function() {
                    e(null, r)
                }));
                return r
            } : t.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        },
        79785: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = r(35717),
                o = r(3349),
                a = new Array(16),
                s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                f = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                h = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                c = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                l = [1352829926, 1548603684, 1836072691, 2053994217, 0];

            function d() {
                o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
            }

            function p(t, e) {
                return t << e | t >>> 32 - e
            }

            function m(t, e, r, n, i, o, a, s) {
                return p(t + (e ^ r ^ n) + o + a | 0, s) + i | 0
            }

            function b(t, e, r, n, i, o, a, s) {
                return p(t + (e & r | ~e & n) + o + a | 0, s) + i | 0
            }

            function g(t, e, r, n, i, o, a, s) {
                return p(t + ((e | ~r) ^ n) + o + a | 0, s) + i | 0
            }

            function y(t, e, r, n, i, o, a, s) {
                return p(t + (e & n | r & ~n) + o + a | 0, s) + i | 0
            }

            function v(t, e, r, n, i, o, a, s) {
                return p(t + (e ^ (r | ~n)) + o + a | 0, s) + i | 0
            }
            i(d, o), d.prototype._update = function() {
                for (var t = a, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
                for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, d = 0 | this._e, w = 0 | this._a, M = 0 | this._b, S = 0 | this._c, x = 0 | this._d, _ = 0 | this._e, A = 0; A < 80; A += 1) {
                    var E, k;
                    A < 16 ? (E = m(r, n, i, o, d, t[s[A]], c[0], f[A]), k = v(w, M, S, x, _, t[u[A]], l[0], h[A])) : A < 32 ? (E = b(r, n, i, o, d, t[s[A]], c[1], f[A]), k = y(w, M, S, x, _, t[u[A]], l[1], h[A])) : A < 48 ? (E = g(r, n, i, o, d, t[s[A]], c[2], f[A]), k = g(w, M, S, x, _, t[u[A]], l[2], h[A])) : A < 64 ? (E = y(r, n, i, o, d, t[s[A]], c[3], f[A]), k = b(w, M, S, x, _, t[u[A]], l[3], h[A])) : (E = v(r, n, i, o, d, t[s[A]], c[4], f[A]), k = m(w, M, S, x, _, t[u[A]], l[4], h[A])), r = d, d = o, o = p(i, 10), i = n, n = E, w = _, _ = x, x = p(S, 10), S = M, M = k
                }
                var R = this._b + i + x | 0;
                this._b = this._c + o + _ | 0, this._c = this._d + d + w | 0, this._d = this._e + r + M | 0, this._e = this._a + n + S | 0, this._a = R
            }, d.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = n.alloc ? n.alloc(20) : new n(20);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
            }, t.exports = d
        },
        51675: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLength = e.decode = e.encode = void 0;
            var o = i(r(13550));

            function a(t, e) {
                if ("0" === t[0] && "0" === t[1]) throw new Error("invalid RLP: extra zeros");
                return parseInt(t, e)
            }

            function s(t, e) {
                if (t < 56) return n.from([t + e]);
                var r = h(t),
                    i = h(e + 55 + r.length / 2);
                return n.from(i + r, "hex")
            }

            function u(t) {
                var e, r, i, o, s, f = [],
                    h = t[0];
                if (h <= 127) return {
                    data: t.slice(0, 1),
                    remainder: t.slice(1)
                };
                if (h <= 183) {
                    if (e = h - 127, i = 128 === h ? n.from([]) : t.slice(1, e), 2 === e && i[0] < 128) throw new Error("invalid rlp encoding: byte must be less 0x80");
                    return {
                        data: i,
                        remainder: t.slice(e)
                    }
                }
                if (h <= 191) {
                    if (r = h - 182, t.length - 1 < r) throw new Error("invalid RLP: not enough bytes for string length");
                    if ((e = a(t.slice(1, r).toString("hex"), 16)) <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
                    if ((i = t.slice(r, e + r)).length < e) throw new Error("invalid RLP: not enough bytes for string");
                    return {
                        data: i,
                        remainder: t.slice(e + r)
                    }
                }
                if (h <= 247) {
                    for (e = h - 191, o = t.slice(1, e); o.length;) s = u(o), f.push(s.data), o = s.remainder;
                    return {
                        data: f,
                        remainder: t.slice(e)
                    }
                }
                var c = (r = h - 246) + (e = a(t.slice(1, r).toString("hex"), 16));
                if (c > t.length) throw new Error("invalid rlp: total length is larger than the data");
                if (0 === (o = t.slice(r, c)).length) throw new Error("invalid rlp, List has a invalid length");
                for (; o.length;) s = u(o), f.push(s.data), o = s.remainder;
                return {
                    data: f,
                    remainder: t.slice(c)
                }
            }

            function f(t) {
                return "0x" === t.slice(0, 2)
            }

            function h(t) {
                if (t < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                var e = t.toString(16);
                return e.length % 2 ? "0" + e : e
            }

            function c(t) {
                if (!n.isBuffer(t)) {
                    if ("string" === typeof t) return f(t) ? n.from((e = "string" !== typeof(r = t) ? r : f(r) ? r.slice(2) : r).length % 2 ? "0" + e : e, "hex") : n.from(t);
                    if ("number" === typeof t || "bigint" === typeof t) return t ? function(t) {
                        var e = h(t);
                        return n.from(e, "hex")
                    }(t) : n.from([]);
                    if (null === t || void 0 === t) return n.from([]);
                    if (t instanceof Uint8Array) return n.from(t);
                    if (o.default.isBN(t)) return n.from(t.toArray());
                    throw new Error("invalid type")
                }
                var e, r;
                return t
            }
            e.encode = function t(e) {
                if (Array.isArray(e)) {
                    for (var r = [], i = 0; i < e.length; i++) r.push(t(e[i]));
                    var o = n.concat(r);
                    return n.concat([s(o.length, 192), o])
                }
                var a = c(e);
                return 1 === a.length && a[0] < 128 ? a : n.concat([s(a.length, 128), a])
            }, e.decode = function(t, e) {
                if (void 0 === e && (e = !1), !t || 0 === t.length) return n.from([]);
                var r = u(c(t));
                if (e) return r;
                if (0 !== r.remainder.length) throw new Error("invalid remainder");
                return r.data
            }, e.getLength = function(t) {
                if (!t || 0 === t.length) return n.from([]);
                var e = c(t),
                    r = e[0];
                if (r <= 127) return e.length;
                if (r <= 183) return r - 127;
                if (r <= 191) return r - 182;
                if (r <= 247) return r - 191;
                var i = r - 246;
                return i + a(e.slice(1, i).toString("hex"), 16)
            }
        },
        17221: function(t, e, r) {
            t.exports = r(59119)(r(58573))
        },
        58573: function(t, e, r) {
            const n = new(0, r(86266).ec)("secp256k1"),
                i = n.curve,
                o = i.n.constructor;

            function a(t) {
                const e = t[0];
                switch (e) {
                    case 2:
                    case 3:
                        return 33 !== t.length ? null : function(t, e) {
                            let r = new o(e);
                            if (r.cmp(i.p) >= 0) return null;
                            r = r.toRed(i.red);
                            let a = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                            return 3 === t !== a.isOdd() && (a = a.redNeg()), n.keyPair({
                                pub: {
                                    x: r,
                                    y: a
                                }
                            })
                        }(e, t.subarray(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== t.length ? null : function(t, e, r) {
                            let a = new o(e),
                                s = new o(r);
                            if (a.cmp(i.p) >= 0 || s.cmp(i.p) >= 0) return null;
                            if (a = a.toRed(i.red), s = s.toRed(i.red), (6 === t || 7 === t) && s.isOdd() !== (7 === t)) return null;
                            const u = a.redSqr().redIMul(a);
                            return s.redSqr().redISub(u.redIAdd(i.b)).isZero() ? n.keyPair({
                                pub: {
                                    x: a,
                                    y: s
                                }
                            }) : null
                        }(e, t.subarray(1, 33), t.subarray(33, 65));
                    default:
                        return null
                }
            }

            function s(t, e) {
                const r = e.encode(null, 33 === t.length);
                for (let n = 0; n < t.length; ++n) t[n] = r[n]
            }
            t.exports = {
                contextRandomize: () => 0,
                privateKeyVerify(t) {
                    const e = new o(t);
                    return e.cmp(i.n) < 0 && !e.isZero() ? 0 : 1
                },
                privateKeyNegate(t) {
                    const e = new o(t),
                        r = i.n.sub(e).umod(i.n).toArrayLike(Uint8Array, "be", 32);
                    return t.set(r), 0
                },
                privateKeyTweakAdd(t, e) {
                    const r = new o(e);
                    if (r.cmp(i.n) >= 0) return 1;
                    if (r.iadd(new o(t)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                },
                privateKeyTweakMul(t, e) {
                    let r = new o(e);
                    if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                    r.imul(new o(t)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                },
                publicKeyVerify: t => null === a(t) ? 1 : 0,
                publicKeyCreate(t, e) {
                    const r = new o(e);
                    if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                    return s(t, n.keyFromPrivate(e).getPublic()), 0
                },
                publicKeyConvert(t, e) {
                    const r = a(e);
                    if (null === r) return 1;
                    return s(t, r.getPublic()), 0
                },
                publicKeyNegate(t, e) {
                    const r = a(e);
                    if (null === r) return 1;
                    const n = r.getPublic();
                    return n.y = n.y.redNeg(), s(t, n), 0
                },
                publicKeyCombine(t, e) {
                    const r = new Array(e.length);
                    for (let i = 0; i < e.length; ++i)
                        if (r[i] = a(e[i]), null === r[i]) return 1;
                    let n = r[0].getPublic();
                    for (let i = 1; i < r.length; ++i) n = n.add(r[i].pub);
                    return n.isInfinity() ? 2 : (s(t, n), 0)
                },
                publicKeyTweakAdd(t, e, r) {
                    const n = a(e);
                    if (null === n) return 1;
                    if ((r = new o(r)).cmp(i.n) >= 0) return 2;
                    const u = n.getPublic().add(i.g.mul(r));
                    return u.isInfinity() ? 2 : (s(t, u), 0)
                },
                publicKeyTweakMul(t, e, r) {
                    const n = a(e);
                    if (null === n) return 1;
                    if ((r = new o(r)).cmp(i.n) >= 0 || r.isZero()) return 2;
                    return s(t, n.getPublic().mul(r)), 0
                },
                signatureNormalize(t) {
                    const e = new o(t.subarray(0, 32)),
                        r = new o(t.subarray(32, 64));
                    return e.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && t.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
                },
                signatureExport(t, e) {
                    const r = e.subarray(0, 32),
                        n = e.subarray(32, 64);
                    if (new o(r).cmp(i.n) >= 0) return 1;
                    if (new o(n).cmp(i.n) >= 0) return 1;
                    const {
                        output: a
                    } = t;
                    let s = a.subarray(4, 37);
                    s[0] = 0, s.set(r, 1);
                    let u = 33,
                        f = 0;
                    for (; u > 1 && 0 === s[f] && !(128 & s[f + 1]); --u, ++f);
                    if (s = s.subarray(f), 128 & s[0]) return 1;
                    if (u > 1 && 0 === s[0] && !(128 & s[1])) return 1;
                    let h = a.subarray(39, 72);
                    h[0] = 0, h.set(n, 1);
                    let c = 33,
                        l = 0;
                    for (; c > 1 && 0 === h[l] && !(128 & h[l + 1]); --c, ++l);
                    return h = h.subarray(l), 128 & h[0] || c > 1 && 0 === h[0] && !(128 & h[1]) ? 1 : (t.outputlen = 6 + u + c, a[0] = 48, a[1] = t.outputlen - 2, a[2] = 2, a[3] = s.length, a.set(s, 4), a[4 + u] = 2, a[5 + u] = h.length, a.set(h, 6 + u), 0)
                },
                signatureImport(t, e) {
                    if (e.length < 8) return 1;
                    if (e.length > 72) return 1;
                    if (48 !== e[0]) return 1;
                    if (e[1] !== e.length - 2) return 1;
                    if (2 !== e[2]) return 1;
                    const r = e[3];
                    if (0 === r) return 1;
                    if (5 + r >= e.length) return 1;
                    if (2 !== e[4 + r]) return 1;
                    const n = e[5 + r];
                    if (0 === n) return 1;
                    if (6 + r + n !== e.length) return 1;
                    if (128 & e[4]) return 1;
                    if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
                    if (128 & e[r + 6]) return 1;
                    if (n > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
                    let a = e.subarray(4, 4 + r);
                    if (33 === a.length && 0 === a[0] && (a = a.subarray(1)), a.length > 32) return 1;
                    let s = e.subarray(6 + r);
                    if (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32) throw new Error("S length is too long");
                    let u = new o(a);
                    u.cmp(i.n) >= 0 && (u = new o(0));
                    let f = new o(e.subarray(6 + r));
                    return f.cmp(i.n) >= 0 && (f = new o(0)), t.set(u.toArrayLike(Uint8Array, "be", 32), 0), t.set(f.toArrayLike(Uint8Array, "be", 32), 32), 0
                },
                ecdsaSign(t, e, r, a, s) {
                    if (s) {
                        const t = s;
                        s = n => {
                            const i = t(e, r, null, a, n);
                            if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
                            return new o(i)
                        }
                    }
                    const u = new o(r);
                    if (u.cmp(i.n) >= 0 || u.isZero()) return 1;
                    let f;
                    try {
                        f = n.sign(e, r, {
                            canonical: !0,
                            k: s,
                            pers: a
                        })
                    } catch (h) {
                        return 1
                    }
                    return t.signature.set(f.r.toArrayLike(Uint8Array, "be", 32), 0), t.signature.set(f.s.toArrayLike(Uint8Array, "be", 32), 32), t.recid = f.recoveryParam, 0
                },
                ecdsaVerify(t, e, r) {
                    const s = {
                            r: t.subarray(0, 32),
                            s: t.subarray(32, 64)
                        },
                        u = new o(s.r),
                        f = new o(s.s);
                    if (u.cmp(i.n) >= 0 || f.cmp(i.n) >= 0) return 1;
                    if (1 === f.cmp(n.nh) || u.isZero() || f.isZero()) return 3;
                    const h = a(r);
                    if (null === h) return 2;
                    const c = h.getPublic();
                    return n.verify(e, s, c) ? 0 : 3
                },
                ecdsaRecover(t, e, r, a) {
                    const u = {
                            r: e.slice(0, 32),
                            s: e.slice(32, 64)
                        },
                        f = new o(u.r),
                        h = new o(u.s);
                    if (f.cmp(i.n) >= 0 || h.cmp(i.n) >= 0) return 1;
                    if (f.isZero() || h.isZero()) return 2;
                    let c;
                    try {
                        c = n.recoverPubKey(a, u, r)
                    } catch (l) {
                        return 2
                    }
                    return s(t, c), 0
                },
                ecdh(t, e, r, s, u, f, h) {
                    const c = a(e);
                    if (null === c) return 1;
                    const l = new o(r);
                    if (l.cmp(i.n) >= 0 || l.isZero()) return 2;
                    const d = c.getPublic().mul(l);
                    if (void 0 === u) {
                        const e = d.encode(null, !0),
                            r = n.hash().update(e).digest();
                        for (let n = 0; n < 32; ++n) t[n] = r[n]
                    } else {
                        f || (f = new Uint8Array(32));
                        const e = d.getX().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) f[t] = e[t];
                        h || (h = new Uint8Array(32));
                        const r = d.getY().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) h[t] = r[t];
                        const n = u(f, h, s);
                        if (!(n instanceof Uint8Array && n.length === t.length)) return 2;
                        t.set(n)
                    }
                    return 0
                }
            }
        },
        59119: function(t) {
            const e = "Impossible case. Please create issue.",
                r = "The tweak was out of range or the resulted private key is invalid",
                n = "The tweak was out of range or equal to zero",
                i = "Unknow error on context randomization",
                o = "Private Key is invalid",
                a = "Public Key could not be parsed",
                s = "Public Key serialization error",
                u = "The sum of the public keys is not valid",
                f = "Signature could not be parsed",
                h = "The nonce generation function failed, or the private key was invalid",
                c = "Public key could not be recover",
                l = "Scalar was invalid (zero or overflow)";

            function d(t, e) {
                if (!t) throw new Error(e)
            }

            function p(t, e, r) {
                if (d(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`), void 0 !== r)
                    if (Array.isArray(r)) {
                        const n = `Expected ${t} to be an Uint8Array with length [${r.join(", ")}]`;
                        d(r.includes(e.length), n)
                    } else {
                        const n = `Expected ${t} to be an Uint8Array with length ${r}`;
                        d(e.length === r, n)
                    }
            }

            function m(t) {
                d("Boolean" === g(t), "Expected compressed to be a Boolean")
            }

            function b(t = (t => new Uint8Array(t)), e) {
                return "function" === typeof t && (t = t(e)), p("output", t, e), t
            }

            function g(t) {
                return Object.prototype.toString.call(t).slice(8, -1)
            }
            t.exports = t => ({
                contextRandomize(e) {
                    if (d(null === e || e instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== e && p("seed", e, 32), 1 === t.contextRandomize(e)) throw new Error(i)
                },
                privateKeyVerify: e => (p("private key", e, 32), 0 === t.privateKeyVerify(e)),
                privateKeyNegate(r) {
                    switch (p("private key", r, 32), t.privateKeyNegate(r)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(e)
                    }
                },
                privateKeyTweakAdd(e, n) {
                    switch (p("private key", e, 32), p("tweak", n, 32), t.privateKeyTweakAdd(e, n)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(r)
                    }
                },
                privateKeyTweakMul(e, r) {
                    switch (p("private key", e, 32), p("tweak", r, 32), t.privateKeyTweakMul(e, r)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(n)
                    }
                },
                publicKeyVerify: e => (p("public key", e, [33, 65]), 0 === t.publicKeyVerify(e)),
                publicKeyCreate(e, r = !0, n) {
                    switch (p("private key", e, 32), m(r), n = b(n, r ? 33 : 65), t.publicKeyCreate(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(s)
                    }
                },
                publicKeyConvert(e, r = !0, n) {
                    switch (p("public key", e, [33, 65]), m(r), n = b(n, r ? 33 : 65), t.publicKeyConvert(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(s)
                    }
                },
                publicKeyNegate(r, n = !0, i) {
                    switch (p("public key", r, [33, 65]), m(n), i = b(i, n ? 33 : 65), t.publicKeyNegate(i, r)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(e);
                        case 3:
                            throw new Error(s)
                    }
                },
                publicKeyCombine(e, r = !0, n) {
                    d(Array.isArray(e), "Expected public keys to be an Array"), d(e.length > 0, "Expected public keys array will have more than zero items");
                    for (const t of e) p("public key", t, [33, 65]);
                    switch (m(r), n = b(n, r ? 33 : 65), t.publicKeyCombine(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(u);
                        case 3:
                            throw new Error(s)
                    }
                },
                publicKeyTweakAdd(e, n, i = !0, o) {
                    switch (p("public key", e, [33, 65]), p("tweak", n, 32), m(i), o = b(o, i ? 33 : 65), t.publicKeyTweakAdd(o, e, n)) {
                        case 0:
                            return o;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(r)
                    }
                },
                publicKeyTweakMul(e, r, i = !0, o) {
                    switch (p("public key", e, [33, 65]), p("tweak", r, 32), m(i), o = b(o, i ? 33 : 65), t.publicKeyTweakMul(o, e, r)) {
                        case 0:
                            return o;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(n)
                    }
                },
                signatureNormalize(e) {
                    switch (p("signature", e, 64), t.signatureNormalize(e)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(f)
                    }
                },
                signatureExport(r, n) {
                    p("signature", r, 64);
                    const i = {
                        output: n = b(n, 72),
                        outputlen: 72
                    };
                    switch (t.signatureExport(i, r)) {
                        case 0:
                            return n.slice(0, i.outputlen);
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(e)
                    }
                },
                signatureImport(r, n) {
                    switch (p("signature", r), n = b(n, 64), t.signatureImport(n, r)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(e)
                    }
                },
                ecdsaSign(r, n, i = {}, o) {
                    p("message", r, 32), p("private key", n, 32), d("Object" === g(i), "Expected options to be an Object"), void 0 !== i.data && p("options.data", i.data), void 0 !== i.noncefn && d("Function" === g(i.noncefn), "Expected options.noncefn to be a Function");
                    const a = {
                        signature: o = b(o, 64),
                        recid: null
                    };
                    switch (t.ecdsaSign(a, r, n, i.data, i.noncefn)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(e)
                    }
                },
                ecdsaVerify(e, r, n) {
                    switch (p("signature", e, 64), p("message", r, 32), p("public key", n, [33, 65]), t.ecdsaVerify(e, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(a)
                    }
                },
                ecdsaRecover(r, n, i, o = !0, a) {
                    switch (p("signature", r, 64), d("Number" === g(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), p("message", i, 32), m(o), a = b(a, o ? 33 : 65), t.ecdsaRecover(a, r, n, i)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(c);
                        case 3:
                            throw new Error(e)
                    }
                },
                ecdh(e, r, n = {}, i) {
                    switch (p("public key", e, [33, 65]), p("private key", r, 32), d("Object" === g(n), "Expected options to be an Object"), void 0 !== n.data && p("options.data", n.data), void 0 !== n.hashfn ? (d("Function" === g(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && p("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && p("options.ybuf", n.ybuf, 32), p("output", i)) : i = b(i, 32), t.ecdh(i, e, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(a);
                        case 2:
                            throw new Error(l)
                    }
                }
            })
        },
        49604: function(t, e, r) {
            var n = r(23944);
            t.exports = function(t) {
                return "string" !== typeof t ? t : n(t) ? t.slice(2) : t
            }
        },
        57458: function(t, e) {
            ! function(t) {
                var e, r, n, i = String.fromCharCode;

                function o(t) {
                    for (var e, r, n = [], i = 0, o = t.length; i < o;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (r = t.charCodeAt(i++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--) : n.push(e);
                    return n
                }

                function a(t) {
                    if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                }

                function s(t, e) {
                    return i(t >> e & 63 | 128)
                }

                function u(t) {
                    if (0 == (4294967168 & t)) return i(t);
                    var e = "";
                    return 0 == (4294965248 & t) ? e = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t), e = i(t >> 12 & 15 | 224), e += s(t, 6)) : 0 == (4292870144 & t) && (e = i(t >> 18 & 7 | 240), e += s(t, 12), e += s(t, 6)), e += i(63 & t | 128)
                }

                function f() {
                    if (n >= r) throw Error("Invalid byte index");
                    var t = 255 & e[n];
                    if (n++, 128 == (192 & t)) return 63 & t;
                    throw Error("Invalid continuation byte")
                }

                function h() {
                    var t, i;
                    if (n > r) throw Error("Invalid byte index");
                    if (n == r) return !1;
                    if (t = 255 & e[n], n++, 0 == (128 & t)) return t;
                    if (192 == (224 & t)) {
                        if ((i = (31 & t) << 6 | f()) >= 128) return i;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & t)) {
                        if ((i = (15 & t) << 12 | f() << 6 | f()) >= 2048) return a(i), i;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & t) && (i = (7 & t) << 18 | f() << 12 | f() << 6 | f()) >= 65536 && i <= 1114111) return i;
                    throw Error("Invalid UTF-8 detected")
                }
                t.version = "3.0.0", t.encode = function(t) {
                    for (var e = o(t), r = e.length, n = -1, i = ""; ++n < r;) i += u(e[n]);
                    return i
                }, t.decode = function(t) {
                    e = o(t), r = e.length, n = 0;
                    for (var a, s = []; !1 !== (a = h());) s.push(a);
                    return function(t) {
                        for (var e, r = t.length, n = -1, o = ""; ++n < r;)(e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);
                        return o
                    }(s)
                }
            }(e)
        },
        18269: function(t, e, r) {
            var n = r(94278),
                i = r(90329),
                o = r(28668),
                a = r(61798),
                s = r(13550),
                u = function(t, e) {
                    var r = [];
                    return e.forEach((function(e) {
                        if ("object" === typeof e.components) {
                            if ("tuple" !== e.type.substring(0, 5)) throw new Error("components found but type is not tuple; report on GitHub");
                            var n = "",
                                i = e.type.indexOf("[");
                            i >= 0 && (n = e.type.substring(i));
                            var o = u(t, e.components);
                            Array.isArray(o) && t ? r.push("tuple(" + o.join(",") + ")" + n) : t ? r.push("(" + o + ")") : r.push("(" + o.join(",") + ")" + n)
                        } else r.push(e.type)
                    })), r
                },
                f = function(t) {
                    if (!i.isHexStrict(t)) throw new Error("The parameter must be a valid HEX string.");
                    var e = "",
                        r = 0,
                        n = t.length;
                    for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
                        var o = parseInt(t.slice(r, r + 2), 16);
                        e += String.fromCharCode(o)
                    }
                    return e
                },
                h = function(t) {
                    if (!t) return "0x00";
                    for (var e = "", r = 0; r < t.length; r++) {
                        var n = t.charCodeAt(r).toString(16);
                        e += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + e
                },
                c = function(t) {
                    if (t = t ? t.toLowerCase() : "ether", !n.unitMap[t]) throw new Error('This unit "' + t + "\" doesn't exist, please use the one of the following units" + JSON.stringify(n.unitMap, null, 2));
                    return t
                };
            t.exports = {
                _fireError: function(t, e, r, n, i) {
                    return !t || "object" !== typeof t || t instanceof Error || !t.data || ((t.data && "object" === typeof t.data || Array.isArray(t.data)) && (t.data = JSON.stringify(t.data, null, 2)), t = t.message + "\n" + t.data), "string" === typeof t && (t = new Error(t)), "function" === typeof n && n(t, i), "function" === typeof r && ((e && "function" === typeof e.listeners && e.listeners("error").length || "function" === typeof n) && e.catch((function() {})), setTimeout((function() {
                        r(t)
                    }), 1)), e && "function" === typeof e.emit && setTimeout((function() {
                        e.emit("error", t, i), e.removeAllListeners()
                    }), 1), e
                },
                _jsonInterfaceMethodToString: function(t) {
                    return t && "object" === typeof t && t.name && -1 !== t.name.indexOf("(") ? t.name : t.name + "(" + u(!1, t.inputs).join(",") + ")"
                },
                _flattenTypes: u,
                randomHex: function(t) {
                    return "0x" + a(t).toString("hex")
                },
                BN: i.BN,
                isBN: i.isBN,
                isBigNumber: i.isBigNumber,
                isHex: i.isHex,
                isHexStrict: i.isHexStrict,
                sha3: i.sha3,
                sha3Raw: i.sha3Raw,
                keccak256: i.sha3,
                soliditySha3: o.soliditySha3,
                soliditySha3Raw: o.soliditySha3Raw,
                encodePacked: o.encodePacked,
                isAddress: i.isAddress,
                checkAddressChecksum: i.checkAddressChecksum,
                toChecksumAddress: function(t) {
                    if ("undefined" === typeof t) return "";
                    if (!/^(0x)?[0-9a-f]{40}$/i.test(t)) throw new Error('Given address "' + t + '" is not a valid Ethereum address.');
                    t = t.toLowerCase().replace(/^0x/i, "");
                    for (var e = i.sha3(t).replace(/^0x/i, ""), r = "0x", n = 0; n < t.length; n++) parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];
                    return r
                },
                toHex: i.toHex,
                toBN: i.toBN,
                bytesToHex: i.bytesToHex,
                hexToBytes: i.hexToBytes,
                hexToNumberString: i.hexToNumberString,
                hexToNumber: i.hexToNumber,
                toDecimal: i.hexToNumber,
                numberToHex: i.numberToHex,
                fromDecimal: i.numberToHex,
                hexToUtf8: i.hexToUtf8,
                hexToString: i.hexToUtf8,
                toUtf8: i.hexToUtf8,
                stripHexPrefix: i.stripHexPrefix,
                utf8ToHex: i.utf8ToHex,
                stringToHex: i.utf8ToHex,
                fromUtf8: i.utf8ToHex,
                hexToAscii: f,
                toAscii: f,
                asciiToHex: h,
                fromAscii: h,
                unitMap: n.unitMap,
                toWei: function(t, e) {
                    if (e = c(e), !i.isBN(t) && "string" !== typeof t) throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
                    return i.isBN(t) ? n.toWei(t, e) : n.toWei(t, e).toString(10)
                },
                fromWei: function(t, e) {
                    if (e = c(e), !i.isBN(t) && "string" !== typeof t) throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
                    return i.isBN(t) ? n.fromWei(t, e) : n.fromWei(t, e).toString(10)
                },
                padLeft: i.leftPad,
                leftPad: i.leftPad,
                padRight: i.rightPad,
                rightPad: i.rightPad,
                toTwosComplement: i.toTwosComplement,
                isBloom: i.isBloom,
                isUserEthereumAddressInBloom: i.isUserEthereumAddressInBloom,
                isContractAddressInBloom: i.isContractAddressInBloom,
                isTopic: i.isTopic,
                isTopicInBloom: i.isTopicInBloom,
                isInBloom: i.isInBloom,
                compareBlockNumbers: function(t, e) {
                    if (t === e) return 0;
                    if ("genesis" !== t && "earliest" !== t && 0 !== t || "genesis" !== e && "earliest" !== e && 0 !== e) {
                        if ("genesis" === t || "earliest" === t || 0 === t) return -1;
                        if ("genesis" === e || "earliest" === e || 0 === e) return 1;
                        if ("latest" === t || "finalized" === t) return "pending" === e ? -1 : 1;
                        if ("latest" === e || "finalized" === e) return "pending" === t ? 1 : -1;
                        if ("pending" === t) return 1;
                        if ("pending" === e) return -1;
                        if ("safe" === t || "safe" === e) return; {
                            let r = new s(t),
                                n = new s(e);
                            return r.lt(n) ? -1 : r.eq(n) ? 0 : 1
                        }
                    }
                    return 0
                },
                toNumber: i.toNumber
            }
        },
        28668: function(t, e, r) {
            var n = r(13550),
                i = r(90329),
                o = function(t) {
                    var e = typeof t;
                    if ("string" === e) return i.isHexStrict(t) ? new n(t.replace(/0x/i, ""), 16) : new n(t, 10);
                    if ("number" === e) return new n(t);
                    if (i.isBigNumber(t)) return new n(t.toString(10));
                    if (i.isBN(t)) return t;
                    throw new Error(t + " is not a number")
                },
                a = function(t, e, r) {
                    var a, s, u;
                    if ("bytes" === (t = (u = t).startsWith("int[") ? "int256" + u.slice(3) : "int" === u ? "int256" : u.startsWith("uint[") ? "uint256" + u.slice(4) : "uint" === u ? "uint256" : u.startsWith("fixed[") ? "fixed128x128" + u.slice(5) : "fixed" === u ? "fixed128x128" : u.startsWith("ufixed[") ? "ufixed128x128" + u.slice(6) : "ufixed" === u ? "ufixed128x128" : u)) {
                        if (e.replace(/^0x/i, "").length % 2 !== 0) throw new Error("Invalid bytes characters " + e.length);
                        return e
                    }
                    if ("string" === t) return i.utf8ToHex(e);
                    if ("bool" === t) return e ? "01" : "00";
                    if (t.startsWith("address")) {
                        if (a = r ? 64 : 40, !i.isAddress(e)) throw new Error(e + " is not a valid address, or the checksum is invalid.");
                        return i.leftPad(e.toLowerCase(), a)
                    }
                    if (a = function(t) {
                            var e = /^\D+(\d+).*$/.exec(t);
                            return e ? parseInt(e[1], 10) : null
                        }(t), t.startsWith("bytes")) {
                        if (!a) throw new Error("bytes[] not yet supported in solidity");
                        if (r && (a = 32), a < 1 || a > 32 || a < e.replace(/^0x/i, "").length / 2) throw new Error("Invalid bytes" + a + " for " + e);
                        return i.rightPad(e, 2 * a)
                    }
                    if (t.startsWith("uint")) {
                        if (a % 8 || a < 8 || a > 256) throw new Error("Invalid uint" + a + " size");
                        if ((s = o(e)).bitLength() > a) throw new Error("Supplied uint exceeds width: " + a + " vs " + s.bitLength());
                        if (s.lt(new n(0))) throw new Error("Supplied uint " + s.toString() + " is negative");
                        return a ? i.leftPad(s.toString("hex"), a / 8 * 2) : s
                    }
                    if (t.startsWith("int")) {
                        if (a % 8 || a < 8 || a > 256) throw new Error("Invalid int" + a + " size");
                        if ((s = o(e)).bitLength() > a) throw new Error("Supplied int exceeds width: " + a + " vs " + s.bitLength());
                        return s.lt(new n(0)) ? s.toTwos(a).toString("hex") : a ? i.leftPad(s.toString("hex"), a / 8 * 2) : s
                    }
                    throw new Error("Unsupported or invalid type: " + t)
                },
                s = function(t) {
                    if (Array.isArray(t)) throw new Error("Autodetection of array types is not supported.");
                    var e, r, o = "";
                    if (t && "object" === typeof t && (t.hasOwnProperty("v") || t.hasOwnProperty("t") || t.hasOwnProperty("value") || t.hasOwnProperty("type")) ? (e = t.hasOwnProperty("t") ? t.t : t.type, o = t.hasOwnProperty("v") ? t.v : t.value) : (e = i.toHex(t, !0), o = i.toHex(t), e.startsWith("int") || e.startsWith("uint") || (e = "bytes")), !e.startsWith("int") && !e.startsWith("uint") || "string" !== typeof o || /^(-)?0x/i.test(o) || (o = new n(o)), Array.isArray(o)) {
                        if (r = function(t) {
                                var e = /^\D+\d*\[(\d+)\]$/.exec(t);
                                return e ? parseInt(e[1], 10) : null
                            }(e), r && o.length !== r) throw new Error(e + " is not matching the given array " + JSON.stringify(o));
                        r = o.length
                    }
                    return Array.isArray(o) ? o.map((function(t) {
                        return a(e, t, r).toString("hex").replace("0x", "")
                    })).join("") : a(e, o, r).toString("hex").replace("0x", "")
                };
            t.exports = {
                soliditySha3: function() {
                    var t = Array.prototype.slice.call(arguments),
                        e = t.map(s);
                    return i.sha3("0x" + e.join(""))
                },
                soliditySha3Raw: function() {
                    return i.sha3Raw("0x" + Array.prototype.slice.call(arguments).map(s).join(""))
                },
                encodePacked: function() {
                    var t = Array.prototype.slice.call(arguments),
                        e = t.map(s);
                    return "0x" + e.join("").toLowerCase()
                }
            }
        },
        90329: function(t, e, r) {
            var n = r(48764).Buffer,
                i = r(13550),
                o = r(83206),
                a = r(57458),
                s = r(79207),
                u = r(46877),
                f = function(t) {
                    return i.isBN(t)
                },
                h = function(t) {
                    return t && t.constructor && "BigNumber" === t.constructor.name
                },
                c = function(t) {
                    try {
                        return o.apply(null, arguments)
                    } catch (e) {
                        throw new Error(e + ' Given value: "' + t + '"')
                    }
                },
                l = function(t) {
                    return !!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!(!/^(0x|0X)?[0-9a-f]{40}$/.test(t) && !/^(0x|0X)?[0-9A-F]{40}$/.test(t)) || d(t))
                },
                d = function(t) {
                    t = t.replace(/^0x/i, "");
                    for (var e = M(t.toLowerCase()).replace(/^0x/i, ""), r = 0; r < 40; r++)
                        if (parseInt(e[r], 16) > 7 && t[r].toUpperCase() !== t[r] || parseInt(e[r], 16) <= 7 && t[r].toLowerCase() !== t[r]) return !1;
                    return !0
                },
                p = function(t) {
                    var e = "";
                    t = (t = (t = (t = (t = a.encode(t)).replace(/^(?:\u0000)*/, "")).split("").reverse().join("")).replace(/^(?:\u0000)*/, "")).split("").reverse().join("");
                    for (var r = 0; r < t.length; r++) {
                        var n = t.charCodeAt(r).toString(16);
                        e += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + e
                },
                m = function(t) {
                    if (!t) return t;
                    if ("string" === typeof t && !y(t)) throw new Error('Given value "' + t + '" is not a valid hex string.');
                    return c(t).toNumber()
                },
                b = function(t) {
                    if (null === t || void 0 === t) return t;
                    if (!isFinite(t) && !y(t)) throw new Error('Given input "' + t + '" is not a number.');
                    var e = c(t),
                        r = e.toString(16);
                    return e.lt(new i(0)) ? "-0x" + r.slice(1) : "0x" + r
                },
                g = function(t, e) {
                    if (l(t)) return e ? "address" : "0x" + t.toLowerCase().replace(/^0x/i, "");
                    if ("boolean" === typeof t) return e ? "bool" : t ? "0x01" : "0x00";
                    if (n.isBuffer(t)) return "0x" + t.toString("hex");
                    if ("object" === typeof t && t && !h(t) && !f(t)) return e ? "string" : p(JSON.stringify(t));
                    if ("string" === typeof t) {
                        if (0 === t.indexOf("-0x") || 0 === t.indexOf("-0X")) return e ? "int256" : b(t);
                        if (0 === t.indexOf("0x") || 0 === t.indexOf("0X")) return e ? "bytes" : t;
                        if (!isFinite(t)) return e ? "string" : p(t)
                    }
                    return e ? t < 0 ? "int256" : "uint256" : b(t)
                },
                y = function(t) {
                    return ("string" === typeof t || "number" === typeof t) && /^(-)?0x[0-9a-f]*$/i.test(t)
                },
                v = function(t) {
                    return ("string" === typeof t || "number" === typeof t) && /^(-0x|0x)?[0-9a-f]*$/i.test(t)
                },
                w = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                M = function(t) {
                    f(t) && (t = t.toString()), y(t) && /^0x/i.test(t.toString()) ? t = s.toBuffer(t) : "string" === typeof t && (t = n.from(t, "utf-8"));
                    var e = s.bufferToHex(s.keccak256(t));
                    return e === w ? null : e
                };
            M._Hash = s.keccak256;
            var S = function(t) {
                if ("string" == typeof t && t.includes("0x")) {
                    const [e, r] = t.toLocaleLowerCase().startsWith("-") ? ["-", t.slice(3)] : ["", t.slice(2)];
                    return new i(e + r, 16)
                }
                return new i(t)
            };
            Object.setPrototypeOf(S, i), Object.setPrototypeOf(S.prototype, i.prototype), t.exports = {
                BN: S,
                isBN: f,
                isBigNumber: h,
                toBN: c,
                isAddress: l,
                isBloom: function(t) {
                    return u.isBloom(t)
                },
                isUserEthereumAddressInBloom: function(t, e) {
                    return u.isUserEthereumAddressInBloom(t, e)
                },
                isContractAddressInBloom: function(t, e) {
                    return u.isContractAddressInBloom(t, e)
                },
                isTopic: function(t) {
                    return u.isTopic(t)
                },
                isTopicInBloom: function(t, e) {
                    return u.isTopicInBloom(t, e)
                },
                isInBloom: function(t, e) {
                    return u.isInBloom(t, e)
                },
                checkAddressChecksum: d,
                utf8ToHex: p,
                hexToUtf8: function(t) {
                    if (!y(t)) throw new Error('The parameter "' + t + '" must be a valid HEX string.');
                    for (var e = "", r = 0, n = (t = (t = (t = (t = (t = t.replace(/^0x/i, "")).replace(/^(?:00)*/, "")).split("").reverse().join("")).replace(/^(?:00)*/, "")).split("").reverse().join("")).length, i = 0; i < n; i += 2) r = parseInt(t.slice(i, i + 2), 16), e += String.fromCharCode(r);
                    return a.decode(e)
                },
                hexToNumber: m,
                hexToNumberString: function(t) {
                    if (!t) return t;
                    if ("string" === typeof t && !y(t)) throw new Error('Given value "' + t + '" is not a valid hex string.');
                    return c(t).toString(10)
                },
                numberToHex: b,
                toHex: g,
                hexToBytes: function(t) {
                    if (t = t.toString(16), !y(t)) throw new Error('Given value "' + t + '" is not a valid hex string.');
                    t = t.replace(/^0x/i, "");
                    for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.slice(r, r + 2), 16));
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
                    return "0x" + e.join("")
                },
                isHex: v,
                isHexStrict: y,
                stripHexPrefix: function(t) {
                    return 0 !== t && v(t) ? t.replace(/^(-)?0x/i, "$1") : t
                },
                leftPad: function(t, e, r) {
                    var n = /^0x/i.test(t) || "number" === typeof t,
                        i = e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
                    return (n ? "0x" : "") + new Array(i).join(r || "0") + t
                },
                rightPad: function(t, e, r) {
                    var n = /^0x/i.test(t) || "number" === typeof t,
                        i = e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
                    return (n ? "0x" : "") + t + new Array(i).join(r || "0")
                },
                toTwosComplement: function(t) {
                    return "0x" + c(t).toTwos(256).toString(16, 64)
                },
                sha3: M,
                sha3Raw: function(t) {
                    return null === (t = M(t)) ? w : t
                },
                toNumber: function(t) {
                    return "number" === typeof t ? t : m(g(t))
                }
            }
        },
        23487: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createHashFunction = function(t) {
                return function(e) {
                    var r = t();
                    return r.update(e), n.from(r.digest())
                }
            }
        },
        42929: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(23487),
                i = r(95811);
            e.keccak224 = n.createHashFunction((function() {
                return i("keccak224")
            })), e.keccak256 = n.createHashFunction((function() {
                return i("keccak256")
            })), e.keccak384 = n.createHashFunction((function() {
                return i("keccak384")
            })), e.keccak512 = n.createHashFunction((function() {
                return i("keccak512")
            }))
        },
        60320: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(61798);
            e.getRandomBytes = function(t) {
                return new Promise((function(e, r) {
                    n(t, (function(t, n) {
                        t ? r(t) : e(n)
                    }))
                }))
            }, e.getRandomBytesSync = function(t) {
                return n(t)
            }
        },
        47476: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function a(t) {
                            try {
                                u(n.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(t) {
                            try {
                                u(n.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(a, s)
                        }
                        u((n = n.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var r, n, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (s) {
                                    o = [6, s], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(17221),
                a = r(60320);
            e.createPrivateKey = function() {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.getRandomBytes(32)];
                                case 1:
                                    return t = e.sent(), o.privateKeyVerify(t) ? [2, t] : [3, 0];
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, e.createPrivateKeySync = function() {
                    for (;;) {
                        var t = a.getRandomBytesSync(32);
                        if (o.privateKeyVerify(t)) return t
                    }
                },
                function(t) {
                    for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
                }(r(17221))
        },
        30985: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = this && this.__read || function(t, e) {
                    var r = "function" === typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, i, o = r.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value)
                    } catch (s) {
                        i = {
                            error: s
                        }
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return a
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isZeroAddress = e.zeroAddress = e.importPublic = e.privateToAddress = e.privateToPublic = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isValidAddress = e.Account = void 0;
            var a = o(r(27596)),
                s = r(6045),
                u = r(47476),
                f = r(78722),
                h = r(51803),
                c = r(22599),
                l = r(5405),
                d = r(54586),
                p = r(59949),
                m = function() {
                    function t(t, e, r, n) {
                        void 0 === t && (t = new s.BN(0)), void 0 === e && (e = new s.BN(0)), void 0 === r && (r = h.KECCAK256_RLP), void 0 === n && (n = h.KECCAK256_NULL), this.nonce = t, this.balance = e, this.stateRoot = r, this.codeHash = n, this._validate()
                    }
                    return t.fromAccountData = function(e) {
                        var r = e.nonce,
                            n = e.balance,
                            i = e.stateRoot,
                            o = e.codeHash;
                        return new t(r ? new s.BN((0, c.toBuffer)(r)) : void 0, n ? new s.BN((0, c.toBuffer)(n)) : void 0, i ? (0, c.toBuffer)(i) : void 0, o ? (0, c.toBuffer)(o) : void 0)
                    }, t.fromRlpSerializedAccount = function(t) {
                        var e = s.rlp.decode(t);
                        if (!Array.isArray(e)) throw new Error("Invalid serialized account input. Must be array");
                        return this.fromValuesArray(e)
                    }, t.fromValuesArray = function(e) {
                        var r = i(e, 4),
                            n = r[0],
                            o = r[1],
                            a = r[2],
                            u = r[3];
                        return new t(new s.BN(n), new s.BN(o), a, u)
                    }, t.prototype._validate = function() {
                        if (this.nonce.lt(new s.BN(0))) throw new Error("nonce must be greater than zero");
                        if (this.balance.lt(new s.BN(0))) throw new Error("balance must be greater than zero");
                        if (32 !== this.stateRoot.length) throw new Error("stateRoot must have a length of 32");
                        if (32 !== this.codeHash.length) throw new Error("codeHash must have a length of 32")
                    }, t.prototype.raw = function() {
                        return [(0, p.bnToUnpaddedBuffer)(this.nonce), (0, p.bnToUnpaddedBuffer)(this.balance), this.stateRoot, this.codeHash]
                    }, t.prototype.serialize = function() {
                        return s.rlp.encode(this.raw())
                    }, t.prototype.isContract = function() {
                        return !this.codeHash.equals(h.KECCAK256_NULL)
                    }, t.prototype.isEmpty = function() {
                        return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(h.KECCAK256_NULL)
                    }, t
                }();
            e.Account = m;
            e.isValidAddress = function(t) {
                try {
                    (0, d.assertIsString)(t)
                } catch (e) {
                    return !1
                }
                return /^0x[0-9a-fA-F]{40}$/.test(t)
            };
            e.toChecksumAddress = function(t, e) {
                (0, d.assertIsHexString)(t);
                var r = (0, f.stripHexPrefix)(t).toLowerCase(),
                    n = "";
                e && (n = (0, p.toType)(e, p.TypeOutput.BN).toString() + "0x");
                for (var i = (0, l.keccakFromString)(n + r).toString("hex"), o = "0x", a = 0; a < r.length; a++) parseInt(i[a], 16) >= 8 ? o += r[a].toUpperCase() : o += r[a];
                return o
            };
            e.isValidChecksumAddress = function(t, r) {
                return (0, e.isValidAddress)(t) && (0, e.toChecksumAddress)(t, r) === t
            };
            e.generateAddress = function(t, e) {
                (0, d.assertIsBuffer)(t), (0, d.assertIsBuffer)(e);
                var r = new s.BN(e);
                return r.isZero() ? (0, l.rlphash)([t, null]).slice(-20) : (0, l.rlphash)([t, n.from(r.toArray())]).slice(-20)
            };
            e.generateAddress2 = function(t, e, r) {
                return (0, d.assertIsBuffer)(t), (0, d.assertIsBuffer)(e), (0, d.assertIsBuffer)(r), (0, a.default)(20 === t.length), (0, a.default)(32 === e.length), (0, l.keccak256)(n.concat([n.from("ff", "hex"), t, e, (0, l.keccak256)(r)])).slice(-20)
            };
            e.isValidPrivate = function(t) {
                return (0, u.privateKeyVerify)(t)
            };
            e.isValidPublic = function(t, e) {
                return void 0 === e && (e = !1), (0, d.assertIsBuffer)(t), 64 === t.length ? (0, u.publicKeyVerify)(n.concat([n.from([4]), t])) : !!e && (0, u.publicKeyVerify)(t)
            };
            e.pubToAddress = function(t, e) {
                return void 0 === e && (e = !1), (0, d.assertIsBuffer)(t), e && 64 !== t.length && (t = n.from((0, u.publicKeyConvert)(t, !1).slice(1))), (0, a.default)(64 === t.length), (0, l.keccak)(t).slice(-20)
            }, e.publicToAddress = e.pubToAddress;
            e.privateToPublic = function(t) {
                return (0, d.assertIsBuffer)(t), n.from((0, u.publicKeyCreate)(t, !1)).slice(1)
            };
            e.privateToAddress = function(t) {
                return (0, e.publicToAddress)((0, e.privateToPublic)(t))
            };
            e.importPublic = function(t) {
                return (0, d.assertIsBuffer)(t), 64 !== t.length && (t = n.from((0, u.publicKeyConvert)(t, !1).slice(1))), t
            };
            e.zeroAddress = function() {
                var t = (0, c.zeros)(20);
                return (0, c.bufferToHex)(t)
            };
            e.isZeroAddress = function(t) {
                try {
                    (0, d.assertIsString)(t)
                } catch (r) {
                    return !1
                }
                return (0, e.zeroAddress)() === t
            }
        },
        2395: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Address = void 0;
            var o = i(r(27596)),
                a = r(6045),
                s = r(22599),
                u = r(30985),
                f = function() {
                    function t(t) {
                        (0, o.default)(20 === t.length, "Invalid address length"), this.buf = t
                    }
                    return t.zero = function() {
                        return new t((0, s.zeros)(20))
                    }, t.fromString = function(e) {
                        return (0, o.default)((0, u.isValidAddress)(e), "Invalid address"), new t((0, s.toBuffer)(e))
                    }, t.fromPublicKey = function(e) {
                        return (0, o.default)(n.isBuffer(e), "Public key should be Buffer"), new t((0, u.pubToAddress)(e))
                    }, t.fromPrivateKey = function(e) {
                        return (0, o.default)(n.isBuffer(e), "Private key should be Buffer"), new t((0, u.privateToAddress)(e))
                    }, t.generate = function(e, r) {
                        return (0, o.default)(a.BN.isBN(r)), new t((0, u.generateAddress)(e.buf, r.toArrayLike(n)))
                    }, t.generate2 = function(e, r, i) {
                        return (0, o.default)(n.isBuffer(r)), (0, o.default)(n.isBuffer(i)), new t((0, u.generateAddress2)(e.buf, r, i))
                    }, t.prototype.equals = function(t) {
                        return this.buf.equals(t.buf)
                    }, t.prototype.isZero = function() {
                        return this.equals(t.zero())
                    }, t.prototype.isPrecompileOrSystemAddress = function() {
                        var t = new a.BN(this.buf),
                            e = new a.BN(0),
                            r = new a.BN("ffff", "hex");
                        return t.gte(e) && t.lte(r)
                    }, t.prototype.toString = function() {
                        return "0x" + this.buf.toString("hex")
                    }, t.prototype.toBuffer = function() {
                        return n.from(this.buf)
                    }, t
                }();
            e.Address = f
        },
        22599: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = this && this.__values || function(t) {
                    var e = "function" === typeof Symbol && Symbol.iterator,
                        r = e && t[e],
                        n = 0;
                    if (r) return r.call(t);
                    if (t && "number" === typeof t.length) return {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                },
                o = this && this.__read || function(t, e) {
                    var r = "function" === typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, i, o = r.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value)
                    } catch (s) {
                        i = {
                            error: s
                        }
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return a
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bufArrToArr = e.arrToBufArr = e.validateNoLeadingZeroes = e.baToJSON = e.toUtf8 = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToHex = e.bufferToInt = e.toBuffer = e.unpadHexString = e.unpadArray = e.unpadBuffer = e.setLengthRight = e.setLengthLeft = e.zeros = e.intToBuffer = e.intToHex = void 0;
            var a = r(6045),
                s = r(78722),
                u = r(54586);
            e.intToHex = function(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw new Error("Received an invalid integer type: ".concat(t));
                return "0x".concat(t.toString(16))
            };
            e.intToBuffer = function(t) {
                var r = (0, e.intToHex)(t);
                return n.from((0, s.padToEven)(r.slice(2)), "hex")
            };
            e.zeros = function(t) {
                return n.allocUnsafe(t).fill(0)
            };
            var f = function(t, r, n) {
                var i = (0, e.zeros)(r);
                return n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r)
            };
            e.setLengthLeft = function(t, e) {
                return (0, u.assertIsBuffer)(t), f(t, e, !1)
            };
            e.setLengthRight = function(t, e) {
                return (0, u.assertIsBuffer)(t), f(t, e, !0)
            };
            var h = function(t) {
                for (var e = t[0]; t.length > 0 && "0" === e.toString();) e = (t = t.slice(1))[0];
                return t
            };
            e.unpadBuffer = function(t) {
                return (0, u.assertIsBuffer)(t), h(t)
            };
            e.unpadArray = function(t) {
                return (0, u.assertIsArray)(t), h(t)
            };
            e.unpadHexString = function(t) {
                return (0, u.assertIsHexString)(t), t = (0, s.stripHexPrefix)(t), h(t)
            };
            e.toBuffer = function(t) {
                if (null === t || void 0 === t) return n.allocUnsafe(0);
                if (n.isBuffer(t)) return n.from(t);
                if (Array.isArray(t) || t instanceof Uint8Array) return n.from(t);
                if ("string" === typeof t) {
                    if (!(0, s.isHexString)(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(t));
                    return n.from((0, s.padToEven)((0, s.stripHexPrefix)(t)), "hex")
                }
                if ("number" === typeof t) return (0, e.intToBuffer)(t);
                if (a.BN.isBN(t)) {
                    if (t.isNeg()) throw new Error("Cannot convert negative BN to buffer. Given: ".concat(t));
                    return t.toArrayLike(n)
                }
                if (t.toArray) return n.from(t.toArray());
                if (t.toBuffer) return n.from(t.toBuffer());
                throw new Error("invalid type")
            };
            e.bufferToInt = function(t) {
                return new a.BN((0, e.toBuffer)(t)).toNumber()
            };
            e.bufferToHex = function(t) {
                return "0x" + (t = (0, e.toBuffer)(t)).toString("hex")
            };
            e.fromSigned = function(t) {
                return new a.BN(t).fromTwos(256)
            };
            e.toUnsigned = function(t) {
                return n.from(t.toTwos(256).toArray())
            };
            e.addHexPrefix = function(t) {
                return "string" !== typeof t || (0, s.isHexPrefixed)(t) ? t : "0x" + t
            };
            e.toUtf8 = function(t) {
                if ((t = (0, s.stripHexPrefix)(t)).length % 2 !== 0) throw new Error("Invalid non-even hex string input for toUtf8() provided");
                return n.from(t.replace(/^(00)+|(00)+$/g, ""), "hex").toString("utf8")
            };
            e.baToJSON = function(t) {
                if (n.isBuffer(t)) return "0x".concat(t.toString("hex"));
                if (t instanceof Array) {
                    for (var r = [], i = 0; i < t.length; i++) r.push((0, e.baToJSON)(t[i]));
                    return r
                }
            };
            e.validateNoLeadingZeroes = function(t) {
                var e, r;
                try {
                    for (var n = i(Object.entries(t)), a = n.next(); !a.done; a = n.next()) {
                        var s = o(a.value, 2),
                            u = s[0],
                            f = s[1];
                        if (void 0 !== f && f.length > 0 && 0 === f[0]) throw new Error("".concat(u, " cannot have leading zeroes, received: ").concat(f.toString("hex")))
                    }
                } catch (h) {
                    e = {
                        error: h
                    }
                } finally {
                    try {
                        a && !a.done && (r = n.return) && r.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, e.arrToBufArr = function t(e) {
                return Array.isArray(e) ? e.map((function(e) {
                    return t(e)
                })) : n.from(e)
            }, e.bufArrToArr = function t(e) {
                return Array.isArray(e) ? e.map((function(e) {
                    return t(e)
                })) : Uint8Array.from(null !== e && void 0 !== e ? e : [])
            }
        },
        51803: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.MAX_INTEGER = e.MAX_UINT64 = void 0;
            var n = r(48764),
                i = r(6045);
            e.MAX_UINT64 = new i.BN("ffffffffffffffff", 16), e.MAX_INTEGER = new i.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), e.TWO_POW256 = new i.BN("10000000000000000000000000000000000000000000000000000000000000000", 16), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.KECCAK256_NULL = n.Buffer.from(e.KECCAK256_NULL_S, "hex"), e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.KECCAK256_RLP_ARRAY = n.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.KECCAK256_RLP = n.Buffer.from(e.KECCAK256_RLP_S, "hex")
        },
        6045: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(e, r);
                    i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    }), Object.defineProperty(t, n, i)
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                o = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
                    return i(e, t), e
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rlp = e.BN = void 0;
            var s = a(r(13550));
            e.BN = s.default;
            var u = o(r(51675));
            e.rlp = u
        },
        5405: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rlphash = e.ripemd160FromArray = e.ripemd160FromString = e.ripemd160 = e.sha256FromArray = e.sha256FromString = e.sha256 = e.keccakFromArray = e.keccakFromHexString = e.keccakFromString = e.keccak256 = e.keccak = void 0;
            var i = r(42929),
                o = r(23482),
                a = r(6045),
                s = r(22599),
                u = r(54586);
            e.keccak = function(t, e) {
                switch (void 0 === e && (e = 256), (0, u.assertIsBuffer)(t), e) {
                    case 224:
                        return (0, i.keccak224)(t);
                    case 256:
                        return (0, i.keccak256)(t);
                    case 384:
                        return (0, i.keccak384)(t);
                    case 512:
                        return (0, i.keccak512)(t);
                    default:
                        throw new Error("Invald algorithm: keccak".concat(e))
                }
            };
            e.keccak256 = function(t) {
                return (0, e.keccak)(t)
            };
            e.keccakFromString = function(t, r) {
                void 0 === r && (r = 256), (0, u.assertIsString)(t);
                var i = n.from(t, "utf8");
                return (0, e.keccak)(i, r)
            };
            e.keccakFromHexString = function(t, r) {
                return void 0 === r && (r = 256), (0, u.assertIsHexString)(t), (0, e.keccak)((0, s.toBuffer)(t), r)
            };
            e.keccakFromArray = function(t, r) {
                return void 0 === r && (r = 256), (0, u.assertIsArray)(t), (0, e.keccak)((0, s.toBuffer)(t), r)
            };
            var f = function(t) {
                return t = (0, s.toBuffer)(t), o("sha256").update(t).digest()
            };
            e.sha256 = function(t) {
                return (0, u.assertIsBuffer)(t), f(t)
            };
            e.sha256FromString = function(t) {
                return (0, u.assertIsString)(t), f(t)
            };
            e.sha256FromArray = function(t) {
                return (0, u.assertIsArray)(t), f(t)
            };
            var h = function(t, e) {
                t = (0, s.toBuffer)(t);
                var r = o("rmd160").update(t).digest();
                return !0 === e ? (0, s.setLengthLeft)(r, 32) : r
            };
            e.ripemd160 = function(t, e) {
                return (0, u.assertIsBuffer)(t), h(t, e)
            };
            e.ripemd160FromString = function(t, e) {
                return (0, u.assertIsString)(t), h(t, e)
            };
            e.ripemd160FromArray = function(t, e) {
                return (0, u.assertIsArray)(t), h(t, e)
            };
            e.rlphash = function(t) {
                return (0, e.keccak)(a.rlp.encode(t))
            }
        },
        54586: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.assertIsString = e.assertIsArray = e.assertIsBuffer = e.assertIsHexString = void 0;
            var i = r(78722);
            e.assertIsHexString = function(t) {
                if (!(0, i.isHexString)(t)) {
                    var e = "This method only supports 0x-prefixed hex strings but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsBuffer = function(t) {
                if (!n.isBuffer(t)) {
                    var e = "This method only supports Buffer but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsArray = function(t) {
                if (!Array.isArray(t)) {
                    var e = "This method only supports number arrays but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsString = function(t) {
                if ("string" !== typeof t) {
                    var e = "This method only supports strings but input was: ".concat(t);
                    throw new Error(e)
                }
            }
        },
        79207: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(e, r);
                    i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    }), Object.defineProperty(t, n, i)
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__exportStar || function(t, e) {
                    for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || n(e, t, r)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0, i(r(51803), e), i(r(30985), e), i(r(2395), e), i(r(5405), e), i(r(68486), e), i(r(22599), e), i(r(52174), e), i(r(6045), e), i(r(59949), e);
            var o = r(78722);
            Object.defineProperty(e, "isHexPrefixed", {
                enumerable: !0,
                get: function() {
                    return o.isHexPrefixed
                }
            }), Object.defineProperty(e, "stripHexPrefix", {
                enumerable: !0,
                get: function() {
                    return o.stripHexPrefix
                }
            }), Object.defineProperty(e, "padToEven", {
                enumerable: !0,
                get: function() {
                    return o.padToEven
                }
            }), Object.defineProperty(e, "getBinarySize", {
                enumerable: !0,
                get: function() {
                    return o.getBinarySize
                }
            }), Object.defineProperty(e, "arrayContainsArray", {
                enumerable: !0,
                get: function() {
                    return o.arrayContainsArray
                }
            }), Object.defineProperty(e, "toAscii", {
                enumerable: !0,
                get: function() {
                    return o.toAscii
                }
            }), Object.defineProperty(e, "fromUtf8", {
                enumerable: !0,
                get: function() {
                    return o.fromUtf8
                }
            }), Object.defineProperty(e, "fromAscii", {
                enumerable: !0,
                get: function() {
                    return o.fromAscii
                }
            }), Object.defineProperty(e, "getKeys", {
                enumerable: !0,
                get: function() {
                    return o.getKeys
                }
            }), Object.defineProperty(e, "isHexString", {
                enumerable: !0,
                get: function() {
                    return o.isHexString
                }
            })
        },
        78722: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;

            function i(t) {
                if ("string" !== typeof t) throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof t));
                return "0" === t[0] && "x" === t[1]
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0, e.isHexPrefixed = i;

            function o(t) {
                var e = t;
                if ("string" !== typeof e) throw new Error("[padToEven] value must be type 'string', received ".concat(typeof e));
                return e.length % 2 && (e = "0".concat(e)), e
            }
            e.stripHexPrefix = function(t) {
                if ("string" !== typeof t) throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof t));
                return i(t) ? t.slice(2) : t
            }, e.padToEven = o, e.getBinarySize = function(t) {
                if ("string" !== typeof t) throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof t));
                return n.byteLength(t, "utf8")
            }, e.arrayContainsArray = function(t, e, r) {
                if (!0 !== Array.isArray(t)) throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof t, "'"));
                if (!0 !== Array.isArray(e)) throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof e, "'"));
                return e[r ? "some" : "every"]((function(e) {
                    return t.indexOf(e) >= 0
                }))
            }, e.toAscii = function(t) {
                var e = "",
                    r = 0,
                    n = t.length;
                for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
                    var i = parseInt(t.substr(r, 2), 16);
                    e += String.fromCharCode(i)
                }
                return e
            }, e.fromUtf8 = function(t) {
                var e = n.from(t, "utf8");
                return "0x".concat(o(e.toString("hex")).replace(/^0+|0+$/g, ""))
            }, e.fromAscii = function(t) {
                for (var e = "", r = 0; r < t.length; r++) {
                    var n = t.charCodeAt(r).toString(16);
                    e += n.length < 2 ? "0".concat(n) : n
                }
                return "0x".concat(e)
            }, e.getKeys = function(t, e, r) {
                if (!Array.isArray(t)) throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof t));
                if ("string" !== typeof e) throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof t));
                for (var n = [], i = 0; i < t.length; i++) {
                    var o = t[i][e];
                    if (r && !o) o = "";
                    else if ("string" !== typeof o) throw new Error("invalid abi - expected type 'string', received ".concat(typeof o));
                    n.push(o)
                }
                return n
            }, e.isHexString = function(t, e) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
            }
        },
        52174: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer,
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defineProperties = void 0;
            var o = i(r(27596)),
                a = r(78722),
                s = r(6045),
                u = r(22599);
            e.defineProperties = function(t, e, r) {
                if (t.raw = [], t._fields = [], t.toJSON = function(e) {
                        if (void 0 === e && (e = !1), e) {
                            var r = {};
                            return t._fields.forEach((function(e) {
                                r[e] = "0x".concat(t[e].toString("hex"))
                            })), r
                        }
                        return (0, u.baToJSON)(t.raw)
                    }, t.serialize = function() {
                        return s.rlp.encode(t.raw)
                    }, e.forEach((function(e, r) {
                        function i() {
                            return t.raw[r]
                        }

                        function a(i) {
                            "00" !== (i = (0, u.toBuffer)(i)).toString("hex") || e.allowZero || (i = n.allocUnsafe(0)), e.allowLess && e.length ? (i = (0, u.unpadBuffer)(i), (0, o.default)(e.length >= i.length, "The field ".concat(e.name, " must not have more ").concat(e.length, " bytes"))) : e.allowZero && 0 === i.length || !e.length || (0, o.default)(e.length === i.length, "The field ".concat(e.name, " must have byte length of ").concat(e.length)), t.raw[r] = i
                        }
                        t._fields.push(e.name), Object.defineProperty(t, e.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: i,
                            set: a
                        }), e.default && (t[e.name] = e.default), e.alias && Object.defineProperty(t, e.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: a,
                            get: i
                        })
                    })), r)
                    if ("string" === typeof r && (r = n.from((0, a.stripHexPrefix)(r), "hex")), n.isBuffer(r) && (r = s.rlp.decode(r)), Array.isArray(r)) {
                        if (r.length > t._fields.length) throw new Error("wrong number of fields in data");
                        r.forEach((function(e, r) {
                            t[t._fields[r]] = (0, u.toBuffer)(e)
                        }))
                    } else {
                        if ("object" !== typeof r) throw new Error("invalid data");
                        var i = Object.keys(r);
                        e.forEach((function(e) {
                            -1 !== i.indexOf(e.name) && (t[e.name] = r[e.name]), -1 !== i.indexOf(e.alias) && (t[e.alias] = r[e.alias])
                        }))
                    }
            }
        },
        68486: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hashPersonalMessage = e.isValidSignature = e.fromRpcSig = e.toCompactSig = e.toRpcSig = e.ecrecover = e.ecsign = void 0;
            var i = r(47476),
                o = r(6045),
                a = r(22599),
                s = r(5405),
                u = r(54586),
                f = r(59949);

            function h(t, e) {
                var r = (0, f.toType)(t, f.TypeOutput.BN);
                if (r.eqn(0) || r.eqn(1)) return (0, f.toType)(t, f.TypeOutput.BN);
                if (!e) return r.subn(27);
                var n = (0, f.toType)(e, f.TypeOutput.BN);
                return r.sub(n.muln(2).addn(35))
            }

            function c(t) {
                var e = new o.BN(t);
                return e.eqn(0) || e.eqn(1)
            }
            e.ecsign = function(t, e, r) {
                var o = (0, i.ecdsaSign)(t, e),
                    a = o.signature,
                    s = o.recid,
                    u = n.from(a.slice(0, 32)),
                    h = n.from(a.slice(32, 64));
                if (!r || "number" === typeof r) {
                    if (r && !Number.isSafeInteger(r)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                    return {
                        r: u,
                        s: h,
                        v: r ? s + (2 * r + 35) : s + 27
                    }
                }
                return {
                    r: u,
                    s: h,
                    v: (0, f.toType)(r, f.TypeOutput.BN).muln(2).addn(35).addn(s).toArrayLike(n)
                }
            };
            e.ecrecover = function(t, e, r, o, s) {
                var u = n.concat([(0, a.setLengthLeft)(r, 32), (0, a.setLengthLeft)(o, 32)], 64),
                    f = h(e, s);
                if (!c(f)) throw new Error("Invalid signature v value");
                var l = (0, i.ecdsaRecover)(u, f.toNumber(), t);
                return n.from((0, i.publicKeyConvert)(l, !1).slice(1))
            };
            e.toRpcSig = function(t, e, r, i) {
                if (!c(h(t, i))) throw new Error("Invalid signature v value");
                return (0, a.bufferToHex)(n.concat([(0, a.setLengthLeft)(e, 32), (0, a.setLengthLeft)(r, 32), (0, a.toBuffer)(t)]))
            };
            e.toCompactSig = function(t, e, r, i) {
                if (!c(h(t, i))) throw new Error("Invalid signature v value");
                var o = (0, f.toType)(t, f.TypeOutput.Number),
                    s = r;
                return (o > 28 && o % 2 === 1 || 1 === o || 28 === o) && ((s = n.from(r))[0] |= 128), (0, a.bufferToHex)(n.concat([(0, a.setLengthLeft)(e, 32), (0, a.setLengthLeft)(s, 32)]))
            };
            e.fromRpcSig = function(t) {
                var e, r, n, i = (0, a.toBuffer)(t);
                if (i.length >= 65) e = i.slice(0, 32), r = i.slice(32, 64), n = (0, a.bufferToInt)(i.slice(64));
                else {
                    if (64 !== i.length) throw new Error("Invalid signature length");
                    e = i.slice(0, 32), r = i.slice(32, 64), n = (0, a.bufferToInt)(i.slice(32, 33)) >> 7, r[0] &= 127
                }
                return n < 27 && (n += 27), {
                    v: n,
                    r: e,
                    s: r
                }
            };
            e.isValidSignature = function(t, e, r, n, i) {
                void 0 === n && (n = !0);
                var a = new o.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    s = new o.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== e.length || 32 !== r.length) return !1;
                if (!c(h(t, i))) return !1;
                var u = new o.BN(e),
                    f = new o.BN(r);
                return !(u.isZero() || u.gt(s) || f.isZero() || f.gt(s)) && (!n || 1 !== f.cmp(a))
            };
            e.hashPersonalMessage = function(t) {
                (0, u.assertIsBuffer)(t);
                var e = n.from("\x19Ethereum Signed Message:\n".concat(t.length), "utf-8");
                return (0, s.keccak)(n.concat([e, t]))
            }
        },
        59949: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toType = e.TypeOutput = e.bnToRlp = e.bnToUnpaddedBuffer = e.bnToHex = void 0;
            var i, o = r(6045),
                a = r(78722),
                s = r(22599);

            function u(t) {
                return (0, s.unpadBuffer)(t.toArrayLike(n))
            }
            e.bnToHex = function(t) {
                    return "0x".concat(t.toString(16))
                }, e.bnToUnpaddedBuffer = u, e.bnToRlp = function(t) {
                    return u(t)
                },
                function(t) {
                    t[t.Number = 0] = "Number", t[t.BN = 1] = "BN", t[t.Buffer = 2] = "Buffer", t[t.PrefixedHexString = 3] = "PrefixedHexString"
                }(i = e.TypeOutput || (e.TypeOutput = {})), e.toType = function(t, e) {
                    if (null === t) return null;
                    if (void 0 !== t) {
                        if ("string" === typeof t && !(0, a.isHexString)(t)) throw new Error("A string must be provided with a 0x-prefix, given: ".concat(t));
                        if ("number" === typeof t && !Number.isSafeInteger(t)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                        var r = (0, s.toBuffer)(t);
                        if (e === i.Buffer) return r;
                        if (e === i.BN) return new o.BN(r);
                        if (e === i.Number) {
                            var n = new o.BN(r),
                                u = new o.BN(Number.MAX_SAFE_INTEGER.toString());
                            if (n.gt(u)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                            return n.toNumber()
                        }
                        return "0x".concat(r.toString("hex"))
                    }
                }
        },
        18597: function(t) {
            "use strict";
            t.exports = {
                i8: "6.5.4"
            }
        },
        16523: function(t) {
            "use strict";
            t.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')
        }
    }
]);