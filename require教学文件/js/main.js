// 配置

requirejs.config({
	// 配置基础url路径
	baseUrl: "js/",
	// 对应关系
	paths: {
		// .js的后缀可以省略
		"index": "apps/index",
		"hello": "apps/hello",
		"jquery": "libs/jquery-3.2.1"
	}
})

// 加载

requirejs(["index", "hello", "jquery"], function(index, hello, $) {

})