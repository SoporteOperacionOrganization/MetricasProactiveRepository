package com.metricas.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.jdbc.Work;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.gson.Gson;

@Repository
public class SegmentoDaoImpl implements SegmentoDao {

	@Autowired
	private SessionFactory sessionFactoryData;
	
	private Session session;
	private Query query;
	
	@Override
	public Map<String,Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal) {
		/*List<String> resultados = new ArrayList<String>();
		session = sessionFactoryData.getCurrentSession();
		query = session.createSQLQuery("SELECT EJE.Segmento AS Segmento, COUNT(EJE.Segmento) AS TOTAL FROM  [dbo].[LlamadasATE] LL INNER JOIN [dbo].[TblEjecutivos]  EJE  ON EJE.Nomina = LL.NOMINA_REG WHERE (CAST(LL.FECHA_INI AS DATE) BETWEEN '2014/01/01' AND '2015/12/01') AND (EJE.Segmento='ATE' OR EJE.Segmento='PYME' OR EJE.Segmento='OFFLINE' OR EJE.Segmento='PYME OFFLINE' OR EJE.Segmento='BANCA EMPRESARIAL') GROUP BY EJE.Segmento");
		resultados = query.list();
		for (Iterator iter = resultados.iterator(); iter.hasNext(); ) {
		    Object[] objs = (Object[])iter.next();
		    System.out.println((String)objs[0]);
		    System.out.println((Integer)objs[1]);
		}*/
		Map<String,Integer> totalesLlamadasSegmentos = new HashMap<String,Integer>();
		session = sessionFactoryData.openSession();
		Transaction tx = session.beginTransaction();
		session.doWork(new Work(){
			
			@Override
			public void execute(Connection connection) throws SQLException {
				
				PreparedStatement pstmt = null;
				String sqlQuery = "SELECT EJE.Segmento AS Segmento, COUNT(EJE.Segmento) AS TOTAL FROM  [dbo].[LlamadasATE] LL INNER JOIN [dbo].[TblEjecutivos]  EJE  ON EJE.Nomina = LL.NOMINA_REG WHERE (CAST(LL.FECHA_INI AS DATE) BETWEEN ? AND ?) AND (EJE.Segmento='ATE' OR EJE.Segmento='PYME' OR EJE.Segmento='OFFLINE' OR EJE.Segmento='PYME OFFLINE' OR EJE.Segmento='BANCA EMPRESARIAL') GROUP BY EJE.Segmento";
				ResultSet rs;
            	pstmt = connection.prepareStatement(sqlQuery);
            	pstmt.setString(1, fechaInicio);
            	pstmt.setString(2, fechaFinal);
            	rs = pstmt.executeQuery();
            
            	while(rs.next()){      
            		totalesLlamadasSegmentos.put(rs.getString(1), rs.getInt(2));
            	}
            	
            	
            	
            	
			}
		});
		 tx.commit();
		 session.close();
		 //Gson gson = new Gson(); 
		 //String json = gson.toJson(totalesLlamadasSegmentos); 
		 //System.out.println("JSON " + json);
		return totalesLlamadasSegmentos;
	}
	
	@Override
	public HashMap<String, Integer> obtenerLlamadasFamilia (String fecha_inicio, String fecha_fin){
		HashMap<String, Integer> LlamadasFamilia = new HashMap<>();
		session = sessionFactoryData.openSession();	
		
		session.doWork(new Work(){
            @Override
            public void execute(Connection connection) throws SQLException {
            	PreparedStatement pstmt = null;
            	
            	try{
            		
            		String sqlQuery="";	
            		sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"+
            						" FROM  [dbo].[LlamadasATE] LL"+
            						" INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"+
            						" INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"+
            						" INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE"+
            					" WHERE"+
            						" (TT.FAMILIA != '')"+ 
            						" AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"+
            						" AND TT.Interno NOT IN (1)"+
            						" GROUP BY TT.FAMILIA"+
            						" ORDER BY COUNT(TT.FAMILIA) DESC";

            	ResultSet rs;
            	pstmt = connection.prepareStatement(sqlQuery);
            	pstmt.setString(1, fecha_inicio);
            	pstmt.setString(2, fecha_fin);
     
      			rs = pstmt.executeQuery();
        		while(rs.next()){
        			LlamadasFamilia.put(rs.getString(1), rs.getInt(2));
        		}
        			
            	
            	}catch(SQLException ex){
            		System.out.println("RNE Excepcion de SQL Server: " + ex.getMessage());
            	}
            	finally{
            		pstmt.close();
            	}
            	
              }
          });
		return LlamadasFamilia;
	}

}
