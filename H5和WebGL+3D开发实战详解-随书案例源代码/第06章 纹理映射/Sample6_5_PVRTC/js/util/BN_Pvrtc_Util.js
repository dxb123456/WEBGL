function getExtension(gl, name) {
    var vendorPrefixes = ["", "WEBKIT_", "MOZ_"];
    var ext = null;
    for (var i in vendorPrefixes) {
      ext = gl.getExtension(vendorPrefixes[i] + name);
      if (ext) { break; }
    }
    return ext;
  }

//分析数据并加载为纹理的方法
function loadPvrtcTexture(gl,url,texName,width,height)
{
    var texture = gl.createTexture();
	var req = new XMLHttpRequest();
    req.onreadystatechange = function () { doLoadPvrtcTexture(gl,req,texture,texName,width,height)};
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.send(null);	
	texMap[texName]=texture;
}

//处理ETC1压缩纹理pkm文件数据的方法
function doLoadPvrtcTexture(gl,req,texture,texName,width,height)
{
    if (req.readyState == 4) 
    {
        var arrayBuffer = req.response;		        
        if (arrayBuffer) 
        {			
			var ext = getExtension(gl, "WEBGL_compressed_texture_pvrtc");			
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.compressedTexImage2D(gl.TEXTURE_2D, 0,  ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG, width, height, 0, new Uint8Array(arrayBuffer));
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.bindTexture(gl.TEXTURE_2D, null);
        }
    }
}






