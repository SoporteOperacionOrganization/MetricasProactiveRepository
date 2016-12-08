package com.metricas.service;

import java.util.Map;

public interface SegmentoService {

	public Map<String,Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal);
	
	public Map<String,Integer> obtenerLlamadasFamilia(String fechaInicio, String fechaFinal, String segmento);
	
	public Map<String,Integer> obtenerLLamadasServicio(String fechaInicio, String fechaFinal, String segmento);
	
	
}
