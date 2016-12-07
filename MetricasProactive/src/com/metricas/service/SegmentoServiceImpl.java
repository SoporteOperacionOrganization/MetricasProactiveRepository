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
	public Map<String,Integer> obtenerLlamadasTotalesSegmentos() {
		return segmentoDao.obtenerLlamadasTotalesSegmentos();
	}

}
