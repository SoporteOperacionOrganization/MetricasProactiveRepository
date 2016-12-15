package com.metricas.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.metricas.model.Usuario;

@Repository
public class UsuarioDaoImpl implements UsuarioDao {

	@Autowired
	private SessionFactory sessionFactoryLogin;
	
	private Session session;
	private Query query;
	
	@Override
	public List<Usuario> obtenerUsuarios() {
		List<Usuario> usuarios = new ArrayList<Usuario>();
		session = sessionFactoryLogin.getCurrentSession();
		query = session.createQuery("FROM Usuario");
		usuarios = query.list();
		for(Usuario usuario:usuarios){
			Hibernate.initialize(usuario.getArea());
		}
		for(Usuario usuario:usuarios){
			Hibernate.initialize(usuario.getSegmento());
		}
		return usuarios;
	}

	@Override
	public Usuario obtenerUsuarioPorSoeid(String soeid){
		session = sessionFactoryLogin.getCurrentSession();
		List<Usuario> userList = new ArrayList<Usuario>();
		query = session.createQuery("FROM Usuario u where u.soeid = :soeid");
		query.setParameter("soeid", soeid);
		userList = query.list();
		if(userList.size() > 0){
			return userList.get(0);
		}else{
			return null;
		}
	}
	
}
