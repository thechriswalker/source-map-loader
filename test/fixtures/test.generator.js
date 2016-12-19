
function blockComment(sourceMap) {
    if(sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }
}

function lineComment(sourceMap) {
    if(sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n//# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    }
}
