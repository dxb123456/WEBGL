var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    (function (TextureMethodType) {
        TextureMethodType[TextureMethodType["diffuse"] = 0] = "diffuse";
        TextureMethodType[TextureMethodType["normal"] = 1] = "normal";
        TextureMethodType[TextureMethodType["specular"] = 2] = "specular";
        TextureMethodType[TextureMethodType["color"] = 3] = "color";
    })(egret3d.TextureMethodType || (egret3d.TextureMethodType = {}));
    var TextureMethodType = egret3d.TextureMethodType;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.PickResult
    * @classdesc
    * 鼠标拾取返回数据。</p>
    * 鼠标拾取模型上的交点 (本地坐标、世界坐标)。</p>
    * 鼠标拾取模型的uv。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    var PickResult = (function () {
        function PickResult() {
            /**
            * @language zh_CN
            * 鼠标拾取模型上的交点 (本地坐标)。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.localPosition = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 鼠标拾取模型上的交点 (世界坐标)。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.globalPosition = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 鼠标拾取模型的uv。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.uv = new egret3d.Vector3D();
        }
        return PickResult;
    }());
    egret3d.PickResult = PickResult;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
   * @language zh_CN
   * @class egret3d.Event3D
   * @classdesc
   * Event3D 类作为创建 Event3D 对象的基类，当发生事件时，Event3D 对象将作为参数传递给事件侦听器。Event3D 类的属性包含有关事件的基本信息，例如事件的类型。对于许多事件（如由 Event3D 类常量表示的事件），此基本信息就足够了。但其他事件可能需要更详细的信息。例如，与鼠标单击关联的事件需要包括有关单击事件的位置以及在单击事件期间是否按下了任何键的其他信息。您可以通过扩展 Event3D 类（MouseEvent 类执行的操作）将此类其他信息传递给事件侦听器。
   * @version Egret 3.0
   * @platform Web,Native
   */
    var Event3D = (function () {
        /**
        * @language zh_CN
        * 创建一个作为参数传递给事件侦听器的 Event3D 对象。
        * @param typeName {string} 事件类型
        * @param data {any}附加数据(可选)
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Event3D(eventType, data) {
            if (eventType === void 0) { eventType = null; }
            if (data === void 0) { data = null; }
            /**
            * @language zh_CN
            * 当前时间。
            * @returns {number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.time = 0;
            /**
            * @language zh_CN
            * 每帧延时。
            * @returns {number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.delay = 0;
            this.eventType = eventType;
            this.data = data;
        }
        /**
        * @language zh_CN
        * COMPLETE 常量定义 相关完成事件。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Event3D.COMPLETE = "complete";
        /**
        * @language zh_CN
        * CHANGE_PROPERTY 常量定义 changeProperty 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Event3D.CHANGE = "change";
        /**
        * @language zh_CN
        * ENTER_FRAME 定义 时实 更新tick。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Event3D.ENTER_FRAME = "enter_frame";
        /**
        * @language zh_CN
        * RESIZE 定义 修改大小时发生。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Event3D.RESIZE = "resize";
        return Event3D;
    }());
    egret3d.Event3D = Event3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * 鼠标键码
     * @version Egret 3.0
     * @platform Web,Native
     */
    (function (MouseCode) {
        MouseCode[MouseCode["Mouse_Left"] = 0] = "Mouse_Left";
        MouseCode[MouseCode["Mouse_Mid"] = 1] = "Mouse_Mid";
        MouseCode[MouseCode["Mouse_Right"] = 2] = "Mouse_Right";
    })(egret3d.MouseCode || (egret3d.MouseCode = {}));
    var MouseCode = egret3d.MouseCode;
    /**
    * @language zh_CN
    * @class egret3d.MouseEvent3D
    * @classdesc
    * MouseEvent3D 是所有引擎中可操作鼠标事件节点 的事件类型标记。
    * 只有Input.addEventListener 才会产生下类事件
    * @includeExample events/MouseEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    var MouseEvent3D = (function (_super) {
        __extends(MouseEvent3D, _super);
        function MouseEvent3D() {
            _super.apply(this, arguments);
            /**
             * @language zh_CN
             * 鼠标code值
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.mouseCode = 0;
        }
        /**
         * @language zh_CN
         * MOUSE_CLICK 常量定义 onClick 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_CLICK = "onMouseClick";
        /**
         * @language zh_CN
         * MOUSE_DOWN 常量定义 onMouseDown 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_DOWN = "onMouseDown";
        /**
         * @language zh_CN
         * MOUSE_UP 常量定义 onMouseUp 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_UP = "onMouseUp";
        /**
         * @language zh_CN
         * MOUSE_MOVE 常量定义 onMouseMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_MOVE = "onMouseMove";
        /**
         * @language zh_CN
         * MOUSE_OVER 常量定义 onMouseMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_OVER = "onMouseOver";
        /**
         * @language zh_CN
         * MOUSE_OVER 常量定义 onMouseWheel 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        MouseEvent3D.MOUSE_WHEEL = "onMouseWheel";
        return MouseEvent3D;
    }(egret3d.Event3D));
    egret3d.MouseEvent3D = MouseEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.TouchEvent3D
    * @classdesc
    * TouchEvent3D 是所有引擎中可操作触摸事件节点 的事件类型标记。
    * 只有Input.addEventListener 才会产生下类事件
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    var TouchEvent3D = (function (_super) {
        __extends(TouchEvent3D, _super);
        function TouchEvent3D() {
            _super.apply(this, arguments);
        }
        /**
         * @language zh_CN
         * TOUCH_MOVE 常量定义 onTouchMove 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        TouchEvent3D.TOUCH_MOVE = "onTouchMove";
        /**
        * @language zh_CN
        * TOUCH_END 常量定义 onTouchEnd 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        TouchEvent3D.TOUCH_START = "onTouchStart";
        /**
        * @language zh_CN
        * TOUCH_START 常量定义 onTouchStart 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        TouchEvent3D.TOUCH_END = "onTouchEnd";
        return TouchEvent3D;
    }(egret3d.Event3D));
    egret3d.TouchEvent3D = TouchEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.PickEvent3D
    * @classdesc
    * PickEvent3D 是所有引擎中可操作物体拣选事件的事件类型标记。
    * 当IRender对象开启了 enablePick ，并且监听了PickEvent3D事件后，
    * 鼠标或触摸对IRender对象进行操作后会产生一些对应的事件进行影响。
    * 只有Object3D对象调用addEventListener 才会产生下类事件
    * @includeExample events/PickEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Object3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var PickEvent3D = (function (_super) {
        __extends(PickEvent3D, _super);
        function PickEvent3D() {
            _super.apply(this, arguments);
        }
        /**
         * @language zh_CN
         * PICK_CLICK 点击拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        PickEvent3D.PICK_CLICK = "onPickClick";
        /**
         * @language zh_CN
         * PICK_DOWN  按下拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        PickEvent3D.PICK_DOWN = "onPickDown";
        /**
         * @language zh_CN
         * PICK_UP 弹起拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        PickEvent3D.PICK_UP = "onPickUp";
        /**
         * @language zh_CN
         * PICK_MOVE 光标移动拣选
         * @version Egret 3.0
         * @platform Web,Native
         */
        PickEvent3D.PICK_MOVE = "onPickMove";
        /**
         * @language zh_CN
         * PICK_WHEEL 滚轮滚动拣选事件
         * @version Egret 3.0
         * @platform Web,Native
         */
        PickEvent3D.PICK_WHEEL = "onPickWheel";
        return PickEvent3D;
    }(egret3d.Event3D));
    egret3d.PickEvent3D = PickEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * 按键码
     * @version Egret 3.0
     * @platform Web,Native
     */
    (function (KeyCode) {
        KeyCode[KeyCode["Key_BackSpace"] = 8] = "Key_BackSpace";
        KeyCode[KeyCode["Key_Tab"] = 9] = "Key_Tab";
        KeyCode[KeyCode["Key_Clear"] = 12] = "Key_Clear";
        KeyCode[KeyCode["Key_Enter"] = 13] = "Key_Enter";
        KeyCode[KeyCode["Key_Shift_L"] = 16] = "Key_Shift_L";
        KeyCode[KeyCode["Key_Control_L"] = 17] = "Key_Control_L";
        KeyCode[KeyCode["Key_Alt_L"] = 18] = "Key_Alt_L";
        KeyCode[KeyCode["Key_Pause"] = 19] = "Key_Pause";
        KeyCode[KeyCode["Key_CapsLock"] = 20] = "Key_CapsLock";
        KeyCode[KeyCode["Key_Escape"] = 21] = "Key_Escape";
        KeyCode[KeyCode["Key_Space"] = 32] = "Key_Space";
        KeyCode[KeyCode["Key_Prior"] = 33] = "Key_Prior";
        KeyCode[KeyCode["Key_Next"] = 34] = "Key_Next";
        KeyCode[KeyCode["Key_End"] = 35] = "Key_End";
        KeyCode[KeyCode["Key_Home"] = 36] = "Key_Home";
        KeyCode[KeyCode["Key_Left"] = 37] = "Key_Left";
        KeyCode[KeyCode["Key_Up"] = 38] = "Key_Up";
        KeyCode[KeyCode["Key_Right"] = 39] = "Key_Right";
        KeyCode[KeyCode["Key_Down"] = 40] = "Key_Down";
        KeyCode[KeyCode["Key_Select"] = 41] = "Key_Select";
        KeyCode[KeyCode["Key_Print"] = 42] = "Key_Print";
        KeyCode[KeyCode["Key_Execute"] = 43] = "Key_Execute";
        KeyCode[KeyCode["Key_Insert"] = 45] = "Key_Insert";
        KeyCode[KeyCode["Key_Delete"] = 46] = "Key_Delete";
        KeyCode[KeyCode["Key_Help"] = 47] = "Key_Help";
        KeyCode[KeyCode["Key_0"] = 48] = "Key_0";
        KeyCode[KeyCode["Key_1"] = 49] = "Key_1";
        KeyCode[KeyCode["Key_2"] = 50] = "Key_2";
        KeyCode[KeyCode["Key_3"] = 51] = "Key_3";
        KeyCode[KeyCode["Key_4"] = 52] = "Key_4";
        KeyCode[KeyCode["Key_5"] = 53] = "Key_5";
        KeyCode[KeyCode["Key_6"] = 54] = "Key_6";
        KeyCode[KeyCode["Key_7"] = 55] = "Key_7";
        KeyCode[KeyCode["Key_8"] = 56] = "Key_8";
        KeyCode[KeyCode["Key_9"] = 57] = "Key_9";
        KeyCode[KeyCode["Key_A"] = 65] = "Key_A";
        KeyCode[KeyCode["Key_B"] = 66] = "Key_B";
        KeyCode[KeyCode["Key_C"] = 67] = "Key_C";
        KeyCode[KeyCode["Key_D"] = 68] = "Key_D";
        KeyCode[KeyCode["Key_E"] = 69] = "Key_E";
        KeyCode[KeyCode["Key_F"] = 70] = "Key_F";
        KeyCode[KeyCode["Key_G"] = 71] = "Key_G";
        KeyCode[KeyCode["Key_H"] = 72] = "Key_H";
        KeyCode[KeyCode["Key_I"] = 73] = "Key_I";
        KeyCode[KeyCode["Key_J"] = 74] = "Key_J";
        KeyCode[KeyCode["Key_K"] = 75] = "Key_K";
        KeyCode[KeyCode["Key_L"] = 76] = "Key_L";
        KeyCode[KeyCode["Key_M"] = 77] = "Key_M";
        KeyCode[KeyCode["Key_N"] = 78] = "Key_N";
        KeyCode[KeyCode["Key_O"] = 79] = "Key_O";
        KeyCode[KeyCode["Key_P"] = 80] = "Key_P";
        KeyCode[KeyCode["Key_Q"] = 81] = "Key_Q";
        KeyCode[KeyCode["Key_R"] = 82] = "Key_R";
        KeyCode[KeyCode["Key_S"] = 83] = "Key_S";
        KeyCode[KeyCode["Key_T"] = 84] = "Key_T";
        KeyCode[KeyCode["Key_U"] = 85] = "Key_U";
        KeyCode[KeyCode["Key_V"] = 86] = "Key_V";
        KeyCode[KeyCode["Key_W"] = 87] = "Key_W";
        KeyCode[KeyCode["Key_X"] = 88] = "Key_X";
        KeyCode[KeyCode["Key_Y"] = 89] = "Key_Y";
        KeyCode[KeyCode["Key_Z"] = 90] = "Key_Z";
        KeyCode[KeyCode["Key_KP_0"] = 96] = "Key_KP_0";
        KeyCode[KeyCode["Key_KP_1"] = 97] = "Key_KP_1";
        KeyCode[KeyCode["Key_KP_2"] = 98] = "Key_KP_2";
        KeyCode[KeyCode["Key_KP_3"] = 99] = "Key_KP_3";
        KeyCode[KeyCode["Key_KP_4"] = 100] = "Key_KP_4";
        KeyCode[KeyCode["Key_KP_5"] = 101] = "Key_KP_5";
        KeyCode[KeyCode["Key_KP_6"] = 102] = "Key_KP_6";
        KeyCode[KeyCode["Key_KP_7"] = 103] = "Key_KP_7";
        KeyCode[KeyCode["Key_KP_8"] = 104] = "Key_KP_8";
        KeyCode[KeyCode["Key_KP_9"] = 105] = "Key_KP_9";
        KeyCode[KeyCode["Key_Multiply"] = 106] = "Key_Multiply";
        KeyCode[KeyCode["Key_Add"] = 107] = "Key_Add";
        KeyCode[KeyCode["Key_Separator"] = 108] = "Key_Separator";
        KeyCode[KeyCode["Key_Subtract"] = 109] = "Key_Subtract";
        KeyCode[KeyCode["Key_Decimal"] = 110] = "Key_Decimal";
        KeyCode[KeyCode["Key_Divide"] = 111] = "Key_Divide";
        KeyCode[KeyCode["Key_F1"] = 112] = "Key_F1";
        KeyCode[KeyCode["Key_F2"] = 113] = "Key_F2";
        KeyCode[KeyCode["Key_F3"] = 114] = "Key_F3";
        KeyCode[KeyCode["Key_F4"] = 115] = "Key_F4";
        KeyCode[KeyCode["Key_F5"] = 116] = "Key_F5";
        KeyCode[KeyCode["Key_F6"] = 117] = "Key_F6";
        KeyCode[KeyCode["Key_F7"] = 118] = "Key_F7";
        KeyCode[KeyCode["Key_F8"] = 119] = "Key_F8";
        KeyCode[KeyCode["Key_F9"] = 120] = "Key_F9";
        KeyCode[KeyCode["Key_F10"] = 121] = "Key_F10";
        KeyCode[KeyCode["Key_F11"] = 122] = "Key_F11";
        KeyCode[KeyCode["Key_F12"] = 123] = "Key_F12";
        KeyCode[KeyCode["Key_F13"] = 124] = "Key_F13";
        KeyCode[KeyCode["Key_F14"] = 125] = "Key_F14";
        KeyCode[KeyCode["Key_F15"] = 126] = "Key_F15";
        KeyCode[KeyCode["Key_F16"] = 127] = "Key_F16";
        KeyCode[KeyCode["Key_F17"] = 128] = "Key_F17";
        KeyCode[KeyCode["Key_F18"] = 129] = "Key_F18";
        KeyCode[KeyCode["Key_F19"] = 130] = "Key_F19";
        KeyCode[KeyCode["Key_F20"] = 131] = "Key_F20";
        KeyCode[KeyCode["Key_F21"] = 132] = "Key_F21";
        KeyCode[KeyCode["Key_F22"] = 133] = "Key_F22";
        KeyCode[KeyCode["Key_F23"] = 134] = "Key_F23";
        KeyCode[KeyCode["Key_F24"] = 135] = "Key_F24";
        KeyCode[KeyCode["Key_Num_Lock"] = 136] = "Key_Num_Lock";
        KeyCode[KeyCode["Key_Scroll_Lock"] = 137] = "Key_Scroll_Lock";
    })(egret3d.KeyCode || (egret3d.KeyCode = {}));
    var KeyCode = egret3d.KeyCode;
    /**
    * @language zh_CN
    * @class egret3d.MouseEvent3D
    * @classdesc
    * KeyEvent3D 按键事件，
    * 只有Input.addEventListener 才会产生下类事件
    * @includeExample events/KeyEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @see egret3d.Input
    * @version Egret 3.0
    * @platform Web,Native
    */
    var KeyEvent3D = (function (_super) {
        __extends(KeyEvent3D, _super);
        function KeyEvent3D() {
            _super.apply(this, arguments);
            /**
             * @language zh_CN
             * 按键code值
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.keyCode = 0;
        }
        /**
         * @language zh_CN
         * KEY_CLICK 常量定义 onKeyClick 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        KeyEvent3D.KEY_CLICK = "onKeyClick";
        /**
         * @language zh_CN
         * KEY_DOWN 常量定义 onKeyDown 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        KeyEvent3D.KEY_DOWN = "onKeyDown";
        /**
         * @language zh_CN
         * KEY_UP 常量定义 onKeyUp 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        KeyEvent3D.KEY_UP = "onKeyUp";
        return KeyEvent3D;
    }(egret3d.Event3D));
    egret3d.KeyEvent3D = KeyEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.LoaderEvent3D
    * @classdesc
    * LoaderEvent3D 使用URLLoader加载资源的事件返回对象
    * 只有URLLoader对象调用addEventListener 才会产生下类事件
    * @includeExample events/LoaderEvent3D.ts
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    @ @see egret3d.URLLoader
    * @version Egret 3.0
    * @platform Web,Native
    */
    var LoaderEvent3D = (function (_super) {
        __extends(LoaderEvent3D, _super);
        function LoaderEvent3D() {
            _super.apply(this, arguments);
        }
        /**
         * @language zh_CN
         * LOADER_COMPLETE 常量定义 onLoadComplete 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        LoaderEvent3D.LOADER_COMPLETE = "onLoadComplete";
        /**
        * @language zh_CN
        * LOADER_PROGRESS 常量定义 onLoadProgress 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        LoaderEvent3D.LOADER_PROGRESS = "onLoadProgress";
        /**
        * @language zh_CN
        * LOADER_ERROR 常量定义 onLoadError 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        LoaderEvent3D.LOADER_ERROR = "onLoadError";
        return LoaderEvent3D;
    }(egret3d.Event3D));
    egret3d.LoaderEvent3D = LoaderEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.ParserEvent3D
    * @classdesc
    * ParserEvent3D 使用ParserUtils加载资源的事件返回对象
    * @see egret3d.Event3D
    * @see egret3d.EventDispatcher
    * @version Egret 3.0
    * @platform Web,Native
    */
    var ParserEvent3D = (function (_super) {
        __extends(ParserEvent3D, _super);
        function ParserEvent3D() {
            _super.apply(this, arguments);
        }
        /**
         * @language zh_CN
         * PARSER_COMPLETE 常量定义 onParserComplete 事件对象的 type 属性的值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        ParserEvent3D.PARSER_COMPLETE = "onParserComplete";
        return ParserEvent3D;
    }(egret3d.Event3D));
    egret3d.ParserEvent3D = ParserEvent3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * EventDispatcher 类是可调度事件的所有类的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EventDispatcher = (function () {
        function EventDispatcher() {
            /**
             * @language zh_CN
             * @private
             */
            this.listeners = {};
        }
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event {any} 事件类型。
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.dispatchEvent = function (event3D) {
            if (this.listeners[event3D.eventType] != null) {
                for (var i = 0; i < this.listeners[event3D.eventType].length; i++) {
                    var listener = this.listeners[event3D.eventType][i];
                    try {
                        listener.handler.call(listener.thisObject, event3D);
                    }
                    catch (error) {
                        if (window.console) {
                            console.error(error.stack);
                        }
                    }
                }
            }
        };
        /**
        * @language zh_CN
        * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeEventListener()。然后，可以使用新的优先级再次注册该侦听器。
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
         * @version Egret 3.0
         * @platform Web,Native
        */
        EventDispatcher.prototype.addEventListener = function (type, callback, thisObject, priolity) {
            if (priolity === void 0) { priolity = 0; }
            if (this.listeners[type] == null) {
                this.listeners[type] = [];
            }
            var listener = new EventListener(type, thisObject, callback, priolity);
            listener.id = ++EventListener.event_id_count;
            this.listeners[type].push(listener);
            this.listeners[type].sort(function (listener1, listener2) {
                return listener2.priolity - listener1.priolity;
            });
            return listener.id;
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.removeEventListener = function (type, callback, thisObject) {
            if (this.hasEventListener(type, thisObject, callback)) {
                for (var i = 0; i < this.listeners[type].length; i++) {
                    var listener = this.listeners[type][i];
                    if (listener.equalCurrentListener(type, thisObject, callback)) {
                        listener.handler = null;
                        listener.thisObject = null;
                        this.listeners[type].splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param id  事件id, addEventListener 的返回值.
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.removeEventListenerAt = function (id) {
            for (var key in this.listeners) {
                for (var i = 0; i < this.listeners[key].length; i++) {
                    var listener = this.listeners[key][i];
                    if (listener.id == id) {
                        listener.handler = null;
                        listener.thisObject = null;
                        this.listeners[key].splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         * 移除所有事件侦听器。
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.clearEventListener = function () {
            this.listeners = {};
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string}
        * @returns {boolean}
         * @version Egret 3.0
         * @platform Web,Native
        */
        EventDispatcher.prototype.containEventListener = function (type) {
            if (this.listeners[type] == null)
                return false;
            return this.listeners[type].length > 0;
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventDispatcher.prototype.hasEventListener = function (type, thisObject, callback) {
            if (this.listeners[type] == null)
                return false;
            for (var i = 0; i < this.listeners[type].length; i++) {
                var listener = this.listeners[type][i];
                if (listener.equalCurrentListener(type, thisObject, callback)) {
                    return true;
                }
            }
            return false;
        };
        return EventDispatcher;
    }());
    egret3d.EventDispatcher = EventDispatcher;
    /**
    *
    * @language zh_CN
    * @class egret3d.EventListener
    * @classdesc
    * EventListener 类 用于添加或删除事件侦听器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EventListener = (function () {
        /**
        * @language zh_CN
        * @param type 事件的类型。
        * @param handler 处理事件的侦听器函数
        * @param  priority 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function EventListener(type, thisObject, handler, priolity) {
            if (type === void 0) { type = null; }
            if (thisObject === void 0) { thisObject = null; }
            if (handler === void 0) { handler = null; }
            if (priolity === void 0) { priolity = 0; }
            this.type = type;
            this.thisObject = thisObject;
            this.handler = handler;
            this.priolity = priolity;
        }
        /**
        * @language zh_CN
        * 比较两个事件是否相等。
        * @param type {string} 事件的类型。
        * @param handler {Function} 处理事件的侦听器函数
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventListener.prototype.equalCurrentListener = function (type, thisObject, handler) {
            if (this.type == type && this.thisObject == thisObject && this.handler == handler) {
                return true;
            }
            return false;
        };
        /**
        * @private
        */
        EventListener.event_id_count = 0;
        return EventListener;
    }());
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.EventManager
    * @classdesc
    * 事件管理。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EventManager = (function () {
        /**
        * @language zh_CN
        * 构造函数
        * @param canvas 画布
        * @version Egret 3.0
        * @platform Web,Native
        */
        function EventManager(canvas) {
            this._canvas = canvas;
            this._canvas.view3Ds;
            this._pickEvent3d = new egret3d.PickEvent3D();
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_CLICK, this.onMouseClick, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN, this.onMouseDown, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_UP, this.onMouseUp, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE, this.onMouseMove, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_START, this.onTouchDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_END, this.onTouchUp, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE, this.onTouchMove, this);
        }
        Object.defineProperty(EventManager.prototype, "_view3ds", {
            get: function () {
                return this._canvas.view3Ds;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 清理EventManager
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventManager.prototype.onClear = function () {
            this._canvas = null;
        };
        /**
        * @language zh_CN
        * 清除绑定关系。
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventManager.prototype.onClearListeners = function () {
        };
        /**
         * @language zh_CN
         * 分发事件。
         * @param e {any} 事件参数
         * @param typeStr {string} 事件类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventManager.prototype.sendEvent = function (e, typeStr, func) {
            var canvas = this._canvas;
            if (!canvas) {
                return;
            }
            for (var i = 0; i < this._view3ds.length; i++) {
                var view = this._view3ds[i];
                if (!view.entityCollect || !view.entityCollect.mousePickList) {
                    continue;
                }
                var collect = view.entityCollect.mousePickList;
                var ret = egret3d.Picker.pickObject3DList(canvas, view, collect);
                var len = ret.length;
                if (len <= 0) {
                    continue;
                }
                var render = null;
                var dis = Number.MAX_VALUE;
                var temp_dis = 0;
                var object3d = null;
                var mouseChilder = false;
                for (var j = 0; j < len; j++) {
                    object3d = ret[j];
                    temp_dis = egret3d.Vector3D.distance(object3d.globalPosition, view.camera3D.globalPosition);
                    if (temp_dis < dis) {
                        dis = temp_dis;
                        render = ret[j];
                    }
                    if (object3d.mouseChilder) {
                        mouseChilder = object3d.mouseChilder;
                    }
                }
                if (ret.length > 0) {
                    if (ret.length == 1 && render) {
                        render.dispatchEvent(func.call(this, typeStr, e, render));
                    }
                    else {
                        if (mouseChilder) {
                            ret = egret3d.Picker.pickObject3DList(canvas, view, ret, true);
                            dis = Number.MAX_VALUE;
                            len = ret.length;
                            if (len <= 0) {
                                if (render) {
                                    render.dispatchEvent(func.call(this, typeStr, e, render));
                                }
                            }
                            else {
                                render = null;
                                for (var j = 0; j < len; j++) {
                                    object3d = ret[j];
                                    temp_dis = egret3d.Vector3D.distance(object3d.globalPosition, view.camera3D.globalPosition);
                                    if (temp_dis < dis) {
                                        dis = temp_dis;
                                        render = ret[j];
                                    }
                                }
                                if (render) {
                                    render.dispatchEvent(func.call(this, typeStr, e, render));
                                }
                            }
                        }
                        else {
                            if (render) {
                                render.dispatchEvent(func.call(this, typeStr, e, render));
                            }
                        }
                    }
                }
            }
        };
        EventManager.prototype.initPickEvent3D = function (typeStr, e, render) {
            this._pickEvent3d.eventType = typeStr;
            this._pickEvent3d.target = render;
            this._pickEvent3d.data = e;
            this._pickEvent3d.pickResult = render.pickResult;
            return this._pickEvent3d;
        };
        EventManager.prototype.onTouchMove = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_MOVE, this.initPickEvent3D);
        };
        EventManager.prototype.onTouchUp = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_UP, this.initPickEvent3D);
        };
        EventManager.prototype.onTouchDown = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_DOWN, this.initPickEvent3D);
        };
        EventManager.prototype.onMouseClick = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_CLICK, this.initPickEvent3D);
        };
        EventManager.prototype.onMouseDown = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_DOWN, this.initPickEvent3D);
        };
        EventManager.prototype.onMouseUp = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_UP, this.initPickEvent3D);
        };
        EventManager.prototype.onMouseMove = function (e) {
            this.sendEvent(e, egret3d.PickEvent3D.PICK_MOVE, this.initPickEvent3D);
        };
        return EventManager;
    }());
    egret3d.EventManager = EventManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AnimNodeBase
     * @classdesc
     * 动画节点基类
     *
     * 动画驱动的基本节点父类，实现基本统一的动画节点结构
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/AnimNodeBase.ts
     */
    var AnimNodeBase = (function () {
        function AnimNodeBase() {
        }
        /**
        * @language zh_CN
        * 填充GeomtryData
        * @param geometry: Geometry对象
        * @private
        */
        AnimNodeBase.prototype.fillGeomtryData = function (geometry) {
        };
        return AnimNodeBase;
    }());
    egret3d.AnimNodeBase = AnimNodeBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AnimaNodeCollection
     * @classdesc
     * 动画功能节点收集器
     * 动画功能的收集，整理，初始化容器，一般在粒子系统里使用
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/AnimaNodeCollection.ts
     */
    var AnimaNodeCollection = (function () {
        /**
        * @language zh_CN
        * 构造函数
        * @priavte
        */
        function AnimaNodeCollection() {
            /**
            * @language zh_CN
            * 动画节点容器
            * @priavte
            */
            this.nodes = new Array();
            /**
            * @language zh_CN
            * @priavte
            */
            this._vertexAttributes = {};
            this.nodes = new Array();
        }
        /**
        * @language zh_CN
        * 添加动画功能节点
        * 添加继承 animNodeBase 功能节点 例如粒子的 加速度功能节点，匀速功能节点
        * @param node 节点对象
        */
        AnimaNodeCollection.prototype.addNode = function (node) {
            this.nodes.push(node);
        };
        /**
        * @language zh_CN
        * 移除动画功能节点
        * 删除指定的动画功能节点，但是不能动态删除，需要进行 功能重置
        * @param node 节点对象
        */
        AnimaNodeCollection.prototype.removeNode = function (node) {
            var index = this.nodes.indexOf(node);
            if (index != -1)
                this.nodes.splice(index, 1);
        };
        /**
        * @language zh_CN
        * 获取节点容器
        * 获取整体的功能节点列表
        * @return 节点容器
        */
        AnimaNodeCollection.prototype.getNodes = function () {
            return this.nodes;
        };
        /**
        * @language zh_CN
        * 获取节点顶点Shader
        * @return 顶点Shader容器
        * @private
        */
        AnimaNodeCollection.prototype.getNodesVertexShaders = function () {
            var shaderNames = [];
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].vertexShader != "" && this.nodes[i].vertexShader != undefined && this.nodes[i].vertexShader != null)
                    shaderNames.push(this.nodes[i].vertexShader);
            }
            return shaderNames;
        };
        /**
        * @language zh_CN
        * 获取节点片元Shader
        * @return 片元Shader容器
        * @private
        */
        AnimaNodeCollection.prototype.getNodesFragmentShaders = function () {
            var shaderNames = [];
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].fragmentShader != "" && this.nodes[i].fragmentShader != undefined && this.nodes[i].fragmentShader != null)
                    shaderNames.push(this.nodes[i].fragmentShader);
            }
            return shaderNames;
        };
        /**
        * @language zh_CN
        * 计算节点
        * @private
        */
        AnimaNodeCollection.prototype.calculateNode = function () {
            ///init data to updata gpu
            ///this.vertexInfos = this.vertexInfos || new Array<VertexInfo>();
            ///this.vertexInfos.length = 0; 
            var offset = 4 + 3 + 2;
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].usageAttributeLen > 0) {
                    this.nodes[i].offset = offset;
                    this.nodes[i].offsetBytes = offset * Float32Array.BYTES_PER_ELEMENT;
                    offset += this.nodes[i].usageAttributeLen;
                }
            }
            this.numberOfVertices = offset;
            this.vertexSizeInBytes = offset * Float32Array.BYTES_PER_ELEMENT;
        };
        return AnimaNodeCollection;
    }());
    egret3d.AnimaNodeCollection = AnimaNodeCollection;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Joint
     * @classdesc
     * Joint 类表示骨骼关节，属于骨架类的组成部分， Joint类属于骨架实现的内部类，无需直接实例化。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Joint.ts
     */
    var Joint = (function () {
        /**
        * @language zh_CN
        * 构造函数
        * @param name 骨骼名称
        */
        function Joint(name) {
            /**
            * @language zh_CN
            * 骨骼矩阵是否有效
            */
            this.jointMatrixValid = false;
            /**
            * @language zh_CN
            * 骨骼世界矩阵是否有效
            */
            this.worldMatrixValid = false;
            /**
            * @language zh_CN
            * 骨骼矩阵
            */
            this.jointMatrix = new egret3d.Matrix4_4();
            /**
            * @language zh_CN
            * 骨骼世界矩阵
            */
            this.worldMatrix = new egret3d.Matrix4_4();
            /**
            * @language zh_CN
            * 骨骼名称
            */
            this.name = null;
            /**
            * @language zh_CN
            * 父骨骼名称
            */
            this.parent = null;
            /**
            * @language zh_CN
            * 父骨骼索引编号
            */
            this.parentIndex = -1;
            /**
            * @language zh_CN
            * 骨骼逆矩阵
            */
            this.inverseBindPose = null;
            /**
            * @language zh_CN
            * 骨骼缩放量
            */
            this.scale = null;
            /**
            * @language zh_CN
            * 骨骼旋转量
            */
            this.orientation = null;
            /**
            * @language zh_CN
            * 骨骼平移量
            */
            this.translation = null;
            /**
            * @language zh_CN
            * 骨骼本地矩阵
            */
            this.localMatrix = null;
            this.name = name;
        }
        /**
        * @language zh_CN
        * 克隆新骨骼对象
        * @return 新骨骼对象
        */
        Joint.prototype.clone = function () {
            var cloneObj = new Joint(this.name);
            cloneObj.parent = this.parent;
            cloneObj.parentIndex = this.parentIndex;
            if (this.inverseBindPose) {
                cloneObj.inverseBindPose = new egret3d.Matrix4_4;
                cloneObj.inverseBindPose.copyFrom(this.inverseBindPose);
            }
            if (this.scale) {
                cloneObj.scale = new egret3d.Vector3D();
                cloneObj.scale.copyFrom(this.scale);
            }
            if (this.orientation) {
                cloneObj.orientation = new egret3d.Quaternion();
                cloneObj.orientation.copyFrom(this.orientation);
            }
            if (this.translation) {
                cloneObj.translation = new egret3d.Vector3D();
                cloneObj.translation.copyFrom(this.translation);
            }
            if (this.scale && this.orientation && this.translation) {
                cloneObj.setLocalTransform(cloneObj.orientation, cloneObj.scale, cloneObj.translation);
            }
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 设置骨骼逆矩阵
        * @param translation 平移量
        * @param rotation 旋转量
        * @param scaling 缩放量
        */
        Joint.prototype.setInverseBindPose = function (translation, rotation, scaling) {
            if (!this.inverseBindPose) {
                this.inverseBindPose = new egret3d.Matrix4_4();
            }
            this.inverseBindPose.recompose([translation, rotation, scaling]);
        };
        /**
        * @language zh_CN
        * 设置骨骼本地置换
        * @param orientation 旋转量
        * @param scale 缩放量
        * @param translation 平移量
        */
        Joint.prototype.setLocalTransform = function (orientation, scale, translation) {
            this.translation = translation;
            this.orientation = orientation;
            this.scale = scale;
            if (!this.localMatrix) {
                this.localMatrix = new egret3d.Matrix4_4();
            }
            this.localMatrix.makeTransform(this.translation, this.scale, this.orientation);
        };
        return Joint;
    }());
    egret3d.Joint = Joint;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Skeleton
     * @classdesc
     * Skeleton 类表示骨架类，其中包含若干个 Joint（骨骼关节） 对象，Skeleton（骨架类）是组成骨骼动画的单帧单位。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Skeleton.ts
     */
    var Skeleton = (function () {
        function Skeleton(initialSkeleton) {
            if (initialSkeleton === void 0) { initialSkeleton = null; }
            /**
            * @language zh_CN
            * 当前骨架帧时间
            */
            this.frameTime = 0;
            /**
            * @language zh_CN
            * 骨架包含的骨骼
            */
            this.joints = [];
            /**
            * @language zh_CN
            * 骨架矩阵是否有效
            */
            this.skeletonMatrixValid = false;
            this._skeletonMatrix = null;
            this._initialSkeleton = null;
            this._temp_q0 = new egret3d.Quaternion();
            this._temp_q1 = new egret3d.Quaternion();
            this._temp_q2 = new egret3d.Quaternion();
            this._temp_v0 = new egret3d.Vector3D();
            this._temp_v1 = new egret3d.Vector3D();
            this._temp_v2 = new egret3d.Vector3D();
            if (initialSkeleton) {
                this.initialSkeleton = initialSkeleton;
            }
        }
        /**
        * @language zh_CN
        * 克隆新骨架对象
        * @return 新骨架对象
        */
        Skeleton.prototype.clone = function () {
            var cloneObj = new Skeleton(this.initialSkeleton);
            cloneObj.frameTime = this.frameTime;
            for (var i = 0; i < this.joints.length; i++) {
                cloneObj.joints.push(this.joints[i].clone());
            }
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 重置骨架数据
        */
        Skeleton.prototype.reset = function () {
            for (var i = 0; i < this.joints.length; i++) {
                this.joints[i].jointMatrix.identity();
                this.joints[i].jointMatrixValid = false;
                this.joints[i].worldMatrix.identity();
                this.joints[i].worldMatrixValid = false;
                this.joints[i].orientation.x =
                    this.joints[i].orientation.y =
                        this.joints[i].orientation.z =
                            this.joints[i].orientation.w = 0;
                this.joints[i].scale.x =
                    this.joints[i].scale.y =
                        this.joints[i].scale.z =
                            this.joints[i].scale.w = 0;
                this.joints[i].translation.x =
                    this.joints[i].translation.y =
                        this.joints[i].translation.z =
                            this.joints[i].translation.w = 0;
            }
        };
        Object.defineProperty(Skeleton.prototype, "initialSkeleton", {
            /**
            * @language zh_CN
            * 初始骨架
            */
            get: function () {
                return this._initialSkeleton;
            },
            /**
            * @language zh_CN
            * 设置初始骨架
            * @param value 初始骨架
            */
            set: function (value) {
                this._initialSkeleton = value;
                if (!this._skeletonMatrix) {
                    this._skeletonMatrix = new Float32Array(this._initialSkeleton.numJoint * 8);
                    this.skeletonMatrixValid = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skeleton.prototype, "skeletonMatrix", {
            /**
            * @language zh_CN
            * 骨架矩阵阵列
            */
            get: function () {
                return this._skeletonMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skeleton.prototype, "numJoint", {
            /**
            * @language zh_CN
            * 骨骼数量
            */
            get: function () {
                return this.joints.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 通过名称查找指定骨骼
        * @param name 骨骼名称
        * @return 骨骼对象
        */
        Skeleton.prototype.findJoint = function (name) {
            for (var i = 0; i < this.joints.length; i++) {
                if (this.joints[i].name == name)
                    return this.joints[i];
            }
            return null;
        };
        /**
        * @language zh_CN
        * 通过名称查找骨骼索引编号
        * @param name 骨骼名称
        * @return 骨骼索引编号
        */
        Skeleton.prototype.findJointIndex = function (name) {
            for (var i = 0; i < this.joints.length; i++) {
                if (this.joints[i].name == name)
                    return i;
            }
            return -1;
        };
        /**
        * @language zh_CN
        * 骨架插值
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param tNow 新骨架帧时间（骨架0.frameTime ~ 骨架1.frameTime）
        */
        Skeleton.prototype.skeletonLerp = function (skeleton0, skeleton1, tNow) {
            this.frameTime = tNow;
            var t = (tNow - skeleton0.frameTime) / Math.abs(skeleton1.frameTime - skeleton0.frameTime);
            this.lerp(skeleton0, skeleton1, t);
        };
        /**
        * @language zh_CN
        * 骨架插值计算
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param t 时间因子(0.0~1.0);
        */
        Skeleton.prototype.lerp = function (skeleton0, skeleton1, t) {
            for (var index = 0; index < skeleton0.joints.length; index++) {
                if (index >= this.joints.length) {
                    this.joints.push(new egret3d.Joint(null));
                }
                var newJointPose = this.joints[index];
                newJointPose.name = skeleton0.joints[index].name;
                newJointPose.worldMatrixValid = true;
                this._temp_q0.fromMatrix(skeleton0.joints[index].worldMatrix);
                this._temp_q1.fromMatrix(skeleton1.joints[index].worldMatrix);
                this._temp_q2.lerp(this._temp_q0, this._temp_q1, t);
                skeleton0.joints[index].worldMatrix.copyRowTo(3, this._temp_v0);
                skeleton1.joints[index].worldMatrix.copyRowTo(3, this._temp_v1);
                this._temp_v2.lerp(this._temp_v0, this._temp_v1, t);
                this._temp_q2.toMatrix3D(newJointPose.worldMatrix);
                newJointPose.worldMatrix.rawData[12] = this._temp_v2.x;
                newJointPose.worldMatrix.rawData[13] = this._temp_v2.y;
                newJointPose.worldMatrix.rawData[14] = this._temp_v2.z;
                newJointPose.jointMatrixValid = false;
                this.skeletonMatrixValid = false;
            }
        };
        /**
        * @language zh_CN
        * 骨架转矩阵阵列数组
        * @param target 用于储存的矩阵阵列数组
        * @return 矩阵阵列数组
        */
        Skeleton.prototype.toMatrixData = function (target) {
            if (target === void 0) { target = null; }
            var joints = this._initialSkeleton.joints;
            if (!target) {
                target = new Float32Array(this.joints.length * 8);
            }
            for (var i = 0; i < joints.length; i++) {
                for (var j = 0; j < this.joints.length; j++) {
                    if (this.joints[j].name != joints[i].name)
                        continue;
                    this._temp_q0.fromMatrix(this.joints[j].jointMatrix);
                    target[i * 8 + 0] = this._temp_q0.x;
                    target[i * 8 + 1] = this._temp_q0.y;
                    target[i * 8 + 2] = this._temp_q0.z;
                    target[i * 8 + 3] = this._temp_q0.w;
                    target[i * 8 + 4] = this.joints[j].jointMatrix.rawData[12];
                    target[i * 8 + 5] = this.joints[j].jointMatrix.rawData[13];
                    target[i * 8 + 6] = this.joints[j].jointMatrix.rawData[14];
                    target[i * 8 + 7] = 1;
                    break;
                }
            }
            return target;
        };
        /**
        * @language zh_CN
        * 更新骨架矩阵
        */
        Skeleton.prototype.updateSkeletonMatrix = function () {
            if (this.skeletonMatrixValid) {
                return;
            }
            this.toMatrixData(this._skeletonMatrix);
            this.skeletonMatrixValid = true;
        };
        /**
        * @language zh_CN
        * 计算骨骼世界矩阵
        * @param initialSkeleton 初始骨架对象
        */
        Skeleton.prototype.calculateJointWorldMatrix = function (initialSkeleton) {
            for (var i = 0; i < this.joints.length; i++) {
                var jointPose = this.joints[i];
                this.calculateAbsoluteMatrix(this.joints, i, initialSkeleton);
            }
            for (var i = 0; i < this.joints.length; i++) {
                var jointPose = this.joints[i];
                if (!jointPose.jointMatrixValid) {
                    jointPose.jointMatrix = new egret3d.Matrix4_4();
                    if (initialSkeleton.joints[i].inverseBindPose) {
                        jointPose.jointMatrix.copyFrom(initialSkeleton.joints[i].inverseBindPose);
                        jointPose.jointMatrix.append(jointPose.worldMatrix);
                    }
                    jointPose.jointMatrixValid = true;
                }
            }
            this.skeletonMatrixValid = false;
        };
        Skeleton.prototype.calculateAbsoluteMatrix = function (currentSkeletonPose, jointIndex, initialSkeleton) {
            var currentJointPose = currentSkeletonPose[jointIndex];
            var currentJointParentIndex = initialSkeleton.joints[jointIndex].parentIndex;
            if (currentJointParentIndex >= 0) {
                this.calculateAbsoluteMatrix(currentSkeletonPose, currentJointParentIndex, initialSkeleton);
            }
            if (!currentJointPose.worldMatrixValid) {
                currentJointPose.worldMatrix.copyFrom(currentJointPose.localMatrix);
                if (currentJointParentIndex >= 0) {
                    currentJointPose.worldMatrix.append(currentSkeletonPose[currentJointParentIndex].worldMatrix);
                }
                currentJointPose.worldMatrixValid = true;
            }
        };
        return Skeleton;
    }());
    egret3d.Skeleton = Skeleton;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimation
     * @classdesc
     * SkeletonAnimation 类表示骨骼动画控制类
     *
     * 骨骼动画控制类中管理若干个 SkeletonAnimationClip（骨骼动画） 对象，每个SkeletonAnimationClip对象，都是对*.eam 文件的实例。
     * @includeExample anim/skeletonAnimation/SkeletonAnimation.ts
     * @see egret3d.SkeletonAnimationClip
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimation.ts
     */
    var SkeletonAnimation = (function (_super) {
        __extends(SkeletonAnimation, _super);
        function SkeletonAnimation(initialSkeleton) {
            _super.call(this);
            /**
            * @language zh_CN
            * 是否开启平滑
            */
            this.smooth = false;
            this._initialSkeleton = null;
            this._animList = [];
            this._animationSkeleton = new egret3d.Skeleton();
            this._bindList = {};
            this._enabledSkeletonAnimationClips = [];
            this._eventCallbackList = [];
            this._skeletonAnimationClips = {};
            this._blendSkeleton = null;
            this._useCache = true;
            this._playSpeed = 1.0;
            this._playing = false;
            this._currentFrame = 0;
            this._temp_smooth = new egret3d.Skeleton();
            this._temp_quat = new egret3d.Quaternion();
            this._temp_vec3 = new egret3d.Vector3D();
            this._initialSkeleton = initialSkeleton;
            this._skeletonMatrix = new Float32Array(this._initialSkeleton.numJoint * 8);
        }
        Object.defineProperty(SkeletonAnimation.prototype, "skeletonAnimationController", {
            /**
            * @language zh_CN
            * 骨骼动画容器
            * @return SkeletonAnimation对象
            */
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 初始化Shader
        * @param vertexShader 顶点Shader
        * @param pixelShader 片元Shader
        * @return xxx
        */
        SkeletonAnimation.prototype.initShader = function (vertexShader, pixelShader) {
            //vertexShader.maxBone = this.jointNumber * 2;
        };
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimation对象
        * @return 新的SkeletonAnimation对象
        */
        SkeletonAnimation.prototype.clone = function () {
            var ret = new SkeletonAnimation(this._initialSkeleton);
            for (var id in this._skeletonAnimationClips) {
                ret._skeletonAnimationClips[id] = this._skeletonAnimationClips[id].clone();
            }
            ret._animationSkeleton = this._animationSkeleton;
            ret._animList = this._animList;
            ret._blendSkeleton = this._blendSkeleton.clone();
            return ret;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "currentSkeletonMatrixData", {
            /**
            * @language zh_CN
            * 当前播放的骨架矩阵阵列数组
            */
            get: function () {
                return this._skeletonMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimation.prototype, "jointNumber", {
            /**
            * @language zh_CN
            * 骨骼数
            */
            get: function () {
                return this._initialSkeleton.numJoint;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 添加SkeletonAnimationClip对象
        * @param animationState SkeletonAnimationClip对象
        * @return SkeletonAnimationClip对象
        */
        SkeletonAnimation.prototype.addSkeletonAnimationClip = function (animationState) {
            if (this._skeletonAnimationClips[animationState.animationName]) {
                return this._skeletonAnimationClips[animationState.animationName];
            }
            if (this._animationSkeleton.numJoint < animationState.poseArray[0].joints.length && this._animationSkeleton.numJoint != animationState.poseArray[0].joints.length) {
                this._animationSkeleton.joints = [];
                var jointPoses = animationState.poseArray[0].joints;
                for (var i = 0; i < jointPoses.length; i++) {
                    var joint = new egret3d.Joint(jointPoses[i].name);
                    joint.parentIndex = animationState.poseArray[0].findJointIndex(jointPoses[i].parent);
                    var inverseBindPoseJoint = this._initialSkeleton.findJoint(joint.name);
                    if (inverseBindPoseJoint) {
                        joint.inverseBindPose = inverseBindPoseJoint.inverseBindPose;
                    }
                    else {
                        joint.inverseBindPose = null;
                    }
                    this._animationSkeleton.joints.push(joint);
                }
            }
            animationState.fillFrame(this._animationSkeleton);
            animationState.parent = this;
            for (var i = 0; i < animationState.poseArray.length; i++) {
                animationState.poseArray[i].initialSkeleton = this._initialSkeleton;
            }
            this._skeletonAnimationClips[animationState.animationName] = animationState;
            this._animList.push(animationState.animationName);
            if (!this._blendSkeleton) {
                this._blendSkeleton = animationState.poseArray[0].clone();
            }
            return animationState;
        };
        /**
        * @language zh_CN
        * 更新
        * @param time 总时间
        * @param delay 延迟时间
        */
        SkeletonAnimation.prototype.update = function (time, delay) {
            if (!this._playing) {
                return;
            }
            if (this._enabledSkeletonAnimationClips.length <= 0)
                return;
            var currentFrameIndex = 0;
            var currentSkeleton = null;
            var animationState = null;
            var currentSkeleton1 = null;
            var animationState1 = null;
            this._blendSkeleton.reset();
            var blendSpeed = delay / 300 * 1;
            for (var i = 0; i < this._enabledSkeletonAnimationClips.length; i++) {
                animationState = this._enabledSkeletonAnimationClips[i];
                if (i != this._enabledSkeletonAnimationClips.length - 1) {
                    animationState.weight = Math.max(0, animationState.weight - blendSpeed);
                    if (animationState.weight <= 0) {
                        this._enabledSkeletonAnimationClips.splice(i, 1);
                        i--;
                        continue;
                    }
                }
                else {
                    animationState.weight = Math.min(1, animationState.weight + blendSpeed);
                }
                animationState.addTime(delay * this._playSpeed * 5);
            }
            var currentFrameIndex = this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].currentFrameIndex;
            if (currentFrameIndex < this._currentFrame) {
                var e = new egret3d.Event3D(SkeletonAnimation.EVENT_PLAY_COMPLETE, this);
                this.dispatchEvent(e);
            }
            if (this._currentFrame != currentFrameIndex) {
                var e = new egret3d.Event3D(SkeletonAnimation.EVENT_FRAME_CHANGE, this);
                //e.currentTarget = this;
                this.dispatchEvent(e);
                this._currentFrame = currentFrameIndex;
            }
            if (this._enabledSkeletonAnimationClips.length > 1) {
                animationState = this._enabledSkeletonAnimationClips[0];
                currentSkeleton = animationState.poseArray[animationState.currentFrameIndex];
                if (!currentSkeleton.skeletonMatrixValid) {
                    currentSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                }
                animationState1 = this._enabledSkeletonAnimationClips[1];
                currentSkeleton1 = animationState1.poseArray[animationState1.currentFrameIndex];
                if (!currentSkeleton1.skeletonMatrixValid) {
                    currentSkeleton1.calculateJointWorldMatrix(this._animationSkeleton);
                }
                for (var i = 0; i < this._blendSkeleton.numJoint; i++) {
                    this._blendSkeleton.joints[i].orientation.lerp(currentSkeleton.joints[i].orientation, currentSkeleton1.joints[i].orientation, animationState1.weight);
                    this._blendSkeleton.joints[i].scale.lerp(currentSkeleton.joints[i].scale, currentSkeleton1.joints[i].scale, animationState1.weight);
                    this._blendSkeleton.joints[i].translation.lerp(currentSkeleton.joints[i].translation, currentSkeleton1.joints[i].translation, animationState1.weight);
                    this._blendSkeleton.joints[i].setLocalTransform(this._blendSkeleton.joints[i].orientation, this._blendSkeleton.joints[i].scale, this._blendSkeleton.joints[i].translation);
                }
                this._blendSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                this._blendSkeleton.toMatrixData(this._skeletonMatrix);
            }
            else {
                animationState = this._enabledSkeletonAnimationClips[0];
                currentSkeleton = animationState.poseArray[animationState.currentFrameIndex];
                if (!currentSkeleton.skeletonMatrixValid) {
                    currentSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                }
                currentSkeleton.toMatrixData(this._skeletonMatrix);
            }
        };
        /**
        * @language zh_CN
        * 播放
        * @param animName 动画名称
        * @param speed 速度
        * @return 是否成功
        */
        SkeletonAnimation.prototype.play = function (animName, speed) {
            if (animName === void 0) { animName = null; }
            if (speed === void 0) { speed = 1.0; }
            if (!this._skeletonAnimationClips[animName])
                return false;
            this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].weight = this._enabledSkeletonAnimationClips.length > 1 ? 0 : 1;
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].play = true;
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].timePosition = 0;
            /*if (this._playing && this.currentAnim == animName)
                return true;

            if (this.currentAnim != animName) {

                if (!this._skeletonAnimationClips[animName])
                    return false;

                this.currentAnim = animName;

                this._enabledSkeletonAnimationClips = [];

                this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            }

            this._enabledSkeletonAnimationClips[0].play = true;

            this._enabledSkeletonAnimationClips[0].timePosition = 0;*/
            this._currentFrame = 0;
            this._playSpeed = speed;
            this._playing = true;
            return true;
        };
        /**
        * @language zh_CN
        * 播放一次
        * @param animName 动画名称
        * @param speed 播放速度
        * @return 是否成功
        */
        SkeletonAnimation.prototype.playOnce = function (animName, speed) {
            ///if (this._playing && this.currentAnim == animName)
            ///    return true;
            if (animName === void 0) { animName = null; }
            if (speed === void 0) { speed = 1.0; }
            if (this.currentAnim != animName) {
                if (!this._skeletonAnimationClips[animName])
                    return false;
                this.currentAnim = animName;
                this._enabledSkeletonAnimationClips = [];
                this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            }
            this._currentFrame = 0;
            this._enabledSkeletonAnimationClips[0].play = true;
            this._enabledSkeletonAnimationClips[0].timePosition = 0;
            this._enabledSkeletonAnimationClips[0].loop = false;
            this._playSpeed = speed;
            this._playing = true;
            return true;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "currentFrame", {
            /**
            * @language zh_CN
            * 当前帧索引
            */
            get: function () {
                return this._currentFrame;
            },
            /**
            * @language zh_CN
            * 当前帧索引
            */
            set: function (value) {
                if (this._enabledSkeletonAnimationClips.length <= 0)
                    return;
                this._enabledSkeletonAnimationClips[0].timePosition = value * 160;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 获取总帧数
        * @param animName 动画名称
        * @return 动画总帧数
        */
        SkeletonAnimation.prototype.getTotalNumberOfFrame = function (animName) {
            if (animName === void 0) { animName = null; }
            animName = animName ? animName : this.currentAnim;
            var animation = this._skeletonAnimationClips[animName];
            if (!animation)
                return 0;
            return animation.poseArray.length;
        };
        /**
        * @language zh_CN
        * 停止动画播放
        */
        SkeletonAnimation.prototype.stop = function () {
            this._playing = false;
        };
        /**
        * @language zh_CN
        * 动画是否在播放
        * @return 是否在播放
        */
        SkeletonAnimation.prototype.isPlay = function () {
            if (false == this._enabledSkeletonAnimationClips[0].play) {
                return false;
            }
            return this._playing && this._enabledSkeletonAnimationClips.length > 0;
        };
        /**
        * @language zh_CN
        * 设置动画播放速度
        * @param speed 播放速度
        */
        SkeletonAnimation.prototype.setPlaySpeed = function (speed) {
            this._playSpeed = speed;
        };
        /**
        * @language zh_CN
        * 绑定3D对象到骨骼
        * @param jointName 骨骼名称
        * @param obj3d 3D对象
        * @return 是否成功
        */
        SkeletonAnimation.prototype.bindToJointPose = function (jointName, obj3d) {
            var jointIndex = this._animationSkeleton.findJointIndex(jointName);
            if (jointIndex < 0)
                return false;
            var list = null;
            if (this._bindList[jointIndex]) {
                list = this._bindList[jointIndex];
            }
            else {
                list = new Array();
                this._bindList[jointIndex] = list;
            }
            list.push(obj3d);
            return true;
        };
        SkeletonAnimation.prototype.updateBindList = function (skeletonPose) {
            var list = null;
            var jointPose = null;
            var obj3D = null;
            for (var jointIndex in this._bindList) {
                list = this._bindList[jointIndex];
                if (list.length <= 0)
                    continue;
                jointPose = skeletonPose.joints[jointIndex];
                if (!jointPose)
                    continue;
                for (var i = 0; i < list.length; i++) {
                    obj3D = list[i];
                    this._temp_quat.fromMatrix(jointPose.worldMatrix);
                    this._temp_quat.toEulerAngles(this._temp_vec3);
                    obj3D.rotationX = this._temp_vec3.x;
                    obj3D.rotationY = this._temp_vec3.y;
                    obj3D.rotationZ = this._temp_vec3.z;
                    ///obj3D.scaleX = jointPose.worldMatrix.scale.x;
                    ///obj3D.scaleY = jointPose.worldMatrix.scale.y;
                    ///obj3D.scaleZ = jointPose.worldMatrix.scale.z;
                    obj3D.x = jointPose.worldMatrix.position.x;
                    obj3D.y = jointPose.worldMatrix.position.y;
                    obj3D.z = jointPose.worldMatrix.position.z;
                }
            }
        };
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画列表
        */
        SkeletonAnimation.prototype.getAnimList = function () {
            return this._animList;
        };
        /**
        * @language zh_CN
        * 获取动画节点
        */
        SkeletonAnimation.prototype.getAnimNode = function () {
            return null;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "dirtyFrameNumber", {
            /**
            * @language zh_CN
            * 脏帧数
            * @return xxx
            */
            get: function () {
                return this._dirtyFrameNumber;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 获取SkeletonAnimationClip对象
        * @param name 动画名称
        * @return SkeletonAnimationClip对象
        */
        SkeletonAnimation.prototype.getAnimationState = function (name) {
            return this._skeletonAnimationClips[name];
        };
        /**
        * @language zh_CN
        * 移除动画
        * @param name 动画名称
        */
        SkeletonAnimation.prototype.removeAnimationState = function (name) {
            if (!this._skeletonAnimationClips[name]) {
                console.log("animation named: " + name + "not exists. SkeletonAnimationClip::removeAnimationState");
            }
            delete this._skeletonAnimationClips[name];
        };
        /**
        * @language zh_CN
        * 移除所有动画
        */
        SkeletonAnimation.prototype.removeAllAnimationStates = function () {
            this._skeletonAnimationClips = {};
            this._enabledSkeletonAnimationClips = [];
        };
        /**
        * @language zh_CN
        * 动画播放完一个周期的事件
        */
        SkeletonAnimation.EVENT_PLAY_COMPLETE = "event_play_complete";
        /**
        * @language zh_CN
        * 动画帧更改的事件
        */
        SkeletonAnimation.EVENT_FRAME_CHANGE = "event_frame_change";
        return SkeletonAnimation;
    }(egret3d.EventDispatcher));
    egret3d.SkeletonAnimation = SkeletonAnimation;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimationClip
     * @classdesc
     * SkeletonAnimationClip 类为骨骼动画
     *
     * SkeletonAnimationClip类为骨骼动画，其中保存管理若干个Skeleton（骨架对象），每个骨架对象都为该动画某时刻的骨骼帧信息。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimationClip.ts
     */
    var SkeletonAnimationClip = (function () {
        function SkeletonAnimationClip(animName) {
            if (animName === void 0) { animName = null; }
            /**
            * @language zh_CN
            * 帧数
            */
            this.frameCount = 0;
            this._animName = null;
            this._sampling = 1;
            this._loop = true;
            this._playing = true;
            this._enabled = true;
            this._weight = 1.0;
            this._length = 0;
            this._parent = null;
            this._poseArray = null;
            this._animName = animName;
        }
        Object.defineProperty(SkeletonAnimationClip.prototype, "parent", {
            /**
            * @language zh_CN
            * 父对象
            */
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "poseArray", {
            /**
            * @language zh_CN
            * 动画Pose骨架序列
            */
            get: function () {
                return this._poseArray;
            },
            /**
            * @language zh_CN
            * 动画Pose骨架序列
            */
            set: function (array) {
                this._poseArray = array;
                this._length = array[array.length - 1].frameTime;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimationClip对象
        * @return 新的SkeletonAnimationClip
        */
        SkeletonAnimationClip.prototype.clone = function () {
            var cloneObj = new SkeletonAnimationClip(this.animationName);
            cloneObj.frameCount = this.frameCount;
            cloneObj.poseArray = this._poseArray;
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 是否已经结束
        * @return 是否已经结束
        */
        SkeletonAnimationClip.prototype.hasEnded = function () {
            return ((this._timePosition >= this._length) && !this._loop);
        };
        /**
        * @language zh_CN
        * 添加动画播放时间偏移量
        * @param offset 时间增量
        */
        SkeletonAnimationClip.prototype.addTime = function (offset) {
            this.timePosition += offset;
        };
        Object.defineProperty(SkeletonAnimationClip.prototype, "currentFrameIndex", {
            /**
            * @language zh_CN
            * 当前帧索引
            */
            get: function () {
                var currentFrameIndex = Math.floor(this._timePosition / 80) % this._poseArray.length;
                return currentFrameIndex;
            },
            /**
            * @language zh_CN
            * 当前帧索引
            */
            set: function (value) {
                value = Math.abs(value) % this._poseArray.length;
                this.timePosition = value * 80;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "nextFrameIndex", {
            /**
            * @language zh_CN
            * 下一帧的索引
            */
            get: function () {
                return (this.currentFrameIndex + 1) % this._poseArray.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "animationName", {
            /**
            * @language zh_CN
            * 动画名称
            */
            get: function () {
                return this._animName;
            },
            /**
            * @language zh_CN
            * 动画名称
            */
            set: function (name) {
                this._animName = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "length", {
            /**
            * @language zh_CN
            * 动画长度
            */
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "sampling", {
            /**
            * @language zh_CN
            * 采样率
            */
            get: function () {
                return this._sampling;
            },
            /**
            * @language zh_CN
            * 采样率
            */
            set: function (value) {
                this._sampling = Math.max(value, 1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "loop", {
            /**
            * @language zh_CN
            * 是否循环
            */
            get: function () {
                return this._loop;
            },
            /**
            * @language zh_CN
            * 是否循环
            */
            set: function (value) {
                this._loop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "play", {
            /**
            * @language zh_CN
            * 是否播放中
            */
            get: function () {
                return this._playing;
            },
            /**
            * @language zh_CN
            * 是否播放
            */
            set: function (value) {
                this._playing = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "enabled", {
            /**
            * @language zh_CN
            * 是否启用
            */
            get: function () {
                return this._enabled;
            },
            /**
            * @language zh_CN
            * 是否启用
            */
            set: function (value) {
                this._enabled = value;
                //this.parent.notifyAnimationStateEnabled(this, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "weight", {
            /**
            * @language zh_CN
            * 混合权重
            */
            get: function () {
                return this._weight;
            },
            /**
            * @language zh_CN
            * 混合权重
            */
            set: function (value) {
                this._weight = value;
                if (this._enabled) {
                    ; //this.parent.notifyDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "timePosition", {
            /**
            * @language zh_CN
            * 播放的时间位置
            */
            get: function () {
                return this._timePosition;
            },
            /**
            * @language zh_CN
            * 播放的时间位置
            */
            set: function (value) {
                if (value != this._timePosition) {
                    this._timePosition = value;
                    if (this._loop) {
                        this._timePosition = value % this._length;
                        if (this._timePosition < 0) {
                            this._timePosition += this._length;
                        }
                    }
                    else {
                        if (this._timePosition < 0) {
                            this._timePosition = 0;
                        }
                        else if (this._timePosition > this._length) {
                            this._timePosition = this._length;
                            this._playing = false;
                        }
                    }
                    if (this.enabled) {
                        ; //this.parent.notifyDirty();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 填充帧
        * @param initialSkeleton 初始骨架
        */
        SkeletonAnimationClip.prototype.fillFrame = function (initialSkeleton) {
            for (var i = 0; i < this._poseArray.length; i++) {
                this._poseArray[i].calculateJointWorldMatrix(initialSkeleton);
            }
            if (this.frameCount == this._poseArray.length - 1)
                return;
            var skeletonPose = new Array();
            var fps = 60.0;
            var gpf = 1000.0 / fps;
            skeletonPose.push(this._poseArray[0]);
            for (var frameIndex = 1; frameIndex <= this.frameCount; frameIndex++) {
                var currFrame = skeletonPose[frameIndex - 1];
                var nextFrame = this._poseArray[(Math.floor(frameIndex / this.sampling) + 1) % this._poseArray.length];
                var targetSkeletonPose = new egret3d.Skeleton();
                targetSkeletonPose.skeletonLerp(currFrame, nextFrame, frameIndex * gpf);
                skeletonPose.push(targetSkeletonPose);
            }
            this.poseArray = skeletonPose;
        };
        return SkeletonAnimationClip;
    }());
    egret3d.SkeletonAnimationClip = SkeletonAnimationClip;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * Channel 类控制应用程序中的声音，对声音执行更精细的控制。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Channel = (function () {
        /**
        * @language zh_CN
        * 创建一个新的 Channel 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Channel(sound, options) {
            /**
            * @language zh_CN
            * 音量，范围从 0（静音）至 1（最大幅度）。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.volume = 1.0;
            /**
            * @language zh_CN
            * 是否循环播放 使声音播放结束时重新开始播放。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.loop = false;
            /**
            * @language zh_CN
            * 当前播放速度。1.0 正常速度。0.5 半速（更慢）。2.0 倍速（更快）。-1.0 向后。正常速度。-0.5 向后，半速。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.pitch = 1.0;
            options = options || {};
            if (options.volume)
                this.volume = options.volume;
            if (options.loop)
                this.loop = options.loop;
            if (options.pitch)
                this.pitch = options.pitch;
            this.sound = sound;
            this.paused = false;
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                this.context = egret3d.AudioManager.instance.context;
                this.startTime = 0;
                this.startOffset = 0;
                this.source = null;
                this.gain = this.context.createGain();
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.sound.audio) {
                    this.source = this.sound.audio.cloneNode(false);
                    this.source.pause();
                }
            }
        }
        /**
        * @language zh_CN
        * 开始在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.play = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    throw new Error("Call stop() before calling play()");
                }
                this.createSource();
                if (!this.source) {
                    return;
                }
                this.startTime = this.context.currentTime;
                this.source.start(0, this.startOffset % this.source.buffer.duration);
            }
            else if (egret3d.AudioManager.instance.hasAudio) {
                this.paused = false;
                this.source.play();
            }
            this.setVolume(this.volume);
            this.setLoop(this.loop);
            this.setPitch(this.pitch);
        };
        /**
        * @language zh_CN
        * 暂时停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.pause = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.startOffset += this.context.currentTime - this.startTime;
                    this.source.stop(0);
                    this.source = null;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.pause();
                }
            }
            this.paused = true;
        };
        /**
        * @language zh_CN
        * 从暂停的位置继续在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.unpause = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source || !this.paused) {
                    throw new Error('Call pause() before unpausing.');
                }
                this.createSource();
                if (!this.source) {
                    return;
                }
                this.startTime = this.context.currentTime;
                this.source.start(0, this.startOffset % this.source.buffer.duration);
                // Initialize volume and loop
                this.setVolume(this.volume);
                this.setLoop(this.loop);
                this.setPitch(this.pitch);
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                this.source.play();
            }
            this.paused = false;
        };
        /**
        * @language zh_CN
        * 停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.stop = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.source.stop(0);
                    this.startOffset = 0;
                    this.source = null;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.pause();
                    this.source.currentTime = 0;
                }
            }
        };
        Channel.prototype.setLoop = function (value) {
            if (this.source) {
                this.source.loop = value;
            }
        };
        Channel.prototype.setVolume = function (value) {
            if (this.gain) {
                this.gain.gain.value = value * egret3d.AudioManager.instance.volume;
            }
            else if (this.source) {
                this.source.volume = value * egret3d.AudioManager.instance.volume;
            }
        };
        Channel.prototype.setPitch = function (value) {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.source.playbackRate.value = value;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.playbackRate = value;
                }
            }
        };
        /**
        * @language zh_CN
        * 是否正在播放。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.isPlaying = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                return (!this.paused);
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                return (!this.source.paused);
            }
        };
        /**
        * @language zh_CN
        * 音频持续时间。
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        Channel.prototype.getDuration = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    return this.source.buffer.duration;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    var d = this.source.duration;
                    if (d === d) {
                        return d;
                    }
                }
            }
            return 0;
        };
        Channel.prototype.createSource = function () {
            var _this = this;
            if (this.sound.buffer) {
                this.source = this.context.createBufferSource();
                this.source.buffer = this.sound.buffer;
                this.source.connect(this.gain);
                this.gain.connect(this.context.destination);
                if (this.loop) {
                    this.source.onended = function () { return _this.play(); };
                }
            }
        };
        return Channel;
    }());
    egret3d.Channel = Channel;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Channel3d
     * @classdesc
     * Channel3d 类控制应用程序中 在三维空间中播放的声音。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Channel3d = (function (_super) {
        __extends(Channel3d, _super);
        /**
        * @language zh_CN
        * 创建一个新的 Channel3d 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Channel3d(sound, options) {
            _super.call(this, sound, options);
            this._position = new egret3d.Vector3D();
            this._velocity = new egret3d.Vector3D();
            if (egret3d.AudioManager.instance.hasAudioContext())
                this._panner = this.context.createPanner();
            this._maxDistance = 10000; // default maxDistance
            this._minDistance = 1;
            this._rollOffFactor = 1;
            this._listener = new egret3d.Vector3D();
        }
        Object.defineProperty(Channel3d.prototype, "listener", {
            /**
            * @language zh_CN
            * 返回监听者位置。
            * @returns {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._listener;
            },
            /**
            * @language zh_CN
            * 设置监听者位置。
            * @param value {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._listener.copyFrom(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "position", {
            /**
            * @language zh_CN
            * 三维空间中的位置。
            * @returns {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._position;
            },
            /**
            * @language zh_CN
            * 三维空间中的位置。
            * @param opsition {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (position) {
                this._position.copyFrom(position);
                if (egret3d.AudioManager.instance.hasAudioContext()) {
                    this._panner.setPosition(position.x, position.y, position.z);
                }
                if (egret3d.AudioManager.instance.hasAudio()) {
                    if (this.source) {
                        var factor = this.fallOff(this._listener, this.position, this.minDistance, this.maxDistance, this.rollOffFactor);
                        this.source.volume = this.volume * factor;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "velocity", {
            /**
            * @language zh_CN
            * 传播方向。
            * @returns {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._velocity;
            },
            /**
            * @language zh_CN
            * 传播方向。
            * @param velocity {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (velocity) {
                this._velocity.copyFrom(velocity);
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.setVelocity(velocity.x, velocity.y, velocity.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "maxDistance", {
            /**
            * @language zh_CN
            * 最大距离。
            * @returns {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._maxDistance;
            },
            /**
            * @language zh_CN
            * 最大距离。
            * @param max{Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (max) {
                this._maxDistance = max;
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.maxDistance = max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "minDistance", {
            /**
            * @language zh_CN
            * 最小距离。
            * @returns {Vector3D}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._minDistance;
            },
            /**
            * @language zh_CN
            * 最小距离。
            * @param min{Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (min) {
                this._minDistance = min;
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.refDistance = min;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "rollOffFactor", {
            /**
            * @language zh_CN
            * rollOff 系数。
            * @returns {Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rollOffFactor;
            },
            /**
            * @language zh_CN
            * rollOff 系数。
            * @param factor {Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (factor) {
                this._rollOffFactor = factor;
                if (this._panner)
                    this._panner.rolloffFactor = factor;
            },
            enumerable: true,
            configurable: true
        });
        Channel3d.prototype.createSource = function () {
            this.source = this.context.createBufferSource();
            this.source.buffer = this.sound.buffer;
            // Connect up the nodes
            this.source.connect(this._panner);
            this._panner.connect(this.gain);
            this.gain.connect(this.context.destination);
        };
        // Fall off function which should be the same as the one in the Web Audio API,
        // taken from OpenAL
        Channel3d.prototype.fallOff = function (posOne, posTwo, refDistance, maxDistance, rolloffFactor) {
            var distance = egret3d.Vector3D.distance(posOne, posTwo);
            if (distance < refDistance) {
                return 1;
            }
            else if (distance > maxDistance) {
                return 0;
            }
            else {
                var numerator = refDistance + (rolloffFactor * (distance - refDistance));
                if (numerator !== 0) {
                    return refDistance / numerator;
                }
                else {
                    return 1;
                }
            }
        };
        return Channel3d;
    }(egret3d.Channel));
    egret3d.Channel3d = Channel3d;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Sound
     * @classdesc
     * Sound 类允许您在应用程序中使用声音。</p>
     * 使用 Sound 类可以创建 Sound 对象、将外部 MP3 文件加载到该对象并播放该文件、关闭声音流，以及访问有关声音的数据，如有关流中字节数和 ID3 元数据的信息。</p>
     * 可通过以下项对声音执行更精细的控制：声音源（声音的 Channel 和 Channel3d）用于控制向计算机扬声器输出声音的属性。  </p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Sound = (function () {
        /**
        * @language zh_CN
        * 创建一个新的 Sound 对象。一旦某个 Sound 对象加载完成声音文件，就不能再将另一个声音文件加载到该 Sound 对象中。要加载另一个声音文件，请创建新的 Sound 对象。
        * @param {String}   指向外部音频文件的 URL。
        * @param {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Sound(url, success, error) {
            var _this = this;
            if (success === void 0) { success = null; }
            if (error === void 0) { error = null; }
            /**
            * @language zh_CN
            * HTML音频 数据源。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.audio = null;
            this._success = success;
            this._error = error;
            this.isLoaded = false;
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (egret3d.AudioManager.instance.isSupported(url, this.audio)) {
                    console.warn('Audio format not supported');
                    error(this);
                }
                else {
                    if (egret3d.AudioManager.instance.context) {
                        this.loadAudioFile(url);
                    }
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                try {
                    this.audio = new Audio();
                }
                catch (e) {
                    console.warn("No support for Audio element");
                    if (error)
                        error(this);
                    return;
                }
                if (egret3d.AudioManager.instance.isSupported(url, this.audio)) {
                    console.warn('Audio format not supported');
                    if (error)
                        error(this);
                }
                else {
                    this.audio.src = url;
                    this.audio.addEventListener("canplaythrough", function (ev) { return _this.oncanplaythrough(ev); });
                    this.audio.addEventListener("ended", function (ev) { return _this.onended(ev); });
                    this.audio.load();
                }
            }
        }
        Object.defineProperty(Sound.prototype, "buffer", {
            /**
            * @language zh_CN
            * Web音频 数据源。
            * @returns {AudioBuffer}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._buffer;
            },
            enumerable: true,
            configurable: true
        });
        Sound.prototype.loadAudioFile = function (url) {
            var _this = this;
            if (this.xhr == null)
                this.xhr = new XMLHttpRequest(); //通过XHR下载音频文件
            this.xhr.open('GET', url, true);
            this.xhr.responseType = 'arraybuffer';
            this.xhr.onload = function (e) { return _this.audioLoadend(e); };
            this.xhr.send();
        };
        Sound.prototype.audioLoadend = function (e) {
            var _this = this;
            egret3d.AudioManager.instance.context.decodeAudioData(this.xhr.response, function (buffer) { return _this.decodeSuccessCallback(buffer); });
        };
        Sound.prototype.decodeSuccessCallback = function (buffer) {
            this._buffer = buffer;
            if (this._success)
                this._success(this);
        };
        Sound.prototype.onended = function (ev) {
        };
        Sound.prototype.oncanplaythrough = function (ev) {
            if (!this.isLoaded) {
                this.isLoaded = true;
                if (this._success)
                    this._success(this);
            }
        };
        return Sound;
    }());
    egret3d.Sound = Sound;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.AudioManager
    * @classdesc
    * AudioManager 类允许您在应用程序中 播放 HTML5 Audio 和 Web Audio。
    * @includeExample audio/AudioManager.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var AudioManager = (function () {
        /**
        * @language zh_CN
        * 创建一个新的 AudioManager 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function AudioManager() {
            /**
            * @language zh_CN
            * 音量，范围从 0（静音）至 1（最大幅度）。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.volume = 1;
            this.codecs = {};
            if (this.hasAudioContext()) {
                if (typeof AudioContext !== 'undefined') {
                    this.context = new AudioContext();
                }
            }
        }
        /**
        * @language zh_CN
        * 是否支持 HTML5 Audio tag API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.hasAudio = function () {
            return (typeof Audio !== 'undefined');
        };
        /**
        * @language zh_CN
        * 是否支持 Web Audio API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.hasAudioContext = function () {
            return !!(typeof AudioContext !== 'undefined');
        };
        /**
        * @language zh_CN
        * 浏览器是否可以播放这种音频类型。
        * @param url 指向外部音频文件的 URL。
        * @param audio {HTMLAudioElement} HTMLAudio元素
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.isSupported = function (url, audio) {
            if (this.codecs == null) {
                if (audio == null)
                    audio = new Audio();
                this.codecs = {
                    mp3: !!audio.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                    opus: !!audio.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                    ogg: !!audio.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                    wav: !!audio.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                    aac: !!audio.canPlayType('audio/aac;').replace(/^no$/, ''),
                    m4a: !!(audio.canPlayType('audio/x-m4a;') || audio.canPlayType('audio/m4a;') || audio.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    mp4: !!(audio.canPlayType('audio/x-mp4;') || audio.canPlayType('audio/mp4;') || audio.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    weba: !!audio.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
                };
            }
            var ext = url.match(/^data:audio\/([^;,]+);/i);
            if (!ext) {
                ext = url.split('?', 1)[0].match(/\.([^.]+)$/);
            }
            if (ext) {
                ext = ext[1].toLowerCase();
            }
            return this.codecs[ext];
        };
        /**
        * @language zh_CN
        * 生成一个新的 Sound 对象 ，将声音数据加载到 Sound 对象中。
        * @param url {String}   指向外部音频文件的 URL。
        * @param success {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param error {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @returns {Sound}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.createSound = function (url, success, error) {
            if (success === void 0) { success = null; }
            if (error === void 0) { error = null; }
            return new egret3d.Sound(url, success, error);
        };
        /**
        * @language zh_CN
        * 生成一个新的 Channel 对象来播放该声音。此方法返回 Channel 对象，访问该对象可停止声音并监控音量。
        * @param sound{Sound} 要播放的声音数据。
        * @param options{any}   ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.playSound = function (sound, options) {
            options = options || {};
            var channel = new egret3d.Channel(sound, options);
            channel.play();
            return channel;
        };
        /**
        * @language zh_CN
        * 生成一个新的 Channel3d 对象来播放该声音。此方法返回 Channel3d 对象，访问该对象可停止声音并监控音量。
        * @param sound {Sound}  要播放的声音数据。
        * @param position {Vector3D} 在三维空间中播放的位置。
        * @param options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        AudioManager.prototype.playSound3d = function (sound, position, options) {
            options = options || {};
            var channel = new egret3d.Channel3d(sound, options);
            channel.position = position;
            if (options.volume) {
                channel.volume = options.volume;
            }
            if (options.loop) {
                channel.loop = options.loop;
            }
            if (options.maxDistance) {
                channel.maxDistance = options.maxDistance;
            }
            if (options.minDistance) {
                channel.minDistance = options.minDistance;
            }
            if (options.rollOffFactor) {
                channel.rollOffFactor = options.rollOffFactor;
            }
            channel.play();
            return channel;
        };
        Object.defineProperty(AudioManager, "instance", {
            /**
            * @language zh_CN
            * AudioManager类的单例模式，返回一个 AudioManager 对象。
            * @returns AudioManager
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._instance == null) {
                    this._instance = new AudioManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return AudioManager;
    }());
    egret3d.AudioManager = AudioManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.UV
     * @classdesc
     * UV类，用来存储模型顶点uv数据
     *
     * @see egret3d.GeometryData
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var UV = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function UV(u, v) {
            if (u === void 0) { u = 0; }
            if (v === void 0) { v = 0; }
            /**
            * @language zh_CN
            * u
            */
            this.u = 0;
            /**
            * @language zh_CN
            * v
            */
            this.v = 0;
            this.u = u;
            this.v = v;
        }
        return UV;
    }());
    egret3d.UV = UV;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Point
     * @classdesc
     * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Point = (function () {
        /**
         * @language en_US
         * Creates a new point. If you pass no parameters to this method, a point is
         * created at(0,0).
         *
         * @param x The horizontal coordinate.
         * @param y The vertical coordinate.
         */
        /**
         * @language zh_CN
         * 创建一个Point实例
         * @param x
         * @param y
         */
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Point.prototype, "length", {
            /**
             * @language en_US
             * The length of the line segment from(0,0) to this point.
             * @returns length
             */
            /**
             * @language zh_CN
             * 返回从(0, 0)到(x, y)的距离
             * @returns 当前2维向量的长度
             */
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * Adds the coordinates of another point to the coordinates of this point to
         * create a new point.
         *
         * @param v The point to be added.
         * @returns The new point.
         */
        /**
         * @language zh_CN
         * 当前Point加上v Point，结果返回新的实例
         * @param v
         */
        Point.prototype.add = function (v) {
            return new Point(this.x + v.x, this.y + v.y);
        };
        /**
         * @language en_US
         * Creates a copy of this Point object.
         *
         * @returns The new Point object.
         */
        /**
         * @language zh_CN
         * 克隆Point
         * @param 返回克隆后的Point
         */
        Point.prototype.clone = function () {
            return new Point(this.x, this.y);
        };
        /**
         * @language zh_CN
         * 复制源Point的值
         * @param sourcePoint
         */
        Point.prototype.copyFrom = function (sourcePoint) {
            this.x = sourcePoint.x;
            this.y = sourcePoint.y;
        };
        /**
         * @language en_US
         * Determines whether two points are equal. Two points are equal if they have
         * the same <i>x</i> and <i>y</i> values.
         *
         * @param toCompare The point to be compared.
         * @returns A value of <code>true</code> if the object is equal to this Point
         *         object; <code>false</code> if it is not equal.
         */
        /**
         * @language zh_CN
         * 比较两个Point是否全等
         * @param toCompare 被比较的Point
         */
        Point.prototype.equals = function (toCompare) {
            return (this.x == toCompare.x && this.y == toCompare.y);
        };
        /**
         * @language en_US
         * Scales the line segment between(0,0) and the current point to a set
         * length.
         *
         * @param thickness The scaling value. For example, if the current point is
         *                 (0,5), and you normalize it to 1, the point returned is
         *                  at(0,1).
         */
        /**
         * @language zh_CN
         * 当前Point标准化
         * @param thickness 使当前Point的长度为thickness 原点(0, 0)到(x, y)的距离
         */
        Point.prototype.normalize = function (thickness) {
            if (thickness === void 0) { thickness = 1; }
            if (this.length != 0) {
                var invLength = thickness / this.length;
                this.x *= invLength;
                this.y *= invLength;
                return;
            }
            throw "Cannot divide by zero length.";
        };
        /**
         * @language en_US
         * Offsets the Point object by the specified amount. The value of
         * <code>dx</code> is added to the original value of <i>x</i> to create the
         * new <i>x</i> value. The value of <code>dy</code> is added to the original
         * value of <i>y</i> to create the new <i>y</i> value.
         *
         * @param dx The amount by which to offset the horizontal coordinate,
         *           <i>x</i>.
         * @param dy The amount by which to offset the vertical coordinate, <i>y</i>.
         */
        /**
         * @language zh_CN
         * 当前Point偏移位置
         * @param dx 偏移的x坐标
         * @param dx 偏移的y坐标
         */
        Point.prototype.offset = function (dx, dy) {
            this.x += dx;
            this.y += dy;
        };
        /**
         * @language en_US
         * Subtracts the coordinates of another point from the coordinates of this
         * point to create a new point.
         *
         * @param v The point to be subtracted.
         * @returns The new point.
         */
        /**
         * @language zh_CN
         * 当前Point减去v Point,结果返回一个新实例
         * @param v
         * @returns 结果返回
         */
        Point.prototype.subtract = function (v) {
            return new Point(this.x - v.x, this.y - v.y);
        };
        /**
         * @language en_US
         * Returns a string that contains the values of the <i>x</i> and <i>y</i>
         * coordinates. The string has the form <code>"(x=<i>x</i>,
         * y=<i>y</i>)"</code>, so calling the <code>toString()</code> method for a
         * point at 23,17 would return <code>"(x=23, y=17)"</code>.
         *
         * @returns The string representation of the coordinates.
         */
        /**
        * @language zh_CN
        * 当前Point以字符串形式返回
        * @returns string
        */
        Point.prototype.toString = function () {
            return "[Point] (x=" + this.x + ", y=" + this.y + ")";
        };
        /**
         * @language en_US
         * Returns the distance between <code>pt1</code> and <code>pt2</code>.
         *
         * @param pt1 The first point.
         * @param pt2 The second point.
         * @returns The distance between the first and second points.
         */
        /**
        * @language zh_CN
        * 计算两个Point之间的距离
        * @returns 返回两个Point之间的距离
        */
        Point.distance = function (pt1, pt2) {
            var dx = pt2.x - pt1.x;
            var dy = pt2.y - pt1.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        return Point;
    }());
    egret3d.Point = Point;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Vector3D
     * @classdesc
     * 用 Vector3D 表示三维空间中的位置,也可以做4维向量,当为3维向量时w始终为0。</p>
     * 定义了一个三元的浮点向量。</p>
     * 当使用一个向量表示一个表面法线时，向量应该是标准化的。</p>
     * 其他用途的定向矢量的大小不变。当用作一个点，元素的矢量表示在三维空间中的位置。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Vector3D = (function () {
        /**
        * @language en_US
        * Creates an instance of a Vector3D object. If you do not specify a。
        * parameter for the constructor, a Vector3D object is created with
        * the elements (0,0,0,0).
        *
        * @param x The first element, such as the x coordinate.
        * @param y The second element, such as the y coordinate.
        * @param z The third element, such as the z coordinate.
        * @param w An optional element for additional data such as the angle
        *          of rotation.
        */
        /**
        * @language zh_CN
        * 创建一个对象实例，默认为(0, 0, 0, 0)
        */
        function Vector3D(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Object.defineProperty(Vector3D.prototype, "a", {
            /**
            * @language en_US
            *  得到w分量
            */
            get: function () {
                return this.w;
            },
            /**
            * @language en_US
            *  设置w分量
            */
            set: function (value) {
                this.w = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "r", {
            /**
            * @language en_US
            *  得到x分量
            */
            get: function () {
                return this.x;
            },
            /**
            * @language en_US
            *  设置x分量
            */
            set: function (value) {
                this.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "g", {
            /**
            * @language en_US
            *  得到y分量
            */
            get: function () {
                return this.y;
            },
            /**
            * @language en_US
            *  设置y分量
            */
            set: function (value) {
                this.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "b", {
            /**
            * @language en_US
            *  得到z分量
            */
            get: function () {
                return this.z;
            },
            /**
            * @language en_US
            *  设置z分量
            */
            set: function (value) {
                this.z = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "length", {
            /**
            * @language en_US
            * The length, magnitude, of the current Vector3D object from the
            * origin (0,0,0) to the object's x, y, and z coordinates. The w
            * property is ignored. A unit vector has a length or magnitude of
            * one.
            */
            /**
            * @language zh_CN
            * 向量的长度，原点(0, 0, 0)到(x, y, z)的距离
            */
            get: function () {
                return Math.sqrt(this.lengthSquared);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "lengthSquared", {
            /**
            * @language en_US
            * The square of the length of the current Vector3D object, calculated。
            * using the x, y, and z properties. The w property is ignored. Use the
            * <code>lengthSquared()</code> method whenever possible instead of the
            * slower <code>Math.sqrt()</code> method call of the
            * <code>Vector3D.length()</code> method.
            */
            /**
            * @language zh_CN
            * 3维向量的坐标x的平方加 y的平方加 z的平方
            */
            get: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language en_US
        * Adds the value of the x, y, and z elements of the current Vector3D。
        * object to the values of the x, y, and z elements of another Vector3D
        * object. The <code>add()</code> method does not change the current
        * Vector3D object. Instead, it returns a new Vector3D object with
        * the new values.
        *
        * <p>The result of adding two vectors together is a resultant vector.
        * One way to visualize the result is by drawing a vector from the
        * origin or tail of the first vector to the end or head of the second
        * vector. The resultant vector is the distance between the origin
        * point of the first vector and the end point of the second vector.
        * </p>
        */
        /**
        * @language zh_CN
        * 向量相加，结果返回一个新实例
        * @returns Vector3D 结果返回
        */
        Vector3D.prototype.add = function (a) {
            return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
        };
        /**
        * @language en_US
        * Returns a new Vector3D object that is an exact copy of the current
        * Vector3D object.
        *
        * @returns A new Vector3D object that is a copy of the current
        * Vector3D object.
        */
        /**
        * @language zh_CN
        * 克隆一个Vector3D
        * @returns 返回克隆后的实例
        */
        Vector3D.prototype.clone = function () {
            return new Vector3D(this.x, this.y, this.z, this.w);
        };
        /**
        * @language en_US
        * Copies all of vector data from the source Vector3D object into the
        * calling Vector3D object.
        *
        * @param src The Vector3D object from which to copy the data.
        */
        /**
        * @language zh_CN
        * 复制Vector3D对象
        * @param src 数据源
        */
        Vector3D.prototype.copyFrom = function (src) {
            this.x = src.x;
            this.y = src.y;
            this.z = src.z;
            this.w = src.w;
        };
        /**
        * @language en_US
        * Returns a new Vector3D object that is perpendicular (at a right。
        * angle) to the current Vector3D and another Vector3D object. If the
        * returned Vector3D object's coordinates are (0,0,0), then the two
        * Vector3D objects are parallel to each other.
        *
        * <p>You can use the normalized cross product of two vertices of a
        * polygon surface with the normalized vector of the camera or eye
        * viewpoint to get a dot product. The value of the dot product can
        * identify whether a surface of a three-dimensional object is hidden
        * from the viewpoint.</p>
        *
        * @param a A second Vector3D object.
        * @returns A new Vector3D object that is perpendicular to the current
        *          Vector3D object and the Vector3D object specified as the
        *          parameter.
        */
        /**
        * @language zh_CN
        * 两个Vector3D进行叉乘 this 叉乘 a
        * 叉乘后的结果是这两条向量的垂直向量
        * @param a
        * @returns 返回叉乘结果
        */
        Vector3D.prototype.crossProduct = function (a) {
            return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x, 1);
        };
        /**
        * @language en_US
        * Decrements the value of the x, y, and z elements of the current。
        * Vector3D object by the values of the x, y, and z elements of
        * specified Vector3D object. Unlike the
        * <code>Vector3D.subtract()</code> method, the
        * <code>decrementBy()</code> method changes the current Vector3D
        * object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object containing the values to subtract from
        *          the current Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前向量减去a向量，结果赋值给自己
        * @param a 减去的向量
        */
        Vector3D.prototype.decrementBy = function (a) {
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
        };
        /**
        * @language en_US
        * Returns the distance between two Vector3D objects. The。
        * <code>distance()</code> method is a static method. You can use it
        * directly as a method of the Vector3D class to get the Euclidean
        * distance between two three-dimensional points.
        *
        * @param pt1 A Vector3D object as the first three-dimensional point.
        * @param pt2 A Vector3D object as the second three-dimensional point.
        * @returns The distance between two Vector3D objects.
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的距离
        * @param pt1 坐标1
        * @param pt2 坐标2
        * @returns 两个Vector3D之间的距离
        */
        Vector3D.distance = function (pt1, pt2) {
            var x = (pt1.x - pt2.x);
            var y = (pt1.y - pt2.y);
            var z = (pt1.z - pt2.z);
            return Math.sqrt(x * x + y * y + z * z);
        };
        /**
        * @language en_US
        * If the current Vector3D object and the one specified as the。
        * parameter are unit vertices, this method returns the cosine of the
        * angle between the two vertices. Unit vertices are vertices that
        * point to the same direction but their length is one. They remove the
        * length of the vector as a factor in the result. You can use the
        * <code>normalize()</code> method to convert a vector to a unit
        * vector.
        *
        * <p>The <code>dotProduct()</code> method finds the angle between two
        * vertices. It is also used in backface culling or lighting
        * calculations. Backface culling is a procedure for determining which
        * surfaces are hidden from the viewpoint. You can use the normalized
        * vertices from the camera, or eye, viewpoint and the cross product of
        * the vertices of a polygon surface to get the dot product. If the dot
        * product is less than zero, then the surface is facing the camera or
        * the viewer. If the two unit vertices are perpendicular to each
        * other, they are orthogonal and the dot product is zero. If the two
        * vertices are parallel to each other, the dot product is one.</p>
        *
        * @param a The second Vector3D object.
        * @returns A scalar which is the dot product of the current Vector3D
        *          object and the specified Vector3D object.
        *
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D的点积,返回两个Vector3D之间的夹角关系
        * @param a 另一个Vector3D
        * @returns 返回两个Vector3D之间的夹角关系
        */
        Vector3D.prototype.dotProduct = function (a) {
            return this.x * a.x + this.y * a.y + this.z * a.z;
        };
        /**
        * @language en_US
        * @param toCompare The Vector3D object to be compared with the current
        *                  Vector3D object.
        * @param allFour   An optional parameter that specifies whether the w
        *                  property of the Vector3D objects is used in the
        *                  comparison.
        * @returns A value of true if the specified Vector3D object is equal
        *          to the current Vector3D object; false if it is not equal.
        */
        /**
        * @language zh_CN
        * 求两个Vector3D的值是否全等
        * @param toCompare 与些Vector3D进行比较
        * @param allFour 是否比较w分量
        * @returns 全等返回true
        */
        Vector3D.prototype.equals = function (toCompare, allFour) {
            if (allFour === void 0) { allFour = false; }
            return (this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w));
        };
        /**
        * @language en_US

        * Increments the value of the x, y, and z elements of the current
        * Vector3D object by the values of the x, y, and z elements of a
        * specified Vector3D object. Unlike the <code>Vector3D.add()</code>
        * method, the <code>incrementBy()</code> method changes the current
        * Vector3D object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object to be added to the current Vector3D
        *          object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D加等于a Vector3D，只加x y z 3个分量
        * @param a 加等a
        */
        Vector3D.prototype.incrementBy = function (a) {
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
        };
        //public static unit(a, b) {
        //    var length = a.length();
        //    b.x = a.x / length;
        //    b.y = a.y / length;
        //    b.z = a.z / length;
        //    return b;
        //}
        //public static cross(a, b, c) {
        //    c.x = a.y * b.z - a.z * b.y;
        //    c.y = a.z * b.x - a.x * b.z;
        //    c.z = a.x * b.y - a.y * b.x;
        //    return c;
        //}
        Vector3D.prototype.cross = function (v) {
            var vx = this.y * v.z - this.z * v.y;
            var vy = this.z * v.x - this.x * v.z;
            var vz = this.x * v.y - this.y * v.x;
            this.x = vx;
            this.y = vy;
            this.z = vz;
            return this;
        };
        Vector3D.prototype.divide = function (v) {
            if (v instanceof Vector3D)
                return new Vector3D(this.x / v.x, this.y / v.y, this.z / v.z);
            else {
                this.x = this.x / v;
                this.y = this.y / v;
                this.z = this.z / v;
            }
            return this;
        };
        Vector3D.prototype.unit = function () {
            return this.divide(this.length);
        };
        Vector3D.prototype.dot = function (v) {
            this.x = this.x * v.x;
            this.y = this.y * v.y;
            this.z = this.z * v.z;
            return this;
        };
        /**
        * @language en_US
        * Sets the current Vector3D object to its inverse. The inverse object
        * is also considered the opposite of the original object. The value of
        * the x, y, and z properties of the current Vector3D object is changed
        * to -x, -y, and -z.
        */
        /**
        * @language zh_CN
        * 当前Vector3D x y z 3个分量取反
        */
        Vector3D.prototype.negate = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        };
        /**
        * @language en_US
        * Scales the line segment between(0,0) and the current point to a set
        * length.
        *
        * @param thickness The scaling value. For example, if the current
        * Vector3D object is (0,3,4), and you normalize it to
        * 1, the point returned is at(0,0.6,0.8).
        */
        /**
        * @language zh_CN
        * 当前Vector3D标准化
        * @param thickness 使当前Vector3D的长度为thickness 原点(0, 0, 0)到(x, y, z)的距离
        */
        Vector3D.prototype.normalize = function (thickness) {
            if (thickness === void 0) { thickness = 1; }
            if (this.length != 0) {
                var invLength = thickness / this.length;
                this.x *= invLength;
                this.y *= invLength;
                this.z *= invLength;
                return;
            }
        };
        /**
        * @language en_US
        * Scales the current Vector3D object by a scalar, a magnitude. The
        * Vector3D object's x, y, and z elements are multiplied by the scalar
        * number specified in the parameter. For example, if the vector is
        * scaled by ten, the result is a vector that is ten times longer. The
        * scalar can also change the direction of the vector. Multiplying the
        * vector by a negative number reverses its direction.
        *
        * @param s A multiplier (scalar) used to scale a Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D扩大s倍
        * @param s 扩大的倍数
        */
        Vector3D.prototype.scaleBy = function (s) {
            this.x *= s;
            this.y *= s;
            this.z *= s;
        };
        /**
        * @language en_US
        * Sets the members of Vector3D to the specified values
        *
        * @param xa The first element, such as the x coordinate.
        * @param ya The second element, such as the y coordinate.
        * @param za The third element, such as the z coordinate.
        */
        /**
        * @language zh_CN
        * 填充当前Vector3D的x, y, z
        * @param s 扩大的倍数
        */
        Vector3D.prototype.setTo = function (xa, ya, za) {
            this.x = xa;
            this.y = ya;
            this.z = za;
        };
        /**
        * @language en_US
        * Subtracts the value of the x, y, and z elements of the current
        * Vector3D object from the values of the x, y, and z elements of
        * another Vector3D object. The <code>subtract()</code> method does not
        * change the current Vector3D object. Instead, this method returns a
        * new Vector3D object with the new values.
        *
        * @param a The Vector3D object to be subtracted from the current
        *          Vector3D object.
        * @returns A new Vector3D object that is the difference between the
        *          current Vector3D and the specified Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前Vector3D减去a Vector3D 结果返回新实例
        * @param a 减去的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        Vector3D.prototype.subtract = function (a, target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new Vector3D();
            }
            target.setTo(this.x - a.x, this.y - a.y, this.z - a.z);
            return target;
        };
        /**
        * @language zh_CN
        * 当前Vector3D乘other Vector3D 结果返回新实例
        * @param a 相乘的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        Vector3D.prototype.multiply = function (other, target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new Vector3D();
            }
            var x0 = this.x;
            var y0 = this.y;
            var z0 = this.z;
            var x1 = other.x;
            var y1 = other.y;
            var z1 = other.z;
            target.setTo(x0 * x1, y0 * y1, z0 * z1);
            return target;
        };
        /**
        * @language zh_CN
        * 当前Vector3D除以other Vector3D 结果返回新实例
        * @param a 相除的Vector3D
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 结果返回
        */
        Vector3D.prototype.divided = function (other, target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new Vector3D();
            }
            var x0 = this.x;
            var y0 = this.y;
            var z0 = this.z;
            var x1 = other.x;
            var y1 = other.y;
            var z1 = other.z;
            target.setTo(x0 / x1, y0 / y1, z0 / z1);
            return target;
        };
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的线性差值，结果为当前对象
        * @param v0 Vector3D 1
        * @param v1 Vector3D 2
        * @param t 时刻
        */
        Vector3D.prototype.lerp = function (v0, v1, t) {
            var v0x = v0.x, v0y = v0.y, v0z = v0.z, v0w = v0.w;
            var v1x = v1.x, v1y = v1.y, v1z = v1.z, v1w = v1.w;
            this.x = (v1x - v0x) * t + v0x;
            this.y = (v1y - v0y) * t + v0y;
            this.z = (v1z - v0z) * t + v0z;
            this.w = (v1w - v0w) * t + v0w;
        };
        /**
        * @language zh_CN
        * 当前Vector3D以字符串形式返回
        * @returns string
        */
        Vector3D.prototype.toString = function () {
            return "<" + this.x + ", " + this.y + ", " + this.z + ">";
        };
        /**
        * @language zh_CN
        * 解析字符串为Vector3D
        * @param str 格式用空格间隔开，只解析为x,y,z
        */
        Vector3D.prototype.parsing = function (str) {
            var strS = str.split(" ");
            if (strS.length < 3)
                return;
            this.x = parseFloat(strS[0]);
            this.y = parseFloat(strS[1]);
            this.z = parseFloat(strS[2]);
        };
        /**
        * @language en_US
        * The x axis defined as a Vector3D object with coordinates (1,0,0).
        */
        /**
        * @language zh_CN
        * X轴坐标 (1,0,0).
        */
        Vector3D.X_AXIS = new Vector3D(1, 0, 0);
        /**
        * @language en_US
        * The y axis defined as a Vector3D object with coordinates (0,1,0).
        */
        /**
        * @language zh_CN
        * Y轴坐标 (0,1,0).
        */
        Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
        /**
        * @language en_US
        * The z axis defined as a Vector3D object with coordinates (0,0,1).
        */
        /**
        * @language zh_CN
        * Z轴坐标 (0,0,1).
        */
        Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
        return Vector3D;
    }());
    egret3d.Vector3D = Vector3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Rectangle
     * @classdesc
     * Rectangle 类 表示矩形
     *
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
     *
     * Rectangle 类的 x、y、width 和 height 属性相互独立；更改一个属性的值不会影响其它属性。
     *
     * 您可以使用 new Rectangle() 构造函数创建 Rectangle 对象。
     * @version Egret 3.0
     * @platform Web,Native
    
     */
    var Rectangle = (function () {
        /**
         * @language zh_CN
         * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
         * @param x 矩形左上角的 x 坐标。
         * @param y 矩形左上角的 y 坐标。
         * @param width 矩形的宽度
         * @param height 矩形的高度
         */
        function Rectangle(x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 32; }
            if (height === void 0) { height = 32; }
            /**
            * @language zh_CN
            * 矩形左上角的 x 坐标
            */
            this.x = 0;
            /**
            * @language zh_CN
            * 矩形左上角的 y 坐标
            */
            this.y = 0;
            /**
            * @language zh_CN
            * 矩形的宽度
            */
            this.width = 0;
            /**
            * @language zh_CN
            * 矩形的高度
            */
            this.height = 0;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        /**
         * @language zh_CN
         * 检测x y 是否在当前矩形内
         * @param x  x 坐标。
         * @param y  y 坐标。
         */
        Rectangle.prototype.inner = function (x, y) {
            if (x < this.x || x > this.x + this.width ||
                y < this.y || y > this.y + this.height) {
                return false;
            }
            return true;
        };
        return Rectangle;
    }());
    egret3d.Rectangle = Rectangle;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Quaternion
     * @classdesc
     * Quaternion类
     *
     * 定义了一个四元数表示物体在空间的旋转。
     * 四元数通常用作替代欧拉角和旋转矩阵的方式来实现平滑插值和避免万向节锁
     * 注意，这四元数类不自动保持四元数标准化。因此，在必要的时候，必须采取单位化的四元数，通过调用单位化方法
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Quaternion = (function () {
        /**
        * @language en_US
        * Creates a new Quaternion object.
        * @param x The x value of the quaternion.
        * @param y The y value of the quaternion.
        * @param z The z value of the quaternion.
        * @param w The w value of the quaternion.
        */
        /**
        * @language zh_CN
        * 创建一个四元数.
        * @param x
        * @param y
        * @param z
        * @param w
        */
        function Quaternion(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 1; }
            /**
            * @language en_US
            * The x value of the quaternion.
            */
            /**
            * @language zh_CN
            * 四元数的x值.
            */
            this.x = 0;
            /**
            * @language en_US
            * The y value of the quaternion.
            */
            /**
            * @language zh_CN
            * 四元数的y值.
            */
            this.y = 0;
            /**
            * @language en_US
            * The z value of the quaternion.
            */
            /**
            * @language zh_CN
            * 四元数的z值.
            */
            this.z = 0;
            /**
            * @language en_US
            * The w value of the quaternion.
            */
            /**
            * @language zh_CN
            * 四元数的w值.
            */
            this.w = 1;
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Object.defineProperty(Quaternion.prototype, "magnitude", {
            /**
            * @language en_US
            *
            * @returns the magnitude of the quaternion object.
            */
            /**
            * @language zh_CN
            *
            * 返回四元数的大小.
            * @param w
            * @returns 四元数的大小.
            */
            get: function () {
                return Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language en_US
        * Fills the quaternion object with the result from a multiplication of two quaternion objects.
        *
        * @param    qa    The first quaternion in the multiplication.
        * @param    qb    The second quaternion in the multiplication.
        */
        /**
        * @language zh_CN
        * 两个四元数相乘,然后结果给当调用者.
        * @param qa 第一个四元数
        * @param qb 第二个四元数
        */
        Quaternion.prototype.multiply = function (qa, qb) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            this.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
            this.x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
            this.y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
            this.z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
        };
        /**
        * @language zh_CN
        * 四元数乘以一个3维向量，结果返回一个四元数
        * @param vector 相乘的向量
        * @param target 返回的结果，如果为null就会实例化一个四元数对象返回
        * @returns 返回相乘后的结果
        */
        Quaternion.prototype.multiplyVector = function (vector, target) {
            if (target === void 0) { target = null; }
            if (target === null) {
                target = new Quaternion();
            }
            var x2 = vector.x;
            var y2 = vector.y;
            var z2 = vector.z;
            target.w = -this.x * x2 - this.y * y2 - this.z * z2;
            target.x = this.w * x2 + this.y * z2 - this.z * y2;
            target.y = this.w * y2 - this.x * z2 + this.z * x2;
            target.z = this.w * z2 + this.x * y2 - this.y * x2;
            return target;
        };
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given rotation around a vector.
        *
        * @param    axis    The axis around which to rotate
        * @param    angle    The angle in radians of the rotation.
        */
        /**
        * @language zh_CN
        * 创建一个以axis轴为中心旋转angle角度的四元数
        *
        * @param axis   旋转轴
        * @param angle  旋转角度
        */
        Quaternion.prototype.fromAxisAngle = function (axis, angle) {
            angle *= Math.PI / 180.0;
            var halfAngle = angle * 0.5;
            var sin_a = Math.sin(halfAngle);
            this.w = Math.cos(halfAngle);
            this.x = axis.x * sin_a;
            this.y = axis.y * sin_a;
            this.z = axis.z * sin_a;
            this.normalize();
        };
        /**
        * @language zh_CN
        * 返回四元数绕轴心和角度
        *
        * @param axis 轴心
        * @returns 角度
        */
        Quaternion.prototype.toAxisAngle = function (axis) {
            var sqrLength = this.x * this.x + this.y * this.y + this.z * this.z;
            var angle = 0;
            if (sqrLength > 0.0) {
                angle = 2.0 * Math.acos(this.w);
                sqrLength = 1.0 / Math.sqrt(sqrLength);
                axis.x = this.x * sqrLength;
                axis.y = this.y * sqrLength;
                axis.z = this.z * sqrLength;
            }
            else {
                angle = 0;
                axis.x = 1.0;
                axis.y = 0;
                axis.z = 0;
            }
            angle /= Math.PI / 180.0;
            return angle;
        };
        /**
        * @language en_US
        * Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间球形插值，插值之间提供旋转恒定角变化率。
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
        */
        Quaternion.prototype.slerp = function (qa, qb, t) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            var dot = w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2;
            // shortest direction
            if (dot < 0) {
                dot = -dot;
                w2 = -w2;
                x2 = -x2;
                y2 = -y2;
                z2 = -z2;
            }
            if (dot < 0.95) {
                // interpolate angle linearly
                var angle = Math.acos(dot);
                var s = 1 / Math.sin(angle);
                var s1 = Math.sin(angle * (1 - t)) * s;
                var s2 = Math.sin(angle * t) * s;
                this.w = w1 * s1 + w2 * s2;
                this.x = x1 * s1 + x2 * s2;
                this.y = y1 * s1 + y2 * s2;
                this.z = z1 * s1 + z2 * s2;
            }
            else {
                // nearly identical angle, interpolate linearly
                this.w = w1 + t * (w2 - w1);
                this.x = x1 + t * (x2 - x1);
                this.y = y1 + t * (y2 - y1);
                this.z = z1 + t * (z2 - z1);
                var len = 1.0 / Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
                this.w *= len;
                this.x *= len;
                this.y *= len;
                this.z *= len;
            }
        };
        /**
        * @language en_US
        * Linearly interpolates between two quaternions.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间的线性插值
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
        */
        Quaternion.prototype.lerp = function (qa, qb, t) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            var len;
            // shortest direction
            if (w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2 < 0) {
                w2 = -w2;
                x2 = -x2;
                y2 = -y2;
                z2 = -z2;
            }
            this.w = w1 + t * (w2 - w1);
            this.x = x1 + t * (x2 - x1);
            this.y = y1 + t * (y2 - y1);
            this.z = z1 + t * (z2 - z1);
            len = 1.0 / Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            this.w *= len;
            this.x *= len;
            this.y *= len;
            this.z *= len;
        };
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given euler rotation.
        *
        * @param    ax        The angle in radians of the rotation around the ax axis.
        * @param    ay        The angle in radians of the rotation around the ay axis.
        * @param    az        The angle in radians of the rotation around the az axis.
        */
        /**
        * @language zh_CN
        * 用数值表示给定的欧拉旋转填充四元数对象。
        *
        * @param ax x轴旋转角度
        * @param ay y轴旋转角度
        * @param az z轴旋转角度
        */
        Quaternion.prototype.fromEulerAngles = function (ax, ay, az) {
            ax *= egret3d.MathUtil.DEGREES_TO_RADIANS;
            ay *= egret3d.MathUtil.DEGREES_TO_RADIANS;
            az *= egret3d.MathUtil.DEGREES_TO_RADIANS;
            var halfX = ax * 0.5, halfY = ay * 0.5, halfZ = az * 0.5;
            var cosX = Math.cos(halfX), sinX = Math.sin(halfX);
            var cosY = Math.cos(halfY), sinY = Math.sin(halfY);
            var cosZ = Math.cos(halfZ), sinZ = Math.sin(halfZ);
            this.w = cosX * cosY * cosZ + sinX * sinY * sinZ;
            this.x = sinX * cosY * cosZ - cosX * sinY * sinZ;
            this.y = cosX * sinY * cosZ + sinX * cosY * sinZ;
            this.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
            return this;
        };
        /**
        * @language en_US
        * Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.
        * @param target An optional Vector3D object to contain the Euler angles. If not provided, a new object is created.
        * @returns The Vector3D containing the Euler angles.
        */
        /**
        * @language zh_CN
        * 把四元数转成欧拉角返回
        *
        * @param target 转成的欧拉返回值，如果为null就新建一个对象返回
        * @retruns 转成的欧拉返回值
        */
        Quaternion.prototype.toEulerAngles = function (target) {
            if (target === void 0) { target = null; }
            if (target === null) {
                target = new egret3d.Vector3D();
            }
            target.x = Math.atan2(2.0 * (this.w * this.x + this.y * this.z), 1.0 - 2.0 * (this.x * this.x + this.y * this.y));
            var temp = 2.0 * (this.w * this.y - this.z * this.x);
            temp = egret3d.MathUtil.clampf(temp, -1.0, 1.0);
            target.y = Math.asin(temp);
            target.z = Math.atan2(2.0 * (this.w * this.z + this.x * this.y), 1.0 - 2.0 * (this.y * this.y + this.z * this.z));
            target.x /= egret3d.MathUtil.DEGREES_TO_RADIANS;
            target.y /= egret3d.MathUtil.DEGREES_TO_RADIANS;
            target.z /= egret3d.MathUtil.DEGREES_TO_RADIANS;
            return target;
        };
        /**
        * @language en_US
        * Normalises the quaternion object.
        */
        /**
        * @language zh_CN
        * 单位化四元数
        */
        Quaternion.prototype.normalize = function (val) {
            if (val === void 0) { val = 1; }
            var mag = val / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
            this.x *= mag;
            this.y *= mag;
            this.z *= mag;
            this.w *= mag;
        };
        /**
        * @language en_US
        * Used to trace the values of a quaternion.
        *
        * @returns A string representation of the quaternion object.
        */
        /**
        * @language zh_CN
        * 以字符串形式返回四元数的值
        * @returns
        */
        Quaternion.prototype.toString = function () {
            return "{x:" + this.x + " y:" + this.y + " z:" + this.z + " w:" + this.w + "}";
        };
        /**
        * @language en_US
        * Converts the quaternion to a Matrix3D object representing an equivalent rotation.
        * @param target An optional Matrix3D container to store the transformation in. If not provided, a new object is created.
        * @returns A Matrix3D object representing an equivalent rotation.
        */
        /**
        * @language zh_CN
        * 把一个四元数转换成矩阵
        * @param target 返回转换后的矩阵，如果为null就新建一个对象返回
        * @see egret3d.Matrix4_4
        * @returns 返回转换后的矩阵
        */
        Quaternion.prototype.toMatrix3D = function (target) {
            if (target === void 0) { target = null; }
            var rawData = egret3d.MathUtil.RAW_DATA_CONTAINER;
            var xy2 = 2.0 * this.x * this.y, xz2 = 2.0 * this.x * this.z, xw2 = 2.0 * this.x * this.w;
            var yz2 = 2.0 * this.y * this.z, yw2 = 2.0 * this.y * this.w, zw2 = 2.0 * this.z * this.w;
            var xx = this.x * this.x, yy = this.y * this.y, zz = this.z * this.z, ww = this.w * this.w;
            rawData[0] = xx - yy - zz + ww;
            rawData[4] = xy2 - zw2;
            rawData[8] = xz2 + yw2;
            rawData[12] = 0;
            rawData[1] = xy2 + zw2;
            rawData[5] = -xx + yy - zz + ww;
            rawData[9] = yz2 - xw2;
            rawData[13] = 0;
            rawData[2] = xz2 - yw2;
            rawData[6] = yz2 + xw2;
            rawData[10] = -xx - yy + zz + ww;
            rawData[14] = 0;
            rawData[3] = 0.0;
            rawData[7] = 0.0;
            rawData[11] = 0;
            rawData[15] = 1;
            if (!target)
                return new egret3d.Matrix4_4(new Float32Array(rawData));
            target.copyRawDataFrom(rawData);
            return target;
        };
        /**
        * @language en_US
        * Extracts a quaternion rotation matrix out of a given Matrix3D object.
        * @param matrix The Matrix3D out of which the rotation will be extracted.
        */
        /**
        * @language zh_CN
        * 用一个旋转矩阵生成四元数
        * @param matrix 旋转矩阵
        */
        Quaternion.prototype.fromMatrix = function (matrix) {
            var v = matrix.decompose(egret3d.Orientation3D.QUATERNION)[1];
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            this.w = v.w;
        };
        /**
        * @language zh_CN
        * 返回一个把当前四元数取逆后的四元数
        * @param target 如果当前参数为null那么就会new一个新的四元数对象返回
        */
        Quaternion.prototype.inverse = function (target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new Quaternion();
            }
            var norm = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
            if (norm > 0.0) {
                var invNorm = 1.0 / norm;
                target.w = this.w * invNorm;
                target.x = -this.x * invNorm;
                target.y = -this.y * invNorm;
                target.z = -this.z * invNorm;
            }
            return target;
        };
        /**
        * @language en_US
        * Clones the quaternion.
        * @returns An exact duplicate of the current Quaternion.
        */
        /**
        * @language zh_CN
        * 克隆一个四元数
        * @returns 当前四元数复制后返回.
        */
        Quaternion.prototype.clone = function () {
            return new Quaternion(this.x, this.y, this.z, this.w);
        };
        /**
        * @language en_US
        * Rotates a point.
        * @param vector The Vector3D object to be rotated.
        * @param target An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created.
        * @returns A Vector3D object containing the rotated point.
        */
        /**
        * @language zh_CN
        * 旋转一个3量坐标点
        * @param vector 被旋转的对象
        * @param target 旋转后的坐标对象。如果为null，将创建一个新的对象
        * @returns 返回旋转后的坐标对象
        */
        Quaternion.prototype.transformVector = function (vector, target) {
            if (target === void 0) { target = null; }
            var x1, y1, z1, w1;
            var x2 = vector.x, y2 = vector.y, z2 = vector.z;
            if (target === null) {
                target = new egret3d.Vector3D();
            }
            // p*q'
            w1 = -this.x * x2 - this.y * y2 - this.z * z2;
            x1 = this.w * x2 + this.y * z2 - this.z * y2;
            y1 = this.w * y2 - this.x * z2 + this.z * x2;
            z1 = this.w * z2 + this.x * y2 - this.y * x2;
            target.x = -w1 * this.x + x1 * this.w - y1 * this.z + z1 * this.y;
            target.y = -w1 * this.y + x1 * this.z + y1 * this.w - z1 * this.x;
            target.z = -w1 * this.z - x1 * this.y + y1 * this.x + z1 * this.w;
            return target;
        };
        /**
        * @language en_US
        * Copies the data from a quaternion into this instance.
        * @param q The quaternion to copy from.
        */
        /**
        * @language zh_CN
        * 将数据从四元数复制到该实例
        * @param q 被复制的四元数对象
        */
        Quaternion.prototype.copyFrom = function (q) {
            this.x = q.x;
            this.y = q.y;
            this.z = q.z;
            this.w = q.w;
        };
        return Quaternion;
    }());
    egret3d.Quaternion = Quaternion;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Orientation3D
     * @classdesc
     * 定义 Orientation3D 常量。</p>
     * Matrix4_4.decompose 会分 axisAngle、eulerAngles、quaternion这3种类型进行分解。</p>
     * 比如:</p>
     <pre>
     matrix.decompose(Orientation3D.QUATERNION)
     </pre>
     *
     * @see egret3d.Matrix4_4
     * @see egret3d.Quaternion
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Orientation3D = (function () {
        function Orientation3D() {
        }
        /**
        * @language zh_CN
        * 按轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        Orientation3D.AXIS_ANGLE = "axisAngle";
        /**
        * @language zh_CN
        * 按欧拉角旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        Orientation3D.EULER_ANGLES = "eulerAngles";
        /**
        * @language zh_CN
        * 四元数旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        Orientation3D.QUATERNION = "quaternion";
        return Orientation3D;
    }());
    egret3d.Orientation3D = Orientation3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Plane3D
     * @classdesc
     * Plane3D 类 3D空间中的平面表示数据
     * 由a,b,c,d4个分量组成 在三维空间中定义了一个平面 Ax + By + Cz + D = 0
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Plane3D = (function () {
        /**
         * @language en_US
         * Create a Plane3D with ABCD coefficients
         */
        /**
         * @language zh_CN
         * 创建一个平面实例
         * @param a
         * @param b
         * @param c
         * @param d
         */
        function Plane3D(a, b, c, d) {
            if (a === void 0) { a = 0; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 0; }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        }
        /**
         * @language zh_CN
         * 填充平面的各分量的值
         * @param a
         * @param b
         * @param c
         * @param d
         */
        Plane3D.prototype.setTo = function (a, b, c, d) {
            if (a === void 0) { a = 0; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 0; }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        };
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from 3 points in 3d space.
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        /**
         * @language zh_CN
         * 由3个坐标来创建一个3d平面
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        Plane3D.prototype.fromPoints = function (p0, p1, p2) {
            var d1x = p1.x - p0.x;
            var d1y = p1.y - p0.y;
            var d1z = p1.z - p0.z;
            var d2x = p2.x - p0.x;
            var d2y = p2.y - p0.y;
            var d2z = p2.z - p0.z;
            this.a = d1y * d2z - d1z * d2y;
            this.b = d1z * d2x - d1x * d2z;
            this.c = d1x * d2y - d1y * d2x;
            this.d = -(this.a * p0.x + this.b * p0.y + this.c * p0.z);
        };
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
         * @param normal Vector3D
         * @param point  Vector3D
         */
        /**
         * @language zh_CN
         * 由一条normal向量和一个坐标创建一个3d平面
         * @param normal Vector3D
         * @param point  Vector3D
         */
        Plane3D.prototype.fromNormalAndPoint = function (normal, point) {
            this.a = normal.x;
            this.b = normal.y;
            this.c = normal.z;
            this.d = -(this.a * point.x + this.b * point.y + this.c * point.z);
        };
        /**
         * @language en_US
         * Normalize this Plane3D
         * @returns Plane3D This Plane3D.
         */
        /**
         * @language zh_CN
         * 单位化3d平面
         * @returns 返回平面长度
         */
        Plane3D.prototype.normalize = function () {
            var len = Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
            if (len > 0.0) {
                var invLength = 1.0 / len;
                this.a *= invLength;
                this.b *= invLength;
                this.c *= invLength;
                this.d *= invLength;
            }
            return len;
        };
        /**
         * @language en_US
         * Returns the signed distance between this Plane3D and the point p.
         * @param p Vector3D
         * @returns Number
         */
        /**
         * @language zh_CN
         * 计算3d平面到点p的距离
         * @param p Vector3D
         * @returns 返回计算后的距离
         */
        Plane3D.prototype.distance = function (p) {
            return this.a * p.x + this.b * p.y + this.c * p.z + this.d;
        };
        /**
         * @language en_US
         * Classify a point against this Plane3D. (in front, back or intersecting)
         * @param p Vector3D
         * @param epsilon
         * @returns PlaneClassification.FRONT在平面正面
         * PlaneClassification.BACK在平面背面面
         * PlaneClassification.INTERSECT在平面上
         */
        /**
         * @language zh_CN
         * 计算3d平面和点p的空间关系
         * @param p Vector3D
         * @param epsilon 相对偏移值
         * @returns int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
         */
        Plane3D.prototype.classifyPoint = function (p, epsilon) {
            if (epsilon === void 0) { epsilon = 0.01; }
            var dis = this.distance(p);
            if (dis < -epsilon) {
                return egret3d.PlaneClassification.BACK;
            }
            else if (dis > epsilon) {
                return egret3d.PlaneClassification.FRONT;
            }
            return egret3d.PlaneClassification.INTERSECT;
        };
        /**
         * @language zh_CN
         * 当前Plane3D以字符串形式返回
         * @returns string
         */
        Plane3D.prototype.toString = function () {
            return "Plane3D [a:" + this.a + ", b:" + this.b + ", c:" + this.c + ", d:" + this.d + "]";
        };
        // indicates the alignment of the plane
        /**
         * @private
         */
        Plane3D.ALIGN_ANY = 0;
        /**
         * @private
         */
        Plane3D.ALIGN_XY_AXIS = 1;
        /**
         * @private
         */
        Plane3D.ALIGN_YZ_AXIS = 2;
        /**
         * @private
         */
        Plane3D.ALIGN_XZ_AXIS = 3;
        return Plane3D;
    }());
    egret3d.Plane3D = Plane3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Matrix4_4
     * @classdesc
     *
     * Matrix4_4 类表示一个转换矩阵，该矩阵确定三维 (3D) 显示对象的位置和方向。
     * 该矩阵可以执行转换功能，包括平移（沿 x、y 和 z 轴重新定位）、旋转和缩放（调整大小）.
     * Matrix4_4 类还可以执行透视投影，这会将 3D 坐标空间中的点映射到二维 (2D) 视图.
     * 单一矩阵可以将多个转换组合在一起，并一次性对 3D 显示对象应用这些转换.
     * 例如，可以将一个矩阵应用于 3D 坐标，以便依次执行旋转和平移.
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Matrix4_4 = (function () {
        /**
        * @language zh_CN
        * 构造
        * @param datas {number[16]}
        */
        function Matrix4_4(datas) {
            if (datas === void 0) { datas = null; }
            this.result = new Float32Array(16);
            this.m = new Float32Array(16);
            this.oRawData = new Float32Array(16);
            if (datas) {
                this.rawData = datas;
            }
            else
                this.rawData = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
        /**
        * @language en_US
        * Build a lookat matrix. (left-handed)
        * @param eye The eye position.
        * @param at The target position.
        * @param up The up direction.
        */
        /**
        * @language zh_CN
        * 生成一个注视目标的矩阵.
        * @param eye 眼睛的位置.
        * @param at 目标的位置.
        * @param up 向上的方向.
        */
        Matrix4_4.prototype.lookAt = function (eye, at, up) {
            var zaxis = at.subtract(eye);
            zaxis.normalize();
            var xaxis = up.crossProduct(zaxis);
            xaxis.normalize();
            var yaxis = zaxis.crossProduct(xaxis);
            this.rawData[0] = xaxis.x;
            this.rawData[1] = yaxis.x;
            this.rawData[2] = zaxis.x;
            this.rawData[3] = 0;
            this.rawData[4] = xaxis.y;
            this.rawData[5] = yaxis.y;
            this.rawData[6] = zaxis.y;
            this.rawData[7] = 0;
            this.rawData[8] = xaxis.z;
            this.rawData[9] = yaxis.z;
            this.rawData[10] = zaxis.z;
            this.rawData[11] = 0;
            this.rawData[12] = -xaxis.dotProduct(eye);
            this.rawData[13] = -yaxis.dotProduct(eye);
            this.rawData[14] = -zaxis.dotProduct(eye);
            this.rawData[15] = 1;
        };
        Matrix4_4.prototype.multiply = function (mat4) {
            var a = this.rawData, b = mat4.rawData, r = this.result;
            r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
            r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
            r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
            r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
            r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
            r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
            r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
            r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
            r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
            r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
            r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
            r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
            r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
            r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
            r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
            r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
            for (var i = 0; i < 16; i++)
                this.rawData[i] = r[i];
        };
        /**
        * @private
        * @language zh_CN
        */
        Matrix4_4.prototype.perspectiveB = function (fov, aspect, near, far) {
            var y = Math.tan(fov * Math.PI / 360) * near;
            var x = y * aspect;
            return this.frustum(-x, x, -y, y, near, far);
        };
        /**
        * @private
        * @language zh_CN
        */
        Matrix4_4.prototype.frustum = function (l, r, b, t, n, f) {
            var m = this.rawData;
            m[0] = 2 * n / (r - l);
            m[1] = 0;
            m[2] = (r + l) / (r - l);
            m[3] = 0;
            m[4] = 0;
            m[5] = 2 * n / (t - b);
            m[6] = (t + b) / (t - b);
            m[7] = 0;
            m[8] = 0;
            m[9] = 0;
            m[10] = -(f + n) / (f - n);
            m[11] = -2 * f * n / (f - n);
            m[12] = 0;
            m[13] = 0;
            m[14] = -1;
            m[15] = 0;
            return this;
        };
        //public ortho(l: number, r: number, b: number, t: number, n: number, f: number): Matrix4_4 {
        //    var m = this.rawData;
        //    m[0] = 2 / (r - l);
        //    m[1] = 0;
        //    m[2] = 0;
        //    m[3] = -(r + l) / (r - l);
        //    m[4] = 0;
        //    m[5] = 2 / (t - b);
        //    m[6] = 0;
        //    m[7] = -(t + b) / (t - b);
        //    m[8] = 0;
        //    m[9] = 0;
        //    m[10] = -2 / (f - n);
        //    m[11] = -(f + n) / (f - n);
        //    m[12] = 0;
        //    m[13] = 0;
        //    m[14] = 0;
        //    m[15] = 1;
        //    return this;
        //}
        /**
        * @language en_US
        * Build a perspective projection matrix. (left-handed)
        * @param fovy .
        * @param aspect .
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param fovy 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspect 横纵比，在视空间宽度除以高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.perspective = function (fovy, aspect, zn, zf) {
            var angle = fovy * (Math.PI / 180.0);
            var yScale = Math.tan((Math.PI - angle) / 2.0);
            var xScale = yScale / aspect;
            this.rawData[0] = xScale;
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = yScale;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = zf / (zf - zn);
            this.rawData[11] = 1;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = -zn * zf / (zf - zn);
            this.rawData[15] = 0;
        };
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param w screen width.
        * @param h screen height.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param w 屏幕的宽度。
        * @param h 屏幕的高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.ortho = function (w, h, zn, zf) {
            this.rawData[0] = 2 / w;
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = 2 / h;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = 1 / (zf - zn);
            this.rawData[11] = 0;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = zn / (zn - zf);
            this.rawData[15] = 1;
        };
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param l min x.
        * @param r max x.
        * @param b min y.
        * @param t max y.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param l 观察时X轴最小值.
        * @param r 观察时X轴最大值.
        * @param b 观察时Y轴最小值。
        * @param t 观察时Y轴最大值.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.orthoOffCenter = function (l, r, b, t, zn, zf) {
            this.rawData[0] = 2 / (r - 1);
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = 2 / (t - b);
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = 1 / (zf - zn);
            this.rawData[11] = 0;
            this.rawData[12] = (1 + r) / (1 - r);
            this.rawData[13] = (t + b) / (b - t);
            this.rawData[14] = zn / (zn - zf);
            this.rawData[15] = 1;
        };
        /**
        * @language en_US
        * matrix multiply
        * @param lhs .
        */
        /**
        * @language zh_CN
        * 通过将当前 Matrix4_4 对象与另一个 Matrix4_4 对象相乘来前置一个矩阵
        * @param lhs 目标矩阵.
        */
        Matrix4_4.prototype.append = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
            this.rawData[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
            this.rawData[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
            this.rawData[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
            this.rawData[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
            this.rawData[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
            this.rawData[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
            this.rawData[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
            this.rawData[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
            this.rawData[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
            this.rawData[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
            this.rawData[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
            this.rawData[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
            this.rawData[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
            this.rawData[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
            this.rawData[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
        };
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns
        */
        /**
        * @language zh_CN
        * 矩阵相加.
        * @param lhs 目标矩阵.
        * @returns 相加后的结果.
        */
        Matrix4_4.prototype.add = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 + m211;
            this.rawData[1] = m112 + m212;
            this.rawData[2] = m113 + m213;
            this.rawData[3] = m114 + m214;
            this.rawData[4] = m121 + m221;
            this.rawData[5] = m122 + m222;
            this.rawData[6] = m123 + m223;
            this.rawData[7] = m124 + m224;
            this.rawData[8] = m131 + m231;
            this.rawData[9] = m132 + m232;
            this.rawData[10] = m133 + m233;
            this.rawData[11] = m134 + m234;
            this.rawData[12] = m141 + m241;
            this.rawData[13] = m142 + m242;
            this.rawData[14] = m143 + m243;
            this.rawData[15] = m144 + m244;
            return this;
        };
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns reslut
        */
        /**
        * @language zh_CN
        * 矩阵相减.
        * @param lhs 目标矩阵.
        * @returns 相加减的结果.
        */
        Matrix4_4.prototype.sub = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 - m211;
            this.rawData[1] = m112 - m212;
            this.rawData[2] = m113 - m213;
            this.rawData[3] = m114 - m214;
            this.rawData[4] = m121 - m221;
            this.rawData[5] = m122 - m222;
            this.rawData[6] = m123 - m223;
            this.rawData[7] = m124 - m224;
            this.rawData[8] = m131 - m231;
            this.rawData[9] = m132 - m232;
            this.rawData[10] = m133 - m233;
            this.rawData[11] = m134 - m234;
            this.rawData[12] = m141 - m241;
            this.rawData[13] = m142 - m242;
            this.rawData[14] = m143 - m243;
            this.rawData[15] = m144 - m244;
            return this;
        };
        /**
        * @language zh_CN
        * 矩阵乘分量.
        * @param v .
        * @returns 返回一个相乘后的结果 矩阵.
        */
        Matrix4_4.prototype.mult = function (v) {
            this.rawData[0] *= v;
            this.rawData[1] *= v;
            this.rawData[2] *= v;
            this.rawData[3] *= v;
            this.rawData[4] *= v;
            this.rawData[5] *= v;
            this.rawData[6] *= v;
            this.rawData[7] *= v;
            this.rawData[8] *= v;
            this.rawData[9] *= v;
            this.rawData[10] *= v;
            this.rawData[11] *= v;
            this.rawData[12] *= v;
            this.rawData[13] *= v;
            this.rawData[14] *= v;
            this.rawData[15] *= v;
            return this;
        };
        /**
        * @language zh_CN
        * 创建一个欧拉旋转矩阵.
        * @param x 绕x轴旋转角度.
        * @param y 绕y轴旋转角度.
        * @param z 绕z轴旋转角度.
        */
        Matrix4_4.prototype.rotation = function (x, y, z) {
            this.appendRotation(x, egret3d.Vector3D.X_AXIS);
            this.appendRotation(y, egret3d.Vector3D.Y_AXIS);
            this.appendRotation(z, egret3d.Vector3D.Z_AXIS);
        };
        /**
        * @language zh_CN
        * 当前矩阵乘 (按axis轴旋转degrees角度创建出来的矩阵)
        * @param degrees 旋转角度.
        * @param axis 绕axis轴旋转角度.
        */
        Matrix4_4.prototype.appendRotation = function (degrees, axis) {
            var m = Matrix4_4.getAxisRotation(axis.x, axis.y, axis.z, degrees);
            ///this.append(m);
            var tmp = new Matrix4_4();
            var s, c;
            var angle = degrees * egret3d.MathUtil.DEGREES_TO_RADIANS;
            s = Math.sin(angle);
            c = Math.cos(angle);
            if (axis.x == 1) {
                tmp.rawData[0] = 1.0;
                tmp.rawData[1] = 0.0;
                tmp.rawData[2] = 0.0;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = 0.0;
                tmp.rawData[5] = c;
                tmp.rawData[6] = s;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = 0.0;
                tmp.rawData[9] = -s;
                tmp.rawData[10] = c;
                tmp.rawData[7] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            if (axis.y == 1) {
                tmp.rawData[0] = c;
                tmp.rawData[1] = 0.0;
                tmp.rawData[2] = -s;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = 0.0;
                tmp.rawData[5] = 1.0;
                tmp.rawData[6] = 0.0;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = s;
                tmp.rawData[9] = 0.0;
                tmp.rawData[10] = c;
                tmp.rawData[11] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            if (axis.z == 1) {
                tmp.rawData[0] = c;
                tmp.rawData[1] = s;
                tmp.rawData[2] = 0.0;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = -s;
                tmp.rawData[5] = c;
                tmp.rawData[6] = 0.0;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = 0.0;
                tmp.rawData[9] = 0.0;
                tmp.rawData[10] = 1.0;
                tmp.rawData[11] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            this.append(tmp);
        };
        /**
        * @language zh_CN
        * 生成一个缩放矩阵
        * @param xScale x轴缩放
        * @param yScale y轴缩放
        * @param zScale z轴缩放
        */
        Matrix4_4.prototype.appendScale = function (xScale, yScale, zScale) {
            this.rawData[0] = xScale;
            this.rawData[1] = 0.0;
            this.rawData[2] = 0.0;
            this.rawData[4] = 0.0;
            this.rawData[5] = yScale;
            this.rawData[6] = 0.0;
            this.rawData[8] = 0.0;
            this.rawData[9] = 0.0;
            this.rawData[10] = zScale;
        };
        /**
        * @language zh_CN
        * 加上一个平移矩阵
        * @param x x轴坐标
        * @param y y轴坐标
        * @param z z轴坐标
        */
        Matrix4_4.prototype.appendTranslation = function (x, y, z) {
            this.rawData[12] += x;
            this.rawData[13] += y;
            this.rawData[14] += z;
        };
        /**
        * @language zh_CN
        * 返回一个当前矩阵的克隆矩阵
        * @returns 克隆后的矩阵
        */
        Matrix4_4.prototype.clone = function () {
            var ret = new Matrix4_4();
            ret.copyFrom(this);
            return ret;
        };
        /**
        * @language zh_CN
        * 给当前矩阵其中一行赋值
        * @param column 拷贝的行
        * @param vector3D 拷贝的值
        */
        Matrix4_4.prototype.copyColumnFrom = function (column, vector3D) {
            switch (column) {
                case 0:
                    this.rawData[0] = vector3D.x;
                    this.rawData[1] = vector3D.y;
                    this.rawData[2] = vector3D.z;
                    this.rawData[3] = vector3D.w;
                    break;
                case 1:
                    this.rawData[4] = vector3D.x;
                    this.rawData[5] = vector3D.y;
                    this.rawData[6] = vector3D.z;
                    this.rawData[7] = vector3D.w;
                    break;
                case 2:
                    this.rawData[8] = vector3D.x;
                    this.rawData[9] = vector3D.y;
                    this.rawData[10] = vector3D.z;
                    this.rawData[11] = vector3D.w;
                    break;
                case 3:
                    this.rawData[12] = vector3D.x;
                    this.rawData[13] = vector3D.y;
                    this.rawData[14] = vector3D.z;
                    this.rawData[15] = vector3D.w;
                    break;
                default:
            }
        };
        /**
        * @language zh_CN
        * 拷贝矩阵中的其中一行 把值存在vector3D.
        * @param column 拷贝的行
        * @param vector3D 拷贝存值目标
        */
        Matrix4_4.prototype.copyRowTo = function (column, vector3D) {
            switch (column) {
                case 0:
                    vector3D.x = this.rawData[0];
                    vector3D.y = this.rawData[1];
                    vector3D.z = this.rawData[2];
                    vector3D.w = this.rawData[3];
                    break;
                case 1:
                    vector3D.x = this.rawData[4];
                    vector3D.y = this.rawData[5];
                    vector3D.z = this.rawData[6];
                    vector3D.w = this.rawData[7];
                    break;
                case 2:
                    vector3D.x = this.rawData[8];
                    vector3D.y = this.rawData[9];
                    vector3D.z = this.rawData[10];
                    vector3D.w = this.rawData[11];
                    break;
                case 3:
                    vector3D.x = this.rawData[12];
                    vector3D.y = this.rawData[13];
                    vector3D.z = this.rawData[14];
                    vector3D.w = this.rawData[15];
                    break;
                default:
            }
        };
        /**
        * @language zh_CN
        * 把一个矩阵的值赋给当前矩阵.
        * @param sourceMatrix3D 源矩阵.
        * @returns 返回当前矩阵
        */
        Matrix4_4.prototype.copyFrom = function (sourceMatrix3D) {
            var len = sourceMatrix3D.rawData.length;
            for (var c = 0; c < len; c++)
                this.rawData[c] = sourceMatrix3D.rawData[c];
            return this;
        };
        /**
        * @language zh_CN
        * 把一个 float 数组赋值给当前矩阵.
        * @param vector 源数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        Matrix4_4.prototype.copyRawDataFrom = function (vector, index, transpose) {
            if (index === void 0) { index = 0; }
            if (transpose === void 0) { transpose = false; }
            if (transpose)
                this.transpose();
            var len = vector.length - index;
            for (var c = 0; c < len; c++)
                this.rawData[c] = vector[c + index];
            if (transpose)
                this.transpose();
        };
        /**
        * @language zh_CN
        * 把当前矩阵的值拷贝给一个 float 数组.
        * @param vector 目标数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        Matrix4_4.prototype.copyRawDataTo = function (vector, index, transpose) {
            if (index === void 0) { index = 0; }
            if (transpose === void 0) { transpose = false; }
            if (transpose)
                this.transpose();
            var len = this.rawData.length;
            for (var c = 0; c < len; c++)
                vector[c + index] = this.rawData[c];
            if (transpose)
                this.transpose();
        };
        /**
        * @language zh_CN
        * 给当前矩阵的某一列 赋值
        * @param col 列
        * @param vector3D 值来源
        */
        Matrix4_4.prototype.copyColFrom = function (col, vector3D) {
            switch (col) {
                case 0:
                    this.rawData[0] = vector3D.x;
                    this.rawData[4] = vector3D.y;
                    this.rawData[8] = vector3D.z;
                    this.rawData[12] = vector3D.w;
                    break;
                case 1:
                    this.rawData[1] = vector3D.x;
                    this.rawData[5] = vector3D.y;
                    this.rawData[9] = vector3D.z;
                    this.rawData[13] = vector3D.w;
                    break;
                case 2:
                    this.rawData[2] = vector3D.x;
                    this.rawData[6] = vector3D.y;
                    this.rawData[10] = vector3D.z;
                    this.rawData[14] = vector3D.w;
                    break;
                case 3:
                    this.rawData[3] = vector3D.x;
                    this.rawData[7] = vector3D.y;
                    this.rawData[11] = vector3D.z;
                    this.rawData[15] = vector3D.w;
                    break;
                default:
                    new Error("no more raw!");
            }
        };
        /**
        * @language zh_CN
        * 拷贝当前矩阵的某一列
        * @param col 列
        * @param vector3D 拷贝目标
        */
        Matrix4_4.prototype.copyColTo = function (col, vector3D) {
            switch (col) {
                case 0:
                    vector3D.x = this.rawData[0];
                    vector3D.y = this.rawData[4];
                    vector3D.z = this.rawData[8];
                    vector3D.w = this.rawData[12];
                    break;
                case 1:
                    vector3D.x = this.rawData[1];
                    vector3D.y = this.rawData[5];
                    vector3D.z = this.rawData[9];
                    vector3D.w = this.rawData[13];
                    break;
                case 2:
                    vector3D.x = this.rawData[2];
                    vector3D.y = this.rawData[6];
                    vector3D.z = this.rawData[10];
                    vector3D.w = this.rawData[14];
                    break;
                case 3:
                    vector3D.x = this.rawData[3];
                    vector3D.y = this.rawData[7];
                    vector3D.z = this.rawData[11];
                    vector3D.w = this.rawData[15];
                    break;
                default:
                    new Error("no more raw!");
            }
        };
        /**
        * @language zh_CN
        * 拷贝当前矩阵
        * @param dest 拷贝目标
        */
        Matrix4_4.prototype.copyToMatrix3D = function (dest) {
            dest.rawData = this.rawData.slice(0);
        };
        /**
        * @language zh_CN
        * 分解当前矩阵
        * @param orientationStyle 分解类型
        * @returns Vector3D[3] pos rot scale
        */
        Matrix4_4.prototype.decompose = function (orientationStyle) {
            if (orientationStyle === void 0) { orientationStyle = "eulerAngles"; }
            var q;
            var vec = [];
            var m = this.clone();
            var mr = m.rawData;
            var pos = new egret3d.Vector3D(mr[12], mr[13], mr[14]);
            mr[12] = 0;
            mr[13] = 0;
            mr[14] = 0;
            var scale = new egret3d.Vector3D();
            scale.x = Math.sqrt(mr[0] * mr[0] + mr[1] * mr[1] + mr[2] * mr[2]);
            scale.y = Math.sqrt(mr[4] * mr[4] + mr[5] * mr[5] + mr[6] * mr[6]);
            scale.z = Math.sqrt(mr[8] * mr[8] + mr[9] * mr[9] + mr[10] * mr[10]);
            if (mr[0] * (mr[5] * mr[10] - mr[6] * mr[9]) - mr[1] * (mr[4] * mr[10] - mr[6] * mr[8]) + mr[2] * (mr[4] * mr[9] - mr[5] * mr[8]) < 0)
                scale.z = -scale.z;
            mr[0] /= scale.x;
            mr[1] /= scale.x;
            mr[2] /= scale.x;
            mr[4] /= scale.y;
            mr[5] /= scale.y;
            mr[6] /= scale.y;
            mr[8] /= scale.z;
            mr[9] /= scale.z;
            mr[10] /= scale.z;
            var rot = new egret3d.Vector3D();
            switch (orientationStyle) {
                case egret3d.Orientation3D.AXIS_ANGLE:
                    rot.w = Math.acos((mr[0] + mr[5] + mr[10] - 1) / 2);
                    var len = Math.sqrt((mr[6] - mr[9]) * (mr[6] - mr[9]) + (mr[8] - mr[2]) * (mr[8] - mr[2]) + (mr[1] - mr[4]) * (mr[1] - mr[4]));
                    rot.x = (mr[6] - mr[9]) / len;
                    rot.y = (mr[8] - mr[2]) / len;
                    rot.z = (mr[1] - mr[4]) / len;
                    break;
                case egret3d.Orientation3D.QUATERNION:
                    var tr = mr[0] + mr[5] + mr[10];
                    if (tr > 0) {
                        rot.w = Math.sqrt(1 + tr) / 2;
                        rot.x = (mr[6] - mr[9]) / (4 * rot.w);
                        rot.y = (mr[8] - mr[2]) / (4 * rot.w);
                        rot.z = (mr[1] - mr[4]) / (4 * rot.w);
                    }
                    else if ((mr[0] > mr[5]) && (mr[0] > mr[10])) {
                        rot.x = Math.sqrt(1 + mr[0] - mr[5] - mr[10]) / 2;
                        rot.w = (mr[6] - mr[9]) / (4 * rot.x);
                        rot.y = (mr[1] + mr[4]) / (4 * rot.x);
                        rot.z = (mr[8] + mr[2]) / (4 * rot.x);
                    }
                    else if (mr[5] > mr[10]) {
                        rot.y = Math.sqrt(1 + mr[5] - mr[0] - mr[10]) / 2;
                        rot.x = (mr[1] + mr[4]) / (4 * rot.y);
                        rot.w = (mr[8] - mr[2]) / (4 * rot.y);
                        rot.z = (mr[6] + mr[9]) / (4 * rot.y);
                    }
                    else {
                        rot.z = Math.sqrt(1 + mr[10] - mr[0] - mr[5]) / 2;
                        rot.x = (mr[8] + mr[2]) / (4 * rot.z);
                        rot.y = (mr[6] + mr[9]) / (4 * rot.z);
                        rot.w = (mr[1] - mr[4]) / (4 * rot.z);
                    }
                    break;
                case egret3d.Orientation3D.EULER_ANGLES:
                    rot.y = Math.asin(-mr[2]);
                    if (mr[2] != 1 && mr[2] != -1) {
                        rot.x = Math.atan2(mr[6], mr[10]);
                        rot.z = Math.atan2(mr[1], mr[0]);
                    }
                    else {
                        rot.z = 0;
                        rot.x = Math.atan2(mr[4], mr[5]);
                    }
                    break;
            }
            vec.push(pos);
            vec.push(rot);
            vec.push(scale);
            return vec;
        };
        /**
        * @language zh_CN
        * 当前矩阵变换一个向量
        * @param v 要变换的向量
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 变换后的向量
        */
        Matrix4_4.prototype.deltaTransformVector = function (v, target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new egret3d.Vector3D();
            }
            var x = v.x;
            var y = v.y;
            var z = v.z;
            target.x = x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8];
            target.y = x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9];
            target.z = x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10];
            target.w = x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11];
            return target;
        };
        /**
        * @language zh_CN
        * 单位化当前矩阵
        */
        Matrix4_4.prototype.identity = function () {
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[11] = 0;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = 0;
            this.rawData[0] = 1;
            this.rawData[5] = 1;
            this.rawData[10] = 1;
            this.rawData[15] = 1;
        };
        /**
        * @language zh_CN
        * 填充当前矩阵
        * @param value 填充的值
        */
        Matrix4_4.prototype.fill = function (value) {
            this.rawData[1] = value;
            this.rawData[2] = value;
            this.rawData[3] = value;
            this.rawData[4] = value;
            this.rawData[6] = value;
            this.rawData[7] = value;
            this.rawData[8] = value;
            this.rawData[9] = value;
            this.rawData[11] = value;
            this.rawData[12] = value;
            this.rawData[13] = value;
            this.rawData[14] = value;
            this.rawData[0] = value;
            this.rawData[5] = value;
            this.rawData[10] = value;
            this.rawData[15] = value;
        };
        /**
        * @language zh_CN
        * 当前矩阵求逆
        */
        Matrix4_4.prototype.invers33 = function () {
            /// Invert a 3x3 using cofactors.  This is about 8 times faster than
            /// the Numerical Recipes code which uses Gaussian elimination.
            var rkInverse_00 = this.rawData[5] * this.rawData[10] - this.rawData[9] * this.rawData[6];
            var rkInverse_01 = this.rawData[8] * this.rawData[6] - this.rawData[4] * this.rawData[10];
            var rkInverse_02 = this.rawData[4] * this.rawData[9] - this.rawData[8] * this.rawData[5];
            var rkInverse_10 = this.rawData[9] * this.rawData[2] - this.rawData[1] * this.rawData[10];
            var rkInverse_11 = this.rawData[0] * this.rawData[10] - this.rawData[8] * this.rawData[2];
            var rkInverse_12 = this.rawData[8] * this.rawData[1] - this.rawData[0] * this.rawData[9];
            var rkInverse_20 = this.rawData[1] * this.rawData[6] - this.rawData[5] * this.rawData[2];
            var rkInverse_21 = this.rawData[4] * this.rawData[2] - this.rawData[0] * this.rawData[6];
            var rkInverse_22 = this.rawData[0] * this.rawData[5] - this.rawData[4] * this.rawData[1];
            var fDet = this.rawData[0] * rkInverse_00 +
                this.rawData[4] * rkInverse_10 +
                this.rawData[8] * rkInverse_20;
            if (Math.abs(fDet) > 0.00000000001) {
                var fInvDet = 1.0 / fDet;
                this.rawData[0] = fInvDet * rkInverse_00;
                this.rawData[4] = fInvDet * rkInverse_01;
                this.rawData[8] = fInvDet * rkInverse_02;
                this.rawData[1] = fInvDet * rkInverse_10;
                this.rawData[5] = fInvDet * rkInverse_11;
                this.rawData[9] = fInvDet * rkInverse_12;
                this.rawData[2] = fInvDet * rkInverse_20;
                this.rawData[6] = fInvDet * rkInverse_21;
                this.rawData[10] = fInvDet * rkInverse_22;
            }
        };
        /**
        * @language zh_CN
        * 当前矩阵求逆
        * @returns 是否能求逆
        */
        Matrix4_4.prototype.invert = function () {
            var d = this.determinant;
            var invertable = Math.abs(d) > 0.00000000001;
            if (invertable) {
                d = 1 / d;
                var m11 = this.rawData[0];
                var m21 = this.rawData[4];
                var m31 = this.rawData[8];
                var m41 = this.rawData[12];
                var m12 = this.rawData[1];
                var m22 = this.rawData[5];
                var m32 = this.rawData[9];
                var m42 = this.rawData[13];
                var m13 = this.rawData[2];
                var m23 = this.rawData[6];
                var m33 = this.rawData[10];
                var m43 = this.rawData[14];
                var m14 = this.rawData[3];
                var m24 = this.rawData[7];
                var m34 = this.rawData[11];
                var m44 = this.rawData[15];
                this.rawData[0] = d * (m22 * (m33 * m44 - m43 * m34) - m32 * (m23 * m44 - m43 * m24) + m42 * (m23 * m34 - m33 * m24));
                this.rawData[1] = -d * (m12 * (m33 * m44 - m43 * m34) - m32 * (m13 * m44 - m43 * m14) + m42 * (m13 * m34 - m33 * m14));
                this.rawData[2] = d * (m12 * (m23 * m44 - m43 * m24) - m22 * (m13 * m44 - m43 * m14) + m42 * (m13 * m24 - m23 * m14));
                this.rawData[3] = -d * (m12 * (m23 * m34 - m33 * m24) - m22 * (m13 * m34 - m33 * m14) + m32 * (m13 * m24 - m23 * m14));
                this.rawData[4] = -d * (m21 * (m33 * m44 - m43 * m34) - m31 * (m23 * m44 - m43 * m24) + m41 * (m23 * m34 - m33 * m24));
                this.rawData[5] = d * (m11 * (m33 * m44 - m43 * m34) - m31 * (m13 * m44 - m43 * m14) + m41 * (m13 * m34 - m33 * m14));
                this.rawData[6] = -d * (m11 * (m23 * m44 - m43 * m24) - m21 * (m13 * m44 - m43 * m14) + m41 * (m13 * m24 - m23 * m14));
                this.rawData[7] = d * (m11 * (m23 * m34 - m33 * m24) - m21 * (m13 * m34 - m33 * m14) + m31 * (m13 * m24 - m23 * m14));
                this.rawData[8] = d * (m21 * (m32 * m44 - m42 * m34) - m31 * (m22 * m44 - m42 * m24) + m41 * (m22 * m34 - m32 * m24));
                this.rawData[9] = -d * (m11 * (m32 * m44 - m42 * m34) - m31 * (m12 * m44 - m42 * m14) + m41 * (m12 * m34 - m32 * m14));
                this.rawData[10] = d * (m11 * (m22 * m44 - m42 * m24) - m21 * (m12 * m44 - m42 * m14) + m41 * (m12 * m24 - m22 * m14));
                this.rawData[11] = -d * (m11 * (m22 * m34 - m32 * m24) - m21 * (m12 * m34 - m32 * m14) + m31 * (m12 * m24 - m22 * m14));
                this.rawData[12] = -d * (m21 * (m32 * m43 - m42 * m33) - m31 * (m22 * m43 - m42 * m23) + m41 * (m22 * m33 - m32 * m23));
                this.rawData[13] = d * (m11 * (m32 * m43 - m42 * m33) - m31 * (m12 * m43 - m42 * m13) + m41 * (m12 * m33 - m32 * m13));
                this.rawData[14] = -d * (m11 * (m22 * m43 - m42 * m23) - m21 * (m12 * m43 - m42 * m13) + m41 * (m12 * m23 - m22 * m13));
                this.rawData[15] = d * (m11 * (m22 * m33 - m32 * m23) - m21 * (m12 * m33 - m32 * m13) + m31 * (m12 * m23 - m22 * m13));
            }
            return invertable;
        };
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param pos  位移
        * @param scale 缩放
        * @param rot 旋转
        */
        Matrix4_4.prototype.makeTransform = function (pos, scale, rot) {
            rot.toMatrix3D(egret3d.MathUtil.CALCULATION_MATRIX);
            this.rawData[0] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[0] * scale.x;
            this.rawData[1] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[1] * scale.y;
            this.rawData[2] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[2] * scale.z;
            this.rawData[3] = 0;
            this.rawData[4] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[4] * scale.x;
            this.rawData[5] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[5] * scale.y;
            this.rawData[6] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[6] * scale.z;
            this.rawData[7] = 0;
            this.rawData[8] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[8] * scale.x;
            this.rawData[9] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[9] * scale.y;
            this.rawData[10] = egret3d.MathUtil.CALCULATION_MATRIX.rawData[10] * scale.z;
            this.rawData[11] = 0;
            this.rawData[12] = pos.x;
            this.rawData[13] = pos.y;
            this.rawData[14] = pos.z;
            this.rawData[15] = 1;
        };
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param components Vector3D[3] 位移 旋转 缩放
        * @returns 生成是否成功
        */
        Matrix4_4.prototype.recompose = function (components) {
            if (components.length < 3)
                return false;
            this.identity();
            this.appendScale(components[2].x, components[2].y, components[2].z);
            var angle;
            angle = -components[1].x * egret3d.MathUtil.DEGREES_TO_RADIANS;
            egret3d.MathUtil.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([1, 0, 0, 0, 0, Math.cos(angle), -Math.sin(angle), 0, 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 0]));
            this.append(egret3d.MathUtil.CALCULATION_MATRIX);
            angle = -components[1].y * egret3d.MathUtil.DEGREES_TO_RADIANS;
            egret3d.MathUtil.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([Math.cos(angle), 0, Math.sin(angle), 0, 0, 1, 0, 0, -Math.sin(angle), 0, Math.cos(angle), 0, 0, 0, 0, 0]));
            this.append(egret3d.MathUtil.CALCULATION_MATRIX);
            angle = -components[1].z * egret3d.MathUtil.DEGREES_TO_RADIANS;
            egret3d.MathUtil.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([Math.cos(angle), -Math.sin(angle), 0, 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]));
            this.append(egret3d.MathUtil.CALCULATION_MATRIX);
            this.rawData[12] = components[0].x;
            this.rawData[13] = components[0].y;
            this.rawData[14] = components[0].z;
            this.rawData[15] = 1;
            return true;
        };
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D向量
        * @param v 变换的向量
        * @param target 如果当前参数为null那么就会new一个新的Vector3D返回
        * @returns 变换后的向量
        */
        Matrix4_4.prototype.transformVector = function (v, target) {
            if (target === void 0) { target = null; }
            if (!target) {
                target = new egret3d.Vector3D();
            }
            var x = v.x;
            var y = v.y;
            var z = v.z;
            target.x = x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8] + this.rawData[12];
            target.y = x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9] + this.rawData[13];
            target.z = x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10] + this.rawData[14];
            target.w = x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11] + this.rawData[15];
            return target;
        };
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D平面
        * @param plane 变换的平面
        * @returns 变换后的平面
        */
        Matrix4_4.prototype.transformPlane = function (plane) {
            var mat = new Matrix4_4();
            mat.copyFrom(this);
            mat.invert();
            mat.transpose();
            var v = new egret3d.Vector3D(plane.a, plane.b, plane.c, plane.d);
            v.copyFrom(mat.transformVector(v));
            var p = new egret3d.Plane3D();
            p.a = v.x;
            p.b = v.y;
            p.c = v.z;
            p.d = v.w / Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
            return p;
        };
        /**
        * @language zh_CN
        * 当前矩阵转置
        */
        Matrix4_4.prototype.transpose = function () {
            for (var i = 0; i < this.oRawData.length; i++) {
                this.oRawData[i] = this.rawData[i];
            }
            this.rawData[1] = this.oRawData[4];
            this.rawData[2] = this.oRawData[8];
            this.rawData[3] = this.oRawData[12];
            this.rawData[4] = this.oRawData[1];
            this.rawData[6] = this.oRawData[9];
            this.rawData[7] = this.oRawData[13];
            this.rawData[8] = this.oRawData[2];
            this.rawData[9] = this.oRawData[6];
            this.rawData[11] = this.oRawData[14];
            this.rawData[12] = this.oRawData[3];
            this.rawData[13] = this.oRawData[7];
            this.rawData[14] = this.oRawData[11];
        };
        /**
        * @language zh_CN
        * 生成一个(以x,y,z为中心轴旋转degrees角度)的矩阵
        * @param x 中心轴的x
        * @param y 中心轴的y
        * @param z 中心轴的z
        * @param degrees 旋转角度
        */
        Matrix4_4.getAxisRotation = function (x, y, z, degrees) {
            var m = new Matrix4_4();
            var rad = degrees * (Math.PI / 180);
            var c = Math.cos(rad);
            var s = Math.sin(rad);
            var t = 1 - c;
            var tmp1, tmp2;
            m.rawData[0] = c + x * x * t;
            m.rawData[5] = c + y * y * t;
            m.rawData[10] = c + z * z * t;
            tmp1 = x * y * t;
            tmp2 = z * s;
            m.rawData[1] = tmp1 + tmp2;
            m.rawData[4] = tmp1 - tmp2;
            tmp1 = x * z * t;
            tmp2 = y * s;
            m.rawData[8] = tmp1 + tmp2;
            m.rawData[2] = tmp1 - tmp2;
            tmp1 = y * z * t;
            tmp2 = x * s;
            m.rawData[9] = tmp1 - tmp2;
            m.rawData[6] = tmp1 + tmp2;
            return m;
        };
        Object.defineProperty(Matrix4_4.prototype, "determinant", {
            /**
            * @language zh_CN
            * 返回矩阵行列式
            *
            * @returns 行列式值
            */
            get: function () {
                return ((this.rawData[0] * this.rawData[5] - this.rawData[4] * this.rawData[1]) * (this.rawData[10] * this.rawData[15] - this.rawData[14] * this.rawData[11]) - (this.rawData[0] * this.rawData[9] - this.rawData[8] * this.rawData[1]) * (this.rawData[6] * this.rawData[15] - this.rawData[14] * this.rawData[7]) + (this.rawData[0] * this.rawData[13] - this.rawData[12] * this.rawData[1]) * (this.rawData[6] * this.rawData[11] - this.rawData[10] * this.rawData[7]) + (this.rawData[4] * this.rawData[9] - this.rawData[8] * this.rawData[5]) * (this.rawData[2] * this.rawData[15] - this.rawData[14] * this.rawData[3]) - (this.rawData[4] * this.rawData[13] - this.rawData[12] * this.rawData[5]) * (this.rawData[2] * this.rawData[11] - this.rawData[10] * this.rawData[3]) + (this.rawData[8] * this.rawData[13] - this.rawData[12] * this.rawData[9]) * (this.rawData[2] * this.rawData[7] - this.rawData[6] * this.rawData[3]));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Matrix4_4.prototype, "position", {
            /**
            * @language zh_CN
            * 返回矩阵位移
            *
            * @returns 位移
            */
            get: function () {
                return new egret3d.Vector3D(this.rawData[12], this.rawData[13], this.rawData[14]);
            },
            /**
            * @language zh_CN
            * 设置矩阵位移
            *
            * @param value 位移
            */
            set: function (value) {
                this.rawData[12] = value.x;
                this.rawData[13] = value.y;
                this.rawData[14] = value.z;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Matrix4_4.prototype, "scale", {
            /**
            * @language zh_CN
            * 返回矩阵缩放
            *
            * @returns 缩放
            */
            get: function () {
                return new egret3d.Vector3D(this.rawData[0], this.rawData[5], this.rawData[10]);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 以字符串返回矩阵的值
        *
        * @returns 字符
        */
        Matrix4_4.prototype.toString = function () {
            return "matrix3d(" + Math.round(this.rawData[0] * 1000) / 1000 + "," + Math.round(this.rawData[1] * 1000) / 1000 + "," + Math.round(this.rawData[2] * 1000) / 1000 + "," + Math.round(this.rawData[3] * 1000) / 1000 + "," + Math.round(this.rawData[4] * 1000) / 1000 + "," + Math.round(this.rawData[5] * 1000) / 1000 + "," + Math.round(this.rawData[6] * 1000) / 1000 + "," + Math.round(this.rawData[7] * 1000) / 1000 + "," + Math.round(this.rawData[8] * 1000) / 1000 + "," + Math.round(this.rawData[9] * 1000) / 1000 + "," + Math.round(this.rawData[10] * 1000) / 1000 + "," + Math.round(this.rawData[11] * 1000) / 1000 + "," + Math.round(this.rawData[12] * 1000) / 1000 + "," + Math.round(this.rawData[13] * 1000) / 1000 + "," + Math.round(this.rawData[14] * 1000) / 1000 + "," + Math.round(this.rawData[15] * 1000) / 1000 + ")";
        };
        /**
        * @language zh_CN
        * 求两个矩阵之间的差值
        * @param m0 矩阵0
        * @param m1 矩阵1
        * @param t 时间差 0.0 - 1.0
        */
        Matrix4_4.prototype.lerp = function (m0, m1, t) {
            ///t(m1 - m0) + m0
            this.copyFrom(m1).sub(m0).mult(t).add(m0);
        };
        return Matrix4_4;
    }());
    egret3d.Matrix4_4 = Matrix4_4;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.EyesMatrix
     * @classdesc
     * 可使用 EyesMatrix 类 对左，右眼睛矩阵的操作
     * 它会在摄像机的位置做一个左 右偏移 模拟出眼睛的矩阵
     * @version Egret 3.0
     * @platform Web,Native
     */
    var EyesMatrix = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function EyesMatrix() {
            this.eyePosition = new egret3d.Vector3D();
            this.eyeRotation = new egret3d.Vector3D(0, 1, 0);
            this.eyeSpace = 1.0;
            this.eyeFocalLength = 180;
            this.leftPos = new egret3d.Vector3D();
            this.rightPos = new egret3d.Vector3D();
            this.targetPos = new egret3d.Vector3D(0.0, 0.0, this.eyeFocalLength);
            this.lookAtPos = new egret3d.Vector3D();
            this.quaternion = new egret3d.Quaternion();
            this.leftEyeMatrix = new egret3d.Matrix4_4();
            this.rightEyeMatrix = new egret3d.Matrix4_4();
        }
        /**
        * @language zh_CN
        * 数据更新
        * @param matrix 当前相机矩阵
        */
        EyesMatrix.prototype.updte = function (matrix) {
            /// this.leftEyeMatrix = matrix;
            /// this.rightEyeMatrix = matrix;
            //////this.leftEyeMatrix.copyFrom(matrix);
            //////this.rightEyeMatrix.copyFrom(matrix);
            /// return;
            this.targetPos.z = this.eyeFocalLength;
            this.eyePosition = matrix.position;
            this.quaternion.fromMatrix(matrix);
            ///this.quaternion.toEulerAngles(this.eyeRotation);
            ///this.eyeRotation.normalize();
            this.leftEyeMatrix.copyRawDataFrom(matrix.rawData);
            this.rightEyeMatrix.copyRawDataFrom(matrix.rawData);
            this.leftEyeMatrix.appendTranslation(-this.eyeSpace * 0.5, 0.0, 0.0);
            this.rightEyeMatrix.appendTranslation(this.eyeSpace * 0.5, 0.0, 0.0);
            /// this.quaternion.rotatePoint(this.targetPos, this.lookAtPos);
            ///this.leftEyeMatrix.lookAt(this.leftEyeMatrix.position, this.lookAtPos, this.eyeRotation);
            /// this.rightEyeMatrix.lookAt(this.rightEyeMatrix.position, this.lookAtPos, this.eyeRotation);
        };
        return EyesMatrix;
    }());
    egret3d.EyesMatrix = EyesMatrix;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PlaneClassification
     * @classdesc
     * 定义 PlaneClassification 常量
     * @version Egret 3.0
     * @platform Web,Native
     */
    var PlaneClassification = (function () {
        function PlaneClassification() {
        }
        PlaneClassification.BACK = 0;
        PlaneClassification.FRONT = 1;
        PlaneClassification.IN = 0;
        PlaneClassification.OUT = 1;
        PlaneClassification.INTERSECT = 2;
        return PlaneClassification;
    }());
    egret3d.PlaneClassification = PlaneClassification;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.MathUtil
    * @classdesc
    * 可使用 MathUtil 类 进行3d矩阵的计算
    * @version Egret 3.0
    * @platform Web,Native
    */
    var MathUtil = (function () {
        function MathUtil() {
        }
        /**
        * @language zh_CN
        * 四元数转矩阵
        * @param quarternion 源四元数
        * @param m 目标矩阵
        * @returns 返回转出矩阵
        */
        MathUtil.quaternion2matrix = function (quarternion, m) {
            if (m === void 0) { m = null; }
            var x = quarternion.x;
            var y = quarternion.y;
            var z = quarternion.z;
            var w = quarternion.w;
            var xx = x * x;
            var xy = x * y;
            var xz = x * z;
            var xw = x * w;
            var yy = y * y;
            var yz = y * z;
            var yw = y * w;
            var zz = z * z;
            var zw = z * w;
            var raw = MathUtil.RAW_DATA_CONTAINER;
            raw[0] = 1 - 2 * (yy + zz);
            raw[1] = 2 * (xy + zw);
            raw[2] = 2 * (xz - yw);
            raw[4] = 2 * (xy - zw);
            raw[5] = 1 - 2 * (xx + zz);
            raw[6] = 2 * (yz + xw);
            raw[8] = 2 * (xz + yw);
            raw[9] = 2 * (yz - xw);
            raw[10] = 1 - 2 * (xx + yy);
            raw[3] = raw[7] = raw[11] = raw[12] = raw[13] = raw[14] = 0;
            raw[15] = 1;
            if (m) {
                m.copyRawDataFrom(raw);
                return m;
            }
            else
                return new egret3d.Matrix4_4(new Float32Array(raw));
        };
        /**
        * @language zh_CN
        * 得到矩阵朝前的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        MathUtil.getForward = function (m, v) {
            if (v === void 0) { v = null; }
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(2, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 得到矩阵朝上的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        MathUtil.getUp = function (m, v) {
            //v ||= new Vector3D(0.0, 0.0, 0.0);
            if (v === void 0) { v = null; }
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(1, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 得到矩阵朝右的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        MathUtil.getRight = function (m, v) {
            if (v === void 0) { v = null; }
            //v ||= new Vector3D(0.0, 0.0, 0.0);
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(0, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 比较两个矩阵是否相同
        * @param m1 矩阵1
        * @param m2 矩阵2
        * @returns 相同返回true
        */
        MathUtil.compare = function (m1, m2) {
            var r1 = MathUtil.RAW_DATA_CONTAINER;
            var r2 = m2.rawData;
            m1.copyRawDataTo(r1);
            for (var i = 0; i < 16; ++i) {
                if (r1[i] != r2[i])
                    return false;
            }
            return true;
        };
        /**
        * @language zh_CN
        * 得到平面的反射矩阵
        * @param plane 反射的面
        * @param target 计算返回的矩阵
        * @returns 返回计算的结果
        */
        MathUtil.reflection = function (plane, target) {
            if (target === void 0) { target = null; }
            if (target === null)
                target = new egret3d.Matrix4_4();
            var a = plane.a, b = plane.b, c = plane.c, d = plane.d;
            var rawData = MathUtil.RAW_DATA_CONTAINER;
            var ab2 = -2 * a * b;
            var ac2 = -2 * a * c;
            var bc2 = -2 * b * c;
            // reflection matrix
            rawData[0] = 1 - 2 * a * a;
            rawData[4] = ab2;
            rawData[8] = ac2;
            rawData[12] = -2 * a * d;
            rawData[1] = ab2;
            rawData[5] = 1 - 2 * b * b;
            rawData[9] = bc2;
            rawData[13] = -2 * b * d;
            rawData[2] = ac2;
            rawData[6] = bc2;
            rawData[10] = 1 - 2 * c * c;
            rawData[14] = -2 * c * d;
            rawData[3] = 0;
            rawData[7] = 0;
            rawData[11] = 0;
            rawData[15] = 1;
            target.copyRawDataFrom(rawData);
            return target;
        };
        /**
        * @language zh_CN
        * 得到矩阵的平移
        * @param transform 计算的矩阵
        * @param result 计算返回平移坐标
        * @returns 返回平移坐标
        */
        MathUtil.getTranslation = function (transform, result) {
            if (result === void 0) { result = null; }
            if (!result)
                result = new egret3d.Vector3D();
            transform.copyRowTo(3, result);
            return result;
        };
        /**
        * @language zh_CN
        * 把一个值固定在一个范围之内
        * @param value 当前判定的值
        * @param min_inclusive 最小取值
        * @param max_inclusive 最大取值
        * @returns 计算后的结果
        */
        MathUtil.clampf = function (value, min_inclusive, max_inclusive) {
            if (min_inclusive > max_inclusive) {
                var temp = min_inclusive;
                min_inclusive = max_inclusive;
                max_inclusive = temp;
            }
            return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
        };
        /**
        * @language zh_CN
        * 1弧度为多少角度
        */
        MathUtil.RADIANS_TO_DEGREES = 180 / Math.PI;
        /**
        * @language zh_CN
        * 1角度为多少弧度
        */
        MathUtil.DEGREES_TO_RADIANS = Math.PI / 180;
        /**
        * @private
        * 1角度为多少弧度
        */
        MathUtil.RAW_DATA_CONTAINER = new Float32Array(16);
        /**
        * @private
        */
        MathUtil.CALCULATION_MATRIX = new egret3d.Matrix4_4();
        return MathUtil;
    }());
    egret3d.MathUtil = MathUtil;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Ray
     * @classdesc
     * 射线是指直线上的一点和它一旁的部分所组成的直线，射线有且仅有一个端点，无法测量，由一个原点,和一个方向构成
     * 用于检测射线,也可用于鼠标拣选场景中的模型
     *
     * @see egret3d.Picker
     * @see egret3d.Vector3D
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Ray = (function () {
        /**
        * @language zh_CN
        * constructor
        * @origin 射线原点
        * @direction 射线方向
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Ray(origin, direction) {
            if (origin === void 0) { origin = new egret3d.Vector3D(); }
            if (direction === void 0) { direction = new egret3d.Vector3D(); }
            /**
            * @language zh_CN
            * 射线原点
            */
            this.origin = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 射线方向
            */
            this.dir = new egret3d.Vector3D();
            this.invViewMat = new egret3d.Matrix4_4();
            this.origin.copyFrom(origin);
            this.dir.copyFrom(direction);
        }
        /**
        * @language zh_CN
        * 计算一个三角形和一个射线的交点
        * @param v0 三角形的第一个顶点
        * @param v1 三角形的第二个顶点
        * @param v2 三角形的第三个顶点
        * @param ret t(交点到射线起始点的距离) u(交点在v1-v0上的投影的位置) v(交点在v1-v2上的投影的位置, 交点为ret=v0+pU*(v1-v0)+pV*(v2-v0))
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        Ray.prototype.IntersectTriangle = function (v0, v1, v2, ret) {
            if (ret === void 0) { ret = null; }
            var edge1 = v1.subtract(v0);
            var edge2 = v2.subtract(v0);
            var pvec = this.dir.crossProduct(edge2);
            var det = edge1.dotProduct(pvec);
            var tvec;
            if (det > 0) {
                tvec = this.origin.subtract(v0);
            }
            else {
                tvec = v0.subtract(this.origin);
                det = -det;
            }
            if (det < 0.0001) {
                return false;
            }
            // Calculate U parameter and test bounds
            var u = tvec.dotProduct(pvec);
            if (ret != null) {
                ret[1] = u;
            }
            if (u < 0.0 || u > det) {
                return false;
            }
            // Prepare to test V parameter
            var qvec = tvec.crossProduct(edge1);
            // Calculate V parameter and test bounds
            var v = this.dir.dotProduct(qvec);
            if (ret != null) {
                ret[2] = v;
            }
            if (v < 0.0 || u + v > det) {
                return false;
            }
            // Calculate T, scale parameters, ray intersects triangle
            var t = edge2.dotProduct(qvec);
            var invDet = 1.0 / det;
            t *= invDet;
            u *= invDet;
            v *= invDet;
            if (ret != null) {
                ret[0] = t;
                ret[1] = u;
                ret[2] = v;
            }
            if (t < 0) {
                return false;
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param renderItem 检测的模型
        * @param inPos 相交点
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        Ray.prototype.IntersectMeshEx = function (renderItem, uv_offset, result) {
            return this.IntersectMesh(renderItem.geometry.verticesData, renderItem.geometry.indexData, renderItem.geometry.vertexAttLength, renderItem.geometry.indexData.length / 3, uv_offset, renderItem.modelMatrix, result);
        };
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param verticesData 检测的模型的顶点数据
        * @param indexData 检测的模型的索引数据
        * @param offset 每个顶点的大小
        * @param faces 模型面数
        * @param inPos 返回相交点
        * @param mMat 顶点的世界变换矩阵
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        Ray.prototype.IntersectMesh = function (verticesData, indexData, offset, faces, uv_offset, mMat, result) {
            var modletriangle = new Array();
            modletriangle.push(new egret3d.Vector3D());
            modletriangle.push(new egret3d.Vector3D());
            modletriangle.push(new egret3d.Vector3D());
            var uvarray = new Array();
            uvarray.push(new egret3d.Vector3D());
            uvarray.push(new egret3d.Vector3D());
            uvarray.push(new egret3d.Vector3D());
            var triangle = new Array();
            var v0 = new egret3d.Vector3D();
            var v1 = new egret3d.Vector3D();
            var v2 = new egret3d.Vector3D();
            triangle.push(v0);
            triangle.push(v1);
            triangle.push(v2);
            var pos = new egret3d.Vector3D();
            var uv = new egret3d.Point();
            var ret = new Array();
            ret.push(0.0);
            ret.push(0.0);
            ret.push(0.0);
            var face = -1;
            var t = Number.MAX_VALUE;
            var u = 0;
            var v = 0;
            for (var i = 0; i < faces; ++i) {
                for (var j = 0; j < 3; ++j) {
                    var index = indexData[3 * i + j];
                    pos.setTo(verticesData[offset * index + 0], verticesData[offset * index + 1], verticesData[offset * index + 2]);
                    pos.copyFrom(mMat.transformVector(pos));
                    triangle[j].x = pos.x;
                    triangle[j].y = pos.y;
                    triangle[j].z = pos.z;
                }
                if (this.IntersectTriangle(v0, v1, v2, ret)) {
                    if (ret[0] < t) {
                        face = i;
                        t = ret[0];
                        u = ret[1];
                        v = ret[2];
                    }
                }
            }
            if (face < faces && face >= 0) {
                for (var i = 0; i < 3; ++i) {
                    var index = indexData[3 * face + i];
                    pos.setTo(verticesData[offset * index + 0], verticesData[offset * index + 1], verticesData[offset * index + 2]);
                    modletriangle[i].copyFrom(pos);
                    if (uv_offset > 0) {
                        uv.x = verticesData[offset * index + 0 + uv_offset];
                        uv.y = verticesData[offset * index + 1 + uv_offset];
                        uvarray[i].x = uv.x;
                        uvarray[i].y = uv.y;
                    }
                    pos.copyFrom(mMat.transformVector(pos));
                    triangle[i].x = pos.x;
                    triangle[i].y = pos.y;
                    triangle[i].z = pos.z;
                }
                var tmp0 = v1.subtract(v0);
                tmp0.scaleBy(u);
                var tmp1 = v2.subtract(v0);
                tmp1.scaleBy(v);
                result.globalPosition.copyFrom(v0.add(tmp0.add(tmp1)));
                tmp0 = modletriangle[1].subtract(modletriangle[0]);
                tmp0.scaleBy(u);
                tmp1 = modletriangle[2].subtract(modletriangle[0]);
                tmp1.scaleBy(v);
                result.localPosition.copyFrom(modletriangle[0].add(tmp0.add(tmp1)));
                if (uv_offset > 0) {
                    tmp0 = uvarray[1].subtract(uvarray[0]);
                    tmp0.scaleBy(u);
                    tmp1 = uvarray[2].subtract(uvarray[0]);
                    tmp1.scaleBy(v);
                    result.uv.copyFrom(uvarray[0].add(tmp0.add(tmp1)));
                }
                return true;
            }
            return false;
        };
        /**
        * @language zh_CN
        * 计算摄像机的射线
        * @param width 视口宽
        * @param height 视口高
        * @param viewMat 相机视图矩阵
        * @param projMat 相机投影矩阵
        * @param x 鼠标x
        * @param y 鼠标y
        * @version Egret 3.0
        * @platform Web,Native
        */
        Ray.prototype.CalculateAndTransformRay = function (width, height, viewMat, projMat, x, y) {
            this.reset();
            this.dir.x = (2.0 * x / width - 1.0) / projMat.rawData[0];
            this.dir.y = (-2.0 * y / height + 1.0) / projMat.rawData[5];
            this.dir.z = 1.0;
            this.invViewMat.copyFrom(viewMat);
            this.origin.copyFrom(this.invViewMat.transformVector(this.origin));
            this.dir.copyFrom(this.invViewMat.deltaTransformVector(this.dir));
            this.dir.normalize();
        };
        /**
        * @language zh_CN
        * 射线重置
        * @version Egret 3.0
        * @platform Web,Native
        */
        Ray.prototype.reset = function () {
            this.origin.setTo(0, 0, 0);
            this.dir.setTo(0, 0, 0);
        };
        return Ray;
    }());
    egret3d.Ray = Ray;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
     * @language zh_CN
     * @class egret3d.Color
     * @classdesc
     * 可使用 Color 类调整显示对象的颜色值
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Color = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param r red
        * @param g green
        * @param b blue
        * @param a alpha
        */
        function Color(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 255; }
            /**
            * @language zh_CN
            * alpha
            */
            this.a = 255;
            /**
            * @language zh_CN
            * red
            */
            this.r = 255;
            /**
            * @language zh_CN
            * green
            */
            this.g = 255;
            /**
            * @language zh_CN
            * blue
            */
            this.b = 255;
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        }
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        Color.white = function () {
            return new Color(255, 255, 255, 255);
        };
        /**
        * @language zh_CN
        * 返回黑色
        * @retrun 黑色
        */
        Color.black = function () {
            return new Color(0, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        Color.red = function () {
            return new Color(255, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回绿色
        * @retrun 绿色
        */
        Color.green = function () {
            return new Color(0, 255, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回蓝色
        * @retrun 蓝色
        */
        Color.blue = function () {
            return new Color(0, 0, 255, 255);
        };
        /**
        * @language zh_CN
        * 以number值返加颜色
        * @param colorFormat 格式
        * @returns 颜色
        */
        Color.prototype.getColor = function (colorFormat) {
            if (colorFormat === void 0) { colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888; }
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGB565)
                return 0;
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGBA5551)
                return 0;
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGBA4444)
                return 0;
            return this.r << 24 | this.g << 16 | this.b << 8 | this.a;
        };
        /**
        * @language zh_CN
        * 颜色取差值
        * @param c0
        * @param c1
        * @param t (0.0-1.0)
        */
        Color.prototype.lerp = function (c0, c1, t) {
            ///t(c1 - c0) + c0
            this.a = t * (c1.a - c0.a) + c0.a;
            this.r = t * (c1.r - c0.r) + c0.r;
            this.g = t * (c1.g - c0.g) + c0.g;
            this.b = t * (c1.b - c0.b) + c0.b;
        };
        return Color;
    }());
    egret3d.Color = Color;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Bound
     * @classdesc
     * 可使用 Bound 类 取得包围盒的数据。</p>
     * 包含包围盒的各顶点信息，当包围盒要进行世界变换时，应当变换各顶点信息。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Bound = (function () {
        function Bound() {
            /**
            * @language zh_CN
            * 顶点数据
            */
            this.vexData = new Array();
            /**
            * @language zh_CN
            * 索引数据
            */
            this.indexData = new Array();
            /**
            * @language zh_CN
            * 顶点长度
            */
            this.vexLength = 3;
        }
        Bound.prototype.inBound = function (frustum) {
            return true;
        };
        return Bound;
    }());
    egret3d.Bound = Bound;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Bound
     * @classdesc
     * 可使用 Bound 类 取得包围盒的数据。</p>
     * 包含包围盒的各顶点信息，当包围盒要进行世界变换时，应当变换各顶点信息。</p>
     * @see egret3d.Bound
     * @version Egret 3.0
     * @platform Web,Native
     */
    var BoundBox = (function (_super) {
        __extends(BoundBox, _super);
        /**
        * @language zh_CN
        * constructor
        * @param min
        * @param max
        */
        function BoundBox(min, max) {
            if (min === void 0) { min = new egret3d.Vector3D(); }
            if (max === void 0) { max = new egret3d.Vector3D(); }
            _super.call(this);
            /**
            * @language zh_CN
            * 顶点数据
            */
            this.vexData = new Array();
            /**
            * @language zh_CN
            * 索引数据
            */
            this.indexData = new Array();
            /**
            * @language zh_CN
            * 顶点长度
            */
            this.vexLength = 3;
            /**
            * @language zh_CN
            * 盒子最小点
            */
            this.min = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子最大点
            */
            this.max = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子宽
            */
            this.width = 0;
            /**
            * @language zh_CN
            * 盒子高
            */
            this.heigth = 0;
            /**
            * @language zh_CN
            * 盒子长
            */
            this.depth = 0;
            /**
            * @language zh_CN
            * 盒子体积
            */
            this.volume = 0;
            /**
            * @language zh_CN
            * 盒子包围球中心点
            */
            this.center = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子包围球半径
            */
            this.radius = 0;
            this.matTransform = new egret3d.Matrix4_4();
            this.min.copyFrom(min);
            this.max.copyFrom(max);
            this.calculateBox();
        }
        /**
        * @language zh_CN
        * 拷贝一个包围盒
        * @param box
        */
        BoundBox.prototype.copyFrom = function (box) {
            this.min.copyFrom(box.min);
            this.max.copyFrom(box.max);
            this.calculateBox();
        };
        /**
        * @language zh_CN
        * 填充当前包围盒
        * @param box
        */
        BoundBox.prototype.fillBox = function (min, max) {
            this.min.copyFrom(min);
            this.max.copyFrom(max);
            this.calculateBox();
        };
        /**
        * @language zh_CN
        * 检测一个点是否包围盒内
        * @param pos 检测的点
        * @returns 成功返回true
        */
        BoundBox.prototype.inBox = function (pos) {
            if (pos.x <= this.max.x && pos.x >= this.min.x &&
                pos.y <= this.max.y && pos.y >= this.min.y &&
                pos.z <= this.max.z && pos.z >= this.min.z) {
                return true;
            }
            return false;
        };
        /**
        * @language zh_CN
        * 检测两个包围盒是否相交
        * @param box2 其中一个包围盒
        * @param boxIntersect 相交的包围盒
        * @returns 成功返回true
        */
        BoundBox.prototype.intersectAABBs = function (box2, boxIntersect) {
            if (this.min.x > box2.max.x) {
                return false;
            }
            if (this.max.x < box2.min.x) {
                return false;
            }
            if (this.min.y > box2.max.y) {
                return false;
            }
            if (this.max.y < box2.min.y) {
                return false;
            }
            if (this.min.z > box2.max.z) {
                return false;
            }
            if (this.max.z < box2.min.z) {
                return false;
            }
            if (boxIntersect != null) {
                boxIntersect.min.x = Math.max(this.min.x, box2.min.x);
                boxIntersect.max.x = Math.min(this.max.x, box2.max.x);
                boxIntersect.min.y = Math.max(this.min.y, box2.min.y);
                boxIntersect.max.y = Math.min(this.max.y, box2.max.y);
                boxIntersect.min.z = Math.max(this.min.z, box2.min.z);
                boxIntersect.max.z = Math.min(this.max.z, box2.max.z);
            }
            return true;
        };
        Object.defineProperty(BoundBox.prototype, "Transform", {
            /**
            * @language zh_CN
            * 得到变换矩阵
            * @returns 变换矩阵
            */
            get: function () {
                return this.matTransform;
            },
            /**
            * @language zh_CN
            * 设置变换矩阵
            * @param mat 变换矩阵
            */
            set: function (mat) {
                this.matTransform.copyFrom(mat);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 以字符串形式返回box的值
        * @returns 字符串
        */
        BoundBox.prototype.toString = function () {
            return "CubeBoxBound [min:(" + this.min.x + ", " + this.min.y + ", " + this.min.z + ") max:(" + this.max.x + ", " + this.max.y + ", " + this.max.z + ")]";
        };
        /**
        * @language zh_CN
        * 计算包围盒数据
        */
        BoundBox.prototype.calculateBox = function () {
            this.vexData.length = 0;
            this.indexData.length = 0;
            var sub = this.max.subtract(this.min);
            this.vexData.push(this.min.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z);
            this.vexData.push(this.min.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z + sub.z);
            this.vexData.push(this.min.x + sub.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z + sub.z);
            this.vexData.push(this.min.x + sub.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z);
            this.vexData.push(this.max.x - sub.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z - sub.z);
            this.vexData.push(this.max.x - sub.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z);
            this.vexData.push(this.max.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z);
            this.vexData.push(this.max.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z - sub.z);
            this.indexData.push(0, 4, 7, 0, 7, 3, 2, 6, 5, 2, 5, 1, 4, 5, 6, 4, 6, 7, 0, 3, 2, 0, 2, 1, 0, 1, 5, 0, 5, 4, 3, 7, 6, 3, 6, 2);
            this.width = this.max.x - this.min.x;
            this.heigth = this.max.y - this.min.y;
            this.depth = this.max.z - this.min.z;
            this.volume = this.width * this.heigth * this.depth;
            var c = this.max.subtract(this.min);
            c.scaleBy(0.5);
            this.radius = c.length;
            this.center.copyFrom(this.min);
            var tmp = this.center.add(c);
            this.center.copyFrom(tmp);
        };
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param frustum 视椎体
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        BoundBox.prototype.inBound = function (frustum) {
            return frustum.inBox(this);
        };
        return BoundBox;
    }(egret3d.Bound));
    egret3d.BoundBox = BoundBox;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.ControllerBase
    * @classdesc
    * 控制器 基类, 抽象控制器的一些数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    var ControllerBase = (function () {
        /**
        * @language zh_CN
        * 构造函数
        * @param targetObject 控制的目标
        */
        function ControllerBase(targetObject, lookAtObject) {
            if (targetObject === void 0) { targetObject = null; }
            if (lookAtObject === void 0) { lookAtObject = null; }
            this._autoUpdate = true;
            this._origin = new egret3d.Vector3D(0.0, 0.0, 0.0);
            this._target = targetObject;
            this._lookAtObject = lookAtObject;
        }
        Object.defineProperty(ControllerBase.prototype, "target", {
            /**
            * @language zh_CN
            *
            * @returns 返回当前的目标
            */
            get: function () {
                return this._target;
            },
            /**
            * @language zh_CN
            *
            * @param val 当前的目标
            */
            set: function (val) {
                if (this._target == val)
                    return;
                ///if (this._target && _autoUpdate)
                ///    this._target._controller = null;
                this._target = val;
                ///if (this._target && _autoUpdate)
                ///    this._target._controller = this;
                ///notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControllerBase.prototype, "autoUpdate", {
            /**
            * @language zh_CN
            *
            * @returns 是否自动更新
            */
            get: function () {
                return this._autoUpdate;
            },
            /**
            * @language zh_CN
            *
            * @param val 是否自动更新
            */
            set: function (val) {
                if (this._autoUpdate == val)
                    return;
                this._autoUpdate = val;
            },
            enumerable: true,
            configurable: true
        });
        ControllerBase.prototype.notifyUpdate = function () {
            ///if (_targetObject && _targetObject.implicitPartition && _autoUpdate)
            ///    _targetObject.implicitPartition.markForUpdate(_targetObject);
        };
        /**
        * @language zh_CN
        * 数据更新
        */
        ControllerBase.prototype.update = function () {
            ///throw null ;
        };
        return ControllerBase;
    }());
    egret3d.ControllerBase = ControllerBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.LookAtController
    * @classdesc
    * look at 摄像机控制器 。</p>
    * 指定摄像机看向的目标对象。</p>
    * 1.按下鼠标左键并移动鼠标可以使摄像机绕着目标进行旋转。</p>
    * 2.按下键盘的(w s a d) 可以摄像机(上 下 左 右)移动。</p>
    * 3.滑动鼠标滚轮可以控制摄像机的视距。</p>
    *
    * @includeExample controller/ctl/LookAtController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var LookAtController = (function (_super) {
        __extends(LookAtController, _super);
        /**
        * @language zh_CN
        * 控制的目标相机，目标对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        function LookAtController(targetObject, lookAtObject) {
            if (targetObject === void 0) { targetObject = null; }
            if (lookAtObject === void 0) { lookAtObject = null; }
            _super.call(this, targetObject);
            this._origin = new egret3d.Vector3D(0.0, 0.0, 0.0);
            this._lookAtPosition = new egret3d.Vector3D();
            this._eyesPos = new egret3d.Vector3D();
            this._up = egret3d.Vector3D.Y_AXIS;
            this._eyesLength = 0;
            this._rotaEyesLine = new egret3d.Vector3D(0, 0, 1);
            this._rotaAngle = new egret3d.Vector3D();
            this._matRot = new egret3d.Matrix4_4();
            this._quaRot = new egret3d.Quaternion();
            this._tempVec = new egret3d.Vector3D();
            this._matTemp = new egret3d.Matrix4_4();
            this._mouseDown = false;
            this._mouseRightDown = false;
            this._screenMoveStartDetail = new egret3d.Point();
            this._screenMoveDelay = new egret3d.Point();
            this._isUpdate = false;
            this._elapsed = 0;
            this._speed = 3;
            this._xAngle = 0;
            this._keyArray = new Array();
            /**
            * @language zh_CN
            * 目标点偏移
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.lookAtOffset = new egret3d.Vector3D(0, 0, 0);
            /**
            * @language zh_CN
            * 是否第一人称相机
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.firstCamera = false;
            this._keyArray.push(false);
            this._keyArray.push(false);
            this._keyArray.push(false);
            this._keyArray.push(false);
            if (lookAtObject)
                this.lookAtObject = lookAtObject;
            else
                this.lookAtPosition = new egret3d.Vector3D();
            this._eyesPos.copyFrom(targetObject.position);
            this._lookAtPosition.copyFrom(lookAtObject.position.add(this.lookAtOffset));
            this._target.lookAt(this._eyesPos, this._lookAtPosition);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE, this.mouseMove, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_WHEEL, this.mouseWheel, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_UP, this.mouseUp, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN, this.mouseDown, this);
            egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_UP, this.keyUp, this);
            egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_DOWN, this.keyDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_END, this.touchUp, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_START, this.touchDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE, this.touchMove, this);
        }
        LookAtController.prototype.mouseMove = function (m) {
            if (this._mouseDown) {
                this._rotaAngle.y += egret3d.Input.mouseOffsetX;
                this._rotaAngle.x += egret3d.Input.mouseOffsetY;
                this._rotaAngle.y %= 360;
                this._rotaAngle.x %= 360;
            }
        };
        LookAtController.prototype.mouseWheel = function (m) {
            this.distance = this._eyesLength - egret3d.Input.wheelDelta * 0.1;
        };
        LookAtController.prototype.mouseUp = function (m) {
            switch (m.mouseCode) {
                case egret3d.MouseCode.Mouse_Left:
                    this._mouseDown = false;
                    break;
                case egret3d.MouseCode.Mouse_Right:
                    this._mouseRightDown = false;
                    break;
            }
        };
        LookAtController.prototype.mouseDown = function (m) {
            switch (m.mouseCode) {
                case egret3d.MouseCode.Mouse_Left:
                    this._mouseDown = true;
                    break;
                case egret3d.MouseCode.Mouse_Right:
                    this._mouseRightDown = true;
                    break;
            }
        };
        LookAtController.prototype.touchMove = function (t) {
            if (t.targetTouches.length == 1) {
                this.mouseMove(null);
            }
            else {
                this.mouseWheel(null);
            }
        };
        LookAtController.prototype.touchUp = function (m) {
            this._mouseDown = false;
        };
        LookAtController.prototype.touchDown = function (m) {
            this._mouseDown = true;
        };
        LookAtController.prototype.keyDown = function (key) {
            switch (key.keyCode) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = true;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = true;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = true;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = true;
                    break;
            }
        };
        LookAtController.prototype.keyUp = function (key) {
            switch (key.keyCode) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = false;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = false;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = false;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = false;
                    break;
            }
        };
        Object.defineProperty(LookAtController.prototype, "lookAtPosition", {
            /**
            * @language zh_CN
            * 返回目标的位置
            *
            * @returns 目标的位置
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._lookAtPosition;
            },
            /**
            * @language zh_CN
            * 设置目标坐标
            *
            * @param val 摄像机看向的目标点
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._lookAtObject)
                    this._lookAtObject = null;
                this._lookAtPosition.copyFrom(val.add(this.lookAtOffset));
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "lookAtObject", {
            /**
            * @language zh_CN
            *
            * 返回目标对象
            * @returns 目标对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._lookAtObject;
            },
            /**
            * @language zh_CN
            *
            * 设置目标对象
            * @param val 目标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._lookAtObject == val)
                    return;
                this._lookAtObject = val;
                this._lookAtPosition.copyFrom(this._lookAtObject.position.add(this.lookAtOffset));
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "distance", {
            /**
            * @language zh_CN
            * 得到目标和相机的距离
            * @returns number 距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._eyesLength;
            },
            /**
            * @language zh_CN
            * 设置目标和相机的距离
            * @param length 距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (length) {
                this._eyesLength = length;
                if (this._eyesLength < 1) {
                    this._eyesLength = 1;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "rotationX", {
            /**
            * @language zh_CN
            * 得到相机x轴旋转
            * @returns x 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rotaAngle.x;
            },
            /**
            * @language zh_CN
            * 设置相机x轴旋转
            * @param x 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (x) {
                this._rotaAngle.x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "rotationY", {
            /**
            * @language zh_CN
            * 得到相机x轴旋转
            * @returns y 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rotaAngle.y;
            },
            /**
            * @language zh_CN
            * 设置相机y轴旋转
            * @param y 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (y) {
                this._rotaAngle.y = y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "rotationZ", {
            /**
            * @language zh_CN
            * 得到相机x轴旋转
            * @returns z 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rotaAngle.z;
            },
            /**
            * @language zh_CN
            * 设置相机z轴旋转
            * @param z 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (z) {
                this._rotaAngle.z = z;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 控制器数据更新
        * @version Egret 3.0
        * @platform Web,Native
        */
        LookAtController.prototype.update = function () {
            if (this._target) {
                if (this._target.isController == false) {
                    return;
                }
                if (this._keyArray[0]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[1]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._matTemp.identity();
                    this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
                    this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[2]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[3]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._matTemp.identity();
                    this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
                    this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                this._quaRot.fromEulerAngles(this._rotaAngle.x, this._rotaAngle.y, 0);
                this._rotaEyesLine.copyFrom(this._quaRot.transformVector(egret3d.Vector3D.Z_AXIS));
                this._rotaEyesLine.normalize();
                this._tempVec.copyFrom(this._rotaEyesLine);
                this._tempVec.scaleBy(this._eyesLength);
                this._eyesPos.copyFrom(this._lookAtPosition.subtract(this._tempVec));
                if (this._lookAtObject) {
                    this._lookAtPosition.copyFrom(this._lookAtObject.position.add(this.lookAtOffset));
                }
                this._quaRot.fromEulerAngles(this._rotaAngle.x, this._rotaAngle.y, this._rotaAngle.z);
                this._tempVec.copyFrom(this._up);
                this._tempVec.copyFrom(this._quaRot.transformVector(this._tempVec));
                this._tempVec.normalize();
                if (this.firstCamera) {
                    this._lookAtObject.rotationY = this._rotaAngle.y;
                    this._lookAtObject.rotationX = this._rotaAngle.x;
                }
                this._target.lookAt(this._eyesPos, this._lookAtPosition, this._tempVec);
            }
        };
        return LookAtController;
    }(egret3d.ControllerBase));
    egret3d.LookAtController = LookAtController;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.HoverController
    * @classdesc
    * 摄像机控制器 ,实现摄像机平滑移动
    * 指定摄像机看向的目标对象
    * 1.按下鼠标左键并移动鼠标(或手机手指滑动)可以使摄像机绕着目标进行旋转.
    * 2.滑动鼠标滚轮(或双指滑动)可以控制摄像机的视距.
    *
    * 示例:
    * @includeExample controller/ctl/HoverController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var HoverController = (function (_super) {
        __extends(HoverController, _super);
        /**
        * @language zh_CN
        * @param targetObject 控制的目标相机，目标对象
        * @param lookAtObject 相机看向的对象
        * @param panAngle 相机看向的对象
        * @param tiltAngle 相机看向的对象
        * @param distance 相机看向的对象
        * @param minTiltAngle 相机看向的对象
        * @param maxTiltAngle 相机看向的对象
        * @param minPanAngle 相机看向的对象
        * @param maxPanAngle 相机看向的对象
        * @param steps 相机看向的对象
        * @param yFactor 相机看向的对象
        * @param wrapPanAngle 相机看向的对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        function HoverController(targetObject, lookAtObject, panAngle, tiltAngle, distance, minTiltAngle, maxTiltAngle, minPanAngle, maxPanAngle, steps, yFactor, wrapPanAngle) {
            if (targetObject === void 0) { targetObject = null; }
            if (lookAtObject === void 0) { lookAtObject = null; }
            if (panAngle === void 0) { panAngle = 0; }
            if (tiltAngle === void 0) { tiltAngle = 90; }
            if (distance === void 0) { distance = 100; }
            if (minTiltAngle === void 0) { minTiltAngle = -90; }
            if (maxTiltAngle === void 0) { maxTiltAngle = 90; }
            if (minPanAngle === void 0) { minPanAngle = NaN; }
            if (maxPanAngle === void 0) { maxPanAngle = NaN; }
            if (steps === void 0) { steps = 8; }
            if (yFactor === void 0) { yFactor = 2; }
            if (wrapPanAngle === void 0) { wrapPanAngle = false; }
            _super.call(this, targetObject, lookAtObject);
            this._currentPanAngle = 0;
            this._currentTiltAngle = 90;
            this._panAngle = 0;
            this._tiltAngle = 90;
            this._distance = 1000;
            this._minPanAngle = -Infinity;
            this._maxPanAngle = Infinity;
            this._minTiltAngle = -90;
            this._maxTiltAngle = 90;
            this._maxDistance = 5000;
            this._minDistance = -5000;
            this._steps = 8;
            this._yFactor = 2;
            this._wrapPanAngle = false;
            this._lookAtPosition = new egret3d.Vector3D(0.0, 0.0, 0.0);
            this._mouseDown = false;
            this._mouseRightDown = false;
            this._keyArray = new Array();
            this.distance = distance;
            this.panAngle = panAngle;
            this.tiltAngle = tiltAngle;
            this.minPanAngle = minPanAngle || -Infinity;
            this.maxPanAngle = maxPanAngle || Infinity;
            this.minTiltAngle = minTiltAngle;
            this.maxTiltAngle = maxTiltAngle;
            this.steps = steps;
            this.yFactor = yFactor;
            this.wrapPanAngle = wrapPanAngle;
            //values passed in contrustor are applied immediately
            this._currentPanAngle = this._panAngle;
            this._currentTiltAngle = this._tiltAngle;
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE, this.mouseMove, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_WHEEL, this.mouseWheel, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_UP, this.mouseUp, this);
            egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN, this.mouseDown, this);
            egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_UP, this.keyUp, this);
            egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_DOWN, this.keyDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_START, this.touchDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_END, this.touchDown, this);
            egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE, this.touchDown, this);
        }
        HoverController.prototype.mouseMove = function (m) {
            if (this._mouseDown) {
                this._tiltAngle += egret3d.Input.mouseOffsetY * 0.1;
                this._tiltAngle = Math.max(this._minTiltAngle, Math.min(this._maxTiltAngle, this._tiltAngle));
                this._panAngle += egret3d.Input.mouseOffsetX * 0.1;
                this._panAngle = Math.max(this._minPanAngle, Math.min(this._maxPanAngle, this._panAngle));
            }
        };
        HoverController.prototype.mouseWheel = function (m) {
            this._distance -= egret3d.Input.wheelDelta * 0.1;
            this._distance = Math.max(this._minDistance, Math.min(this._maxDistance, this._distance));
        };
        HoverController.prototype.mouseUp = function (m) {
            switch (m.mouseCode) {
                case egret3d.MouseCode.Mouse_Left:
                    this._mouseDown = false;
                    break;
                case egret3d.MouseCode.Mouse_Right:
                    this._mouseRightDown = false;
                    break;
            }
        };
        HoverController.prototype.mouseDown = function (m) {
            switch (m.mouseCode) {
                case egret3d.MouseCode.Mouse_Left:
                    this._mouseDown = true;
                    break;
                case egret3d.MouseCode.Mouse_Right:
                    this._mouseRightDown = true;
                    break;
            }
        };
        HoverController.prototype.touchMove = function (t) {
            if (t.targetTouches.length == 1) {
                this.mouseMove(null);
            }
            else {
                this.mouseWheel(null);
            }
        };
        HoverController.prototype.touchUp = function (m) {
            this._mouseDown = false;
        };
        HoverController.prototype.touchDown = function (m) {
            this._mouseDown = true;
        };
        HoverController.prototype.keyDown = function (key) {
            switch (key.keyCode) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = true;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = true;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = true;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = true;
                    break;
            }
        };
        HoverController.prototype.keyUp = function (key) {
            switch (key.keyCode) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = false;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = false;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = false;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = false;
                    break;
            }
        };
        Object.defineProperty(HoverController.prototype, "lookAtPosition", {
            /**
            * @language zh_CN
            * 返回目标的位置
            *
            * @returns 目标的位置
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._lookAtPosition;
            },
            /**
            * @language zh_CN
            * 设置目标坐标
            *
            * @param val 摄像机看向的目标点
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                this._lookAtPosition = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "steps", {
            /**
            * @private
            */
            get: function () {
                return this._steps;
            },
            /**
            * @private
            */
            set: function (val) {
                val = (val < 1) ? 1 : val;
                if (this._steps == val)
                    return;
                this._steps = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "panAngle", {
            /**
            * @language zh_CN
            * 得到相机y轴旋转角度
            * @returns 相机y轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._panAngle;
            },
            /**
            * @language zh_CN
            * 设置相机y轴旋转
            * @param val 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                val = Math.max(this._minPanAngle, Math.min(this._maxPanAngle, val));
                if (this._panAngle == val)
                    return;
                this._panAngle = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "tiltAngle", {
            /**
            * @language zh_CN
            * 得到相机x轴旋转角度
            * @returns 相机x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._tiltAngle;
            },
            /**
            * @language zh_CN
            * 设置相机x轴旋转
            * @param val 旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                val = Math.max(this._minTiltAngle, Math.min(this._maxTiltAngle, val));
                if (this._tiltAngle == val)
                    return;
                this._tiltAngle = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "distance", {
            /**
            * @language zh_CN
            * 得到目标和相机的距离
            * @returns 目标和相机的距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._distance;
            },
            /**
            * @language zh_CN
            * 设置目标和相机的距离
            * @param val 距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._distance == val)
                    return;
                this._distance = this._distance = Math.max(this._minDistance, Math.min(this._maxDistance, val));
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "minPanAngle", {
            /**
            * @language zh_CN
            * 得到相机最小y轴旋转角度
            * @returns 相机最小x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._minPanAngle;
            },
            /**
            * @language zh_CN
            * 设置相机最小y轴旋转角度
            * @param val 相机最小x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._minPanAngle == val)
                    return;
                this._minPanAngle = val;
                this.panAngle = Math.max(this._minPanAngle, Math.min(this._maxPanAngle, this._panAngle));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "maxPanAngle", {
            /**
            * @language zh_CN
            * 得到相机最大y轴旋转角度
            * @returns 相机最大y轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._maxPanAngle;
            },
            /**
            * @language zh_CN
            * 设置相机最大y轴旋转角度
            * @param val 相机最大y轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._maxPanAngle == val)
                    return;
                this._maxPanAngle = val;
                this.panAngle = Math.max(this._minPanAngle, Math.min(this._maxPanAngle, this._panAngle));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "minTiltAngle", {
            /**
            * @language zh_CN
            * 得到相机最小x轴旋转角度
            * @returns 相机最小x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._minTiltAngle;
            },
            /**
            * @language zh_CN
            * 设置相机最小x轴旋转角度
            * @param val 相机最小x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._minTiltAngle == val)
                    return;
                this._minTiltAngle = val;
                this.tiltAngle = Math.max(this._minTiltAngle, Math.min(this._maxTiltAngle, this._tiltAngle));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "maxTiltAngle", {
            /**
            * @language zh_CN
            * 得到相机最大x轴旋转角度
            * @returns 相机最大x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._maxTiltAngle;
            },
            /**
            * @language zh_CN
            * 设置相机最大x轴旋转角度
            * @param val 相机最大x轴旋转角度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._maxTiltAngle == val)
                    return;
                this._maxTiltAngle = val;
                this.tiltAngle = Math.max(this._minTiltAngle, Math.min(this._maxTiltAngle, this._tiltAngle));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "maxDistance", {
            /**
            * @language zh_CN
            * 得到相机和目标最大的距离
            * @returns 相机和目标最大的距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._maxDistance;
            },
            /**
            * @language zh_CN
            * 设置相机和目标最大的距离
            * @param val 相机和目标最大的距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._maxDistance == val)
                    return;
                this._maxDistance = val;
                this._distance = Math.max(this._minDistance, Math.min(this._maxDistance, this._distance));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "minDistance", {
            /**
            * @language zh_CN
            * 得到相机和目标最小的距离
            * @returns 相机和目标最小的距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._maxDistance;
            },
            /**
            * @language zh_CN
            * 设置相机和目标最小的距离
            * @param val 相机和目标最小的距离
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                if (this._minDistance == val)
                    return;
                this._minDistance = val;
                this._distance = Math.max(this._minDistance, Math.min(this._maxDistance, this._distance));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "yFactor", {
            /**
            * @private
            */
            get: function () {
                return this._yFactor;
            },
            /**
            * @private
            */
            set: function (val) {
                if (this._yFactor == val)
                    return;
                this._yFactor = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HoverController.prototype, "wrapPanAngle", {
            /**
            * @private
            */
            get: function () {
                return this._wrapPanAngle;
            },
            /**
            * @private
            */
            set: function (val) {
                if (this._wrapPanAngle == val)
                    return;
                this._wrapPanAngle = val;
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 控制器数据更新
        * @param interpolate
        * @version Egret 3.0
        * @platform Web,Native
        */
        HoverController.prototype.update = function (interpolate) {
            if (interpolate === void 0) { interpolate = true; }
            if (this._tiltAngle != this._currentTiltAngle || this._panAngle != this._currentPanAngle) {
                this.notifyUpdate();
                if (this._wrapPanAngle) {
                    if (this._panAngle < 0)
                        this._panAngle = (this._panAngle % 360) + 360;
                    else
                        this._panAngle = this._panAngle % 360;
                    if (this._panAngle - this._currentPanAngle < -180)
                        this._currentPanAngle -= 360;
                    else if (this._panAngle - this._currentPanAngle > 180)
                        this._currentPanAngle += 360;
                }
                if (interpolate) {
                    this._currentTiltAngle += (this._tiltAngle - this._currentTiltAngle) / (this.steps + 1);
                    this._currentPanAngle += (this._panAngle - this._currentPanAngle) / (this.steps + 1);
                }
                else {
                    this._currentPanAngle = this._panAngle;
                    this._currentTiltAngle = this._tiltAngle;
                }
                //snap coords if angle differences are close
                if ((Math.abs(this._tiltAngle - this._currentTiltAngle) < 0.01) && (Math.abs(this._panAngle - this._currentPanAngle) < 0.01)) {
                    this._currentTiltAngle = this._tiltAngle;
                    this._currentPanAngle = this._panAngle;
                }
            }
            var pos = (this._lookAtObject) ? this._lookAtObject.position : (this._lookAtPosition) ? this._lookAtPosition : this._origin;
            var p = new egret3d.Vector3D();
            p.x = pos.x + this.distance * Math.sin(this._currentPanAngle * egret3d.MathUtil.DEGREES_TO_RADIANS) * Math.cos(this._currentTiltAngle * egret3d.MathUtil.DEGREES_TO_RADIANS);
            p.z = pos.z + this.distance * Math.cos(this._currentPanAngle * egret3d.MathUtil.DEGREES_TO_RADIANS) * Math.cos(this._currentTiltAngle * egret3d.MathUtil.DEGREES_TO_RADIANS);
            p.y = pos.y + this.distance * Math.sin(this._currentTiltAngle * egret3d.MathUtil.DEGREES_TO_RADIANS) * this.yFactor;
            if (this._target) {
                if (this._lookAtPosition)
                    this._target.lookAt(p, this._lookAtPosition);
            }
        };
        return HoverController;
    }(egret3d.ControllerBase));
    egret3d.HoverController = HoverController;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    (function (InternalFormat) {
        InternalFormat[InternalFormat["PixelArray"] = 0] = "PixelArray";
        InternalFormat[InternalFormat["CompressData"] = 1] = "CompressData";
        InternalFormat[InternalFormat["ImageData"] = 2] = "ImageData";
    })(egret3d.InternalFormat || (egret3d.InternalFormat = {}));
    var InternalFormat = egret3d.InternalFormat;
    ;
    /**
    * @private
    */
    //export class ColorFormat {
    //    ColorFormat_RGBA8888
    //} 
    /**
    * @private
    */
    (function (FrameBufferType) {
        FrameBufferType[FrameBufferType["shadowFrameBufrfer"] = 0] = "shadowFrameBufrfer";
        FrameBufferType[FrameBufferType["defaultFrameBuffer"] = 1] = "defaultFrameBuffer";
        FrameBufferType[FrameBufferType["positionFrameBuffer"] = 2] = "positionFrameBuffer";
        FrameBufferType[FrameBufferType["normalFrameBuffer"] = 3] = "normalFrameBuffer";
        FrameBufferType[FrameBufferType["specularFrameBuffer"] = 4] = "specularFrameBuffer";
        FrameBufferType[FrameBufferType["leftEyeFrameBuffer"] = 5] = "leftEyeFrameBuffer";
        FrameBufferType[FrameBufferType["rightEyeFrameBuffer"] = 6] = "rightEyeFrameBuffer";
        FrameBufferType[FrameBufferType["nextFrameBuffer"] = 7] = "nextFrameBuffer";
    })(egret3d.FrameBufferType || (egret3d.FrameBufferType = {}));
    var FrameBufferType = egret3d.FrameBufferType;
    /**
    * @private
    */
    (function (FrameBufferFormat) {
        FrameBufferFormat[FrameBufferFormat["FLOAT_RGB"] = 0] = "FLOAT_RGB";
        FrameBufferFormat[FrameBufferFormat["FLOAT_RGBA"] = 1] = "FLOAT_RGBA";
        FrameBufferFormat[FrameBufferFormat["UNSIGNED_BYTE_RGB"] = 2] = "UNSIGNED_BYTE_RGB";
        FrameBufferFormat[FrameBufferFormat["UNSIGNED_BYTE_RGBA"] = 3] = "UNSIGNED_BYTE_RGBA";
    })(egret3d.FrameBufferFormat || (egret3d.FrameBufferFormat = {}));
    var FrameBufferFormat = egret3d.FrameBufferFormat;
    /**
    * @language zh_CN
    * 渲染混合模式
    * BlendMode 类中的一个值，用于指定要使用的混合模式。 内部绘制位图的方法有两种。 如果启用了混合模式或外部剪辑遮罩，则将通过向矢量渲染器添加有位图填充的正方形来绘制位图。 如果尝试将此属性设置为无效值，则 Flash 运行时会将此值设置为 BlendMode.NORMAL。
    * blendMode 属性影响显示对象的每个像素。每个像素都由三种原色（红色、绿色和蓝色）组成，每种原色的值介于 0x00 和 0xFF 之间。Flash Player 或 Adobe AIR 将影片剪辑中一个像素的每种原色与背景中像素的对应颜色进行比较。例如，如果 blendMode 设置为 BlendMode.LIGHTEN，则 Flash Player 或 Adobe AIR 会将显示对象的红色值与背景的红色值进行比较，然后使用两者中较亮的一种颜色作为显示颜色的红色成分的值。
    * 下表将对 blendMode 设置进行说明。BlendMode 类定义可使用的字符串值。表中的插图显示应用于交叠于显示对象 (1) 之上的圆形显示对象 (2) 的 blendMode 值。
    * @version Egret 3.0
    * @platform Web,Native
    */
    (function (BlendMode) {
        /**
         * @language zh_CN
         * 将显示对象的每个像素的 Alpha 值应用于背景。
         * @version Egret 3.0
         * @platform Web,Native
         */
        BlendMode[BlendMode["ALPHA"] = 0] = "ALPHA";
        /**
         * @language zh_CN
         * 强制为该显示对象创建一个透明度组。
         * @version Egret 3.0
         * @platform Web,Native
         */
        BlendMode[BlendMode["LAYER"] = 1] = "LAYER";
        /**
        * @language zh_CN
        * 该显示对象出现在背景前面。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["NORMAL"] = 2] = "NORMAL";
        /**
        * @language zh_CN
        * 将显示对象的原色值与背景颜色的原色值相乘，然后除以 0xFF 进行标准化，从而得到较暗的颜色。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["MULTIPLY"] = 3] = "MULTIPLY";
        /**
        * @language zh_CN
        * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["ADD"] = 4] = "ADD";
        /**
        * @language zh_CN
        * 从背景颜色的值中减去显示对象原色的值，下限值为 0。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["SUB"] = 5] = "SUB";
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相除。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["DIV"] = 6] = "DIV";
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相乘，会产生漂白效果。
        * @version Egret 3.0
        * @platform Web,Native
        */
        BlendMode[BlendMode["SCREEN"] = 7] = "SCREEN";
    })(egret3d.BlendMode || (egret3d.BlendMode = {}));
    var BlendMode = egret3d.BlendMode;
    /**
     * @private
     * @class egret3d.ContextSamplerType
     * @classdesc
     * 贴图采样类型
     */
    var ContextSamplerType = (function () {
        function ContextSamplerType() {
        }
        return ContextSamplerType;
    }());
    egret3d.ContextSamplerType = ContextSamplerType;
    /**
    * @class egret3d.DrawMode
    * @classdesc
    * 渲染模式
    * LINES 线框显示模式
    * POINTS 点显示模式
    * TRIANGLES 三角形显示模式
    * LINE_STRIP 连接线显示模式
    */
    var DrawMode = (function () {
        function DrawMode() {
        }
        return DrawMode;
    }());
    egret3d.DrawMode = DrawMode;
    /**
    * @private
    * @class egret3d.Egret3DDrive
    * @classdesc
    * 3d 驱动
    */
    var ContextConfig = (function () {
        function ContextConfig() {
        }
        /**
        * @private
        */
        ContextConfig.Direct3D_Opengl_Auto = "Direct3D_Opengl_Auto";
        /**
        * @private
        */
        ContextConfig.Direct3D_9_0 = "Direct3D_9_0";
        /**
        * @private
        */
        ContextConfig.Direct3D_10_0 = "Direct3D_10_0";
        /**
        * @private
        */
        ContextConfig.Direct3D_11_0 = "Direct3D_11_0";
        /**
        * @private
        */
        ContextConfig.OpenGLES_2_0 = "OpenGLES_2_0";
        /**
        * @private
        */
        ContextConfig.OpenGLES_3_0 = "OpenGLES_3_0";
        /**
        * @private
        */
        ContextConfig.OpenGL = "OpenGL";
        /**
        * @private
        */
        ContextConfig.ColorFormat_DXT1_RGB = 0;
        /**
        * @private
        */
        ContextConfig.ColorFormat_DXT1_RGBA = 0;
        /**
        * @private
        */
        ContextConfig.ColorFormat_DXT3_RGBA = 0;
        /**
        * @private
        */
        ContextConfig.ColorFormat_DXT5_RGBA = 0;
        return ContextConfig;
    }());
    egret3d.ContextConfig = ContextConfig;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Context3DProxy
    * @classdesc
    * Context3D 类提供了用于呈现几何定义图形的上下文。</p>
    *
    * 渲染上下文包括一个绘图表面及其关联的资源和状态。</p>
    * Context3D 渲染上下文是一个可编程的管道，基于OpenGL ES 2.0规范。</p>
    * 您可以通过提供适当的顶点和像素片段程序来创建 2D/3D渲染器，不同的平台有不同的硬件限制，对于移动端限制要求比较大。</p>
    * 一个canvas 只能申请一个Context3DProxy。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Context3DProxy = (function () {
        function Context3DProxy() {
        }
        /**
       * @language zh_CN
       * get GPU Context3D
       * 注册并初始化相关 GPU 参数配置信息
       * 用于设置显卡的相关参数
       * @param GPU_CONFIG
       * @param canvasRec
       * @event call
       */
        Context3DProxy.prototype.register = function () {
            var ext = Context3DProxy.gl.getExtension('WEBGL_compressed_texture_s3tc');
            var OES_texture_float_linear = Context3DProxy.gl.getExtension("OES_texture_float_linear");
            var OES_texture_float = Context3DProxy.gl.getExtension("OES_texture_float");
            var OES_texture_half_float = Context3DProxy.gl.getExtension("OES_texture_half_float");
            var OES_texture_half_float_linear = Context3DProxy.gl.getExtension("OES_texture_half_float_linear");
            var OES_standard_derivatives = Context3DProxy.gl.getExtension("OES_standard_derivatives");
            var GL_OES_standard_derivatives = Context3DProxy.gl.getExtension("GL_OES_standard_derivatives");
            var WEBGL_draw_buffers = Context3DProxy.gl.getExtension("WEBGL_draw_buffers");
            var WEBGL_depth_texture = Context3DProxy.gl.getExtension("WEBGL_depth_texture");
            egret3d.ContextConfig.BLEND = Context3DProxy.gl.BLEND;
            egret3d.DrawMode.TRIANGLES = Context3DProxy.gl.TRIANGLES;
            egret3d.DrawMode.POINTS = Context3DProxy.gl.POINTS;
            egret3d.DrawMode.LINES = Context3DProxy.gl.LINES;
            egret3d.DrawMode.LINE_STRIP = Context3DProxy.gl.LINE_STRIP;
            egret3d.ContextConfig.FLOAT = Context3DProxy.gl.FLOAT;
            egret3d.ContextConfig.VERTEX_SHADER = Context3DProxy.gl.VERTEX_SHADER;
            egret3d.ContextConfig.FRAGMENT_SHADER = Context3DProxy.gl.FRAGMENT_SHADER;
            egret3d.ContextConfig.FRONT = Context3DProxy.gl.FRONT;
            egret3d.ContextConfig.BACK = Context3DProxy.gl.BACK;
            egret3d.ContextConfig.DEPTH_BUFFER_BIT = Context3DProxy.gl.DEPTH_BUFFER_BIT;
            egret3d.ContextConfig.ELEMENT_ARRAY_BUFFER = Context3DProxy.gl.ELEMENT_ARRAY_BUFFER;
            egret3d.ContextConfig.UNSIGNED_SHORT = Context3DProxy.gl.UNSIGNED_SHORT;
            egret3d.ContextConfig.NEAREST = Context3DProxy.gl.NEAREST;
            egret3d.ContextConfig.REPEAT = Context3DProxy.gl.REPEAT;
            egret3d.ContextConfig.ONE = Context3DProxy.gl.ONE;
            egret3d.ContextConfig.ZERO = Context3DProxy.gl.ZERO;
            egret3d.ContextConfig.SRC_ALPHA = Context3DProxy.gl.SRC_ALPHA;
            egret3d.ContextConfig.ONE_MINUS_SRC_ALPHA = Context3DProxy.gl.ONE_MINUS_SRC_ALPHA;
            egret3d.ContextConfig.SRC_COLOR = Context3DProxy.gl.SRC_COLOR;
            egret3d.ContextConfig.ONE_MINUS_SRC_COLOR = Context3DProxy.gl.ONE_MINUS_SRC_COLOR;
            ;
            egret3d.ContextConfig.ColorFormat_RGB565 = Context3DProxy.gl.RGB565;
            egret3d.ContextConfig.ColorFormat_RGBA5551 = Context3DProxy.gl.RGB5_A1;
            egret3d.ContextConfig.ColorFormat_RGBA4444 = Context3DProxy.gl.RGBA4;
            egret3d.ContextConfig.ColorFormat_RGBA8888 = Context3DProxy.gl.RGBA;
            egret3d.ContextConfig.DEPTH_TEST = Context3DProxy.gl.DEPTH_TEST;
            egret3d.ContextConfig.CULL_FACE = Context3DProxy.gl.CULL_FACE;
            egret3d.ContextConfig.BLEND = Context3DProxy.gl.BLEND;
            egret3d.ContextConfig.LEQUAL = Context3DProxy.gl.LEQUAL;
            if (ext) {
                egret3d.ContextConfig.ColorFormat_DXT1_RGB = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
                egret3d.ContextConfig.ColorFormat_DXT1_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                egret3d.ContextConfig.ColorFormat_DXT3_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                egret3d.ContextConfig.ColorFormat_DXT5_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
            egret3d.ContextSamplerType.TEXTURE_0 = Context3DProxy.gl.TEXTURE0;
            egret3d.ContextSamplerType.TEXTURE_1 = Context3DProxy.gl.TEXTURE1;
            egret3d.ContextSamplerType.TEXTURE_2 = Context3DProxy.gl.TEXTURE2;
            egret3d.ContextSamplerType.TEXTURE_3 = Context3DProxy.gl.TEXTURE3;
            egret3d.ContextSamplerType.TEXTURE_4 = Context3DProxy.gl.TEXTURE4;
            egret3d.ContextSamplerType.TEXTURE_5 = Context3DProxy.gl.TEXTURE5;
            egret3d.ContextSamplerType.TEXTURE_6 = Context3DProxy.gl.TEXTURE6;
            egret3d.ContextSamplerType.TEXTURE_7 = Context3DProxy.gl.TEXTURE7;
            egret3d.ContextSamplerType.TEXTURE_8 = Context3DProxy.gl.TEXTURE8;
            console.log("requst GPU Config", Context3DProxy.gl);
            egret3d.ShaderPool.register(this);
        };
        //public creatBackBuffer(x: number, y: number, width: number, height: number) {
        //    this._canvas.style.left = x.toString();
        //    this._canvas.style.top = y.toString();
        //    this._canvas.width = width;
        //    this._canvas.height = height;
        //    this.viewPort(x, y, width, height);
        //}
        /**
        * @language zh_CN
        * 视口设置定义，用来确定我们定义的视口在canvas中的所在位置
        * @param x position X
        * @param y position Y
        * @param width  3D canvas width
        * @param height  3D canvas  height
        * @see egret3d.Egret3DCanvas
        */
        Context3DProxy.prototype.viewPort = function (x, y, width, height) {
            Context3DProxy.gl.viewport(x, y, width, height);
        };
        /**
        * @language zh_CN
        * 创建 显卡程序
        * @param vsShader
        * @param fsShader
        */
        Context3DProxy.prototype.creatProgram = function (vsShader, fsShader) {
            var shaderProgram = Context3DProxy.gl.createProgram();
            Context3DProxy.gl.attachShader(shaderProgram, vsShader.shader);
            Context3DProxy.gl.attachShader(shaderProgram, fsShader.shader);
            Context3DProxy.gl.linkProgram(shaderProgram);
            var p = Context3DProxy.gl.getProgramParameter(shaderProgram, Context3DProxy.gl.LINK_STATUS);
            if (!p) {
                alert("vsShader error" + Context3DProxy.gl.getShaderInfoLog(vsShader.shader));
                alert("fsShader error" + Context3DProxy.gl.getShaderInfoLog(fsShader.shader));
            }
            var program = new egret3d.Program3D(shaderProgram);
            return program;
        };
        /**
        * @language zh_CN
        * 创建 顶点索引流
        * @param indexData
        */
        Context3DProxy.prototype.creatIndexBuffer = function (indexData) {
            var indexDataArray = new Uint16Array(indexData);
            var indexBuffer = Context3DProxy.gl.createBuffer();
            Context3DProxy.gl.bindBuffer(Context3DProxy.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            Context3DProxy.gl.bufferData(Context3DProxy.gl.ELEMENT_ARRAY_BUFFER, indexDataArray, Context3DProxy.gl.STATIC_DRAW);
            return new egret3d.IndexBuffer3D(indexBuffer);
        };
        /**
        * @language zh_CN
        * 创建 顶点数据流
        * @param vertexData
        */
        Context3DProxy.prototype.creatVertexBuffer = function (vertexData) {
            var vertexDataArray = new Float32Array(vertexData);
            var vertexBuffer = Context3DProxy.gl.createBuffer();
            Context3DProxy.gl.bindBuffer(Context3DProxy.gl.ARRAY_BUFFER, vertexBuffer);
            Context3DProxy.gl.bufferData(Context3DProxy.gl.ARRAY_BUFFER, vertexDataArray, Context3DProxy.gl.STATIC_DRAW);
            return new egret3d.VertexBuffer3D(vertexBuffer);
        };
        /// public upLoadTextureData(mipLevel: number, texture: Texture2D , data:any ) {
        ///     /// 启用二维纹理
        ///     ///Context3DProxy.gl.enable( Context3DProxy.gl.TEXTURE );
        ///     Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, texture.texture2D);
        ///     ///if (typeof (data) == HTMLImageElement) {
        ///     /// Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, mipLevel, Context3DProxy.gl.RGBA, Context3DProxy.gl.RGBA, Context3DProxy.gl.UNSIGNED_BYTE, data);
        ///     ///}
        ///     Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, mipLevel, Context3DProxy.gl.RGBA, 128, 128, 0, Context3DProxy.gl.RGBA, Context3DProxy.gl.UNSIGNED_BYTE, data ) ;
        ///
        ///     Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MIN_FILTER, Context3DProxy.gl.NEAREST);
        ///     Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MAG_FILTER, Context3DProxy.gl.NEAREST);
        ///     Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_S, Context3DProxy.gl.REPEAT);
        ///     Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_T, Context3DProxy.gl.REPEAT);
        /// }
        /**
        * @language zh_CN
        * 设置2D纹理状态 来确定贴图的采样方式
        * @param min_filter
        * @param mag_filter
        * @param wrap_u_filter
        * @param wrap_v_filter
        */
        Context3DProxy.prototype.setTexture2DSamplerState = function (min_filter, mag_filter, wrap_u_filter, wrap_v_filter) {
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MIN_FILTER, min_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MAG_FILTER, mag_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_S, wrap_u_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_T, wrap_v_filter);
        };
        /**
        * @language zh_CN
        * 提交2D纹理
        * @param mipLevel
        * @param texture
        */
        Context3DProxy.prototype.upLoadTextureData = function (mipLevel, texture) {
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, texture.texture);
            if (texture.internalFormat == egret3d.InternalFormat.ImageData) {
                Context3DProxy.gl.pixelStorei(Context3DProxy.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
                Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, 0, Context3DProxy.gl.RGBA, Context3DProxy.gl.RGBA, Context3DProxy.gl.UNSIGNED_BYTE, texture.imageData);
            }
            else if (texture.internalFormat == egret3d.InternalFormat.CompressData) {
                this.upLoadCompressedTexture2D(mipLevel, texture);
            }
            else if (texture.internalFormat == egret3d.InternalFormat.PixelArray) {
                Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, mipLevel, texture.colorFormat, texture.mimapData[mipLevel].width, texture.mimapData[mipLevel].height, texture.border, texture.colorFormat, Context3DProxy.gl.UNSIGNED_BYTE, texture.mimapData[mipLevel].data);
            }
            if (texture.useMipmap)
                Context3DProxy.gl.generateMipmap(Context3DProxy.gl.TEXTURE_2D);
            var min_filter = (texture.smooth && texture.useMipmap) ? Context3DProxy.gl.LINEAR_MIPMAP_LINEAR : Context3DProxy.gl.LINEAR;
            var mag_filter = texture.smooth ? Context3DProxy.gl.LINEAR : Context3DProxy.gl.LINEAR;
            var wrap_u_filter = true ? Context3DProxy.gl.REPEAT : Context3DProxy.gl.CLAMP_TO_EDGE;
            var wrap_v_filter = true ? Context3DProxy.gl.REPEAT : Context3DProxy.gl.CLAMP_TO_EDGE;
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MIN_FILTER, min_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MAG_FILTER, mag_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_S, wrap_u_filter);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_T, wrap_v_filter);
        };
        /**
        * @language zh_CN
        * 提交2D压缩纹理，用硬件来解析dds贴图
        * @param mipLevel
        * @param texture
        */
        Context3DProxy.prototype.upLoadCompressedTexture2D = function (mipLevel, texture) {
            Context3DProxy.gl.compressedTexImage2D(Context3DProxy.gl.TEXTURE_2D, mipLevel, texture.colorFormat, texture.mimapData[mipLevel].width, texture.mimapData[mipLevel].height, texture.border, texture.mimapData[mipLevel].data);
        };
        /**
        * @language zh_CN
        * 创建 2维贴图 向显卡提交buffer申请 并创建Texture2D对象
        */
        Context3DProxy.prototype.creatTexture2D = function () {
            var texture = new egret3d.Texture2D();
            texture.texture = Context3DProxy.gl.createTexture();
            return texture;
        };
        /**
        * @language zh_CN
        * 创建 Cube贴图 向显卡提交buffer申请 并创建Texture3D对象
        */
        Context3DProxy.prototype.creatCubeTexture = function () {
            var texture = new egret3d.Texture3D();
            texture.texture = Context3DProxy.gl.createTexture();
            return texture;
        };
        /**
        * @language zh_CN
        * @private
        * @param tex
        */
        Context3DProxy.prototype.uploadCubetexture = function (tex) {
            /// 创建纹理并绑定纹理数据
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_CUBE_MAP, tex.texture);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_right.imageData);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_left.imageData);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_up.imageData);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_down.imageData);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_back.imageData);
            Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, tex.image_front.imageData);
            ///Context3DProxy.gl.generateMipmap(Context3DProxy.gl.TEXTURE_CUBE_MAP);
            ///gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            ///Context3DProxy.gl.texParameterf(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_MAG_FILTER, Context3DProxy.gl.LINEAR_MIPMAP_NEAREST);
            ///Context3DProxy.gl.texParameterf(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_MIN_FILTER, Context3DProxy.gl.LINEAR_MIPMAP_NEAREST);
            ///Context3DProxy.gl.texParameterf(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_WRAP_S, Context3DProxy.gl.CLAMP_TO_EDGE);
            ///Context3DProxy.gl.texParameterf(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_WRAP_T, Context3DProxy.gl.CLAMP_TO_EDGE);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_MAG_FILTER, Context3DProxy.gl.LINEAR);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_MIN_FILTER, Context3DProxy.gl.LINEAR);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_WRAP_S, Context3DProxy.gl.CLAMP_TO_EDGE);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_CUBE_MAP, Context3DProxy.gl.TEXTURE_WRAP_T, Context3DProxy.gl.CLAMP_TO_EDGE);
            ///Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MIN_FILTER, min_filter);
            ///Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MAG_FILTER, mag_filter);
            ///Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_S, wrap_u_filter);
            ///Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_T, wrap_v_filter);
        };
        /**
        * @language zh_CN
        * @private
        * @param width
        * @param height
        * @param format
        */
        Context3DProxy.prototype.createFramebuffer = function (width, height, format) {
            var rttframeBuffer = Context3DProxy.gl.createFramebuffer();
            var texture2D = this.creatTexture2D();
            var depthRenderbuffer = Context3DProxy.gl.createRenderbuffer();
            Context3DProxy.gl.bindFramebuffer(Context3DProxy.gl.FRAMEBUFFER, rttframeBuffer);
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, texture2D.texture);
            var float = new Float32Array(32 * 32 * 4);
            for (var i = 0; i < 32 * 32; i++) {
                float[i] = 1.0;
                float[i + 1] = 1.0;
                float[i + 2] = 1.0;
                float[i + 3] = 1.0;
            }
            switch (format) {
                case egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB:
                    Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, 0, Context3DProxy.gl.RGB, width, height, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.UNSIGNED_BYTE, null);
                    break;
                case egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGBA:
                    Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, 0, Context3DProxy.gl.RGBA, width, height, 0, Context3DProxy.gl.RGBA, Context3DProxy.gl.UNSIGNED_BYTE, null);
                    break;
                case egret3d.FrameBufferFormat.FLOAT_RGB:
                    Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, 0, Context3DProxy.gl.RGB, width, height, 0, Context3DProxy.gl.RGB, Context3DProxy.gl.FLOAT, float);
                    break;
                case egret3d.FrameBufferFormat.FLOAT_RGBA:
                    Context3DProxy.gl.texImage2D(Context3DProxy.gl.TEXTURE_2D, 0, Context3DProxy.gl.RGBA, width, height, 0, Context3DProxy.gl.RGBA, Context3DProxy.gl.FLOAT, float);
                    break;
            }
            Context3DProxy.gl.framebufferTexture2D(Context3DProxy.gl.FRAMEBUFFER, Context3DProxy.gl.COLOR_ATTACHMENT0, Context3DProxy.gl.TEXTURE_2D, texture2D.texture, 0);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MAG_FILTER, Context3DProxy.gl.LINEAR);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_MIN_FILTER, Context3DProxy.gl.LINEAR);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_S, Context3DProxy.gl.CLAMP_TO_EDGE);
            Context3DProxy.gl.texParameteri(Context3DProxy.gl.TEXTURE_2D, Context3DProxy.gl.TEXTURE_WRAP_T, Context3DProxy.gl.CLAMP_TO_EDGE);
            ///Context3DProxy.gl.generateMipmap(Context3DProxy.gl.TEXTURE_2D);  
            ///配置渲染缓冲 
            Context3DProxy.gl.bindRenderbuffer(Context3DProxy.gl.RENDERBUFFER, depthRenderbuffer);
            Context3DProxy.gl.renderbufferStorage(Context3DProxy.gl.RENDERBUFFER, Context3DProxy.gl.DEPTH_COMPONENT16, width, height);
            texture2D.width = width;
            texture2D.height = height;
            texture2D.frameBuffer = rttframeBuffer;
            texture2D.renderbuffer = depthRenderbuffer;
            Context3DProxy.gl.bindFramebuffer(Context3DProxy.gl.FRAMEBUFFER, null);
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, null);
            Context3DProxy.gl.bindRenderbuffer(Context3DProxy.gl.RENDERBUFFER, null);
            return texture2D;
        };
        /**
        * @language zh_CN
        * @private
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        Context3DProxy.prototype.setRenderToTexture = function (texture, enableDepthAndStencil, surfaceSelector) {
            if (enableDepthAndStencil === void 0) { enableDepthAndStencil = false; }
            if (surfaceSelector === void 0) { surfaceSelector = 0; }
            if (enableDepthAndStencil) {
            }
            Context3DProxy.gl.viewport(0, 0, texture.width, texture.height);
            //if (Context3DProxy.gl.checkFramebufferStatus(Context3DProxy.gl.FRAMEBUFFER) != Context3DProxy.gl.FRAMEBUFFER_COMPLETE)
            //{
            //    alert("缓冲失败");
            //}
            Context3DProxy.gl.bindFramebuffer(Context3DProxy.gl.FRAMEBUFFER, texture.frameBuffer);
            Context3DProxy.gl.clear(Context3DProxy.gl.COLOR_BUFFER_BIT | Context3DProxy.gl.DEPTH_BUFFER_BIT);
            Context3DProxy.gl.framebufferTexture2D(Context3DProxy.gl.FRAMEBUFFER, Context3DProxy.gl.COLOR_ATTACHMENT0, Context3DProxy.gl.TEXTURE_2D, texture.texture, 0);
            Context3DProxy.gl.framebufferRenderbuffer(Context3DProxy.gl.FRAMEBUFFER, Context3DProxy.gl.DEPTH_ATTACHMENT, Context3DProxy.gl.RENDERBUFFER, texture.renderbuffer);
        };
        /**
        * @language zh_CN
        * @private
        *
        */
        Context3DProxy.prototype.setRenderToBackBuffer = function () {
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, null);
            Context3DProxy.gl.bindFramebuffer(Context3DProxy.gl.FRAMEBUFFER, null);
            Context3DProxy.gl.bindRenderbuffer(Context3DProxy.gl.RENDERBUFFER, null);
        };
        /**
        * @language zh_CN
        * 向显卡请求创建顶点shader对象
        * @param source shader代码内容
        */
        Context3DProxy.prototype.creatVertexShader = function (source) {
            var shader = Context3DProxy.gl.createShader(Context3DProxy.gl.VERTEX_SHADER);
            Context3DProxy.gl.shaderSource(shader, source);
            Context3DProxy.gl.compileShader(shader);
            var tmpShader = new egret3d.Shader(shader);
            tmpShader.id = (egret3d.Shader.ID_COUNT++).toString();
            return tmpShader;
        };
        /**
        * @language zh_CN
        * 向显卡请求创建片段shader对象
        * @param source shader代码内容
        */
        Context3DProxy.prototype.creatFragmentShader = function (source) {
            var shader = Context3DProxy.gl.createShader(Context3DProxy.gl.FRAGMENT_SHADER);
            Context3DProxy.gl.shaderSource(shader, source);
            Context3DProxy.gl.compileShader(shader);
            var tmpShader = new egret3d.Shader(shader);
            tmpShader.id = (egret3d.Shader.ID_COUNT++).toString();
            return tmpShader;
        };
        /**
        * @language zh_CN
        * 清除渲染buffer
        * @param BUFFER_BIT r g b a 0x00000000
        */
        Context3DProxy.prototype.clear = function (BUFFER_BIT) {
            Context3DProxy.gl.clear(BUFFER_BIT);
        };
        /**
        * @language zh_CN
        * 清除渲染区域的颜色 深度
        * @param r 红色值
        * @param g 绿色值
        * @param b 蓝色值
        * @param a alpha值
        */
        Context3DProxy.prototype.clearColor = function (r, g, b, a) {
            Context3DProxy.gl.clearColor(r, g, b, a);
        };
        ///**
        //* @language zh_CN
        //* 清除渲染区域的 深度
        //* @param depth
        //*/
        //public clearDepth(depth: number=1.0) {
        //    Context3DProxy.gl.clearDepth(depth);
        //    Context3DProxy.gl.clear(Context3DProxy.gl.DEPTH_BUFFER_BIT);
        //}
        /**
        * @language zh_CN
        * 清除渲染区域的 模板
        * @param stencil 模板值
        */
        Context3DProxy.prototype.clearStencil = function (stencil) {
            Context3DProxy.gl.clearStencil(stencil);
        };
        /**
        * @language zh_CN
        * 使用显卡着色器
        * @param program 设置当学显卡当前渲染程序
        */
        Context3DProxy.prototype.setProgram = function (program) {
            if (this._cacheProgram != program) {
                this._cacheProgram = program;
                Context3DProxy.gl.useProgram(program.program);
            }
        };
        /**
        * @language zh_CN
        * 获取矩阵变量ID
        * @param program
        * @param name
        */
        Context3DProxy.prototype.getUniformLocation = function (programe3D, name) {
            return Context3DProxy.gl.getUniformLocation(programe3D.program, name);
        };
        /**
        * @language zh_CN
        * 传值给shader一个float
        * @param location 指明要更改的uniform变量
        * @param x  uniform变量变量值
        */
        Context3DProxy.prototype.uniform1f = function (location, x) {
            Context3DProxy.gl.uniform1f(location, x);
        };
        /**
        * @language zh_CN
        * 传值给shader 一个vec3(float, float, float) 也可以是一个vec3数组
        * @param location 指明要更改的uniform变量
        * @param v uniform变量变量值Float32Array[3]
        */
        Context3DProxy.prototype.uniform1fv = function (location, v) {
            Context3DProxy.gl.uniform1fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader一个int
        * @param location 指明要更改的uniform变量
        * @param x uniform变量变量值
        */
        Context3DProxy.prototype.uniform1i = function (location, x) {
            Context3DProxy.gl.uniform1i(location, x);
        };
        /**
        * @language zh_CN
        * 传值给shader一个int数组
        * @param location 指明要更改的uniform变量
        * @param v int数组的值
        */
        Context3DProxy.prototype.uniform1iv = function (location, v) {
            Context3DProxy.gl.uniform1iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader两个float
        * @param location 指明要更改的uniform变量
        * @param x float x 的值
        * @param y float y 的值
        */
        Context3DProxy.prototype.uniform2f = function (location, x, y) {
            Context3DProxy.gl.uniform2f(location, x, y);
        };
        /**
        * @language zh_CN
        * 传值给shader vec(float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[2]
        */
        Context3DProxy.prototype.uniform2fv = function (location, v) {
            Context3DProxy.gl.uniform2fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 两个int值
        * @param location 指明要更改的uniform变量
        * @param x number x 的值
        * @param y number y 的值
        */
        Context3DProxy.prototype.uniform2i = function (location, x, y) {
            Context3DProxy.gl.uniform2i(location, x, y);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location 指明要更改的uniform变量
        * @param v
        */
        Context3DProxy.prototype.uniform2iv = function (location, v) {
            Context3DProxy.gl.uniform2iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 3个float
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        */
        Context3DProxy.prototype.uniform3f = function (location, x, y, z) {
            Context3DProxy.gl.uniform3f(location, x, y, z);
        };
        /**
        * @language zh_CN
        * 传值给shader vec3(float, float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[3]
        */
        Context3DProxy.prototype.uniform3fv = function (location, v) {
            Context3DProxy.gl.uniform3fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 3个int
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        */
        Context3DProxy.prototype.uniform3i = function (location, x, y, z) {
            Context3DProxy.gl.uniform3i(location, x, y, z);
        };
        /**
        * @language zh_CN
        * 传值给shader vec3(int, int, int)
        * @param location 指明要更改的uniform变量
        * @param v Int32Array[3]
        */
        Context3DProxy.prototype.uniform3iv = function (location, v) {
            Context3DProxy.gl.uniform3iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 4个float值
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        Context3DProxy.prototype.uniform4f = function (location, x, y, z, w) {
            Context3DProxy.gl.uniform4f(location, x, y, z, w);
        };
        /**
        * @language zh_CN
        * 传值给shader vec(float, float, float, float)
        * @param location 指明要更改的uniform变量
        * @param v Float32Array[4]
        */
        Context3DProxy.prototype.uniform4fv = function (location, v) {
            Context3DProxy.gl.uniform4fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 4个int值
        * @param location 指明要更改的uniform变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        Context3DProxy.prototype.uniform4i = function (location, x, y, z, w) {
            Context3DProxy.gl.uniform4i(location, x, y, z, w);
        };
        /**
        * @language zh_CN
        * 传值给shader vec4(int, int, int, int)
        * @param location 指明要更改的uniform变量
        * @param v Int32Array[4]
        */
        Context3DProxy.prototype.uniform4iv = function (location, v) {
            Context3DProxy.gl.uniform4iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader 2 * 2矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[4]
        */
        Context3DProxy.prototype.uniformMatrix2fv = function (location, transpose, value) {
            Context3DProxy.gl.uniformMatrix2fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 传值给shader 3 * 3矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[9]
        */
        Context3DProxy.prototype.uniformMatrix3fv = function (location, transpose, value) {
            Context3DProxy.gl.uniformMatrix3fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 传值给shader 4 * 4矩阵
        * @param location 指明要更改的uniform变量
        * @param transpose 是否转置
        * @param value 矩阵值 Float32Array[16]
        */
        Context3DProxy.prototype.uniformMatrix4fv = function (location, transpose, value) {
            Context3DProxy.gl.uniformMatrix4fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 设置 绘制混合模式
        * @param src
        * @param dst
        */
        Context3DProxy.prototype.setBlendFactors = function (src, dst) {
            Context3DProxy.gl.blendFunc(src, dst);
        };
        /**
        * @language zh_CN
        * 设置 绘制剔除模式
        * @param mode
        * @see egret3d.ContextConfig.FRONT
        * @see egret3d.ContextConfig.BACK
        */
        Context3DProxy.prototype.setCulling = function (mode) {
            Context3DProxy.gl.cullFace(mode);
        };
        /**
        * @language zh_CN
        * 开启 绘制模式
        * @param cap
        */
        Context3DProxy.prototype.enable = function (cap) {
            Context3DProxy.gl.enable(cap);
        };
        /**
        * @language zh_CN
        * 关闭 绘制模式
        * @param cap
        */
        Context3DProxy.prototype.disable = function (cap) {
            Context3DProxy.gl.disable(cap);
        };
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        Context3DProxy.prototype.depthFunc = function (compareMode) {
            if (compareMode === void 0) { compareMode = 0; }
            Context3DProxy.gl.depthFunc(compareMode);
        };
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        Context3DProxy.prototype.enableDepthTest = function (flag, compareMode) {
            if (compareMode === void 0) { compareMode = 0; }
            if (flag)
                Context3DProxy.gl.enable(Context3DProxy.gl.DEPTH_TEST);
        };
        /**
        * @language zh_CN
        * 获取顶点着色器变量 索引
        * @param programe
        * @param attribName
        * @returns 着色器变量
        */
        Context3DProxy.prototype.getShaderAttribLocation = function (programe, attribName) {
            return Context3DProxy.gl.getAttribLocation(programe.program, attribName);
        };
        /**
        * @language zh_CN
        * 指定顶点着色器变量索引及结构
        * @param index 变量索引
        * @param size  数据个数
        * @param dataType  数据类型
        * @param normalized 是否单位化
        * @param stride 字节数
        * @param offset 当前变量字节偏移
        */
        Context3DProxy.prototype.vertexAttribPointer = function (index, size, dataType, normalized, stride, offset) {
            Context3DProxy.gl.vertexAttribPointer(index, size, dataType, normalized, stride, offset);
            Context3DProxy.gl.enableVertexAttribArray(index);
        };
        /**
        * @language zh_CN
        * @private
        * 实时传入显卡顶点着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        Context3DProxy.prototype.setVertexShaderConstData = function (floats, offest, numLen) {
            Context3DProxy.gl.vertexAttrib4fv(offest, floats.subarray(offest, numLen));
        };
        /**
        * @language zh_CN
        * @private
        * 实时传入显卡片段着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        Context3DProxy.prototype.setFragmentShaderConstData = function (floats, offest, numLen) {
        };
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex  ContextSamplerType
        * @param uniLocation
        * @param index
        * @param texture
        * @see egret3d.ContextSamplerType
        */
        Context3DProxy.prototype.setTexture2DAt = function (samplerIndex, uniLocation, index, texture) {
            Context3DProxy.gl.activeTexture(samplerIndex);
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_2D, texture.texture);
            Context3DProxy.gl.uniform1i(uniLocation, index);
        };
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex  ContextSamplerType
        * @param uniLocation
        * @param index
        * @param texture
        * @see egret3d.ContextSamplerType
        */
        Context3DProxy.prototype.setCubeTextureAt = function (samplerIndex, uniLocation, index, texture) {
            Context3DProxy.gl.activeTexture(samplerIndex);
            Context3DProxy.gl.bindTexture(Context3DProxy.gl.TEXTURE_CUBE_MAP, texture.texture);
            Context3DProxy.gl.uniform1i(uniLocation, index);
        };
        /**
        * @language zh_CN
        * @private
        * 设置矩形裁切区域
        * @param rectangle
        */
        Context3DProxy.prototype.setScissorRectangle = function (x, y, width, height) {
            Context3DProxy.gl.scissor(x, y, width, height);
        };
        /**
        * @language zh_CN
        * @private
        * 设置模板测试
        */
        Context3DProxy.prototype.setStencilReferenceValue = function () {
        };
        /**
        * @language zh_CN
        * @private
        * 设置模板测试
        */
        Context3DProxy.prototype.setStencilActions = function (triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail) {
        };
        /**
        * @language zh_CN
        * 绑定顶点Buffer
        * @param vertexBuffer
        */
        Context3DProxy.prototype.bindVertexBuffer = function (vertexBuffer) {
            Context3DProxy.gl.bindBuffer(Context3DProxy.gl.ARRAY_BUFFER, vertexBuffer.buffer);
        };
        /**
       * @language zh_CN
       * 绑定顶点索引Buffer
       * @param vertexBuffer
       */
        Context3DProxy.prototype.bindIndexBuffer = function (indexBuffer) {
            Context3DProxy.gl.bindBuffer(Context3DProxy.gl.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
        };
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        Context3DProxy.prototype.drawArrays = function (type, first, length) {
            Context3DProxy.gl.drawArrays(type, first, length);
        };
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param indexBuffer 索引数据
        * @param offset 顶点索引偏移 (字节数)
        * @param length 顶点个数
        */
        Context3DProxy.prototype.drawElement = function (type, offset, length) {
            Context3DProxy.gl.drawElements(type, length, Context3DProxy.gl.UNSIGNED_SHORT, offset);
        };
        /**
        * @language zh_CN
        * @private
        * 绘制提交
        */
        Context3DProxy.prototype.flush = function () {
            Context3DProxy.gl.flush();
        };
        return Context3DProxy;
    }());
    egret3d.Context3DProxy = Context3DProxy;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.FrameBuffer
    * @classdesc
    * FrameBuffer 类提供了用于呈现几何定义图形的上下文的帧缓冲对象。</p>
    *
    * 渲染上下文包括一个绘图表面及其关联的资源帧缓冲对象。</p>
    * 通过context creatFrameBuffer 来创建，不能直接使用 new 的方式实例化。</p>
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var FrameBuffer = (function () {
        function FrameBuffer() {
        }
        return FrameBuffer;
    }());
    egret3d.FrameBuffer = FrameBuffer;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.IndexBuffer3D
    * @classdesc
    * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
    *
    * 定义一个立方图纹理，以便在渲染期间使用。立方体贴图可用于多种渲染技术，例如环境图、skyboxes 和 skylight 光照。</p>
    * 不能直接创建 CubeTexture 对象，而应使用 Context3D createCubeTexture()。</p>
    *
    * 由 IndexBuffer3D 对象管理的索引可用于从顶点流中选择顶点。索引为 16 位无符号整数。所允许的最大索引值为 65535 (0xffff)。图形子系统不会保留对提供给此对象的顶点的引用。修改或丢弃上载到此对象中的数据不会影响已存储的值。</p>

    * 无法直接实例化 IndexBuffer3D。使用 Context3D.CreateIndexBuffer() 可创建实例。</p>
    * @see egret3d.Context3D
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var IndexBuffer3D = (function () {
        /**
        * @language zh_CN
        * 构造
        * @param buffer webglbuffer
        */
        function IndexBuffer3D(buffer) {
            this.buffer = buffer;
        }
        return IndexBuffer3D;
    }());
    egret3d.IndexBuffer3D = IndexBuffer3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.IndexBuffer3D
     * @classdesc
     * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
     * VertexBuffer3D 类表示上载到渲染上下文的一组顶点数据。</p>
     * 使用 VertexBuffer3D 对象定义与一组顶点中每个点相关联的数据。</p>
     * 您可以从 Vector 数组或 ByteArray 上载顶点数据。（上载完成后，将不再引用原始数组中的数据；更改或放弃源数组不会更改顶点数据。）</p>
     * 与每个顶点相关联的数据采用应用程序定义的格式，并用作顶点着色器程序的输入。</p>
     * 使用 Context3D.vertexAttribPointer  函数标识哪些值属于哪个顶点程序输入。</p>
     * 一个顶点程序最多可以使用 8 个输入（也称为顶点属性寄存器）。</p>
     * 每个输入可能需要 1 到 4 个 32 位值。</p>
     * 例如，一个顶点的 [x,y,z] 位置坐标可以作为包含 3 个 32 位值的矢量传递到顶点程序。</p>
     * 您最多可以为每个点提供 64 个 32 位值（256 字节）数据（但在这种情况下，单个顶点着色器无法使用所有数据）。</p>
     * @see egret3d.Context3DProxy
     * @see egret3d.CubeTexture
     * @version Egret 3.0
     * @platform Web,Native
     */
    var VertexBuffer3D = (function () {
        /**
         * @language zh_CN
         * 构造
         * @param buffer webglbuffer
         */
        function VertexBuffer3D(buffer) {
            this.buffer = buffer;
        }
        return VertexBuffer3D;
    }());
    egret3d.VertexBuffer3D = VertexBuffer3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.MipmapData
    * @classdesc
    * 一个贴图的不同LOD层级数据。</p>
    * 生成 mipmap 可以使用 TextureUtil.generateMipMaps() 来制作lod mipmapdata。</p>
    *
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var MipmapData = (function () {
        function MipmapData(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
        }
        return MipmapData;
    }());
    egret3d.MipmapData = MipmapData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Program3D
    * @classdesc
    * Program3D 类表示上载到渲染上下文的一对渲染程序（也称为“编译后的着色器”）。</p>
    *
    * 由 Program3D 对象管理的程序控制 drawTriangles 调用期间的整个三角形渲染。使用 upload 方法将二进制字节码上载到渲染上下文。（上载完成后，将不再引用原始字节数组中的数据；更改或放弃源字节数组不会更改该程序。）。</p>
    * 这些程序始终由两个相互关联的部分组成：顶点程序和片段程序。</p>
    * 顶点程序会操作 VertexBuffer3D 中定义的数据，负责将顶点投影到剪辑空间，并将任何所需的顶点数据（例如颜色）传递到片段着色器。</p>
    * 片段着色器会操作顶点程序传递给它的属性，并为三角形的每个栅格化片段生成颜色，最终形成像素颜色。请注意，片段程序在 3D 编程文献中具有多个名称，包括片段着色器和像素着色器。</p>
    * 通过将相应 Program3D 实例传递到 Context3D setProgram() 方法，指定后续渲染操作要使用的程序对。</p>
    * 您无法直接创建 Program3D 对象；请改用 Context3D createProgram() 方法。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Program3D = (function () {
        /**
        * @language zh_CN
        * 构造
        */
        function Program3D(pg3D) {
            this.program = pg3D;
        }
        return Program3D;
    }());
    egret3d.Program3D = Program3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Texture2D
    * @classdesc
    * Texture 类表示上载到渲染上下文的二维纹理。</p>
    *
    * 定义一个 2D 纹理，以便在渲染期间使用。</p>
    * 无法直接实例化 Texture。使用 Context3D createTexture() 方法创建实例。</p>
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Texture2D = (function () {
        /**
         * @language zh_CN
         * 构造函数
         */
        function Texture2D() {
            /**
             * @language zh_CN
             * 是否使用mipmap
             */
            this.useMipmap = true;
            /**
            * @language zh_CN
            * 是否自动模糊
            */
            this.smooth = true;
            this.border = 0;
            this.useMipmap = true;
            this.imageData = null;
            this.colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888;
            this.internalFormat = egret3d.InternalFormat.PixelArray;
            this.mimapData = new Array();
        }
        return Texture2D;
    }());
    egret3d.Texture2D = Texture2D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.RenderTexture
    * @private
    * @classdesc
    * RenderTexture 类为渲染目标纹理，用于离屏渲染中。
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/RenderTexture.ts
    */
    var RenderTexture = (function (_super) {
        __extends(RenderTexture, _super);
        /**
         * @language zh_CN
         * 构造函数
         * @param texture ITexture2D对象
         */
        function RenderTexture() {
            _super.call(this);
            this.useMipmap = false;
        }
        return RenderTexture;
    }(egret3d.Texture2D));
    egret3d.RenderTexture = RenderTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Shader
    * @classdesc
    * Shader 类表示上载到渲染上下文的一对渲染程序中的 顶点找色shader，或片段着色的shader 。</p>
    *
    * shader 是基于 opengl es 2.0 标准 也就是webgl版本的shader着色器。</p>
    *
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Shader = (function () {
        /**
        * @language zh_CN
        * 构造
        */
        function Shader(shader) {
            this._shader = shader;
        }
        Object.defineProperty(Shader.prototype, "shader", {
            /**
            * @language zh_CN
            * @private
            * WebGLShader 的引用
            */
            get: function () {
                return this._shader;
            },
            enumerable: true,
            configurable: true
        });
        /**
      * @language zh_CN
      * @private
      * 声明 shader 为顶点 类型
      * @see egret3d.ShaderPool
      */
        Shader.vertex = 0;
        /**
   * @language zh_CN
   * @private
   * 声明 shader 为片段 类型
   * @see egret3d.ShaderPool
   */
        Shader.fragment = 1;
        /**
       * @language zh_CN
       * @private
       * 获取已经有的shader 的ID
       */
        Shader.ID_COUNT = 0;
        return Shader;
    }());
    egret3d.Shader = Shader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Texture3D
    * @classdesc
    * 由6加Texture2D 组成
    * 可以使一个6面体上贴出不同的贴图
    * @see egret3d.Program3D
    * @see egret3d.IndexBuffer3D
    * @see egret3d.VertexBuffer3D
    * @see egret3d.Texture2D
    * @see egret3d.Shader
    * @see egret3d.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Texture3D = (function () {
        /**
         * @language zh_CN
         * 构造函数
         */
        function Texture3D() {
            this.border = 0;
            this.useMipmap = true;
            this.colorformat = egret3d.ContextConfig.ColorFormat_RGBA8888;
            this.internalformat = egret3d.InternalFormat.PixelArray;
            this.mimapData = new Array();
        }
        return Texture3D;
    }());
    egret3d.Texture3D = Texture3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 拣选类型，拣选时可以分为，包围盒拣选、模型拣选返回模型拣选到的位置、模型拣选返回模型拣选到的UV坐标
    * 这几种拣选方式
    * 设置鼠标拣选的类型，鼠标拣选不同的类型有不同的效果作用，还有性能
    * 需要的拣选精度越高，性能要求就越高，反之亦然
    *
    * @see egret3d.Picker
    * @version Egret 3.0
    * @platform Web,Native
    */
    (function (PickType) {
        /**
        * 包围盒拣选
        */
        PickType[PickType["BoundPick"] = 0] = "BoundPick";
        /**
        * 模型拣选返回模型拣选到的位置
        */
        PickType[PickType["PositionPick"] = 1] = "PositionPick";
        /**
        * 模型拣选返回模型拣选到的UV坐标
        */
        PickType[PickType["UVPick"] = 2] = "UVPick";
    })(egret3d.PickType || (egret3d.PickType = {}));
    var PickType = egret3d.PickType;
    ;
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 3d空间中的实体对象。
    * 场景图中的Object3D对象是一个树型结构，对象中包含了变换信息.
    * 这些变换信息应用于所有的子对象,子对象也有自己的变换信息,最终
    * 的变换信息要结合父对象的变换信息
    * 每个Object3D对象在生成时会创建一个包围盒
    *
    * @see egret3d.Vector3D
    * @see egret3d.Matrix4_4
    * @see egret3d.Quaternion
    * @see egret3d.Bound
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Object3D = (function (_super) {
        __extends(Object3D, _super);
        /**
        * @language zh_CN
        * 如果直接实例化这个类，就会生成一个空的3D容器，可以往里添加3D显示对象，作为对象的父级，但是本身没有渲染属性。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Object3D() {
            _super.call(this);
            this._modeMatrix3D = new egret3d.Matrix4_4();
            this._sceneTransform = new egret3d.Matrix4_4();
            this._transformChange = true;
            this._pos = new egret3d.Vector3D();
            this._rot = new egret3d.Vector3D();
            this._sca = new egret3d.Vector3D(1, 1, 1);
            this._orientation = new egret3d.Quaternion();
            this._axis = new egret3d.Vector3D();
            this._angle = 0;
            this._globalPos = new egret3d.Vector3D();
            this._globalRot = new egret3d.Vector3D();
            this._globalSca = new egret3d.Vector3D(1, 1, 1);
            this._globalOrientation = new egret3d.Quaternion();
            this._qut = new egret3d.Quaternion();
            this._vec = new egret3d.Vector3D();
            this._active = false;
            this._isRoot = true;
            /**
            * @language zh_CN
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.canPick = false;
            /**
            * @language zh_CN
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.renderLayer = 0;
            /**
            * @language zh_CN
            * 是否开启检测LOD盒子，每个物体的碰撞盒子中有一个小的盒子，当开启这个盒子后，
            * 鼠标检测就是用的这个小盒子来进行检测
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.mouseChilder = false;
            /**
            * @language zh_CN
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.enableCulling = true;
            /**
            * @language zh_CN
            * 是否可见
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.visible = true;
            /**
            * @language zh_CN
            * 渲染层级 。</p>
            * 渲染时分组进行依次渲染 前16位表示tag,后16位表示layer。</p>
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.layer = 0x00000000;
            /**
            * @language zh_CN
            * 是否开启拣选检测。</p>
            * 设定这个物件是否具有 鼠标交互能力的开关。</p>
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.enablePick = false;
            /**
            * @language zh_CN
            * 是否需要视锥体裁剪。</p>
            * 设定这个物件是否具有 视锥体裁剪功能，为否的话，将永远不参加场景渲染剔除树，无论是否在显示范围内都会进行相关的渲染逻辑运算。</p>
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.enableCut = true;
            /**
            * @language zh_CN
            * 父亲节点
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.parent = null;
            /**
            * @language zh_CN
            * 子对象列表。</p>
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.childs = new Array();
            /**
            * @language zh_CN
            * 是否控制，当摄像机被绑定摄像机动画时，这个值为false.
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.isController = true;
            /**
            * @language zh_CN
            * 是否关闭
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.isDisable = false;
            this.id = ++Object3D.s_id;
        }
        Object.defineProperty(Object3D.prototype, "currentBound", {
            /**
            * @language zh_CN
            * 对象模型当前使用包围盒。
            * @see mouseChilder 根据这个值取不同的包围盒为true取大包围盒 false取子包围盒
            *
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this.mouseChilder) {
                    return this.bound.childBound;
                }
                return this.bound;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "position", {
            /**
            * @language zh_CN
            * 返回位移。</p>
            * 获取容器的坐标位置，基于父节点的位置坐标。</p>
            * @returns 位移
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._pos;
            },
            /**
            * @language zh_CN
            * 设置位移。</p>
            * 设置基于父节点的位置坐标，当父容器发生变化时，子节点也会变化。</p>
            * @param vec 位移
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (vec) {
                this.updateTransformChange(true);
                this._pos.copyFrom(vec);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotation", {
            /**
            * @language zh_CN
            * 返回旋转。</p>
            * 获取容器的旋转信息，基于父节点的旋转信息 欧拉角信息。</p>
            * @returns 旋转 欧拉角信息
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rot;
            },
            /**
            * @language zh_CN
            * 设置旋转 。</p>
            * 设置基于父节点的旋转信息 欧拉角信息，当父容器发生变化时，子节点也会变化。</p>
            * @param vec 旋转 欧拉角信息
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._rot.x = value.x;
                this._rot.y = value.y;
                this._rot.z = value.z;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
                this._angle = this._orientation.toAxisAngle(this._axis);
                this.updateTransformChange(true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "orientation", {
            /**
            * @language zh_CN
            * 返回旋转。</p>
            * 返回 基于四元素的旋转信息。</p>
            * @returns 旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._orientation;
            },
            /**
            * @language zh_CN
            * 设置旋转。</p>
            * 设置旋转 基于四元素 旋转信息，当父容器发生变化时，子节点也会变化。</p>
            * @param value 旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._orientation.copyFrom(value);
                this._orientation.toEulerAngles(this._rot);
                this._angle = this._orientation.toAxisAngle(this._axis);
                this.updateTransformChange(true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scale", {
            /**
            * @language zh_CN
            * 返回缩放。</p>
            * 返回基于父容器的缩放信息。</p>
            * @returns 缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._sca;
            },
            /**
            * @language zh_CN
            * 设置缩放。</p>
            * 设置基于父容器的缩放信息，当父容器发生变化时，子节点也会变化。</p>
            * @param vec 缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (val) {
                this.updateTransformChange(true);
                this._sca = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "x", {
            /**
            * @language zh_CN
            * 返回x坐标
            * 返回基于父容器的位置坐标信息值
            * @returns x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._pos.x;
            },
            /**
            * @language zh_CN
            * 设置x坐标。</p>
            * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.x == value)
                    return;
                this._pos.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "y", {
            /**
            * @language zh_CN
            * 返回y坐标
            *
            * 返回基于父容器的位置坐标信息值
            * @returns y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._pos.y;
            },
            /**
            * @language zh_CN
            * 设置y坐标。</p>
            * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.y == value)
                    return;
                this._pos.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "z", {
            /**
            * @language zh_CN
            * 返回z坐标
            *
            * 返回基于父容器的位置坐标信息值
            * @returns z坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._pos.z;
            },
            /**
            * @language zh_CN
            * 设置z坐标。</p>
            * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value z坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.z == value)
                    return;
                this._pos.z = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationX", {
            /**
            * @language zh_CN
            * 返回x旋转
            *
            * 返回基于父容器的位置旋转信息值
            * @returns x旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rot.x;
            },
            /**
            * @language zh_CN
            * 设置x轴旋转。</p>
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value x轴旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.x == value)
                    return;
                this._rot.x = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
                this._angle = this._orientation.toAxisAngle(this._axis);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationY", {
            /**
            * @language zh_CN
            * 返回y旋转
            *
            * 返回基于父容器的位置旋转信息值
            * @returns y旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rot.y;
            },
            /**
            * @language zh_CN
            * 设置y轴旋转。</p>
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value y轴旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.y == value)
                    return;
                this._rot.y = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
                this._angle = this._orientation.toAxisAngle(this._axis);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationZ", {
            /**
            * @language zh_CN
            * 返回z旋转
            *
            * 返回基于父容器的位置旋转信息值
            * @returns z旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._rot.z;
            },
            /**
            * @language zh_CN
            * 设置z轴旋转。</p>
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变。</p>
            * @param value z轴旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.z == value)
                    return;
                this._rot.z = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
                this._angle = this._orientation.toAxisAngle(this._axis);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleX", {
            /**
            * @language zh_CN
            * 返回x缩放
            * 返回基于父容器的缩放信息值
            * @returns x缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._sca.x;
            },
            /**
            * @language zh_CN
            * 设置x轴缩放。</p>
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
            * @param value x轴缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.x == value)
                    return;
                this._sca.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleY", {
            /**
            * @language zh_CN
            * 返回y缩放
            * 返回基于父容器的缩放信息值
            * @returns y缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._sca.y;
            },
            /**
            * @language zh_CN
            * 设置y轴缩放
            *
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
            * @param value y轴缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.y == value)
                    return;
                this._sca.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleZ", {
            /**
            * @language zh_CN
            * 返回z缩放
            * 返回基于父容器的缩放信息值
            * @returns z缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._sca.z;
            },
            /**
            * @language zh_CN
            * 设置z轴缩放
            *
            * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
            * @param value z轴缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.z == value)
                    return;
                this._sca.z = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 以axis轴为中心进行旋转
        * 设置基于父容器的旋转信息，数值通过axis的角度进行设置。当父容器发生变化时，子节点也会变化，值不变
        * @param axis 中心轴
        * @param angle 旋转的角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.setRotationFromAxisAngle = function (axis, angle) {
            axis.normalize();
            this.updateTransformChange(true);
            this._orientation.fromAxisAngle(axis, angle);
            this._orientation.toEulerAngles(this._rot);
            this._axis.copyFrom(axis);
            this._angle = angle;
        };
        Object.defineProperty(Object3D.prototype, "modelMatrix", {
            /**
            * @language zh_CN
            * 返回 object 世界渲染矩阵
            * 如果有父亲节点对象的话，要乘以父对象的变换.
            * @returns object 世界渲染矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._transformChange) {
                    this.updateModleMatrix();
                }
                return this._modeMatrix3D;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @private
        * @returns object 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.updateModleMatrix = function () {
            if (this.parent != null) {
                var parentOrientation = this.parent.globalOrientation;
                this._globalOrientation.multiply(parentOrientation, this._orientation);
                this._globalOrientation.toEulerAngles(this._globalRot);
                var parentScale = this.parent.globalScale;
                this._globalSca.copyFrom(parentScale.multiply(this._sca));
                parentOrientation.transformVector(parentScale.multiply(this._pos), this._globalPos);
                this._globalPos.copyFrom(this._globalPos.add(this.parent.globalPosition));
            }
            else {
                this._globalOrientation.copyFrom(this._orientation);
                this._globalPos.copyFrom(this._pos);
                this._globalSca.copyFrom(this._sca);
                this._globalRot.copyFrom(this._rot);
            }
            this._modeMatrix3D.makeTransform(this._globalPos, this._globalSca, this._globalOrientation);
            this._transformChange = false;
            this.onUpdateTransform();
        };
        Object3D.prototype.onUpdateTransform = function () {
        };
        Object.defineProperty(Object3D.prototype, "globalX", {
            /**
            * @language zh_CN
            * 返回 object 世界位置 x
            * @returns object 世界位置x
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalPosition.x;
            },
            /**
            * @language zh_CN
            * 设置 object 世界位置 x
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalPosition);
                this._vec.x = value;
                this.globalPosition = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalY", {
            /**
            * @language zh_CN
            * 返回 object 世界位置 y
            * @returns object 世界位置 y
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalPosition.y;
            },
            /**
            * @language zh_CN
            * 设置 object 世界位置 y
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalPosition);
                this._vec.y = value;
                this.globalPosition = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalZ", {
            /**
            * @language zh_CN
            * 返回 object 世界位置 z
            * @returns object 世界位置 z
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalPosition.z;
            },
            /**
            * @language zh_CN
            * 设置 object 世界位置 z
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalPosition);
                this._vec.z = value;
                this.globalPosition = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalPosition", {
            /**
            * @language zh_CN
            * 返回 object 世界位置
            * 返回世界坐标系的 全局位置坐标
            * @returns object 世界位置
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalPos;
            },
            /**
            * @language zh_CN
            * 设置 object 世界位置
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (pos) {
                if (this.parent) {
                    this.parent.globalOrientation.inverse(this._qut);
                    pos.subtract(this.parent.globalPosition, this._vec);
                    this._qut.transformVector(this._vec, this._vec);
                    this._vec.divided(this.parent.globalScale, this._vec);
                    this.position = this._vec;
                }
                else {
                    this.position = pos;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalRotationX", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转x
            * @returns object 世界旋转x
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalRotation.x;
            },
            /**
            * @language zh_CN
            * 设置 object 世界旋转 x
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalRotation);
                this._vec.x = value;
                this.globalRotation = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalRotationY", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转y
            * @returns object 世界旋转y
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalRotation.y;
            },
            /**
            * @language zh_CN
            * 设置 object 世界旋转 y
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalRotation);
                this._vec.y = value;
                this.globalRotation = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalRotationZ", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转z
            * @returns object 世界旋转z
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalRotation.z;
            },
            /**
            * @language zh_CN
            * 设置 object 世界旋转 z
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalRotation);
                this._vec.z = value;
                this.globalRotation = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalRotation", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转
            * 返回世界坐标系的 全局旋转信息
            * @returns object 世界旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalRot;
            },
            /**
            * @language zh_CN
            * 设置 object 世界旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (rot) {
                this._qut.fromEulerAngles(rot.x, rot.y, rot.z);
                this.globalOrientation = this._qut;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalScale", {
            /**
            * @language zh_CN
            * 返回 object 世界缩放
            * 返回世界坐标系的 全局缩放信息
            * @returns object 世界缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalSca;
            },
            /**
            * @language zh_CN
            * 设置 object 世界缩放
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (sca) {
                if (this.parent) {
                    sca.divided(this.parent.globalScale, this._vec);
                    this.scale = this._vec;
                }
                else {
                    this.scale = sca;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalScaleX", {
            /**
            * @language zh_CN
            * 获取 object 世界缩放 x
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalScale.x;
            },
            /**
            * @language zh_CN
            * 设置 object 世界缩放 x
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalScale);
                this._vec.x = value;
                this.globalScale = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalScaleY", {
            /**
            * @language zh_CN
            * 获取 object 世界缩放 y
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalScale.y;
            },
            /**
            * @language zh_CN
            * 设置 object 世界缩放 y
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalScale);
                this._vec.y = value;
                this.globalScale = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalScaleZ", {
            /**
            * @language zh_CN
            * 获取 object 世界缩放 z
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.globalScale.z;
            },
            /**
            * @language zh_CN
            * 设置 object 世界缩放 z
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._vec.copyFrom(this.globalScale);
                this._vec.z = value;
                this.globalScale = this._vec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalOrientation", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转 四元数
            * 返回世界坐标系的 全局旋转信息，数据类型是 四元素
            * @returns object 世界旋转
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalOrientation;
            },
            /**
            * @language zh_CN
            * 设置 object 世界旋转 四元数
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (ori) {
                if (this.parent) {
                    this.parent.globalOrientation.inverse(this._qut);
                    this._qut.multiply(this._qut, ori);
                    this.orientation = this._qut;
                }
                else {
                    this.orientation = ori;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.addChild = function (child) {
            this.childs.push(child);
            Object3D.renderListChange = true;
            child.parent = this;
            child._isRoot = false;
            child.updateTransformChange(true);
            return child;
        };
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @param index 子对象的下标
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.addChildAt = function (child, index) {
            if (index < 0) {
                this.childs.splice(0, 0, child);
            }
            else if (index >= this.childs.length) {
                this.childs.push(child);
            }
            else {
                this.childs.splice(index, 0, child);
            }
            child.parent = this;
            child.updateTransformChange(true);
            return child;
        };
        /**
        * @language zh_CN
        * 返回下标为index的子对象
        * @private
        * @param index 子对象下标
        * @returns 如果有就返回子对象,否则就返回null.
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.getChildAt = function (index) {
            if (index < 0 || index >= this.childs.length)
                return null;
            return this.childs[index];
        };
        /**
        * @language zh_CN
        * @private
        * 返回子对角child的下标
        * @param child 子对象
        * @returns 如果有就返回子对象的下标,否则就返回-1.
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.getChildIndex = function (child) {
            for (var index = 0; index < this.childs.length; ++index) {
                if (this.childs[index] != child) {
                    continue;
                }
                return index;
            }
            return -1;
        };
        /**
        * @language zh_CN
        * 移除child子对象 并返回
        * 移除显示列表中的指定对象，如果为空将会返回
        * @param child 子对象
        * @returns 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.removeChild = function (child) {
            for (var index = 0; index < this.childs.length; ++index) {
                if (this.childs[index] != child) {
                    continue;
                }
                child.parent = null;
                this.childs.splice(index, 1);
                return child;
            }
            child.updateTransformChange(true);
            return null;
        };
        /**
        * @language zh_CN
        * 移除下标为index的子对象 并返回
        * @private
        * @param index 子对象的下标
        * @returns 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.removeChildAt = function (index) {
            if (index < 0 || index >= this.childs.length)
                return null;
            var object3D = this.childs[index];
            object3D.parent = null;
            this.childs.splice(index, 1);
            object3D.updateTransformChange(true);
            return object3D;
        };
        /**
        * @language zh_CN
        * 设置子对象的下标
        * @private
        * @param child 子对象
        * @param index 子对象的下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.setChildIndex = function (child, index) {
            for (var i = 0; i < this.childs.length; ++i) {
                if (this.childs[i] != child) {
                    continue;
                }
                if (i == index) {
                    return;
                }
                else if (index > i) {
                    for (var m = i; m > index; --m) {
                        this.childs[m] = this.childs[m - 1];
                    }
                }
                else if (index < i) {
                    for (var m = i; m < index; ++m) {
                        this.childs[m] = this.childs[m + 1];
                    }
                }
                this.childs[index] = child;
                return;
            }
        };
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param child1 子对象1
        * @param child2 子对象2
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.swapChildren = function (child1, child2) {
            var index1 = 0, index2 = 0;
            for (; index1 < this.childs.length; ++index1) {
                if (this.childs[index1] != child1) {
                    continue;
                }
                for (; index2 < this.childs.length; ++index2) {
                    if (this.childs[index2] != child2) {
                        continue;
                    }
                    var tmp = this.childs[index1];
                    this.childs[index1] = this.childs[index2];
                    this.childs[index2] = tmp;
                    break;
                }
                return;
            }
        };
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param index1 子对象1下标
        * @param index2 子对象2下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.swapChildrenAt = function (index1, index2) {
            if (index1 < 0 || index1 >= this.childs.length)
                return;
            if (index2 < 0 || index2 >= this.childs.length)
                return;
            var tmp = this.childs[index1];
            this.childs[index1] = this.childs[index2];
            this.childs[index2] = tmp;
        };
        /**
        * @language zh_CN
        * 当前对象对视位置
        * @private
        * @param pos 对象的位置
        * @param target 目标的位置
        * @param up 向上的方向
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.lookAt = function (pos, target, up) {
            if (up === void 0) { up = egret3d.Vector3D.Y_AXIS; }
        };
        Object.defineProperty(Object3D.prototype, "lookAtPosition", {
            /**
            * @language zh_CN
            * 返回目标的位置
            *
            * @private
            * @returns 目标的位置
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return new egret3d.Vector3D();
            },
            enumerable: true,
            configurable: true
        });
        Object3D.prototype.updateTransformChange = function (change) {
            this._transformChange = change;
            ///Octree.getInstance().checkObject3D(obj);
            for (var i = 0; i < this.childs.length; ++i) {
                this.childs[i].updateTransformChange(change);
            }
        };
        /**
        * @language zh_CN
        * 当前对象数据更新
        * @private
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.update = function (time, delay, camera) {
        };
        Object.defineProperty(Object3D.prototype, "sceneTransform", {
            get: function () {
                this.updateSceneTransform();
                return this._sceneTransform;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Updates the scene transformation matrix.
         */
        Object3D.prototype.updateSceneTransform = function () {
            if (this.parent && !this.parent._isRoot) {
                this._sceneTransform.copyFrom(this.parent.sceneTransform);
                this._sceneTransform.multiply(this.modelMatrix);
            }
            else
                this._sceneTransform.copyFrom(this.modelMatrix);
            this._sceneTransform.invert();
        };
        /**
        * @language zh_CN
        * 返回对象的屏幕坐标
        * 获取当前物体的屏幕坐标值，一般用来指定屏幕相关的ui绑定及其他功能
        * @param camera 对象渲染的摄像机
        * @returns 对象的屏幕坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public getScreenPosition(camera: Camera3D): Vector3D {
        //    this._mat.copyFrom(camera.viewProjectionMatrix);
        //    this._mat.append(this.modelMatrix);
        //    return this._mat.transformVector(Context3DProxy.globalPosition);
        //}
        /**
        * @language zh_CN
        * 释放所有数据
        * 是否内存中的相关数据连接引用，移除逻辑运算，从主渲染刘表中挪出
        * @version Egret 3.0
        * @platform Web,Native
        */
        Object3D.prototype.dispose = function () {
            if (this.parent)
                this.parent.removeChild(this);
            //if (this.geometry) {
            //    this.geometry.dispose();
            //    this.geometry = null;
            //}
            //if (this.material) {
            //    this.material.dispose();
            //    this.material = null;
            //}
            for (var i = 0; i < this.childs.length; i++) {
                this.childs[i].dispose();
            }
        };
        /**
         * @private
         * @language zh_CN
         * 当前对象名
         * @version Egret 3.0
         * @platform Web,Native
         */
        Object3D.renderListChange = true;
        Object3D.s_id = 0;
        return Object3D;
    }(egret3d.EventDispatcher));
    egret3d.Object3D = Object3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.Entity
    * @classdesc
    * 3d空间中的实体对象 extends Object3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Entity = (function (_super) {
        __extends(Entity, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function Entity() {
            _super.call(this);
        }
        return Entity;
    }(egret3d.Object3D));
    egret3d.Entity = Entity;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Mesh
    * @classdesc
    * 3d模型网格 生成渲染模型
    * 创建一个Mesh网格数据和材质数据是必需的，如果是动态模型就加上动画数据
    * 继承Object3D对象，场景中实体渲染对象
    *
    * @see egret3d.Object3D
    * @see egret3d.Geometry
    * @see egret3d.MaterialBase
    * @see egret3d.IAnimation
    * @see egret3d.SkeletonAnimation
    *
    * 示例:
    * @includeExample core/node/Mesh.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Mesh = (function (_super) {
        __extends(Mesh, _super);
        /**
        * @language zh_CN
        * 构建一个Mesh对象
        * @param geometry 模型数据
        * @param material 模型材质
        * @param animation 模型动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Mesh(geometry, material) {
            _super.call(this);
            this.muiltMaterial = {};
            this._materialCount = 0;
            /**
            * @language zh_CN
            * 动作对象，控制骨骼动画。</p>
            * 可拓展的动画功能属性，动画功能的驱动类总接口。</p>
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.animation = null;
            /**
            * @language zh_CN
            * 鼠标拣选类型。</p>
            * 设置鼠标的拣选类型，可通过 PickType来进行设置。</p>
            * 快速拣选默认使用 正方形包围盒子。</p>
            * 高精度型需要 PositionPick ， uv pick 等。</p>
            * @see egret3d.PickType
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.pickType = egret3d.PickType.BoundPick;
            /**
            * @language zh_CN
            * 鼠标检测数据
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.pickResult = new egret3d.PickResult();
            this.geometry = geometry;
            this.addSubMaterial(0, material);
            this.material = material;
            this.bound = this.buildBoundBox();
        }
        Mesh.prototype.setMaterialByID = function () {
        };
        /**
        * @language zh_CN
        * 增加一个材质
        * @param id 材质id
        * @param material 模型材质
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.addSubMaterial = function (id, material) {
            if (!this.muiltMaterial[id]) {
                this._materialCount++;
            }
            this.muiltMaterial[id] = material;
        };
        /**
        * @language zh_CN
        * 删除一个材质
        * @param id 材质id
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.removeSubMaterial = function (id) {
            if (this.muiltMaterial[id]) {
                delete this.muiltMaterial[id];
                this._materialCount--;
            }
        };
        /**
        * @language zh_CN
        * 用ID得到一个材质
        * @param id 材质id
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.getMaterial = function (id) {
            return this.muiltMaterial[id];
        };
        /**
        * @language zh_CN
        * 得到所有材质的个数
        * @returns number
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.materialCount = function () {
            return this._materialCount;
        };
        /**
        * @language zh_CN
        * 克隆一个模型
        * @returns 克隆后的模型
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.clone = function () {
            var cloneMesh = new Mesh(this.geometry, this.material);
            cloneMesh.muiltMaterial = this.muiltMaterial;
            return cloneMesh;
        };
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        Mesh.prototype.update = function (time, delay, camera) {
            _super.prototype.update.call(this, time, delay, camera);
            if (this.isDisable)
                return;
            if (this.animation) {
                this.animation.update(time, delay);
            }
        };
        /**
        * @language zh_CN
        * @private
        * 生成包围盒
        */
        Mesh.prototype.buildBoundBox = function () {
            var bound = new egret3d.BoundBox();
            bound.min.copyFrom(new egret3d.Vector3D(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE));
            bound.max.copyFrom(new egret3d.Vector3D(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE));
            for (var i = 0; i < this.geometry.verticesData.length; i += this.geometry.vertexAttLength) {
                if (bound.max.x < this.geometry.verticesData[i]) {
                    bound.max.x = this.geometry.verticesData[i];
                }
                if (bound.max.y < this.geometry.verticesData[i + 1]) {
                    bound.max.y = this.geometry.verticesData[i + 1];
                }
                if (bound.max.z < this.geometry.verticesData[i + 2]) {
                    bound.max.z = this.geometry.verticesData[i + 2];
                }
                if (bound.min.x > this.geometry.verticesData[i]) {
                    bound.min.x = this.geometry.verticesData[i];
                }
                if (bound.min.y > this.geometry.verticesData[i + 1]) {
                    bound.min.y = this.geometry.verticesData[i + 1];
                }
                if (bound.min.z > this.geometry.verticesData[i + 2]) {
                    bound.min.z = this.geometry.verticesData[i + 2];
                }
            }
            bound.fillBox(bound.min, bound.max);
            bound.childBound = new egret3d.BoundBox();
            var max = new egret3d.Vector3D();
            var min = new egret3d.Vector3D();
            max.x = bound.center.x + bound.width / 4;
            max.y = bound.center.y + bound.heigth / 4;
            max.z = bound.center.z + bound.depth / 4;
            min.x = bound.center.x - bound.width / 4;
            min.y = bound.center.y - bound.heigth / 4;
            min.z = bound.center.z - bound.depth / 4;
            bound.childBound.fillBox(min, max);
            return bound;
        };
        /**
        * @private
        */
        Mesh.prototype.renderDiffusePass = function (time, delay, context3DProxy, camera3D) {
            this._i = 0;
            this.geometry.update(time, delay, context3DProxy, camera3D);
            if (this.geometry.subGeometrys.length <= 0) {
                this.geometry.buildDefaultSubGeometry();
            }
            for (this._i = 0; this._i < this.geometry.subGeometrys.length; this._i++) {
                this._subGeometry = this.geometry.subGeometrys[this._i];
                this._matID = this._subGeometry.matID;
                if (this.muiltMaterial[this._matID]) {
                    this.muiltMaterial[this._matID].renderDiffusePass(time, delay, this._matID, context3DProxy, this.modelMatrix, camera3D, this._subGeometry, this.animation);
                }
                else {
                    this.muiltMaterial[0].renderDiffusePass(time, delay, this._matID, context3DProxy, this.modelMatrix, camera3D, this._subGeometry, this.animation);
                }
            }
        };
        return Mesh;
    }(egret3d.Object3D));
    egret3d.Mesh = Mesh;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Billboard
     * @classdesc
     * 公告板渲染对象 始终面朝摄像机的面板
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Billboard = (function (_super) {
        __extends(Billboard, _super);
        /**
         * @language zh_CN
         * 指定材质，和公告板宽、高，构建一个公告板
         * @param material 渲染材质
         * @param width 公告板宽度
         * @param height 公告板高度
         * @version Egret 3.0
         * @platform Web,Native
         */
        function Billboard(material, width, height) {
            if (width === void 0) { width = 100; }
            if (height === void 0) { height = 100; }
            _super.call(this, null, material);
            this.geometry = new egret3d.PlaneGeometry(width, height);
        }
        /**
        * @language zh_CN
        * 数据更新，不前对象的旋转和摄像机的旋转一致
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        Billboard.prototype.update = function (time, delay, camera) {
            this._qut.fromEulerAngles(-90, 0, 0);
            this._qut.multiply(camera.orientation, this._qut);
            this.orientation = this._qut;
        };
        return Billboard;
    }(egret3d.Mesh));
    egret3d.Billboard = Billboard;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Sky
    * @classdesc
    * 场景中天空盒子，是6面体cube，以6张无缝结合的贴图构成.
    *
    * @see egret3d.CubeTexture
    * @see egret3d.CubeTextureMaterial
    *
    * 示例:
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample core/node/Sky.ts
    */
    var Sky = (function (_super) {
        __extends(Sky, _super);
        /**
        * @language zh_CN
        * 构建一个天空盒子对象
        * @param cubMaterial 天空盒子贴图材质
        * @param camera 天空盒子渲染相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Sky(cubMaterial, camera) {
            if (camera === void 0) { camera = null; }
            _super.call(this, new egret3d.CubeGeometry(10000, 10000, 10000), cubMaterial);
            this._camera = camera;
            cubMaterial.cullMode = egret3d.ContextConfig.FRONT;
        }
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        Sky.prototype.update = function (time, delay, camera) {
            _super.prototype.update.call(this, time, delay, camera);
            if (this._camera) {
                this.position = this._camera.globalPosition;
            }
        };
        return Sky;
    }(egret3d.Mesh));
    egret3d.Sky = Sky;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * 天空球
    * 球形的天空盒子，需要sphere的360全景照片，可进行全景照片和video的球形显示
    * @version Egret 3.0
    * @platform Web,Native
    */
    var SphereSky = (function (_super) {
        __extends(SphereSky, _super);
        /**
        * @language zh_CN
        * constructor
        * @param tex1 天空球贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        function SphereSky(material, camera) {
            if (camera === void 0) { camera = null; }
            _super.call(this, new egret3d.SphereGeometry(10000), material);
            this._camera = camera;
            material.cullMode = egret3d.ContextConfig.FRONT;
        }
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        SphereSky.prototype.update = function (time, delay, camera) {
            _super.prototype.update.call(this, time, delay, camera);
            if (this._camera) {
                this.position = this._camera.globalPosition;
            }
        };
        return SphereSky;
    }(egret3d.Mesh));
    egret3d.SphereSky = SphereSky;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Wireframe
     * @classdesc
     * 渲染线框 以线的形式渲染顶点
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Wireframe = (function (_super) {
        __extends(Wireframe, _super);
        /**
         * @language zh_CN
         * @param geometry
         * @version Egret 3.0
         * @platform Web,Native
         */
        function Wireframe(geometry) {
            _super.call(this, geometry, new egret3d.ColorMaterial(0xff0000));
            this.material.drawMode = egret3d.DrawMode.LINES;
        }
        return Wireframe;
    }(egret3d.Mesh));
    egret3d.Wireframe = Wireframe;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    *@language zh_CN
    *@private
    */
    (function (LightType) {
        LightType[LightType["pointlight"] = 0] = "pointlight";
        LightType[LightType["directlight"] = 1] = "directlight";
        LightType[LightType["spotLightlight"] = 2] = "spotLightlight";
    })(egret3d.LightType || (egret3d.LightType = {}));
    var LightType = egret3d.LightType;
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 灯光的基础类型。</p>
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向。</p>
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式。</p>
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好。</p>
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    var LightBase = (function (_super) {
        __extends(LightBase, _super);
        function LightBase() {
            _super.call(this);
            /**
             *@language zh_CN
             *@private
             * 类型
             */
            this.lightType = -1;
            /**
             * @language zh_CN
             *@private
             * 环境颜色
             */
            this._ambient = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language zh_CN
             *@private
             * 漫反射
             */
            this._diffuse = new egret3d.Vector3D(1.0, 1.0, 1.0);
            // /**
            // * @language zh_CN  
            // *@private
            // * 背光颜色
            // */
            //protected _halfColor: Vector3D = new Vector3D(1.0, 1.0, 1.0);
            /**
             * @language zh_CN
             *@private
             * 镜面反射
             */
            this._specular = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language zh_CN
             *@private
             */
            this._halfVector = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language zh_CN
             *@private
             * @param value 强度
             */
            this._intensity = 1;
            this._radius = 100;
            this._falloff = 100;
            /**
            *@language zh_CN
            *@private
            * @param value 背光强度
            */
            this._halfIntensity = 0.0;
            /**
             * @language zh_CN
             *@private
             */
            this._spotExponent = 1.1;
            /**
             * @language zh_CN
             *@private
             */
            this._spotCutoff = 0.7;
            /**
             * @language zh_CN
             *@private
             */
            this._spotCosCutoff = 0.1;
            /**
             * @language zh_CN
             *@private
             */
            this._constantAttenuation = 0.1;
            /**
             * @language zh_CN
             *@private
             */
            this._linearAttenuation = 0.1;
            /**
             * @language zh_CN
             *@private
             */
            this._quadraticAttenuation = 0.1;
            /**
             * @language zh_CN
             *@private
             */
            this._lightIndex = -1;
            /**
             * @language zh_CN
             *@private
             */
            this.len = 25;
            /**
             * @language zh_CN
             *@private
             */
            this._change = true;
        }
        Object.defineProperty(LightBase.prototype, "intensity", {
            /**
             * @language zh_CN
             * 得到灯光强度。</p>
             * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
             */
            get: function () {
                return this._intensity;
            },
            /**
             * @language zh_CN
             * 设置灯光强度。</p>
             * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
             */
            set: function (value) {
                if (this._intensity != value) {
                    this._intensity = value;
                    this._change = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "halfIntensity", {
            /**
             * @language zh_CN
             * 得到背光灯光强度。</p>
             * 影响背光灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
             */
            get: function () {
                return this._halfIntensity;
            },
            /**
            * @language zh_CN
            * 设置背光灯光强度。</p>
            * 影响背光灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光。</p>
            */
            set: function (value) {
                if (this._halfIntensity != value) {
                    this._halfIntensity = value;
                    this._change = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "ambient", {
            /**
             * @language zh_CN
             * 获取 灯光环境颜色。</p>
             * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色。</p>
             * return ambient  灯光环境颜色
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * 设置灯光环境颜色。</p>
             * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色。</p>
             */
            set: function (color) {
                this._ambient.w = (color >> 24 & 0xff) / 255;
                this._ambient.x = (color >> 16 & 0xff) / 255;
                this._ambient.y = (color >> 8 & 0xff) / 255;
                this._ambient.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "diffuse", {
            /**
             * @language zh_CN
             * 设置灯光漫反射颜色。</p>
             * 直接影响最终灯光的颜色色值 16进制的颜色 例如 red：0xffff0000。</p>
             * 也可以通过 diffusePower 来改变这个值的总体强弱。</p>
             * return diffuse
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * 设置灯光漫反射颜色。</p>
             * 直接影响最终灯光的颜色色值 16进制的颜色, 例如 red：0xffff0000。</p>
             * 也可以通过 diffusePower 来改变这个值的总体强弱
             */
            set: function (color) {
                this._diffuse.w = (color >> 24 & 0xff) / 255;
                this._diffuse.x = (color >> 16 & 0xff) / 255;
                this._diffuse.y = (color >> 8 & 0xff) / 255;
                this._diffuse.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "specular", {
            /**
             * @language zh_CN
             * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属。</p>
             * 16进制的颜色 例如 red：0xffff0000。</p>
             * 也可以通过 specularPower 来改变这个值的总体强弱。</p>
             * return  灯光镜面高光反射颜色
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * 设置灯光镜面高光反射颜色。</p>
             * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属。</p>
             * 16进制的颜色 例如 red：0xffff0000。</p>
             * 也可以通过 specularPower 来改变这个值的总体强弱。</p>
             */
            set: function (color) {
                this._specular.w = (color >> 24 & 0xff) / 255;
                this._specular.x = (color >> 16 & 0xff) / 255;
                this._specular.y = (color >> 8 & 0xff) / 255;
                this._specular.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        LightBase.prototype.init = function () {
        };
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        LightBase.prototype.updateLightData = function (index, lightData) {
        };
        return LightBase;
    }(egret3d.Object3D));
    egret3d.LightBase = LightBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    *
    * 点光源
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * 点光源是游戏中常常用到的动态光源，实时渲染中，灯光的数量会直接影响渲染性能
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/PointLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var PointLight = (function (_super) {
        __extends(PointLight, _super);
        /**
         * @language zh_CN
         * @private
         * constructor
         * @param color {Number}
         */
        function PointLight(color) {
            _super.call(this);
            this.lightType = egret3d.LightType.pointlight;
            this.diffuse = color;
        }
        Object.defineProperty(PointLight.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            set: function (value) {
                this._radius = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointLight.prototype, "falloff", {
            get: function () {
                return this._falloff;
            },
            set: function (value) {
                this._falloff = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        PointLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * PointLight.stride] = this.x;
            lightData[index * PointLight.stride + 1] = this.y;
            lightData[index * PointLight.stride + 2] = this.z;
            lightData[index * PointLight.stride + 3] = this._diffuse.x;
            lightData[index * PointLight.stride + 4] = this._diffuse.y;
            lightData[index * PointLight.stride + 5] = this._diffuse.z;
            lightData[index * PointLight.stride + 6] = this._ambient.x;
            lightData[index * PointLight.stride + 7] = this._ambient.y;
            lightData[index * PointLight.stride + 8] = this._ambient.z;
            lightData[index * PointLight.stride + 9] = this._intensity;
            lightData[index * PointLight.stride + 10] = this._radius;
            lightData[index * PointLight.stride + 11] = this._falloff;
        };
        /**
         * @language zh_CN
         * @private
         * 点光源的数据长度
         */
        PointLight.stride = 12;
        return PointLight;
    }(egret3d.LightBase));
    egret3d.PointLight = PointLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * spot 的灯光 也就是筒灯
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * spot light 可以直接想象为点光源照了个罩子，有方向且有范围的灯光
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    var SpotLight = (function (_super) {
        __extends(SpotLight, _super);
        /**
         * @language zh_CN
         * @priavete
         * constructor
         * @param color {Vector3D}
         */
        function SpotLight(color) {
            _super.call(this);
            this.diffuse = color;
            this.lightType = egret3d.LightType.spotLightlight;
        }
        Object.defineProperty(SpotLight.prototype, "spotCosCutoff", {
            /**
             * @language zh_CN
             *
             * spot 的 裁切范围
             * spot light 照射范围的大小指数
             * @returns Cutoff -spot 的 裁切范围
             */
            get: function () {
                return this._spotCosCutoff;
            },
            /**
             * @language zh_CN
             *
             * spot 的 裁切范围
             * spot light 照射范围的大小指数
             *
             * @param value Cutoff
             */
            set: function (value) {
                this._spotCosCutoff = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "spotExponent", {
            /**
             * @language zh_CN
             *
             * spot 的 灯光强弱
             * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
             * @returns 灯光强弱指数
             */
            get: function () {
                return this._spotExponent;
            },
            /**
             * @language zh_CN
             * spot 的 灯光强弱
             * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
             *
             * @param value 灯光强弱指数
             */
            set: function (value) {
                this._spotExponent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "constantAttenuation", {
            /**
             * @language zh_CN
             * spot 的 灯光衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
             * @returns 持续衰减
             */
            get: function () {
                return this._constantAttenuation;
            },
            /**
             * @language zh_CN
             *
             * spot 的 灯光衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
             * @param value 持续衰减
             */
            set: function (value) {
                this._constantAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "linearAttenuation", {
            /**
             * @language zh_CN
             *
             * spot 的 灯光线性衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
             * @returns 线性衰减
             */
            get: function () {
                return this._linearAttenuation;
            },
            /**
             * @language zh_CN
             *
             * spot 的 灯光线性衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
             * @param value 线性衰减
             */
            set: function (value) {
                this._linearAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "quadraticAttenuation", {
            /**
             * @language zh_CN
             *
             * spot 的 灯光线性2次衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
             * @returns 返回2次衰减
             */
            get: function () {
                return this._quadraticAttenuation;
            },
            /**
             * @language zh_CN
             *
             * spot 的 灯光线性2次衰减
             * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
             * @param value 2次衰减
             */
            set: function (value) {
                this._quadraticAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        SpotLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * SpotLight.stride] = this.x;
            lightData[index * SpotLight.stride + 1] = this.y;
            lightData[index * SpotLight.stride + 2] = this.z;
            lightData[index * SpotLight.stride + 3] = this._rot.x * egret3d.MathUtil.DEGREES_TO_RADIANS;
            lightData[index * SpotLight.stride + 4] = this._rot.y * egret3d.MathUtil.DEGREES_TO_RADIANS;
            lightData[index * SpotLight.stride + 5] = this._rot.z * egret3d.MathUtil.DEGREES_TO_RADIANS;
            lightData[index * SpotLight.stride + 6] = this._diffuse.x;
            lightData[index * SpotLight.stride + 7] = this._diffuse.y;
            lightData[index * SpotLight.stride + 8] = this._diffuse.z;
            lightData[index * SpotLight.stride + 9] = this._spotExponent;
            lightData[index * SpotLight.stride + 10] = this._spotCosCutoff;
            lightData[index * SpotLight.stride + 11] = this._constantAttenuation;
            lightData[index * SpotLight.stride + 12] = this._linearAttenuation;
            lightData[index * SpotLight.stride + 13] = this._quadraticAttenuation;
        };
        /**
         * @language zh_CN
         * @priavete
         */
        SpotLight.stride = 14;
        return SpotLight;
    }(egret3d.LightBase));
    egret3d.SpotLight = SpotLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 平行灯光</p>
    * 平行光是一种只有方向，强弱度，没有大小范围的灯光，一般情况下，directlight 可以产生阴影;</p>
    * 如果要产生阴影 需要设置 egret3d.ShadowRender.castShadowLight = directLight; 及其他相关模型的设置.</p>
    *
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/DirectLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var DirectLight = (function (_super) {
        __extends(DirectLight, _super);
        /**
        * @language zh_CN
        * @private
        * @param dir 光线的方向
        */
        function DirectLight(dir) {
            _super.call(this);
            dir.normalize();
            this.lightType = egret3d.LightType.directlight;
            this._rot.x = dir.x;
            this._rot.y = dir.y;
            this._rot.z = dir.z;
        }
        Object.defineProperty(DirectLight.prototype, "ambient", {
            /**
            * @language zh_CN
            *
            * 背光颜色
            * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
            * @param color 背光颜色色值
            */
            set: function (color) {
                this._ambient.w = (color >> 24 & 0xff) / 255;
                this._ambient.x = (color >> 16 & 0xff) / 255;
                this._ambient.y = (color >> 8 & 0xff) / 255;
                this._ambient.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         *
         * 是否产生阴影
         * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
         * @param color 背光颜色色值
         */
        //public set castShadow(value: boolean) {
        //if (value )
        //    RttManager.getInstance().shadowMapRender.castShadowLight = this; 
        //}
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        DirectLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * DirectLight.stride + 0] = this._rot.x;
            lightData[index * DirectLight.stride + 1] = this._rot.y;
            lightData[index * DirectLight.stride + 2] = this._rot.z;
            lightData[index * DirectLight.stride + 3] = this._diffuse.x;
            lightData[index * DirectLight.stride + 4] = this._diffuse.y;
            lightData[index * DirectLight.stride + 5] = this._diffuse.z;
            lightData[index * DirectLight.stride + 6] = this._ambient.x;
            lightData[index * DirectLight.stride + 7] = this._ambient.y;
            lightData[index * DirectLight.stride + 8] = this._ambient.z;
            lightData[index * DirectLight.stride + 9] = this._intensity;
            lightData[index * DirectLight.stride + 10] = this._halfIntensity;
        };
        /**
        * @language zh_CN
        * @private
        * 光源数据结构长度
        */
        DirectLight.stride = 11;
        return DirectLight;
    }(egret3d.LightBase));
    egret3d.DirectLight = DirectLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
   * @class egret3d.DirectLight
   * @classdesc
   *
   * 点光源。</p>
   * 所有的灯光基本要素 灯光的颜色，强度，位置，方向。</p>
   * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式。</p>
   * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好。</p>
   * 点光源是游戏中常常用到的动态光源，实时渲染中，灯光的数量会直接影响渲染性能。</p>
   * @see egret3d.Object3D
   * @see egret3d.LightGroup
   * @see egret3d.LightBase
   * @see egret3d.PointLight
   * @see egret3d.SpotLight
   * @version Egret 3.0
   * @platform Web,Native
   */
    var LightGroup = (function () {
        /**
        * @language zh_CN
        * 创建一个灯光组
        */
        function LightGroup() {
            /**
             * @language zh_CN
             * 灯光个数
             */
            this.lightNum = 0;
            this.directLightList = new Array();
            this.spotLightList = new Array();
            this.pointLightList = new Array();
        }
        /**
         * @language zh_CN
         * 为灯光组,添加一个灯光
         * @param light  Direct Light
         */
        LightGroup.prototype.addLight = function (light) {
            switch (light.lightType) {
                case egret3d.LightType.directlight:
                    this.directLightList.push(light);
                    this.lightNum++;
                    break;
                case egret3d.LightType.pointlight:
                    this.pointLightList.push(light);
                    this.lightNum++;
                    break;
                case egret3d.LightType.spotLightlight:
                    this.spotLightList.push(light);
                    this.lightNum++;
                    break;
            }
        };
        return LightGroup;
    }());
    egret3d.LightGroup = LightGroup;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.CollectBase
    * @classdesc
    * @version Egret 3.0
    * @platform Web,Native
    * Object3D 渲染对象收集器基类
    */
    var CollectBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        function CollectBase() {
            this._num = 0;
            this._objDict = {};
            this.renderList = new Array();
            this.mousePickList = new Array();
            this._nodes = new Array();
        }
        Object.defineProperty(CollectBase.prototype, "root", {
            get: function () {
                return this.rootScene;
            },
            set: function (rootScene) {
                this.rootScene = rootScene;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        CollectBase.prototype.update = function (camera) {
            this.renderList = this._nodes;
            this.renderList.length = 0;
            camera.frustum.update(camera);
        };
        /**
        * @language zh_CN
        * 查找一个对象在渲染列表的下标
        * @param obj 要查找的对象
        * @returns 返回对象在渲染列表的下标
        */
        CollectBase.prototype.findRenderObject = function (obj) {
            for (var i = 0; i < this.renderList.length; ++i) {
                if (this.renderList[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
        return CollectBase;
    }());
    egret3d.CollectBase = CollectBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.EntityCollect
    * @classdesc
    * Object3D 渲染对象收集器,把渲染对象进行可视筛选，
    * 并且划分渲染层级，依次排序到加入列表.
    *
    * @see egret3d.Scene3D
    * @see egret3d.View3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EntityCollect = (function (_super) {
        __extends(EntityCollect, _super);
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        function EntityCollect() {
            _super.call(this);
            this._layerTags = new Array();
            this._layers = new Array();
            //this.addTag("default");
            //this.addTag("terrain");
            //this.addTag("terrain_texture");
            //this.addTag("shadow");
            //this.addTag("character");
            //this.addTag("modle_effect");
            //this.addTag("particle");
            //this.addTag("transparent");
            //this.addTag("wireframe",true);
            var tag = { typeName: "", cleanDepth: false };
            //this.addLayer("layer_0");
            //this.addLayer("layer_1");
            //this.addLayer("layer_2");
            //this.addLayer("layer_3");
            //this.addLayer("layer_4");
        }
        /**
        * @language zh_CN
        * 返回tags 列表
        *
        * @returns tags 列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public get tags(): Array<Tag> {
        //    return this._tags;
        //}
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public setTags(name: string, index: number) {
        //    var curIndex: number = this._tagsName.indexOf(name);
        //    if (curIndex != -1) {
        //        var tag: Tag = this._tags[curIndex];
        //        this.removeTag(name);
        //        this._tagsName.splice(index, 0, name);
        //        this._tags.splice(index, 0, tag);
        //    }
        //    else {
        //        this.insertTag(name, index);
        //    }
        //}
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public setTagsItem(layer: string, index: number) {
        //    this.removeLayer(layer);
        //    this.insetLayer(layer, index);
        //}
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public getTagLayer(name: string = "default", layer: string = "layer_0"): number {
        //    var typeIndex = this._tagsName.indexOf(name);
        //    var layerIndex = this._layers.indexOf(layer);
        //    return (typeIndex << 24) | layerIndex;
        //}
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public getTag(name: string = "default"): Tag {
        //    var index:number = this._tagsName.indexOf(name);
        //    if (index != -1) {
        //        return this.tags[index];
        //    }
        //    return null;
        //}
        /**
        * @language zh_CN
        * 增加tag
        * @param name tag名
        * @param clearDapth 是否清理深度
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public addTag(name: string, clearDapth: boolean = false) {
        //    if (this._tagsName.indexOf(name) != -1) {
        //        return;
        //    }
        //    this._tagsName.push(name);
        //    var tag: Tag = new Tag();
        //    tag.clearDepth = clearDapth;
        //    this._tags.push(tag);
        //    for (var i: number = 0; i < this._layers.length; ++i) {
        //        var layer: Layer = new Layer();
        //        tag.layers.push(layer);
        //    }
        //}
        /**
        * @language zh_CN
        * 插入tag
        * @param name tag名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public insertTag(name: string, index: number) {
        //    if (this._tagsName.indexOf(name) != -1) {
        //        return;
        //    }
        //    this._tagsName.splice(index, 0, name);
        //    var tag: Tag = new Tag();
        //    this._tags.splice(index, 0, tag);
        //    for (var i: number = 0; i < this._layers.length; ++i) {
        //        var layer: Layer = new Layer();
        //        tag.layers.push(layer);
        //    }
        //}
        /**
        * @language zh_CN
        * 移除tag
        * @param name tag名
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public removeTag(name: string) {
        //    var index: number = this._tagsName.indexOf(name);
        //    if (index == -1) {
        //        return;
        //    }
        //    this._tagsName.splice(index, 1);
        //    this._tags.splice(index, 1);
        //}
        /**
        * @language zh_CN
        * 增加layer
        * @param name layer名
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public addLayer(name: string) {
        //    if (this._layers.indexOf(name) != -1) {
        //        return;
        //    }
        //    this._layers.push(name);
        //    for (var i: number = 0; i < this._tags.length; ++i) {
        //        var layer: Layer = new Layer();
        //        this._tags[i].layers.push(layer);
        //    }
        //}
        /**
        * @language zh_CN
        * 插入layer
        * @param name layer名
        * @param index layer下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public insetLayer(name: string, index: number) {
        //    if (this._layers.indexOf(name) != -1) {
        //        return;
        //    }
        //    this._layers.splice(index, 0, name);
        //    for (var i: number = 0; i < this._tags.length; ++i) {
        //        var layer: Layer = new Layer();
        //        this._tags[i].layers.splice(index, 0, layer);
        //    }
        //}
        /**
        * @language zh_CN
        * 移除layer
        * @param name layer名
        * @version Egret 3.0
        * @platform Web,Native
        */
        //public removeLayer(name: string) {
        //    var index: number = this._layers.indexOf(name);
        //    if (index == -1) {
        //        return;
        //    }
        //    this._layers.splice(index, 1);
        //    for (var i: number = 0; i < this._tags.length; ++i) {
        //        this._tags[i].layers.splice(index, 1);
        //    }
        //}
        EntityCollect.prototype.applyRender = function (child, camera) {
            if (!child.visible) {
                return;
            }
            if (child["material"])
                this.addRenderList(child, camera);
            for (var i = 0; i < child.childs.length; i++) {
                this.applyRender(child.childs[i], camera);
            }
        };
        EntityCollect.prototype.addRenderList = function (renderItem, camera) {
            if (renderItem.enableCulling) {
                if (!camera.isVisibleToCamera(renderItem)) {
                    return;
                }
                this.renderList.push(renderItem);
            }
            if (renderItem.enablePick) {
                this.mousePickList.push(renderItem);
            }
            //var layer: Layer = this.findLayer(object3d);
            //var tag: Tag = this.findTag(object3d);
            //if (object3d.material != null && object3d.material.materialData.alphaBlending) {
            //    layer.alphaObjects.push(object3d);
            //}
            //else {
            //    layer.objects.push(object3d);
            //}
        };
        /**
        * @language zh_CN
        * 数据更新 处理需要渲染的对象
        * @param camera 当前摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        EntityCollect.prototype.update = function (camera) {
            _super.prototype.update.call(this, camera);
            this.renderList.length = 0;
            this.mousePickList.length = 0;
            this.clearLayerList();
            this.applyRender(this.rootScene.root, camera);
            //for (var i: number = 0; i < this._tags.length; ++i) {
            //    this._tags[i].clearDepth = true;
            //    for (var j: number = 0; j < this._tags[i].layers.length; ++j) {
            //        for (var k: number = 0; k < this._tags[i].layers[j].objects.length; ++k) {
            //            this.renderList.push(this._tags[i].layers[j].objects[k]);
            //        }
            //        this._tags[i].layers[j].alphaObjects.sort((a: Object3D, b: Object3D) => this.sort(a, b, camera));
            //        for (var k: number = 0; k < this._tags[i].layers[j].alphaObjects.length; ++k) {
            //            this.renderList.push(this._tags[i].layers[j].alphaObjects[k]);
            //        }
            //    }
            //}
        };
        //protected findLayer(object3d: Object3D): Layer {
        //    var typeIndex: number = object3d.layer >> 24;
        //    var layerIndex: number = object3d.layer & 0x00FFFFFF;
        //    if (typeIndex < this._tags.length && typeIndex >= 0) {
        //        if (layerIndex < this._tags[typeIndex].layers.length && layerIndex >= 0) {
        //            return this._tags[typeIndex].layers[layerIndex];
        //        }
        //    }
        //    return this._tags[0].layers[0];
        //}
        //protected findTag(object3d: Object3D): Tag {
        //    var typeIndex: number = object3d.layer >> 24;
        //    if (typeIndex < this._tags.length && typeIndex >= 0) {
        //        return this._tags[typeIndex];
        //    }
        //    return this._tags[0];
        //}
        EntityCollect.prototype.clearLayerList = function () {
            //for (var i: number = 0; i < this._tags.length; ++i) {
            //    for (var j: number = 0; j < this._tags[i].layers.length; ++j) {
            //        this._tags[i].layers[j].objects.length = 0;
            //        this._tags[i].layers[j].alphaObjects.length = 0;
            //    }
            //}
        };
        EntityCollect.prototype.sort = function (a, b, camera) {
            var dis_0 = egret3d.Vector3D.distance(a.globalPosition, camera.position);
            var dis_1 = egret3d.Vector3D.distance(b.globalPosition, camera.position);
            if (dis_0 > dis_1) {
                return -1;
            }
            else if (dis_0 < dis_1) {
                return 1;
            }
            return 0;
        };
        return EntityCollect;
    }(egret3d.CollectBase));
    egret3d.EntityCollect = EntityCollect;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.Frustum
    * @classdesc
    * 摄像机视椎体,计算出摄像机的可视范围.
    *
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Frustum = (function () {
        /**
        * @language zh_CN
        * 构造
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Frustum() {
            this._vtxNum = 8;
            this._planeNum = 6;
            this._vertex = new Array();
            for (var i = 0; i < this._vtxNum; ++i) {
                this._vertex.push(new egret3d.Vector3D());
            }
            this._pos = new egret3d.Vector3D();
            this._plane = new Array();
            for (var i = 0; i < 6; ++i) {
                this._plane.push(new egret3d.Plane3D());
            }
            this.box = new egret3d.BoundBox(new egret3d.Vector3D(), new egret3d.Vector3D());
            ///this.box = new CubeBoxBound(new Vector3D(99999.0, 99999.0, 99999.0), new Vector3D(-99999.0, -99999.0, -99999.0));
            this.center = new egret3d.Vector3D();
        }
        /**
        * @language zh_CN
        * 生成一个视椎体
        * @param fovY 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspectRatio 纵横比，在视空间宽度除以高度.
        * @param nearPlane 近裁剪面位置Z值.
        * @param farPlane 远裁剪面位置Z值.
        * @version Egret 3.0
        * @platform Web,Native
        */
        Frustum.prototype.makeFrustum = function (fovY, aspectRatio, nearPlane, farPlane) {
            ///var tangent: number = Math.tan(fovY / 2.0 * (Math.PI / 180.0));
            var tangent = Math.tan(fovY / 2.0 * (Math.PI / 180.0));
            var nearHeight = nearPlane * tangent;
            var nearWidth = nearHeight * aspectRatio;
            var farHeight = farPlane * tangent;
            var farWidth = farHeight * aspectRatio;
            /// near top right
            this._vertex[0].x = nearWidth;
            this._vertex[0].y = nearHeight;
            this._vertex[0].z = nearPlane;
            /// near top left
            this._vertex[1].x = -nearWidth;
            this._vertex[1].y = nearHeight;
            this._vertex[1].z = nearPlane;
            /// near bottom left
            this._vertex[2].x = -nearWidth;
            this._vertex[2].y = -nearHeight;
            this._vertex[2].z = nearPlane;
            /// near bottom right
            this._vertex[3].x = nearWidth;
            this._vertex[3].y = -nearHeight;
            this._vertex[3].z = nearPlane;
            /// far top right
            this._vertex[4].x = farWidth;
            this._vertex[4].y = farHeight;
            this._vertex[4].z = farPlane;
            /// far top left
            this._vertex[5].x = -farWidth;
            this._vertex[5].y = farHeight;
            this._vertex[5].z = farPlane;
            /// far bottom left
            this._vertex[6].x = -farWidth;
            this._vertex[6].y = -farHeight;
            this._vertex[6].z = farPlane;
            /// far bottom right
            this._vertex[7].x = farWidth;
            this._vertex[7].y = -farHeight;
            this._vertex[7].z = farPlane;
        };
        /**
        * @language zh_CN
        * 数据更新.
        * @param camera 视椎的摄像机.
        * @version Egret 3.0
        * @platform Web,Native
        */
        Frustum.prototype.update = function (camera) {
            this.makeFrustum(camera.fieldOfView, camera.aspectRatio, camera.near, camera.far);
            /// 摄像机变化之后的顶点也变化;
            var vtx = new Array();
            var mat = new egret3d.Matrix4_4();
            mat.copyFrom(camera.modelMatrix);
            ///mat.invert(); /// 眼睛的世界矩阵;
            this._curVer = vtx;
            for (var i = 0; i < this._vtxNum; ++i) {
                vtx.push(mat.transformVector(this._vertex[i]));
            }
            for (var i = 0; i < vtx.length; ++i) {
                if (this.box.max.x < vtx[i].x) {
                    this.box.max.x = vtx[i].x;
                }
                if (this.box.max.y < vtx[i].y) {
                    this.box.max.y = vtx[i].y;
                }
                if (this.box.max.z < vtx[i].z) {
                    this.box.max.z = vtx[i].z;
                }
                if (this.box.min.x > vtx[i].x) {
                    this.box.min.x = vtx[i].x;
                }
                if (this.box.min.y > vtx[i].y) {
                    this.box.min.y = vtx[i].y;
                }
                if (this.box.min.z > vtx[i].z) {
                    this.box.min.z = vtx[i].z;
                }
            }
            this.box.calculateBox();
            this._plane[0].fromPoints(vtx[4], vtx[5], vtx[6]); /// 远平面(far);
            this._plane[1].fromPoints(vtx[1], vtx[6], vtx[5]); /// 左平面(left);
            this._plane[2].fromPoints(vtx[0], vtx[4], vtx[7]); /// 右平面(right);
            this._plane[3].fromPoints(vtx[1], vtx[0], vtx[3]); /// 近平面(near);
            this._plane[4].fromPoints(vtx[1], vtx[5], vtx[4]); /// 上平面(top);
            this._plane[5].fromPoints(vtx[3], vtx[7], vtx[6]); /// 下平面(bottom);
            for (var i = 0; i < this._planeNum; i++) {
                this._plane[i].normalize();
            }
            var nearCenter = new egret3d.Vector3D();
            nearCenter.copyFrom(vtx[0].subtract(vtx[2]));
            nearCenter.scaleBy(0.5);
            nearCenter.copyFrom(vtx[2].add(nearCenter));
            var farCenter = new egret3d.Vector3D();
            farCenter.copyFrom(vtx[4].subtract(vtx[6]));
            farCenter.scaleBy(0.5);
            farCenter.copyFrom(vtx[6].add(farCenter));
            this.center.copyFrom(farCenter.subtract(nearCenter));
            this.center.scaleBy(0.5);
            this.center.copyFrom(nearCenter.add(this.center));
        };
        /**
        * @language zh_CN
        * 检测一个坐标点是否在视椎体内
        * @param pos 检测的坐标
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        Frustum.prototype.inPoint = function (pos) {
            var dis = 0;
            for (var i = 0; i < this._plane.length; ++i) {
                dis = this._plane[i].distance(pos);
                if (dis > 0.0) {
                    return false;
                }
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测一个球是否在视椎体内
        * @param center 球的坐标
        * @param radius 球的半径
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        Frustum.prototype.inSphere = function (center, radius) {
            var dis = 0;
            for (var i = 0; i < this._plane.length; ++i) {
                dis = this._plane[i].distance(center);
                if (dis > radius) {
                    return false;
                }
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param box 盒子
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        Frustum.prototype.inBox = function (box) {
            var v = new Array();
            var dis = 0;
            var temp = new egret3d.Vector3D();
            for (var i = 0; i < this._plane.length; ++i) {
                var incount = box.vexData.length / 3;
                for (var j = 0; j < box.vexData.length; j += 3) {
                    temp.setTo(box.vexData[j], box.vexData[j + 1], box.vexData[j + 2]);
                    temp.copyFrom(box.Transform.transformVector(temp));
                    dis = this._plane[i].distance(temp);
                    if (dis > 0) {
                        incount--;
                    }
                }
                if (incount <= 0) {
                    return false;
                }
            }
            return true;
        };
        return Frustum;
    }());
    egret3d.Frustum = Frustum;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.Layer
    * @classdesc
    * Object3D 渲染Layer
    * 每个Layer分两个渲染列表，一个是有alpha的对象列表，另一个是没有alpha的对象列表
    * 不同的Layer层级可以使用不同的渲染方式，来达到各组不同的渲染效果.
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Layer = (function () {
        function Layer() {
            /**
           * @language zh_CN
           * layer 列表
           */
            this.layers = new Array();
            /**
            * @language zh_CN
            * 是否清理深度
            */
            this.clearDepth = false;
            /**
            * @language zh_CN
            * 层级清理深度状态
            */
            this.cleanState = true;
        }
        return Layer;
    }());
    egret3d.Layer = Layer;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.Tag
    * @classdesc
    * Object3D 渲染tag
    * 图形属性标签页的属性，由layer列表组成，共用深度信息
    * 渲染每个tag他们的深度信息是不清理的
    *
    * @see egret3d.Layer
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Tag = (function () {
        function Tag() {
            /**
           * @language zh_CN
           * 没有alpha的对象列表
           */
            this.objects = new Array();
            /**
            * @language zh_CN
            * 有alpha的对象列表
            */
            this.alphaObjects = new Array();
        }
        return Tag;
    }());
    egret3d.Tag = Tag;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Picker
    * @classdesc
    * 射线对场景中的实体对像进行检测。</p>
    * 以摄像机向场景中产生的一条射线对所有场景中的对象进行拾取。</p>
    * 根据性能的需要分为几种拣选类型。</p>
    * 1.包围盒拣选。</p>
    * 2.模型拣选返回模型拣选到的位置。</p>
    * 3.模型拣选返回模型拣选到的UV坐标。</p>
    *
    * @see egret3d.Ray
    * @see egret3d.PickType
    *
    * 示例:鼠标拣选模型,拣选到的进行绕Y轴旋转
    * @includeExample core/traverse/Picker.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Picker = (function () {
        function Picker() {
        }
        /**
        * @language zh_CN
        * 返回鼠标拾取对象得到的所有对象,调用之前到设置被拣选对象的pickType.
        * @param canvas 当前canvas
        * @param view 当前检测view
        * @param objects 检测的对象列表
        * @param childBox 检测是否用子包围盒
        * @returns 拾取的object列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        Picker.pickObject3DList = function (canvas, view, objects, childBox) {
            if (childBox === void 0) { childBox = false; }
            var ret = new Array();
            var ray = this.ray;
            if (egret3d.Input.mouseX < view.x || egret3d.Input.mouseX > x + view.width || egret3d.Input.mouseY < view.y || egret3d.Input.mouseY > y + view.height) {
                return ret;
            }
            var x = egret3d.Input.mouseX - view.x;
            var y = egret3d.Input.mouseY - view.y;
            ray.CalculateAndTransformRay(view.width, view.height, view.camera3D.modelMatrix, view.camera3D.projectMatrix, x, y);
            for (var i = 0; i < objects.length; ++i) {
                var renderItem = objects[i];
                var inPos = new egret3d.Vector3D();
                switch (renderItem.pickType) {
                    case egret3d.PickType.BoundPick:
                        if (renderItem.bound != null) {
                            var bound = renderItem.bound;
                            if (childBox) {
                                bound = renderItem.currentBound;
                                if (bound) {
                                    if (ray.IntersectMesh(bound.vexData, bound.indexData, bound.vexLength, bound.indexData.length / 3, 0, renderItem.modelMatrix, renderItem.pickResult)) {
                                        ret.push(objects[i]);
                                    }
                                }
                            }
                            else {
                                if (ray.IntersectMesh(bound.vexData, bound.indexData, bound.vexLength, bound.indexData.length / 3, 0, renderItem.modelMatrix, renderItem.pickResult)) {
                                    ret.push(objects[i]);
                                }
                            }
                        }
                        break;
                    case egret3d.PickType.PositionPick:
                        var uvoffset = 0;
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_POSITION) {
                            uvoffset += egret3d.Geometry.positionSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_NORMAL) {
                            uvoffset += egret3d.Geometry.normalSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_TANGENT) {
                            uvoffset += egret3d.Geometry.tangentSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_COLOR) {
                            uvoffset += egret3d.Geometry.colorSize;
                        }
                        if (ray.IntersectMeshEx(renderItem, uvoffset, renderItem.pickResult)) {
                            ret.push(objects[i]);
                        }
                        break;
                    case egret3d.PickType.UVPick:
                        var uvoffset = 0;
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_POSITION) {
                            uvoffset += egret3d.Geometry.positionSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_NORMAL) {
                            uvoffset += egret3d.Geometry.normalSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_TANGENT) {
                            uvoffset += egret3d.Geometry.tangentSize;
                        }
                        if (renderItem.geometry.vertexFormat & egret3d.VertexFormat.VF_COLOR) {
                            uvoffset += egret3d.Geometry.colorSize;
                        }
                        if (ray.IntersectMeshEx(renderItem, uvoffset, renderItem.pickResult)) {
                            ret.push(objects[i]);
                        }
                        break;
                }
            }
            return ret;
        };
        Picker.ray = new egret3d.Ray();
        return Picker;
    }());
    egret3d.Picker = Picker;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /*
    * @private
    * @class egret3d.HashMap
    * @classdesc
    * 用来做数据存储使用 hash map 映射表
    * <p> 通用的hash map 映射表  key为键 value为任意类型的值
    * <p> 还可以通过开启开关使用双线列表能正常使用list带有顺序的存储方式
    *
    */
    var HashMap = (function () {
        function HashMap(useOrderList) {
            if (useOrderList === void 0) { useOrderList = false; }
            this.data = [];
            this.list = new Array();
            if (useOrderList) {
                this.list = new Array();
            }
        }
        HashMap.prototype.isHas = function (key) {
            if (this.data[key])
                return true;
            return false;
        };
        HashMap.prototype.getValue = function (key) {
            return this.data[key];
        };
        HashMap.prototype.getList = function () {
            return this.list;
        };
        HashMap.prototype.add = function (key, value) {
            this.data[key] = value;
            if (this.list) {
                this.list.push(value);
            }
        };
        HashMap.prototype.remove = function (key) {
            if (this.list) {
                var index = this.list.indexOf(this.data[key]);
                if (index != -1) {
                    this.list.splice(index);
                }
            }
            delete this.data[key];
        };
        HashMap.prototype.dispose = function () {
            delete this.data;
            delete this.list;
        };
        return HashMap;
    }());
    egret3d.HashMap = HashMap;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.GeometryType
     * @private
     * @classdesc
     * @version Egret 3.0
     * @platform Web,Native
     */
    (function (GeometryType) {
        GeometryType[GeometryType["normal_geometry"] = 0] = "normal_geometry";
        GeometryType[GeometryType["skin_geometry"] = 1] = "skin_geometry";
        GeometryType[GeometryType["particle_geometry"] = 2] = "particle_geometry";
    })(egret3d.GeometryType || (egret3d.GeometryType = {}));
    var GeometryType = egret3d.GeometryType;
    /**
     * @language zh_CN
     * @class egret3d.VertexFormat
     * @classdesc
     * 顶点数据格式类型 是由2进制组成 一个顶点可以由多个类型组成
     * @version Egret 3.0
     * @platform Web,Native
     */
    (function (VertexFormat) {
        /**
         * @private
         * @language zh_CN
         * 顶点坐标
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_POSITION"] = 1] = "VF_POSITION";
        /**
         * @private
         * @language zh_CN
         * 顶点法线
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_NORMAL"] = 2] = "VF_NORMAL";
        /**
         * @private
         * @language zh_CN
         * 顶点切线
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_TANGENT"] = 4] = "VF_TANGENT";
        /**
         * @private
         * @language zh_CN
         * 顶点颜色
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_COLOR"] = 8] = "VF_COLOR";
        /**
         * @private
         * @language zh_CN
         * 顶点uv
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_UV0"] = 16] = "VF_UV0";
        /**
         * @private
         * @language zh_CN
         * 顶点第二uv
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_UV1"] = 32] = "VF_UV1";
        /**
         * @private
         * @language zh_CN
         * 顶点蒙皮信息
         * @version Egret 3.0
         * @platform Web,Native
         */
        VertexFormat[VertexFormat["VF_SKIN"] = 64] = "VF_SKIN";
    })(egret3d.VertexFormat || (egret3d.VertexFormat = {}));
    var VertexFormat = egret3d.VertexFormat;
    /**
     * @language zh_CN
     * @class egret3d.Geometry
     * @classdesc
     * 表示几何形状 子集
     * @see egret3d.VertexBuffer3D
     * @see egret3d.IndexBuffer3D
     * @see egret3d.SubGeometry
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Geometry = (function () {
        function Geometry() {
            /**
            * @language zh_CN
            * 模型的类别，是属于 静态模型，还是蒙皮动画模型，还是粒子模型，还是 特定模型
            *
            */
            this.geomtryType = -1;
            /**
           * @language zh_CN
           * 顶点格式
           */
            this._vertexFormat = 0;
            /**
            * @language zh_CN
            * 顶点属性长度
            */
            this.vertexAttLength = 0;
            /**
            * @private
            * @language zh_CN
            * 顶点坐标数据
            */
            this.source_positionData = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点法线数据
            */
            this.source_normalData = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点切线数据
            */
            this.source_tangentData = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点颜色数据
            */
            this.source_colorData = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点uv数据
            */
            this.source_uvData = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点第二uv数据
            */
            this.source_uv2Data = new Array();
            /**
            * @private
            * @language zh_CN
            * 顶点第二uv数据
            */
            this.source_SkinData = new Array();
            /**
            * @language zh_CN
            * geometry子集
            */
            this.subGeometrys = new Array();
            /**
            * @language zh_CN
            * @private
            * buffer 需要重新提交的时候
            */
            this._bufferDiry = true;
        }
        /**
        * @language zh_CN
        * @private
        */
        Geometry.prototype.buildDefaultSubGeometry = function () {
            var subGeometry = new egret3d.SubGeometry();
            subGeometry.matID = 0;
            subGeometry.geometry = this;
            subGeometry.start = 0;
            subGeometry.count = this.indexData.length;
            this.subGeometrys.push(subGeometry);
        };
        Object.defineProperty(Geometry.prototype, "vertexFormat", {
            /**
            * @language zh_CN
            * 获取顶点格式
            * @returns number 顶点格式
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._vertexFormat;
            },
            /**
            * @language zh_CN
            * 使用和定义顶点的数据结构
            *<p>例如 vertexFormat( VertexFormat.VF_POSITION )
            *设置这样的定义后,就会增加这样的数据顶点数据结构，
            *如果源文件中没有这样的数据结构，
            *就会通过计算的方式计算补全，
            *不能计算的就默认为0
            *@param vertexFormat 需要定义的顶点格式类型 VertexFormat.VF_COLOR | VertexFormat.VF_UV1
            * this.useVertexFormat( VertexFormat.VF_POSITION | VertexFormat.VF_NORMAL | VertexFormat.VF_COLOR |  VertexFormat.VF_UV0 | VertexFormat.VF_UV1 );//定义了一个完整的数据结构
            */
            set: function (vertexFormat) {
                this._vertexFormat = vertexFormat;
                if (this.vertexFormat & VertexFormat.VF_POSITION) {
                    this.vertexAttLength += Geometry.positionSize;
                }
                if (this.vertexFormat & VertexFormat.VF_NORMAL) {
                    this.vertexAttLength += Geometry.normalSize;
                }
                if (this.vertexFormat & VertexFormat.VF_TANGENT) {
                    this.vertexAttLength += Geometry.tangentSize;
                }
                if (this.vertexFormat & VertexFormat.VF_COLOR) {
                    this.vertexAttLength += Geometry.colorSize;
                }
                if (this.vertexFormat & VertexFormat.VF_UV0) {
                    this.vertexAttLength += Geometry.uvSize;
                }
                if (this.vertexFormat & VertexFormat.VF_UV1) {
                    this.vertexAttLength += Geometry.uv2Size;
                }
                if (this.vertexFormat & VertexFormat.VF_SKIN) {
                    this.vertexAttLength += Geometry.skinSize;
                }
                this.vertexSizeInBytes = this.vertexAttLength * 4;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @private
        * @language zh_CN
        * 根据顶点格式生成顶点buffer
        * @version Egret 3.0
        * @platform Web,Native
        */
        Geometry.prototype.calculateVertexFormat = function () {
            for (var i = 0; i < this.source_positionData.length / Geometry.positionSize; ++i) {
                if (this.vertexFormat & VertexFormat.VF_POSITION) {
                    this.verticesData.push(this.source_positionData[i * Geometry.positionSize]);
                    this.verticesData.push(this.source_positionData[i * Geometry.positionSize + 1]);
                    this.verticesData.push(this.source_positionData[i * Geometry.positionSize + 2]);
                }
                if (this.vertexFormat & VertexFormat.VF_NORMAL) {
                    this.verticesData.push(this.source_normalData[i * Geometry.normalSize]);
                    this.verticesData.push(this.source_normalData[i * Geometry.normalSize + 1]);
                    this.verticesData.push(this.source_normalData[i * Geometry.normalSize + 2]);
                }
                if (this.vertexFormat & VertexFormat.VF_TANGENT) {
                    this.verticesData.push(this.source_tangentData[i * Geometry.tangentSize]);
                    this.verticesData.push(this.source_tangentData[i * Geometry.tangentSize + 1]);
                    this.verticesData.push(this.source_tangentData[i * Geometry.tangentSize + 2]);
                }
                if (this.vertexFormat & VertexFormat.VF_COLOR) {
                    this.verticesData.push(this.source_colorData[i * Geometry.colorSize]);
                    this.verticesData.push(this.source_colorData[i * Geometry.colorSize + 1]);
                    this.verticesData.push(this.source_colorData[i * Geometry.colorSize + 2]);
                    this.verticesData.push(this.source_colorData[i * Geometry.colorSize + 3]);
                }
                if (this.vertexFormat & VertexFormat.VF_UV0) {
                    this.verticesData.push(this.source_uvData[i * Geometry.uvSize]);
                    this.verticesData.push(this.source_uvData[i * Geometry.uvSize + 1]);
                }
                if (this.vertexFormat & VertexFormat.VF_UV1) {
                    this.verticesData.push(this.source_uv2Data[i * Geometry.uv2Size]);
                    this.verticesData.push(this.source_uv2Data[i * Geometry.uv2Size + 1]);
                }
                if (this.vertexFormat & VertexFormat.VF_SKIN) {
                    for (var j = 0; j < Geometry.skinSize; ++j) {
                        this.verticesData.push(this.source_SkinData[i * Geometry.skinSize + j]);
                    }
                }
            }
        };
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        Geometry.prototype.update = function (time, delay, context3DProxy, camera3D) {
            if (this._bufferDiry) {
                this._bufferDiry = false;
                this.upload(context3DProxy);
            }
            context3DProxy.bindVertexBuffer(this.sharedVertexBuffer);
            context3DProxy.bindIndexBuffer(this.sharedIndexBuffer);
        };
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        Geometry.prototype.upload = function (context3DProxy) {
            this.sharedIndexBuffer = context3DProxy.creatIndexBuffer(this.indexData);
            this.sharedVertexBuffer = context3DProxy.creatVertexBuffer(this.verticesData);
        };
        /**
        * @language zh_CN
        * 顶点坐标大小
        */
        Geometry.positionSize = 3;
        /**
        * @language zh_CN
        * 顶点法线大小
        */
        Geometry.normalSize = 3;
        /**
        * @language zh_CN
        * 顶点切线大小
        */
        Geometry.tangentSize = 3;
        /**
        * @language zh_CN
        * 顶点色大小
        */
        Geometry.colorSize = 4;
        /**
        * @language zh_CN
        * 顶点uv大小
        */
        Geometry.uvSize = 2;
        /**
        * @language zh_CN
        * 顶点uv2大小
        */
        Geometry.uv2Size = 2;
        /**
        * @language zh_CN
        * 顶点uv2大小
        */
        Geometry.skinSize = 8;
        return Geometry;
    }());
    egret3d.Geometry = Geometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.GeometryData
     * @classdesc
     * GeometryData类 表示几何形状数据
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/GeometryData.ts
     */
    var GeometryData = (function () {
        function GeometryData() {
            /**
            * @language zh_CN
            * 顶点属性长度
            */
            this.vertexAttLength = 17;
            /**
            * @language zh_CN
            * 顶点长度
            */
            this.vertLen = 0;
            /**
            * @language zh_CN
            * 面数
            */
            this.faces = 0;
            /**
            * @language zh_CN
            * 索引数据
            */
            this.source_indexData = new Array();
            /**
            * @language zh_CN
            * 顶点数据
            */
            this.source_vertexData = new Array();
            /**
            * @language zh_CN
            * 顶点色数据
            */
            this.source_vertexColorData = new Array();
            /**
            * @language zh_CN
            * 顶点法线
            */
            this.source_normalData = new Array();
            /**
            * @language zh_CN
            * 顶点切线数据
            */
            this.source_tangtData = new Array();
            /**
            * @language zh_CN
            * 顶点uv数据
            */
            this.source_uvData = new Array();
            /**
            * @language zh_CN
            * 顶点uv2数据
            */
            this.source_uv2Data = new Array();
            /**
            * @language zh_CN
            * 蒙皮数据
            */
            this.source_skinData = new Array();
            /**
            * @language zh_CN
            * 顶点索引
            */
            this.vertexIndex = 0;
            /**
            * @language zh_CN
            * 索引数据数组
            */
            this.indices = new Array();
            /**
            * @language zh_CN
            * 顶点数据数组(x、y、z)三个number为一个顶点数据
            */
            this.vertices = new Array();
            /**
            * @language zh_CN
            * 法线数据数组(x、y、z)三个number为一个法线数据
            */
            this.normals = new Array();
            /**
            * @language zh_CN
            * 切线数据数组(x、y、z)三个number为一个切线数据
            */
            this.tangts = new Array();
            /**
            * @language zh_CN
            * 顶点颜色数据数组
            */
            this.verticesColor = new Array();
            /**
            * @language zh_CN
            * 第一套UV数据数组
            */
            this.uvs = new Array();
            /**
            * @language zh_CN
            * 第二套UV数据数组
            */
            this.uv2s = new Array();
            /**
            * @language zh_CN
            * 蒙皮数据数组
            */
            this.skinMesh = new Array();
            /**
            * @language zh_CN
            * 面法线数据数组
            */
            this.faceNormals = new Array();
            /**
            * @language zh_CN
            * 面权重数据数组
            */
            this.faceWeights = new Array();
            /**
              * @language zh_CN
              * 顶点索引数据
              */
            this.vertexIndices = new Array();
            /**
            * @language zh_CN
            * uv索引数据
            */
            this.uvIndices = new Array();
            /**
            * @language zh_CN
            * uv2索引数据
            */
            this.uv2Indices = new Array();
            /**
            * @language zh_CN
            * 法线索引数据
            */
            this.normalIndices = new Array();
            /**
            * @language zh_CN
            * 顶点色索引数据
            */
            this.colorIndices = new Array();
            /**
            * @language zh_CN
            * 索引数据数组
            */
            this.indexIds = new Array(); // used for real index lookups
            this.matCount = 0;
            this.material = {};
        }
        /**
        * @language zh_CN
        *
        * 构建顶点数据数组
        * @param source 未组合顶点数据的GeometryData对象
        * @param vertexFormat 生成顶点格式
        * @returns 经过组合并生成顶点数据数组的新GeometryData对象
        */
        GeometryData.buildGeomtry = function (source, vertexFormat) {
            var target = new egret3d.Geometry();
            target.indexData = [];
            target.verticesData = [];
            target.vertexFormat = vertexFormat;
            target.skeleton = source.skeleton;
            var vertex = new egret3d.Vector3D();
            var normal = new egret3d.Vector3D(1.0, 1.0, 1.0);
            var color = new egret3d.Vector3D(1.0, 1.0, 1.0, 1.0);
            var uv_0 = new egret3d.UV(1, 0);
            var uv_1 = new egret3d.UV(1, 0);
            var index = 0;
            for (var faceIndex = 0; faceIndex < source.faces; faceIndex++) {
                target.indexData.push(faceIndex * 3 + 0, faceIndex * 3 + 2, faceIndex * 3 + 1);
                for (var i = 0; i < 3; i++) {
                    index = source.vertexIndices[faceIndex * 3 + i] * egret3d.Geometry.positionSize;
                    vertex.x = source.source_vertexData[index + 0];
                    vertex.y = source.source_vertexData[index + 1];
                    vertex.z = source.source_vertexData[index + 2];
                    if (source.normalIndices && source.source_normalData && source.source_normalData.length > 0) {
                        index = source.normalIndices[faceIndex * 3 + i] * egret3d.Geometry.normalSize;
                        normal.x = source.source_normalData[index + 0];
                        normal.y = source.source_normalData[index + 1];
                        normal.z = source.source_normalData[index + 2];
                    }
                    if (source.colorIndices && source.source_vertexColorData && source.source_vertexColorData.length > 0) {
                        index = source.colorIndices[faceIndex * 3 + i] * egret3d.Geometry.colorSize;
                        color.x = source.source_vertexColorData[index + 0];
                        color.y = source.source_vertexColorData[index + 1];
                        color.z = source.source_vertexColorData[index + 2];
                        color.z = source.source_vertexColorData[index + 3];
                    }
                    if (source.uvIndices && source.source_uvData && source.source_uvData.length > 0) {
                        index = source.uvIndices[faceIndex * 3 + i] * egret3d.Geometry.uvSize;
                        uv_0.u = source.source_uvData[index + 0];
                        uv_0.v = source.source_uvData[index + 1];
                    }
                    if (source.uv2Indices && source.source_uv2Data && source.source_uv2Data.length > 0) {
                        index = source.uv2Indices[faceIndex * 3 + i] * egret3d.Geometry.uvSize;
                        uv_1.u = source.source_uv2Data[index + 0];
                        uv_1.v = source.source_uv2Data[index + 1];
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_POSITION) {
                        target.source_positionData.push(vertex.x);
                        target.source_positionData.push(vertex.y);
                        target.source_positionData.push(vertex.z);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_NORMAL) {
                        target.source_normalData.push(normal.x);
                        target.source_normalData.push(normal.y);
                        target.source_normalData.push(normal.z);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_TANGENT) {
                        target.source_tangentData.push(0);
                        target.source_tangentData.push(0);
                        target.source_tangentData.push(0);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_COLOR) {
                        target.source_colorData.push(color.x);
                        target.source_colorData.push(color.y);
                        target.source_colorData.push(color.z);
                        target.source_colorData.push(color.w);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_UV0) {
                        target.source_uvData.push(uv_0.u);
                        target.source_uvData.push(uv_0.v);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_UV1) {
                        target.source_uv2Data.push(uv_1.u);
                        target.source_uv2Data.push(uv_1.v);
                    }
                    if (vertexFormat & egret3d.VertexFormat.VF_SKIN) {
                        if (source.source_skinData != null && source.source_skinData.length > 0) {
                            index = source.vertexIndices[faceIndex * 3 + i] * egret3d.Geometry.skinSize;
                            target.source_SkinData.push(source.source_skinData[index + 0], source.source_skinData[index + 2], source.source_skinData[index + 4], source.source_skinData[index + 6], source.source_skinData[index + 1], source.source_skinData[index + 3], source.source_skinData[index + 5], source.source_skinData[index + 7]);
                        }
                        else {
                            target.source_SkinData.push(0, 0, 0, 0, 0, 0, 0, 0);
                        }
                    }
                }
            }
            GeometryData.updateFaceTangents(target);
            target.calculateVertexFormat();
            for (var i = 0; i < source.matCount; ++i) {
                var subGeometry = new egret3d.SubGeometry();
                subGeometry.matID = i;
                subGeometry.geometry = target;
                subGeometry.start = source.material[i].start * 3 * Uint16Array.BYTES_PER_ELEMENT;
                subGeometry.count = source.material[i].count * 3;
                subGeometry.textureDiffuse = source.material[i].textureDiffuse;
                subGeometry.textureNormal = source.material[i].textureNormal;
                subGeometry.textureSpecular = source.material[i].textureSpecular;
                target.subGeometrys.push(subGeometry);
            }
            return target;
        };
        //private static translateMaterialGroup(geomtryData: GeometryData): GeometryData {
        //    var faces: Array<FaceData> = geomtryData.source_faceData;
        //    var face: FaceData;
        //    var numFaces: number = faces.length;
        //    var numVerts: number;
        //    var targetGeomtryData: GeometryData = new GeometryData();
        //    targetGeomtryData.vertexAttLength = geomtryData.vertexAttLength;
        //    var j: number;
        //    for (var i: number = 0; i < numFaces; ++i) {
        //        face = faces[i];
        //        numVerts = face.indexIds.length - 1;
        //        for (j = 1; j < numVerts; ++j) {
        //            this.translateVertexData(face, j, geomtryData, targetGeomtryData);
        //            this.translateVertexData(face, 0, geomtryData, targetGeomtryData);
        //            this.translateVertexData(face, j + 1, geomtryData, targetGeomtryData);
        //        }
        //    }
        //    if (targetGeomtryData.vertices.length > 0) {
        //        targetGeomtryData.vertLen = (targetGeomtryData.vertices.length / 3) * geomtryData.vertexAttLength;
        //       targetGeomtryData.vertexDatas = new Array<number>(targetGeomtryData.vertLen)
        //        //this.updateFaceTangents(targetGeomtryData);
        //        //this.updateFaceNormals(targetGeomtryData);
        //        this.combinGeomtryData(targetGeomtryData);
        //    }
        //    return targetGeomtryData;
        //}
        //private static translateVertexData(face: FaceData, vertexIndex: number, sourceGeomtryData: GeometryData, targetGeomtryData: GeometryData) {
        //    var index: number;
        //    var vertex: Vector3D;
        //    var color: Vector3D;
        //    var vertexNormal: Vector3D;
        //    var uv: UV;
        //    if (!targetGeomtryData.indices[face.indexIds[vertexIndex]]) {
        //        index = targetGeomtryData.vertexIndex;
        //        targetGeomtryData.indices[face.indexIds[vertexIndex]] = ++targetGeomtryData.vertexIndex;
        //        vertex = sourceGeomtryData.source_vertexData[face.vertexIndices[vertexIndex] - 1];
        //        targetGeomtryData.vertices.push(vertex.x, vertex.y, vertex.z);
        //        if (sourceGeomtryData.source_vertexColorData != null && sourceGeomtryData.source_vertexColorData.length > 0) {
        //            color = sourceGeomtryData.source_vertexColorData[face.vertexIndices[vertexIndex] - 1]
        //            targetGeomtryData.verticesColor.push(color.r, color.g, color.b, color.a);
        //        }
        //        if (sourceGeomtryData.source_skinData != null && sourceGeomtryData.source_skinData.length > 0) {
        //            targetGeomtryData.skinMesh.push(
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 0],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 2],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 4],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 6],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 1],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 3],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 5],
        //                sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 7]
        //                );
        //        }
        //        if (face.normalIndices.length > 0) {
        //            vertexNormal = sourceGeomtryData.source_normalData[face.normalIndices[vertexIndex] - 1];
        //            targetGeomtryData.normals.push(vertexNormal.x, vertexNormal.y, vertexNormal.z);
        //        }
        //        if (face.uvIndices.length > 0) {
        //            try {
        //                uv = sourceGeomtryData.source_uvData[face.uvIndices[vertexIndex] - 1];
        //                targetGeomtryData.uvs.push(uv.u, uv.v);
        //                if (sourceGeomtryData.source_uv2Data.length > 0) {
        //                    uv = sourceGeomtryData.source_uv2Data[face.uv2Indices[vertexIndex] - 1];
        //                    targetGeomtryData.uv2s.push(uv.u, uv.v);
        //                }
        //            } catch (e) {
        //                switch (vertexIndex) {
        //                    case 0:
        //                        targetGeomtryData.uvs.push(0, 1);
        //                        break;
        //                    case 1:
        //                        targetGeomtryData.uvs.push(.5, 0);
        //                        break;
        //                    case 2:
        //                        targetGeomtryData.uvs.push(1, 1);
        //                }
        //            }
        //        }
        //    } else
        //        index = targetGeomtryData.indices[face.indexIds[vertexIndex]] - 1;
        //    targetGeomtryData.indices.push(index);
        //}
        /**
        * 4 pos
        * 3 normal
        * 4 color
        * 2 uv
        * 2 uv2s
        * length 15
        */
        GeometryData.combinGeomtryData = function (geomtrtData, needTangent) {
            if (needTangent === void 0) { needTangent = true; }
            var index = 0;
            var v = 0;
            var n = 0;
            var t = 0;
            var u1 = 0;
            var u2 = 0;
            var c = 0;
            var skin = 0;
            var data = geomtrtData.vertexDatas;
            while (index < geomtrtData.vertLen) {
                data[index++] = geomtrtData.vertices[v++];
                data[index++] = geomtrtData.vertices[v++];
                data[index++] = geomtrtData.vertices[v++];
                if (geomtrtData.normals && geomtrtData.normals.length) {
                    data[index++] = geomtrtData.normals[n++];
                    data[index++] = geomtrtData.normals[n++];
                    data[index++] = geomtrtData.normals[n++];
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.tangts) {
                    index++;
                    index++;
                    index++;
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.source_vertexColorData && geomtrtData.source_vertexColorData.length) {
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                }
                else {
                    data[index++] = 1;
                    data[index++] = 1;
                    data[index++] = 1;
                    data[index++] = 1;
                }
                if (geomtrtData.uvs && geomtrtData.uvs.length) {
                    data[index++] = geomtrtData.uvs[u1++];
                    data[index++] = geomtrtData.uvs[u1++];
                    if (geomtrtData.uv2s && geomtrtData.uv2s.length) {
                        data[index++] = geomtrtData.uv2s[u2++];
                        data[index++] = geomtrtData.uv2s[u2++];
                    }
                    else {
                        data[index++] = geomtrtData.uvs[u2++];
                        data[index++] = geomtrtData.uvs[u2++];
                    }
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.skinMesh && geomtrtData.skinMesh.length) {
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                }
            }
            //if (needTangent)
            //    this.updateFaceTangents(geomtrtData
        };
        /**
         * Updates the normals for each face.
         */
        GeometryData.updateFaceNormals = function (geomtrtData) {
            var i = 0, j = 0, k = 0;
            var index;
            var len = geomtrtData.indices.length;
            var x1, x2, x3;
            var y1, y2, y3;
            var z1, z2, z3;
            var dx1, dy1, dz1;
            var dx2, dy2, dz2;
            var cx, cy, cz;
            var d;
            var vertices = geomtrtData.vertexDatas;
            var posStride = 17;
            var posOffset = 3;
            //if (_useFaceWeights)
            //    _faceWeights ||= new Vector.<number>(len / 3, true);
            while (i < len) {
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x1 = vertices[index];
                y1 = vertices[index + 1];
                z1 = vertices[index + 2];
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x2 = vertices[index];
                y2 = vertices[index + 1];
                z2 = vertices[index + 2];
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x3 = vertices[index];
                y3 = vertices[index + 1];
                z3 = vertices[index + 2];
                dx1 = x3 - x1;
                dy1 = y3 - y1;
                dz1 = z3 - z1;
                dx2 = x2 - x1;
                dy2 = y2 - y1;
                dz2 = z2 - z1;
                cx = dz1 * dy2 - dy1 * dz2;
                cy = dx1 * dz2 - dz1 * dx2;
                cz = dy1 * dx2 - dx1 * dy2;
                d = Math.sqrt(cx * cx + cy * cy + cz * cz);
                // length of cross product = 2*triangle area
                if (true) {
                    var w = d * 10000;
                    if (w < 1)
                        w = 1;
                    geomtrtData.faceWeights[k++] = w;
                }
                d = 1 / d;
                geomtrtData.faceNormals[j++] = cx * d;
                geomtrtData.faceNormals[j++] = cy * d;
                geomtrtData.faceNormals[j++] = cz * d;
            }
            //_faceNormalsDirty = false;
        };
        /**
         * Updates the vertex normals based on the geometry.
         */
        GeometryData.updateVertexNormals = function (geomtrtData) {
            this.updateFaceNormals(geomtrtData);
            var v1;
            var f1 = 0, f2 = 1, f3 = 2;
            var lenV = geomtrtData.vertexDatas.length;
            var normalStride = 17;
            var normalOffset = 3;
            //target ||= new Vector.<Number>(lenV, true);
            //v1 = normalOffset;
            //while(v1 < lenV) {
            //    target[v1] = 0.0;
            //    target[v1 + 1] = 0.0;
            //    target[v1 + 2] = 0.0;
            //    v1 += normalStride;
            //}
            var i = 0, k = 0;
            var lenI = geomtrtData.indices.length;
            var index;
            var weight;
            while (i < lenI) {
                weight = geomtrtData.faceWeights[k++];
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                f1 += 3;
                f2 += 3;
                f3 += 3;
            }
            //v1 = normalOffset;
            //    while(v1 < lenV) {
            //        var vx: Number = target[v1];
            //        var vy: Number = target[v1 + 1];
            //        var vz: Number = target[v1 + 2];
            //        var d: Number = 1.0 / Math.sqrt(vx * vx + vy * vy + vz * vz);
            //        target[v1] = vx * d;
            //        target[v1 + 1] = vy * d;
            //        target[v1 + 2] = vz * d;
            //        v1 += normalStride;
            //    }
            //_vertexNormalsDirty = false;
        };
        GeometryData.updateFaceTangents = function (geometry) {
            var i = 0;
            var index1, index2, index3;
            var len = geometry.indexData.length;
            var ui, vi;
            var v0;
            var dv1, dv2;
            var denom;
            var x0, y0, z0;
            var dx1, dy1, dz1;
            var dx2, dy2, dz2;
            var cx, cy, cz;
            var vertices = geometry.source_positionData;
            var uvs = geometry.source_uvData;
            var posStride = 3;
            var posOffset = 0;
            var texStride = 2;
            var texOffset = 0;
            while (i < len) {
                index1 = geometry.indexData[i];
                index2 = geometry.indexData[i + 1];
                index3 = geometry.indexData[i + 2];
                ui = index1 * 2;
                v0 = uvs[ui + 1];
                ui = index2 * 2;
                dv1 = uvs[ui + 1] - v0;
                ui = index3 * 2;
                dv2 = uvs[ui + 1] - v0;
                vi = index1 * 3;
                x0 = vertices[vi];
                y0 = vertices[vi + 1];
                z0 = vertices[vi + 2];
                vi = index2 * 3;
                dx1 = vertices[vi] - x0;
                dy1 = vertices[vi + 1] - y0;
                dz1 = vertices[vi + 2] - z0;
                vi = index3 * 3;
                dx2 = vertices[vi] - x0;
                dy2 = vertices[vi + 1] - y0;
                dz2 = vertices[vi + 2] - z0;
                cx = dv2 * dx1 - dv1 * dx2;
                cy = dv2 * dy1 - dv1 * dy2;
                cz = dv2 * dz1 - dv1 * dz2;
                denom = 1 / Math.sqrt(cx * cx + cy * cy + cz * cz);
                geometry.source_tangentData[i++] = denom * cx;
                geometry.source_tangentData[i++] = denom * cy;
                geometry.source_tangentData[i++] = denom * cz;
            }
            var k;
            var index = 0;
            var weight;
            var f1 = 0, f2 = 1, f3 = 2;
            var i = 0;
            for (var i = 0; i < geometry.indexData.length / 3; ++i) {
                index = i * 3 * 3;
                geometry.source_tangentData[index + 0] = -geometry.source_tangentData[index + 0];
                geometry.source_tangentData[index + 1] = geometry.source_tangentData[index + 1];
                geometry.source_tangentData[index + 2] = geometry.source_tangentData[index + 2];
                index += 3;
                geometry.source_tangentData[index + 0] = -geometry.source_tangentData[index + 0];
                geometry.source_tangentData[index + 1] = geometry.source_tangentData[index + 1];
                geometry.source_tangentData[index + 2] = geometry.source_tangentData[index + 2];
                index += 3;
                geometry.source_tangentData[index + 0] = -geometry.source_tangentData[index + 0];
                geometry.source_tangentData[index + 1] = geometry.source_tangentData[index + 1];
                geometry.source_tangentData[index + 2] = geometry.source_tangentData[index + 2];
            }
            for (var i = 0; i < geometry.source_tangentData.length / 3; ++i) {
                var vx = geometry.source_tangentData[i * 3];
                var vy = geometry.source_tangentData[i * 3 + 1];
                var vz = geometry.source_tangentData[i * 3 + 2];
                var d = 1.0 / Math.sqrt(vx * vx + vy * vy + vz * vz);
                geometry.source_tangentData[i * 3] = vx * d;
                geometry.source_tangentData[i * 3 + 1] = vy * d;
                geometry.source_tangentData[i * 3 + 2] = vz * d;
            }
        };
        return GeometryData;
    }());
    egret3d.GeometryData = GeometryData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SubGeometry
     * @classdesc
     * 表示几何形状 子集 不同的子集渲染时使用的材质会不同
     *
     * @see egret3d.Geometry
     * @version Egret 3.0
     * @platform Web,Native
     */
    var SubGeometry = (function () {
        /**
        * @language zh_CN
        * 创建一个SubGeometry
        */
        function SubGeometry() {
            /**
             * @language zh_CN
             * 顶点索引
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.start = 0;
            /**
             * @language zh_CN
             * 顶点数量
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.count = 0;
            /**
             * @language zh_CN
             * 材质ID
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.matID = 0;
            this.attList = new Array();
            this._attributeDiry = true;
        }
        SubGeometry.prototype.upload = function (passUsage, contextPorxy) {
            this._attributeDiry = false;
            var offset = 0;
            this.attList.length = 0;
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_POSITION) {
                if (passUsage.attribute_position) {
                    if (!passUsage.attribute_position.uniformIndex) {
                        passUsage.attribute_position.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_position.varName);
                    }
                    passUsage.attribute_position.size = egret3d.Geometry.positionSize;
                    passUsage.attribute_position.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_position.normalized = false;
                    passUsage.attribute_position.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_position.offset = offset;
                    this.attList.push(passUsage.attribute_position);
                }
                offset += egret3d.Geometry.positionSize * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_NORMAL) {
                if (passUsage.attribute_normal) {
                    if (!passUsage.attribute_normal.uniformIndex) {
                        passUsage.attribute_normal.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_normal.varName);
                    }
                    passUsage.attribute_normal.size = egret3d.Geometry.normalSize;
                    passUsage.attribute_normal.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_normal.normalized = false;
                    passUsage.attribute_normal.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_normal.offset = offset;
                    this.attList.push(passUsage.attribute_normal);
                }
                offset += egret3d.Geometry.normalSize * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_TANGENT) {
                if (passUsage.attribute_tangent) {
                    if (!passUsage.attribute_tangent.uniformIndex) {
                        passUsage.attribute_tangent.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_tangent.varName);
                    }
                    passUsage.attribute_tangent.size = egret3d.Geometry.tangentSize;
                    passUsage.attribute_tangent.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_tangent.normalized = false;
                    passUsage.attribute_tangent.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_tangent.offset = offset;
                    this.attList.push(passUsage.attribute_tangent);
                }
                offset += egret3d.Geometry.tangentSize * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_COLOR) {
                if (passUsage.attribute_color) {
                    if (!passUsage.attribute_color.uniformIndex) {
                        passUsage.attribute_color.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_color.varName);
                    }
                    passUsage.attribute_color.size = egret3d.Geometry.colorSize;
                    passUsage.attribute_color.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_color.normalized = false;
                    passUsage.attribute_color.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_color.offset = offset;
                    this.attList.push(passUsage.attribute_color);
                }
                offset += egret3d.Geometry.colorSize * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_UV0) {
                if (passUsage.attribute_uv0) {
                    if (!passUsage.attribute_uv0.uniformIndex) {
                        passUsage.attribute_uv0.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_uv0.varName);
                    }
                    passUsage.attribute_uv0.size = egret3d.Geometry.uvSize;
                    passUsage.attribute_uv0.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_uv0.normalized = false;
                    passUsage.attribute_uv0.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_uv0.offset = offset;
                    this.attList.push(passUsage.attribute_uv0);
                }
                offset += egret3d.Geometry.uvSize * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_UV1) {
                if (passUsage.attribute_uv1) {
                    if (!passUsage.attribute_uv1.uniformIndex) {
                        passUsage.attribute_uv1.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_uv1.varName);
                    }
                    passUsage.attribute_uv1.size = egret3d.Geometry.uv2Size;
                    passUsage.attribute_uv1.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_uv1.normalized = false;
                    passUsage.attribute_uv1.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_uv1.offset = offset;
                    this.attList.push(passUsage.attribute_uv1);
                }
                offset += egret3d.Geometry.uv2Size * 4;
            }
            if (this.geometry.vertexFormat & egret3d.VertexFormat.VF_SKIN) {
                if (passUsage.attribute_boneIndex) {
                    if (!passUsage.attribute_boneIndex.uniformIndex) {
                        passUsage.attribute_boneIndex.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_boneIndex.varName);
                    }
                    passUsage.attribute_boneIndex.size = egret3d.Geometry.skinSize / 2;
                    passUsage.attribute_boneIndex.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_boneIndex.normalized = false;
                    passUsage.attribute_boneIndex.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_boneIndex.offset = offset;
                    this.attList.push(passUsage.attribute_boneIndex);
                }
                offset += egret3d.Geometry.skinSize / 2 * 4;
                if (passUsage.attribute_boneWeight) {
                    if (!passUsage.attribute_boneWeight.uniformIndex) {
                        passUsage.attribute_boneWeight.uniformIndex = contextPorxy.getShaderAttribLocation(passUsage.program3D, passUsage.attribute_boneWeight.varName);
                    }
                    passUsage.attribute_boneWeight.size = egret3d.Geometry.skinSize / 2;
                    passUsage.attribute_boneWeight.dataType = egret3d.ContextConfig.FLOAT;
                    passUsage.attribute_boneWeight.normalized = false;
                    passUsage.attribute_boneWeight.stride = this.geometry.vertexSizeInBytes;
                    passUsage.attribute_boneWeight.offset = offset;
                    this.attList.push(passUsage.attribute_boneWeight);
                }
                offset += egret3d.Geometry.skinSize / 2 * 4;
            }
        };
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        SubGeometry.prototype.update = function (time, delay, passUsage, contextPorxy) {
            if (this._attributeDiry)
                this.upload(passUsage, contextPorxy);
            for (var i = 0; i < this.attList.length; i++) {
                if (this.attList[i].uniformIndex >= 0)
                    contextPorxy.vertexAttribPointer(this.attList[i].uniformIndex, this.attList[i].size, this.attList[i].dataType, this.attList[i].normalized, this.attList[i].stride, this.attList[i].offset);
            }
        };
        return SubGeometry;
    }());
    egret3d.SubGeometry = SubGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.CubeGeometry
     * @classdesc
     * CubeGeometry类 表示立方体</p>
     *
     * 示例：</p>
     * 用 CubeGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）; </p>
     <pre>
      var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CubeGeometry(), new egret3d.TextureMaterial() );
     </pre>
     *
     * @see egret3d.Geometry
     * @see egret3d.Mesh
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CubeGeometry.ts
     */
    var CubeGeometry = (function (_super) {
        __extends(CubeGeometry, _super);
        /**
        * @language zh_CN
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param depth 深度
        */
        function CubeGeometry(width, height, depth) {
            if (width === void 0) { width = 80; }
            if (height === void 0) { height = 80; }
            if (depth === void 0) { depth = 80; }
            _super.call(this);
            /**
            * @language zh_CN
            * Cube宽度
            *
            */
            this.width = 80;
            /**
            * @language zh_CN
            * Cube高度
            *
            */
            this.height = 80;
            /**
            * @language zh_CN
            * Cube深度
            *
            */
            this.depth = 80;
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.buildGeomtry(true);
        }
        /**
        * @language zh_CN
        * 生成网格
        */
        CubeGeometry.prototype.buildGeomtry = function (front) {
            this.vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_TANGENT | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0 | egret3d.VertexFormat.VF_UV1;
            this.verticesData = new Array();
            this.indexData = new Array();
            this.verticesData.push(-this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width * 0.5, this.height * 0.5, this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, -this.height * 0.5, this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width * 0.5, this.height * 0.5, -this.depth * 0.5, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width * 0.5, this.height * 0.5, -this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width * 0.5, -this.height * 0.5, -this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width * 0.5, -this.height * 0.5, this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width * 0.5, -this.height * 0.5, this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width * 0.5, this.height * 0.5, this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width * 0.5, this.height * 0.5, -this.depth * 0.5, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0);
            if (front) {
                this.indexData.push(0, 2, 1, 3, 5, 4, 6, 8, 7, 9, 11, 10, 12, 14, 13, 15, 17, 16, 18, 20, 19, 21, 23, 22, 24, 26, 25, 27, 29, 28, 30, 32, 31, 33, 35, 34);
            }
            else {
                this.indexData.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35);
            }
            this.buildDefaultSubGeometry();
        };
        return CubeGeometry;
    }(egret3d.Geometry));
    egret3d.CubeGeometry = CubeGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.CylinderGeometry
     * @classdesc
     * CylinderGeometry类 表示圆柱体</p>
     *
     * 示例：</p>
     * 用 CylinderGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理)</p>
     <pre>
     var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CylinderGeometry(), new egret3d.TextureMaterial() );
     </pre>
     * @see egret3d.Geometry
     * @version Egret 3.0
     * @platform Web,Native
     */
    var CylinderGeometry = (function (_super) {
        __extends(CylinderGeometry, _super);
        /**
          * @language zh_CN
          * 构造函数
          */
        function CylinderGeometry(height, radius) {
            if (height === void 0) { height = 100; }
            if (radius === void 0) { radius = 200; }
            _super.call(this);
            this.height = height;
            this.radius = radius;
            this.buildGeomtry();
        }
        /**
        * @private
        * @language zh_CN
        * 生成网格
        */
        CylinderGeometry.prototype.buildGeomtry = function () {
            this.vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0 | egret3d.VertexFormat.VF_UV1;
            this.verticesData = new Array();
            this.indexData = new Array();
            var m_nSegments = 20;
            //var m_rRadius: number = 100;
            //var m_rHeight: number = 200;
            var nCurrentSegment = 20;
            var rDeltaSegAngle = (2.0 * Math.PI / m_nSegments);
            var rSegmentLength = 1.0 / m_nSegments;
            for (nCurrentSegment = 0; nCurrentSegment <= m_nSegments; nCurrentSegment++) {
                //var x0: number = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
                var x0 = this.radius * Math.sin(nCurrentSegment * rDeltaSegAngle);
                //var z0: number = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
                var z0 = this.radius * Math.cos(nCurrentSegment * rDeltaSegAngle);
                this.verticesData.push(
                //x0, 0.0 + (m_rHeight / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0,
                //x0, 0.0 - (m_rHeight / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
                x0, 0.0 + (this.height / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, x0, 0.0 - (this.height / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            }
            var len_base = this.verticesData.length / 14;
            //console.log(str);
            var topCenter = this.verticesData.length;
            //this.verticesData.push(0.0, 0.0 + (m_rHeight / 2.0), 0.0, 0.0, 1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            this.verticesData.push(0.0, 0.0 + (this.height / 2.0), 0.0, 0.0, 1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            //for (nCurrentSegment = 0; nCurrentSegment <= m_nSegments; nCurrentSegment++) {
            //    var x0: number = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
            //    var z0: number = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
            //    this.verticesData.push(x0, 0.0 + (m_rHeight / 2.0), z0, 0.0, 1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            //}
            var buttomCenter = this.verticesData.length;
            //this.verticesData.push(0.0, 0.0 - (m_rHeight / 2.0), 0.0, 0.0, -1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            this.verticesData.push(0.0, 0.0 - (this.height / 2.0), 0.0, 0.0, -1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            //for (nCurrentSegment = m_nSegments; nCurrentSegment >= 0; nCurrentSegment--) {
            //    var x0: number = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
            //    var z0: number = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
            //    this.verticesData.push(x0, 0.0 - (m_rHeight / 2.0), z0, 0.0, -1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            //}
            for (var i = 0; i < len_base; i++) {
                if ((i & 1) != 0) {
                    this.indexData.push(i, i + 1 >= len_base ? i + 1 - len_base : i + 1, i + 2 >= len_base ? i + 2 - len_base : i + 2, topCenter, i, i + 2 >= len_base ? i + 2 - len_base : i + 2);
                }
                else {
                    this.indexData.push(i + 1 >= len_base ? i + 1 - len_base : i + 1, i, i + 2 >= len_base ? i + 2 - len_base : i + 2, i, buttomCenter, i + 2 >= len_base ? i + 2 - len_base : i + 2);
                }
            }
            var subGeometry = new egret3d.SubGeometry();
            subGeometry.geometry = this;
            subGeometry.start = 0;
            subGeometry.count = this.indexData.length;
            this.subGeometrys.push(subGeometry);
        };
        return CylinderGeometry;
    }(egret3d.Geometry));
    egret3d.CylinderGeometry = CylinderGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.PlaneGeometry
     * @classdesc
     * PlaneGeometry类 表示面板几何体
     *
     * 示例：
     * //用 PlaneGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.PlaneGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CubeGeometry.ts
     */
    var PlaneGeometry = (function (_super) {
        __extends(PlaneGeometry, _super);
        /**
        * @language zh_CN
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
        * @param uScale U缩放
        * @param vScale V缩放
        */
        function PlaneGeometry(width, height, segmentsW, segmentsH, uScale, vScale) {
            if (width === void 0) { width = 500; }
            if (height === void 0) { height = 500; }
            if (segmentsW === void 0) { segmentsW = 1; }
            if (segmentsH === void 0) { segmentsH = 1; }
            if (uScale === void 0) { uScale = 1; }
            if (vScale === void 0) { vScale = 1; }
            _super.call(this);
            this._segmentsW = 1;
            this._segmentsH = 1;
            this._width = 500.0;
            this._height = 500.0;
            this._scaleU = 1;
            this._scaleV = 1;
            this._width = width;
            this._height = height;
            this._segmentsW = segmentsW;
            this._segmentsH = segmentsH;
            this._scaleU = uScale;
            this._scaleV = vScale;
            this.buildGeometry();
        }
        PlaneGeometry.prototype.buildGeometry = function () {
            this.vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_TANGENT | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0;
            var x, y;
            var numIndices;
            var base;
            var tw = this._segmentsW + 1;
            var numVertices = (this._segmentsH + 1) * tw;
            var stride = this.vertexAttLength;
            var skip = stride - 15;
            numIndices = this._segmentsH * this._segmentsW * 6;
            this.verticesData = new Array(numVertices * stride);
            this.indexData = new Array(numIndices);
            numIndices = 0;
            var point = new egret3d.Vector3D();
            var index = 0;
            for (var yi = 0; yi <= this._segmentsH; ++yi) {
                for (var xi = 0; xi <= this._segmentsW; ++xi) {
                    x = (xi / this._segmentsW - .5) * this._width;
                    y = (yi / this._segmentsH - .5) * this._height;
                    this.verticesData[index++] = x;
                    this.verticesData[index++] = 0;
                    this.verticesData[index++] = y;
                    this.verticesData[index++] = 0;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = 0;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = 0;
                    this.verticesData[index++] = 0;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = 1;
                    this.verticesData[index++] = (xi / this._segmentsW) * this._scaleU;
                    this.verticesData[index++] = (1 - yi / this._segmentsH) * this._scaleV;
                    index += skip;
                    if (xi != this._segmentsW && yi != this._segmentsH) {
                        base = xi + yi * tw;
                        var mult = 1;
                        this.indexData[numIndices++] = base * mult;
                        this.indexData[numIndices++] = (base + tw + 1) * mult;
                        this.indexData[numIndices++] = (base + tw) * mult;
                        this.indexData[numIndices++] = base * mult;
                        this.indexData[numIndices++] = (base + 1) * mult;
                        this.indexData[numIndices++] = (base + tw + 1) * mult;
                    }
                }
            }
            var subGeometry = new egret3d.SubGeometry();
            subGeometry.geometry = this;
            subGeometry.start = 0;
            subGeometry.count = this.indexData.length;
            this.subGeometrys.push(subGeometry);
        };
        return PlaneGeometry;
    }(egret3d.Geometry));
    egret3d.PlaneGeometry = PlaneGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SphereGeometry
     * @classdesc
     * SphereGeometry类 表示球体
     *
     * 示例：
     * //用 SphereGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.SphereGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/SphereGeometry.ts
     */
    var SphereGeometry = (function (_super) {
        __extends(SphereGeometry, _super);
        /**
        * @language zh_CN
        * 构造函数
        * @param r 半径
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
        */
        function SphereGeometry(r, segmentsW, segmentsH) {
            if (r === void 0) { r = 100.0; }
            if (segmentsW === void 0) { segmentsW = 15; }
            if (segmentsH === void 0) { segmentsH = 15; }
            _super.call(this);
            this._segmentsW = 50;
            this._segmentsH = 50;
            this._radius = 100;
            this._radius = r;
            this._segmentsW = segmentsW;
            this._segmentsH = segmentsH;
            this.buildSphere(true);
        }
        SphereGeometry.prototype.buildSphere = function (front) {
            if (front === void 0) { front = true; }
            this.vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_TANGENT | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0 | egret3d.VertexFormat.VF_UV1;
            var i = 0, j = 0, triIndex = 0;
            var numVerts = (this._segmentsH + 1) * (this._segmentsW + 1);
            var stride = this.vertexAttLength;
            var skip = stride - 9;
            this.verticesData = new Array(numVerts * stride);
            this.indexData = new Array((this._segmentsH - 1) * this._segmentsW * 6);
            var startIndex = 0;
            var index = 0;
            var comp1 = 0, comp2 = 0, t1 = 0, t2 = 0;
            for (j = 0; j <= this._segmentsH; ++j) {
                startIndex = index;
                var horangle = Math.PI * j / this._segmentsH;
                var z = -this._radius * Math.cos(horangle);
                var ringradius = this._radius * Math.sin(horangle);
                for (i = 0; i <= this._segmentsW; ++i) {
                    var verangle = 2 * Math.PI * i / this._segmentsW;
                    var x = ringradius * Math.cos(verangle);
                    var y = ringradius * Math.sin(verangle);
                    var normLen = 1 / Math.sqrt(x * x + y * y + z * z);
                    var tanLen = Math.sqrt(y * y + x * x);
                    t1 = 0;
                    t2 = tanLen > .007 ? x / tanLen : 0;
                    comp1 = -z;
                    comp2 = y;
                    if (i == this._segmentsW) {
                        this.verticesData[index++] = this.verticesData[startIndex];
                        this.verticesData[index++] = this.verticesData[startIndex + 1];
                        this.verticesData[index++] = this.verticesData[startIndex + 2];
                        this.verticesData[index++] = x * normLen;
                        ;
                        this.verticesData[index++] = comp1 * normLen;
                        ;
                        this.verticesData[index++] = comp2 * normLen;
                        ;
                        this.verticesData[index++] = tanLen > .007 ? -y / tanLen : 1;
                        this.verticesData[index++] = t1;
                        this.verticesData[index++] = t2;
                        this.verticesData[index + 0] = 1.0;
                        this.verticesData[index + 1] = 1.0;
                        this.verticesData[index + 2] = 1.0;
                        this.verticesData[index + 3] = 1.0;
                    }
                    else {
                        this.verticesData[index++] = x;
                        this.verticesData[index++] = comp1;
                        this.verticesData[index++] = comp2;
                        this.verticesData[index++] = x * normLen;
                        this.verticesData[index++] = comp1 * normLen;
                        this.verticesData[index++] = comp2 * normLen;
                        this.verticesData[index++] = tanLen > .007 ? -y / tanLen : 1;
                        this.verticesData[index++] = t1;
                        this.verticesData[index++] = t2;
                        this.verticesData[index] = 1.0;
                        this.verticesData[index + 1] = 1.0;
                        this.verticesData[index + 2] = 1.0;
                        this.verticesData[index + 3] = 1.0;
                    }
                    if (i > 0 && j > 0) {
                        var a = (this._segmentsW + 1) * j + i;
                        var b = (this._segmentsW + 1) * j + i - 1;
                        var c = (this._segmentsW + 1) * (j - 1) + i - 1;
                        var d = (this._segmentsW + 1) * (j - 1) + i;
                        if (j == this._segmentsH) {
                            this.verticesData[index - 9] = this.verticesData[startIndex];
                            this.verticesData[index - 8] = this.verticesData[startIndex + 1];
                            this.verticesData[index - 7] = this.verticesData[startIndex + 2];
                            if (front) {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = d;
                                this.indexData[triIndex++] = c;
                            }
                            else {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = c;
                                this.indexData[triIndex++] = d;
                            }
                        }
                        else if (j == 1) {
                            if (front) {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = c;
                                this.indexData[triIndex++] = b;
                            }
                            else {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = b;
                                this.indexData[triIndex++] = c;
                            }
                        }
                        else {
                            if (front) {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = d;
                                this.indexData[triIndex++] = c;
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = c;
                                this.indexData[triIndex++] = b;
                            }
                            else {
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = c;
                                this.indexData[triIndex++] = d;
                                this.indexData[triIndex++] = a;
                                this.indexData[triIndex++] = b;
                                this.indexData[triIndex++] = c;
                            }
                        }
                    }
                    index += skip;
                }
            }
            //var i: number, j: number;
            var stride = 17;
            var numUvs = (this._segmentsH + 1) * (this._segmentsW + 1) * stride;
            var data;
            var skip = stride - 2;
            var index = 13;
            for (j = 0; j <= this._segmentsH; ++j) {
                for (i = 0; i <= this._segmentsW; ++i) {
                    this.verticesData[index++] = (i / this._segmentsW);
                    this.verticesData[index++] = (j / this._segmentsH);
                    index += skip;
                }
            }
            var subGeometry = new egret3d.SubGeometry();
            subGeometry.geometry = this;
            subGeometry.start = 0;
            subGeometry.count = this.indexData.length;
            this.subGeometrys.push(subGeometry);
        };
        return SphereGeometry;
    }(egret3d.Geometry));
    egret3d.SphereGeometry = SphereGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Input
     * @classdesc
     * 处理输入设备,鼠标.键盘.触摸。
     * 当点事件产生时如果没有点击到任何的View3D内，
     * 当前事件将不用派发.
     * @includeExample input/Input.ts
     * @see egret3d.EventDispatcher
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var Input = (function (_super) {
        __extends(Input, _super);
        /**
        * @language zh_CN
        * 创建一个新的 Input 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Input() {
            var _this = this;
            _super.call(this);
            this._time = 0;
            this._keyStatus = {};
            this._mouseStatus = {};
            this._isTouchStart = false;
            this._mouseEvent3d = new egret3d.MouseEvent3D();
            this._keyEvent3d = new egret3d.KeyEvent3D();
            this._touchEvent3d = new egret3d.TouchEvent3D();
            /**
            * @language zh_CN
            * 游戏手柄Stick1事件侦听函数。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.onGamepadStick1 = null;
            /**
            * @language zh_CN
            * 游戏手柄Stick2事件侦听函数。
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.onGamepadStick2 = null;
            this._gp = false;
            this._first = true;
            this._initAngle = new egret3d.Vector3D();
            this._oldPosition1 = null;
            this._oldPosition2 = null;
            window.addEventListener("click", function (e) { return _this.mouseClick(e); });
            window.addEventListener("mousedown", function (e) { return _this.mouseStart(e); });
            window.addEventListener("mouseup", function (e) { return _this.mouseEnd(e); });
            window.addEventListener("mousewheel", function (e) { return _this.mouseWheel(e); });
            window.addEventListener("mousemove", function (e) { return _this.mouseMove(e); });
            window.addEventListener("mouseover", function (e) { return _this.mouseOver(e); });
            window.addEventListener("keydown", function (e) { return _this.keyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.keyUp(e); });
            if (this.canGame()) {
                window.addEventListener("gamepadconnected", function (e) { return _this.ongamepadconnected(e); });
                window.addEventListener("gamepaddisconnected", function (e) { return _this.ongamepaddisconnected(e); });
            }
            window.addEventListener("touchstart", function (e) { return _this.touchStart(e); });
            window.addEventListener("touchend", function (e) { return _this.touchEnd(e); });
            window.addEventListener("touchmove", function (e) { return _this.touchMove(e); });
            window.addEventListener("touchcancel", function (e) { return _this.touchEnd(e); });
            window.addEventListener("deviceorientation", function (e) { return _this.ondeviceorientation(e); });
            window.addEventListener("devicemotion", function (e) { return _this.detectShake(e); });
        }
        Object.defineProperty(Input, "instance", {
            /**
            * @language zh_CN
            * 获取Input类对象的单例。
            * @returns Input
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                if (this._instance == null) {
                    this._instance = new Input();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。
        * 成功注册一个事件侦听器后，不使用后 需要removeEventListenerAt().
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @returns 事件ID 返回值 removeEventListenerAt 时会用到
         * @version Egret 3.0
         * @platform Web,Native
        */
        Input.addEventListener = function (type, callback, thisObject) {
            return Input.instance.addEventListener(type, callback, thisObject);
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @version Egret 3.0
         * @platform Web,Native
         */
        Input.removeEventListener = function (type, callback, thisObject) {
            Input.instance.removeEventListener(type, callback, thisObject);
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param id  事件id, addEventListener 的返回值.
         * @version Egret 3.0
         * @platform Web,Native
         */
        Input.removeEventListenerAt = function (id) {
            Input.instance.removeEventListenerAt(id);
        };
        Input.prototype.ongamepaddisconnected = function (e) {
            //Debug.instance.trace("Gamepad disconnected!");
            this._gp = false;
        };
        Input.prototype.ongamepadconnected = function (e) {
            //Debug.instance.trace("Gamepad connected!");
            this._gp = true;
        };
        /**
        * @language zh_CN
        * 游戏手柄按钮是否按下。
        * @version Egret 3.0
        * @platform Web,Native
        * @param index {number}
        * @returns {boolean}
        */
        Input.prototype.getGamepadButtonState = function (index) {
            return navigator.getGamepads()[0].buttons[index].pressed;
        };
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick1 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        Input.prototype.getGamepadStick1 = function () {
            return new egret3d.Vector3D(navigator.getGamepads()[0].axes[0], navigator.getGamepads()[0].axes[1], 0);
        };
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick2 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        Input.prototype.getGamepadStick2 = function () {
            return new egret3d.Vector3D(navigator.getGamepads()[0].axes[2], navigator.getGamepads()[0].axes[3], 0);
        };
        Input.prototype.canGame = function () {
            return "getGamepads" in navigator;
        };
        /**
        * @language zh_CN
        * 更新游戏手柄信息。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.reportOnGamepad = function () {
            if (Input.instance.canGame() && Input.instance._gp) {
                if (Input.instance.onGamepadStick1 != null) {
                    Input.instance.onGamepadStick1(Input.instance.getGamepadStick1());
                }
                if (Input.instance.onGamepadStick2 != null) {
                    Input.instance.onGamepadStick2(Input.instance.getGamepadStick2());
                }
            }
        };
        Input.prototype.printout = function () {
            var html = "";
            html += "id: " + navigator.getGamepads()[0].id + "<br/>";
            var len = navigator.getGamepads()[0].buttons.length;
            for (var i = 0; i < len; i++) {
                html += "Button " + (i + 1) + ": ";
                if (this.getGamepadButtonState(i))
                    html += " pressed";
                html += "<br/>";
            }
            var v = this.getGamepadStick1();
            html += "Stick 1" + ": " + v.x + "," + v.y + "<br/>";
            v = this.getGamepadStick2();
            html += "Stick 2" + ": " + v.x + "," + v.y + "<br/>";
            //Debug.instance.trace(html);
        };
        Input.prototype.detectShake = function (evt) {
            var accl = evt.acceleration; //acceleration 排除重力影响的加速度  accelerationIncludingGravity(含重力的加速度)
            //x、y 和 z 轴方向加速
            if (accl.x > 1.5 || accl.y > 1.5 || accl.z > 1.5) {
            }
            else {
            }
            //if (this._ondevicemotion && this._ondevicemotion.length > 0) {
            //    var x: number = Math.ceil(accl.x * 1000) / 1000;
            //    var y: number = Math.ceil(accl.y * 1000) / 1000;
            //    var z: number = Math.ceil(accl.z * 1000) / 1000;
            //    this._ondevicemotion[0](x, y, z);
            //}
        };
        Input.prototype.ondeviceorientation = function (e) {
            //alpha rotation around the z-axis  between 0 and 360 degrees 
            //在围绕 z 轴旋转时（即左右旋转时），y 轴的度数差 0 到 360度 。
            //beta Rotation around the x-axis cause the beta angle to change. The range of beta is between -180 and 180 degrees 
            //在围绕 x 轴旋转时（即前后旋转时），z 轴的度数差 -180到180度。  
            //gamma The gamma angle is associated with the y-axis between -90 and 90 degrees 
            //在围绕 y 轴旋转时（即扭转设备时），z 轴的度数差 -90到90度。  
            //if (this._ondeviceorientation && this._ondeviceorientation.length > 0) {
            //    var alpha: number = Math.round(e.alpha * 100) * 0.01;
            //    var beta: number = Math.round(e.beta * 100) * 0.01;
            //    var gamma: number = Math.round(e.gamma * 100) * 0.01;
            //    if (this._first) {
            //        this._initAngle["x"] = alpha;
            //        this._initAngle["y"] = beta;
            //        this._initAngle["z"] = gamma;
            //    }
            //    this._delayX = alpha - this._caheX;
            //    this._delayY = beta - this._caheY;
            //    this._delayZ = gamma - this._caheZ;
            //    this._caheX = alpha;
            //    this._caheY = beta;
            //    this._caheZ = gamma;
            //    this._initAngle.x += this._delayX;
            //    this._initAngle.y += this._delayY;
            //    this._initAngle.z += this._delayZ;
            //    for (var i: number = 0; i < this._ondeviceorientation.length; i++) {
            //        this._ondeviceorientation[i].callback.call(this._ondeviceorientation[i].thisObject, this._initAngle);
            //    }
            //}
        };
        //屏幕翻转
        Input.prototype.onorientationchange = function (e) {
        };
        Input.prototype.onPinch = function (x, y, x1, y1) {
            this._oldPosition1 = new egret3d.Point(x, y);
            this._oldPosition2 = new egret3d.Point(x1, y1);
        };
        Input.prototype.onSwipe = function (x, y) {
            Input.mouseX = x;
            Input.mouseY = y;
            this._oldPosition1 = null;
            this._oldPosition2 = null;
            this._time = new Date().getTime();
        };
        Input.prototype.touchStart = function (e) {
            if (!this.deliverMessage()) {
                return;
            }
            e.preventDefault();
            var x1 = e.targetTouches[0].clientX - Input.canvas.x;
            var y1 = e.targetTouches[0].clientY - Input.canvas.y;
            if (e.targetTouches.length == 2) {
                var x2 = e.targetTouches[1].clientX - Input.canvas.x;
                var y2 = e.targetTouches[1].clientY - Input.canvas.y;
                this.onPinch(x1, y1, x2, y2);
            }
            else if (e.targetTouches.length == 1) {
                this.onSwipe(x1, y1);
            }
            this._touchEvent3d.targetTouches = e.targetTouches;
            this._touchEvent3d.target = this;
            if (!this._isTouchStart) {
                this._isTouchStart = true;
                this._touchEvent3d.eventType = egret3d.TouchEvent3D.TOUCH_START;
                this.dispatchEvent(this._touchEvent3d);
            }
        };
        Input.prototype.touchEnd = function (e) {
            if (e.targetTouches.length > 1) {
                var x = e.targetTouches[0].clientX - Input.canvas.x;
                var y = e.targetTouches[0].clientY - Input.canvas.y;
                var x1 = e.targetTouches[1].clientX - Input.canvas.x;
                var y1 = e.targetTouches[1].clientY - Input.canvas.y;
                this.onPinch(x, y, x1, y1);
            }
            else if (e.targetTouches.length == 1) {
                this.onSwipe(e.targetTouches[0].clientX - Input.canvas.x, e.targetTouches[0].clientY - Input.canvas.y);
            }
            else {
                this._oldPosition1 = null;
                this._oldPosition2 = null;
                this._time = 0;
            }
            this._isTouchStart = false;
            this._touchEvent3d.targetTouches = e.targetTouches;
            this._touchEvent3d.target = this;
            this._touchEvent3d.eventType = egret3d.TouchEvent3D.TOUCH_END;
            this.dispatchEvent(this._touchEvent3d);
        };
        Input.prototype.touchMove = function (e) {
            Input.mouseLastX = Input.mouseX;
            Input.mouseLastY = Input.mouseY;
            Input.mouseX = e.targetTouches[0].clientX - Input.canvas.x;
            Input.mouseY = e.targetTouches[0].clientY - Input.canvas.y;
            Input.mouseOffsetX = Input.mouseX - Input.mouseLastX;
            Input.mouseOffsetY = Input.mouseY - Input.mouseLastY;
            e.preventDefault();
            if (e.targetTouches.length > 1) {
                var newPosition1 = new egret3d.Point(Input.mouseX, Input.mouseY);
                var newPosition2 = new egret3d.Point(e.targetTouches[1].clientX - Input.canvas.x, e.targetTouches[1].clientY - Input.canvas.y);
                if (this._oldPosition1 == null)
                    this._oldPosition1 = newPosition1;
                if (this._oldPosition2 == null)
                    this._oldPosition2 = newPosition2;
                if (this.isEnlarge(this._oldPosition1, this._oldPosition2, newPosition1, newPosition2))
                    Input.wheelDelta = 120;
                else
                    Input.wheelDelta = -120;
                this._oldPosition1 = newPosition1;
                this._oldPosition2 = newPosition2;
            }
            else {
            }
            this._touchEvent3d.targetTouches = e.targetTouches;
            this._touchEvent3d.target = this;
            this._touchEvent3d.eventType = egret3d.TouchEvent3D.TOUCH_MOVE;
            this.dispatchEvent(this._touchEvent3d);
        };
        Input.prototype.mouseClick = function (e) {
            if (!this.deliverMessage()) {
                return;
            }
            this._mouseEvent3d.mouseCode = e.button;
            this._mouseEvent3d.target = this;
            this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_CLICK;
            this.dispatchEvent(this._mouseEvent3d);
        };
        Input.prototype.mouseEnd = function (e) {
            this._mouseEvent3d.mouseCode = e.button;
            this._mouseEvent3d.target = this;
            this._mouseStatus[this._mouseEvent3d.mouseCode] = false;
            this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_UP;
            this.dispatchEvent(this._mouseEvent3d);
        };
        Input.prototype.deliverMessage = function () {
            var view3ds = Input.canvas.view3Ds;
            for (var i = 0; i < view3ds.length; ++i) {
                if (view3ds[i].inView3D(Input.mouseX, Input.mouseY)) {
                    return true;
                }
            }
            return false;
        };
        Input.prototype.mouseStart = function (e) {
            if (!this.deliverMessage()) {
                return;
            }
            this._mouseEvent3d.mouseCode = e.button;
            this._mouseEvent3d.target = this;
            if (!this._mouseStatus[this._mouseEvent3d.mouseCode]) {
                this._mouseStatus[this._mouseEvent3d.mouseCode] = true;
                this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_DOWN;
                this.dispatchEvent(this._mouseEvent3d);
            }
        };
        Input.prototype.mouseMove = function (e) {
            Input.mouseLastX = Input.mouseX;
            Input.mouseLastY = Input.mouseY;
            Input.mouseX = e.clientX - Input.canvas.x;
            Input.mouseY = e.clientY - Input.canvas.y;
            Input.mouseOffsetX = Input.mouseX - Input.mouseLastX;
            Input.mouseOffsetY = Input.mouseY - Input.mouseLastY;
            this._mouseEvent3d.target = this;
            this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_MOVE;
            this.dispatchEvent(this._mouseEvent3d);
        };
        Input.prototype.mouseOver = function (e) {
            this._mouseEvent3d.target = this;
            this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_OVER;
            this.dispatchEvent(this._mouseEvent3d);
        };
        Input.prototype.mouseWheel = function (e) {
            Input.wheelDelta = e.wheelDelta;
            this._mouseEvent3d.target = this;
            this._mouseEvent3d.eventType = egret3d.MouseEvent3D.MOUSE_WHEEL;
            this.dispatchEvent(this._mouseEvent3d);
        };
        Input.prototype.keyDown = function (e) {
            this._keyEvent3d.keyCode = e.keyCode;
            this._keyEvent3d.target = this;
            if (!this._keyStatus[e.keyCode]) {
                this._keyStatus[e.keyCode] = true;
                this._keyEvent3d.eventType = egret3d.KeyEvent3D.KEY_CLICK;
                this.dispatchEvent(this._keyEvent3d);
                this._keyEvent3d.eventType = egret3d.KeyEvent3D.KEY_DOWN;
                this.dispatchEvent(this._keyEvent3d);
            }
        };
        Input.prototype.keyUp = function (e) {
            this._keyEvent3d.keyCode = e.keyCode;
            this._keyEvent3d.target = this;
            if (this._keyStatus[e.keyCode]) {
                this._keyEvent3d.eventType = egret3d.KeyEvent3D.KEY_CLICK;
                this.dispatchEvent(this._keyEvent3d);
            }
            this._keyStatus[e.keyCode] = false;
            this._keyEvent3d.eventType = egret3d.KeyEvent3D.KEY_UP;
            this.dispatchEvent(this._keyEvent3d);
        };
        //返回角度
        Input.prototype.GetSlideAngle = function (dx, dy) {
            return Math.atan2(dy, dx) * 180 / Math.PI;
        };
        /**
        * @language zh_CN
        * 根据起点和终点返回方向
        * @param  startX {Number} 起点X坐标
        * @param  startY {Number} 起点Y坐标
        * @param  endX   {Number} 终点X坐标
        * @param  endY   {Number} 终点Y坐标
        * @returns result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动
        */
        Input.prototype.GetSlideDirection = function (startX, startY, endX, endY) {
            var dy = startY - endY;
            var dx = endX - startX;
            var result = 0;
            //如果滑动距离太短
            if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return result;
            }
            var angle = this.GetSlideAngle(dx, dy);
            if (angle >= -45 && angle < 45) {
                result = 4;
            }
            else if (angle >= 45 && angle < 135) {
                result = 1;
            }
            else if (angle >= -135 && angle < -45) {
                result = 2;
            }
            else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            }
            return result;
        };
        Input.prototype.isEnlarge = function (op1, op2, np1, np2) {
            //函数传入上一次触摸两点的位置与本次触摸两点的位置计算出用户的手势
            var leng1 = Math.sqrt((op1.x - op2.x) * (op1.x - op2.x) + (op1.y - op2.y) * (op1.y - op2.y));
            var leng2 = Math.sqrt((np1.x - np2.x) * (np1.x - np2.x) + (np1.y - np2.y) * (np1.y - np2.y));
            if (leng1 < leng2) {
                //放大手势
                return true;
            }
            else {
                //缩小手势
                return false;
            }
        };
        /**
        * @language zh_CN
        * 当前鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseX = 0;
        /**
        * @language zh_CN
        * 当前鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseY = 0;
        /**
        * @language zh_CN
        * 鼠标滚轮增量值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.wheelDelta = 0;
        /**
        * @language zh_CN
        * 鼠标X坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseOffsetX = 0;
        /**
        * @language zh_CN
        * 鼠标Y坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseOffsetY = 0;
        /**
        * @language zh_CN
        * 上一次鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseLastX = 0;
        /**
        * @language zh_CN
        * 上一次鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        Input.mouseLastY = 0;
        Input._instance = null;
        return Input;
    }(egret3d.EventDispatcher));
    egret3d.Input = Input;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3D.OrientationControler
     * @classdesc
     * 陀螺仪控制器
     */
    var OrientationController = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function OrientationController() {
            this.orientation = new egret3d.Vector3D();
            this.screenOrientation = 0;
            this.openDebug = false;
            /**
            * @language zh_CN
            * 偏移旋转
            */
            this.offsetRotation = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 陀螺仪当前旋转角度
            */
            this.fixOritation = new egret3d.Vector3D();
            this.state = -1;
            this.degtorad = Math.PI / 180; // Degree-to-Radian conversion
            this.q = new egret3d.Quaternion();
            this.q1 = new egret3d.Quaternion();
            this.outQ = new egret3d.Quaternion();
            this.fix = new egret3d.Vector3D();
            this.fixinterpolate = new egret3d.Vector3D();
            this.fixAxis = new egret3d.Vector3D();
            this.caheFixAxis = new egret3d.Vector3D();
            this.steps = 1;
            this.interpolate = true;
            if (this.openDebug) {
                this.accDiv = document.createElement("div");
                this.accGravityDiv = document.createElement("div");
                this.rotationRateDiv = document.createElement("div");
                this.orientationRateDiv = document.createElement("div");
                this.stateDiv = document.createElement("div");
                this.accDiv.style.color = "red";
                this.accGravityDiv.style.color = "red";
                this.rotationRateDiv.style.color = "red";
                this.orientationRateDiv.style.color = "red";
                this.stateDiv.style.color = "red";
                this.stateDiv.style.fontSize = "52";
                document.body.appendChild(this.accDiv);
                document.body.appendChild(this.accGravityDiv);
                document.body.appendChild(this.rotationRateDiv);
                document.body.appendChild(this.orientationRateDiv);
                document.body.appendChild(this.stateDiv);
            }
        }
        /**
        * @language zh_CN
        * 初始化
        */
        OrientationController.prototype.start = function () {
            var _this = this;
            this.orientationchangeHandler();
            window.addEventListener("orientationchange", function () { return _this.orientationchangeHandler(); });
            window.addEventListener("devicemotion", function (e) { return _this.motionHandler(e); });
            window.addEventListener("deviceorientation", function (e) { return _this.orientationHandler(e); });
        };
        /**
        * @language zh_CN
        * 释放
        */
        OrientationController.prototype.stop = function () {
            var _this = this;
            window.removeEventListener("orientationchange", function () { return _this.orientationchangeHandler(); });
            window.removeEventListener("devicemotion", function (e) { return _this.motionHandler(e); });
            window.removeEventListener("deviceorientation", function (e) { return _this.orientationHandler(e); });
        };
        /**
        * @language zh_CN
        */
        OrientationController.prototype.orientationchangeHandler = function () {
            if (window.orientation != undefined)
                this.screenOrientation = window.orientation;
            //.this.state = window.orientation;
        };
        /**
        * @language zh_CN
        *
        * @param event
        */
        OrientationController.prototype.motionHandler = function (event) {
            this.acc = event.acceleration;
            this.accGravity = event.accelerationIncludingGravity;
            this.rotationRate = event.rotationRate;
        };
        /**
        * @language zh_CN
        *
        * @param event
        * @returns
        */
        OrientationController.prototype.orientationHandler = function (event) {
            this.orientation.x = event.alpha;
            this.orientation.y = event.beta;
            this.orientation.z = event.gamma;
            if (this.openDebug)
                this.debug();
        };
        OrientationController.prototype.debug = function () {
            //this.accDiv.innerHTML = "<br><br><br> acc-x:" + this.acc.x + "<br>acc-y:" + this.acc.y + "<br>acc-z:" + this.acc.z ;
            this.accGravityDiv.innerHTML = "<br><br> Gravity-x:" + this.orientation.x * egret3d.MathUtil.RADIANS_TO_DEGREES + "<br>Gravity-y:" + this.orientation.y + "<br>Gravity-z:" + this.orientation.z;
            //this.rotationRateDiv.innerHTML = "<br> Rate-x:" + this.rotationRate.alpha + "<br>Rate-y:" + this.rotationRate.gamma + "<br>Rate-z:" + this.rotationRate.beta;
            this.orientationRateDiv.innerHTML = "<br> orientation-x:" + this.fixOritation.x + "<br>orientation-y:" + this.fixOritation.y + "<br>orientation-z:" + this.fixOritation.z;
            //this.orientationRateDiv.innerHTML = "<br> orientation-x:" + this.fixOritation.x * MathUtil.RADIANS_TO_DEGREES + "<br>orientation-y:" + this.fixOritation.y * MathUtil.RADIANS_TO_DEGREES + "<br>orientation-z:" + this.fixOritation.z * MathUtil.RADIANS_TO_DEGREES;
            this.stateDiv.innerHTML = "<br> state: " + this.state;
        };
        /**
        * @language zh_CN
        *
        * @returns number
        */
        OrientationController.prototype.getOrientation = function () {
            switch (window.screen.msOrientation) {
                case 'landscape-primary':
                    return -90;
                case 'landscape-secondary':
                    return 90;
                case 'portrait-secondary':
                    return 180;
                case 'portrait-primary':
                    return 0;
            }
            // this returns 90 if width is greater then height 
            // and window orientation is undefined OR 0
            // if (!window.orientation && window.innerWidth > window.innerHeight)
            //   return 90;
            return window.orientation || 0;
        };
        /**
        * @language zh_CN
        * 由陀螺仪的角度值计算出旋转四元数
        * @param alpha
        * @param beta
        * @param gamma
        * @returns 旋转四元数
        */
        OrientationController.prototype.getQuaternion = function (alpha, beta, gamma) {
            var _x = beta ? beta * this.degtorad : 0; // beta value
            var _y = gamma ? gamma * this.degtorad : 0; // gamma value
            var _z = alpha ? alpha * this.degtorad : 0; // alpha value
            _x = Math.floor(_x * 100) / 100;
            _y = Math.floor(_y * 100) / 100;
            var orient = -this.getOrientation() * this.degtorad; // this.getOrientation()) * this.degtorad ; // O
            this.state = this.getOrientation();
            var cX = Math.cos(_x / 2);
            var cY = Math.cos(_y / 2);
            var cZ = Math.cos(_z / 2);
            var sX = Math.sin(_x / 2);
            var sY = Math.sin(_y / 2);
            var sZ = Math.sin(_z / 2);
            //this.q1.fromAxisAngle(Vector3D.Y_AXIS, alpha * this.degtorad);
            //
            // ZXY quaternion construction.
            //
            this.q.w = cX * cY * cZ - sX * sY * sZ;
            this.q.x = sX * cY * cZ - cX * sY * sZ;
            this.q.y = cX * sY * cZ + sX * cY * sZ;
            this.q.z = cX * cY * sZ + sX * sY * cZ;
            var zee = new egret3d.Vector3D(0, 0, 1);
            var q0 = new egret3d.Quaternion();
            q0.fromAxisAngle(zee, orient);
            this.q.multiply(this.q, q0); // camera looks out the back of the device, not the top
            zee.setTo(-1, 0, 0);
            q0.fromAxisAngle(zee, 90 * this.degtorad);
            this.q.multiply(this.q, q0);
            return this.q;
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param camera3D 当前相机
        */
        OrientationController.prototype.update = function (view3D) {
            this.getBaseQuaternion(this.orientation.x, this.orientation.y, this.orientation.z);
            this.q.toEulerAngles(this.fixOritation);
            if (this.interpolate) {
                this.fixinterpolate.x = (this.fixOritation.x - this.fix.x);
                this.fixinterpolate.y = (this.fixOritation.y - this.fix.y);
                this.fixinterpolate.z = (this.fixOritation.z - this.fix.z);
                this.caheFixAxis.x = this.fixOritation.x / Math.abs(this.fixOritation.x);
                this.caheFixAxis.y = this.fixOritation.y / Math.abs(this.fixOritation.y);
                this.caheFixAxis.z = this.fixOritation.z / Math.abs(this.fixOritation.z);
                if (this.fixAxis.x == this.caheFixAxis.x && this.fixAxis.y == this.caheFixAxis.y && this.fixAxis.z == this.caheFixAxis.z) {
                    this.fix.x += this.fixinterpolate.x / (this.steps + 0.01);
                    this.fix.y += this.fixinterpolate.y / (this.steps + 0.01);
                    this.fix.z += this.fixinterpolate.z / (this.steps + 0.01);
                }
                else {
                    this.fix.x = this.fixOritation.x;
                    this.fix.y = this.fixOritation.y;
                    this.fix.z = this.fixOritation.z;
                    this.fixAxis.x = this.caheFixAxis.x;
                    this.fixAxis.y = this.caheFixAxis.y;
                    this.fixAxis.z = this.caheFixAxis.z;
                }
                view3D.camera3D.rotationX = -this.fix.x;
                view3D.camera3D.rotationY = -this.fix.y;
                view3D.camera3D.rotationZ = this.fix.z;
            }
            else {
                view3D.camera3D.rotationX = -this.fixOritation.x;
                view3D.camera3D.rotationY = -this.fixOritation.y;
                view3D.camera3D.rotationZ = this.fixOritation.z;
            }
            //view3D.scene.rotationX = -90;
        };
        OrientationController.prototype.getBaseQuaternion = function (alpha, beta, gamma) {
            var _x = beta ? beta * this.degtorad : 0; // beta value
            var _y = gamma ? gamma * this.degtorad : 0; // gamma value
            var _z = alpha ? alpha * this.degtorad : 0; // alpha value
            var cX = Math.cos(_x / 2);
            var cY = Math.cos(_y / 2);
            var cZ = Math.cos(_z / 2);
            var sX = Math.sin(_x / 2);
            var sY = Math.sin(_y / 2);
            var sZ = Math.sin(_z / 2);
            //
            // ZXY quaternion construction.
            //
            var w = cX * cY * cZ - sX * sY * sZ;
            var x = sX * cY * cZ - cX * sY * sZ;
            var y = cX * sY * cZ + sX * cY * sZ;
            var z = cX * cY * sZ + sX * sY * cZ;
            this.q.w = w;
            this.q.x = x;
            this.q.y = y;
            this.q.z = z;
            return this.q;
        };
        return OrientationController;
    }());
    egret3d.OrientationController = OrientationController;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var DDS = (function () {
        function DDS() {
            this.mipmaps = new Array();
            this.width = 0;
            this.height = 0;
            this.format = null;
            this.mipmapCount = 1;
        }
        return DDS;
    }());
    egret3d.DDS = DDS;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * dds / st3c compressed texture formats
     */
    (function (DDSFormat) {
        DDSFormat[DDSFormat["RGB_S3TC_DXT1_FORMAT"] = 2001] = "RGB_S3TC_DXT1_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT1_FORMAT"] = 2002] = "RGBA_S3TC_DXT1_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT3_FORMAT"] = 2003] = "RGBA_S3TC_DXT3_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT5_FORMAT"] = 2003] = "RGBA_S3TC_DXT5_FORMAT";
    })(egret3d.DDSFormat || (egret3d.DDSFormat = {}));
    var DDSFormat = egret3d.DDSFormat;
    ;
    /**
     * @private
     * @language zh_CN
     * @class egret3d.DDSParser
     * @classdesc
     * 用 DDSParser 类 解析.dds 文件
     */
    var DDSParser = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function DDSParser() {
        }
        /**
         * @language zh_CN
         * @param buffer 二进制
         * @param loadMipmaps 是否加载mipmaps
         * @returns DDSTexture
         */
        DDSParser.parse = function (buffer, loadMipmaps) {
            if (loadMipmaps === void 0) { loadMipmaps = true; }
            var dds = new egret3d.DDS();
            var headerLengthInt = 31; // The header length in 32 bit ints
            var off_magic = 0;
            var DDS_MAGIC = 0x20534444;
            var DDSD_CAPS = 0x1, DDSD_HEIGHT = 0x2, DDSD_WIDTH = 0x4, DDSD_PITCH = 0x8, DDSD_PIXELFORMAT = 0x1000, DDSD_MIPMAPCOUNT = 0x20000, DDSD_LINEARSIZE = 0x80000, DDSD_DEPTH = 0x800000;
            var DDSCAPS_COMPLEX = 0x8, DDSCAPS_MIPMAP = 0x400000, DDSCAPS_TEXTURE = 0x1000;
            var DDSCAPS2_CUBEMAP = 0x200, DDSCAPS2_CUBEMAP_POSITIVEX = 0x400, DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800, DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000, DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000, DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000, DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000, DDSCAPS2_VOLUME = 0x200000;
            var DDPF_ALPHAPIXELS = 0x1, DDPF_ALPHA = 0x2, DDPF_FOURCC = 0x4, DDPF_RGB = 0x40, DDPF_YUV = 0x200, DDPF_LUMINANCE = 0x20000;
            var FOURCC_DXT1 = DDSParser.fourCCToInt32("DXT1");
            var FOURCC_DXT3 = DDSParser.fourCCToInt32("DXT3");
            var FOURCC_DXT5 = DDSParser.fourCCToInt32("DXT5");
            //Pixel formats
            var RGBA_FORMAT = 1021;
            var off_magic = 0;
            var off_size = 1;
            var off_flags = 2;
            var off_height = 3;
            var off_width = 4;
            var off_mipmapCount = 7;
            var off_pfFlags = 20;
            var off_pfFourCC = 21;
            var off_RGBBitCount = 22;
            var off_RBitMask = 23;
            var off_GBitMask = 24;
            var off_BBitMask = 25;
            var off_ABitMask = 26;
            var off_caps = 27;
            var off_caps2 = 28;
            var off_caps3 = 29;
            var off_caps4 = 30;
            var header = new Int32Array(buffer, 0, headerLengthInt);
            if (header[off_magic] !== DDS_MAGIC) {
                console.error('DDSParser.parse: Invalid magic number in DDS header.');
                return null;
            }
            if (!(header[off_pfFlags] & DDPF_FOURCC)) {
                console.error('DDSParser.parse: Unsupported format, must contain a FourCC code.');
                return null;
            }
            var blockBytes;
            var fourCC = header[off_pfFourCC];
            var isRGBAUncompressed = false;
            switch (fourCC) {
                case FOURCC_DXT1:
                    blockBytes = 8;
                    dds.format = DDSFormat.RGB_S3TC_DXT1_FORMAT;
                    break;
                case FOURCC_DXT3:
                    blockBytes = 16;
                    dds.format = DDSFormat.RGBA_S3TC_DXT3_FORMAT;
                    break;
                case FOURCC_DXT5:
                    blockBytes = 16;
                    dds.format = DDSFormat.RGBA_S3TC_DXT5_FORMAT;
                    break;
                default:
                    if (header[off_RGBBitCount] == 32
                        && header[off_RBitMask] & 0xff0000
                        && header[off_GBitMask] & 0xff00
                        && header[off_BBitMask] & 0xff
                        && header[off_ABitMask] & 0xff000000) {
                        isRGBAUncompressed = true;
                        blockBytes = 64;
                        dds.format = RGBA_FORMAT;
                    }
                    else {
                        console.error('DDSParser.parse: Unsupported FourCC code ', DDSParser.int32ToFourCC(fourCC));
                        return null;
                    }
            }
            dds.mipmapCount = 1;
            if ((header[off_flags] & DDSD_MIPMAPCOUNT) && loadMipmaps !== false) {
                dds.mipmapCount = Math.max(1, header[off_mipmapCount]);
            }
            dds.isCubemap = header[off_caps2] & DDSCAPS2_CUBEMAP ? true : false;
            dds.width = header[off_width];
            dds.height = header[off_height];
            var dataOffset = header[off_size] + 4;
            // Extract mipmaps buffers
            var width = dds.width;
            var height = dds.height;
            var faces = dds.isCubemap ? 6 : 1;
            //是否软解DXT;
            var useSoftwareSolution = false;
            if (dds.format == DDSFormat.RGB_S3TC_DXT1_FORMAT && egret3d.ContextConfig.ColorFormat_DXT1_RGB == 0)
                useSoftwareSolution = true;
            else if (dds.format == DDSFormat.RGBA_S3TC_DXT3_FORMAT && egret3d.ContextConfig.ColorFormat_DXT3_RGBA == 0)
                useSoftwareSolution = true;
            else if (dds.format == DDSFormat.RGBA_S3TC_DXT5_FORMAT && egret3d.ContextConfig.ColorFormat_DXT5_RGBA == 0)
                useSoftwareSolution = true;
            for (var face = 0; face < faces; face++) {
                for (var i = 0; i < dds.mipmapCount; i++) {
                    var byteArray;
                    if (isRGBAUncompressed) {
                        byteArray = DDSParser.loadARGBMip(buffer, dataOffset, width, height);
                        var dataLength = byteArray.length;
                    }
                    else {
                        var dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes;
                        byteArray = new Uint8Array(buffer, dataOffset, dataLength);
                        if (useSoftwareSolution) {
                            byteArray = DDSParser.softSolutionDXT(width, height, dds.format, byteArray);
                        }
                    }
                    var mipmap = new egret3d.MipmapData(byteArray, width, height);
                    dds.mipmaps.push(mipmap);
                    dataOffset += dataLength;
                    width = Math.max(width * 0.5, 1);
                    height = Math.max(height * 0.5, 1);
                }
                width = dds.width;
                height = dds.height;
            }
            var texture = new egret3d.DDSTexture();
            if (useSoftwareSolution) {
                texture.internalFormat = egret3d.InternalFormat.PixelArray;
                texture.colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888;
            }
            else {
                texture.internalFormat = egret3d.InternalFormat.CompressData;
                if (FOURCC_DXT1 == fourCC)
                    texture.colorFormat = egret3d.ContextConfig.ColorFormat_DXT1_RGB;
                else if (FOURCC_DXT3 == fourCC)
                    texture.colorFormat = egret3d.ContextConfig.ColorFormat_DXT3_RGBA;
                else if (FOURCC_DXT5 == fourCC)
                    texture.colorFormat = egret3d.ContextConfig.ColorFormat_DXT5_RGBA;
            }
            texture.mimapData = dds.mipmaps;
            return texture;
        };
        DDSParser.loadARGBMip = function (buffer, dataOffset, width, height) {
            var dataLength = width * height * 4;
            var srcBuffer = new Uint8Array(buffer, dataOffset, dataLength);
            var byteArray = new Uint8Array(dataLength);
            var dst = 0;
            var src = 0;
            for (var y = 0; y < height; y++) {
                for (var x = 0; x < width; x++) {
                    var b = srcBuffer[src];
                    src++;
                    var g = srcBuffer[src];
                    src++;
                    var r = srcBuffer[src];
                    src++;
                    var a = srcBuffer[src];
                    src++;
                    byteArray[dst] = r;
                    dst++; //r
                    byteArray[dst] = g;
                    dst++; //g
                    byteArray[dst] = b;
                    dst++; //b
                    byteArray[dst] = a;
                    dst++; //a
                }
            }
            return byteArray;
        };
        DDSParser.fourCCToInt32 = function (value) {
            return value.charCodeAt(0) + (value.charCodeAt(1) << 8) + (value.charCodeAt(2) << 16) + (value.charCodeAt(3) << 24);
        };
        DDSParser.int32ToFourCC = function (value) {
            return String.fromCharCode(value & 0xff, (value >> 8) & 0xff, (value >> 16) & 0xff, (value >> 24) & 0xff69);
        };
        //软解DXT数据块到像素组;
        DDSParser.softSolutionDXT = function (width, height, format, byteArray) {
            var nCount;
            var colorArray = new Uint8Array(width * height * 4);
            //色彩表;
            var colorTab = [new egret3d.Color(), new egret3d.Color(), new egret3d.Color(), new egret3d.Color()];
            //索引表;
            var indexTab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            switch (format) {
                case DDSFormat.RGB_S3TC_DXT1_FORMAT:
                case DDSFormat.RGBA_S3TC_DXT1_FORMAT:
                    {
                        nCount = byteArray.length / 8;
                        for (var blockIndex = 0; blockIndex < nCount; blockIndex++) {
                            var _16bit_0 = byteArray[blockIndex * 8 + 0] | (byteArray[blockIndex * 8 + 1] << 8);
                            var _16bit_1 = byteArray[blockIndex * 8 + 2] | (byteArray[blockIndex * 8 + 3] << 8);
                            //极端颜色1;
                            colorTab[0].r = (_16bit_0 >> 11) & 0x1F;
                            colorTab[0].g = (_16bit_0 >> 5) & 0x3F;
                            colorTab[0].b = _16bit_0 & 0x1F;
                            colorTab[0].a = 0xFF;
                            //极端颜色2;
                            colorTab[1].r = (_16bit_1 >> 11) & 0x1F;
                            colorTab[1].g = (_16bit_1 >> 5) & 0x3F;
                            colorTab[1].b = _16bit_1 & 0x1F;
                            colorTab[1].a = 0xFF;
                            if (_16bit_0 > _16bit_1) {
                                //线性插值计算出剩下的两个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.33);
                                colorTab[3].lerp(colorTab[0], colorTab[1], 0.66);
                            }
                            else {
                                //线性插值计算出剩下的一个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.5);
                            }
                            //取出16个2位索引;
                            for (var i = 0; i < 4; i++) {
                                indexTab[(i * 4) + 0] = byteArray[blockIndex * 8 + 4 + i] & 0x03;
                                indexTab[(i * 4) + 1] = (byteArray[blockIndex * 8 + 4 + i] >> 2) & 0x03;
                                indexTab[(i * 4) + 2] = (byteArray[blockIndex * 8 + 4 + i] >> 4) & 0x03;
                                indexTab[(i * 4) + 3] = (byteArray[blockIndex * 8 + 4 + i] >> 6) & 0x03;
                            }
                            for (var ci = 0; ci < colorTab.length; ci++) {
                                colorTab[ci].r = colorTab[ci].r * 8;
                                colorTab[ci].g = colorTab[ci].g * 4;
                                colorTab[ci].b = colorTab[ci].b * 8;
                            }
                            //填充像素数组;
                            var globalX = (blockIndex % (width / 4)) * 4;
                            var globalY = Math.floor(blockIndex / (width / 4)) * 4;
                            if (globalY + 0 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[0]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[0]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[0]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[0]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[1]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[1]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[1]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[1]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[2]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[2]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[2]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[2]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[3]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[3]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[3]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[3]].a;
                                }
                            }
                            if (globalY + 1 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[4]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[4]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[4]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[4]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[5]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[5]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[5]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[5]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[6]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[6]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[6]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[6]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[7]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[7]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[7]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[7]].a;
                                }
                            }
                            if (globalY + 2 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[8]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[8]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[8]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[8]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[9]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[9]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[9]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[9]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[10]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[10]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[10]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[10]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[11]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[11]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[11]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[11]].a;
                                }
                            }
                            if (globalY + 3 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[12]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[12]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[12]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[12]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[13]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[13]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[13]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[13]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[14]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[14]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[14]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[14]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[15]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[15]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[15]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[15]].a;
                                }
                            }
                        }
                    }
                    break;
                case DDSFormat.RGBA_S3TC_DXT3_FORMAT:
                    {
                        nCount = byteArray.length / 16;
                        for (var blockIndex = 0; blockIndex < nCount; blockIndex++) {
                            var _16bit_0 = byteArray[blockIndex * 16 + 8] | (byteArray[blockIndex * 16 + 9] << 8);
                            var _16bit_1 = byteArray[blockIndex * 16 + 10] | (byteArray[blockIndex * 16 + 11] << 8);
                            //极端颜色1;
                            colorTab[0].r = (_16bit_0 >> 11) & 0x1F;
                            colorTab[0].g = (_16bit_0 >> 5) & 0x3F;
                            colorTab[0].b = _16bit_0 & 0x1F;
                            colorTab[0].a = 0xFF;
                            //极端颜色2;
                            colorTab[1].r = (_16bit_1 >> 11) & 0x1F;
                            colorTab[1].g = (_16bit_1 >> 5) & 0x3F;
                            colorTab[1].b = _16bit_1 & 0x1F;
                            colorTab[1].a = 0xFF;
                            if (_16bit_0 > _16bit_1) {
                                //线性插值计算出剩下的两个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.33);
                                colorTab[3].lerp(colorTab[0], colorTab[1], 0.66);
                            }
                            else {
                                //线性插值计算出剩下的一个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.5);
                                colorTab[3].a = 0;
                            }
                            //取出16个2位索引;
                            for (var i = 0; i < 4; i++) {
                                indexTab[(i * 4) + 0] = byteArray[blockIndex * 16 + 12 + i] & 0x03;
                                indexTab[(i * 4) + 1] = (byteArray[blockIndex * 16 + 12 + i] >> 2) & 0x03;
                                indexTab[(i * 4) + 2] = (byteArray[blockIndex * 16 + 12 + i] >> 4) & 0x03;
                                indexTab[(i * 4) + 3] = (byteArray[blockIndex * 16 + 12 + i] >> 6) & 0x03;
                            }
                            for (var ci = 0; ci < colorTab.length; ci++) {
                                colorTab[ci].r = colorTab[ci].r * 8;
                                colorTab[ci].g = colorTab[ci].g * 4;
                                colorTab[ci].b = colorTab[ci].b * 8;
                            }
                            //填充像素数组;
                            var globalX = (blockIndex % (width / 4)) * 4;
                            var globalY = Math.floor(blockIndex / (width / 4)) * 4;
                            if (globalY + 0 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[0]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[0]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[0]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 0] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[1]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[1]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[1]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 0] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[2]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[2]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[2]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 1] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[3]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[3]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[3]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 1] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 1 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[4]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[4]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[4]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 2] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[5]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[5]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[5]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 2] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[6]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[6]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[6]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 3] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[7]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[7]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[7]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 3] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 2 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[8]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[8]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[8]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 4] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[9]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[9]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[9]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 4] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[10]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[10]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[10]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 5] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[11]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[11]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[11]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 5] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 3 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[12]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[12]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[12]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 6] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[13]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[13]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[13]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 6] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[14]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[14]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[14]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 7] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[15]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[15]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[15]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 7] >> 4) & 0x0F) * 17;
                                }
                            }
                        }
                    }
                    break;
                case DDSFormat.RGBA_S3TC_DXT5_FORMAT:
                    break;
            }
            return colorArray;
        };
        return DDSParser;
    }());
    egret3d.DDSParser = DDSParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PVR
     * @classdesc
     * PVR  object
     */
    var PVR = (function () {
        function PVR() {
        }
        return PVR;
    }());
    egret3d.PVR = PVR;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    (function (PVRFormat) {
        PVRFormat[PVRFormat["RGB_PVRTC_4BPPV1_Format"] = 2100] = "RGB_PVRTC_4BPPV1_Format";
        PVRFormat[PVRFormat["RGB_PVRTC_2BPPV1_Format"] = 2101] = "RGB_PVRTC_2BPPV1_Format";
        PVRFormat[PVRFormat["RGBA_PVRTC_4BPPV1_Format"] = 2102] = "RGBA_PVRTC_4BPPV1_Format";
        PVRFormat[PVRFormat["RGBA_PVRTC_2BPPV1_Format"] = 2103] = "RGBA_PVRTC_2BPPV1_Format";
    })(egret3d.PVRFormat || (egret3d.PVRFormat = {}));
    var PVRFormat = egret3d.PVRFormat;
    ;
    /**
     * @private
     * @language zh_CN
     * @class egret3d.PVRParser
     * @classdesc
     * �� PVRParser �� ����.pvr �ļ�
     */
    var PVRParser = (function () {
        function PVRParser() {
        }
        /**
         * @language zh_CN
         * @param buffer
         */
        PVRParser.parse = function (buffer) {
            var pvr = new egret3d.PVR;
            var headerLengthInt = 13;
            var header = new Uint32Array(buffer, 0, headerLengthInt);
            var pvrDatas = {
                buffer: buffer,
                header: header
            };
            // PVR v3
            if (header[0] === 0x03525650) {
                pvr = PVRParser._parseV3(pvrDatas);
            }
            else if (header[11] === 0x21525650) {
                pvr = PVRParser._parseV2(pvrDatas);
            }
            else {
                console.log("PVRParser unknow pvr format. PVRParser::parse");
            }
            return pvr;
        };
        PVRParser._parseV2 = function (pvrDatas) {
            var header = pvrDatas.header;
            var headerLength = header[0], height = header[1], width = header[2], numMipmaps = header[3], flags = header[4], dataLength = header[5], bpp = header[6], bitmaskRed = header[7], bitmaskGreen = header[8], bitmaskBlue = header[9], bitmaskAlpha = header[10], pvrTag = header[11], numSurfs = header[12];
            var TYPE_MASK = 0xff;
            var PVRTC_2 = 24, PVRTC_4 = 25;
            var formatFlags = flags & TYPE_MASK;
            var bpp, format;
            var _hasAlpha = bitmaskAlpha > 0;
            if (formatFlags === PVRTC_4) {
                format = _hasAlpha ? PVRFormat.RGBA_PVRTC_4BPPV1_Format : PVRFormat.RGB_PVRTC_4BPPV1_Format;
                bpp = 4;
            }
            else if (formatFlags === PVRTC_2) {
                format = _hasAlpha ? PVRFormat.RGBA_PVRTC_2BPPV1_Format : PVRFormat.RGB_PVRTC_2BPPV1_Format;
                bpp = 2;
            }
            else
                throw new Error("pvrtc - unknown format " + formatFlags);
            pvrDatas.dataPtr = headerLength;
            pvrDatas.bpp = bpp;
            pvrDatas.format = format;
            pvrDatas.width = width;
            pvrDatas.height = height;
            pvrDatas.numSurfaces = numSurfs;
            pvrDatas.numMipmaps = numMipmaps + 1;
            // guess cubemap type seems tricky in v2
            // it juste a pvr containing 6 surface (no explicit cubemap type)
            pvrDatas.isCubemap = (numSurfs === 6);
            return PVRParser._extract(pvrDatas);
        };
        PVRParser._parseV3 = function (pvrDatas) {
            var header = pvrDatas.header;
            var bpp, format;
            var metaLen = header[12], pixelFormat = header[2], height = header[6], width = header[7], numSurfs = header[9], numFaces = header[10], numMipmaps = header[11];
            switch (pixelFormat) {
                case 0:
                    bpp = 2;
                    format = PVRFormat.RGB_PVRTC_2BPPV1_Format;
                    break;
                case 1:
                    bpp = 2;
                    format = PVRFormat.RGBA_PVRTC_2BPPV1_Format;
                    break;
                case 2:
                    bpp = 4;
                    format = PVRFormat.RGB_PVRTC_4BPPV1_Format;
                    break;
                case 3:
                    bpp = 4;
                    format = PVRFormat.RGBA_PVRTC_4BPPV1_Format;
                    break;
                default:
                    throw new Error("pvrtc - unsupported PVR format " + pixelFormat);
            }
            pvrDatas.dataPtr = 52 + metaLen;
            pvrDatas.bpp = bpp;
            pvrDatas.format = format;
            pvrDatas.width = width;
            pvrDatas.height = height;
            pvrDatas.numSurfaces = numFaces;
            pvrDatas.numMipmaps = numMipmaps;
            pvrDatas.isCubemap = (numFaces === 6);
            return PVRParser._extract(pvrDatas);
        };
        PVRParser._extract = function (pvrDatas) {
            var pvr = new egret3d.PVR();
            var buffer = pvrDatas.buffer;
            var dataOffset = pvrDatas.dataPtr, bpp = pvrDatas.bpp, numSurfs = pvrDatas.numSurfaces, dataSize = 0, blockSize = 0, blockWidth = 0, blockHeight = 0, widthBlocks = 0, heightBlocks = 0;
            if (bpp === 2) {
                blockWidth = 8;
                blockHeight = 4;
            }
            else {
                blockWidth = 4;
                blockHeight = 4;
            }
            blockSize = (blockWidth * blockHeight) * bpp / 8;
            pvr.mipmaps.length = pvrDatas.numMipmaps * numSurfs;
            var mipLevel = 0;
            while (mipLevel < pvrDatas.numMipmaps) {
                var sWidth = pvrDatas.width >> mipLevel;
                var sHeight = pvrDatas.height >> mipLevel;
                widthBlocks = sWidth / blockWidth;
                heightBlocks = sHeight / blockHeight;
                // Clamp to minimum number of blocks
                if (widthBlocks < 2) {
                    widthBlocks = 2;
                }
                if (heightBlocks < 2) {
                    heightBlocks = 2;
                }
                dataSize = widthBlocks * heightBlocks * blockSize;
                for (var surfIndex = 0; surfIndex < numSurfs; surfIndex++) {
                    var byteArray = new Uint8Array(buffer, dataOffset, dataSize);
                    var mipmap = {
                        data: byteArray,
                        width: sWidth,
                        height: sHeight
                    };
                    pvr.mipmaps[surfIndex * pvrDatas.numMipmaps + mipLevel] = mipmap;
                    dataOffset += dataSize;
                }
                mipLevel++;
            }
            return pvr;
        };
        return PVRParser;
    }());
    egret3d.PVRParser = PVRParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var TGA = (function () {
        function TGA(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
        }
        return TGA;
    }());
    egret3d.TGA = TGA;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.TGAParser
     * @classdesc
     * 用 TGAParser 类 解析.tga 文件
     */
    var TGAParser = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function TGAParser() {
        }
        /**
         * @language zh_CN
         * @param buffer 二进制流
         * @returns TGATexture
         */
        TGAParser.parse = function (buffer) {
            var TGA_TYPE_NO_DATA = 0, TGA_TYPE_INDEXED = 1, TGA_TYPE_RGB = 2, TGA_TYPE_GREY = 3, TGA_TYPE_RLE_INDEXED = 9, TGA_TYPE_RLE_RGB = 10, TGA_TYPE_RLE_GREY = 11, TGA_ORIGIN_MASK = 0x30, TGA_ORIGIN_SHIFT = 0x04, TGA_ORIGIN_BL = 0x00, TGA_ORIGIN_BR = 0x01, TGA_ORIGIN_UL = 0x02, TGA_ORIGIN_UR = 0x03;
            if (buffer.byteLength < 19) {
                console.error('TGAParser.parse: Not enough data to contain header.');
            }
            var content = new Uint8Array(buffer), offset = 0, header = {
                id_length: content[offset++],
                colormap_type: content[offset++],
                image_type: content[offset++],
                colormap_index: content[offset++] | content[offset++] << 8,
                colormap_length: content[offset++] | content[offset++] << 8,
                colormap_size: content[offset++],
                origin: [
                    content[offset++] | content[offset++] << 8,
                    content[offset++] | content[offset++] << 8
                ],
                width: content[offset++] | content[offset++] << 8,
                height: content[offset++] | content[offset++] << 8,
                pixel_size: content[offset++],
                flags: content[offset++]
            };
            function tgaCheckHeader(header) {
                switch (header.image_type) {
                    // Check indexed type
                    case TGA_TYPE_INDEXED:
                    case TGA_TYPE_RLE_INDEXED:
                        if (header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1) {
                            console.error('TGAParser.parse.tgaCheckHeader: Invalid type colormap data for indexed type');
                        }
                        break;
                    // Check colormap type
                    case TGA_TYPE_RGB:
                    case TGA_TYPE_GREY:
                    case TGA_TYPE_RLE_RGB:
                    case TGA_TYPE_RLE_GREY:
                        if (header.colormap_type) {
                            console.error('TGAParser.parse.tgaCheckHeader: Invalid type colormap data for colormap type');
                        }
                        break;
                    // What the need of a file without data ?
                    case TGA_TYPE_NO_DATA:
                        console.error('TGAParser.parse.tgaCheckHeader: No data');
                        break;
                    // Invalid type ?
                    default:
                        console.error('TGAParser.parse.tgaCheckHeader: Invalid type " ' + header.image_type + '"');
                }
                // Check image width and height
                if (header.width <= 0 || header.height <= 0) {
                    console.error('TGAParser.parse.tgaCheckHeader: Invalid image size');
                }
                // Check image pixel size
                if (header.pixel_size !== 8 &&
                    header.pixel_size !== 16 &&
                    header.pixel_size !== 24 &&
                    header.pixel_size !== 32) {
                    console.error('TGAParser.parse.tgaCheckHeader: Invalid pixel size "' + header.pixel_size + '"');
                }
            }
            // Check tga if it is valid format
            tgaCheckHeader(header);
            if (header.id_length + offset > buffer.byteLength) {
                console.error('TGAParser.parse: No data');
            }
            // Skip the needn't data
            offset += header.id_length;
            // Get targa information about RLE compression and palette
            var use_rle = false, use_pal = false, use_grey = false;
            switch (header.image_type) {
                case TGA_TYPE_RLE_INDEXED:
                    use_rle = true;
                    use_pal = true;
                    break;
                case TGA_TYPE_INDEXED:
                    use_pal = true;
                    break;
                case TGA_TYPE_RLE_RGB:
                    use_rle = true;
                    break;
                case TGA_TYPE_RGB:
                    break;
                case TGA_TYPE_RLE_GREY:
                    use_rle = true;
                    use_grey = true;
                    break;
                case TGA_TYPE_GREY:
                    use_grey = true;
                    break;
            }
            // Parse tga image buffer
            function tgaParse(use_rle, use_pal, header, offset, data) {
                var pixel_data, pixel_size, pixel_total, palettes;
                pixel_size = header.pixel_size >> 3;
                pixel_total = header.width * header.height * pixel_size;
                // Read palettes
                if (use_pal) {
                    palettes = data.subarray(offset, offset += header.colormap_length * (header.colormap_size >> 3));
                }
                // Read RLE
                if (use_rle) {
                    pixel_data = new Uint8Array(pixel_total);
                    var c, count, i;
                    var shift = 0;
                    var pixels = new Uint8Array(pixel_size);
                    while (shift < pixel_total) {
                        c = data[offset++];
                        count = (c & 0x7f) + 1;
                        // RLE pixels.
                        if (c & 0x80) {
                            // Bind pixel tmp array
                            for (i = 0; i < pixel_size; ++i) {
                                pixels[i] = data[offset++];
                            }
                            // Copy pixel array
                            for (i = 0; i < count; ++i) {
                                pixel_data.set(pixels, shift + i * pixel_size);
                            }
                            shift += pixel_size * count;
                        }
                        else {
                            // Raw pixels.
                            count *= pixel_size;
                            for (i = 0; i < count; ++i) {
                                pixel_data[shift + i] = data[offset++];
                            }
                            shift += count;
                        }
                    }
                }
                else {
                    // RAW Pixels
                    pixel_data = data.subarray(offset, offset += (use_pal ? header.width * header.height : pixel_total));
                }
                return {
                    pixel_data: pixel_data,
                    palettes: palettes
                };
            }
            function tgaGetImageData8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes) {
                var colormap = palettes;
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = colormap[(color * 3) + 0];
                        imageData[(x + width * y) * 4 + 1] = colormap[(color * 3) + 1];
                        imageData[(x + width * y) * 4 + 0] = colormap[(color * 3) + 2];
                    }
                }
                return imageData;
            }
            function tgaGetImageData16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        color = image[i + 0] + (image[i + 1] << 8); // Inversed ?
                        imageData[(x + width * y) * 4 + 0] = (color & 0x7C00) >> 7;
                        imageData[(x + width * y) * 4 + 1] = (color & 0x03E0) >> 2;
                        imageData[(x + width * y) * 4 + 2] = (color & 0x001F) >> 3;
                        imageData[(x + width * y) * 4 + 3] = (color & 0x8000) ? 0 : 255;
                    }
                }
                return imageData;
            }
            function tgaGetImageData24bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 3) {
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                    }
                }
                return imageData;
            }
            function tgaGetImageData32bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 4) {
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                        imageData[(x + width * y) * 4 + 3] = image[i + 3];
                    }
                }
                return imageData;
            }
            function tgaGetImageDataGrey8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 0] = color;
                        imageData[(x + width * y) * 4 + 1] = color;
                        imageData[(x + width * y) * 4 + 2] = color;
                        imageData[(x + width * y) * 4 + 3] = 255;
                    }
                }
                return imageData;
            }
            function tgaGetImageDataGrey16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        imageData[(x + width * y) * 4 + 0] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 0];
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 3] = image[i + 1];
                    }
                }
                return imageData;
            }
            function getTgaRGBA(width, height, image, palette) {
                var x_start, y_start, x_step, y_step, x_end, y_end, data = new Uint8Array(width * height * 4);
                switch ((header.flags & TGA_ORIGIN_MASK) >> TGA_ORIGIN_SHIFT) {
                    default:
                    case TGA_ORIGIN_UL:
                        x_start = 0;
                        x_step = 1;
                        x_end = width;
                        y_start = 0;
                        y_step = 1;
                        y_end = height;
                        break;
                    case TGA_ORIGIN_BL:
                        x_start = 0;
                        x_step = 1;
                        x_end = width;
                        y_start = height - 1;
                        y_step = -1;
                        y_end = -1;
                        break;
                    case TGA_ORIGIN_UR:
                        x_start = width - 1;
                        x_step = -1;
                        x_end = -1;
                        y_start = 0;
                        y_step = 1;
                        y_end = height;
                        break;
                    case TGA_ORIGIN_BR:
                        x_start = width - 1;
                        x_step = -1;
                        x_end = -1;
                        y_start = height - 1;
                        y_step = -1;
                        y_end = -1;
                        break;
                }
                if (use_grey) {
                    switch (header.pixel_size) {
                        case 8:
                            tgaGetImageDataGrey8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 16:
                            tgaGetImageDataGrey16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        default:
                            console.error('TGAParser.parse.getTgaRGBA: not support this format');
                            break;
                    }
                }
                else {
                    switch (header.pixel_size) {
                        case 8:
                            tgaGetImageData8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette);
                            break;
                        case 16:
                            tgaGetImageData16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 24:
                            tgaGetImageData24bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 32:
                            tgaGetImageData32bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        default:
                            console.error('TGAParser.parse.getTgaRGBA: not support this format');
                            break;
                    }
                }
                // Load image data according to specific method
                // var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
                // func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
                return data;
            }
            var result = tgaParse(use_rle, use_pal, header, offset, content);
            var rgbaData = getTgaRGBA(header.width, header.height, result.pixel_data, result.palettes);
            var texture = new egret3d.TGATexture();
            texture.internalFormat = egret3d.InternalFormat.PixelArray;
            texture.colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888;
            texture.mimapData.push(new egret3d.MipmapData(rgbaData, header.width, header.height));
            return texture;
        };
        return TGAParser;
    }());
    egret3d.TGAParser = TGAParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.EAMParser
     * @classdesc
     * 用 EAMParser 类 解析.eam 文件
     */
    var EAMParser = (function () {
        function EAMParser() {
        }
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns SkeletonAnimationClip
         */
        EAMParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var fileFormatBytes = new egret3d.ByteArray();
            bytes.readBytes(fileFormatBytes, 0, 3);
            var version = bytes.readUnsignedInt();
            return egret3d.EAMVersion.versionDictionary[version](bytes);
        };
        return EAMParser;
    }());
    egret3d.EAMParser = EAMParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.EAMVersion
     * @classdesc
     *
     */
    var EAMVersion = (function () {
        function EAMVersion() {
        }
        EAMVersion.parserVersion_1 = function (bytes) {
            var boneCount = bytes.readUnsignedByte();
            var sampling = bytes.readUnsignedByte();
            if (boneCount <= 0)
                return new egret3d.SkeletonAnimationClip();
            var boneNameArray = new Array();
            var parentBoneNameArray = new Array();
            for (var i = 0; i < boneCount; i++) {
                boneNameArray.push(bytes.readUTF());
                parentBoneNameArray.push(bytes.readUTF());
            }
            var frameCount = bytes.readInt();
            var poseArray = new Array();
            var nCount = bytes.readInt();
            for (var i = 0; i < nCount; i++) {
                var skeletonPose = new egret3d.Skeleton();
                skeletonPose.frameTime = bytes.readInt();
                for (var j = 0; j < boneCount; j++) {
                    var jointPose = new egret3d.Joint(boneNameArray[j]);
                    jointPose.parent = parentBoneNameArray[j];
                    jointPose.setLocalTransform(new egret3d.Quaternion().fromEulerAngles(bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES, bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES, bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES), new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()), new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()));
                    skeletonPose.joints.push(jointPose);
                }
                if (i > 0) {
                    var pose = new egret3d.Skeleton();
                    pose.frameTime = skeletonPose.frameTime - 160 / 2;
                    var currentSkeletonPose = poseArray[poseArray.length - 1];
                    for (var j = 0; j < boneCount; j++) {
                        var jointPose = new egret3d.Joint(currentSkeletonPose.joints[j].name);
                        jointPose.parent = currentSkeletonPose.joints[j].parent;
                        jointPose.orientation = new egret3d.Quaternion();
                        jointPose.orientation.lerp(currentSkeletonPose.joints[j].orientation, skeletonPose.joints[j].orientation, 0.5);
                        jointPose.scale = new egret3d.Vector3D();
                        jointPose.scale.lerp(currentSkeletonPose.joints[j].scale, skeletonPose.joints[j].scale, 0.5);
                        jointPose.translation = new egret3d.Vector3D();
                        jointPose.translation.lerp(currentSkeletonPose.joints[j].translation, skeletonPose.joints[j].translation, 0.5);
                        jointPose.setLocalTransform(jointPose.orientation, jointPose.scale, jointPose.translation);
                        pose.joints.push(jointPose);
                    }
                    poseArray.push(pose);
                }
                poseArray.push(skeletonPose);
            }
            var skeletonAnimationClip = new egret3d.SkeletonAnimationClip();
            skeletonAnimationClip.sampling = sampling;
            skeletonAnimationClip.frameCount = frameCount * 2;
            skeletonAnimationClip.poseArray = poseArray;
            return skeletonAnimationClip;
        };
        EAMVersion.versionDictionary = {
            1: function (bytes) { return EAMVersion.parserVersion_1(bytes); },
        };
        return EAMVersion;
    }());
    egret3d.EAMVersion = EAMVersion;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ECAParser
     * @classdesc
     * 用 EAMParser 类 解析.eca 文件
     */
    var ECAParser = (function () {
        function ECAParser() {
        }
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns CameraAnimationController
         */
        ECAParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var fileFormatBytes = new egret3d.ByteArray();
            bytes.readBytes(fileFormatBytes, 0, 3);
            var version = bytes.readUnsignedInt();
            return egret3d.ECAVersion.versionDictionary[version](bytes);
        };
        return ECAParser;
    }());
    egret3d.ECAParser = ECAParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ECAVersion
     * @classdesc
     */
    var ECAVersion = (function () {
        function ECAVersion() {
        }
        ECAVersion.parserVersion_1 = function (bytes) {
            var cameraAnimationController = new egret3d.CameraAnimationController();
            var nFrame = bytes.readUnsignedInt();
            var cameraAnimationFrame = null;
            var scaling = new egret3d.Vector3D(1, 1, 1, 1);
            while (nFrame--) {
                cameraAnimationFrame = new egret3d.CameraAnimationFrame();
                cameraAnimationFrame.time = bytes.readInt();
                cameraAnimationFrame.fov = bytes.readFloat();
                cameraAnimationFrame.rotation = new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat());
                cameraAnimationFrame.translation = new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat());
                cameraAnimationFrame.matrix = new egret3d.Matrix4_4();
                cameraAnimationFrame.matrix.recompose([cameraAnimationFrame.translation, cameraAnimationFrame.rotation, scaling]);
                cameraAnimationController.cameraAnimationFrames.push(cameraAnimationFrame);
            }
            return cameraAnimationController;
        };
        ECAVersion.versionDictionary = {
            1: function (bytes) { return ECAVersion.parserVersion_1(bytes); },
        };
        return ECAVersion;
    }());
    egret3d.ECAVersion = ECAVersion;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ESMParser
     * @classdesc
     * 用 ESMParser 类 解析.esm 文件
     */
    var ESMParser = (function () {
        function ESMParser() {
        }
        /**
          * @language zh_CN
          * 从二进制流中解析出模型Geometry信息
          * @param datas 加载的二进制流
          * @returns Geometry
          */
        ESMParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var fileFormatBytes = new egret3d.ByteArray();
            bytes.readBytes(fileFormatBytes, 0, 3);
            var version = bytes.readUnsignedInt();
            var geomtryData = new egret3d.GeometryData();
            egret3d.ESMVersion.versionDictionary[version](bytes, geomtryData);
            var geomtry;
            var vertexFormat = 0;
            if (geomtryData.source_skinData.length > 0) {
                vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_TANGENT | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0 | egret3d.VertexFormat.VF_SKIN;
                geomtry = egret3d.GeometryData.buildGeomtry(geomtryData, vertexFormat);
            }
            else {
                vertexFormat = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_NORMAL | egret3d.VertexFormat.VF_TANGENT | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0;
                geomtry = egret3d.GeometryData.buildGeomtry(geomtryData, vertexFormat);
            }
            return geomtry;
        };
        return ESMParser;
    }());
    egret3d.ESMParser = ESMParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.ESMVersion
     * @classdesc
     *
     */
    var ESMVersion = (function () {
        function ESMVersion() {
        }
        ESMVersion.parserVersion_1 = function (bytes, geomtry) {
            var description = bytes.readInt();
            geomtry.matCount = bytes.readInt();
            for (var i = 0; i < geomtry.matCount; ++i) {
                geomtry.material[i] = {};
                geomtry.material[i].matID = bytes.readInt();
                geomtry.material[i].start = bytes.readInt();
                geomtry.material[i].count = bytes.readInt();
                geomtry.material[i].textureDiffuse = bytes.readUTF();
                geomtry.material[i].textureNormal = bytes.readUTF();
                geomtry.material[i].textureSpecular = bytes.readUTF();
            }
            if (description & egret3d.VertexFormat.VF_POSITION) {
                var vertexCount = bytes.readInt();
                for (var i = 0; i < vertexCount; i++) {
                    geomtry.source_vertexData.push(bytes.readFloat());
                    geomtry.source_vertexData.push(bytes.readFloat());
                    geomtry.source_vertexData.push(bytes.readFloat());
                }
            }
            if (description & egret3d.VertexFormat.VF_NORMAL) {
                var vertexNormalCount = bytes.readInt();
                for (var i = 0; i < vertexNormalCount; i++) {
                    geomtry.source_normalData.push(bytes.readFloat());
                    geomtry.source_normalData.push(bytes.readFloat());
                    geomtry.source_normalData.push(bytes.readFloat());
                }
            }
            if (description & egret3d.VertexFormat.VF_COLOR) {
                var vertexColorCount = bytes.readInt();
                for (var i = 0; i < vertexColorCount; i++) {
                    geomtry.source_vertexColorData.push(bytes.readFloat());
                    geomtry.source_vertexColorData.push(bytes.readFloat());
                    geomtry.source_vertexColorData.push(bytes.readFloat());
                    geomtry.source_vertexColorData.push(bytes.readFloat());
                }
            }
            if (description & egret3d.VertexFormat.VF_UV0) {
                var uvCount = bytes.readInt();
                for (var i = 0; i < uvCount; i++) {
                    geomtry.source_uvData.push(bytes.readFloat());
                    geomtry.source_uvData.push(bytes.readFloat());
                }
            }
            if (description & egret3d.VertexFormat.VF_UV1) {
                var uvCount = bytes.readInt();
                for (var i = 0; i < uvCount; i++) {
                    geomtry.source_uv2Data.push(bytes.readFloat());
                    geomtry.source_uv2Data.push(bytes.readFloat());
                }
            }
            geomtry.faces = bytes.readInt();
            for (var i = 0; i < geomtry.faces; i++) {
                geomtry.vertexIndices.push(bytes.readUnsignedInt());
                geomtry.vertexIndices.push(bytes.readUnsignedInt());
                geomtry.vertexIndices.push(bytes.readUnsignedInt());
                if (description & egret3d.VertexFormat.VF_NORMAL) {
                    geomtry.normalIndices.push(bytes.readUnsignedInt());
                    geomtry.normalIndices.push(bytes.readUnsignedInt());
                    geomtry.normalIndices.push(bytes.readUnsignedInt());
                }
                if (description & egret3d.VertexFormat.VF_COLOR) {
                    geomtry.colorIndices.push(bytes.readUnsignedInt());
                    geomtry.colorIndices.push(bytes.readUnsignedInt());
                    geomtry.colorIndices.push(bytes.readUnsignedInt());
                }
                if (description & egret3d.VertexFormat.VF_UV0) {
                    geomtry.uvIndices.push(bytes.readUnsignedInt());
                    geomtry.uvIndices.push(bytes.readUnsignedInt());
                    geomtry.uvIndices.push(bytes.readUnsignedInt());
                }
                if (description & egret3d.VertexFormat.VF_UV1) {
                    geomtry.uv2Indices.push(bytes.readUnsignedInt());
                    geomtry.uv2Indices.push(bytes.readUnsignedInt());
                    geomtry.uv2Indices.push(bytes.readUnsignedInt());
                }
            }
            var nBoneCount = bytes.readUnsignedByte();
            if (nBoneCount > 0) {
                geomtry.skeleton = new egret3d.Skeleton();
            }
            var orientation = new egret3d.Quaternion();
            var rotation = new egret3d.Vector3D();
            var scaling = new egret3d.Vector3D();
            var translation = new egret3d.Vector3D();
            for (var i = 0; i < nBoneCount; ++i) {
                var joint = new egret3d.Joint(null);
                bytes.readInt();
                joint.parentIndex = bytes.readInt();
                joint.name = bytes.readUTF();
                rotation.x = bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES;
                rotation.y = bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES;
                rotation.z = bytes.readFloat() * egret3d.MathUtil.RADIANS_TO_DEGREES;
                scaling.x = bytes.readFloat();
                scaling.y = bytes.readFloat();
                scaling.z = bytes.readFloat();
                translation.x = bytes.readFloat();
                translation.y = bytes.readFloat();
                translation.z = bytes.readFloat();
                joint.setInverseBindPose(translation, rotation, scaling);
                geomtry.skeleton.joints.push(joint);
            }
            var nVertsCount = bytes.readInt();
            for (var i = 0; i < nVertsCount; i++) {
                var nCount = bytes.readUnsignedByte();
                for (var j = 0; j < nCount; j++) {
                    geomtry.source_skinData.push(bytes.readUnsignedByte());
                    geomtry.source_skinData.push(bytes.readFloat());
                }
                for (var j = nCount; j < 4; j++) {
                    geomtry.source_skinData.push(0);
                    geomtry.source_skinData.push(0);
                }
            }
        };
        ESMVersion.versionDictionary = {
            1: function (bytes, geomtry) { return ESMVersion.parserVersion_1(bytes, geomtry); },
        };
        return ESMVersion;
    }());
    egret3d.ESMVersion = ESMVersion;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.ParserUtils
    * @classdesc
    * 用 ParserUtils 类 解析所有egret自定义 文件
    * @see egret3d.EventDispatcher
    * @version Egret 3.0
    * @platform Web,Native
    */
    var ParserUtils = (function (_super) {
        __extends(ParserUtils, _super);
        function ParserUtils() {
            _super.apply(this, arguments);
            this._event = new egret3d.ParserEvent3D();
        }
        /**
        * @language zh_CN
        * 传入数据流对象，解析出相应的数据对象.
        * @param buffer 需要解析的数据流
        * @returns 是否解析成功
        */
        ParserUtils.prototype.parser = function (buffer) {
            var _this = this;
            var bytes = new egret3d.ByteArray(buffer);
            var fileFormatBytes = new egret3d.ByteArray();
            bytes.readBytes(fileFormatBytes, 0, 3);
            bytes.position = 0;
            var fileFormat = 0;
            fileFormat |= fileFormatBytes.readUnsignedByte() << 16;
            fileFormat |= fileFormatBytes.readUnsignedByte() << 8;
            fileFormat |= fileFormatBytes.readUnsignedByte();
            switch (fileFormat) {
                case 0x00444453:
                    this.datas = egret3d.DDSParser.parse(buffer);
                    this.dataFormat = ".dds";
                    this.doLoadComplete();
                    break;
                case 0x00000002:
                case 0x00000010:
                    this.datas = egret3d.TGAParser.parse(buffer);
                    this.dataFormat = ".tga";
                    this.doLoadComplete();
                    break;
                case 0x00FFD8FF:
                    var blob = new Blob([buffer]);
                    this.dataFormat = ".jpg";
                    var img = document.createElement("img");
                    if (window['createObjectURL'] != undefined) {
                        img.src = window['createObjectURL'](blob);
                    }
                    else if (window['URL'] != undefined) {
                        img.src = window['URL'].createObjectURL(blob);
                    }
                    else if (window['webkitURL'] != undefined) {
                        img.src = window['webkitURL'].createObjectURL(blob);
                    }
                    img.onload = function () { return _this.onLoad(img); };
                    break;
                case 0x0089504E:
                    var blob = new Blob([buffer]);
                    this.dataFormat = ".png";
                    var img = document.createElement("img");
                    if (window['createObjectURL'] != undefined) {
                        img.src = window['createObjectURL'](blob);
                    }
                    else if (window['URL'] != undefined) {
                        img.src = window['URL'].createObjectURL(blob);
                    }
                    else if (window['webkitURL'] != undefined) {
                        img.src = window['webkitURL'].createObjectURL(blob);
                    }
                    img.onload = function () { return _this.onLoad(img); };
                    break;
                case 0x0065736D:
                    this.dataFormat = ".esm";
                    this.datas = egret3d.ESMParser.parse(buffer);
                    this.doLoadComplete();
                    break;
                case 0x0065616D:
                    this.dataFormat = ".eam";
                    this.datas = egret3d.EAMParser.parse(buffer);
                    this.doLoadComplete();
                    break;
                case 0x00656361:
                    this.dataFormat = ".eca";
                    this.datas = egret3d.ECAParser.parse(buffer);
                    this.doLoadComplete();
                    break;
                default:
                    return false;
            }
            return true;
        };
        ParserUtils.prototype.onLoad = function (img) {
            this.datas = new egret3d.ImageTexture(img);
            this.doLoadComplete();
        };
        ParserUtils.prototype.doLoadComplete = function () {
            this._event.eventType = egret3d.ParserEvent3D.PARSER_COMPLETE;
            this._event.data = this;
            this._event.parser = this;
            this.dispatchEvent(this._event);
        };
        return ParserUtils;
    }(egret3d.EventDispatcher));
    egret3d.ParserUtils = ParserUtils;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.URLLoader
     * @classdesc
     * URLLoader类
     * 用于加载和解析各类3d资源.
     * DDS, TGA, jpg, png等格式的贴图文件.
     * ESM, EAM, ECA等egret3d独有的模型文件,动作文件,相机动画文件
     * @includeExample loader/URLLoader.ts
     * @see egret3d.EventDispatcher
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    var URLLoader = (function (_super) {
        __extends(URLLoader, _super);
        /**
         * @language zh_CN
         * 构造函数
         * @param url 加载数据的地址.如果参数不为空的话.将直接开始加载
         * @param dataformat 以什么方式进行加载.如果为空的话.将通过目标文件的后缀名判断,
         * 如果为空且文件后缀不为内置支持的集中文件类型的话.将以文本格式进行加载解析
         * @version Egret 3.0
         * @platform Web,Native
         */
        function URLLoader(url, dataformat) {
            if (url === void 0) { url = null; }
            if (dataformat === void 0) { dataformat = null; }
            _super.call(this);
            this._event = new egret3d.LoaderEvent3D();
            /**
             * @language zh_CN
             * 控制以哪种方式接收加载的数据.
             * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
             * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
             * @version Egret 3.0
             * @platform Web,Native
             */
            this._dataformat = null;
            /**
            * @language zh_CN
            * 加载的地址
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.url = "";
            /**
            * @language zh_CN
            * 加载的数据.
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.data = null;
            if (url) {
                if (dataformat) {
                    this.dataformat = dataformat;
                }
                this.load(url);
            }
        }
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载目标地址的数据
         * @param url 数据地址
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.prototype.load = function (url) {
            var _this = this;
            this.data = null;
            this.url = url;
            if (null == this._dataformat) {
                this._dataformat = URLLoader.DATAFORMAT_TEXT;
                var endPos = this.url.lastIndexOf(".");
                var startPos = this.url.lastIndexOf("/");
                if (this.url.length >= 4)
                    switch (this.url.substr(this.url.length - 4, 4).toLowerCase()) {
                        case ".dds":
                            this._dataformat = URLLoader.DATAFORMAT_DDS;
                            break;
                        case ".tga":
                            this._dataformat = URLLoader.DATAFORMAT_TGA;
                            break;
                        case ".bmp":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case ".png":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case ".jpg":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case "glsl":
                            this._dataformat = URLLoader.DATAFORMAT_TEXT;
                            break;
                        case ".pvr":
                            this._dataformat = URLLoader.DATAFORMAT_PVR;
                            break;
                        case ".esm":
                            this._dataformat = URLLoader.DATAFORMAT_ESM;
                            break;
                        case ".eam":
                            this._dataformat = URLLoader.DATAFORMAT_EAM;
                            break;
                        case ".eca":
                            this._dataformat = URLLoader.DATAFORMAT_ECA;
                            break;
                    }
            }
            if (this._xhr == null) {
                this._xhr = this.getXHR();
            }
            if (this._xhr == null) {
                alert("Your browser does not support XMLHTTP.");
                return;
            }
            if (this._xhr.readyState > 0) {
                this._xhr.abort();
            }
            this._xhr.open("GET", this.url, true);
            this._xhr.addEventListener("progress", function (e) { return _this.onProgress(e); }, false);
            this._xhr.addEventListener("readystatechange", function (e) { return _this.onReadyStateChange(e); }, false);
            this._xhr.addEventListener("error", function (e) { return _this.onError(e); }, false);
            if (this.dataformat == URLLoader.DATAFORMAT_BITMAP) {
                this._xhr.responseType = "blob";
            }
            else if (this.dataformat != URLLoader.DATAFORMAT_TEXT) {
                this._xhr.responseType = "arraybuffer";
            }
            this._xhr.send();
        };
        Object.defineProperty(URLLoader.prototype, "dataformat", {
            /**
             * @language zh_CN
             * 控制以哪种方式接收加载的数据.
             * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
             * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
             * @returns string
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this._dataformat;
            },
            /**
             * @language zh_CN
             * 控制以哪种方式接收加载的数据.
             * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
             * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
             * @param value
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                this._dataformat = value;
            },
            enumerable: true,
            configurable: true
        });
        URLLoader.prototype.onReadyStateChange = function (event) {
            if (this._xhr.readyState == 4) {
                if (this._xhr.status >= 400 /*|| this._xhr.status == 0*/) {
                    console.log(this.url, "load fail");
                }
                else {
                    this.loadComplete();
                }
            }
        };
        URLLoader.prototype.loadComplete = function () {
            var _this = this;
            switch (this.dataformat) {
                case URLLoader.DATAFORMAT_BINARY:
                    this.data = new egret3d.ByteArray(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_SOUND:
                    this.data = this._xhr.responseBody;
                    break;
                case URLLoader.DATAFORMAT_TEXT:
                    this.data = this._xhr.responseText;
                    break;
                case URLLoader.DATAFORMAT_BITMAP:
                    var img = document.createElement("img");
                    if (window['createObjectURL'] != undefined) {
                        img.src = window['createObjectURL'](this._xhr.response);
                    }
                    else if (window['URL'] != undefined) {
                        img.src = window['URL'].createObjectURL(this._xhr.response);
                    }
                    else if (window['webkitURL'] != undefined) {
                        img.src = window['webkitURL'].createObjectURL(this._xhr.response);
                    }
                    img.onload = function () { return _this.onLoad(img); };
                    return;
                case URLLoader.DATAFORMAT_DDS:
                    this.data = egret3d.DDSParser.parse(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_TGA:
                    this.data = egret3d.TGAParser.parse(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_ESM:
                    var geomtry = egret3d.ESMParser.parse(this._xhr.response);
                    this.data = geomtry;
                    break;
                case URLLoader.DATAFORMAT_EAM:
                    var skeletonAnimationClip = egret3d.EAMParser.parse(this._xhr.response);
                    this.data = skeletonAnimationClip;
                    break;
                case URLLoader.DATAFORMAT_ECA:
                    var cameraAnimationController = egret3d.ECAParser.parse(this._xhr.response);
                    this.data = cameraAnimationController;
                    break;
                case URLLoader.DATAFORMAT_PVR:
                    //var pvr:PVR = PVRParser.parse(this._xhr.response);
                    //this._data = pvr;
                    break;
                default:
                    this.data = this._xhr.responseText;
            }
            this.doLoadComplete();
        };
        URLLoader.prototype.onProgress = function (event) {
            this._event.eventType = egret3d.LoaderEvent3D.LOADER_PROGRESS;
            this._event.target = this;
            this._event.loader = this;
            this.dispatchEvent(this._event);
        };
        URLLoader.prototype.onError = function (event) {
            this._event.eventType = egret3d.LoaderEvent3D.LOADER_ERROR;
            this._event.target = this;
            this._event.loader = this;
            this.dispatchEvent(this._event);
            console.log("load error", event);
        };
        URLLoader.prototype.getXHR = function () {
            var xhr = null;
            if (window["XMLHttpRequest"]) {
                xhr = new window["XMLHttpRequest"]();
            }
            else {
                xhr = new ActiveXObject("MSXML2.XMLHTTP");
            }
            return xhr;
        };
        URLLoader.prototype.onLoad = function (img) {
            this.data = new egret3d.ImageTexture(img);
            this.doLoadComplete();
        };
        URLLoader.prototype.doLoadComplete = function () {
            this._event.eventType = egret3d.LoaderEvent3D.LOADER_COMPLETE;
            this._event.target = this;
            this._event.loader = this;
            this.dispatchEvent(this._event);
        };
        /**
         * @language zh_CN
         * 以二进制方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_BINARY = "binary";
        /**
         * @language zh_CN
         * 以文本的方式接收加载的数据
         * 默认方式
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_TEXT = "text";
        /**
         * @language zh_CN
         * 以音频的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_SOUND = "sound";
        /**
         * @language zh_CN
         * 以图像的方式接收加载的数据
         * 支持jpg.png.等格式
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_BITMAP = "bitmap";
        /**
         * @language zh_CN
         * 以DDS的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_DDS = "dds";
        /**
         * @language zh_CN
         * 以TGA的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_TGA = "tga";
        /**
         * @language zh_CN
         * 以ESM格式接收加载的数据
         * Egret3D独有的格式 模型+蒙皮
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_ESM = "esm";
        /**
         * @language zh_CN
         * 以EAM格式接收加载的数据
         * Egret3D独有的格式 动作文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_EAM = "eam";
        /**
         * @language zh_CN
         * 以ECA格式接收加载的数据
         * Egret3D独有的格式 相机动画文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_ECA = "eca";
        /**
         * @private
         * @language zh_CN
         * 以pvr格式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        URLLoader.DATAFORMAT_PVR = "pvr";
        return URLLoader;
    }(egret3d.EventDispatcher));
    egret3d.URLLoader = URLLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var MethodBase = (function () {
        function MethodBase() {
            this.methodType = -1;
            this.vsShaderName = "";
            this.fsShaderName = "";
        }
        MethodBase.prototype.upload = function (time, delay, usage, context3DProxy, modeltransform, camera3D) {
        };
        MethodBase.prototype.active = function (time, delay, context3DProxy, modeltransform, camera3D) {
        };
        return MethodBase;
    }());
    egret3d.MethodBase = MethodBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.MethodUsageData
    * @classdesc
    * 方法中需要用到的数据。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var PassUsage = (function () {
        function PassUsage() {
            /**
             * @language zh_CN
             */
            this.sampler2DList = new Array();
            /**
             * @language zh_CN
             */
            this.sampler3DList = new Array();
            //----------------------------------------------
            //public vertexShaderRegister: ver;
            this.vertexShader = new egret3d.ShaderBase();
            this.fragmentShader = new egret3d.ShaderBase();
            this.maxDirectLight = 0;
            this.maxSpotLight = 0;
            this.maxPointLight = 0;
            this.maxBone = 0;
        }
        /**
         * @language zh_CN
         */
        PassUsage.prototype.dispose = function () {
        };
        return PassUsage;
    }());
    egret3d.PassUsage = PassUsage;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @class egret3d.MaterialData
     */
    var MaterialData = (function () {
        function MaterialData() {
            /**
            * @private
            * @language zh_CN
            * 材质类型数组。
            * @每个材质球可能会有很多种贴图方法，而这个是做为默认支持的材质方法的添加通道。要使用的方法
            * @default MaterialType.DIFFUSE
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.textureMethodTypes = [];
            /**
            * @language zh_CN
            * 深度 pass usage data。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public depthPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * 法线 pass usage 数据。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public normalPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * position pass usage 数据。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public positionPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * post pass usage 数据。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public postPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * 灯光 pass usage 数据。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public lightPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * 阴影 pass usage 数据。
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public shadowPassUsageData: PassUsage = new PassUsage(); 
            /**
            * @language zh_CN
            * 材质球ID。
            * <p> 一个合成材质球，可以多维合成，用于标记 subGeometry 所用的材质方法
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.matID = 0;
            /**
            * @language zh_CN
            * 渲染模式。
            * @default DrawMode.TRIANGLES
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.drawMode = egret3d.DrawMode.TRIANGLES;
            /**
            * @language zh_CN
            * 法线贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.normalTexture = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 特效贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.specularTexture = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 灯光贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public lightMapTex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * ao 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public aoMapTex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 环境贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public environmentMapTex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * mask 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public maskTex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_0 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public splat_0Tex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_1 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public splat_1Tex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_2 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public splat_2Tex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_3 贴图。
            * @default CheckerboardTexture.texture
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public splat_3Tex: TextureBase = CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 灯光存贮列表
            * 聚光灯列表
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public lightList: Array<LightBase> = new Array<LightBase>();
            /**
            * @language zh_CN
            * layer。
            * @default 0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.layer = 0;
            /**
            * @language zh_CN
            * 投射阴影 。
            * @default false
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.castShadow = false;
            /**
            * @language zh_CN
            * 接受阴影。
            * @default true
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.acceptShadow = true;
            /**
            * @language zh_CN
            * 深度测试 。
            * @default true
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.depthTest = true;
            /**
            * @language zh_CN
            * 是否平滑 。
            * @default true
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.smooth = true;
            /**
            * @language zh_CN
            * 混合模式 。
            * @default BlendMode.NORMAL
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.blendMode = egret3d.BlendMode.NORMAL;
            /**
            * @language zh_CN
            * alphaBlending。
            * @default false
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.alphaBlending = false;
            /**
            * @language zh_CN
            * ambientColor 值。
            * @default 0x0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.ambientColor = 0xffffff;
            //public ambientColor: number = 0x00235c;
            /**
            * @language zh_CN
            * diffuseColor 值。
            * @default 0xffffff
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.diffuseColor = 0xffffff;
            /**
            * @language zh_CN
            * specularColor 值。
            * @default 0xffffff
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.specularColor = 0xffffff;
            /**
            * @language zh_CN
            * shininess 值。
            * @default 8.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.shininess = 20.0;
            /**
            * @language zh_CN
            * cutAlpha 值。
            * @default 0.7
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.cutAlpha = 0.7;
            /**
            * @language zh_CN
            * 是否重复。
            * @default false
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.repeat = false;
            /**
            * @language zh_CN
            * bothside 值。
            * @default false
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.bothside = false;
            /**
            * @language zh_CN
            * alpha 值。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.alpha = 1.0;
            /**
            * @language zh_CN
            * 光照光滑程度，会影响反光的面积，强度。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.roughness = 1.0;
            this.albedo = 0.95;
            /**
            * @language zh_CN
            * 高光亮度的强度值,设置较大的值会让高光部分极亮。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.specularScale = 1.0;
            this.normalScale = 1.0;
            /**
            * @language zh_CN
            * uv 在贴图上的映射区域，值的范围限制在0.0~1.0之间。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.uvRectangle = new egret3d.Rectangle(0, 0, 1, 1);
            /**
            * @language zh_CN
            * ambientPower 值。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public ambientPower: number = 1.0; 
            /**
            * @language zh_CN
            * diffusePower。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public diffusePower: number = 1.0; 
            /**
            * @language zh_CN
            * normalPower 值。
            * @default 1.0
            * @version Egret 3.0
            * @platform Web,Native
            */
            //public normalPower: number = 1.0; 
            /**
            * @language zh_CN
            * 材质数据需要变化。
            * @default true
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.materialDataNeedChange = true;
            /**
            * @language zh_CN
            * 纹理变化。
            * @default false
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.textureChange = false;
            /**
            * @language zh_CN
            * cullFrontOrBack。
            * @default Egret3DDrive.BACK
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.cullFrontOrBack = egret3d.ContextConfig.BACK;
            //data
            /**
             * @language zh_CN
             */
            this.materialSourceData = new Float32Array(20); //12
        }
        /**
        * @language zh_CN
        * 克隆方法。
        * @returns {MaterialData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        MaterialData.prototype.clone = function () {
            var data = new MaterialData();
            //data.depthPassUsageData = this.depthPassUsageData;
            //data.normalPassUsageData = this.normalPassUsageData;
            //data.positionPassUsageData = this.positionPassUsageData;
            //data.postPassUsageData = this.positionPassUsageData;
            //data.lightPassUsageData = this.positionPassUsageData;
            //data.shadowPassUsageData = this.positionPassUsageData;
            //data.textureChange = true;
            //data.textureMethodTypes = this.textureMethodTypes;
            data.drawMode = this.drawMode;
            //data.context3D = this.context3D;
            data.diffuseTexture = this.diffuseTexture;
            //data.specularTex = this.specularTex;
            //data.lightMapTex = this.lightMapTex;
            //data.environmentMapTex = this.environmentMapTex;
            data.shadowMapTex = this.shadowMapTex;
            //data.splat_0Tex = this.splat_0Tex;
            //data.splat_1Tex = this.splat_1Tex;
            //data.splat_2Tex = this.splat_2Tex;
            //data.splat_3Tex = this.splat_3Tex;
            data.layer = this.layer;
            data.castShadow = this.castShadow;
            data.acceptShadow = this.acceptShadow;
            data.depthTest = this.depthTest;
            data.smooth = this.smooth;
            data.blendMode = this.blendMode;
            data.blend_src = this.blend_src;
            data.blend_dest = this.blend_dest;
            data.ambientColor = this.ambientColor;
            data.diffuseColor = this.diffuseColor;
            data.specularColor = this.specularColor;
            data.shininess = this.shininess;
            data.cutAlpha = this.cutAlpha;
            data.alpha = this.alpha;
            data.roughness = this.roughness;
            data.roughness = this.roughness;
            data.albedo = this.albedo;
            data.specularScale = this.specularScale;
            data.materialDataNeedChange = this.materialDataNeedChange;
            data.textureChange = true;
            data.cullFrontOrBack = this.cullFrontOrBack;
            //material state
            return data;
        };
        /**
        * @language zh_CN
        * 销毁。
        * @version Egret 3.0
        * @platform Web,Native
        */
        MaterialData.prototype.dispose = function () {
            //if (this.depthPassUsageData)
            //    this.depthPassUsageData.dispose();
            //if (this.normalPassUsageData)
            //    this.normalPassUsageData.dispose();
            //if (this.normalPassUsageData)
            //    this.normalPassUsageData.dispose();
            //if (this.positionPassUsageData)
            //    this.positionPassUsageData.dispose();
            //if (this.postPassUsageData)
            //    this.postPassUsageData.dispose();
            //if (this.lightPassUsageData)
            //    this.lightPassUsageData.dispose();
            //if (this.shadowPassUsageData)
            //    this.shadowPassUsageData.dispose();
            //if (this.directLightList.length > 0) {
            //    this.directLightList.length = 0;
            //    this.directLightList = null;
            //}
            //if (this.sportLightList.length > 0) {
            //    this.sportLightList.length = 0;
            //    this.sportLightList = null;
            //}
            //if (this.pointLightList.length > 0) {
            //    this.pointLightList.length = 0;
            //    this.pointLightList = null;
            //}
        };
        return MaterialData;
    }());
    egret3d.MaterialData = MaterialData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var MaterialPass = (function () {
        function MaterialPass(materialData) {
            this._passChange = true;
            this.methodList = new Array();
            this.methodDatas = new Array();
            this.vsShaderNames = new Array();
            this.fsShaderNames = new Array();
            this.modelViewMatrix = new egret3d.Matrix4_4();
            this._materialData = materialData;
        }
        MaterialPass.prototype.addMethod = function (method) {
            if (method.methodType != -1) {
                this.methodList.push(method);
                this._materialData.textureMethodTypes.push(method.methodType);
                this._passChange = true;
            }
            else {
                new Error("method.methodType is null");
            }
        };
        MaterialPass.prototype.removeMethod = function (method) {
            var index = this.methodList.indexOf(method);
            if (index != -1) {
                this.methodList.slice(index);
                this._passChange = true;
            }
        };
        MaterialPass.prototype.materialDataChange = function () {
            this._materialData.materialDataNeedChange = true;
        };
        MaterialPass.prototype.passInvalid = function () {
            this._passChange = true;
        };
        /**
       * @language zh_CN
       * 重置纹理。
       * @version Egret 3.0
       * @platform Web,Native
       */
        MaterialPass.prototype.resetTexture = function (context3DProxy) {
            //--------texture----------------
            var sampler2D;
            for (var index in this._passUsage.sampler2DList) {
                sampler2D = this._passUsage.sampler2DList[index];
                if (this._materialData[sampler2D.varName]) {
                    sampler2D.texture = this._materialData[sampler2D.varName];
                }
            }
            var sampler3D;
            for (var index in this._passUsage.sampler3DList) {
                sampler3D = this._passUsage.sampler3DList[index];
                if (this._materialData[sampler3D.varName]) {
                    sampler3D.texture = this._materialData[sampler3D.varName];
                }
            }
            this._materialData.textureChange = false;
        };
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        MaterialPass.prototype.initUseMethod = function (animation) {
            this._passChange = false;
            var i = 0;
            this._passUsage = new egret3d.PassUsage();
            this._passUsage.vertexShader.shaderType = egret3d.Shader.vertex;
            this._passUsage.fragmentShader.shaderType = egret3d.Shader.fragment;
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.diffuse) != -1) {
                this._passUsage.vertexShader.addUseShaderName("default_vertex");
                this._passUsage.fragmentShader.addUseShaderName("diffuseMap_fragment");
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.normal) != -1) {
                this._passUsage.vertexShader.addUseShaderName("");
                this._passUsage.fragmentShader.addUseShaderName("normalMap_fragment");
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.specular) != -1) {
                this._passUsage.vertexShader.addUseShaderName("");
                this._passUsage.fragmentShader.addUseShaderName("specularMap_fragment");
            }
            if (animation) {
                this._passUsage.maxBone = animation.skeletonAnimationController.jointNumber * 2;
            }
            if (this.lightGroup) {
                this._passUsage.maxDirectLight = this.lightGroup.directLightList.length;
                this._passUsage.maxSpotLight = this.lightGroup.spotLightList.length;
                this._passUsage.maxPointLight = this.lightGroup.pointLightList.length;
                if (this.lightGroup.directLightList.length) {
                    this._passUsage.directLightData = new Float32Array(egret3d.DirectLight.stride * this.lightGroup.directLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("directLight_fragment");
                }
                if (this.lightGroup.spotLightList.length) {
                    this._passUsage.spotLightData = new Float32Array(egret3d.SpotLight.stride * this.lightGroup.spotLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("spotLight_fragment");
                }
                if (this.lightGroup.pointLightList.length) {
                    this._passUsage.pointLightData = new Float32Array(egret3d.PointLight.stride * this.lightGroup.pointLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("pointLight_fragment");
                }
            }
            if (this.methodList) {
                for (var i = 0; i < this.methodList.length; i++) {
                    this._passUsage.vertexShader.addUseShaderName(this.methodList[i].vsShaderName);
                    this._passUsage.fragmentShader.addUseShaderName(this.methodList[i].fsShaderName);
                }
            }
        };
        MaterialPass.prototype.upload = function (time, delay, context3DProxy, modeltransform, camera3D, animation) {
            this._passChange = false;
            this.initUseMethod(animation);
            this._passUsage.vertexShader.shader = this._passUsage.vertexShader.getShader(this._passUsage);
            this._passUsage.fragmentShader.shader = this._passUsage.fragmentShader.getShader(this._passUsage);
            this._passUsage.program3D = egret3d.ShaderPool.getProgram(this._passUsage.vertexShader.shader.id, this._passUsage.fragmentShader.shader.id);
            for (var property in this._passUsage) {
                if (property.indexOf("uniform") != -1) {
                    if (this._passUsage[property]) {
                        this._passUsage[property].uniformIndex = context3DProxy.getUniformLocation(this._passUsage.program3D, property);
                    }
                }
            }
            var sampler2D;
            for (var index in this._passUsage.sampler2DList) {
                sampler2D = this._passUsage.sampler2DList[index];
                sampler2D.uniformIndex = context3DProxy.getUniformLocation(this._passUsage.program3D, sampler2D.varName);
            }
            var sampler3D;
            for (var index in this._passUsage.sampler3DList) {
                sampler3D = this._passUsage.sampler3DList[index];
                sampler3D.uniformIndex = context3DProxy.getUniformLocation(this._passUsage.program3D, sampler3D.varName);
            }
        };
        MaterialPass.prototype.draw = function (time, delay, context3DProxy, modeltransform, camera3D, subGeometry, animtion) {
            if (this._passChange) {
                this.upload(time, delay, context3DProxy, modeltransform, camera3D, animtion);
            }
            context3DProxy.setProgram(this._passUsage.program3D);
            subGeometry.update(time, delay, this._passUsage, context3DProxy);
            if (this._materialData.depthTest) {
                context3DProxy.enable(egret3d.ContextConfig.DEPTH_TEST);
                context3DProxy.depthFunc(egret3d.ContextConfig.LEQUAL);
            }
            else {
                context3DProxy.disable(egret3d.ContextConfig.DEPTH_TEST);
                context3DProxy.depthFunc(egret3d.ContextConfig.LEQUAL);
            }
            context3DProxy.setCulling(this._materialData.cullFrontOrBack);
            if (this._materialData.bothside) {
                context3DProxy.disable(egret3d.ContextConfig.CULL_FACE);
            }
            else
                context3DProxy.enable(egret3d.ContextConfig.CULL_FACE);
            egret3d.Context3DProxy.gl.enable(egret3d.ContextConfig.BLEND);
            context3DProxy.setBlendFactors(this._materialData.blend_src, this._materialData.blend_dest);
            if (this._materialData.alphaBlending)
                egret3d.Context3DProxy.gl.depthMask(false);
            if (this._materialData.materialDataNeedChange) {
                //this._materialData.materialDataNeedChange = false;
                this._materialData.materialSourceData[0] = (this._materialData.diffuseColor >> 16 & 0xff) / 255.0;
                this._materialData.materialSourceData[1] = (this._materialData.diffuseColor >> 8 & 0xff) / 255.0;
                this._materialData.materialSourceData[2] = (this._materialData.diffuseColor & 0xff) / 255.0;
                this._materialData.materialSourceData[3] = (this._materialData.ambientColor >> 16 & 0xff) / 255.0;
                this._materialData.materialSourceData[4] = (this._materialData.ambientColor >> 8 & 0xff) / 255.0;
                this._materialData.materialSourceData[5] = (this._materialData.ambientColor & 0xff) / 255.0;
                this._materialData.materialSourceData[6] = (this._materialData.specularColor >> 16 & 0xff) / 255.0;
                this._materialData.materialSourceData[7] = (this._materialData.specularColor >> 8 & 0xff) / 255.0;
                this._materialData.materialSourceData[8] = (this._materialData.specularColor & 0xff) / 255.0;
                this._materialData.materialSourceData[9] = this._materialData.alpha;
                this._materialData.materialSourceData[10] = this._materialData.cutAlpha;
                this._materialData.materialSourceData[11] = this._materialData.shininess;
                this._materialData.materialSourceData[12] = this._materialData.roughness;
                this._materialData.materialSourceData[13] = this._materialData.albedo;
                this._materialData.materialSourceData[14] = this._materialData.uvRectangle.x;
                this._materialData.materialSourceData[15] = this._materialData.uvRectangle.y; //保留
                this._materialData.materialSourceData[16] = this._materialData.uvRectangle.width; //保留
                this._materialData.materialSourceData[17] = this._materialData.uvRectangle.height; //保留
                this._materialData.materialSourceData[18] = this._materialData.specularScale; //保留
                this._materialData.materialSourceData[19] = this._materialData.normalScale; //保留
            }
            if (this._passUsage.uniform_materialSource) {
                context3DProxy.uniform1fv(this._passUsage.uniform_materialSource.uniformIndex, this._materialData.materialSourceData);
            }
            if (this._materialData.textureChange) {
                this.resetTexture(context3DProxy);
            }
            //texture 2D
            var sampler2D;
            for (var index in this._passUsage.sampler2DList) {
                sampler2D = this._passUsage.sampler2DList[index];
                sampler2D.texture.upload(context3DProxy);
                context3DProxy.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture2D);
                if (this._materialData.materialDataNeedChange) {
                    var min_filter = (this._materialData.smooth && sampler2D.texture.texture2D.useMipmap) ? egret3d.Context3DProxy.gl.LINEAR_MIPMAP_LINEAR : egret3d.Context3DProxy.gl.LINEAR;
                    var mag_filter = this._materialData.smooth ? egret3d.Context3DProxy.gl.LINEAR : egret3d.Context3DProxy.gl.LINEAR;
                    var wrap_u_filter = this._materialData.repeat ? egret3d.Context3DProxy.gl.REPEAT : egret3d.Context3DProxy.gl.CLAMP_TO_EDGE;
                    var wrap_v_filter = this._materialData.repeat ? egret3d.Context3DProxy.gl.REPEAT : egret3d.Context3DProxy.gl.CLAMP_TO_EDGE;
                    context3DProxy.setTexture2DSamplerState(min_filter, mag_filter, wrap_u_filter, wrap_v_filter);
                    this._materialData.materialDataNeedChange = false;
                }
            }
            var sampler3D;
            for (var index in this._passUsage.sampler3DList) {
                sampler3D = this._passUsage.sampler3DList[index];
                sampler3D.texture.upload(context3DProxy);
                context3DProxy.setCubeTextureAt(sampler3D.activeTextureIndex, sampler3D.uniformIndex, sampler3D.index, sampler3D.texture.texture3D);
            }
            var i = 0;
            if (this.lightGroup) {
                for (i = 0; i < this._passUsage.maxDirectLight; i++) {
                    this.lightGroup.directLightList[i].updateLightData(i, this._passUsage.directLightData);
                }
                for (i = 0; i < this._passUsage.maxSpotLight; i++) {
                    this.lightGroup.spotLightList[i].updateLightData(i, this._passUsage.spotLightData);
                }
                for (i = 0; i < this._passUsage.maxPointLight; i++) {
                    this.lightGroup.pointLightList[i].updateLightData(i, this._passUsage.pointLightData);
                }
                if (this._passUsage.uniform_directLightSource)
                    context3DProxy.uniform1fv(this._passUsage.uniform_directLightSource.uniformIndex, this._passUsage.directLightData);
                if (this._passUsage.uniform_sportLightSource)
                    context3DProxy.uniform1fv(this._passUsage.uniform_sportLightSource.uniformIndex, this._passUsage.spotLightData);
                if (this._passUsage.uniform_pointLightSource)
                    context3DProxy.uniform1fv(this._passUsage.uniform_pointLightSource.uniformIndex, this._passUsage.pointLightData);
            }
            if (this._materialData.alphaBlending)
                egret3d.Context3DProxy.gl.depthMask(true);
            context3DProxy.uniformMatrix4fv(this._passUsage.uniform_ModelMatrix.uniformIndex, false, modeltransform.rawData);
            this.modelViewMatrix.copyFrom(modeltransform);
            this.modelViewMatrix.multiply(camera3D.viewMatrix);
            context3DProxy.uniformMatrix4fv(this._passUsage.uniform_ModelViewMatrix.uniformIndex, false, this.modelViewMatrix.rawData);
            context3DProxy.uniformMatrix4fv(this._passUsage.uniform_ProjectionMatrix.uniformIndex, false, camera3D.projectMatrix.rawData);
            if (this._passUsage.uniform_eyepos) {
                context3DProxy.uniform3f(this._passUsage.uniform_eyepos.uniformIndex, camera3D.x, camera3D.y, camera3D.z);
            }
            if (animtion) {
                context3DProxy.uniform4fv(this._passUsage.uniform_PoseMatrix.uniformIndex, animtion.skeletonAnimationController.currentSkeletonMatrixData);
            }
            context3DProxy.drawElement(this._materialData.drawMode, subGeometry.start, subGeometry.count);
        };
        return MaterialPass;
    }());
    egret3d.MaterialPass = MaterialPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var ColorPass = (function (_super) {
        __extends(ColorPass, _super);
        function ColorPass() {
            _super.apply(this, arguments);
        }
        /**
       * @language zh_CN
       * @private
       * 初始化 UseMethod。
       * @version Egret 3.0
       * @platform Web,Native
       */
        ColorPass.prototype.initUseMethod = function (animation) {
            this._passChange = false;
            var i = 0;
            this._passUsage = new egret3d.PassUsage();
            this._materialData.textureMethodTypes.push(egret3d.TextureMethodType.color);
            this._passUsage.vertexShader.shaderType = egret3d.Shader.vertex;
            this._passUsage.fragmentShader.shaderType = egret3d.Shader.fragment;
            this._passUsage.vertexShader.addUseShaderName("base_vs");
            this._passUsage.fragmentShader.addUseShaderName("base_fs");
            this._passUsage.fragmentShader.addUseShaderName("materialSource_fs");
            if (animation) {
                this._passUsage.maxBone = animation.skeletonAnimationController.jointNumber * 2;
                this._passUsage.vertexShader.addUseShaderName("skeleton_vertex");
            }
            else {
                this._passUsage.vertexShader.addUseShaderName("diffuse_vertex");
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.normal) != -1) {
                this._passUsage.fragmentShader.addUseShaderName("normalMap_fragment");
            }
            if (this.lightGroup) {
                this._passUsage.maxDirectLight = this.lightGroup.directLightList.length;
                this._passUsage.maxSpotLight = this.lightGroup.spotLightList.length;
                this._passUsage.maxPointLight = this.lightGroup.pointLightList.length;
                this._passUsage.fragmentShader.addUseShaderName("lightingBase_fs");
                if (this.lightGroup.directLightList.length) {
                    this._passUsage.directLightData = new Float32Array(egret3d.DirectLight.stride * this.lightGroup.directLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("directLight_fragment");
                }
                if (this.lightGroup.spotLightList.length) {
                    this._passUsage.spotLightData = new Float32Array(egret3d.SpotLight.stride * this.lightGroup.spotLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("spotLight_fragment");
                }
                if (this.lightGroup.pointLightList.length) {
                    this._passUsage.pointLightData = new Float32Array(egret3d.PointLight.stride * this.lightGroup.pointLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("pointLight_fragment");
                }
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.specular) != -1) {
                this._passUsage.fragmentShader.addUseShaderName("specularMap_fragment");
            }
            this._passUsage.vertexShader.addEndShaderName("end_vs");
            this._passUsage.fragmentShader.addEndShaderName("end_fs");
            if (this.methodList) {
                for (var i = 0; i < this.methodList.length; i++) {
                    this._passUsage.vertexShader.addUseShaderName(this.methodList[i].vsShaderName);
                    this._passUsage.fragmentShader.addUseShaderName(this.methodList[i].fsShaderName);
                }
            }
        };
        return ColorPass;
    }(egret3d.MaterialPass));
    egret3d.ColorPass = ColorPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var DiffusePass = (function (_super) {
        __extends(DiffusePass, _super);
        function DiffusePass(materialData) {
            _super.call(this, materialData);
        }
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        DiffusePass.prototype.initUseMethod = function (animation) {
            this._passChange = false;
            var i = 0;
            this._passUsage = new egret3d.PassUsage();
            this._materialData.textureMethodTypes.push(egret3d.TextureMethodType.color);
            this._passUsage.vertexShader.shaderType = egret3d.Shader.vertex;
            this._passUsage.fragmentShader.shaderType = egret3d.Shader.fragment;
            this._passUsage.vertexShader.addUseShaderName("base_vs");
            this._passUsage.fragmentShader.addUseShaderName("base_fs");
            this._passUsage.fragmentShader.addUseShaderName("materialSource_fs");
            if (animation) {
                this._passUsage.maxBone = animation.skeletonAnimationController.jointNumber * 2;
                this._passUsage.vertexShader.addUseShaderName("skeleton_vertex");
            }
            else {
                this._passUsage.vertexShader.addUseShaderName("diffuse_vertex");
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.color) != -1) {
                this._passUsage.fragmentShader.addUseShaderName("gamma_fs");
                this._passUsage.fragmentShader.addUseShaderName("diffuse_fragment");
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.normal) != -1) {
                this._passUsage.fragmentShader.addUseShaderName("normalMap_fragment");
            }
            if (this.lightGroup) {
                this._passUsage.maxDirectLight = this.lightGroup.directLightList.length;
                this._passUsage.maxSpotLight = this.lightGroup.spotLightList.length;
                this._passUsage.maxPointLight = this.lightGroup.pointLightList.length;
                this._passUsage.fragmentShader.addUseShaderName("lightingBase_fs");
                if (this.lightGroup.directLightList.length) {
                    this._passUsage.directLightData = new Float32Array(egret3d.DirectLight.stride * this.lightGroup.directLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("directLight_fragment");
                }
                if (this.lightGroup.spotLightList.length) {
                    this._passUsage.spotLightData = new Float32Array(egret3d.SpotLight.stride * this.lightGroup.spotLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("spotLight_fragment");
                }
                if (this.lightGroup.pointLightList.length) {
                    this._passUsage.pointLightData = new Float32Array(egret3d.PointLight.stride * this.lightGroup.pointLightList.length);
                    this._passUsage.fragmentShader.addUseShaderName("pointLight_fragment");
                }
            }
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.specular) != -1) {
                this._passUsage.fragmentShader.addUseShaderName("specularMap_fragment");
            }
            this._passUsage.vertexShader.addEndShaderName("end_vs");
            this._passUsage.fragmentShader.addEndShaderName("end_fs");
            if (this.methodList) {
                for (var i = 0; i < this.methodList.length; i++) {
                    this._passUsage.vertexShader.addUseShaderName(this.methodList[i].vsShaderName);
                    this._passUsage.fragmentShader.addUseShaderName(this.methodList[i].fsShaderName);
                }
            }
        };
        return DiffusePass;
    }(egret3d.MaterialPass));
    egret3d.DiffusePass = DiffusePass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var CubePass = (function (_super) {
        __extends(CubePass, _super);
        function CubePass(materialData) {
            _super.call(this, materialData);
        }
        /**
        * @language zh_CN
        * @private
        * 初始化 UseMethod。
        * @version Egret 3.0
        * @platform Web,Native
        */
        CubePass.prototype.initUseMethod = function (animation) {
            this._passChange = false;
            this._materialData.textureMethodTypes.push(egret3d.TextureMethodType.color);
            var i = 0;
            this._passUsage = new egret3d.PassUsage();
            this._passUsage.vertexShader.shaderType = egret3d.Shader.vertex;
            this._passUsage.fragmentShader.shaderType = egret3d.Shader.fragment;
            if (this._materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.color) != -1) {
                this._passUsage.vertexShader.addUseShaderName("cube_vertex");
                this._passUsage.fragmentShader.addUseShaderName("cube_fragment");
            }
        };
        return CubePass;
    }(egret3d.MaterialPass));
    egret3d.CubePass = CubePass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.MaterialBase
    * @classdesc
    * 材质球共有的基础类型，封装了材质球共有的基础数据设置方法。</p>
    * 不同的渲染通道pass。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    var MaterialBase = (function () {
        /**
        * @language zh_CN
        * @class egret3d.MaterialBase
        * @classdesc
        * TerrainMaterial,TextureMaterial 的基类。</p>
        * 材质球共有的基础类型，封装了材质球共有的基础数据设置方法。</p>
        * 不同的渲染通道pass。</p>
        * @version Egret 3.0
        * @platform Web,Native
        */
        function MaterialBase(materialData) {
            if (materialData === void 0) { materialData = null; }
            if (materialData == null) {
                this.setData(new egret3d.MaterialData());
            }
            else
                this.setData(materialData);
        }
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.setData = function (data) {
            this.materialData = data;
            this.initPass();
            this.blendMode = egret3d.BlendMode.NORMAL;
        };
        /**
         * @language zh_CN
         * @private
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.getData = function () {
            return this.materialData;
        };
        MaterialBase.prototype.initPass = function () {
            this.diffusePass = new egret3d.ColorPass(this.materialData);
        };
        Object.defineProperty(MaterialBase.prototype, "lightGroup", {
            /**
             * @language zh_CN
             * 设置材质 lightGroup 。
             * 设置材质球接受的灯光组。
             * @param lightGroup {LightGroup}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (group) {
                this._lightGroup = group;
                this.diffusePass.lightGroup = group;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "diffuseTexture", {
            /**
            * @language zh_CN
            * 返回材质 diffuseTexture。
            * 返回材质球的漫反射贴图。
            * @returns {TextureBase}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.diffuseTexture;
            },
            /**
             * @language zh_CN
             * 设置材质 diffuseTexture 。
             * 设置材质球的漫反射贴图。
             * @param texture {TextureBase}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.diffuseTexture = texture;
                    this.materialData.textureChange = true;
                    if (this.materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.diffuse) == -1) {
                        this.materialData.textureMethodTypes.push(egret3d.TextureMethodType.diffuse);
                        this.diffusePass.passInvalid();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "normalTexture", {
            /**
             * @language zh_CN
             * 得到材质球的凹凸法线贴图。
             * @returns ITexture
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.normalTexture;
            },
            /**
             * @language zh_CN
             * 设置材质 normalTexture 。
             * 设置材质球的凹凸法线贴图。
             * @param texture {TextureBase}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.normalTexture = texture;
                    this.materialData.textureChange = true;
                    if (this.materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.normal) == -1) {
                        this.materialData.textureMethodTypes.push(egret3d.TextureMethodType.normal);
                        this.diffusePass.passInvalid();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "specularTexture", {
            /**
             * @language zh_CN
             * 得到材质球的高光贴图。
             * @returns ITexture
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.specularTexture;
            },
            /**
             * @language zh_CN
             * 设置材质 specularTexture 。
             * 设置材质球的高光贴图。
             * @param texture {TextureBase}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.specularTexture = texture;
                    this.materialData.textureChange = true;
                    if (this.materialData.textureMethodTypes.indexOf(egret3d.TextureMethodType.specular) == -1) {
                        this.materialData.textureMethodTypes.push(egret3d.TextureMethodType.specular);
                        this.diffusePass.passInvalid();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "drawMode", {
            /**
            * @language zh_CN
            * 设置模型渲染模式。模型可以以顶点的方式渲染，线框渲染（会需要特定模型），三角形渲染
            * DrawMode.POINTS
            * rawMode.LINES
            * DrawMode.TRIANGLES
            * @default DrawMode.TRIANGLES
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.drawMode;
            },
            /**
            * @language zh_CN
            * 设置模型渲染模式。模型可以以顶点的方式渲染，线框渲染（会需要特定模型），三角形渲染
            * DrawMode.POINTS
            * rawMode.LINES
            * DrawMode.TRIANGLES
            * @default DrawMode.TRIANGLES
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (mode) {
                this.materialData.drawMode = mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "diffuseColor", {
            /**
            * @language zh_CN
            * 获取材质 diffuseColor
            * @returns number 材质 diffuseColor
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.diffuseColor;
            },
            /**
            * @language zh_CN
            * 设置材质 diffuseColor。
            * 设置 16 进制的漫反射颜色
            * @param color {Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.diffuseColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "ambientColor", {
            /**
            * @language zh_CN
            * 获取材质 ambientColor
            * @returns number 材质 ambientColor
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.ambientColor;
            },
            /**
            * @language zh_CN
            * 设置材质 ambientColor。
            * 设置 16 进制的环境光颜色
            * @param color {Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.ambientColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "specularColor", {
            /**
            * @language zh_CN
            * 获取材质 specularColor
            * @returns number 材质 specularColor
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.specularColor;
            },
            /**
            * @language zh_CN
            * 设置材质 specularColor。
            * 设置 16 进制的镜面光反射颜色
            * @param color {Number}
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.specularColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "alpha", {
            /**
             * @language zh_CN
             * 返回材质 alpha 值。
             * 返回 alpha 颜色
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.alpha;
            },
            /**
             * @language zh_CN
             * 设置材质 alpha 值。
             * 设置 材质球的透明度，如果透明度小于1会自动启用 alphablending
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                if (this.materialData.alpha != value) {
                    this.materialData.alpha = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "shininess", {
            /**
             * @language zh_CN
             * 返回材质 shininess 值。
             * 返回材质 光滑程度 值越大，越不光滑
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.shininess;
            },
            /**
             * @language zh_CN
             * 设置材质 shininess 值。
             * 设置材质球的 光滑程度 值越大，越不光滑
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                if (this.materialData.shininess != value) {
                    this.materialData.shininess = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "roughness", {
            /**
             * @language zh_CN
             * 返回材质 roughness 值。
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.roughness;
            },
            /**
             * @language zh_CN
             * 设置材质 roughness 值。
             * 设置材质 镜面平滑程度 值。
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                if (this.materialData.roughness != value) {
                    this.materialData.roughness = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 映射贴图UV坐标，设置此材质要显示使用贴图的区域，用uvRectangl 的方式映射
        * @param x {Number}
        * @param y {Number}
        * @param width {Number}
        * @param height {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        MaterialBase.prototype.uvRectangle = function (x, y, width, height) {
            this.materialData.uvRectangle.x = x;
            this.materialData.uvRectangle.y = y;
            this.materialData.uvRectangle.width = width;
            this.materialData.uvRectangle.height = height;
            this.materialData.materialDataNeedChange = true;
        };
        Object.defineProperty(MaterialBase.prototype, "castShadow", {
            /**
             * @language zh_CN
             * 设置材质 ambientPower 值。
             * 设置材质 环境光颜色的强度 值。
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public set ambientPower(value: number) {
            //    if (this.materialData.ambientPower != value) {
            //        this.materialData.ambientPower = value;
            //        this.materialData.materialDataNeedChange = true;
            //    }
            //}
            /**
             * @language zh_CN
             * 返回材质 ambientPower 值。
             * 返回材质 环境光颜色的强度 值。
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public get ambientPower(): number {
            //    return this.materialData.ambientPower;
            //}
            /**
             * @language zh_CN
             * 设置材质 diffusePower 值。
             * 设置材质 漫反射颜色的强度 值。
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public set diffusePower(value: number) {
            //    if (this.materialData.diffusePower != value) {
            //        this.materialData.diffusePower = value;
            //        this.materialData.materialDataNeedChange = true;
            //    }
            //}
            /**
             * @language zh_CN
             * 返回材质 diffusePower 值。
             * 返回材质 漫反射颜色的强度 值。
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public get diffusePower(): number {
            //    return this.materialData.diffusePower;
            //}
            /**
             * @language zh_CN
             * 设置材质 normalPower 值。
             * 设置材质 法线的强度 值。
             * @param value {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public set normalPower(value: number) {
            //    if (this.materialData.normalPower != value) {
            //        this.materialData.normalPower = value;
            //        this.materialData.materialDataNeedChange = true;
            //    }
            //}
            /**
             * @language zh_CN
             * 返回材质 normalPower 值。
             * 返回材质 法线的强度 值。
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public get normalPower(): number {
            //    return this.materialData.normalPower;
            //}
            /**
             * @language zh_CN
             * 设置材质 castShadow 值。
             * 设置材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
             * @param value {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            //public set castShadow(value: boolean) {
            //    this.materialData.castShadow = value;
            //    if (value) {
            //        //if (!ShadowRender.frameBuffer) {
            //        //    alert("要使用shadow view3D.useShadow = true ");
            //        //} else {
            //        //    if (!this.shadowPass)
            //        //        this.shadowPass = new ShadowMapPass(this.materialData);
            //        //}
            //    }
            //}
            /**
             * @language zh_CN
             * 返回材质 castShadow 值。
             * 返回材质 是否产生阴影 值。
             * @returns {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.castShadow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "acceptShadow", {
            /**
            * @language zh_CN
            * 返回材质 acceptShadow 值。
            * 返回材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
            * @returns {boolean}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.acceptShadow;
            },
            /**
             * @language zh_CN
             * 设置材质 acceptShadow 值。
             * 设置材质是否是否产生阴影，设置了之后必须要给 shadowmaping 的方法。
             * @param value {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                this.materialData.acceptShadow = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "smooth", {
            /**
            * @language zh_CN
            * 返回材质 smooth 值。
            * 返回 材质纹理的采样方式，是否抗锯齿，是否精细显示。的开关
            * @returns {boolean}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.smooth;
            },
            /**
             * @language zh_CN
             * 设置材质 smooth 值。
             * 材质纹理的采样方式，是否抗锯齿，是否精细显示。
             * @param value {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (val) {
                this.materialData.smooth = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "repeat", {
            /**
            * @language zh_CN
            * 返回材质 repeat 值。
            * 返回材质 是否进行纹理重复采样的方式开关。
            * @returns {boolean}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.repeat;
            },
            /**
             * @language zh_CN
             * 设置材质 repeat 值。
             * 设置材质 是否进行纹理重复采样的方式开关。
             * @param value {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (val) {
                this.materialData.repeat = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "bothside", {
            /**
            * @language zh_CN
            * 返回材质 bothside 值。
           * 返回是否显示双面的开关，一般情况不需要。
            * @returns {boolean}
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.materialData.bothside;
            },
            /**
             * @language zh_CN
             * 设置材质 bothside 值。
            * 设置材质是否显示双面的开关，一般情况不需要。
             * @param value {boolean}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (val) {
                this.materialData.bothside = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "cullMode", {
            /**
             * @language zh_CN
             * 返回 cull 模式。
             * @returns {Number}
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this.materialData.cullFrontOrBack;
            },
            /**
           * @language zh_CN
           * 设置 cull 模式 正面渲染三角形或者背面渲染三角形。
           * @param value {Number}
           * @version Egret 3.0
           * @platform Web,Native
           */
            set: function (value) {
                this.materialData.cullFrontOrBack = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "blendMode", {
            /**
             * @language zh_CN
             * 设置材质 blendMode 值。
             * 设置材质球的 混合模式可以参照 blendmode 中的值
             * @param value {BlendMode}
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (value) {
                this.materialData.blendMode = value;
                switch (value) {
                    case egret3d.BlendMode.NORMAL:
                        this.materialData.blend_src = egret3d.ContextConfig.ONE;
                        this.materialData.blend_dest = egret3d.ContextConfig.ZERO;
                        break;
                    case egret3d.BlendMode.LAYER:
                        this.materialData.blend_src = egret3d.ContextConfig.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.ContextConfig.ZERO;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.MULTIPLY:
                        this.materialData.blend_src = egret3d.ContextConfig.ZERO;
                        this.materialData.blend_dest = egret3d.ContextConfig.SRC_COLOR;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.ADD:
                        this.materialData.blend_src = egret3d.ContextConfig.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.ContextConfig.ONE;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.ALPHA:
                        this.materialData.blend_src = egret3d.ContextConfig.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.ContextConfig.ONE_MINUS_SRC_ALPHA;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.SCREEN:
                        this.materialData.blend_src = egret3d.ContextConfig.ONE;
                        this.materialData.blend_dest = egret3d.ContextConfig.ONE_MINUS_SRC_COLOR;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderDiffusePass = function (time, delay, matID, context3DProxy, modeltransform, camera3D, subGeometry, animtion) {
            this.diffusePass.draw(time, delay, context3DProxy, modeltransform, camera3D, subGeometry, animtion);
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderXRayPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderOutlinePass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderNormalPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderDepthPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderPositionPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderUVPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderScendUVPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderVertexColorPass = function () {
        };
        /**
         * @language zh_CN
         * @private
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        MaterialBase.prototype.renderLightingPass = function () {
        };
        return MaterialBase;
    }());
    egret3d.MaterialBase = MaterialBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var ColorMaterial = (function (_super) {
        __extends(ColorMaterial, _super);
        function ColorMaterial(color) {
            if (color === void 0) { color = 0xcccccc; }
            _super.call(this);
            this.color = color;
        }
        ColorMaterial.prototype.initPass = function () {
            this.diffusePass = new egret3d.ColorPass(this.materialData);
        };
        Object.defineProperty(ColorMaterial.prototype, "color", {
            get: function () {
                return this.materialData.diffuseColor;
            },
            set: function (value) {
                this.materialData.diffuseColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorMaterial.prototype, "alpha", {
            get: function () {
                return this.materialData.alpha;
            },
            set: function (value) {
                this.materialData.alpha = value;
            },
            enumerable: true,
            configurable: true
        });
        return ColorMaterial;
    }(egret3d.MaterialBase));
    egret3d.ColorMaterial = ColorMaterial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.TextureMaterial
    * @classdesc
    * 纹理材质。
    * 标准的贴图材质球，可以设置三种贴图， diffuse ， normal ， speclar 贴图
    * 材质球中默认不设置纹理，显示的黑白棋盘格
    * @version Egret 3.0
    * @platform Web,Native
    */
    var TextureMaterial = (function (_super) {
        __extends(TextureMaterial, _super);
        /**
         * @language zh_CN
         * 创建一个新的 TextureMaterial 对象。
         * @param texture 用来渲染的贴图，默认会给出一张棋盘格贴图
         * @param materialData 材质数据信息，可以不指定
         * @version Egret 3.0
         * @platform Web,Native
         */
        function TextureMaterial(texture, materialData) {
            if (texture === void 0) { texture = null; }
            if (materialData === void 0) { materialData = null; }
            _super.call(this, materialData);
            if (!texture) {
                this.diffuseTexture = egret3d.CheckerboardTexture.texture;
            }
            else {
                this.diffuseTexture = texture;
            }
            this.initMatPass();
        }
        TextureMaterial.prototype.initMatPass = function () {
            this.diffusePass = new egret3d.DiffusePass(this.materialData);
        };
        /**
         * @language zh_CN
         * 克隆方法。
         * 将材质球克隆一份，公用shader着色器和贴图，不公用参数
         * @returns {TextureMaterial}
         * @version Egret 3.0
         * @platform Web,Native
         */
        TextureMaterial.prototype.clone = function () {
            var mat = new TextureMaterial(this.diffuseTexture, this.materialData.clone());
            return mat;
        };
        return TextureMaterial;
    }(egret3d.MaterialBase));
    egret3d.TextureMaterial = TextureMaterial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.CubeTextureMaterial
    * @classdesc
    * cube纹理材质。
    * 6张无缝连接的贴图，使一个cube的6个面贴上不同的贴图。
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    var CubeTextureMaterial = (function (_super) {
        __extends(CubeTextureMaterial, _super);
        /**
         * @language zh_CN
         * 创建一个新的 CubeTextureMaterial 对象。
         * @param texture {CubeTexture}
         * @param materialData {MaterialData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        function CubeTextureMaterial(texture, materialData) {
            if (texture === void 0) { texture = null; }
            if (materialData === void 0) { materialData = null; }
            _super.call(this, materialData);
            this.diffuseTexture = texture;
            this.initMatPass();
        }
        CubeTextureMaterial.prototype.initMatPass = function () {
            this.diffusePass = new egret3d.CubePass(this.materialData);
        };
        /**
         * @language zh_CN
         * 克隆方法。
         * 将材质球克隆一份，公用shader着色器和贴图，不公用参数
         * @returns {TextureMaterial}
         * @version Egret 3.0
         * @platform Web,Native
         */
        CubeTextureMaterial.prototype.clone = function () {
            var mat = new CubeTextureMaterial(this.diffuseTexture, this.materialData.clone());
            return mat;
        };
        return CubeTextureMaterial;
    }(egret3d.MaterialBase));
    egret3d.CubeTextureMaterial = CubeTextureMaterial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.RenderBase
    * @classdesc
    * 渲染器基类
    */
    var RenderBase = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function RenderBase() {
            ///protected _context3D: Context3D;
            this._renderIndex = 0;
            this._numEntity = 0;
            ///this.camera3D = camera3D;
        }
        /**
        * @language zh_CN
        * 每帧渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        RenderBase.prototype.draw = function (time, delay, context3D, collect, camera) {
        };
        return RenderBase;
    }());
    egret3d.RenderBase = RenderBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.SphereSky
    * @classdesc
    * default render
    * 把所有需要渲染的对象，依次进行渲染
    * @version Egret 3.0
    * @platform Web,Native
    */
    var DefaultRender = (function (_super) {
        __extends(DefaultRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function DefaultRender() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 把所有需要渲染的对象，依次进行渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        DefaultRender.prototype.draw = function (time, delay, context3D, collect, camera) {
            this._numEntity = collect.renderList.length;
            for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                this._renderItem = collect.renderList[this._renderIndex];
                this._renderItem.update(time, delay, camera);
                //if (collect.renderList[this._renderIndex].tag && collect.renderList[this._renderIndex].tag.clearDepth && collect.renderList[this._renderIndex].tag.cleanState) {
                //    collect.renderList[this._renderIndex].tag.cleanState = false;
                //    context3D.clearDepth(1);
                //}
                this._renderItem.renderDiffusePass(time, delay, context3D, camera);
            }
        };
        return DefaultRender;
    }(egret3d.RenderBase));
    egret3d.DefaultRender = DefaultRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var Scene3D = (function () {
        function Scene3D() {
            this._root = new egret3d.Object3D();
            this._tree = new egret3d.TreeBase(this._root);
        }
        Object.defineProperty(Scene3D.prototype, "root", {
            /**
            * @language zh_CN
            * 返回渲染根节点
            * 返回渲染场景的 scene3D
            * @returns Object3D
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._root;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 将一个 Object3D 实例添加到 Scene3D 实例中。
        * 将一个 Object3D 实例添加到 Scene3D 实例中。参与scene3D中的显示树优化，并且即时渲染出来
        * @param  child3D {Object3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        Scene3D.prototype.addChild3D = function (child3D) {
            this._root.addChild(child3D);
            // to do add renderlist tree
        };
        Scene3D.prototype.removeChild3D = function (child3D) {
            this._root.removeChild(child3D);
            // to do add renderlist tree
        };
        Scene3D.prototype.update = function () {
        };
        Scene3D.prototype.infrustumList = function (camera) {
            return this._tree.infrustumList(camera);
        };
        return Scene3D;
    }());
    egret3d.Scene3D = Scene3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.TreeBase
    * @classdesc
    * @version Egret 3.0
    * @platform Web,Native
    */
    var TreeBase = (function () {
        function TreeBase(object3D) {
            this._searchList = new Array();
            this._root = object3D;
        }
        TreeBase.prototype.infrustumList = function (camera) {
            this._searchList.length = 0;
            return this._searchList;
        };
        return TreeBase;
    }());
    egret3d.TreeBase = TreeBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @private
    * @class egret3d.ShaderBase
    * @classdesc
    * shader 基类
    */
    var ShaderBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param materialData
        * @param usage
        */
        function ShaderBase() {
            this.index = 0;
            this.shadersName = new Array();
            this.endShadername = "";
            this.stateChange = false;
            /**
            * @language zh_CN
            *
            */
            this.maxBone = 0;
            this.shaderType = -1;
        }
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        ShaderBase.prototype.addUseShaderName = function (shaderName) {
            this.shadersName.push(shaderName);
        };
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        ShaderBase.prototype.addEndShaderName = function (shaderName) {
            this.endShadername = shaderName;
        };
        /**
        * @language zh_CN
        *
        * @returns string
        */
        ShaderBase.prototype.getShader = function (passUsage) {
            if (this.endShadername != "") {
                var index = this.shadersName.indexOf(this.endShadername);
                if (index == -1) {
                    this.shadersName.push(this.endShadername);
                }
            }
            return egret3d.ShaderUtil.instance.fillShaderContent(this, this.shadersName, passUsage);
        };
        return ShaderBase;
    }());
    egret3d.ShaderBase = ShaderBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.VarRegister
        * @classdesc
        * shader 变量 基类
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var VarRegister = (function () {
            function VarRegister() {
                /**
                * @language zh_CN
                * 值名字
                */
                this.varName = ""; /// a
                /**
                * @language zh_CN
                * 变量名
                */
                this.name = ""; /// a[0]
                /**
                * @language zh_CN
                * 变量属性类型
                */
                this.key = ""; /// att varying uniform
                /**
                * @language zh_CN
                * 变量类型
                */
                this.valueType = ""; /// float vec2 vec3 vec4 int int2 int3 int4
                /**
                * @language zh_CN
                * 变量值
                */
                this.value = ""; /// var value
                /**
                * @language zh_CN
                * active Texture Index
                */
                this.activeTextureIndex = -1;
                /**
                * @language zh_CN
                * index
                */
                this.index = -1;
                /**
                * @language zh_CN
                * level
                */
                this.level = "";
                this.size = 0;
                this.dataType = 0;
                this.normalized = false;
                this.stride = 0;
                this.offset = 0;
            }
            /**
            * @language zh_CN
            * 得到组合后的字符串
            * @param compoments
            */
            VarRegister.prototype.var = function (compoments) {
                return this.level + " " + this.valueType + " " + name + "." + compoments;
            };
            /**
            * @language zh_CN
            *
            * @param compoments
            */
            VarRegister.prototype.use = function (compoments) {
                if (compoments === void 0) { compoments = ""; }
                if (compoments != "")
                    return this.name + "." + compoments;
                return this.name;
            };
            /**
            * @language zh_CN
            *
            * @returns VarRegister
            */
            VarRegister.prototype.clone = function () {
                var temp = new VarRegister();
                temp.name = this.name;
                temp.valueType = this.valueType;
                temp.level = this.level;
                temp.varName = this.varName;
                temp.value = this.value;
                return temp;
            };
            VarRegister.prototype.computeVarName = function () {
                var index = this.name.indexOf("[");
                if (index >= 0) {
                    this.varName = this.name.substr(0, index);
                }
                else {
                    this.varName = this.name;
                }
            };
            return VarRegister;
        }());
        GLSL.VarRegister = VarRegister;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.Attribute
        * @classdesc
        * 变量属性
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Attribute = (function (_super) {
            __extends(Attribute, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function Attribute(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "attribute";
                this.valueType = valueType;
            }
            return Attribute;
        }(GLSL.VarRegister));
        GLSL.Attribute = Attribute;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.AttributeType
        * @classdesc
        *
        * shader中的变量属性类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        var AttributeType = (function () {
            function AttributeType() {
            }
            /**
            * shader int类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.int = "int";
            /**
            * shader float类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.float = "float";
            /**
            * shader vec2类型 两个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.vec2 = "vec2";
            /**
            * shader vec3类型 三个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.vec3 = "vec3";
            /**
            * shader vec4类型 四个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.vec4 = "vec4";
            /**
            * shader 2x2 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.mat2 = "mat2";
            /**
            * shader 3x3 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.mat3 = "mat3";
            /**
            * shader 4x4 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            AttributeType.mat4 = "mat4";
            return AttributeType;
        }());
        GLSL.AttributeType = AttributeType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.ConstVar
        * @classdesc
        * shader中常量类型变量的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var ConstVar = (function (_super) {
            __extends(ConstVar, _super);
            /**
            * @language zh_CN
            * 构造
            * @param name 常量名
            * @param valueType 常量类型
            * @param value 常量的值
            */
            function ConstVar(name, valueType, value) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "const";
                this.valueType = valueType;
                this.value = value;
            }
            return ConstVar;
        }(GLSL.VarRegister));
        GLSL.ConstVar = ConstVar;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.Sampler2D
        * @classdesc
        *
        * shader中sampler2D类型变量的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Sampler2D = (function (_super) {
            __extends(Sampler2D, _super);
            /**
            * @language zh_CN
            * 构造
            * @param name 变量名
            */
            function Sampler2D(name) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "sampler2D";
                ///this.valueType = valueType;
            }
            return Sampler2D;
        }(GLSL.VarRegister));
        GLSL.Sampler2D = Sampler2D;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @private
        * @class egret3d.Sampler3D
        * @classdesc
        *
        * shader中samplerCube类型变量的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Sampler3D = (function (_super) {
            __extends(Sampler3D, _super);
            /**
            * @language zh_CN
            * 构造
            * @param name 变量名
            */
            function Sampler3D(name) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "samplerCube";
            }
            return Sampler3D;
        }(GLSL.VarRegister));
        GLSL.Sampler3D = Sampler3D;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.TmpVar
        * @classdesc
        *
        * shader中临时变量类型的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var TmpVar = (function (_super) {
            __extends(TmpVar, _super);
            /**
            * @language zh_CN
            * 构造
            * @param name 变量名
            * @param valueType 变量类型
            */
            function TmpVar(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "";
                this.valueType = valueType;
            }
            return TmpVar;
        }(GLSL.VarRegister));
        GLSL.TmpVar = TmpVar;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.Uniform
        * @classdesc
        *
        * shader中uniform类型的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Uniform = (function (_super) {
            __extends(Uniform, _super);
            /**
            * @language zh_CN
            * 创建一个Uniform对象
            * @param name 变量名
            * @param valueType 变量类型
            */
            function Uniform(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "uniform";
                this.valueType = valueType;
            }
            return Uniform;
        }(GLSL.VarRegister));
        GLSL.Uniform = Uniform;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.UniformType
        * @classdesc
        * shader Uniform 变量的类型
        */
        var UniformType = (function () {
            function UniformType() {
            }
            /**
            * shader bool类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.bool = "bool";
            /**
            * shader int类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.int = "int";
            /**
            * shader float类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.float = "float";
            /**
            * shader vec2类型 两个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.vec2 = "vec2";
            /**
            * shader vec3类型 三个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.vec3 = "vec3";
            /**
            * shader vec4类型 四个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.vec4 = "vec4";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.bvec2 = "bvec2";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.bvec3 = "bvec3";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.bvec4 = "bvec4";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.ivec2 = "ivec2";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.ivec3 = "ivec3";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.ivec4 = "ivec4";
            /**
            * shader 2x2 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.mat2 = "mat2";
            /**
            * shader 3x3 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.mat3 = "mat3";
            /**
            * shader 4x4 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.mat4 = "mat4";
            /**
            * shader 贴图对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.sampler2D = "sampler2D";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            UniformType.sampleCube = "sampleCube";
            return UniformType;
        }());
        GLSL.UniformType = UniformType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.VarConstName
        * @classdesc
        * shader 变量 名字定义
        * 用户在写自定义shader时，按照引擎中已经列取出来的变量名进行命名
        */
        var VarConstName = (function () {
            function VarConstName() {
            }
            VarConstName.attribute_position = "attribute_position";
            VarConstName.attribute_normal = "attribute_normal";
            VarConstName.attribute_tangent = "attribute_tangent";
            VarConstName.attribute_vertexColor = "attribute_vertexColor";
            VarConstName.attribute_uv0 = "attribute_uv0";
            VarConstName.attribute_uv1 = "attribute_uv1";
            VarConstName.varying_pos = "varying_pos";
            VarConstName.varying_normal = "varying_normal";
            VarConstName.varying_tangent = "varying_tangent";
            VarConstName.varying_color = "varying_color";
            VarConstName.varying_uv0 = "varying_uv0";
            VarConstName.varying_uv1 = "varying_uv1";
            VarConstName.varying_globalPos = "varying_globalPos";
            VarConstName.varying_lightDir = "varying_lightDir";
            VarConstName.varying_eye = "varying_eye";
            VarConstName.uniform_floatv_0 = "uniform_floatv_0";
            VarConstName.uniform_floatv_1 = "uniform_floatv_1";
            VarConstName.uniform_floatv_2 = "uniform_floatv_2";
            VarConstName.uniform_iv_0 = "uniform_iv_0";
            VarConstName.uniform_iv_1 = "uniform_iv_1";
            VarConstName.uniform_iv_2 = "uniform_iv_2";
            VarConstName.uniform_bv_0 = "uniform_bv_0";
            VarConstName.uniform_bv_1 = "uniform_bv_1";
            VarConstName.uniform_bv_2 = "uniform_bv_2";
            VarConstName.uniform_vec2fv_0 = "uniform_vec2fv_0";
            VarConstName.uniform_vec2fv_1 = "uniform_vec2fv_1";
            VarConstName.uniform_vec2fv_2 = "uniform_vec2fv_2";
            VarConstName.uniform_vec3fv_0 = "uniform_vec3fv_0";
            VarConstName.uniform_vec3fv_1 = "uniform_vec3fv_1";
            VarConstName.uniform_vec3fv_2 = "uniform_vec3fv_2";
            VarConstName.uniform_vec4fv_0 = "uniform_vec4fv_0";
            VarConstName.uniform_vec4fv_1 = "uniform_vec4fv_1";
            VarConstName.uniform_vec4fv_2 = "uniform_vec4fv_2";
            VarConstName.uniform_vec2iv_0 = "uniform_vec2iv_0";
            VarConstName.uniform_vec2iv_1 = "uniform_vec2iv_1";
            VarConstName.uniform_vec2iv_2 = "uniform_vec2iv_2";
            VarConstName.uniform_vec3iv_0 = "uniform_vec3iv_0";
            VarConstName.uniform_vec3iv_1 = "uniform_vec3iv_1";
            VarConstName.uniform_vec3iv_2 = "uniform_vec3iv_2";
            VarConstName.uniform_vec4iv_0 = "uniform_vec4iv_0";
            VarConstName.uniform_vec4iv_1 = "uniform_vec4iv_1";
            VarConstName.uniform_vec4iv_2 = "uniform_vec4iv_2";
            VarConstName.uniform_vec2bv_0 = "uniform_vec2bv_0";
            VarConstName.uniform_vec2bv_1 = "uniform_vec2bv_1";
            VarConstName.uniform_vec2bv_2 = "uniform_vec2bv_2";
            VarConstName.uniform_vec3bv_0 = "uniform_vec3bv_0";
            VarConstName.uniform_vec3bv_1 = "uniform_vec3bv_1";
            VarConstName.uniform_vec3bv_2 = "uniform_vec3bv_2";
            VarConstName.uniform_vec4bv_0 = "uniform_vec4bv_0";
            VarConstName.uniform_vec4bv_1 = "uniform_vec4bv_1";
            VarConstName.uniform_vec4bv_2 = "uniform_vec4bv_2";
            VarConstName.uniform_modelMatrix = "uniform_modelMatrix";
            VarConstName.uniform_projectionMatrix = "uniform_projectionMatrix";
            VarConstName.uniform_normalMatrix = "uniform_normalMatrix";
            VarConstName.uniform_eye = "uniform_eye";
            VarConstName.uniform_lightDir = "uniform_lightDir";
            VarConstName.texture2D_0 = "texture2D_0";
            VarConstName.texture2D_1 = "texture2D_1";
            VarConstName.texture2D_2 = "texture2D_2";
            VarConstName.texture2D_3 = "texture2D_3";
            VarConstName.texture2D_4 = "texture2D_4";
            return VarConstName;
        }());
        GLSL.VarConstName = VarConstName;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.Varying
        * @classdesc
        *
        * shader中varying类型的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Varying = (function (_super) {
            __extends(Varying, _super);
            /**
            * @language zh_CN
            * 构造函数
            * @param name 变量名
            * @param valueType 变量类型
            */
            function Varying(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "varying";
                this.valueType = valueType;
            }
            return Varying;
        }(GLSL.VarRegister));
        GLSL.Varying = Varying;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.Extension
        * @classdesc
        * 变量属性
        * @version Egret 3.0
        * @platform Web,Native
        */
        var Extension = (function (_super) {
            __extends(Extension, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function Extension(name) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "#extension";
            }
            return Extension;
        }(GLSL.VarRegister));
        GLSL.Extension = Extension;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.VaryingType
        * @classdesc
        * shader中varying 变量 类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        var VaryingType = (function () {
            function VaryingType() {
            }
            /**
            * shader bool类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.bool = "bool";
            /**
            * shader int类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.int = "int";
            /**
            * shader float类型
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.float = "float";
            /**
            * shader vec2类型 两个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.vec2 = "vec2";
            /**
            * shader vec3类型 三个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.vec3 = "vec3";
            /**
            * shader vec4类型 四个 float 组成
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.vec4 = "vec4";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.bvec2 = "bvec2";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.bvec3 = "bvec3";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.bvec4 = "bvec4";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.ivec2 = "ivec2";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.ivec3 = "ivec3";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.ivec4 = "ivec4";
            /**
            * shader 2x2 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.mat2 = "mat2";
            /**
            * shader 3x3 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.mat3 = "mat3";
            /**
            * shader 4x4 矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.mat4 = "mat4";
            /**
            * shader 贴图对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.sampler2D = "sampler2D";
            /**
            * @private
            * @version Egret 3.0
            * @platform Web,Native
            */
            VaryingType.sampleCube = "sampleCube";
            return VaryingType;
        }());
        GLSL.VaryingType = VaryingType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.VertexShader
    * @classdesc
    * 顶点着色器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var FragmentShader = (function (_super) {
        __extends(FragmentShader, _super);
        /**
        * @language zh_CN
        * 创建一个新的 VertexShader 对象。
        * @param materialData {MaterialData}
        * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        function FragmentShader(materialData, usage) {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 设置顶点着色器。
        * @param geometry {GeometryBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        FragmentShader.prototype.setVertexShader = function () {
        };
        /**
        * @language zh_CN
        * 返回 Shader 源。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        FragmentShader.prototype.getShaderSource = function () {
            //var shaderSource: string = super.getShaderSource();
            //var index: number = shaderSource.lastIndexOf("}");
            //var endS: string = shaderSource.substr(index, shaderSource.length - index);
            //shaderSource = shaderSource.substr(0, index);
            //shaderSource += "   gl_Position = temp_p; \r\n";
            //shaderSource += endS;
            return "";
        };
        /**
        * @language zh_CN
        * 构建 VertexShader。
        * @version Egret 3.0
        * @platform Web,Native
        */
        FragmentShader.prototype.build = function () {
        };
        /**
        * @language zh_CN
        * 添加 Method。
        * @version Egret 3.0
        * @platform Web,Native
        * @param method {MethodBase}
        */
        FragmentShader.prototype.addMethod = function (method) {
        };
        return FragmentShader;
    }(egret3d.ShaderBase));
    egret3d.FragmentShader = FragmentShader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var ShaderLib = (function () {
        function ShaderLib() {
        }
        ShaderLib.lib = {
            "base_fs": "#extension GL_OES_standard_derivatives : enable \n" +
                "varying vec3 varying_eyeNormal  ; \n" +
                "varying vec2 varying_uv0; \n" +
                "varying vec3 varying_ViewPose; \n" +
                "varying vec4 varying_color; \n" +
                "uniform vec3 uniform_eyepos ; \n" +
                "uniform mat4 uniform_ModelViewMatrix ; \n" +
                "vec4 outColor; \n" +
                "vec4 diffuseColor ; \n" +
                "vec4 specularColor ; \n" +
                "vec4 ambientColor; \n" +
                "vec4 light ; \n" +
                "vec3 normal; \n" +
                "vec2 uv_0; \n" +
                "vec3 flatNormals(vec3 pos) { \n" +
                "vec3 fdx = dFdx(pos); \n" +
                "vec3 fdy = dFdy(pos); \n" +
                "return normalize(cross(fdx, fdy)); \n" +
                "} \n" +
                "void main() { \n" +
                "diffuseColor  = vec4(1.0,1.0,1.0,1.0); \n" +
                "specularColor = vec4(0.0,0.0,0.0,0.0); \n" +
                "ambientColor  = vec4(1.0,1.0,1.0,1.0); \n" +
                "light         = vec4(0.0,0.0,0.0,0.0); \n" +
                "normal = normalize(varying_eyeNormal) ; \n" +
                "uv_0 = varying_uv0; \n" +
                "} \n",
            "base_vs": "attribute vec3 attribute_position ; \n" +
                "attribute vec3 attribute_normal ; \n" +
                "attribute vec2 attribute_uv0 ; \n" +
                "attribute vec4 attribute_color ; \n" +
                "uniform mat4 uniform_ModelMatrix ; \n" +
                "uniform mat4 uniform_ModelViewMatrix ; \n" +
                "uniform mat4 uniform_ProjectionMatrix ; \n" +
                "varying vec3 varying_ViewPose; \n" +
                "varying vec3 varying_eyeNormal  ; \n" +
                "varying vec2 varying_uv0; \n" +
                "varying vec4 varying_color; \n" +
                "vec4 outPosition ; \n" +
                "mat3 transpose(mat3 m) { \n" +
                "return mat3(m[0][0], m[1][0], m[2][0], \n" +
                "m[0][1], m[1][1], m[2][1], \n" +
                "m[0][2], m[1][2], m[2][2]); \n" +
                "} \n" +
                "mat3 inverse(mat3 m) { \n" +
                "float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2]; \n" +
                "float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2]; \n" +
                "float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2]; \n" +
                "float b01 = a22 * a11 - a12 * a21; \n" +
                "float b11 = -a22 * a10 + a12 * a20; \n" +
                "float b21 = a21 * a10 - a11 * a20; \n" +
                "float det = a00 * b01 + a01 * b11 + a02 * b21; \n" +
                "return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11), \n" +
                "b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10), \n" +
                "b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det; \n" +
                "} \n" +
                "void main(void){ \n" +
                "varying_color = attribute_color; \n" +
                "varying_uv0 = attribute_uv0; \n" +
                "} \n",
            "cube_fragment": "uniform samplerCube diffuseTexture ; \n" +
                "varying vec3 varying_pos; \n" +
                "void main(void){ \n" +
                "vec3 uvw = normalize(varying_pos.xyz); \n" +
                "vec4 ref = vec4(textureCube(diffuseTexture, uvw.xyz)); \n" +
                "gl_FragColor = ref ; \n" +
                "} \n",
            "cube_vertex": "attribute vec3 attribute_position; \n" +
                "uniform mat4 uniform_ModelMatrix; \n" +
                "uniform mat4 uniform_ModelViewMatrix; \n" +
                "uniform mat4 uniform_ProjectionMatrix; \n" +
                "varying vec3 varying_pos; \n" +
                "void main(void){ \n" +
                "varying_pos =  attribute_position; \n" +
                "gl_Position = uniform_ProjectionMatrix * uniform_ModelViewMatrix * vec4(attribute_position, 1.0) ; \n" +
                "} \n",
            "diffuse_fragment": "uniform sampler2D diffuseTexture; \n" +
                "vec4 diffuseColor ; \n" +
                "void main() { \n" +
                "diffuseColor = textureLinear(diffuseTexture , uv_0 ); \n" +
                "} \n",
            "diffuse_vertex": "void main(void){ \n" +
                "mat3 normalMatrix = transpose( inverse(mat3(uniform_ModelViewMatrix )) ); \n" +
                "varying_eyeNormal = normalize(normalMatrix * -attribute_normal); \n" +
                "outPosition = uniform_ModelViewMatrix * vec4(attribute_position, 1.0) ; \n" +
                "varying_ViewPose = outPosition.xyz / outPosition.w; \n" +
                "} \n",
            "directLight_fragment": "const int max_directLight = 0 ; \n" +
                "uniform float uniform_directLightSource[11*max_directLight] ; \n" +
                "struct DirectLight{ \n" +
                "vec3 direction; \n" +
                "vec3 diffuse; \n" +
                "vec3 ambient; \n" +
                "float intensity; \n" +
                "float halfIntensity; \n" +
                "}; \n" +
                "void calculateDirectLight( MaterialSource materialSource ){ \n" +
                "float lambertian , specular ; \n" +
                "vec3 N = normal; \n" +
                "for(int i = 0 ; i < max_directLight ; i++){ \n" +
                "DirectLight directLight ; \n" +
                "directLight.direction = vec3(uniform_directLightSource[i*10+0],uniform_directLightSource[i*10+1],uniform_directLightSource[i*10+2]); \n" +
                "directLight.diffuse = vec3(uniform_directLightSource[i*10+3],uniform_directLightSource[i*10+4],uniform_directLightSource[i*10+5]); \n" +
                "directLight.ambient = vec3(uniform_directLightSource[i*10+6],uniform_directLightSource[i*10+7],uniform_directLightSource[i*10+8]); \n" +
                "directLight.intensity = uniform_directLightSource[i*10+9]; \n" +
                "directLight.halfIntensity = uniform_directLightSource[i*10+10]; \n" +
                "ambientColor.xyz *= directLight.ambient.xyz ; \n" +
                "vec3 lightDir = mat3(uniform_ModelViewMatrix)*normalize(-directLight.direction); \n" +
                "lambertian = max(dot(lightDir,N), 0.0); \n" +
                "specular = 0.0; \n" +
                "vec3 viewDir = normalize(varying_ViewPose); \n" +
                "vec3 halfDir = normalize(lightDir + viewDir); \n" +
                "float specAngle = max(dot(halfDir, N), 0.0); \n" +
                "specular = pow(specAngle, materialSource.shininess ); \n" +
                "light.xyz += directLight.diffuse * lambertian * directLight.intensity ; \n" +
                "specularColor.xyz += materialSource.specular * specular ; \n" +
                "} \n" +
                "} \n" +
                "void main() { \n" +
                "calculateDirectLight( materialSource ); \n" +
                "} \n",
            "end_fs": "vec4 diffuseColor ; \n" +
                "vec4 specularColor ; \n" +
                "vec4 ambientColor; \n" +
                "vec4 light ; \n" +
                "void main() { \n" +
                "diffuseColor.xyz = materialSource.diffuse.xyz * diffuseColor.xyz ; \n" +
                "outColor.xyz = (ambientColor.xyz + light.xyz) * diffuseColor.xyz + specularColor.xyz * materialSource.specularScale; \n" +
                "outColor.w = materialSource.alpha * diffuseColor.w ; \n" +
                "gl_FragColor = outColor * varying_color ; \n" +
                "} \n",
            "end_vs": "vec4 endPosition ; \n" +
                "void main() { \n" +
                "gl_PointSize = 50.0; \n" +
                "gl_Position = uniform_ProjectionMatrix * outPosition ; \n" +
                "} \n" +
                "                       \n",
            "flatNormal_fs": "#extension GL_OES_standard_derivatives : enable \n" +
                "vec3 flatNormal(vec3 pos){ \n" +
                "vec3 fdx = dFdx(pos); \n" +
                "vec3 fdy = dFdy(pos); \n" +
                "return normalize(cross(fdx, fdy)); \n" +
                "} \n",
            "gamma_fs": "const float gamma = 2.2; \n" +
                "float toLinear_float_v1(float v) { \n" +
                "return pow(v, gamma); \n" +
                "} \n" +
                "vec2 toLinear_vec2_v1(vec2 v) { \n" +
                "return pow(v, vec2(gamma)); \n" +
                "} \n" +
                "vec3 toLinear_vec3_v1(vec3 v) { \n" +
                "return pow(v, vec3(gamma)); \n" +
                "} \n" +
                "vec4 toLinear_vec4_v1(vec4 v) { \n" +
                "return vec4(toLinear_vec3_v1(v.rgb), v.a); \n" +
                "} \n" +
                "float toGamma_float_v2(float v) { \n" +
                "return pow(v, 1.0 / gamma); \n" +
                "} \n" +
                "vec2 toGamma_vec2_v2(vec2 v) { \n" +
                "return pow(v, vec2(1.0 / gamma)); \n" +
                "} \n" +
                "vec3 toGamma_vec3_v2(vec3 v) { \n" +
                "return pow(v, vec3(1.0 / gamma)); \n" +
                "} \n" +
                "vec4 toGamma_vec4_v2(vec4 v) { \n" +
                "return vec4(toGamma_vec3_v2(v.rgb), v.a); \n" +
                "} \n" +
                "vec4 textureLinear(sampler2D uTex, vec2 uv) { \n" +
                "return toLinear_vec4_v1(texture2D(uTex, uv)); \n" +
                "} \n",
            "lightingBase_fs": "float phongSpecular(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,float shininess) { \n" +
                "vec3 R = -reflect(lightDirection, surfaceNormal); \n" +
                "return pow(max(0.0, dot(viewDirection, R)), shininess); \n" +
                "} \n" +
                "float orenNayarDiffuse( \n" +
                "vec3 lightDirection, \n" +
                "vec3 viewDirection, \n" +
                "vec3 surfaceNormal, \n" +
                "float roughness, \n" +
                "float albedo) { \n" +
                "float LdotV = dot(lightDirection, viewDirection); \n" +
                "float NdotL = dot(lightDirection, surfaceNormal); \n" +
                "float NdotV = dot(surfaceNormal, viewDirection); \n" +
                "float s = LdotV - NdotL * NdotV; \n" +
                "float t = mix(1.0, max(NdotL, NdotV), step(0.0, s)); \n" +
                "float sigma2 = roughness * roughness; \n" +
                "float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33)); \n" +
                "float B = 0.45 * sigma2 / (sigma2 + 0.09); \n" +
                "return albedo * max(0.0, NdotL) * (A + B * s / t) / 3.14159265; \n" +
                "} \n" +
                "float attenuation(float r, float f, float d) { \n" +
                "float denom = d / r + 1.0; \n" +
                "float attenuation = 1.0 / (denom*denom); \n" +
                "float t = (attenuation - f) / (1.0 - f); \n" +
                "return max(t, 0.0); \n" +
                "} \n",
            "materialSource_fs": "struct MaterialSource{ \n" +
                "vec3 diffuse; \n" +
                "vec3 ambient; \n" +
                "vec3 specular; \n" +
                "float alpha; \n" +
                "float cutAlpha; \n" +
                "float shininess; \n" +
                "float roughness; \n" +
                "float albedo; \n" +
                "vec4 uvRectangle; \n" +
                "float specularScale; \n" +
                "float normalScale; \n" +
                "}; \n" +
                "uniform float uniform_materialSource[20] ; \n" +
                "MaterialSource materialSource ; \n" +
                "void main(){ \n" +
                "materialSource.diffuse.x = uniform_materialSource[0]; \n" +
                "materialSource.diffuse.y = uniform_materialSource[1]; \n" +
                "materialSource.diffuse.z = uniform_materialSource[2]; \n" +
                "materialSource.ambient.x = uniform_materialSource[3]; \n" +
                "materialSource.ambient.y = uniform_materialSource[4]; \n" +
                "materialSource.ambient.z = uniform_materialSource[5]; \n" +
                "materialSource.specular.x = uniform_materialSource[6]; \n" +
                "materialSource.specular.y = uniform_materialSource[7]; \n" +
                "materialSource.specular.z = uniform_materialSource[8]; \n" +
                "materialSource.alpha = uniform_materialSource[9]; \n" +
                "materialSource.cutAlpha = uniform_materialSource[10]; \n" +
                "materialSource.shininess = uniform_materialSource[11]; \n" +
                "materialSource.roughness = uniform_materialSource[12]; \n" +
                "materialSource.albedo = uniform_materialSource[13]; \n" +
                "materialSource.uvRectangle.x = uniform_materialSource[14]; \n" +
                "materialSource.uvRectangle.y = uniform_materialSource[15]; \n" +
                "materialSource.uvRectangle.z = uniform_materialSource[16]; \n" +
                "materialSource.uvRectangle.w = uniform_materialSource[17]; \n" +
                "materialSource.specularScale = uniform_materialSource[18]; \n" +
                "materialSource.normalScale = uniform_materialSource[19]; \n" +
                "uv_0 = varying_uv0.xy * materialSource.uvRectangle.zw + materialSource.uvRectangle.xy ; \n" +
                "} \n",
            "normalMap_fragment": "uniform sampler2D normalTexture; \n" +
                "varying vec2 varying_uv0        ; \n" +
                "mat3 TBN ; \n" +
                "mat3 cotangentFrame(vec3 N, vec3 p, vec2 uv) { \n" +
                "vec3 dp1 = dFdx(p); \n" +
                "vec3 dp2 = dFdy(p); \n" +
                "vec2 duv1 = dFdx(uv); \n" +
                "vec2 duv2 = dFdy(uv); \n" +
                "vec3 dp2perp = cross(dp2, N); \n" +
                "vec3 dp1perp = cross(N, dp1); \n" +
                "vec3 T = dp2perp * duv1.x + dp1perp * duv2.x; \n" +
                "vec3 B = dp2perp * duv1.y + dp1perp * duv2.y; \n" +
                "float invmax = 1.0 / sqrt(max(dot(T,T), dot(B,B))); \n" +
                "return mat3(T * invmax, B * invmax, N); \n" +
                "} \n" +
                "vec3 tbn(vec3 map, vec3 N, vec3 V, vec2 texcoord) { \n" +
                "mat3 TBN = cotangentFrame(N, -V, texcoord); \n" +
                "return normalize(TBN * map); \n" +
                "} \n" +
                "void main(){ \n" +
                "vec3 normalTex = texture2D(normalTexture,uv_0).xyz *2.0 - 1.0; \n" +
                "normalTex.y *= -1.0; \n" +
                "normal.xyz = tbn( normalTex.xyz , normal.xyz , normalize(varying_ViewPose.xyz) , uv_0 ) ; \n" +
                "} \n",
            "pointLight_fragment": "const int max_pointLight = 0 ; \n" +
                "uniform float uniform_pointLightSource[12*max_pointLight] ; \n" +
                "struct PointLight{ \n" +
                "vec3 position ; \n" +
                "vec3 diffuse ; \n" +
                "vec3 ambient ; \n" +
                "float intensity; \n" +
                "float radius; \n" +
                "float falloff; \n" +
                "}; \n" +
                "void calculatePointLight(MaterialSource materialSource){ \n" +
                "vec3 N = normal; \n" +
                "for(int i = 0 ; i < max_pointLight ; i++){ \n" +
                "PointLight pointLight; \n" +
                "pointLight.position = vec3(uniform_pointLightSource[i*12],uniform_pointLightSource[i*12+1],uniform_pointLightSource[i*12+2]); \n" +
                "pointLight.diffuse = vec3(uniform_pointLightSource[i*12+3],uniform_pointLightSource[i*12+4],uniform_pointLightSource[i*12+5]); \n" +
                "pointLight.ambient = vec3(uniform_pointLightSource[i*12+6],uniform_pointLightSource[i*12+7],uniform_pointLightSource[i*12+8]); \n" +
                "pointLight.intensity = uniform_pointLightSource[i*12+9]; \n" +
                "pointLight.radius = uniform_pointLightSource[i*12+10]; \n" +
                "pointLight.falloff = uniform_pointLightSource[i*12+11]; \n" +
                "ambientColor.xyz *= pointLight.diffuse.xyz * pointLight.ambient ; \n" +
                "vec4 lightVirePos = uniform_ModelViewMatrix * vec4(pointLight.position.xyz,1.0) ; \n" +
                "vec3 lightDir = varying_ViewPose.xyz - (lightVirePos.xyz/lightVirePos.w) ; \n" +
                "lightDir = normalize(lightDir); \n" +
                "float distance = length( lightDir ); \n" +
                "float lambertTerm = pointLight.intensity / ( distance * distance )  ; \n" +
                "float NdotL = dot( N, lightDir ); \n" +
                "NdotL = clamp( NdotL ,0.0,1.0 ); \n" +
                "light.xyz = pointLight.diffuse * NdotL * lambertTerm ; \n" +
                "vec3 viewDir = normalize(-varying_ViewPose); \n" +
                "vec3 H = normalize( lightDir + viewDir ); \n" +
                "float NdotH = dot( normal, H ); \n" +
                "lambertTerm = pow( clamp( NdotH ,0.0,materialSource.shininess), 1.0 ); \n" +
                "specularColor.xyz += lambertTerm * materialSource.specular * materialSource.specularScale ; \n" +
                "}; \n" +
                "} \n" +
                "void main() { \n" +
                "calculatePointLight(materialSource); \n" +
                "} \n",
            "skeleton_vertex": "attribute vec4 attribute_boneIndex ; \n" +
                "attribute vec4 attribute_boneWeight ; \n" +
                "const int bonesNumber = 0; \n" +
                "uniform vec4 uniform_PoseMatrix[bonesNumber]; \n" +
                "uniform mat4 uniform_ModelMatrix ; \n" +
                "mat4 buildMat4(int index){ \n" +
                "vec4 quat = uniform_PoseMatrix[index * 2 + 0]; \n" +
                "vec4 translation = uniform_PoseMatrix[index * 2 + 1]; \n" +
                "float xx = quat.x * quat.x; \n" +
                "float xy = quat.x * quat.y; \n" +
                "float xz = quat.x * quat.z; \n" +
                "float xw = quat.x * quat.w; \n" +
                "float yy = quat.y * quat.y; \n" +
                "float yz = quat.y * quat.z; \n" +
                "float yw = quat.y * quat.w; \n" +
                "float zz = quat.z * quat.z; \n" +
                "float zw = quat.z * quat.w; \n" +
                "return mat4( \n" +
                "1.0 - 2.0 * (yy + zz),		2.0 * (xy + zw),		2.0 * (xz - yw),		0, \n" +
                "2.0 * (xy - zw),				1.0 - 2.0 * (xx + zz),	2.0 * (yz + xw),		0, \n" +
                "2.0 * (xz + yw),				2.0 * (yz - xw),		1.0 - 2.0 * (xx + yy),	0, \n" +
                "translation.x,				translation.y,			translation.z,			1 \n" +
                "); \n" +
                "} \n" +
                "void main(void){ \n" +
                "vec4 temp_position = vec4(attribute_position, 1.0) ; \n" +
                "vec4 temp_normal = vec4(attribute_normal, 0.0) ; \n" +
                "mat4 m0 = buildMat4(int(attribute_boneIndex.x)); \n" +
                "mat4 m1 = buildMat4(int(attribute_boneIndex.y)); \n" +
                "mat4 m2 = buildMat4(int(attribute_boneIndex.z)); \n" +
                "mat4 m3 = buildMat4(int(attribute_boneIndex.w)); \n" +
                "outPosition = m0 * temp_position * attribute_boneWeight.x; \n" +
                "outPosition += m1 * temp_position * attribute_boneWeight.y; \n" +
                "outPosition += m2 * temp_position * attribute_boneWeight.z; \n" +
                "outPosition += m3 * temp_position * attribute_boneWeight.w; \n" +
                "vec4 temp_n ; \n" +
                "temp_n = m0 * temp_normal * attribute_boneWeight.x; \n" +
                "temp_n += m1 * temp_normal * attribute_boneWeight.y; \n" +
                "temp_n += m2 * temp_normal * attribute_boneWeight.z; \n" +
                "temp_n += m3 * temp_normal * attribute_boneWeight.w; \n" +
                "mat3 normalMatrix = transpose( inverse(mat3(uniform_ModelViewMatrix )) ); \n" +
                "varying_eyeNormal = normalize(normalMatrix * -temp_n.xyz); \n" +
                "outPosition =  uniform_ModelViewMatrix * outPosition ; \n" +
                "varying_ViewPose = outPosition.xyz / outPosition.w; \n" +
                "} \n",
            "specularMap_fragment": "uniform sampler2D specularTexture; \n" +
                "void main(void){ \n" +
                "specularColor.xyz *= texture2D( specularTexture , uv_0 ).xyz ; \n" +
                "} \n",
        };
        return ShaderLib;
    }());
    egret3d.ShaderLib = ShaderLib;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    */
    var ShaderPool = (function () {
        function ShaderPool() {
        }
        ShaderPool.register = function (context) {
            this.context = context;
        };
        ShaderPool.getGPUShader = function (shaderType, shaderID, source) {
            var shader;
            if (this.vsShaderHashMap.isHas(shaderID))
                shader = this.vsShaderHashMap.getValue(shaderID);
            else {
                if (shaderType == egret3d.Shader.vertex) {
                    shader = this.context.creatVertexShader(source);
                    shader.id = shaderID;
                    this.vsShaderHashMap.add(shaderID, shader);
                }
                else if (shaderType == egret3d.Shader.fragment) {
                    shader = this.context.creatFragmentShader(source);
                    shader.id = shaderID;
                    this.fsShaderHashMap.add(shaderID, shader);
                }
            }
            return shader;
        };
        ShaderPool.getProgram = function (vs_shaderID, fs_shaderID) {
            var vsShader = this.vsShaderHashMap.getValue(vs_shaderID);
            var fsShader = this.fsShaderHashMap.getValue(fs_shaderID);
            var name = vsShader.id + "_" + fsShader.id;
            var program3D;
            if (this.programlib.isHas(name)) {
                program3D = this.programlib.getValue(name);
            }
            else {
                program3D = this.registerProgram(vsShader, fsShader);
                this.programlib.add(name, program3D);
            }
            return this.programlib.getValue(name);
        };
        ShaderPool.unRegisterShader = function (list) {
            //to delet shader
        };
        ShaderPool.registerProgram = function (vsShader, fsShader) {
            var program3D = this.context.creatProgram(vsShader, fsShader);
            return program3D;
        };
        ShaderPool.unRegisterProgram = function (vsKey, fsKey) {
            //to delet program
        };
        //总shader的map容器
        ShaderPool.programlib = new egret3d.HashMap();
        ShaderPool.vsShaderHashMap = new egret3d.HashMap();
        ShaderPool.fsShaderHashMap = new egret3d.HashMap();
        return ShaderPool;
    }());
    egret3d.ShaderPool = ShaderPool;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.ShaderContent
        * @classdesc
        * shader文件解析后的数据内容
        * 每种变量类型都进行了规类
        * 用相应的列表进行存储，这样可以便于shader文件进行合并
        * @version Egret 3.0
        * @platform Web,Native
        */
        var ShaderContent = (function () {
            function ShaderContent() {
                /**
                * @private
                * shader文件名
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.name = "";
                this.source = "";
                this.funcNames = new Array();
                this.funcDict = {};
                /**
                * @private
                * 结构体列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.structDict = {};
                this.structNames = new Array();
                /**
                * @private
                * attribute列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.attributeList = new Array();
                /**
                * @private
                * varying列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.varyingList = new Array();
                /**
                * @private
                * uniform列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.uniformList = new Array();
                /**
                * @private
                * const列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.constList = new Array();
                /**
                * @private
                * 临时变量列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.tempList = new Array();
                /**
                * @private
                * sampler2D列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.sampler2DList = new Array();
                /**
                * @private
                * sampler3D列表
                * @version Egret 3.0
                * @platform Web,Native
                */
                this.sampler3DList = new Array();
                this.extensionList = new Array();
            }
            /**
            * @private
            * 增加一个变量对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            ShaderContent.prototype.addVar = function (sVar) {
                if (sVar.key == "attribute") {
                    this.attributeList.push(sVar);
                }
                else if (sVar.key == "varying") {
                    this.varyingList.push(sVar);
                }
                else if (sVar.key == "uniform") {
                    this.uniformList.push(sVar);
                }
                else if (sVar.key == "const") {
                    this.constList.push(sVar);
                }
                else if (sVar.key == "sampler2D") {
                    this.sampler2DList.push(sVar);
                }
                else if (sVar.key == "samplerCube") {
                    this.sampler3DList.push(sVar);
                }
                else if (sVar.key == "#extension") {
                    this.extensionList.push(sVar);
                }
                else {
                    this.tempList.push(sVar);
                }
            };
            /**
            * @private
            * 增加一个函数
            * @version Egret 3.0
            * @platform Web,Native
            */
            ShaderContent.prototype.addFunc = function (name, func) {
                if (!this.funcDict[name]) {
                    this.funcDict[name] = func;
                    this.funcNames.push(name);
                }
                else {
                    if (name == "main") {
                        var newfunc = this.mergeMainFunc(this.funcDict[name], func);
                        this.funcDict[name] = newfunc;
                    }
                    else {
                        console.log("<" + name + ">" + "函数重复");
                    }
                }
                if (this.funcDict["main"]) {
                    var index = this.funcNames.indexOf("main");
                    this.funcNames.splice(index, 1);
                    this.funcNames.push("main");
                }
            };
            /**
            * @private
            * 增加一个结构体
            * @version Egret 3.0
            * @platform Web,Native
            */
            ShaderContent.prototype.addStruct = function (name, structStr) {
                if (!this.structDict[name]) {
                    this.structDict[name] = structStr;
                    this.structNames.push(name);
                }
                else {
                    console.log("<" + name + ">" + "struct重复");
                }
            };
            /**
            * @private
            * 合并一个shader内容
            * @version Egret 3.0
            * @platform Web,Native
            */
            ShaderContent.prototype.addContent = function (otherContent) {
                for (var i = 0; i < otherContent.structNames.length; ++i) {
                    this.addStruct(otherContent.structNames[i], otherContent.structDict[otherContent.structNames[i]]);
                }
                for (var i = 0; i < otherContent.funcNames.length; ++i) {
                    this.addFunc(otherContent.funcNames[i], otherContent.funcDict[otherContent.funcNames[i]]);
                }
                for (var i = 0; i < otherContent.attributeList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.attributeList.length; ++j) {
                        if (otherContent.attributeList[i].name == this.attributeList[j].name) {
                            if (otherContent.attributeList[i].valueType != this.attributeList[j].valueType ||
                                otherContent.attributeList[i].key != this.attributeList[j].key) {
                                console.log(otherContent.attributeList[i].name + "=> type:" + otherContent.attributeList[i].valueType + " " + this.attributeList[j].valueType
                                    + " => key:" + otherContent.attributeList[i].key + " " + this.attributeList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.attributeList.push(otherContent.attributeList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.varyingList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.varyingList.length; ++j) {
                        if (otherContent.varyingList[i].name == this.varyingList[j].name) {
                            if (otherContent.varyingList[i].valueType != this.varyingList[j].valueType ||
                                otherContent.varyingList[i].key != this.varyingList[j].key) {
                                console.log(otherContent.varyingList[i].name + "=> type:" + otherContent.varyingList[i].valueType + " " + this.varyingList[j].valueType
                                    + " => key:" + otherContent.varyingList[i].key + " " + this.varyingList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.varyingList.push(otherContent.varyingList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.uniformList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.uniformList.length; ++j) {
                        if (otherContent.uniformList[i].name == this.uniformList[j].name) {
                            if (otherContent.uniformList[i].valueType != this.uniformList[j].valueType ||
                                otherContent.uniformList[i].key != this.uniformList[j].key) {
                                console.log(otherContent.uniformList[i].name + "=> type:" + otherContent.uniformList[i].valueType + " " + this.uniformList[j].valueType
                                    + " => key:" + otherContent.uniformList[i].key + " " + this.uniformList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.uniformList.push(otherContent.uniformList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.constList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.constList.length; ++j) {
                        if (otherContent.constList[i].name == this.constList[j].name) {
                            if (otherContent.constList[i].valueType != this.constList[j].valueType ||
                                otherContent.constList[i].key != this.constList[j].key) {
                                console.log(otherContent.constList[i].name + "=> type:" + otherContent.constList[i].valueType + " " + this.constList[j].valueType
                                    + " => key:" + otherContent.constList[i].key + " " + this.constList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.constList.push(otherContent.constList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.tempList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.tempList.length; ++j) {
                        if (otherContent.tempList[i].name == this.tempList[j].name) {
                            if (otherContent.tempList[i].valueType != this.tempList[j].valueType ||
                                otherContent.tempList[i].key != this.tempList[j].key) {
                                console.log(otherContent.tempList[i].name + "=> type:" + otherContent.tempList[i].valueType + " " + this.tempList[j].valueType
                                    + " => key:" + otherContent.tempList[i].key + " " + this.tempList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.tempList.push(otherContent.tempList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.sampler2DList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.sampler2DList.length; ++j) {
                        if (otherContent.sampler2DList[i].name == this.sampler2DList[j].name) {
                            if (otherContent.sampler2DList[i].valueType != this.sampler2DList[j].valueType ||
                                otherContent.sampler2DList[i].key != this.sampler2DList[j].key) {
                                console.log(otherContent.sampler2DList[i].name + "=> type:" + otherContent.sampler2DList[i].valueType + " " + this.sampler2DList[j].valueType
                                    + " => key:" + otherContent.sampler2DList[i].key + " " + this.sampler2DList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.sampler2DList.push(otherContent.sampler2DList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.sampler3DList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.sampler3DList.length; ++j) {
                        if (otherContent.sampler3DList[i].name == this.sampler3DList[j].name) {
                            if (otherContent.sampler2DList[i].valueType != this.sampler3DList[j].valueType ||
                                otherContent.sampler3DList[i].key != this.sampler3DList[j].key) {
                                console.log(otherContent.sampler3DList[i].name + "=> type:" + otherContent.sampler3DList[i].valueType + " " + this.sampler3DList[j].valueType
                                    + " => key:" + otherContent.sampler3DList[i].key + " " + this.sampler3DList[j].key);
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.sampler3DList.push(otherContent.sampler3DList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.extensionList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.extensionList.length; ++j) {
                        if (otherContent.extensionList[i].name == this.extensionList[j].name) {
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.extensionList.push(otherContent.extensionList[i].clone());
                    }
                }
            };
            ShaderContent.prototype.mergeMainFunc = function (func1, func2) {
                var ret = func1;
                var func = "";
                var s_pos = func2.indexOf("{");
                var e_pos = func2.lastIndexOf("}");
                s_pos++;
                func = func2.slice(s_pos, e_pos);
                s_pos = ret.lastIndexOf("}");
                var f_func = ret.substr(0, s_pos);
                var s_func = ret.substr(s_pos, ret.length - s_pos);
                ret = f_func;
                ret += func;
                var temp = "";
                var line = "";
                var old = ret;
                ret += line;
                ret += s_func;
                return ret;
            };
            ShaderContent.prototype.clone = function () {
                var content = new ShaderContent();
                content.name = this.name;
                content.source = this.source;
                for (var i = 0; i < this.funcNames.length; ++i) {
                    content.funcNames.push(this.funcNames[i]);
                }
                for (var key in this.funcDict) {
                    content.funcDict[key] = this.funcDict[key];
                }
                for (var i = 0; i < this.structNames.length; ++i) {
                    content.structNames.push(this.structNames[i]);
                }
                for (var key in this.structDict) {
                    content.structDict[key] = this.structDict[key];
                }
                for (var i = 0; i < this.attributeList.length; ++i) {
                    content.attributeList.push(this.attributeList[i].clone());
                }
                for (var i = 0; i < this.varyingList.length; ++i) {
                    content.varyingList.push(this.varyingList[i].clone());
                }
                for (var i = 0; i < this.uniformList.length; ++i) {
                    content.uniformList.push(this.uniformList[i].clone());
                }
                for (var i = 0; i < this.constList.length; ++i) {
                    content.constList.push(this.constList[i].clone());
                }
                for (var i = 0; i < this.tempList.length; ++i) {
                    content.tempList.push(this.tempList[i].clone());
                }
                for (var i = 0; i < this.sampler2DList.length; ++i) {
                    content.sampler2DList.push(this.sampler2DList[i].clone());
                }
                for (var i = 0; i < this.sampler3DList.length; ++i) {
                    content.sampler3DList.push(this.sampler3DList[i].clone());
                }
                for (var i = 0; i < this.attributeList.length; ++i) {
                    content.attributeList.push(this.attributeList[i].clone());
                }
                for (var i = 0; i < this.extensionList.length; ++i) {
                    content.extensionList.push(this.extensionList[i].clone());
                }
                return content;
            };
            return ShaderContent;
        }());
        GLSL.ShaderContent = ShaderContent;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.FuncData
    * @classdesc
    * shader系统工具类，管理所有要用到的shader文件
    * @version Egret 3.0
    * @platform Web,Native
    */
    var ShaderUtil = (function () {
        function ShaderUtil() {
            this._shaderContentDict = [];
            this.vs_begin = "##define vs begin##";
            this.vs_end = "##define vs end##";
            this.fs_begin = "##define fs begin##";
            this.fs_end = "##define fs end##";
        }
        Object.defineProperty(ShaderUtil, "instance", {
            /**
            * @language zh_CN
            *
            * 单例
            */
            get: function () {
                if (!this._instance) {
                    this._instance = new ShaderUtil();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * @private
        * 加载shader文件
        */
        ShaderUtil.prototype.load = function () {
            var del = [];
            var add = [];
            for (var key in egret3d.ShaderLib.lib) {
                var s_pos = egret3d.ShaderLib.lib[key].indexOf(this.vs_begin);
                var e_pos = egret3d.ShaderLib.lib[key].indexOf(this.vs_end);
                var isDel = false;
                if (s_pos != -1) {
                    isDel = true;
                    s_pos += this.vs_begin.length;
                    del.push(key);
                    add[key + "vs"] = egret3d.ShaderLib.lib[key].substr(s_pos, e_pos - s_pos);
                }
                s_pos = egret3d.ShaderLib.lib[key].indexOf(this.fs_begin);
                e_pos = egret3d.ShaderLib.lib[key].indexOf(this.fs_end);
                if (s_pos != -1) {
                    s_pos += this.fs_begin.length;
                    if (isDel) {
                        del.push(key);
                    }
                    add[key + "fs"] = egret3d.ShaderLib.lib[key].substr(s_pos, e_pos - s_pos);
                }
            }
            for (var key in del) {
                delete egret3d.ShaderLib.lib[del[key]];
            }
            for (var key in add) {
                egret3d.ShaderLib.lib[key] = add[key];
            }
            for (var key in egret3d.ShaderLib.lib) {
                var content = this.readShader(egret3d.ShaderLib.lib[key]);
                this._shaderContentDict[key] = content;
                content.name = key;
            }
        };
        ShaderUtil.prototype.readShader = function (str) {
            var content = new egret3d.GLSL.ShaderContent();
            var shaderStr = egret3d.StringUtil.processShaderFile(str);
            var source = egret3d.StringUtil.parseContent(shaderStr);
            var shaderLine = source.concat();
            while (shaderLine.length > 0) {
                var line = shaderLine[0];
                shaderLine.shift();
                var ret = egret3d.StringUtil.getLineType(line);
                var index = -1;
                index = ret.indexOf("struct");
                if (index != -1) {
                    var tempArray = ret.split(" ");
                    var structStr = line;
                    content.addStruct(tempArray[1], structStr);
                    egret3d.StringUtil.processStruct(tempArray[1], structStr, content);
                    continue;
                }
                index = ret.indexOf("function");
                if (index != -1) {
                    var tempArray = ret.split(" ");
                    var func = line;
                    content.addFunc(tempArray[1], func);
                    continue;
                }
                index = ret.indexOf("unknown");
                if (index != -1) {
                    var tempArray = egret3d.StringUtil.parseLines(line);
                    var key = egret3d.StringUtil.getVarKey(tempArray);
                    var valueType = egret3d.StringUtil.getVarType(tempArray);
                    if (valueType == "sampler2D") {
                        var sampler2D = egret3d.StringUtil.getSampler2D(line);
                        if (sampler2D)
                            content.addVar(sampler2D);
                    }
                    else if (valueType == "samplerCube") {
                        var sampler3D = egret3d.StringUtil.getSampler3D(line);
                        if (sampler3D)
                            content.addVar(sampler3D);
                    }
                    else {
                        if (key == "attribute") {
                            var att = egret3d.StringUtil.getAttribute(line);
                            if (att)
                                content.addVar(att);
                        }
                        else if (key == "varying") {
                            var varying = egret3d.StringUtil.getVarying(line);
                            if (varying)
                                content.addVar(varying);
                        }
                        else if (key == "uniform") {
                            var uniform = egret3d.StringUtil.getUniform(line);
                            if (uniform)
                                content.addVar(uniform);
                        }
                        else if (key == "const") {
                            var ConstVar = egret3d.StringUtil.getConst(line);
                            if (ConstVar)
                                content.addVar(ConstVar);
                        }
                        else if (key == "#extension") {
                            var extension = egret3d.StringUtil.getExtension(line);
                            if (extension)
                                content.addVar(extension);
                        }
                        else {
                            content.addVar(egret3d.StringUtil.getTemper(line));
                        }
                    }
                    continue;
                }
            }
            return content;
        };
        /**
        * @language zh_CN
        * 返回组合shader后的内容
        * @param shaderNameList 要组合的shader名字列表
        * @param usage
        * @returns shader 内容
        */
        ShaderUtil.prototype.fillShaderContent = function (shaderBase, shaderNameList, usage) {
            var shaderContent;
            var i = 0;
            var varName = "";
            for (i = 0; i < shaderNameList.length; ++i) {
                if (varName != "") {
                    varName += "/";
                }
                varName += shaderNameList[i];
            }
            varName += "/d" + usage.maxDirectLight;
            varName += "/s" + usage.maxSpotLight;
            varName += "/p" + usage.maxPointLight;
            varName += "/b" + usage.maxBone;
            if (!this._shaderContentDict[varName]) {
                shaderContent = new egret3d.GLSL.ShaderContent();
                shaderContent.name = varName;
                for (i = 0; i < shaderNameList.length; ++i) {
                    var tempContent = this._shaderContentDict[shaderNameList[i]];
                    shaderContent.addContent(tempContent);
                }
            }
            else {
                shaderContent = this._shaderContentDict[varName].clone();
            }
            for (i = 0; i < shaderContent.attributeList.length; i++) {
                varName = shaderContent.attributeList[i].varName;
                usage[varName] = shaderContent.attributeList[i];
            }
            for (i = 0; i < shaderContent.varyingList.length; i++) {
                varName = shaderContent.varyingList[i].varName;
                if (!usage[varName]) {
                    usage[varName] = shaderContent.varyingList[i];
                }
            }
            for (i = 0; i < shaderContent.tempList.length; i++) {
                varName = shaderContent.tempList[i].varName;
                usage[varName] = shaderContent.tempList[i];
            }
            for (i = 0; i < shaderContent.uniformList.length; i++) {
                varName = shaderContent.uniformList[i].varName;
                usage[varName] = shaderContent.uniformList[i];
            }
            var constR;
            for (i = 0; i < shaderContent.constList.length; i++) {
                varName = shaderContent.constList[i].varName;
                constR = shaderContent.constList[i];
                usage[varName] = constR;
                switch (varName) {
                    case "max_directLight":
                        constR.value = usage.maxDirectLight;
                        break;
                    case "max_spotLight":
                        constR.value = usage.maxSpotLight;
                        break;
                    case "max_pointLight":
                        constR.value = usage.maxPointLight;
                        break;
                    case "bonesNumber":
                        shaderBase.maxBone = usage.maxBone;
                        constR.value = usage.maxBone;
                        break;
                }
            }
            ///sampler
            for (i = 0; i < shaderContent.sampler2DList.length; i++) {
                var sampler2D = shaderContent.sampler2DList[i];
                sampler2D.activeTextureIndex = ShaderUtil.getTexture2DIndex(i);
                sampler2D.index = i;
            }
            usage.sampler2DList = shaderContent.sampler2DList;
            ///sampler
            for (i = 0; i < shaderContent.sampler3DList.length; i++) {
                var sampler3D = shaderContent.sampler3DList[i];
                sampler3D.activeTextureIndex = ShaderUtil.getTexture2DIndex(shaderContent.sampler2DList.length + i);
                sampler3D.index = shaderContent.sampler2DList.length + i;
            }
            usage.sampler3DList = shaderContent.sampler3DList;
            this.synthesisShader(shaderContent, shaderBase);
            return egret3d.ShaderPool.getGPUShader(shaderBase.shaderType, shaderContent.name, shaderContent.source);
        };
        ShaderUtil.prototype.synthesisShader = function (content, shaderBase) {
            var i;
            var source = "precision highp float;            \t\n";
            for (i = 0; i < content.extensionList.length; i++) {
                source += ShaderUtil.connectExtension(content.extensionList[i]);
            }
            ///var attribute
            for (i = 0; i < content.attributeList.length; i++) {
                source += ShaderUtil.connectAtt(content.attributeList[i]);
            }
            ///var struct
            for (i = 0; i < content.structNames.length; i++) {
                source += ShaderUtil.connectStruct(content.structDict[content.structNames[i]]);
            }
            ///var varying
            for (i = 0; i < content.varyingList.length; i++) {
                source += ShaderUtil.connectVarying(content.varyingList[i]);
            }
            ///temp
            for (i = 0; i < content.tempList.length; i++) {
                source += ShaderUtil.connectTemp(content.tempList[i]);
            }
            ///const
            for (i = 0; i < content.constList.length; i++) {
                source += ShaderUtil.connectConst(content.constList[i]);
            }
            ///uniform
            for (i = 0; i < content.uniformList.length; i++) {
                source += ShaderUtil.connectUniform(content.uniformList[i]);
            }
            ///sampler
            for (i = 0; i < content.sampler2DList.length; i++) {
                var sampler2D = content.sampler2DList[i];
                source += ShaderUtil.connectSampler(sampler2D);
            }
            ///sampler
            for (i = 0; i < content.sampler3DList.length; i++) {
                var sampler3D = content.sampler3DList[i];
                source += ShaderUtil.connectSampler3D(sampler3D);
            }
            ///---------------------------------------------------------------------------------
            ///---------------------------------------------------------------------------------
            for (i = 0; i < content.funcNames.length; i++) {
                source += content.funcDict[content.funcNames[i]];
            }
            content.source = source;
        };
        //----------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------------------
        /**
        * @language zh_CN
        *
        * @param att
        */
        ShaderUtil.connectAtt = function (att) {
            return "attribute " + att.valueType + " " + att.name + "; \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param tempVar
        */
        ShaderUtil.connectTemp = function (tempVar) {
            return tempVar.valueType + " " + tempVar.name + "; \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param struct
        */
        ShaderUtil.connectStruct = function (struct) {
            return struct + " \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param constVar
        */
        ShaderUtil.connectConst = function (constVar) {
            return "const " + constVar.valueType + " " + constVar.name + " = " + constVar.value + "; \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param varying
        */
        ShaderUtil.connectVarying = function (varying) {
            return "varying " + varying.valueType + " " + varying.name + "; \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param unifrom
        */
        ShaderUtil.connectUniform = function (unifrom) {
            return "uniform " + unifrom.valueType + " " + unifrom.name + "; \r\n";
        };
        /**
        * @language zh_CN
        *
        * @param sampler
        */
        ShaderUtil.connectSampler = function (sampler) {
            return "uniform sampler2D " + sampler.name + "; \r\n";
        };
        ShaderUtil.connectSampler3D = function (sampler) {
            return "uniform samplerCube " + sampler.name + "; \r\n";
        };
        ShaderUtil.connectExtension = function (extension) {
            return "#extension " + extension.name + ":" + extension.value + "\r\n";
        };
        ShaderUtil.getTexture2DIndex = function (i) {
            switch (i) {
                case 0:
                    return egret3d.ContextSamplerType.TEXTURE_0;
                case 1:
                    return egret3d.ContextSamplerType.TEXTURE_1;
                case 2:
                    return egret3d.ContextSamplerType.TEXTURE_2;
                case 3:
                    return egret3d.ContextSamplerType.TEXTURE_3;
                case 4:
                    return egret3d.ContextSamplerType.TEXTURE_4;
                case 5:
                    return egret3d.ContextSamplerType.TEXTURE_5;
                case 6:
                    return egret3d.ContextSamplerType.TEXTURE_6;
                case 7:
                    return egret3d.ContextSamplerType.TEXTURE_7;
                case 8:
                    return egret3d.ContextSamplerType.TEXTURE_8;
            }
            throw new Error("texture not big then 8");
        };
        ShaderUtil._shaderLibs = {};
        ShaderUtil._methodLibs = {};
        return ShaderUtil;
    }());
    egret3d.ShaderUtil = ShaderUtil;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ImageTexture
    * @classdesc
    * ImageTexture 类为 图像贴图
    *
    * 图像贴图用于封装 HTMLImageElement（网页图像元素）到引擎内部可使用的Texture2D对象, </p>
     * HTMLImageElement 可通过内嵌HTML文件中获取。</p>
    *
     *
    * 示例：
    * 假设html中已有 &lt;img id="t1" src="xxx.png" /&gt;
    * <pre>
    * var img: HTMLImageElement = <HTMLImageElement>document.getElementById("t1");
    * var imageTexture: egret3d.ImageTexture = new egret3d.ImageTexture(img);
     * </pre>
    * @version Egret 3.0
    * @platform Web,Native
    */
    var ImageTexture = (function () {
        /**
         * @language zh_CN
         * 构造函数
         * @param img HTMLImageElement（网页图像元素）
         */
        function ImageTexture(img) {
            /**
           需要缓存这个值，看看是否优化
            */
            this._useMipmap = true;
            this._smooth = true;
            this.imageData = img;
        }
        Object.defineProperty(ImageTexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._useMipmap;
            },
            /**
             * @language zh_CN
             * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            set: function (flag) {
                this._useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
             * @language zh_CN
             * 设置贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        ImageTexture.prototype.upload = function (context3D) {
            if (!this.texture2D) {
                this.texture2D = context3D.creatTexture2D();
                this.texture2D.internalFormat = egret3d.InternalFormat.ImageData;
                this.texture2D.imageData = this.imageData;
                this.texture2D.useMipmap = this._useMipmap;
                this.texture2D.smooth = this._smooth;
                this.texture2D.colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888;
                context3D.upLoadTextureData(0, this.texture2D);
            }
        };
        /**
         * @language zh_CN
         * 强制上传贴图数据给GPU，强制要求贴图更新。
         * 在video 贴图类型需要立即改变显卡中的贴图内存
         * @param context3D
         */
        ImageTexture.prototype.uploadForcing = function (context3D) {
            context3D.upLoadTextureData(0, this.texture2D);
        };
        return ImageTexture;
    }());
    egret3d.ImageTexture = ImageTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var DDSTexture = (function () {
        function DDSTexture() {
            this._smooth = true;
        }
        Object.defineProperty(DDSTexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this.texture2D.useMipmap;
            },
            /**
            * @language zh_CN
            * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this.texture2D.useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DDSTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
      * @language zh_CN
      * 设置贴图是否使用 smooth
      * @param img HTMLImageElement（网页图像元素）
      */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        DDSTexture.prototype.upload = function (context3D) {
            if (!this.texture2D) {
                this.texture2D = context3D.creatTexture2D();
                this.texture2D.smooth = this._smooth;
                this.texture2D.internalFormat = this.internalFormat;
                this.texture2D.colorFormat = this.colorFormat;
                this.texture2D.mimapData = this.mimapData;
                if (this.mimapData && this.mimapData.length > 0) {
                    for (var i = 0; i < this.mimapData.length; i++) {
                        context3D.upLoadTextureData(i, this.texture2D);
                    }
                }
                else {
                    context3D.upLoadTextureData(0, this.texture2D);
                }
            }
        };
        DDSTexture.prototype.uploadForcing = function (context3D) {
            context3D.upLoadTextureData(0, this.texture2D);
        };
        return DDSTexture;
    }());
    egret3d.DDSTexture = DDSTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var TGATexture = (function () {
        function TGATexture() {
            this._smooth = true;
        }
        Object.defineProperty(TGATexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this.texture2D.useMipmap;
            },
            /**
            * @language zh_CN
            * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this.texture2D.useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TGATexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
      * @language zh_CN
      * 设置贴图是否使用 smooth
      * @param img HTMLImageElement（网页图像元素）
      */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        TGATexture.prototype.upload = function (context3D) {
            if (!this.texture2D) {
                this.texture2D.texture = context3D.creatTexture2D();
                this.texture2D.internalFormat = this.internalFormat;
                this.texture2D.colorFormat = this.colorFormat;
                this.texture2D.mimapData = this.mimapData;
                this.texture2D.smooth = this._smooth;
                this.useMipmap = true;
                if (this.mimapData && this.mimapData.length > 0) {
                    for (var i = 0; i < this.mimapData.length; i++) {
                        context3D.upLoadTextureData(i, this.texture2D);
                    }
                }
                else {
                    context3D.upLoadTextureData(0, this.texture2D);
                }
            }
        };
        TGATexture.prototype.uploadForcing = function (context3D) {
            context3D.upLoadTextureData(0, this.texture2D);
        };
        return TGATexture;
    }());
    egret3d.TGATexture = TGATexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     */
    var PVRTexture = (function () {
        function PVRTexture() {
            this._smooth = true;
        }
        Object.defineProperty(PVRTexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this.texture2D.useMipmap;
            },
            /**
             * @language zh_CN
             * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this.texture2D.useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PVRTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
      * @language zh_CN
      * 设置贴图是否使用 smooth
      * @param img HTMLImageElement（网页图像元素）
      */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        PVRTexture.prototype.upload = function (context3D) {
        };
        PVRTexture.prototype.uploadForcing = function (context3D) {
        };
        return PVRTexture;
    }());
    egret3d.PVRTexture = PVRTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.CubeTexture
     * @classdesc
     * CubeTexture 类为天空贴图
     *
     * 天空贴图用于Sky类使用，其内部是将6张HTMLImageElement（网页图片元素）封装到CubeTexture对象，CubeTexture为引擎内部使用对象。</p>
     *
     * 示例：</p>
     * 假设html中已有</p>
     <pre>
     <img id="t1" src="image_front.png" />
     <img id="t2" src="image_back.png" />
     <img id="t3" src="image_left.png" />
     <img id="t4" src="image_right.png" />
     <img id="t5" src="image_up.png" />
     <img id="t6" src="image_down.png" />
     </pre>
     使用示例：</p>
     <pre>
     var cubeTexture: CubeTexture = CubeTexture.createCubeTexture(
     <HTMLImageElement>document.getElementById("t1"),
     <HTMLImageElement>document.getElementById("t2"),
     <HTMLImageElement>document.getElementById("t3"),
     <HTMLImageElement>document.getElementById("t4"),
     <HTMLImageElement>document.getElementById("t5"),
     <HTMLImageElement>document.getElementById("t6")
     );
     </pre>
     * @see egret3d.Sky
     * @version Egret 3.0
     * @platform Web,Native
     */
    var CubeTexture = (function () {
        /**
         * @language zh_CN
         * 构造函数
         * @param image_front 前部HTMLImageElement图片元素
         * @param image_back 背部HTMLImageElement图片元素
         * @param image_left 左部HTMLImageElement图片元素
         * @param image_right 右部HTMLImageElement图片元素
         * @param image_up 顶部HTMLImageElement图片元素
         * @param image_down 底部HTMLImageElement图片元素
         */
        function CubeTexture(image_front, image_back, image_left, image_right, image_up, image_down) {
            this._smooth = true;
            this.image_front = image_front;
            this.image_back = image_back;
            this.image_left = image_left;
            this.image_right = image_right;
            this.image_up = image_up;
            this.image_down = image_down;
        }
        /**
         * @language zh_CN
         * 创建CubuTexture
         * @param image_front 前部HTMLImageElement图片元素
         * @param image_back 背部HTMLImageElement图片元素
         * @param image_left 左部HTMLImageElement图片元素
         * @param image_right 右部HTMLImageElement图片元素
         * @param image_up 顶部HTMLImageElement图片元素
         * @param image_down 底部HTMLImageElement图片元素
         */
        CubeTexture.createCubeTexture = function (image_front, image_back, image_left, image_right, image_up, image_down) {
            var front = new egret3d.Texture2D();
            front.imageData = image_front;
            var back = new egret3d.Texture2D();
            back.imageData = image_back;
            var left = new egret3d.Texture2D();
            left.imageData = image_left;
            var right = new egret3d.Texture2D();
            right.imageData = image_right;
            var up = new egret3d.Texture2D();
            up.imageData = image_up;
            var down = new egret3d.Texture2D();
            down.imageData = image_down;
            var cubeTexture = new CubeTexture(front, back, left, right, up, down);
            return cubeTexture;
        };
        Object.defineProperty(CubeTexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this.texture2D.useMipmap;
            },
            /**
            * @language zh_CN
            * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this.texture2D.useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CubeTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
      * @language zh_CN
      * 设置贴图是否使用 smooth
      * @param img HTMLImageElement（网页图像元素）
      */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 更新上传 cube 贴图纹理到GPU 现存中缓存起来
         * @param context3D
         */
        CubeTexture.prototype.upload = function (context3D) {
            if (!this.texture3D) {
                this.texture3D = context3D.creatCubeTexture();
                this.texture3D.border = 0;
                this.texture3D.image_front = this.image_front;
                this.texture3D.image_back = this.image_back;
                this.texture3D.image_left = this.image_left;
                this.texture3D.image_right = this.image_right;
                this.texture3D.image_up = this.image_up;
                this.texture3D.image_down = this.image_down;
                context3D.uploadCubetexture(this.texture3D);
            }
        };
        CubeTexture.prototype.uploadForcing = function (context3D) {
        };
        return CubeTexture;
    }());
    egret3d.CubeTexture = CubeTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.CheckerboardTexture
    * @classdesc
    * CheckerboardTexture 类为 棋盘格纹理类</p>
    *
    * 棋盘格纹理为黑白间隔色块组成的一张纹理，主要用于判别模型UV的正确性，若某模型UV值不正确，其纹理表现必定乱序不规整。</p>
    * 使用示例:</p>
     <pre>
    var material: egret3d.TextureMaterial = new egret3d.TextureMaterial(egret3d.CheckerboardTexture.texture );
    var mesh: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), material);
     </pre>
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/CheckerboardTexture.ts
    */
    var CheckerboardTexture = (function () {
        /**
         * @language zh_CN
         * 构造函数
         */
        function CheckerboardTexture() {
            this._width = 32;
            this._height = 32;
            this._smooth = true;
            this._useMipmap = true;
            this.buildCheckerboard();
        }
        Object.defineProperty(CheckerboardTexture.prototype, "useMipmap", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._useMipmap;
            },
            /**
            * @language zh_CN
            * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this._useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckerboardTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
              * @language zh_CN
              * 设置贴图是否使用 smooth
              * @param img HTMLImageElement（网页图像元素）
              */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        CheckerboardTexture.prototype.upload = function (context3D) {
            if (!this.texture2D) {
                this.texture2D = context3D.creatTexture2D();
                this.texture2D.border = 0;
                this.texture2D.internalFormat = egret3d.InternalFormat.PixelArray;
                this.texture2D.colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888;
                this.texture2D.smooth = this._smooth;
                this.texture2D.useMipmap = this._useMipmap;
                this.texture2D.mimapData = new Array();
                this.texture2D.mimapData.push(new egret3d.MipmapData(this._pixelArray, this._width, this._height));
                this.texture2D.useMipmap = false;
                context3D.upLoadTextureData(0, this.texture2D);
            }
        };
        CheckerboardTexture.prototype.buildCheckerboard = function () {
            if (!this._pixelArray) {
                this._pixelArray = new Uint8Array(this._width * this._height * 4);
                var colors = [egret3d.Color.white(), egret3d.Color.black()];
                var colorIndex = 0;
                var blockSize = 4;
                for (var y = 0; y < this._height; y++) {
                    for (var x = 0; x < this._width; x++) {
                        if ((x % blockSize) == 0) {
                            colorIndex = (colorIndex + 1) % 2;
                        }
                        if ((y % blockSize) == 0 && x == 0) {
                            var tmp = colors[0];
                            colors[0] = colors[1];
                            colors[1] = tmp;
                            colorIndex = 0;
                        }
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 0] = colors[colorIndex].r;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 1] = colors[colorIndex].g;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 2] = colors[colorIndex].b;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 3] = colors[colorIndex].a;
                    }
                }
            }
        };
        CheckerboardTexture.prototype.uploadForcing = function (context3D) {
        };
        /**
         * @language zh_CN
         * 公用棋盘格实例对象
         */
        CheckerboardTexture.texture = new CheckerboardTexture();
        return CheckerboardTexture;
    }());
    egret3d.CheckerboardTexture = CheckerboardTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @class egret3d.VideoTexture
     * @classdesc
     * VideoTexture 使用 Video 标签采集 video 视频 </p>
     * VideoTexture 仅且暂时只能在pc上正常使用，移动端需要直接与用户交互才可正常生成播放</p>
     * 需要设置贴图的宽度和高度。必须为2的N次</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    var VideoTexture = (function () {
        function VideoTexture(width, height) {
            var _this = this;
            if (width === void 0) { width = 256; }
            if (height === void 0) { height = 256; }
            this.canUpdataTexture = false;
            this._smooth = true;
            this.width = width;
            this.height = height;
            this.tmpCanvas = document.createElement("canvas");
            this.tmpCanvas.width = width;
            this.tmpCanvas.height = height;
            this.context = this.tmpCanvas.getContext('2d');
            this.video = document.createElement("video");
            this.video.msZoom = true;
            this.video.width = width;
            this.video.height = height;
            this.video.videoWidth = width;
            this.video.videoHeight = height;
            this.video.controls = false;
            this.video.autoplay = true;
            this.video.addEventListener("canplaythrough", function () { return _this.loadReady(); }, true);
            this.tmpCanvas.hidden = true;
        }
        VideoTexture.prototype.loadReady = function () {
            this.canUpdataTexture = true;
        };
        Object.defineProperty(VideoTexture.prototype, "useMipmap", {
            /**
            * @language zh_CN
            * @private
            * 获取贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            get: function () {
                return this.texture2D.useMipmap;
            },
            /**
            * @language zh_CN
            * @private
            * 设置贴图是否使用 mipmap , mipmap为一个贴图的LOD层级贴图。例如（1024*1024的贴图，往下就会自动生成 512*512,256*256,128*128,64*64,32*32,16*16,8*8,4*4,2*2,1*1）
            * @param img HTMLImageElement（网页图像元素）
            */
            set: function (flag) {
                this.texture2D.useMipmap = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VideoTexture.prototype, "smooth", {
            /**
             * @language zh_CN
             * 获取贴图是否使用 smooth
             * @param img HTMLImageElement（网页图像元素）
             */
            get: function () {
                return this._smooth;
            },
            /**
      * @language zh_CN
      * 设置贴图是否使用 smooth
      * @param img HTMLImageElement（网页图像元素）
      */
            set: function (flag) {
                this._smooth = flag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VideoTexture.prototype, "source", {
            /**
            * @language zh_CN
            * 返回 视频链接
            * 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
            */
            get: function () {
                return this.video.src;
            },
            /**
             * @language zh_CN
             * 设置 视频链接
             * 设置 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
             * @param src 视频格式的链接地址
             */
            set: function (src) {
                this.video.src = src;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 播放视频
        * 当视频缓冲好之后才能正常播放视频
        */
        VideoTexture.prototype.play = function () {
            this.video.play();
        };
        /**
        * @language zh_CN
        * 暂停视频
        * 控制视频的播放暂停状态
        */
        VideoTexture.prototype.pause = function () {
            this.video.pause();
        };
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 将video的视频数据实时传输到GPU上
         * @param context3D
        */
        VideoTexture.prototype.upload = function (context3D) {
            if (!this.texture2D) {
                this.texture2D = context3D.creatTexture2D();
                egret3d.Context3DProxy.gl.bindTexture(egret3d.Context3DProxy.gl.TEXTURE_2D, this.texture2D.texture);
                egret3d.Context3DProxy.gl.texParameteri(egret3d.Context3DProxy.gl.TEXTURE_2D, egret3d.Context3DProxy.gl.TEXTURE_MAG_FILTER, egret3d.Context3DProxy.gl.LINEAR);
                egret3d.Context3DProxy.gl.texParameteri(egret3d.Context3DProxy.gl.TEXTURE_2D, egret3d.Context3DProxy.gl.TEXTURE_MIN_FILTER, egret3d.Context3DProxy.gl.NEAREST);
            }
            if (this.canUpdataTexture) {
                this.context.drawImage(this.video, 0, 0, this.width, this.height);
                egret3d.Context3DProxy.gl.pixelStorei(egret3d.Context3DProxy.gl.UNPACK_ALIGNMENT, 1);
                egret3d.Context3DProxy.gl.bindTexture(egret3d.Context3DProxy.gl.TEXTURE_2D, this.texture2D.texture);
                egret3d.Context3DProxy.gl.texImage2D(egret3d.Context3DProxy.gl.TEXTURE_2D, 0, egret3d.Context3DProxy.gl.RGB, egret3d.Context3DProxy.gl.RGB, egret3d.Context3DProxy.gl.UNSIGNED_BYTE, this.tmpCanvas);
            }
        };
        VideoTexture.prototype.uploadForcing = function (context3D) {
        };
        return VideoTexture;
    }());
    egret3d.VideoTexture = VideoTexture;
})(egret3d || (egret3d = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret3d;
(function (egret3d) {
    /**
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @class egret3d.Endian
     * @classdesc
     */
    var Endian = (function () {
        function Endian() {
        }
        /**
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.LITTLE_ENDIAN
         */
        Endian.LITTLE_ENDIAN = "littleEndian";
        /**
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.BIG_ENDIAN
         */
        Endian.BIG_ENDIAN = "bigEndian";
        return Endian;
    }());
    egret3d.Endian = Endian;
    /**
     * @class egret.ByteArray
     * @classdesc
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级 开发人员。
     */
    var ByteArray = (function () {
        /**
         * 创建一个 egret.ByteArray 对象以引用指定的 ArrayBuffer 对象
         * @param buffer {ArrayBuffer} 数据源
         */
        function ByteArray(buffer) {
            this.BUFFER_EXT_SIZE = 0; //Buffer expansion size
            this.EOF_byte = -1;
            this.EOF_code_point = -1;
            this._setArrayBuffer(buffer || new ArrayBuffer(this.BUFFER_EXT_SIZE));
            this.endian = Endian.BIG_ENDIAN;
        }
        ByteArray.prototype._setArrayBuffer = function (buffer) {
            this.write_position = buffer.byteLength;
            this.data = new DataView(buffer);
            this._position = 0;
        };
        Object.defineProperty(ByteArray.prototype, "buffer", {
            get: function () {
                return this.data.buffer;
            },
            /**
             * @private
             */
            set: function (value) {
                this.data = new DataView(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "dataView", {
            get: function () {
                return this.data;
            },
            /**
             * @private
             */
            set: function (value) {
                this.data = value;
                this.write_position = value.byteLength;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         */
        ByteArray.prototype.uncompress = function (type) {
            if (type === void 0) { type = "7z"; }
            //var decoder: nid.LZMA = new nid.LZMA();
            //var tmp: ArrayBuffer = decoder.decode(new Uint8Array(this.data.buffer)).buffer;
            //this.buffer = tmp; 
            //decoder = null;
        };
        Object.defineProperty(ByteArray.prototype, "bufferOffset", {
            /**
             * @private
             */
            get: function () {
                return this.data.byteOffset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "position", {
            /**
             * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
             * @member {number} egret.ByteArray#position
             */
            get: function () {
                return this._position;
            },
            set: function (value) {
                if (this._position < value) {
                    if (!this.validate(value - this._position)) {
                        return;
                    }
                }
                this._position = value;
                this.write_position = value > this.write_position ? value : this.write_position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "length", {
            /**
             * ByteArray 对象的长度（以字节为单位）。
             * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
             * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
             * @member {number} egret.ByteArray#length
             */
            get: function () {
                return this.write_position;
            },
            set: function (value) {
                this.validateBuffer(value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "bytesAvailable", {
            /**
             * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
             * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
             * @member {number} egret.ByteArray#bytesAvailable
             */
            get: function () {
                return this.data.byteLength - this._position;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
         * @method egret.ByteArray#clear
         */
        ByteArray.prototype.clear = function () {
            //this._position = 0;
            this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE));
        };
        //public getArray():Uint8Array {
        //    if (this.array == null) {
        //        this.array = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength);
        //    }
        //    return this.array;
        //}
        /**
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @returns 如果字节不为零，则返回 true，否则返回 false
         * @method egret.ByteArray#readBoolean
         */
        ByteArray.prototype.readBoolean = function () {
            if (!this.validate(ByteArray.SIZE_OF_BOOLEAN))
                return null;
            return this.data.getUint8(this.position++) != 0;
        };
        /**
         * 从字节流中读取带符号的字节
         * @returns 介于 -128 和 127 之间的整数
         * @method egret.ByteArray#readByte
         */
        ByteArray.prototype.readByte = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT8))
                return null;
            return this.data.getInt8(this.position++);
        };
        /**
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @method egret.ByteArray#readBytes
         */
        ByteArray.prototype.readBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (length == 0) {
                length = this.bytesAvailable;
            }
            else if (!this.validate(length)) {
                return null;
            }
            if (bytes) {
                bytes.validateBuffer(length);
            }
            else {
                bytes = new ByteArray(new ArrayBuffer(length));
            }
            //This method is expensive
            for (var i = 0; i < length; i++) {
                bytes.data.setUint8(i + offset, this.data.getUint8(this.position++));
            }
        };
        //public get leftBytes():ArrayBuffer {
        //    var begin = this.data.byteOffset + this.position;
        //    var end = this.data.byteLength;
        //    var result = new ArrayBuffer(end - begin);
        //    var resultBytes = new Uint8Array(result);
        //    var sourceBytes = new Uint8Array(this.data.buffer, begin, end - begin);
        //    resultBytes.set(sourceBytes);
        //    return resultBytes.buffer;
        //}
        /**
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @returns 双精度（64 位）浮点数
         * @method egret.ByteArray#readDouble
         */
        ByteArray.prototype.readDouble = function () {
            if (!this.validate(ByteArray.SIZE_OF_FLOAT64))
                return null;
            var value = this.data.getFloat64(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT64;
            return value;
        };
        /**
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @returns 单精度（32 位）浮点数
         * @method egret.ByteArray#readFloat
         */
        ByteArray.prototype.readFloat = function () {
            if (!this.validate(ByteArray.SIZE_OF_FLOAT32))
                return null;
            var value = this.data.getFloat32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT32;
            return value;
        };
        /**
         * 从字节流中读取一个带符号的 32 位整数
         * @returns 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @method egret.ByteArray#readFloat
         */
        ByteArray.prototype.readInt = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT32))
                return null;
            var value = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT32;
            return value;
        };
        //        public readInt64():Int64{
        //            if (!this.validate(ByteArray.SIZE_OF_UINT32)) return null;
        //
        //            var low = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_INT32;
        //            var high = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_INT32;
        //            return new Int64(low,high);
        //        }
        /**
         * 使用指定的字符集从字节流中读取指定长度的多字节字符串
         * @param length 要从字节流中读取的字节数
         * @param charSet 表示用于解释字节的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readMultiByte
         */
        //public readMultiByte(length:number, charSet?:string):string {
        //    if (!this.validate(length)) return null;
        //
        //    return "";
        //}
        /**
         * 从字节流中读取一个带符号的 16 位整数
         * @returns 介于 -32768 和 32767 之间的 16 位带符号整数
         * @method egret.ByteArray#readShort
         */
        ByteArray.prototype.readShort = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT16))
                return null;
            var value = this.data.getInt16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT16;
            return value;
        };
        /**
         * 从字节流中读取无符号的字节
         * @returns 介于 0 和 255 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedByte
         */
        ByteArray.prototype.readUnsignedByte = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT8))
                return null;
            return this.data.getUint8(this.position++);
        };
        /**
         * 从字节流中读取一个无符号的 32 位整数
         * @returns 介于 0 和 4294967295 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedInt
         */
        ByteArray.prototype.readUnsignedInt = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT32))
                return null;
            var value = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT32;
            return value;
        };
        //public readVariableSizedUnsignedInt():number {
        //    var i:number;
        //    var c:number = this.data.getUint8(this.position++);
        //    if (c != 0xFF) {
        //        i = c << 8;
        //        c = this.data.getUint8(this.position++);
        //        i |= c;
        //    }
        //    else {
        //        c = this.data.getUint8(this.position++);
        //        i = c << 16;
        //        c = this.data.getUint8(this.position++);
        //        i |= c << 8;
        //        c = this.data.getUint8(this.position++);
        //        i |= c;
        //    }
        //    return i;
        //}
        //		public readUnsignedInt64():UInt64{
        //            if (!this.validate(ByteArray.SIZE_OF_UINT32)) return null;
        //
        //            var low = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_UINT32;
        //            var high = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_UINT32;
        //			return new UInt64(low,high);
        //        }
        /**
         * 从字节流中读取一个无符号的 16 位整数
         * @returns 介于 0 和 65535 之间的 16 位无符号整数
         * @method egret.ByteArray#readUnsignedShort
         */
        ByteArray.prototype.readUnsignedShort = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT16))
                return null;
            var value = this.data.getUint16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            return value;
        };
        /**
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readUTF
         */
        ByteArray.prototype.readUTF = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT16))
                return null;
            var length = this.data.getUint16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            if (length > 0) {
                return this.readUTFBytes(length);
            }
            else {
                return "";
            }
        };
        /**
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @returns 由指定长度的 UTF-8 字节组成的字符串
         * @method egret.ByteArray#readUTFBytes
         */
        ByteArray.prototype.readUTFBytes = function (length) {
            if (!this.validate(length))
                return null;
            var bytes = new Uint8Array(this.buffer, this.bufferOffset + this.position, length);
            this.position += length;
            /*var bytes: Uint8Array = new Uint8Array(new ArrayBuffer(length));
             for (var i = 0; i < length; i++) {
             bytes[i] = this.data.getUint8(this.position++);
             }*/
            return this.decodeUTF8(bytes);
        };
        //public readStandardString(length:number):string {
        //    if (!this.validate(length)) return null;
        //
        //    var str:string = "";
        //
        //    for (var i = 0; i < length; i++) {
        //        str += String.fromCharCode(this.data.getUint8(this.position++));
        //    }
        //    return str;
        //}
        //public readStringTillNull(keepEvenByte:boolean = true):string {
        //
        //    var str:string = "";
        //    var num:number = 0;
        //    while (this.bytesAvailable > 0) {
        //        var b:number = this.data.getUint8(this.position++);
        //        num++;
        //        if (b != 0) {
        //            str += String.fromCharCode(b);
        //        } else {
        //            if (keepEvenByte && num % 2 != 0) {
        //                this.position++;
        //            }
        //            break;
        //        }
        //    }
        //    return str;
        //}
        /**
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @method egret.ByteArray#writeBoolean
         */
        ByteArray.prototype.writeBoolean = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_BOOLEAN);
            this.data.setUint8(this.position++, value ? 1 : 0);
        };
        /**
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @method egret.ByteArray#writeByte
         */
        ByteArray.prototype.writeByte = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT8);
            this.data.setInt8(this.position++, value);
        };
        //public writeUnsignedByte(value:number):void {
        //    this.validateBuffer(ByteArray.SIZE_OF_UINT8);
        //
        //    this.data.setUint8(this.position++, value);
        //}
        /**
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @method egret.ByteArray#writeBytes
         */
        ByteArray.prototype.writeBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            var writeLength;
            if (offset < 0) {
                return;
            }
            if (length < 0) {
                return;
            }
            else if (length == 0) {
                writeLength = bytes.length - offset;
            }
            else {
                writeLength = Math.min(bytes.length - offset, length);
            }
            if (writeLength > 0) {
                this.validateBuffer(writeLength);
                var tmp_data = new DataView(bytes.buffer);
                for (var i = offset; i < writeLength + offset; i++) {
                    this.data.setUint8(this.position++, tmp_data.getUint8(i));
                }
            }
        };
        /**
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @method egret.ByteArray#writeDouble
         */
        ByteArray.prototype.writeDouble = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT64;
        };
        /**
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @method egret.ByteArray#writeFloat
         */
        ByteArray.prototype.writeFloat = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT32;
        };
        /**
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @method egret.ByteArray#writeInt
         */
        ByteArray.prototype.writeInt = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT32);
            this.data.setInt32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT32;
        };
        /**
         * 使用指定的字符集将多字节字符串写入字节流
         * @param value 要写入的字符串值
         * @param charSet 表示要使用的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @method egret.ByteArray#writeMultiByte
         */
        //public writeMultiByte(value:string, charSet:string):void {
        //
        //}
        /**
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @method egret.ByteArray#writeShort
         */
        ByteArray.prototype.writeShort = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT16);
            this.data.setInt16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT16;
        };
        //public writeUnsignedShort(value:number):void {
        //    this.validateBuffer(ByteArray.SIZE_OF_UINT16);
        //
        //    this.data.setUint16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
        //    this.position += ByteArray.SIZE_OF_UINT16;
        //}
        /**
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @method egret.ByteArray#writeUnsignedInt
         */
        ByteArray.prototype.writeUnsignedInt = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_UINT32);
            this.data.setUint32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT32;
        };
        /**
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTF
         */
        ByteArray.prototype.writeUTF = function (value) {
            var utf8bytes = this.encodeUTF8(value);
            var length = utf8bytes.length;
            this.validateBuffer(ByteArray.SIZE_OF_UINT16 + length);
            this.data.setUint16(this.position, length, this.endian === Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            this._writeUint8Array(utf8bytes, false);
        };
        /**
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTFBytes
         */
        ByteArray.prototype.writeUTFBytes = function (value) {
            this._writeUint8Array(this.encodeUTF8(value));
        };
        ByteArray.prototype.toString = function () {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
        };
        /**
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        ByteArray.prototype._writeUint8Array = function (bytes, validateBuffer) {
            if (validateBuffer === void 0) { validateBuffer = true; }
            if (validateBuffer) {
                this.validateBuffer(this.position + bytes.length);
            }
            for (var i = 0; i < bytes.length; i++) {
                this.data.setUint8(this.position++, bytes[i]);
            }
        };
        /**
         * @private
         */
        ByteArray.prototype.validate = function (len) {
            //len += this.data.byteOffset;
            if (this.data.byteLength > 0 && this._position + len <= this.data.byteLength) {
                return true;
            }
            else {
            }
        };
        /*********************/
        /*  PRIVATE METHODS   */
        /*********************/
        ByteArray.prototype.validateBuffer = function (len, needReplace) {
            if (needReplace === void 0) { needReplace = false; }
            this.write_position = len > this.write_position ? len : this.write_position;
            len += this._position;
            if (this.data.byteLength < len || needReplace) {
                var tmp = new Uint8Array(new ArrayBuffer(len + this.BUFFER_EXT_SIZE));
                var length = Math.min(this.data.buffer.byteLength, len + this.BUFFER_EXT_SIZE);
                tmp.set(new Uint8Array(this.data.buffer, 0, length));
                this.buffer = tmp.buffer;
            }
        };
        /**
         * UTF-8 Encoding/Decoding
         */
        ByteArray.prototype.encodeUTF8 = function (str) {
            var pos = 0;
            var codePoints = this.stringToCodePoints(str);
            var outputBytes = [];
            while (codePoints.length > pos) {
                var code_point = codePoints[pos++];
                if (this.inRange(code_point, 0xD800, 0xDFFF)) {
                    this.encoderError(code_point);
                }
                else if (this.inRange(code_point, 0x0000, 0x007f)) {
                    outputBytes.push(code_point);
                }
                else {
                    var count, offset;
                    if (this.inRange(code_point, 0x0080, 0x07FF)) {
                        count = 1;
                        offset = 0xC0;
                    }
                    else if (this.inRange(code_point, 0x0800, 0xFFFF)) {
                        count = 2;
                        offset = 0xE0;
                    }
                    else if (this.inRange(code_point, 0x10000, 0x10FFFF)) {
                        count = 3;
                        offset = 0xF0;
                    }
                    outputBytes.push(this.div(code_point, Math.pow(64, count)) + offset);
                    while (count > 0) {
                        var temp = this.div(code_point, Math.pow(64, count - 1));
                        outputBytes.push(0x80 + (temp % 64));
                        count -= 1;
                    }
                }
            }
            return new Uint8Array(outputBytes);
        };
        ByteArray.prototype.decodeUTF8 = function (data) {
            var fatal = false;
            var pos = 0;
            var result = "";
            var code_point;
            var utf8_code_point = 0;
            var utf8_bytes_needed = 0;
            var utf8_bytes_seen = 0;
            var utf8_lower_boundary = 0;
            while (data.length > pos) {
                var _byte = data[pos++];
                if (_byte === this.EOF_byte) {
                    if (utf8_bytes_needed !== 0) {
                        code_point = this.decoderError(fatal);
                    }
                    else {
                        code_point = this.EOF_code_point;
                    }
                }
                else {
                    if (utf8_bytes_needed === 0) {
                        if (this.inRange(_byte, 0x00, 0x7F)) {
                            code_point = _byte;
                        }
                        else {
                            if (this.inRange(_byte, 0xC2, 0xDF)) {
                                utf8_bytes_needed = 1;
                                utf8_lower_boundary = 0x80;
                                utf8_code_point = _byte - 0xC0;
                            }
                            else if (this.inRange(_byte, 0xE0, 0xEF)) {
                                utf8_bytes_needed = 2;
                                utf8_lower_boundary = 0x800;
                                utf8_code_point = _byte - 0xE0;
                            }
                            else if (this.inRange(_byte, 0xF0, 0xF4)) {
                                utf8_bytes_needed = 3;
                                utf8_lower_boundary = 0x10000;
                                utf8_code_point = _byte - 0xF0;
                            }
                            else {
                                this.decoderError(fatal);
                            }
                            utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                            code_point = null;
                        }
                    }
                    else if (!this.inRange(_byte, 0x80, 0xBF)) {
                        utf8_code_point = 0;
                        utf8_bytes_needed = 0;
                        utf8_bytes_seen = 0;
                        utf8_lower_boundary = 0;
                        pos--;
                        code_point = this.decoderError(fatal, _byte);
                    }
                    else {
                        utf8_bytes_seen += 1;
                        utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                        if (utf8_bytes_seen !== utf8_bytes_needed) {
                            code_point = null;
                        }
                        else {
                            var cp = utf8_code_point;
                            var lower_boundary = utf8_lower_boundary;
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                code_point = cp;
                            }
                            else {
                                code_point = this.decoderError(fatal, _byte);
                            }
                        }
                    }
                }
                //Decode string
                if (code_point !== null && code_point !== this.EOF_code_point) {
                    if (code_point <= 0xFFFF) {
                        if (code_point > 0)
                            result += String.fromCharCode(code_point);
                    }
                    else {
                        code_point -= 0x10000;
                        result += String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff));
                        result += String.fromCharCode(0xDC00 + (code_point & 0x3ff));
                    }
                }
            }
            return result;
        };
        ByteArray.prototype.encoderError = function (code_point) {
            //$error(1026, code_point);
        };
        ByteArray.prototype.decoderError = function (fatal, opt_code_point) {
            if (fatal) {
            }
            return opt_code_point || 0xFFFD;
        };
        ByteArray.prototype.inRange = function (a, min, max) {
            return min <= a && a <= max;
        };
        ByteArray.prototype.div = function (n, d) {
            return Math.floor(n / d);
        };
        ByteArray.prototype.stringToCodePoints = function (string) {
            /** @type {Array.<number>} */
            var cps = [];
            // Based on http://www.w3.org/TR/WebIDL/#idl-DOMString
            var i = 0, n = string.length;
            while (i < string.length) {
                var c = string.charCodeAt(i);
                if (!this.inRange(c, 0xD800, 0xDFFF)) {
                    cps.push(c);
                }
                else if (this.inRange(c, 0xDC00, 0xDFFF)) {
                    cps.push(0xFFFD);
                }
                else {
                    if (i === n - 1) {
                        cps.push(0xFFFD);
                    }
                    else {
                        var d = string.charCodeAt(i + 1);
                        if (this.inRange(d, 0xDC00, 0xDFFF)) {
                            var a = c & 0x3FF;
                            var b = d & 0x3FF;
                            i += 1;
                            cps.push(0x10000 + (a << 10) + b);
                        }
                        else {
                            cps.push(0xFFFD);
                        }
                    }
                }
                i += 1;
            }
            return cps;
        };
        ByteArray.SIZE_OF_BOOLEAN = 1;
        ByteArray.SIZE_OF_INT8 = 1;
        ByteArray.SIZE_OF_INT16 = 2;
        ByteArray.SIZE_OF_INT32 = 4;
        ByteArray.SIZE_OF_UINT8 = 1;
        ByteArray.SIZE_OF_UINT16 = 2;
        ByteArray.SIZE_OF_UINT32 = 4;
        ByteArray.SIZE_OF_FLOAT32 = 4;
        ByteArray.SIZE_OF_FLOAT64 = 8;
        return ByteArray;
    }());
    egret3d.ByteArray = ByteArray;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.Debug
    * @classdesc
    * 调试面板
    */
    var Debug = (function () {
        /**
         * @language zh_CN
         * 构造
         */
        function Debug() {
            this.isDebug = false;
            this._console = document.createElement('console');
            document.body.appendChild(this._console);
            this._console.style.color = "red";
            this._console.style.zIndex = "1000";
            this._console.style.position = "absolute";
            this._console.style.top = "10px";
            this._console.style.left = "10px";
        }
        /**
         * @language zh_CN
         * 输出调试信息
         * @param parameters
         */
        Debug.prototype.trace = function () {
            var parameters = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parameters[_i - 0] = arguments[_i];
            }
            if (this.isDebug) {
                this.reset();
                var len = parameters.length;
                for (var i = 0; i < len; i++) {
                    this._console.innerHTML += parameters[i] + "</br>";
                }
            }
        };
        /**
         * @language zh_CN
         * 重置显示数据
         */
        Debug.prototype.reset = function () {
            this._console.innerHTML = "";
        };
        Object.defineProperty(Debug, "instance", {
            /**
             * @language zh_CN
             * 取到当前Debug单例对象
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new Debug();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Debug._instance = null;
        return Debug;
    }());
    egret3d.Debug = Debug;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @private
     * @class egret3d.StringUtil
     * @classdesc
     * 字符串处理工具类
     */
    var StringUtil = (function () {
        function StringUtil() {
        }
        /**
         * @language zh_CN
         * @private
         * 解析文件内容(按行解析)
         * @param file
         * @returns 行列表
         */
        StringUtil.parseContent = function (file) {
            var shaderList = new Array();
            var node = "";
            var endChar = ";";
            var index = -1;
            for (var i = 0; i < file.length; ++i) {
                if (file.charAt(i) == "{") {
                    index = node.indexOf("=");
                    if (index < 0) {
                        endChar = "}";
                    }
                }
                if (node == "") {
                    if (file.charAt(i) == " " || file.charAt(i) == "    ") {
                        continue;
                    }
                }
                node += file.charAt(i);
                if (endChar != "\n") {
                    if (node.indexOf("#extension") >= 0) {
                        endChar = "\n";
                    }
                }
                if (endChar == file.charAt(i)) {
                    if (endChar == "}") {
                        var s_num = 0;
                        var e_num = 0;
                        for (var j = 0; j < node.length; ++j) {
                            if (node.charAt(j) == "{") {
                                s_num++;
                            }
                            else if (node.charAt(j) == "}") {
                                e_num++;
                            }
                        }
                        if (s_num != e_num) {
                            continue;
                        }
                        if (node.indexOf("struct") >= 0) {
                            endChar = ";";
                            continue;
                        }
                    }
                    if (node.length > 0) {
                        shaderList.push(node);
                    }
                    node = "";
                    endChar = ";";
                }
            }
            return shaderList;
        };
        /**
         * @language zh_CN
         * 解析一行的内容 有多少个成员
         * @param line 源内容
         * @returns 成员列表
         */
        StringUtil.parseLines = function (line) {
            var list = new Array();
            var value = "";
            for (var i = 0; i < line.length; ++i) {
                if (line.charAt(i) != " " && line.charAt(i) != "\t" && line.charAt(i) != "," &&
                    line.charAt(i) != "\r" && line.charAt(i) != "\n") {
                    if (line.charAt(i) == ";") {
                        if (value.length > 0) {
                            list.push(value);
                            value = "";
                        }
                        list.push(";");
                        break;
                    }
                    else if (line.charAt(i) == "=") {
                        if (value.length > 0) {
                            list.push(value);
                            value = "";
                        }
                        list.push("=");
                        continue;
                    }
                    value += line.charAt(i);
                    if (i == line.length - 1 && line != "") {
                        list.push(value);
                        value = "";
                    }
                }
                else {
                    if (value != "") {
                        list.push(value);
                        value = "";
                    }
                }
            }
            return list;
        };
        /**
         * @language zh_CN
         * 是否存在此字符串
         * @param fields 被检测的列表
         * @param str 比较字符串
         * @returns 成功返回true
         */
        StringUtil.hasString = function (fields, str) {
            for (var i = 0; i < fields.length; ++i) {
                if (fields[i] == str) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @language zh_CN
         * 得到值的内容
         * @param fields 成员列表
         * @returns 值
         */
        StringUtil.getVarName = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 4 >= 0 && fields.length - 4 < fields.length) {
                    return fields[fields.length - 4];
                }
                return "";
            }
            if (fields.length - 2 >= 0 && fields.length - 2 < fields.length) {
                return fields[fields.length - 2];
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量的值
         * @param fields 变量数据列表
         * @returns 变量的值
         */
        StringUtil.getVarValue = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 2 >= 0 && fields.length - 2 < fields.length) {
                    return fields[fields.length - 2];
                }
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量类型
         * @param fields 变量数据列表
         * @returns 变量类型
         */
        StringUtil.getVarType = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 5 >= 0 && fields.length - 5 < fields.length) {
                    return fields[fields.length - 5];
                }
                return "";
            }
            if (fields.length - 3 >= 0 && fields.length - 3 < fields.length) {
                return fields[fields.length - 3];
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量属性
         * @param fields 变量数据列表
         * @returns 变量属性
         */
        StringUtil.getVarKey = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length > 5) {
                    return fields[0];
                }
                else {
                    return "";
                }
            }
            if (fields.length > 3) {
                return fields[0];
            }
            return "";
        };
        /**
         * @language zh_CN
         * @private
         * 筛选文件中的指定字符去掉
         * @param file xxx
         * @returns 筛选后的字符
         */
        StringUtil.processShaderFile = function (file) {
            var filterChar = ["\n", "\r"];
            filterChar = [];
            var src = file;
            var dest = src;
            while (true) {
                var pos = src.indexOf("//");
                if (pos < 0) {
                    break;
                }
                var end = src.indexOf("\r\n", pos);
                if (end == -1) {
                    end = src.indexOf("\n", pos);
                }
                var slice_s = src.slice(pos, end);
                src = src.replace(slice_s, "");
                if (src == dest) {
                    break;
                }
                dest = src;
            }
            for (var i = 0; i < filterChar.length; ++i) {
                while (true) {
                    dest = src.replace(filterChar[i], "");
                    if (src == dest) {
                        break;
                    }
                    src = dest;
                }
            }
            return src;
        };
        /**
         * @language zh_CN
         * 解析字符颜色值
         * @param color
         * @returns
         */
        StringUtil.colorRgb = function (color) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var sColor = color.toLowerCase();
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值  
                var sColorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
                }
                return "RGB(" + sColorChange.join(",") + ")";
            }
            else {
                return sColor;
            }
        };
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        StringUtil.getLineType = function (line) {
            var index = line.indexOf("{");
            if (index > 0) {
                var firstStr = line.substr(0, index);
                if (firstStr.indexOf("struct") >= 0) {
                    var s_pos = firstStr.lastIndexOf(" ");
                    s_pos++;
                    var structName = firstStr.substr(s_pos, firstStr.length - s_pos);
                    return ("struct " + structName);
                }
                if (firstStr.indexOf("=") < 0) {
                    var pos = line.indexOf("(");
                    var s_pos = line.lastIndexOf(" ", pos);
                    s_pos++;
                    var func = line.substr(s_pos, pos - s_pos);
                    return ("function " + func);
                }
            }
            return "unknown";
        };
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        StringUtil.processStruct = function (name, structStr, content) {
            var pos = structStr.lastIndexOf("}");
            pos++;
            var end = structStr.lastIndexOf(";");
            var varName = structStr.substr(pos, end - pos);
            var varList = StringUtil.parseLines(varName);
            for (var i = 0; i < varList.length; ++i) {
                var varTmp = StringUtil.getTemper(name + " " + varList[i] + ";");
                if (varTmp)
                    content.addVar(varTmp);
            }
        };
        /**
         * @language zh_CN
         * @private
         * @returns
         */
        StringUtil.getAttribute = function (shaderLine) {
            var tempStr = shaderLine;
            var tmpName;
            var valueType;
            var attribute;
            var tempArray = StringUtil.parseLines(tempStr);
            tmpName = StringUtil.getVarName(tempArray);
            valueType = StringUtil.getVarType(tempArray);
            attribute = new egret3d.GLSL.Attribute(tmpName, valueType);
            return attribute;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getTemper = function (shaderLine) {
            var tempStr = shaderLine;
            var tmpName;
            var valueType;
            var tmpVar;
            var tempArray = StringUtil.parseLines(tempStr);
            tmpName = StringUtil.getVarName(tempArray);
            valueType = StringUtil.getVarType(tempArray);
            tmpVar = new egret3d.GLSL.TmpVar(tmpName, valueType);
            return tmpVar;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getVarying = function (shaderLine) {
            var tempStr = shaderLine;
            var varyingName;
            var valueType;
            var varying;
            var tempArray = StringUtil.parseLines(tempStr);
            varyingName = StringUtil.getVarName(tempArray);
            valueType = StringUtil.getVarType(tempArray);
            varying = new egret3d.GLSL.Varying(varyingName, valueType);
            return varying;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getUniform = function (shaderLine) {
            var tempStr = shaderLine;
            var uniformName;
            var valueType;
            var uniform;
            var tempArray = StringUtil.parseLines(tempStr);
            uniformName = StringUtil.getVarName(tempArray);
            valueType = StringUtil.getVarType(tempArray);
            uniform = new egret3d.GLSL.Uniform(uniformName, valueType);
            return uniform;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getConst = function (shaderLine) {
            var tempStr = shaderLine;
            var constVarName;
            var valueType;
            var varValue;
            var constVar;
            var tempArray = StringUtil.parseLines(tempStr);
            constVarName = StringUtil.getVarName(tempArray);
            valueType = StringUtil.getVarType(tempArray);
            varValue = StringUtil.getVarValue(tempArray);
            constVar = new egret3d.GLSL.ConstVar(constVarName, valueType, varValue);
            return constVar;
        };
        StringUtil.getExtension = function (shaderLine) {
            var start = shaderLine.indexOf("#");
            var end = shaderLine.indexOf(" ");
            var type = shaderLine.substr(start, end);
            var namePosEnd = shaderLine.indexOf(":");
            var name = shaderLine.substr(end, namePosEnd - end);
            name = StringUtil.replaceCharacter(name, [" "], "");
            namePosEnd += 1;
            var value = shaderLine.substr(namePosEnd, shaderLine.length - namePosEnd);
            value = StringUtil.replaceCharacter(value, [" ", ":", "\n", "\r"], "");
            var extension = new egret3d.GLSL.Extension(name);
            extension.value = value;
            return extension;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getSampler2D = function (shaderLine) {
            var tempStr = shaderLine;
            var sampler2DName;
            var valueType;
            var sampler2D;
            var tempArray = StringUtil.parseLines(tempStr);
            sampler2DName = StringUtil.getVarName(tempArray);
            sampler2D = new egret3d.GLSL.Sampler2D(sampler2DName);
            return sampler2D;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.getSampler3D = function (shaderLine) {
            var tempStr = shaderLine;
            var sampler3DName;
            var valueType;
            var sampler3D;
            var tempArray = StringUtil.parseLines(tempStr);
            sampler3DName = StringUtil.getVarName(tempArray);
            sampler3D = new egret3d.GLSL.Sampler3D(sampler3DName);
            return sampler3D;
        };
        /**
        * @language zh_CN
        * @private
        * @returns
        */
        StringUtil.filterCharacter = function (name) {
            var src = name;
            var dest = src;
            for (var i = 0; i < StringUtil._filterChar.length; ++i) {
                while (true) {
                    dest = src.replace(StringUtil._filterChar[i], "");
                    if (src == dest) {
                        break;
                    }
                    src = dest;
                }
            }
            return dest;
        };
        StringUtil.replaceCharacter = function (src, searchValue, replaceValue) {
            var ret = src;
            var isBreak = false;
            while (!isBreak) {
                isBreak = true;
                for (var i = 0; i < searchValue.length; ++i) {
                    if (ret.indexOf(searchValue[i]) >= 0) {
                        isBreak = false;
                        break;
                    }
                }
                for (var i = 0; i < searchValue.length; ++i) {
                    ret = ret.replace(searchValue[i], replaceValue);
                }
            }
            return ret;
        };
        /**
         * @language zh_CN
         * @private
         */
        StringUtil._filterChar = [" ", "  ", ";", "\n", "\r", "\t", "\n", "\r", "\t"];
        return StringUtil;
    }());
    egret3d.StringUtil = StringUtil;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.CameraAnimationController
    * @classdesc
    * 摄像机动画控制器。
    * 每个摄像机动画绑定一个摄像机，控制摄像机的行为
    * 可以更换绑定的摄像机
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var CameraAnimationController = (function () {
        /**
        * @language zh_CN
        * 构造函数
        * @param camera 需要一个摄像机对象来创建摄像机动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        function CameraAnimationController(camera) {
            if (camera === void 0) { camera = null; }
            /**
            * @language zh_CN
            * 相机动画每帧数据列表
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.cameraAnimationFrames = [];
            this._playing = false;
            this._playTime = 0;
            this._currentFrameIndex = 0;
            this._loop = true;
            this._smooth = false;
            this._cameraAnimationFrame = new CameraAnimationFrame();
            this._camera = camera;
            this._cameraAnimationFrame.fov = 45;
            this._cameraAnimationFrame.rotation = new egret3d.Vector3D();
            this._cameraAnimationFrame.translation = new egret3d.Vector3D();
        }
        /**
        * @language zh_CN
        * 绑定动画控制的相机
        * @param camera
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraAnimationController.prototype.bindCamera = function (camera) {
            this._camera = camera;
        };
        /**
        * @language zh_CN
        * 播放相机动画 是否循环
        * @param isLoop 是否循环播放
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraAnimationController.prototype.play = function (isLoop) {
            if (this.cameraAnimationFrames.length <= 0)
                return;
            this._loop = isLoop;
            this._playTime = 0;
            this._camera.isController = false;
            this._playing = true;
        };
        /**
        * @language zh_CN
        * 停止播放相机动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraAnimationController.prototype.stop = function () {
            this._camera.isController = true;
            this._playing = false;
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraAnimationController.prototype.update = function (time, delay) {
            if (!this._playing)
                return;
            this._playTime += delay * 10;
            var Tnow = this._playTime % ((this.cameraAnimationFrames[this.cameraAnimationFrames.length - 1].time - this.cameraAnimationFrames[0].time) + (160));
            var currentFrameIndex = Math.floor(Tnow / (160)) % this.cameraAnimationFrames.length;
            if (!this._loop && this._currentFrameIndex > currentFrameIndex) {
                this._playing = false;
                this._camera.isController = true;
            }
            this._currentFrameIndex = currentFrameIndex;
            var currentFrame = this.cameraAnimationFrames[currentFrameIndex];
            if (this._smooth) {
                var nextFrameIndex = (currentFrameIndex + 1) % this.cameraAnimationFrames.length;
                var nextFrame = this.cameraAnimationFrames[nextFrameIndex];
                var t = (Tnow - currentFrame.time) / Math.abs(nextFrame.time - currentFrame.time);
                ///(v1.x - v0.x) * t + v0.x;
                this._cameraAnimationFrame.fov = (nextFrame.fov - currentFrame.fov) * t + currentFrame.fov;
                this._cameraAnimationFrame.rotation.copyFrom(currentFrame.rotation); ///.lerp(currentFrame.rotation, nextFrame.rotation, t);
                this._cameraAnimationFrame.translation.lerp(currentFrame.translation, nextFrame.translation, t);
            }
            else {
                this._cameraAnimationFrame.fov = currentFrame.fov;
                this._cameraAnimationFrame.rotation.copyFrom(currentFrame.rotation);
                this._cameraAnimationFrame.translation.copyFrom(currentFrame.translation);
            }
            this._camera.fieldOfView = this._cameraAnimationFrame.fov;
            this._camera.rotationX = this._cameraAnimationFrame.rotation.x * egret3d.MathUtil.RADIANS_TO_DEGREES + 90;
            this._camera.rotationY = this._cameraAnimationFrame.rotation.y * egret3d.MathUtil.RADIANS_TO_DEGREES;
            this._camera.rotationZ = this._cameraAnimationFrame.rotation.z * egret3d.MathUtil.RADIANS_TO_DEGREES;
            this._camera.position = this._cameraAnimationFrame.translation;
        };
        return CameraAnimationController;
    }());
    egret3d.CameraAnimationController = CameraAnimationController;
    /**
    * @private
    * @class egret3d.CameraAnimationFrame
    * @classdesc
    * 摄像机动画每帧数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    var CameraAnimationFrame = (function () {
        function CameraAnimationFrame() {
        }
        return CameraAnimationFrame;
    }());
    egret3d.CameraAnimationFrame = CameraAnimationFrame;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * @class egret3d.CameraAnimationManager
    * @classdesc
    * 摄像机管理器
    * 管理所有摄像机动画
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var CameraManager = (function () {
        /**
        * @language zh_CN
        * 构建一个摄像机管理对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        function CameraManager() {
            this.cameras = new Array();
        }
        CameraManager.prototype.addCamera = function (camera) {
            this.cameras.push(camera);
        };
        /**
        * @language zh_CN
        * 更新所有的摄像机
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraManager.prototype.update = function (time, delay) {
            for (var i = 0; i < this.cameras.length; ++i) {
                this.cameras[i].update(time, delay, this.cameras[i]);
            }
        };
        CameraManager.instance = new CameraManager();
        return CameraManager;
    }());
    egret3d.CameraManager = CameraManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @private
    * 摄像机类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    (function (CameraType) {
        /**
        * 透视投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraType[CameraType["perspective"] = 0] = "perspective";
        /**
        * 正交投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraType[CameraType["orthogonal"] = 1] = "orthogonal";
        /**
        * VR投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        CameraType[CameraType["VR"] = 2] = "VR";
    })(egret3d.CameraType || (egret3d.CameraType = {}));
    var CameraType = egret3d.CameraType;
    ;
    /**
    * VR类型
    * @private
    * @version Egret 3.0
    * @platform Web,Native
    */
    (function (VRType) {
        /**
        * 左眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        VRType[VRType["left"] = 0] = "left";
        /**
        * 右眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        VRType[VRType["right"] = 1] = "right";
    })(egret3d.VRType || (egret3d.VRType = {}));
    var VRType = egret3d.VRType;
    ;
    /**
    * @class egret3d.Camera3D
    * @classdesc
    * 相机数据处理，生成3D摄相机。</p>
    * 渲染场景从摄像机视点到缓冲区。</p>
    * 相机分为透视摄像机、正交摄像机、VR摄像机。</p>
    *
    * @see egret3d.Matrix4_4
    * @see egret3d.Object3D
    *
    * @includeExample camera/Camera3D.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Camera3D = (function (_super) {
        __extends(Camera3D, _super);
        /**
         * @language zh_CN
         * constructor
         * @param cameraType 相机类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        function Camera3D(cameraType) {
            if (cameraType === void 0) { cameraType = CameraType.perspective; }
            _super.call(this);
            /**
             * @language zh_CN
             * 相机投影矩阵
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.projectMatrix = new egret3d.Matrix4_4();
            this._unprojection = new egret3d.Matrix4_4();
            /**
             * @language zh_CN
             * 相机的视椎体，用来检测是否在当前相机可视范围内
             * @version Egret 3.0
             * @platform Web,Native
             */
            this.frustum = new egret3d.Frustum();
            this.viewPort = new egret3d.Rectangle();
            this._viewPort = new egret3d.Rectangle();
            this._scissorRect = new egret3d.Rectangle();
            this._aspectRatio = 1.0;
            this._fovY = 45.0;
            this._near = 1;
            this._far = 10000.0;
            this.temp = new egret3d.Matrix4_4();
            this._lookAtPosition = new egret3d.Vector3D();
            this._up = new egret3d.Vector3D(0, 1, 0);
            this._cameraType = 0;
            this._cameraMatrixChange = false;
            this._viewMatrix = new egret3d.Matrix4_4();
            this._tempQuat = new egret3d.Quaternion();
            this._animation = [];
            this._p = new egret3d.Vector3D();
            this.v = new egret3d.Vector3D();
            this.cameraType = cameraType;
            egret3d.CameraManager.instance.addCamera(this);
        }
        Object.defineProperty(Camera3D.prototype, "cameraType", {
            /**
             * @language zh_CN
             * 设置相机类型
             * @param cameraType 相机类型
             * @version Egret 3.0
             * @platform Web,Native
             */
            set: function (cameraType) {
                this._cameraType = cameraType;
                switch (cameraType) {
                    case CameraType.orthogonal:
                        this.cameraMatrix = this.modelMatrix;
                        ///this.projectMatrix.ortho(this._viewPort.width, this._viewPort.height, this._near, this._far);
                        this.updataOrth();
                        break;
                    case CameraType.perspective:
                        this.cameraMatrix = this.modelMatrix;
                        this.projectMatrix.perspective(this._fovY, this._aspectRatio, this._near, this._far);
                        break;
                    case CameraType.VR:
                        this.cameraMatrix = this.modelMatrix;
                        this.projectMatrix.perspective(this._fovY, 1.0, this._near, this._far);
                        this.eyeMatrix = this.eyeMatrix || new egret3d.EyesMatrix();
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * 打开VR相机
         * @param cameraType 相机类型
         * @param vrType VR类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.tap = function (cameraType, vrType) {
            if (vrType === void 0) { vrType = null; }
            if (cameraType == CameraType.VR) {
                this.eyeMatrix.updte(this.modelMatrix);
                if (vrType == VRType.left) {
                    this.cameraMatrix = this.eyeMatrix.leftEyeMatrix;
                }
                else if (vrType == VRType.right) {
                    this.cameraMatrix = this.eyeMatrix.rightEyeMatrix;
                }
            }
            else {
                this.cameraMatrix = this.modelMatrix;
            }
        };
        Object.defineProperty(Camera3D.prototype, "aspectRatio", {
            /**
            * @language zh_CN
            * 返回相机横纵比
            *
            * @returns 横纵比
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._aspectRatio;
            },
            /**
            * @language zh_CN
            * 设置相机横纵比
            *
            * @param value 横纵比
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this._aspectRatio != value) {
                    this._aspectRatio = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "fieldOfView", {
            /**
            * @language zh_CN
            * 返回相机fovY
            *
            * @returns fovY
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._fovY;
            },
            /**
            * @language zh_CN
            * 设置相机fovY
            *
            * @param value fovY
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this._fovY != value) {
                    this._fovY = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "near", {
            /**
            * @language zh_CN
            * 返回相机近截面
            *
            * @returns 近截面
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._near;
            },
            /**
            * @language zh_CN
            * 设置相机近截面
            *
            * @param value 近截面
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this._near != value) {
                    this._near = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "far", {
            /**
            * @language zh_CN
            * 返回相机远截面
            *
            * @returns 远截面
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._far;
            },
            /**
            * @language zh_CN
            * 设置相机远截面
            *
            * @param value 远截面
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this._far != value) {
                    this._far = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "viewProjectionMatrix", {
            /**
            * @language zh_CN
            * 返回相机视图投影矩阵
            *
            * @returns 视图投影矩阵
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                this.cameraMatrix = this.modelMatrix;
                this.temp.copyFrom(this.cameraMatrix);
                this.temp.invert();
                this.temp.multiply(this.projectMatrix);
                return this.temp;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @language zh_CN
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.updateScissorRect = function (x, y, width, height) {
            this._scissorRect.x = x;
            this._scissorRect.y = y;
            this._scissorRect.width = width;
            this._scissorRect.height = height;
        };
        /**
         * @language zh_CN
         * 更新视口
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.updateViewport = function (x, y, width, height) {
            this._viewPort.x = x;
            this._viewPort.y = y;
            this._viewPort.width = width;
            this._viewPort.height = height;
        };
        /**
         * @language zh_CN
         * 当前对象对视位置
         * @param pos 对象的位置
         * @param target 目标的位置
         * @param up 向上的方向
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.lookAt = function (pos, target, up) {
            if (up === void 0) { up = egret3d.Vector3D.Y_AXIS; }
            this.position = pos;
            this._lookAtPosition.copyFrom(target);
            this._up.copyFrom(up);
            this._viewMatrix.lookAt(this._pos, this._lookAtPosition, this._up);
            this._viewMatrix.invert();
            var prs = this._viewMatrix.decompose(egret3d.Orientation3D.QUATERNION);
            this._tempQuat.x = prs[1].x;
            this._tempQuat.y = prs[1].y;
            this._tempQuat.z = prs[1].z;
            this._tempQuat.w = prs[1].w;
            this.orientation = this._tempQuat;
        };
        Camera3D.prototype.onUpdateTransform = function () {
            this._viewMatrix.copyFrom(this._modeMatrix3D);
            this._viewMatrix.invert();
        };
        Object.defineProperty(Camera3D.prototype, "viewMatrix", {
            /**
             * @language zh_CN
             *
             * 相机视图矩阵
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this._viewMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "lookAtPosition", {
            /**
             * @language zh_CN
             *
             * 相机目标点
             * @version Egret 3.0
             * @platform Web,Native
             */
            get: function () {
                return this._lookAtPosition;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * 更新正交矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.updataOrth = function () {
            var _projectionHeight = 800;
            var raw = new Float32Array(16);
            var _yMax = _projectionHeight * .5;
            var _xMax = _yMax * this._aspectRatio;
            var left, right, top, bottom;
            ///return 
            if (this._scissorRect.x == 0 && this._scissorRect.y == 0 && this._scissorRect.width == this._viewPort.width && this._scissorRect.height == this._viewPort.height) {
                /// assume symmetric frustum
                left = -_xMax;
                right = _xMax;
                top = -_yMax;
                bottom = _yMax;
                raw[0] = 2 / (_projectionHeight * this._aspectRatio);
                raw[5] = 2 / _projectionHeight;
                raw[10] = 1 / (this._far - this._near);
                raw[14] = this._near / (this._near - this._far);
                raw[1] = raw[2] = raw[3] = raw[4] =
                    raw[6] = raw[7] = raw[8] = raw[9] =
                        raw[11] = raw[12] = raw[13] = 0;
                raw[15] = 1;
            }
            else {
                var xWidth = _xMax * (this._viewPort.width / this._scissorRect.width);
                var yHgt = _yMax * (this._viewPort.height / this._scissorRect.height);
                var center = _xMax * (this._scissorRect.x * 2 - this._viewPort.width) / this._scissorRect.width + _xMax;
                var middle = -_yMax * (this._scissorRect.y * 2 - this._viewPort.height) / this._scissorRect.height - _yMax;
                left = center - xWidth;
                right = center + xWidth;
                top = middle - yHgt;
                bottom = middle + yHgt;
                raw[0] = 2 * 1 / (right - left);
                raw[5] = -2 * 1 / (top - bottom);
                raw[10] = 1 / (this._far - this._near);
                raw[12] = (right + left) / (right - left);
                raw[13] = (bottom + top) / (bottom - top);
                raw[14] = this._near / (this.near - this.far);
                raw[1] = raw[2] = raw[3] = raw[4] =
                    raw[6] = raw[7] = raw[8] = raw[9] = raw[11] = 0;
                raw[15] = 1;
            }
            this.projectMatrix.copyRawDataFrom(raw);
        };
        /**
         * @language zh_CN
         * 检测对象是否在相机视椎体内
         * @param object 需要体测的对象
         * @returns 成功返回true
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.isVisibleToCamera = function (renderItem) {
            return renderItem.bound.inBound(this.frustum);
        };
        /**
         * @language zh_CN
         * 增加相机动画
         * @param name 相机动画名字
         * @param ani 相机动画
         * @version Egret 3.0
         * @platform Web,Native
         */
        Camera3D.prototype.addAnimation = function (name, ani) {
            this._animation[name] = ani;
        };
        /**
        * @language zh_CN
        * 播放某个动画
        * 根据动画名字来播放，指定摄像机，并且控制动画是否循环播放
        * @param name 动画名
        * @param isLoop 是否循环
        * @version Egret 3.0
        * @platform Web,Native
        */
        Camera3D.prototype.play = function (name, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            if (this._animation[name]) {
                this._animation[name].bindCamera(this);
                this._animation[name].play(isLoop);
            }
        };
        /**
        * @private
        * @language zh_CN
        * 当前对象数据更新
        * @private
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        Camera3D.prototype.update = function (time, delay, camera) {
            for (var key in this._animation) {
                this._animation[key].update(time, delay);
            }
        };
        Camera3D.prototype.object3DToScreenRay = function (n) {
            this._halfw = this.viewPort.width * 0.5;
            this._halfh = this.viewPort.height * 0.5;
            this._p = this.modelMatrix.transformVector(n, this._p);
            this._p = this.project(this._p);
            this._p.x = this._halfw + this._p.x * this._halfw;
            this._p.y = this._halfh - this._p.y * this._halfh;
            return this._p;
        };
        Camera3D.prototype.ScreenRayToObject3D = function (n) {
            this._halfw = this.viewPort.width * 0.5;
            this._halfh = this.viewPort.height * 0.5;
            this._p.x = (n.x - this._halfw) / this._halfw;
            this._p.y = (this._halfh - n.y) / this._halfh;
            this._p = this.unproject(this._p.x, this._p.y, n.z);
            this.sceneTransform.transformVector(this._p, this._p);
            return this._p;
        };
        Camera3D.prototype.unproject = function (nX, nY, sZ) {
            this.v.x = nX;
            this.v.y = -nY;
            this.v.z = sZ;
            this.v.w = 1.0;
            this.v.x *= sZ;
            this.v.y *= sZ;
            this._unprojection.copyFrom(this.projectMatrix);
            this._unprojection.invert();
            this._unprojection.transformVector(this.v, this.v);
            this.v.z = sZ;
            return this.v;
        };
        Camera3D.prototype.project = function (n) {
            this._p = this.projectMatrix.transformVector(n);
            this._p.x = this._p.x / this._p.w;
            this._p.y = -this._p.y / this._p.w;
            this._p.z = n.z;
            return this._p;
        };
        return Camera3D;
    }(egret3d.Object3D));
    egret3d.Camera3D = Camera3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.View3D
     * @classdesc
     * 渲染视图。</p>
     * view3D 是整个3D引擎的渲染视口，可以控制渲染窗口的大小，渲染的方式。</p>
     * 可以设置不同的相机 camera3D。</p>
     * 交换不同的场景元素 scene3D 。</p>
     * 当前的View3D中会有一个Scene3D的节点和一个Camera3D来进行场景中的渲染。
     * 整个渲染的主循环通过 update  。</p>
     * Engre3DCanvas 中的View3D列表会主动调用View3D的update,加入了Engre3DCanvas中的View3D列表后不需要使用者update
     * @includeExample View3D.ts
     * @see egret3d.camera3d
     * @see egret3d.scene3D
     * @see egret3d.Egret3DCanvas
     * @version Egret 3.0
     * @platform Web,Native
     */
    var View3D = (function () {
        /**
        * @language zh_CN
        * 构建一个view3d对象
        * @param x 视口的屏幕x坐标
        * @param y 视口的屏幕y坐标
        * @param width 视口的屏幕宽度
        * @param height 视口的屏幕高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        function View3D(x, y, width, height) {
            this._viewPort = new egret3d.Rectangle();
            this._camera = new egret3d.Camera3D();
            this._scene = new egret3d.Scene3D();
            this._aspectRatio = 1;
            this._scissorRect = new egret3d.Rectangle();
            this._viewMatrix = new egret3d.Matrix4_4();
            this._backColor = new egret3d.Vector3D(0.3, 0.3, 0.6, 1.0);
            this._cleanParmerts = egret3d.Context3DProxy.gl.COLOR_BUFFER_BIT | egret3d.Context3DProxy.gl.DEPTH_BUFFER_BIT;
            this._sizeDiry = false;
            this._entityCollect = new egret3d.EntityCollect();
            this._entityCollect.root = this._scene;
            this._render = new egret3d.DefaultRender();
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        View3D.prototype.blender = function (cleanColor, cleanDepth) {
            this._cleanParmerts = (cleanColor ? egret3d.Context3DProxy.gl.COLOR_BUFFER_BIT : 0) | (cleanDepth ? egret3d.Context3DProxy.gl.DEPTH_BUFFER_BIT : 0);
        };
        Object.defineProperty(View3D.prototype, "backColor", {
            /**
            * @language zh_CN
            * 获取view3d背景颜色
            * @returns number 颜色值 a r g b
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return (this._backColor.w * 255 << 24) | (this._backColor.x * 255 << 16) | (this._backColor.y * 255 << 8) | (this._backColor.z * 255);
            },
            /**
            * @language zh_CN
            * 设置view3d背景颜色
            * @param value  颜色值 a r g b
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._backColor.w = (value >> 24 & 0xff) / 255;
                this._backColor.x = (value >> 16 & 0xff) / 255;
                this._backColor.y = (value >> 8 & 0xff) / 255;
                this._backColor.z = (value & 0xff) / 255;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "camera3D", {
            /**
            * @language zh_CN
            * 获取View3d中的渲染摄像机
            * @returns Camera3D 当前View3D的摄像机
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._camera;
            },
            /**
            * @language zh_CN
            * 设置View3d中的渲染摄像机
            * @param value 当前View3D的摄像机
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._camera = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "scene", {
            /**
            * @language zh_CN
            * 获取View3d中的场景对象
            * @returns Scene3D 场景对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._scene;
            },
            /**
            * @language zh_CN
            * 设置View3d中的场景对象
            * @param sc 当前View3D的场景对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (sc) {
                this._scene = sc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "x", {
            /**
            * @language zh_CN
            * 获得当前视口的屏幕x坐标
            * @returns number 视口的屏幕x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._viewPort.x;
            },
            /**
            * @language zh_CN
            * 设置当前视口的屏幕x坐标
            * @param x 视口的屏幕x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._viewPort.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "y", {
            /**
            * @language zh_CN
            * 获得当前视口的屏幕y坐标
            * @returns number 视口的屏幕y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._viewPort.y;
            },
            /**
            * @language zh_CN
            * 设置当前视口的屏幕y坐标
            * @param y 视口的屏幕y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._viewPort.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "width", {
            /**
            * @language zh_CN
            * 获取视口的屏幕宽度
            * @returns number 视口的屏幕宽度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._viewPort.width;
            },
            /**
            * @language zh_CN
            * 设置视口的屏幕宽度
            * @param width 视口的屏幕宽度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._viewPort.width = value;
                this._aspectRatio = this._viewPort.width / this._viewPort.height;
                this._camera.aspectRatio = this._aspectRatio;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "height", {
            /**
            * @language zh_CN
            * 获取视口的屏幕高度
            * @returns number 视口的屏幕高度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._viewPort.height;
            },
            /**
            * @language zh_CN
            * 设置视口的屏幕高度
            * @param width 视口的屏幕高度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                this._viewPort.height = value;
                this._aspectRatio = this._viewPort.width / this._viewPort.height;
                this._camera.aspectRatio = this._aspectRatio;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "entityCollect", {
            /**
            * @private
            * @language zh_CN
            * 获取View3D的数据收集对象
            * @returns EntityCollect 数据收集对象
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._entityCollect;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 添加一个Object3D对象进场景根节点
        * @param child3d Object3D需要添加的对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        View3D.prototype.addChild3D = function (child3d) {
            this._scene.addChild3D(child3d);
        };
        /**
        * @language zh_CN
        * 从场景根节点中移除一个Object3D对象
        * @param child3d 需要移除的Object3D对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        View3D.prototype.removeChild3D = function (child3d) {
            this._scene.removeChild3D(child3d);
        };
        /**
        * @language zh_CN
        * 检测x y 是否在当前视口内
        * @param x  x 坐标。
        * @param y  y 坐标。
        */
        View3D.prototype.inView3D = function (x, y) {
            return this._viewPort.inner(x, y);
        };
        /**
        * @private
        * @language zh_CN
        * @version Egret 3.0
        * @platform Web,Native
        */
        View3D.prototype.update = function (time, delay) {
            this._camera.viewPort = this._viewPort;
            this._entityCollect.update(this._camera);
            View3D._contex3DProxy.viewPort(this._viewPort.x, egret3d.ContextConfig.canvasRectangle.height - this._viewPort.height - this._viewPort.y, this._viewPort.width, this._viewPort.height);
            View3D._contex3DProxy.setScissorRectangle(this._viewPort.x, egret3d.ContextConfig.canvasRectangle.height - this._viewPort.height - this._viewPort.y, this._viewPort.width, this._viewPort.height);
            if (this._cleanParmerts & egret3d.Context3DProxy.gl.COLOR_BUFFER_BIT) {
                View3D._contex3DProxy.clearColor(this._backColor.x, this._backColor.y, this._backColor.z, this._backColor.w);
            }
            View3D._contex3DProxy.clear(this._cleanParmerts);
            this._render.draw(time, delay, View3D._contex3DProxy, this._entityCollect, this._camera);
        };
        /**
        * @language zh_CN
        * 请求全屏
        */
        View3D.requestFullScreen = function () {
            var dom = document.documentElement;
            if (dom.requestFullscreen) {
                dom.requestFullscreen();
            }
            else if (dom.webkitRequestFullScreen) {
                dom.webkitRequestFullScreen();
            }
        };
        /**
        * @language zh_CN
        * 退出全屏
        */
        View3D.exitFullscreen = function () {
            var de = document;
            if (de.exitFullscreen) {
                de.exitFullscreen();
            }
            else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            }
        };
        View3D._contex3DProxy = new egret3d.Context3DProxy();
        return View3D;
    }());
    egret3d.View3D = View3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Egret3DCanvas
    * @classdesc
    * 3dCanvas 是一个3d渲染画布 它继承EventDispatcher 可以监听部分事件。
    * 如：Event3D.ENTER_FRAME 每帧响应回调事件
    * 一个3d渲染画布里面有多个view3d ，
    * 多个view3d进行渲染
    * @includeExample Egret3DCanvas.ts
    * @see egret3d.EventDispatcher
    * @see egret3d.View3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Egret3DCanvas = (function (_super) {
        __extends(Egret3DCanvas, _super);
        /**
        * @language zh_CN
        * 构造一个Egret3DCanvas对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Egret3DCanvas(blend2D) {
            if (blend2D === void 0) { blend2D = false; }
            _super.call(this);
            /**
            * @private
            */
            this.canvas3DRectangle = new egret3d.Rectangle();
            this._view3DS = new Array();
            this.sizeDiry = true;
            this._time = 0;
            this._delay = 0;
            this._timeDate = null;
            egret3d.ShaderUtil.instance.load();
            this._envetManager = new egret3d.EventManager(this);
            this.canvas = document.createElement("canvas");
            this.canvas.style.position = "absolute";
            this.canvas.style.zIndex = "0";
            if (document.getElementsByClassName("egret-player").length > 0) {
                document.getElementsByClassName("egret-player")[0].appendChild(this.canvas);
            }
            else {
                document.body.appendChild(this.canvas);
            }
            this.canvas.id = "egret3D";
            this.canvas.oncontextmenu = function () {
                return false;
            };
            Egret3DCanvas.context3DProxy = new egret3d.Context3DProxy();
            egret3d.Context3DProxy.gl = this.canvas.getContext("experimental-webgl");
            if (!egret3d.Context3DProxy.gl)
                egret3d.Context3DProxy.gl = this.canvas.getContext("webgl");
            if (!egret3d.Context3DProxy.gl)
                alert("you drivers not suport webgl");
            Egret3DCanvas.context3DProxy.register();
            console.log("this.context3D ==>", egret3d.Context3DProxy.gl);
            egret3d.Input.canvas = this;
            this.initEvent();
        }
        Egret3DCanvas.prototype.initEvent = function () {
            this._enterFrameEvent3D = new egret3d.Event3D(egret3d.Event3D.ENTER_FRAME);
            this._enterFrameEvent3D.target = this;
        };
        Object.defineProperty(Egret3DCanvas.prototype, "x", {
            /**
            * @language zh_CN
            * 获取 Egret3DCanvas 的x坐标
            * @returns number 返回x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.canvas3DRectangle.x;
            },
            /**
            * @language zh_CN
            * 设置 Egret3DCanvas 的x坐标
            * @param x x坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this.canvas3DRectangle.x != value)
                    this.resize(value, this.canvas3DRectangle.y, this.canvas3DRectangle.width, this.canvas3DRectangle.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Egret3DCanvas.prototype, "y", {
            /**
            * @language zh_CN
            * 获取 Egret3DCanvas 的y坐标
            * @returns number 返回y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.canvas3DRectangle.y;
            },
            /**
            * @language zh_CN
            * 设置 Egret3DCanvas 的y坐标
            * @param y y坐标
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this.canvas3DRectangle.y != value)
                    this.resize(this.canvas3DRectangle.x, value, this.canvas3DRectangle.width, this.canvas3DRectangle.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Egret3DCanvas.prototype, "width", {
            /**
            * @language zh_CN
            * 获取 Egret3DCanvas 的宽度
            * @returns number 返回Egret3DCanvas 的宽度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.canvas3DRectangle.width;
            },
            /**
            * @language zh_CN
            * 设置 Egret3DCanvas 的宽度
            * @param value Egret3DCanvas 的宽度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this.canvas3DRectangle.width != value)
                    this.resize(this.canvas3DRectangle.x, this.canvas3DRectangle.y, value, this.canvas3DRectangle.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Egret3DCanvas.prototype, "height", {
            /**
            * @language zh_CN
            * 获取 Egret3DCanvas 的高度
            * @returns number 返回Egret3DCanvas 的高度
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this.canvas3DRectangle.height;
            },
            /**
            * @language zh_CN
            * 设置 Egret3DCanvas 的高度
            * @param value Egret3DCanvas 的高度
            * @version Egret 3.0
            * @platform Web,Native
            */
            set: function (value) {
                if (this.canvas3DRectangle.height != value)
                    this.resize(this.canvas3DRectangle.x, this.canvas3DRectangle.y, this.canvas3DRectangle.width, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Egret3DCanvas.prototype, "view3Ds", {
            /**
            * @language zh_CN
            * 获取 Egret3DCanvas 所有的view3d
            * @returns Array<View3D> 返回Egret3DCanvas view3ds列表
            * @version Egret 3.0
            * @platform Web,Native
            */
            get: function () {
                return this._view3DS;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * Egret3DCanvas 中 增加一个view3d
        * @param view3D 增加的渲染视口
        * @version Egret 3.0
        * @platform Web,Native
        */
        Egret3DCanvas.prototype.addView3D = function (view3D) {
            var index = this._view3DS.indexOf(view3D);
            if (index == -1)
                this._view3DS.push(view3D);
        };
        /**
        * @language zh_CN
        * Egret3DCanvas 中 移除一个view3d
        * @param view3D 移除的渲染视口
        * @version Egret 3.0
        * @platform Web,Native
        */
        Egret3DCanvas.prototype.removeView3D = function (view3D) {
            var index = this._view3DS.indexOf(view3D);
            if (index != -1)
                this._view3DS.splice(index);
        };
        /**
        * @language zh_CN
        * Egret3DCanvas 开始启动
        * @version Egret 3.0
        * @platform Web,Native
        */
        Egret3DCanvas.prototype.start = function () {
            this.update(0);
        };
        /**
        * @language zh_CN
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        Egret3DCanvas.prototype.update = function (delay) {
            var _this = this;
            this._timeDate = new Date();
            this._delay = this._timeDate.getTime() - this._time;
            this._time = this._timeDate.getTime();
            this._enterFrameEvent3D.time += this._time;
            this._enterFrameEvent3D.delay = this._delay;
            this.dispatchEvent(this._enterFrameEvent3D);
            egret3d.Context3DProxy.gl.enable(egret3d.ContextConfig.BLEND);
            egret3d.Context3DProxy.gl.enable(egret3d.ContextConfig.CULL_FACE);
            egret3d.Context3DProxy.gl.enable(egret3d.Context3DProxy.gl.SCISSOR_TEST);
            egret3d.View3D._contex3DProxy.viewPort(this.canvas3DRectangle.x, this.canvas3DRectangle.y, this.canvas3DRectangle.width, this.canvas3DRectangle.height);
            egret3d.View3D._contex3DProxy.setScissorRectangle(this.canvas3DRectangle.x, this.canvas3DRectangle.y, this.canvas3DRectangle.width, this.canvas3DRectangle.height);
            egret3d.CameraManager.instance.update(this._time, this._delay);
            for (var i = 0; i < this._view3DS.length; i++) {
                this._view3DS[i].update(this._time, this._delay);
            }
            requestAnimationFrame(function (delay) { return _this.update(delay); });
        };
        /**
        * @language zh_CN
        * 初始化,并创建显示区域的后台缓冲大小。
        * @param GPU_CONFIG
        * @param canvasRec
        * @event call
        */
        Egret3DCanvas.prototype.resize = function (x, y, width, height) {
            this.canvas3DRectangle.x = x;
            this.canvas3DRectangle.y = y;
            this.canvas3DRectangle.width = width;
            this.canvas3DRectangle.height = height;
            egret3d.ContextConfig.canvasRectangle = this.canvas3DRectangle;
            this.canvas.style.left = this.canvas3DRectangle.x.toString() + "px";
            this.canvas.style.top = this.canvas3DRectangle.y.toString() + "px";
            this.canvas.width = this.canvas3DRectangle.width;
            this.canvas.height = this.canvas3DRectangle.height;
        };
        return Egret3DCanvas;
    }(egret3d.EventDispatcher));
    egret3d.Egret3DCanvas = Egret3DCanvas;
})(egret3d || (egret3d = {}));
