class Sample_LoadScene {

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

        egret3d.AssetsManager.getInstance().setRootURL("resource/");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/front.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/back.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/left.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/right.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/top.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/bottom.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("scene/fangzi2.png");
        egret3d.AssetsManager.getInstance().addLoadScene("scene");
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
        var scene_r: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("scene/fangzi2.png");
        
        
        var skyTexture: egret3d.SkyTexture = new egret3d.SkyTexture(sky_b,sky_f,sky_l,sky_r,sky_u,sky_d);
        var sky: egret3d.Sky = new egret3d.Sky(skyTexture);
        this._view3D.sky = sky;
        
        var directLight: egret3d.DirectLight = new egret3d.DirectLight(new egret3d.Vector3D(-0.3,1.0,-0.2));
        directLight.diffuse = 0xffcfcf;
        directLight.halfColor = 0xccccff;
        directLight.halfIntensity = 0.1;
        var lightGroup: egret3d.LightGroup = new egret3d.LightGroup();
        lightGroup.addDirectLight(directLight);
        
        var meshList: egret3d.Mesh[] = egret3d.AssetsManager.getInstance().findScene("scene");
        var container: egret3d.Object3D = new egret3d.Object3D();
        for(var i: number = 0;i < meshList.length;i++) {
            container.addChild(meshList[i]);
            meshList[i].material.ambientPower = 0.1;
            meshList[i].material.lightGroup = lightGroup; 
            meshList[i].material.diffuseTexture = scene_r;
        }
        
        this._view3D.addChild3D(container);
        this._time = new Date().getTime();
        requestAnimationFrame(() => this.onUpdate());
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