package com.metricas.dao;

import java.util.List;

import com.metricas.model.Usuario;

public interface UsuarioDao {

	public List<Usuario> obtenerUsuarios();
	
	public Usuario obtenerUsuarioPorSoeid(String soeid);
	
}
