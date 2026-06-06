import{n as e,t}from"./index-cQbgicU_.js";var n=e(t(((e,t)=>{(e=>{var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,a=(e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})},o=(e,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(let c of r(a))!i.call(e,c)&&c!==o&&t(e,c,{get:()=>a[c],enumerable:!(s=n(a,c))||s.enumerable});return e},s=e=>o(t({},`__esModule`,{value:!0}),e),c=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),l={};a(l,{analyzeMetafile:()=>pe,analyzeMetafileSync:()=>_e,build:()=>le,buildSync:()=>me,context:()=>ue,default:()=>xe,formatMessages:()=>fe,formatMessagesSync:()=>ge,initialize:()=>ye,transform:()=>de,transformSync:()=>he,version:()=>ce}),e.exports=s(l);function u(e){let t=e=>{if(e===null)n.write8(0);else if(typeof e==`boolean`)n.write8(1),n.write8(+e);else if(typeof e==`number`)n.write8(2),n.write32(e|0);else if(typeof e==`string`)n.write8(3),n.write(p(e));else if(e instanceof Uint8Array)n.write8(4),n.write(e);else if(e instanceof Array){n.write8(5),n.write32(e.length);for(let n of e)t(n)}else{let r=Object.keys(e);n.write8(6),n.write32(r.length);for(let i of r)n.write(p(i)),t(e[i])}},n=new f;return n.write32(0),n.write32(e.id<<1|!e.isRequest),t(e.value),_(n.buf,n.len-4,0),n.buf.subarray(0,n.len)}function d(e){let t=()=>{switch(n.read8()){case 0:return null;case 1:return!!n.read8();case 2:return n.read32();case 3:return m(n.read());case 4:return n.read();case 5:{let e=n.read32(),r=[];for(let n=0;n<e;n++)r.push(t());return r}case 6:{let e=n.read32(),r={};for(let i=0;i<e;i++)r[m(n.read())]=t();return r}default:throw Error(`Invalid packet`)}},n=new f(e),r=n.read32(),i=(r&1)==0;r>>>=1;let a=t();if(n.ptr!==e.length)throw Error(`Invalid packet`);return{id:r,isRequest:i,value:a}}var f=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);_(this.buf,e,t)}write(e){let t=this._write(4+e.length);_(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw Error(`Invalid packet`);return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return g(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),n=this._read(t.length);return t.set(this.buf.subarray(n,n+e)),t}},p,m,h;if(typeof TextEncoder<`u`&&typeof TextDecoder<`u`){let e=new TextEncoder,t=new TextDecoder;p=t=>e.encode(t),m=e=>t.decode(e),h=`new TextEncoder().encode("")`}else if(typeof Buffer<`u`)p=e=>Buffer.from(e),m=e=>{let{buffer:t,byteOffset:n,byteLength:r}=e;return Buffer.from(t,n,r).toString()},h=`Buffer.from("")`;else throw Error(`No UTF-8 codec found`);if(!(p(``)instanceof Uint8Array))throw Error(`Invariant violation: "${h} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function g(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function _(e,t,n){e[n++]=t,e[n++]=t>>8,e[n++]=t>>16,e[n++]=t>>24}var v=JSON.stringify,y=`warning`,b=`silent`;function x(e){if(V(e,`target`),e.indexOf(`,`)>=0)throw Error(`Invalid target: ${e}`);return e}var S=()=>null,C=e=>typeof e==`boolean`?null:`a boolean`,w=e=>typeof e==`string`?null:`a string`,T=e=>e instanceof RegExp?null:`a RegExp object`,E=e=>typeof e==`number`&&e===(e|0)?null:`an integer`,D=e=>typeof e==`function`?null:`a function`,O=e=>Array.isArray(e)?null:`an array`,k=e=>typeof e==`object`&&e&&!Array.isArray(e)?null:`an object`,A=e=>typeof e==`object`&&e?null:`an array or an object`,j=e=>e instanceof WebAssembly.Module?null:`a WebAssembly.Module`,M=e=>typeof e==`object`&&!Array.isArray(e)?null:`an object or null`,N=e=>typeof e==`string`||typeof e==`boolean`?null:`a string or a boolean`,P=e=>typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)?null:`a string or an object`,ee=e=>typeof e==`string`||Array.isArray(e)?null:`a string or an array`,F=e=>typeof e==`string`||e instanceof Uint8Array?null:`a string or a Uint8Array`,I=e=>typeof e==`string`||e instanceof URL?null:`a string or a URL`;function L(e,t,n,r){let i=e[n];if(t[n+``]=!0,i===void 0)return;let a=r(i);if(a!==null)throw Error(`${v(n)} must be ${a}`);return i}function R(e,t,n){for(let r in e)if(!(r in t))throw Error(`Invalid option ${n}: ${v(r)}`)}function z(e){let t=Object.create(null),n=L(e,t,`wasmURL`,I),r=L(e,t,`wasmModule`,j),i=L(e,t,`worker`,C);return R(e,t,`in initialize() call`),{wasmURL:n,wasmModule:r,worker:i}}function te(e){let t;if(e!==void 0){t=Object.create(null);for(let n in e){let r=e[n];if(typeof r==`string`||r===!1)t[n]=r;else throw Error(`Expected ${v(n)} in mangle cache to map to either a string or false`)}}return t}function B(e,t,n,r,i){let a=L(t,n,`color`,C),o=L(t,n,`logLevel`,w),s=L(t,n,`logLimit`,E);a===void 0?r&&e.push(`--color=true`):e.push(`--color=${a}`),e.push(`--log-level=${o||i}`),e.push(`--log-limit=${s||0}`)}function V(e,t,n){if(typeof e!=`string`)throw Error(`Expected value for ${t}${n===void 0?``:` `+v(n)} to be a string, got ${typeof e} instead`);return e}function ne(e,t,n){let r=L(t,n,`legalComments`,w),i=L(t,n,`sourceRoot`,w),a=L(t,n,`sourcesContent`,C),o=L(t,n,`target`,ee),s=L(t,n,`format`,w),c=L(t,n,`globalName`,w),l=L(t,n,`mangleProps`,T),u=L(t,n,`reserveProps`,T),d=L(t,n,`mangleQuoted`,C),f=L(t,n,`minify`,C),p=L(t,n,`minifySyntax`,C),m=L(t,n,`minifyWhitespace`,C),h=L(t,n,`minifyIdentifiers`,C),g=L(t,n,`drop`,O),_=L(t,n,`charset`,w),y=L(t,n,`treeShaking`,C),b=L(t,n,`ignoreAnnotations`,C),S=L(t,n,`jsx`,w),E=L(t,n,`jsxFactory`,w),D=L(t,n,`jsxFragment`,w),A=L(t,n,`jsxImportSource`,w),j=L(t,n,`jsxDev`,C),M=L(t,n,`jsxSideEffects`,C),N=L(t,n,`define`,k),P=L(t,n,`logOverride`,k),F=L(t,n,`supported`,k),I=L(t,n,`pure`,O),R=L(t,n,`keepNames`,C),z=L(t,n,`platform`,w);if(r&&e.push(`--legal-comments=${r}`),i!==void 0&&e.push(`--source-root=${i}`),a!==void 0&&e.push(`--sources-content=${a}`),o&&(Array.isArray(o)?e.push(`--target=${Array.from(o).map(x).join(`,`)}`):e.push(`--target=${x(o)}`)),s&&e.push(`--format=${s}`),c&&e.push(`--global-name=${c}`),z&&e.push(`--platform=${z}`),f&&e.push(`--minify`),p&&e.push(`--minify-syntax`),m&&e.push(`--minify-whitespace`),h&&e.push(`--minify-identifiers`),_&&e.push(`--charset=${_}`),y!==void 0&&e.push(`--tree-shaking=${y}`),b&&e.push(`--ignore-annotations`),g)for(let t of g)e.push(`--drop:${V(t,`drop`)}`);if(l&&e.push(`--mangle-props=${l.source}`),u&&e.push(`--reserve-props=${u.source}`),d!==void 0&&e.push(`--mangle-quoted=${d}`),S&&e.push(`--jsx=${S}`),E&&e.push(`--jsx-factory=${E}`),D&&e.push(`--jsx-fragment=${D}`),A&&e.push(`--jsx-import-source=${A}`),j&&e.push(`--jsx-dev`),M&&e.push(`--jsx-side-effects`),N)for(let t in N){if(t.indexOf(`=`)>=0)throw Error(`Invalid define: ${t}`);e.push(`--define:${t}=${V(N[t],`define`,t)}`)}if(P)for(let t in P){if(t.indexOf(`=`)>=0)throw Error(`Invalid log override: ${t}`);e.push(`--log-override:${t}=${V(P[t],`log override`,t)}`)}if(F)for(let t in F){if(t.indexOf(`=`)>=0)throw Error(`Invalid supported: ${t}`);let n=F[t];if(typeof n!=`boolean`)throw Error(`Expected value for supported ${v(t)} to be a boolean, got ${typeof n} instead`);e.push(`--supported:${t}=${n}`)}if(I)for(let t of I)e.push(`--pure:${V(t,`pure`)}`);R&&e.push(`--keep-names`)}function re(e,t,n,r,i){let a=[],o=[],s=Object.create(null),c=null,l=null;B(a,t,s,n,r),ne(a,t,s);let u=L(t,s,`sourcemap`,N),d=L(t,s,`bundle`,C),f=L(t,s,`splitting`,C),m=L(t,s,`preserveSymlinks`,C),h=L(t,s,`metafile`,C),g=L(t,s,`outfile`,w),_=L(t,s,`outdir`,w),v=L(t,s,`outbase`,w),y=L(t,s,`tsconfig`,w),b=L(t,s,`resolveExtensions`,O),x=L(t,s,`nodePaths`,O),S=L(t,s,`mainFields`,O),T=L(t,s,`conditions`,O),E=L(t,s,`external`,O),D=L(t,s,`packages`,w),j=L(t,s,`alias`,k),M=L(t,s,`loader`,k),P=L(t,s,`outExtension`,k),ee=L(t,s,`publicPath`,w),I=L(t,s,`entryNames`,w),z=L(t,s,`chunkNames`,w),re=L(t,s,`assetNames`,w),H=L(t,s,`inject`,O),U=L(t,s,`banner`,k),W=L(t,s,`footer`,k),G=L(t,s,`entryPoints`,A),ie=L(t,s,`absWorkingDir`,w),K=L(t,s,`stdin`,k),q=L(t,s,`write`,C)??i,ae=L(t,s,`allowOverwrite`,C),J=L(t,s,`mangleCache`,k);if(s.plugins=!0,R(t,s,`in ${e}() call`),u&&a.push(`--sourcemap${u===!0?``:`=${u}`}`),d&&a.push(`--bundle`),ae&&a.push(`--allow-overwrite`),f&&a.push(`--splitting`),m&&a.push(`--preserve-symlinks`),h&&a.push(`--metafile`),g&&a.push(`--outfile=${g}`),_&&a.push(`--outdir=${_}`),v&&a.push(`--outbase=${v}`),y&&a.push(`--tsconfig=${y}`),D&&a.push(`--packages=${D}`),b){let e=[];for(let t of b){if(V(t,`resolve extension`),t.indexOf(`,`)>=0)throw Error(`Invalid resolve extension: ${t}`);e.push(t)}a.push(`--resolve-extensions=${e.join(`,`)}`)}if(ee&&a.push(`--public-path=${ee}`),I&&a.push(`--entry-names=${I}`),z&&a.push(`--chunk-names=${z}`),re&&a.push(`--asset-names=${re}`),S){let e=[];for(let t of S){if(V(t,`main field`),t.indexOf(`,`)>=0)throw Error(`Invalid main field: ${t}`);e.push(t)}a.push(`--main-fields=${e.join(`,`)}`)}if(T){let e=[];for(let t of T){if(V(t,`condition`),t.indexOf(`,`)>=0)throw Error(`Invalid condition: ${t}`);e.push(t)}a.push(`--conditions=${e.join(`,`)}`)}if(E)for(let e of E)a.push(`--external:${V(e,`external`)}`);if(j)for(let e in j){if(e.indexOf(`=`)>=0)throw Error(`Invalid package name in alias: ${e}`);a.push(`--alias:${e}=${V(j[e],`alias`,e)}`)}if(U)for(let e in U){if(e.indexOf(`=`)>=0)throw Error(`Invalid banner file type: ${e}`);a.push(`--banner:${e}=${V(U[e],`banner`,e)}`)}if(W)for(let e in W){if(e.indexOf(`=`)>=0)throw Error(`Invalid footer file type: ${e}`);a.push(`--footer:${e}=${V(W[e],`footer`,e)}`)}if(H)for(let e of H)a.push(`--inject:${V(e,`inject`)}`);if(M)for(let e in M){if(e.indexOf(`=`)>=0)throw Error(`Invalid loader extension: ${e}`);a.push(`--loader:${e}=${V(M[e],`loader`,e)}`)}if(P)for(let e in P){if(e.indexOf(`=`)>=0)throw Error(`Invalid out extension: ${e}`);a.push(`--out-extension:${e}=${V(P[e],`out extension`,e)}`)}if(G)if(Array.isArray(G))for(let e=0,t=G.length;e<t;e++){let t=G[e];if(typeof t==`object`&&t){let n=Object.create(null),r=L(t,n,`in`,w),i=L(t,n,`out`,w);if(R(t,n,`in entry point at index `+e),r===void 0)throw Error(`Missing property "in" for entry point at index `+e);if(i===void 0)throw Error(`Missing property "out" for entry point at index `+e);o.push([i,r])}else o.push([``,V(t,`entry point at index `+e)])}else for(let e in G)o.push([e,V(G[e],`entry point`,e)]);if(K){let e=Object.create(null),t=L(K,e,`contents`,F),n=L(K,e,`resolveDir`,w),r=L(K,e,`sourcefile`,w),i=L(K,e,`loader`,w);R(K,e,`in "stdin" object`),r&&a.push(`--sourcefile=${r}`),i&&a.push(`--loader=${i}`),n&&(l=n),typeof t==`string`?c=p(t):t instanceof Uint8Array&&(c=t)}let Y=[];if(x)for(let e of x)e+=``,Y.push(e);return{entries:o,flags:a,write:q,stdinContents:c,stdinResolveDir:l,absWorkingDir:ie,nodePaths:Y,mangleCache:te(J)}}function H(e,t,n,r){let i=[],a=Object.create(null);B(i,t,a,n,r),ne(i,t,a);let o=L(t,a,`sourcemap`,N),s=L(t,a,`tsconfigRaw`,P),c=L(t,a,`sourcefile`,w),l=L(t,a,`loader`,w),u=L(t,a,`banner`,w),d=L(t,a,`footer`,w),f=L(t,a,`mangleCache`,k);return R(t,a,`in ${e}() call`),o&&i.push(`--sourcemap=${o===!0?`external`:o}`),s&&i.push(`--tsconfig-raw=${typeof s==`string`?s:JSON.stringify(s)}`),c&&i.push(`--sourcefile=${c}`),l&&i.push(`--loader=${l}`),u&&i.push(`--banner=${u}`),d&&i.push(`--footer=${d}`),{flags:i,mangleCache:te(f)}}function U(e){let t={},n={didClose:!1,reason:``},r={},i=0,a=0,o=new Uint8Array(16*1024),s=0,l=e=>{let t=s+e.length;if(t>o.length){let e=new Uint8Array(t*2);e.set(o),o=e}o.set(e,s),s+=e.length;let n=0;for(;n+4<=s;){let e=g(o,n);if(n+4+e>s)break;n+=4,x(o.subarray(n,n+e)),n+=e}n>0&&(o.copyWithin(0,n,s),s-=n)},f=e=>{n.didClose=!0,e&&(n.reason=`: `+(e.message||e));let t=`The service was stopped`+n.reason;for(let e in r)r[e](t,null);r={}},m=(t,a,o)=>{if(n.didClose)return o(`The service is no longer running`+n.reason,null);let s=i++;r[s]=(e,n)=>{try{o(e,n)}finally{t&&t.unref()}},t&&t.ref(),e.writeToStdin(u({id:s,isRequest:!0,value:a}))},h=(t,r)=>{if(n.didClose)throw Error(`The service is no longer running`+n.reason);e.writeToStdin(u({id:t,isRequest:!1,value:r}))},_=(n,r)=>c(this,null,function*(){try{if(r.command===`ping`){h(n,{});return}if(typeof r.key==`number`){let e=t[r.key];if(e){let t=e[r.command];if(t){yield t(n,r);return}}}throw Error(`Invalid command: `+r.command)}catch(t){h(n,{errors:[q(t,e,null,void 0,``)]})}}),y=!0,x=e=>{if(y){y=!1;let t=String.fromCharCode(...e);if(t!==`0.17.19`)throw Error(`Cannot start service: Host version "0.17.19" does not match binary version ${v(t)}`);return}let t=d(e);if(t.isRequest)_(t.id,t.value);else{let e=r[t.id];delete r[t.id],t.value.error?e(t.value.error,{}):e(null,t.value)}};return{readFromStdout:l,afterClose:f,service:{buildOrContext:({callName:n,refs:r,options:i,isTTY:o,defaultWD:s,callback:c})=>{let l=0,u=a++,d={},f={ref(){++l===1&&r&&r.ref()},unref(){--l===0&&(delete t[u],r&&r.unref())}};t[u]=d,f.ref(),W(n,u,m,h,f,e,d,i,o,s,(e,t)=>{try{c(e,t)}finally{f.unref()}})},transform:({callName:t,refs:n,input:r,options:i,isTTY:a,fs:o,callback:s})=>{let c=ie(),l=l=>{try{if(typeof r!=`string`&&!(r instanceof Uint8Array))throw Error(`The input to "transform" must be a string or a Uint8Array`);let{flags:e,mangleCache:u}=H(t,i,a,b),d={command:`transform`,flags:e,inputFS:l!==null,input:l===null?typeof r==`string`?p(r):r:p(l)};u&&(d.mangleCache=u),m(n,d,(e,t)=>{if(e)return s(Error(e),null);let n=Y(t.errors,c),r=Y(t.warnings,c),i=1,a=()=>{if(--i===0){let e={warnings:r,code:t.code,map:t.map,mangleCache:void 0,legalComments:void 0};`legalComments`in t&&(e.legalComments=t?.legalComments),t.mangleCache&&(e.mangleCache=t?.mangleCache),s(null,e)}};if(n.length>0)return s(J(`Transform failed`,n,r),null);t.codeFS&&(i++,o.readFile(t.code,(e,n)=>{e===null?(t.code=n,a()):s(e,null)})),t.mapFS&&(i++,o.readFile(t.map,(e,n)=>{e===null?(t.map=n,a()):s(e,null)})),a()})}catch(t){let r=[];try{B(r,i,{},a,b)}catch{}let o=q(t,e,c,void 0,``);m(n,{command:`error`,flags:r,error:o},()=>{o.detail=c.load(o.detail),s(J(`Transform failed`,[o],[]),null)})}};if((typeof r==`string`||r instanceof Uint8Array)&&r.length>1024*1024){let e=l;l=()=>o.writeFile(r,e)}l(null)},formatMessages:({callName:e,refs:t,messages:n,options:r,callback:i})=>{let a=X(n,`messages`,null,``);if(!r)throw Error(`Missing second argument in ${e}() call`);let o={},s=L(r,o,`kind`,w),c=L(r,o,`color`,C),l=L(r,o,`terminalWidth`,E);if(R(r,o,`in ${e}() call`),s===void 0)throw Error(`Missing "kind" in ${e}() call`);if(s!==`error`&&s!==`warning`)throw Error(`Expected "kind" to be "error" or "warning" in ${e}() call`);let u={command:`format-msgs`,messages:a,isWarning:s===`warning`};c!==void 0&&(u.color=c),l!==void 0&&(u.terminalWidth=l),m(t,u,(e,t)=>{if(e)return i(Error(e),null);i(null,t.messages)})},analyzeMetafile:({callName:e,refs:t,metafile:n,options:r,callback:i})=>{r===void 0&&(r={});let a={},o=L(r,a,`color`,C),s=L(r,a,`verbose`,C);R(r,a,`in ${e}() call`);let c={command:`analyze-metafile`,metafile:n};o!==void 0&&(c.color=o),s!==void 0&&(c.verbose=s),m(t,c,(e,t)=>{if(e)return i(Error(e),null);i(null,t.result)})}}}}function W(e,t,n,r,i,a,o,s,c,l,u){let d=ie(),f=e===`context`,p=(e,t)=>{let r=[];try{B(r,s,{},c,y)}catch{}let o=q(e,a,d,void 0,t);n(i,{command:`error`,flags:r,error:o},()=>{o.detail=d.load(o.detail),u(J(f?`Context failed`:`Build failed`,[o],[]),null)})},h;if(typeof s==`object`){let e=s.plugins;if(e!==void 0){if(!Array.isArray(e))return p(Error(`"plugins" must be an array`),``);h=e}}if(h&&h.length>0){if(a.isSync)return p(Error(`Cannot use plugins in synchronous API calls`),``);G(t,n,r,i,a,o,s,h,d).then(e=>{if(!e.ok)return p(e.error,e.pluginName);try{g(e.requestPlugins,e.runOnEndCallbacks,e.scheduleOnDisposeCallbacks)}catch(e){p(e,``)}},e=>p(e,``));return}try{g(null,(e,t)=>t([],[]),()=>{})}catch(e){p(e,``)}function g(p,h,g){let _=a.hasFS,{entries:v,flags:b,write:x,stdinContents:S,stdinResolveDir:C,absWorkingDir:T,nodePaths:O,mangleCache:k}=re(e,s,c,y,_);if(x&&!a.hasFS)throw Error(`The "write" option is unavailable in this environment`);let A={command:`build`,key:t,entries:v,flags:b,write:x,stdinContents:S,stdinResolveDir:C,absWorkingDir:T||l,nodePaths:O,context:f};p&&(A.plugins=p),k&&(A.mangleCache=k);let j=(e,t)=>{let n={errors:Y(e.errors,d),warnings:Y(e.warnings,d),outputFiles:void 0,metafile:void 0,mangleCache:void 0},r=n.errors.slice(),i=n.warnings.slice();e.outputFiles&&(n.outputFiles=e.outputFiles.map(se)),e.metafile&&(n.metafile=JSON.parse(e.metafile)),e.mangleCache&&(n.mangleCache=e.mangleCache),e.writeToStdout!==void 0&&console.log(m(e.writeToStdout).replace(/\n$/,``)),h(n,(e,a)=>{if(r.length>0||e.length>0)return t(J(`Build failed`,r.concat(e),i.concat(a)),null,e,a);t(null,n,e,a)})},M,N;f&&(o[`on-end`]=(e,t)=>new Promise(n=>{j(t,(t,i,a,o)=>{let s={errors:a,warnings:o};N&&N(t,i),M=void 0,N=void 0,r(e,s),n()})})),n(i,A,(e,s)=>{if(e)return u(Error(e),null);if(!f)return j(s,(e,t)=>(g(),u(e,t)));if(s.errors.length>0)return u(J(`Context failed`,s.errors,s.warnings),null);let c=!1;i.ref(),u(null,{rebuild:()=>(M||=new Promise((e,r)=>{let a;N=(t,n)=>{a||=()=>t?r(t):e(n)};let o=()=>{n(i,{command:`rebuild`,key:t},(e,t)=>{e?r(Error(e)):a?a():o()})};o()}),M),watch:(e={})=>new Promise((r,o)=>{if(!a.hasFS)throw Error(`Cannot use the "watch" API in this environment`);R(e,{},`in watch() call`),n(i,{command:`watch`,key:t},e=>{e?o(Error(e)):r(void 0)})}),serve:(e={})=>new Promise((s,c)=>{if(!a.hasFS)throw Error(`Cannot use the "serve" API in this environment`);let l={},u=L(e,l,`port`,E),d=L(e,l,`host`,w),f=L(e,l,`servedir`,w),p=L(e,l,`keyfile`,w),m=L(e,l,`certfile`,w),h=L(e,l,`onRequest`,D);R(e,l,`in serve() call`);let g={command:`serve`,key:t,onRequest:!!h};u!==void 0&&(g.port=u),d!==void 0&&(g.host=d),f!==void 0&&(g.servedir=f),p!==void 0&&(g.keyfile=p),m!==void 0&&(g.certfile=m),n(i,g,(e,t)=>{if(e)return c(Error(e));h&&(o[`serve-request`]=(e,t)=>{h(t.args),r(e,{})}),s(t)})}),cancel:()=>new Promise(e=>{if(c)return e();n(i,{command:`cancel`,key:t},()=>{e()})}),dispose:()=>new Promise(e=>{if(c)return e();c=!0,n(i,{command:`dispose`,key:t},()=>{e(),g(),i.unref()})})})})}}var G=(e,t,n,r,i,a,o,s,l)=>c(void 0,null,function*(){let u=[],d=[],f={},m={},h=[],g=0,_=0,y=[],b=!1;s=[...s];for(let n of s){let a={};if(typeof n!=`object`)throw Error(`Plugin at index ${_} must be an object`);let s=L(n,a,`name`,w);if(typeof s!=`string`||s===``)throw Error(`Plugin at index ${_} is missing a name`);try{let c=L(n,a,`setup`,D);if(typeof c!=`function`)throw Error(`Plugin is missing a setup function`);R(n,a,`on plugin ${v(s)}`);let p={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};_++;let x=c({initialOptions:o,resolve:(n,i={})=>{if(!b)throw Error(`Cannot call "resolve" before plugin setup has completed`);if(typeof n!=`string`)throw Error(`The path to resolve must be a string`);let a=Object.create(null),o=L(i,a,`pluginName`,w),c=L(i,a,`importer`,w),u=L(i,a,`namespace`,w),d=L(i,a,`resolveDir`,w),f=L(i,a,`kind`,w),p=L(i,a,`pluginData`,S);return R(i,a,`in resolve() call`),new Promise((i,a)=>{let m={command:`resolve`,path:n,key:e,pluginName:s};if(o!=null&&(m.pluginName=o),c!=null&&(m.importer=c),u!=null&&(m.namespace=u),d!=null&&(m.resolveDir=d),f!=null)m.kind=f;else throw Error(`Must specify "kind" when calling "resolve"`);p!=null&&(m.pluginData=l.store(p)),t(r,m,(e,t)=>{e===null?i({errors:Y(t.errors,l),warnings:Y(t.warnings,l),path:t.path,external:t.external,sideEffects:t.sideEffects,namespace:t.namespace,suffix:t.suffix,pluginData:l.load(t.pluginData)}):a(Error(e))})})},onStart(e){let t=K(Error(`This error came from the "onStart" callback registered here:`),i,`onStart`);u.push({name:s,callback:e,note:t}),p.onStart=!0},onEnd(e){let t=K(Error(`This error came from the "onEnd" callback registered here:`),i,`onEnd`);d.push({name:s,callback:e,note:t}),p.onEnd=!0},onResolve(e,t){let n=K(Error(`This error came from the "onResolve" callback registered here:`),i,`onResolve`),r={},a=L(e,r,`filter`,T),o=L(e,r,`namespace`,w);if(R(e,r,`in onResolve() call for plugin ${v(s)}`),a==null)throw Error(`onResolve() call is missing a filter`);let c=g++;f[c]={name:s,callback:t,note:n},p.onResolve.push({id:c,filter:a.source,namespace:o||``})},onLoad(e,t){let n=K(Error(`This error came from the "onLoad" callback registered here:`),i,`onLoad`),r={},a=L(e,r,`filter`,T),o=L(e,r,`namespace`,w);if(R(e,r,`in onLoad() call for plugin ${v(s)}`),a==null)throw Error(`onLoad() call is missing a filter`);let c=g++;m[c]={name:s,callback:t,note:n},p.onLoad.push({id:c,filter:a.source,namespace:o||``})},onDispose(e){h.push(e)},esbuild:i.esbuild});x&&(yield x),y.push(p)}catch(e){return{ok:!1,error:e,pluginName:s}}}a[`on-start`]=(e,t)=>c(void 0,null,function*(){let t={errors:[],warnings:[]};yield Promise.all(u.map(e=>c(void 0,[e],function*({name:e,callback:n,note:r}){try{let r=yield n();if(r!=null){if(typeof r!=`object`)throw Error(`Expected onStart() callback in plugin ${v(e)} to return an object`);let n={},i=L(r,n,`errors`,O),a=L(r,n,`warnings`,O);R(r,n,`from onStart() callback in plugin ${v(e)}`),i!=null&&t.errors.push(...X(i,`errors`,l,e)),a!=null&&t.warnings.push(...X(a,`warnings`,l,e))}}catch(n){t.errors.push(q(n,i,l,r&&r(),e))}}))),n(e,t)}),a[`on-resolve`]=(e,t)=>c(void 0,null,function*(){let r={},a=``,o,s;for(let e of t.ids)try{({name:a,callback:o,note:s}=f[e]);let n=yield o({path:t.path,importer:t.importer,namespace:t.namespace,resolveDir:t.resolveDir,kind:t.kind,pluginData:l.load(t.pluginData)});if(n!=null){if(typeof n!=`object`)throw Error(`Expected onResolve() callback in plugin ${v(a)} to return an object`);let t={},i=L(n,t,`pluginName`,w),o=L(n,t,`path`,w),s=L(n,t,`namespace`,w),c=L(n,t,`suffix`,w),u=L(n,t,`external`,C),d=L(n,t,`sideEffects`,C),f=L(n,t,`pluginData`,S),p=L(n,t,`errors`,O),m=L(n,t,`warnings`,O),h=L(n,t,`watchFiles`,O),g=L(n,t,`watchDirs`,O);R(n,t,`from onResolve() callback in plugin ${v(a)}`),r.id=e,i!=null&&(r.pluginName=i),o!=null&&(r.path=o),s!=null&&(r.namespace=s),c!=null&&(r.suffix=c),u!=null&&(r.external=u),d!=null&&(r.sideEffects=d),f!=null&&(r.pluginData=l.store(f)),p!=null&&(r.errors=X(p,`errors`,l,a)),m!=null&&(r.warnings=X(m,`warnings`,l,a)),h!=null&&(r.watchFiles=Z(h,`watchFiles`)),g!=null&&(r.watchDirs=Z(g,`watchDirs`));break}}catch(t){r={id:e,errors:[q(t,i,l,s&&s(),a)]};break}n(e,r)}),a[`on-load`]=(e,t)=>c(void 0,null,function*(){let r={},a=``,o,s;for(let e of t.ids)try{({name:a,callback:o,note:s}=m[e]);let n=yield o({path:t.path,namespace:t.namespace,suffix:t.suffix,pluginData:l.load(t.pluginData)});if(n!=null){if(typeof n!=`object`)throw Error(`Expected onLoad() callback in plugin ${v(a)} to return an object`);let t={},i=L(n,t,`pluginName`,w),o=L(n,t,`contents`,F),s=L(n,t,`resolveDir`,w),c=L(n,t,`pluginData`,S),u=L(n,t,`loader`,w),d=L(n,t,`errors`,O),f=L(n,t,`warnings`,O),m=L(n,t,`watchFiles`,O),h=L(n,t,`watchDirs`,O);R(n,t,`from onLoad() callback in plugin ${v(a)}`),r.id=e,i!=null&&(r.pluginName=i),o instanceof Uint8Array?r.contents=o:o!=null&&(r.contents=p(o)),s!=null&&(r.resolveDir=s),c!=null&&(r.pluginData=l.store(c)),u!=null&&(r.loader=u),d!=null&&(r.errors=X(d,`errors`,l,a)),f!=null&&(r.warnings=X(f,`warnings`,l,a)),m!=null&&(r.watchFiles=Z(m,`watchFiles`)),h!=null&&(r.watchDirs=Z(h,`watchDirs`));break}}catch(t){r={id:e,errors:[q(t,i,l,s&&s(),a)]};break}n(e,r)});let x=(e,t)=>t([],[]);return d.length>0&&(x=(e,t)=>{c(void 0,null,function*(){let n=[],r=[];for(let{name:t,callback:a,note:o}of d){let s,c;try{let n=yield a(e);if(n!=null){if(typeof n!=`object`)throw Error(`Expected onEnd() callback in plugin ${v(t)} to return an object`);let e={},r=L(n,e,`errors`,O),i=L(n,e,`warnings`,O);R(n,e,`from onEnd() callback in plugin ${v(t)}`),r!=null&&(s=X(r,`errors`,l,t)),i!=null&&(c=X(i,`warnings`,l,t))}}catch(e){s=[q(e,i,l,o&&o(),t)]}if(s){n.push(...s);try{e.errors.push(...s)}catch{}}if(c){r.push(...c);try{e.warnings.push(...c)}catch{}}}t(n,r)})}),b=!0,{ok:!0,requestPlugins:y,runOnEndCallbacks:x,scheduleOnDisposeCallbacks:()=>{for(let e of h)setTimeout(()=>e(),0)}}});function ie(){let e=new Map,t=0;return{load(t){return e.get(t)},store(n){if(n===void 0)return-1;let r=t++;return e.set(r,n),r}}}function K(e,t,n){let r,i=!1;return()=>{if(i)return r;i=!0;try{let i=(e.stack+``).split(`
`);i.splice(1,1);let a=ae(t,i,n);if(a)return r={text:e.message,location:a},r}catch{}}}function q(e,t,n,r,i){let a=`Internal error`,o=null;try{a=(e&&e.message||e)+``}catch{}try{o=ae(t,(e.stack+``).split(`
`),``)}catch{}return{id:``,pluginName:i,text:a,location:o,notes:r?[r]:[],detail:n?n.store(e):-1}}function ae(e,t,n){let r=`    at `;if(e.readFileSync&&!t[0].startsWith(r)&&t[1].startsWith(r))for(let i=1;i<t.length;i++){let a=t[i];if(a.startsWith(r))for(a=a.slice(7);;){let r=/^(?:new |async )?\S+ \((.*)\)$/.exec(a);if(r){a=r[1];continue}if(r=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(a),r){a=r[1];continue}if(r=/^(\S+):(\d+):(\d+)$/.exec(a),r){let i;try{i=e.readFileSync(r[1],`utf8`)}catch{break}let a=i.split(/\r\n|\r|\n|\u2028|\u2029/)[r[2]-1]||``,o=r[3]-1,s=a.slice(o,o+n.length)===n?n.length:0;return{file:r[1],namespace:`file`,line:+r[2],column:p(a.slice(0,o)).length,length:p(a.slice(o,o+s)).length,lineText:a+`
`+t.slice(1).join(`
`),suggestion:``}}break}}return null}function J(e,t,n){let r=t.length<1?``:` with ${t.length} error${t.length<2?``:`s`}:`+t.slice(0,6).map((e,t)=>{if(t===5)return`
...`;if(!e.location)return`
error: ${e.text}`;let{file:n,line:r,column:i}=e.location;return`
${n}:${r}:${i}: ERROR: ${e.pluginName?`[plugin: ${e.pluginName}] `:``}${e.text}`}).join(``),i=Error(`${e}${r}`);return i.errors=t,i.warnings=n,i}function Y(e,t){for(let n of e)n.detail=t.load(n.detail);return e}function oe(e,t){if(e==null)return null;let n={},r=L(e,n,`file`,w),i=L(e,n,`namespace`,w),a=L(e,n,`line`,E),o=L(e,n,`column`,E),s=L(e,n,`length`,E),c=L(e,n,`lineText`,w),l=L(e,n,`suggestion`,w);return R(e,n,t),{file:r||``,namespace:i||``,line:a||0,column:o||0,length:s||0,lineText:c||``,suggestion:l||``}}function X(e,t,n,r){let i=[],a=0;for(let o of e){let e={},s=L(o,e,`id`,w),c=L(o,e,`pluginName`,w),l=L(o,e,`text`,w),u=L(o,e,`location`,M),d=L(o,e,`notes`,O),f=L(o,e,`detail`,S),p=`in element ${a} of "${t}"`;R(o,e,p);let m=[];if(d)for(let e of d){let t={},n=L(e,t,`text`,w),r=L(e,t,`location`,M);R(e,t,p),m.push({text:n||``,location:oe(r,p)})}i.push({id:s||``,pluginName:c||r,text:l||``,location:oe(u,p),notes:m,detail:n?n.store(f):-1}),a++}return i}function Z(e,t){let n=[];for(let r of e){if(typeof r!=`string`)throw Error(`${v(t)} must be an array of strings`);n.push(r)}return n}function se({path:e,contents:t}){let n=null;return{path:e,contents:t,get text(){let e=this.contents;return(n===null||e!==t)&&(t=e,n=m(e)),n}}}var ce=`0.17.19`,le=e=>$().build(e),ue=e=>$().context(e),de=(e,t)=>$().transform(e,t),fe=(e,t)=>$().formatMessages(e,t),pe=(e,t)=>$().analyzeMetafile(e,t),me=()=>{throw Error(`The "buildSync" API only works in node`)},he=()=>{throw Error(`The "transformSync" API only works in node`)},ge=()=>{throw Error(`The "formatMessagesSync" API only works in node`)},_e=()=>{throw Error(`The "analyzeMetafileSync" API only works in node`)},Q,ve,$=()=>{if(ve)return ve;throw Error(Q?`You need to wait for the promise returned from "initialize" to be resolved before calling this`:`You need to call "initialize" before calling this`)},ye=e=>{e=z(e||{});let t=e.wasmURL,n=e.wasmModule,r=e.worker!==!1;if(!t&&!n)throw Error(`Must provide either the "wasmURL" option or the "wasmModule" option`);if(Q)throw Error(`Cannot call "initialize" more than once`);return Q=be(t||``,n,r),Q.catch(()=>{Q=void 0}),Q},be=(e,t,n)=>c(void 0,null,function*(){let r;if(n){let e=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                    // setTimeout has been seen to fire up to 1 millisecond early
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.17.19"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok)
            throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:`text/javascript`});r=new Worker(URL.createObjectURL(e))}else{let e=(e=>{var t=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())});let n,r={};for(let e=self;e;e=Object.getPrototypeOf(e))for(let t of Object.getOwnPropertyNames(e))t in r||Object.defineProperty(r,t,{get:()=>self[t]});(()=>{let e=()=>{let e=Error(`not implemented`);return e.code=`ENOSYS`,e};if(!r.fs){let t=``;r.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(e,n){t+=i.decode(n);let r=t.lastIndexOf(`
`);return r!=-1&&(console.log(t.substring(0,r)),t=t.substring(r+1)),n.length},write(t,n,r,i,a,o){if(r!==0||i!==n.length||a!==null){o(e());return}o(null,this.writeSync(t,n))},chmod(t,n,r){r(e())},chown(t,n,r,i){i(e())},close(t,n){n(e())},fchmod(t,n,r){r(e())},fchown(t,n,r,i){i(e())},fstat(t,n){n(e())},fsync(e,t){t(null)},ftruncate(t,n,r){r(e())},lchown(t,n,r,i){i(e())},link(t,n,r){r(e())},lstat(t,n){n(e())},mkdir(t,n,r){r(e())},open(t,n,r,i){i(e())},read(t,n,r,i,a,o){o(e())},readdir(t,n){n(e())},readlink(t,n){n(e())},rename(t,n,r){r(e())},rmdir(t,n){n(e())},stat(t,n){n(e())},symlink(t,n,r){r(e())},truncate(t,n,r){r(e())},unlink(t,n){n(e())},utimes(t,n,r,i){i(e())}}}if(r.process||={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw e()},pid:-1,ppid:-1,umask(){throw e()},cwd(){throw e()},chdir(){throw e()}},!r.crypto)throw Error(`globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)`);if(!r.performance)throw Error(`globalThis.performance is not available, polyfill required (performance.now only)`);if(!r.TextEncoder)throw Error(`globalThis.TextEncoder is not available, polyfill required`);if(!r.TextDecoder)throw Error(`globalThis.TextDecoder is not available, polyfill required`);let n=new TextEncoder(`utf-8`),i=new TextDecoder(`utf-8`);r.Go=class{constructor(){this.argv=[`js`],this.env={},this.exit=e=>{e!==0&&console.warn(`exit code:`,e)},this._exitPromise=new Promise(e=>{this._resolveExitPromise=e}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let e=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/4294967296),!0)},t=e=>this.mem.getUint32(e+0,!0)+this.mem.getInt32(e+4,!0)*4294967296,a=e=>{let t=this.mem.getFloat64(e,!0);if(t===0)return;if(!isNaN(t))return t;let n=this.mem.getUint32(e,!0);return this._values[n]},o=(e,t)=>{let n=2146959360;if(typeof t==`number`&&t!==0){if(isNaN(t)){this.mem.setUint32(e+4,n,!0),this.mem.setUint32(e,0,!0);return}this.mem.setFloat64(e,t,!0);return}if(t===void 0){this.mem.setFloat64(e,0,!0);return}let r=this._ids.get(t);r===void 0&&(r=this._idPool.pop(),r===void 0&&(r=this._values.length),this._values[r]=t,this._goRefCounts[r]=0,this._ids.set(t,r)),this._goRefCounts[r]++;let i=0;switch(typeof t){case`object`:t!==null&&(i=1);break;case`string`:i=2;break;case`symbol`:i=3;break;case`function`:i=4;break}this.mem.setUint32(e+4,n|i,!0),this.mem.setUint32(e,r,!0)},s=e=>{let n=t(e+0),r=t(e+8);return new Uint8Array(this._inst.exports.mem.buffer,n,r)},c=e=>{let n=t(e+0),r=t(e+8),i=Array(r);for(let e=0;e<r;e++)i[e]=a(n+e*8);return i},l=e=>{let n=t(e+0),r=t(e+8);return i.decode(new DataView(this._inst.exports.mem.buffer,n,r))},u=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{e>>>=0;let n=t(e+8),i=t(e+16),a=this.mem.getInt32(e+24,!0);r.fs.writeSync(n,new Uint8Array(this._inst.exports.mem.buffer,i,a))},"runtime.resetMemoryDataView":e=>{e>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,e(t+8,(u+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;let n=new Date().getTime();e(t+8,n/1e3),this.mem.setInt32(t+16,n%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;let n=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(n,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(n);)console.warn(`scheduleTimeoutEvent: missed timeout event`),this._resume()},t(e+8)+1)),this.mem.setInt32(e+16,n,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(s(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;let t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,this._goRefCounts[t]===0){let e=this._values[t];this._values[t]=null,this._ids.delete(e),this._idPool.push(t)}},"syscall/js.stringVal":e=>{e>>>=0,o(e+24,l(e+8))},"syscall/js.valueGet":e=>{e>>>=0;let t=Reflect.get(a(e+8),l(e+16));e=this._inst.exports.getsp()>>>0,o(e+32,t)},"syscall/js.valueSet":e=>{e>>>=0,Reflect.set(a(e+8),l(e+16),a(e+32))},"syscall/js.valueDelete":e=>{e>>>=0,Reflect.deleteProperty(a(e+8),l(e+16))},"syscall/js.valueIndex":e=>{e>>>=0,o(e+24,Reflect.get(a(e+8),t(e+16)))},"syscall/js.valueSetIndex":e=>{e>>>=0,Reflect.set(a(e+8),t(e+16),a(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{let t=a(e+8),n=Reflect.get(t,l(e+16)),r=c(e+32),i=Reflect.apply(n,t,r);e=this._inst.exports.getsp()>>>0,o(e+56,i),this.mem.setUint8(e+64,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{let t=a(e+8),n=c(e+16),r=Reflect.apply(t,void 0,n);e=this._inst.exports.getsp()>>>0,o(e+40,r),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{let t=a(e+8),n=c(e+16),r=Reflect.construct(t,n);e=this._inst.exports.getsp()>>>0,o(e+40,r),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,e(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;let r=n.encode(String(a(t+8)));o(t+16,r),e(t+24,r.length)},"syscall/js.valueLoadString":e=>{e>>>=0;let t=a(e+8);s(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,+(a(e+8)instanceof a(e+16)))},"syscall/js.copyBytesToGo":t=>{t>>>=0;let n=s(t+8),r=a(t+32);if(!(r instanceof Uint8Array||r instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let i=r.subarray(0,n.length);n.set(i),e(t+40,i.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;let n=a(t+8),r=s(t+16);if(!(n instanceof Uint8Array||n instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let i=r.subarray(0,n.length);n.set(i),e(t+40,i.length),this.mem.setUint8(t+48,1)},debug:e=>{console.log(e)}}}}run(e){return t(this,null,function*(){if(!(e instanceof WebAssembly.Instance))throw Error(`Go.run: WebAssembly.Instance expected`);this._inst=e,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,r,this],this._goRefCounts=Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[r,5],[this,6]]),this._idPool=[],this.exited=!1;let t=4096,i=e=>{let r=t,i=n.encode(e+`\0`);return new Uint8Array(this.mem.buffer,t,i.length).set(i),t+=i.length,t%8!=0&&(t+=8-t%8),r},a=this.argv.length,o=[];this.argv.forEach(e=>{o.push(i(e))}),o.push(0),Object.keys(this.env).sort().forEach(e=>{o.push(i(`${e}=${this.env[e]}`))}),o.push(0);let s=t;if(o.forEach(e=>{this.mem.setUint32(t,e,!0),this.mem.setUint32(t+4,0,!0),t+=8}),t>=12288)throw Error(`total length of command line and environment variables exceeds limit`);this._inst.exports.run(a,s),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw Error(`Go program has already exited`);this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(e){let t=this;return function(){let n={id:e,this:this,args:arguments};return t._pendingEvent=n,t._resume(),n.result}}}})(),n=({data:t})=>{let a=new TextDecoder,o=r.fs,s=``;o.writeSync=(t,n)=>{if(t===1)e(n);else if(t===2){s+=a.decode(n);let e=s.split(`
`);e.length>1&&console.log(e.slice(0,-1).join(`
`)),s=e[e.length-1]}else throw Error(`Bad write`);return n.length};let c=[],l,u=0;n=({data:e})=>{e.length>0&&(c.push(e),l&&l())},o.read=(e,t,n,r,i,a)=>{if(e!==0||n!==0||r!==t.length||i!==null)throw Error(`Bad read`);if(c.length===0){l=()=>o.read(e,t,n,r,i,a);return}let s=c[0],d=Math.max(0,Math.min(r,s.length-u));t.set(s.subarray(u,u+d),n),u+=d,u===s.length&&(c.shift(),u=0),a(null,d)};let d=new r.Go;d.argv=[``,`--service=0.17.19`],i(t,d).then(t=>{e(null),d.run(t)},t=>{e(t)})};function i(e,n){return t(this,null,function*(){if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,n.importObject);let t=yield fetch(e);if(!t.ok)throw Error(`Failed to download ${JSON.stringify(e)}`);if(`instantiateStreaming`in WebAssembly&&/^application\/wasm($|;)/i.test(t.headers.get(`Content-Type`)||``))return(yield WebAssembly.instantiateStreaming(t,n.importObject)).instance;let r=yield t.arrayBuffer();return(yield WebAssembly.instantiate(r,n.importObject)).instance})}return e=>n(e)})(e=>r.onmessage({data:e}));r={onmessage:null,postMessage:t=>setTimeout(()=>e({data:t})),terminate(){}}}let i,a,o=new Promise((e,t)=>{i=e,a=t});r.onmessage=({data:e})=>{r.onmessage=({data:e})=>s(e),e?a(e):i()},r.postMessage(t||new URL(e,location.href).toString());let{readFromStdout:s,service:c}=U({writeToStdin(e){r.postMessage(e)},isSync:!1,hasFS:!1,esbuild:l});yield o,ve={build:e=>new Promise((t,n)=>c.buildOrContext({callName:`build`,refs:null,options:e,isTTY:!1,defaultWD:`/`,callback:(e,r)=>e?n(e):t(r)})),context:e=>new Promise((t,n)=>c.buildOrContext({callName:`context`,refs:null,options:e,isTTY:!1,defaultWD:`/`,callback:(e,r)=>e?n(e):t(r)})),transform:(e,t)=>new Promise((n,r)=>c.transform({callName:`transform`,refs:null,input:e,options:t||{},isTTY:!1,fs:{readFile(e,t){t(Error(`Internal error`),null)},writeFile(e,t){t(null)}},callback:(e,t)=>e?r(e):n(t)})),formatMessages:(e,t)=>new Promise((n,r)=>c.formatMessages({callName:`formatMessages`,refs:null,messages:e,options:t,callback:(e,t)=>e?r(e):n(t)})),analyzeMetafile:(e,t)=>new Promise((n,r)=>c.analyzeMetafile({callName:`analyzeMetafile`,refs:null,metafile:typeof e==`string`?e:JSON.stringify(e),options:t,callback:(e,t)=>e?r(e):n(t)}))}}),xe=l})(typeof t==`object`?t:{set exports(e){(typeof self<`u`?self:this).esbuild=e}})}))()),r=!1,i=e=>({name:`unpkg-path-plugin`,setup(e){e.onResolve({filter:/^index\.js$/},e=>({path:`index.js`,namespace:`a`})),e.onResolve({filter:/^\.\//},e=>({namespace:`a`,path:new URL(e.path,e.resolveDir+`/`).href})),e.onResolve({filter:/.*/},e=>({namespace:`a`,path:`https://unpkg.com/${e.path}?module`}))}}),a=e=>({name:`fetch-plugin`,setup(t){t.onLoad({filter:/^index\.js$/,namespace:`a`},()=>({loader:`jsx`,contents:e})),t.onLoad({filter:/\.css$/,namespace:`a`},async e=>({loader:`jsx`,contents:`const style = document.createElement('style'); style.innerText = '${(await(await fetch(e.path)).text()).replace(/\n/g,``).replace(/"/g,`\\"`).replace(/'/g,`\\'`)}'; document.head.appendChild(style);`,resolveDir:new URL(`./`,e.path).href})),t.onLoad({filter:/.*/,namespace:`a`},async e=>({loader:`jsx`,contents:await(await fetch(e.path)).text(),resolveDir:new URL(`./`,e.path).href}))}});async function o(e){return r||=(await n.initialize({wasmURL:`https://unpkg.com/esbuild-wasm@0.17.19/esbuild.wasm`,worker:!0}),!0),(await n.build({entryPoints:[`index.js`],bundle:!0,write:!1,plugins:[i(e),a(e)],define:{"process.env.NODE_ENV":`"production"`},jsxFactory:`React.createElement`,jsxFragment:`React.Fragment`,format:`iife`})).outputFiles[0].text}export{o as bundle};