tui.util.defineNamespace("fedoc.content", {});
fedoc.content["theme_preset_striped.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n* @fileoverview default theme preset\n* @author NHN Ent. FE Development Team\n*/\n'use strict';\n\nvar presetDefault = require('./default');\n\nmodule.exports = $.extend(true, {}, presetDefault, {\n    cell: {\n        normal: {\n            background: '#fff',\n            border: '#e8e8e8',\n            showVerticalBorder: false,\n            showHorizontalBorder: false\n        },\n        evenRow: {\n            background: '#f3f3f3'\n        },\n        head: {\n            showVerticalBorder: true,\n            showHorizontalBorder: true\n        }\n    }\n});\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"