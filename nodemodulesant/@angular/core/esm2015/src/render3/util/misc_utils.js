/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../../util/global';
const ɵ0 = () => (typeof requestAnimationFrame !== 'undefined' &&
    requestAnimationFrame || // browser only
    setTimeout // everything else
)
    .bind(global);
export const defaultScheduler = (ɵ0)();
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveWindow(element) {
    return element.ownerDocument.defaultView;
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveDocument(element) {
    return element.ownerDocument;
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveBody(element) {
    return element.ownerDocument.body;
}
/**
 * The special delimiter we use to separate property names, prefixes, and suffixes
 * in property binding metadata. See storeBindingMetadata().
 *
 * We intentionally use the Unicode "REPLACEMENT CHARACTER" (U+FFFD) as a delimiter
 * because it is a very uncommon character that is unlikely to be part of a user's
 * property names or interpolation strings. If it is in fact used in a property
 * binding, DebugElement.properties will not return the correct value for that
 * binding. However, there should be no runtime effect for real applications.
 *
 * This character is typically rendered as a question mark inside of a diamond.
 * See https://en.wikipedia.org/wiki/Specials_(Unicode_block)
 *
 */
export const INTERPOLATION_DELIMITER = `�`;
/**
 * Unwrap a value which might be behind a closure (for forward declaration reasons).
 */
export function maybeUnwrapFn(value) {
    if (value instanceof Function) {
        return value();
    }
    else {
        return value;
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9taXNjX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztXQUtwQyxHQUFHLEVBQUUsQ0FBQyxDQUNJLE9BQU8scUJBQXFCLEtBQUssV0FBVztJQUN4QyxxQkFBcUIsSUFBSyxlQUFlO0lBQzdDLFVBQVUsQ0FBb0Isa0JBQWtCO0NBQy9DO0tBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQU41QixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FDekIsSUFLeUIsRUFBRSxDQUFDO0FBRWhDOzs7R0FHRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBMkM7SUFDekUsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQTJDO0lBQzNFLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUMvQixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUEyQztJQUN2RSxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQ3BDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsR0FBRyxDQUFDO0FBRTNDOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBSSxLQUFrQjtJQUNqRCxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7UUFDN0IsT0FBTyxLQUFLLEVBQUUsQ0FBQztLQUNoQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnbG9iYWx9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYmFsJztcbmltcG9ydCB7UkVsZW1lbnR9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVuZGVyZXJfZG9tJztcblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNjaGVkdWxlciA9XG4gICAgKCgpID0+IChcbiAgICAgICAgICAgICAgIHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBicm93c2VyIG9ubHlcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQgICAgICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgLmJpbmQoZ2xvYmFsKSkoKTtcblxuLyoqXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVyZXNvbHZlV2luZG93KGVsZW1lbnQ6IFJFbGVtZW50Jntvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldztcbn1cblxuLyoqXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVyZXNvbHZlRG9jdW1lbnQoZWxlbWVudDogUkVsZW1lbnQme293bmVyRG9jdW1lbnQ6IERvY3VtZW50fSkge1xuICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50O1xufVxuXG4vKipcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXJlc29sdmVCb2R5KGVsZW1lbnQ6IFJFbGVtZW50Jntvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xufVxuXG4vKipcbiAqIFRoZSBzcGVjaWFsIGRlbGltaXRlciB3ZSB1c2UgdG8gc2VwYXJhdGUgcHJvcGVydHkgbmFtZXMsIHByZWZpeGVzLCBhbmQgc3VmZml4ZXNcbiAqIGluIHByb3BlcnR5IGJpbmRpbmcgbWV0YWRhdGEuIFNlZSBzdG9yZUJpbmRpbmdNZXRhZGF0YSgpLlxuICpcbiAqIFdlIGludGVudGlvbmFsbHkgdXNlIHRoZSBVbmljb2RlIFwiUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXCIgKFUrRkZGRCkgYXMgYSBkZWxpbWl0ZXJcbiAqIGJlY2F1c2UgaXQgaXMgYSB2ZXJ5IHVuY29tbW9uIGNoYXJhY3RlciB0aGF0IGlzIHVubGlrZWx5IHRvIGJlIHBhcnQgb2YgYSB1c2VyJ3NcbiAqIHByb3BlcnR5IG5hbWVzIG9yIGludGVycG9sYXRpb24gc3RyaW5ncy4gSWYgaXQgaXMgaW4gZmFjdCB1c2VkIGluIGEgcHJvcGVydHlcbiAqIGJpbmRpbmcsIERlYnVnRWxlbWVudC5wcm9wZXJ0aWVzIHdpbGwgbm90IHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZSBmb3IgdGhhdFxuICogYmluZGluZy4gSG93ZXZlciwgdGhlcmUgc2hvdWxkIGJlIG5vIHJ1bnRpbWUgZWZmZWN0IGZvciByZWFsIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBUaGlzIGNoYXJhY3RlciBpcyB0eXBpY2FsbHkgcmVuZGVyZWQgYXMgYSBxdWVzdGlvbiBtYXJrIGluc2lkZSBvZiBhIGRpYW1vbmQuXG4gKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spXG4gKlxuICovXG5leHBvcnQgY29uc3QgSU5URVJQT0xBVElPTl9ERUxJTUlURVIgPSBg77+9YDtcblxuLyoqXG4gKiBVbndyYXAgYSB2YWx1ZSB3aGljaCBtaWdodCBiZSBiZWhpbmQgYSBjbG9zdXJlIChmb3IgZm9yd2FyZCBkZWNsYXJhdGlvbiByZWFzb25zKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlVW53cmFwRm48VD4odmFsdWU6IFR8KCgpID0+IFQpKTogVCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHZhbHVlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=