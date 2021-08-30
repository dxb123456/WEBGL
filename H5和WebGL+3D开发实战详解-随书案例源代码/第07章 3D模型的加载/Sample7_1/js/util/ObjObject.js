		//���ص����ڻ��Ƶ�3D����
	    function ObjObject
	    (
	       gl,				//GL������
	       vertexDataIn,    //������������
	       programIn		//��ɫ���������
	    )
	    {
	    	  //���ն�������
	    	  this.vertexData=vertexDataIn;   	  
	    	  //�õ���������
	    	  this.vcount=this.vertexData.length/3;
	    	  //�����������ݻ���
	    	  this.vertexBuffer=gl.createBuffer();
	    	  //�������������뻺��
			  gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
			  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW); 
			  //������ɫ������
			  this.program=programIn;
	        
	        this.drawSelf=function(ms)
	        {				   
		      //�����ܾ���
			  var uMVPMatrixHandle=gl.getUniformLocation(this.program, "uMVPMatrix");   
			  gl.uniformMatrix4fv(uMVPMatrixHandle,false,new Float32Array(ms.getFinalMatrix())); 

              //����任����
              var uMMatrixHandle=gl.getUniformLocation(this.program, "uMMatrix");
              gl.uniformMatrix4fv(uMMatrixHandle,false,new Float32Array(ms.currMatrix)); 
              
              //���������λ��
              var uCameraHandle=gl.getUniformLocation(this.program, "uCamera");
              gl.uniform3fv(uCameraHandle,new Float32Array([ms.cx,ms.cy,ms.cz]));
              
              //���ö�������
			  gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aPosition"));        
			  //����������������Ⱦ����
			  gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
			  gl.vertexAttribPointer(gl.getAttribLocation(this.program, "aPosition"), 3, gl.FLOAT, false, 0, 0);   
			             
			  //�ö��㷨��������
		      gl.drawArrays(gl.TRIANGLES, 0, this.vcount); 
	        }      
	    }