Vue.component('uz-header', {
    //template: '#headTemplate',
    template: '\
        <Row>\
            <i-col span="24">\
                <div class="layout">\
                    <div class="layout-ceiling">\
                        <div class="layout-ceiling-main">\
                            <a href="#">帮助中心</a> |\
                            <a @click="plus()">联系我们</a> |\
                        </div>\
                    </div>\
                    <div class="layout-header">\
                        <div class="layout-logo"><h3>water-mater</h3></div>\
                    </div>\
                </div>\
            </i-col>\
        </Row>\
    '
});


Vue.component('uz-left', {
    //template: '#leftTemplate',
    template: '\
         <i-col span="3">\
                <i-menu theme="light" active-name="1" @on-select="plus">\
                    <Menu-item name="1">\
                        <Icon type="document-text"></Icon>\
总览\
</Menu-item>\
<Menu-item name="2">\
    <Icon type="chatbubbles"></Icon>\
报警\
</Menu-item>\
<Menu-item name="3">\
    <Icon type="heart"></Icon>\
明细\
</Menu-item>\
<Menu-item name="4">\
    <Icon type="heart-broken"></Icon>\
报表\
</Menu-item>\
<Menu-item name="5">\
    <Icon type="heart-broken"></Icon>\
分析\
</Menu-item>\
<Menu-item  name="6">\
    <Icon type="heart-broken"></Icon>\
配置\
</Menu-item>\
</i-menu>\
</i-col>\
',
    methods: {
        plus: function (name) {
            if (name == 1) {
                window.location.href = "/main.html";
            } else if (name == 2) {
                window.location.href = "/wrong/wrong.html";
            } else if (name == 3) {
                window.location.href = "/detail/detail.html";
            } else if (name == 4) {
                window.location.href = "/report/report.html";
            } else if (name == 5) {
                window.location.href = "/analysis/analysis.html";
            } else if (name == 6) {
                window.location.href = "/configure/configure.html";
            }
        }
    }
});