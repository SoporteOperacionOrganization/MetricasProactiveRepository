package com.metricas.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.metricas.dao.SegmentoDao;

@Service
@Transactional("transactionManagerData")
public class SegmentoServiceImpl implements SegmentoService {

	@Autowired
	private SegmentoDao segmentoDao;
	
	@Override
	public Map<String,Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal) {
		return segmentoDao.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);
	}
	
	@Override
	public Map<String,Integer> obtenerLlamadasFamilia(String fechaInicio, String fechaFinal, String segmento) {
		return segmentoDao.obtenerLlamadasFamilia(fechaInicio, fechaFinal, segmento);
	}
	
	@Override
	public Map<String,Integer> obtenerLLamadasServicio(String fechaInicio, String fechaFinal, String segmento) {
		return segmentoDao.obtenerLLamadasServicio(fechaInicio, fechaFinal, segmento);
	}
	
	@Override
    public Map<String, Integer> obtenerLlamadasTotalesFamiliasSegmento(String fechaInicio, String fechaFinal, String segmento) {
          return segmentoDao.obtenerLlamadasTotalesFamiliasSegmento(fechaInicio, fechaFinal, segmento);
    }

	
}
