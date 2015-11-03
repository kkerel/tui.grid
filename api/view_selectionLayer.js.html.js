ne.util.defineNamespace("fedoc.content", {});
fedoc.content["view_selectionLayer.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Class for the selection layer\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar View = require('../base/view');\nvar util = require('../util');\n\nvar CELL_BORDER_WIDTH = 1;\n\n/**\n * Class for the selection layer\n * @module view/selectionLayer\n */\nvar SelectionLayer = View.extend(/**@lends module:view/selectionLayer.prototype */{\n    /**\n     * @constructs\n     * @extends module:base/view\n     * @param {object} options Options\n     *      @param {array} options.columnWidthList  selection 레이어에 해당하는 영역의 컬럼 너비 리스트 정보\n     */\n    initialize: function(options) {\n        View.prototype.initialize.apply(this, arguments);\n\n        this.setOwnProperties({\n            whichSide: options.whichSide || 'R'\n        });\n        this._updateColumnWidthList();\n\n        this.listenTo(this.grid.dimensionModel, 'columnWidthChanged', this._onChangeColumnWidth);\n        this.listenTo(this.grid.selectionModel, 'change:range', this.render);\n    },\n\n    tagName: 'div',\n\n    className: 'selection_layer',\n\n    /**\n     * Updates this.columnWidthList\n     * @private\n     */\n    _updateColumnWidthList: function() {\n        this.columnWidthList = this.grid.dimensionModel.getColumnWidthList(this.whichSide);\n    },\n\n    /**\n     * Event handler for 'columnWidthChanged' evnet on Dimension model.\n     * @private\n     */\n    _onChangeColumnWidth: function() {\n        this._updateColumnWidthList();\n        this.render();\n    },\n\n    /**\n     * Returns relative column range based on 'this.whichSide'\n     * @private\n     * @param {array} columnRange - Column range indexes. [start, end]\n     * @return {array} - Relative column range indexes. [start, end]\n     */\n    _getOwnSideColumnRange: function(columnRange) {\n        var columnFixCount = this.grid.columnModel.getVisibleColumnFixCount(),\n            ownColumnRange = null;\n\n        if (this.whichSide === 'L') {\n            if (columnRange[0] &lt; columnFixCount) {\n                ownColumnRange = [\n                    columnRange[0],\n                    Math.min(columnRange[1], columnFixCount - 1)\n                ];\n            }\n        } else if (columnRange[1] >= columnFixCount) {\n            ownColumnRange = [\n                Math.max(columnRange[0], columnFixCount) - columnFixCount,\n                columnRange[1] - columnFixCount\n            ];\n        }\n\n        return ownColumnRange;\n    },\n\n    /**\n     * Returns the object containing 'top' and 'height' css value.\n     * @private\n     * @param  {array} rowRange - Row range indexes. [start, end]\n     * @return {{top: string, height: string}} - css values\n     */\n    _getVerticalStyles: function(rowRange) {\n        var rowHeight = this.grid.dimensionModel.get('rowHeight'),\n            top = util.getHeight(rowRange[0], rowHeight) - CELL_BORDER_WIDTH,\n            height = util.getHeight(rowRange[1] - rowRange[0] + 1, rowHeight) - (CELL_BORDER_WIDTH * 2);\n\n        return {\n            top : top + 'px',\n            height: height + 'px'\n        }\n    },\n\n    /**\n     * Returns the object containing 'left' and 'width' css value.\n     * @private\n     * @param  {array} columnRange - Column range indexes. [start, end]\n     * @return {{left: string, width: string}} - css values\n     */\n    _getHorizontalStyles: function(columnRange) {\n        var columnWidthList = this.columnWidthList,\n            metaColumnCount = this.grid.columnModel.getVisibleMetaColumnCount(),\n            startIndex = columnRange[0],\n            endIndex = columnRange[1],\n            left = 0,\n            width = 0,\n            i = 0;\n\n        if (this.whichSide === 'L') {\n            startIndex += metaColumnCount;\n            endIndex += metaColumnCount;\n        }\n        endIndex = Math.min(endIndex, columnWidthList.length - 1);\n\n        for (; i &lt;= endIndex; i += 1) {\n            if (i &lt; startIndex) {\n                left += columnWidthList[i] + CELL_BORDER_WIDTH;\n            } else {\n                width += columnWidthList[i] + CELL_BORDER_WIDTH;\n            }\n        }\n        width -= CELL_BORDER_WIDTH; // subtract last border width\n\n        return {\n            left: left + 'px',\n            width: width + 'px'\n        }\n    },\n\n    /**\n     * Render.\n     * @return {SelectionLayer} this object\n     */\n    render: function() {\n        var range = this.grid.selectionModel.get('range'),\n            styles, columnRange;\n\n        if (range) {\n            columnRange = this._getOwnSideColumnRange(range.column);\n        }\n        if (columnRange) {\n            styles = _.assign({},\n                this._getVerticalStyles(range.row),\n                this._getHorizontalStyles(columnRange)\n            );\n            this.$el.show().css(styles);\n        } else {\n            this.$el.hide();\n        }\n\n        return this;\n    }\n});\n\nmodule.exports = SelectionLayer;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"