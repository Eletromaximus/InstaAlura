_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[6],
	{
		'/0+H': function (e, t, n) {
			'use strict';
			(t.__esModule = !0),
				(t.isInAmpMode = a),
				(t.useAmp = function () {
					return a(o.default.useContext(i.AmpStateContext));
				});
			var r,
				o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
				i = n('lwAK');
			function a() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.ampFirst,
					n = void 0 !== t && t,
					r = e.hybrid,
					o = void 0 !== r && r,
					i = e.hasQuery,
					a = void 0 !== i && i;
				return n || (o && a);
			}
		},
		0: function (e, t, n) {
			n('74v/'), (e.exports = n('nOHt'));
		},
		'74v/': function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return n('cha2');
				},
			]);
		},
		'8Kt/': function (e, t, n) {
			'use strict';
			n('lSNA');
			(t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
			var r,
				o = (function (e) {
					if (e && e.__esModule) return e;
					if (null === e || ('object' !== typeof e && 'function' !== typeof e))
						return { default: e };
					var t = c();
					if (t && t.has(e)) return t.get(e);
					var n = {},
						r = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var o in e)
						if (Object.prototype.hasOwnProperty.call(e, o)) {
							var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
							i && (i.get || i.set)
								? Object.defineProperty(n, o, i)
								: (n[o] = e[o]);
						}
					(n.default = e), t && t.set(e, n);
					return n;
				})(n('q1tI')),
				i = (r = n('Xuae')) && r.__esModule ? r : { default: r },
				a = n('lwAK'),
				s = n('FYa8'),
				u = n('/0+H');
			function c() {
				if ('function' !== typeof WeakMap) return null;
				var e = new WeakMap();
				return (
					(c = function () {
						return e;
					}),
					e
				);
			}
			function l() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = [o.default.createElement('meta', { charSet: 'utf-8' })];
				return (
					e ||
						t.push(
							o.default.createElement('meta', {
								name: 'viewport',
								content: 'width=device-width',
							})
						),
					t
				);
			}
			function f(e, t) {
				return 'string' === typeof t || 'number' === typeof t
					? e
					: t.type === o.default.Fragment
					? e.concat(
							o.default.Children.toArray(t.props.children).reduce(function (
								e,
								t
							) {
								return 'string' === typeof t || 'number' === typeof t
									? e
									: e.concat(t);
							},
							[])
					  )
					: e.concat(t);
			}
			var p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
			function d(e, t) {
				return e
					.reduce(function (e, t) {
						var n = o.default.Children.toArray(t.props.children);
						return e.concat(n);
					}, [])
					.reduce(f, [])
					.reverse()
					.concat(l(t.inAmpMode))
					.filter(
						(function () {
							var e = new Set(),
								t = new Set(),
								n = new Set(),
								r = {};
							return function (o) {
								var i = !0,
									a = !1;
								if (
									o.key &&
									'number' !== typeof o.key &&
									o.key.indexOf('$') > 0
								) {
									a = !0;
									var s = o.key.slice(o.key.indexOf('$') + 1);
									e.has(s) ? (i = !1) : e.add(s);
								}
								switch (o.type) {
									case 'title':
									case 'base':
										t.has(o.type) ? (i = !1) : t.add(o.type);
										break;
									case 'meta':
										for (var u = 0, c = p.length; u < c; u++) {
											var l = p[u];
											if (o.props.hasOwnProperty(l))
												if ('charSet' === l) n.has(l) ? (i = !1) : n.add(l);
												else {
													var f = o.props[l],
														d = r[l] || new Set();
													('name' === l && a) || !d.has(f)
														? (d.add(f), (r[l] = d))
														: (i = !1);
												}
										}
								}
								return i;
							};
						})()
					)
					.reverse()
					.map(function (e, t) {
						var n = e.key || t;
						return o.default.cloneElement(e, { key: n });
					});
			}
			function b(e) {
				var t = e.children,
					n = (0, o.useContext)(a.AmpStateContext),
					r = (0, o.useContext)(s.HeadManagerContext);
				return o.default.createElement(
					i.default,
					{
						reduceComponentsToState: d,
						headManager: r,
						inAmpMode: (0, u.isInAmpMode)(n),
					},
					t
				);
			}
			b.rewind = function () {};
			var h = b;
			t.default = h;
		},
		Bnag: function (e, t) {
			e.exports = function () {
				throw new TypeError(
					'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			};
		},
		EbDI: function (e, t) {
			e.exports = function (e) {
				if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
					return Array.from(e);
			};
		},
		Ijbi: function (e, t, n) {
			var r = n('WkPL');
			e.exports = function (e) {
				if (Array.isArray(e)) return r(e);
			};
		},
		RIqP: function (e, t, n) {
			var r = n('Ijbi'),
				o = n('EbDI'),
				i = n('ZhPi'),
				a = n('Bnag');
			e.exports = function (e) {
				return r(e) || o(e) || i(e) || a();
			};
		},
		WRJ3: function (e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.default = t.Normalize = t.normalize = void 0);
			var r = n('vOnD'),
				o = (0, r.css)([
					'html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}',
				]);
			t.normalize = o;
			var i = (0, r.createGlobalStyle)(o);
			t.Normalize = i;
			var a = o;
			t.default = a;
		},
		Xuae: function (e, t, n) {
			'use strict';
			var r = n('RIqP'),
				o = n('lwsE'),
				i = n('W8MJ'),
				a = (n('PJYZ'), n('7W2i')),
				s = n('a1gu'),
				u = n('Nsbk');
			function c(e) {
				var t = (function () {
					if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' === typeof Proxy) return !0;
					try {
						return (
							Date.prototype.toString.call(
								Reflect.construct(Date, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = u(e);
					if (t) {
						var o = u(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return s(this, n);
				};
			}
			(t.__esModule = !0), (t.default = void 0);
			var l = n('q1tI'),
				f = (function (e) {
					a(n, e);
					var t = c(n);
					function n(e) {
						var i;
						return (
							o(this, n),
							((i = t.call(this, e))._hasHeadManager = void 0),
							(i.emitChange = function () {
								i._hasHeadManager &&
									i.props.headManager.updateHead(
										i.props.reduceComponentsToState(
											r(i.props.headManager.mountedInstances),
											i.props
										)
									);
							}),
							(i._hasHeadManager =
								i.props.headManager && i.props.headManager.mountedInstances),
							i
						);
					}
					return (
						i(n, [
							{
								key: 'componentDidMount',
								value: function () {
									this._hasHeadManager &&
										this.props.headManager.mountedInstances.add(this),
										this.emitChange();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									this.emitChange();
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this._hasHeadManager &&
										this.props.headManager.mountedInstances.delete(this),
										this.emitChange();
								},
							},
							{
								key: 'render',
								value: function () {
									return null;
								},
							},
						]),
						n
					);
				})(l.Component);
			t.default = f;
		},
		cha2: function (e, t, n) {
			'use strict';
			n.r(t),
				n.d(t, 'default', function () {
					return b;
				});
			var r = n('nKUr'),
				o = n('rePB'),
				i = {
					fontFamily: "'Rubik', sans-serif",
					colors: {
						background: {
							light: { color: '#FFFFFF' },
							main: { color: '#F2F2F2' },
						},
						borders: { main: { color: '#F1F1F1' } },
						primary: { main: { color: '#D7385E', contrastText: '#fff' } },
						secondary: { main: { color: '#FB7B6B', contrastText: '#fff' } },
						tertiary: {
							main: { color: '#070C0E', contrastText: '#fff' },
							light: { colors: '#88989E', contrastText: '#fff' },
						},
						modes: { dark: {} },
					},
					borderRadius: '8px',
					typographyVariants: {
						title: { fontSize: '32px', fontWeight: '700', lineHeight: 1.25 },
						titleXS: { fontSize: '24px', fontWeight: '500', lineHeight: 1.25 },
						subtitle: { fontSize: '24px', fontWeight: '500', lineHeight: 1.25 },
						paragraph1: {
							fontSize: '16px',
							fontWeight: '400',
							lineHeight: 1.25,
						},
						paragraph2: {
							fontSize: '14px',
							fontWeight: '400',
							lineHeight: 1.25,
						},
						smallestException: {
							fontSize: '12px',
							fontWeight: '400',
							lineHeight: 1,
						},
					},
					breakpoints: n('Mya/').a,
					transition: '200ms ease-in-out',
				};
			var a = n('vOnD'),
				s = n('WRJ3');
			function u() {
				var e,
					t,
					n =
						((e = [
							'\n  * {\n    box-sizing: border-box;\n  }\n  ',
							'\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: ',
							';\n  }\n  /* Full height layout */\n  html, body {\n    display: flex;\n    min-height: 100vh;\n    width: 100%;\n  }\n  #__next {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n',
						]),
						t || (t = e.slice(0)),
						Object.freeze(
							Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
						));
				return (
					(u = function () {
						return n;
					}),
					n
				);
			}
			var c = Object(a.createGlobalStyle)(u(), s.normalize, function (e) {
					return e.theme.fontFamily;
				}),
				l = n('g4pe'),
				f = n.n(l);
			function p(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? p(Object(n), !0).forEach(function (t) {
								Object(o.a)(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: p(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function b(e) {
				var t = e.Component,
					n = e.pageProps;
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsxs)(f.a, {
							children: [
								Object(r.jsx)('title', {
									children: ' Instalura - Projeto Base',
								}),
								Object(r.jsx)('link', {
									rel: 'preconnect',
									href: 'https://fonts.gstatic.com',
								}),
								Object(r.jsx)('link', {
									href:
										'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
									rel: 'stylesheet',
								}),
							],
						}),
						Object(r.jsxs)(a.ThemeProvider, {
							theme: i,
							children: [Object(r.jsx)(c, {}), Object(r.jsx)(t, d({}, n))],
						}),
					],
				});
			}
		},
		g4pe: function (e, t, n) {
			e.exports = n('8Kt/');
		},
		lSNA: function (e, t) {
			e.exports = function (e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			};
		},
		lwAK: function (e, t, n) {
			'use strict';
			var r;
			(t.__esModule = !0), (t.AmpStateContext = void 0);
			var o = ((r = n('q1tI')) && r.__esModule
				? r
				: { default: r }
			).default.createContext({});
			t.AmpStateContext = o;
		},
	},
	[[0, 0, 1, 3, 2]],
]);
