ne.util.defineNamespace("fedoc.content", {});
fedoc.content["module-view_painter_cell_text-convertible.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        \n            \n        \n            \n                <h2>view/painter/cell/text-convertible</h2>\n            \n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>input 이 존재하지 않는 text 셀에서 편집시 input 이 존재하는 셀로 변환이 가능한 cell renderer</p></div>\n        \n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"module:view/painter/cell/text-convertible\">\n            <span class=\"type-signature\"></span>new (require(\"view/painter/cell/text-convertible\"))<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 20</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n\n    \n        <h5>Extends:</h5>\n        \n\n\n    <ul>\n        <li>module:view/painter/cell/text</li>\n    </ul>\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n</dt>\n<dd>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_blurEditingCell\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_blurEditingCell<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 223</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Trigger blur event on editing cell if exist</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_endEdit\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_endEdit<span class=\"signature\">($td)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 204</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>textbox를  text로 교체한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>$td</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">jQuery</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>해당 cell 엘리먼트</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_getContentHtml\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_getContentHtml<span class=\"signature\">(cellData)</span><span class=\"type-signature\"> &rarr; {string}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 126</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>각 셀 페인터 인스턴스마다 정의된 getContentHtml 을 이용하여<br>컬럼모델의 defaultValue, beforeText, afterText 를 적용한 content html 마크업 스트링 을 반환한다.<br>(상태에 따라 Text나 Base의 함수를 선택해서 사용해야 하기 때문에, 추가로 override 해서 prototype을 이용해 실행)</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>cellData</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Model의 셀 데이터</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>컬럼모델의 defaultValue, beforeText, afterText 를 적용한 content html 마크업 스트링</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_isEditingCell\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_isEditingCell<span class=\"signature\">(cellData)</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 144</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>현재 편집중인 셀인지 여부를 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>cellData</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Model의 셀 데이터</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <ul>\n<li>편집중이면 true, 아니면 false</li>\n</ul>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onBlurConvertible\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onBlurConvertible<span class=\"signature\">(blurEvent)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 163</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>blur 이벤트 핸들러</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>blurEvent</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">event</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>이벤트 객체</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onDblClick\">\n            <span class=\"type-signature\"></span>_onDblClick<span class=\"signature\">(mouseEvent)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 238</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Event Handler for double click event.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>mouseEvent</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">MouseEvent</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>MouseEvent object</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onMouseDown\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onMouseDown<span class=\"signature\">(event)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 255</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>mousedown 이벤트 핸들러.<br>Core의 onMouseDown에서 focusClipboard를 호출하여 input에서 의도하지 않은 blur 이벤트가 발생하는 것을<br>방지하기 위해 이벤트 버블링을 멈춘다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>event</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">MouseEvent</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>마우스 이벤트 객체</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_startEdit\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_startEdit<span class=\"signature\">($td)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 176</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>text를 textbox 로 교체한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>$td</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">jQuery</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>해당 cell 엘리먼트</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"focusIn\">\n            <span class=\"type-signature\"></span>focusIn<span class=\"signature\">($td)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 58</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>cell 에서 키보드 enter 를 입력했을 때 편집모드로 전환. cell 내 input 에 focus 를 수행하는 로직. 필요에 따라 override 한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>$td</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">jQuery</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>해당 cell 엘리먼트</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"focusOut\">\n            <span class=\"type-signature\"></span>focusOut<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 66</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>focus in 상태에서 키보드 esc 를 입력했을 때 편집모드를 벗어난다. cell 내 input 을 blur 시키고, 편집모드를 벗어나는 로직.</p>\n<ul>\n<li>필요에 따라 override 한다.</li>\n</ul>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getContentHtml\">\n            <span class=\"type-signature\"></span>getContentHtml<span class=\"signature\">(cellData)</span><span class=\"type-signature\"> &rarr; {string}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 83</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Cell data 를 인자로 받아 <td> 안에 들아갈 html string 을 반환한다.<br>redrawAttributes 에 해당하는 프로퍼티가 변경되었을 때 수행될 로직을 구현한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>cellData</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>모델의 셀 데이터</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>html 마크업 문자열</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n        <h5>Example</h5>\n        \n    <pre class=\"prettyprint\"><code>var html = this.getContentHtml();\n&lt;select>\n    &lt;option value='1'>option1&lt;/option>\n    &lt;option value='2'>option1&lt;/option>\n    &lt;option value='3'>option1&lt;/option>\n&lt;/select></code></pre>\n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getEditType\">\n            <span class=\"type-signature\"></span>getEditType<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {String}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 50</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>자기 자신의 인스턴스의 editType 을 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>editType 'normal|button|select|button|text|text-password|text-convertible'</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"setElementAttribute\">\n            <span class=\"type-signature\"></span>setElementAttribute<span class=\"signature\">(cellData, $td, hasFocusedElement)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 156</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>model의 redrawAttributes 에 해당하지 않는 프로퍼티의 변화가 발생했을 때 수행할 메서드<br>redrawAttributes 에 해당하지 않는 프로퍼티가 변경되었을 때 수행할 로직을 구현한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>cellData</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>모델의 셀 데이터</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>$td</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">jquery</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>해당 cell 엘리먼트</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>hasFocusedElement</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Boolean</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>해당 셀에 실제 focus 된 엘리먼트가 존재하는지 여부</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"