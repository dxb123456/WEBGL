class Sample_CreateSky {

    protected _time: number = 0;
    protected _delay: number = 0;
    protected _timeDate: Date = null;
    protected _view3D: egret3d.View3D = null;
    protected _viewPort: egret3d.Rectangle = null;
    protected _cameraCtl: egret3d.LookAtController = null;

    public constructor(width: number = window.innerWidth,height: number = window.innerHeight) {

        this._viewPort = new egret3d.Rectangle(0,0,width,height);

        egret3d.Egret3DDrive.requstContext3D(DeviceUtil.getGPUMode,this._viewPort,() => this.onInit3D());
    }

    protected onInit3D(): void {

        //创建View3D对象;
        this._view3D = new egret3d.View3D(this._viewPort);

        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D,new egret3d.Object3D());

        //设置像机视野距离;
        this._cameraCtl.setEyesLength(1000);
        //this._cameraCtl.distance=1000;

        //View3D初始化完成;
        this.onView3DInitComplete();
        this._view3D.camera3D.fieldOfView=140;
        
        egret3d.AssetsManager.getInstance().setRootURL("resource/");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/front.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/back.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/left.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/right.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/top.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/bottom.jpg");
        egret3d.AssetsManager.getInstance().addEventListener(egret3d.Event3D.EVENT_LOAD_COMPLETE,(e: egret3d.Event3D) => this.initScene(e));
        egret3d.AssetsManager.getInstance().startLoad();
    }

    private initScene(e: egret3d.Event3D) {

        var sky_f: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/front.jpg");
        var sky_b: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/back.jpg");
        var sky_l: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/right.jpg");
        var sky_r: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/left.jpg");
        var sky_u: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/top.jpg");
        var sky_d: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/bottom.jpg");

        var skyTexture: egret3d.SkyTexture = new egret3d.SkyTexture(sky_b,sky_f,sky_l,sky_r,sky_u,sky_d);
        var sky: egret3d.Sky = new egret3d.Sky(skyTexture);
        this._view3D.sky = sky;

        this._time = new Date().getTime();

        requestAnimationFrame(() => this.onUpdate());
    }

    protected onView3DInitComplete(): void {
    }

    protected onUpdate(): void {

        this._timeDate = new Date();

        this._delay = this._timeDate.getTime() - this._time;

        this._time = this._timeDate.getTime();

        this._cameraCtl.update();

        this._view3D.renden(this._time,this._delay);

        requestAnimationFrame(() => this.onUpdate());
    }
}