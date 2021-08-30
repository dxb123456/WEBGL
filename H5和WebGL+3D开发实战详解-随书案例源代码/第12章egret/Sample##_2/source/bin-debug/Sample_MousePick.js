var Sample_MousePick = (function () {
    function Sample_MousePick(width, height) {
        var _this = this;
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        this._boxs = [null, null];
        this._currentSelected = null;
        this._time = 0;
        this._delay = 0;
        this._timeDate = null;
        this._view3D = null;
        this._viewPort = null;
        this._cameraCtl = null;
        this._viewPort = new egret3d.Rectangle(0, 0, width, height);
        egret3d.Egret3DDrive.requstContext3D(DeviceUtil.getGPUMode, this._viewPort, function () { return _this.onInit3D(); });
    }
    var d = __define,c=Sample_MousePick,p=c.prototype;
    p.onInit3D = function () {
        var _this = this;
        //创建View3D对象;
        this._view3D = new egret3d.View3D(this._viewPort);
        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());
        //设置像机视野距离;
        this._cameraCtl.setEyesLength(400);
        egret3d.AssetsManager.getInstance().setRootURL("resource/");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_f.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_b.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_l.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_r.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_u.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_d.jpg");
        egret3d.AssetsManager.getInstance().addEventListener(egret3d.Event3D.EVENT_LOAD_COMPLETE, function (e) { return _this.initScene(e); });
        egret3d.AssetsManager.getInstance().startLoad();
    };
    p.initScene = function (e) {
        var _this = this;
        var sky_f = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_f.jpg");
        var sky_b = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_b.jpg");
        var sky_l = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_l.jpg");
        var sky_r = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_r.jpg");
        var sky_u = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_u.jpg");
        var sky_d = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_d.jpg");
        var skyTexture = new egret3d.SkyTexture(sky_b, sky_f, sky_l, sky_r, sky_u, sky_d);
        var sky = new egret3d.Sky(skyTexture);
        this._view3D.sky = sky;
        var plane = new egret3d.Mesh(new egret3d.PlaneGeometry(), new egret3d.TextureMaterial());
        plane.y = -40;
        var box1 = new egret3d.Mesh(new egret3d.CubeGeometry(40, 40, 40), new egret3d.TextureMaterial());
        box1.x = -40;
        box1.y = 20;
        box1.material.blendMode = egret3d.BlendMode.ADD;
        var box2 = new egret3d.Mesh(new egret3d.CubeGeometry(40, 40, 40), new egret3d.TextureMaterial());
        box2.x = 40;
        box2.y = 20;
        box2.material.blendMode = egret3d.BlendMode.ALPHA;
        this._view3D.addChild3D(box1);
        this._view3D.addChild3D(box2);
        this._view3D.addChild3D(plane);
        var lightGroup = new egret3d.LightGroup();
        var directLight = new egret3d.DirectLight(new egret3d.Vector3D(100, 100, 100));
        directLight.diffuse = 0xffffff;
        lightGroup.addDirectLight(directLight);
        this._boxs[0] = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());
        this._boxs[0].x = -80;
        this._boxs[0].mouseEnable = true;
        this._boxs[0].addEventListener(egret3d.Event3D.MOUSE_CLICK, function (e) { return _this.onMouseClick(e); });
        this._boxs[0].material.lightGroup = lightGroup;
        this._view3D.addChild3D(this._boxs[0]);
        this._boxs[1] = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());
        this._boxs[1].x = 80;
        this._boxs[1].mouseEnable = true;
        this._boxs[1].addEventListener(egret3d.Event3D.MOUSE_CLICK, function (e) { return _this.onMouseClick(e); });
        this._boxs[1].material.lightGroup = lightGroup;
        this._view3D.addChild3D(this._boxs[1]);
        this._cameraCtl.setEyesLength(1000);
        this._time = new Date().getTime();
        requestAnimationFrame(function () { return _this.onUpdate(); });
    };
    p.onMouseClick = function (e) {
        this._currentSelected = e.currentTarget;
    };
    p.onUpdate = function () {
        var _this = this;
        this._timeDate = new Date();
        this._delay = this._timeDate.getTime() - this._time;
        this._time = this._timeDate.getTime();
        if (this._currentSelected != null) {
            this._currentSelected.rotationY += this._delay / 4.0;
        }
        this._cameraCtl.update();
        this._view3D.renden(this._time, this._delay);
        requestAnimationFrame(function () { return _this.onUpdate(); });
    };
    return Sample_MousePick;
})();
egret.registerClass(Sample_MousePick,'Sample_MousePick');
