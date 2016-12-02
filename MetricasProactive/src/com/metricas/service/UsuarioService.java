package com.metricas.service;

import java.util.List;

import com.metricas.model.Usuario;

public interface UsuarioService {

	public List<Usuario> obtenerUsuarios();
	
	public Usuario obtenerUsuarioPorSoeid(String soeid);
	
}
