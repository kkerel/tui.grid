/**
 * @fileoverview Focus 관련 데이터 처리름 담당한다.
 * @author soonyoung.park@nhnent@nhnent.com (Soonyoung Park)
 */
    /**
     * Focus model
     * RowList collection 이 focus class 를 listen 한다.
     * @constructor Model.Focus
     */
    Model.Focus = Model.Base.extend(/**@lends Model.Focus.prototype */{
        defaults: {
            rowKey: null,
            columnName: '',
            prevRowKey: null,
            prevColumnName: '',
            scrollX: true,
            scrollY: true,
            scrollBarSize: 17
        },
        /**
         * 생성자 함수
         */
        initialize: function() {
            Model.Base.prototype.initialize.apply(this, arguments);
        },
        /**
         * 이전 focus 정보를 저장한다.
         * @private
         */
        _savePrevious: function() {
            if (this.get('rowKey') !== null) {
                this.set('prevRowKey', this.get('rowKey'));
            }
            if (this.get('columnName')) {
                this.set('prevColumnName', this.get('columnName'));
            }
        },
        /**
         * 이전 focus 정보를 제거한다.
         * @private
         */
        _clearPrevious: function() {
            this.set({
                prevRowKey: null,
                prevColumnName: ''
            });
        },
        /**
         * 행을 select 한다.
         * @param {Number|String} rowKey    select 할 행의 키값
         * @return {Model.Focus}
         */
        select: function(rowKey) {
            this.unselect().set('rowKey', rowKey);
            this.trigger('select', rowKey);
            return this;
        },
        /**
         * 행을 unselect 한다.
         * @return {Model.Focus}
         */
        unselect: function() {
            this.blur();
            this.trigger('unselect', this.get('rowKey'));
            this.set({
                'rowKey': null
            });
            return this;
        },
        /**
         * focus 처리한다.
         * @param {Number|String} rowKey focus 처리할 셀의 rowKey 값
         * @param {String} columnName focus 처리할 셀의 컬럼명
         * @param {Boolean} isScrollable focus 처리한 영역으로 scroll 위치를 이동할지 여부
         * @return {Model.Focus}
         */
        focus: function(rowKey, columnName, isScrollable) {
            var scrollPosition;
            rowKey = ne.util.isUndefined(rowKey) ? this.get('rowKey') : rowKey;
            columnName = ne.util.isUndefined(columnName) ? this.get('columnName') : columnName;
            this._savePrevious();
            this.blur();
            if (rowKey !== this.get('rowKey')) {
                this.select(rowKey);
            }
            if (columnName && columnName !== this.get('columnName')) {
                this.set('columnName', columnName);
            }
            this.trigger('focus', rowKey, columnName);
            if (isScrollable) {
                //todo scrolltop 및 left 값 조정하는 로직 필요.
                scrollPosition = this._getScrollPosition();
                !ne.util.isEmpty(scrollPosition) && this.grid.renderModel.set(scrollPosition);
            }
            return this;
        },
        /**
         * focus 이동에 맞추어 scroll 위치를 조정한 값을 반환한다.
         * @return {{scrollTop: number, scrollLeft: number}} 위치 조정한 값
         * @private
         */
        _getScrollPosition: function() {
            var focused = this.which(),
                dimensionModel = this.grid.dimensionModel,
                renderModel = this.grid.renderModel,
                scrollTop = renderModel.get('scrollTop'),
                scrollLeft = renderModel.get('scrollLeft'),
                bodyHeight = dimensionModel.get('bodyHeight'),
                lsideWidth = dimensionModel.get('lsideWidth'),
                rsideWidth = dimensionModel.get('rsideWidth'),
                position = dimensionModel.getCellPosition(focused.rowKey, focused.columnName),
                currentLeft = scrollLeft,
                currentRight = scrollLeft + rsideWidth,
                scrollXSize = +this.get('scrollX') * this.get('scrollBarSize'),
                scrollYSize = +this.get('scrollY') * this.get('scrollBarSize'),
                scrollPosition = {};


            //수직 스크롤 조정
            if (position.top < scrollTop) {
                scrollPosition.scrollTop = position.top;
            } else if (position.bottom > bodyHeight + scrollTop - scrollXSize) {
                scrollPosition.scrollTop = position.bottom - bodyHeight + scrollXSize;
            }

            //수평 스크롤 조정
            if (!this.grid.columnModel.isLside(focused.columnName)) {
                if (position.left < currentLeft) {
                    scrollPosition.scrollLeft = position.left;
                } else if (position.right > currentRight) {
                    scrollPosition.scrollLeft = position.right - rsideWidth + scrollYSize + 1;
                }
            }
            return scrollPosition;
        },
        /**
         * 디자인 blur 처리한다.
         * @return {Model.Focus}
         */
        blur: function() {
            this.trigger('blur', this.get('rowKey'), this.get('columnName'));
            if (this.get('rowKey') !== null) {
                this.set('columnName', '');
            }
            return this;
        },
        /**
         * 현재 focus 정보를 반환한다.
         * @return {{rowKey: (number|string), columnName: string}} 현재 focus 정보에 해당하는 rowKey, columnName
         */
        which: function() {
            return {
                rowKey: this.get('rowKey'),
                columnName: this.get('columnName')
            };
        },
        /**
         * 현재 focus 정보를 index 기준으로 반환한다.
         * @param {boolean} isPrevious 이전 focus 정보를 반환할지 여부
         */
        indexOf: function(isPrevious) {
            var rowKey = isPrevious ? this.get('prevRowKey') : this.get('rowKey'),
                columnName = isPrevious ? this.get('prevColumnName') : this.get('columnName');

            return {
                rowIdx: this.grid.dataModel.indexOfRowKey(rowKey),
                columnIdx: this.grid.columnModel.indexOfColumnName(columnName, true)
            };
        },
        /**
         * 현재 focus를 가지고 있는지 여부를 리턴한다.
         * @return {boolean} 현재 focus 가 설정되어 있는지 여부
         */
        has: function() {
            var has = !!((!ne.util.isUndefined(this.get('rowKey')) && this.get('rowKey') !== null) && this.get('columnName'));
            return has;
        },
        /**
         * 현재 focus 된 row 기준으로 offset 만큼 이동한 rowKey 를 반환한다.
         * @param {Number} offset   이동할 offset
         * @return {Number|String} rowKey   offset 만큼 이동한 위치의 rowKey
         * @private
         */
        _findRowKey: function(offset) {
            var index, row,
                dataModel = this.grid.dataModel;
            if (this.has()) {
                index = Math.max(Math.min(dataModel.indexOfRowKey(this.get('rowKey')) + offset, this.grid.dataModel.length - 1), 0);
                row = dataModel.at(index);
                return row && row.get('rowKey');
            }
        },
        /**
         * 현재 focus 된 column 기준으로 offset 만큼 이동한 columnName 을 반환한다.
         * @param {Number} offset   이동할 offset
         * @return {String} columnName  offset 만큼 이동한 위치의 columnName
         * @private
         */
        _findColumnName: function(offset) {
            var index,
                columnModel = this.grid.columnModel,
                columnModelList = columnModel.getVisibleColumnModelList(),
                columnIndex = columnModel.indexOfColumnName(this.get('columnName'), true);
            if (this.has()) {
                index = Math.max(Math.min(columnIndex + offset, columnModelList.length - 1), 0);
                return columnModelList[index] && columnModelList[index]['columnName'];
            }
        },
        /**
         * rowSpanData 를 반환한다.
         * @param {Number|String} rowKey    조회할 데이터의 키값
         * @param {String} columnName   컬럼명
         * @return {*|{count: number, isMainRow: boolean, mainRowKey: *}|*} rowSpanData 정보
         * @private
         */
        _getRowSpanData: function(rowKey, columnName) {
            return this.grid.dataModel.get(rowKey).getRowSpanData(columnName);
        },
        /**
         * offset 만큼 뒤로 이동한 row 의 index 를 반환한다.
         * @param {number} offset   이동할 offset
         * @return {Number} 이동한 위치의 row index
         */
        nextRowIndex: function(offset) {
            var rowKey = this.nextRowKey(offset);
            return this.grid.dataModel.indexOfRowKey(rowKey);
        },
        /**
         * offset 만큼 앞으로 이동한 row의 index를 반환한다.
         * @param {number} offset 이동할 offset
         * @return {Number} 이동한 위치의 row index
         */
        prevRowIndex: function(offset) {
            var rowKey = this.prevRowKey(offset);
            return this.grid.dataModel.indexOfRowKey(rowKey);
        },
        /**
         * 다음 컬럼의 인덱스를 반환한다.
         * @return {Number} 다음 컬럼의 index
         */
        nextColumnIndex: function() {
            var columnName = this.nextColumnName();
            return this.grid.columnModel.indexOfColumnName(columnName, true);
        },
        /**
         * 이전 컬럼의 인덱스를 반환한다.
         * @return {Number} 이전 컬럼의 인덱스
         */
        prevColumnIndex: function() {
            var columnName = this.prevColumnName();
            return this.grid.columnModel.indexOfColumnName(columnName, true);
        },
        /**
         * keyEvent 발생 시 호출될 메서드로,
         * rowSpan 정보 까지 계산된 다음 rowKey 를 반환한다.
         * @param {number}  offset 이동할 offset
         * @return {Number|String} offset 만큼 이동한 위치의 rowKey
         */
        nextRowKey: function(offset) {
            var focused = this.which(),
                rowKey = focused.rowKey,
                count, rowSpanData;

            offset = typeof offset === 'number' ? offset : 1;
            if (offset > 1) {
                rowKey = this._findRowKey(offset);
                rowSpanData = this._getRowSpanData(rowKey, focused.columnName);
                if (!rowSpanData.isMainRow) {
                    rowKey = this._findRowKey(rowSpanData.count + offset);
                }
            } else {
                rowSpanData = this._getRowSpanData(rowKey, focused.columnName);
                if (rowSpanData.isMainRow && rowSpanData.count > 0) {
                    rowKey = this._findRowKey(rowSpanData.count);
                } else if (!rowSpanData.isMainRow) {
                    count = rowSpanData.count;
                    rowSpanData = this._getRowSpanData(rowSpanData.mainRowKey, focused.columnName);
                    rowKey = this._findRowKey(rowSpanData.count + count);
                } else {
                    rowKey = this._findRowKey(1);
                }
            }
            return rowKey;
        },
        /**
         * keyEvent 발생 시 호출될 메서드로,
         * rowSpan 정보 까지 계산된 이전 rowKey 를 반환한다.
         * @param {number}  offset 이동할 offset
         * @return {Number|String} offset 만큼 이동한 위치의 rowKey
         */
        prevRowKey: function(offset) {
            var focused = this.which(),
                rowKey = focused.rowKey,
                rowSpanData;
            offset = typeof offset === 'number' ? offset : 1;
            offset *= -1;

            if (offset < -1) {
                rowKey = this._findRowKey(offset);
                rowSpanData = this._getRowSpanData(rowKey, focused.columnName);
                if (!rowSpanData.isMainRow) {
                    rowKey = this._findRowKey(rowSpanData.count + offset);
                }
            } else {
                rowSpanData = this._getRowSpanData(rowKey, focused.columnName);
                if (!rowSpanData.isMainRow) {
                    rowKey = this._findRowKey(rowSpanData.count - 1);
                } else {
                    rowKey = this._findRowKey(-1);
                }
            }
            return rowKey;
        },
        /**
         * keyEvent 발생 시 호출될 메서드로, 다음 columnName 을 반환한다.
         * @return {String} 다음 컬럼명
         */
        nextColumnName: function() {
            return this._findColumnName(1);
        },
        /**
         * keyEvent 발생 시 호출될 메서드로, 이전 columnName 을 반환한다.
         * @return {String} 이전 컬럼명
         */
        prevColumnName: function() {
            return this._findColumnName(-1);
        },
        /**
         * 첫번째 row 의 key 를 반환한다.
         * @return {(string|number)} 첫번째 row 의 키값
         */
        firstRowKey: function() {
            return this.grid.dataModel.at(0).get('rowKey');
        },
        /**
         * 마지막 row의 key 를 반환한다.
         * @return {(string|number)} 마지막 row 의 키값
         */
        lastRowKey: function() {
            return this.grid.dataModel.at(this.grid.dataModel.length - 1).get('rowKey');
        },
        /**
         * 첫번째 columnName 을 반환한다.
         * @return {string} 첫번째 컬럼명
         */
        firstColumnName: function() {
            var columnModelList = this.grid.columnModel.getVisibleColumnModelList();
            return columnModelList[0]['columnName'];
        },
        /**
         * 마지막 columnName 을 반환한다.
         * @return {string} 마지막 컬럼명
         */
        lastColumnName: function() {
            var columnModelList = this.grid.columnModel.getVisibleColumnModelList(),
                lastIndex = columnModelList.length - 1;
            return columnModelList[lastIndex]['columnName'];
        }
    });
