function Controller() {
    function clickedSettings(e) {
        $.trigger("showDetail", e);
    }
    function clickedCalculate() {
        var tipPct = Ti.App.Properties.getDouble("tipPct", .15);
        var billAmt = parseFloat($.billAmtTextField.value);
        var tipAmt = billAmt * tipPct;
        var totalAmt = billAmt + tipAmt;
        $.tipAmtLabel.text = "$" + tipAmt.toFixed(2);
        $.totalAmtLabel.text = "$" + totalAmt.toFixed(2);
        $.billAmtTextField.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Alloy FasTip",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.settingsButton = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: 15,
        id: "settingsButton",
        title: "Settings"
    });
    clickedSettings ? $.__views.settingsButton.addEventListener("click", clickedSettings) : __defers["$.__views.settingsButton!click!clickedSettings"] = true;
    $.__views.master.rightNavButton = $.__views.settingsButton;
    $.__views.billAmtTextField = Ti.UI.createTextField({
        color: "#000",
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#000",
        borderRadius: "10",
        borderWidth: "1",
        id: "billAmtTextField",
        top: "40",
        width: "146",
        height: "35",
        textAlign: "right",
        hintText: "Bill amount",
        keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        returnKeyType: Ti.UI.RETURNKEY_DONE
    });
    $.__views.master.add($.__views.billAmtTextField);
    $.__views.calcTipButton = Ti.UI.createButton({
        width: "122",
        height: Ti.UI.SIZE,
        borderRadius: 15,
        backgroundColor: "#3883B5",
        color: "#fff",
        id: "calcTipButton",
        title: "Calculate Tip",
        top: "100"
    });
    $.__views.master.add($.__views.calcTipButton);
    clickedCalculate ? $.__views.calcTipButton.addEventListener("click", clickedCalculate) : __defers["$.__views.calcTipButton!click!clickedCalculate"] = true;
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "170",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId7"
    });
    $.__views.master.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: "124",
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Tip Amount:",
        left: "13",
        top: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.tipAmtLabel = Ti.UI.createLabel({
        width: "80",
        height: Ti.UI.SIZE,
        color: "#000",
        text: "$0.00",
        id: "tipAmtLabel",
        left: "130",
        top: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    });
    $.__views.__alloyId7.add($.__views.tipAmtLabel);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: "124",
        height: Ti.UI.SIZE,
        color: "#0a0",
        text: "Total Amount:",
        left: "13",
        top: "30",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.totalAmtLabel = Ti.UI.createLabel({
        width: "80",
        height: Ti.UI.SIZE,
        color: "#0a0",
        text: "$0.00",
        id: "totalAmtLabel",
        left: "130",
        top: "30",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    });
    $.__views.__alloyId7.add($.__views.totalAmtLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.on("recalc", function() {
        clickedCalculate();
    });
    __defers["$.__views.settingsButton!click!clickedSettings"] && $.__views.settingsButton.addEventListener("click", clickedSettings);
    __defers["$.__views.calcTipButton!click!clickedCalculate"] && $.__views.calcTipButton.addEventListener("click", clickedCalculate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;