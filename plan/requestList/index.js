(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_HMVmei: function (elem) {// if (!elem) {
      //   return;
      // }
      // return elem.innerHTML;
    },
    doAction_uiControl0_DCnoaQ: function (data, elem) {},
    getTemplate_uiControl0_DCnoaQ: function () {
      var selfTemplate = "import { Header, HeaderLeft ,HeaderRight} from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData,\n        me = this,\n        backStyle={padding:0};\n    return (\n      <div>\n        <Header amStyle=\"alert\" style={backStyle} title=\"\u6211\u7684\u8BF7\u6C42\">\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"alert\" style={{margin:\"0\"}} onClick={back}><span className=\"icon icon-left-nav icon-back\"></span>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData,\n        me = this,\n        backStyle = { padding: 0 };\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: 'alert', style: backStyle, title: '\\u6211\\u7684\\u8BF7\\u6C42' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: 'alert', style: { margin: \"0\" }, onClick: _appRenderer.back },\n            React.createElement('span', { className: 'icon icon-left-nav icon-back' }),\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);