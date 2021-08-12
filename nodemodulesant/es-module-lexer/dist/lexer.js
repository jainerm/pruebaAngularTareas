/* es-module-lexer 0.6.0 */
const A=1===new Uint8Array(new Uint16Array([1]).buffer)[0];export function parse(E,g="@"){if(!B)return init.then(()=>parse(E));const I=E.length+1,w=(B.__heap_base.value||B.__heap_base)+4*I-B.memory.buffer.byteLength;w>0&&B.memory.grow(Math.ceil(w/65536));const D=B.sa(I-1);if((A?C:Q)(E,new Uint16Array(B.memory.buffer,D,I)),!B.parse())throw Object.assign(new Error(`Parse error ${g}:${E.slice(0,B.e()).split("\n").length}:${B.e()-E.lastIndexOf("\n",B.e()-1)}`),{idx:B.e()});const L=[],N=[];for(;B.ri();){const A=B.is(),Q=B.ie(),C=B.ai(),g=B.id(),I=B.ss(),w=B.se();let D;B.ip()&&(D=J(E.slice(-1===g?A-1:A,-1===g?Q+1:Q))),L.push({n:D,s:A,e:Q,ss:I,se:w,d:g,a:C})}for(;B.re();)N.push(E.slice(B.es(),B.ee()));function J(A){try{return(0,eval)(A)}catch{}}return[L,N,!!B.f()]}function Q(A,Q){const C=A.length;let B=0;for(;B<C;){const C=A.charCodeAt(B);Q[B++]=(255&C)<<8|C>>>8}}function C(A,Q){const C=A.length;let B=0;for(;B<C;)Q[B]=A.charCodeAt(B++)}let B;export const init=WebAssembly.compile((E="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","undefined"!=typeof Buffer?Buffer.from(E,"base64"):Uint8Array.from(atob(E),A=>A.charCodeAt(0)))).then(WebAssembly.instantiate).then(({exports:A})=>{B=A});var E;