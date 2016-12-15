package com.metricas.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.metricas.dao.SegmentoDao;

@Service
@Transactional("transactionManagerData")
public class SegmentoServiceImpl implements SegmentoService {

	@Autowired
	private SegmentoDao segmentoDao;


	@Override
	public Map<String, Integer> llamadasTotalesSegmentos(String fechaInicio, String fechaFinal) {
		return segmentoDao.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);
	}

	@Override
	public Map<String, Integer> obtenerLlamadasFamilia(String fechaInicio, String fechaFinal, String segmento) {
		return segmentoDao.obtenerLlamadasFamilia(fechaInicio, fechaFinal, segmento);
	}

	@Override
	public Map<String, Integer> obtenerLLamadasServicio(String fechaInicio, String fechaFinal, String segmento) {
		return segmentoDao.obtenerLLamadasServicio(fechaInicio, fechaFinal, segmento);
	}

	@Override
	public Map<String, Integer> obtenerLlamadasTotalesFamiliasSegmento(String fechaInicio, String fechaFinal,
			String segmento) {
		return segmentoDao.obtenerLlamadasTotalesFamiliasSegmento(fechaInicio, fechaFinal, segmento);
	}

	@Override
	public String obtenerLlamadasTotalesSegmentoComparacion(String fechaInicioOriginal, String fechaFinalOriginal,
			String fechaInicio, String fechaFinal) {
		Gson gson = new Gson();

		Map<String, List<Integer>> listadoTotales = new HashMap<String, List<Integer>>();

		Map<String, Integer> totalesLlamadasOriginal = new HashMap<String, Integer>();
		Map<String, Integer> totalesLlamadasComparativo = new HashMap<String, Integer>();

		totalesLlamadasOriginal = segmentoDao.obtenerLlamadasTotalesSegmentos(fechaInicioOriginal, fechaFinalOriginal);
		totalesLlamadasComparativo = segmentoDao.obtenerLlamadasTotalesSegmentos(fechaInicio, fechaFinal);

		int tamanoOriginal = totalesLlamadasOriginal.size();
		int tamanoComparativo = totalesLlamadasComparativo.size();

		if (tamanoOriginal >= tamanoComparativo) {

			if (tamanoComparativo == 0) {
				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();

					List<Integer> totales1 = new ArrayList<Integer>();
					totales1.add(valorO);
					totales1.add(0);
					listadoTotales.put(llaveO, totales1);
				}
			} else {
				int cont = 0;
				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();
					for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
						cont = cont + 1;

						String llaveC = entryC.getKey();
						Integer valorC = entryC.getValue();

						if (llaveO.equals(llaveC)) {
							List<Integer> totales1 = new ArrayList<Integer>();
							totales1.add(valorO);
							totales1.add(valorC);
							listadoTotales.put(llaveC, totales1);
						} else {
							Integer busqueda = totalesLlamadasComparativo.get(llaveO);
							if (busqueda == null) {
								List<Integer> totales2 = new ArrayList<Integer>();
								totales2.add(valorO);
								totales2.add(0);

								listadoTotales.put(llaveO, totales2);
								cont = 0;
							}
						}
					}
				}
				
				for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
					String llaveC = entryC.getKey();
					Integer valorC = entryC.getValue();
					Integer busqueda = totalesLlamadasOriginal.get(llaveC);
					if(busqueda == null){
						List<Integer> totales2 = new ArrayList<Integer>();
						totales2.add(0);
						totales2.add(valorC);
						listadoTotales.put(llaveC, totales2);
					}
				}
				
			}

		} else {
			if (tamanoOriginal == 0) {
				for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
					String llaveC = entryC.getKey();
					Integer valorC = entryC.getValue();
					List<Integer> totales1 = new ArrayList<Integer>();
					totales1.add(0);
					totales1.add(valorC);

					listadoTotales.put(llaveC, totales1);
				}
			}

			int cont = 0;
			for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
				String llaveC = entryC.getKey();
				Integer valorC = entryC.getValue();

				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					cont = cont + 1;
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();
					if (llaveC.equals(llaveO)) {

						List<Integer> totales1 = new ArrayList<Integer>();
						totales1.add(valorO);
						totales1.add(valorC);

						listadoTotales.put(llaveO, totales1);
					} else {
						Integer busqueda = totalesLlamadasOriginal.get(llaveC);
						if (busqueda == null) {
							List<Integer> totales2 = new ArrayList<Integer>();
							totales2.add(0);
							totales2.add(valorC);

							listadoTotales.put(llaveC, totales2);
							cont = 0;
						}
					}
				}
			}
			
			
			for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
				String llaveO = entryO.getKey();
				Integer valorO = entryO.getValue();
				Integer busqueda = totalesLlamadasComparativo.get(llaveO);
				if(busqueda == null){
					List<Integer> totales2 = new ArrayList<Integer>();
					totales2.add(valorO);
					totales2.add(0);
					listadoTotales.put(llaveO, totales2);
				}
			}
			

		}
		String json = gson.toJson(listadoTotales);
		return json;
	}

	@Override
	public Map<String, Integer> obtenerClientesFrecuentes(String fechaInicio, String fechaFinal, String segmento) {
		return segmentoDao.obtenerClientesFrecuentes(fechaInicio, fechaFinal, segmento);
	}

	@Override
	public String obtenerLlamadasTotalesFamiliasSegmentoComparacion(String fechaInicioOriginal,
			String fechaFinalOriginal, String fechaInicio, String fechaFinal, String segmento) {
		Gson gson = new Gson();

		Map<String, List<Integer>> listadoTotales = new HashMap<String, List<Integer>>();

		Map<String, Integer> totalesLlamadasOriginal = new HashMap<String, Integer>();
		Map<String, Integer> totalesLlamadasComparativo = new HashMap<String, Integer>();

		totalesLlamadasOriginal = segmentoDao.obtenerLlamadasTotalesFamiliasSegmento(fechaInicioOriginal,
				fechaFinalOriginal, segmento);
		totalesLlamadasComparativo = segmentoDao.obtenerLlamadasTotalesFamiliasSegmento(fechaInicio, fechaFinal,
				segmento);
		
		int tamanoOriginal = totalesLlamadasOriginal.size();
		int tamanoComparativo = totalesLlamadasComparativo.size();

		if (tamanoOriginal >= tamanoComparativo) {
			if (tamanoComparativo == 0) {
				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();

					List<Integer> totales1 = new ArrayList<Integer>();
					totales1.add(valorO);
					totales1.add(0);
					listadoTotales.put(llaveO, totales1);
				}
			} else {
				int cont = 0;
				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();
					for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
						cont = cont + 1;

						String llaveC = entryC.getKey();
						Integer valorC = entryC.getValue();

						if (llaveO.equals(llaveC)) {
							List<Integer> totales1 = new ArrayList<Integer>();
							totales1.add(valorO);
							totales1.add(valorC);
							listadoTotales.put(llaveC, totales1);
						} else {
							Integer busqueda = totalesLlamadasComparativo.get(llaveO);
							if (busqueda == null) {
								List<Integer> totales2 = new ArrayList<Integer>();
								totales2.add(valorO);
								totales2.add(0);

								listadoTotales.put(llaveO, totales2);
								cont = 0;
							}
						}
					}
				}
				
				for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
					String llaveC = entryC.getKey();
					Integer valorC = entryC.getValue();
					Integer busqueda = totalesLlamadasOriginal.get(llaveC);
					if(busqueda == null){
						List<Integer> totales2 = new ArrayList<Integer>();
						totales2.add(0);
						totales2.add(valorC);
						listadoTotales.put(llaveC, totales2);
					}
					
				}
				
			}
		} else {
			if (tamanoOriginal == 0) {
				for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
					String llaveC = entryC.getKey();
					Integer valorC = entryC.getValue();
					List<Integer> totales1 = new ArrayList<Integer>();
					totales1.add(0);
					totales1.add(valorC);

					listadoTotales.put(llaveC, totales1);
				}
			}

			int cont = 0;
			for (Map.Entry<String, Integer> entryC : totalesLlamadasComparativo.entrySet()) {
				String llaveC = entryC.getKey();
				Integer valorC = entryC.getValue();

				for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
					cont = cont + 1;
					String llaveO = entryO.getKey();
					Integer valorO = entryO.getValue();
					if (llaveC.equals(llaveO)) {

						List<Integer> totales1 = new ArrayList<Integer>();
						totales1.add(valorO);
						totales1.add(valorC);

						listadoTotales.put(llaveO, totales1);
					} else {
						Integer busqueda = totalesLlamadasOriginal.get(llaveC);
						if (busqueda == null) {
							List<Integer> totales2 = new ArrayList<Integer>();
							totales2.add(0);
							totales2.add(valorC);
							
							listadoTotales.put(llaveC, totales2);
							cont = 0;
						}
					}
				}
			}
			
			
			for (Map.Entry<String, Integer> entryO : totalesLlamadasOriginal.entrySet()) {
				String llaveO = entryO.getKey();
				Integer valorO = entryO.getValue();
				Integer busqueda = totalesLlamadasComparativo.get(llaveO);
				if(busqueda == null){
					List<Integer> totales2 = new ArrayList<Integer>();
					totales2.add(valorO);
					totales2.add(0);
					listadoTotales.put(llaveO, totales2);
				}
			}
			
		}

		String json = gson.toJson(listadoTotales);
		return json;
	}

}
