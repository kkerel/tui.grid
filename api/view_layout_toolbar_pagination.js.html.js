ne.util.defineNamespace("fedoc.content", {});
fedoc.content["view_layout_toolbar_pagination.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Class for the pagination in the toolbar\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar View = require('../../../base/view');\n\n/**\n * Class for the pagination in the toolbar\n * @module view/layout/toolbar/pagination\n */\nvar Pagination = View.extend(/**@lends module:view/layout/toolbar/pagination.prototype */{\n    /**\n     * @constructs\n     * @extends module:base/view\n     */\n    initialize: function() {\n        View.prototype.initialize.apply(this, arguments);\n        this.setOwnProperties({\n            instance: null\n        });\n    },\n\n    tagName: 'div',\n\n    className: 'grid_pagination',\n\n    template: _.template('' +\n        '&lt;a href=\"#\" class=\"pre_end\">맨앞&lt;/a>' +\n        '&lt;a href=\"#\" class=\"pre\">이전&lt;/a> ' +\n        '&lt;a href=\"#\" class=\"next\">다음&lt;/a>' +\n        '&lt;a href=\"#\" class=\"next_end\">맨뒤&lt;/a>'\n    ),\n\n    /**\n     * pagination 을 rendering 한다.\n     * @return {View.Layout.Toolbar.Pagination} This object\n     */\n    render: function() {\n        this.destroyChildren();\n        this.$el.empty().html(this.template());\n        this._setPaginationInstance();\n        return this;\n    },\n\n    /**\n     * pagination instance 를 설정한다.\n     * @private\n     */\n    _setPaginationInstance: function() {\n        var PaginationClass = tui &amp;&amp; tui.component &amp;&amp; tui.component.Pagination,\n            pagination = this.instance;\n        if (!pagination &amp;&amp; PaginationClass) {\n            pagination = new PaginationClass({\n                itemCount: 1,\n                itemPerPage: 1\n            }, this.$el);\n        }\n        this.setOwnProperties({\n            instance: pagination\n        });\n    }\n});\n\nmodule.exports = Pagination;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"