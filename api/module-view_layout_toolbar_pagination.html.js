ne.util.defineNamespace("fedoc.content", {});
fedoc.content["module-view_layout_toolbar_pagination.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        \n            \n                <h2>view/layout/toolbar/pagination</h2>\n            \n        \n            \n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>Class for the pagination in the toolbar</p></div>\n        \n\n        \n            \n<dt>\n    \n</dt>\n<dd>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"module:view/layout/toolbar/pagination\">\n            <span class=\"type-signature\"></span>new (require(\"view/layout/toolbar/pagination\"))<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 18</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n\n    \n        <h5>Extends:</h5>\n        \n\n\n    <ul>\n        <li><a href=\"module-base_view.html\">module:base/view</a></li>\n    </ul>\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setPaginationInstance\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setPaginationInstance<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 51</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>pagination instance 를 설정한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"addView\">\n            <span class=\"type-signature\"></span>addView<span class=\"signature\">(instance)</span><span class=\"type-signature\"> &rarr; {instance}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 60</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>destroy 시 함께 삭제할 View 를 내부 변수 _viewList 에 추가한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>instance</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">instance</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>인스턴스 객체</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>instance 인자로 전달받은 인스턴스 객체</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#addView\">module:base/view#addView</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#addView\">module:base/view#addView</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"createEventData\">\n            <span class=\"type-signature\"></span>createEventData<span class=\"signature\">(data)</span><span class=\"type-signature\"> &rarr; {Object}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 84</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>customEvent 에서 사용할 이벤트 객체를 포멧에 맞게 생성하여 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>data</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>이벤트 핸들러에 넘길 데이터</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>생성된 커스텀 이벤트 객체</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#createEventData\">module:base/view#createEventData</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#createEventData\">module:base/view#createEventData</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"createView\">\n            <span class=\"type-signature\"></span>createView<span class=\"signature\">(constructor, params)</span><span class=\"type-signature\"> &rarr; {instance}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 49</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>자식 View 를 생성할 때 사용하는 메서드<br>스스로를 다시 rendering 하거나 소멸 될 때 내부에서 스스로 생성한 View instance 들도 메모리에서 제거하기 위함이다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>constructor</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">class</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>View 생성자</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>params</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>생성자에 넘길 옵션 파라미터</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>instance    생성자를 통해 인스턴스화 한 객체</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#createView\">module:base/view#createView</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#createView\">module:base/view#createView</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"destroy\">\n            <span class=\"type-signature\"></span>destroy<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 73</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>자식 View를 제거한 뒤 자신도 제거한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#destroy\">module:base/view#destroy</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#destroy\">module:base/view#destroy</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"destroyChildren\">\n            <span class=\"type-signature\"></span>destroyChildren<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 99</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>등록되어있는 자식 View 들을 제거한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#destroyChildren\">module:base/view#destroyChildren</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#destroyChildren\">module:base/view#destroyChildren</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"error\">\n            <span class=\"type-signature\"></span>error<span class=\"signature\">(message)</span><span class=\"type-signature\"> &rarr; {error}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 32</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>에러 객체를 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>message</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">String</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Error message</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>에러객체</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#error\">module:base/view#error</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#error\">module:base/view#error</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"render\">\n            <span class=\"type-signature\"></span>render<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {View.Layout.Toolbar.Pagination}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 40</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>pagination 을 rendering 한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>This object</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"setOwnProperties\">\n            <span class=\"type-signature\"></span>setOwnProperties<span class=\"signature\">(properties)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 17</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>주어진 객체의 프라퍼티들을 this에 복사해서 추가한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>properties</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>추가할 프라퍼티 객체</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_view.html#setOwnProperties\">module:base/view#setOwnProperties</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_view.html#setOwnProperties\">module:base/view#setOwnProperties</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n        <dt class=\"mixes\">Mixes In:</dt>\n\n        <dd class=\"mixes\"><ul>\n        \n            <li><a href=\"module-base_common.html#.setOwnProperties\">module:base/common.setOwnProperties</a></li>\n        \n        </ul></dd>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"