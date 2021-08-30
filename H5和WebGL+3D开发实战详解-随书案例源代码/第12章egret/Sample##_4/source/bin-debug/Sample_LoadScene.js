var Sample_LoadScene = (function () {
    function Sample_LoadScene(width, height) {
        var _this = this;
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        this._time = 0;
        this._delay = 0;
        this._timeDate = null;
        this._view3D = null;
        this._viewPort = null;
        this._cameraCtl = null;
        this._viewPort = new egret3d.Rectangle(0, 0, width, height);
        egret3d.Egret3DDrive.requstContext3D(DeviceUtil.getGPUMode, this._viewPort, function () { return _this.onInit3D(); });
    }
    var d = __define,c=Sample_LoadScene,p=c.prototype;
    p.onInit3D = function () {
        var _this = this;
        //创建View3D对象;
        this._view3D = new egret3d.View3D(this._viewPort);
        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());
        //设置像机视野距离;
        this._cameraCtl.setEyesLength(1000);
        egret3d.AssetsManager.getInstance().setRootURL("resource/");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/front.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/back.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/left.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/right.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/top.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/bottom.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("scene/fangzi2.png");
        egret3d.AssetsManager.getInstance().addLoadScene("scene");
        egret3d.AssetsManager.getInstance().addEventListener(egret3d.Event3D.EVENT_LOAD_COMPLETE, function (e) { return _this.initScene(e); });
        egret3d.AssetsManager.getInstance().startLoad();
    };
    p.initScene = function (e) {
        var _this = this;
        var sky_f = egret3d.AssetsManager.getInstance().findTexture("SkyBox/front.jpg");
        var sky_b = egret3d.AssetsManager.getInstance().findTexture("SkyBox/back.jpg");
        var sky_l = egret3d.AssetsManager.getInstance().findTexture("SkyBox/right.jpg");
        var sky_r = egret3d.AssetsManager.getInstance().findTexture("SkyBox/left.jpg");
        var sky_u = egret3d.AssetsManager.getInstance().findTexture("SkyBox/top.jpg");
        var sky_d = egret3d.AssetsManager.getInstance().findTexture("SkyBox/bottom.jpg");
        var scene_r = egret3d.AssetsManager.getInstance().findTexture("scene/fangzi2.png");
        var skyTexture = new egret3d.SkyTexture(sky_b, sky_f, sky_l, sky_r, sky_u, sky_d);
        var sky = new egret3d.Sky(skyTexture);
        this._view3D.sky = sky;
        var directLight = new egret3d.DirectLight(new egret3d.Vector3D(-0.3, 1.0, -0.2));
        directLight.diffuse = 0xffcfcf;
        directLight.halfColor = 0xccccff;
        directLight.halfIntensity = 0.1;
        var lightGroup = new egret3d.LightGroup();
        lightGroup.addDirectLight(directLight);
        var meshList = egret3d.AssetsManager.getInstance().findScene("scene");
        var container = new egret3d.Object3D();
        for (var i = 0; i < meshList.length; i++) {
            container.addChild(meshList[i]);
            meshList[i].material.ambientPower = 0.1;
            meshList[i].material.lightGroup = lightGroup;
            meshList[i].material.diffuseTexture = scene_r;
        }
        this._view3D.addChild3D(container);
        this._time = new Date().getTime();
        requestAnimationFrame(function () { return _this.onUpdate(); });
    };
    p.onUpdate = function () {
        var _this = this;
        this._timeDate = new Date();
        this._delay = this._timeDate.getTime() - this._time;
        this._time = this._timeDate.getTime();
        this._cameraCtl.update();
        this._view3D.renden(this._time, this._delay);
        requestAnimationFrame(function () { return _this.onUpdate(); });
    };
    return Sample_LoadScene;
})();
egret.registerClass(Sample_LoadScene,'Sample_LoadScene');
