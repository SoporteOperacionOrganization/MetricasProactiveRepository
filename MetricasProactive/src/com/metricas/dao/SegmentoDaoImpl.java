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
	public Map<String, Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal) {
		Map<String, Integer> totalesLlamadasSegmentos = new HashMap<String, Integer>();
		session = sessionFactoryData.openSession();
		Transaction tx = session.beginTransaction();
		session.doWork(new Work() {

			@Override
			public void execute(Connection connection) throws SQLException {

				PreparedStatement pstmt = null;
				String sqlQuery = "SELECT ltrim(rtrim(EJE.Segmento)) AS Segmento, COUNT(EJE.Segmento) AS TOTAL FROM  [dbo].[LlamadasATE] LL INNER JOIN [dbo].[TblEjecutivos]  EJE  ON EJE.Nomina = LL.NOMINA_REG WHERE (CAST(LL.FECHA_INI AS DATE) BETWEEN ? AND ?) AND (EJE.Segmento='ATE' OR EJE.Segmento='PYME' OR EJE.Segmento='OFFLINE' OR EJE.Segmento='PYME OFFLINE' OR EJE.Segmento='BANCA EMPRESARIAL') GROUP BY EJE.Segmento";
				ResultSet rs;
				pstmt = connection.prepareStatement(sqlQuery);
				pstmt.setString(1, fechaInicio);
				pstmt.setString(2, fechaFinal);
				rs = pstmt.executeQuery();

				while (rs.next()) {
					totalesLlamadasSegmentos.put(rs.getString(1), rs.getInt(2));
				}
				tx.commit();
				pstmt.close();
			}
		});

		// session.close();
		Gson gson = new Gson();
		String json = gson.toJson(totalesLlamadasSegmentos);
		return totalesLlamadasSegmentos;
	}

	@Override
	public Map<String, Integer> obtenerClientesFrecuentes(String fecha_inicio, String fecha_fin, String segmento) {
		Map<String, Integer> ClientesFrecuentes = new HashMap<>();
		session = sessionFactoryData.openSession();

		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				PreparedStatement pstmt = null;

				try {

					String sqlQuery = "";

					switch (segmento) {

					case "general":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='ATE' OR SO.SEGMENTO='PYME' OR SO.SEGMENTO='OFFLINE' OR SO.SEGMENTO='PYME OFFLINE' OR SO.SEGMENTO='BANCA EMPRESARIAL')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					case "empresarial":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='BANCA EMPRESARIAL')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					case "online":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='ATE')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					case "pyme":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='PYME')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					case "offline":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='OFFLINE')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					case "pymeOffline":
						sqlQuery = "SELECT TOP 5 SO.RAZONSOCIAL, COUNT(SO.CLIENTE) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA" + " WHERE"
								+ " (SO.CLIENTE != 0)"
								+ " AND (CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND SO.RAZONSOCIAL <> ''"
								+ " AND	(SO.SEGMENTO='PYME OFFLINE')"
								+ " GROUP BY SO.RAZONSOCIAL" + " ORDER BY COUNT(SO.CLIENTE) DESC";
						break;

					}

					ResultSet rs;
					pstmt = connection.prepareStatement(sqlQuery);
					pstmt.setString(1, fecha_inicio);
					pstmt.setString(2, fecha_fin);

					rs = pstmt.executeQuery();
					while (rs.next()) {
						ClientesFrecuentes.put(rs.getString(1), rs.getInt(2));
					}

				} catch (SQLException ex) {
					ex.printStackTrace();
				} finally {
					pstmt.close();
				}

			}
		});

		return ClientesFrecuentes;
	}

	@Override
	public Map<String, Integer> obtenerLlamadasFamilia(String fecha_inicio, String fecha_fin, String segmento) {
		Map<String, Integer> LlamadasFamilia = new HashMap<>();
		session = sessionFactoryData.openSession();

		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				PreparedStatement pstmt = null;

				try {

					String sqlQuery = "";

					switch (segmento) {

					case "general":
						sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)"
								+ " AND (SO.Segmento='ATE' OR SO.Segmento='PYME' OR SO.Segmento='OFFLINE' OR SO.Segmento='PYME OFFLINE' OR SO.Segmento='BANCA EMPRESARIAL')"
								+ " GROUP BY TT.FAMILIA, SO.SEGMENTO" + " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;

					case "empresarial":
						sqlQuery = "SELECT TOP 10 ltrim(rtrim(TT.FAMILIA)), COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)" + " AND (SO.Segmento='BANCA EMPRESARIAL')"
								+ " GROUP BY TT.FAMILIA" + " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;

					case "online":
						sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)" + " AND (SO.Segmento='ATE')" + " GROUP BY TT.FAMILIA"
								+ " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;

					case "pyme":
						sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)" + " AND (SO.Segmento='PYME')" + " GROUP BY TT.FAMILIA"
								+ " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;

					case "offline":
						sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)" + " AND (SO.Segmento='OFFLINE')" + " GROUP BY TT.FAMILIA"
								+ " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;

					case "pymeOffline":
						sqlQuery = "SELECT TOP 10 TT.FAMILIA, COUNT(TT.FAMILIA) AS TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " (TT.FAMILIA != '')"
								+ " AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111))"
								+ " AND TT.Interno NOT IN (1)" + " AND (SO.Segmento='PYME OFFLINE')"
								+ " GROUP BY TT.FAMILIA" + " ORDER BY COUNT(TT.FAMILIA) DESC";
						break;
					}

					ResultSet rs;
					pstmt = connection.prepareStatement(sqlQuery);
					pstmt.setString(1, fecha_inicio);
					pstmt.setString(2, fecha_fin);

					rs = pstmt.executeQuery();
					while (rs.next()) {
						LlamadasFamilia.put(rs.getString(1), rs.getInt(2));
					}

				} catch (SQLException ex) {
					ex.printStackTrace();
				} finally {
					pstmt.close();
				}

			}
		});
		return LlamadasFamilia;
	}

	@Override
	public Map<String, Integer> obtenerLLamadasServicio(String fecha_inicio, String fecha_fin, String segmento) {
		Map<String, Integer> LlamadasServicio = new HashMap<>();
		session = sessionFactoryData.openSession();

		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				PreparedStatement pstmt = null;

				try {

					String sqlQuery = "";

					switch (segmento) {

					case "general":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION+'  ('+SO.SEGMENTO+') ', COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='ATE' OR SO.Segmento='PYME' OR SO.Segmento='OFFLINE' OR SO.Segmento='PYME OFFLINE' OR SO.Segmento='BANCA EMPRESARIAL')"
								+ " GROUP BY TT.DESCRIPCION, SO.SEGMENTO" + " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;
					case "empresarial":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION, COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='BANCA EMPRESARIAL')" + " GROUP BY TT.DESCRIPCION"
								+ " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;
					case "online":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION, COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='ATE')" + " GROUP BY TT.DESCRIPCION"
								+ " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;

					case "pyme":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION, COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='PYME')" + " GROUP BY TT.DESCRIPCION"
								+ " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;

					case "offline":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION, COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='OFFLINE')" + " GROUP BY TT.DESCRIPCION"
								+ " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;

					case "pymeOffline":
						sqlQuery = "SELECT TOP 10 TT.DESCRIPCION, COUNT(TT.DESCRIPCION) as TOTAL"
								+ " FROM  [dbo].[LlamadasATE] LL"
								+ " INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG"
								+ " INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA"
								+ " INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE" + " WHERE"
								+ " CAST(LL.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)"
								+ " AND (SO.Segmento='PYME OFFLINE')" + " GROUP BY TT.DESCRIPCION"
								+ " ORDER BY COUNT(TT.DESCRIPCION) DESC";
						break;
					}

					ResultSet rs;
					pstmt = connection.prepareStatement(sqlQuery);
					pstmt.setString(1, fecha_inicio);
					pstmt.setString(2, fecha_fin);

					rs = pstmt.executeQuery();
					while (rs.next()) {
						LlamadasServicio.put(rs.getString(1), rs.getInt(2));
					}

				} catch (SQLException ex) {
					ex.printStackTrace();
				} finally {
					pstmt.close();
				}

			}
		});
		return LlamadasServicio;
	}

	@Override
	public Map<String, Integer> obtenerLlamadasTotalesFamiliasSegmento(String fechaInicio, String fechaFinal,
			String segmento) {
		Map<String, Integer> totalesLlamadasSegmentos = new HashMap<String, Integer>();
		session = sessionFactoryData.openSession();
		Transaction tx = session.beginTransaction();
		session.doWork(new Work() {

			@Override
			public void execute(Connection connection) throws SQLException {
				PreparedStatement pstmt = null;
				String sqlQuery = "SELECT TOP 10 ltrim(rtrim(TT.FAMILIA)), COUNT(TT.FAMILIA) AS TOTAL FROM  [dbo].[LlamadasATE] LL INNER JOIN [dbo].[TblEjecutivos]  EJE  on EJE.Nomina = LL.NOMINA_REG INNER JOIN [dbo].[SolicitudesATE] SO on LL.ID = SO.ID_LLAMADA INNER JOIN [dbo].[TipoTramitesAte3] TT on TT.ID_TIPOT = SO.TIPO_TRAMITE WHERE (TT.FAMILIA != '') AND (CAST(ll.FECHA_INI AS DATE) BETWEEN CONVERT(DATE,?,111) AND CONVERT(DATE,?,111)) AND TT.Interno NOT IN (1) AND (SO.Segmento=? ) GROUP BY TT.FAMILIA  ORDER BY COUNT(TT.FAMILIA) DESC ";
				ResultSet rs;
				pstmt = connection.prepareStatement(sqlQuery);
				pstmt.setString(1, fechaInicio);
				pstmt.setString(2, fechaFinal);
				pstmt.setString(3, segmento);
				rs = pstmt.executeQuery();

				while (rs.next()) {
					totalesLlamadasSegmentos.put(rs.getString(1), rs.getInt(2));
				}
			}

		});
		tx.commit();
		session.close();
		return totalesLlamadasSegmentos;
	}
	
	

}
