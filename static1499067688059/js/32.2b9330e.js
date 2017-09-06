webpackJsonp([32],{1119:function(t,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},components:{}}},1424:function(t,e,_){t.exports={render:function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"doc"},[_("h2",[t._v("Select 下拉选择")]),t._v(" "),_("h3",[t._v("普通下拉选择")]),t._v(" "),_("p",[t._v("对于对象数组的解析，系统默认使用"),_("code",[t._v("key")]),t._v(", "),_("code",[t._v("title")]),t._v("两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考"),_("router-link",{attrs:{to:"/guide/config"}},[t._v("全局配置")])],1),t._v(" "),_("blockquote",[t._v("注意：如果datas传入的是"),_("code",[t._v("{ 1:'a', 2:'b' }")]),t._v("这种数字key，选中的key值将全部转换为String, 建议使用"),_("code",[t._v("[{ key: 1, title: 'a' }]")]),t._v("对象数据模式。")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select1"}}),t._v(" "),_("h3",[t._v("禁用")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select10"}}),t._v(" "),_("h3",[t._v("没有默认“请选择”选项")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select2"}}),t._v(" "),_("h3",[t._v("多选")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select3"}}),t._v(" "),_("h3",[t._v("选择对象值")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select4"}}),t._v(" "),_("h3",[t._v("多选对象值")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select5"}}),t._v(" "),_("h3",[t._v("限制数量")]),t._v(" "),_("p",[t._v("最多选中2个")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select6"}}),t._v(" "),_("h3",[t._v("自定义")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select7"}}),t._v(" "),_("h3",[t._v("可筛选")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select11"}}),t._v(" "),_("h3",[t._v("可筛选多选")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select12"}}),t._v(" "),_("h3",[t._v("使用全局Dict")]),t._v(" "),_("p",[t._v("Hey UI将提供数据字典的调用方式模型，并内置"),_("code",[t._v("dictMapping")]),t._v("方法做展示。详情请至"),_("router-link",{attrs:{to:"/guide/config"}},[t._v("全局配置")]),t._v("。")],1),t._v(" "),_("example",{attrs:{demo:"dataplugins/select8"}}),t._v(" "),_("h3",[t._v("文本类型的下拉")]),t._v(" "),_("example",{attrs:{demo:"dataplugins/select9"}}),t._v(" "),_("h3",[t._v("Select 参数")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("是否只读")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("multiple")]),t._v(" "),_("td",[t._v("是否多选")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("datas")]),t._v(" "),_("td",[t._v("选择的数据")]),t._v(" "),_("td",[t._v("Array, Object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("dict")]),t._v(" "),_("td",[t._v("调用全局定义的字典")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("limit")]),t._v(" "),_("td",[t._v("限制只能选择多少个")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("nullOption")]),t._v(" "),_("td",[t._v("是否有“请选择”选项")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("true")])]),t._v(" "),_("tr",[_("td",[t._v("noBorder")]),t._v(" "),_("td",[t._v("是否有边框，适用于文字的下拉选择")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("render")]),t._v(" "),_("td",[t._v("下拉菜单的展示自定义")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("placeholder")]),t._v(" "),_("td",[t._v("展示默认提示语")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("请选择")])])])}]},t.exports.render._withStripped=!0},851:function(t,e,_){var v=_(1)(_(1119),_(1424),null,null,null);v.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/select.vue",v.esModule&&Object.keys(v.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),v.options.functional&&console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions."),t.exports=v.exports}});