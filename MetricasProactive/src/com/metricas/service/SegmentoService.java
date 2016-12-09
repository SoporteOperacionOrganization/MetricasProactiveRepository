package com.metricas.service;

import java.util.Map;

public interface SegmentoService {

	public Map<String,Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal);
	
	public Map<String,Integer> obtenerLlamadasFamilia(String fechaInicio, String fechaFinal, String segmento);
	
	public Map<String,Integer> obtenerLLamadasServicio(String fechaInicio, String fechaFinal, String segmento);
	
	public Map<String,Integer> obtenerLlamadasTotalesFamiliasSegmento(String fechaInicio, String fechaFinal, String segmento);
	
    public String obtenerLlamadasTotalesFamiliasSegmentoComparacion(String fechaInicioOriginal, String fechaFinalOriginal, String fechaInicio, String fechaFinal, String segmento);

	public Map<Integer,Integer> obtenerClientesFrecuentes(String fechaInicio, String fechaFinal, String segmento); 

}
