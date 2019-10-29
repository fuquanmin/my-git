/* @update: 2018-6-29 18:2:2 */
debugger;var debug = "localhost" == document.domain || 0 == document.domain.indexOf("demo") ? !0 : !1,
    comboExSet = debug ? /.*/: "";
seajs.config({

    comboExcludes: comboExSet,
    paths: {
        tools: "//static.360buyimg.com/finance/supplyChain/supplyChainServicePlatform/1.0.0/js",
        product: "//static.360buyimg.com/finance/supplyChain/common/3.0.0/js"
    }
});