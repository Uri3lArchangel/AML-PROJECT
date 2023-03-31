self.__BUILD_MANIFEST = function(s, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": ["static/chunks/502-bc91900b2aa1abee.js", s, "static/chunks/516-cb9e7a1f257dd14d.js", e, "static/chunks/pages/index-f6b37d0c46ce846c.js"],
        "/_error": ["static/chunks/pages/_error-0a2eac4a3f4e05e1.js"],
        "/check/[baddress]": [s, "static/chunks/209-236c99630dec222f.js", e, "static/chunks/pages/check/[baddress]-eaf5d14b9e8725fe.js"],
        sortedPages: ["/", "/_app", "/_error", "/check/[baddress]"]
    }
}("static/chunks/353-ff9c810c21f91090.js", "static/css/15bc71cda11f9e8d.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();