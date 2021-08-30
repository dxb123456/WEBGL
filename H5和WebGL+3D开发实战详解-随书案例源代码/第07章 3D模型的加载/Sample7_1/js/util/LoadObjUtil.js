 	  function ObjectData
  	(
  	  vertexCountIn,verticesIn
  	)
  	{  	 
  	  this.vertexCount=vertexCountIn;
  	  this.vertices=verticesIn;
  	}	
  	
    function fromObjStrToObjectData(objStr)
		{
		  //原始顶点坐标列表--直接从obj文件中加载
    	var alv=new Array();
    	//结果顶点坐标列表--按面组织好
    	var alvResult=[];  
    	//计算出的法向量坐标
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
           for (var i = 1; i < 4; ++i) 
           {
              var tempArray=array[i].split("/");
              var vIndex=tempArray[0]-1;
              
              alvResult.push(alv[vIndex*3+0]);
              alvResult.push(alv[vIndex*3+1]);
              alvResult.push(alv[vIndex*3+2]);
           }
        }
      }
	  
      return new ObjectData(alvResult.length/3,alvResult);
	}
