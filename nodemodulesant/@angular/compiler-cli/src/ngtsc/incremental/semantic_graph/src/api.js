(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/incremental/semantic_graph/src/api", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticSymbol = void 0;
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    /**
     * Represents a symbol that is recognizable across incremental rebuilds, which enables the captured
     * metadata to be compared to the prior compilation. This allows for semantic understanding of
     * the changes that have been made in a rebuild, which potentially enables more reuse of work
     * from the prior compilation.
     */
    var SemanticSymbol = /** @class */ (function () {
        function SemanticSymbol(
        /**
         * The declaration for this symbol.
         */
        decl) {
            this.decl = decl;
            this.path = file_system_1.absoluteFromSourceFile(decl.getSourceFile());
            this.identifier = getSymbolIdentifier(decl);
        }
        return SemanticSymbol;
    }());
    exports.SemanticSymbol = SemanticSymbol;
    function getSymbolIdentifier(decl) {
        if (!ts.isSourceFile(decl.parent)) {
            return null;
        }
        // If this is a top-level class declaration, the class name is used as unique identifier.
        // Other scenarios are currently not supported and causes the symbol not to be identified
        // across rebuilds, unless the declaration node has not changed.
        return decl.name.text;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9pbmNyZW1lbnRhbC9zZW1hbnRpY19ncmFwaC9zcmMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILCtCQUFpQztJQUVqQywyRUFBNEU7SUFHNUU7Ozs7O09BS0c7SUFDSDtRQWlCRTtRQUNJOztXQUVHO1FBQ2EsSUFBc0I7WUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7WUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxvQ0FBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUF1REgscUJBQUM7SUFBRCxDQUFDLEFBaEZELElBZ0ZDO0lBaEZxQix3Q0FBYztJQW1HcEMsU0FBUyxtQkFBbUIsQ0FBQyxJQUFzQjtRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHlGQUF5RjtRQUN6Rix5RkFBeUY7UUFDekYsZ0VBQWdFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7YWJzb2x1dGVGcm9tU291cmNlRmlsZSwgQWJzb2x1dGVGc1BhdGh9IGZyb20gJy4uLy4uLy4uL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vLi4vcmVmbGVjdGlvbic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHN5bWJvbCB0aGF0IGlzIHJlY29nbml6YWJsZSBhY3Jvc3MgaW5jcmVtZW50YWwgcmVidWlsZHMsIHdoaWNoIGVuYWJsZXMgdGhlIGNhcHR1cmVkXG4gKiBtZXRhZGF0YSB0byBiZSBjb21wYXJlZCB0byB0aGUgcHJpb3IgY29tcGlsYXRpb24uIFRoaXMgYWxsb3dzIGZvciBzZW1hbnRpYyB1bmRlcnN0YW5kaW5nIG9mXG4gKiB0aGUgY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBtYWRlIGluIGEgcmVidWlsZCwgd2hpY2ggcG90ZW50aWFsbHkgZW5hYmxlcyBtb3JlIHJldXNlIG9mIHdvcmtcbiAqIGZyb20gdGhlIHByaW9yIGNvbXBpbGF0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VtYW50aWNTeW1ib2wge1xuICAvKipcbiAgICogVGhlIHBhdGggb2YgdGhlIGZpbGUgdGhhdCBkZWNsYXJlcyB0aGlzIHN5bWJvbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwYXRoOiBBYnNvbHV0ZUZzUGF0aDtcblxuICAvKipcbiAgICogVGhlIGlkZW50aWZpZXIgb2YgdGhpcyBzeW1ib2wsIG9yIG51bGwgaWYgbm8gaWRlbnRpZmllciBjb3VsZCBiZSBkZXRlcm1pbmVkLiBJdCBzaG91bGRcbiAgICogdW5pcXVlbHkgaWRlbnRpZnkgdGhlIHN5bWJvbCByZWxhdGl2ZSB0byBgZmlsZWAuIFRoaXMgaXMgdHlwaWNhbGx5IGp1c3QgdGhlIG5hbWUgb2YgYVxuICAgKiB0b3AtbGV2ZWwgY2xhc3MgZGVjbGFyYXRpb24sIGFzIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgY2xhc3Mgd2l0aGluIHRoZSBmaWxlLlxuICAgKlxuICAgKiBJZiB0aGUgaWRlbnRpZmllciBpcyBudWxsLCB0aGVuIHRoaXMgc3ltYm9sIGNhbm5vdCBiZSByZWNvZ25pemVkIGFjcm9zcyByZWJ1aWxkcy4gSW4gdGhhdFxuICAgKiBjYXNlLCB0aGUgc3ltYm9sIGlzIGFsd2F5cyBhc3N1bWVkIHRvIGhhdmUgc2VtYW50aWNhbGx5IGNoYW5nZWQgdG8gZ3VhcmFudGVlIGEgcHJvcGVyXG4gICAqIHJlYnVpbGQuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaWRlbnRpZmllcjogc3RyaW5nfG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZWNsYXJhdGlvbiBmb3IgdGhpcyBzeW1ib2wuXG4gICAgICAgKi9cbiAgICAgIHB1YmxpYyByZWFkb25seSBkZWNsOiBDbGFzc0RlY2xhcmF0aW9uLFxuICApIHtcbiAgICB0aGlzLnBhdGggPSBhYnNvbHV0ZUZyb21Tb3VyY2VGaWxlKGRlY2wuZ2V0U291cmNlRmlsZSgpKTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBnZXRTeW1ib2xJZGVudGlmaWVyKGRlY2wpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgc3ltYm9sIHRvIGJlIGNvbXBhcmVkIHRvIHRoZSBlcXVpdmFsZW50IHN5bWJvbCBpbiB0aGUgcHJldmlvdXMgY29tcGlsYXRpb24uIFRoZVxuICAgKiByZXR1cm4gdmFsdWUgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN5bWJvbCBoYXMgYmVlbiBjaGFuZ2VkIGluIGEgd2F5IHN1Y2ggdGhhdCBpdHMgcHVibGljIEFQSVxuICAgKiBpcyBhZmZlY3RlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbmdlIHRvIF90aGlzXyBzeW1ib2wgcmVxdWlyZSB0aGUgc3ltYm9scyB0aGF0XG4gICAqIHVzZSB0byB0aGlzIHN5bWJvbCB0byBiZSByZS1lbWl0dGVkLlxuICAgKlxuICAgKiBOb3RlOiBgcHJldmlvdXNTeW1ib2xgIGlzIG9idGFpbmVkIGZyb20gdGhlIG1vc3QgcmVjZW50bHkgc3VjY2VlZGVkIGNvbXBpbGF0aW9uLiBTeW1ib2xzIG9mXG4gICAqIGZhaWxlZCBjb21waWxhdGlvbnMgYXJlIG5ldmVyIHByb3ZpZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJldmlvdXNTeW1ib2wgVGhlIHN5bWJvbCBmcm9tIGEgcHJpb3IgY29tcGlsYXRpb24uXG4gICAqL1xuICBhYnN0cmFjdCBpc1B1YmxpY0FwaUFmZmVjdGVkKHByZXZpb3VzU3ltYm9sOiBTZW1hbnRpY1N5bWJvbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgc3ltYm9sIHRvIGRldGVybWluZSB3aGV0aGVyIGl0cyBlbWl0IGlzIGFmZmVjdGVkLiBUaGUgZXF1aXZhbGVudCBzeW1ib2wgZnJvbSBhIHByaW9yXG4gICAqIGJ1aWxkIGlzIGdpdmVuLCBpbiBhZGRpdGlvbiB0byB0aGUgc2V0IG9mIHN5bWJvbHMgb2Ygd2hpY2ggdGhlIHB1YmxpYyBBUEkgaGFzIGNoYW5nZWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRldGVybWluZXMgd2hldGhlciBhIGNoYW5nZSB0byBfb3RoZXJfIHN5bWJvbHMsIGkuZS4gdGhvc2UgcHJlc2VudCBpblxuICAgKiBgcHVibGljQXBpQWZmZWN0ZWRgLCBzaG91bGQgY2F1c2UgX3RoaXNfIHN5bWJvbCB0byBiZSByZS1lbWl0dGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJldmlvdXNTeW1ib2wgVGhlIGVxdWl2YWxlbnQgc3ltYm9sIGZyb20gYSBwcmlvciBjb21waWxhdGlvbi4gTm90ZSB0aGF0IGl0IG1heSBiZSBhXG4gICAqIGRpZmZlcmVudCB0eXBlIG9mIHN5bWJvbCwgaWYgZS5nLiBhIENvbXBvbmVudCB3YXMgY2hhbmdlZCBpbnRvIGEgRGlyZWN0aXZlIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICogQHBhcmFtIHB1YmxpY0FwaUFmZmVjdGVkIFRoZSBzZXQgb2Ygc3ltYm9scyBvZiB3aGljaCB0aGUgcHVibGljIEFQSSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIGlzRW1pdEFmZmVjdGVkPyhwcmV2aW91c1N5bWJvbDogU2VtYW50aWNTeW1ib2wsIHB1YmxpY0FwaUFmZmVjdGVkOiBTZXQ8U2VtYW50aWNTeW1ib2w+KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2ltaWxhciB0byBgaXNQdWJsaWNBcGlBZmZlY3RlZGAsIGJ1dCBoZXJlIGVxdWl2YWxlbnQgc3ltYm9sIGZyb20gYSBwcmlvciBjb21waWxhdGlvbiBuZWVkc1xuICAgKiB0byBiZSBjb21wYXJlZCB0byBzZWUgaWYgdGhlIHR5cGUtY2hlY2sgYmxvY2sgb2YgY29tcG9uZW50cyB0aGF0IHVzZSB0aGlzIHN5bWJvbCBpcyBhZmZlY3RlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbmdlIHRvIF90aGlzXyBzeW1ib2wgcmVxdWlyZSB0aGUgc3ltYm9scyB0aGF0XG4gICAqIHVzZSB0byB0aGlzIHN5bWJvbCB0byBoYXZlIHRoZWlyIHR5cGUtY2hlY2sgYmxvY2sgcmVnZW5lcmF0ZWQuXG4gICAqXG4gICAqIE5vdGU6IGBwcmV2aW91c1N5bWJvbGAgaXMgb2J0YWluZWQgZnJvbSB0aGUgbW9zdCByZWNlbnRseSBzdWNjZWVkZWQgY29tcGlsYXRpb24uIFN5bWJvbHMgb2ZcbiAgICogZmFpbGVkIGNvbXBpbGF0aW9ucyBhcmUgbmV2ZXIgcHJvdmlkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwcmV2aW91c1N5bWJvbCBUaGUgc3ltYm9sIGZyb20gYSBwcmlvciBjb21waWxhdGlvbi5cbiAgICovXG4gIGFic3RyYWN0IGlzVHlwZUNoZWNrQXBpQWZmZWN0ZWQocHJldmlvdXNTeW1ib2w6IFNlbWFudGljU3ltYm9sKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2ltaWxhciB0byBgaXNFbWl0QWZmZWN0ZWRgLCBidXQgZm9jdXNlZCBvbiB0aGUgdHlwZS1jaGVjayBibG9jayBvZiB0aGlzIHN5bWJvbC4gVGhpcyBtZXRob2RcbiAgICogZGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbmdlIHRvIF9vdGhlcl8gc3ltYm9scywgaS5lLiB0aG9zZSBwcmVzZW50IGluIGB0eXBlQ2hlY2tBcGlBZmZlY3RlZGAsXG4gICAqIHNob3VsZCBjYXVzZSBfdGhpc18gc3ltYm9sJ3MgdHlwZS1jaGVjayBibG9jayB0byBiZSByZWdlbmVyYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHByZXZpb3VzU3ltYm9sIFRoZSBlcXVpdmFsZW50IHN5bWJvbCBmcm9tIGEgcHJpb3IgY29tcGlsYXRpb24uIE5vdGUgdGhhdCBpdCBtYXkgYmUgYVxuICAgKiBkaWZmZXJlbnQgdHlwZSBvZiBzeW1ib2wsIGlmIGUuZy4gYSBDb21wb25lbnQgd2FzIGNoYW5nZWQgaW50byBhIERpcmVjdGl2ZSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB0eXBlQ2hlY2tBcGlBZmZlY3RlZCBUaGUgc2V0IG9mIHN5bWJvbHMgb2Ygd2hpY2ggdGhlIHR5cGUtY2hlY2sgQVBJIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgaXNUeXBlQ2hlY2tCbG9ja0FmZmVjdGVkP1xuICAgICAgKHByZXZpb3VzU3ltYm9sOiBTZW1hbnRpY1N5bWJvbCwgdHlwZUNoZWNrQXBpQWZmZWN0ZWQ6IFNldDxTZW1hbnRpY1N5bWJvbD4pOiBib29sZWFuO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWZlcmVuY2UgdG8gYSBzZW1hbnRpYyBzeW1ib2wgdGhhdCBoYXMgYmVlbiBlbWl0dGVkIGludG8gYSBzb3VyY2UgZmlsZS4gVGhlXG4gKiByZWZlcmVuY2UgbWF5IHJlZmVyIHRvIHRoZSBzeW1ib2wgdXNpbmcgYSBkaWZmZXJlbnQgbmFtZSB0aGFuIHRoZSBzZW1hbnRpYyBzeW1ib2wncyBkZWNsYXJlZFxuICogbmFtZSwgZS5nLiBpbiBjYXNlIGEgcmUtZXhwb3J0IHVuZGVyIGEgZGlmZmVyZW50IG5hbWUgd2FzIGNob3NlbiBieSBhIHJlZmVyZW5jZSBlbWl0dGVyLlxuICogQ29uc2VxdWVudGx5LCB0byBrbm93IHRoYXQgYW4gZW1pdHRlZCByZWZlcmVuY2UgaXMgc3RpbGwgdmFsaWQgbm90IG9ubHkgcmVxdWlyZXMgdGhhdCB0aGVcbiAqIHNlbWFudGljIHN5bWJvbCBpcyBzdGlsbCB2YWxpZCwgYnV0IGFsc28gdGhhdCB0aGUgcGF0aCBieSB3aGljaCB0aGUgc3ltYm9sIGlzIGltcG9ydGVkIGhhcyBub3RcbiAqIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VtYW50aWNSZWZlcmVuY2Uge1xuICBzeW1ib2w6IFNlbWFudGljU3ltYm9sO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF0aCBieSB3aGljaCB0aGUgc3ltYm9sIGhhcyBiZWVuIHJlZmVyZW5jZWQuXG4gICAqL1xuICBpbXBvcnRQYXRoOiBzdHJpbmd8bnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0U3ltYm9sSWRlbnRpZmllcihkZWNsOiBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nfG51bGwge1xuICBpZiAoIXRzLmlzU291cmNlRmlsZShkZWNsLnBhcmVudCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgYSB0b3AtbGV2ZWwgY2xhc3MgZGVjbGFyYXRpb24sIHRoZSBjbGFzcyBuYW1lIGlzIHVzZWQgYXMgdW5pcXVlIGlkZW50aWZpZXIuXG4gIC8vIE90aGVyIHNjZW5hcmlvcyBhcmUgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYW5kIGNhdXNlcyB0aGUgc3ltYm9sIG5vdCB0byBiZSBpZGVudGlmaWVkXG4gIC8vIGFjcm9zcyByZWJ1aWxkcywgdW5sZXNzIHRoZSBkZWNsYXJhdGlvbiBub2RlIGhhcyBub3QgY2hhbmdlZC5cbiAgcmV0dXJuIGRlY2wubmFtZS50ZXh0O1xufVxuIl19