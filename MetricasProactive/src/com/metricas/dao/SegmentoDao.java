package com.metricas.dao;

import java.util.List;
import java.util.Map;

public interface SegmentoDao {

	public Map<String,Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal);
	
	public Map<String,Integer> obtenerLlamadasFamilia(String fechaInicio, String fechaFinal);
	
}
