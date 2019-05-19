requirejs.config({
	baseUrl:"js/",
    paths:{
    	"hello":"apps/hello",
    	"index":"apps/index",

    	"jquery":"libs/jquery-3.2.1"
    }
})
requirejs(["hello","index","jquery"],function(hello,index,$){

})