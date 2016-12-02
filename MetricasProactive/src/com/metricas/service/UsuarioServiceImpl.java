package com.metricas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.metricas.dao.UsuarioDao;
import com.metricas.model.Usuario;

@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService{

	@Autowired
	private UsuarioDao usuarioDao;
	
	@Override
	public List<Usuario> obtenerUsuarios() {
		return usuarioDao.obtenerUsuarios();
	}

	@Override
	public Usuario obtenerUsuarioPorSoeid(String soeid) {
		return usuarioDao.obtenerUsuarioPorSoeid(soeid);
	}
	
}
