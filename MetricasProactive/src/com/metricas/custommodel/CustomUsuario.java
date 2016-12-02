package com.metricas.custommodel;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;

import com.metricas.model.Segmento;

public class CustomUsuario extends org.springframework.security.core.userdetails.User{

	private String nombre;
	private String apellidoPaterno;
	Set<Segmento> segmentos;
	
	public CustomUsuario(
			 String username, 
			 String password, 
			 boolean enabled, 
			 boolean accountNonExpired,
			 boolean credencialesExpiradas, 
			 boolean accountNonLocked,
			 Collection<? extends GrantedAuthority> authorities,
			 Set<Segmento> segmentos,
			 String nombre, 
			 String apellidoPaterno) {
		super(username, password, enabled, accountNonExpired, credencialesExpiradas,
		accountNonLocked, authorities);

		this.setNombre(nombre);
		this.setApellidoPaterno(apellidoPaterno);
		this.setSegmentos(segmentos);
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getApellidoPaterno() {
		return apellidoPaterno;
	}
	public void setApellidoPaterno(String apellidoPaterno) {
		this.apellidoPaterno = apellidoPaterno;
	}
	public Set<Segmento> getSegmentos(){
		return segmentos;
	}
	public void setSegmentos(Set<Segmento> segmentos){
		this.segmentos=segmentos;
	}
}
