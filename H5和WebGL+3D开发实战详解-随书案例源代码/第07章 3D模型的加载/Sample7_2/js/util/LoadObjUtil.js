 	  function ObjectData
  	(
  	  vertexCountIn,verticesIn,normalsIn
  	)
  	{  	 
  	  this.vertexCount=vertexCountIn;
  	  this.vertices=verticesIn;
	  this.normals=normalsIn;
  	}	
  	
    function fromObjStrToObjectData(objStr)
		{
		  // ԭʼ���������б�--ֱ�Ӵ�obj�ļ��м���
    	var alv=new Array();
    	// ������������б�--������֯��
    	var alvResult=[];  
    	// ������ķ���������
 	    var alnResult=[];
    	var lines = objStr.split("\n");
    	
    	for (var lineIndex in lines) 
    	{
        var line = lines[lineIndex].replace(/[ \t]+/g, " ").replace(/\s\s*$/, "");
        if (line[0] == "#")
        {
           continue;
        }

        var array = line.split(" ");
        if (array[0] == "v") 
        {
            alv.push(parseFloat(array[1]));
            alv.push(parseFloat(array[2]));
            alv.push(parseFloat(array[3]));
        }
        else if (array[0] == "f") 
        {
           if (array.length != 4)
           {
                alert("array.length != 4");
                continue;
           }
           
              var tempArray=array[1].split("/");
              var vIndex=tempArray[0]-1;
			  vx0=alv[vIndex*3+0];
			  vy0=alv[vIndex*3+1];
			  vz0=alv[vIndex*3+2];
              
              alvResult.push(vx0);
              alvResult.push(vy0);
              alvResult.push(vz0);
			  
			  var tempArray=array[2].split("/");
              var vIndex=tempArray[0]-1;
			  vx1=alv[vIndex*3+0];
			  vy1=alv[vIndex*3+1];
			  vz1=alv[vIndex*3+2];
              
              alvResult.push(vx1);
              alvResult.push(vy1);
              alvResult.push(vz1);
			  
			  var tempArray=array[3].split("/");
              var vIndex=tempArray[0]-1;
			  vx2=alv[vIndex*3+0];
			  vy2=alv[vIndex*3+1];
			  vz2=alv[vIndex*3+2];
              
              alvResult.push(vx2);
              alvResult.push(vy2);
              alvResult.push(vz2);
			  
			  var vxa=vx1-vx0;
			  var vya=vy1-vy0;
			  var vza=vz1-vz0;
			  
			  var vxb=vx2-vx0;
			  var vyb=vy2-vy0;
			  var vzb=vz2-vz0;
			  var vNormal=vectorNormal(getCrossProduct(vxa,vya,vza,vxb,vyb,vzb));
			  for(var i=0;i<3;i++){
		      	   alnResult.push(vNormal[0]);
		      	   alnResult.push(vNormal[1]);
		      	   alnResult.push(vNormal[2]);
		      }
        }
      }      
      return new ObjectData(alvResult.length/3,alvResult,alnResult);
	}
	function getCrossProduct( x1, y1, z1, x2, y2, z2)
	{		
		var array=new Array;
		// �������ʸ�����ʸ����XYZ��ķ���ABC
        var A=y1*z2-y2*z1;
        var B=z1*x2-z2*x1;
        var C=x1*y2-x2*y1;
		array.push(A,B,C);
		return array;
	}
	function vectorNormal(vector)
	{
		//��������ģ
		var module=Math.sqrt(vector[0]*vector[0]+vector[1]*vector[1]+vector[2]*vector[2]);
		return new Array(vector[0]/module,vector[1]/module,vector[2]/module);
	}
