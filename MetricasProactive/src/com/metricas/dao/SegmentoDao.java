package com.metricas.dao;

import java.util.Map;

public interface SegmentoDao {

	public Map<String, Integer> obtenerClientesFrecuentes(String fecha_inicio, String fecha_fin, String segmento);

	public Map<String, Integer> obtenerLlamadasFamilia(String fecha_inicio, String fecha_fin, String segmento);

	public Map<String, Integer> obtenerLLamadasServicio(String fecha_inicio, String fecha_fin, String segmento);

	public Map<String, Integer> obtenerLlamadasTotalesFamiliasSegmento(String fechaInicio, String fechaFinal, String segmento);

	Map<String, Integer> obtenerLlamadasTotalesSegmentos(String fechaInicio, String fechaFinal);
    
}
