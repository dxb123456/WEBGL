		    //��ʼ��WebGL Canvas
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
	
				//���ص�����ɫ���ķ���			
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
				
				//������״̬
					var compiled = ctx.getShaderParameter(shader, ctx.COMPILE_STATUS);
					if (!compiled && !ctx.isContextLost()) {//���������
						var error = ctx.getShaderInfoLog(shader);//��ȡ������Ϣ
						log("*** Error compiling shader '"+shaderId+"':"+error);//��ӡ������Ϣ
						ctx.deleteShader(shader);//ɾ����ɫ������
						return null;//���ؿ�
					}			
					return shader;//������ɫ������
				}	
				
				//���ض�����ɫ����ƬԪ��ɫ�����׼�
				function loadShaderSerial(gl, vshader, fshader)
				{
						//���ض�����ɫ��
				    var vertexShader = loadSingleShader(gl, vshader);
				    //����ƬԪ��ɫ��
				    var fragmentShader = loadSingleShader(gl, fshader);
				
				    //������ɫ������
				    var program = gl.createProgram();
				
				    //��������ɫ����ƬԪ��ɫ���ҽӵ���ɫ������
				    gl.attachShader (program, vertexShader);
				    gl.attachShader (program, fragmentShader);
				
				
				    //������ɫ������
				    gl.linkProgram(program);
				
				    //��������Ƿ�ɹ�
				    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
				    if (!linked && !gl.isContextLost())//�����Ӳ��ɹ� 
				    {
				        //��ȡ���ڿ���̨��ӡ������Ϣ
				        var error = gl.getProgramInfoLog (program);//��ȡ������Ϣ
				        log("Error in program linking:"+error);//��ӡ������Ϣ
				
				        gl.deleteProgram(program);//ɾ����ɫ������
				        gl.deleteProgram(fragmentShader);//ɾ��ƬԪ��ɫ��
				        gl.deleteProgram(vertexShader);//ɾ��������ɫ��
				
				        return null;//���ؿ�
				    }
				    return program;//������ɫ������
				}				
				
				
				
				//��������ͼ�ĺ���
				function loadImageTexture(gl, url,sample1,sample2){
				var texture = gl.createTexture();//��������ID
				var image = new Image();//����ͼƬ����
				image.onload = function(){//���ü�������ķ��� 
				doLoadImageTexture(gl, image, texture,sample1,sample2); //����ʵ�ʼ�������ĺ���
					}
				image.src = url;//ָ������ͼ��URL
				return texture;//��������ID
				}

				function doLoadImageTexture(gl, image, texture,sample1,sample2)
				{
				    gl.bindTexture(gl.TEXTURE_2D, texture);
				    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
					
					
					
					
					
				    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, sample1);
				    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, sample2);
				
					
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				
				
					
				
				
				    
				    gl.bindTexture(gl.TEXTURE_2D, null);
				}