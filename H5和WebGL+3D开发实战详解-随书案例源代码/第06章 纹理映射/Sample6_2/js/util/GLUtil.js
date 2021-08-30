		    //初始化WebGL Canvas
				function initWebGLCanvas(canvasName)
				{
				    var canvas = document.getElementById(canvasName);
				    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
					var context = null;
				    for (var ii = 0; ii < names.length; ++ii) 
				    {
					    try 
					    {
					      context = canvas.getContext(names[ii], null);				      
					    } 
					    catch(e) {}
					    if (context) 
					    {
					      break;
					    }
				    }			    
				    return context;
				}
	
				//加载单个着色器的方法			
				function loadSingleShader(ctx, shaderScript)
				{
				    if (shaderScript.type == "vertex")
				        var shaderType = ctx.VERTEX_SHADER;
				    else if (shaderScript.type == "fragment")
				        var shaderType = ctx.FRAGMENT_SHADER;
				    else {
				        log("*** Error: shader script of undefined type '"+shaderScript.type+"'");
				        return null;
				    }
				
				    // Create the shader object
				    var shader = ctx.createShader(shaderType);
				
				    // Load the shader source
				    ctx.shaderSource(shader, shaderScript.text);
				
				    // Compile the shader
				    ctx.compileShader(shader);
				
				//检查编译状态
					var compiled = ctx.getShaderParameter(shader, ctx.COMPILE_STATUS);
					if (!compiled && !ctx.isContextLost()) {//若编译出错
						var error = ctx.getShaderInfoLog(shader);//获取错误信息
						log("*** Error compiling shader '"+shaderId+"':"+error);//打印错误信息
						ctx.deleteShader(shader);//删除着色器程序
						return null;//返回空
					}			
					return shader;//返回着色器程序
				}	
				
				//加载顶点着色器与片元着色器的套件
				function loadShaderSerial(gl, vshader, fshader)
				{
						//加载顶点着色器
				    var vertexShader = loadSingleShader(gl, vshader);
				    //加载片元着色器
				    var fragmentShader = loadSingleShader(gl, fshader);
				
				    //创建着色器程序
				    var program = gl.createProgram();
				
				    //将顶点着色器和片元着色器挂接到着色器程序
				    gl.attachShader (program, vertexShader);
				    gl.attachShader (program, fragmentShader);
				
				
				    //链接着色器程序
				    gl.linkProgram(program);
				
				    //检查链接是否成功
				    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
				    if (!linked && !gl.isContextLost())//若链接不成功 
				    {
				        //获取并在控制台打印错误信息
				        var error = gl.getProgramInfoLog (program);//获取错误信息
				        log("Error in program linking:"+error);//打印错误信息
				
				        gl.deleteProgram(program);//删除着色器程序
				        gl.deleteProgram(fragmentShader);//删除片元着色器
				        gl.deleteProgram(vertexShader);//删除顶点着色器
				
				        return null;//返回空
				    }
				    return program;//返回着色器程序
				}				
				
				
				
				//加载纹理图的函数
				function loadImageTexture(gl, url,boolean){
				var texture = gl.createTexture();//创建纹理ID
				var image = new Image();//创建图片对象
				image.onload = function(){//调用加载纹理的方法 
				doLoadImageTexture(gl, image, texture,boolean); //调用实际加载纹理的函数
					}
				image.src = url;//指定纹理图的URL
				return texture;//返回纹理ID
				}

				function doLoadImageTexture(gl, image, texture,boolean)
				{
				    gl.bindTexture(gl.TEXTURE_2D, texture);
				    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
					
					
					
					
					
				    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
				    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
				
					if(!boolean){
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
					}
					else{
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
					}
				
					
				
				
				    
				    gl.bindTexture(gl.TEXTURE_2D, null);
				}