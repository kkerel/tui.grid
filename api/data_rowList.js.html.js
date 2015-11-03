ne.util.defineNamespace("fedoc.content", {});
fedoc.content["data_rowList.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Grid 의 Data Source 에 해당하는 Collection 정의\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar Collection = require('../base/collection');\nvar Row = require('./row');\n\n/**\n * Raw 데이터 RowList 콜렉션. (DataSource)\n * Grid.setRowList 를 사용하여 콜렉션을 설정한다.\n * @module data/rowList\n */\nvar RowList = Collection.extend(/**@lends module:data/rowList.prototype */{\n    model: Row,\n    /**\n     * @param {Array} models    콜랙션에 추가할 model 리스트\n     * @param {Object} options   생성자의 option 객체\n     * @extends module:base/collection\n     * @constructs\n     */\n    initialize: function(models, options) {\n        Collection.prototype.initialize.apply(this, arguments);\n        this.setOwnProperties({\n            lastRowKey: -1,\n            originalRowList: [],\n            originalRowMap: {},\n            startIndex: options.startIndex || 1,\n            sortOptions: {\n                columnName: 'rowKey',\n                isAscending: true,\n                useClient: (tui.util.isBoolean(options.useClientSort) ? options.useClientSort : true)\n            }\n        });\n        if (!this.sortOptions.useClient) {\n            this.comparator = null;\n        }\n    },\n\n    /**\n     * Backbone 이 collection 생성 시 내부적으로 parse 를 호출하여 데이터를 포멧에 맞게 파싱한다.\n     * @param {Array} data  원본 데이터\n     * @return {Array}  파싱하여 가공된 데이터\n     */\n    parse: function(data) {\n        data = data &amp;&amp; data['contents'] || data;\n        return this._formatData(data);\n    },\n\n    /**\n     * 데이터의 _extraData 를 분석하여, Model 에서 사용할 수 있도록 가공한다.\n     * _extraData 필드에 rowSpanData 를 추가한다.\n     * @param {Array} data  가공할 데이터\n     * @return {Array} 가공된 데이터\n     * @private\n     */\n    _formatData: function(data) {\n        var rowList = data;\n\n        _.each(rowList, function(row, i) {\n            rowList[i] = this._baseFormat(rowList[i]);\n            if (this.isRowSpanEnable()) {\n                this._setExtraRowSpanData(rowList, i);\n            }\n        }, this);\n\n        return rowList;\n    },\n\n    /**\n     * row 를 기본 포멧으로 wrapping 한다.\n     * 추가적으로 rowKey 를 할당하고, rowState 에 따라 checkbox 의 값을 할당한다.\n     *\n     * @param {object} row  대상 row 데이터\n     * @param {number} index    해당 row 의 인덱스 정보. rowKey 를 자동 생성할 경우 사용된다.\n     * @return {object} 가공된 row 데이터\n     * @private\n     */\n    _baseFormat: function(row) {\n        var defaultExtraData = {\n                rowSpan: null,\n                rowSpanData: null,\n                rowState: null\n            },\n            keyColumnName = this.grid.columnModel.get('keyColumnName'),\n            rowKey = (keyColumnName === null) ? this._createRowKey() : row[keyColumnName];\n\n        row._extraData = $.extend(defaultExtraData, row._extraData);\n        row._button = row._extraData.rowState === 'CHECKED';\n        row.rowKey = rowKey;\n        return row;\n    },\n\n    /**\n     * 새로운 rowKey를 생성해서 반환한다.\n     * @return {number} 생성된 rowKey\n     */\n    _createRowKey: function() {\n        this.lastRowKey += 1;\n        return this.lastRowKey;\n    },\n\n    /**\n     * 랜더링시 사용될 extraData 필드에 rowSpanData 값을 세팅한다.\n     * @param {Array} rowList - 전체 rowList 배열. rowSpan 된 경우 자식 row 의 데이터도 가공해야 하기 때문에 전체 list 를 인자로 넘긴다.\n     * @param {number} index - 해당 배열에서 extraData 를 설정할 배열\n     * @return {Array} rowList - 가공된 rowList\n     * @private\n     */\n    _setExtraRowSpanData: function(rowList, index) {\n        var row = rowList[index],\n            rowSpan = row &amp;&amp; row['_extraData'] &amp;&amp; row['_extraData']['rowSpan'],\n            rowKey = row &amp;&amp; row['rowKey'],\n            subCount, childRow, i;\n\n        function hasRowSpanData(row, columnName) { // eslint-disable-line no-shadow\n            var extraData = row['_extraData'];\n            return !!(extraData['rowSpanData'] &amp;&amp; extraData['rowSpanData'][columnName]);\n        }\n        function setRowSpanData(row, columnName, rowSpanData) { // eslint-disable-line no-shadow\n            var extraData = row['_extraData'];\n            extraData['rowSpanData'] = extraData &amp;&amp; extraData['rowSpanData'] || {};\n            extraData['rowSpanData'][columnName] = rowSpanData;\n            return extraData;\n        }\n\n        if (rowSpan) {\n            _.each(rowSpan, function(count, columnName) {\n                if (!hasRowSpanData(row, columnName)) {\n                    setRowSpanData(row, columnName, {\n                        count: count,\n                        isMainRow: true,\n                        mainRowKey: rowKey\n                    });\n                    //rowSpan 된 row 의 자식 rowSpanData 를 가공한다.\n                    subCount = -1;\n                    for (i = index + 1; i &lt; index + count; i += 1) {\n                        childRow = rowList[i];\n                        childRow[columnName] = row[columnName];\n                        childRow['_extraData'] = childRow['_extraData'] || {};\n                        setRowSpanData(childRow, columnName, {\n                            count: subCount,\n                            isMainRow: false,\n                            mainRowKey: rowKey\n                        });\n                        subCount -= 1;\n                    }\n                }\n            });\n        }\n        return rowList;\n    },\n\n    /**\n     * originalRowList 와 originalRowMap 을 생성한다.\n     * @param {Array} [rowList] rowList 가 없을 시 현재 collection 데이터를 originalRowList 로 저장한다.\n     * @return {Array} format 을 거친 데이터 리스트.\n     */\n    setOriginalRowList: function(rowList) {\n        this.originalRowList = rowList ? this._formatData(rowList) : this.toJSON();\n        this.originalRowMap = _.indexBy(this.originalRowList, 'rowKey');\n        return this.originalRowList;\n    },\n\n    /**\n     * 원본 데이터 리스트를 반환한다.\n     * @param {boolean} [isClone=true]  데이터 복제 여부.\n     * @return {Array}  원본 데이터 리스트 배열.\n     */\n    getOriginalRowList: function(isClone) {\n        isClone = isClone === undefined ? true : isClone;\n        return isClone ? _.clone(this.originalRowList) : this.originalRowList;\n    },\n\n    /**\n     * 원본 row 데이터를 반환한다.\n     * @param {(Number|String)} rowKey  데이터의 키값\n     * @return {Object} 해당 행의 원본 데이터값\n     */\n    getOriginalRow: function(rowKey) {\n        return _.clone(this.originalRowMap[rowKey]);\n    },\n\n    /**\n     * rowKey 와 columnName 에 해당하는 원본 데이터를 반환한다.\n     * @param {(Number|String)} rowKey  데이터의 키값\n     * @param {String} columnName   컬럼명\n     * @return {(Number|String)}    rowKey 와 컬럼명에 해당하는 셀의 원본 데이터값\n     */\n    getOriginal: function(rowKey, columnName) {\n        return _.clone(this.originalRowMap[rowKey][columnName]);\n    },\n\n    /**\n     * mainRowKey 를 반환한다.\n     * @param {(Number|String)} rowKey  데이터의 키값\n     * @param {String} columnName   컬럼명\n     * @return {(Number|String)}    rowKey 와 컬럼명에 해당하는 셀의 main row 키값\n     */\n    getMainRowKey: function(rowKey, columnName) {\n        var row = this.get(rowKey),\n            rowSpanData;\n        if (this.isRowSpanEnable()) {\n            rowSpanData = row &amp;&amp; row.getRowSpanData(columnName);\n            rowKey = rowSpanData ? rowSpanData.mainRowKey : rowKey;\n        }\n        return rowKey;\n    },\n\n    /**\n     * rowKey 에 해당하는 index를 반환한다.\n     * @param {(Number|String)} rowKey 데이터의 키값\n     * @return {Number} 키값에 해당하는 row의 인덱스\n     */\n    indexOfRowKey: function(rowKey) {\n        return this.indexOf(this.get(rowKey));\n    },\n\n    /**\n     * rowSpan 이 적용되어야 하는지 여부를 반환한다.\n     * 랜더링시 사용된다.\n     * - sorted, 혹은 filterd 된 경우 false 를 리턴한다.\n     * @return {boolean}    랜더링 시 rowSpan 을 해야하는지 여부\n     */\n    isRowSpanEnable: function() {\n        return !this.isSortedByField();\n    },\n\n    /**\n     * 현재 RowKey가 아닌 다른 컬럼에 의해 정렬된 상태인지 여부를 반환한다.\n     * @return {Boolean}    정렬된 상태인지 여부\n     */\n    isSortedByField: function() {\n        return this.sortOptions.columnName !== 'rowKey';\n    },\n\n    /**\n     * 정렬옵션 객체의 값을 변경하고, 변경된 값이 있을 경우 sortChanged 이벤트를 발생시킨다.\n     * @param {string} columnName 정렬할 컬럼명\n     * @param {boolean} isAscending 오름차순 여부\n     * @param {boolean} isRequireFetch 서버 데이타의 갱신이 필요한지 여부\n     */\n    setSortOptionValues: function(columnName, isAscending, isRequireFetch) {\n        var options = this.sortOptions,\n            isChanged = false;\n\n        if (tui.util.isUndefined(columnName)) {\n            columnName = 'rowKey';\n        }\n        if (tui.util.isUndefined(isAscending)) {\n            isAscending = true;\n        }\n\n        if (options.columnName !== columnName || options.isAscending !== isAscending) {\n            isChanged = true;\n        }\n        options.columnName = columnName;\n        options.isAscending = isAscending;\n\n        if (isChanged) {\n            this.trigger('sortChanged', {\n                columnName: columnName,\n                isAscending: isAscending,\n                isRequireFetch: isRequireFetch\n            });\n        }\n    },\n\n    /**\n     * 주어진 컬럼명을 기준으로 오름/내림차순 정렬한다.\n     * @param {string} columnName 정렬할 컬럼명\n     * @param {boolean} isAscending 오름차순 여부\n     */\n    sortByField: function(columnName, isAscending) {\n        var options = this.sortOptions;\n\n        if (tui.util.isUndefined(isAscending)) {\n            isAscending = (options.columnName === columnName) ? !options.isAscending : true;\n        }\n        this.setSortOptionValues(columnName, isAscending, !options.useClient);\n\n        if (options.useClient) {\n            this.sort();\n        }\n    },\n\n    /**\n     * rowList 를 반환한다.\n     * @param {boolean} [isOnlyChecked=false] true 로 설정된 경우 checked 된 데이터 대상으로 비교 후 반환한다.\n     * @param {boolean} [isRaw=false] true 로 설정된 경우 내부 연산용 데이터 제거 필터링을 거치지 않는다.\n     * @returns {Array} Row List\n     */\n    getRowList: function(isOnlyChecked, isRaw) {\n        var rowList,\n            checkedRowList;\n        if (isOnlyChecked) {\n            checkedRowList = this.where({\n                '_button': true\n            });\n            rowList = [];\n            _.each(checkedRowList, function(checkedRow) {\n                rowList.push(checkedRow.attributes);\n            }, this);\n        } else {\n            rowList = this.toJSON();\n        }\n        return isRaw ? rowList : this._removePrivateProp(rowList);\n    },\n\n    /**\n     * row Data 값에 변경이 발생했을 경우, sorting 되지 않은 경우에만\n     * rowSpan 된 데이터들도 함께 update 한다.\n     *\n     * @param {object} row row 모델\n     * @param {String} columnName   변경이 발생한 컬럼명\n     * @param {(String|Number)} value 변경된 값\n     */\n    syncRowSpannedData: function(row, columnName, value) {\n        var index, rowSpanData, i;\n\n        //정렬 되지 않았을 때만 rowSpan 된 데이터들도 함께 update 한다.\n        if (this.isRowSpanEnable()) {\n            rowSpanData = row.getRowSpanData(columnName);\n            if (!rowSpanData['isMainRow']) {\n                this.get(rowSpanData['mainRowKey']).set(columnName, value);\n            } else {\n                index = this.indexOfRowKey(row.get('rowKey'));\n                for (i = 0; i &lt; rowSpanData['count'] - 1; i += 1) {\n                    this.at(i + 1 + index).set(columnName, value);\n                }\n            }\n        }\n    },\n\n    /**\n     * Backbone 에서 sort() 실행시 내부적으로 사용되는 메소드.\n     * @param {Row} a 비교할 앞의 모델\n     * @param {Row} b 비교할 뒤의 모델\n     * @return {number} a가 b보다 작으면 -1, 같으면 0, 크면 1. 내림차순이면 반대.\n     */\n    comparator: function(a, b) {\n        var columnName = this.sortOptions.columnName,\n            isAscending = this.sortOptions.isAscending,\n            valueA = a.get(columnName),\n            valueB = b.get(columnName),\n            result = 0;\n\n        if (valueA &lt; valueB) {\n            result = -1;\n        } else if (valueA > valueB) {\n            result = 1;\n        }\n\n        if (!isAscending) {\n            result = -result;\n        }\n        return result;\n    },\n\n    /**\n     * rowList 에서 내부에서만 사용하는 property 를 제거하고 반환한다.\n     * @param {Array} rowList   내부에 설정된 rowList 배열\n     * @return {Array}  private 프로퍼티를 제거한 결과값\n     * @private\n     */\n    _removePrivateProp: function(rowList) {\n        return _.map(rowList, function(row) {\n            return _.omit(row, Row.privateProperties);\n        });\n    },\n\n    /**\n     * rowKey 에 해당하는 그리드 데이터를 삭제한다.\n     * @param {(Number|String)} rowKey - 행 데이터의 고유 키\n     * @param {object} options - 삭제 옵션\n     * @param {boolean} options.removeOriginalData - 원본 데이터도 함께 삭제할 지 여부\n     * @param {boolean} options.keepRowSpanData - rowSpan이 mainRow를 삭제하는 경우 데이터를 유지할지 여부\n     */\n    removeRow: function(rowKey, options) {\n        var row = this.get(rowKey),\n            rowSpanData, nextRow, removedData;\n\n        if (!row) {\n            return;\n        }\n\n        if (options &amp;&amp; options.keepRowSpanData) {\n            removedData = _.clone(row.attributes);\n        }\n        rowSpanData = _.clone(row.getRowSpanData());\n        nextRow = this.at(this.indexOf(row) + 1);\n\n        this.remove(row, {\n            silent: true\n        });\n        this._syncRowSpanDataForRemove(rowSpanData, nextRow, removedData);\n\n        if (options &amp;&amp; options.removeOriginalData) {\n            this.setOriginalRowList();\n        }\n        this.trigger('remove');\n    },\n\n    /**\n     * 삭제된 행에 rowSpan이 적용되어 있었을 때, 관련된 행들의 rowSpan데이터를 갱신한다.\n     * @param {object} rowSpanData - 삭제된 행의 rowSpanData\n     * @param {Row} nextRow - 삭제된 다음 행의 모델\n     * @param {object} [removedData] - 삭제된 행의 데이터 (삭제옵션의 keepRowSpanData가 true인 경우에만 넘겨짐)\n     * @private\n     */\n    _syncRowSpanDataForRemove: function(rowSpanData, nextRow, removedData) {\n        if (!rowSpanData) {\n            return;\n        }\n        _.each(rowSpanData, function(data, columnName) {\n            var mainRowSpanData = {},\n                mainRow, startOffset, spanCount;\n\n            if (data.isMainRow) {\n                if (data.count === 1) {\n                    // if isMainRow is true and count is 1, rowSpanData is meaningless\n                    return;\n                }\n                mainRow = nextRow;\n                spanCount = data.count - 1;\n                startOffset = 1;\n                if (spanCount > 1) {\n                    mainRowSpanData.mainRowKey = mainRow.get('rowKey');\n                    mainRowSpanData.isMainRow = true;\n                }\n                mainRow.set(columnName, (removedData ? removedData[columnName] : ''), {\n                    silent: true\n                });\n            } else {\n                mainRow = this.get(data.mainRowKey);\n                spanCount = mainRow.getRowSpanData(columnName).count - 1;\n                startOffset = -data.count;\n            }\n\n            if (spanCount > 1) {\n                mainRowSpanData.count = spanCount;\n                mainRow.setRowSpanData(columnName, mainRowSpanData);\n                this._updateSubRowSpanData(mainRow, columnName, startOffset, spanCount);\n            } else {\n                mainRow.setRowSpanData(columnName, null);\n            }\n        }, this);\n    },\n\n    /**\n     * append, prepend 시 사용할 dummy row를 생성한다.\n     * @return {Object} 값이 비어있는 더미 row 데이터\n     * @private\n     */\n    _createDummyRow: function() {\n        var columnModelList = this.grid.columnModel.get('dataColumnModelList'),\n            data = {};\n\n        _.each(columnModelList, function(columnModel) {\n            data[columnModel['columnName']] = '';\n        }, this);\n\n        return data;\n    },\n\n    /**\n     * 현재 rowList 중 at 에 해당하는 인덱스에 데이터를 append 한다.\n     * @param {object|array} rowData - 행 추가할 데이터. Array일 경우 여러행를 동시에 추가한다.\n     * @param {object} [options] - 옵션 객체\n     * @param {number} [options.at] - 데이터를 append 할 index\n     * @param {boolean} [options.extendPrevRowSpan] - 이전 행의 rowSpan 데이터가 있는 경우 합칠지 여부\n     */\n    append: function(rowData, options) {\n        var modelList = this._createModelList(rowData),\n            addOptions;\n\n        options = _.extend({at: this.length}, options);\n        addOptions = {\n            at: options.at,\n            add: true,\n            silent: true\n        };\n\n        this.add(modelList, addOptions);\n        this._syncRowSpanDataForAppend(options.at, modelList.length, options.extendPrevRowSpan);\n        this.trigger('add', modelList, addOptions);\n        return modelList;\n    },\n\n    /**\n     * 현재 rowList 에 최상단에 데이터를 append 한다.\n     * @param {Object} rowData  prepend 할 행 데이터\n     */\n    prepend: function(rowData) {\n        return this.append(rowData, {\n            at: 0\n        });\n    },\n\n    /**\n     * 주어진 데이터로 모델 목록을 생성하여 반환한다.\n     * @param {object|array} rowData - 모델을 생성할 데이터. Array일 경우 여러개를 동시에 생성한다.\n     * @return {Row[]} 생성된 모델 목록\n     */\n    _createModelList: function(rowData) {\n        var modelList = [],\n            rowList;\n\n        rowData = rowData || this._createDummyRow();\n        if (!tui.util.isArray(rowData)) {\n            rowData = [rowData];\n        }\n        rowList = this._formatData(rowData);\n\n        _.each(rowList, function(row) {\n            var rowData;\n\n            row._button = true;\n            rowData = new Row(row, {\n                collection: this,\n                parse: true\n            });\n            modelList.push(rowData);\n        }, this);\n\n        return modelList;\n    },\n\n    /**\n     * 새로운 행이 추가되었을 때, 관련된 주변 행들의 rowSpan 데이터를 갱신한다.\n     * @param {number} index - 추가된 행의 인덱스\n     * @param {number} length - 추가된 행의 개수\n     * @param {boolean} extendPrevRowSpan - 이전 행의 rowSpan 데이터가 있는 경우 합칠지 여부\n     */\n    _syncRowSpanDataForAppend: function(index, length, extendPrevRowSpan) {\n        var prevRow = this.at(index - 1);\n\n        if (!prevRow) {\n            return;\n        }\n        _.each(prevRow.getRowSpanData(), function(data, columnName) {\n            var mainRow, mainRowData, startOffset, spanCount;\n\n            // count 값은 mainRow인 경우 '전체 rowSpan 개수', 아닌 경우는 'mainRow까지의 거리 (음수)'를 의미한다.\n            // 0이면 rowSpan 되어 있지 않다는 의미이다.\n            if (data.count === 0) {\n                return;\n            }\n            if (data.isMainRow) {\n                mainRow = prevRow;\n                mainRowData = data;\n                startOffset = 1;\n            } else {\n                mainRow = this.get(data.mainRowKey);\n                mainRowData = mainRow.getRowSpanData()[columnName];\n                // 루프를 순회할 때 의미를 좀더 명확하게 하기 위해 양수값으로 변경해서 offset 처럼 사용한다.\n                startOffset = -data.count + 1;\n            }\n\n            if (mainRowData.count > startOffset || extendPrevRowSpan) {\n                mainRowData.count += length;\n                spanCount = mainRowData.count;\n\n                this._updateSubRowSpanData(mainRow, columnName, startOffset, spanCount);\n            }\n        }, this);\n    },\n\n    /**\n     * 특정 컬럼의 rowSpan 데이터를 주어진 범위만큼 갱신한다.\n     * @param {Row} mainRow - rowSpan의 첫번째 행\n     * @param {string} columnName - 컬럼명\n     * @param {number} startOffset - mainRow로부터 몇번째 떨어진 행부터 갱신할지를 지정하는 값\n     * @param {number} spanCount - span이 적용될 행의 개수\n     */\n    _updateSubRowSpanData: function(mainRow, columnName, startOffset, spanCount) {\n        var mainRowIdx = this.indexOf(mainRow),\n            mainRowKey = mainRow.get('rowKey'),\n            row, offset;\n\n        for (offset = startOffset; offset &lt; spanCount; offset += 1) {\n            row = this.at(mainRowIdx + offset);\n            row.set(columnName, '', {\n                silent: true\n            });\n            row.setRowSpanData(columnName, {\n                count: -offset,\n                mainRowKey: mainRowKey,\n                isMainRow: false\n            });\n        }\n    },\n\n    /**\n     * 해당 row가 수정된 Row인지 여부를 반환한다.\n     * @param {Object} row - row 데이터\n     * @param {Object} originalRow - 원본 row 데이터\n     * @param {Array} filteringColumnList - 비교에서 제외할 컬럼명\n     * @return {boolean} - 수정여부\n     */\n    _isModifiedRow: function(row, originalRow, filteringColumnList) {\n        var filtered = _.omit(row, filteringColumnList);\n        var result = _.some(filtered, function(value, columnName) {\n            if (typeof value === 'object') {\n                return ($.toJSON(value) !== $.toJSON(originalRow[columnName]));\n            }\n            return value !== originalRow[columnName];\n        }, this);\n\n        return result;\n    },\n\n    /**\n     * 수정된 rowList 를 반환한다.\n     * @param {Object} options 옵션 객체\n     *      @param {boolean} [options.isOnlyChecked=false] true 로 설정된 경우 checked 된 데이터 대상으로 비교 후 반환한다.\n     *      @param {boolean} [options.isRaw=false] true 로 설정된 경우 내부 연산용 데이터 제거 필터링을 거치지 않는다.\n     *      @param {boolean} [options.isOnlyRowKeyList=false] true 로 설정된 경우 키값만 저장하여 리턴한다.\n     *      @param {Array} [options.filteringColumnList]   행 데이터 중에서 데이터 변경으로 간주하지 않을 컬럼 이름을 배열로 설정한다.\n     * @return {{createList: Array, updateList: Array, deleteList: Array}} options 조건에 해당하는 수정된 rowList 정보\n     */\n    getModifiedRowList: function(options) {\n        var isRaw = options &amp;&amp; options.isRaw,\n            isOnlyChecked = options &amp;&amp; options.isOnlyChecked,\n            isOnlyRowKeyList = options &amp;&amp; options.isOnlyRowKeyList,\n            original = isRaw ? this.originalRowList : this._removePrivateProp(this.originalRowList),\n            current = isRaw ? this.toJSON() : this._removePrivateProp(this.toJSON()),\n            filteringColumnList = options &amp;&amp; options.filteringColumnList,\n            result = {\n                createList: [],\n                updateList: [],\n                deleteList: []\n            };\n\n        original = _.indexBy(original, 'rowKey');\n        current = _.indexBy(current, 'rowKey');\n        filteringColumnList = _.union(filteringColumnList, this.grid.columnModel.getIgnoredColumnNameList());\n\n        // 추가/ 수정된 행 추출\n        _.each(current, function(row, rowKey) {\n            var originalRow = original[rowKey],\n                item = isOnlyRowKeyList ? row['rowKey'] : row;\n\n            if (!isOnlyChecked || (isOnlyChecked &amp;&amp; this.get(rowKey).get('_button'))) {\n                if (!originalRow) {\n                    result.createList.push(item);\n                } else if (this._isModifiedRow(row, originalRow, filteringColumnList)) {\n                    result.updateList.push(item);\n                }\n            }\n        }, this);\n\n        //삭제된 행 추출\n        _.each(original, function(obj, rowKey) {\n            var item = isOnlyRowKeyList ? obj['rowKey'] : obj;\n            if (!current[rowKey]) {\n                result.deleteList.push(item);\n            }\n        }, this);\n        return result;\n    }\n});\n\nmodule.exports = RowList;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"