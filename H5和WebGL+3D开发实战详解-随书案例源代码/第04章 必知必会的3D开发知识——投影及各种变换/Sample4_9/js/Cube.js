function drawSelfCube(ms,cr){
		//�ܻ���˼�룺ͨ����һ����ɫ������ת��λ��������ÿ�����λ��
		//�����������ÿ����
		//�����ֳ�
		ms.pushMatrix();
		
		//����ǰС��
		ms.pushMatrix();
		ms.translate(0, 0, 0.25);
		cr.drawSelf(ms);		
		ms.popMatrix();
		
		//���ƺ�С��
		ms.pushMatrix();		
		ms.translate(0, 0, -0.25);
		ms.rotate(180, 0, 1, 0);
		cr.drawSelf(ms);		
		ms.popMatrix();
		
		//�����ϴ���
		ms.pushMatrix();	
		ms.translate(0,0.25,0);
		ms.rotate(-90, 1, 0, 0);
		cr.drawSelf(ms);
		ms.popMatrix();
		
		//�����´���
		ms.pushMatrix();	
		ms.translate(0,-0.25,0);
		ms.rotate(90, 1, 0, 0);
		cr.drawSelf(ms);
		ms.popMatrix();
		
		//���������
		ms.pushMatrix();	
		ms.translate(0.25,0,0);
		ms.rotate(-90, 1, 0, 0);
		ms.rotate(90, 0, 1, 0);
		cr.drawSelf(ms);
		ms.popMatrix();
		
		//�����Ҵ���
		ms.pushMatrix();				
		ms.translate(-0.25,0,0);
		ms.rotate(90, 1, 0, 0);
		ms.rotate(-90, 0, 1, 0);
		cr.drawSelf(ms);
		ms.popMatrix();
		
		//�ָ��ֳ�
		ms.popMatrix();
}