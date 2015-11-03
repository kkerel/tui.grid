ne.util.defineNamespace("fedoc.content", {});
fedoc.content["model_focus.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Focus 관련 데이터 처리름 담당한다.\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar Model = require('../base/model');\nvar util = require('../util');\n\n/**\n * Focus model\n * RowList collection 이 focus class 를 listen 한다.\n * @module model/focus\n */\nvar Focus = Model.extend(/**@lends module:model/focus.prototype */{\n    /**\n     * @extends module:base/model\n     * @constructs\n     */\n    initialize: function() {\n        Model.prototype.initialize.apply(this, arguments);\n    },\n\n    defaults: {\n        rowKey: null,\n        columnName: '',\n        prevRowKey: null,\n        prevColumnName: '',\n        scrollX: true,\n        scrollY: true,\n        scrollBarSize: 17\n    },\n\n    /**\n     * 이전 focus 정보를 저장한다.\n     * @private\n     */\n    _savePrevious: function() {\n        if (this.get('rowKey') !== null) {\n            this.set('prevRowKey', this.get('rowKey'));\n        }\n        if (this.get('columnName')) {\n            this.set('prevColumnName', this.get('columnName'));\n        }\n    },\n\n    /**\n     * 이전 focus 정보를 제거한다.\n     * @private\n     */\n    _clearPrevious: function() {\n        this.set({\n            prevRowKey: null,\n            prevColumnName: ''\n        });\n    },\n\n    /**\n     * 행을 select 한다.\n     * @param {Number|String} rowKey - select 할 행의 키값\n     * @returns {Model.Focus} This object\n     */\n    select: function(rowKey) {\n        this.unselect().set('rowKey', rowKey);\n        this.trigger('select', rowKey);\n        return this;\n    },\n\n    /**\n     * 행을 unselect 한다.\n     * @param {boolean} blur - The boolean value whether to invoke blur\n     * @return {Model.Focus} This object\n     */\n    unselect: function(blur) {\n        if (blur) {\n            this.blur();\n        }\n        this.trigger('unselect', this.get('rowKey'));\n        this.set({\n            'rowKey': null\n        });\n        return this;\n    },\n\n    /**\n     * focus 처리한다.\n     * @param {Number|String} rowKey focus 처리할 셀의 rowKey 값\n     * @param {String} columnName focus 처리할 셀의 컬럼명\n     * @param {Boolean} isScrollable focus 처리한 영역으로 scroll 위치를 이동할지 여부\n     * @return {Model.Focus} This object\n     */\n    focus: function(rowKey, columnName, isScrollable) {\n        var scrollPosition,\n            curRowKey = this.get('rowKey');\n\n        if (util.isBlank(rowKey) || util.isBlank(columnName) || this.grid.columnModel.isMetaColumn(columnName)) {\n            return this;\n        }\n        this._savePrevious();\n        this.blur();\n\n        if (rowKey !== curRowKey) {\n            this.select(rowKey);\n        }\n        this.set('columnName', columnName);\n        this.trigger('focus', rowKey, columnName);\n\n        if (isScrollable) {\n            scrollPosition = this._getScrollPosition();\n            if (!tui.util.isEmpty(scrollPosition)) {\n                this.grid.renderModel.set(scrollPosition);\n            }\n        }\n        return this;\n    },\n\n    /**\n     * focus 이동에 맞추어 scroll 위치를 조정한 값을 반환한다.\n     * @return {{scrollTop: number, scrollLeft: number}} 위치 조정한 값\n     * @private\n     */\n    _getScrollPosition: function() {\n        var focused = this.which(),\n            dimensionModel = this.grid.dimensionModel,\n            renderModel = this.grid.renderModel,\n            scrollTop = renderModel.get('scrollTop'),\n            scrollLeft = renderModel.get('scrollLeft'),\n            bodyHeight = dimensionModel.get('bodyHeight'),\n            rsideWidth = dimensionModel.get('rsideWidth'),\n            position = dimensionModel.getCellPosition(focused.rowKey, focused.columnName),\n            currentLeft = scrollLeft,\n            currentRight = scrollLeft + rsideWidth,\n            scrollXSize = +this.get('scrollX') * this.get('scrollBarSize'),\n            scrollYSize = +this.get('scrollY') * this.get('scrollBarSize'),\n            scrollPosition = {};\n\n        //수직 스크롤 조정\n        if (position.top &lt; scrollTop) {\n            scrollPosition.scrollTop = position.top;\n        } else if (position.bottom > bodyHeight + scrollTop - scrollXSize) {\n            scrollPosition.scrollTop = position.bottom - bodyHeight + scrollXSize;\n        }\n\n        //수평 스크롤 조정\n        if (!this.grid.columnModel.isLside(focused.columnName)) {\n            if (position.left &lt; currentLeft) {\n                scrollPosition.scrollLeft = position.left;\n            } else if (position.right > currentRight) {\n                scrollPosition.scrollLeft = position.right - rsideWidth + scrollYSize + 1;\n            }\n        }\n        return scrollPosition;\n    },\n\n    /**\n     * 디자인 blur 처리한다.\n     * @return {Model.Focus} This object\n     */\n    blur: function() {\n        if (this.has()) {\n            this.trigger('blur', this.get('rowKey'), this.get('columnName'));\n            if (this.get('rowKey') !== null) {\n                this.set('columnName', '');\n            }\n        }\n        return this;\n    },\n\n    /**\n     * 현재 focus 정보를 반환한다.\n     * @return {{rowKey: (number|string), columnName: string}} 현재 focus 정보에 해당하는 rowKey, columnName\n     */\n    which: function() {\n        return {\n            rowKey: this.get('rowKey'),\n            columnName: this.get('columnName')\n        };\n    },\n\n    /**\n     * 현재 focus 정보를 index 기준으로 반환한다.\n     * @param {boolean} isPrevious 이전 focus 정보를 반환할지 여부\n     * @return {{rowIdx: number, columnIdx: number}} The object that contains index info\n     */\n    indexOf: function(isPrevious) {\n        var rowKey = isPrevious ? this.get('prevRowKey') : this.get('rowKey'),\n            columnName = isPrevious ? this.get('prevColumnName') : this.get('columnName');\n\n        return {\n            rowIdx: this.grid.dataModel.indexOfRowKey(rowKey),\n            columnIdx: this.grid.columnModel.indexOfColumnName(columnName, true)\n        };\n    },\n\n    /**\n     * 현재 focus를 가지고 있는지 여부를 리턴한다.\n     * @return {boolean} 현재 focus 가 설정되어 있는지 여부\n     */\n    has: function() {\n        var has = !util.isBlank(this.get('rowKey')) &amp;&amp; !util.isBlank(this.get('columnName'));\n        return has;\n    },\n\n    /**\n     * 현재 focus 된 row 기준으로 offset 만큼 이동한 rowKey 를 반환한다.\n     * @param {Number} offset   이동할 offset\n     * @return {Number|String} rowKey   offset 만큼 이동한 위치의 rowKey\n     * @private\n     */\n    _findRowKey: function(offset) {\n        var index, row,\n            dataModel = this.grid.dataModel;\n        if (this.has()) {\n            index = Math.max(Math.min(dataModel.indexOfRowKey(this.get('rowKey')) + offset, this.grid.dataModel.length - 1), 0);\n            row = dataModel.at(index);\n            return row &amp;&amp; row.get('rowKey');\n        }\n    },\n\n    /**\n     * 현재 focus 된 column 기준으로 offset 만큼 이동한 columnName 을 반환한다.\n     * @param {Number} offset   이동할 offset\n     * @return {String} columnName  offset 만큼 이동한 위치의 columnName\n     * @private\n     */\n    _findColumnName: function(offset) {\n        var index,\n            columnModel = this.grid.columnModel,\n            columnModelList = columnModel.getVisibleColumnModelList(),\n            columnIndex = columnModel.indexOfColumnName(this.get('columnName'), true);\n        if (this.has()) {\n            index = Math.max(Math.min(columnIndex + offset, columnModelList.length - 1), 0);\n            return columnModelList[index] &amp;&amp; columnModelList[index]['columnName'];\n        }\n    },\n\n    /**\n     * rowSpanData 를 반환한다.\n     * @param {Number|String} rowKey    조회할 데이터의 키값\n     * @param {String} columnName   컬럼명\n     * @return {*|{count: number, isMainRow: boolean, mainRowKey: *}|*} rowSpanData 정보\n     * @private\n     */\n    _getRowSpanData: function(rowKey, columnName) {\n        return this.grid.dataModel.get(rowKey).getRowSpanData(columnName);\n    },\n\n    /**\n     * offset 만큼 뒤로 이동한 row 의 index 를 반환한다.\n     * @param {number} offset   이동할 offset\n     * @return {Number} 이동한 위치의 row index\n     */\n    nextRowIndex: function(offset) {\n        var rowKey = this.nextRowKey(offset);\n        return this.grid.dataModel.indexOfRowKey(rowKey);\n    },\n\n    /**\n     * offset 만큼 앞으로 이동한 row의 index를 반환한다.\n     * @param {number} offset 이동할 offset\n     * @return {Number} 이동한 위치의 row index\n     */\n    prevRowIndex: function(offset) {\n        var rowKey = this.prevRowKey(offset);\n        return this.grid.dataModel.indexOfRowKey(rowKey);\n    },\n\n    /**\n     * 다음 컬럼의 인덱스를 반환한다.\n     * @return {Number} 다음 컬럼의 index\n     */\n    nextColumnIndex: function() {\n        var columnName = this.nextColumnName();\n        return this.grid.columnModel.indexOfColumnName(columnName, true);\n    },\n\n    /**\n     * 이전 컬럼의 인덱스를 반환한다.\n     * @return {Number} 이전 컬럼의 인덱스\n     */\n    prevColumnIndex: function() {\n        var columnName = this.prevColumnName();\n        return this.grid.columnModel.indexOfColumnName(columnName, true);\n    },\n\n    /**\n     * keyEvent 발생 시 호출될 메서드로,\n     * rowSpan 정보 까지 계산된 다음 rowKey 를 반환한다.\n     * @param {number}  offset 이동할 offset\n     * @return {Number|String} offset 만큼 이동한 위치의 rowKey\n     */\n    nextRowKey: function(offset) {\n        var focused = this.which(),\n            rowKey = focused.rowKey,\n            count, rowSpanData;\n\n        offset = (typeof offset === 'number') ? offset : 1;\n        if (offset > 1) {\n            rowKey = this._findRowKey(offset);\n            rowSpanData = this._getRowSpanData(rowKey, focused.columnName);\n            if (!rowSpanData.isMainRow) {\n                rowKey = this._findRowKey(rowSpanData.count + offset);\n            }\n        } else {\n            rowSpanData = this._getRowSpanData(rowKey, focused.columnName);\n            if (rowSpanData.isMainRow &amp;&amp; rowSpanData.count > 0) {\n                rowKey = this._findRowKey(rowSpanData.count);\n            } else if (!rowSpanData.isMainRow) {\n                count = rowSpanData.count;\n                rowSpanData = this._getRowSpanData(rowSpanData.mainRowKey, focused.columnName);\n                rowKey = this._findRowKey(rowSpanData.count + count);\n            } else {\n                rowKey = this._findRowKey(1);\n            }\n        }\n        return rowKey;\n    },\n\n    /**\n     * keyEvent 발생 시 호출될 메서드로,\n     * rowSpan 정보 까지 계산된 이전 rowKey 를 반환한다.\n     * @param {number}  offset 이동할 offset\n     * @return {Number|String} offset 만큼 이동한 위치의 rowKey\n     */\n    prevRowKey: function(offset) {\n        var focused = this.which(),\n            rowKey = focused.rowKey,\n            rowSpanData;\n        offset = typeof offset === 'number' ? offset : 1;\n        offset *= -1;\n\n        if (offset &lt; -1) {\n            rowKey = this._findRowKey(offset);\n            rowSpanData = this._getRowSpanData(rowKey, focused.columnName);\n            if (!rowSpanData.isMainRow) {\n                rowKey = this._findRowKey(rowSpanData.count + offset);\n            }\n        } else {\n            rowSpanData = this._getRowSpanData(rowKey, focused.columnName);\n            if (!rowSpanData.isMainRow) {\n                rowKey = this._findRowKey(rowSpanData.count - 1);\n            } else {\n                rowKey = this._findRowKey(-1);\n            }\n        }\n        return rowKey;\n    },\n\n    /**\n     * keyEvent 발생 시 호출될 메서드로, 다음 columnName 을 반환한다.\n     * @return {String} 다음 컬럼명\n     */\n    nextColumnName: function() {\n        return this._findColumnName(1);\n    },\n\n    /**\n     * keyEvent 발생 시 호출될 메서드로, 이전 columnName 을 반환한다.\n     * @return {String} 이전 컬럼명\n     */\n    prevColumnName: function() {\n        return this._findColumnName(-1);\n    },\n\n    /**\n     * 첫번째 row 의 key 를 반환한다.\n     * @return {(string|number)} 첫번째 row 의 키값\n     */\n    firstRowKey: function() {\n        return this.grid.dataModel.at(0).get('rowKey');\n    },\n\n    /**\n     * 마지막 row의 key 를 반환한다.\n     * @return {(string|number)} 마지막 row 의 키값\n     */\n    lastRowKey: function() {\n        return this.grid.dataModel.at(this.grid.dataModel.length - 1).get('rowKey');\n    },\n\n    /**\n     * 첫번째 columnName 을 반환한다.\n     * @return {string} 첫번째 컬럼명\n     */\n    firstColumnName: function() {\n        var columnModelList = this.grid.columnModel.getVisibleColumnModelList();\n        return columnModelList[0]['columnName'];\n    },\n\n    /**\n     * 마지막 columnName 을 반환한다.\n     * @return {string} 마지막 컬럼명\n     */\n    lastColumnName: function() {\n        var columnModelList = this.grid.columnModel.getVisibleColumnModelList(),\n            lastIndex = columnModelList.length - 1;\n        return columnModelList[lastIndex]['columnName'];\n    }\n});\n\nmodule.exports = Focus;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"